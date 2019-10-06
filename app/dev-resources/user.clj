(ns user
  (:require
   [clojure.tools.namespace.repl :refer [refresh]]
   [app.system :as system]))


(def s (atom nil))


(defn init []
  (swap! s (fn [_] (system/init)))
  nil)


(defn halt! []
  (system/halt! @s))


(defn reset []
  (halt!)
  (refresh :after 'user/init))
