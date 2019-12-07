(ns user
  (:require
   [app.dsp :as dsp]
   [app.system :as system]
   [clojure.core.async :refer [>!!]]))

(def s (atom nil))

(defn start []
  (reset! s (system/init)))

(defn stop []
  (system/halt! @s))

(defn restart []
    (do
      (stop)
      (start)))

(comment
  (start)
  (stop)
  ;; TODO: Fix restart, idk why it doesn't work
  (restart)

  @s
  (keys @s)

  (>!! (:chan/app->dsp @s)
       {:msg-type :osc
        :msg "/looper/kick"})

  (dsp/halt! "./resources/sonic-pi-tool")

  )
