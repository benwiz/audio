(ns gui.view
  (:require
   ["react" :as react]
   [crinkle.dom :as d]
   [crinkle.component :refer [CE RE fragment keyed-fragment]]
   [clojure.string :as str]))

(def style
  #js{:height          "500px"
      :width           "100%"
      :backgroundColor "#FFDDDD"})

(defn app []
  (d/div {:style     style
          :className "pressed"
          :tabIndex  "1"
          :onKeyDown (fn [e]
                       (when (= 32 (.. e -keyCode)) ;; space
                         (js/console.log "hit" #_(.random js/Math))
                         (.then (js/fetch "http://localhost:8080/")
                                (fn [response]
                                  (if-not (= 200 (.-status response))
                                    (js/console.log "Error!!"))
                                  (js/console.log response)))))}
         "Click this this box to start (this text wont change). Then press SPACE to trigger an osc command."))
