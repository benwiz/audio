(ns app.core
  (:require
   [app.osc :as osc]
   [clojure.core.async :refer [chan pub sub >!! <! go-loop]])
  (:gen-class))


;; TODO: Use Integrant, it will speed up development (use a system.clj)
;; TODO: Send "/looper/api/echo" to dsp and print the response (sonic pi file will need to be updated)
;; TODO: Plan out osc messages and apis better
;; TODO: The ruby file and clojure stuff should both read from the same config file for api routes


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


(defn init [dsp->app-chan app->dsp-chan]
  (let [config (-> (clojure.java.io/resource "config.edn") slurp clojure.edn/read-string)
        server (osc/osc-server (:app-osc-port config))
        client (overtone.osc/osc-client (:dsp-osc-host config) (:dsp-osc-port config))]
    (osc/dsp->app server dsp->app-chan)
    (dsp-listener dsp->app-chan)

    (osc/app->dsp client app->dsp-chan)))

(comment
  (def config (-> (clojure.java.io/resource "config.edn") slurp clojure.edn/read-string))

  ;; Send messages (and get api responses)
  (def dsp->app-chan (chan))
  (def app->dsp-chan (chan))
  (init dsp->app-chan app->dsp-chan)
  (>!! app->dsp-chan {:msg-type :osc :msg "/looper/kick"})
  (>!! app->dsp-chan {:msg-type :osc :msg "/looper/api/echo"})


  )
