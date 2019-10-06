(ns user
  (:require
   [clojure.tools.namespace.repl :refer [refresh]]
   [app.system :as system]
   [clojure.core.async :refer [>!!]]))


(defonce s (atom nil))


(defn init []
  (swap! s (fn [_] (system/init)))
  nil)


(defn halt! []
  (system/halt! @s))


(defn reset []
  (halt!)
  (refresh :after 'user/init))


(defn simulate-dsp->app-msg [system msg]
  (>!! (:chan/dsp->app @system) {:msg-type :osc :msg msg}))


(defn simulate-app->dsp-msg [system msg]
  (>!! (:chan/app->dsp @system) {:msg-type :osc :msg msg}))


(comment
  @s

  ;; These go to the reitit router
  (simulate-dsp->app-msg s "/app/ticke")

  ;; These go to sonic pi
  (simulate-app->dsp-msg s "/looper/kick")
  (simulate-app->dsp-msg s "/looper/bpm")

  )
