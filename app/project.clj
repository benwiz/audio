(defproject app "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url  "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/core.async "0.4.500"]
                 [overtone/osc-clj "0.9.0"]
                 [metosin/reitit "0.3.9"]
                 [integrant "0.7.0"]]
  :main ^:skip-aot app.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}
             :dev     {:source-paths ["dev-resources"]
                       :dependencies [[org.clojure/tools.namespace "0.3.1"]]}})
