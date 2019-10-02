# guitar-looper

## Architecture

- dsp (maybe run in docker, but probably not)
  - a ruby sonic pi file that is run with sonic-pi-tool
  - manage this with a bash script
- app (maybe run in docker)
  - ns: `osc-listener` consumes osc messages from the dsp and publishes them to the _osc:in_ channel
  - ns: `osc-sender` subscribes to the _osc:out_ and forwards the messages to the dsp over osc
  - ns: `gui` is a react app that consumes info from the _osc:in_ channel and publishes to the _osc:out_ channel
  - ns: `pi` interfaces with the raspberry pi and consumes from _osc:in_ and publishes to _osc:out_
    - https://github.com/dvlopt/clojure-raspberry-pi

- Rather than introduce a message queue, `osc server`, `gui`, and `hardware interface` should all be part of the same jar and leverage clojure.async. There is no need to separate since they are not scaling and will all exist on the same local hardware.
