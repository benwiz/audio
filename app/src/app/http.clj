(ns app.http
  (:require
   [aleph.http :as http]
   [byte-streams :as bs]
   [clojure.core.async :refer [>!!]]
   [jsonista.core :as j]))

(defn handler [chan]
  (fn [req]
    (let [message (-> req
                      :body
                      bs/to-string
                      j/read-value
                      (get "arr")
                      second)]
      ;; Send message
      (>!! chan
           {:msg-type :osc
            :msg      "/looper/kick"})
      ;; http response
      {:status  200
       :headers {"content-type"                 "application/json"
                 "Access-Control-Allow-Origin"  "*"
                 "access-control-allow-methods" [:get :put :post :delete]}
       :body    (j/write-value-as-string
                 {:status "success"})})))

(defn start-server [{:keys [chan]}]
  (http/start-server (handler chan) {:port 8080}))
