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
  (d/div {:style style
          :className "pressed"
          :tabIndex "1"
          :onKeyDown (fn [e]
                       (js/console.log "hit" (.random js/Math))
                       #_(let [target (.. e -target)]
                         (js/console.log target)
                         (.. e -target (setAttribute "style" "height: 500px; width: 100%; background-color: #FF0000"))
                         (js/setTimeout
                          (fn []
                            (target (setAttribute "style" "height: 500px; width: 100%; background-color: #FFDDDD")))
                          500)))}
         "Click this this box to start (this text wont change). Then press any key to trigger an osc command."))
