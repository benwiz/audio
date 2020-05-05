goog.provide('gui.core');
goog.require('cljs.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('crinkle.component');
goog.require('gui.view');
cljs.core.enable_console_print_BANG_();
gui.core.start = (function gui$core$start(){
var G__39549 = crinkle.component.create_element_raw_props(gui.view.app,cljs.core.PersistentArrayMap.EMPTY,null,null);
var G__39550 = document.getElementById("app");
return module$node_modules$react_dom$index.render(G__39549,G__39550);
});
gui.core.init = (function gui$core$init(){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["starting up!"], 0));

return gui.core.start();
});
goog.exportSymbol('gui.core.init', gui.core.init);
gui.core.stop = (function gui$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=gui.core.js.map
