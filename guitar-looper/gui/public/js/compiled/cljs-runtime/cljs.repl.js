goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__44549){
var map__44551 = p__44549;
var map__44551__$1 = (((((!((map__44551 == null))))?(((((map__44551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44551):map__44551);
var m = map__44551__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44551__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44551__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44556_44603 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44557_44604 = null;
var count__44558_44605 = (0);
var i__44559_44606 = (0);
while(true){
if((i__44559_44606 < count__44558_44605)){
var f_44609 = chunk__44557_44604.cljs$core$IIndexed$_nth$arity$2(null,i__44559_44606);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_44609], 0));


var G__44610 = seq__44556_44603;
var G__44611 = chunk__44557_44604;
var G__44612 = count__44558_44605;
var G__44613 = (i__44559_44606 + (1));
seq__44556_44603 = G__44610;
chunk__44557_44604 = G__44611;
count__44558_44605 = G__44612;
i__44559_44606 = G__44613;
continue;
} else {
var temp__5735__auto___44616 = cljs.core.seq(seq__44556_44603);
if(temp__5735__auto___44616){
var seq__44556_44617__$1 = temp__5735__auto___44616;
if(cljs.core.chunked_seq_QMARK_(seq__44556_44617__$1)){
var c__4461__auto___44618 = cljs.core.chunk_first(seq__44556_44617__$1);
var G__44619 = cljs.core.chunk_rest(seq__44556_44617__$1);
var G__44620 = c__4461__auto___44618;
var G__44621 = cljs.core.count(c__4461__auto___44618);
var G__44622 = (0);
seq__44556_44603 = G__44619;
chunk__44557_44604 = G__44620;
count__44558_44605 = G__44621;
i__44559_44606 = G__44622;
continue;
} else {
var f_44623 = cljs.core.first(seq__44556_44617__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_44623], 0));


var G__44625 = cljs.core.next(seq__44556_44617__$1);
var G__44626 = null;
var G__44627 = (0);
var G__44628 = (0);
seq__44556_44603 = G__44625;
chunk__44557_44604 = G__44626;
count__44558_44605 = G__44627;
i__44559_44606 = G__44628;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_44629 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_44629], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_44629)))?cljs.core.second(arglists_44629):arglists_44629)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44564_44638 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44565_44639 = null;
var count__44566_44640 = (0);
var i__44567_44641 = (0);
while(true){
if((i__44567_44641 < count__44566_44640)){
var vec__44568_44643 = chunk__44565_44639.cljs$core$IIndexed$_nth$arity$2(null,i__44567_44641);
var name_44644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44568_44643,(0),null);
var map__44571_44645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44568_44643,(1),null);
var map__44571_44646__$1 = (((((!((map__44571_44645 == null))))?(((((map__44571_44645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44571_44645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44571_44645):map__44571_44645);
var doc_44647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44571_44646__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44571_44646__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_44644], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_44648], 0));

if(cljs.core.truth_(doc_44647)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_44647], 0));
} else {
}


var G__44652 = seq__44564_44638;
var G__44653 = chunk__44565_44639;
var G__44654 = count__44566_44640;
var G__44655 = (i__44567_44641 + (1));
seq__44564_44638 = G__44652;
chunk__44565_44639 = G__44653;
count__44566_44640 = G__44654;
i__44567_44641 = G__44655;
continue;
} else {
var temp__5735__auto___44658 = cljs.core.seq(seq__44564_44638);
if(temp__5735__auto___44658){
var seq__44564_44659__$1 = temp__5735__auto___44658;
if(cljs.core.chunked_seq_QMARK_(seq__44564_44659__$1)){
var c__4461__auto___44660 = cljs.core.chunk_first(seq__44564_44659__$1);
var G__44662 = cljs.core.chunk_rest(seq__44564_44659__$1);
var G__44663 = c__4461__auto___44660;
var G__44664 = cljs.core.count(c__4461__auto___44660);
var G__44665 = (0);
seq__44564_44638 = G__44662;
chunk__44565_44639 = G__44663;
count__44566_44640 = G__44664;
i__44567_44641 = G__44665;
continue;
} else {
var vec__44576_44666 = cljs.core.first(seq__44564_44659__$1);
var name_44667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44576_44666,(0),null);
var map__44579_44668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44576_44666,(1),null);
var map__44579_44669__$1 = (((((!((map__44579_44668 == null))))?(((((map__44579_44668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44579_44668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44579_44668):map__44579_44668);
var doc_44670 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44579_44669__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44671 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44579_44669__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_44667], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_44671], 0));

if(cljs.core.truth_(doc_44670)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_44670], 0));
} else {
}


var G__44677 = cljs.core.next(seq__44564_44659__$1);
var G__44678 = null;
var G__44679 = (0);
var G__44680 = (0);
seq__44564_44638 = G__44677;
chunk__44565_44639 = G__44678;
count__44566_44640 = G__44679;
i__44567_44641 = G__44680;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__44588 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__44589 = null;
var count__44590 = (0);
var i__44591 = (0);
while(true){
if((i__44591 < count__44590)){
var role = chunk__44589.cljs$core$IIndexed$_nth$arity$2(null,i__44591);
var temp__5735__auto___44693__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___44693__$1)){
var spec_44695 = temp__5735__auto___44693__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_44695)], 0));
} else {
}


var G__44696 = seq__44588;
var G__44697 = chunk__44589;
var G__44698 = count__44590;
var G__44699 = (i__44591 + (1));
seq__44588 = G__44696;
chunk__44589 = G__44697;
count__44590 = G__44698;
i__44591 = G__44699;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__44588);
if(temp__5735__auto____$1){
var seq__44588__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__44588__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__44588__$1);
var G__44702 = cljs.core.chunk_rest(seq__44588__$1);
var G__44703 = c__4461__auto__;
var G__44704 = cljs.core.count(c__4461__auto__);
var G__44705 = (0);
seq__44588 = G__44702;
chunk__44589 = G__44703;
count__44590 = G__44704;
i__44591 = G__44705;
continue;
} else {
var role = cljs.core.first(seq__44588__$1);
var temp__5735__auto___44706__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___44706__$2)){
var spec_44707 = temp__5735__auto___44706__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_44707)], 0));
} else {
}


var G__44710 = cljs.core.next(seq__44588__$1);
var G__44711 = null;
var G__44712 = (0);
var G__44713 = (0);
seq__44588 = G__44710;
chunk__44589 = G__44711;
count__44590 = G__44712;
i__44591 = G__44713;
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
} else {
return null;
}
}
});

//# sourceMappingURL=cljs.repl.js.map
