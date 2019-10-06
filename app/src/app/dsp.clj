(ns app.dsp
  (:require
   [clojure.java.shell :as sh]))


;; https://github.com/lpil/sonic-pi-tool


(defn init [sonic-pi-tool-path filepath]
  (sh/sh sonic-pi-tool-path "eval-file" filepath)
  sonic-pi-tool-path)


(defn halt! [sonic-pi-tool-path]
  (sh/sh sonic-pi-tool-path "stop"))


(comment
  (init! "./resources/sonic-pi-tool" "./resources/looper.rb")
  (halt! "./resources/sonic-pi-tool"))
