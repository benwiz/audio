(ns app.dsp
  (:require
   [clojure.java.shell :as sh]))


;; https://github.com/lpil/sonic-pi-tool


(def bin-path "./resources/sonic-pi-tool")


(defn init [sonic-pi-tool-path filepath]
  (sh/sh sonic-pi-tool-path "eval-file" filepath)
  sonic-pi-tool-path)


(defn halt! [sonic-pi-tool-path]
  (sh/sh sonic-pi-tool-path "stop"))


;; Start and stop the sonic pi server, not intending on automating yet
(comment
  (sh/sh "bash" "-c" "RBENV_VERSION=2.5.0 /Users/benwiz/.cargo/bin/sonic-pi-tool start-server" #_#_:env {:RBENV_VERSION "2.5.0" :HOME "/Users/benwiz/"})
  (sh/sh "/bin/echo $RBENV_VERSION" :env {:RBENV_VERSION "2.5.0" :HOME "/Users/benwiz/"})
  (sh/sh "/bin/ps -ef | grep 'ruby /Applications/Sonic Pi.app/server/ruby/bin/sonic-pi-server.rb' | grep -v grep | awk '{print $2}' | xargs kill -9")

  (sh/sh "/bin/ps -ef | grep 'ruby /Applications/Sonic Pi.app/server/ruby/bin/sonic-pi-server.rb'")
  )


;; Start and stop a given script
(comment
  (init! bin-path "./resources/looper.rb")
  (halt! bin-path "./resources/sonic-pi-tool"))
