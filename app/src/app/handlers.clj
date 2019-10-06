(ns app.handlers)


(defn default []
  (prn "Default handler"))


(defn tick []
  ;; Here, I could, for example, toggle an LED or a UI component
  ;; to act like a metronome
  (prn "Tick"))
