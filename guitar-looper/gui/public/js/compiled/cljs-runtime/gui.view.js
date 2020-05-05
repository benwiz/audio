goog.provide('gui.view');
goog.require('cljs.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('crinkle.dom');
goog.require('crinkle.component');
goog.require('clojure.string');
gui.view.url = "http://localhost:8000/trigger";
gui.view.space_keycode = (32);
gui.view.style = ({"height": "250px", "width": "100%", "backgroundColor": "#FFDDDD", "margin": "20px"});
gui.view.trigger = (function gui$view$trigger(_){
return crinkle.component.react_createElement_STAR_("div",({"style": gui.view.style, "className": "pressed", "tabIndex": "1", "onKeyDown": (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(gui.view.space_keycode,e.keyCode)){
return fetch(gui.view.url).then((function (response){
console.log(response);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),response.status)){
return null;
} else {
return console.log("Error!!");
}
}));
} else {
return null;
}
})}),"Select this div, then press SPACE to send the trigger");
});
gui.view.app = (function gui$view$app(){
return crinkle.component.react_createElement_STAR_("div",null,crinkle.component.create_element_raw_props(gui.view.trigger,cljs.core.PersistentArrayMap.EMPTY,null,null));
});

//# sourceMappingURL=gui.view.js.map
