(ns app.http
  (:require
   [aleph.http :as http]
   [byte-streams :as bs]
   [jsonista.core :as j]))

(defn handler [req]
  (let [message (-> req
                    :body
                    bs/to-string
                    j/read-value
                    (get "arr")
                    second)]
    ;; TODO: somehow send message to osc, I believe what i need to do is put
    ;; it on the correct stream
    {:status  200
     :headers {"content-type"                 "application/json"
               "Access-Control-Allow-Origin"  "*"
               "access-control-allow-methods" [:get :put :post :delete]}
     :body    (j/write-value-as-string
               {:status "success"})}))

(defn start-server []
  (http/start-server handler {:port 8080}))
