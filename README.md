# guitar-looper

## MacOS Setup

1. Set `BuiltIn` arregate device for input
2. Set `BuiltIn` for output
3. Follow the logs with `./bin/sonic-pi-logs.sh`
4. Start Sonic Pi server with `./bin/sonic-pi-start-server.sh`
5. Start gui with `yarn watch` inside gui dir

## Architecture

- dsp
  - a ruby sonic pi file that is run with sonic-pi-tool
- app
  - osc
    - host osc server; consume messages (from dsp); forward them to the
    - consumes osc messages from the dsp and publishes them to the _osc:in_ channel
    - subscribes to the _osc:out_ and forwards the messages to the dsp over osc
  - dsp
    - load a file into the dsp

## To Do

- Purchase parts on Amazon for buttons (don't get knobs yet)
- Purchase cigar box(es)

- Build a very simple React UI and listen for a button click, send http request to backend

- When starting Sonic Pi from the cli, it is failing to receive osc messages. It is not a big deal to use the app until then.
- Start gui with cider-jack-in-cljs, at some point
