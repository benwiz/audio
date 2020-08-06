goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4647__auto__ = [];
var len__4641__auto___50401 = arguments.length;
var i__4642__auto___50402 = (0);
while(true){
if((i__4642__auto___50402 < len__4641__auto___50401)){
args__4647__auto__.push((arguments[i__4642__auto___50402]));

var G__50403 = (i__4642__auto___50402 + (1));
i__4642__auto___50402 = G__50403;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq50269){
var G__50270 = cljs.core.first(seq50269);
var seq50269__$1 = cljs.core.next(seq50269);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50270,seq50269__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__50289){
var map__50290 = p__50289;
var map__50290__$1 = (((((!((map__50290 == null))))?(((((map__50290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50290):map__50290);
var src = map__50290__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50290__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50290__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4047__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__50292 = cljs.core.seq(sources);
var chunk__50293 = null;
var count__50294 = (0);
var i__50295 = (0);
while(true){
if((i__50295 < count__50294)){
var map__50296 = chunk__50293.cljs$core$IIndexed$_nth$arity$2(null,i__50295);
var map__50296__$1 = (((((!((map__50296 == null))))?(((((map__50296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50296):map__50296);
var src = map__50296__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50296__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50296__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50296__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50296__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__50404 = seq__50292;
var G__50405 = chunk__50293;
var G__50406 = count__50294;
var G__50407 = (i__50295 + (1));
seq__50292 = G__50404;
chunk__50293 = G__50405;
count__50294 = G__50406;
i__50295 = G__50407;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50292);
if(temp__5735__auto__){
var seq__50292__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50292__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__50292__$1);
var G__50408 = cljs.core.chunk_rest(seq__50292__$1);
var G__50409 = c__4461__auto__;
var G__50410 = cljs.core.count(c__4461__auto__);
var G__50411 = (0);
seq__50292 = G__50408;
chunk__50293 = G__50409;
count__50294 = G__50410;
i__50295 = G__50411;
continue;
} else {
var map__50298 = cljs.core.first(seq__50292__$1);
var map__50298__$1 = (((((!((map__50298 == null))))?(((((map__50298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50298):map__50298);
var src = map__50298__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50298__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50298__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50298__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50298__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__50412 = cljs.core.next(seq__50292__$1);
var G__50413 = null;
var G__50414 = (0);
var G__50415 = (0);
seq__50292 = G__50412;
chunk__50293 = G__50413;
count__50294 = G__50414;
i__50295 = G__50415;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__50303 = cljs.core.seq(js_requires);
var chunk__50304 = null;
var count__50305 = (0);
var i__50306 = (0);
while(true){
if((i__50306 < count__50305)){
var js_ns = chunk__50304.cljs$core$IIndexed$_nth$arity$2(null,i__50306);
var require_str_50416 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50416);


var G__50417 = seq__50303;
var G__50418 = chunk__50304;
var G__50419 = count__50305;
var G__50420 = (i__50306 + (1));
seq__50303 = G__50417;
chunk__50304 = G__50418;
count__50305 = G__50419;
i__50306 = G__50420;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50303);
if(temp__5735__auto__){
var seq__50303__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50303__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__50303__$1);
var G__50421 = cljs.core.chunk_rest(seq__50303__$1);
var G__50422 = c__4461__auto__;
var G__50423 = cljs.core.count(c__4461__auto__);
var G__50424 = (0);
seq__50303 = G__50421;
chunk__50304 = G__50422;
count__50305 = G__50423;
i__50306 = G__50424;
continue;
} else {
var js_ns = cljs.core.first(seq__50303__$1);
var require_str_50425 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50425);


var G__50426 = cljs.core.next(seq__50303__$1);
var G__50427 = null;
var G__50428 = (0);
var G__50429 = (0);
seq__50303 = G__50426;
chunk__50304 = G__50427;
count__50305 = G__50428;
i__50306 = G__50429;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__50308 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__50308) : callback.call(null,G__50308));
} else {
var G__50309 = shadow.cljs.devtools.client.env.files_url();
var G__50310 = ((function (G__50309){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__50309))
;
var G__50311 = "POST";
var G__50312 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__50313 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__50309,G__50310,G__50311,G__50312,G__50313);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__50315){
var map__50316 = p__50315;
var map__50316__$1 = (((((!((map__50316 == null))))?(((((map__50316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50316):map__50316);
var msg = map__50316__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50316__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50316__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__50318 = info;
var map__50318__$1 = (((((!((map__50318 == null))))?(((((map__50318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50318):map__50318);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50318__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50318__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4434__auto__ = ((function (map__50318,map__50318__$1,sources,compiled,map__50316,map__50316__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50320(s__50321){
return (new cljs.core.LazySeq(null,((function (map__50318,map__50318__$1,sources,compiled,map__50316,map__50316__$1,msg,info,reload_info){
return (function (){
var s__50321__$1 = s__50321;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50321__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__50326 = cljs.core.first(xs__6292__auto__);
var map__50326__$1 = (((((!((map__50326 == null))))?(((((map__50326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50326):map__50326);
var src = map__50326__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50326__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50326__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4430__auto__ = ((function (s__50321__$1,map__50326,map__50326__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50318,map__50318__$1,sources,compiled,map__50316,map__50316__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50320_$_iter__50322(s__50323){
return (new cljs.core.LazySeq(null,((function (s__50321__$1,map__50326,map__50326__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50318,map__50318__$1,sources,compiled,map__50316,map__50316__$1,msg,info,reload_info){
return (function (){
var s__50323__$1 = s__50323;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__50323__$1);
if(temp__5735__auto____$1){
var s__50323__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50323__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__50323__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__50325 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__50324 = (0);
while(true){
if((i__50324 < size__4433__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__50324);
cljs.core.chunk_append(b__50325,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__50430 = (i__50324 + (1));
i__50324 = G__50430;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50325),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50320_$_iter__50322(cljs.core.chunk_rest(s__50323__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50325),null);
}
} else {
var warning = cljs.core.first(s__50323__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50320_$_iter__50322(cljs.core.rest(s__50323__$2)));
}
} else {
return null;
}
break;
}
});})(s__50321__$1,map__50326,map__50326__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50318,map__50318__$1,sources,compiled,map__50316,map__50316__$1,msg,info,reload_info))
,null,null));
});})(s__50321__$1,map__50326,map__50326__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50318,map__50318__$1,sources,compiled,map__50316,map__50316__$1,msg,info,reload_info))
;
var fs__4431__auto__ = cljs.core.seq(iterys__4430__auto__(warnings));
if(fs__4431__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4431__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50320(cljs.core.rest(s__50321__$1)));
} else {
var G__50431 = cljs.core.rest(s__50321__$1);
s__50321__$1 = G__50431;
continue;
}
} else {
var G__50432 = cljs.core.rest(s__50321__$1);
s__50321__$1 = G__50432;
continue;
}
} else {
return null;
}
break;
}
});})(map__50318,map__50318__$1,sources,compiled,map__50316,map__50316__$1,msg,info,reload_info))
,null,null));
});})(map__50318,map__50318__$1,sources,compiled,map__50316,map__50316__$1,msg,info,reload_info))
;
return iter__4434__auto__(sources);
})()));
var seq__50328_50433 = cljs.core.seq(warnings);
var chunk__50329_50434 = null;
var count__50330_50435 = (0);
var i__50331_50436 = (0);
while(true){
if((i__50331_50436 < count__50330_50435)){
var map__50332_50437 = chunk__50329_50434.cljs$core$IIndexed$_nth$arity$2(null,i__50331_50436);
var map__50332_50438__$1 = (((((!((map__50332_50437 == null))))?(((((map__50332_50437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50332_50437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50332_50437):map__50332_50437);
var w_50439 = map__50332_50438__$1;
var msg_50440__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50332_50438__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50332_50438__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50332_50438__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50443 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50332_50438__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50443)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50441),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50442),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50440__$1)].join(''));


var G__50444 = seq__50328_50433;
var G__50445 = chunk__50329_50434;
var G__50446 = count__50330_50435;
var G__50447 = (i__50331_50436 + (1));
seq__50328_50433 = G__50444;
chunk__50329_50434 = G__50445;
count__50330_50435 = G__50446;
i__50331_50436 = G__50447;
continue;
} else {
var temp__5735__auto___50448 = cljs.core.seq(seq__50328_50433);
if(temp__5735__auto___50448){
var seq__50328_50449__$1 = temp__5735__auto___50448;
if(cljs.core.chunked_seq_QMARK_(seq__50328_50449__$1)){
var c__4461__auto___50450 = cljs.core.chunk_first(seq__50328_50449__$1);
var G__50451 = cljs.core.chunk_rest(seq__50328_50449__$1);
var G__50452 = c__4461__auto___50450;
var G__50453 = cljs.core.count(c__4461__auto___50450);
var G__50454 = (0);
seq__50328_50433 = G__50451;
chunk__50329_50434 = G__50452;
count__50330_50435 = G__50453;
i__50331_50436 = G__50454;
continue;
} else {
var map__50334_50455 = cljs.core.first(seq__50328_50449__$1);
var map__50334_50456__$1 = (((((!((map__50334_50455 == null))))?(((((map__50334_50455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50334_50455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50334_50455):map__50334_50455);
var w_50457 = map__50334_50456__$1;
var msg_50458__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50334_50456__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50334_50456__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50460 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50334_50456__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50334_50456__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50461)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50459),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50460),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50458__$1)].join(''));


var G__50462 = cljs.core.next(seq__50328_50449__$1);
var G__50463 = null;
var G__50464 = (0);
var G__50465 = (0);
seq__50328_50433 = G__50462;
chunk__50329_50434 = G__50463;
count__50330_50435 = G__50464;
i__50331_50436 = G__50465;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__50318,map__50318__$1,sources,compiled,warnings,map__50316,map__50316__$1,msg,info,reload_info){
return (function (p__50336){
var map__50337 = p__50336;
var map__50337__$1 = (((((!((map__50337 == null))))?(((((map__50337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50337):map__50337);
var src = map__50337__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50337__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50337__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__50318,map__50318__$1,sources,compiled,warnings,map__50316,map__50316__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__50318,map__50318__$1,sources,compiled,warnings,map__50316,map__50316__$1,msg,info,reload_info){
return (function (p__50340){
var map__50341 = p__50340;
var map__50341__$1 = (((((!((map__50341 == null))))?(((((map__50341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50341):map__50341);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50341__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__50318,map__50318__$1,sources,compiled,warnings,map__50316,map__50316__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__50318,map__50318__$1,sources,compiled,warnings,map__50316,map__50316__$1,msg,info,reload_info){
return (function (p__50344){
var map__50345 = p__50344;
var map__50345__$1 = (((((!((map__50345 == null))))?(((((map__50345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50345):map__50345);
var rc = map__50345__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50345__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__50318,map__50318__$1,sources,compiled,warnings,map__50316,map__50316__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__50318,map__50318__$1,sources,compiled,warnings,map__50316,map__50316__$1,msg,info,reload_info){
return (function (p1__50314_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__50314_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__50318,map__50318__$1,sources,compiled,warnings,map__50316,map__50316__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4036__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4036__auto__){
var and__4036__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4036__auto____$1){
return new$;
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__50347){
var map__50348 = p__50347;
var map__50348__$1 = (((((!((map__50348 == null))))?(((((map__50348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50348):map__50348);
var msg = map__50348__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50348__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__50350 = cljs.core.seq(updates);
var chunk__50352 = null;
var count__50353 = (0);
var i__50354 = (0);
while(true){
if((i__50354 < count__50353)){
var path = chunk__50352.cljs$core$IIndexed$_nth$arity$2(null,i__50354);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50356_50466 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50359_50467 = null;
var count__50360_50468 = (0);
var i__50361_50469 = (0);
while(true){
if((i__50361_50469 < count__50360_50468)){
var node_50470 = chunk__50359_50467.cljs$core$IIndexed$_nth$arity$2(null,i__50361_50469);
var path_match_50471 = shadow.cljs.devtools.client.browser.match_paths(node_50470.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50471)){
var new_link_50472 = (function (){var G__50364 = node_50470.cloneNode(true);
G__50364.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50471),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50364;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50471], 0));

goog.dom.insertSiblingAfter(new_link_50472,node_50470);

goog.dom.removeNode(node_50470);


var G__50473 = seq__50356_50466;
var G__50474 = chunk__50359_50467;
var G__50475 = count__50360_50468;
var G__50476 = (i__50361_50469 + (1));
seq__50356_50466 = G__50473;
chunk__50359_50467 = G__50474;
count__50360_50468 = G__50475;
i__50361_50469 = G__50476;
continue;
} else {
var G__50477 = seq__50356_50466;
var G__50478 = chunk__50359_50467;
var G__50479 = count__50360_50468;
var G__50480 = (i__50361_50469 + (1));
seq__50356_50466 = G__50477;
chunk__50359_50467 = G__50478;
count__50360_50468 = G__50479;
i__50361_50469 = G__50480;
continue;
}
} else {
var temp__5735__auto___50481 = cljs.core.seq(seq__50356_50466);
if(temp__5735__auto___50481){
var seq__50356_50482__$1 = temp__5735__auto___50481;
if(cljs.core.chunked_seq_QMARK_(seq__50356_50482__$1)){
var c__4461__auto___50483 = cljs.core.chunk_first(seq__50356_50482__$1);
var G__50484 = cljs.core.chunk_rest(seq__50356_50482__$1);
var G__50485 = c__4461__auto___50483;
var G__50486 = cljs.core.count(c__4461__auto___50483);
var G__50487 = (0);
seq__50356_50466 = G__50484;
chunk__50359_50467 = G__50485;
count__50360_50468 = G__50486;
i__50361_50469 = G__50487;
continue;
} else {
var node_50488 = cljs.core.first(seq__50356_50482__$1);
var path_match_50489 = shadow.cljs.devtools.client.browser.match_paths(node_50488.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50489)){
var new_link_50490 = (function (){var G__50365 = node_50488.cloneNode(true);
G__50365.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50489),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50365;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50489], 0));

goog.dom.insertSiblingAfter(new_link_50490,node_50488);

goog.dom.removeNode(node_50488);


var G__50491 = cljs.core.next(seq__50356_50482__$1);
var G__50492 = null;
var G__50493 = (0);
var G__50494 = (0);
seq__50356_50466 = G__50491;
chunk__50359_50467 = G__50492;
count__50360_50468 = G__50493;
i__50361_50469 = G__50494;
continue;
} else {
var G__50495 = cljs.core.next(seq__50356_50482__$1);
var G__50496 = null;
var G__50497 = (0);
var G__50498 = (0);
seq__50356_50466 = G__50495;
chunk__50359_50467 = G__50496;
count__50360_50468 = G__50497;
i__50361_50469 = G__50498;
continue;
}
}
} else {
}
}
break;
}


var G__50499 = seq__50350;
var G__50500 = chunk__50352;
var G__50501 = count__50353;
var G__50502 = (i__50354 + (1));
seq__50350 = G__50499;
chunk__50352 = G__50500;
count__50353 = G__50501;
i__50354 = G__50502;
continue;
} else {
var G__50503 = seq__50350;
var G__50504 = chunk__50352;
var G__50505 = count__50353;
var G__50506 = (i__50354 + (1));
seq__50350 = G__50503;
chunk__50352 = G__50504;
count__50353 = G__50505;
i__50354 = G__50506;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50350);
if(temp__5735__auto__){
var seq__50350__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50350__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__50350__$1);
var G__50507 = cljs.core.chunk_rest(seq__50350__$1);
var G__50508 = c__4461__auto__;
var G__50509 = cljs.core.count(c__4461__auto__);
var G__50510 = (0);
seq__50350 = G__50507;
chunk__50352 = G__50508;
count__50353 = G__50509;
i__50354 = G__50510;
continue;
} else {
var path = cljs.core.first(seq__50350__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50366_50511 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50369_50512 = null;
var count__50370_50513 = (0);
var i__50371_50514 = (0);
while(true){
if((i__50371_50514 < count__50370_50513)){
var node_50515 = chunk__50369_50512.cljs$core$IIndexed$_nth$arity$2(null,i__50371_50514);
var path_match_50516 = shadow.cljs.devtools.client.browser.match_paths(node_50515.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50516)){
var new_link_50517 = (function (){var G__50374 = node_50515.cloneNode(true);
G__50374.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50516),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50374;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50516], 0));

goog.dom.insertSiblingAfter(new_link_50517,node_50515);

goog.dom.removeNode(node_50515);


var G__50518 = seq__50366_50511;
var G__50519 = chunk__50369_50512;
var G__50520 = count__50370_50513;
var G__50521 = (i__50371_50514 + (1));
seq__50366_50511 = G__50518;
chunk__50369_50512 = G__50519;
count__50370_50513 = G__50520;
i__50371_50514 = G__50521;
continue;
} else {
var G__50522 = seq__50366_50511;
var G__50523 = chunk__50369_50512;
var G__50524 = count__50370_50513;
var G__50525 = (i__50371_50514 + (1));
seq__50366_50511 = G__50522;
chunk__50369_50512 = G__50523;
count__50370_50513 = G__50524;
i__50371_50514 = G__50525;
continue;
}
} else {
var temp__5735__auto___50526__$1 = cljs.core.seq(seq__50366_50511);
if(temp__5735__auto___50526__$1){
var seq__50366_50527__$1 = temp__5735__auto___50526__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50366_50527__$1)){
var c__4461__auto___50528 = cljs.core.chunk_first(seq__50366_50527__$1);
var G__50529 = cljs.core.chunk_rest(seq__50366_50527__$1);
var G__50530 = c__4461__auto___50528;
var G__50531 = cljs.core.count(c__4461__auto___50528);
var G__50532 = (0);
seq__50366_50511 = G__50529;
chunk__50369_50512 = G__50530;
count__50370_50513 = G__50531;
i__50371_50514 = G__50532;
continue;
} else {
var node_50533 = cljs.core.first(seq__50366_50527__$1);
var path_match_50534 = shadow.cljs.devtools.client.browser.match_paths(node_50533.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50534)){
var new_link_50535 = (function (){var G__50375 = node_50533.cloneNode(true);
G__50375.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50534),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50375;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50534], 0));

goog.dom.insertSiblingAfter(new_link_50535,node_50533);

goog.dom.removeNode(node_50533);


var G__50536 = cljs.core.next(seq__50366_50527__$1);
var G__50537 = null;
var G__50538 = (0);
var G__50539 = (0);
seq__50366_50511 = G__50536;
chunk__50369_50512 = G__50537;
count__50370_50513 = G__50538;
i__50371_50514 = G__50539;
continue;
} else {
var G__50540 = cljs.core.next(seq__50366_50527__$1);
var G__50541 = null;
var G__50542 = (0);
var G__50543 = (0);
seq__50366_50511 = G__50540;
chunk__50369_50512 = G__50541;
count__50370_50513 = G__50542;
i__50371_50514 = G__50543;
continue;
}
}
} else {
}
}
break;
}


var G__50544 = cljs.core.next(seq__50350__$1);
var G__50545 = null;
var G__50546 = (0);
var G__50547 = (0);
seq__50350 = G__50544;
chunk__50352 = G__50545;
count__50353 = G__50546;
i__50354 = G__50547;
continue;
} else {
var G__50548 = cljs.core.next(seq__50350__$1);
var G__50549 = null;
var G__50550 = (0);
var G__50551 = (0);
seq__50350 = G__50548;
chunk__50352 = G__50549;
count__50353 = G__50550;
i__50354 = G__50551;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__50376){
var map__50377 = p__50376;
var map__50377__$1 = (((((!((map__50377 == null))))?(((((map__50377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50377):map__50377);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50377__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50377__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__50377,map__50377__$1,id,js){
return (function (){
return eval(js);
});})(map__50377,map__50377__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__50379){
var map__50380 = p__50379;
var map__50380__$1 = (((((!((map__50380 == null))))?(((((map__50380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50380):map__50380);
var msg = map__50380__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50380__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50380__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50380__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50380__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__50380,map__50380__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__50382){
var map__50383 = p__50382;
var map__50383__$1 = (((((!((map__50383 == null))))?(((((map__50383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50383):map__50383);
var src = map__50383__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50383__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4036__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4036__auto__;
}
});})(map__50380,map__50380__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__50380,map__50380__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__50380,map__50380__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__50385){
var map__50386 = p__50385;
var map__50386__$1 = (((((!((map__50386 == null))))?(((((map__50386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50386):map__50386);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50386__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50386__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__50386,map__50386__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__50386,map__50386__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__50388){
var map__50389 = p__50388;
var map__50389__$1 = (((((!((map__50389 == null))))?(((((map__50389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50389):map__50389);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50389__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50389__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__50391){
var map__50392 = p__50391;
var map__50392__$1 = (((((!((map__50392 == null))))?(((((map__50392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50392):map__50392);
var msg = map__50392__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50392__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__50394 = type;
var G__50394__$1 = (((G__50394 instanceof cljs.core.Keyword))?G__50394.fqn:null);
switch (G__50394__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__50395 = ["http",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((shadow.cljs.devtools.client.env.ssl)?"s":null)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/browser"].join('');
var G__50396 = ((function (G__50395){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__50395))
;
var G__50397 = "POST";
var G__50398 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__50399 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__50395,G__50396,G__50397,G__50398,G__50399);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4047__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e50400){var e = e50400;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___50553 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___50553)){
var s_50554 = temp__5735__auto___50553;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_50554.onclose = ((function (s_50554,temp__5735__auto___50553){
return (function (e){
return null;
});})(s_50554,temp__5735__auto___50553))
;

s_50554.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4036__auto__ = document;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4036__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
