goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__38580){
var vec__38581 = p__38580;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38581,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38581,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__38589 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38589,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38589,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38589,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__38609 = arguments.length;
switch (G__38609) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4135__auto__ = cljs.core.count(a);
var y__4136__auto__ = cljs.core.count(b);
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4347__auto__ = (((x == null))?null:x);
var m__4348__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4348__auto__.call(null,x));
} else {
var m__4348__auto____$1 = (clojure.data.equality_partition["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4348__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4347__auto__ = (((a == null))?null:a);
var m__4348__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4348__auto__.call(null,a,b));
} else {
var m__4348__auto____$1 = (clojure.data.diff_similar["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4348__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__38633_38794 = clojure.data.equality_partition;
var G__38634_38795 = "null";
var G__38635_38796 = ((function (G__38633_38794,G__38634_38795){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__38633_38794,G__38634_38795))
;
goog.object.set(G__38633_38794,G__38634_38795,G__38635_38796);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__38636_38799 = clojure.data.equality_partition;
var G__38637_38800 = "string";
var G__38638_38801 = ((function (G__38636_38799,G__38637_38800){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__38636_38799,G__38637_38800))
;
goog.object.set(G__38636_38799,G__38637_38800,G__38638_38801);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__38641_38804 = clojure.data.equality_partition;
var G__38642_38805 = "number";
var G__38643_38806 = ((function (G__38641_38804,G__38642_38805){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__38641_38804,G__38642_38805))
;
goog.object.set(G__38641_38804,G__38642_38805,G__38643_38806);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__38645_38810 = clojure.data.equality_partition;
var G__38646_38811 = "array";
var G__38647_38812 = ((function (G__38645_38810,G__38646_38811){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__38645_38810,G__38646_38811))
;
goog.object.set(G__38645_38810,G__38646_38811,G__38647_38812);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__38649_38820 = clojure.data.equality_partition;
var G__38650_38821 = "function";
var G__38651_38822 = ((function (G__38649_38820,G__38650_38821){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__38649_38820,G__38650_38821))
;
goog.object.set(G__38649_38820,G__38650_38821,G__38651_38822);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__38660_38823 = clojure.data.equality_partition;
var G__38661_38824 = "boolean";
var G__38662_38825 = ((function (G__38660_38823,G__38661_38824){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__38660_38823,G__38661_38824))
;
goog.object.set(G__38660_38823,G__38661_38824,G__38662_38825);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__38664_38826 = clojure.data.equality_partition;
var G__38665_38827 = "_";
var G__38666_38828 = ((function (G__38664_38826,G__38665_38827){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__38664_38826,G__38665_38827))
;
goog.object.set(G__38664_38826,G__38665_38827,G__38666_38828);
goog.object.set(clojure.data.Diff,"null",true);

var G__38678_38845 = clojure.data.diff_similar;
var G__38679_38846 = "null";
var G__38680_38847 = ((function (G__38678_38845,G__38679_38846){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__38678_38845,G__38679_38846))
;
goog.object.set(G__38678_38845,G__38679_38846,G__38680_38847);

goog.object.set(clojure.data.Diff,"string",true);

var G__38682_38851 = clojure.data.diff_similar;
var G__38683_38852 = "string";
var G__38684_38853 = ((function (G__38682_38851,G__38683_38852){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__38682_38851,G__38683_38852))
;
goog.object.set(G__38682_38851,G__38683_38852,G__38684_38853);

goog.object.set(clojure.data.Diff,"number",true);

var G__38685_38857 = clojure.data.diff_similar;
var G__38686_38858 = "number";
var G__38687_38859 = ((function (G__38685_38857,G__38686_38858){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__38685_38857,G__38686_38858))
;
goog.object.set(G__38685_38857,G__38686_38858,G__38687_38859);

goog.object.set(clojure.data.Diff,"array",true);

var G__38688_38860 = clojure.data.diff_similar;
var G__38689_38861 = "array";
var G__38690_38862 = ((function (G__38688_38860,G__38689_38861){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__38688_38860,G__38689_38861))
;
goog.object.set(G__38688_38860,G__38689_38861,G__38690_38862);

goog.object.set(clojure.data.Diff,"function",true);

var G__38697_38863 = clojure.data.diff_similar;
var G__38698_38864 = "function";
var G__38699_38865 = ((function (G__38697_38863,G__38698_38864){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__38697_38863,G__38698_38864))
;
goog.object.set(G__38697_38863,G__38698_38864,G__38699_38865);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__38703_38869 = clojure.data.diff_similar;
var G__38704_38870 = "boolean";
var G__38705_38871 = ((function (G__38703_38869,G__38704_38870){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__38703_38869,G__38704_38870))
;
goog.object.set(G__38703_38869,G__38704_38870,G__38705_38871);

goog.object.set(clojure.data.Diff,"_",true);

var G__38709_38872 = clojure.data.diff_similar;
var G__38710_38873 = "_";
var G__38711_38874 = ((function (G__38709_38872,G__38710_38873){
return (function (a,b){
var fexpr__38713 = (function (){var G__38714 = clojure.data.equality_partition(a);
var G__38714__$1 = (((G__38714 instanceof cljs.core.Keyword))?G__38714.fqn:null);
switch (G__38714__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38714__$1)].join('')));

}
})();
return (fexpr__38713.cljs$core$IFn$_invoke$arity$2 ? fexpr__38713.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__38713.call(null,a,b));
});})(G__38709_38872,G__38710_38873))
;
goog.object.set(G__38709_38872,G__38710_38873,G__38711_38874);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
