(ns app.core
  (:require
   [clojure.java.io :as io]
   [app.osc :as osc]
   [clojure.core.async :refer [chan pub sub >!! <! go-loop]]
   [reitit.core :as r]
   [clojure.edn :as edn])
  (:gen-class))


;; TODO: Look into starting sonic pi from clojure
;; TODO: Generate ruby routes from routes.edn
;; TODO: Send "/looper/api/echo" to dsp and print the response (sonic pi file will need to be updated)
;; TODO: Incorporate osc arguments
;; TODO: Call sonic pi ruby files from clojure


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
