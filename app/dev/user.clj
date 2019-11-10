(ns user
  (:require
   [app.system :as system]))

(def s (atom nil))

(defn start []
  (reset! s (system/init)))

(defn stop []
  (system/halt! @s))

(comment
  (start)
  (stop)
  @s
  )
