(ns app.osc.core
  (:require [overtone.osc :as osc]
            [clojure.core.async :as a]))

;; TODO: Create topic
;; First, do the following tutorial in a comment
;; https://github.com/clojure/core.async/wiki/Pub-Sub

(defn server [port]
  (osc-server port))

(comment
  ;; Client
  (def client (osc/osc-client "localhost" 4559))

  (osc/osc-send client "/looper/kick")
  (osc/osc-send client "/looper/metronome-on")
  (osc/osc-send client "/looper/metronome-off")

  (osc/osc-send client "/looper/start")
  (osc/osc-send client "/looper/stop")
  (osc/osc-send client "/looper/play")
  (osc/osc-send client "/looper/pause")

  (osc/osc-send client "/looper/delete")

  (do
    (osc/osc-send client "/looper/start")
    (Thread/sleep 3000)
    (osc/osc-send client "looper/stop"))

  ;; Server
  (def server (osc/osc-server 9800))

  (osc/osc-listen server (fn [msg] (println "Listener: " msg)) :debug)
  (osc/osc-rm-listener server :debug)

  (osc/osc-handle s "/foo/bar" (fn [msg] (println "Handler for /foo/bar: " msg)))
  (osc/osc-rm-handler s "/foo/bar")
  (osc/osc-rm-all-handlers server "/foo")

  ;; https://github.com/rosejn/osc-clj#osc-bundles

  )
