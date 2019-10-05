(ns app.osc.core
  (:require
   [clojure.core.async :refer :all]
   [overtone.osc :as osc]
   [clojure.java.io :as io]))

;; TODO: Subscribe to messages that need to be sent to the dsp
;; TODO: Receive messages from the dsp


(defn app->dsp [client in]
  (let [out (chan)
        p   (pub in :msg-type)]
    (sub p :osc out)
    (go-loop []
      (let [{:keys [msg-type msg]} (<! in)]
        (osc/osc-send client msg))
      (recur))))


(comment
  (def config (-> (clojure.java.io/resource "config.edn") slurp clojure.edn/read-string))
  config

  (def client (osc/osc-client (:dsp-osc-host config) (:dsp-osc-port config)))
  (def in (chan))
  (app->dsp client in)
  (>!! in {:msg-type :osc :msg "/looper/kick"})
  )




;; Pub Sub
(comment
  (def input-chan (chan))
  (def our-pub (pub input-chan :msg-type))

  (>!! input-chan {:msg-type :greeting :text "hello"})

  (def output-chan (chan))
  (sub our-pub :greeting output-chan)

  (go-loop []
    (let [{:keys [text]} (<! output-chan)]
      (println text)
      (recur)))

  (>!! input-chan {:msg-type :greeting :text "hello!!!"})

  (let [c (chan)]
    (sub our-pub :greeting c)
    (go-loop []
      (let [{:keys [msg-type text]} (<! c)]
        (println text))
      (recur)))

  (>!! input-chan {:msg-type :greeting :text "hola"})

  (def loser-chan (chan))
  (sub our-pub :loser loser-chan)
  (>!! input-chan {:msg-type :loser :text "I won't be accepted"})
  ;; still returns true
  ;; the moral is: a channel must actually consume (<!) messages

  ;; https://github.com/clojure/core.async/wiki/Pub-Sub

  )

;; OSC
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
