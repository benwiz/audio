(ns app.osc
  (:require
   [clojure.core.async :refer [chan pub sub >!! <! go-loop]]
   [overtone.osc :as osc]
   [clojure.java.io :as io]
   [reitit.core :as r]
   [clojure.edn :as edn]))


(defn client [host port]
  (osc/osc-client host port))


(defn server [port]
  (osc/osc-server port))


(defn close [v]
  ;; For some reason the first time this is called,
  ;; it throws an IOException. So try to close it
  ;; again and catch that if it throws an exception
  ;; (it shouldn't).
  (try
    (osc/osc-close v)
    (catch java.io.IOException e
      (try
        (osc/osc-close v)
        (catch java.io.IOException e
          (prn "level 2 IOException")
          nil)))))


(defn app->dsp
  "Sink that receives interal messages and forwards
   them to the dsp server."
  [client in]
  (let [out (chan)
        p   (pub in :msg-type)]
    (sub p :osc out)
    (go-loop []
      (let [{:keys [msg-type msg]} (<! out)]
        (osc/osc-send client msg))
      (recur))))


(defn dsp->app
  "Receive osc messages from dsp server and send
   to app message"
  [server in]
  (osc/osc-listen server
                  (fn [msg]
                    ;; WARNING: This is blocking without a receiver
                    (>!! in {:msg-type :osc
                             :msg      (select-keys msg [:path :args])}))))

(def ^:private router
  (r/router
   (mapv (fn [[path {:keys [handler]}]]
           [path {:handler @(requiring-resolve handler)}])
         ;; TODO: Figure out how to use the integrant key :routes instead
         ;; of re-reading routes.edn here
         (-> "routes.edn" io/resource slurp edn/read-string :app))))


(defn- route [path]
  ;; TODO: Handle route not found (r will be nil)
  (let [r       (r/match-by-path router path)
        data    (:data r)
        handler (:handler data)]
    (handler)))


(defn dsp-msg-sink [in]
  (let [out (chan)
        p   (pub in :msg-type)]
    (sub p :osc out)
    (go-loop []
      (let [{:keys [msg-type msg]} (<! out)]
        (route msg))
      (recur))))
