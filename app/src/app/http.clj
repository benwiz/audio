(ns app.http
  (:require
   [aleph.http :as http]
   [jsonista.core :as j]))

(defn handler [req]
  {:status 200
   :headers {"content-type" "application/json"
             "Access-Control-Allow-Origin" "*"
             "access-control-allow-methods" [:get :put :post :delete]}
   :body (j/write-value-as-string
          {:status "success"})})

(defn start-server []
  (http/start-server handler {:port 8080}))
