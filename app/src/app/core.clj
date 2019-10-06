(ns app.core
  (:require
   [app.osc :as osc]
   [clojure.core.async :refer [chan pub sub >!! <! go-loop]]
   [reitit.core :as r])
  (:gen-class))


;; TODO: Use Integrant, it will speed up development (use a system.clj)
;; TODO: Generate routes from routes.edn
;; TODO: Incorporate osc arguments
;; TODO: Send "/looper/api/echo" to dsp and print the response (sonic pi file will need to be updated)
;; TODO: The ruby file and clojure stuff should both read from the same config file for api routes
;; TODO: Call sonic pi ruby files from clojure


(defn- my-handler [name]
  (println "my-handler::" name))


(defn- routes []
  [["/looper/echo" {:name :echo :handler my-handler}]
   ["/looper/foo" {:name :foo :handler my-handler}]])


(def ^:private router
  (r/router
   (routes)))


(defn- route [path]
  ;; TODO: Handle route not found
  (let [r       (r/match-by-path router path)
        data    (:data r)
        name    (:name data)
        handler (:handler data)]
    (handler name)))


(defn dsp-listener [in]
  (let [out (chan)
        p   (pub in :msg-type)]
    (sub p :osc out)
    (go-loop []
      (let [{:keys [msg-type msg]} (<! out)]
        (route msg))
      (recur))))


#_(defn- init [dsp->app-chan app->dsp-chan]
    (let [config (-> (clojure.java.io/resource "config.edn") slurp clojure.edn/read-string)
          server (osc/osc-server (:app-osc-port config))
          client (overtone.osc/osc-client (:dsp-osc-host config) (:dsp-osc-port config))]

      ;; Initialize incoming (dsp->app) communication
      (osc/dsp->app server dsp->app-chan)
      (dsp-listener dsp->app-chan)

      ;; Initialize outgoing (app->dsp) communication
      (osc/app->dsp client app->dsp-chan)))





(comment
  (def config (-> (clojure.java.io/resource "config.edn") slurp clojure.edn/read-string))

  ;; Send messages (and get api responses)
  (def dsp->app-chan (chan))
  (def app->dsp-chan (chan))
  (init dsp->app-chan app->dsp-chan)
  (>!! app->dsp-chan {:msg-type :osc :msg "/looper/kick"})
  (>!! app->dsp-chan {:msg-type :osc :msg "/looper/echo"})
  (>!! dsp->app-chan {:msg-type :osc :msg "/looper/echo"})
  (>!! dsp->app-chan {:msg-type :osc :msg "/looper/foo"})

  )
