# guitar-looper

- dsp
  - a rust application that handles audio and exposes http api for controls
- gui
  - clojurescript react app

## To Do

- on start, remove all recordings
- on trigger
  - case
    - recording
      - stop recording
     - not recording && recording.wav exists
       - delete recording.wav
     - not recording && recording.wav does not exist
       - start recording
- playback loop (make this a part of main loop, for now)
  - case
    - not recording && recording.wav exists
      - play recording.wav
    - recording
      - stop playback
      
## To Do Later

- Metronome
- Metronome sync
- Multiple loop playback
