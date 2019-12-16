#![feature(proc_macro_hygiene, decl_macro)]

extern crate cpal;
extern crate failure;
#[macro_use] extern crate rocket;

use cpal::traits::{DeviceTrait, EventLoopTrait, HostTrait};

const LATENCY_MS: f32 = 10.0;

fn looper() -> Result<(), failure::Error> {
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

    // Run for MAX seconds before closing.
    let seconds = std::u64::MAX;
    println!("Playing for {} seconds... ", seconds);
    std::thread::sleep(std::time::Duration::new(seconds, 0));
    println!("Done!");
    Ok(())
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
fn trigger() -> String {
    format!("hi {}", 2)
}

fn main() {
    rocket::ignite().mount("/", routes![trigger]).launch();
}
