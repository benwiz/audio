# guitar-looper

## Architecture

- single ruby file for sonic pi
- clojure osc server
- clojure webserver that utilizes the osc server
- clojure (or python if it is much easier) toolkit that interacts with raspberry pi gpio for buttons and knobs
