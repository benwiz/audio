(ns gui.view
  (:require
   ["react" :as react]
   [crinkle.dom :as d]
   [crinkle.component :refer [CE RE fragment keyed-fragment]]
   [clojure.string :as str]))

(def style
  #js{:height          "250px"
      :width           "100%"
      :backgroundColor "#FFDDDD"
      :margin "20px"})

(defn trigger [message]
  (d/div {:style     style
          :className "pressed"
          :tabIndex  "1"
          :onKeyDown (fn [e]
                       (when (= 32 (.. e -keyCode)) ;; space
                         (js/console.log message)
                         (.then (js/fetch "http://localhost:8000/trigger"
                                          #_#js{:method "POST"
                                                :body   (.stringify
                                                         js/JSON
                                                         {:message message})})
                                (fn [response]
                                  (when-not (= 200 (.-status response))
                                    (js/console.log "Error!!"))
                                  #_(js/console.log response)))))}
         message))

(defn app []
  (d/div nil
         (trigger "/looper/kick")
         #_(trigger "/looper/master")))
