(ns app.handlers
  "Route handlers for requests to the app")


(defn default []
  (prn "Default handler"))


(defn tick []
  ;; Here, I could, for example, toggle an LED or a UI component
  ;; to act like a metronome
  (prn "Tick"))
