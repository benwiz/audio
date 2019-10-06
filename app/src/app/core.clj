(ns app.core
  (:require
   [app.osc :as osc]
   [clojure.core.async :refer [chan pub sub >!! <! go-loop]]
   [reitit.core :as r])
  (:gen-class))


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
