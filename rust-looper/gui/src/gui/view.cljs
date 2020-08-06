(ns gui.view
  (:require
   ["react" :as react]
   [crinkle.dom :as d]
   [crinkle.component :refer [CE RE]]
   [clojure.string :as str]))

(def url "http://localhost:8000/trigger")
(def space-keycode 32)

(def style
  #js{:height          "250px"
      :width           "100%"
      :backgroundColor "#FFDDDD"
      :margin          "20px"})

(defn trigger [_]
  (d/div {:style     style
          :className "pressed"
          :tabIndex  "1" ;; Necessary to allow the div to be "selected"
          :onKeyDown (fn [e]
                       (when (= space-keycode (.. e -keyCode))
                         (.then (js/fetch url)
                                (fn [response]
                                  (js/console.log response)
                                  (when-not (= 200 (.-status response))
                                    (js/console.log "Error!!"))))))}
         "Select this div, then press SPACE to send the trigger"))

(defn app []
  (d/div nil
         (CE trigger {})))
