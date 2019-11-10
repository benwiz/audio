(ns app.system
  (:require
   [integrant.core :as ig]
   [clojure.core.async :as a]
   [app.dsp :as dsp]
   [app.core :as app]
   [app.osc :as osc]))


;; ----------- Config -----------------------------


(def config
  {:dsp              {:sonic-pi-tool-path "./resources/sonic-pi-tool" ;; I have created a symlink here
                      :filepath           "./resources/dsp/looper.rb"} ;; I have created a symlink to the dsp dir here
   :routes           {:edn-filepath "./resources/routes.edn"
                      :json-filepath "./resources/routes.json"}
   :chan/dsp->app    {}
   :chan/app->dsp    {}
   :osc/server       {:port 9800}
   :osc/client       {:host "localhost"
                      :port 4559}
   :osc/dsp->app     {:server (ig/ref :osc/server)
                      :chan   (ig/ref :chan/dsp->app)}
   :osc/app->dsp     {:client (ig/ref :osc/client)
                      :chan   (ig/ref :chan/app->dsp)}
   :app/dsp-msg-sink {:chan (ig/ref :chan/dsp->app)}})


;; ------------ Controls --------------------------


(defn init []
  (prn "Init system...")
  (ig/init config))


(defn halt! [system]
  (prn "Halt system...")
  (ig/halt! system))


;; ------------ Init ------------------------------


(defmethod ig/init-key :dsp
  [_ {:keys [sonic-pi-tool-path filepath]}]
  (prn "Init :dsp")
  (dsp/init! sonic-pi-tool-path filepath))


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


(defmethod ig/init-key :app/dsp-msg-sink
  [_ {:keys [chan]}]
  (prn "Init :app/dsp-dispatcher")
  (app/dsp-msg-sink chan))


;; --------- Halt ---------------------------


(defmethod ig/halt-key! :dsp
  [_ sonic-pi-tool-path]
  (prn "Halt :dsp")
  (dsp/halt! sonic-pi-tool-path))


(defmethod ig/halt-key! :osc/server
  [_ server]
  (prn "Halt :osc/server")
  (osc/close server))


(defmethod ig/halt-key! :osc/client
  [_ client]
  (prn "Halt :osc/client")
  (osc/close client))
