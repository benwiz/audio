#![feature(proc_macro_hygiene, decl_macro)]

extern crate failure;
extern crate cpal;
extern crate hound;
#[macro_use] extern crate rocket;

use std::fs;
use std::io::Error;
use std::io::BufReader;
use cpal::traits::{DeviceTrait, EventLoopTrait, HostTrait};
use rocket::State;
use std::sync::{Arc, Mutex};
use std::sync::atomic::{Ordering, AtomicBool, AtomicI32};
use rodio::Source;

const LATENCY_MS: f32 = 20.0;
const PATH: &'static str = concat!(env!("CARGO_MANIFEST_DIR"), "/recordings");

struct AppState {
    status: AtomicBool,
    count: AtomicI32,
    writer: Mutex<std::option::Option<hound::WavWriter<std::io::BufWriter<std::fs::File>>>>,
}

fn sample_format(format: cpal::SampleFormat) -> hound::SampleFormat {
    match format {
        cpal::SampleFormat::U16 => hound::SampleFormat::Int,
        cpal::SampleFormat::I16 => hound::SampleFormat::Int,
        cpal::SampleFormat::F32 => hound::SampleFormat::Float,
    }
}

fn wav_spec_from_format(format: &cpal::Format) -> hound::WavSpec {
    hound::WavSpec {
        channels: format.channels as _,
        sample_rate: format.sample_rate.0 as _,
        bits_per_sample: (format.data_type.sample_size() * 8) as _,
        sample_format: sample_format(format.data_type),
    }
}

#[get("/trigger")]
fn trigger(app_state: State<Arc<AppState>>) -> String {
    let curr_status = app_state.status.load(Ordering::Relaxed);
    let curr_count = app_state.count.load(Ordering::Relaxed);

    println!("current status: {}", curr_status);
    println!("current count: {}", curr_count);

    let response = match curr_status {
        true => {
            // Stop recording
            app_state.status.store(false, Ordering::Relaxed);
            // Finalize the wav file
            app_state.writer.lock().unwrap().take().unwrap().finalize().expect("Error finalizing writer"); // stop wav writer
            // Increment count
            app_state.count.store(curr_count + 1, Ordering::Relaxed);
            // Http response
            "stop recording"
        },
        false => {
            match curr_count {
                0 => {
                    // Start recording
                    app_state.status.store(true, Ordering::Relaxed);
                    // Http response
                    "start new recording"
                },
                _ => {
                    // Delete all recordings
                    let recordings_dir = fs::read_dir(PATH);
                    delete_dir_contents(recordings_dir);
                    // Update count to 0
                    app_state.count.store(0, Ordering::Relaxed);
                    // Create a new writer (this creates the new file; when I'm not always
                    //  deleting the one file, I'll want to create the new writer after
                    //  stopping the recording and take the filename from the curr_count)
                    // TODO: Handle the repeated boilerplate code better
                    let host = cpal::default_host();
                    let input_device = host.default_input_device().expect("failed to get default input device");
                    let mut format = input_device.default_input_format().expect("failed to get format from input device");
                    format.data_type = cpal::SampleFormat::F32;
                    let spec = wav_spec_from_format(&format);
                    let filepath = PATH.to_owned() + "/0.wav"; // for now, always 0.wav
                    let writer = hound::WavWriter::create(filepath, spec).expect("could not create new writer");
                    *app_state.writer.lock().unwrap() = Some(writer);
                    // Http response
                    "delete recordings"
                },
            }
        },
    };

    // Http response
    format!("{}", response)
}

fn server(app_state: Arc<AppState>) {
    rocket::ignite()
        .manage(app_state)
        .mount("/", routes![trigger])
        .launch();
}

fn create_dir(path: &'static str) {
    fs::create_dir_all(path).expect("Failed to create dir");
}

fn delete_dir_contents(read_dir_res: Result<fs::ReadDir, Error>) {
    if let Ok(dir) = read_dir_res {
        for entry in dir {
            if let Ok(entry) = entry {
                let path = entry.path();
                if path.is_dir() {
                    fs::remove_dir_all(path).expect("Failed to remove a dir");
                } else {
                    fs::remove_file(path).expect("Failed to remove a file");
                }
            };
        }
    };
}

fn main() -> Result<(), failure::Error> {
    // Create the recordings dir incase it doesn't exist
    create_dir(PATH);

    // Empty the recordings dir
    let recordings_dir = fs::read_dir(PATH);
    delete_dir_contents(recordings_dir);

    // Get audio host and audio event loop
    let host = cpal::default_host();
    let event_loop = host.event_loop();

    // List devices
    println!("Devices:");
    let devices = host.devices()?;
    for (device_index, device) in devices.enumerate() {
        println!("  {}. \"{}\"", device_index, device.name()?);
    }

    // Default devices.
    let input_device = host.default_input_device().expect("failed to get default input device");
    let output_device = host.default_output_device().expect("failed to get default output device");
    println!("Using default input device: \"{}\"", input_device.name()?);
    println!("Using default output device: \"{}\"", output_device.name()?);

    // We'll try and use the same format between streams to keep it simple
    let mut format = input_device.default_input_format()?;
    format.data_type = cpal::SampleFormat::F32;

    // Build streams.
    println!("Attempting to build both streams with `{:?}`.", format);
    let input_stream_id = event_loop.build_input_stream(&input_device, &format)?;
    let output_stream_id = event_loop.build_output_stream(&output_device, &format)?;
    println!("Successfully built streams.");

    // Create a delay in case the input and output devices aren't synced.
    let latency_frames = (LATENCY_MS / 1_000.0) * format.sample_rate.0 as f32;
    let latency_samples = latency_frames as usize * format.channels as usize;

    // The channel to share samples.
    let (tx, rx) = std::sync::mpsc::sync_channel(latency_samples * 2);

    // Fill the samples with 0.0 equal to the length of the delay.
    for _ in 0..latency_samples {
        tx.send(0.0)?;
    }

    // Play the streams.
    println!("Starting the input and output streams with `{}` milliseconds of latency.", LATENCY_MS);
    event_loop.play_stream(input_stream_id.clone())?;
    event_loop.play_stream(output_stream_id.clone())?;

    // The WAV file we're recording to.
    let spec = wav_spec_from_format(&format);
    let filepath = PATH.to_owned() + "/0.wav"; // for now, always 0.wav
    let writer = hound::WavWriter::create(filepath, spec)?;

    // Initialize app state
    let app_state = Arc::new(AppState {
        status: AtomicBool::new(false),
        count: AtomicI32::new(0),
        writer: Mutex::new(Some(writer)),
    });
    let app_state_clone = app_state.clone();
    let app_state_clone_2 = app_state.clone();

    // Run the event loop on a separate thread.
    std::thread::spawn(move || {
        event_loop.run(move |id, result| {
            let data = match result {
                Ok(data) => data,
                Err(err) => {
                    eprintln!("an error occurred on stream {:?}: {}", id, err);
                    return;
                }
            };

            match data {
                cpal::StreamData::Input { buffer: cpal::UnknownTypeInputBuffer::F32(buffer) } => {
                    assert_eq!(id, input_stream_id);
                    let mut output_fell_behind = false;

                    let recording_status = app_state_clone.status.load(Ordering::Relaxed);
                    // println!("recording: {:?}", recording_status);

                    // Write to file (NOTE: iterating through the buffer 2x is not ideal, this is a problem for later)
                    if recording_status {
                        if let Ok(mut guard) = app_state_clone.writer.try_lock() {
                            if let Some(writer) = guard.as_mut() {
                                for &sample in buffer.iter() {
                                    writer.write_sample(sample).ok();
                                }
                            }
                        }
                    }

                    // Write to output stream
                    for &sample in buffer.iter() {
                        if tx.try_send(sample).is_err() {
                            output_fell_behind = true;
                        }
                    }
                    if output_fell_behind {
                        eprintln!("output stream fell behind: try increasing latency");
                    }
                },
                cpal::StreamData::Output { buffer: cpal::UnknownTypeOutputBuffer::F32(mut buffer) } => {
                    assert_eq!(id, output_stream_id);
                    let mut input_fell_behind = None;
                    for sample in buffer.iter_mut() {
                        *sample = match rx.try_recv() {
                            Ok(s) => s,
                            Err(err) => {
                                input_fell_behind = Some(err);
                                0.0
                            },
                        };
                    }
                    if let Some(err) = input_fell_behind {
                        eprintln!("input stream fell behind: {}: try increasing latency", err);
                    }
                },
                _ => panic!("we're expecting f32 data"),
            }
        });
    });

    // Play if file exists. Do this by looking at the state.count.
    let mut sink = rodio::Sink::new(&output_device);
    std::thread::spawn(move || {
        loop {
            let count = app_state_clone_2.count.load(Ordering::Relaxed);
            // println!("sink.len: {}, count: {}", sink.len(), count);
            match count {
                0 => {
                    if sink.len() > 0 {
                        sink.stop();
                    }
                },
                _ => {
                    if sink.len() == 0 {
                        // FIXME: I really don't like that I have to recreate the sink here.
                        //        When I append to a stopped sink it will append but not play.
                        sink = rodio::Sink::new(&output_device);
                        let file = std::fs::File::open(PATH.to_owned() + "/0.wav").unwrap();
                        let source = rodio::Decoder::new(BufReader::new(file)).unwrap().repeat_infinite();
                        sink.append(source);
                    }
                },
            };
        }
    });

    // Start a blocking http server
    server(app_state);

    // Never returns
    Ok(())
}
