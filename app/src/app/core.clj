(ns app.core
  (:require
   [clojure.java.io :as io]
   [app.osc :as osc]
   [clojure.core.async :refer [chan pub sub >!! <! go-loop]]
   [reitit.core :as r]
   [clojure.edn :as edn])
  (:gen-class))


;; TODO: Look into starting sonic pi from clojure
;; TODO: Figure out if Integrant can halt when something breaks during start
;; TODO: Create all routes in routes.edn
;; TODO: Generate ruby routes from routes.edn
;; TODO: Test that everything works by requesting the bpm from sonic pi and having it respond with another osc call to the app and print the current bpm
;; TODO: Incorporate osc arguments


(defn- routes []
  (mapv (fn [[path {:keys [handler]}]]
          [path {:handler @(requiring-resolve handler)}])
        (-> "routes.edn" io/resource slurp edn/read-string :app)))

(comment
  (routes))


(def ^:private router
  (r/router
   (routes)))


(defn- route [path]
  ;; TODO: Handle route not found (r will be nil)
  (let [r       (r/match-by-path router path)
        data    (:data r)
        handler (:handler data)]
    (handler)))


(defn dsp-listener [in]
  (let [out (chan)
        p   (pub in :msg-type)]
    (sub p :osc out)
    (go-loop []
      (let [{:keys [msg-type msg]} (<! out)]
        (route msg))
      (recur))))
