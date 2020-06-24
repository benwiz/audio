# guitar-looper

## What

Record and loop live audio in realtime.

## Why

To learn rust and create a looper to ues with my guitar.

## Status

Progress halted because of challenges with realtime audio io on raspberry pi. See [bela-dsp](../bela-dsp) for continuation.

### Retrospective

Rust worked excellently, I would do it again but need more experience with the physical io.

## How

- dsp
  - a rust application that handles audio and exposes http api for controls
- gui
  - clojurescript react app

## To Do

- Figure out logging, I am worried printing to stdout will cause slowdowns
- Code cleanup
  - Functionalize writer creation
  - Split the huge main into smaller functions

- Metronome
- Metronome sync
- Multiple loop playback
- Can I use in-memory wav files? Is that even necessary?
  - Maybe it makes sense to try this out before I add multi loop playback to see if there is any noticable speed difference
