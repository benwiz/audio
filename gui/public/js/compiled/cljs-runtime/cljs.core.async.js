goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__46137 = arguments.length;
switch (G__46137) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46138 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46138 = (function (f,blockable,meta46139){
this.f = f;
this.blockable = blockable;
this.meta46139 = meta46139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46140,meta46139__$1){
var self__ = this;
var _46140__$1 = this;
return (new cljs.core.async.t_cljs$core$async46138(self__.f,self__.blockable,meta46139__$1));
});

cljs.core.async.t_cljs$core$async46138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46140){
var self__ = this;
var _46140__$1 = this;
return self__.meta46139;
});

cljs.core.async.t_cljs$core$async46138.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46138.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46138.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async46138.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async46138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46139","meta46139",703235143,null)], null);
});

cljs.core.async.t_cljs$core$async46138.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46138";

cljs.core.async.t_cljs$core$async46138.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async46138");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46138.
 */
cljs.core.async.__GT_t_cljs$core$async46138 = (function cljs$core$async$__GT_t_cljs$core$async46138(f__$1,blockable__$1,meta46139){
return (new cljs.core.async.t_cljs$core$async46138(f__$1,blockable__$1,meta46139));
});

}

return (new cljs.core.async.t_cljs$core$async46138(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__46143 = arguments.length;
switch (G__46143) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__46145 = arguments.length;
switch (G__46145) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__46147 = arguments.length;
switch (G__46147) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_47588 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47588) : fn1.call(null,val_47588));
} else {
cljs.core.async.impl.dispatch.run(((function (val_47588,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47588) : fn1.call(null,val_47588));
});})(val_47588,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__46149 = arguments.length;
switch (G__46149) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5733__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___47605 = n;
var x_47606 = (0);
while(true){
if((x_47606 < n__4518__auto___47605)){
(a[x_47606] = x_47606);

var G__47607 = (x_47606 + (1));
x_47606 = G__47607;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46150 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46150 = (function (flag,meta46151){
this.flag = flag;
this.meta46151 = meta46151;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_46152,meta46151__$1){
var self__ = this;
var _46152__$1 = this;
return (new cljs.core.async.t_cljs$core$async46150(self__.flag,meta46151__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async46150.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_46152){
var self__ = this;
var _46152__$1 = this;
return self__.meta46151;
});})(flag))
;

cljs.core.async.t_cljs$core$async46150.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46150.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async46150.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46150.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46150.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46151","meta46151",1192514223,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async46150.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46150.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46150";

cljs.core.async.t_cljs$core$async46150.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async46150");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46150.
 */
cljs.core.async.__GT_t_cljs$core$async46150 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46150(flag__$1,meta46151){
return (new cljs.core.async.t_cljs$core$async46150(flag__$1,meta46151));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async46150(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46153 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46153 = (function (flag,cb,meta46154){
this.flag = flag;
this.cb = cb;
this.meta46154 = meta46154;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46155,meta46154__$1){
var self__ = this;
var _46155__$1 = this;
return (new cljs.core.async.t_cljs$core$async46153(self__.flag,self__.cb,meta46154__$1));
});

cljs.core.async.t_cljs$core$async46153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46155){
var self__ = this;
var _46155__$1 = this;
return self__.meta46154;
});

cljs.core.async.t_cljs$core$async46153.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46153.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async46153.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46153.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async46153.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46154","meta46154",-1823075509,null)], null);
});

cljs.core.async.t_cljs$core$async46153.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46153.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46153";

cljs.core.async.t_cljs$core$async46153.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async46153");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46153.
 */
cljs.core.async.__GT_t_cljs$core$async46153 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46153(flag__$1,cb__$1,meta46154){
return (new cljs.core.async.t_cljs$core$async46153(flag__$1,cb__$1,meta46154));
});

}

return (new cljs.core.async.t_cljs$core$async46153(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46156_SHARP_){
var G__46158 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46156_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46158) : fret.call(null,G__46158));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46157_SHARP_){
var G__46159 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46157_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46159) : fret.call(null,G__46159));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47632 = (i + (1));
i = G__47632;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4036__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4036__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___47636 = arguments.length;
var i__4642__auto___47637 = (0);
while(true){
if((i__4642__auto___47637 < len__4641__auto___47636)){
args__4647__auto__.push((arguments[i__4642__auto___47637]));

var G__47638 = (i__4642__auto___47637 + (1));
i__4642__auto___47637 = G__47638;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46162){
var map__46163 = p__46162;
var map__46163__$1 = (((((!((map__46163 == null))))?(((((map__46163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46163):map__46163);
var opts = map__46163__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46160){
var G__46161 = cljs.core.first(seq46160);
var seq46160__$1 = cljs.core.next(seq46160);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46161,seq46160__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__46166 = arguments.length;
switch (G__46166) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__46074__auto___47648 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46074__auto___47648){
return (function (){
var f__46075__auto__ = (function (){var switch__45900__auto__ = ((function (c__46074__auto___47648){
return (function (state_46190){
var state_val_46191 = (state_46190[(1)]);
if((state_val_46191 === (7))){
var inst_46186 = (state_46190[(2)]);
var state_46190__$1 = state_46190;
var statearr_46192_47651 = state_46190__$1;
(statearr_46192_47651[(2)] = inst_46186);

(statearr_46192_47651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46191 === (1))){
var state_46190__$1 = state_46190;
var statearr_46193_47652 = state_46190__$1;
(statearr_46193_47652[(2)] = null);

(statearr_46193_47652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46191 === (4))){
var inst_46169 = (state_46190[(7)]);
var inst_46169__$1 = (state_46190[(2)]);
var inst_46170 = (inst_46169__$1 == null);
var state_46190__$1 = (function (){var statearr_46194 = state_46190;
(statearr_46194[(7)] = inst_46169__$1);

return statearr_46194;
})();
if(cljs.core.truth_(inst_46170)){
var statearr_46195_47653 = state_46190__$1;
(statearr_46195_47653[(1)] = (5));

} else {
var statearr_46196_47654 = state_46190__$1;
(statearr_46196_47654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46191 === (13))){
var state_46190__$1 = state_46190;
var statearr_46197_47655 = state_46190__$1;
(statearr_46197_47655[(2)] = null);

(statearr_46197_47655[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46191 === (6))){
var inst_46169 = (state_46190[(7)]);
var state_46190__$1 = state_46190;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46190__$1,(11),to,inst_46169);
} else {
if((state_val_46191 === (3))){
var inst_46188 = (state_46190[(2)]);
var state_46190__$1 = state_46190;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46190__$1,inst_46188);
} else {
if((state_val_46191 === (12))){
var state_46190__$1 = state_46190;
var statearr_46198_47657 = state_46190__$1;
(statearr_46198_47657[(2)] = null);

(statearr_46198_47657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46191 === (2))){
var state_46190__$1 = state_46190;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46190__$1,(4),from);
} else {
if((state_val_46191 === (11))){
var inst_46179 = (state_46190[(2)]);
var state_46190__$1 = state_46190;
if(cljs.core.truth_(inst_46179)){
var statearr_46199_47660 = state_46190__$1;
(statearr_46199_47660[(1)] = (12));

} else {
var statearr_46200_47661 = state_46190__$1;
(statearr_46200_47661[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46191 === (9))){
var state_46190__$1 = state_46190;
var statearr_46201_47663 = state_46190__$1;
(statearr_46201_47663[(2)] = null);

(statearr_46201_47663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46191 === (5))){
var state_46190__$1 = state_46190;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46202_47664 = state_46190__$1;
(statearr_46202_47664[(1)] = (8));

} else {
var statearr_46203_47665 = state_46190__$1;
(statearr_46203_47665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46191 === (14))){
var inst_46184 = (state_46190[(2)]);
var state_46190__$1 = state_46190;
var statearr_46204_47666 = state_46190__$1;
(statearr_46204_47666[(2)] = inst_46184);

(statearr_46204_47666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46191 === (10))){
var inst_46176 = (state_46190[(2)]);
var state_46190__$1 = state_46190;
var statearr_46205_47675 = state_46190__$1;
(statearr_46205_47675[(2)] = inst_46176);

(statearr_46205_47675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46191 === (8))){
var inst_46173 = cljs.core.async.close_BANG_(to);
var state_46190__$1 = state_46190;
var statearr_46206_47677 = state_46190__$1;
(statearr_46206_47677[(2)] = inst_46173);

(statearr_46206_47677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46074__auto___47648))
;
return ((function (switch__45900__auto__,c__46074__auto___47648){
return (function() {
var cljs$core$async$state_machine__45901__auto__ = null;
var cljs$core$async$state_machine__45901__auto____0 = (function (){
var statearr_46207 = [null,null,null,null,null,null,null,null];
(statearr_46207[(0)] = cljs$core$async$state_machine__45901__auto__);

(statearr_46207[(1)] = (1));

return statearr_46207;
});
var cljs$core$async$state_machine__45901__auto____1 = (function (state_46190){
while(true){
var ret_value__45902__auto__ = (function (){try{while(true){
var result__45903__auto__ = switch__45900__auto__(state_46190);
if(cljs.core.keyword_identical_QMARK_(result__45903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45903__auto__;
}
break;
}
}catch (e46208){if((e46208 instanceof Object)){
var ex__45904__auto__ = e46208;
var statearr_46209_47681 = state_46190;
(statearr_46209_47681[(5)] = ex__45904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46208;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47684 = state_46190;
state_46190 = G__47684;
continue;
} else {
return ret_value__45902__auto__;
}
break;
}
});
cljs$core$async$state_machine__45901__auto__ = function(state_46190){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45901__auto____1.call(this,state_46190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45901__auto____0;
cljs$core$async$state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45901__auto____1;
return cljs$core$async$state_machine__45901__auto__;
})()
;})(switch__45900__auto__,c__46074__auto___47648))
})();
var state__46076__auto__ = (function (){var statearr_46210 = (f__46075__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46075__auto__.cljs$core$IFn$_invoke$arity$0() : f__46075__auto__.call(null));
(statearr_46210[(6)] = c__46074__auto___47648);

return statearr_46210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46076__auto__);
});})(c__46074__auto___47648))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__46211){
var vec__46212 = p__46211;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46212,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46212,(1),null);
var job = vec__46212;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__46074__auto___47689 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46074__auto___47689,res,vec__46212,v,p,job,jobs,results){
return (function (){
var f__46075__auto__ = (function (){var switch__45900__auto__ = ((function (c__46074__auto___47689,res,vec__46212,v,p,job,jobs,results){
return (function (state_46219){
var state_val_46220 = (state_46219[(1)]);
if((state_val_46220 === (1))){
var state_46219__$1 = state_46219;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46219__$1,(2),res,v);
} else {
if((state_val_46220 === (2))){
var inst_46216 = (state_46219[(2)]);
var inst_46217 = cljs.core.async.close_BANG_(res);
var state_46219__$1 = (function (){var statearr_46221 = state_46219;
(statearr_46221[(7)] = inst_46216);

return statearr_46221;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46219__$1,inst_46217);
} else {
return null;
}
}
});})(c__46074__auto___47689,res,vec__46212,v,p,job,jobs,results))
;
return ((function (switch__45900__auto__,c__46074__auto___47689,res,vec__46212,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45901__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45901__auto____0 = (function (){
var statearr_46222 = [null,null,null,null,null,null,null,null];
(statearr_46222[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45901__auto__);

(statearr_46222[(1)] = (1));

return statearr_46222;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45901__auto____1 = (function (state_46219){
while(true){
var ret_value__45902__auto__ = (function (){try{while(true){
var result__45903__auto__ = switch__45900__auto__(state_46219);
if(cljs.core.keyword_identical_QMARK_(result__45903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45903__auto__;
}
break;
}
}catch (e46223){if((e46223 instanceof Object)){
var ex__45904__auto__ = e46223;
var statearr_46224_47690 = state_46219;
(statearr_46224_47690[(5)] = ex__45904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46223;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47691 = state_46219;
state_46219 = G__47691;
continue;
} else {
return ret_value__45902__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45901__auto__ = function(state_46219){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45901__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45901__auto____1.call(this,state_46219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45901__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45901__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45901__auto__;
})()
;})(switch__45900__auto__,c__46074__auto___47689,res,vec__46212,v,p,job,jobs,results))
})();
var state__46076__auto__ = (function (){var statearr_46225 = (f__46075__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46075__auto__.cljs$core$IFn$_invoke$arity$0() : f__46075__auto__.call(null));
(statearr_46225[(6)] = c__46074__auto___47689);

return statearr_46225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46076__auto__);
});})(c__46074__auto___47689,res,vec__46212,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__46226){
var vec__46227 = p__46226;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46227,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46227,(1),null);
var job = vec__46227;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___47692 = n;
var __47693 = (0);
while(true){
if((__47693 < n__4518__auto___47692)){
var G__46230_47694 = type;
var G__46230_47695__$1 = (((G__46230_47694 instanceof cljs.core.Keyword))?G__46230_47694.fqn:null);
switch (G__46230_47695__$1) {
case "compute":
var c__46074__auto___47698 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47693,c__46074__auto___47698,G__46230_47694,G__46230_47695__$1,n__4518__auto___47692,jobs,results,process,async){
return (function (){
var f__46075__auto__ = (function (){var switch__45900__auto__ = ((function (__47693,c__46074__auto___47698,G__46230_47694,G__46230_47695__$1,n__4518__auto___47692,jobs,results,process,async){
return (function (state_46243){
var state_val_46244 = (state_46243[(1)]);
if((state_val_46244 === (1))){
var state_46243__$1 = state_46243;
var statearr_46245_47702 = state_46243__$1;
(statearr_46245_47702[(2)] = null);

(statearr_46245_47702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46244 === (2))){
var state_46243__$1 = state_46243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46243__$1,(4),jobs);
} else {
if((state_val_46244 === (3))){
var inst_46241 = (state_46243[(2)]);
var state_46243__$1 = state_46243;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46243__$1,inst_46241);
} else {
if((state_val_46244 === (4))){
var inst_46233 = (state_46243[(2)]);
var inst_46234 = process(inst_46233);
var state_46243__$1 = state_46243;
if(cljs.core.truth_(inst_46234)){
var statearr_46246_47704 = state_46243__$1;
(statearr_46246_47704[(1)] = (5));

} else {
var statearr_46247_47705 = state_46243__$1;
(statearr_46247_47705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46244 === (5))){
var state_46243__$1 = state_46243;
var statearr_46248_47709 = state_46243__$1;
(statearr_46248_47709[(2)] = null);

(statearr_46248_47709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46244 === (6))){
var state_46243__$1 = state_46243;
var statearr_46249_47710 = state_46243__$1;
(statearr_46249_47710[(2)] = null);

(statearr_46249_47710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46244 === (7))){
var inst_46239 = (state_46243[(2)]);
var state_46243__$1 = state_46243;
var statearr_46250_47712 = state_46243__$1;
(statearr_46250_47712[(2)] = inst_46239);

(statearr_46250_47712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47693,c__46074__auto___47698,G__46230_47694,G__46230_47695__$1,n__4518__auto___47692,jobs,results,process,async))
;
return ((function (__47693,switch__45900__auto__,c__46074__auto___47698,G__46230_47694,G__46230_47695__$1,n__4518__auto___47692,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45901__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45901__auto____0 = (function (){
var statearr_46251 = [null,null,null,null,null,null,null];
(statearr_46251[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45901__auto__);

(statearr_46251[(1)] = (1));

return statearr_46251;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45901__auto____1 = (function (state_46243){
while(true){
var ret_value__45902__auto__ = (function (){try{while(true){
var result__45903__auto__ = switch__45900__auto__(state_46243);
if(cljs.core.keyword_identical_QMARK_(result__45903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45903__auto__;
}
break;
}
}catch (e46252){if((e46252 instanceof Object)){
var ex__45904__auto__ = e46252;
var statearr_46253_47713 = state_46243;
(statearr_46253_47713[(5)] = ex__45904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46252;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47714 = state_46243;
state_46243 = G__47714;
continue;
} else {
return ret_value__45902__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45901__auto__ = function(state_46243){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45901__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45901__auto____1.call(this,state_46243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45901__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45901__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45901__auto__;
})()
;})(__47693,switch__45900__auto__,c__46074__auto___47698,G__46230_47694,G__46230_47695__$1,n__4518__auto___47692,jobs,results,process,async))
})();
var state__46076__auto__ = (function (){var statearr_46254 = (f__46075__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46075__auto__.cljs$core$IFn$_invoke$arity$0() : f__46075__auto__.call(null));
(statearr_46254[(6)] = c__46074__auto___47698);

return statearr_46254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46076__auto__);
});})(__47693,c__46074__auto___47698,G__46230_47694,G__46230_47695__$1,n__4518__auto___47692,jobs,results,process,async))
);


break;
case "async":
var c__46074__auto___47718 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47693,c__46074__auto___47718,G__46230_47694,G__46230_47695__$1,n__4518__auto___47692,jobs,results,process,async){
return (function (){
var f__46075__auto__ = (function (){var switch__45900__auto__ = ((function (__47693,c__46074__auto___47718,G__46230_47694,G__46230_47695__$1,n__4518__auto___47692,jobs,results,process,async){
return (function (state_46267){
var state_val_46268 = (state_46267[(1)]);
if((state_val_46268 === (1))){
var state_46267__$1 = state_46267;
var statearr_46269_47719 = state_46267__$1;
(statearr_46269_47719[(2)] = null);

(statearr_46269_47719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46268 === (2))){
var state_46267__$1 = state_46267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46267__$1,(4),jobs);
} else {
if((state_val_46268 === (3))){
var inst_46265 = (state_46267[(2)]);
var state_46267__$1 = state_46267;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46267__$1,inst_46265);
} else {
if((state_val_46268 === (4))){
var inst_46257 = (state_46267[(2)]);
var inst_46258 = async(inst_46257);
var state_46267__$1 = state_46267;
if(cljs.core.truth_(inst_46258)){
var statearr_46270_47721 = state_46267__$1;
(statearr_46270_47721[(1)] = (5));

} else {
var statearr_46271_47722 = state_46267__$1;
(statearr_46271_47722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46268 === (5))){
var state_46267__$1 = state_46267;
var statearr_46272_47723 = state_46267__$1;
(statearr_46272_47723[(2)] = null);

(statearr_46272_47723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46268 === (6))){
var state_46267__$1 = state_46267;
var statearr_46273_47727 = state_46267__$1;
(statearr_46273_47727[(2)] = null);

(statearr_46273_47727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46268 === (7))){
var inst_46263 = (state_46267[(2)]);
var state_46267__$1 = state_46267;
var statearr_46274_47728 = state_46267__$1;
(statearr_46274_47728[(2)] = inst_46263);

(statearr_46274_47728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47693,c__46074__auto___47718,G__46230_47694,G__46230_47695__$1,n__4518__auto___47692,jobs,results,process,async))
;
return ((function (__47693,switch__45900__auto__,c__46074__auto___47718,G__46230_47694,G__46230_47695__$1,n__4518__auto___47692,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45901__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45901__auto____0 = (function (){
var statearr_46275 = [null,null,null,null,null,null,null];
(statearr_46275[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45901__auto__);

(statearr_46275[(1)] = (1));

return statearr_46275;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45901__auto____1 = (function (state_46267){
while(true){
var ret_value__45902__auto__ = (function (){try{while(true){
var result__45903__auto__ = switch__45900__auto__(state_46267);
if(cljs.core.keyword_identical_QMARK_(result__45903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45903__auto__;
}
break;
}
}catch (e46276){if((e46276 instanceof Object)){
var ex__45904__auto__ = e46276;
var statearr_46277_47730 = state_46267;
(statearr_46277_47730[(5)] = ex__45904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46276;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47731 = state_46267;
state_46267 = G__47731;
continue;
} else {
return ret_value__45902__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45901__auto__ = function(state_46267){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45901__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45901__auto____1.call(this,state_46267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45901__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45901__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45901__auto__;
})()
;})(__47693,switch__45900__auto__,c__46074__auto___47718,G__46230_47694,G__46230_47695__$1,n__4518__auto___47692,jobs,results,process,async))
})();
var state__46076__auto__ = (function (){var statearr_46278 = (f__46075__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46075__auto__.cljs$core$IFn$_invoke$arity$0() : f__46075__auto__.call(null));
(statearr_46278[(6)] = c__46074__auto___47718);

return statearr_46278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46076__auto__);
});})(__47693,c__46074__auto___47718,G__46230_47694,G__46230_47695__$1,n__4518__auto___47692,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46230_47695__$1)].join('')));

}

var G__47733 = (__47693 + (1));
__47693 = G__47733;
continue;
} else {
}
break;
}

var c__46074__auto___47734 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46074__auto___47734,jobs,results,process,async){
return (function (){
var f__46075__auto__ = (function (){var switch__45900__auto__ = ((function (c__46074__auto___47734,jobs,results,process,async){
return (function (state_46300){
var state_val_46301 = (state_46300[(1)]);
if((state_val_46301 === (7))){
var inst_46296 = (state_46300[(2)]);
var state_46300__$1 = state_46300;
var statearr_46302_47736 = state_46300__$1;
(statearr_46302_47736[(2)] = inst_46296);

(statearr_46302_47736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46301 === (1))){
var state_46300__$1 = state_46300;
var statearr_46303_47737 = state_46300__$1;
(statearr_46303_47737[(2)] = null);

(statearr_46303_47737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46301 === (4))){
var inst_46281 = (state_46300[(7)]);
var inst_46281__$1 = (state_46300[(2)]);
var inst_46282 = (inst_46281__$1 == null);
var state_46300__$1 = (function (){var statearr_46304 = state_46300;
(statearr_46304[(7)] = inst_46281__$1);

return statearr_46304;
})();
if(cljs.core.truth_(inst_46282)){
var statearr_46305_47738 = state_46300__$1;
(statearr_46305_47738[(1)] = (5));

} else {
var statearr_46306_47739 = state_46300__$1;
(statearr_46306_47739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46301 === (6))){
var inst_46281 = (state_46300[(7)]);
var inst_46286 = (state_46300[(8)]);
var inst_46286__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_46287 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46288 = [inst_46281,inst_46286__$1];
var inst_46289 = (new cljs.core.PersistentVector(null,2,(5),inst_46287,inst_46288,null));
var state_46300__$1 = (function (){var statearr_46307 = state_46300;
(statearr_46307[(8)] = inst_46286__$1);

return statearr_46307;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46300__$1,(8),jobs,inst_46289);
} else {
if((state_val_46301 === (3))){
var inst_46298 = (state_46300[(2)]);
var state_46300__$1 = state_46300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46300__$1,inst_46298);
} else {
if((state_val_46301 === (2))){
var state_46300__$1 = state_46300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46300__$1,(4),from);
} else {
if((state_val_46301 === (9))){
var inst_46293 = (state_46300[(2)]);
var state_46300__$1 = (function (){var statearr_46308 = state_46300;
(statearr_46308[(9)] = inst_46293);

return statearr_46308;
})();
var statearr_46309_47742 = state_46300__$1;
(statearr_46309_47742[(2)] = null);

(statearr_46309_47742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46301 === (5))){
var inst_46284 = cljs.core.async.close_BANG_(jobs);
var state_46300__$1 = state_46300;
var statearr_46310_47743 = state_46300__$1;
(statearr_46310_47743[(2)] = inst_46284);

(statearr_46310_47743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46301 === (8))){
var inst_46286 = (state_46300[(8)]);
var inst_46291 = (state_46300[(2)]);
var state_46300__$1 = (function (){var statearr_46311 = state_46300;
(statearr_46311[(10)] = inst_46291);

return statearr_46311;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46300__$1,(9),results,inst_46286);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__46074__auto___47734,jobs,results,process,async))
;
return ((function (switch__45900__auto__,c__46074__auto___47734,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45901__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45901__auto____0 = (function (){
var statearr_46312 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46312[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45901__auto__);

(statearr_46312[(1)] = (1));

return statearr_46312;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45901__auto____1 = (function (state_46300){
while(true){
var ret_value__45902__auto__ = (function (){try{while(true){
var result__45903__auto__ = switch__45900__auto__(state_46300);
if(cljs.core.keyword_identical_QMARK_(result__45903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45903__auto__;
}
break;
}
}catch (e46313){if((e46313 instanceof Object)){
var ex__45904__auto__ = e46313;
var statearr_46314_47744 = state_46300;
(statearr_46314_47744[(5)] = ex__45904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46313;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47745 = state_46300;
state_46300 = G__47745;
continue;
} else {
return ret_value__45902__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45901__auto__ = function(state_46300){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45901__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45901__auto____1.call(this,state_46300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45901__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45901__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45901__auto__;
})()
;})(switch__45900__auto__,c__46074__auto___47734,jobs,results,process,async))
})();
var state__46076__auto__ = (function (){var statearr_46315 = (f__46075__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46075__auto__.cljs$core$IFn$_invoke$arity$0() : f__46075__auto__.call(null));
(statearr_46315[(6)] = c__46074__auto___47734);

return statearr_46315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46076__auto__);
});})(c__46074__auto___47734,jobs,results,process,async))
);


var c__46074__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46074__auto__,jobs,results,process,async){
return (function (){
var f__46075__auto__ = (function (){var switch__45900__auto__ = ((function (c__46074__auto__,jobs,results,process,async){
return (function (state_46353){
var state_val_46354 = (state_46353[(1)]);
if((state_val_46354 === (7))){
var inst_46349 = (state_46353[(2)]);
var state_46353__$1 = state_46353;
var statearr_46355_47748 = state_46353__$1;
(statearr_46355_47748[(2)] = inst_46349);

(statearr_46355_47748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (20))){
var state_46353__$1 = state_46353;
var statearr_46356_47749 = state_46353__$1;
(statearr_46356_47749[(2)] = null);

(statearr_46356_47749[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (1))){
var state_46353__$1 = state_46353;
var statearr_46357_47750 = state_46353__$1;
(statearr_46357_47750[(2)] = null);

(statearr_46357_47750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (4))){
var inst_46318 = (state_46353[(7)]);
var inst_46318__$1 = (state_46353[(2)]);
var inst_46319 = (inst_46318__$1 == null);
var state_46353__$1 = (function (){var statearr_46358 = state_46353;
(statearr_46358[(7)] = inst_46318__$1);

return statearr_46358;
})();
if(cljs.core.truth_(inst_46319)){
var statearr_46359_47751 = state_46353__$1;
(statearr_46359_47751[(1)] = (5));

} else {
var statearr_46360_47752 = state_46353__$1;
(statearr_46360_47752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (15))){
var inst_46331 = (state_46353[(8)]);
var state_46353__$1 = state_46353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46353__$1,(18),to,inst_46331);
} else {
if((state_val_46354 === (21))){
var inst_46344 = (state_46353[(2)]);
var state_46353__$1 = state_46353;
var statearr_46361_47753 = state_46353__$1;
(statearr_46361_47753[(2)] = inst_46344);

(statearr_46361_47753[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (13))){
var inst_46346 = (state_46353[(2)]);
var state_46353__$1 = (function (){var statearr_46362 = state_46353;
(statearr_46362[(9)] = inst_46346);

return statearr_46362;
})();
var statearr_46363_47754 = state_46353__$1;
(statearr_46363_47754[(2)] = null);

(statearr_46363_47754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (6))){
var inst_46318 = (state_46353[(7)]);
var state_46353__$1 = state_46353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46353__$1,(11),inst_46318);
} else {
if((state_val_46354 === (17))){
var inst_46339 = (state_46353[(2)]);
var state_46353__$1 = state_46353;
if(cljs.core.truth_(inst_46339)){
var statearr_46364_47755 = state_46353__$1;
(statearr_46364_47755[(1)] = (19));

} else {
var statearr_46365_47756 = state_46353__$1;
(statearr_46365_47756[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (3))){
var inst_46351 = (state_46353[(2)]);
var state_46353__$1 = state_46353;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46353__$1,inst_46351);
} else {
if((state_val_46354 === (12))){
var inst_46328 = (state_46353[(10)]);
var state_46353__$1 = state_46353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46353__$1,(14),inst_46328);
} else {
if((state_val_46354 === (2))){
var state_46353__$1 = state_46353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46353__$1,(4),results);
} else {
if((state_val_46354 === (19))){
var state_46353__$1 = state_46353;
var statearr_46366_47758 = state_46353__$1;
(statearr_46366_47758[(2)] = null);

(statearr_46366_47758[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (11))){
var inst_46328 = (state_46353[(2)]);
var state_46353__$1 = (function (){var statearr_46367 = state_46353;
(statearr_46367[(10)] = inst_46328);

return statearr_46367;
})();
var statearr_46368_47760 = state_46353__$1;
(statearr_46368_47760[(2)] = null);

(statearr_46368_47760[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (9))){
var state_46353__$1 = state_46353;
var statearr_46369_47761 = state_46353__$1;
(statearr_46369_47761[(2)] = null);

(statearr_46369_47761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (5))){
var state_46353__$1 = state_46353;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46370_47762 = state_46353__$1;
(statearr_46370_47762[(1)] = (8));

} else {
var statearr_46371_47763 = state_46353__$1;
(statearr_46371_47763[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (14))){
var inst_46331 = (state_46353[(8)]);
var inst_46333 = (state_46353[(11)]);
var inst_46331__$1 = (state_46353[(2)]);
var inst_46332 = (inst_46331__$1 == null);
var inst_46333__$1 = cljs.core.not(inst_46332);
var state_46353__$1 = (function (){var statearr_46372 = state_46353;
(statearr_46372[(8)] = inst_46331__$1);

(statearr_46372[(11)] = inst_46333__$1);

return statearr_46372;
})();
if(inst_46333__$1){
var statearr_46373_47764 = state_46353__$1;
(statearr_46373_47764[(1)] = (15));

} else {
var statearr_46374_47765 = state_46353__$1;
(statearr_46374_47765[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (16))){
var inst_46333 = (state_46353[(11)]);
var state_46353__$1 = state_46353;
var statearr_46375_47766 = state_46353__$1;
(statearr_46375_47766[(2)] = inst_46333);

(statearr_46375_47766[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (10))){
var inst_46325 = (state_46353[(2)]);
var state_46353__$1 = state_46353;
var statearr_46376_47767 = state_46353__$1;
(statearr_46376_47767[(2)] = inst_46325);

(statearr_46376_47767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (18))){
var inst_46336 = (state_46353[(2)]);
var state_46353__$1 = state_46353;
var statearr_46377_47768 = state_46353__$1;
(statearr_46377_47768[(2)] = inst_46336);

(statearr_46377_47768[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (8))){
var inst_46322 = cljs.core.async.close_BANG_(to);
var state_46353__$1 = state_46353;
var statearr_46378_47771 = state_46353__$1;
(statearr_46378_47771[(2)] = inst_46322);

(statearr_46378_47771[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46074__auto__,jobs,results,process,async))
;
return ((function (switch__45900__auto__,c__46074__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45901__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45901__auto____0 = (function (){
var statearr_46379 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46379[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45901__auto__);

(statearr_46379[(1)] = (1));

return statearr_46379;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45901__auto____1 = (function (state_46353){
while(true){
var ret_value__45902__auto__ = (function (){try{while(true){
var result__45903__auto__ = switch__45900__auto__(state_46353);
if(cljs.core.keyword_identical_QMARK_(result__45903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45903__auto__;
}
break;
}
}catch (e46380){if((e46380 instanceof Object)){
var ex__45904__auto__ = e46380;
var statearr_46381_47774 = state_46353;
(statearr_46381_47774[(5)] = ex__45904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46380;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47777 = state_46353;
state_46353 = G__47777;
continue;
} else {
return ret_value__45902__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45901__auto__ = function(state_46353){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45901__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45901__auto____1.call(this,state_46353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45901__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45901__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45901__auto__;
})()
;})(switch__45900__auto__,c__46074__auto__,jobs,results,process,async))
})();
var state__46076__auto__ = (function (){var statearr_46382 = (f__46075__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46075__auto__.cljs$core$IFn$_invoke$arity$0() : f__46075__auto__.call(null));
(statearr_46382[(6)] = c__46074__auto__);

return statearr_46382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46076__auto__);
});})(c__46074__auto__,jobs,results,process,async))
);

return c__46074__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__46384 = arguments.length;
switch (G__46384) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__46386 = arguments.length;
switch (G__46386) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__46388 = arguments.length;
switch (G__46388) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__46074__auto___47799 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46074__auto___47799,tc,fc){
return (function (){
var f__46075__auto__ = (function (){var switch__45900__auto__ = ((function (c__46074__auto___47799,tc,fc){
return (function (state_46414){
var state_val_46415 = (state_46414[(1)]);
if((state_val_46415 === (7))){
var inst_46410 = (state_46414[(2)]);
var state_46414__$1 = state_46414;
var statearr_46416_47800 = state_46414__$1;
(statearr_46416_47800[(2)] = inst_46410);

(statearr_46416_47800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46415 === (1))){
var state_46414__$1 = state_46414;
var statearr_46417_47803 = state_46414__$1;
(statearr_46417_47803[(2)] = null);

(statearr_46417_47803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46415 === (4))){
var inst_46391 = (state_46414[(7)]);
var inst_46391__$1 = (state_46414[(2)]);
var inst_46392 = (inst_46391__$1 == null);
var state_46414__$1 = (function (){var statearr_46418 = state_46414;
(statearr_46418[(7)] = inst_46391__$1);

return statearr_46418;
})();
if(cljs.core.truth_(inst_46392)){
var statearr_46419_47804 = state_46414__$1;
(statearr_46419_47804[(1)] = (5));

} else {
var statearr_46420_47805 = state_46414__$1;
(statearr_46420_47805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46415 === (13))){
var state_46414__$1 = state_46414;
var statearr_46421_47806 = state_46414__$1;
(statearr_46421_47806[(2)] = null);

(statearr_46421_47806[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46415 === (6))){
var inst_46391 = (state_46414[(7)]);
var inst_46397 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46391) : p.call(null,inst_46391));
var state_46414__$1 = state_46414;
if(cljs.core.truth_(inst_46397)){
var statearr_46422_47809 = state_46414__$1;
(statearr_46422_47809[(1)] = (9));

} else {
var statearr_46423_47810 = state_46414__$1;
(statearr_46423_47810[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46415 === (3))){
var inst_46412 = (state_46414[(2)]);
var state_46414__$1 = state_46414;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46414__$1,inst_46412);
} else {
if((state_val_46415 === (12))){
var state_46414__$1 = state_46414;
var statearr_46424_47812 = state_46414__$1;
(statearr_46424_47812[(2)] = null);

(statearr_46424_47812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46415 === (2))){
var state_46414__$1 = state_46414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46414__$1,(4),ch);
} else {
if((state_val_46415 === (11))){
var inst_46391 = (state_46414[(7)]);
var inst_46401 = (state_46414[(2)]);
var state_46414__$1 = state_46414;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46414__$1,(8),inst_46401,inst_46391);
} else {
if((state_val_46415 === (9))){
var state_46414__$1 = state_46414;
var statearr_46425_47818 = state_46414__$1;
(statearr_46425_47818[(2)] = tc);

(statearr_46425_47818[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46415 === (5))){
var inst_46394 = cljs.core.async.close_BANG_(tc);
var inst_46395 = cljs.core.async.close_BANG_(fc);
var state_46414__$1 = (function (){var statearr_46426 = state_46414;
(statearr_46426[(8)] = inst_46394);

return statearr_46426;
})();
var statearr_46427_47824 = state_46414__$1;
(statearr_46427_47824[(2)] = inst_46395);

(statearr_46427_47824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46415 === (14))){
var inst_46408 = (state_46414[(2)]);
var state_46414__$1 = state_46414;
var statearr_46428_47827 = state_46414__$1;
(statearr_46428_47827[(2)] = inst_46408);

(statearr_46428_47827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46415 === (10))){
var state_46414__$1 = state_46414;
var statearr_46429_47828 = state_46414__$1;
(statearr_46429_47828[(2)] = fc);

(statearr_46429_47828[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46415 === (8))){
var inst_46403 = (state_46414[(2)]);
var state_46414__$1 = state_46414;
if(cljs.core.truth_(inst_46403)){
var statearr_46430_47829 = state_46414__$1;
(statearr_46430_47829[(1)] = (12));

} else {
var statearr_46431_47833 = state_46414__$1;
(statearr_46431_47833[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46074__auto___47799,tc,fc))
;
return ((function (switch__45900__auto__,c__46074__auto___47799,tc,fc){
return (function() {
var cljs$core$async$state_machine__45901__auto__ = null;
var cljs$core$async$state_machine__45901__auto____0 = (function (){
var statearr_46432 = [null,null,null,null,null,null,null,null,null];
(statearr_46432[(0)] = cljs$core$async$state_machine__45901__auto__);

(statearr_46432[(1)] = (1));

return statearr_46432;
});
var cljs$core$async$state_machine__45901__auto____1 = (function (state_46414){
while(true){
var ret_value__45902__auto__ = (function (){try{while(true){
var result__45903__auto__ = switch__45900__auto__(state_46414);
if(cljs.core.keyword_identical_QMARK_(result__45903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45903__auto__;
}
break;
}
}catch (e46433){if((e46433 instanceof Object)){
var ex__45904__auto__ = e46433;
var statearr_46434_47840 = state_46414;
(statearr_46434_47840[(5)] = ex__45904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46433;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47842 = state_46414;
state_46414 = G__47842;
continue;
} else {
return ret_value__45902__auto__;
}
break;
}
});
cljs$core$async$state_machine__45901__auto__ = function(state_46414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45901__auto____1.call(this,state_46414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45901__auto____0;
cljs$core$async$state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45901__auto____1;
return cljs$core$async$state_machine__45901__auto__;
})()
;})(switch__45900__auto__,c__46074__auto___47799,tc,fc))
})();
var state__46076__auto__ = (function (){var statearr_46435 = (f__46075__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46075__auto__.cljs$core$IFn$_invoke$arity$0() : f__46075__auto__.call(null));
(statearr_46435[(6)] = c__46074__auto___47799);

return statearr_46435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46076__auto__);
});})(c__46074__auto___47799,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__46074__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46074__auto__){
return (function (){
var f__46075__auto__ = (function (){var switch__45900__auto__ = ((function (c__46074__auto__){
return (function (state_46456){
var state_val_46457 = (state_46456[(1)]);
if((state_val_46457 === (7))){
var inst_46452 = (state_46456[(2)]);
var state_46456__$1 = state_46456;
var statearr_46458_47848 = state_46456__$1;
(statearr_46458_47848[(2)] = inst_46452);

(statearr_46458_47848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46457 === (1))){
var inst_46436 = init;
var state_46456__$1 = (function (){var statearr_46459 = state_46456;
(statearr_46459[(7)] = inst_46436);

return statearr_46459;
})();
var statearr_46460_47853 = state_46456__$1;
(statearr_46460_47853[(2)] = null);

(statearr_46460_47853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46457 === (4))){
var inst_46439 = (state_46456[(8)]);
var inst_46439__$1 = (state_46456[(2)]);
var inst_46440 = (inst_46439__$1 == null);
var state_46456__$1 = (function (){var statearr_46461 = state_46456;
(statearr_46461[(8)] = inst_46439__$1);

return statearr_46461;
})();
if(cljs.core.truth_(inst_46440)){
var statearr_46462_47858 = state_46456__$1;
(statearr_46462_47858[(1)] = (5));

} else {
var statearr_46463_47859 = state_46456__$1;
(statearr_46463_47859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46457 === (6))){
var inst_46436 = (state_46456[(7)]);
var inst_46439 = (state_46456[(8)]);
var inst_46443 = (state_46456[(9)]);
var inst_46443__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_46436,inst_46439) : f.call(null,inst_46436,inst_46439));
var inst_46444 = cljs.core.reduced_QMARK_(inst_46443__$1);
var state_46456__$1 = (function (){var statearr_46464 = state_46456;
(statearr_46464[(9)] = inst_46443__$1);

return statearr_46464;
})();
if(inst_46444){
var statearr_46465_47864 = state_46456__$1;
(statearr_46465_47864[(1)] = (8));

} else {
var statearr_46466_47867 = state_46456__$1;
(statearr_46466_47867[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46457 === (3))){
var inst_46454 = (state_46456[(2)]);
var state_46456__$1 = state_46456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46456__$1,inst_46454);
} else {
if((state_val_46457 === (2))){
var state_46456__$1 = state_46456;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46456__$1,(4),ch);
} else {
if((state_val_46457 === (9))){
var inst_46443 = (state_46456[(9)]);
var inst_46436 = inst_46443;
var state_46456__$1 = (function (){var statearr_46467 = state_46456;
(statearr_46467[(7)] = inst_46436);

return statearr_46467;
})();
var statearr_46468_47874 = state_46456__$1;
(statearr_46468_47874[(2)] = null);

(statearr_46468_47874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46457 === (5))){
var inst_46436 = (state_46456[(7)]);
var state_46456__$1 = state_46456;
var statearr_46469_47878 = state_46456__$1;
(statearr_46469_47878[(2)] = inst_46436);

(statearr_46469_47878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46457 === (10))){
var inst_46450 = (state_46456[(2)]);
var state_46456__$1 = state_46456;
var statearr_46470_47879 = state_46456__$1;
(statearr_46470_47879[(2)] = inst_46450);

(statearr_46470_47879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46457 === (8))){
var inst_46443 = (state_46456[(9)]);
var inst_46446 = cljs.core.deref(inst_46443);
var state_46456__$1 = state_46456;
var statearr_46471_47880 = state_46456__$1;
(statearr_46471_47880[(2)] = inst_46446);

(statearr_46471_47880[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__46074__auto__))
;
return ((function (switch__45900__auto__,c__46074__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__45901__auto__ = null;
var cljs$core$async$reduce_$_state_machine__45901__auto____0 = (function (){
var statearr_46472 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46472[(0)] = cljs$core$async$reduce_$_state_machine__45901__auto__);

(statearr_46472[(1)] = (1));

return statearr_46472;
});
var cljs$core$async$reduce_$_state_machine__45901__auto____1 = (function (state_46456){
while(true){
var ret_value__45902__auto__ = (function (){try{while(true){
var result__45903__auto__ = switch__45900__auto__(state_46456);
if(cljs.core.keyword_identical_QMARK_(result__45903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45903__auto__;
}
break;
}
}catch (e46473){if((e46473 instanceof Object)){
var ex__45904__auto__ = e46473;
var statearr_46474_47884 = state_46456;
(statearr_46474_47884[(5)] = ex__45904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46473;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47889 = state_46456;
state_46456 = G__47889;
continue;
} else {
return ret_value__45902__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__45901__auto__ = function(state_46456){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__45901__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__45901__auto____1.call(this,state_46456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__45901__auto____0;
cljs$core$async$reduce_$_state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__45901__auto____1;
return cljs$core$async$reduce_$_state_machine__45901__auto__;
})()
;})(switch__45900__auto__,c__46074__auto__))
})();
var state__46076__auto__ = (function (){var statearr_46475 = (f__46075__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46075__auto__.cljs$core$IFn$_invoke$arity$0() : f__46075__auto__.call(null));
(statearr_46475[(6)] = c__46074__auto__);

return statearr_46475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46076__auto__);
});})(c__46074__auto__))
);

return c__46074__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__46074__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46074__auto__,f__$1){
return (function (){
var f__46075__auto__ = (function (){var switch__45900__auto__ = ((function (c__46074__auto__,f__$1){
return (function (state_46481){
var state_val_46482 = (state_46481[(1)]);
if((state_val_46482 === (1))){
var inst_46476 = cljs.core.async.reduce(f__$1,init,ch);
var state_46481__$1 = state_46481;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46481__$1,(2),inst_46476);
} else {
if((state_val_46482 === (2))){
var inst_46478 = (state_46481[(2)]);
var inst_46479 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_46478) : f__$1.call(null,inst_46478));
var state_46481__$1 = state_46481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46481__$1,inst_46479);
} else {
return null;
}
}
});})(c__46074__auto__,f__$1))
;
return ((function (switch__45900__auto__,c__46074__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__45901__auto__ = null;
var cljs$core$async$transduce_$_state_machine__45901__auto____0 = (function (){
var statearr_46483 = [null,null,null,null,null,null,null];
(statearr_46483[(0)] = cljs$core$async$transduce_$_state_machine__45901__auto__);

(statearr_46483[(1)] = (1));

return statearr_46483;
});
var cljs$core$async$transduce_$_state_machine__45901__auto____1 = (function (state_46481){
while(true){
var ret_value__45902__auto__ = (function (){try{while(true){
var result__45903__auto__ = switch__45900__auto__(state_46481);
if(cljs.core.keyword_identical_QMARK_(result__45903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45903__auto__;
}
break;
}
}catch (e46484){if((e46484 instanceof Object)){
var ex__45904__auto__ = e46484;
var statearr_46485_47902 = state_46481;
(statearr_46485_47902[(5)] = ex__45904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46484;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47904 = state_46481;
state_46481 = G__47904;
continue;
} else {
return ret_value__45902__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__45901__auto__ = function(state_46481){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__45901__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__45901__auto____1.call(this,state_46481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__45901__auto____0;
cljs$core$async$transduce_$_state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__45901__auto____1;
return cljs$core$async$transduce_$_state_machine__45901__auto__;
})()
;})(switch__45900__auto__,c__46074__auto__,f__$1))
})();
var state__46076__auto__ = (function (){var statearr_46486 = (f__46075__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46075__auto__.cljs$core$IFn$_invoke$arity$0() : f__46075__auto__.call(null));
(statearr_46486[(6)] = c__46074__auto__);

return statearr_46486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46076__auto__);
});})(c__46074__auto__,f__$1))
);

return c__46074__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__46488 = arguments.length;
switch (G__46488) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__46074__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46074__auto__){
return (function (){
var f__46075__auto__ = (function (){var switch__45900__auto__ = ((function (c__46074__auto__){
return (function (state_46513){
var state_val_46514 = (state_46513[(1)]);
if((state_val_46514 === (7))){
var inst_46495 = (state_46513[(2)]);
var state_46513__$1 = state_46513;
var statearr_46515_47909 = state_46513__$1;
(statearr_46515_47909[(2)] = inst_46495);

(statearr_46515_47909[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (1))){
var inst_46489 = cljs.core.seq(coll);
var inst_46490 = inst_46489;
var state_46513__$1 = (function (){var statearr_46516 = state_46513;
(statearr_46516[(7)] = inst_46490);

return statearr_46516;
})();
var statearr_46517_47910 = state_46513__$1;
(statearr_46517_47910[(2)] = null);

(statearr_46517_47910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (4))){
var inst_46490 = (state_46513[(7)]);
var inst_46493 = cljs.core.first(inst_46490);
var state_46513__$1 = state_46513;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46513__$1,(7),ch,inst_46493);
} else {
if((state_val_46514 === (13))){
var inst_46507 = (state_46513[(2)]);
var state_46513__$1 = state_46513;
var statearr_46518_47914 = state_46513__$1;
(statearr_46518_47914[(2)] = inst_46507);

(statearr_46518_47914[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (6))){
var inst_46498 = (state_46513[(2)]);
var state_46513__$1 = state_46513;
if(cljs.core.truth_(inst_46498)){
var statearr_46519_47915 = state_46513__$1;
(statearr_46519_47915[(1)] = (8));

} else {
var statearr_46520_47916 = state_46513__$1;
(statearr_46520_47916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (3))){
var inst_46511 = (state_46513[(2)]);
var state_46513__$1 = state_46513;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46513__$1,inst_46511);
} else {
if((state_val_46514 === (12))){
var state_46513__$1 = state_46513;
var statearr_46521_47922 = state_46513__$1;
(statearr_46521_47922[(2)] = null);

(statearr_46521_47922[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (2))){
var inst_46490 = (state_46513[(7)]);
var state_46513__$1 = state_46513;
if(cljs.core.truth_(inst_46490)){
var statearr_46522_47923 = state_46513__$1;
(statearr_46522_47923[(1)] = (4));

} else {
var statearr_46523_47924 = state_46513__$1;
(statearr_46523_47924[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (11))){
var inst_46504 = cljs.core.async.close_BANG_(ch);
var state_46513__$1 = state_46513;
var statearr_46524_47925 = state_46513__$1;
(statearr_46524_47925[(2)] = inst_46504);

(statearr_46524_47925[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (9))){
var state_46513__$1 = state_46513;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46525_47927 = state_46513__$1;
(statearr_46525_47927[(1)] = (11));

} else {
var statearr_46526_47928 = state_46513__$1;
(statearr_46526_47928[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (5))){
var inst_46490 = (state_46513[(7)]);
var state_46513__$1 = state_46513;
var statearr_46527_47929 = state_46513__$1;
(statearr_46527_47929[(2)] = inst_46490);

(statearr_46527_47929[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (10))){
var inst_46509 = (state_46513[(2)]);
var state_46513__$1 = state_46513;
var statearr_46528_47930 = state_46513__$1;
(statearr_46528_47930[(2)] = inst_46509);

(statearr_46528_47930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (8))){
var inst_46490 = (state_46513[(7)]);
var inst_46500 = cljs.core.next(inst_46490);
var inst_46490__$1 = inst_46500;
var state_46513__$1 = (function (){var statearr_46529 = state_46513;
(statearr_46529[(7)] = inst_46490__$1);

return statearr_46529;
})();
var statearr_46530_47932 = state_46513__$1;
(statearr_46530_47932[(2)] = null);

(statearr_46530_47932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46074__auto__))
;
return ((function (switch__45900__auto__,c__46074__auto__){
return (function() {
var cljs$core$async$state_machine__45901__auto__ = null;
var cljs$core$async$state_machine__45901__auto____0 = (function (){
var statearr_46531 = [null,null,null,null,null,null,null,null];
(statearr_46531[(0)] = cljs$core$async$state_machine__45901__auto__);

(statearr_46531[(1)] = (1));

return statearr_46531;
});
var cljs$core$async$state_machine__45901__auto____1 = (function (state_46513){
while(true){
var ret_value__45902__auto__ = (function (){try{while(true){
var result__45903__auto__ = switch__45900__auto__(state_46513);
if(cljs.core.keyword_identical_QMARK_(result__45903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45903__auto__;
}
break;
}
}catch (e46532){if((e46532 instanceof Object)){
var ex__45904__auto__ = e46532;
var statearr_46533_47934 = state_46513;
(statearr_46533_47934[(5)] = ex__45904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46532;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47937 = state_46513;
state_46513 = G__47937;
continue;
} else {
return ret_value__45902__auto__;
}
break;
}
});
cljs$core$async$state_machine__45901__auto__ = function(state_46513){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45901__auto____1.call(this,state_46513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45901__auto____0;
cljs$core$async$state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45901__auto____1;
return cljs$core$async$state_machine__45901__auto__;
})()
;})(switch__45900__auto__,c__46074__auto__))
})();
var state__46076__auto__ = (function (){var statearr_46534 = (f__46075__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46075__auto__.cljs$core$IFn$_invoke$arity$0() : f__46075__auto__.call(null));
(statearr_46534[(6)] = c__46074__auto__);

return statearr_46534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46076__auto__);
});})(c__46074__auto__))
);

return c__46074__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4348__auto__.call(null,_));
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4348__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4348__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4348__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto__.call(null,m,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto__.call(null,m));
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46535 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46535 = (function (ch,cs,meta46536){
this.ch = ch;
this.cs = cs;
this.meta46536 = meta46536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_46537,meta46536__$1){
var self__ = this;
var _46537__$1 = this;
return (new cljs.core.async.t_cljs$core$async46535(self__.ch,self__.cs,meta46536__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async46535.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_46537){
var self__ = this;
var _46537__$1 = this;
return self__.meta46536;
});})(cs))
;

cljs.core.async.t_cljs$core$async46535.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46535.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async46535.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46535.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46535.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46535.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46535.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46536","meta46536",665677088,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async46535.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46535";

cljs.core.async.t_cljs$core$async46535.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async46535");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46535.
 */
cljs.core.async.__GT_t_cljs$core$async46535 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async46535(ch__$1,cs__$1,meta46536){
return (new cljs.core.async.t_cljs$core$async46535(ch__$1,cs__$1,meta46536));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async46535(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__46074__auto___47971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46074__auto___47971,cs,m,dchan,dctr,done){
return (function (){
var f__46075__auto__ = (function (){var switch__45900__auto__ = ((function (c__46074__auto___47971,cs,m,dchan,dctr,done){
return (function (state_46672){
var state_val_46673 = (state_46672[(1)]);
if((state_val_46673 === (7))){
var inst_46668 = (state_46672[(2)]);
var state_46672__$1 = state_46672;
var statearr_46674_47972 = state_46672__$1;
(statearr_46674_47972[(2)] = inst_46668);

(statearr_46674_47972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (20))){
var inst_46571 = (state_46672[(7)]);
var inst_46583 = cljs.core.first(inst_46571);
var inst_46584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46583,(0),null);
var inst_46585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46583,(1),null);
var state_46672__$1 = (function (){var statearr_46675 = state_46672;
(statearr_46675[(8)] = inst_46584);

return statearr_46675;
})();
if(cljs.core.truth_(inst_46585)){
var statearr_46676_47973 = state_46672__$1;
(statearr_46676_47973[(1)] = (22));

} else {
var statearr_46677_47974 = state_46672__$1;
(statearr_46677_47974[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (27))){
var inst_46540 = (state_46672[(9)]);
var inst_46615 = (state_46672[(10)]);
var inst_46620 = (state_46672[(11)]);
var inst_46613 = (state_46672[(12)]);
var inst_46620__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46613,inst_46615);
var inst_46621 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46620__$1,inst_46540,done);
var state_46672__$1 = (function (){var statearr_46678 = state_46672;
(statearr_46678[(11)] = inst_46620__$1);

return statearr_46678;
})();
if(cljs.core.truth_(inst_46621)){
var statearr_46679_47988 = state_46672__$1;
(statearr_46679_47988[(1)] = (30));

} else {
var statearr_46680_47989 = state_46672__$1;
(statearr_46680_47989[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (1))){
var state_46672__$1 = state_46672;
var statearr_46681_47993 = state_46672__$1;
(statearr_46681_47993[(2)] = null);

(statearr_46681_47993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (24))){
var inst_46571 = (state_46672[(7)]);
var inst_46590 = (state_46672[(2)]);
var inst_46591 = cljs.core.next(inst_46571);
var inst_46549 = inst_46591;
var inst_46550 = null;
var inst_46551 = (0);
var inst_46552 = (0);
var state_46672__$1 = (function (){var statearr_46682 = state_46672;
(statearr_46682[(13)] = inst_46549);

(statearr_46682[(14)] = inst_46552);

(statearr_46682[(15)] = inst_46590);

(statearr_46682[(16)] = inst_46550);

(statearr_46682[(17)] = inst_46551);

return statearr_46682;
})();
var statearr_46683_47994 = state_46672__$1;
(statearr_46683_47994[(2)] = null);

(statearr_46683_47994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (39))){
var state_46672__$1 = state_46672;
var statearr_46687_47995 = state_46672__$1;
(statearr_46687_47995[(2)] = null);

(statearr_46687_47995[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (4))){
var inst_46540 = (state_46672[(9)]);
var inst_46540__$1 = (state_46672[(2)]);
var inst_46541 = (inst_46540__$1 == null);
var state_46672__$1 = (function (){var statearr_46688 = state_46672;
(statearr_46688[(9)] = inst_46540__$1);

return statearr_46688;
})();
if(cljs.core.truth_(inst_46541)){
var statearr_46689_47997 = state_46672__$1;
(statearr_46689_47997[(1)] = (5));

} else {
var statearr_46690_47998 = state_46672__$1;
(statearr_46690_47998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (15))){
var inst_46549 = (state_46672[(13)]);
var inst_46552 = (state_46672[(14)]);
var inst_46550 = (state_46672[(16)]);
var inst_46551 = (state_46672[(17)]);
var inst_46567 = (state_46672[(2)]);
var inst_46568 = (inst_46552 + (1));
var tmp46684 = inst_46549;
var tmp46685 = inst_46550;
var tmp46686 = inst_46551;
var inst_46549__$1 = tmp46684;
var inst_46550__$1 = tmp46685;
var inst_46551__$1 = tmp46686;
var inst_46552__$1 = inst_46568;
var state_46672__$1 = (function (){var statearr_46691 = state_46672;
(statearr_46691[(13)] = inst_46549__$1);

(statearr_46691[(14)] = inst_46552__$1);

(statearr_46691[(16)] = inst_46550__$1);

(statearr_46691[(18)] = inst_46567);

(statearr_46691[(17)] = inst_46551__$1);

return statearr_46691;
})();
var statearr_46692_48000 = state_46672__$1;
(statearr_46692_48000[(2)] = null);

(statearr_46692_48000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (21))){
var inst_46594 = (state_46672[(2)]);
var state_46672__$1 = state_46672;
var statearr_46696_48001 = state_46672__$1;
(statearr_46696_48001[(2)] = inst_46594);

(statearr_46696_48001[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (31))){
var inst_46620 = (state_46672[(11)]);
var inst_46624 = done(null);
var inst_46625 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46620);
var state_46672__$1 = (function (){var statearr_46697 = state_46672;
(statearr_46697[(19)] = inst_46624);

return statearr_46697;
})();
var statearr_46698_48003 = state_46672__$1;
(statearr_46698_48003[(2)] = inst_46625);

(statearr_46698_48003[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (32))){
var inst_46614 = (state_46672[(20)]);
var inst_46615 = (state_46672[(10)]);
var inst_46612 = (state_46672[(21)]);
var inst_46613 = (state_46672[(12)]);
var inst_46627 = (state_46672[(2)]);
var inst_46628 = (inst_46615 + (1));
var tmp46693 = inst_46614;
var tmp46694 = inst_46612;
var tmp46695 = inst_46613;
var inst_46612__$1 = tmp46694;
var inst_46613__$1 = tmp46695;
var inst_46614__$1 = tmp46693;
var inst_46615__$1 = inst_46628;
var state_46672__$1 = (function (){var statearr_46699 = state_46672;
(statearr_46699[(20)] = inst_46614__$1);

(statearr_46699[(10)] = inst_46615__$1);

(statearr_46699[(21)] = inst_46612__$1);

(statearr_46699[(22)] = inst_46627);

(statearr_46699[(12)] = inst_46613__$1);

return statearr_46699;
})();
var statearr_46700_48006 = state_46672__$1;
(statearr_46700_48006[(2)] = null);

(statearr_46700_48006[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (40))){
var inst_46640 = (state_46672[(23)]);
var inst_46644 = done(null);
var inst_46645 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46640);
var state_46672__$1 = (function (){var statearr_46701 = state_46672;
(statearr_46701[(24)] = inst_46644);

return statearr_46701;
})();
var statearr_46702_48009 = state_46672__$1;
(statearr_46702_48009[(2)] = inst_46645);

(statearr_46702_48009[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (33))){
var inst_46631 = (state_46672[(25)]);
var inst_46633 = cljs.core.chunked_seq_QMARK_(inst_46631);
var state_46672__$1 = state_46672;
if(inst_46633){
var statearr_46703_48010 = state_46672__$1;
(statearr_46703_48010[(1)] = (36));

} else {
var statearr_46704_48012 = state_46672__$1;
(statearr_46704_48012[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (13))){
var inst_46561 = (state_46672[(26)]);
var inst_46564 = cljs.core.async.close_BANG_(inst_46561);
var state_46672__$1 = state_46672;
var statearr_46705_48013 = state_46672__$1;
(statearr_46705_48013[(2)] = inst_46564);

(statearr_46705_48013[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (22))){
var inst_46584 = (state_46672[(8)]);
var inst_46587 = cljs.core.async.close_BANG_(inst_46584);
var state_46672__$1 = state_46672;
var statearr_46706_48018 = state_46672__$1;
(statearr_46706_48018[(2)] = inst_46587);

(statearr_46706_48018[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (36))){
var inst_46631 = (state_46672[(25)]);
var inst_46635 = cljs.core.chunk_first(inst_46631);
var inst_46636 = cljs.core.chunk_rest(inst_46631);
var inst_46637 = cljs.core.count(inst_46635);
var inst_46612 = inst_46636;
var inst_46613 = inst_46635;
var inst_46614 = inst_46637;
var inst_46615 = (0);
var state_46672__$1 = (function (){var statearr_46707 = state_46672;
(statearr_46707[(20)] = inst_46614);

(statearr_46707[(10)] = inst_46615);

(statearr_46707[(21)] = inst_46612);

(statearr_46707[(12)] = inst_46613);

return statearr_46707;
})();
var statearr_46708_48019 = state_46672__$1;
(statearr_46708_48019[(2)] = null);

(statearr_46708_48019[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (41))){
var inst_46631 = (state_46672[(25)]);
var inst_46647 = (state_46672[(2)]);
var inst_46648 = cljs.core.next(inst_46631);
var inst_46612 = inst_46648;
var inst_46613 = null;
var inst_46614 = (0);
var inst_46615 = (0);
var state_46672__$1 = (function (){var statearr_46709 = state_46672;
(statearr_46709[(20)] = inst_46614);

(statearr_46709[(10)] = inst_46615);

(statearr_46709[(21)] = inst_46612);

(statearr_46709[(27)] = inst_46647);

(statearr_46709[(12)] = inst_46613);

return statearr_46709;
})();
var statearr_46710_48020 = state_46672__$1;
(statearr_46710_48020[(2)] = null);

(statearr_46710_48020[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (43))){
var state_46672__$1 = state_46672;
var statearr_46711_48023 = state_46672__$1;
(statearr_46711_48023[(2)] = null);

(statearr_46711_48023[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (29))){
var inst_46656 = (state_46672[(2)]);
var state_46672__$1 = state_46672;
var statearr_46712_48024 = state_46672__$1;
(statearr_46712_48024[(2)] = inst_46656);

(statearr_46712_48024[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (44))){
var inst_46665 = (state_46672[(2)]);
var state_46672__$1 = (function (){var statearr_46713 = state_46672;
(statearr_46713[(28)] = inst_46665);

return statearr_46713;
})();
var statearr_46714_48025 = state_46672__$1;
(statearr_46714_48025[(2)] = null);

(statearr_46714_48025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (6))){
var inst_46604 = (state_46672[(29)]);
var inst_46603 = cljs.core.deref(cs);
var inst_46604__$1 = cljs.core.keys(inst_46603);
var inst_46605 = cljs.core.count(inst_46604__$1);
var inst_46606 = cljs.core.reset_BANG_(dctr,inst_46605);
var inst_46611 = cljs.core.seq(inst_46604__$1);
var inst_46612 = inst_46611;
var inst_46613 = null;
var inst_46614 = (0);
var inst_46615 = (0);
var state_46672__$1 = (function (){var statearr_46715 = state_46672;
(statearr_46715[(29)] = inst_46604__$1);

(statearr_46715[(20)] = inst_46614);

(statearr_46715[(10)] = inst_46615);

(statearr_46715[(21)] = inst_46612);

(statearr_46715[(30)] = inst_46606);

(statearr_46715[(12)] = inst_46613);

return statearr_46715;
})();
var statearr_46716_48028 = state_46672__$1;
(statearr_46716_48028[(2)] = null);

(statearr_46716_48028[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (28))){
var inst_46631 = (state_46672[(25)]);
var inst_46612 = (state_46672[(21)]);
var inst_46631__$1 = cljs.core.seq(inst_46612);
var state_46672__$1 = (function (){var statearr_46717 = state_46672;
(statearr_46717[(25)] = inst_46631__$1);

return statearr_46717;
})();
if(inst_46631__$1){
var statearr_46718_48029 = state_46672__$1;
(statearr_46718_48029[(1)] = (33));

} else {
var statearr_46719_48030 = state_46672__$1;
(statearr_46719_48030[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (25))){
var inst_46614 = (state_46672[(20)]);
var inst_46615 = (state_46672[(10)]);
var inst_46617 = (inst_46615 < inst_46614);
var inst_46618 = inst_46617;
var state_46672__$1 = state_46672;
if(cljs.core.truth_(inst_46618)){
var statearr_46720_48032 = state_46672__$1;
(statearr_46720_48032[(1)] = (27));

} else {
var statearr_46721_48033 = state_46672__$1;
(statearr_46721_48033[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (34))){
var state_46672__$1 = state_46672;
var statearr_46722_48035 = state_46672__$1;
(statearr_46722_48035[(2)] = null);

(statearr_46722_48035[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (17))){
var state_46672__$1 = state_46672;
var statearr_46723_48036 = state_46672__$1;
(statearr_46723_48036[(2)] = null);

(statearr_46723_48036[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (3))){
var inst_46670 = (state_46672[(2)]);
var state_46672__$1 = state_46672;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46672__$1,inst_46670);
} else {
if((state_val_46673 === (12))){
var inst_46599 = (state_46672[(2)]);
var state_46672__$1 = state_46672;
var statearr_46724_48037 = state_46672__$1;
(statearr_46724_48037[(2)] = inst_46599);

(statearr_46724_48037[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (2))){
var state_46672__$1 = state_46672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46672__$1,(4),ch);
} else {
if((state_val_46673 === (23))){
var state_46672__$1 = state_46672;
var statearr_46725_48038 = state_46672__$1;
(statearr_46725_48038[(2)] = null);

(statearr_46725_48038[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (35))){
var inst_46654 = (state_46672[(2)]);
var state_46672__$1 = state_46672;
var statearr_46726_48039 = state_46672__$1;
(statearr_46726_48039[(2)] = inst_46654);

(statearr_46726_48039[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (19))){
var inst_46571 = (state_46672[(7)]);
var inst_46575 = cljs.core.chunk_first(inst_46571);
var inst_46576 = cljs.core.chunk_rest(inst_46571);
var inst_46577 = cljs.core.count(inst_46575);
var inst_46549 = inst_46576;
var inst_46550 = inst_46575;
var inst_46551 = inst_46577;
var inst_46552 = (0);
var state_46672__$1 = (function (){var statearr_46727 = state_46672;
(statearr_46727[(13)] = inst_46549);

(statearr_46727[(14)] = inst_46552);

(statearr_46727[(16)] = inst_46550);

(statearr_46727[(17)] = inst_46551);

return statearr_46727;
})();
var statearr_46728_48040 = state_46672__$1;
(statearr_46728_48040[(2)] = null);

(statearr_46728_48040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (11))){
var inst_46549 = (state_46672[(13)]);
var inst_46571 = (state_46672[(7)]);
var inst_46571__$1 = cljs.core.seq(inst_46549);
var state_46672__$1 = (function (){var statearr_46729 = state_46672;
(statearr_46729[(7)] = inst_46571__$1);

return statearr_46729;
})();
if(inst_46571__$1){
var statearr_46730_48041 = state_46672__$1;
(statearr_46730_48041[(1)] = (16));

} else {
var statearr_46731_48042 = state_46672__$1;
(statearr_46731_48042[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (9))){
var inst_46601 = (state_46672[(2)]);
var state_46672__$1 = state_46672;
var statearr_46732_48045 = state_46672__$1;
(statearr_46732_48045[(2)] = inst_46601);

(statearr_46732_48045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (5))){
var inst_46547 = cljs.core.deref(cs);
var inst_46548 = cljs.core.seq(inst_46547);
var inst_46549 = inst_46548;
var inst_46550 = null;
var inst_46551 = (0);
var inst_46552 = (0);
var state_46672__$1 = (function (){var statearr_46733 = state_46672;
(statearr_46733[(13)] = inst_46549);

(statearr_46733[(14)] = inst_46552);

(statearr_46733[(16)] = inst_46550);

(statearr_46733[(17)] = inst_46551);

return statearr_46733;
})();
var statearr_46734_48049 = state_46672__$1;
(statearr_46734_48049[(2)] = null);

(statearr_46734_48049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (14))){
var state_46672__$1 = state_46672;
var statearr_46735_48050 = state_46672__$1;
(statearr_46735_48050[(2)] = null);

(statearr_46735_48050[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (45))){
var inst_46662 = (state_46672[(2)]);
var state_46672__$1 = state_46672;
var statearr_46736_48054 = state_46672__$1;
(statearr_46736_48054[(2)] = inst_46662);

(statearr_46736_48054[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (26))){
var inst_46604 = (state_46672[(29)]);
var inst_46658 = (state_46672[(2)]);
var inst_46659 = cljs.core.seq(inst_46604);
var state_46672__$1 = (function (){var statearr_46737 = state_46672;
(statearr_46737[(31)] = inst_46658);

return statearr_46737;
})();
if(inst_46659){
var statearr_46738_48057 = state_46672__$1;
(statearr_46738_48057[(1)] = (42));

} else {
var statearr_46739_48058 = state_46672__$1;
(statearr_46739_48058[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (16))){
var inst_46571 = (state_46672[(7)]);
var inst_46573 = cljs.core.chunked_seq_QMARK_(inst_46571);
var state_46672__$1 = state_46672;
if(inst_46573){
var statearr_46740_48059 = state_46672__$1;
(statearr_46740_48059[(1)] = (19));

} else {
var statearr_46741_48060 = state_46672__$1;
(statearr_46741_48060[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (38))){
var inst_46651 = (state_46672[(2)]);
var state_46672__$1 = state_46672;
var statearr_46742_48061 = state_46672__$1;
(statearr_46742_48061[(2)] = inst_46651);

(statearr_46742_48061[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (30))){
var state_46672__$1 = state_46672;
var statearr_46743_48062 = state_46672__$1;
(statearr_46743_48062[(2)] = null);

(statearr_46743_48062[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (10))){
var inst_46552 = (state_46672[(14)]);
var inst_46550 = (state_46672[(16)]);
var inst_46560 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46550,inst_46552);
var inst_46561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46560,(0),null);
var inst_46562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46560,(1),null);
var state_46672__$1 = (function (){var statearr_46744 = state_46672;
(statearr_46744[(26)] = inst_46561);

return statearr_46744;
})();
if(cljs.core.truth_(inst_46562)){
var statearr_46745_48063 = state_46672__$1;
(statearr_46745_48063[(1)] = (13));

} else {
var statearr_46746_48065 = state_46672__$1;
(statearr_46746_48065[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (18))){
var inst_46597 = (state_46672[(2)]);
var state_46672__$1 = state_46672;
var statearr_46747_48068 = state_46672__$1;
(statearr_46747_48068[(2)] = inst_46597);

(statearr_46747_48068[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (42))){
var state_46672__$1 = state_46672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46672__$1,(45),dchan);
} else {
if((state_val_46673 === (37))){
var inst_46540 = (state_46672[(9)]);
var inst_46640 = (state_46672[(23)]);
var inst_46631 = (state_46672[(25)]);
var inst_46640__$1 = cljs.core.first(inst_46631);
var inst_46641 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46640__$1,inst_46540,done);
var state_46672__$1 = (function (){var statearr_46748 = state_46672;
(statearr_46748[(23)] = inst_46640__$1);

return statearr_46748;
})();
if(cljs.core.truth_(inst_46641)){
var statearr_46749_48070 = state_46672__$1;
(statearr_46749_48070[(1)] = (39));

} else {
var statearr_46750_48071 = state_46672__$1;
(statearr_46750_48071[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (8))){
var inst_46552 = (state_46672[(14)]);
var inst_46551 = (state_46672[(17)]);
var inst_46554 = (inst_46552 < inst_46551);
var inst_46555 = inst_46554;
var state_46672__$1 = state_46672;
if(cljs.core.truth_(inst_46555)){
var statearr_46751_48072 = state_46672__$1;
(statearr_46751_48072[(1)] = (10));

} else {
var statearr_46752_48073 = state_46672__$1;
(statearr_46752_48073[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46074__auto___47971,cs,m,dchan,dctr,done))
;
return ((function (switch__45900__auto__,c__46074__auto___47971,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__45901__auto__ = null;
var cljs$core$async$mult_$_state_machine__45901__auto____0 = (function (){
var statearr_46753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46753[(0)] = cljs$core$async$mult_$_state_machine__45901__auto__);

(statearr_46753[(1)] = (1));

return statearr_46753;
});
var cljs$core$async$mult_$_state_machine__45901__auto____1 = (function (state_46672){
while(true){
var ret_value__45902__auto__ = (function (){try{while(true){
var result__45903__auto__ = switch__45900__auto__(state_46672);
if(cljs.core.keyword_identical_QMARK_(result__45903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45903__auto__;
}
break;
}
}catch (e46754){if((e46754 instanceof Object)){
var ex__45904__auto__ = e46754;
var statearr_46755_48075 = state_46672;
(statearr_46755_48075[(5)] = ex__45904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46754;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48079 = state_46672;
state_46672 = G__48079;
continue;
} else {
return ret_value__45902__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__45901__auto__ = function(state_46672){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__45901__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__45901__auto____1.call(this,state_46672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__45901__auto____0;
cljs$core$async$mult_$_state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__45901__auto____1;
return cljs$core$async$mult_$_state_machine__45901__auto__;
})()
;})(switch__45900__auto__,c__46074__auto___47971,cs,m,dchan,dctr,done))
})();
var state__46076__auto__ = (function (){var statearr_46756 = (f__46075__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46075__auto__.cljs$core$IFn$_invoke$arity$0() : f__46075__auto__.call(null));
(statearr_46756[(6)] = c__46074__auto___47971);

return statearr_46756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46076__auto__);
});})(c__46074__auto___47971,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__46758 = arguments.length;
switch (G__46758) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto__.call(null,m,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto__.call(null,m,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto__.call(null,m));
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4348__auto__.call(null,m,state_map));
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4348__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4348__auto__.call(null,m,mode));
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4348__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___48111 = arguments.length;
var i__4642__auto___48112 = (0);
while(true){
if((i__4642__auto___48112 < len__4641__auto___48111)){
args__4647__auto__.push((arguments[i__4642__auto___48112]));

var G__48113 = (i__4642__auto___48112 + (1));
i__4642__auto___48112 = G__48113;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46763){
var map__46764 = p__46763;
var map__46764__$1 = (((((!((map__46764 == null))))?(((((map__46764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46764):map__46764);
var opts = map__46764__$1;
var statearr_46766_48115 = state;
(statearr_46766_48115[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__46764,map__46764__$1,opts){
return (function (val){
var statearr_46767_48116 = state;
(statearr_46767_48116[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__46764,map__46764__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_46768_48121 = state;
(statearr_46768_48121[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46759){
var G__46760 = cljs.core.first(seq46759);
var seq46759__$1 = cljs.core.next(seq46759);
var G__46761 = cljs.core.first(seq46759__$1);
var seq46759__$2 = cljs.core.next(seq46759__$1);
var G__46762 = cljs.core.first(seq46759__$2);
var seq46759__$3 = cljs.core.next(seq46759__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46760,G__46761,G__46762,seq46759__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46769 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46769 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46770){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta46770 = meta46770;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46771,meta46770__$1){
var self__ = this;
var _46771__$1 = this;
return (new cljs.core.async.t_cljs$core$async46769(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46770__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46769.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46771){
var self__ = this;
var _46771__$1 = this;
return self__.meta46770;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46769.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46769.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46769.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46769.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46769.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46769.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46769.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46769.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46769.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46770","meta46770",-989065989,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46769.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46769.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46769";

cljs.core.async.t_cljs$core$async46769.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async46769");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46769.
 */
cljs.core.async.__GT_t_cljs$core$async46769 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async46769(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46770){
return (new cljs.core.async.t_cljs$core$async46769(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46770));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async46769(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46074__auto___48158 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46074__auto___48158,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__46075__auto__ = (function (){var switch__45900__auto__ = ((function (c__46074__auto___48158,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_46873){
var state_val_46874 = (state_46873[(1)]);
if((state_val_46874 === (7))){
var inst_46788 = (state_46873[(2)]);
var state_46873__$1 = state_46873;
var statearr_46875_48162 = state_46873__$1;
(statearr_46875_48162[(2)] = inst_46788);

(statearr_46875_48162[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (20))){
var inst_46800 = (state_46873[(7)]);
var state_46873__$1 = state_46873;
var statearr_46876_48165 = state_46873__$1;
(statearr_46876_48165[(2)] = inst_46800);

(statearr_46876_48165[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (27))){
var state_46873__$1 = state_46873;
var statearr_46877_48166 = state_46873__$1;
(statearr_46877_48166[(2)] = null);

(statearr_46877_48166[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (1))){
var inst_46775 = (state_46873[(8)]);
var inst_46775__$1 = calc_state();
var inst_46777 = (inst_46775__$1 == null);
var inst_46778 = cljs.core.not(inst_46777);
var state_46873__$1 = (function (){var statearr_46878 = state_46873;
(statearr_46878[(8)] = inst_46775__$1);

return statearr_46878;
})();
if(inst_46778){
var statearr_46879_48168 = state_46873__$1;
(statearr_46879_48168[(1)] = (2));

} else {
var statearr_46880_48169 = state_46873__$1;
(statearr_46880_48169[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (24))){
var inst_46824 = (state_46873[(9)]);
var inst_46847 = (state_46873[(10)]);
var inst_46833 = (state_46873[(11)]);
var inst_46847__$1 = (inst_46824.cljs$core$IFn$_invoke$arity$1 ? inst_46824.cljs$core$IFn$_invoke$arity$1(inst_46833) : inst_46824.call(null,inst_46833));
var state_46873__$1 = (function (){var statearr_46881 = state_46873;
(statearr_46881[(10)] = inst_46847__$1);

return statearr_46881;
})();
if(cljs.core.truth_(inst_46847__$1)){
var statearr_46882_48171 = state_46873__$1;
(statearr_46882_48171[(1)] = (29));

} else {
var statearr_46883_48172 = state_46873__$1;
(statearr_46883_48172[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (4))){
var inst_46791 = (state_46873[(2)]);
var state_46873__$1 = state_46873;
if(cljs.core.truth_(inst_46791)){
var statearr_46884_48176 = state_46873__$1;
(statearr_46884_48176[(1)] = (8));

} else {
var statearr_46885_48177 = state_46873__$1;
(statearr_46885_48177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (15))){
var inst_46818 = (state_46873[(2)]);
var state_46873__$1 = state_46873;
if(cljs.core.truth_(inst_46818)){
var statearr_46886_48182 = state_46873__$1;
(statearr_46886_48182[(1)] = (19));

} else {
var statearr_46887_48184 = state_46873__$1;
(statearr_46887_48184[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (21))){
var inst_46823 = (state_46873[(12)]);
var inst_46823__$1 = (state_46873[(2)]);
var inst_46824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46823__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46823__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46823__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46873__$1 = (function (){var statearr_46888 = state_46873;
(statearr_46888[(9)] = inst_46824);

(statearr_46888[(13)] = inst_46825);

(statearr_46888[(12)] = inst_46823__$1);

return statearr_46888;
})();
return cljs.core.async.ioc_alts_BANG_(state_46873__$1,(22),inst_46826);
} else {
if((state_val_46874 === (31))){
var inst_46855 = (state_46873[(2)]);
var state_46873__$1 = state_46873;
if(cljs.core.truth_(inst_46855)){
var statearr_46889_48185 = state_46873__$1;
(statearr_46889_48185[(1)] = (32));

} else {
var statearr_46890_48186 = state_46873__$1;
(statearr_46890_48186[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (32))){
var inst_46832 = (state_46873[(14)]);
var state_46873__$1 = state_46873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46873__$1,(35),out,inst_46832);
} else {
if((state_val_46874 === (33))){
var inst_46823 = (state_46873[(12)]);
var inst_46800 = inst_46823;
var state_46873__$1 = (function (){var statearr_46891 = state_46873;
(statearr_46891[(7)] = inst_46800);

return statearr_46891;
})();
var statearr_46892_48188 = state_46873__$1;
(statearr_46892_48188[(2)] = null);

(statearr_46892_48188[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (13))){
var inst_46800 = (state_46873[(7)]);
var inst_46807 = inst_46800.cljs$lang$protocol_mask$partition0$;
var inst_46808 = (inst_46807 & (64));
var inst_46809 = inst_46800.cljs$core$ISeq$;
var inst_46810 = (cljs.core.PROTOCOL_SENTINEL === inst_46809);
var inst_46811 = ((inst_46808) || (inst_46810));
var state_46873__$1 = state_46873;
if(cljs.core.truth_(inst_46811)){
var statearr_46893_48192 = state_46873__$1;
(statearr_46893_48192[(1)] = (16));

} else {
var statearr_46894_48194 = state_46873__$1;
(statearr_46894_48194[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (22))){
var inst_46832 = (state_46873[(14)]);
var inst_46833 = (state_46873[(11)]);
var inst_46831 = (state_46873[(2)]);
var inst_46832__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46831,(0),null);
var inst_46833__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46831,(1),null);
var inst_46834 = (inst_46832__$1 == null);
var inst_46835 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46833__$1,change);
var inst_46836 = ((inst_46834) || (inst_46835));
var state_46873__$1 = (function (){var statearr_46895 = state_46873;
(statearr_46895[(14)] = inst_46832__$1);

(statearr_46895[(11)] = inst_46833__$1);

return statearr_46895;
})();
if(cljs.core.truth_(inst_46836)){
var statearr_46896_48196 = state_46873__$1;
(statearr_46896_48196[(1)] = (23));

} else {
var statearr_46897_48197 = state_46873__$1;
(statearr_46897_48197[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (36))){
var inst_46823 = (state_46873[(12)]);
var inst_46800 = inst_46823;
var state_46873__$1 = (function (){var statearr_46898 = state_46873;
(statearr_46898[(7)] = inst_46800);

return statearr_46898;
})();
var statearr_46899_48199 = state_46873__$1;
(statearr_46899_48199[(2)] = null);

(statearr_46899_48199[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (29))){
var inst_46847 = (state_46873[(10)]);
var state_46873__$1 = state_46873;
var statearr_46900_48200 = state_46873__$1;
(statearr_46900_48200[(2)] = inst_46847);

(statearr_46900_48200[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (6))){
var state_46873__$1 = state_46873;
var statearr_46901_48201 = state_46873__$1;
(statearr_46901_48201[(2)] = false);

(statearr_46901_48201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (28))){
var inst_46843 = (state_46873[(2)]);
var inst_46844 = calc_state();
var inst_46800 = inst_46844;
var state_46873__$1 = (function (){var statearr_46902 = state_46873;
(statearr_46902[(7)] = inst_46800);

(statearr_46902[(15)] = inst_46843);

return statearr_46902;
})();
var statearr_46903_48206 = state_46873__$1;
(statearr_46903_48206[(2)] = null);

(statearr_46903_48206[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (25))){
var inst_46869 = (state_46873[(2)]);
var state_46873__$1 = state_46873;
var statearr_46904_48207 = state_46873__$1;
(statearr_46904_48207[(2)] = inst_46869);

(statearr_46904_48207[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (34))){
var inst_46867 = (state_46873[(2)]);
var state_46873__$1 = state_46873;
var statearr_46905_48208 = state_46873__$1;
(statearr_46905_48208[(2)] = inst_46867);

(statearr_46905_48208[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (17))){
var state_46873__$1 = state_46873;
var statearr_46906_48209 = state_46873__$1;
(statearr_46906_48209[(2)] = false);

(statearr_46906_48209[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (3))){
var state_46873__$1 = state_46873;
var statearr_46907_48215 = state_46873__$1;
(statearr_46907_48215[(2)] = false);

(statearr_46907_48215[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (12))){
var inst_46871 = (state_46873[(2)]);
var state_46873__$1 = state_46873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46873__$1,inst_46871);
} else {
if((state_val_46874 === (2))){
var inst_46775 = (state_46873[(8)]);
var inst_46780 = inst_46775.cljs$lang$protocol_mask$partition0$;
var inst_46781 = (inst_46780 & (64));
var inst_46782 = inst_46775.cljs$core$ISeq$;
var inst_46783 = (cljs.core.PROTOCOL_SENTINEL === inst_46782);
var inst_46784 = ((inst_46781) || (inst_46783));
var state_46873__$1 = state_46873;
if(cljs.core.truth_(inst_46784)){
var statearr_46908_48219 = state_46873__$1;
(statearr_46908_48219[(1)] = (5));

} else {
var statearr_46909_48222 = state_46873__$1;
(statearr_46909_48222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (23))){
var inst_46832 = (state_46873[(14)]);
var inst_46838 = (inst_46832 == null);
var state_46873__$1 = state_46873;
if(cljs.core.truth_(inst_46838)){
var statearr_46910_48223 = state_46873__$1;
(statearr_46910_48223[(1)] = (26));

} else {
var statearr_46911_48225 = state_46873__$1;
(statearr_46911_48225[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (35))){
var inst_46858 = (state_46873[(2)]);
var state_46873__$1 = state_46873;
if(cljs.core.truth_(inst_46858)){
var statearr_46912_48227 = state_46873__$1;
(statearr_46912_48227[(1)] = (36));

} else {
var statearr_46913_48228 = state_46873__$1;
(statearr_46913_48228[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (19))){
var inst_46800 = (state_46873[(7)]);
var inst_46820 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46800);
var state_46873__$1 = state_46873;
var statearr_46914_48229 = state_46873__$1;
(statearr_46914_48229[(2)] = inst_46820);

(statearr_46914_48229[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (11))){
var inst_46800 = (state_46873[(7)]);
var inst_46804 = (inst_46800 == null);
var inst_46805 = cljs.core.not(inst_46804);
var state_46873__$1 = state_46873;
if(inst_46805){
var statearr_46915_48230 = state_46873__$1;
(statearr_46915_48230[(1)] = (13));

} else {
var statearr_46916_48231 = state_46873__$1;
(statearr_46916_48231[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (9))){
var inst_46775 = (state_46873[(8)]);
var state_46873__$1 = state_46873;
var statearr_46917_48233 = state_46873__$1;
(statearr_46917_48233[(2)] = inst_46775);

(statearr_46917_48233[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (5))){
var state_46873__$1 = state_46873;
var statearr_46918_48234 = state_46873__$1;
(statearr_46918_48234[(2)] = true);

(statearr_46918_48234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (14))){
var state_46873__$1 = state_46873;
var statearr_46919_48235 = state_46873__$1;
(statearr_46919_48235[(2)] = false);

(statearr_46919_48235[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (26))){
var inst_46833 = (state_46873[(11)]);
var inst_46840 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_46833);
var state_46873__$1 = state_46873;
var statearr_46920_48238 = state_46873__$1;
(statearr_46920_48238[(2)] = inst_46840);

(statearr_46920_48238[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (16))){
var state_46873__$1 = state_46873;
var statearr_46921_48242 = state_46873__$1;
(statearr_46921_48242[(2)] = true);

(statearr_46921_48242[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (38))){
var inst_46863 = (state_46873[(2)]);
var state_46873__$1 = state_46873;
var statearr_46922_48243 = state_46873__$1;
(statearr_46922_48243[(2)] = inst_46863);

(statearr_46922_48243[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (30))){
var inst_46824 = (state_46873[(9)]);
var inst_46825 = (state_46873[(13)]);
var inst_46833 = (state_46873[(11)]);
var inst_46850 = cljs.core.empty_QMARK_(inst_46824);
var inst_46851 = (inst_46825.cljs$core$IFn$_invoke$arity$1 ? inst_46825.cljs$core$IFn$_invoke$arity$1(inst_46833) : inst_46825.call(null,inst_46833));
var inst_46852 = cljs.core.not(inst_46851);
var inst_46853 = ((inst_46850) && (inst_46852));
var state_46873__$1 = state_46873;
var statearr_46923_48245 = state_46873__$1;
(statearr_46923_48245[(2)] = inst_46853);

(statearr_46923_48245[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (10))){
var inst_46775 = (state_46873[(8)]);
var inst_46796 = (state_46873[(2)]);
var inst_46797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46796,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46796,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46796,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46800 = inst_46775;
var state_46873__$1 = (function (){var statearr_46924 = state_46873;
(statearr_46924[(7)] = inst_46800);

(statearr_46924[(16)] = inst_46797);

(statearr_46924[(17)] = inst_46798);

(statearr_46924[(18)] = inst_46799);

return statearr_46924;
})();
var statearr_46925_48248 = state_46873__$1;
(statearr_46925_48248[(2)] = null);

(statearr_46925_48248[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (18))){
var inst_46815 = (state_46873[(2)]);
var state_46873__$1 = state_46873;
var statearr_46926_48251 = state_46873__$1;
(statearr_46926_48251[(2)] = inst_46815);

(statearr_46926_48251[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (37))){
var state_46873__$1 = state_46873;
var statearr_46927_48254 = state_46873__$1;
(statearr_46927_48254[(2)] = null);

(statearr_46927_48254[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (8))){
var inst_46775 = (state_46873[(8)]);
var inst_46793 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46775);
var state_46873__$1 = state_46873;
var statearr_46928_48256 = state_46873__$1;
(statearr_46928_48256[(2)] = inst_46793);

(statearr_46928_48256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46074__auto___48158,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__45900__auto__,c__46074__auto___48158,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__45901__auto__ = null;
var cljs$core$async$mix_$_state_machine__45901__auto____0 = (function (){
var statearr_46929 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46929[(0)] = cljs$core$async$mix_$_state_machine__45901__auto__);

(statearr_46929[(1)] = (1));

return statearr_46929;
});
var cljs$core$async$mix_$_state_machine__45901__auto____1 = (function (state_46873){
while(true){
var ret_value__45902__auto__ = (function (){try{while(true){
var result__45903__auto__ = switch__45900__auto__(state_46873);
if(cljs.core.keyword_identical_QMARK_(result__45903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45903__auto__;
}
break;
}
}catch (e46930){if((e46930 instanceof Object)){
var ex__45904__auto__ = e46930;
var statearr_46931_48263 = state_46873;
(statearr_46931_48263[(5)] = ex__45904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46930;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48264 = state_46873;
state_46873 = G__48264;
continue;
} else {
return ret_value__45902__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__45901__auto__ = function(state_46873){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__45901__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__45901__auto____1.call(this,state_46873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__45901__auto____0;
cljs$core$async$mix_$_state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__45901__auto____1;
return cljs$core$async$mix_$_state_machine__45901__auto__;
})()
;})(switch__45900__auto__,c__46074__auto___48158,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__46076__auto__ = (function (){var statearr_46932 = (f__46075__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46075__auto__.cljs$core$IFn$_invoke$arity$0() : f__46075__auto__.call(null));
(statearr_46932[(6)] = c__46074__auto___48158);

return statearr_46932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46076__auto__);
});})(c__46074__auto___48158,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4348__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4348__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4348__auto__.call(null,p,v,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4348__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__46934 = arguments.length;
switch (G__46934) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4348__auto__.call(null,p));
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4348__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4348__auto__.call(null,p,v));
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4348__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__46937 = arguments.length;
switch (G__46937) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4047__auto__,mults){
return (function (p1__46935_SHARP_){
if(cljs.core.truth_((p1__46935_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__46935_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__46935_SHARP_.call(null,topic)))){
return p1__46935_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46935_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46938 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46938 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46939){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46939 = meta46939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_46940,meta46939__$1){
var self__ = this;
var _46940__$1 = this;
return (new cljs.core.async.t_cljs$core$async46938(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46939__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46938.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_46940){
var self__ = this;
var _46940__$1 = this;
return self__.meta46939;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46938.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46938.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46938.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46938.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46938.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46938.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46938.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46938.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46939","meta46939",359382875,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46938.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46938.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46938";

cljs.core.async.t_cljs$core$async46938.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async46938");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46938.
 */
cljs.core.async.__GT_t_cljs$core$async46938 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async46938(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46939){
return (new cljs.core.async.t_cljs$core$async46938(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46939));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async46938(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46074__auto___48302 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46074__auto___48302,mults,ensure_mult,p){
return (function (){
var f__46075__auto__ = (function (){var switch__45900__auto__ = ((function (c__46074__auto___48302,mults,ensure_mult,p){
return (function (state_47012){
var state_val_47013 = (state_47012[(1)]);
if((state_val_47013 === (7))){
var inst_47008 = (state_47012[(2)]);
var state_47012__$1 = state_47012;
var statearr_47014_48305 = state_47012__$1;
(statearr_47014_48305[(2)] = inst_47008);

(statearr_47014_48305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47013 === (20))){
var state_47012__$1 = state_47012;
var statearr_47015_48306 = state_47012__$1;
(statearr_47015_48306[(2)] = null);

(statearr_47015_48306[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47013 === (1))){
var state_47012__$1 = state_47012;
var statearr_47016_48307 = state_47012__$1;
(statearr_47016_48307[(2)] = null);

(statearr_47016_48307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47013 === (24))){
var inst_46991 = (state_47012[(7)]);
var inst_47000 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_46991);
var state_47012__$1 = state_47012;
var statearr_47017_48309 = state_47012__$1;
(statearr_47017_48309[(2)] = inst_47000);

(statearr_47017_48309[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47013 === (4))){
var inst_46943 = (state_47012[(8)]);
var inst_46943__$1 = (state_47012[(2)]);
var inst_46944 = (inst_46943__$1 == null);
var state_47012__$1 = (function (){var statearr_47018 = state_47012;
(statearr_47018[(8)] = inst_46943__$1);

return statearr_47018;
})();
if(cljs.core.truth_(inst_46944)){
var statearr_47019_48311 = state_47012__$1;
(statearr_47019_48311[(1)] = (5));

} else {
var statearr_47020_48312 = state_47012__$1;
(statearr_47020_48312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47013 === (15))){
var inst_46985 = (state_47012[(2)]);
var state_47012__$1 = state_47012;
var statearr_47021_48313 = state_47012__$1;
(statearr_47021_48313[(2)] = inst_46985);

(statearr_47021_48313[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47013 === (21))){
var inst_47005 = (state_47012[(2)]);
var state_47012__$1 = (function (){var statearr_47022 = state_47012;
(statearr_47022[(9)] = inst_47005);

return statearr_47022;
})();
var statearr_47023_48316 = state_47012__$1;
(statearr_47023_48316[(2)] = null);

(statearr_47023_48316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47013 === (13))){
var inst_46967 = (state_47012[(10)]);
var inst_46969 = cljs.core.chunked_seq_QMARK_(inst_46967);
var state_47012__$1 = state_47012;
if(inst_46969){
var statearr_47024_48320 = state_47012__$1;
(statearr_47024_48320[(1)] = (16));

} else {
var statearr_47025_48321 = state_47012__$1;
(statearr_47025_48321[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47013 === (22))){
var inst_46997 = (state_47012[(2)]);
var state_47012__$1 = state_47012;
if(cljs.core.truth_(inst_46997)){
var statearr_47026_48322 = state_47012__$1;
(statearr_47026_48322[(1)] = (23));

} else {
var statearr_47027_48323 = state_47012__$1;
(statearr_47027_48323[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47013 === (6))){
var inst_46991 = (state_47012[(7)]);
var inst_46993 = (state_47012[(11)]);
var inst_46943 = (state_47012[(8)]);
var inst_46991__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_46943) : topic_fn.call(null,inst_46943));
var inst_46992 = cljs.core.deref(mults);
var inst_46993__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46992,inst_46991__$1);
var state_47012__$1 = (function (){var statearr_47028 = state_47012;
(statearr_47028[(7)] = inst_46991__$1);

(statearr_47028[(11)] = inst_46993__$1);

return statearr_47028;
})();
if(cljs.core.truth_(inst_46993__$1)){
var statearr_47029_48325 = state_47012__$1;
(statearr_47029_48325[(1)] = (19));

} else {
var statearr_47030_48326 = state_47012__$1;
(statearr_47030_48326[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47013 === (25))){
var inst_47002 = (state_47012[(2)]);
var state_47012__$1 = state_47012;
var statearr_47031_48327 = state_47012__$1;
(statearr_47031_48327[(2)] = inst_47002);

(statearr_47031_48327[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47013 === (17))){
var inst_46967 = (state_47012[(10)]);
var inst_46976 = cljs.core.first(inst_46967);
var inst_46977 = cljs.core.async.muxch_STAR_(inst_46976);
var inst_46978 = cljs.core.async.close_BANG_(inst_46977);
var inst_46979 = cljs.core.next(inst_46967);
var inst_46953 = inst_46979;
var inst_46954 = null;
var inst_46955 = (0);
var inst_46956 = (0);
var state_47012__$1 = (function (){var statearr_47032 = state_47012;
(statearr_47032[(12)] = inst_46953);

(statearr_47032[(13)] = inst_46978);

(statearr_47032[(14)] = inst_46955);

(statearr_47032[(15)] = inst_46954);

(statearr_47032[(16)] = inst_46956);

return statearr_47032;
})();
var statearr_47033_48332 = state_47012__$1;
(statearr_47033_48332[(2)] = null);

(statearr_47033_48332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47013 === (3))){
var inst_47010 = (state_47012[(2)]);
var state_47012__$1 = state_47012;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47012__$1,inst_47010);
} else {
if((state_val_47013 === (12))){
var inst_46987 = (state_47012[(2)]);
var state_47012__$1 = state_47012;
var statearr_47034_48333 = state_47012__$1;
(statearr_47034_48333[(2)] = inst_46987);

(statearr_47034_48333[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47013 === (2))){
var state_47012__$1 = state_47012;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47012__$1,(4),ch);
} else {
if((state_val_47013 === (23))){
var state_47012__$1 = state_47012;
var statearr_47035_48334 = state_47012__$1;
(statearr_47035_48334[(2)] = null);

(statearr_47035_48334[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47013 === (19))){
var inst_46993 = (state_47012[(11)]);
var inst_46943 = (state_47012[(8)]);
var inst_46995 = cljs.core.async.muxch_STAR_(inst_46993);
var state_47012__$1 = state_47012;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47012__$1,(22),inst_46995,inst_46943);
} else {
if((state_val_47013 === (11))){
var inst_46953 = (state_47012[(12)]);
var inst_46967 = (state_47012[(10)]);
var inst_46967__$1 = cljs.core.seq(inst_46953);
var state_47012__$1 = (function (){var statearr_47036 = state_47012;
(statearr_47036[(10)] = inst_46967__$1);

return statearr_47036;
})();
if(inst_46967__$1){
var statearr_47037_48341 = state_47012__$1;
(statearr_47037_48341[(1)] = (13));

} else {
var statearr_47038_48343 = state_47012__$1;
(statearr_47038_48343[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47013 === (9))){
var inst_46989 = (state_47012[(2)]);
var state_47012__$1 = state_47012;
var statearr_47039_48345 = state_47012__$1;
(statearr_47039_48345[(2)] = inst_46989);

(statearr_47039_48345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47013 === (5))){
var inst_46950 = cljs.core.deref(mults);
var inst_46951 = cljs.core.vals(inst_46950);
var inst_46952 = cljs.core.seq(inst_46951);
var inst_46953 = inst_46952;
var inst_46954 = null;
var inst_46955 = (0);
var inst_46956 = (0);
var state_47012__$1 = (function (){var statearr_47040 = state_47012;
(statearr_47040[(12)] = inst_46953);

(statearr_47040[(14)] = inst_46955);

(statearr_47040[(15)] = inst_46954);

(statearr_47040[(16)] = inst_46956);

return statearr_47040;
})();
var statearr_47041_48349 = state_47012__$1;
(statearr_47041_48349[(2)] = null);

(statearr_47041_48349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47013 === (14))){
var state_47012__$1 = state_47012;
var statearr_47045_48350 = state_47012__$1;
(statearr_47045_48350[(2)] = null);

(statearr_47045_48350[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47013 === (16))){
var inst_46967 = (state_47012[(10)]);
var inst_46971 = cljs.core.chunk_first(inst_46967);
var inst_46972 = cljs.core.chunk_rest(inst_46967);
var inst_46973 = cljs.core.count(inst_46971);
var inst_46953 = inst_46972;
var inst_46954 = inst_46971;
var inst_46955 = inst_46973;
var inst_46956 = (0);
var state_47012__$1 = (function (){var statearr_47046 = state_47012;
(statearr_47046[(12)] = inst_46953);

(statearr_47046[(14)] = inst_46955);

(statearr_47046[(15)] = inst_46954);

(statearr_47046[(16)] = inst_46956);

return statearr_47046;
})();
var statearr_47047_48353 = state_47012__$1;
(statearr_47047_48353[(2)] = null);

(statearr_47047_48353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47013 === (10))){
var inst_46953 = (state_47012[(12)]);
var inst_46955 = (state_47012[(14)]);
var inst_46954 = (state_47012[(15)]);
var inst_46956 = (state_47012[(16)]);
var inst_46961 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46954,inst_46956);
var inst_46962 = cljs.core.async.muxch_STAR_(inst_46961);
var inst_46963 = cljs.core.async.close_BANG_(inst_46962);
var inst_46964 = (inst_46956 + (1));
var tmp47042 = inst_46953;
var tmp47043 = inst_46955;
var tmp47044 = inst_46954;
var inst_46953__$1 = tmp47042;
var inst_46954__$1 = tmp47044;
var inst_46955__$1 = tmp47043;
var inst_46956__$1 = inst_46964;
var state_47012__$1 = (function (){var statearr_47048 = state_47012;
(statearr_47048[(12)] = inst_46953__$1);

(statearr_47048[(17)] = inst_46963);

(statearr_47048[(14)] = inst_46955__$1);

(statearr_47048[(15)] = inst_46954__$1);

(statearr_47048[(16)] = inst_46956__$1);

return statearr_47048;
})();
var statearr_47049_48357 = state_47012__$1;
(statearr_47049_48357[(2)] = null);

(statearr_47049_48357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47013 === (18))){
var inst_46982 = (state_47012[(2)]);
var state_47012__$1 = state_47012;
var statearr_47050_48358 = state_47012__$1;
(statearr_47050_48358[(2)] = inst_46982);

(statearr_47050_48358[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47013 === (8))){
var inst_46955 = (state_47012[(14)]);
var inst_46956 = (state_47012[(16)]);
var inst_46958 = (inst_46956 < inst_46955);
var inst_46959 = inst_46958;
var state_47012__$1 = state_47012;
if(cljs.core.truth_(inst_46959)){
var statearr_47051_48362 = state_47012__$1;
(statearr_47051_48362[(1)] = (10));

} else {
var statearr_47052_48363 = state_47012__$1;
(statearr_47052_48363[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46074__auto___48302,mults,ensure_mult,p))
;
return ((function (switch__45900__auto__,c__46074__auto___48302,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__45901__auto__ = null;
var cljs$core$async$state_machine__45901__auto____0 = (function (){
var statearr_47053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47053[(0)] = cljs$core$async$state_machine__45901__auto__);

(statearr_47053[(1)] = (1));

return statearr_47053;
});
var cljs$core$async$state_machine__45901__auto____1 = (function (state_47012){
while(true){
var ret_value__45902__auto__ = (function (){try{while(true){
var result__45903__auto__ = switch__45900__auto__(state_47012);
if(cljs.core.keyword_identical_QMARK_(result__45903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45903__auto__;
}
break;
}
}catch (e47054){if((e47054 instanceof Object)){
var ex__45904__auto__ = e47054;
var statearr_47055_48370 = state_47012;
(statearr_47055_48370[(5)] = ex__45904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47054;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48371 = state_47012;
state_47012 = G__48371;
continue;
} else {
return ret_value__45902__auto__;
}
break;
}
});
cljs$core$async$state_machine__45901__auto__ = function(state_47012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45901__auto____1.call(this,state_47012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45901__auto____0;
cljs$core$async$state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45901__auto____1;
return cljs$core$async$state_machine__45901__auto__;
})()
;})(switch__45900__auto__,c__46074__auto___48302,mults,ensure_mult,p))
})();
var state__46076__auto__ = (function (){var statearr_47056 = (f__46075__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46075__auto__.cljs$core$IFn$_invoke$arity$0() : f__46075__auto__.call(null));
(statearr_47056[(6)] = c__46074__auto___48302);

return statearr_47056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46076__auto__);
});})(c__46074__auto___48302,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__47058 = arguments.length;
switch (G__47058) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__47060 = arguments.length;
switch (G__47060) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__47062 = arguments.length;
switch (G__47062) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__46074__auto___48387 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46074__auto___48387,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__46075__auto__ = (function (){var switch__45900__auto__ = ((function (c__46074__auto___48387,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_47101){
var state_val_47102 = (state_47101[(1)]);
if((state_val_47102 === (7))){
var state_47101__$1 = state_47101;
var statearr_47103_48389 = state_47101__$1;
(statearr_47103_48389[(2)] = null);

(statearr_47103_48389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47102 === (1))){
var state_47101__$1 = state_47101;
var statearr_47104_48391 = state_47101__$1;
(statearr_47104_48391[(2)] = null);

(statearr_47104_48391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47102 === (4))){
var inst_47065 = (state_47101[(7)]);
var inst_47067 = (inst_47065 < cnt);
var state_47101__$1 = state_47101;
if(cljs.core.truth_(inst_47067)){
var statearr_47105_48395 = state_47101__$1;
(statearr_47105_48395[(1)] = (6));

} else {
var statearr_47106_48396 = state_47101__$1;
(statearr_47106_48396[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47102 === (15))){
var inst_47097 = (state_47101[(2)]);
var state_47101__$1 = state_47101;
var statearr_47107_48399 = state_47101__$1;
(statearr_47107_48399[(2)] = inst_47097);

(statearr_47107_48399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47102 === (13))){
var inst_47090 = cljs.core.async.close_BANG_(out);
var state_47101__$1 = state_47101;
var statearr_47108_48406 = state_47101__$1;
(statearr_47108_48406[(2)] = inst_47090);

(statearr_47108_48406[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47102 === (6))){
var state_47101__$1 = state_47101;
var statearr_47109_48410 = state_47101__$1;
(statearr_47109_48410[(2)] = null);

(statearr_47109_48410[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47102 === (3))){
var inst_47099 = (state_47101[(2)]);
var state_47101__$1 = state_47101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47101__$1,inst_47099);
} else {
if((state_val_47102 === (12))){
var inst_47087 = (state_47101[(8)]);
var inst_47087__$1 = (state_47101[(2)]);
var inst_47088 = cljs.core.some(cljs.core.nil_QMARK_,inst_47087__$1);
var state_47101__$1 = (function (){var statearr_47110 = state_47101;
(statearr_47110[(8)] = inst_47087__$1);

return statearr_47110;
})();
if(cljs.core.truth_(inst_47088)){
var statearr_47111_48412 = state_47101__$1;
(statearr_47111_48412[(1)] = (13));

} else {
var statearr_47112_48416 = state_47101__$1;
(statearr_47112_48416[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47102 === (2))){
var inst_47064 = cljs.core.reset_BANG_(dctr,cnt);
var inst_47065 = (0);
var state_47101__$1 = (function (){var statearr_47113 = state_47101;
(statearr_47113[(9)] = inst_47064);

(statearr_47113[(7)] = inst_47065);

return statearr_47113;
})();
var statearr_47114_48417 = state_47101__$1;
(statearr_47114_48417[(2)] = null);

(statearr_47114_48417[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47102 === (11))){
var inst_47065 = (state_47101[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47101,(10),Object,null,(9));
var inst_47074 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_47065) : chs__$1.call(null,inst_47065));
var inst_47075 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_47065) : done.call(null,inst_47065));
var inst_47076 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_47074,inst_47075);
var state_47101__$1 = state_47101;
var statearr_47115_48423 = state_47101__$1;
(statearr_47115_48423[(2)] = inst_47076);


cljs.core.async.impl.ioc_helpers.process_exception(state_47101__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47102 === (9))){
var inst_47065 = (state_47101[(7)]);
var inst_47078 = (state_47101[(2)]);
var inst_47079 = (inst_47065 + (1));
var inst_47065__$1 = inst_47079;
var state_47101__$1 = (function (){var statearr_47116 = state_47101;
(statearr_47116[(10)] = inst_47078);

(statearr_47116[(7)] = inst_47065__$1);

return statearr_47116;
})();
var statearr_47117_48424 = state_47101__$1;
(statearr_47117_48424[(2)] = null);

(statearr_47117_48424[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47102 === (5))){
var inst_47085 = (state_47101[(2)]);
var state_47101__$1 = (function (){var statearr_47118 = state_47101;
(statearr_47118[(11)] = inst_47085);

return statearr_47118;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47101__$1,(12),dchan);
} else {
if((state_val_47102 === (14))){
var inst_47087 = (state_47101[(8)]);
var inst_47092 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_47087);
var state_47101__$1 = state_47101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47101__$1,(16),out,inst_47092);
} else {
if((state_val_47102 === (16))){
var inst_47094 = (state_47101[(2)]);
var state_47101__$1 = (function (){var statearr_47119 = state_47101;
(statearr_47119[(12)] = inst_47094);

return statearr_47119;
})();
var statearr_47120_48437 = state_47101__$1;
(statearr_47120_48437[(2)] = null);

(statearr_47120_48437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47102 === (10))){
var inst_47069 = (state_47101[(2)]);
var inst_47070 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_47101__$1 = (function (){var statearr_47121 = state_47101;
(statearr_47121[(13)] = inst_47069);

return statearr_47121;
})();
var statearr_47122_48446 = state_47101__$1;
(statearr_47122_48446[(2)] = inst_47070);


cljs.core.async.impl.ioc_helpers.process_exception(state_47101__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47102 === (8))){
var inst_47083 = (state_47101[(2)]);
var state_47101__$1 = state_47101;
var statearr_47123_48447 = state_47101__$1;
(statearr_47123_48447[(2)] = inst_47083);

(statearr_47123_48447[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46074__auto___48387,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__45900__auto__,c__46074__auto___48387,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__45901__auto__ = null;
var cljs$core$async$state_machine__45901__auto____0 = (function (){
var statearr_47124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47124[(0)] = cljs$core$async$state_machine__45901__auto__);

(statearr_47124[(1)] = (1));

return statearr_47124;
});
var cljs$core$async$state_machine__45901__auto____1 = (function (state_47101){
while(true){
var ret_value__45902__auto__ = (function (){try{while(true){
var result__45903__auto__ = switch__45900__auto__(state_47101);
if(cljs.core.keyword_identical_QMARK_(result__45903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45903__auto__;
}
break;
}
}catch (e47125){if((e47125 instanceof Object)){
var ex__45904__auto__ = e47125;
var statearr_47126_48449 = state_47101;
(statearr_47126_48449[(5)] = ex__45904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47125;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48452 = state_47101;
state_47101 = G__48452;
continue;
} else {
return ret_value__45902__auto__;
}
break;
}
});
cljs$core$async$state_machine__45901__auto__ = function(state_47101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45901__auto____1.call(this,state_47101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45901__auto____0;
cljs$core$async$state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45901__auto____1;
return cljs$core$async$state_machine__45901__auto__;
})()
;})(switch__45900__auto__,c__46074__auto___48387,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__46076__auto__ = (function (){var statearr_47127 = (f__46075__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46075__auto__.cljs$core$IFn$_invoke$arity$0() : f__46075__auto__.call(null));
(statearr_47127[(6)] = c__46074__auto___48387);

return statearr_47127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46076__auto__);
});})(c__46074__auto___48387,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__47130 = arguments.length;
switch (G__47130) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46074__auto___48462 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46074__auto___48462,out){
return (function (){
var f__46075__auto__ = (function (){var switch__45900__auto__ = ((function (c__46074__auto___48462,out){
return (function (state_47162){
var state_val_47163 = (state_47162[(1)]);
if((state_val_47163 === (7))){
var inst_47141 = (state_47162[(7)]);
var inst_47142 = (state_47162[(8)]);
var inst_47141__$1 = (state_47162[(2)]);
var inst_47142__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47141__$1,(0),null);
var inst_47143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47141__$1,(1),null);
var inst_47144 = (inst_47142__$1 == null);
var state_47162__$1 = (function (){var statearr_47164 = state_47162;
(statearr_47164[(7)] = inst_47141__$1);

(statearr_47164[(8)] = inst_47142__$1);

(statearr_47164[(9)] = inst_47143);

return statearr_47164;
})();
if(cljs.core.truth_(inst_47144)){
var statearr_47165_48469 = state_47162__$1;
(statearr_47165_48469[(1)] = (8));

} else {
var statearr_47166_48470 = state_47162__$1;
(statearr_47166_48470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47163 === (1))){
var inst_47131 = cljs.core.vec(chs);
var inst_47132 = inst_47131;
var state_47162__$1 = (function (){var statearr_47167 = state_47162;
(statearr_47167[(10)] = inst_47132);

return statearr_47167;
})();
var statearr_47168_48473 = state_47162__$1;
(statearr_47168_48473[(2)] = null);

(statearr_47168_48473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47163 === (4))){
var inst_47132 = (state_47162[(10)]);
var state_47162__$1 = state_47162;
return cljs.core.async.ioc_alts_BANG_(state_47162__$1,(7),inst_47132);
} else {
if((state_val_47163 === (6))){
var inst_47158 = (state_47162[(2)]);
var state_47162__$1 = state_47162;
var statearr_47169_48474 = state_47162__$1;
(statearr_47169_48474[(2)] = inst_47158);

(statearr_47169_48474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47163 === (3))){
var inst_47160 = (state_47162[(2)]);
var state_47162__$1 = state_47162;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47162__$1,inst_47160);
} else {
if((state_val_47163 === (2))){
var inst_47132 = (state_47162[(10)]);
var inst_47134 = cljs.core.count(inst_47132);
var inst_47135 = (inst_47134 > (0));
var state_47162__$1 = state_47162;
if(cljs.core.truth_(inst_47135)){
var statearr_47171_48475 = state_47162__$1;
(statearr_47171_48475[(1)] = (4));

} else {
var statearr_47172_48476 = state_47162__$1;
(statearr_47172_48476[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47163 === (11))){
var inst_47132 = (state_47162[(10)]);
var inst_47151 = (state_47162[(2)]);
var tmp47170 = inst_47132;
var inst_47132__$1 = tmp47170;
var state_47162__$1 = (function (){var statearr_47173 = state_47162;
(statearr_47173[(11)] = inst_47151);

(statearr_47173[(10)] = inst_47132__$1);

return statearr_47173;
})();
var statearr_47174_48481 = state_47162__$1;
(statearr_47174_48481[(2)] = null);

(statearr_47174_48481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47163 === (9))){
var inst_47142 = (state_47162[(8)]);
var state_47162__$1 = state_47162;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47162__$1,(11),out,inst_47142);
} else {
if((state_val_47163 === (5))){
var inst_47156 = cljs.core.async.close_BANG_(out);
var state_47162__$1 = state_47162;
var statearr_47175_48484 = state_47162__$1;
(statearr_47175_48484[(2)] = inst_47156);

(statearr_47175_48484[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47163 === (10))){
var inst_47154 = (state_47162[(2)]);
var state_47162__$1 = state_47162;
var statearr_47176_48487 = state_47162__$1;
(statearr_47176_48487[(2)] = inst_47154);

(statearr_47176_48487[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47163 === (8))){
var inst_47141 = (state_47162[(7)]);
var inst_47132 = (state_47162[(10)]);
var inst_47142 = (state_47162[(8)]);
var inst_47143 = (state_47162[(9)]);
var inst_47146 = (function (){var cs = inst_47132;
var vec__47137 = inst_47141;
var v = inst_47142;
var c = inst_47143;
return ((function (cs,vec__47137,v,c,inst_47141,inst_47132,inst_47142,inst_47143,state_val_47163,c__46074__auto___48462,out){
return (function (p1__47128_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__47128_SHARP_);
});
;})(cs,vec__47137,v,c,inst_47141,inst_47132,inst_47142,inst_47143,state_val_47163,c__46074__auto___48462,out))
})();
var inst_47147 = cljs.core.filterv(inst_47146,inst_47132);
var inst_47132__$1 = inst_47147;
var state_47162__$1 = (function (){var statearr_47177 = state_47162;
(statearr_47177[(10)] = inst_47132__$1);

return statearr_47177;
})();
var statearr_47178_48490 = state_47162__$1;
(statearr_47178_48490[(2)] = null);

(statearr_47178_48490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__46074__auto___48462,out))
;
return ((function (switch__45900__auto__,c__46074__auto___48462,out){
return (function() {
var cljs$core$async$state_machine__45901__auto__ = null;
var cljs$core$async$state_machine__45901__auto____0 = (function (){
var statearr_47179 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47179[(0)] = cljs$core$async$state_machine__45901__auto__);

(statearr_47179[(1)] = (1));

return statearr_47179;
});
var cljs$core$async$state_machine__45901__auto____1 = (function (state_47162){
while(true){
var ret_value__45902__auto__ = (function (){try{while(true){
var result__45903__auto__ = switch__45900__auto__(state_47162);
if(cljs.core.keyword_identical_QMARK_(result__45903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45903__auto__;
}
break;
}
}catch (e47180){if((e47180 instanceof Object)){
var ex__45904__auto__ = e47180;
var statearr_47181_48494 = state_47162;
(statearr_47181_48494[(5)] = ex__45904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47180;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48498 = state_47162;
state_47162 = G__48498;
continue;
} else {
return ret_value__45902__auto__;
}
break;
}
});
cljs$core$async$state_machine__45901__auto__ = function(state_47162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45901__auto____1.call(this,state_47162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45901__auto____0;
cljs$core$async$state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45901__auto____1;
return cljs$core$async$state_machine__45901__auto__;
})()
;})(switch__45900__auto__,c__46074__auto___48462,out))
})();
var state__46076__auto__ = (function (){var statearr_47182 = (f__46075__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46075__auto__.cljs$core$IFn$_invoke$arity$0() : f__46075__auto__.call(null));
(statearr_47182[(6)] = c__46074__auto___48462);

return statearr_47182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46076__auto__);
});})(c__46074__auto___48462,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__47184 = arguments.length;
switch (G__47184) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46074__auto___48502 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46074__auto___48502,out){
return (function (){
var f__46075__auto__ = (function (){var switch__45900__auto__ = ((function (c__46074__auto___48502,out){
return (function (state_47208){
var state_val_47209 = (state_47208[(1)]);
if((state_val_47209 === (7))){
var inst_47190 = (state_47208[(7)]);
var inst_47190__$1 = (state_47208[(2)]);
var inst_47191 = (inst_47190__$1 == null);
var inst_47192 = cljs.core.not(inst_47191);
var state_47208__$1 = (function (){var statearr_47210 = state_47208;
(statearr_47210[(7)] = inst_47190__$1);

return statearr_47210;
})();
if(inst_47192){
var statearr_47211_48510 = state_47208__$1;
(statearr_47211_48510[(1)] = (8));

} else {
var statearr_47212_48511 = state_47208__$1;
(statearr_47212_48511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47209 === (1))){
var inst_47185 = (0);
var state_47208__$1 = (function (){var statearr_47213 = state_47208;
(statearr_47213[(8)] = inst_47185);

return statearr_47213;
})();
var statearr_47214_48518 = state_47208__$1;
(statearr_47214_48518[(2)] = null);

(statearr_47214_48518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47209 === (4))){
var state_47208__$1 = state_47208;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47208__$1,(7),ch);
} else {
if((state_val_47209 === (6))){
var inst_47203 = (state_47208[(2)]);
var state_47208__$1 = state_47208;
var statearr_47215_48520 = state_47208__$1;
(statearr_47215_48520[(2)] = inst_47203);

(statearr_47215_48520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47209 === (3))){
var inst_47205 = (state_47208[(2)]);
var inst_47206 = cljs.core.async.close_BANG_(out);
var state_47208__$1 = (function (){var statearr_47216 = state_47208;
(statearr_47216[(9)] = inst_47205);

return statearr_47216;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47208__$1,inst_47206);
} else {
if((state_val_47209 === (2))){
var inst_47185 = (state_47208[(8)]);
var inst_47187 = (inst_47185 < n);
var state_47208__$1 = state_47208;
if(cljs.core.truth_(inst_47187)){
var statearr_47217_48524 = state_47208__$1;
(statearr_47217_48524[(1)] = (4));

} else {
var statearr_47218_48525 = state_47208__$1;
(statearr_47218_48525[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47209 === (11))){
var inst_47185 = (state_47208[(8)]);
var inst_47195 = (state_47208[(2)]);
var inst_47196 = (inst_47185 + (1));
var inst_47185__$1 = inst_47196;
var state_47208__$1 = (function (){var statearr_47219 = state_47208;
(statearr_47219[(8)] = inst_47185__$1);

(statearr_47219[(10)] = inst_47195);

return statearr_47219;
})();
var statearr_47220_48531 = state_47208__$1;
(statearr_47220_48531[(2)] = null);

(statearr_47220_48531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47209 === (9))){
var state_47208__$1 = state_47208;
var statearr_47221_48532 = state_47208__$1;
(statearr_47221_48532[(2)] = null);

(statearr_47221_48532[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47209 === (5))){
var state_47208__$1 = state_47208;
var statearr_47222_48534 = state_47208__$1;
(statearr_47222_48534[(2)] = null);

(statearr_47222_48534[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47209 === (10))){
var inst_47200 = (state_47208[(2)]);
var state_47208__$1 = state_47208;
var statearr_47223_48536 = state_47208__$1;
(statearr_47223_48536[(2)] = inst_47200);

(statearr_47223_48536[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47209 === (8))){
var inst_47190 = (state_47208[(7)]);
var state_47208__$1 = state_47208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47208__$1,(11),out,inst_47190);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__46074__auto___48502,out))
;
return ((function (switch__45900__auto__,c__46074__auto___48502,out){
return (function() {
var cljs$core$async$state_machine__45901__auto__ = null;
var cljs$core$async$state_machine__45901__auto____0 = (function (){
var statearr_47224 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47224[(0)] = cljs$core$async$state_machine__45901__auto__);

(statearr_47224[(1)] = (1));

return statearr_47224;
});
var cljs$core$async$state_machine__45901__auto____1 = (function (state_47208){
while(true){
var ret_value__45902__auto__ = (function (){try{while(true){
var result__45903__auto__ = switch__45900__auto__(state_47208);
if(cljs.core.keyword_identical_QMARK_(result__45903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45903__auto__;
}
break;
}
}catch (e47225){if((e47225 instanceof Object)){
var ex__45904__auto__ = e47225;
var statearr_47226_48541 = state_47208;
(statearr_47226_48541[(5)] = ex__45904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47225;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48542 = state_47208;
state_47208 = G__48542;
continue;
} else {
return ret_value__45902__auto__;
}
break;
}
});
cljs$core$async$state_machine__45901__auto__ = function(state_47208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45901__auto____1.call(this,state_47208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45901__auto____0;
cljs$core$async$state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45901__auto____1;
return cljs$core$async$state_machine__45901__auto__;
})()
;})(switch__45900__auto__,c__46074__auto___48502,out))
})();
var state__46076__auto__ = (function (){var statearr_47227 = (f__46075__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46075__auto__.cljs$core$IFn$_invoke$arity$0() : f__46075__auto__.call(null));
(statearr_47227[(6)] = c__46074__auto___48502);

return statearr_47227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46076__auto__);
});})(c__46074__auto___48502,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47229 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47229 = (function (f,ch,meta47230){
this.f = f;
this.ch = ch;
this.meta47230 = meta47230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47231,meta47230__$1){
var self__ = this;
var _47231__$1 = this;
return (new cljs.core.async.t_cljs$core$async47229(self__.f,self__.ch,meta47230__$1));
});

cljs.core.async.t_cljs$core$async47229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47231){
var self__ = this;
var _47231__$1 = this;
return self__.meta47230;
});

cljs.core.async.t_cljs$core$async47229.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47229.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async47229.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async47229.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47229.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47232 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47232 = (function (f,ch,meta47230,_,fn1,meta47233){
this.f = f;
this.ch = ch;
this.meta47230 = meta47230;
this._ = _;
this.fn1 = fn1;
this.meta47233 = meta47233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_47234,meta47233__$1){
var self__ = this;
var _47234__$1 = this;
return (new cljs.core.async.t_cljs$core$async47232(self__.f,self__.ch,self__.meta47230,self__._,self__.fn1,meta47233__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async47232.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_47234){
var self__ = this;
var _47234__$1 = this;
return self__.meta47233;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47232.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47232.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47232.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47232.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__47228_SHARP_){
var G__47235 = (((p1__47228_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__47228_SHARP_) : self__.f.call(null,p1__47228_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__47235) : f1.call(null,G__47235));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async47232.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47230","meta47230",-937611413,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47229","cljs.core.async/t_cljs$core$async47229",1868228686,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47233","meta47233",1058623103,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47232.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47232";

cljs.core.async.t_cljs$core$async47232.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async47232");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47232.
 */
cljs.core.async.__GT_t_cljs$core$async47232 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47232(f__$1,ch__$1,meta47230__$1,___$2,fn1__$1,meta47233){
return (new cljs.core.async.t_cljs$core$async47232(f__$1,ch__$1,meta47230__$1,___$2,fn1__$1,meta47233));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async47232(self__.f,self__.ch,self__.meta47230,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__47236 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__47236) : self__.f.call(null,G__47236));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async47229.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47229.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async47229.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47230","meta47230",-937611413,null)], null);
});

cljs.core.async.t_cljs$core$async47229.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47229";

cljs.core.async.t_cljs$core$async47229.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async47229");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47229.
 */
cljs.core.async.__GT_t_cljs$core$async47229 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47229(f__$1,ch__$1,meta47230){
return (new cljs.core.async.t_cljs$core$async47229(f__$1,ch__$1,meta47230));
});

}

return (new cljs.core.async.t_cljs$core$async47229(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47237 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47237 = (function (f,ch,meta47238){
this.f = f;
this.ch = ch;
this.meta47238 = meta47238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47239,meta47238__$1){
var self__ = this;
var _47239__$1 = this;
return (new cljs.core.async.t_cljs$core$async47237(self__.f,self__.ch,meta47238__$1));
});

cljs.core.async.t_cljs$core$async47237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47239){
var self__ = this;
var _47239__$1 = this;
return self__.meta47238;
});

cljs.core.async.t_cljs$core$async47237.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47237.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async47237.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47237.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47237.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47237.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async47237.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47238","meta47238",833963001,null)], null);
});

cljs.core.async.t_cljs$core$async47237.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47237.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47237";

cljs.core.async.t_cljs$core$async47237.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async47237");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47237.
 */
cljs.core.async.__GT_t_cljs$core$async47237 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47237(f__$1,ch__$1,meta47238){
return (new cljs.core.async.t_cljs$core$async47237(f__$1,ch__$1,meta47238));
});

}

return (new cljs.core.async.t_cljs$core$async47237(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47240 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47240 = (function (p,ch,meta47241){
this.p = p;
this.ch = ch;
this.meta47241 = meta47241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47242,meta47241__$1){
var self__ = this;
var _47242__$1 = this;
return (new cljs.core.async.t_cljs$core$async47240(self__.p,self__.ch,meta47241__$1));
});

cljs.core.async.t_cljs$core$async47240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47242){
var self__ = this;
var _47242__$1 = this;
return self__.meta47241;
});

cljs.core.async.t_cljs$core$async47240.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47240.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async47240.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async47240.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47240.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47240.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47240.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async47240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47241","meta47241",2124486724,null)], null);
});

cljs.core.async.t_cljs$core$async47240.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47240";

cljs.core.async.t_cljs$core$async47240.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async47240");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47240.
 */
cljs.core.async.__GT_t_cljs$core$async47240 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47240(p__$1,ch__$1,meta47241){
return (new cljs.core.async.t_cljs$core$async47240(p__$1,ch__$1,meta47241));
});

}

return (new cljs.core.async.t_cljs$core$async47240(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__47244 = arguments.length;
switch (G__47244) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46074__auto___48587 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46074__auto___48587,out){
return (function (){
var f__46075__auto__ = (function (){var switch__45900__auto__ = ((function (c__46074__auto___48587,out){
return (function (state_47265){
var state_val_47266 = (state_47265[(1)]);
if((state_val_47266 === (7))){
var inst_47261 = (state_47265[(2)]);
var state_47265__$1 = state_47265;
var statearr_47267_48590 = state_47265__$1;
(statearr_47267_48590[(2)] = inst_47261);

(statearr_47267_48590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (1))){
var state_47265__$1 = state_47265;
var statearr_47268_48593 = state_47265__$1;
(statearr_47268_48593[(2)] = null);

(statearr_47268_48593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (4))){
var inst_47247 = (state_47265[(7)]);
var inst_47247__$1 = (state_47265[(2)]);
var inst_47248 = (inst_47247__$1 == null);
var state_47265__$1 = (function (){var statearr_47269 = state_47265;
(statearr_47269[(7)] = inst_47247__$1);

return statearr_47269;
})();
if(cljs.core.truth_(inst_47248)){
var statearr_47270_48600 = state_47265__$1;
(statearr_47270_48600[(1)] = (5));

} else {
var statearr_47271_48601 = state_47265__$1;
(statearr_47271_48601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (6))){
var inst_47247 = (state_47265[(7)]);
var inst_47252 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47247) : p.call(null,inst_47247));
var state_47265__$1 = state_47265;
if(cljs.core.truth_(inst_47252)){
var statearr_47272_48604 = state_47265__$1;
(statearr_47272_48604[(1)] = (8));

} else {
var statearr_47273_48607 = state_47265__$1;
(statearr_47273_48607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (3))){
var inst_47263 = (state_47265[(2)]);
var state_47265__$1 = state_47265;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47265__$1,inst_47263);
} else {
if((state_val_47266 === (2))){
var state_47265__$1 = state_47265;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47265__$1,(4),ch);
} else {
if((state_val_47266 === (11))){
var inst_47255 = (state_47265[(2)]);
var state_47265__$1 = state_47265;
var statearr_47274_48608 = state_47265__$1;
(statearr_47274_48608[(2)] = inst_47255);

(statearr_47274_48608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (9))){
var state_47265__$1 = state_47265;
var statearr_47275_48609 = state_47265__$1;
(statearr_47275_48609[(2)] = null);

(statearr_47275_48609[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (5))){
var inst_47250 = cljs.core.async.close_BANG_(out);
var state_47265__$1 = state_47265;
var statearr_47276_48611 = state_47265__$1;
(statearr_47276_48611[(2)] = inst_47250);

(statearr_47276_48611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (10))){
var inst_47258 = (state_47265[(2)]);
var state_47265__$1 = (function (){var statearr_47277 = state_47265;
(statearr_47277[(8)] = inst_47258);

return statearr_47277;
})();
var statearr_47278_48612 = state_47265__$1;
(statearr_47278_48612[(2)] = null);

(statearr_47278_48612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (8))){
var inst_47247 = (state_47265[(7)]);
var state_47265__$1 = state_47265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47265__$1,(11),out,inst_47247);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__46074__auto___48587,out))
;
return ((function (switch__45900__auto__,c__46074__auto___48587,out){
return (function() {
var cljs$core$async$state_machine__45901__auto__ = null;
var cljs$core$async$state_machine__45901__auto____0 = (function (){
var statearr_47279 = [null,null,null,null,null,null,null,null,null];
(statearr_47279[(0)] = cljs$core$async$state_machine__45901__auto__);

(statearr_47279[(1)] = (1));

return statearr_47279;
});
var cljs$core$async$state_machine__45901__auto____1 = (function (state_47265){
while(true){
var ret_value__45902__auto__ = (function (){try{while(true){
var result__45903__auto__ = switch__45900__auto__(state_47265);
if(cljs.core.keyword_identical_QMARK_(result__45903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45903__auto__;
}
break;
}
}catch (e47280){if((e47280 instanceof Object)){
var ex__45904__auto__ = e47280;
var statearr_47281_48629 = state_47265;
(statearr_47281_48629[(5)] = ex__45904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47280;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48630 = state_47265;
state_47265 = G__48630;
continue;
} else {
return ret_value__45902__auto__;
}
break;
}
});
cljs$core$async$state_machine__45901__auto__ = function(state_47265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45901__auto____1.call(this,state_47265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45901__auto____0;
cljs$core$async$state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45901__auto____1;
return cljs$core$async$state_machine__45901__auto__;
})()
;})(switch__45900__auto__,c__46074__auto___48587,out))
})();
var state__46076__auto__ = (function (){var statearr_47282 = (f__46075__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46075__auto__.cljs$core$IFn$_invoke$arity$0() : f__46075__auto__.call(null));
(statearr_47282[(6)] = c__46074__auto___48587);

return statearr_47282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46076__auto__);
});})(c__46074__auto___48587,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47284 = arguments.length;
switch (G__47284) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__46074__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46074__auto__){
return (function (){
var f__46075__auto__ = (function (){var switch__45900__auto__ = ((function (c__46074__auto__){
return (function (state_47346){
var state_val_47347 = (state_47346[(1)]);
if((state_val_47347 === (7))){
var inst_47342 = (state_47346[(2)]);
var state_47346__$1 = state_47346;
var statearr_47348_48657 = state_47346__$1;
(statearr_47348_48657[(2)] = inst_47342);

(statearr_47348_48657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (20))){
var inst_47312 = (state_47346[(7)]);
var inst_47323 = (state_47346[(2)]);
var inst_47324 = cljs.core.next(inst_47312);
var inst_47298 = inst_47324;
var inst_47299 = null;
var inst_47300 = (0);
var inst_47301 = (0);
var state_47346__$1 = (function (){var statearr_47349 = state_47346;
(statearr_47349[(8)] = inst_47299);

(statearr_47349[(9)] = inst_47301);

(statearr_47349[(10)] = inst_47300);

(statearr_47349[(11)] = inst_47298);

(statearr_47349[(12)] = inst_47323);

return statearr_47349;
})();
var statearr_47350_48660 = state_47346__$1;
(statearr_47350_48660[(2)] = null);

(statearr_47350_48660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (1))){
var state_47346__$1 = state_47346;
var statearr_47351_48661 = state_47346__$1;
(statearr_47351_48661[(2)] = null);

(statearr_47351_48661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (4))){
var inst_47287 = (state_47346[(13)]);
var inst_47287__$1 = (state_47346[(2)]);
var inst_47288 = (inst_47287__$1 == null);
var state_47346__$1 = (function (){var statearr_47352 = state_47346;
(statearr_47352[(13)] = inst_47287__$1);

return statearr_47352;
})();
if(cljs.core.truth_(inst_47288)){
var statearr_47353_48665 = state_47346__$1;
(statearr_47353_48665[(1)] = (5));

} else {
var statearr_47354_48666 = state_47346__$1;
(statearr_47354_48666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (15))){
var state_47346__$1 = state_47346;
var statearr_47358_48669 = state_47346__$1;
(statearr_47358_48669[(2)] = null);

(statearr_47358_48669[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (21))){
var state_47346__$1 = state_47346;
var statearr_47359_48670 = state_47346__$1;
(statearr_47359_48670[(2)] = null);

(statearr_47359_48670[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (13))){
var inst_47299 = (state_47346[(8)]);
var inst_47301 = (state_47346[(9)]);
var inst_47300 = (state_47346[(10)]);
var inst_47298 = (state_47346[(11)]);
var inst_47308 = (state_47346[(2)]);
var inst_47309 = (inst_47301 + (1));
var tmp47355 = inst_47299;
var tmp47356 = inst_47300;
var tmp47357 = inst_47298;
var inst_47298__$1 = tmp47357;
var inst_47299__$1 = tmp47355;
var inst_47300__$1 = tmp47356;
var inst_47301__$1 = inst_47309;
var state_47346__$1 = (function (){var statearr_47360 = state_47346;
(statearr_47360[(8)] = inst_47299__$1);

(statearr_47360[(9)] = inst_47301__$1);

(statearr_47360[(14)] = inst_47308);

(statearr_47360[(10)] = inst_47300__$1);

(statearr_47360[(11)] = inst_47298__$1);

return statearr_47360;
})();
var statearr_47361_48672 = state_47346__$1;
(statearr_47361_48672[(2)] = null);

(statearr_47361_48672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (22))){
var state_47346__$1 = state_47346;
var statearr_47362_48673 = state_47346__$1;
(statearr_47362_48673[(2)] = null);

(statearr_47362_48673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (6))){
var inst_47287 = (state_47346[(13)]);
var inst_47296 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47287) : f.call(null,inst_47287));
var inst_47297 = cljs.core.seq(inst_47296);
var inst_47298 = inst_47297;
var inst_47299 = null;
var inst_47300 = (0);
var inst_47301 = (0);
var state_47346__$1 = (function (){var statearr_47363 = state_47346;
(statearr_47363[(8)] = inst_47299);

(statearr_47363[(9)] = inst_47301);

(statearr_47363[(10)] = inst_47300);

(statearr_47363[(11)] = inst_47298);

return statearr_47363;
})();
var statearr_47364_48678 = state_47346__$1;
(statearr_47364_48678[(2)] = null);

(statearr_47364_48678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (17))){
var inst_47312 = (state_47346[(7)]);
var inst_47316 = cljs.core.chunk_first(inst_47312);
var inst_47317 = cljs.core.chunk_rest(inst_47312);
var inst_47318 = cljs.core.count(inst_47316);
var inst_47298 = inst_47317;
var inst_47299 = inst_47316;
var inst_47300 = inst_47318;
var inst_47301 = (0);
var state_47346__$1 = (function (){var statearr_47365 = state_47346;
(statearr_47365[(8)] = inst_47299);

(statearr_47365[(9)] = inst_47301);

(statearr_47365[(10)] = inst_47300);

(statearr_47365[(11)] = inst_47298);

return statearr_47365;
})();
var statearr_47366_48679 = state_47346__$1;
(statearr_47366_48679[(2)] = null);

(statearr_47366_48679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (3))){
var inst_47344 = (state_47346[(2)]);
var state_47346__$1 = state_47346;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47346__$1,inst_47344);
} else {
if((state_val_47347 === (12))){
var inst_47332 = (state_47346[(2)]);
var state_47346__$1 = state_47346;
var statearr_47367_48682 = state_47346__$1;
(statearr_47367_48682[(2)] = inst_47332);

(statearr_47367_48682[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (2))){
var state_47346__$1 = state_47346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47346__$1,(4),in$);
} else {
if((state_val_47347 === (23))){
var inst_47340 = (state_47346[(2)]);
var state_47346__$1 = state_47346;
var statearr_47368_48685 = state_47346__$1;
(statearr_47368_48685[(2)] = inst_47340);

(statearr_47368_48685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (19))){
var inst_47327 = (state_47346[(2)]);
var state_47346__$1 = state_47346;
var statearr_47369_48688 = state_47346__$1;
(statearr_47369_48688[(2)] = inst_47327);

(statearr_47369_48688[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (11))){
var inst_47312 = (state_47346[(7)]);
var inst_47298 = (state_47346[(11)]);
var inst_47312__$1 = cljs.core.seq(inst_47298);
var state_47346__$1 = (function (){var statearr_47370 = state_47346;
(statearr_47370[(7)] = inst_47312__$1);

return statearr_47370;
})();
if(inst_47312__$1){
var statearr_47371_48689 = state_47346__$1;
(statearr_47371_48689[(1)] = (14));

} else {
var statearr_47372_48690 = state_47346__$1;
(statearr_47372_48690[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (9))){
var inst_47334 = (state_47346[(2)]);
var inst_47335 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_47346__$1 = (function (){var statearr_47373 = state_47346;
(statearr_47373[(15)] = inst_47334);

return statearr_47373;
})();
if(cljs.core.truth_(inst_47335)){
var statearr_47374_48692 = state_47346__$1;
(statearr_47374_48692[(1)] = (21));

} else {
var statearr_47375_48693 = state_47346__$1;
(statearr_47375_48693[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (5))){
var inst_47290 = cljs.core.async.close_BANG_(out);
var state_47346__$1 = state_47346;
var statearr_47376_48694 = state_47346__$1;
(statearr_47376_48694[(2)] = inst_47290);

(statearr_47376_48694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (14))){
var inst_47312 = (state_47346[(7)]);
var inst_47314 = cljs.core.chunked_seq_QMARK_(inst_47312);
var state_47346__$1 = state_47346;
if(inst_47314){
var statearr_47377_48695 = state_47346__$1;
(statearr_47377_48695[(1)] = (17));

} else {
var statearr_47378_48696 = state_47346__$1;
(statearr_47378_48696[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (16))){
var inst_47330 = (state_47346[(2)]);
var state_47346__$1 = state_47346;
var statearr_47379_48699 = state_47346__$1;
(statearr_47379_48699[(2)] = inst_47330);

(statearr_47379_48699[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (10))){
var inst_47299 = (state_47346[(8)]);
var inst_47301 = (state_47346[(9)]);
var inst_47306 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47299,inst_47301);
var state_47346__$1 = state_47346;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47346__$1,(13),out,inst_47306);
} else {
if((state_val_47347 === (18))){
var inst_47312 = (state_47346[(7)]);
var inst_47321 = cljs.core.first(inst_47312);
var state_47346__$1 = state_47346;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47346__$1,(20),out,inst_47321);
} else {
if((state_val_47347 === (8))){
var inst_47301 = (state_47346[(9)]);
var inst_47300 = (state_47346[(10)]);
var inst_47303 = (inst_47301 < inst_47300);
var inst_47304 = inst_47303;
var state_47346__$1 = state_47346;
if(cljs.core.truth_(inst_47304)){
var statearr_47380_48717 = state_47346__$1;
(statearr_47380_48717[(1)] = (10));

} else {
var statearr_47381_48718 = state_47346__$1;
(statearr_47381_48718[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46074__auto__))
;
return ((function (switch__45900__auto__,c__46074__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__45901__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__45901__auto____0 = (function (){
var statearr_47382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47382[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__45901__auto__);

(statearr_47382[(1)] = (1));

return statearr_47382;
});
var cljs$core$async$mapcat_STAR__$_state_machine__45901__auto____1 = (function (state_47346){
while(true){
var ret_value__45902__auto__ = (function (){try{while(true){
var result__45903__auto__ = switch__45900__auto__(state_47346);
if(cljs.core.keyword_identical_QMARK_(result__45903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45903__auto__;
}
break;
}
}catch (e47383){if((e47383 instanceof Object)){
var ex__45904__auto__ = e47383;
var statearr_47384_48742 = state_47346;
(statearr_47384_48742[(5)] = ex__45904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47383;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48749 = state_47346;
state_47346 = G__48749;
continue;
} else {
return ret_value__45902__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__45901__auto__ = function(state_47346){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__45901__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__45901__auto____1.call(this,state_47346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__45901__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__45901__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__45901__auto__;
})()
;})(switch__45900__auto__,c__46074__auto__))
})();
var state__46076__auto__ = (function (){var statearr_47385 = (f__46075__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46075__auto__.cljs$core$IFn$_invoke$arity$0() : f__46075__auto__.call(null));
(statearr_47385[(6)] = c__46074__auto__);

return statearr_47385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46076__auto__);
});})(c__46074__auto__))
);

return c__46074__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47387 = arguments.length;
switch (G__47387) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__47389 = arguments.length;
switch (G__47389) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__47391 = arguments.length;
switch (G__47391) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46074__auto___48801 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46074__auto___48801,out){
return (function (){
var f__46075__auto__ = (function (){var switch__45900__auto__ = ((function (c__46074__auto___48801,out){
return (function (state_47415){
var state_val_47416 = (state_47415[(1)]);
if((state_val_47416 === (7))){
var inst_47410 = (state_47415[(2)]);
var state_47415__$1 = state_47415;
var statearr_47417_48802 = state_47415__$1;
(statearr_47417_48802[(2)] = inst_47410);

(statearr_47417_48802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47416 === (1))){
var inst_47392 = null;
var state_47415__$1 = (function (){var statearr_47418 = state_47415;
(statearr_47418[(7)] = inst_47392);

return statearr_47418;
})();
var statearr_47419_48805 = state_47415__$1;
(statearr_47419_48805[(2)] = null);

(statearr_47419_48805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47416 === (4))){
var inst_47395 = (state_47415[(8)]);
var inst_47395__$1 = (state_47415[(2)]);
var inst_47396 = (inst_47395__$1 == null);
var inst_47397 = cljs.core.not(inst_47396);
var state_47415__$1 = (function (){var statearr_47420 = state_47415;
(statearr_47420[(8)] = inst_47395__$1);

return statearr_47420;
})();
if(inst_47397){
var statearr_47421_48808 = state_47415__$1;
(statearr_47421_48808[(1)] = (5));

} else {
var statearr_47422_48813 = state_47415__$1;
(statearr_47422_48813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47416 === (6))){
var state_47415__$1 = state_47415;
var statearr_47423_48814 = state_47415__$1;
(statearr_47423_48814[(2)] = null);

(statearr_47423_48814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47416 === (3))){
var inst_47412 = (state_47415[(2)]);
var inst_47413 = cljs.core.async.close_BANG_(out);
var state_47415__$1 = (function (){var statearr_47424 = state_47415;
(statearr_47424[(9)] = inst_47412);

return statearr_47424;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47415__$1,inst_47413);
} else {
if((state_val_47416 === (2))){
var state_47415__$1 = state_47415;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47415__$1,(4),ch);
} else {
if((state_val_47416 === (11))){
var inst_47395 = (state_47415[(8)]);
var inst_47404 = (state_47415[(2)]);
var inst_47392 = inst_47395;
var state_47415__$1 = (function (){var statearr_47425 = state_47415;
(statearr_47425[(10)] = inst_47404);

(statearr_47425[(7)] = inst_47392);

return statearr_47425;
})();
var statearr_47426_48824 = state_47415__$1;
(statearr_47426_48824[(2)] = null);

(statearr_47426_48824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47416 === (9))){
var inst_47395 = (state_47415[(8)]);
var state_47415__$1 = state_47415;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47415__$1,(11),out,inst_47395);
} else {
if((state_val_47416 === (5))){
var inst_47395 = (state_47415[(8)]);
var inst_47392 = (state_47415[(7)]);
var inst_47399 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47395,inst_47392);
var state_47415__$1 = state_47415;
if(inst_47399){
var statearr_47428_48830 = state_47415__$1;
(statearr_47428_48830[(1)] = (8));

} else {
var statearr_47429_48831 = state_47415__$1;
(statearr_47429_48831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47416 === (10))){
var inst_47407 = (state_47415[(2)]);
var state_47415__$1 = state_47415;
var statearr_47430_48833 = state_47415__$1;
(statearr_47430_48833[(2)] = inst_47407);

(statearr_47430_48833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47416 === (8))){
var inst_47392 = (state_47415[(7)]);
var tmp47427 = inst_47392;
var inst_47392__$1 = tmp47427;
var state_47415__$1 = (function (){var statearr_47431 = state_47415;
(statearr_47431[(7)] = inst_47392__$1);

return statearr_47431;
})();
var statearr_47432_48835 = state_47415__$1;
(statearr_47432_48835[(2)] = null);

(statearr_47432_48835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__46074__auto___48801,out))
;
return ((function (switch__45900__auto__,c__46074__auto___48801,out){
return (function() {
var cljs$core$async$state_machine__45901__auto__ = null;
var cljs$core$async$state_machine__45901__auto____0 = (function (){
var statearr_47433 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47433[(0)] = cljs$core$async$state_machine__45901__auto__);

(statearr_47433[(1)] = (1));

return statearr_47433;
});
var cljs$core$async$state_machine__45901__auto____1 = (function (state_47415){
while(true){
var ret_value__45902__auto__ = (function (){try{while(true){
var result__45903__auto__ = switch__45900__auto__(state_47415);
if(cljs.core.keyword_identical_QMARK_(result__45903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45903__auto__;
}
break;
}
}catch (e47434){if((e47434 instanceof Object)){
var ex__45904__auto__ = e47434;
var statearr_47435_48841 = state_47415;
(statearr_47435_48841[(5)] = ex__45904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47434;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48842 = state_47415;
state_47415 = G__48842;
continue;
} else {
return ret_value__45902__auto__;
}
break;
}
});
cljs$core$async$state_machine__45901__auto__ = function(state_47415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45901__auto____1.call(this,state_47415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45901__auto____0;
cljs$core$async$state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45901__auto____1;
return cljs$core$async$state_machine__45901__auto__;
})()
;})(switch__45900__auto__,c__46074__auto___48801,out))
})();
var state__46076__auto__ = (function (){var statearr_47436 = (f__46075__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46075__auto__.cljs$core$IFn$_invoke$arity$0() : f__46075__auto__.call(null));
(statearr_47436[(6)] = c__46074__auto___48801);

return statearr_47436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46076__auto__);
});})(c__46074__auto___48801,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47438 = arguments.length;
switch (G__47438) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46074__auto___48847 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46074__auto___48847,out){
return (function (){
var f__46075__auto__ = (function (){var switch__45900__auto__ = ((function (c__46074__auto___48847,out){
return (function (state_47476){
var state_val_47477 = (state_47476[(1)]);
if((state_val_47477 === (7))){
var inst_47472 = (state_47476[(2)]);
var state_47476__$1 = state_47476;
var statearr_47478_48853 = state_47476__$1;
(statearr_47478_48853[(2)] = inst_47472);

(statearr_47478_48853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47477 === (1))){
var inst_47439 = (new Array(n));
var inst_47440 = inst_47439;
var inst_47441 = (0);
var state_47476__$1 = (function (){var statearr_47479 = state_47476;
(statearr_47479[(7)] = inst_47440);

(statearr_47479[(8)] = inst_47441);

return statearr_47479;
})();
var statearr_47480_48863 = state_47476__$1;
(statearr_47480_48863[(2)] = null);

(statearr_47480_48863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47477 === (4))){
var inst_47444 = (state_47476[(9)]);
var inst_47444__$1 = (state_47476[(2)]);
var inst_47445 = (inst_47444__$1 == null);
var inst_47446 = cljs.core.not(inst_47445);
var state_47476__$1 = (function (){var statearr_47481 = state_47476;
(statearr_47481[(9)] = inst_47444__$1);

return statearr_47481;
})();
if(inst_47446){
var statearr_47482_48872 = state_47476__$1;
(statearr_47482_48872[(1)] = (5));

} else {
var statearr_47483_48878 = state_47476__$1;
(statearr_47483_48878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47477 === (15))){
var inst_47466 = (state_47476[(2)]);
var state_47476__$1 = state_47476;
var statearr_47484_48879 = state_47476__$1;
(statearr_47484_48879[(2)] = inst_47466);

(statearr_47484_48879[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47477 === (13))){
var state_47476__$1 = state_47476;
var statearr_47485_48880 = state_47476__$1;
(statearr_47485_48880[(2)] = null);

(statearr_47485_48880[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47477 === (6))){
var inst_47441 = (state_47476[(8)]);
var inst_47462 = (inst_47441 > (0));
var state_47476__$1 = state_47476;
if(cljs.core.truth_(inst_47462)){
var statearr_47486_48890 = state_47476__$1;
(statearr_47486_48890[(1)] = (12));

} else {
var statearr_47487_48893 = state_47476__$1;
(statearr_47487_48893[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47477 === (3))){
var inst_47474 = (state_47476[(2)]);
var state_47476__$1 = state_47476;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47476__$1,inst_47474);
} else {
if((state_val_47477 === (12))){
var inst_47440 = (state_47476[(7)]);
var inst_47464 = cljs.core.vec(inst_47440);
var state_47476__$1 = state_47476;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47476__$1,(15),out,inst_47464);
} else {
if((state_val_47477 === (2))){
var state_47476__$1 = state_47476;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47476__$1,(4),ch);
} else {
if((state_val_47477 === (11))){
var inst_47456 = (state_47476[(2)]);
var inst_47457 = (new Array(n));
var inst_47440 = inst_47457;
var inst_47441 = (0);
var state_47476__$1 = (function (){var statearr_47488 = state_47476;
(statearr_47488[(10)] = inst_47456);

(statearr_47488[(7)] = inst_47440);

(statearr_47488[(8)] = inst_47441);

return statearr_47488;
})();
var statearr_47489_48908 = state_47476__$1;
(statearr_47489_48908[(2)] = null);

(statearr_47489_48908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47477 === (9))){
var inst_47440 = (state_47476[(7)]);
var inst_47454 = cljs.core.vec(inst_47440);
var state_47476__$1 = state_47476;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47476__$1,(11),out,inst_47454);
} else {
if((state_val_47477 === (5))){
var inst_47444 = (state_47476[(9)]);
var inst_47440 = (state_47476[(7)]);
var inst_47441 = (state_47476[(8)]);
var inst_47449 = (state_47476[(11)]);
var inst_47448 = (inst_47440[inst_47441] = inst_47444);
var inst_47449__$1 = (inst_47441 + (1));
var inst_47450 = (inst_47449__$1 < n);
var state_47476__$1 = (function (){var statearr_47490 = state_47476;
(statearr_47490[(11)] = inst_47449__$1);

(statearr_47490[(12)] = inst_47448);

return statearr_47490;
})();
if(cljs.core.truth_(inst_47450)){
var statearr_47491_48914 = state_47476__$1;
(statearr_47491_48914[(1)] = (8));

} else {
var statearr_47492_48915 = state_47476__$1;
(statearr_47492_48915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47477 === (14))){
var inst_47469 = (state_47476[(2)]);
var inst_47470 = cljs.core.async.close_BANG_(out);
var state_47476__$1 = (function (){var statearr_47494 = state_47476;
(statearr_47494[(13)] = inst_47469);

return statearr_47494;
})();
var statearr_47495_48916 = state_47476__$1;
(statearr_47495_48916[(2)] = inst_47470);

(statearr_47495_48916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47477 === (10))){
var inst_47460 = (state_47476[(2)]);
var state_47476__$1 = state_47476;
var statearr_47496_48918 = state_47476__$1;
(statearr_47496_48918[(2)] = inst_47460);

(statearr_47496_48918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47477 === (8))){
var inst_47440 = (state_47476[(7)]);
var inst_47449 = (state_47476[(11)]);
var tmp47493 = inst_47440;
var inst_47440__$1 = tmp47493;
var inst_47441 = inst_47449;
var state_47476__$1 = (function (){var statearr_47497 = state_47476;
(statearr_47497[(7)] = inst_47440__$1);

(statearr_47497[(8)] = inst_47441);

return statearr_47497;
})();
var statearr_47498_48920 = state_47476__$1;
(statearr_47498_48920[(2)] = null);

(statearr_47498_48920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46074__auto___48847,out))
;
return ((function (switch__45900__auto__,c__46074__auto___48847,out){
return (function() {
var cljs$core$async$state_machine__45901__auto__ = null;
var cljs$core$async$state_machine__45901__auto____0 = (function (){
var statearr_47499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47499[(0)] = cljs$core$async$state_machine__45901__auto__);

(statearr_47499[(1)] = (1));

return statearr_47499;
});
var cljs$core$async$state_machine__45901__auto____1 = (function (state_47476){
while(true){
var ret_value__45902__auto__ = (function (){try{while(true){
var result__45903__auto__ = switch__45900__auto__(state_47476);
if(cljs.core.keyword_identical_QMARK_(result__45903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45903__auto__;
}
break;
}
}catch (e47500){if((e47500 instanceof Object)){
var ex__45904__auto__ = e47500;
var statearr_47501_48924 = state_47476;
(statearr_47501_48924[(5)] = ex__45904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47500;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48925 = state_47476;
state_47476 = G__48925;
continue;
} else {
return ret_value__45902__auto__;
}
break;
}
});
cljs$core$async$state_machine__45901__auto__ = function(state_47476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45901__auto____1.call(this,state_47476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45901__auto____0;
cljs$core$async$state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45901__auto____1;
return cljs$core$async$state_machine__45901__auto__;
})()
;})(switch__45900__auto__,c__46074__auto___48847,out))
})();
var state__46076__auto__ = (function (){var statearr_47502 = (f__46075__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46075__auto__.cljs$core$IFn$_invoke$arity$0() : f__46075__auto__.call(null));
(statearr_47502[(6)] = c__46074__auto___48847);

return statearr_47502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46076__auto__);
});})(c__46074__auto___48847,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47504 = arguments.length;
switch (G__47504) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46074__auto___48928 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46074__auto___48928,out){
return (function (){
var f__46075__auto__ = (function (){var switch__45900__auto__ = ((function (c__46074__auto___48928,out){
return (function (state_47546){
var state_val_47547 = (state_47546[(1)]);
if((state_val_47547 === (7))){
var inst_47542 = (state_47546[(2)]);
var state_47546__$1 = state_47546;
var statearr_47548_48929 = state_47546__$1;
(statearr_47548_48929[(2)] = inst_47542);

(statearr_47548_48929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47547 === (1))){
var inst_47505 = [];
var inst_47506 = inst_47505;
var inst_47507 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47546__$1 = (function (){var statearr_47549 = state_47546;
(statearr_47549[(7)] = inst_47506);

(statearr_47549[(8)] = inst_47507);

return statearr_47549;
})();
var statearr_47550_48932 = state_47546__$1;
(statearr_47550_48932[(2)] = null);

(statearr_47550_48932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47547 === (4))){
var inst_47510 = (state_47546[(9)]);
var inst_47510__$1 = (state_47546[(2)]);
var inst_47511 = (inst_47510__$1 == null);
var inst_47512 = cljs.core.not(inst_47511);
var state_47546__$1 = (function (){var statearr_47551 = state_47546;
(statearr_47551[(9)] = inst_47510__$1);

return statearr_47551;
})();
if(inst_47512){
var statearr_47552_48935 = state_47546__$1;
(statearr_47552_48935[(1)] = (5));

} else {
var statearr_47553_48936 = state_47546__$1;
(statearr_47553_48936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47547 === (15))){
var inst_47536 = (state_47546[(2)]);
var state_47546__$1 = state_47546;
var statearr_47554_48941 = state_47546__$1;
(statearr_47554_48941[(2)] = inst_47536);

(statearr_47554_48941[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47547 === (13))){
var state_47546__$1 = state_47546;
var statearr_47555_48942 = state_47546__$1;
(statearr_47555_48942[(2)] = null);

(statearr_47555_48942[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47547 === (6))){
var inst_47506 = (state_47546[(7)]);
var inst_47531 = inst_47506.length;
var inst_47532 = (inst_47531 > (0));
var state_47546__$1 = state_47546;
if(cljs.core.truth_(inst_47532)){
var statearr_47556_48947 = state_47546__$1;
(statearr_47556_48947[(1)] = (12));

} else {
var statearr_47557_48948 = state_47546__$1;
(statearr_47557_48948[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47547 === (3))){
var inst_47544 = (state_47546[(2)]);
var state_47546__$1 = state_47546;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47546__$1,inst_47544);
} else {
if((state_val_47547 === (12))){
var inst_47506 = (state_47546[(7)]);
var inst_47534 = cljs.core.vec(inst_47506);
var state_47546__$1 = state_47546;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47546__$1,(15),out,inst_47534);
} else {
if((state_val_47547 === (2))){
var state_47546__$1 = state_47546;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47546__$1,(4),ch);
} else {
if((state_val_47547 === (11))){
var inst_47510 = (state_47546[(9)]);
var inst_47514 = (state_47546[(10)]);
var inst_47524 = (state_47546[(2)]);
var inst_47525 = [];
var inst_47526 = inst_47525.push(inst_47510);
var inst_47506 = inst_47525;
var inst_47507 = inst_47514;
var state_47546__$1 = (function (){var statearr_47558 = state_47546;
(statearr_47558[(7)] = inst_47506);

(statearr_47558[(8)] = inst_47507);

(statearr_47558[(11)] = inst_47524);

(statearr_47558[(12)] = inst_47526);

return statearr_47558;
})();
var statearr_47559_48954 = state_47546__$1;
(statearr_47559_48954[(2)] = null);

(statearr_47559_48954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47547 === (9))){
var inst_47506 = (state_47546[(7)]);
var inst_47522 = cljs.core.vec(inst_47506);
var state_47546__$1 = state_47546;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47546__$1,(11),out,inst_47522);
} else {
if((state_val_47547 === (5))){
var inst_47510 = (state_47546[(9)]);
var inst_47507 = (state_47546[(8)]);
var inst_47514 = (state_47546[(10)]);
var inst_47514__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47510) : f.call(null,inst_47510));
var inst_47515 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47514__$1,inst_47507);
var inst_47516 = cljs.core.keyword_identical_QMARK_(inst_47507,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47517 = ((inst_47515) || (inst_47516));
var state_47546__$1 = (function (){var statearr_47560 = state_47546;
(statearr_47560[(10)] = inst_47514__$1);

return statearr_47560;
})();
if(cljs.core.truth_(inst_47517)){
var statearr_47561_48958 = state_47546__$1;
(statearr_47561_48958[(1)] = (8));

} else {
var statearr_47562_48960 = state_47546__$1;
(statearr_47562_48960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47547 === (14))){
var inst_47539 = (state_47546[(2)]);
var inst_47540 = cljs.core.async.close_BANG_(out);
var state_47546__$1 = (function (){var statearr_47564 = state_47546;
(statearr_47564[(13)] = inst_47539);

return statearr_47564;
})();
var statearr_47565_48962 = state_47546__$1;
(statearr_47565_48962[(2)] = inst_47540);

(statearr_47565_48962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47547 === (10))){
var inst_47529 = (state_47546[(2)]);
var state_47546__$1 = state_47546;
var statearr_47566_48963 = state_47546__$1;
(statearr_47566_48963[(2)] = inst_47529);

(statearr_47566_48963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47547 === (8))){
var inst_47510 = (state_47546[(9)]);
var inst_47506 = (state_47546[(7)]);
var inst_47514 = (state_47546[(10)]);
var inst_47519 = inst_47506.push(inst_47510);
var tmp47563 = inst_47506;
var inst_47506__$1 = tmp47563;
var inst_47507 = inst_47514;
var state_47546__$1 = (function (){var statearr_47567 = state_47546;
(statearr_47567[(7)] = inst_47506__$1);

(statearr_47567[(14)] = inst_47519);

(statearr_47567[(8)] = inst_47507);

return statearr_47567;
})();
var statearr_47568_48964 = state_47546__$1;
(statearr_47568_48964[(2)] = null);

(statearr_47568_48964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46074__auto___48928,out))
;
return ((function (switch__45900__auto__,c__46074__auto___48928,out){
return (function() {
var cljs$core$async$state_machine__45901__auto__ = null;
var cljs$core$async$state_machine__45901__auto____0 = (function (){
var statearr_47569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47569[(0)] = cljs$core$async$state_machine__45901__auto__);

(statearr_47569[(1)] = (1));

return statearr_47569;
});
var cljs$core$async$state_machine__45901__auto____1 = (function (state_47546){
while(true){
var ret_value__45902__auto__ = (function (){try{while(true){
var result__45903__auto__ = switch__45900__auto__(state_47546);
if(cljs.core.keyword_identical_QMARK_(result__45903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45903__auto__;
}
break;
}
}catch (e47570){if((e47570 instanceof Object)){
var ex__45904__auto__ = e47570;
var statearr_47571_48966 = state_47546;
(statearr_47571_48966[(5)] = ex__45904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47570;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48967 = state_47546;
state_47546 = G__48967;
continue;
} else {
return ret_value__45902__auto__;
}
break;
}
});
cljs$core$async$state_machine__45901__auto__ = function(state_47546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45901__auto____1.call(this,state_47546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45901__auto____0;
cljs$core$async$state_machine__45901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45901__auto____1;
return cljs$core$async$state_machine__45901__auto__;
})()
;})(switch__45900__auto__,c__46074__auto___48928,out))
})();
var state__46076__auto__ = (function (){var statearr_47572 = (f__46075__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46075__auto__.cljs$core$IFn$_invoke$arity$0() : f__46075__auto__.call(null));
(statearr_47572[(6)] = c__46074__auto___48928);

return statearr_47572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46076__auto__);
});})(c__46074__auto___48928,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
