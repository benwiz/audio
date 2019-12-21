# guitar-looper

- dsp
  - a rust application that handles audio and exposes http api for controls
- gui
  - clojurescript react app

## To Do

- playback loop (make this a part of main loop, for now)
  - NOTE: start off using rodio because it provides a lot of nice options, only if it doesn't work nicely try to implement directly using Hount and CPAL (should not be too bad since I can look at Rodio source code)
  - case
    - not recording && recording.wav exists
      - play recording.wav
    - recording
      - stop playback

## To Do Later

- Metronome
- Metronome sync
- Multiple loop playback
- Can I use in-memory wav files? Is that even necessary?
  - Maybe it makes sense to try this out before I add multi loop playback to see if there is any noticable speed difference
