goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (shadow.dom._to_dom["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (shadow.dom._to_svg["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47706 = coll;
var G__47707 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47706,G__47707) : shadow.dom.lazy_native_coll_seq.call(null,G__47706,G__47707));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4047__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__47735 = arguments.length;
switch (G__47735) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__47741 = arguments.length;
switch (G__47741) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__47747 = arguments.length;
switch (G__47747) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__47759 = arguments.length;
switch (G__47759) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__47770 = arguments.length;
switch (G__47770) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__47772 = document;
var G__47773 = shadow.dom.dom_node(el);
return goog.dom.contains(G__47772,G__47773);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__47775 = shadow.dom.dom_node(parent);
var G__47776 = shadow.dom.dom_node(el);
return goog.dom.contains(G__47775,G__47776);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__47779 = shadow.dom.dom_node(el);
var G__47780 = cls;
return goog.dom.classlist.add(G__47779,G__47780);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__47786 = shadow.dom.dom_node(el);
var G__47787 = cls;
return goog.dom.classlist.remove(G__47786,G__47787);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47791 = arguments.length;
switch (G__47791) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__47792 = shadow.dom.dom_node(el);
var G__47793 = cls;
return goog.dom.classlist.toggle(G__47792,G__47793);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4047__auto__ = (!((typeof document !== 'undefined')));
if(or__4047__auto__){
return or__4047__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e47801){if((e47801 instanceof Object)){
var e = e47801;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47801;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4047__auto__ = (!((typeof document !== 'undefined')));
if(or__4047__auto__){
return or__4047__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47814 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47815 = null;
var count__47816 = (0);
var i__47817 = (0);
while(true){
if((i__47817 < count__47816)){
var el = chunk__47815.cljs$core$IIndexed$_nth$arity$2(null,i__47817);
var handler_48570__$1 = ((function (seq__47814,chunk__47815,count__47816,i__47817,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47814,chunk__47815,count__47816,i__47817,el))
;
var G__47820_48573 = el;
var G__47821_48574 = cljs.core.name(ev);
var G__47822_48575 = handler_48570__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47820_48573,G__47821_48574,G__47822_48575) : shadow.dom.dom_listen.call(null,G__47820_48573,G__47821_48574,G__47822_48575));


var G__48577 = seq__47814;
var G__48578 = chunk__47815;
var G__48579 = count__47816;
var G__48580 = (i__47817 + (1));
seq__47814 = G__48577;
chunk__47815 = G__48578;
count__47816 = G__48579;
i__47817 = G__48580;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47814);
if(temp__5735__auto__){
var seq__47814__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47814__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__47814__$1);
var G__48583 = cljs.core.chunk_rest(seq__47814__$1);
var G__48584 = c__4461__auto__;
var G__48585 = cljs.core.count(c__4461__auto__);
var G__48586 = (0);
seq__47814 = G__48583;
chunk__47815 = G__48584;
count__47816 = G__48585;
i__47817 = G__48586;
continue;
} else {
var el = cljs.core.first(seq__47814__$1);
var handler_48588__$1 = ((function (seq__47814,chunk__47815,count__47816,i__47817,el,seq__47814__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47814,chunk__47815,count__47816,i__47817,el,seq__47814__$1,temp__5735__auto__))
;
var G__47830_48589 = el;
var G__47831_48591 = cljs.core.name(ev);
var G__47832_48592 = handler_48588__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47830_48589,G__47831_48591,G__47832_48592) : shadow.dom.dom_listen.call(null,G__47830_48589,G__47831_48591,G__47832_48592));


var G__48594 = cljs.core.next(seq__47814__$1);
var G__48596 = null;
var G__48597 = (0);
var G__48598 = (0);
seq__47814 = G__48594;
chunk__47815 = G__48596;
count__47816 = G__48597;
i__47817 = G__48598;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47841 = arguments.length;
switch (G__47841) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__47850 = shadow.dom.dom_node(el);
var G__47851 = cljs.core.name(ev);
var G__47852 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47850,G__47851,G__47852) : shadow.dom.dom_listen.call(null,G__47850,G__47851,G__47852));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__47860 = shadow.dom.dom_node(el);
var G__47861 = cljs.core.name(ev);
var G__47862 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__47860,G__47861,G__47862) : shadow.dom.dom_listen_remove.call(null,G__47860,G__47861,G__47862));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47870 = cljs.core.seq(events);
var chunk__47871 = null;
var count__47872 = (0);
var i__47873 = (0);
while(true){
if((i__47873 < count__47872)){
var vec__47875 = chunk__47871.cljs$core$IIndexed$_nth$arity$2(null,i__47873);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47875,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47875,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48613 = seq__47870;
var G__48614 = chunk__47871;
var G__48615 = count__47872;
var G__48616 = (i__47873 + (1));
seq__47870 = G__48613;
chunk__47871 = G__48614;
count__47872 = G__48615;
i__47873 = G__48616;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47870);
if(temp__5735__auto__){
var seq__47870__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47870__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__47870__$1);
var G__48619 = cljs.core.chunk_rest(seq__47870__$1);
var G__48620 = c__4461__auto__;
var G__48621 = cljs.core.count(c__4461__auto__);
var G__48622 = (0);
seq__47870 = G__48619;
chunk__47871 = G__48620;
count__47872 = G__48621;
i__47873 = G__48622;
continue;
} else {
var vec__47881 = cljs.core.first(seq__47870__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47881,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47881,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48625 = cljs.core.next(seq__47870__$1);
var G__48626 = null;
var G__48627 = (0);
var G__48628 = (0);
seq__47870 = G__48625;
chunk__47871 = G__48626;
count__47872 = G__48627;
i__47873 = G__48628;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__47885 = cljs.core.seq(styles);
var chunk__47886 = null;
var count__47887 = (0);
var i__47888 = (0);
while(true){
if((i__47888 < count__47887)){
var vec__47890 = chunk__47886.cljs$core$IIndexed$_nth$arity$2(null,i__47888);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47890,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47890,(1),null);
var G__47893_48631 = dom;
var G__47894_48632 = cljs.core.name(k);
var G__47895_48633 = (((v == null))?"":v);
goog.style.setStyle(G__47893_48631,G__47894_48632,G__47895_48633);


var G__48635 = seq__47885;
var G__48636 = chunk__47886;
var G__48637 = count__47887;
var G__48638 = (i__47888 + (1));
seq__47885 = G__48635;
chunk__47886 = G__48636;
count__47887 = G__48637;
i__47888 = G__48638;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47885);
if(temp__5735__auto__){
var seq__47885__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47885__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__47885__$1);
var G__48640 = cljs.core.chunk_rest(seq__47885__$1);
var G__48641 = c__4461__auto__;
var G__48642 = cljs.core.count(c__4461__auto__);
var G__48643 = (0);
seq__47885 = G__48640;
chunk__47886 = G__48641;
count__47887 = G__48642;
i__47888 = G__48643;
continue;
} else {
var vec__47896 = cljs.core.first(seq__47885__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47896,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47896,(1),null);
var G__47899_48646 = dom;
var G__47900_48647 = cljs.core.name(k);
var G__47901_48648 = (((v == null))?"":v);
goog.style.setStyle(G__47899_48646,G__47900_48647,G__47901_48648);


var G__48651 = cljs.core.next(seq__47885__$1);
var G__48652 = null;
var G__48653 = (0);
var G__48654 = (0);
seq__47885 = G__48651;
chunk__47886 = G__48652;
count__47887 = G__48653;
i__47888 = G__48654;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__47903_48655 = key;
var G__47903_48656__$1 = (((G__47903_48655 instanceof cljs.core.Keyword))?G__47903_48655.fqn:null);
switch (G__47903_48656__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48662 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4047__auto__ = goog.string.startsWith(ks_48662,"data-");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return goog.string.startsWith(ks_48662,"aria-");
}
})())){
el.setAttribute(ks_48662,value);
} else {
(el[ks_48662] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__47917 = shadow.dom.dom_node(el);
var G__47918 = cls;
return goog.dom.classlist.contains(G__47917,G__47918);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1)].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47935){
var map__47936 = p__47935;
var map__47936__$1 = (((((!((map__47936 == null))))?(((((map__47936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47936):map__47936);
var props = map__47936__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47936__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47939 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47939,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47939,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47939,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47945 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47945,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47945;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47947 = arguments.length;
switch (G__47947) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47950){
var vec__47951 = p__47950;
var seq__47952 = cljs.core.seq(vec__47951);
var first__47953 = cljs.core.first(seq__47952);
var seq__47952__$1 = cljs.core.next(seq__47952);
var nn = first__47953;
var first__47953__$1 = cljs.core.first(seq__47952__$1);
var seq__47952__$2 = cljs.core.next(seq__47952__$1);
var np = first__47953__$1;
var nc = seq__47952__$2;
var node = vec__47951;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47954 = nn;
var G__47955 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47954,G__47955) : create_fn.call(null,G__47954,G__47955));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47956 = nn;
var G__47957 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47956,G__47957) : create_fn.call(null,G__47956,G__47957));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47958 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47958,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47958,(1),null);
var seq__47961_48700 = cljs.core.seq(node_children);
var chunk__47962_48701 = null;
var count__47963_48702 = (0);
var i__47964_48703 = (0);
while(true){
if((i__47964_48703 < count__47963_48702)){
var child_struct_48706 = chunk__47962_48701.cljs$core$IIndexed$_nth$arity$2(null,i__47964_48703);
var children_48707 = shadow.dom.dom_node(child_struct_48706);
if(cljs.core.seq_QMARK_(children_48707)){
var seq__47965_48708 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48707));
var chunk__47967_48709 = null;
var count__47968_48710 = (0);
var i__47969_48711 = (0);
while(true){
if((i__47969_48711 < count__47968_48710)){
var child_48712 = chunk__47967_48709.cljs$core$IIndexed$_nth$arity$2(null,i__47969_48711);
if(cljs.core.truth_(child_48712)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48712);


var G__48713 = seq__47965_48708;
var G__48714 = chunk__47967_48709;
var G__48715 = count__47968_48710;
var G__48716 = (i__47969_48711 + (1));
seq__47965_48708 = G__48713;
chunk__47967_48709 = G__48714;
count__47968_48710 = G__48715;
i__47969_48711 = G__48716;
continue;
} else {
var G__48719 = seq__47965_48708;
var G__48720 = chunk__47967_48709;
var G__48721 = count__47968_48710;
var G__48722 = (i__47969_48711 + (1));
seq__47965_48708 = G__48719;
chunk__47967_48709 = G__48720;
count__47968_48710 = G__48721;
i__47969_48711 = G__48722;
continue;
}
} else {
var temp__5735__auto___48723 = cljs.core.seq(seq__47965_48708);
if(temp__5735__auto___48723){
var seq__47965_48725__$1 = temp__5735__auto___48723;
if(cljs.core.chunked_seq_QMARK_(seq__47965_48725__$1)){
var c__4461__auto___48726 = cljs.core.chunk_first(seq__47965_48725__$1);
var G__48727 = cljs.core.chunk_rest(seq__47965_48725__$1);
var G__48728 = c__4461__auto___48726;
var G__48729 = cljs.core.count(c__4461__auto___48726);
var G__48730 = (0);
seq__47965_48708 = G__48727;
chunk__47967_48709 = G__48728;
count__47968_48710 = G__48729;
i__47969_48711 = G__48730;
continue;
} else {
var child_48731 = cljs.core.first(seq__47965_48725__$1);
if(cljs.core.truth_(child_48731)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48731);


var G__48732 = cljs.core.next(seq__47965_48725__$1);
var G__48733 = null;
var G__48734 = (0);
var G__48735 = (0);
seq__47965_48708 = G__48732;
chunk__47967_48709 = G__48733;
count__47968_48710 = G__48734;
i__47969_48711 = G__48735;
continue;
} else {
var G__48738 = cljs.core.next(seq__47965_48725__$1);
var G__48739 = null;
var G__48740 = (0);
var G__48741 = (0);
seq__47965_48708 = G__48738;
chunk__47967_48709 = G__48739;
count__47968_48710 = G__48740;
i__47969_48711 = G__48741;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48707);
}


var G__48745 = seq__47961_48700;
var G__48746 = chunk__47962_48701;
var G__48747 = count__47963_48702;
var G__48748 = (i__47964_48703 + (1));
seq__47961_48700 = G__48745;
chunk__47962_48701 = G__48746;
count__47963_48702 = G__48747;
i__47964_48703 = G__48748;
continue;
} else {
var temp__5735__auto___48750 = cljs.core.seq(seq__47961_48700);
if(temp__5735__auto___48750){
var seq__47961_48751__$1 = temp__5735__auto___48750;
if(cljs.core.chunked_seq_QMARK_(seq__47961_48751__$1)){
var c__4461__auto___48752 = cljs.core.chunk_first(seq__47961_48751__$1);
var G__48753 = cljs.core.chunk_rest(seq__47961_48751__$1);
var G__48754 = c__4461__auto___48752;
var G__48755 = cljs.core.count(c__4461__auto___48752);
var G__48756 = (0);
seq__47961_48700 = G__48753;
chunk__47962_48701 = G__48754;
count__47963_48702 = G__48755;
i__47964_48703 = G__48756;
continue;
} else {
var child_struct_48757 = cljs.core.first(seq__47961_48751__$1);
var children_48758 = shadow.dom.dom_node(child_struct_48757);
if(cljs.core.seq_QMARK_(children_48758)){
var seq__47979_48760 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48758));
var chunk__47981_48761 = null;
var count__47982_48762 = (0);
var i__47983_48763 = (0);
while(true){
if((i__47983_48763 < count__47982_48762)){
var child_48765 = chunk__47981_48761.cljs$core$IIndexed$_nth$arity$2(null,i__47983_48763);
if(cljs.core.truth_(child_48765)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48765);


var G__48766 = seq__47979_48760;
var G__48767 = chunk__47981_48761;
var G__48768 = count__47982_48762;
var G__48769 = (i__47983_48763 + (1));
seq__47979_48760 = G__48766;
chunk__47981_48761 = G__48767;
count__47982_48762 = G__48768;
i__47983_48763 = G__48769;
continue;
} else {
var G__48770 = seq__47979_48760;
var G__48771 = chunk__47981_48761;
var G__48772 = count__47982_48762;
var G__48773 = (i__47983_48763 + (1));
seq__47979_48760 = G__48770;
chunk__47981_48761 = G__48771;
count__47982_48762 = G__48772;
i__47983_48763 = G__48773;
continue;
}
} else {
var temp__5735__auto___48774__$1 = cljs.core.seq(seq__47979_48760);
if(temp__5735__auto___48774__$1){
var seq__47979_48775__$1 = temp__5735__auto___48774__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47979_48775__$1)){
var c__4461__auto___48778 = cljs.core.chunk_first(seq__47979_48775__$1);
var G__48780 = cljs.core.chunk_rest(seq__47979_48775__$1);
var G__48781 = c__4461__auto___48778;
var G__48782 = cljs.core.count(c__4461__auto___48778);
var G__48783 = (0);
seq__47979_48760 = G__48780;
chunk__47981_48761 = G__48781;
count__47982_48762 = G__48782;
i__47983_48763 = G__48783;
continue;
} else {
var child_48786 = cljs.core.first(seq__47979_48775__$1);
if(cljs.core.truth_(child_48786)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48786);


var G__48787 = cljs.core.next(seq__47979_48775__$1);
var G__48788 = null;
var G__48789 = (0);
var G__48790 = (0);
seq__47979_48760 = G__48787;
chunk__47981_48761 = G__48788;
count__47982_48762 = G__48789;
i__47983_48763 = G__48790;
continue;
} else {
var G__48791 = cljs.core.next(seq__47979_48775__$1);
var G__48792 = null;
var G__48793 = (0);
var G__48794 = (0);
seq__47979_48760 = G__48791;
chunk__47981_48761 = G__48792;
count__47982_48762 = G__48793;
i__47983_48763 = G__48794;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48758);
}


var G__48795 = cljs.core.next(seq__47961_48751__$1);
var G__48796 = null;
var G__48797 = (0);
var G__48798 = (0);
seq__47961_48700 = G__48795;
chunk__47962_48701 = G__48796;
count__47963_48702 = G__48797;
i__47964_48703 = G__48798;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__48007 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__48007);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__48014 = cljs.core.seq(node);
var chunk__48015 = null;
var count__48016 = (0);
var i__48017 = (0);
while(true){
if((i__48017 < count__48016)){
var n = chunk__48015.cljs$core$IIndexed$_nth$arity$2(null,i__48017);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48809 = seq__48014;
var G__48810 = chunk__48015;
var G__48811 = count__48016;
var G__48812 = (i__48017 + (1));
seq__48014 = G__48809;
chunk__48015 = G__48810;
count__48016 = G__48811;
i__48017 = G__48812;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48014);
if(temp__5735__auto__){
var seq__48014__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48014__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__48014__$1);
var G__48815 = cljs.core.chunk_rest(seq__48014__$1);
var G__48816 = c__4461__auto__;
var G__48817 = cljs.core.count(c__4461__auto__);
var G__48818 = (0);
seq__48014 = G__48815;
chunk__48015 = G__48816;
count__48016 = G__48817;
i__48017 = G__48818;
continue;
} else {
var n = cljs.core.first(seq__48014__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48820 = cljs.core.next(seq__48014__$1);
var G__48821 = null;
var G__48822 = (0);
var G__48823 = (0);
seq__48014 = G__48820;
chunk__48015 = G__48821;
count__48016 = G__48822;
i__48017 = G__48823;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__48021 = shadow.dom.dom_node(new$);
var G__48022 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__48021,G__48022);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__48027 = arguments.length;
switch (G__48027) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__48034 = arguments.length;
switch (G__48034) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__48051 = arguments.length;
switch (G__48051) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4047__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4647__auto__ = [];
var len__4641__auto___48845 = arguments.length;
var i__4642__auto___48846 = (0);
while(true){
if((i__4642__auto___48846 < len__4641__auto___48845)){
args__4647__auto__.push((arguments[i__4642__auto___48846]));

var G__48848 = (i__4642__auto___48846 + (1));
i__4642__auto___48846 = G__48848;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__48083_48854 = cljs.core.seq(nodes);
var chunk__48084_48855 = null;
var count__48085_48856 = (0);
var i__48086_48857 = (0);
while(true){
if((i__48086_48857 < count__48085_48856)){
var node_48858 = chunk__48084_48855.cljs$core$IIndexed$_nth$arity$2(null,i__48086_48857);
fragment.appendChild(shadow.dom._to_dom(node_48858));


var G__48859 = seq__48083_48854;
var G__48860 = chunk__48084_48855;
var G__48861 = count__48085_48856;
var G__48862 = (i__48086_48857 + (1));
seq__48083_48854 = G__48859;
chunk__48084_48855 = G__48860;
count__48085_48856 = G__48861;
i__48086_48857 = G__48862;
continue;
} else {
var temp__5735__auto___48864 = cljs.core.seq(seq__48083_48854);
if(temp__5735__auto___48864){
var seq__48083_48865__$1 = temp__5735__auto___48864;
if(cljs.core.chunked_seq_QMARK_(seq__48083_48865__$1)){
var c__4461__auto___48866 = cljs.core.chunk_first(seq__48083_48865__$1);
var G__48867 = cljs.core.chunk_rest(seq__48083_48865__$1);
var G__48868 = c__4461__auto___48866;
var G__48869 = cljs.core.count(c__4461__auto___48866);
var G__48870 = (0);
seq__48083_48854 = G__48867;
chunk__48084_48855 = G__48868;
count__48085_48856 = G__48869;
i__48086_48857 = G__48870;
continue;
} else {
var node_48871 = cljs.core.first(seq__48083_48865__$1);
fragment.appendChild(shadow.dom._to_dom(node_48871));


var G__48873 = cljs.core.next(seq__48083_48865__$1);
var G__48874 = null;
var G__48875 = (0);
var G__48876 = (0);
seq__48083_48854 = G__48873;
chunk__48084_48855 = G__48874;
count__48085_48856 = G__48875;
i__48086_48857 = G__48876;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq48077){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48077));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__48092_48881 = cljs.core.seq(scripts);
var chunk__48093_48882 = null;
var count__48094_48883 = (0);
var i__48095_48884 = (0);
while(true){
if((i__48095_48884 < count__48094_48883)){
var vec__48096_48887 = chunk__48093_48882.cljs$core$IIndexed$_nth$arity$2(null,i__48095_48884);
var script_tag_48888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48096_48887,(0),null);
var script_body_48889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48096_48887,(1),null);
eval(script_body_48889);


var G__48894 = seq__48092_48881;
var G__48895 = chunk__48093_48882;
var G__48896 = count__48094_48883;
var G__48897 = (i__48095_48884 + (1));
seq__48092_48881 = G__48894;
chunk__48093_48882 = G__48895;
count__48094_48883 = G__48896;
i__48095_48884 = G__48897;
continue;
} else {
var temp__5735__auto___48898 = cljs.core.seq(seq__48092_48881);
if(temp__5735__auto___48898){
var seq__48092_48899__$1 = temp__5735__auto___48898;
if(cljs.core.chunked_seq_QMARK_(seq__48092_48899__$1)){
var c__4461__auto___48900 = cljs.core.chunk_first(seq__48092_48899__$1);
var G__48901 = cljs.core.chunk_rest(seq__48092_48899__$1);
var G__48902 = c__4461__auto___48900;
var G__48903 = cljs.core.count(c__4461__auto___48900);
var G__48904 = (0);
seq__48092_48881 = G__48901;
chunk__48093_48882 = G__48902;
count__48094_48883 = G__48903;
i__48095_48884 = G__48904;
continue;
} else {
var vec__48100_48905 = cljs.core.first(seq__48092_48899__$1);
var script_tag_48906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48100_48905,(0),null);
var script_body_48907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48100_48905,(1),null);
eval(script_body_48907);


var G__48909 = cljs.core.next(seq__48092_48899__$1);
var G__48910 = null;
var G__48911 = (0);
var G__48912 = (0);
seq__48092_48881 = G__48909;
chunk__48093_48882 = G__48910;
count__48094_48883 = G__48911;
i__48095_48884 = G__48912;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__48105){
var vec__48106 = p__48105;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48106,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48106,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__48117 = shadow.dom.dom_node(el);
var G__48118 = cls;
return goog.dom.getAncestorByClass(G__48117,G__48118);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__48125 = arguments.length;
switch (G__48125) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__48126 = shadow.dom.dom_node(el);
var G__48127 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__48126,G__48127);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__48129 = shadow.dom.dom_node(el);
var G__48130 = cljs.core.name(tag);
var G__48131 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__48129,G__48130,G__48131);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__48136 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__48136);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__48137 = shadow.dom.dom_node(dom);
var G__48138 = value;
return goog.dom.forms.setValue(G__48137,G__48138);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__48147 = cljs.core.seq(style_keys);
var chunk__48148 = null;
var count__48149 = (0);
var i__48150 = (0);
while(true){
if((i__48150 < count__48149)){
var it = chunk__48148.cljs$core$IIndexed$_nth$arity$2(null,i__48150);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48937 = seq__48147;
var G__48938 = chunk__48148;
var G__48939 = count__48149;
var G__48940 = (i__48150 + (1));
seq__48147 = G__48937;
chunk__48148 = G__48938;
count__48149 = G__48939;
i__48150 = G__48940;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48147);
if(temp__5735__auto__){
var seq__48147__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48147__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__48147__$1);
var G__48943 = cljs.core.chunk_rest(seq__48147__$1);
var G__48944 = c__4461__auto__;
var G__48945 = cljs.core.count(c__4461__auto__);
var G__48946 = (0);
seq__48147 = G__48943;
chunk__48148 = G__48944;
count__48149 = G__48945;
i__48150 = G__48946;
continue;
} else {
var it = cljs.core.first(seq__48147__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48949 = cljs.core.next(seq__48147__$1);
var G__48950 = null;
var G__48951 = (0);
var G__48952 = (0);
seq__48147 = G__48949;
chunk__48148 = G__48950;
count__48149 = G__48951;
i__48150 = G__48952;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k48154,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__48167 = k48154;
var G__48167__$1 = (((G__48167 instanceof cljs.core.Keyword))?G__48167.fqn:null);
switch (G__48167__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48154,else__4304__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__48174){
var vec__48178 = p__48174;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48178,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48178,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48153){
var self__ = this;
var G__48153__$1 = this;
return (new cljs.core.RecordIter((0),G__48153__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__48195 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__48195(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48155,other48156){
var self__ = this;
var this48155__$1 = this;
return (((!((other48156 == null)))) && ((this48155__$1.constructor === other48156.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48155__$1.x,other48156.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48155__$1.y,other48156.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48155__$1.__extmap,other48156.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__48153){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__48210 = cljs.core.keyword_identical_QMARK_;
var expr__48211 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__48213 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__48214 = expr__48211;
return (pred__48210.cljs$core$IFn$_invoke$arity$2 ? pred__48210.cljs$core$IFn$_invoke$arity$2(G__48213,G__48214) : pred__48210.call(null,G__48213,G__48214));
})())){
return (new shadow.dom.Coordinate(G__48153,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48217 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__48218 = expr__48211;
return (pred__48210.cljs$core$IFn$_invoke$arity$2 ? pred__48210.cljs$core$IFn$_invoke$arity$2(G__48217,G__48218) : pred__48210.call(null,G__48217,G__48218));
})())){
return (new shadow.dom.Coordinate(self__.x,G__48153,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__48153),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__48153){
var self__ = this;
var this__4300__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__48153,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__48159){
var extmap__4340__auto__ = (function (){var G__48239 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48159,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__48159)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48239);
} else {
return G__48239;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__48159),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__48159),null,cljs.core.not_empty(extmap__4340__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__48244 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__48244);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__48247 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__48247);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__48255 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__48255);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k48258,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__48269 = k48258;
var G__48269__$1 = (((G__48269 instanceof cljs.core.Keyword))?G__48269.fqn:null);
switch (G__48269__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48258,else__4304__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__48270){
var vec__48272 = p__48270;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48272,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48272,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#shadow.dom.Size{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48257){
var self__ = this;
var G__48257__$1 = this;
return (new cljs.core.RecordIter((0),G__48257__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__48283 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__48283(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48259,other48260){
var self__ = this;
var this48259__$1 = this;
return (((!((other48260 == null)))) && ((this48259__$1.constructor === other48260.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48259__$1.w,other48260.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48259__$1.h,other48260.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48259__$1.__extmap,other48260.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__48257){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__48290 = cljs.core.keyword_identical_QMARK_;
var expr__48291 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__48293 = new cljs.core.Keyword(null,"w","w",354169001);
var G__48294 = expr__48291;
return (pred__48290.cljs$core$IFn$_invoke$arity$2 ? pred__48290.cljs$core$IFn$_invoke$arity$2(G__48293,G__48294) : pred__48290.call(null,G__48293,G__48294));
})())){
return (new shadow.dom.Size(G__48257,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48297 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__48298 = expr__48291;
return (pred__48290.cljs$core$IFn$_invoke$arity$2 ? pred__48290.cljs$core$IFn$_invoke$arity$2(G__48297,G__48298) : pred__48290.call(null,G__48297,G__48298));
})())){
return (new shadow.dom.Size(self__.w,G__48257,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__48257),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__48257){
var self__ = this;
var this__4300__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__48257,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__48261){
var extmap__4340__auto__ = (function (){var G__48308 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48261,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__48261)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48308);
} else {
return G__48308;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__48261),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__48261),null,cljs.core.not_empty(extmap__4340__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__48319 = shadow.dom.dom_node(el);
return goog.style.getSize(G__48319);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4515__auto__ = opts;
var l__4516__auto__ = a__4515__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4516__auto__)){
var G__48999 = (i + (1));
var G__49000 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48999;
ret = G__49000;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48336){
var vec__48337 = p__48336;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48337,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48337,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48348 = arguments.length;
switch (G__48348) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48360_49006 = new_node;
var G__48361_49007 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__48360_49006,G__48361_49007);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48366_49009 = new_node;
var G__48367_49010 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__48366_49009,G__48367_49010);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__49013 = ps;
var G__49014 = (i + (1));
el__$1 = G__49013;
i = G__49014;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__48377 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__48377);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__48384 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__48384);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__48388 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__48388);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__48392 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48392,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48392,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48392,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48400_49022 = cljs.core.seq(props);
var chunk__48401_49023 = null;
var count__48402_49024 = (0);
var i__48403_49025 = (0);
while(true){
if((i__48403_49025 < count__48402_49024)){
var vec__48407_49026 = chunk__48401_49023.cljs$core$IIndexed$_nth$arity$2(null,i__48403_49025);
var k_49027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48407_49026,(0),null);
var v_49028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48407_49026,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_49027);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49027),v_49028);


var G__49029 = seq__48400_49022;
var G__49030 = chunk__48401_49023;
var G__49031 = count__48402_49024;
var G__49032 = (i__48403_49025 + (1));
seq__48400_49022 = G__49029;
chunk__48401_49023 = G__49030;
count__48402_49024 = G__49031;
i__48403_49025 = G__49032;
continue;
} else {
var temp__5735__auto___49033 = cljs.core.seq(seq__48400_49022);
if(temp__5735__auto___49033){
var seq__48400_49034__$1 = temp__5735__auto___49033;
if(cljs.core.chunked_seq_QMARK_(seq__48400_49034__$1)){
var c__4461__auto___49036 = cljs.core.chunk_first(seq__48400_49034__$1);
var G__49037 = cljs.core.chunk_rest(seq__48400_49034__$1);
var G__49038 = c__4461__auto___49036;
var G__49039 = cljs.core.count(c__4461__auto___49036);
var G__49040 = (0);
seq__48400_49022 = G__49037;
chunk__48401_49023 = G__49038;
count__48402_49024 = G__49039;
i__48403_49025 = G__49040;
continue;
} else {
var vec__48413_49041 = cljs.core.first(seq__48400_49034__$1);
var k_49042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48413_49041,(0),null);
var v_49043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48413_49041,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_49042);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49042),v_49043);


var G__49046 = cljs.core.next(seq__48400_49034__$1);
var G__49047 = null;
var G__49048 = (0);
var G__49049 = (0);
seq__48400_49022 = G__49046;
chunk__48401_49023 = G__49047;
count__48402_49024 = G__49048;
i__48403_49025 = G__49049;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__48426 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48426,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48426,(1),null);
var seq__48429_49052 = cljs.core.seq(node_children);
var chunk__48431_49053 = null;
var count__48432_49054 = (0);
var i__48433_49055 = (0);
while(true){
if((i__48433_49055 < count__48432_49054)){
var child_struct_49056 = chunk__48431_49053.cljs$core$IIndexed$_nth$arity$2(null,i__48433_49055);
if((!((child_struct_49056 == null)))){
if(typeof child_struct_49056 === 'string'){
var text_49057 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49057),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_49056)].join(''));
} else {
var children_49058 = shadow.dom.svg_node(child_struct_49056);
if(cljs.core.seq_QMARK_(children_49058)){
var seq__48440_49060 = cljs.core.seq(children_49058);
var chunk__48442_49061 = null;
var count__48443_49062 = (0);
var i__48444_49063 = (0);
while(true){
if((i__48444_49063 < count__48443_49062)){
var child_49064 = chunk__48442_49061.cljs$core$IIndexed$_nth$arity$2(null,i__48444_49063);
if(cljs.core.truth_(child_49064)){
node.appendChild(child_49064);


var G__49065 = seq__48440_49060;
var G__49066 = chunk__48442_49061;
var G__49067 = count__48443_49062;
var G__49068 = (i__48444_49063 + (1));
seq__48440_49060 = G__49065;
chunk__48442_49061 = G__49066;
count__48443_49062 = G__49067;
i__48444_49063 = G__49068;
continue;
} else {
var G__49069 = seq__48440_49060;
var G__49070 = chunk__48442_49061;
var G__49071 = count__48443_49062;
var G__49072 = (i__48444_49063 + (1));
seq__48440_49060 = G__49069;
chunk__48442_49061 = G__49070;
count__48443_49062 = G__49071;
i__48444_49063 = G__49072;
continue;
}
} else {
var temp__5735__auto___49074 = cljs.core.seq(seq__48440_49060);
if(temp__5735__auto___49074){
var seq__48440_49076__$1 = temp__5735__auto___49074;
if(cljs.core.chunked_seq_QMARK_(seq__48440_49076__$1)){
var c__4461__auto___49077 = cljs.core.chunk_first(seq__48440_49076__$1);
var G__49078 = cljs.core.chunk_rest(seq__48440_49076__$1);
var G__49079 = c__4461__auto___49077;
var G__49080 = cljs.core.count(c__4461__auto___49077);
var G__49081 = (0);
seq__48440_49060 = G__49078;
chunk__48442_49061 = G__49079;
count__48443_49062 = G__49080;
i__48444_49063 = G__49081;
continue;
} else {
var child_49084 = cljs.core.first(seq__48440_49076__$1);
if(cljs.core.truth_(child_49084)){
node.appendChild(child_49084);


var G__49085 = cljs.core.next(seq__48440_49076__$1);
var G__49086 = null;
var G__49087 = (0);
var G__49088 = (0);
seq__48440_49060 = G__49085;
chunk__48442_49061 = G__49086;
count__48443_49062 = G__49087;
i__48444_49063 = G__49088;
continue;
} else {
var G__49089 = cljs.core.next(seq__48440_49076__$1);
var G__49090 = null;
var G__49091 = (0);
var G__49092 = (0);
seq__48440_49060 = G__49089;
chunk__48442_49061 = G__49090;
count__48443_49062 = G__49091;
i__48444_49063 = G__49092;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49058);
}
}


var G__49093 = seq__48429_49052;
var G__49094 = chunk__48431_49053;
var G__49095 = count__48432_49054;
var G__49096 = (i__48433_49055 + (1));
seq__48429_49052 = G__49093;
chunk__48431_49053 = G__49094;
count__48432_49054 = G__49095;
i__48433_49055 = G__49096;
continue;
} else {
var G__49097 = seq__48429_49052;
var G__49098 = chunk__48431_49053;
var G__49099 = count__48432_49054;
var G__49100 = (i__48433_49055 + (1));
seq__48429_49052 = G__49097;
chunk__48431_49053 = G__49098;
count__48432_49054 = G__49099;
i__48433_49055 = G__49100;
continue;
}
} else {
var temp__5735__auto___49101 = cljs.core.seq(seq__48429_49052);
if(temp__5735__auto___49101){
var seq__48429_49102__$1 = temp__5735__auto___49101;
if(cljs.core.chunked_seq_QMARK_(seq__48429_49102__$1)){
var c__4461__auto___49103 = cljs.core.chunk_first(seq__48429_49102__$1);
var G__49104 = cljs.core.chunk_rest(seq__48429_49102__$1);
var G__49105 = c__4461__auto___49103;
var G__49106 = cljs.core.count(c__4461__auto___49103);
var G__49107 = (0);
seq__48429_49052 = G__49104;
chunk__48431_49053 = G__49105;
count__48432_49054 = G__49106;
i__48433_49055 = G__49107;
continue;
} else {
var child_struct_49108 = cljs.core.first(seq__48429_49102__$1);
if((!((child_struct_49108 == null)))){
if(typeof child_struct_49108 === 'string'){
var text_49110 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49110),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_49108)].join(''));
} else {
var children_49111 = shadow.dom.svg_node(child_struct_49108);
if(cljs.core.seq_QMARK_(children_49111)){
var seq__48453_49112 = cljs.core.seq(children_49111);
var chunk__48455_49113 = null;
var count__48456_49114 = (0);
var i__48457_49115 = (0);
while(true){
if((i__48457_49115 < count__48456_49114)){
var child_49116 = chunk__48455_49113.cljs$core$IIndexed$_nth$arity$2(null,i__48457_49115);
if(cljs.core.truth_(child_49116)){
node.appendChild(child_49116);


var G__49117 = seq__48453_49112;
var G__49118 = chunk__48455_49113;
var G__49119 = count__48456_49114;
var G__49120 = (i__48457_49115 + (1));
seq__48453_49112 = G__49117;
chunk__48455_49113 = G__49118;
count__48456_49114 = G__49119;
i__48457_49115 = G__49120;
continue;
} else {
var G__49123 = seq__48453_49112;
var G__49124 = chunk__48455_49113;
var G__49125 = count__48456_49114;
var G__49126 = (i__48457_49115 + (1));
seq__48453_49112 = G__49123;
chunk__48455_49113 = G__49124;
count__48456_49114 = G__49125;
i__48457_49115 = G__49126;
continue;
}
} else {
var temp__5735__auto___49127__$1 = cljs.core.seq(seq__48453_49112);
if(temp__5735__auto___49127__$1){
var seq__48453_49128__$1 = temp__5735__auto___49127__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48453_49128__$1)){
var c__4461__auto___49131 = cljs.core.chunk_first(seq__48453_49128__$1);
var G__49132 = cljs.core.chunk_rest(seq__48453_49128__$1);
var G__49133 = c__4461__auto___49131;
var G__49134 = cljs.core.count(c__4461__auto___49131);
var G__49135 = (0);
seq__48453_49112 = G__49132;
chunk__48455_49113 = G__49133;
count__48456_49114 = G__49134;
i__48457_49115 = G__49135;
continue;
} else {
var child_49136 = cljs.core.first(seq__48453_49128__$1);
if(cljs.core.truth_(child_49136)){
node.appendChild(child_49136);


var G__49137 = cljs.core.next(seq__48453_49128__$1);
var G__49138 = null;
var G__49139 = (0);
var G__49140 = (0);
seq__48453_49112 = G__49137;
chunk__48455_49113 = G__49138;
count__48456_49114 = G__49139;
i__48457_49115 = G__49140;
continue;
} else {
var G__49141 = cljs.core.next(seq__48453_49128__$1);
var G__49142 = null;
var G__49143 = (0);
var G__49144 = (0);
seq__48453_49112 = G__49141;
chunk__48455_49113 = G__49142;
count__48456_49114 = G__49143;
i__48457_49115 = G__49144;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49111);
}
}


var G__49145 = cljs.core.next(seq__48429_49102__$1);
var G__49146 = null;
var G__49147 = (0);
var G__49148 = (0);
seq__48429_49052 = G__49145;
chunk__48431_49053 = G__49146;
count__48432_49054 = G__49147;
i__48433_49055 = G__49148;
continue;
} else {
var G__49149 = cljs.core.next(seq__48429_49102__$1);
var G__49150 = null;
var G__49151 = (0);
var G__49152 = (0);
seq__48429_49052 = G__49149;
chunk__48431_49053 = G__49150;
count__48432_49054 = G__49151;
i__48433_49055 = G__49152;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__48464_49153 = shadow.dom._to_svg;
var G__48465_49154 = "string";
var G__48466_49155 = ((function (G__48464_49153,G__48465_49154){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__48464_49153,G__48465_49154))
;
goog.object.set(G__48464_49153,G__48465_49154,G__48466_49155);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__48477_49157 = shadow.dom._to_svg;
var G__48478_49158 = "null";
var G__48479_49159 = ((function (G__48477_49157,G__48478_49158){
return (function (_){
return null;
});})(G__48477_49157,G__48478_49158))
;
goog.object.set(G__48477_49157,G__48478_49158,G__48479_49159);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4647__auto__ = [];
var len__4641__auto___49162 = arguments.length;
var i__4642__auto___49165 = (0);
while(true){
if((i__4642__auto___49165 < len__4641__auto___49162)){
args__4647__auto__.push((arguments[i__4642__auto___49165]));

var G__49166 = (i__4642__auto___49165 + (1));
i__4642__auto___49165 = G__49166;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq48482){
var G__48483 = cljs.core.first(seq48482);
var seq48482__$1 = cljs.core.next(seq48482);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48483,seq48482__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__48499 = arguments.length;
switch (G__48499) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__48505_49173 = shadow.dom.dom_node(el);
var G__48506_49174 = cljs.core.name(event);
var G__48507_49175 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48505_49173,G__48506_49174,G__48507_49175) : shadow.dom.dom_listen.call(null,G__48505_49173,G__48506_49174,G__48507_49175));

if(cljs.core.truth_((function (){var and__4036__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4036__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4036__auto__;
}
})())){
var c__46074__auto___49176 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46074__auto___49176,buf,chan,event_fn){
return (function (){
var f__46075__auto__ = (function (){var switch__45900__auto__ = ((function (c__46074__auto___49176,buf,chan,event_fn){
return (function (state_48516){
var state_val_48517 = (state_48516[(1)]);
if((state_val_48517 === (1))){
var state_48516__$1 = state_48516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48516__$1,(2),once_or_cleanup);
} else {
if((state_val_48517 === (2))){
var inst_48513 = (state_48516[(2)]);
var inst_48514 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48516__$1 = (function (){var statearr_48521 = state_48516;
(statearr_48521[(7)] = inst_48513);

return statearr_48521;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48516__$1,inst_48514);
} else {
return null;
}
}
});})(c__46074__auto___49176,buf,chan,event_fn))
;
return ((function (switch__45900__auto__,c__46074__auto___49176,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__45901__auto__ = null;
var shadow$dom$state_machine__45901__auto____0 = (function (){
var statearr_48526 = [null,null,null,null,null,null,null,null];
(statearr_48526[(0)] = shadow$dom$state_machine__45901__auto__);

(statearr_48526[(1)] = (1));

return statearr_48526;
});
var shadow$dom$state_machine__45901__auto____1 = (function (state_48516){
while(true){
var ret_value__45902__auto__ = (function (){try{while(true){
var result__45903__auto__ = switch__45900__auto__(state_48516);
if(cljs.core.keyword_identical_QMARK_(result__45903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45903__auto__;
}
break;
}
}catch (e48529){if((e48529 instanceof Object)){
var ex__45904__auto__ = e48529;
var statearr_48530_49180 = state_48516;
(statearr_48530_49180[(5)] = ex__45904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48529;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49183 = state_48516;
state_48516 = G__49183;
continue;
} else {
return ret_value__45902__auto__;
}
break;
}
});
shadow$dom$state_machine__45901__auto__ = function(state_48516){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__45901__auto____0.call(this);
case 1:
return shadow$dom$state_machine__45901__auto____1.call(this,state_48516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__45901__auto____0;
shadow$dom$state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__45901__auto____1;
return shadow$dom$state_machine__45901__auto__;
})()
;})(switch__45900__auto__,c__46074__auto___49176,buf,chan,event_fn))
})();
var state__46076__auto__ = (function (){var statearr_48533 = (f__46075__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46075__auto__.cljs$core$IFn$_invoke$arity$0() : f__46075__auto__.call(null));
(statearr_48533[(6)] = c__46074__auto___49176);

return statearr_48533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46076__auto__);
});})(c__46074__auto___49176,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
