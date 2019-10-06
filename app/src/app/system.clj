(ns app.system
  (:require
   [integrant.core :as ig]
   [clojure.core.async :as a]
   [app.core :as app]
   [app.osc :as osc]))


;; ----------- Config -----------------------------


(def config
  {:chan/dsp->app    {}
   :chan/app->dsp    {}
   :osc/server       {:port 9800}
   :osc/client       {:host "localhost"
                      :port 4559}
   :osc/dsp->app     {:server (ig/ref :osc/server)
                      :chan   (ig/ref :chan/dsp->app)}
   :osc/app->dsp     {:client (ig/ref :osc/client)
                      :chan   (ig/ref :chan/app->dsp)}
   :app/dsp-listener {:chan (ig/ref :chan/dsp->app)}})


;; ------------ Controls --------------------------


(defn init []
  (prn "Init system...")
  (ig/init config))


(defn halt! [system]
  (prn "Halt system...")
  (ig/halt! system))


;; ------------ Init ------------------------------


(defmethod ig/init-key :chan/dsp->app
  [_ _]
  (prn "Init :chan/dsp->app")
  (a/chan))


(defmethod ig/init-key :chan/app->dsp
  [_ _]
  (prn "Init :chan/app->dsp")
  (a/chan))


(defmethod ig/init-key :osc/server
  [_ {:keys [port]}]
  (prn "Init :osc/server")
  (osc/server port))


(defmethod ig/init-key :osc/client
  [_ {:keys [host port]}]
  (prn "Init :osc/client")
  (osc/client host port))


(defmethod ig/init-key :osc/dsp->app
  [_ {:keys [server chan]}]
  (prn "Init :osc/dsp->app")
  (osc/dsp->app server chan))


(defmethod ig/init-key :osc/app->dsp
  [_ {:keys [client chan]}]
  (prn "Init :osc/app->dsp")
  (osc/app->dsp client chan))


(defmethod ig/init-key :app/dsp-listener
  [_ {:keys [chan]}]
  (prn "Init :app/dsp-listener")
  (app/dsp-listener chan))


;; --------- Halt ---------------------------


(defmethod ig/halt-key! :osc/server
  [_ server]
  (prn "Halt :osc/server")
  (osc/close server))


(defmethod ig/halt-key! :osc/client
  [_ client]
  (prn "Halt :osc/client")
  (osc/close client))
