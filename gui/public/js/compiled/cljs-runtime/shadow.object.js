goog.provide('shadow.object');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.data');
goog.require('cljs.core.async.impl.protocols');
goog.require('shadow.util');
shadow.object.console_friendly = shadow.util.console_friendly;
shadow.object.log = shadow.util.log;
shadow.object.debug = shadow.util.log;
shadow.object.info = shadow.util.log;
shadow.object.warn = shadow.util.log;
shadow.object.error = shadow.util.log;
shadow.object.obj_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
shadow.object.next_id = (function shadow$object$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.obj_id,cljs.core.inc);
});
shadow.object.object_defs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.behavior_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instances = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_parent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.define_event = (function shadow$object$define_event(event_name,desc,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.events,cljs.core.assoc,event_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),event_name,new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
});
shadow.object.unmunge = (function shadow$object$unmunge(s){
return clojure.string.replace(clojure.string.replace(s,/_DOT_/,"."),/_/,"-");
});
shadow.object.define_event(new cljs.core.Keyword(null,"init","init",-1875481434),"object initialization",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"destroy","destroy",-843660405),"object descruction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),"cause of destruction, :parent means the parent was destroyed, :direct is default"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","init","dom/init",-1875647652),"called after the dom was created but has not entered the document yet",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),"the dom that was created"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","entered","dom/entered",506699596),"should be called whenever a dom node is added to the document, since that\n   is not in control of this library its up to you to call this\n   use (so/notify-tree! your-obj :dom/entered) to notify the node and every child you created",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160),"need to rethink this",cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
shadow.object.IObject = function(){};

shadow.object._id = (function shadow$object$_id(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_id$arity$1 == null)))))){
return this$.shadow$object$IObject$_id$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (shadow.object._id[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (shadow.object._id["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-id",this$);
}
}
}
});

shadow.object._type = (function shadow$object$_type(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_type$arity$1 == null)))))){
return this$.shadow$object$IObject$_type$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (shadow.object._type[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (shadow.object._type["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-type",this$);
}
}
}
});

shadow.object._data = (function shadow$object$_data(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_data$arity$1 == null)))))){
return this$.shadow$object$IObject$_data$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (shadow.object._data[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (shadow.object._data["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-data",this$);
}
}
}
});

/**
 * update and notify watches
 */
shadow.object._update = (function shadow$object$_update(this$,update_fn){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_update$arity$2 == null)))))){
return this$.shadow$object$IObject$_update$arity$2(this$,update_fn);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (shadow.object._update[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4348__auto__.call(null,this$,update_fn));
} else {
var m__4348__auto____$1 = (shadow.object._update["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4348__auto____$1.call(null,this$,update_fn));
} else {
throw cljs.core.missing_protocol("IObject.-update",this$);
}
}
}
});

shadow.object._destroy_BANG_ = (function shadow$object$_destroy_BANG_(this$,cause){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_destroy_BANG_$arity$2 == null)))))){
return this$.shadow$object$IObject$_destroy_BANG_$arity$2(this$,cause);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (shadow.object._destroy_BANG_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4348__auto__.call(null,this$,cause));
} else {
var m__4348__auto____$1 = (shadow.object._destroy_BANG_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4348__auto____$1.call(null,this$,cause));
} else {
throw cljs.core.missing_protocol("IObject.-destroy!",this$);
}
}
}
});

shadow.object.get_type = (function shadow$object$get_type(this$){
return shadow.object._type(this$);
});
shadow.object.get_type_attr = (function shadow$object$get_type_attr(var_args){
var G__49470 = arguments.length;
switch (G__49470) {
case 2:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2 = (function (oref,key){
if((oref == null)){
return null;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null));
}
});

shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3 = (function (oref,key,default$){
if((oref == null)){
return default$;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null),default$);
}
});

shadow.object.get_type_attr.cljs$lang$maxFixedArity = 3;

shadow.object.get_dom = (function shadow$object$get_dom(oref){
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(oref);
});
goog.exportSymbol('shadow.object.get_dom', shadow.object.get_dom);
shadow.object.get_by_id = (function shadow$object$get_by_id(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),id);
});
goog.exportSymbol('shadow.object.get_by_id', shadow.object.get_by_id);
shadow.object.get_from_dom = (function shadow$object$get_from_dom(dom){
var oid = shadow.dom.data(dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(oid)){
return shadow.object.get_by_id(parseInt(oid,(10)));
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_from_dom', shadow.object.get_from_dom);
shadow.object.is_object_QMARK_ = (function shadow$object$is_object_QMARK_(obj_or_dom){
var or__4047__auto__ = (((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom));
if(or__4047__auto__){
return or__4047__auto__;
} else {
return shadow.object.get_from_dom(obj_or_dom);
}
});
shadow.object.equal_QMARK_ = (function shadow$object$equal_QMARK_(obj,obj_or_dom){
if((((!((obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.shadow$object$IObject$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj))){
} else {
throw (new Error(["Assert failed: ","can only test objects","\n","(satisfies? IObject obj)"].join('')));
}

if((((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),shadow.object._id(obj_or_dom));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),(function (){var temp__5735__auto__ = shadow.dom.data(obj_or_dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(temp__5735__auto__)){
var oid = temp__5735__auto__;
return parseInt(oid,(10));
} else {
return null;
}
})());
}
});
shadow.object.get_parent = (function shadow$object$get_parent(oref){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),shadow.object._id(oref));
if(cljs.core.truth_(temp__5735__auto__)){
var parent_id = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),parent_id);
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_parent', shadow.object.get_parent);
shadow.object.get_parent_of_type = (function shadow$object$get_parent_of_type(oref,parent_type){
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(oref);
while(true){
if(cljs.core.truth_(parent)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._type(parent),parent_type)){
return parent;
} else {
var G__49632 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__49632;
continue;
}
} else {
return null;
}
break;
}
});
goog.exportSymbol('shadow.object.get_parent_of_type', shadow.object.get_parent_of_type);
shadow.object.get_children = (function shadow$object$get_children(parent){
var parent_id = shadow.object._id(parent);
var child_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.instance_children),parent_id,cljs.core.PersistentVector.EMPTY);
var instances = cljs.core.deref(shadow.object.instances);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parent_id,child_ids,instances){
return (function (p1__49475_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__49475_SHARP_);
});})(parent_id,child_ids,instances))
,child_ids));
});
goog.exportSymbol('shadow.object.get_children', shadow.object.get_children);
shadow.object.tree_seq = (function shadow$object$tree_seq(var_args){
var G__49477 = arguments.length;
switch (G__49477) {
case 1:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('shadow.object.tree_seq', shadow.object.tree_seq);

shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1 = (function (root){
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2(root,(function (node){
return true;
}));
});

shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2 = (function (root,branch_QMARK_){
return cljs.core.tree_seq(branch_QMARK_,shadow.object.get_children,root);
});

shadow.object.tree_seq.cljs$lang$maxFixedArity = 2;

shadow.object.get_children_of_type = (function shadow$object$get_children_of_type(oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (type_kw){
return (function (p1__49478_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__49478_SHARP_));
});})(type_kw))
,shadow.object.get_children(oref));
});
/**
 * basically (get-children (:parent this))
 */
shadow.object.get_siblings = (function shadow$object$get_siblings(p__49479){
var map__49480 = p__49479;
var map__49480__$1 = (((((!((map__49480 == null))))?(((((map__49480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49480):map__49480);
var oref = map__49480__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49480__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.truth_(parent)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object has no parent, thus has no siblings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

return shadow.object.get_children(parent);
});
/**
 * returns set of all siblings of a common type
 */
shadow.object.get_siblings_of_type = (function shadow$object$get_siblings_of_type(var_args){
var G__49484 = arguments.length;
switch (G__49484) {
case 1:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2(oref,oref);
});

shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2 = (function (oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (type_kw){
return (function (p1__49482_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__49482_SHARP_));
});})(type_kw))
,shadow.object.get_siblings(oref));
});

shadow.object.get_siblings_of_type.cljs$lang$maxFixedArity = 2;

shadow.object.get_collection_item = (function shadow$object$get_collection_item(oref){
var item_key = new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,item_key);
});
/**
 * find the object that contains this dom node
 */
shadow.object.find_containing_object = (function shadow$object$find_containing_object(dom){
while(true){
var temp__5733__auto__ = shadow.object.get_from_dom(dom);
if(cljs.core.truth_(temp__5733__auto__)){
var obj = temp__5733__auto__;
return obj;
} else {
var temp__5735__auto__ = dom.parentElement;
if(cljs.core.truth_(temp__5735__auto__)){
var parent = temp__5735__auto__;
var G__49635 = parent;
dom = G__49635;
continue;
} else {
return null;
}
}
break;
}
});
shadow.object.notify_BANG_ = (function shadow$object$notify_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___49636 = arguments.length;
var i__4642__auto___49637 = (0);
while(true){
if((i__4642__auto___49637 < len__4641__auto___49636)){
args__4647__auto__.push((arguments[i__4642__auto___49637]));

var G__49638 = (i__4642__auto___49637 + (1));
i__4642__auto___49637 = G__49638;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var temp__5735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),ev], null));
if(cljs.core.truth_(temp__5735__auto__)){
var reactions_to_trigger = temp__5735__auto__;
var seq__49488 = cljs.core.seq(reactions_to_trigger);
var chunk__49489 = null;
var count__49490 = (0);
var i__49491 = (0);
while(true){
if((i__49491 < count__49490)){
var rfn = chunk__49489.cljs$core$IIndexed$_nth$arity$2(null,i__49491);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__49639 = seq__49488;
var G__49640 = chunk__49489;
var G__49641 = count__49490;
var G__49642 = (i__49491 + (1));
seq__49488 = G__49639;
chunk__49489 = G__49640;
count__49490 = G__49641;
i__49491 = G__49642;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__49488);
if(temp__5735__auto____$1){
var seq__49488__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__49488__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__49488__$1);
var G__49643 = cljs.core.chunk_rest(seq__49488__$1);
var G__49644 = c__4461__auto__;
var G__49645 = cljs.core.count(c__4461__auto__);
var G__49646 = (0);
seq__49488 = G__49643;
chunk__49489 = G__49644;
count__49490 = G__49645;
i__49491 = G__49646;
continue;
} else {
var rfn = cljs.core.first(seq__49488__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__49647 = cljs.core.next(seq__49488__$1);
var G__49648 = null;
var G__49649 = (0);
var G__49650 = (0);
seq__49488 = G__49647;
chunk__49489 = G__49648;
count__49490 = G__49649;
i__49491 = G__49650;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});

shadow.object.notify_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
shadow.object.notify_BANG_.cljs$lang$applyTo = (function (seq49485){
var G__49486 = cljs.core.first(seq49485);
var seq49485__$1 = cljs.core.next(seq49485);
var G__49487 = cljs.core.first(seq49485__$1);
var seq49485__$2 = cljs.core.next(seq49485__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49486,G__49487,seq49485__$2);
});

shadow.object.do_notify_tree = (function shadow$object$do_notify_tree(current_obj,ev,notify_fn){
var seq__49492_49651 = cljs.core.seq(shadow.object.get_children(current_obj));
var chunk__49493_49652 = null;
var count__49494_49653 = (0);
var i__49495_49654 = (0);
while(true){
if((i__49495_49654 < count__49494_49653)){
var child_49655 = chunk__49493_49652.cljs$core$IIndexed$_nth$arity$2(null,i__49495_49654);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_49655,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_49655,ev,notify_fn));


var G__49656 = seq__49492_49651;
var G__49657 = chunk__49493_49652;
var G__49658 = count__49494_49653;
var G__49659 = (i__49495_49654 + (1));
seq__49492_49651 = G__49656;
chunk__49493_49652 = G__49657;
count__49494_49653 = G__49658;
i__49495_49654 = G__49659;
continue;
} else {
var temp__5735__auto___49660 = cljs.core.seq(seq__49492_49651);
if(temp__5735__auto___49660){
var seq__49492_49661__$1 = temp__5735__auto___49660;
if(cljs.core.chunked_seq_QMARK_(seq__49492_49661__$1)){
var c__4461__auto___49662 = cljs.core.chunk_first(seq__49492_49661__$1);
var G__49663 = cljs.core.chunk_rest(seq__49492_49661__$1);
var G__49664 = c__4461__auto___49662;
var G__49665 = cljs.core.count(c__4461__auto___49662);
var G__49666 = (0);
seq__49492_49651 = G__49663;
chunk__49493_49652 = G__49664;
count__49494_49653 = G__49665;
i__49495_49654 = G__49666;
continue;
} else {
var child_49667 = cljs.core.first(seq__49492_49661__$1);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_49667,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_49667,ev,notify_fn));


var G__49668 = cljs.core.next(seq__49492_49661__$1);
var G__49669 = null;
var G__49670 = (0);
var G__49671 = (0);
seq__49492_49651 = G__49668;
chunk__49493_49652 = G__49669;
count__49494_49653 = G__49670;
i__49495_49654 = G__49671;
continue;
}
} else {
}
}
break;
}

return (notify_fn.cljs$core$IFn$_invoke$arity$1 ? notify_fn.cljs$core$IFn$_invoke$arity$1(current_obj) : notify_fn.call(null,current_obj));
});
shadow.object.notify_tree_BANG_ = (function shadow$object$notify_tree_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___49672 = arguments.length;
var i__4642__auto___49673 = (0);
while(true){
if((i__4642__auto___49673 < len__4641__auto___49672)){
args__4647__auto__.push((arguments[i__4642__auto___49673]));

var G__49674 = (i__4642__auto___49673 + (1));
i__4642__auto___49673 = G__49674;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var notify_fn = (function (obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,obj,ev,args);
});
return shadow.object.do_notify_tree(oref,ev,notify_fn);
});

shadow.object.notify_tree_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
shadow.object.notify_tree_BANG_.cljs$lang$applyTo = (function (seq49496){
var G__49497 = cljs.core.first(seq49496);
var seq49496__$1 = cljs.core.next(seq49496);
var G__49498 = cljs.core.first(seq49496__$1);
var seq49496__$2 = cljs.core.next(seq49496__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49497,G__49498,seq49496__$2);
});

shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
shadow.object.notify_up_BANG_ = (function shadow$object$notify_up_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___49675 = arguments.length;
var i__4642__auto___49676 = (0);
while(true){
if((i__4642__auto___49676 < len__4641__auto___49675)){
args__4647__auto__.push((arguments[i__4642__auto___49676]));

var G__49677 = (i__4642__auto___49676 + (1));
i__4642__auto___49676 = G__49677;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var current = shadow.object.get_parent(oref);
while(true){
if(cljs.core.truth_(current)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,current,ev,args);

var G__49678 = shadow.object.get_parent(current);
current = G__49678;
continue;
} else {
return null;
}
break;
}
});

shadow.object.notify_up_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
shadow.object.notify_up_BANG_.cljs$lang$applyTo = (function (seq49499){
var G__49500 = cljs.core.first(seq49499);
var seq49499__$1 = cljs.core.next(seq49499);
var G__49501 = cljs.core.first(seq49499__$1);
var seq49499__$2 = cljs.core.next(seq49499__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49500,G__49501,seq49499__$2);
});

shadow.object.update_BANG_ = (function shadow$object$update_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___49679 = arguments.length;
var i__4642__auto___49680 = (0);
while(true){
if((i__4642__auto___49680 < len__4641__auto___49679)){
args__4647__auto__.push((arguments[i__4642__auto___49680]));

var G__49681 = (i__4642__auto___49680 + (1));
i__4642__auto___49680 = G__49681;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,update_fn,args){
if(cljs.core.fn_QMARK_(update_fn)){
} else {
throw ["update! expects a fn as second arg, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_fn], 0)))].join('');
}

var id = shadow.object._id(oref);
var data = shadow.object._data(oref);
var work_fn = ((function (id,data){
return (function (data__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(update_fn,data__$1,args);
});})(id,data))
;
return shadow.object._update(oref,work_fn);
});

shadow.object.update_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
shadow.object.update_BANG_.cljs$lang$applyTo = (function (seq49502){
var G__49503 = cljs.core.first(seq49502);
var seq49502__$1 = cljs.core.next(seq49502);
var G__49504 = cljs.core.first(seq49502__$1);
var seq49502__$2 = cljs.core.next(seq49502__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49503,G__49504,seq49502__$2);
});

shadow.object.return_value = (function shadow$object$return_value(oref,return_value){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360),return_value], 0));
});
shadow.object.set_parent_BANG_ = (function shadow$object$set_parent_BANG_(child,parent){
var child_id = shadow.object._id(child);
var parent_id = shadow.object._id(parent);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instance_parent,cljs.core.assoc,child_id,parent_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.instance_children,((function (child_id,parent_id){
return (function (x){
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,child_id));
});})(child_id,parent_id))
);

return true;
});
shadow.object.dom_destroy = (function shadow$object$dom_destroy(this$,cause){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause,new cljs.core.Keyword(null,"parent","parent",-878878779))){
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
} else {
var temp__5733__auto__ = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dom","remove","dom/remove",-131527420));
if(cljs.core.truth_(temp__5733__auto__)){
var custom_remove = temp__5733__auto__;
var G__49505 = this$;
var G__49506 = new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$);
return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(G__49505,G__49506) : custom_remove.call(null,G__49505,G__49506));
} else {
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function shadow$object$destroy_BANG_(var_args){
var G__49508 = arguments.length;
switch (G__49508) {
case 1:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword(null,"direct","direct",-1775717856));
});

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,cause){
return shadow.object._destroy_BANG_(oref,cause);
});

shadow.object.destroy_BANG_.cljs$lang$maxFixedArity = 2;

shadow.object.bind_dom_events = (function shadow$object$bind_dom_events(oref,dom,dom_events){
if((cljs.core.rem(cljs.core.count(dom_events),(2)) === (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object defined invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object-type","object-type",-1889869015),shadow.object._type(oref),new cljs.core.Keyword("dom","events","dom/events",1793437527),dom_events], null));
}

var seq__49509 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dom_events));
var chunk__49510 = null;
var count__49511 = (0);
var i__49512 = (0);
while(true){
if((i__49512 < count__49511)){
var vec__49513 = chunk__49510.cljs$core$IIndexed$_nth$arity$2(null,i__49512);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49513,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49513,(1),null);
var ev_def = vec__49513;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0)))].join('');
} else {
}

var handler_49683__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__49509,chunk__49510,count__49511,i__49512,vec__49513,ev,handler,ev_def){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__49509,chunk__49510,count__49511,i__49512,vec__49513,ev,handler,ev_def))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__49509,chunk__49510,count__49511,i__49512,handler_49683__$1,vec__49513,ev,handler,ev_def){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_49683__$1.cljs$core$IFn$_invoke$arity$3 ? handler_49683__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_49683__$1.call(null,oref,e,el));
});})(seq__49509,chunk__49510,count__49511,i__49512,handler_49683__$1,vec__49513,ev,handler,ev_def))
);


var G__49684 = seq__49509;
var G__49685 = chunk__49510;
var G__49686 = count__49511;
var G__49687 = (i__49512 + (1));
seq__49509 = G__49684;
chunk__49510 = G__49685;
count__49511 = G__49686;
i__49512 = G__49687;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49509);
if(temp__5735__auto__){
var seq__49509__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49509__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__49509__$1);
var G__49688 = cljs.core.chunk_rest(seq__49509__$1);
var G__49689 = c__4461__auto__;
var G__49690 = cljs.core.count(c__4461__auto__);
var G__49691 = (0);
seq__49509 = G__49688;
chunk__49510 = G__49689;
count__49511 = G__49690;
i__49512 = G__49691;
continue;
} else {
var vec__49516 = cljs.core.first(seq__49509__$1);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49516,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49516,(1),null);
var ev_def = vec__49516;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0)))].join('');
} else {
}

var handler_49692__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__49509,chunk__49510,count__49511,i__49512,vec__49516,ev,handler,ev_def,seq__49509__$1,temp__5735__auto__){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__49509,chunk__49510,count__49511,i__49512,vec__49516,ev,handler,ev_def,seq__49509__$1,temp__5735__auto__))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__49509,chunk__49510,count__49511,i__49512,handler_49692__$1,vec__49516,ev,handler,ev_def,seq__49509__$1,temp__5735__auto__){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_49692__$1.cljs$core$IFn$_invoke$arity$3 ? handler_49692__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_49692__$1.call(null,oref,e,el));
});})(seq__49509,chunk__49510,count__49511,i__49512,handler_49692__$1,vec__49516,ev,handler,ev_def,seq__49509__$1,temp__5735__auto__))
);


var G__49693 = cljs.core.next(seq__49509__$1);
var G__49694 = null;
var G__49695 = (0);
var G__49696 = (0);
seq__49509 = G__49693;
chunk__49510 = G__49694;
count__49511 = G__49695;
i__49512 = G__49696;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function shadow$object$reaction_merge(result,p__49519){
var vec__49520 = p__49519;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49520,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49520,(1),null);
if(cljs.core.truth_((function (){var and__4036__auto__ = event;
if(cljs.core.truth_(and__4036__auto__)){
return handler;
} else {
return and__4036__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid reaction",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}

var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.List.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,handler));
});
shadow.object.merge_reactions = (function shadow$object$merge_reactions(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behaviors must be vectors",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(behavior))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid behavior",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.reaction_merge,result,cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),behavior)));
});
shadow.object.merge_behaviors = (function shadow$object$merge_behaviors(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,behavior);
} else {
if(cljs.core.map_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch","watch",380988277)], null),(function (watches){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(watches,new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","events","dom/events",1793437527)], null),(function (default$){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)));
}));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behavior not understood",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));

}
}
});
shadow.object.define = (function shadow$object$define(var_args){
var args__4647__auto__ = [];
var len__4641__auto___49697 = arguments.length;
var i__4642__auto___49698 = (0);
while(true){
if((i__4642__auto___49698 < len__4641__auto___49697)){
args__4647__auto__.push((arguments[i__4642__auto___49698]));

var G__49699 = (i__4642__auto___49698 + (1));
i__4642__auto___49698 = G__49699;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

shadow.object.define.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
if((id instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object id needs to be a keyword",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(args))){
} else {
throw ["invalid object definition ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))," args: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0)))].join('');
}

if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),id)){
console.warn(["object already defined ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
} else {
}

try{var odef = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args);
var reactions = shadow.object.merge_reactions(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY));
var odef__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(odef,new cljs.core.Keyword("shadow.object","id","shadow.object/id",-647954841),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),reactions], 0));
var odef__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.merge_behaviors,odef__$1,cljs.core.reverse(new cljs.core.Keyword(null,"behaviors","behaviors",120724909).cljs$core$IFn$_invoke$arity$2(odef__$1,cljs.core.PersistentVector.EMPTY)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.object_defs,cljs.core.assoc,id,odef__$2);

return odef__$2;
}catch (e49525){if((e49525 instanceof Object)){
var e = e49525;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
throw e49525;

}
}});

shadow.object.define.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.object.define.cljs$lang$applyTo = (function (seq49523){
var G__49524 = cljs.core.first(seq49523);
var seq49523__$1 = cljs.core.next(seq49523);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49524,seq49523__$1);
});

shadow.object.merge_defaults = (function shadow$object$merge_defaults(data,type){
var defaults = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"defaults","defaults",976027214)], null));
if((defaults == null)){
return data;
} else {
if(cljs.core.map_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,data], 0));
} else {
if(cljs.core.fn_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(defaults.cljs$core$IFn$_invoke$arity$0 ? defaults.cljs$core$IFn$_invoke$arity$0() : defaults.call(null)),data], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid object defaults",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaults","defaults",976027214),defaults,new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
}
}
});
shadow.object.make_dom = (function shadow$object$make_dom(var_args){
var G__49527 = arguments.length;
switch (G__49527) {
case 3:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3 = (function (oref,dom_key,events_key){
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4(oref,dom_key,events_key,null);
});

shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4 = (function (oref,dom_key,events_key,value){
var dom_fn = (((dom_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(oref,dom_key):dom_key);
var events = (((events_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3(oref,events_key,cljs.core.PersistentVector.EMPTY):events_key);
var dom = (function (){var G__49528 = (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__49528) : shadow.dom.build.call(null,G__49528));
})();
shadow.object.bind_dom_events(oref,dom,events);

return dom;
});

shadow.object.make_dom.cljs$lang$maxFixedArity = 4;

shadow.object.alive_QMARK_ = (function shadow$object$alive_QMARK_(obj){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.instances),shadow.object._id(obj));
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
shadow.object.Watch = (function (key,handler,__meta,__extmap,__hash){
this.key = key;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k49530,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__49534 = k49530;
var G__49534__$1 = (((G__49534 instanceof cljs.core.Keyword))?G__49534.fqn:null);
switch (G__49534__$1) {
case "key":
return self__.key;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49530,else__4304__auto__);

}
});

shadow.object.Watch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__49535){
var vec__49536 = p__49535;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49536,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49536,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

shadow.object.Watch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#shadow.object.Watch{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
});

shadow.object.Watch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49529){
var self__ = this;
var G__49529__$1 = this;
return (new cljs.core.RecordIter((0),G__49529__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.object.Watch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

shadow.object.Watch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.object.Watch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.object.Watch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__49539 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-17677043 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__49539(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49531,other49532){
var self__ = this;
var this49531__$1 = this;
return (((!((other49532 == null)))) && ((this49531__$1.constructor === other49532.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49531__$1.key,other49532.key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49531__$1.handler,other49532.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49531__$1.__extmap,other49532.__extmap)));
});

shadow.object.Watch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__49529){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__49540 = cljs.core.keyword_identical_QMARK_;
var expr__49541 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__49543 = new cljs.core.Keyword(null,"key","key",-1516042587);
var G__49544 = expr__49541;
return (pred__49540.cljs$core$IFn$_invoke$arity$2 ? pred__49540.cljs$core$IFn$_invoke$arity$2(G__49543,G__49544) : pred__49540.call(null,G__49543,G__49544));
})())){
return (new shadow.object.Watch(G__49529,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49545 = new cljs.core.Keyword(null,"handler","handler",-195596612);
var G__49546 = expr__49541;
return (pred__49540.cljs$core$IFn$_invoke$arity$2 ? pred__49540.cljs$core$IFn$_invoke$arity$2(G__49545,G__49546) : pred__49540.call(null,G__49545,G__49546));
})())){
return (new shadow.object.Watch(self__.key,G__49529,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__49529),null));
}
}
});

shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
});

shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__49529){
var self__ = this;
var this__4300__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,G__49529,self__.__extmap,self__.__hash));
});

shadow.object.Watch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

shadow.object.Watch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
});

shadow.object.Watch.cljs$lang$type = true;

shadow.object.Watch.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"shadow.object/Watch",null,(1),null));
});

shadow.object.Watch.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"shadow.object/Watch");
});

/**
 * Positional factory function for shadow.object/Watch.
 */
shadow.object.__GT_Watch = (function shadow$object$__GT_Watch(key,handler){
return (new shadow.object.Watch(key,handler,null,null,null));
});

/**
 * Factory function for shadow.object/Watch, taking a map of keywords to field values.
 */
shadow.object.map__GT_Watch = (function shadow$object$map__GT_Watch(G__49533){
var extmap__4340__auto__ = (function (){var G__49547 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49533,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0));
if(cljs.core.record_QMARK_(G__49533)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49547);
} else {
return G__49547;
}
})();
return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__49533),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__49533),null,cljs.core.not_empty(extmap__4340__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {shadow.object.IObject}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {shadow.dom.SVGElement}
 * @implements {cljs.core.ILookup}
*/
shadow.object.ObjectRef = (function (id,type,data,watches,result_chan){
this.id = id;
this.type = type;
this.data = data;
this.watches = watches;
this.result_chan = result_chan;
this.cljs$lang$protocol_mask$partition0$ = 2149613824;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.result_chan,handler);
});

shadow.object.ObjectRef.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
});

shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.data,k);
}
});

shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,d){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.data,k,d);
}
});

shadow.object.ObjectRef.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,["#<ObjectRef {:id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id),", :type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type),"}>"].join(''));
});

shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
});

shadow.object.ObjectRef.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof shadow.object.ObjectRef)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.shadow$object$IObject$_id$arity$1(null),shadow.object._id(other))));
});

shadow.object.ObjectRef.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.object.ObjectRef.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
});

shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
throw (new Error("who be calling?"));
});

shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.watches,(new shadow.object.Watch(key,f,null,null,null)));
});

shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p1__49548_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__49548_SHARP_));
});})(this$__$1))
,self__.watches);
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$ = cljs.core.PROTOCOL_SENTINEL;

shadow.object.ObjectRef.prototype.shadow$object$IObject$_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.type;
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$_data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$_update$arity$2 = (function (this$,update_fn){
var self__ = this;
var this$__$1 = this;
var old = self__.data;
var new$ = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(self__.data) : update_fn.call(null,self__.data));
self__.data = new$;

var seq__49549 = cljs.core.seq(self__.watches);
var chunk__49550 = null;
var count__49551 = (0);
var i__49552 = (0);
while(true){
if((i__49552 < count__49551)){
var map__49553 = chunk__49550.cljs$core$IIndexed$_nth$arity$2(null,i__49552);
var map__49553__$1 = (((((!((map__49553 == null))))?(((((map__49553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49553):map__49553);
var watch = map__49553__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49553__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49553__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__49702 = seq__49549;
var G__49703 = chunk__49550;
var G__49704 = count__49551;
var G__49705 = (i__49552 + (1));
seq__49549 = G__49702;
chunk__49550 = G__49703;
count__49551 = G__49704;
i__49552 = G__49705;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49549);
if(temp__5735__auto__){
var seq__49549__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49549__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__49549__$1);
var G__49706 = cljs.core.chunk_rest(seq__49549__$1);
var G__49707 = c__4461__auto__;
var G__49708 = cljs.core.count(c__4461__auto__);
var G__49709 = (0);
seq__49549 = G__49706;
chunk__49550 = G__49707;
count__49551 = G__49708;
i__49552 = G__49709;
continue;
} else {
var map__49555 = cljs.core.first(seq__49549__$1);
var map__49555__$1 = (((((!((map__49555 == null))))?(((((map__49555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49555):map__49555);
var watch = map__49555__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49555__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49555__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__49710 = cljs.core.next(seq__49549__$1);
var G__49711 = null;
var G__49712 = (0);
var G__49713 = (0);
seq__49549 = G__49710;
chunk__49550 = G__49711;
count__49551 = G__49712;
i__49552 = G__49713;
continue;
}
} else {
return null;
}
}
break;
}
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$_destroy_BANG_$arity$2 = (function (this$,cause){
var self__ = this;
var this$__$1 = this;
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),self__.id);
var seq__49557_49714 = cljs.core.seq(shadow.object.get_children(this$__$1));
var chunk__49558_49715 = null;
var count__49559_49716 = (0);
var i__49560_49717 = (0);
while(true){
if((i__49560_49717 < count__49559_49716)){
var child_49718 = chunk__49558_49715.cljs$core$IIndexed$_nth$arity$2(null,i__49560_49717);
shadow.object._destroy_BANG_(child_49718,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__49719 = seq__49557_49714;
var G__49720 = chunk__49558_49715;
var G__49721 = count__49559_49716;
var G__49722 = (i__49560_49717 + (1));
seq__49557_49714 = G__49719;
chunk__49558_49715 = G__49720;
count__49559_49716 = G__49721;
i__49560_49717 = G__49722;
continue;
} else {
var temp__5735__auto___49723 = cljs.core.seq(seq__49557_49714);
if(temp__5735__auto___49723){
var seq__49557_49724__$1 = temp__5735__auto___49723;
if(cljs.core.chunked_seq_QMARK_(seq__49557_49724__$1)){
var c__4461__auto___49725 = cljs.core.chunk_first(seq__49557_49724__$1);
var G__49726 = cljs.core.chunk_rest(seq__49557_49724__$1);
var G__49727 = c__4461__auto___49725;
var G__49728 = cljs.core.count(c__4461__auto___49725);
var G__49729 = (0);
seq__49557_49714 = G__49726;
chunk__49558_49715 = G__49727;
count__49559_49716 = G__49728;
i__49560_49717 = G__49729;
continue;
} else {
var child_49730 = cljs.core.first(seq__49557_49724__$1);
shadow.object._destroy_BANG_(child_49730,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__49731 = cljs.core.next(seq__49557_49724__$1);
var G__49732 = null;
var G__49733 = (0);
var G__49734 = (0);
seq__49557_49714 = G__49731;
chunk__49558_49715 = G__49732;
count__49559_49716 = G__49733;
i__49560_49717 = G__49734;
continue;
}
} else {
}
}
break;
}

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause], 0));

shadow.object.dom_destroy(this$__$1,cause);

var return_value_49735 = new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360).cljs$core$IFn$_invoke$arity$1(this$__$1);
if((return_value_49735 == null)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.result_chan,return_value_49735);
}

cljs.core.async.close_BANG_(self__.result_chan);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instances,cljs.core.dissoc,self__.id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instance_parent,cljs.core.dissoc,self__.id);

if(cljs.core.truth_(parent_id)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(shadow.object.instance_children,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0));
} else {
return null;
}
});

shadow.object.ObjectRef.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
});

shadow.object.ObjectRef.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null)], null);
});

shadow.object.ObjectRef.cljs$lang$type = true;

shadow.object.ObjectRef.cljs$lang$ctorStr = "shadow.object/ObjectRef";

shadow.object.ObjectRef.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"shadow.object/ObjectRef");
});

/**
 * Positional factory function for shadow.object/ObjectRef.
 */
shadow.object.__GT_ObjectRef = (function shadow$object$__GT_ObjectRef(id,type,data,watches,result_chan){
return (new shadow.object.ObjectRef(id,type,data,watches,result_chan));
});

shadow.object.add_reaction_BANG_ = (function shadow$object$add_reaction_BANG_(var_args){
var G__49562 = arguments.length;
switch (G__49562) {
case 3:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (oref,ev,handler_fn){
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,handler_fn], null));
});

shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,list){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,list], 0));
});

shadow.object.add_reaction_BANG_.cljs$lang$maxFixedArity = 3;

shadow.object.bind_change = (function shadow$object$bind_change(var_args){
var G__49564 = arguments.length;
switch (G__49564) {
case 3:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,callback){
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4(oref,attr,callback,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind-change"));
});

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4 = (function (oref,attr,callback,watch_key){
if((((!((oref == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === oref.shadow$object$IObject$))))?true:(((!oref.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("binding currently only supports shadow objects, other atoms might leak, may add later",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], null));
}

var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
return cljs.core.add_watch(oref,watch_key,((function (attr__$1){
return (function shadow$object$bind_change_watch(_,___$1,old,new$){
var ov = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old,attr__$1);
var nv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new$,attr__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ov,nv)){
return null;
} else {
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(ov,nv) : callback.call(null,ov,nv));
}
});})(attr__$1))
);
});

shadow.object.bind_change.cljs$lang$maxFixedArity = 4;

shadow.object.dom_enter = (function shadow$object$dom_enter(parent,child){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(parent,child);

if(cljs.core.truth_(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))){
return shadow.object.notify_tree_BANG_(child,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
} else {
return null;
}
});
shadow.object.create = (function shadow$object$create(var_args){
var args__4647__auto__ = [];
var len__4641__auto___49738 = arguments.length;
var i__4642__auto___49739 = (0);
while(true){
if((i__4642__auto___49739 < len__4641__auto___49738)){
args__4647__auto__.push((arguments[i__4642__auto___49739]));

var G__49740 = (i__4642__auto___49739 + (1));
i__4642__auto___49739 = G__49740;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

shadow.object.create.cljs$core$IFn$_invoke$arity$variadic = (function (type,args,node_children){
if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["cannot create unknown child type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.map_QMARK_(args)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("so/create second arg must be a map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

var oid = shadow.object.next_id();
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(args);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var odef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),type);
var obj = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shadow.object.merge_defaults(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword("shadow.object","object-id","shadow.object/object-id",-685993804),oid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.get.cljs$core$IFn$_invoke$arity$3(odef,new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.PersistentArrayMap.EMPTY)], 0)),type),new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dom","dom",-1236537922)], 0));
var oref = (new shadow.object.ObjectRef(oid,type,obj,cljs.core.PersistentVector.EMPTY,result_chan));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instances,cljs.core.assoc,oid,oref);

if(cljs.core.truth_(parent)){
shadow.object.set_parent_BANG_(oref,parent);
} else {
}

shadow.object.notify_BANG_(oref,new cljs.core.Keyword(null,"init","init",-1875481434));

var dom_events_49741 = new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);
var temp__5733__auto___49742 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5733__auto___49742)){
var dom_49743 = temp__5733__auto___49742;
shadow.dom.set_data(dom_49743,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.bind_dom_events(oref,dom_49743,dom_events_49741);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_49743], 0));

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_49743], 0));
} else {
var temp__5735__auto___49744 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5735__auto___49744)){
var dom_fn_49745 = temp__5735__auto___49744;
var dom_49746 = (function (){var G__49569 = (dom_fn_49745.cljs$core$IFn$_invoke$arity$2 ? dom_fn_49745.cljs$core$IFn$_invoke$arity$2(oref,node_children) : dom_fn_49745.call(null,oref,node_children));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__49569) : shadow.dom.build.call(null,G__49569));
})();
shadow.dom.set_data(dom_49746,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_49746], 0));

shadow.object.bind_dom_events(oref,dom_49746,dom_events_49741);

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_49746], 0));
} else {
}
}

var temp__5735__auto___49747 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5735__auto___49747)){
var watches_49748 = temp__5735__auto___49747;
var seq__49570_49749 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),watches_49748));
var chunk__49571_49750 = null;
var count__49572_49751 = (0);
var i__49573_49752 = (0);
while(true){
if((i__49573_49752 < count__49572_49751)){
var vec__49574_49753 = chunk__49571_49750.cljs$core$IIndexed$_nth$arity$2(null,i__49573_49752);
var attr_49754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49574_49753,(0),null);
var handler_49755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49574_49753,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_49754,((function (seq__49570_49749,chunk__49571_49750,count__49572_49751,i__49573_49752,vec__49574_49753,attr_49754,handler_49755,watches_49748,temp__5735__auto___49747,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_49755.cljs$core$IFn$_invoke$arity$3 ? handler_49755.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_49755.call(null,oref,old,new$));
});})(seq__49570_49749,chunk__49571_49750,count__49572_49751,i__49573_49752,vec__49574_49753,attr_49754,handler_49755,watches_49748,temp__5735__auto___49747,oid,parent,result_chan,odef,obj,oref))
);


var G__49756 = seq__49570_49749;
var G__49757 = chunk__49571_49750;
var G__49758 = count__49572_49751;
var G__49759 = (i__49573_49752 + (1));
seq__49570_49749 = G__49756;
chunk__49571_49750 = G__49757;
count__49572_49751 = G__49758;
i__49573_49752 = G__49759;
continue;
} else {
var temp__5735__auto___49760__$1 = cljs.core.seq(seq__49570_49749);
if(temp__5735__auto___49760__$1){
var seq__49570_49761__$1 = temp__5735__auto___49760__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49570_49761__$1)){
var c__4461__auto___49762 = cljs.core.chunk_first(seq__49570_49761__$1);
var G__49763 = cljs.core.chunk_rest(seq__49570_49761__$1);
var G__49764 = c__4461__auto___49762;
var G__49765 = cljs.core.count(c__4461__auto___49762);
var G__49766 = (0);
seq__49570_49749 = G__49763;
chunk__49571_49750 = G__49764;
count__49572_49751 = G__49765;
i__49573_49752 = G__49766;
continue;
} else {
var vec__49577_49767 = cljs.core.first(seq__49570_49761__$1);
var attr_49768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49577_49767,(0),null);
var handler_49769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49577_49767,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_49768,((function (seq__49570_49749,chunk__49571_49750,count__49572_49751,i__49573_49752,vec__49577_49767,attr_49768,handler_49769,seq__49570_49761__$1,temp__5735__auto___49760__$1,watches_49748,temp__5735__auto___49747,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_49769.cljs$core$IFn$_invoke$arity$3 ? handler_49769.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_49769.call(null,oref,old,new$));
});})(seq__49570_49749,chunk__49571_49750,count__49572_49751,i__49573_49752,vec__49577_49767,attr_49768,handler_49769,seq__49570_49761__$1,temp__5735__auto___49760__$1,watches_49748,temp__5735__auto___49747,oid,parent,result_chan,odef,obj,oref))
);


var G__49770 = cljs.core.next(seq__49570_49761__$1);
var G__49771 = null;
var G__49772 = (0);
var G__49773 = (0);
seq__49570_49749 = G__49770;
chunk__49571_49750 = G__49771;
count__49572_49751 = G__49772;
i__49573_49752 = G__49773;
continue;
}
} else {
}
}
break;
}
} else {
}

return oref;
});

shadow.object.create.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
shadow.object.create.cljs$lang$applyTo = (function (seq49566){
var G__49567 = cljs.core.first(seq49566);
var seq49566__$1 = cljs.core.next(seq49566);
var G__49568 = cljs.core.first(seq49566__$1);
var seq49566__$2 = cljs.core.next(seq49566__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49567,G__49568,seq49566__$2);
});

/**
 * [oref attr node-gen] produces a node via (node-gen new-value)
 * watches obj for changes and replaces the generated node on change (node-gen defaults to str)
 * 
 *   only use if the node has no attached behavior like clicks, use bind with an extra object for those
 */
shadow.object.bind_simple = (function shadow$object$bind_simple(var_args){
var G__49582 = arguments.length;
switch (G__49582) {
case 2:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2 = (function (oref,attr){
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3(oref,attr,cljs.core.str);
});

shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,node_gen){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var node_get = ((function (attr__$1){
return (function (p1__49580_SHARP_){
var G__49583 = (node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__49580_SHARP_) : node_gen.call(null,p1__49580_SHARP_));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__49583) : shadow.dom.build.call(null,G__49583));
});})(attr__$1))
;
var node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(node_get(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1)));
var bind_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind");
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,((function (attr__$1,node_get,node,bind_key){
return (function (old,new$){
var new_node = node_get(new$);
var current_node = cljs.core.deref(node);
shadow.dom.replace_node(current_node,new_node);

return cljs.core.reset_BANG_(node,new_node);
});})(attr__$1,node_get,node,bind_key))
);

return cljs.core.deref(node);
});

shadow.object.bind_simple.cljs$lang$maxFixedArity = 3;

/**
 * bind the given attribute a child item
 *   the item will be recreated whenever the value changes (old one will be destroyed)
 */
shadow.object.bind = (function shadow$object$bind(oref,attr,item_type,item_key,item_attrs){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var curval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1);
var make_child_fn = ((function (attr__$1,curval){
return (function (value){
return shadow.object.create(item_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_attrs,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),oref,item_key,value])], 0)));
});})(attr__$1,curval))
;
var child = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(make_child_fn(curval));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,((function (attr__$1,curval,make_child_fn,child){
return (function (old,new$){
var new_child = make_child_fn(new$);
var current_node = cljs.core.deref(child);
shadow.dom.replace_node(current_node,new_child);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(child));

cljs.core.reset_BANG_(child,new_child);

var G__49584 = new_child;
var G__49585 = new cljs.core.Keyword("dom","entered","dom/entered",506699596);
return (shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2 ? shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2(G__49584,G__49585) : shadow.object.notify_down_BANG_.call(null,G__49584,G__49585));
});})(attr__$1,curval,make_child_fn,child))
);

return cljs.core.deref(child);
});
shadow.object.coll_destroy_children = (function shadow$object$coll_destroy_children(children,c,diff){
var seq__49586_49775 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));
var chunk__49587_49776 = null;
var count__49588_49777 = (0);
var i__49589_49778 = (0);
while(true){
if((i__49589_49778 < count__49588_49777)){
var obj_49779 = chunk__49587_49776.cljs$core$IIndexed$_nth$arity$2(null,i__49589_49778);
var obj_49780__$1 = shadow.object.get_from_dom(obj_49779);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_49780__$1);


var G__49781 = seq__49586_49775;
var G__49782 = chunk__49587_49776;
var G__49783 = count__49588_49777;
var G__49784 = (i__49589_49778 + (1));
seq__49586_49775 = G__49781;
chunk__49587_49776 = G__49782;
count__49588_49777 = G__49783;
i__49589_49778 = G__49784;
continue;
} else {
var temp__5735__auto___49785 = cljs.core.seq(seq__49586_49775);
if(temp__5735__auto___49785){
var seq__49586_49786__$1 = temp__5735__auto___49785;
if(cljs.core.chunked_seq_QMARK_(seq__49586_49786__$1)){
var c__4461__auto___49787 = cljs.core.chunk_first(seq__49586_49786__$1);
var G__49788 = cljs.core.chunk_rest(seq__49586_49786__$1);
var G__49789 = c__4461__auto___49787;
var G__49790 = cljs.core.count(c__4461__auto___49787);
var G__49791 = (0);
seq__49586_49775 = G__49788;
chunk__49587_49776 = G__49789;
count__49588_49777 = G__49790;
i__49589_49778 = G__49791;
continue;
} else {
var obj_49792 = cljs.core.first(seq__49586_49786__$1);
var obj_49793__$1 = shadow.object.get_from_dom(obj_49792);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_49793__$1);


var G__49794 = cljs.core.next(seq__49586_49786__$1);
var G__49795 = null;
var G__49796 = (0);
var G__49797 = (0);
seq__49586_49775 = G__49794;
chunk__49587_49776 = G__49795;
count__49588_49777 = G__49796;
i__49589_49778 = G__49797;
continue;
}
} else {
}
}
break;
}

return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(0),(c + diff));
});
shadow.object.bind_children = (function shadow$object$bind_children(var_args){
var G__49592 = arguments.length;
switch (G__49592) {
case 5:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5 = (function (node,parent,attr,item_type,item_key){
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__49590_SHARP_){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__49590_SHARP_);
}));
});

shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6 = (function (node,parent,attr,item_type,item_key,coll_transform){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));
var make_item_fn = ((function (attr__$1,update_children,coll_dom){
return (function (p__49593){
var vec__49594 = p__49593;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49594,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49594,(1),null);
var obj = shadow.object.create(item_type,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048),attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616),key,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366),item_key,item_key,val]));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(obj,item_key,((function (obj,vec__49594,key,val,attr__$1,update_children,coll_dom){
return (function (old,new$){
var parent_key = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(obj));
(shadow.object.log.cljs$core$IFn$_invoke$arity$6 ? shadow.object.log.cljs$core$IFn$_invoke$arity$6("direct child update",parent,obj,key,parent_key,new$) : shadow.object.log.call(null,"direct child update",parent,obj,key,parent_key,new$));

cljs.core.reset_BANG_(update_children,false);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_key,new$], 0));

return cljs.core.reset_BANG_(update_children,true);
});})(obj,vec__49594,key,val,attr__$1,update_children,coll_dom))
);

return obj;
});})(attr__$1,update_children,coll_dom))
;
var seq__49597_49799 = cljs.core.seq((function (){var G__49601 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1);
return (coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(G__49601) : coll_transform.call(null,G__49601));
})());
var chunk__49598_49800 = null;
var count__49599_49801 = (0);
var i__49600_49802 = (0);
while(true){
if((i__49600_49802 < count__49599_49801)){
var item_49803 = chunk__49598_49800.cljs$core$IIndexed$_nth$arity$2(null,i__49600_49802);
shadow.object.dom_enter(coll_dom,make_item_fn(item_49803));


var G__49804 = seq__49597_49799;
var G__49805 = chunk__49598_49800;
var G__49806 = count__49599_49801;
var G__49807 = (i__49600_49802 + (1));
seq__49597_49799 = G__49804;
chunk__49598_49800 = G__49805;
count__49599_49801 = G__49806;
i__49600_49802 = G__49807;
continue;
} else {
var temp__5735__auto___49808 = cljs.core.seq(seq__49597_49799);
if(temp__5735__auto___49808){
var seq__49597_49809__$1 = temp__5735__auto___49808;
if(cljs.core.chunked_seq_QMARK_(seq__49597_49809__$1)){
var c__4461__auto___49810 = cljs.core.chunk_first(seq__49597_49809__$1);
var G__49811 = cljs.core.chunk_rest(seq__49597_49809__$1);
var G__49812 = c__4461__auto___49810;
var G__49813 = cljs.core.count(c__4461__auto___49810);
var G__49814 = (0);
seq__49597_49799 = G__49811;
chunk__49598_49800 = G__49812;
count__49599_49801 = G__49813;
i__49600_49802 = G__49814;
continue;
} else {
var item_49815 = cljs.core.first(seq__49597_49809__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_49815));


var G__49816 = cljs.core.next(seq__49597_49809__$1);
var G__49817 = null;
var G__49818 = (0);
var G__49819 = (0);
seq__49597_49799 = G__49816;
chunk__49598_49800 = G__49817;
count__49599_49801 = G__49818;
i__49600_49802 = G__49819;
continue;
}
} else {
}
}
break;
}

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(parent,attr__$1,((function (attr__$1,update_children,coll_dom,make_item_fn){
return (function shadow$object$bind_children_watch(old,new$){
if(cljs.core.truth_(cljs.core.deref(update_children))){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,shadow.dom.children(coll_dom));
var new_coll = cljs.core.vec((coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(new$) : coll_transform.call(null,new$)));
var count_children = cljs.core.count(children);
var count_new = cljs.core.count(new$);
var diff = (count_new - count_children);
var children__$1 = (((diff < (0)))?shadow.object.coll_destroy_children(children,count_children,diff):children);
var count_children__$1 = (function (){var x__4138__auto__ = count_new;
var y__4139__auto__ = count_children;
return ((x__4138__auto__ < y__4139__auto__) ? x__4138__auto__ : y__4139__auto__);
})();
var n__4518__auto___49820 = count_children__$1;
var idx_49821 = (0);
while(true){
if((idx_49821 < n__4518__auto___49820)){
var cn_49822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_49821);
var cc_49823 = shadow.object.get_from_dom(cn_49822);
var ckey_49824 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(cc_49823);
var cval_49825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_49823,item_key);
var vec__49602_49826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_49821);
var nkey_49827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49602_49826,(0),null);
var nval_49828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49602_49826,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_49824,nkey_49827)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_49825,nval_49828)))){
} else {
var new_obj_49829 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_49827,nval_49828], null));
shadow.dom.replace_node(cn_49822,new_obj_49829);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_49823);

shadow.object.notify_tree_BANG_(new_obj_49829,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
}

var G__49830 = (idx_49821 + (1));
idx_49821 = G__49830;
continue;
} else {
}
break;
}

if((diff > (0))){
var seq__49605_49831 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));
var chunk__49606_49832 = null;
var count__49607_49833 = (0);
var i__49608_49834 = (0);
while(true){
if((i__49608_49834 < count__49607_49833)){
var item_49835 = chunk__49606_49832.cljs$core$IIndexed$_nth$arity$2(null,i__49608_49834);
shadow.object.dom_enter(coll_dom,make_item_fn(item_49835));


var G__49836 = seq__49605_49831;
var G__49837 = chunk__49606_49832;
var G__49838 = count__49607_49833;
var G__49839 = (i__49608_49834 + (1));
seq__49605_49831 = G__49836;
chunk__49606_49832 = G__49837;
count__49607_49833 = G__49838;
i__49608_49834 = G__49839;
continue;
} else {
var temp__5735__auto___49840 = cljs.core.seq(seq__49605_49831);
if(temp__5735__auto___49840){
var seq__49605_49841__$1 = temp__5735__auto___49840;
if(cljs.core.chunked_seq_QMARK_(seq__49605_49841__$1)){
var c__4461__auto___49842 = cljs.core.chunk_first(seq__49605_49841__$1);
var G__49843 = cljs.core.chunk_rest(seq__49605_49841__$1);
var G__49844 = c__4461__auto___49842;
var G__49845 = cljs.core.count(c__4461__auto___49842);
var G__49846 = (0);
seq__49605_49831 = G__49843;
chunk__49606_49832 = G__49844;
count__49607_49833 = G__49845;
i__49608_49834 = G__49846;
continue;
} else {
var item_49847 = cljs.core.first(seq__49605_49841__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_49847));


var G__49848 = cljs.core.next(seq__49605_49841__$1);
var G__49849 = null;
var G__49850 = (0);
var G__49851 = (0);
seq__49605_49831 = G__49848;
chunk__49606_49832 = G__49849;
count__49607_49833 = G__49850;
i__49608_49834 = G__49851;
continue;
}
} else {
}
}
break;
}
} else {
}

return shadow.object.notify_BANG_(parent,new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160));
} else {
return null;
}
});})(attr__$1,update_children,coll_dom,make_item_fn))
);

return coll_dom;
});

shadow.object.bind_children.cljs$lang$maxFixedArity = 6;

shadow.object.remove_in_parent_BANG_ = (function shadow$object$remove_in_parent_BANG_(oref){
var parent = shadow.object.get_parent(oref);
var key = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(oref);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref));
var path = new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048).cljs$core$IFn$_invoke$arity$1(oref);
if(cljs.core.truth_((function (){var and__4036__auto__ = key;
if(cljs.core.truth_(and__4036__auto__)){
return path;
} else {
return and__4036__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("remove-in-parent! should only be called from items created via so/bind-children",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

var coll = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,path);
var new_coll = shadow.util.remove_item_from_coll(coll,key,value);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("bind","update","bind/update",1048601733),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,new_coll], 0));
});
shadow.object.inspect_BANG_ = (function shadow$object$inspect_BANG_(oref){
var G__49609 = "inspect!";
var G__49610 = shadow.object._id(oref);
var G__49611 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.object._type(oref));
var G__49612 = cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)));
return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__49609,G__49610,G__49611,G__49612) : shadow.object.info.call(null,G__49609,G__49610,G__49611,G__49612));
});
shadow.object.dump_BANG_ = (function shadow$object$dump_BANG_(){
(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));

var seq__49613_49852 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));
var chunk__49614_49853 = null;
var count__49615_49854 = (0);
var i__49616_49855 = (0);
while(true){
if((i__49616_49855 < count__49615_49854)){
var vec__49617_49856 = chunk__49614_49853.cljs$core$IIndexed$_nth$arity$2(null,i__49616_49855);
var id_49857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49617_49856,(0),null);
var oref_49858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49617_49856,(1),null);
var G__49620_49859 = "dump";
var G__49621_49860 = id_49857;
var G__49622_49861 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_49858)], 0));
var G__49623_49862 = cljs.core.deref(shadow.object._data(oref_49858));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__49620_49859,G__49621_49860,G__49622_49861,G__49623_49862) : shadow.object.info.call(null,G__49620_49859,G__49621_49860,G__49622_49861,G__49623_49862));


var G__49863 = seq__49613_49852;
var G__49864 = chunk__49614_49853;
var G__49865 = count__49615_49854;
var G__49866 = (i__49616_49855 + (1));
seq__49613_49852 = G__49863;
chunk__49614_49853 = G__49864;
count__49615_49854 = G__49865;
i__49616_49855 = G__49866;
continue;
} else {
var temp__5735__auto___49867 = cljs.core.seq(seq__49613_49852);
if(temp__5735__auto___49867){
var seq__49613_49868__$1 = temp__5735__auto___49867;
if(cljs.core.chunked_seq_QMARK_(seq__49613_49868__$1)){
var c__4461__auto___49869 = cljs.core.chunk_first(seq__49613_49868__$1);
var G__49870 = cljs.core.chunk_rest(seq__49613_49868__$1);
var G__49871 = c__4461__auto___49869;
var G__49872 = cljs.core.count(c__4461__auto___49869);
var G__49873 = (0);
seq__49613_49852 = G__49870;
chunk__49614_49853 = G__49871;
count__49615_49854 = G__49872;
i__49616_49855 = G__49873;
continue;
} else {
var vec__49624_49874 = cljs.core.first(seq__49613_49868__$1);
var id_49875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49624_49874,(0),null);
var oref_49876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49624_49874,(1),null);
var G__49627_49877 = "dump";
var G__49628_49878 = id_49875;
var G__49629_49879 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_49876)], 0));
var G__49630_49880 = cljs.core.deref(shadow.object._data(oref_49876));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__49627_49877,G__49628_49878,G__49629_49879,G__49630_49880) : shadow.object.info.call(null,G__49627_49877,G__49628_49878,G__49629_49879,G__49630_49880));


var G__49881 = cljs.core.next(seq__49613_49868__$1);
var G__49882 = null;
var G__49883 = (0);
var G__49884 = (0);
seq__49613_49852 = G__49881;
chunk__49614_49853 = G__49882;
count__49615_49854 = G__49883;
i__49616_49855 = G__49884;
continue;
}
} else {
}
}
break;
}

return (shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- //LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- //LIVE OBJECTS ------------"));
});
goog.exportSymbol('shadow.object.dump_BANG_', shadow.object.dump_BANG_);

//# sourceMappingURL=shadow.object.js.map
