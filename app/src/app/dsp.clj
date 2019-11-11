(ns app.dsp
  (:require
   [clojure.java.shell :as sh]))


;; https://github.com/lpil/sonic-pi-tool


(defn init! [sonic-pi-tool-path filepath]
  (prn "eval-file result::" (sh/sh "bash" "-c" (str sonic-pi-tool-path " eval-file " filepath)))
  sonic-pi-tool-path)


(defn halt! [sonic-pi-tool-path]
  (sh/sh "bash" "-c" (str sonic-pi-tool-path " stop")))


;; Start and stop a given script
(comment
  (def bin-path "./resources/sonic-pi-tool")
  (init! bin-path "./resources/looper.rb")
  (halt! bin-path "./resources/sonic-pi-tool"))
