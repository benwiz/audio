(ns app.core
  (:require
   [app.osc.core :as osc]
   [clojure.core.async :refer [chan pub sub >!! <! go-loop]])
  (:gen-class))

;; TODO: Send "/looper/kick" to dsp from comment in this file
;; TODO: Send "/looper/api/echo" to dsp and print the response (sonic pi file will need to be updated)
;; TODO: Use Integrant, it will speed up development
;; TODO: Plan out osc messages and apis better


(defn router [{:keys [path args]}] ;; eventually, maybe use reitit
  (case path
    "/foo/bar" (println "foo bar")
    (println "default")))


(defn dsp-listener [in]
  (let [out (chan)
        p   (pub in :msg-type)]
    (sub p :osc out)
    (go-loop []
      (let [{:keys [msg-type msg]} (<! out)]
        (router msg))
      (recur))))


(defn -main []
  (let [config (-> (clojure.java.io/resource "config.edn") slurp clojure.edn/read-string)
        server (osc/osc-server (:app-osc-port config))
        in (chan)]
    (osc/dsp->app server in)
    (dsp-listener in)))

(comment
  ;; Test the above
  (def client (overtone.osc/osc-client "localhost" (:app-osc-port config)))
  (overtone.osc/osc-send client "/foo/bar")
  (overtone.osc/osc-send client "/foo/baz")

  )
