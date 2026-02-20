(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const m of u)if(m.type==="childList")for(const d of m.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function o(u){const m={};return u.integrity&&(m.integrity=u.integrity),u.referrerPolicy&&(m.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?m.credentials="include":u.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function r(u){if(u.ep)return;u.ep=!0;const m=o(u);fetch(u.href,m)}})();var Kc={exports:{}},ml={};var Ap;function Tx(){if(Ap)return ml;Ap=1;var i=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function o(r,u,m){var d=null;if(m!==void 0&&(d=""+m),u.key!==void 0&&(d=""+u.key),"key"in u){m={};for(var y in u)y!=="key"&&(m[y]=u[y])}else m=u;return u=m.ref,{$$typeof:i,type:r,key:d,ref:u!==void 0?u:null,props:m}}return ml.Fragment=l,ml.jsx=o,ml.jsxs=o,ml}var zp;function wx(){return zp||(zp=1,Kc.exports=Tx()),Kc.exports}var f=wx(),Jc={exports:{}},rt={};var Mp;function jx(){if(Mp)return rt;Mp=1;var i=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),d=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),S=Symbol.iterator;function A(j){return j===null||typeof j!="object"?null:(j=S&&j[S]||j["@@iterator"],typeof j=="function"?j:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,O={};function L(j,H,K){this.props=j,this.context=H,this.refs=O,this.updater=K||M}L.prototype.isReactComponent={},L.prototype.setState=function(j,H){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,H,"setState")},L.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function G(){}G.prototype=L.prototype;function Y(j,H,K){this.props=j,this.context=H,this.refs=O,this.updater=K||M}var F=Y.prototype=new G;F.constructor=Y,U(F,L.prototype),F.isPureReactComponent=!0;var Q=Array.isArray;function lt(){}var W={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty;function st(j,H,K){var tt=K.ref;return{$$typeof:i,type:j,key:H,ref:tt!==void 0?tt:null,props:K}}function vt(j,H){return st(j.type,H,j.props)}function Nt(j){return typeof j=="object"&&j!==null&&j.$$typeof===i}function _t(j){var H={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(K){return H[K]})}var ve=/\/+/g;function ue(j,H){return typeof j=="object"&&j!==null&&j.key!=null?_t(""+j.key):H.toString(36)}function ie(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(lt,lt):(j.status="pending",j.then(function(H){j.status==="pending"&&(j.status="fulfilled",j.value=H)},function(H){j.status==="pending"&&(j.status="rejected",j.reason=H)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function _(j,H,K,tt,ct){var dt=typeof j;(dt==="undefined"||dt==="boolean")&&(j=null);var Tt=!1;if(j===null)Tt=!0;else switch(dt){case"bigint":case"string":case"number":Tt=!0;break;case"object":switch(j.$$typeof){case i:case l:Tt=!0;break;case x:return Tt=j._init,_(Tt(j._payload),H,K,tt,ct)}}if(Tt)return ct=ct(j),Tt=tt===""?"."+ue(j,0):tt,Q(ct)?(K="",Tt!=null&&(K=Tt.replace(ve,"$&/")+"/"),_(ct,H,K,"",function(Sa){return Sa})):ct!=null&&(Nt(ct)&&(ct=vt(ct,K+(ct.key==null||j&&j.key===ct.key?"":(""+ct.key).replace(ve,"$&/")+"/")+Tt)),H.push(ct)),1;Tt=0;var se=tt===""?".":tt+":";if(Q(j))for(var Ht=0;Ht<j.length;Ht++)tt=j[Ht],dt=se+ue(tt,Ht),Tt+=_(tt,H,K,dt,ct);else if(Ht=A(j),typeof Ht=="function")for(j=Ht.call(j),Ht=0;!(tt=j.next()).done;)tt=tt.value,dt=se+ue(tt,Ht++),Tt+=_(tt,H,K,dt,ct);else if(dt==="object"){if(typeof j.then=="function")return _(ie(j),H,K,tt,ct);throw H=String(j),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return Tt}function V(j,H,K){if(j==null)return j;var tt=[],ct=0;return _(j,tt,"","",function(dt){return H.call(K,dt,ct++)}),tt}function X(j){if(j._status===-1){var H=j._result;H=H(),H.then(function(K){(j._status===0||j._status===-1)&&(j._status=1,j._result=K)},function(K){(j._status===0||j._status===-1)&&(j._status=2,j._result=K)}),j._status===-1&&(j._status=0,j._result=H)}if(j._status===1)return j._result.default;throw j._result}var I=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)},ot={map:V,forEach:function(j,H,K){V(j,function(){H.apply(this,arguments)},K)},count:function(j){var H=0;return V(j,function(){H++}),H},toArray:function(j){return V(j,function(H){return H})||[]},only:function(j){if(!Nt(j))throw Error("React.Children.only expected to receive a single React element child.");return j}};return rt.Activity=b,rt.Children=ot,rt.Component=L,rt.Fragment=o,rt.Profiler=u,rt.PureComponent=Y,rt.StrictMode=r,rt.Suspense=p,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,rt.__COMPILER_RUNTIME={__proto__:null,c:function(j){return W.H.useMemoCache(j)}},rt.cache=function(j){return function(){return j.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(j,H,K){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var tt=U({},j.props),ct=j.key;if(H!=null)for(dt in H.key!==void 0&&(ct=""+H.key),H)!J.call(H,dt)||dt==="key"||dt==="__self"||dt==="__source"||dt==="ref"&&H.ref===void 0||(tt[dt]=H[dt]);var dt=arguments.length-2;if(dt===1)tt.children=K;else if(1<dt){for(var Tt=Array(dt),se=0;se<dt;se++)Tt[se]=arguments[se+2];tt.children=Tt}return st(j.type,ct,tt)},rt.createContext=function(j){return j={$$typeof:d,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:m,_context:j},j},rt.createElement=function(j,H,K){var tt,ct={},dt=null;if(H!=null)for(tt in H.key!==void 0&&(dt=""+H.key),H)J.call(H,tt)&&tt!=="key"&&tt!=="__self"&&tt!=="__source"&&(ct[tt]=H[tt]);var Tt=arguments.length-2;if(Tt===1)ct.children=K;else if(1<Tt){for(var se=Array(Tt),Ht=0;Ht<Tt;Ht++)se[Ht]=arguments[Ht+2];ct.children=se}if(j&&j.defaultProps)for(tt in Tt=j.defaultProps,Tt)ct[tt]===void 0&&(ct[tt]=Tt[tt]);return st(j,dt,ct)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(j){return{$$typeof:y,render:j}},rt.isValidElement=Nt,rt.lazy=function(j){return{$$typeof:x,_payload:{_status:-1,_result:j},_init:X}},rt.memo=function(j,H){return{$$typeof:g,type:j,compare:H===void 0?null:H}},rt.startTransition=function(j){var H=W.T,K={};W.T=K;try{var tt=j(),ct=W.S;ct!==null&&ct(K,tt),typeof tt=="object"&&tt!==null&&typeof tt.then=="function"&&tt.then(lt,I)}catch(dt){I(dt)}finally{H!==null&&K.types!==null&&(H.types=K.types),W.T=H}},rt.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},rt.use=function(j){return W.H.use(j)},rt.useActionState=function(j,H,K){return W.H.useActionState(j,H,K)},rt.useCallback=function(j,H){return W.H.useCallback(j,H)},rt.useContext=function(j){return W.H.useContext(j)},rt.useDebugValue=function(){},rt.useDeferredValue=function(j,H){return W.H.useDeferredValue(j,H)},rt.useEffect=function(j,H){return W.H.useEffect(j,H)},rt.useEffectEvent=function(j){return W.H.useEffectEvent(j)},rt.useId=function(){return W.H.useId()},rt.useImperativeHandle=function(j,H,K){return W.H.useImperativeHandle(j,H,K)},rt.useInsertionEffect=function(j,H){return W.H.useInsertionEffect(j,H)},rt.useLayoutEffect=function(j,H){return W.H.useLayoutEffect(j,H)},rt.useMemo=function(j,H){return W.H.useMemo(j,H)},rt.useOptimistic=function(j,H){return W.H.useOptimistic(j,H)},rt.useReducer=function(j,H,K){return W.H.useReducer(j,H,K)},rt.useRef=function(j){return W.H.useRef(j)},rt.useState=function(j){return W.H.useState(j)},rt.useSyncExternalStore=function(j,H,K){return W.H.useSyncExternalStore(j,H,K)},rt.useTransition=function(){return W.H.useTransition()},rt.version="19.2.4",rt}var Ep;function Gu(){return Ep||(Ep=1,Jc.exports=jx()),Jc.exports}var k=Gu(),Fc={exports:{}},pl={},Pc={exports:{}},Wc={};var Np;function Ax(){return Np||(Np=1,(function(i){function l(_,V){var X=_.length;_.push(V);t:for(;0<X;){var I=X-1>>>1,ot=_[I];if(0<u(ot,V))_[I]=V,_[X]=ot,X=I;else break t}}function o(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var V=_[0],X=_.pop();if(X!==V){_[0]=X;t:for(var I=0,ot=_.length,j=ot>>>1;I<j;){var H=2*(I+1)-1,K=_[H],tt=H+1,ct=_[tt];if(0>u(K,X))tt<ot&&0>u(ct,K)?(_[I]=ct,_[tt]=X,I=tt):(_[I]=K,_[H]=X,I=H);else if(tt<ot&&0>u(ct,X))_[I]=ct,_[tt]=X,I=tt;else break t}}return V}function u(_,V){var X=_.sortIndex-V.sortIndex;return X!==0?X:_.id-V.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;i.unstable_now=function(){return m.now()}}else{var d=Date,y=d.now();i.unstable_now=function(){return d.now()-y}}var p=[],g=[],x=1,b=null,S=3,A=!1,M=!1,U=!1,O=!1,L=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function F(_){for(var V=o(g);V!==null;){if(V.callback===null)r(g);else if(V.startTime<=_)r(g),V.sortIndex=V.expirationTime,l(p,V);else break;V=o(g)}}function Q(_){if(U=!1,F(_),!M)if(o(p)!==null)M=!0,lt||(lt=!0,_t());else{var V=o(g);V!==null&&ie(Q,V.startTime-_)}}var lt=!1,W=-1,J=5,st=-1;function vt(){return O?!0:!(i.unstable_now()-st<J)}function Nt(){if(O=!1,lt){var _=i.unstable_now();st=_;var V=!0;try{t:{M=!1,U&&(U=!1,G(W),W=-1),A=!0;var X=S;try{e:{for(F(_),b=o(p);b!==null&&!(b.expirationTime>_&&vt());){var I=b.callback;if(typeof I=="function"){b.callback=null,S=b.priorityLevel;var ot=I(b.expirationTime<=_);if(_=i.unstable_now(),typeof ot=="function"){b.callback=ot,F(_),V=!0;break e}b===o(p)&&r(p),F(_)}else r(p);b=o(p)}if(b!==null)V=!0;else{var j=o(g);j!==null&&ie(Q,j.startTime-_),V=!1}}break t}finally{b=null,S=X,A=!1}V=void 0}}finally{V?_t():lt=!1}}}var _t;if(typeof Y=="function")_t=function(){Y(Nt)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,ue=ve.port2;ve.port1.onmessage=Nt,_t=function(){ue.postMessage(null)}}else _t=function(){L(Nt,0)};function ie(_,V){W=L(function(){_(i.unstable_now())},V)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(_){_.callback=null},i.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<_?Math.floor(1e3/_):5},i.unstable_getCurrentPriorityLevel=function(){return S},i.unstable_next=function(_){switch(S){case 1:case 2:case 3:var V=3;break;default:V=S}var X=S;S=V;try{return _()}finally{S=X}},i.unstable_requestPaint=function(){O=!0},i.unstable_runWithPriority=function(_,V){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var X=S;S=_;try{return V()}finally{S=X}},i.unstable_scheduleCallback=function(_,V,X){var I=i.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?I+X:I):X=I,_){case 1:var ot=-1;break;case 2:ot=250;break;case 5:ot=1073741823;break;case 4:ot=1e4;break;default:ot=5e3}return ot=X+ot,_={id:x++,callback:V,priorityLevel:_,startTime:X,expirationTime:ot,sortIndex:-1},X>I?(_.sortIndex=X,l(g,_),o(p)===null&&_===o(g)&&(U?(G(W),W=-1):U=!0,ie(Q,X-I))):(_.sortIndex=ot,l(p,_),M||A||(M=!0,lt||(lt=!0,_t()))),_},i.unstable_shouldYield=vt,i.unstable_wrapCallback=function(_){var V=S;return function(){var X=S;S=V;try{return _.apply(this,arguments)}finally{S=X}}}})(Wc)),Wc}var Cp;function zx(){return Cp||(Cp=1,Pc.exports=Ax()),Pc.exports}var $c={exports:{}},ae={};var Dp;function Mx(){if(Dp)return ae;Dp=1;var i=Gu();function l(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)g+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var r={d:{f:o,r:function(){throw Error(l(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},u=Symbol.for("react.portal");function m(p,g,x){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:b==null?null:""+b,children:p,containerInfo:g,implementation:x}}var d=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ae.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ae.createPortal=function(p,g){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(l(299));return m(p,g,null,x)},ae.flushSync=function(p){var g=d.T,x=r.p;try{if(d.T=null,r.p=2,p)return p()}finally{d.T=g,r.p=x,r.d.f()}},ae.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(p,g))},ae.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},ae.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var x=g.as,b=y(x,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,A=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;x==="style"?r.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:S,fetchPriority:A}):x==="script"&&r.d.X(p,{crossOrigin:b,integrity:S,fetchPriority:A,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ae.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var x=y(g.as,g.crossOrigin);r.d.M(p,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(p)},ae.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var x=g.as,b=y(x,g.crossOrigin);r.d.L(p,x,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ae.preloadModule=function(p,g){if(typeof p=="string")if(g){var x=y(g.as,g.crossOrigin);r.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(p)},ae.requestFormReset=function(p){r.d.r(p)},ae.unstable_batchedUpdates=function(p,g){return p(g)},ae.useFormState=function(p,g,x){return d.H.useFormState(p,g,x)},ae.useFormStatus=function(){return d.H.useHostTransitionStatus()},ae.version="19.2.4",ae}var kp;function Ex(){if(kp)return $c.exports;kp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(l){console.error(l)}}return i(),$c.exports=Mx(),$c.exports}var Op;function Nx(){if(Op)return pl;Op=1;var i=zx(),l=Gu(),o=Ex();function r(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function m(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function d(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function y(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function p(t){if(m(t)!==t)throw Error(r(188))}function g(t){var e=t.alternate;if(!e){if(e=m(t),e===null)throw Error(r(188));return e!==t?null:t}for(var n=t,a=e;;){var s=n.return;if(s===null)break;var c=s.alternate;if(c===null){if(a=s.return,a!==null){n=a;continue}break}if(s.child===c.child){for(c=s.child;c;){if(c===n)return p(s),t;if(c===a)return p(s),e;c=c.sibling}throw Error(r(188))}if(n.return!==a.return)n=s,a=c;else{for(var h=!1,v=s.child;v;){if(v===n){h=!0,n=s,a=c;break}if(v===a){h=!0,a=s,n=c;break}v=v.sibling}if(!h){for(v=c.child;v;){if(v===n){h=!0,n=c,a=s;break}if(v===a){h=!0,a=c,n=s;break}v=v.sibling}if(!h)throw Error(r(189))}}if(n.alternate!==a)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?t:e}function x(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=x(t),e!==null)return e;t=t.sibling}return null}var b=Object.assign,S=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),lt=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),st=Symbol.for("react.activity"),vt=Symbol.for("react.memo_cache_sentinel"),Nt=Symbol.iterator;function _t(t){return t===null||typeof t!="object"?null:(t=Nt&&t[Nt]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Symbol.for("react.client.reference");function ue(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ve?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case L:return"Profiler";case O:return"StrictMode";case Q:return"Suspense";case lt:return"SuspenseList";case st:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case Y:return t.displayName||"Context";case G:return(t._context.displayName||"Context")+".Consumer";case F:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case W:return e=t.displayName||null,e!==null?e:ue(t.type)||"Memo";case J:e=t._payload,t=t._init;try{return ue(t(e))}catch{}}return null}var ie=Array.isArray,_=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},I=[],ot=-1;function j(t){return{current:t}}function H(t){0>ot||(t.current=I[ot],I[ot]=null,ot--)}function K(t,e){ot++,I[ot]=t.current,t.current=e}var tt=j(null),ct=j(null),dt=j(null),Tt=j(null);function se(t,e){switch(K(dt,e),K(ct,t),K(tt,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Jm(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Jm(e),t=Fm(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}H(tt),K(tt,t)}function Ht(){H(tt),H(ct),H(dt)}function Sa(t){t.memoizedState!==null&&K(Tt,t);var e=tt.current,n=Fm(e,t.type);e!==n&&(K(ct,t),K(tt,n))}function Vl(t){ct.current===t&&(H(tt),H(ct)),Tt.current===t&&(H(Tt),ul._currentValue=X)}var No,jf;function In(t){if(No===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);No=e&&e[1]||"",jf=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+No+t+jf}var Co=!1;function Do(t,e){if(!t||Co)return"";Co=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch(D){var C=D}Reflect.construct(t,[],q)}else{try{q.call()}catch(D){C=D}t.call(q.prototype)}}else{try{throw Error()}catch(D){C=D}(q=t())&&typeof q.catch=="function"&&q.catch(function(){})}}catch(D){if(D&&C&&typeof D.stack=="string")return[D.stack,C.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=a.DetermineComponentFrameRoot(),h=c[0],v=c[1];if(h&&v){var T=h.split(`
`),N=v.split(`
`);for(s=a=0;a<T.length&&!T[a].includes("DetermineComponentFrameRoot");)a++;for(;s<N.length&&!N[s].includes("DetermineComponentFrameRoot");)s++;if(a===T.length||s===N.length)for(a=T.length-1,s=N.length-1;1<=a&&0<=s&&T[a]!==N[s];)s--;for(;1<=a&&0<=s;a--,s--)if(T[a]!==N[s]){if(a!==1||s!==1)do if(a--,s--,0>s||T[a]!==N[s]){var R=`
`+T[a].replace(" at new "," at ");return t.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",t.displayName)),R}while(1<=a&&0<=s);break}}}finally{Co=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?In(n):""}function Iy(t,e){switch(t.tag){case 26:case 27:case 5:return In(t.type);case 16:return In("Lazy");case 13:return t.child!==e&&e!==null?In("Suspense Fallback"):In("Suspense");case 19:return In("SuspenseList");case 0:case 15:return Do(t.type,!1);case 11:return Do(t.type.render,!1);case 1:return Do(t.type,!0);case 31:return In("Activity");default:return""}}function Af(t){try{var e="",n=null;do e+=Iy(t,n),n=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var ko=Object.prototype.hasOwnProperty,Oo=i.unstable_scheduleCallback,Ro=i.unstable_cancelCallback,t1=i.unstable_shouldYield,e1=i.unstable_requestPaint,xe=i.unstable_now,n1=i.unstable_getCurrentPriorityLevel,zf=i.unstable_ImmediatePriority,Mf=i.unstable_UserBlockingPriority,Ul=i.unstable_NormalPriority,i1=i.unstable_LowPriority,Ef=i.unstable_IdlePriority,a1=i.log,l1=i.unstable_setDisableYieldValue,Ta=null,be=null;function wn(t){if(typeof a1=="function"&&l1(t),be&&typeof be.setStrictMode=="function")try{be.setStrictMode(Ta,t)}catch{}}var Se=Math.clz32?Math.clz32:r1,s1=Math.log,o1=Math.LN2;function r1(t){return t>>>=0,t===0?32:31-(s1(t)/o1|0)|0}var Bl=256,Hl=262144,Ll=4194304;function ti(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ql(t,e,n){var a=t.pendingLanes;if(a===0)return 0;var s=0,c=t.suspendedLanes,h=t.pingedLanes;t=t.warmLanes;var v=a&134217727;return v!==0?(a=v&~c,a!==0?s=ti(a):(h&=v,h!==0?s=ti(h):n||(n=v&~t,n!==0&&(s=ti(n))))):(v=a&~c,v!==0?s=ti(v):h!==0?s=ti(h):n||(n=a&~t,n!==0&&(s=ti(n)))),s===0?0:e!==0&&e!==s&&(e&c)===0&&(c=s&-s,n=e&-e,c>=n||c===32&&(n&4194048)!==0)?e:s}function wa(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function c1(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nf(){var t=Ll;return Ll<<=1,(Ll&62914560)===0&&(Ll=4194304),t}function _o(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ja(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function u1(t,e,n,a,s,c){var h=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var v=t.entanglements,T=t.expirationTimes,N=t.hiddenUpdates;for(n=h&~n;0<n;){var R=31-Se(n),q=1<<R;v[R]=0,T[R]=-1;var C=N[R];if(C!==null)for(N[R]=null,R=0;R<C.length;R++){var D=C[R];D!==null&&(D.lane&=-536870913)}n&=~q}a!==0&&Cf(t,a,0),c!==0&&s===0&&t.tag!==0&&(t.suspendedLanes|=c&~(h&~e))}function Cf(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-Se(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|n&261930}function Df(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var a=31-Se(n),s=1<<a;s&e|t[a]&e&&(t[a]|=e),n&=~s}}function kf(t,e){var n=e&-e;return n=(n&42)!==0?1:Vo(n),(n&(t.suspendedLanes|e))!==0?0:n}function Vo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Uo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Of(){var t=V.p;return t!==0?t:(t=window.event,t===void 0?32:vp(t.type))}function Rf(t,e){var n=V.p;try{return V.p=t,e()}finally{V.p=n}}var jn=Math.random().toString(36).slice(2),Wt="__reactFiber$"+jn,fe="__reactProps$"+jn,ji="__reactContainer$"+jn,Bo="__reactEvents$"+jn,f1="__reactListeners$"+jn,d1="__reactHandles$"+jn,_f="__reactResources$"+jn,Aa="__reactMarker$"+jn;function Ho(t){delete t[Wt],delete t[fe],delete t[Bo],delete t[f1],delete t[d1]}function Ai(t){var e=t[Wt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ji]||n[Wt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=np(t);t!==null;){if(n=t[Wt])return n;t=np(t)}return e}t=n,n=t.parentNode}return null}function zi(t){if(t=t[Wt]||t[ji]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function za(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(r(33))}function Mi(t){var e=t[_f];return e||(e=t[_f]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ft(t){t[Aa]=!0}var Vf=new Set,Uf={};function ei(t,e){Ei(t,e),Ei(t+"Capture",e)}function Ei(t,e){for(Uf[t]=e,t=0;t<e.length;t++)Vf.add(e[t])}var h1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bf={},Hf={};function m1(t){return ko.call(Hf,t)?!0:ko.call(Bf,t)?!1:h1.test(t)?Hf[t]=!0:(Bf[t]=!0,!1)}function Yl(t,e,n){if(m1(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Gl(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function nn(t,e,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+a)}}function Ne(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Lf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function p1(t,e,n){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var s=a.get,c=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(h){n=""+h,c.call(this,h)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(h){n=""+h},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Lo(t){if(!t._valueTracker){var e=Lf(t)?"checked":"value";t._valueTracker=p1(t,e,""+t[e])}}function qf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),a="";return t&&(a=Lf(t)?t.checked?"true":"false":t.value),t=a,t!==n?(e.setValue(t),!0):!1}function Xl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var g1=/[\n"\\]/g;function Ce(t){return t.replace(g1,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function qo(t,e,n,a,s,c,h,v){t.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?t.type=h:t.removeAttribute("type"),e!=null?h==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ne(e)):t.value!==""+Ne(e)&&(t.value=""+Ne(e)):h!=="submit"&&h!=="reset"||t.removeAttribute("value"),e!=null?Yo(t,h,Ne(e)):n!=null?Yo(t,h,Ne(n)):a!=null&&t.removeAttribute("value"),s==null&&c!=null&&(t.defaultChecked=!!c),s!=null&&(t.checked=s&&typeof s!="function"&&typeof s!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.name=""+Ne(v):t.removeAttribute("name")}function Yf(t,e,n,a,s,c,h,v){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),e!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||e!=null)){Lo(t);return}n=n!=null?""+Ne(n):"",e=e!=null?""+Ne(e):n,v||e===t.value||(t.value=e),t.defaultValue=e}a=a??s,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=v?t.checked:!!a,t.defaultChecked=!!a,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.name=h),Lo(t)}function Yo(t,e,n){e==="number"&&Xl(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Ni(t,e,n,a){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&a&&(t[n].defaultSelected=!0)}else{for(n=""+Ne(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,a&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Gf(t,e,n){if(e!=null&&(e=""+Ne(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Ne(n):""}function Xf(t,e,n,a){if(e==null){if(a!=null){if(n!=null)throw Error(r(92));if(ie(a)){if(1<a.length)throw Error(r(93));a=a[0]}n=a}n==null&&(n=""),e=n}n=Ne(e),t.defaultValue=n,a=t.textContent,a===n&&a!==""&&a!==null&&(t.value=a),Lo(t)}function Ci(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var y1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qf(t,e,n){var a=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,n):typeof n!="number"||n===0||y1.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Zf(t,e,n){if(e!=null&&typeof e!="object")throw Error(r(62));if(t=t.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var s in e)a=e[s],e.hasOwnProperty(s)&&n[s]!==a&&Qf(t,s,a)}else for(var c in e)e.hasOwnProperty(c)&&Qf(t,c,e[c])}function Go(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var v1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),x1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ql(t){return x1.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function an(){}var Xo=null;function Qo(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Di=null,ki=null;function Kf(t){var e=zi(t);if(e&&(t=e.stateNode)){var n=t[fe]||null;t:switch(t=e.stateNode,e.type){case"input":if(qo(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ce(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var a=n[e];if(a!==t&&a.form===t.form){var s=a[fe]||null;if(!s)throw Error(r(90));qo(a,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(e=0;e<n.length;e++)a=n[e],a.form===t.form&&qf(a)}break t;case"textarea":Gf(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&Ni(t,!!n.multiple,e,!1)}}}var Zo=!1;function Jf(t,e,n){if(Zo)return t(e,n);Zo=!0;try{var a=t(e);return a}finally{if(Zo=!1,(Di!==null||ki!==null)&&(ks(),Di&&(e=Di,t=ki,ki=Di=null,Kf(e),t)))for(e=0;e<t.length;e++)Kf(t[e])}}function Ma(t,e){var n=t.stateNode;if(n===null)return null;var a=n[fe]||null;if(a===null)return null;n=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(r(231,e,typeof n));return n}var ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ko=!1;if(ln)try{var Ea={};Object.defineProperty(Ea,"passive",{get:function(){Ko=!0}}),window.addEventListener("test",Ea,Ea),window.removeEventListener("test",Ea,Ea)}catch{Ko=!1}var An=null,Jo=null,Zl=null;function Ff(){if(Zl)return Zl;var t,e=Jo,n=e.length,a,s="value"in An?An.value:An.textContent,c=s.length;for(t=0;t<n&&e[t]===s[t];t++);var h=n-t;for(a=1;a<=h&&e[n-a]===s[c-a];a++);return Zl=s.slice(t,1<a?1-a:void 0)}function Kl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Jl(){return!0}function Pf(){return!1}function de(t){function e(n,a,s,c,h){this._reactName=n,this._targetInst=s,this.type=a,this.nativeEvent=c,this.target=h,this.currentTarget=null;for(var v in t)t.hasOwnProperty(v)&&(n=t[v],this[v]=n?n(c):c[v]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Jl:Pf,this.isPropagationStopped=Pf,this}return b(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jl)},persist:function(){},isPersistent:Jl}),e}var ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fl=de(ni),Na=b({},ni,{view:0,detail:0}),b1=de(Na),Fo,Po,Ca,Pl=b({},Na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$o,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ca&&(Ca&&t.type==="mousemove"?(Fo=t.screenX-Ca.screenX,Po=t.screenY-Ca.screenY):Po=Fo=0,Ca=t),Fo)},movementY:function(t){return"movementY"in t?t.movementY:Po}}),Wf=de(Pl),S1=b({},Pl,{dataTransfer:0}),T1=de(S1),w1=b({},Na,{relatedTarget:0}),Wo=de(w1),j1=b({},ni,{animationName:0,elapsedTime:0,pseudoElement:0}),A1=de(j1),z1=b({},ni,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),M1=de(z1),E1=b({},ni,{data:0}),$f=de(E1),N1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},D1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=D1[t])?!!e[t]:!1}function $o(){return k1}var O1=b({},Na,{key:function(t){if(t.key){var e=N1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Kl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?C1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$o,charCode:function(t){return t.type==="keypress"?Kl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Kl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),R1=de(O1),_1=b({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),If=de(_1),V1=b({},Na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$o}),U1=de(V1),B1=b({},ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),H1=de(B1),L1=b({},Pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),q1=de(L1),Y1=b({},ni,{newState:0,oldState:0}),G1=de(Y1),X1=[9,13,27,32],Io=ln&&"CompositionEvent"in window,Da=null;ln&&"documentMode"in document&&(Da=document.documentMode);var Q1=ln&&"TextEvent"in window&&!Da,td=ln&&(!Io||Da&&8<Da&&11>=Da),ed=" ",nd=!1;function id(t,e){switch(t){case"keyup":return X1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ad(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Oi=!1;function Z1(t,e){switch(t){case"compositionend":return ad(e);case"keypress":return e.which!==32?null:(nd=!0,ed);case"textInput":return t=e.data,t===ed&&nd?null:t;default:return null}}function K1(t,e){if(Oi)return t==="compositionend"||!Io&&id(t,e)?(t=Ff(),Zl=Jo=An=null,Oi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return td&&e.locale!=="ko"?null:e.data;default:return null}}var J1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ld(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!J1[t.type]:e==="textarea"}function sd(t,e,n,a){Di?ki?ki.push(a):ki=[a]:Di=a,e=Hs(e,"onChange"),0<e.length&&(n=new Fl("onChange","change",null,n,a),t.push({event:n,listeners:e}))}var ka=null,Oa=null;function F1(t){Ym(t,0)}function Wl(t){var e=za(t);if(qf(e))return t}function od(t,e){if(t==="change")return e}var rd=!1;if(ln){var tr;if(ln){var er="oninput"in document;if(!er){var cd=document.createElement("div");cd.setAttribute("oninput","return;"),er=typeof cd.oninput=="function"}tr=er}else tr=!1;rd=tr&&(!document.documentMode||9<document.documentMode)}function ud(){ka&&(ka.detachEvent("onpropertychange",fd),Oa=ka=null)}function fd(t){if(t.propertyName==="value"&&Wl(Oa)){var e=[];sd(e,Oa,t,Qo(t)),Jf(F1,e)}}function P1(t,e,n){t==="focusin"?(ud(),ka=e,Oa=n,ka.attachEvent("onpropertychange",fd)):t==="focusout"&&ud()}function W1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wl(Oa)}function $1(t,e){if(t==="click")return Wl(e)}function I1(t,e){if(t==="input"||t==="change")return Wl(e)}function tv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Te=typeof Object.is=="function"?Object.is:tv;function Ra(t,e){if(Te(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),a=Object.keys(e);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var s=n[a];if(!ko.call(e,s)||!Te(t[s],e[s]))return!1}return!0}function dd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hd(t,e){var n=dd(t);t=0;for(var a;n;){if(n.nodeType===3){if(a=t+n.textContent.length,t<=e&&a>=e)return{node:n,offset:e-t};t=a}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=dd(n)}}function md(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?md(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function pd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Xl(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xl(t.document)}return e}function nr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var ev=ln&&"documentMode"in document&&11>=document.documentMode,Ri=null,ir=null,_a=null,ar=!1;function gd(t,e,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ar||Ri==null||Ri!==Xl(a)||(a=Ri,"selectionStart"in a&&nr(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),_a&&Ra(_a,a)||(_a=a,a=Hs(ir,"onSelect"),0<a.length&&(e=new Fl("onSelect","select",null,e,n),t.push({event:e,listeners:a}),e.target=Ri)))}function ii(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _i={animationend:ii("Animation","AnimationEnd"),animationiteration:ii("Animation","AnimationIteration"),animationstart:ii("Animation","AnimationStart"),transitionrun:ii("Transition","TransitionRun"),transitionstart:ii("Transition","TransitionStart"),transitioncancel:ii("Transition","TransitionCancel"),transitionend:ii("Transition","TransitionEnd")},lr={},yd={};ln&&(yd=document.createElement("div").style,"AnimationEvent"in window||(delete _i.animationend.animation,delete _i.animationiteration.animation,delete _i.animationstart.animation),"TransitionEvent"in window||delete _i.transitionend.transition);function ai(t){if(lr[t])return lr[t];if(!_i[t])return t;var e=_i[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in yd)return lr[t]=e[n];return t}var vd=ai("animationend"),xd=ai("animationiteration"),bd=ai("animationstart"),nv=ai("transitionrun"),iv=ai("transitionstart"),av=ai("transitioncancel"),Sd=ai("transitionend"),Td=new Map,sr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");sr.push("scrollEnd");function qe(t,e){Td.set(t,e),ei(e,[t])}var $l=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},De=[],Vi=0,or=0;function Il(){for(var t=Vi,e=or=Vi=0;e<t;){var n=De[e];De[e++]=null;var a=De[e];De[e++]=null;var s=De[e];De[e++]=null;var c=De[e];if(De[e++]=null,a!==null&&s!==null){var h=a.pending;h===null?s.next=s:(s.next=h.next,h.next=s),a.pending=s}c!==0&&wd(n,s,c)}}function ts(t,e,n,a){De[Vi++]=t,De[Vi++]=e,De[Vi++]=n,De[Vi++]=a,or|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function rr(t,e,n,a){return ts(t,e,n,a),es(t)}function li(t,e){return ts(t,null,null,e),es(t)}function wd(t,e,n){t.lanes|=n;var a=t.alternate;a!==null&&(a.lanes|=n);for(var s=!1,c=t.return;c!==null;)c.childLanes|=n,a=c.alternate,a!==null&&(a.childLanes|=n),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(s=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,s&&e!==null&&(s=31-Se(n),t=c.hiddenUpdates,a=t[s],a===null?t[s]=[e]:a.push(e),e.lane=n|536870912),c):null}function es(t){if(50<il)throw il=0,yc=null,Error(r(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ui={};function lv(t,e,n,a){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function we(t,e,n,a){return new lv(t,e,n,a)}function cr(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sn(t,e){var n=t.alternate;return n===null?(n=we(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function jd(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function ns(t,e,n,a,s,c){var h=0;if(a=t,typeof t=="function")cr(t)&&(h=1);else if(typeof t=="string")h=ux(t,n,tt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case st:return t=we(31,n,e,s),t.elementType=st,t.lanes=c,t;case U:return si(n.children,s,c,e);case O:h=8,s|=24;break;case L:return t=we(12,n,e,s|2),t.elementType=L,t.lanes=c,t;case Q:return t=we(13,n,e,s),t.elementType=Q,t.lanes=c,t;case lt:return t=we(19,n,e,s),t.elementType=lt,t.lanes=c,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Y:h=10;break t;case G:h=9;break t;case F:h=11;break t;case W:h=14;break t;case J:h=16,a=null;break t}h=29,n=Error(r(130,t===null?"null":typeof t,"")),a=null}return e=we(h,n,e,s),e.elementType=t,e.type=a,e.lanes=c,e}function si(t,e,n,a){return t=we(7,t,a,e),t.lanes=n,t}function ur(t,e,n){return t=we(6,t,null,e),t.lanes=n,t}function Ad(t){var e=we(18,null,null,0);return e.stateNode=t,e}function fr(t,e,n){return e=we(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var zd=new WeakMap;function ke(t,e){if(typeof t=="object"&&t!==null){var n=zd.get(t);return n!==void 0?n:(e={value:t,source:e,stack:Af(e)},zd.set(t,e),e)}return{value:t,source:e,stack:Af(e)}}var Bi=[],Hi=0,is=null,Va=0,Oe=[],Re=0,zn=null,Fe=1,Pe="";function on(t,e){Bi[Hi++]=Va,Bi[Hi++]=is,is=t,Va=e}function Md(t,e,n){Oe[Re++]=Fe,Oe[Re++]=Pe,Oe[Re++]=zn,zn=t;var a=Fe;t=Pe;var s=32-Se(a)-1;a&=~(1<<s),n+=1;var c=32-Se(e)+s;if(30<c){var h=s-s%5;c=(a&(1<<h)-1).toString(32),a>>=h,s-=h,Fe=1<<32-Se(e)+s|n<<s|a,Pe=c+t}else Fe=1<<c|n<<s|a,Pe=t}function dr(t){t.return!==null&&(on(t,1),Md(t,1,0))}function hr(t){for(;t===is;)is=Bi[--Hi],Bi[Hi]=null,Va=Bi[--Hi],Bi[Hi]=null;for(;t===zn;)zn=Oe[--Re],Oe[Re]=null,Pe=Oe[--Re],Oe[Re]=null,Fe=Oe[--Re],Oe[Re]=null}function Ed(t,e){Oe[Re++]=Fe,Oe[Re++]=Pe,Oe[Re++]=zn,Fe=e.id,Pe=e.overflow,zn=t}var $t=null,Dt=null,yt=!1,Mn=null,_e=!1,mr=Error(r(519));function En(t){var e=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ua(ke(e,t)),mr}function Nd(t){var e=t.stateNode,n=t.type,a=t.memoizedProps;switch(e[Wt]=t,e[fe]=a,n){case"dialog":mt("cancel",e),mt("close",e);break;case"iframe":case"object":case"embed":mt("load",e);break;case"video":case"audio":for(n=0;n<ll.length;n++)mt(ll[n],e);break;case"source":mt("error",e);break;case"img":case"image":case"link":mt("error",e),mt("load",e);break;case"details":mt("toggle",e);break;case"input":mt("invalid",e),Yf(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":mt("invalid",e);break;case"textarea":mt("invalid",e),Xf(e,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||a.suppressHydrationWarning===!0||Zm(e.textContent,n)?(a.popover!=null&&(mt("beforetoggle",e),mt("toggle",e)),a.onScroll!=null&&mt("scroll",e),a.onScrollEnd!=null&&mt("scrollend",e),a.onClick!=null&&(e.onclick=an),e=!0):e=!1,e||En(t,!0)}function Cd(t){for($t=t.return;$t;)switch($t.tag){case 5:case 31:case 13:_e=!1;return;case 27:case 3:_e=!0;return;default:$t=$t.return}}function Li(t){if(t!==$t)return!1;if(!yt)return Cd(t),yt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||kc(t.type,t.memoizedProps)),n=!n),n&&Dt&&En(t),Cd(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Dt=ep(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Dt=ep(t)}else e===27?(e=Dt,Yn(t.type)?(t=Uc,Uc=null,Dt=t):Dt=e):Dt=$t?Ue(t.stateNode.nextSibling):null;return!0}function oi(){Dt=$t=null,yt=!1}function pr(){var t=Mn;return t!==null&&(ge===null?ge=t:ge.push.apply(ge,t),Mn=null),t}function Ua(t){Mn===null?Mn=[t]:Mn.push(t)}var gr=j(null),ri=null,rn=null;function Nn(t,e,n){K(gr,e._currentValue),e._currentValue=n}function cn(t){t._currentValue=gr.current,H(gr)}function yr(t,e,n){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===n)break;t=t.return}}function vr(t,e,n,a){var s=t.child;for(s!==null&&(s.return=t);s!==null;){var c=s.dependencies;if(c!==null){var h=s.child;c=c.firstContext;t:for(;c!==null;){var v=c;c=s;for(var T=0;T<e.length;T++)if(v.context===e[T]){c.lanes|=n,v=c.alternate,v!==null&&(v.lanes|=n),yr(c.return,n,t),a||(h=null);break t}c=v.next}}else if(s.tag===18){if(h=s.return,h===null)throw Error(r(341));h.lanes|=n,c=h.alternate,c!==null&&(c.lanes|=n),yr(h,n,t),h=null}else h=s.child;if(h!==null)h.return=s;else for(h=s;h!==null;){if(h===t){h=null;break}if(s=h.sibling,s!==null){s.return=h.return,h=s;break}h=h.return}s=h}}function qi(t,e,n,a){t=null;for(var s=e,c=!1;s!==null;){if(!c){if((s.flags&524288)!==0)c=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var h=s.alternate;if(h===null)throw Error(r(387));if(h=h.memoizedProps,h!==null){var v=s.type;Te(s.pendingProps.value,h.value)||(t!==null?t.push(v):t=[v])}}else if(s===Tt.current){if(h=s.alternate,h===null)throw Error(r(387));h.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(t!==null?t.push(ul):t=[ul])}s=s.return}t!==null&&vr(e,t,n,a),e.flags|=262144}function as(t){for(t=t.firstContext;t!==null;){if(!Te(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ci(t){ri=t,rn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function It(t){return Dd(ri,t)}function ls(t,e){return ri===null&&ci(t),Dd(t,e)}function Dd(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},rn===null){if(t===null)throw Error(r(308));rn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else rn=rn.next=e;return n}var sv=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},ov=i.unstable_scheduleCallback,rv=i.unstable_NormalPriority,Yt={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xr(){return{controller:new sv,data:new Map,refCount:0}}function Ba(t){t.refCount--,t.refCount===0&&ov(rv,function(){t.controller.abort()})}var Ha=null,br=0,Yi=0,Gi=null;function cv(t,e){if(Ha===null){var n=Ha=[];br=0,Yi=wc(),Gi={status:"pending",value:void 0,then:function(a){n.push(a)}}}return br++,e.then(kd,kd),e}function kd(){if(--br===0&&Ha!==null){Gi!==null&&(Gi.status="fulfilled");var t=Ha;Ha=null,Yi=0,Gi=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function uv(t,e){var n=[],a={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var s=0;s<n.length;s++)(0,n[s])(e)},function(s){for(a.status="rejected",a.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),a}var Od=_.S;_.S=function(t,e){gm=xe(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&cv(t,e),Od!==null&&Od(t,e)};var ui=j(null);function Sr(){var t=ui.current;return t!==null?t:Et.pooledCache}function ss(t,e){e===null?K(ui,ui.current):K(ui,e.pool)}function Rd(){var t=Sr();return t===null?null:{parent:Yt._currentValue,pool:t}}var Xi=Error(r(460)),Tr=Error(r(474)),os=Error(r(542)),rs={then:function(){}};function _d(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Vd(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(an,an),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Bd(t),t;default:if(typeof e.status=="string")e.then(an,an);else{if(t=Et,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var s=e;s.status="fulfilled",s.value=a}},function(a){if(e.status==="pending"){var s=e;s.status="rejected",s.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Bd(t),t}throw di=e,Xi}}function fi(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(di=n,Xi):n}}var di=null;function Ud(){if(di===null)throw Error(r(459));var t=di;return di=null,t}function Bd(t){if(t===Xi||t===os)throw Error(r(483))}var Qi=null,La=0;function cs(t){var e=La;return La+=1,Qi===null&&(Qi=[]),Vd(Qi,t,e)}function qa(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function us(t,e){throw e.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(e),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Hd(t){function e(z,w){if(t){var E=z.deletions;E===null?(z.deletions=[w],z.flags|=16):E.push(w)}}function n(z,w){if(!t)return null;for(;w!==null;)e(z,w),w=w.sibling;return null}function a(z){for(var w=new Map;z!==null;)z.key!==null?w.set(z.key,z):w.set(z.index,z),z=z.sibling;return w}function s(z,w){return z=sn(z,w),z.index=0,z.sibling=null,z}function c(z,w,E){return z.index=E,t?(E=z.alternate,E!==null?(E=E.index,E<w?(z.flags|=67108866,w):E):(z.flags|=67108866,w)):(z.flags|=1048576,w)}function h(z){return t&&z.alternate===null&&(z.flags|=67108866),z}function v(z,w,E,B){return w===null||w.tag!==6?(w=ur(E,z.mode,B),w.return=z,w):(w=s(w,E),w.return=z,w)}function T(z,w,E,B){var it=E.type;return it===U?R(z,w,E.props.children,B,E.key):w!==null&&(w.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===J&&fi(it)===w.type)?(w=s(w,E.props),qa(w,E),w.return=z,w):(w=ns(E.type,E.key,E.props,null,z.mode,B),qa(w,E),w.return=z,w)}function N(z,w,E,B){return w===null||w.tag!==4||w.stateNode.containerInfo!==E.containerInfo||w.stateNode.implementation!==E.implementation?(w=fr(E,z.mode,B),w.return=z,w):(w=s(w,E.children||[]),w.return=z,w)}function R(z,w,E,B,it){return w===null||w.tag!==7?(w=si(E,z.mode,B,it),w.return=z,w):(w=s(w,E),w.return=z,w)}function q(z,w,E){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return w=ur(""+w,z.mode,E),w.return=z,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case A:return E=ns(w.type,w.key,w.props,null,z.mode,E),qa(E,w),E.return=z,E;case M:return w=fr(w,z.mode,E),w.return=z,w;case J:return w=fi(w),q(z,w,E)}if(ie(w)||_t(w))return w=si(w,z.mode,E,null),w.return=z,w;if(typeof w.then=="function")return q(z,cs(w),E);if(w.$$typeof===Y)return q(z,ls(z,w),E);us(z,w)}return null}function C(z,w,E,B){var it=w!==null?w.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return it!==null?null:v(z,w,""+E,B);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case A:return E.key===it?T(z,w,E,B):null;case M:return E.key===it?N(z,w,E,B):null;case J:return E=fi(E),C(z,w,E,B)}if(ie(E)||_t(E))return it!==null?null:R(z,w,E,B,null);if(typeof E.then=="function")return C(z,w,cs(E),B);if(E.$$typeof===Y)return C(z,w,ls(z,E),B);us(z,E)}return null}function D(z,w,E,B,it){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return z=z.get(E)||null,v(w,z,""+B,it);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case A:return z=z.get(B.key===null?E:B.key)||null,T(w,z,B,it);case M:return z=z.get(B.key===null?E:B.key)||null,N(w,z,B,it);case J:return B=fi(B),D(z,w,E,B,it)}if(ie(B)||_t(B))return z=z.get(E)||null,R(w,z,B,it,null);if(typeof B.then=="function")return D(z,w,E,cs(B),it);if(B.$$typeof===Y)return D(z,w,E,ls(w,B),it);us(w,B)}return null}function P(z,w,E,B){for(var it=null,xt=null,et=w,ft=w=0,gt=null;et!==null&&ft<E.length;ft++){et.index>ft?(gt=et,et=null):gt=et.sibling;var bt=C(z,et,E[ft],B);if(bt===null){et===null&&(et=gt);break}t&&et&&bt.alternate===null&&e(z,et),w=c(bt,w,ft),xt===null?it=bt:xt.sibling=bt,xt=bt,et=gt}if(ft===E.length)return n(z,et),yt&&on(z,ft),it;if(et===null){for(;ft<E.length;ft++)et=q(z,E[ft],B),et!==null&&(w=c(et,w,ft),xt===null?it=et:xt.sibling=et,xt=et);return yt&&on(z,ft),it}for(et=a(et);ft<E.length;ft++)gt=D(et,z,ft,E[ft],B),gt!==null&&(t&&gt.alternate!==null&&et.delete(gt.key===null?ft:gt.key),w=c(gt,w,ft),xt===null?it=gt:xt.sibling=gt,xt=gt);return t&&et.forEach(function(Kn){return e(z,Kn)}),yt&&on(z,ft),it}function at(z,w,E,B){if(E==null)throw Error(r(151));for(var it=null,xt=null,et=w,ft=w=0,gt=null,bt=E.next();et!==null&&!bt.done;ft++,bt=E.next()){et.index>ft?(gt=et,et=null):gt=et.sibling;var Kn=C(z,et,bt.value,B);if(Kn===null){et===null&&(et=gt);break}t&&et&&Kn.alternate===null&&e(z,et),w=c(Kn,w,ft),xt===null?it=Kn:xt.sibling=Kn,xt=Kn,et=gt}if(bt.done)return n(z,et),yt&&on(z,ft),it;if(et===null){for(;!bt.done;ft++,bt=E.next())bt=q(z,bt.value,B),bt!==null&&(w=c(bt,w,ft),xt===null?it=bt:xt.sibling=bt,xt=bt);return yt&&on(z,ft),it}for(et=a(et);!bt.done;ft++,bt=E.next())bt=D(et,z,ft,bt.value,B),bt!==null&&(t&&bt.alternate!==null&&et.delete(bt.key===null?ft:bt.key),w=c(bt,w,ft),xt===null?it=bt:xt.sibling=bt,xt=bt);return t&&et.forEach(function(Sx){return e(z,Sx)}),yt&&on(z,ft),it}function Mt(z,w,E,B){if(typeof E=="object"&&E!==null&&E.type===U&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case A:t:{for(var it=E.key;w!==null;){if(w.key===it){if(it=E.type,it===U){if(w.tag===7){n(z,w.sibling),B=s(w,E.props.children),B.return=z,z=B;break t}}else if(w.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===J&&fi(it)===w.type){n(z,w.sibling),B=s(w,E.props),qa(B,E),B.return=z,z=B;break t}n(z,w);break}else e(z,w);w=w.sibling}E.type===U?(B=si(E.props.children,z.mode,B,E.key),B.return=z,z=B):(B=ns(E.type,E.key,E.props,null,z.mode,B),qa(B,E),B.return=z,z=B)}return h(z);case M:t:{for(it=E.key;w!==null;){if(w.key===it)if(w.tag===4&&w.stateNode.containerInfo===E.containerInfo&&w.stateNode.implementation===E.implementation){n(z,w.sibling),B=s(w,E.children||[]),B.return=z,z=B;break t}else{n(z,w);break}else e(z,w);w=w.sibling}B=fr(E,z.mode,B),B.return=z,z=B}return h(z);case J:return E=fi(E),Mt(z,w,E,B)}if(ie(E))return P(z,w,E,B);if(_t(E)){if(it=_t(E),typeof it!="function")throw Error(r(150));return E=it.call(E),at(z,w,E,B)}if(typeof E.then=="function")return Mt(z,w,cs(E),B);if(E.$$typeof===Y)return Mt(z,w,ls(z,E),B);us(z,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,w!==null&&w.tag===6?(n(z,w.sibling),B=s(w,E),B.return=z,z=B):(n(z,w),B=ur(E,z.mode,B),B.return=z,z=B),h(z)):n(z,w)}return function(z,w,E,B){try{La=0;var it=Mt(z,w,E,B);return Qi=null,it}catch(et){if(et===Xi||et===os)throw et;var xt=we(29,et,null,z.mode);return xt.lanes=B,xt.return=z,xt}}}var hi=Hd(!0),Ld=Hd(!1),Cn=!1;function wr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function jr(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Dn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function kn(t,e,n){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(St&2)!==0){var s=a.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),a.pending=e,e=es(t),wd(t,null,n),e}return ts(t,a,e,n),es(t)}function Ya(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,Df(t,n)}}function Ar(t,e){var n=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var s=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var h={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?s=c=h:c=c.next=h,n=n.next}while(n!==null);c===null?s=c=e:c=c.next=e}else s=c=e;n={baseState:a.baseState,firstBaseUpdate:s,lastBaseUpdate:c,shared:a.shared,callbacks:a.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var zr=!1;function Ga(){if(zr){var t=Gi;if(t!==null)throw t}}function Xa(t,e,n,a){zr=!1;var s=t.updateQueue;Cn=!1;var c=s.firstBaseUpdate,h=s.lastBaseUpdate,v=s.shared.pending;if(v!==null){s.shared.pending=null;var T=v,N=T.next;T.next=null,h===null?c=N:h.next=N,h=T;var R=t.alternate;R!==null&&(R=R.updateQueue,v=R.lastBaseUpdate,v!==h&&(v===null?R.firstBaseUpdate=N:v.next=N,R.lastBaseUpdate=T))}if(c!==null){var q=s.baseState;h=0,R=N=T=null,v=c;do{var C=v.lane&-536870913,D=C!==v.lane;if(D?(pt&C)===C:(a&C)===C){C!==0&&C===Yi&&(zr=!0),R!==null&&(R=R.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});t:{var P=t,at=v;C=e;var Mt=n;switch(at.tag){case 1:if(P=at.payload,typeof P=="function"){q=P.call(Mt,q,C);break t}q=P;break t;case 3:P.flags=P.flags&-65537|128;case 0:if(P=at.payload,C=typeof P=="function"?P.call(Mt,q,C):P,C==null)break t;q=b({},q,C);break t;case 2:Cn=!0}}C=v.callback,C!==null&&(t.flags|=64,D&&(t.flags|=8192),D=s.callbacks,D===null?s.callbacks=[C]:D.push(C))}else D={lane:C,tag:v.tag,payload:v.payload,callback:v.callback,next:null},R===null?(N=R=D,T=q):R=R.next=D,h|=C;if(v=v.next,v===null){if(v=s.shared.pending,v===null)break;D=v,v=D.next,D.next=null,s.lastBaseUpdate=D,s.shared.pending=null}}while(!0);R===null&&(T=q),s.baseState=T,s.firstBaseUpdate=N,s.lastBaseUpdate=R,c===null&&(s.shared.lanes=0),Un|=h,t.lanes=h,t.memoizedState=q}}function qd(t,e){if(typeof t!="function")throw Error(r(191,t));t.call(e)}function Yd(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)qd(n[t],e)}var Zi=j(null),fs=j(0);function Gd(t,e){t=vn,K(fs,t),K(Zi,e),vn=t|e.baseLanes}function Mr(){K(fs,vn),K(Zi,Zi.current)}function Er(){vn=fs.current,H(Zi),H(fs)}var je=j(null),Ve=null;function On(t){var e=t.alternate;K(Lt,Lt.current&1),K(je,t),Ve===null&&(e===null||Zi.current!==null||e.memoizedState!==null)&&(Ve=t)}function Nr(t){K(Lt,Lt.current),K(je,t),Ve===null&&(Ve=t)}function Xd(t){t.tag===22?(K(Lt,Lt.current),K(je,t),Ve===null&&(Ve=t)):Rn()}function Rn(){K(Lt,Lt.current),K(je,je.current)}function Ae(t){H(je),Ve===t&&(Ve=null),H(Lt)}var Lt=j(0);function ds(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||_c(n)||Vc(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var un=0,ut=null,At=null,Gt=null,hs=!1,Ki=!1,mi=!1,ms=0,Qa=0,Ji=null,fv=0;function Vt(){throw Error(r(321))}function Cr(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Te(t[n],e[n]))return!1;return!0}function Dr(t,e,n,a,s,c){return un=c,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_.H=t===null||t.memoizedState===null?Mh:Zr,mi=!1,c=n(a,s),mi=!1,Ki&&(c=Zd(e,n,a,s)),Qd(t),c}function Qd(t){_.H=Ja;var e=At!==null&&At.next!==null;if(un=0,Gt=At=ut=null,hs=!1,Qa=0,Ji=null,e)throw Error(r(300));t===null||Xt||(t=t.dependencies,t!==null&&as(t)&&(Xt=!0))}function Zd(t,e,n,a){ut=t;var s=0;do{if(Ki&&(Ji=null),Qa=0,Ki=!1,25<=s)throw Error(r(301));if(s+=1,Gt=At=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}_.H=Eh,c=e(n,a)}while(Ki);return c}function dv(){var t=_.H,e=t.useState()[0];return e=typeof e.then=="function"?Za(e):e,t=t.useState()[0],(At!==null?At.memoizedState:null)!==t&&(ut.flags|=1024),e}function kr(){var t=ms!==0;return ms=0,t}function Or(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Rr(t){if(hs){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}hs=!1}un=0,Gt=At=ut=null,Ki=!1,Qa=ms=0,Ji=null}function oe(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?ut.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function qt(){if(At===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Gt===null?ut.memoizedState:Gt.next;if(e!==null)Gt=e,At=t;else{if(t===null)throw ut.alternate===null?Error(r(467)):Error(r(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Gt===null?ut.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function ps(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Za(t){var e=Qa;return Qa+=1,Ji===null&&(Ji=[]),t=Vd(Ji,t,e),e=ut,(Gt===null?e.memoizedState:Gt.next)===null&&(e=e.alternate,_.H=e===null||e.memoizedState===null?Mh:Zr),t}function gs(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Za(t);if(t.$$typeof===Y)return It(t)}throw Error(r(438,String(t)))}function _r(t){var e=null,n=ut.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var a=ut.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(s){return s.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=ps(),ut.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),a=0;a<t;a++)n[a]=vt;return e.index++,n}function fn(t,e){return typeof e=="function"?e(t):e}function ys(t){var e=qt();return Vr(e,At,t)}function Vr(t,e,n){var a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=n;var s=t.baseQueue,c=a.pending;if(c!==null){if(s!==null){var h=s.next;s.next=c.next,c.next=h}e.baseQueue=s=c,a.pending=null}if(c=t.baseState,s===null)t.memoizedState=c;else{e=s.next;var v=h=null,T=null,N=e,R=!1;do{var q=N.lane&-536870913;if(q!==N.lane?(pt&q)===q:(un&q)===q){var C=N.revertLane;if(C===0)T!==null&&(T=T.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),q===Yi&&(R=!0);else if((un&C)===C){N=N.next,C===Yi&&(R=!0);continue}else q={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},T===null?(v=T=q,h=c):T=T.next=q,ut.lanes|=C,Un|=C;q=N.action,mi&&n(c,q),c=N.hasEagerState?N.eagerState:n(c,q)}else C={lane:q,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},T===null?(v=T=C,h=c):T=T.next=C,ut.lanes|=q,Un|=q;N=N.next}while(N!==null&&N!==e);if(T===null?h=c:T.next=v,!Te(c,t.memoizedState)&&(Xt=!0,R&&(n=Gi,n!==null)))throw n;t.memoizedState=c,t.baseState=h,t.baseQueue=T,a.lastRenderedState=c}return s===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Ur(t){var e=qt(),n=e.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=t;var a=n.dispatch,s=n.pending,c=e.memoizedState;if(s!==null){n.pending=null;var h=s=s.next;do c=t(c,h.action),h=h.next;while(h!==s);Te(c,e.memoizedState)||(Xt=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),n.lastRenderedState=c}return[c,a]}function Kd(t,e,n){var a=ut,s=qt(),c=yt;if(c){if(n===void 0)throw Error(r(407));n=n()}else n=e();var h=!Te((At||s).memoizedState,n);if(h&&(s.memoizedState=n,Xt=!0),s=s.queue,Lr(Pd.bind(null,a,s,t),[t]),s.getSnapshot!==e||h||Gt!==null&&Gt.memoizedState.tag&1){if(a.flags|=2048,Fi(9,{destroy:void 0},Fd.bind(null,a,s,n,e),null),Et===null)throw Error(r(349));c||(un&127)!==0||Jd(a,e,n)}return n}function Jd(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ut.updateQueue,e===null?(e=ps(),ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Fd(t,e,n,a){e.value=n,e.getSnapshot=a,Wd(e)&&$d(t)}function Pd(t,e,n){return n(function(){Wd(e)&&$d(t)})}function Wd(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Te(t,n)}catch{return!0}}function $d(t){var e=li(t,2);e!==null&&ye(e,t,2)}function Br(t){var e=oe();if(typeof t=="function"){var n=t;if(t=n(),mi){wn(!0);try{n()}finally{wn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fn,lastRenderedState:t},e}function Id(t,e,n,a){return t.baseState=n,Vr(t,At,typeof a=="function"?a:fn)}function hv(t,e,n,a,s){if(bs(t))throw Error(r(485));if(t=e.action,t!==null){var c={payload:s,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){c.listeners.push(h)}};_.T!==null?n(!0):c.isTransition=!1,a(c),n=e.pending,n===null?(c.next=e.pending=c,th(e,c)):(c.next=n.next,e.pending=n.next=c)}}function th(t,e){var n=e.action,a=e.payload,s=t.state;if(e.isTransition){var c=_.T,h={};_.T=h;try{var v=n(s,a),T=_.S;T!==null&&T(h,v),eh(t,e,v)}catch(N){Hr(t,e,N)}finally{c!==null&&h.types!==null&&(c.types=h.types),_.T=c}}else try{c=n(s,a),eh(t,e,c)}catch(N){Hr(t,e,N)}}function eh(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){nh(t,e,a)},function(a){return Hr(t,e,a)}):nh(t,e,n)}function nh(t,e,n){e.status="fulfilled",e.value=n,ih(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,th(t,n)))}function Hr(t,e,n){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=n,ih(e),e=e.next;while(e!==a)}t.action=null}function ih(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function ah(t,e){return e}function lh(t,e){if(yt){var n=Et.formState;if(n!==null){t:{var a=ut;if(yt){if(Dt){e:{for(var s=Dt,c=_e;s.nodeType!==8;){if(!c){s=null;break e}if(s=Ue(s.nextSibling),s===null){s=null;break e}}c=s.data,s=c==="F!"||c==="F"?s:null}if(s){Dt=Ue(s.nextSibling),a=s.data==="F!";break t}}En(a)}a=!1}a&&(e=n[0])}}return n=oe(),n.memoizedState=n.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ah,lastRenderedState:e},n.queue=a,n=jh.bind(null,ut,a),a.dispatch=n,a=Br(!1),c=Qr.bind(null,ut,!1,a.queue),a=oe(),s={state:e,dispatch:null,action:t,pending:null},a.queue=s,n=hv.bind(null,ut,s,c,n),s.dispatch=n,a.memoizedState=t,[e,n,!1]}function sh(t){var e=qt();return oh(e,At,t)}function oh(t,e,n){if(e=Vr(t,e,ah)[0],t=ys(fn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Za(e)}catch(h){throw h===Xi?os:h}else a=e;e=qt();var s=e.queue,c=s.dispatch;return n!==e.memoizedState&&(ut.flags|=2048,Fi(9,{destroy:void 0},mv.bind(null,s,n),null)),[a,c,t]}function mv(t,e){t.action=e}function rh(t){var e=qt(),n=At;if(n!==null)return oh(e,n,t);qt(),e=e.memoizedState,n=qt();var a=n.queue.dispatch;return n.memoizedState=t,[e,a,!1]}function Fi(t,e,n,a){return t={tag:t,create:n,deps:a,inst:e,next:null},e=ut.updateQueue,e===null&&(e=ps(),ut.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(a=n.next,n.next=t,t.next=a,e.lastEffect=t),t}function ch(){return qt().memoizedState}function vs(t,e,n,a){var s=oe();ut.flags|=t,s.memoizedState=Fi(1|e,{destroy:void 0},n,a===void 0?null:a)}function xs(t,e,n,a){var s=qt();a=a===void 0?null:a;var c=s.memoizedState.inst;At!==null&&a!==null&&Cr(a,At.memoizedState.deps)?s.memoizedState=Fi(e,c,n,a):(ut.flags|=t,s.memoizedState=Fi(1|e,c,n,a))}function uh(t,e){vs(8390656,8,t,e)}function Lr(t,e){xs(2048,8,t,e)}function pv(t){ut.flags|=4;var e=ut.updateQueue;if(e===null)e=ps(),ut.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function fh(t){var e=qt().memoizedState;return pv({ref:e,nextImpl:t}),function(){if((St&2)!==0)throw Error(r(440));return e.impl.apply(void 0,arguments)}}function dh(t,e){return xs(4,2,t,e)}function hh(t,e){return xs(4,4,t,e)}function mh(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ph(t,e,n){n=n!=null?n.concat([t]):null,xs(4,4,mh.bind(null,e,t),n)}function qr(){}function gh(t,e){var n=qt();e=e===void 0?null:e;var a=n.memoizedState;return e!==null&&Cr(e,a[1])?a[0]:(n.memoizedState=[t,e],t)}function yh(t,e){var n=qt();e=e===void 0?null:e;var a=n.memoizedState;if(e!==null&&Cr(e,a[1]))return a[0];if(a=t(),mi){wn(!0);try{t()}finally{wn(!1)}}return n.memoizedState=[a,e],a}function Yr(t,e,n){return n===void 0||(un&1073741824)!==0&&(pt&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=vm(),ut.lanes|=t,Un|=t,n)}function vh(t,e,n,a){return Te(n,e)?n:Zi.current!==null?(t=Yr(t,n,a),Te(t,e)||(Xt=!0),t):(un&42)===0||(un&1073741824)!==0&&(pt&261930)===0?(Xt=!0,t.memoizedState=n):(t=vm(),ut.lanes|=t,Un|=t,e)}function xh(t,e,n,a,s){var c=V.p;V.p=c!==0&&8>c?c:8;var h=_.T,v={};_.T=v,Qr(t,!1,e,n);try{var T=s(),N=_.S;if(N!==null&&N(v,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var R=uv(T,a);Ka(t,e,R,Ee(t))}else Ka(t,e,a,Ee(t))}catch(q){Ka(t,e,{then:function(){},status:"rejected",reason:q},Ee())}finally{V.p=c,h!==null&&v.types!==null&&(h.types=v.types),_.T=h}}function gv(){}function Gr(t,e,n,a){if(t.tag!==5)throw Error(r(476));var s=bh(t).queue;xh(t,s,e,X,n===null?gv:function(){return Sh(t),n(a)})}function bh(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fn,lastRenderedState:X},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fn,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Sh(t){var e=bh(t);e.next===null&&(e=t.alternate.memoizedState),Ka(t,e.next.queue,{},Ee())}function Xr(){return It(ul)}function Th(){return qt().memoizedState}function wh(){return qt().memoizedState}function yv(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=Ee();t=Dn(n);var a=kn(e,t,n);a!==null&&(ye(a,e,n),Ya(a,e,n)),e={cache:xr()},t.payload=e;return}e=e.return}}function vv(t,e,n){var a=Ee();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},bs(t)?Ah(e,n):(n=rr(t,e,n,a),n!==null&&(ye(n,t,a),zh(n,e,a)))}function jh(t,e,n){var a=Ee();Ka(t,e,n,a)}function Ka(t,e,n,a){var s={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(bs(t))Ah(e,s);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var h=e.lastRenderedState,v=c(h,n);if(s.hasEagerState=!0,s.eagerState=v,Te(v,h))return ts(t,e,s,0),Et===null&&Il(),!1}catch{}if(n=rr(t,e,s,a),n!==null)return ye(n,t,a),zh(n,e,a),!0}return!1}function Qr(t,e,n,a){if(a={lane:2,revertLane:wc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},bs(t)){if(e)throw Error(r(479))}else e=rr(t,n,a,2),e!==null&&ye(e,t,2)}function bs(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function Ah(t,e){Ki=hs=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function zh(t,e,n){if((n&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,Df(t,n)}}var Ja={readContext:It,use:gs,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useLayoutEffect:Vt,useInsertionEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useSyncExternalStore:Vt,useId:Vt,useHostTransitionStatus:Vt,useFormState:Vt,useActionState:Vt,useOptimistic:Vt,useMemoCache:Vt,useCacheRefresh:Vt};Ja.useEffectEvent=Vt;var Mh={readContext:It,use:gs,useCallback:function(t,e){return oe().memoizedState=[t,e===void 0?null:e],t},useContext:It,useEffect:uh,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,vs(4194308,4,mh.bind(null,e,t),n)},useLayoutEffect:function(t,e){return vs(4194308,4,t,e)},useInsertionEffect:function(t,e){vs(4,2,t,e)},useMemo:function(t,e){var n=oe();e=e===void 0?null:e;var a=t();if(mi){wn(!0);try{t()}finally{wn(!1)}}return n.memoizedState=[a,e],a},useReducer:function(t,e,n){var a=oe();if(n!==void 0){var s=n(e);if(mi){wn(!0);try{n(e)}finally{wn(!1)}}}else s=e;return a.memoizedState=a.baseState=s,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:s},a.queue=t,t=t.dispatch=vv.bind(null,ut,t),[a.memoizedState,t]},useRef:function(t){var e=oe();return t={current:t},e.memoizedState=t},useState:function(t){t=Br(t);var e=t.queue,n=jh.bind(null,ut,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:qr,useDeferredValue:function(t,e){var n=oe();return Yr(n,t,e)},useTransition:function(){var t=Br(!1);return t=xh.bind(null,ut,t.queue,!0,!1),oe().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var a=ut,s=oe();if(yt){if(n===void 0)throw Error(r(407));n=n()}else{if(n=e(),Et===null)throw Error(r(349));(pt&127)!==0||Jd(a,e,n)}s.memoizedState=n;var c={value:n,getSnapshot:e};return s.queue=c,uh(Pd.bind(null,a,c,t),[t]),a.flags|=2048,Fi(9,{destroy:void 0},Fd.bind(null,a,c,n,e),null),n},useId:function(){var t=oe(),e=Et.identifierPrefix;if(yt){var n=Pe,a=Fe;n=(a&~(1<<32-Se(a)-1)).toString(32)+n,e="_"+e+"R_"+n,n=ms++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=fv++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Xr,useFormState:lh,useActionState:lh,useOptimistic:function(t){var e=oe();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Qr.bind(null,ut,!0,n),n.dispatch=e,[t,e]},useMemoCache:_r,useCacheRefresh:function(){return oe().memoizedState=yv.bind(null,ut)},useEffectEvent:function(t){var e=oe(),n={impl:t};return e.memoizedState=n,function(){if((St&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}},Zr={readContext:It,use:gs,useCallback:gh,useContext:It,useEffect:Lr,useImperativeHandle:ph,useInsertionEffect:dh,useLayoutEffect:hh,useMemo:yh,useReducer:ys,useRef:ch,useState:function(){return ys(fn)},useDebugValue:qr,useDeferredValue:function(t,e){var n=qt();return vh(n,At.memoizedState,t,e)},useTransition:function(){var t=ys(fn)[0],e=qt().memoizedState;return[typeof t=="boolean"?t:Za(t),e]},useSyncExternalStore:Kd,useId:Th,useHostTransitionStatus:Xr,useFormState:sh,useActionState:sh,useOptimistic:function(t,e){var n=qt();return Id(n,At,t,e)},useMemoCache:_r,useCacheRefresh:wh};Zr.useEffectEvent=fh;var Eh={readContext:It,use:gs,useCallback:gh,useContext:It,useEffect:Lr,useImperativeHandle:ph,useInsertionEffect:dh,useLayoutEffect:hh,useMemo:yh,useReducer:Ur,useRef:ch,useState:function(){return Ur(fn)},useDebugValue:qr,useDeferredValue:function(t,e){var n=qt();return At===null?Yr(n,t,e):vh(n,At.memoizedState,t,e)},useTransition:function(){var t=Ur(fn)[0],e=qt().memoizedState;return[typeof t=="boolean"?t:Za(t),e]},useSyncExternalStore:Kd,useId:Th,useHostTransitionStatus:Xr,useFormState:rh,useActionState:rh,useOptimistic:function(t,e){var n=qt();return At!==null?Id(n,At,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:_r,useCacheRefresh:wh};Eh.useEffectEvent=fh;function Kr(t,e,n,a){e=t.memoizedState,n=n(a,e),n=n==null?e:b({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jr={enqueueSetState:function(t,e,n){t=t._reactInternals;var a=Ee(),s=Dn(a);s.payload=e,n!=null&&(s.callback=n),e=kn(t,s,a),e!==null&&(ye(e,t,a),Ya(e,t,a))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var a=Ee(),s=Dn(a);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=kn(t,s,a),e!==null&&(ye(e,t,a),Ya(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ee(),a=Dn(n);a.tag=2,e!=null&&(a.callback=e),e=kn(t,a,n),e!==null&&(ye(e,t,n),Ya(e,t,n))}};function Nh(t,e,n,a,s,c,h){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,c,h):e.prototype&&e.prototype.isPureReactComponent?!Ra(n,a)||!Ra(s,c):!0}function Ch(t,e,n,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,a),e.state!==t&&Jr.enqueueReplaceState(e,e.state,null)}function pi(t,e){var n=e;if("ref"in e){n={};for(var a in e)a!=="ref"&&(n[a]=e[a])}if(t=t.defaultProps){n===e&&(n=b({},n));for(var s in t)n[s]===void 0&&(n[s]=t[s])}return n}function Dh(t){$l(t)}function kh(t){console.error(t)}function Oh(t){$l(t)}function Ss(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Rh(t,e,n){try{var a=t.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Fr(t,e,n){return n=Dn(n),n.tag=3,n.payload={element:null},n.callback=function(){Ss(t,e)},n}function _h(t){return t=Dn(t),t.tag=3,t}function Vh(t,e,n,a){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var c=a.value;t.payload=function(){return s(c)},t.callback=function(){Rh(e,n,a)}}var h=n.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(t.callback=function(){Rh(e,n,a),typeof s!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var v=a.stack;this.componentDidCatch(a.value,{componentStack:v!==null?v:""})})}function xv(t,e,n,a,s){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=n.alternate,e!==null&&qi(e,n,s,!0),n=je.current,n!==null){switch(n.tag){case 31:case 13:return Ve===null?Os():n.alternate===null&&Ut===0&&(Ut=3),n.flags&=-257,n.flags|=65536,n.lanes=s,a===rs?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([a]):e.add(a),bc(t,a,s)),!1;case 22:return n.flags|=65536,a===rs?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([a]):n.add(a)),bc(t,a,s)),!1}throw Error(r(435,n.tag))}return bc(t,a,s),Os(),!1}if(yt)return e=je.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=s,a!==mr&&(t=Error(r(422),{cause:a}),Ua(ke(t,n)))):(a!==mr&&(e=Error(r(423),{cause:a}),Ua(ke(e,n))),t=t.current.alternate,t.flags|=65536,s&=-s,t.lanes|=s,a=ke(a,n),s=Fr(t.stateNode,a,s),Ar(t,s),Ut!==4&&(Ut=2)),!1;var c=Error(r(520),{cause:a});if(c=ke(c,n),nl===null?nl=[c]:nl.push(c),Ut!==4&&(Ut=2),e===null)return!0;a=ke(a,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=s&-s,n.lanes|=t,t=Fr(n.stateNode,a,t),Ar(n,t),!1;case 1:if(e=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Bn===null||!Bn.has(c))))return n.flags|=65536,s&=-s,n.lanes|=s,s=_h(s),Vh(s,t,n,a),Ar(n,s),!1}n=n.return}while(n!==null);return!1}var Pr=Error(r(461)),Xt=!1;function te(t,e,n,a){e.child=t===null?Ld(e,null,n,a):hi(e,t.child,n,a)}function Uh(t,e,n,a,s){n=n.render;var c=e.ref;if("ref"in a){var h={};for(var v in a)v!=="ref"&&(h[v]=a[v])}else h=a;return ci(e),a=Dr(t,e,n,h,c,s),v=kr(),t!==null&&!Xt?(Or(t,e,s),dn(t,e,s)):(yt&&v&&dr(e),e.flags|=1,te(t,e,a,s),e.child)}function Bh(t,e,n,a,s){if(t===null){var c=n.type;return typeof c=="function"&&!cr(c)&&c.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=c,Hh(t,e,c,a,s)):(t=ns(n.type,null,a,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(c=t.child,!ac(t,s)){var h=c.memoizedProps;if(n=n.compare,n=n!==null?n:Ra,n(h,a)&&t.ref===e.ref)return dn(t,e,s)}return e.flags|=1,t=sn(c,a),t.ref=e.ref,t.return=e,e.child=t}function Hh(t,e,n,a,s){if(t!==null){var c=t.memoizedProps;if(Ra(c,a)&&t.ref===e.ref)if(Xt=!1,e.pendingProps=a=c,ac(t,s))(t.flags&131072)!==0&&(Xt=!0);else return e.lanes=t.lanes,dn(t,e,s)}return Wr(t,e,n,a,s)}function Lh(t,e,n,a){var s=a.children,c=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,t!==null){for(a=e.child=t.child,s=0;a!==null;)s=s|a.lanes|a.childLanes,a=a.sibling;a=s&~c}else a=0,e.child=null;return qh(t,e,c,n,a)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ss(e,c!==null?c.cachePool:null),c!==null?Gd(e,c):Mr(),Xd(e);else return a=e.lanes=536870912,qh(t,e,c!==null?c.baseLanes|n:n,n,a)}else c!==null?(ss(e,c.cachePool),Gd(e,c),Rn(),e.memoizedState=null):(t!==null&&ss(e,null),Mr(),Rn());return te(t,e,s,n),e.child}function Fa(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function qh(t,e,n,a,s){var c=Sr();return c=c===null?null:{parent:Yt._currentValue,pool:c},e.memoizedState={baseLanes:n,cachePool:c},t!==null&&ss(e,null),Mr(),Xd(e),t!==null&&qi(t,e,a,!0),e.childLanes=s,null}function Ts(t,e){return e=js({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Yh(t,e,n){return hi(e,t.child,null,n),t=Ts(e,e.pendingProps),t.flags|=2,Ae(e),e.memoizedState=null,t}function bv(t,e,n){var a=e.pendingProps,s=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(yt){if(a.mode==="hidden")return t=Ts(e,a),e.lanes=536870912,Fa(null,t);if(Nr(e),(t=Dt)?(t=tp(t,_e),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:zn!==null?{id:Fe,overflow:Pe}:null,retryLane:536870912,hydrationErrors:null},n=Ad(t),n.return=e,e.child=n,$t=e,Dt=null)):t=null,t===null)throw En(e);return e.lanes=536870912,null}return Ts(e,a)}var c=t.memoizedState;if(c!==null){var h=c.dehydrated;if(Nr(e),s)if(e.flags&256)e.flags&=-257,e=Yh(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(r(558));else if(Xt||qi(t,e,n,!1),s=(n&t.childLanes)!==0,Xt||s){if(a=Et,a!==null&&(h=kf(a,n),h!==0&&h!==c.retryLane))throw c.retryLane=h,li(t,h),ye(a,t,h),Pr;Os(),e=Yh(t,e,n)}else t=c.treeContext,Dt=Ue(h.nextSibling),$t=e,yt=!0,Mn=null,_e=!1,t!==null&&Ed(e,t),e=Ts(e,a),e.flags|=4096;return e}return t=sn(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function ws(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(r(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Wr(t,e,n,a,s){return ci(e),n=Dr(t,e,n,a,void 0,s),a=kr(),t!==null&&!Xt?(Or(t,e,s),dn(t,e,s)):(yt&&a&&dr(e),e.flags|=1,te(t,e,n,s),e.child)}function Gh(t,e,n,a,s,c){return ci(e),e.updateQueue=null,n=Zd(e,a,n,s),Qd(t),a=kr(),t!==null&&!Xt?(Or(t,e,c),dn(t,e,c)):(yt&&a&&dr(e),e.flags|=1,te(t,e,n,c),e.child)}function Xh(t,e,n,a,s){if(ci(e),e.stateNode===null){var c=Ui,h=n.contextType;typeof h=="object"&&h!==null&&(c=It(h)),c=new n(a,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Jr,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=a,c.state=e.memoizedState,c.refs={},wr(e),h=n.contextType,c.context=typeof h=="object"&&h!==null?It(h):Ui,c.state=e.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(Kr(e,n,h,a),c.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(h=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),h!==c.state&&Jr.enqueueReplaceState(c,c.state,null),Xa(e,a,c,s),Ga(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){c=e.stateNode;var v=e.memoizedProps,T=pi(n,v);c.props=T;var N=c.context,R=n.contextType;h=Ui,typeof R=="object"&&R!==null&&(h=It(R));var q=n.getDerivedStateFromProps;R=typeof q=="function"||typeof c.getSnapshotBeforeUpdate=="function",v=e.pendingProps!==v,R||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(v||N!==h)&&Ch(e,c,a,h),Cn=!1;var C=e.memoizedState;c.state=C,Xa(e,a,c,s),Ga(),N=e.memoizedState,v||C!==N||Cn?(typeof q=="function"&&(Kr(e,n,q,a),N=e.memoizedState),(T=Cn||Nh(e,n,T,a,C,N,h))?(R||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=N),c.props=a,c.state=N,c.context=h,a=T):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{c=e.stateNode,jr(t,e),h=e.memoizedProps,R=pi(n,h),c.props=R,q=e.pendingProps,C=c.context,N=n.contextType,T=Ui,typeof N=="object"&&N!==null&&(T=It(N)),v=n.getDerivedStateFromProps,(N=typeof v=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(h!==q||C!==T)&&Ch(e,c,a,T),Cn=!1,C=e.memoizedState,c.state=C,Xa(e,a,c,s),Ga();var D=e.memoizedState;h!==q||C!==D||Cn||t!==null&&t.dependencies!==null&&as(t.dependencies)?(typeof v=="function"&&(Kr(e,n,v,a),D=e.memoizedState),(R=Cn||Nh(e,n,R,a,C,D,T)||t!==null&&t.dependencies!==null&&as(t.dependencies))?(N||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(a,D,T),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(a,D,T)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||h===t.memoizedProps&&C===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===t.memoizedProps&&C===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=D),c.props=a,c.state=D,c.context=T,a=R):(typeof c.componentDidUpdate!="function"||h===t.memoizedProps&&C===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===t.memoizedProps&&C===t.memoizedState||(e.flags|=1024),a=!1)}return c=a,ws(t,e),a=(e.flags&128)!==0,c||a?(c=e.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,t!==null&&a?(e.child=hi(e,t.child,null,s),e.child=hi(e,null,n,s)):te(t,e,n,s),e.memoizedState=c.state,t=e.child):t=dn(t,e,s),t}function Qh(t,e,n,a){return oi(),e.flags|=256,te(t,e,n,a),e.child}var $r={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ir(t){return{baseLanes:t,cachePool:Rd()}}function tc(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Me),t}function Zh(t,e,n){var a=e.pendingProps,s=!1,c=(e.flags&128)!==0,h;if((h=c)||(h=t!==null&&t.memoizedState===null?!1:(Lt.current&2)!==0),h&&(s=!0,e.flags&=-129),h=(e.flags&32)!==0,e.flags&=-33,t===null){if(yt){if(s?On(e):Rn(),(t=Dt)?(t=tp(t,_e),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:zn!==null?{id:Fe,overflow:Pe}:null,retryLane:536870912,hydrationErrors:null},n=Ad(t),n.return=e,e.child=n,$t=e,Dt=null)):t=null,t===null)throw En(e);return Vc(t)?e.lanes=32:e.lanes=536870912,null}var v=a.children;return a=a.fallback,s?(Rn(),s=e.mode,v=js({mode:"hidden",children:v},s),a=si(a,s,n,null),v.return=e,a.return=e,v.sibling=a,e.child=v,a=e.child,a.memoizedState=Ir(n),a.childLanes=tc(t,h,n),e.memoizedState=$r,Fa(null,a)):(On(e),ec(e,v))}var T=t.memoizedState;if(T!==null&&(v=T.dehydrated,v!==null)){if(c)e.flags&256?(On(e),e.flags&=-257,e=nc(t,e,n)):e.memoizedState!==null?(Rn(),e.child=t.child,e.flags|=128,e=null):(Rn(),v=a.fallback,s=e.mode,a=js({mode:"visible",children:a.children},s),v=si(v,s,n,null),v.flags|=2,a.return=e,v.return=e,a.sibling=v,e.child=a,hi(e,t.child,null,n),a=e.child,a.memoizedState=Ir(n),a.childLanes=tc(t,h,n),e.memoizedState=$r,e=Fa(null,a));else if(On(e),Vc(v)){if(h=v.nextSibling&&v.nextSibling.dataset,h)var N=h.dgst;h=N,a=Error(r(419)),a.stack="",a.digest=h,Ua({value:a,source:null,stack:null}),e=nc(t,e,n)}else if(Xt||qi(t,e,n,!1),h=(n&t.childLanes)!==0,Xt||h){if(h=Et,h!==null&&(a=kf(h,n),a!==0&&a!==T.retryLane))throw T.retryLane=a,li(t,a),ye(h,t,a),Pr;_c(v)||Os(),e=nc(t,e,n)}else _c(v)?(e.flags|=192,e.child=t.child,e=null):(t=T.treeContext,Dt=Ue(v.nextSibling),$t=e,yt=!0,Mn=null,_e=!1,t!==null&&Ed(e,t),e=ec(e,a.children),e.flags|=4096);return e}return s?(Rn(),v=a.fallback,s=e.mode,T=t.child,N=T.sibling,a=sn(T,{mode:"hidden",children:a.children}),a.subtreeFlags=T.subtreeFlags&65011712,N!==null?v=sn(N,v):(v=si(v,s,n,null),v.flags|=2),v.return=e,a.return=e,a.sibling=v,e.child=a,Fa(null,a),a=e.child,v=t.child.memoizedState,v===null?v=Ir(n):(s=v.cachePool,s!==null?(T=Yt._currentValue,s=s.parent!==T?{parent:T,pool:T}:s):s=Rd(),v={baseLanes:v.baseLanes|n,cachePool:s}),a.memoizedState=v,a.childLanes=tc(t,h,n),e.memoizedState=$r,Fa(t.child,a)):(On(e),n=t.child,t=n.sibling,n=sn(n,{mode:"visible",children:a.children}),n.return=e,n.sibling=null,t!==null&&(h=e.deletions,h===null?(e.deletions=[t],e.flags|=16):h.push(t)),e.child=n,e.memoizedState=null,n)}function ec(t,e){return e=js({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function js(t,e){return t=we(22,t,null,e),t.lanes=0,t}function nc(t,e,n){return hi(e,t.child,null,n),t=ec(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Kh(t,e,n){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),yr(t.return,e,n)}function ic(t,e,n,a,s,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:s,treeForkCount:c}:(h.isBackwards=e,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=n,h.tailMode=s,h.treeForkCount=c)}function Jh(t,e,n){var a=e.pendingProps,s=a.revealOrder,c=a.tail;a=a.children;var h=Lt.current,v=(h&2)!==0;if(v?(h=h&1|2,e.flags|=128):h&=1,K(Lt,h),te(t,e,a,n),a=yt?Va:0,!v&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Kh(t,n,e);else if(t.tag===19)Kh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&ds(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),ic(e,!1,s,n,c,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&ds(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}ic(e,!0,n,null,c,a);break;case"together":ic(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function dn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Un|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(qi(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(r(153));if(e.child!==null){for(t=e.child,n=sn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ac(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&as(t)))}function Sv(t,e,n){switch(e.tag){case 3:se(e,e.stateNode.containerInfo),Nn(e,Yt,t.memoizedState.cache),oi();break;case 27:case 5:Sa(e);break;case 4:se(e,e.stateNode.containerInfo);break;case 10:Nn(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Nr(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(On(e),e.flags|=128,null):(n&e.child.childLanes)!==0?Zh(t,e,n):(On(e),t=dn(t,e,n),t!==null?t.sibling:null);On(e);break;case 19:var s=(t.flags&128)!==0;if(a=(n&e.childLanes)!==0,a||(qi(t,e,n,!1),a=(n&e.childLanes)!==0),s){if(a)return Jh(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),K(Lt,Lt.current),a)break;return null;case 22:return e.lanes=0,Lh(t,e,n,e.pendingProps);case 24:Nn(e,Yt,t.memoizedState.cache)}return dn(t,e,n)}function Fh(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Xt=!0;else{if(!ac(t,n)&&(e.flags&128)===0)return Xt=!1,Sv(t,e,n);Xt=(t.flags&131072)!==0}else Xt=!1,yt&&(e.flags&1048576)!==0&&Md(e,Va,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=fi(e.elementType),e.type=t,typeof t=="function")cr(t)?(a=pi(t,a),e.tag=1,e=Xh(null,e,t,a,n)):(e.tag=0,e=Wr(null,e,t,a,n));else{if(t!=null){var s=t.$$typeof;if(s===F){e.tag=11,e=Uh(null,e,t,a,n);break t}else if(s===W){e.tag=14,e=Bh(null,e,t,a,n);break t}}throw e=ue(t)||t,Error(r(306,e,""))}}return e;case 0:return Wr(t,e,e.type,e.pendingProps,n);case 1:return a=e.type,s=pi(a,e.pendingProps),Xh(t,e,a,s,n);case 3:t:{if(se(e,e.stateNode.containerInfo),t===null)throw Error(r(387));a=e.pendingProps;var c=e.memoizedState;s=c.element,jr(t,e),Xa(e,a,null,n);var h=e.memoizedState;if(a=h.cache,Nn(e,Yt,a),a!==c.cache&&vr(e,[Yt],n,!0),Ga(),a=h.element,c.isDehydrated)if(c={element:a,isDehydrated:!1,cache:h.cache},e.updateQueue.baseState=c,e.memoizedState=c,e.flags&256){e=Qh(t,e,a,n);break t}else if(a!==s){s=ke(Error(r(424)),e),Ua(s),e=Qh(t,e,a,n);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Dt=Ue(t.firstChild),$t=e,yt=!0,Mn=null,_e=!0,n=Ld(e,null,a,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(oi(),a===s){e=dn(t,e,n);break t}te(t,e,a,n)}e=e.child}return e;case 26:return ws(t,e),t===null?(n=sp(e.type,null,e.pendingProps,null))?e.memoizedState=n:yt||(n=e.type,t=e.pendingProps,a=Ls(dt.current).createElement(n),a[Wt]=e,a[fe]=t,ee(a,n,t),Ft(a),e.stateNode=a):e.memoizedState=sp(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Sa(e),t===null&&yt&&(a=e.stateNode=ip(e.type,e.pendingProps,dt.current),$t=e,_e=!0,s=Dt,Yn(e.type)?(Uc=s,Dt=Ue(a.firstChild)):Dt=s),te(t,e,e.pendingProps.children,n),ws(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&yt&&((s=a=Dt)&&(a=Wv(a,e.type,e.pendingProps,_e),a!==null?(e.stateNode=a,$t=e,Dt=Ue(a.firstChild),_e=!1,s=!0):s=!1),s||En(e)),Sa(e),s=e.type,c=e.pendingProps,h=t!==null?t.memoizedProps:null,a=c.children,kc(s,c)?a=null:h!==null&&kc(s,h)&&(e.flags|=32),e.memoizedState!==null&&(s=Dr(t,e,dv,null,null,n),ul._currentValue=s),ws(t,e),te(t,e,a,n),e.child;case 6:return t===null&&yt&&((t=n=Dt)&&(n=$v(n,e.pendingProps,_e),n!==null?(e.stateNode=n,$t=e,Dt=null,t=!0):t=!1),t||En(e)),null;case 13:return Zh(t,e,n);case 4:return se(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=hi(e,null,a,n):te(t,e,a,n),e.child;case 11:return Uh(t,e,e.type,e.pendingProps,n);case 7:return te(t,e,e.pendingProps,n),e.child;case 8:return te(t,e,e.pendingProps.children,n),e.child;case 12:return te(t,e,e.pendingProps.children,n),e.child;case 10:return a=e.pendingProps,Nn(e,e.type,a.value),te(t,e,a.children,n),e.child;case 9:return s=e.type._context,a=e.pendingProps.children,ci(e),s=It(s),a=a(s),e.flags|=1,te(t,e,a,n),e.child;case 14:return Bh(t,e,e.type,e.pendingProps,n);case 15:return Hh(t,e,e.type,e.pendingProps,n);case 19:return Jh(t,e,n);case 31:return bv(t,e,n);case 22:return Lh(t,e,n,e.pendingProps);case 24:return ci(e),a=It(Yt),t===null?(s=Sr(),s===null&&(s=Et,c=xr(),s.pooledCache=c,c.refCount++,c!==null&&(s.pooledCacheLanes|=n),s=c),e.memoizedState={parent:a,cache:s},wr(e),Nn(e,Yt,s)):((t.lanes&n)!==0&&(jr(t,e),Xa(e,null,null,n),Ga()),s=t.memoizedState,c=e.memoizedState,s.parent!==a?(s={parent:a,cache:a},e.memoizedState=s,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=s),Nn(e,Yt,a)):(a=c.cache,Nn(e,Yt,a),a!==s.cache&&vr(e,[Yt],n,!0))),te(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}function hn(t){t.flags|=4}function lc(t,e,n,a,s){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(s&335544128)===s)if(t.stateNode.complete)t.flags|=8192;else if(Tm())t.flags|=8192;else throw di=rs,Tr}else t.flags&=-16777217}function Ph(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!fp(e))if(Tm())t.flags|=8192;else throw di=rs,Tr}function As(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Nf():536870912,t.lanes|=e,Ii|=e)}function Pa(t,e){if(!yt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,a=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,a|=s.subtreeFlags&65011712,a|=s.flags&65011712,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,a|=s.subtreeFlags,a|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=a,t.childLanes=n,e}function Tv(t,e,n){var a=e.pendingProps;switch(hr(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return kt(e),null;case 3:return n=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),cn(Yt),Ht(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Li(e)?hn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,pr())),kt(e),null;case 26:var s=e.type,c=e.memoizedState;return t===null?(hn(e),c!==null?(kt(e),Ph(e,c)):(kt(e),lc(e,s,null,a,n))):c?c!==t.memoizedState?(hn(e),kt(e),Ph(e,c)):(kt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&hn(e),kt(e),lc(e,s,t,a,n)),null;case 27:if(Vl(e),n=dt.current,s=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&hn(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return kt(e),null}t=tt.current,Li(e)?Nd(e):(t=ip(s,a,n),e.stateNode=t,hn(e))}return kt(e),null;case 5:if(Vl(e),s=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&hn(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return kt(e),null}if(c=tt.current,Li(e))Nd(e);else{var h=Ls(dt.current);switch(c){case 1:c=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:c=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":c=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":c=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":c=h.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof a.is=="string"?h.createElement("select",{is:a.is}):h.createElement("select"),a.multiple?c.multiple=!0:a.size&&(c.size=a.size);break;default:c=typeof a.is=="string"?h.createElement(s,{is:a.is}):h.createElement(s)}}c[Wt]=e,c[fe]=a;t:for(h=e.child;h!==null;){if(h.tag===5||h.tag===6)c.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break t;for(;h.sibling===null;){if(h.return===null||h.return===e)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}e.stateNode=c;t:switch(ee(c,s,a),s){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&hn(e)}}return kt(e),lc(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&hn(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(r(166));if(t=dt.current,Li(e)){if(t=e.stateNode,n=e.memoizedProps,a=null,s=$t,s!==null)switch(s.tag){case 27:case 5:a=s.memoizedProps}t[Wt]=e,t=!!(t.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Zm(t.nodeValue,n)),t||En(e,!0)}else t=Ls(t).createTextNode(a),t[Wt]=e,e.stateNode=t}return kt(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(a=Li(e),n!==null){if(t===null){if(!a)throw Error(r(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Wt]=e}else oi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;kt(e),t=!1}else n=pr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(Ae(e),e):(Ae(e),null);if((e.flags&128)!==0)throw Error(r(558))}return kt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(s=Li(e),a!==null&&a.dehydrated!==null){if(t===null){if(!s)throw Error(r(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(r(317));s[Wt]=e}else oi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else s=pr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),s=!0;if(!s)return e.flags&256?(Ae(e),e):(Ae(e),null)}return Ae(e),(e.flags&128)!==0?(e.lanes=n,e):(n=a!==null,t=t!==null&&t.memoizedState!==null,n&&(a=e.child,s=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(s=a.alternate.memoizedState.cachePool.pool),c=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==s&&(a.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),As(e,e.updateQueue),kt(e),null);case 4:return Ht(),t===null&&Mc(e.stateNode.containerInfo),kt(e),null;case 10:return cn(e.type),kt(e),null;case 19:if(H(Lt),a=e.memoizedState,a===null)return kt(e),null;if(s=(e.flags&128)!==0,c=a.rendering,c===null)if(s)Pa(a,!1);else{if(Ut!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(c=ds(t),c!==null){for(e.flags|=128,Pa(a,!1),t=c.updateQueue,e.updateQueue=t,As(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)jd(n,t),n=n.sibling;return K(Lt,Lt.current&1|2),yt&&on(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&xe()>Cs&&(e.flags|=128,s=!0,Pa(a,!1),e.lanes=4194304)}else{if(!s)if(t=ds(c),t!==null){if(e.flags|=128,s=!0,t=t.updateQueue,e.updateQueue=t,As(e,t),Pa(a,!0),a.tail===null&&a.tailMode==="hidden"&&!c.alternate&&!yt)return kt(e),null}else 2*xe()-a.renderingStartTime>Cs&&n!==536870912&&(e.flags|=128,s=!0,Pa(a,!1),e.lanes=4194304);a.isBackwards?(c.sibling=e.child,e.child=c):(t=a.last,t!==null?t.sibling=c:e.child=c,a.last=c)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=xe(),t.sibling=null,n=Lt.current,K(Lt,s?n&1|2:n&1),yt&&on(e,a.treeForkCount),t):(kt(e),null);case 22:case 23:return Ae(e),Er(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(n&536870912)!==0&&(e.flags&128)===0&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),n=e.updateQueue,n!==null&&As(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==n&&(e.flags|=2048),t!==null&&H(ui),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),cn(Yt),kt(e),null;case 25:return null;case 30:return null}throw Error(r(156,e.tag))}function wv(t,e){switch(hr(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return cn(Yt),Ht(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Vl(e),null;case 31:if(e.memoizedState!==null){if(Ae(e),e.alternate===null)throw Error(r(340));oi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Ae(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(r(340));oi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return H(Lt),null;case 4:return Ht(),null;case 10:return cn(e.type),null;case 22:case 23:return Ae(e),Er(),t!==null&&H(ui),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return cn(Yt),null;case 25:return null;default:return null}}function Wh(t,e){switch(hr(e),e.tag){case 3:cn(Yt),Ht();break;case 26:case 27:case 5:Vl(e);break;case 4:Ht();break;case 31:e.memoizedState!==null&&Ae(e);break;case 13:Ae(e);break;case 19:H(Lt);break;case 10:cn(e.type);break;case 22:case 23:Ae(e),Er(),t!==null&&H(ui);break;case 24:cn(Yt)}}function Wa(t,e){try{var n=e.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var s=a.next;n=s;do{if((n.tag&t)===t){a=void 0;var c=n.create,h=n.inst;a=c(),h.destroy=a}n=n.next}while(n!==s)}}catch(v){jt(e,e.return,v)}}function _n(t,e,n){try{var a=e.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){var h=a.inst,v=h.destroy;if(v!==void 0){h.destroy=void 0,s=e;var T=n,N=v;try{N()}catch(R){jt(s,T,R)}}}a=a.next}while(a!==c)}}catch(R){jt(e,e.return,R)}}function $h(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Yd(e,n)}catch(a){jt(t,t.return,a)}}}function Ih(t,e,n){n.props=pi(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(a){jt(t,e,a)}}function $a(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof n=="function"?t.refCleanup=n(a):n.current=a}}catch(s){jt(t,e,s)}}function We(t,e){var n=t.ref,a=t.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(s){jt(t,e,s)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){jt(t,e,s)}else n.current=null}function tm(t){var e=t.type,n=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break t;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(s){jt(t,t.return,s)}}function sc(t,e,n){try{var a=t.stateNode;Qv(a,t.type,n,e),a[fe]=e}catch(s){jt(t,t.return,s)}}function em(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Yn(t.type)||t.tag===4}function oc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||em(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Yn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rc(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=an));else if(a!==4&&(a===27&&Yn(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(rc(t,e,n),t=t.sibling;t!==null;)rc(t,e,n),t=t.sibling}function zs(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(a!==4&&(a===27&&Yn(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(zs(t,e,n),t=t.sibling;t!==null;)zs(t,e,n),t=t.sibling}function nm(t){var e=t.stateNode,n=t.memoizedProps;try{for(var a=t.type,s=e.attributes;s.length;)e.removeAttributeNode(s[0]);ee(e,a,n),e[Wt]=t,e[fe]=n}catch(c){jt(t,t.return,c)}}var mn=!1,Qt=!1,cc=!1,im=typeof WeakSet=="function"?WeakSet:Set,Pt=null;function jv(t,e){if(t=t.containerInfo,Cc=Ks,t=pd(t),nr(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var s=a.anchorOffset,c=a.focusNode;a=a.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break t}var h=0,v=-1,T=-1,N=0,R=0,q=t,C=null;e:for(;;){for(var D;q!==n||s!==0&&q.nodeType!==3||(v=h+s),q!==c||a!==0&&q.nodeType!==3||(T=h+a),q.nodeType===3&&(h+=q.nodeValue.length),(D=q.firstChild)!==null;)C=q,q=D;for(;;){if(q===t)break e;if(C===n&&++N===s&&(v=h),C===c&&++R===a&&(T=h),(D=q.nextSibling)!==null)break;q=C,C=q.parentNode}q=D}n=v===-1||T===-1?null:{start:v,end:T}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dc={focusedElem:t,selectionRange:n},Ks=!1,Pt=e;Pt!==null;)if(e=Pt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Pt=t;else for(;Pt!==null;){switch(e=Pt,c=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)s=t[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&c!==null){t=void 0,n=e,s=c.memoizedProps,c=c.memoizedState,a=n.stateNode;try{var P=pi(n.type,s);t=a.getSnapshotBeforeUpdate(P,c),a.__reactInternalSnapshotBeforeUpdate=t}catch(at){jt(n,n.return,at)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Rc(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Rc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=e.sibling,t!==null){t.return=e.return,Pt=t;break}Pt=e.return}}function am(t,e,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:gn(t,n),a&4&&Wa(5,n);break;case 1:if(gn(t,n),a&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(h){jt(n,n.return,h)}else{var s=pi(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(s,e,t.__reactInternalSnapshotBeforeUpdate)}catch(h){jt(n,n.return,h)}}a&64&&$h(n),a&512&&$a(n,n.return);break;case 3:if(gn(t,n),a&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Yd(t,e)}catch(h){jt(n,n.return,h)}}break;case 27:e===null&&a&4&&nm(n);case 26:case 5:gn(t,n),e===null&&a&4&&tm(n),a&512&&$a(n,n.return);break;case 12:gn(t,n);break;case 31:gn(t,n),a&4&&om(t,n);break;case 13:gn(t,n),a&4&&rm(t,n),a&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=Ov.bind(null,n),Iv(t,n))));break;case 22:if(a=n.memoizedState!==null||mn,!a){e=e!==null&&e.memoizedState!==null||Qt,s=mn;var c=Qt;mn=a,(Qt=e)&&!c?yn(t,n,(n.subtreeFlags&8772)!==0):gn(t,n),mn=s,Qt=c}break;case 30:break;default:gn(t,n)}}function lm(t){var e=t.alternate;e!==null&&(t.alternate=null,lm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Ho(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ot=null,he=!1;function pn(t,e,n){for(n=n.child;n!==null;)sm(t,e,n),n=n.sibling}function sm(t,e,n){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(Ta,n)}catch{}switch(n.tag){case 26:Qt||We(n,e),pn(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Qt||We(n,e);var a=Ot,s=he;Yn(n.type)&&(Ot=n.stateNode,he=!1),pn(t,e,n),ol(n.stateNode),Ot=a,he=s;break;case 5:Qt||We(n,e);case 6:if(a=Ot,s=he,Ot=null,pn(t,e,n),Ot=a,he=s,Ot!==null)if(he)try{(Ot.nodeType===9?Ot.body:Ot.nodeName==="HTML"?Ot.ownerDocument.body:Ot).removeChild(n.stateNode)}catch(c){jt(n,e,c)}else try{Ot.removeChild(n.stateNode)}catch(c){jt(n,e,c)}break;case 18:Ot!==null&&(he?(t=Ot,$m(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),oa(t)):$m(Ot,n.stateNode));break;case 4:a=Ot,s=he,Ot=n.stateNode.containerInfo,he=!0,pn(t,e,n),Ot=a,he=s;break;case 0:case 11:case 14:case 15:_n(2,n,e),Qt||_n(4,n,e),pn(t,e,n);break;case 1:Qt||(We(n,e),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Ih(n,e,a)),pn(t,e,n);break;case 21:pn(t,e,n);break;case 22:Qt=(a=Qt)||n.memoizedState!==null,pn(t,e,n),Qt=a;break;default:pn(t,e,n)}}function om(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{oa(t)}catch(n){jt(e,e.return,n)}}}function rm(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{oa(t)}catch(n){jt(e,e.return,n)}}function Av(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new im),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new im),e;default:throw Error(r(435,t.tag))}}function Ms(t,e){var n=Av(t);e.forEach(function(a){if(!n.has(a)){n.add(a);var s=Rv.bind(null,t,a);a.then(s,s)}})}function me(t,e){var n=e.deletions;if(n!==null)for(var a=0;a<n.length;a++){var s=n[a],c=t,h=e,v=h;t:for(;v!==null;){switch(v.tag){case 27:if(Yn(v.type)){Ot=v.stateNode,he=!1;break t}break;case 5:Ot=v.stateNode,he=!1;break t;case 3:case 4:Ot=v.stateNode.containerInfo,he=!0;break t}v=v.return}if(Ot===null)throw Error(r(160));sm(c,h,s),Ot=null,he=!1,c=s.alternate,c!==null&&(c.return=null),s.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)cm(e,t),e=e.sibling}var Ye=null;function cm(t,e){var n=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:me(e,t),pe(t),a&4&&(_n(3,t,t.return),Wa(3,t),_n(5,t,t.return));break;case 1:me(e,t),pe(t),a&512&&(Qt||n===null||We(n,n.return)),a&64&&mn&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var s=Ye;if(me(e,t),pe(t),a&512&&(Qt||n===null||We(n,n.return)),a&4){var c=n!==null?n.memoizedState:null;if(a=t.memoizedState,n===null)if(a===null)if(t.stateNode===null){t:{a=t.type,n=t.memoizedProps,s=s.ownerDocument||s;e:switch(a){case"title":c=s.getElementsByTagName("title")[0],(!c||c[Aa]||c[Wt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=s.createElement(a),s.head.insertBefore(c,s.querySelector("head > title"))),ee(c,a,n),c[Wt]=t,Ft(c),a=c;break t;case"link":var h=cp("link","href",s).get(a+(n.href||""));if(h){for(var v=0;v<h.length;v++)if(c=h[v],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){h.splice(v,1);break e}}c=s.createElement(a),ee(c,a,n),s.head.appendChild(c);break;case"meta":if(h=cp("meta","content",s).get(a+(n.content||""))){for(v=0;v<h.length;v++)if(c=h[v],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){h.splice(v,1);break e}}c=s.createElement(a),ee(c,a,n),s.head.appendChild(c);break;default:throw Error(r(468,a))}c[Wt]=t,Ft(c),a=c}t.stateNode=a}else up(s,t.type,t.stateNode);else t.stateNode=rp(s,a,t.memoizedProps);else c!==a?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,a===null?up(s,t.type,t.stateNode):rp(s,a,t.memoizedProps)):a===null&&t.stateNode!==null&&sc(t,t.memoizedProps,n.memoizedProps)}break;case 27:me(e,t),pe(t),a&512&&(Qt||n===null||We(n,n.return)),n!==null&&a&4&&sc(t,t.memoizedProps,n.memoizedProps);break;case 5:if(me(e,t),pe(t),a&512&&(Qt||n===null||We(n,n.return)),t.flags&32){s=t.stateNode;try{Ci(s,"")}catch(P){jt(t,t.return,P)}}a&4&&t.stateNode!=null&&(s=t.memoizedProps,sc(t,s,n!==null?n.memoizedProps:s)),a&1024&&(cc=!0);break;case 6:if(me(e,t),pe(t),a&4){if(t.stateNode===null)throw Error(r(162));a=t.memoizedProps,n=t.stateNode;try{n.nodeValue=a}catch(P){jt(t,t.return,P)}}break;case 3:if(Gs=null,s=Ye,Ye=qs(e.containerInfo),me(e,t),Ye=s,pe(t),a&4&&n!==null&&n.memoizedState.isDehydrated)try{oa(e.containerInfo)}catch(P){jt(t,t.return,P)}cc&&(cc=!1,um(t));break;case 4:a=Ye,Ye=qs(t.stateNode.containerInfo),me(e,t),pe(t),Ye=a;break;case 12:me(e,t),pe(t);break;case 31:me(e,t),pe(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Ms(t,a)));break;case 13:me(e,t),pe(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ns=xe()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Ms(t,a)));break;case 22:s=t.memoizedState!==null;var T=n!==null&&n.memoizedState!==null,N=mn,R=Qt;if(mn=N||s,Qt=R||T,me(e,t),Qt=R,mn=N,pe(t),a&8192)t:for(e=t.stateNode,e._visibility=s?e._visibility&-2:e._visibility|1,s&&(n===null||T||mn||Qt||gi(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){T=n=e;try{if(c=T.stateNode,s)h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{v=T.stateNode;var q=T.memoizedProps.style,C=q!=null&&q.hasOwnProperty("display")?q.display:null;v.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(P){jt(T,T.return,P)}}}else if(e.tag===6){if(n===null){T=e;try{T.stateNode.nodeValue=s?"":T.memoizedProps}catch(P){jt(T,T.return,P)}}}else if(e.tag===18){if(n===null){T=e;try{var D=T.stateNode;s?Im(D,!0):Im(T.stateNode,!1)}catch(P){jt(T,T.return,P)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Ms(t,n))));break;case 19:me(e,t),pe(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Ms(t,a)));break;case 30:break;case 21:break;default:me(e,t),pe(t)}}function pe(t){var e=t.flags;if(e&2){try{for(var n,a=t.return;a!==null;){if(em(a)){n=a;break}a=a.return}if(n==null)throw Error(r(160));switch(n.tag){case 27:var s=n.stateNode,c=oc(t);zs(t,c,s);break;case 5:var h=n.stateNode;n.flags&32&&(Ci(h,""),n.flags&=-33);var v=oc(t);zs(t,v,h);break;case 3:case 4:var T=n.stateNode.containerInfo,N=oc(t);rc(t,N,T);break;default:throw Error(r(161))}}catch(R){jt(t,t.return,R)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function um(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;um(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function gn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)am(t,e.alternate,e),e=e.sibling}function gi(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:_n(4,e,e.return),gi(e);break;case 1:We(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&Ih(e,e.return,n),gi(e);break;case 27:ol(e.stateNode);case 26:case 5:We(e,e.return),gi(e);break;case 22:e.memoizedState===null&&gi(e);break;case 30:gi(e);break;default:gi(e)}t=t.sibling}}function yn(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,s=t,c=e,h=c.flags;switch(c.tag){case 0:case 11:case 15:yn(s,c,n),Wa(4,c);break;case 1:if(yn(s,c,n),a=c,s=a.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(N){jt(a,a.return,N)}if(a=c,s=a.updateQueue,s!==null){var v=a.stateNode;try{var T=s.shared.hiddenCallbacks;if(T!==null)for(s.shared.hiddenCallbacks=null,s=0;s<T.length;s++)qd(T[s],v)}catch(N){jt(a,a.return,N)}}n&&h&64&&$h(c),$a(c,c.return);break;case 27:nm(c);case 26:case 5:yn(s,c,n),n&&a===null&&h&4&&tm(c),$a(c,c.return);break;case 12:yn(s,c,n);break;case 31:yn(s,c,n),n&&h&4&&om(s,c);break;case 13:yn(s,c,n),n&&h&4&&rm(s,c);break;case 22:c.memoizedState===null&&yn(s,c,n),$a(c,c.return);break;case 30:break;default:yn(s,c,n)}e=e.sibling}}function uc(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Ba(n))}function fc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ba(t))}function Ge(t,e,n,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)fm(t,e,n,a),e=e.sibling}function fm(t,e,n,a){var s=e.flags;switch(e.tag){case 0:case 11:case 15:Ge(t,e,n,a),s&2048&&Wa(9,e);break;case 1:Ge(t,e,n,a);break;case 3:Ge(t,e,n,a),s&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ba(t)));break;case 12:if(s&2048){Ge(t,e,n,a),t=e.stateNode;try{var c=e.memoizedProps,h=c.id,v=c.onPostCommit;typeof v=="function"&&v(h,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(T){jt(e,e.return,T)}}else Ge(t,e,n,a);break;case 31:Ge(t,e,n,a);break;case 13:Ge(t,e,n,a);break;case 23:break;case 22:c=e.stateNode,h=e.alternate,e.memoizedState!==null?c._visibility&2?Ge(t,e,n,a):Ia(t,e):c._visibility&2?Ge(t,e,n,a):(c._visibility|=2,Pi(t,e,n,a,(e.subtreeFlags&10256)!==0||!1)),s&2048&&uc(h,e);break;case 24:Ge(t,e,n,a),s&2048&&fc(e.alternate,e);break;default:Ge(t,e,n,a)}}function Pi(t,e,n,a,s){for(s=s&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var c=t,h=e,v=n,T=a,N=h.flags;switch(h.tag){case 0:case 11:case 15:Pi(c,h,v,T,s),Wa(8,h);break;case 23:break;case 22:var R=h.stateNode;h.memoizedState!==null?R._visibility&2?Pi(c,h,v,T,s):Ia(c,h):(R._visibility|=2,Pi(c,h,v,T,s)),s&&N&2048&&uc(h.alternate,h);break;case 24:Pi(c,h,v,T,s),s&&N&2048&&fc(h.alternate,h);break;default:Pi(c,h,v,T,s)}e=e.sibling}}function Ia(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,a=e,s=a.flags;switch(a.tag){case 22:Ia(n,a),s&2048&&uc(a.alternate,a);break;case 24:Ia(n,a),s&2048&&fc(a.alternate,a);break;default:Ia(n,a)}e=e.sibling}}var tl=8192;function Wi(t,e,n){if(t.subtreeFlags&tl)for(t=t.child;t!==null;)dm(t,e,n),t=t.sibling}function dm(t,e,n){switch(t.tag){case 26:Wi(t,e,n),t.flags&tl&&t.memoizedState!==null&&fx(n,Ye,t.memoizedState,t.memoizedProps);break;case 5:Wi(t,e,n);break;case 3:case 4:var a=Ye;Ye=qs(t.stateNode.containerInfo),Wi(t,e,n),Ye=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=tl,tl=16777216,Wi(t,e,n),tl=a):Wi(t,e,n));break;default:Wi(t,e,n)}}function hm(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function el(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];Pt=a,pm(a,t)}hm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)mm(t),t=t.sibling}function mm(t){switch(t.tag){case 0:case 11:case 15:el(t),t.flags&2048&&_n(9,t,t.return);break;case 3:el(t);break;case 12:el(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Es(t)):el(t);break;default:el(t)}}function Es(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];Pt=a,pm(a,t)}hm(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:_n(8,e,e.return),Es(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Es(e));break;default:Es(e)}t=t.sibling}}function pm(t,e){for(;Pt!==null;){var n=Pt;switch(n.tag){case 0:case 11:case 15:_n(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ba(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Pt=a;else t:for(n=t;Pt!==null;){a=Pt;var s=a.sibling,c=a.return;if(lm(a),a===n){Pt=null;break t}if(s!==null){s.return=c,Pt=s;break t}Pt=c}}}var zv={getCacheForType:function(t){var e=It(Yt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return It(Yt).controller.signal}},Mv=typeof WeakMap=="function"?WeakMap:Map,St=0,Et=null,ht=null,pt=0,wt=0,ze=null,Vn=!1,$i=!1,dc=!1,vn=0,Ut=0,Un=0,yi=0,hc=0,Me=0,Ii=0,nl=null,ge=null,mc=!1,Ns=0,gm=0,Cs=1/0,Ds=null,Bn=null,Kt=0,Hn=null,ta=null,xn=0,pc=0,gc=null,ym=null,il=0,yc=null;function Ee(){return(St&2)!==0&&pt!==0?pt&-pt:_.T!==null?wc():Of()}function vm(){if(Me===0)if((pt&536870912)===0||yt){var t=Hl;Hl<<=1,(Hl&3932160)===0&&(Hl=262144),Me=t}else Me=536870912;return t=je.current,t!==null&&(t.flags|=32),Me}function ye(t,e,n){(t===Et&&(wt===2||wt===9)||t.cancelPendingCommit!==null)&&(ea(t,0),Ln(t,pt,Me,!1)),ja(t,n),((St&2)===0||t!==Et)&&(t===Et&&((St&2)===0&&(yi|=n),Ut===4&&Ln(t,pt,Me,!1)),$e(t))}function xm(t,e,n){if((St&6)!==0)throw Error(r(327));var a=!n&&(e&127)===0&&(e&t.expiredLanes)===0||wa(t,e),s=a?Cv(t,e):xc(t,e,!0),c=a;do{if(s===0){$i&&!a&&Ln(t,e,0,!1);break}else{if(n=t.current.alternate,c&&!Ev(n)){s=xc(t,e,!1),c=!1;continue}if(s===2){if(c=e,t.errorRecoveryDisabledLanes&c)var h=0;else h=t.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){e=h;t:{var v=t;s=nl;var T=v.current.memoizedState.isDehydrated;if(T&&(ea(v,h).flags|=256),h=xc(v,h,!1),h!==2){if(dc&&!T){v.errorRecoveryDisabledLanes|=c,yi|=c,s=4;break t}c=ge,ge=s,c!==null&&(ge===null?ge=c:ge.push.apply(ge,c))}s=h}if(c=!1,s!==2)continue}}if(s===1){ea(t,0),Ln(t,e,0,!0);break}t:{switch(a=t,c=s,c){case 0:case 1:throw Error(r(345));case 4:if((e&4194048)!==e)break;case 6:Ln(a,e,Me,!Vn);break t;case 2:ge=null;break;case 3:case 5:break;default:throw Error(r(329))}if((e&62914560)===e&&(s=Ns+300-xe(),10<s)){if(Ln(a,e,Me,!Vn),ql(a,0,!0)!==0)break t;xn=e,a.timeoutHandle=Pm(bm.bind(null,a,n,ge,Ds,mc,e,Me,yi,Ii,Vn,c,"Throttled",-0,0),s);break t}bm(a,n,ge,Ds,mc,e,Me,yi,Ii,Vn,c,null,-0,0)}}break}while(!0);$e(t)}function bm(t,e,n,a,s,c,h,v,T,N,R,q,C,D){if(t.timeoutHandle=-1,q=e.subtreeFlags,q&8192||(q&16785408)===16785408){q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:an},dm(e,c,q);var P=(c&62914560)===c?Ns-xe():(c&4194048)===c?gm-xe():0;if(P=dx(q,P),P!==null){xn=c,t.cancelPendingCommit=P(Em.bind(null,t,e,c,n,a,s,h,v,T,R,q,null,C,D)),Ln(t,c,h,!N);return}}Em(t,e,c,n,a,s,h,v,T)}function Ev(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var s=n[a],c=s.getSnapshot;s=s.value;try{if(!Te(c(),s))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ln(t,e,n,a){e&=~hc,e&=~yi,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var s=e;0<s;){var c=31-Se(s),h=1<<c;a[c]=-1,s&=~h}n!==0&&Cf(t,n,e)}function ks(){return(St&6)===0?(al(0),!1):!0}function vc(){if(ht!==null){if(wt===0)var t=ht.return;else t=ht,rn=ri=null,Rr(t),Qi=null,La=0,t=ht;for(;t!==null;)Wh(t.alternate,t),t=t.return;ht=null}}function ea(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,Jv(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),xn=0,vc(),Et=t,ht=n=sn(t.current,null),pt=e,wt=0,ze=null,Vn=!1,$i=wa(t,e),dc=!1,Ii=Me=hc=yi=Un=Ut=0,ge=nl=null,mc=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var s=31-Se(a),c=1<<s;e|=t[s],a&=~c}return vn=e,Il(),n}function Sm(t,e){ut=null,_.H=Ja,e===Xi||e===os?(e=Ud(),wt=3):e===Tr?(e=Ud(),wt=4):wt=e===Pr?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ze=e,ht===null&&(Ut=1,Ss(t,ke(e,t.current)))}function Tm(){var t=je.current;return t===null?!0:(pt&4194048)===pt?Ve===null:(pt&62914560)===pt||(pt&536870912)!==0?t===Ve:!1}function wm(){var t=_.H;return _.H=Ja,t===null?Ja:t}function jm(){var t=_.A;return _.A=zv,t}function Os(){Ut=4,Vn||(pt&4194048)!==pt&&je.current!==null||($i=!0),(Un&134217727)===0&&(yi&134217727)===0||Et===null||Ln(Et,pt,Me,!1)}function xc(t,e,n){var a=St;St|=2;var s=wm(),c=jm();(Et!==t||pt!==e)&&(Ds=null,ea(t,e)),e=!1;var h=Ut;t:do try{if(wt!==0&&ht!==null){var v=ht,T=ze;switch(wt){case 8:vc(),h=6;break t;case 3:case 2:case 9:case 6:je.current===null&&(e=!0);var N=wt;if(wt=0,ze=null,na(t,v,T,N),n&&$i){h=0;break t}break;default:N=wt,wt=0,ze=null,na(t,v,T,N)}}Nv(),h=Ut;break}catch(R){Sm(t,R)}while(!0);return e&&t.shellSuspendCounter++,rn=ri=null,St=a,_.H=s,_.A=c,ht===null&&(Et=null,pt=0,Il()),h}function Nv(){for(;ht!==null;)Am(ht)}function Cv(t,e){var n=St;St|=2;var a=wm(),s=jm();Et!==t||pt!==e?(Ds=null,Cs=xe()+500,ea(t,e)):$i=wa(t,e);t:do try{if(wt!==0&&ht!==null){e=ht;var c=ze;e:switch(wt){case 1:wt=0,ze=null,na(t,e,c,1);break;case 2:case 9:if(_d(c)){wt=0,ze=null,zm(e);break}e=function(){wt!==2&&wt!==9||Et!==t||(wt=7),$e(t)},c.then(e,e);break t;case 3:wt=7;break t;case 4:wt=5;break t;case 7:_d(c)?(wt=0,ze=null,zm(e)):(wt=0,ze=null,na(t,e,c,7));break;case 5:var h=null;switch(ht.tag){case 26:h=ht.memoizedState;case 5:case 27:var v=ht;if(h?fp(h):v.stateNode.complete){wt=0,ze=null;var T=v.sibling;if(T!==null)ht=T;else{var N=v.return;N!==null?(ht=N,Rs(N)):ht=null}break e}}wt=0,ze=null,na(t,e,c,5);break;case 6:wt=0,ze=null,na(t,e,c,6);break;case 8:vc(),Ut=6;break t;default:throw Error(r(462))}}Dv();break}catch(R){Sm(t,R)}while(!0);return rn=ri=null,_.H=a,_.A=s,St=n,ht!==null?0:(Et=null,pt=0,Il(),Ut)}function Dv(){for(;ht!==null&&!t1();)Am(ht)}function Am(t){var e=Fh(t.alternate,t,vn);t.memoizedProps=t.pendingProps,e===null?Rs(t):ht=e}function zm(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Gh(n,e,e.pendingProps,e.type,void 0,pt);break;case 11:e=Gh(n,e,e.pendingProps,e.type.render,e.ref,pt);break;case 5:Rr(e);default:Wh(n,e),e=ht=jd(e,vn),e=Fh(n,e,vn)}t.memoizedProps=t.pendingProps,e===null?Rs(t):ht=e}function na(t,e,n,a){rn=ri=null,Rr(e),Qi=null,La=0;var s=e.return;try{if(xv(t,s,e,n,pt)){Ut=1,Ss(t,ke(n,t.current)),ht=null;return}}catch(c){if(s!==null)throw ht=s,c;Ut=1,Ss(t,ke(n,t.current)),ht=null;return}e.flags&32768?(yt||a===1?t=!0:$i||(pt&536870912)!==0?t=!1:(Vn=t=!0,(a===2||a===9||a===3||a===6)&&(a=je.current,a!==null&&a.tag===13&&(a.flags|=16384))),Mm(e,t)):Rs(e)}function Rs(t){var e=t;do{if((e.flags&32768)!==0){Mm(e,Vn);return}t=e.return;var n=Tv(e.alternate,e,vn);if(n!==null){ht=n;return}if(e=e.sibling,e!==null){ht=e;return}ht=e=t}while(e!==null);Ut===0&&(Ut=5)}function Mm(t,e){do{var n=wv(t.alternate,t);if(n!==null){n.flags&=32767,ht=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){ht=t;return}ht=t=n}while(t!==null);Ut=6,ht=null}function Em(t,e,n,a,s,c,h,v,T){t.cancelPendingCommit=null;do _s();while(Kt!==0);if((St&6)!==0)throw Error(r(327));if(e!==null){if(e===t.current)throw Error(r(177));if(c=e.lanes|e.childLanes,c|=or,u1(t,n,c,h,v,T),t===Et&&(ht=Et=null,pt=0),ta=e,Hn=t,xn=n,pc=c,gc=s,ym=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,_v(Ul,function(){return Om(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=_.T,_.T=null,s=V.p,V.p=2,h=St,St|=4;try{jv(t,e,n)}finally{St=h,V.p=s,_.T=a}}Kt=1,Nm(),Cm(),Dm()}}function Nm(){if(Kt===1){Kt=0;var t=Hn,e=ta,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=_.T,_.T=null;var a=V.p;V.p=2;var s=St;St|=4;try{cm(e,t);var c=Dc,h=pd(t.containerInfo),v=c.focusedElem,T=c.selectionRange;if(h!==v&&v&&v.ownerDocument&&md(v.ownerDocument.documentElement,v)){if(T!==null&&nr(v)){var N=T.start,R=T.end;if(R===void 0&&(R=N),"selectionStart"in v)v.selectionStart=N,v.selectionEnd=Math.min(R,v.value.length);else{var q=v.ownerDocument||document,C=q&&q.defaultView||window;if(C.getSelection){var D=C.getSelection(),P=v.textContent.length,at=Math.min(T.start,P),Mt=T.end===void 0?at:Math.min(T.end,P);!D.extend&&at>Mt&&(h=Mt,Mt=at,at=h);var z=hd(v,at),w=hd(v,Mt);if(z&&w&&(D.rangeCount!==1||D.anchorNode!==z.node||D.anchorOffset!==z.offset||D.focusNode!==w.node||D.focusOffset!==w.offset)){var E=q.createRange();E.setStart(z.node,z.offset),D.removeAllRanges(),at>Mt?(D.addRange(E),D.extend(w.node,w.offset)):(E.setEnd(w.node,w.offset),D.addRange(E))}}}}for(q=[],D=v;D=D.parentNode;)D.nodeType===1&&q.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<q.length;v++){var B=q[v];B.element.scrollLeft=B.left,B.element.scrollTop=B.top}}Ks=!!Cc,Dc=Cc=null}finally{St=s,V.p=a,_.T=n}}t.current=e,Kt=2}}function Cm(){if(Kt===2){Kt=0;var t=Hn,e=ta,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=_.T,_.T=null;var a=V.p;V.p=2;var s=St;St|=4;try{am(t,e.alternate,e)}finally{St=s,V.p=a,_.T=n}}Kt=3}}function Dm(){if(Kt===4||Kt===3){Kt=0,e1();var t=Hn,e=ta,n=xn,a=ym;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Kt=5:(Kt=0,ta=Hn=null,km(t,t.pendingLanes));var s=t.pendingLanes;if(s===0&&(Bn=null),Uo(n),e=e.stateNode,be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(Ta,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=_.T,s=V.p,V.p=2,_.T=null;try{for(var c=t.onRecoverableError,h=0;h<a.length;h++){var v=a[h];c(v.value,{componentStack:v.stack})}}finally{_.T=e,V.p=s}}(xn&3)!==0&&_s(),$e(t),s=t.pendingLanes,(n&261930)!==0&&(s&42)!==0?t===yc?il++:(il=0,yc=t):il=0,al(0)}}function km(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Ba(e)))}function _s(){return Nm(),Cm(),Dm(),Om()}function Om(){if(Kt!==5)return!1;var t=Hn,e=pc;pc=0;var n=Uo(xn),a=_.T,s=V.p;try{V.p=32>n?32:n,_.T=null,n=gc,gc=null;var c=Hn,h=xn;if(Kt=0,ta=Hn=null,xn=0,(St&6)!==0)throw Error(r(331));var v=St;if(St|=4,mm(c.current),fm(c,c.current,h,n),St=v,al(0,!1),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(Ta,c)}catch{}return!0}finally{V.p=s,_.T=a,km(t,e)}}function Rm(t,e,n){e=ke(n,e),e=Fr(t.stateNode,e,2),t=kn(t,e,2),t!==null&&(ja(t,2),$e(t))}function jt(t,e,n){if(t.tag===3)Rm(t,t,n);else for(;e!==null;){if(e.tag===3){Rm(e,t,n);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Bn===null||!Bn.has(a))){t=ke(n,t),n=_h(2),a=kn(e,n,2),a!==null&&(Vh(n,a,e,t),ja(a,2),$e(a));break}}e=e.return}}function bc(t,e,n){var a=t.pingCache;if(a===null){a=t.pingCache=new Mv;var s=new Set;a.set(e,s)}else s=a.get(e),s===void 0&&(s=new Set,a.set(e,s));s.has(n)||(dc=!0,s.add(n),t=kv.bind(null,t,e,n),e.then(t,t))}function kv(t,e,n){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Et===t&&(pt&n)===n&&(Ut===4||Ut===3&&(pt&62914560)===pt&&300>xe()-Ns?(St&2)===0&&ea(t,0):hc|=n,Ii===pt&&(Ii=0)),$e(t)}function _m(t,e){e===0&&(e=Nf()),t=li(t,e),t!==null&&(ja(t,e),$e(t))}function Ov(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_m(t,n)}function Rv(t,e){var n=0;switch(t.tag){case 31:case 13:var a=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(e),_m(t,n)}function _v(t,e){return Oo(t,e)}var Vs=null,ia=null,Sc=!1,Us=!1,Tc=!1,qn=0;function $e(t){t!==ia&&t.next===null&&(ia===null?Vs=ia=t:ia=ia.next=t),Us=!0,Sc||(Sc=!0,Uv())}function al(t,e){if(!Tc&&Us){Tc=!0;do for(var n=!1,a=Vs;a!==null;){if(t!==0){var s=a.pendingLanes;if(s===0)var c=0;else{var h=a.suspendedLanes,v=a.pingedLanes;c=(1<<31-Se(42|t)+1)-1,c&=s&~(h&~v),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,Hm(a,c))}else c=pt,c=ql(a,a===Et?c:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(c&3)===0||wa(a,c)||(n=!0,Hm(a,c));a=a.next}while(n);Tc=!1}}function Vv(){Vm()}function Vm(){Us=Sc=!1;var t=0;qn!==0&&Kv()&&(t=qn);for(var e=xe(),n=null,a=Vs;a!==null;){var s=a.next,c=Um(a,e);c===0?(a.next=null,n===null?Vs=s:n.next=s,s===null&&(ia=n)):(n=a,(t!==0||(c&3)!==0)&&(Us=!0)),a=s}Kt!==0&&Kt!==5||al(t),qn!==0&&(qn=0)}function Um(t,e){for(var n=t.suspendedLanes,a=t.pingedLanes,s=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var h=31-Se(c),v=1<<h,T=s[h];T===-1?((v&n)===0||(v&a)!==0)&&(s[h]=c1(v,e)):T<=e&&(t.expiredLanes|=v),c&=~v}if(e=Et,n=pt,n=ql(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,n===0||t===e&&(wt===2||wt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Ro(a),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||wa(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(a!==null&&Ro(a),Uo(n)){case 2:case 8:n=Mf;break;case 32:n=Ul;break;case 268435456:n=Ef;break;default:n=Ul}return a=Bm.bind(null,t),n=Oo(n,a),t.callbackPriority=e,t.callbackNode=n,e}return a!==null&&a!==null&&Ro(a),t.callbackPriority=2,t.callbackNode=null,2}function Bm(t,e){if(Kt!==0&&Kt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(_s()&&t.callbackNode!==n)return null;var a=pt;return a=ql(t,t===Et?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(xm(t,a,e),Um(t,xe()),t.callbackNode!=null&&t.callbackNode===n?Bm.bind(null,t):null)}function Hm(t,e){if(_s())return null;xm(t,e,!0)}function Uv(){Fv(function(){(St&6)!==0?Oo(zf,Vv):Vm()})}function wc(){if(qn===0){var t=Yi;t===0&&(t=Bl,Bl<<=1,(Bl&261888)===0&&(Bl=256)),qn=t}return qn}function Lm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ql(""+t)}function qm(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function Bv(t,e,n,a,s){if(e==="submit"&&n&&n.stateNode===s){var c=Lm((s[fe]||null).action),h=a.submitter;h&&(e=(e=h[fe]||null)?Lm(e.formAction):h.getAttribute("formAction"),e!==null&&(c=e,h=null));var v=new Fl("action","action",null,a,s);t.push({event:v,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(qn!==0){var T=h?qm(s,h):new FormData(s);Gr(n,{pending:!0,data:T,method:s.method,action:c},null,T)}}else typeof c=="function"&&(v.preventDefault(),T=h?qm(s,h):new FormData(s),Gr(n,{pending:!0,data:T,method:s.method,action:c},c,T))},currentTarget:s}]})}}for(var jc=0;jc<sr.length;jc++){var Ac=sr[jc],Hv=Ac.toLowerCase(),Lv=Ac[0].toUpperCase()+Ac.slice(1);qe(Hv,"on"+Lv)}qe(vd,"onAnimationEnd"),qe(xd,"onAnimationIteration"),qe(bd,"onAnimationStart"),qe("dblclick","onDoubleClick"),qe("focusin","onFocus"),qe("focusout","onBlur"),qe(nv,"onTransitionRun"),qe(iv,"onTransitionStart"),qe(av,"onTransitionCancel"),qe(Sd,"onTransitionEnd"),Ei("onMouseEnter",["mouseout","mouseover"]),Ei("onMouseLeave",["mouseout","mouseover"]),Ei("onPointerEnter",["pointerout","pointerover"]),Ei("onPointerLeave",["pointerout","pointerover"]),ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ei("onBeforeInput",["compositionend","keypress","textInput","paste"]),ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ll="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ll));function Ym(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var a=t[n],s=a.event;a=a.listeners;t:{var c=void 0;if(e)for(var h=a.length-1;0<=h;h--){var v=a[h],T=v.instance,N=v.currentTarget;if(v=v.listener,T!==c&&s.isPropagationStopped())break t;c=v,s.currentTarget=N;try{c(s)}catch(R){$l(R)}s.currentTarget=null,c=T}else for(h=0;h<a.length;h++){if(v=a[h],T=v.instance,N=v.currentTarget,v=v.listener,T!==c&&s.isPropagationStopped())break t;c=v,s.currentTarget=N;try{c(s)}catch(R){$l(R)}s.currentTarget=null,c=T}}}}function mt(t,e){var n=e[Bo];n===void 0&&(n=e[Bo]=new Set);var a=t+"__bubble";n.has(a)||(Gm(e,t,2,!1),n.add(a))}function zc(t,e,n){var a=0;e&&(a|=4),Gm(n,t,a,e)}var Bs="_reactListening"+Math.random().toString(36).slice(2);function Mc(t){if(!t[Bs]){t[Bs]=!0,Vf.forEach(function(n){n!=="selectionchange"&&(qv.has(n)||zc(n,!1,t),zc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Bs]||(e[Bs]=!0,zc("selectionchange",!1,e))}}function Gm(t,e,n,a){switch(vp(e)){case 2:var s=px;break;case 8:s=gx;break;default:s=Yc}n=s.bind(null,e,n,t),s=void 0,!Ko||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),a?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Ec(t,e,n,a,s){var c=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var h=a.tag;if(h===3||h===4){var v=a.stateNode.containerInfo;if(v===s)break;if(h===4)for(h=a.return;h!==null;){var T=h.tag;if((T===3||T===4)&&h.stateNode.containerInfo===s)return;h=h.return}for(;v!==null;){if(h=Ai(v),h===null)return;if(T=h.tag,T===5||T===6||T===26||T===27){a=c=h;continue t}v=v.parentNode}}a=a.return}Jf(function(){var N=c,R=Qo(n),q=[];t:{var C=Td.get(t);if(C!==void 0){var D=Fl,P=t;switch(t){case"keypress":if(Kl(n)===0)break t;case"keydown":case"keyup":D=R1;break;case"focusin":P="focus",D=Wo;break;case"focusout":P="blur",D=Wo;break;case"beforeblur":case"afterblur":D=Wo;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=Wf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=T1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=U1;break;case vd:case xd:case bd:D=A1;break;case Sd:D=H1;break;case"scroll":case"scrollend":D=b1;break;case"wheel":D=q1;break;case"copy":case"cut":case"paste":D=M1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=If;break;case"toggle":case"beforetoggle":D=G1}var at=(e&4)!==0,Mt=!at&&(t==="scroll"||t==="scrollend"),z=at?C!==null?C+"Capture":null:C;at=[];for(var w=N,E;w!==null;){var B=w;if(E=B.stateNode,B=B.tag,B!==5&&B!==26&&B!==27||E===null||z===null||(B=Ma(w,z),B!=null&&at.push(sl(w,B,E))),Mt)break;w=w.return}0<at.length&&(C=new D(C,P,null,n,R),q.push({event:C,listeners:at}))}}if((e&7)===0){t:{if(C=t==="mouseover"||t==="pointerover",D=t==="mouseout"||t==="pointerout",C&&n!==Xo&&(P=n.relatedTarget||n.fromElement)&&(Ai(P)||P[ji]))break t;if((D||C)&&(C=R.window===R?R:(C=R.ownerDocument)?C.defaultView||C.parentWindow:window,D?(P=n.relatedTarget||n.toElement,D=N,P=P?Ai(P):null,P!==null&&(Mt=m(P),at=P.tag,P!==Mt||at!==5&&at!==27&&at!==6)&&(P=null)):(D=null,P=N),D!==P)){if(at=Wf,B="onMouseLeave",z="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(at=If,B="onPointerLeave",z="onPointerEnter",w="pointer"),Mt=D==null?C:za(D),E=P==null?C:za(P),C=new at(B,w+"leave",D,n,R),C.target=Mt,C.relatedTarget=E,B=null,Ai(R)===N&&(at=new at(z,w+"enter",P,n,R),at.target=E,at.relatedTarget=Mt,B=at),Mt=B,D&&P)e:{for(at=Yv,z=D,w=P,E=0,B=z;B;B=at(B))E++;B=0;for(var it=w;it;it=at(it))B++;for(;0<E-B;)z=at(z),E--;for(;0<B-E;)w=at(w),B--;for(;E--;){if(z===w||w!==null&&z===w.alternate){at=z;break e}z=at(z),w=at(w)}at=null}else at=null;D!==null&&Xm(q,C,D,at,!1),P!==null&&Mt!==null&&Xm(q,Mt,P,at,!0)}}t:{if(C=N?za(N):window,D=C.nodeName&&C.nodeName.toLowerCase(),D==="select"||D==="input"&&C.type==="file")var xt=od;else if(ld(C))if(rd)xt=I1;else{xt=W1;var et=P1}else D=C.nodeName,!D||D.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?N&&Go(N.elementType)&&(xt=od):xt=$1;if(xt&&(xt=xt(t,N))){sd(q,xt,n,R);break t}et&&et(t,C,N),t==="focusout"&&N&&C.type==="number"&&N.memoizedProps.value!=null&&Yo(C,"number",C.value)}switch(et=N?za(N):window,t){case"focusin":(ld(et)||et.contentEditable==="true")&&(Ri=et,ir=N,_a=null);break;case"focusout":_a=ir=Ri=null;break;case"mousedown":ar=!0;break;case"contextmenu":case"mouseup":case"dragend":ar=!1,gd(q,n,R);break;case"selectionchange":if(ev)break;case"keydown":case"keyup":gd(q,n,R)}var ft;if(Io)t:{switch(t){case"compositionstart":var gt="onCompositionStart";break t;case"compositionend":gt="onCompositionEnd";break t;case"compositionupdate":gt="onCompositionUpdate";break t}gt=void 0}else Oi?id(t,n)&&(gt="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(gt="onCompositionStart");gt&&(td&&n.locale!=="ko"&&(Oi||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&Oi&&(ft=Ff()):(An=R,Jo="value"in An?An.value:An.textContent,Oi=!0)),et=Hs(N,gt),0<et.length&&(gt=new $f(gt,t,null,n,R),q.push({event:gt,listeners:et}),ft?gt.data=ft:(ft=ad(n),ft!==null&&(gt.data=ft)))),(ft=Q1?Z1(t,n):K1(t,n))&&(gt=Hs(N,"onBeforeInput"),0<gt.length&&(et=new $f("onBeforeInput","beforeinput",null,n,R),q.push({event:et,listeners:gt}),et.data=ft)),Bv(q,t,N,n,R)}Ym(q,e)})}function sl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Hs(t,e){for(var n=e+"Capture",a=[];t!==null;){var s=t,c=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||c===null||(s=Ma(t,n),s!=null&&a.unshift(sl(t,s,c)),s=Ma(t,e),s!=null&&a.push(sl(t,s,c))),t.tag===3)return a;t=t.return}return[]}function Yv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Xm(t,e,n,a,s){for(var c=e._reactName,h=[];n!==null&&n!==a;){var v=n,T=v.alternate,N=v.stateNode;if(v=v.tag,T!==null&&T===a)break;v!==5&&v!==26&&v!==27||N===null||(T=N,s?(N=Ma(n,c),N!=null&&h.unshift(sl(n,N,T))):s||(N=Ma(n,c),N!=null&&h.push(sl(n,N,T)))),n=n.return}h.length!==0&&t.push({event:e,listeners:h})}var Gv=/\r\n?/g,Xv=/\u0000|\uFFFD/g;function Qm(t){return(typeof t=="string"?t:""+t).replace(Gv,`
`).replace(Xv,"")}function Zm(t,e){return e=Qm(e),Qm(t)===e}function zt(t,e,n,a,s,c){switch(n){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Ci(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Ci(t,""+a);break;case"className":Gl(t,"class",a);break;case"tabIndex":Gl(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Gl(t,n,a);break;case"style":Zf(t,a,c);break;case"data":if(e!=="object"){Gl(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=Ql(""+a),t.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(e!=="input"&&zt(t,e,"name",s.name,s,null),zt(t,e,"formEncType",s.formEncType,s,null),zt(t,e,"formMethod",s.formMethod,s,null),zt(t,e,"formTarget",s.formTarget,s,null)):(zt(t,e,"encType",s.encType,s,null),zt(t,e,"method",s.method,s,null),zt(t,e,"target",s.target,s,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=Ql(""+a),t.setAttribute(n,a);break;case"onClick":a!=null&&(t.onclick=an);break;case"onScroll":a!=null&&mt("scroll",t);break;case"onScrollEnd":a!=null&&mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(n=a.__html,n!=null){if(s.children!=null)throw Error(r(60));t.innerHTML=n}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}n=Ql(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""+a):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":a===!0?t.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,a):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(n,a):t.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(n):t.setAttribute(n,a);break;case"popover":mt("beforetoggle",t),mt("toggle",t),Yl(t,"popover",a);break;case"xlinkActuate":nn(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":nn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":nn(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":nn(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":nn(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":nn(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":nn(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":nn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":nn(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Yl(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=v1.get(n)||n,Yl(t,n,a))}}function Nc(t,e,n,a,s,c){switch(n){case"style":Zf(t,a,c);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(n=a.__html,n!=null){if(s.children!=null)throw Error(r(60));t.innerHTML=n}}break;case"children":typeof a=="string"?Ci(t,a):(typeof a=="number"||typeof a=="bigint")&&Ci(t,""+a);break;case"onScroll":a!=null&&mt("scroll",t);break;case"onScrollEnd":a!=null&&mt("scrollend",t);break;case"onClick":a!=null&&(t.onclick=an);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Uf.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),e=n.slice(2,s?n.length-7:void 0),c=t[fe]||null,c=c!=null?c[n]:null,typeof c=="function"&&t.removeEventListener(e,c,s),typeof a=="function")){typeof c!="function"&&c!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,a,s);break t}n in t?t[n]=a:a===!0?t.setAttribute(n,""):Yl(t,n,a)}}}function ee(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",t),mt("load",t);var a=!1,s=!1,c;for(c in n)if(n.hasOwnProperty(c)){var h=n[c];if(h!=null)switch(c){case"src":a=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:zt(t,e,c,h,n,null)}}s&&zt(t,e,"srcSet",n.srcSet,n,null),a&&zt(t,e,"src",n.src,n,null);return;case"input":mt("invalid",t);var v=c=h=s=null,T=null,N=null;for(a in n)if(n.hasOwnProperty(a)){var R=n[a];if(R!=null)switch(a){case"name":s=R;break;case"type":h=R;break;case"checked":T=R;break;case"defaultChecked":N=R;break;case"value":c=R;break;case"defaultValue":v=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(137,e));break;default:zt(t,e,a,R,n,null)}}Yf(t,c,v,T,N,h,s,!1);return;case"select":mt("invalid",t),a=h=c=null;for(s in n)if(n.hasOwnProperty(s)&&(v=n[s],v!=null))switch(s){case"value":c=v;break;case"defaultValue":h=v;break;case"multiple":a=v;default:zt(t,e,s,v,n,null)}e=c,n=h,t.multiple=!!a,e!=null?Ni(t,!!a,e,!1):n!=null&&Ni(t,!!a,n,!0);return;case"textarea":mt("invalid",t),c=s=a=null;for(h in n)if(n.hasOwnProperty(h)&&(v=n[h],v!=null))switch(h){case"value":a=v;break;case"defaultValue":s=v;break;case"children":c=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(r(91));break;default:zt(t,e,h,v,n,null)}Xf(t,a,s,c);return;case"option":for(T in n)n.hasOwnProperty(T)&&(a=n[T],a!=null)&&(T==="selected"?t.selected=a&&typeof a!="function"&&typeof a!="symbol":zt(t,e,T,a,n,null));return;case"dialog":mt("beforetoggle",t),mt("toggle",t),mt("cancel",t),mt("close",t);break;case"iframe":case"object":mt("load",t);break;case"video":case"audio":for(a=0;a<ll.length;a++)mt(ll[a],t);break;case"image":mt("error",t),mt("load",t);break;case"details":mt("toggle",t);break;case"embed":case"source":case"link":mt("error",t),mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in n)if(n.hasOwnProperty(N)&&(a=n[N],a!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:zt(t,e,N,a,n,null)}return;default:if(Go(e)){for(R in n)n.hasOwnProperty(R)&&(a=n[R],a!==void 0&&Nc(t,e,R,a,n,void 0));return}}for(v in n)n.hasOwnProperty(v)&&(a=n[v],a!=null&&zt(t,e,v,a,n,null))}function Qv(t,e,n,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,c=null,h=null,v=null,T=null,N=null,R=null;for(D in n){var q=n[D];if(n.hasOwnProperty(D)&&q!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":T=q;default:a.hasOwnProperty(D)||zt(t,e,D,null,a,q)}}for(var C in a){var D=a[C];if(q=n[C],a.hasOwnProperty(C)&&(D!=null||q!=null))switch(C){case"type":c=D;break;case"name":s=D;break;case"checked":N=D;break;case"defaultChecked":R=D;break;case"value":h=D;break;case"defaultValue":v=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(r(137,e));break;default:D!==q&&zt(t,e,C,D,a,q)}}qo(t,h,v,T,N,R,c,s);return;case"select":D=h=v=C=null;for(c in n)if(T=n[c],n.hasOwnProperty(c)&&T!=null)switch(c){case"value":break;case"multiple":D=T;default:a.hasOwnProperty(c)||zt(t,e,c,null,a,T)}for(s in a)if(c=a[s],T=n[s],a.hasOwnProperty(s)&&(c!=null||T!=null))switch(s){case"value":C=c;break;case"defaultValue":v=c;break;case"multiple":h=c;default:c!==T&&zt(t,e,s,c,a,T)}e=v,n=h,a=D,C!=null?Ni(t,!!n,C,!1):!!a!=!!n&&(e!=null?Ni(t,!!n,e,!0):Ni(t,!!n,n?[]:"",!1));return;case"textarea":D=C=null;for(v in n)if(s=n[v],n.hasOwnProperty(v)&&s!=null&&!a.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:zt(t,e,v,null,a,s)}for(h in a)if(s=a[h],c=n[h],a.hasOwnProperty(h)&&(s!=null||c!=null))switch(h){case"value":C=s;break;case"defaultValue":D=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(r(91));break;default:s!==c&&zt(t,e,h,s,a,c)}Gf(t,C,D);return;case"option":for(var P in n)C=n[P],n.hasOwnProperty(P)&&C!=null&&!a.hasOwnProperty(P)&&(P==="selected"?t.selected=!1:zt(t,e,P,null,a,C));for(T in a)C=a[T],D=n[T],a.hasOwnProperty(T)&&C!==D&&(C!=null||D!=null)&&(T==="selected"?t.selected=C&&typeof C!="function"&&typeof C!="symbol":zt(t,e,T,C,a,D));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in n)C=n[at],n.hasOwnProperty(at)&&C!=null&&!a.hasOwnProperty(at)&&zt(t,e,at,null,a,C);for(N in a)if(C=a[N],D=n[N],a.hasOwnProperty(N)&&C!==D&&(C!=null||D!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(137,e));break;default:zt(t,e,N,C,a,D)}return;default:if(Go(e)){for(var Mt in n)C=n[Mt],n.hasOwnProperty(Mt)&&C!==void 0&&!a.hasOwnProperty(Mt)&&Nc(t,e,Mt,void 0,a,C);for(R in a)C=a[R],D=n[R],!a.hasOwnProperty(R)||C===D||C===void 0&&D===void 0||Nc(t,e,R,C,a,D);return}}for(var z in n)C=n[z],n.hasOwnProperty(z)&&C!=null&&!a.hasOwnProperty(z)&&zt(t,e,z,null,a,C);for(q in a)C=a[q],D=n[q],!a.hasOwnProperty(q)||C===D||C==null&&D==null||zt(t,e,q,C,a,D)}function Km(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Zv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var s=n[a],c=s.transferSize,h=s.initiatorType,v=s.duration;if(c&&v&&Km(h)){for(h=0,v=s.responseEnd,a+=1;a<n.length;a++){var T=n[a],N=T.startTime;if(N>v)break;var R=T.transferSize,q=T.initiatorType;R&&Km(q)&&(T=T.responseEnd,h+=R*(T<v?1:(v-N)/(T-N)))}if(--a,e+=8*(c+h)/(s.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Cc=null,Dc=null;function Ls(t){return t.nodeType===9?t:t.ownerDocument}function Jm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fm(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function kc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Oc=null;function Kv(){var t=window.event;return t&&t.type==="popstate"?t===Oc?!1:(Oc=t,!0):(Oc=null,!1)}var Pm=typeof setTimeout=="function"?setTimeout:void 0,Jv=typeof clearTimeout=="function"?clearTimeout:void 0,Wm=typeof Promise=="function"?Promise:void 0,Fv=typeof queueMicrotask=="function"?queueMicrotask:typeof Wm<"u"?function(t){return Wm.resolve(null).then(t).catch(Pv)}:Pm;function Pv(t){setTimeout(function(){throw t})}function Yn(t){return t==="head"}function $m(t,e){var n=e,a=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(a===0){t.removeChild(s),oa(e);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")ol(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,ol(n);for(var c=n.firstChild;c;){var h=c.nextSibling,v=c.nodeName;c[Aa]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=h}}else n==="body"&&ol(t.ownerDocument.body);n=s}while(n);oa(e)}function Im(t,e){var n=t;t=0;do{var a=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=a}while(n)}function Rc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Rc(n),Ho(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function Wv(t,e,n,a){for(;t.nodeType===1;){var s=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Aa])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==s.rel||t.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||t.getAttribute("title")!==(s.title==null?null:s.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(s.src==null?null:s.src)||t.getAttribute("type")!==(s.type==null?null:s.type)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var c=s.name==null?null:""+s.name;if(s.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Ue(t.nextSibling),t===null)break}return null}function $v(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ue(t.nextSibling),t===null))return null;return t}function tp(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Ue(t.nextSibling),t===null))return null;return t}function _c(t){return t.data==="$?"||t.data==="$~"}function Vc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Iv(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var a=function(){e(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Ue(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Uc=null;function ep(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return Ue(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function np(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function ip(t,e,n){switch(e=Ls(n),t){case"html":if(t=e.documentElement,!t)throw Error(r(452));return t;case"head":if(t=e.head,!t)throw Error(r(453));return t;case"body":if(t=e.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function ol(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Ho(t)}var Be=new Map,ap=new Set;function qs(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var bn=V.d;V.d={f:tx,r:ex,D:nx,C:ix,L:ax,m:lx,X:ox,S:sx,M:rx};function tx(){var t=bn.f(),e=ks();return t||e}function ex(t){var e=zi(t);e!==null&&e.tag===5&&e.type==="form"?Sh(e):bn.r(t)}var aa=typeof document>"u"?null:document;function lp(t,e,n){var a=aa;if(a&&typeof e=="string"&&e){var s=Ce(e);s='link[rel="'+t+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),ap.has(s)||(ap.add(s),t={rel:t,crossOrigin:n,href:e},a.querySelector(s)===null&&(e=a.createElement("link"),ee(e,"link",t),Ft(e),a.head.appendChild(e)))}}function nx(t){bn.D(t),lp("dns-prefetch",t,null)}function ix(t,e){bn.C(t,e),lp("preconnect",t,e)}function ax(t,e,n){bn.L(t,e,n);var a=aa;if(a&&t&&e){var s='link[rel="preload"][as="'+Ce(e)+'"]';e==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Ce(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Ce(n.imageSizes)+'"]')):s+='[href="'+Ce(t)+'"]';var c=s;switch(e){case"style":c=la(t);break;case"script":c=sa(t)}Be.has(c)||(t=b({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Be.set(c,t),a.querySelector(s)!==null||e==="style"&&a.querySelector(rl(c))||e==="script"&&a.querySelector(cl(c))||(e=a.createElement("link"),ee(e,"link",t),Ft(e),a.head.appendChild(e)))}}function lx(t,e){bn.m(t,e);var n=aa;if(n&&t){var a=e&&typeof e.as=="string"?e.as:"script",s='link[rel="modulepreload"][as="'+Ce(a)+'"][href="'+Ce(t)+'"]',c=s;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=sa(t)}if(!Be.has(c)&&(t=b({rel:"modulepreload",href:t},e),Be.set(c,t),n.querySelector(s)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(cl(c)))return}a=n.createElement("link"),ee(a,"link",t),Ft(a),n.head.appendChild(a)}}}function sx(t,e,n){bn.S(t,e,n);var a=aa;if(a&&t){var s=Mi(a).hoistableStyles,c=la(t);e=e||"default";var h=s.get(c);if(!h){var v={loading:0,preload:null};if(h=a.querySelector(rl(c)))v.loading=5;else{t=b({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Be.get(c))&&Bc(t,n);var T=h=a.createElement("link");Ft(T),ee(T,"link",t),T._p=new Promise(function(N,R){T.onload=N,T.onerror=R}),T.addEventListener("load",function(){v.loading|=1}),T.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Ys(h,e,a)}h={type:"stylesheet",instance:h,count:1,state:v},s.set(c,h)}}}function ox(t,e){bn.X(t,e);var n=aa;if(n&&t){var a=Mi(n).hoistableScripts,s=sa(t),c=a.get(s);c||(c=n.querySelector(cl(s)),c||(t=b({src:t,async:!0},e),(e=Be.get(s))&&Hc(t,e),c=n.createElement("script"),Ft(c),ee(c,"link",t),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(s,c))}}function rx(t,e){bn.M(t,e);var n=aa;if(n&&t){var a=Mi(n).hoistableScripts,s=sa(t),c=a.get(s);c||(c=n.querySelector(cl(s)),c||(t=b({src:t,async:!0,type:"module"},e),(e=Be.get(s))&&Hc(t,e),c=n.createElement("script"),Ft(c),ee(c,"link",t),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(s,c))}}function sp(t,e,n,a){var s=(s=dt.current)?qs(s):null;if(!s)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=la(n.href),n=Mi(s).hoistableStyles,a=n.get(e),a||(a={type:"style",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=la(n.href);var c=Mi(s).hoistableStyles,h=c.get(t);if(h||(s=s.ownerDocument||s,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,h),(c=s.querySelector(rl(t)))&&!c._p&&(h.instance=c,h.state.loading=5),Be.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Be.set(t,n),c||cx(s,t,n,h.state))),e&&a===null)throw Error(r(528,""));return h}if(e&&a!==null)throw Error(r(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=sa(n),n=Mi(s).hoistableScripts,a=n.get(e),a||(a={type:"script",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function la(t){return'href="'+Ce(t)+'"'}function rl(t){return'link[rel="stylesheet"]['+t+"]"}function op(t){return b({},t,{"data-precedence":t.precedence,precedence:null})}function cx(t,e,n,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),ee(e,"link",n),Ft(e),t.head.appendChild(e))}function sa(t){return'[src="'+Ce(t)+'"]'}function cl(t){return"script[async]"+t}function rp(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+Ce(n.href)+'"]');if(a)return e.instance=a,Ft(a),a;var s=b({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Ft(a),ee(a,"style",s),Ys(a,n.precedence,t),e.instance=a;case"stylesheet":s=la(n.href);var c=t.querySelector(rl(s));if(c)return e.state.loading|=4,e.instance=c,Ft(c),c;a=op(n),(s=Be.get(s))&&Bc(a,s),c=(t.ownerDocument||t).createElement("link"),Ft(c);var h=c;return h._p=new Promise(function(v,T){h.onload=v,h.onerror=T}),ee(c,"link",a),e.state.loading|=4,Ys(c,n.precedence,t),e.instance=c;case"script":return c=sa(n.src),(s=t.querySelector(cl(c)))?(e.instance=s,Ft(s),s):(a=n,(s=Be.get(c))&&(a=b({},n),Hc(a,s)),t=t.ownerDocument||t,s=t.createElement("script"),Ft(s),ee(s,"link",a),t.head.appendChild(s),e.instance=s);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Ys(a,n.precedence,t));return e.instance}function Ys(t,e,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=a.length?a[a.length-1]:null,c=s,h=0;h<a.length;h++){var v=a[h];if(v.dataset.precedence===e)c=v;else if(c!==s)break}c?c.parentNode.insertBefore(t,c.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Bc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Hc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Gs=null;function cp(t,e,n){if(Gs===null){var a=new Map,s=Gs=new Map;s.set(n,a)}else s=Gs,a=s.get(n),a||(a=new Map,s.set(n,a));if(a.has(t))return a;for(a.set(t,null),n=n.getElementsByTagName(t),s=0;s<n.length;s++){var c=n[s];if(!(c[Aa]||c[Wt]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var h=c.getAttribute(e)||"";h=t+h;var v=a.get(h);v?v.push(c):a.set(h,[c])}}return a}function up(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function ux(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function fp(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function fx(t,e,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=la(a.href),c=e.querySelector(rl(s));if(c){e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Xs.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=c,Ft(c);return}c=e.ownerDocument||e,a=op(a),(s=Be.get(s))&&Bc(a,s),c=c.createElement("link"),Ft(c);var h=c;h._p=new Promise(function(v,T){h.onload=v,h.onerror=T}),ee(c,"link",a),n.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=Xs.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var Lc=0;function dx(t,e){return t.stylesheets&&t.count===0&&Zs(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var a=setTimeout(function(){if(t.stylesheets&&Zs(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+e);0<t.imgBytes&&Lc===0&&(Lc=62500*Zv());var s=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Zs(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Lc?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(s)}}:null}function Xs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zs(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Qs=null;function Zs(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Qs=new Map,e.forEach(hx,t),Qs=null,Xs.call(t))}function hx(t,e){if(!(e.state.loading&4)){var n=Qs.get(t);if(n)var a=n.get(null);else{n=new Map,Qs.set(t,n);for(var s=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<s.length;c++){var h=s[c];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(n.set(h.dataset.precedence,h),a=h)}a&&n.set(null,a)}s=e.instance,h=s.getAttribute("data-precedence"),c=n.get(h)||a,c===a&&n.set(null,s),n.set(h,s),this.count++,a=Xs.bind(this),s.addEventListener("load",a),s.addEventListener("error",a),c?c.parentNode.insertBefore(s,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(s,t.firstChild)),e.state.loading|=4}}var ul={$$typeof:Y,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function mx(t,e,n,a,s,c,h,v,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_o(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_o(0),this.hiddenUpdates=_o(null),this.identifierPrefix=a,this.onUncaughtError=s,this.onCaughtError=c,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function dp(t,e,n,a,s,c,h,v,T,N,R,q){return t=new mx(t,e,n,h,T,N,R,q,v),e=1,c===!0&&(e|=24),c=we(3,null,null,e),t.current=c,c.stateNode=t,e=xr(),e.refCount++,t.pooledCache=e,e.refCount++,c.memoizedState={element:a,isDehydrated:n,cache:e},wr(c),t}function hp(t){return t?(t=Ui,t):Ui}function mp(t,e,n,a,s,c){s=hp(s),a.context===null?a.context=s:a.pendingContext=s,a=Dn(e),a.payload={element:n},c=c===void 0?null:c,c!==null&&(a.callback=c),n=kn(t,a,e),n!==null&&(ye(n,t,e),Ya(n,t,e))}function pp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qc(t,e){pp(t,e),(t=t.alternate)&&pp(t,e)}function gp(t){if(t.tag===13||t.tag===31){var e=li(t,67108864);e!==null&&ye(e,t,67108864),qc(t,67108864)}}function yp(t){if(t.tag===13||t.tag===31){var e=Ee();e=Vo(e);var n=li(t,e);n!==null&&ye(n,t,e),qc(t,e)}}var Ks=!0;function px(t,e,n,a){var s=_.T;_.T=null;var c=V.p;try{V.p=2,Yc(t,e,n,a)}finally{V.p=c,_.T=s}}function gx(t,e,n,a){var s=_.T;_.T=null;var c=V.p;try{V.p=8,Yc(t,e,n,a)}finally{V.p=c,_.T=s}}function Yc(t,e,n,a){if(Ks){var s=Gc(a);if(s===null)Ec(t,e,a,Js,n),xp(t,a);else if(vx(s,t,e,n,a))a.stopPropagation();else if(xp(t,a),e&4&&-1<yx.indexOf(t)){for(;s!==null;){var c=zi(s);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var h=ti(c.pendingLanes);if(h!==0){var v=c;for(v.pendingLanes|=2,v.entangledLanes|=2;h;){var T=1<<31-Se(h);v.entanglements[1]|=T,h&=~T}$e(c),(St&6)===0&&(Cs=xe()+500,al(0))}}break;case 31:case 13:v=li(c,2),v!==null&&ye(v,c,2),ks(),qc(c,2)}if(c=Gc(a),c===null&&Ec(t,e,a,Js,n),c===s)break;s=c}s!==null&&a.stopPropagation()}else Ec(t,e,a,null,n)}}function Gc(t){return t=Qo(t),Xc(t)}var Js=null;function Xc(t){if(Js=null,t=Ai(t),t!==null){var e=m(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=d(e),t!==null)return t;t=null}else if(n===31){if(t=y(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Js=t,null}function vp(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(n1()){case zf:return 2;case Mf:return 8;case Ul:case i1:return 32;case Ef:return 268435456;default:return 32}default:return 32}}var Qc=!1,Gn=null,Xn=null,Qn=null,fl=new Map,dl=new Map,Zn=[],yx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xp(t,e){switch(t){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":fl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":dl.delete(e.pointerId)}}function hl(t,e,n,a,s,c){return t===null||t.nativeEvent!==c?(t={blockedOn:e,domEventName:n,eventSystemFlags:a,nativeEvent:c,targetContainers:[s]},e!==null&&(e=zi(e),e!==null&&gp(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function vx(t,e,n,a,s){switch(e){case"focusin":return Gn=hl(Gn,t,e,n,a,s),!0;case"dragenter":return Xn=hl(Xn,t,e,n,a,s),!0;case"mouseover":return Qn=hl(Qn,t,e,n,a,s),!0;case"pointerover":var c=s.pointerId;return fl.set(c,hl(fl.get(c)||null,t,e,n,a,s)),!0;case"gotpointercapture":return c=s.pointerId,dl.set(c,hl(dl.get(c)||null,t,e,n,a,s)),!0}return!1}function bp(t){var e=Ai(t.target);if(e!==null){var n=m(e);if(n!==null){if(e=n.tag,e===13){if(e=d(n),e!==null){t.blockedOn=e,Rf(t.priority,function(){yp(n)});return}}else if(e===31){if(e=y(n),e!==null){t.blockedOn=e,Rf(t.priority,function(){yp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gc(t.nativeEvent);if(n===null){n=t.nativeEvent;var a=new n.constructor(n.type,n);Xo=a,n.target.dispatchEvent(a),Xo=null}else return e=zi(n),e!==null&&gp(e),t.blockedOn=n,!1;e.shift()}return!0}function Sp(t,e,n){Fs(t)&&n.delete(e)}function xx(){Qc=!1,Gn!==null&&Fs(Gn)&&(Gn=null),Xn!==null&&Fs(Xn)&&(Xn=null),Qn!==null&&Fs(Qn)&&(Qn=null),fl.forEach(Sp),dl.forEach(Sp)}function Ps(t,e){t.blockedOn===e&&(t.blockedOn=null,Qc||(Qc=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,xx)))}var Ws=null;function Tp(t){Ws!==t&&(Ws=t,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Ws===t&&(Ws=null);for(var e=0;e<t.length;e+=3){var n=t[e],a=t[e+1],s=t[e+2];if(typeof a!="function"){if(Xc(a||n)===null)continue;break}var c=zi(n);c!==null&&(t.splice(e,3),e-=3,Gr(c,{pending:!0,data:s,method:n.method,action:a},a,s))}}))}function oa(t){function e(T){return Ps(T,t)}Gn!==null&&Ps(Gn,t),Xn!==null&&Ps(Xn,t),Qn!==null&&Ps(Qn,t),fl.forEach(e),dl.forEach(e);for(var n=0;n<Zn.length;n++){var a=Zn[n];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Zn.length&&(n=Zn[0],n.blockedOn===null);)bp(n),n.blockedOn===null&&Zn.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var s=n[a],c=n[a+1],h=s[fe]||null;if(typeof c=="function")h||Tp(n);else if(h){var v=null;if(c&&c.hasAttribute("formAction")){if(s=c,h=c[fe]||null)v=h.formAction;else if(Xc(s)!==null)continue}else v=h.action;typeof v=="function"?n[a+1]=v:(n.splice(a,3),a-=3),Tp(n)}}}function wp(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(h){return s=h})},focusReset:"manual",scroll:"manual"})}function e(){s!==null&&(s(),s=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,s=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),s!==null&&(s(),s=null)}}}function Zc(t){this._internalRoot=t}$s.prototype.render=Zc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(r(409));var n=e.current,a=Ee();mp(n,a,t,e,null,null)},$s.prototype.unmount=Zc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;mp(t.current,2,null,t,null,null),ks(),e[ji]=null}};function $s(t){this._internalRoot=t}$s.prototype.unstable_scheduleHydration=function(t){if(t){var e=Of();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Zn.length&&e!==0&&e<Zn[n].priority;n++);Zn.splice(n,0,t),n===0&&bp(t)}};var jp=l.version;if(jp!=="19.2.4")throw Error(r(527,jp,"19.2.4"));V.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=g(e),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var bx={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Is=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Is.isDisabled&&Is.supportsFiber)try{Ta=Is.inject(bx),be=Is}catch{}}return pl.createRoot=function(t,e){if(!u(t))throw Error(r(299));var n=!1,a="",s=Dh,c=kh,h=Oh;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(s=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(h=e.onRecoverableError)),e=dp(t,1,!1,null,null,n,a,null,s,c,h,wp),t[ji]=e.current,Mc(t),new Zc(e)},pl.hydrateRoot=function(t,e,n){if(!u(t))throw Error(r(299));var a=!1,s="",c=Dh,h=kh,v=Oh,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.formState!==void 0&&(T=n.formState)),e=dp(t,1,!0,e,n??null,a,s,T,c,h,v,wp),e.context=hp(null),n=e.current,a=Ee(),a=Vo(a),s=Dn(a),s.callback=null,kn(n,s,a),n=a,e.current.lanes=n,ja(e,n),$e(e),t[ji]=e.current,Mc(t),new $s(e)},pl.version="19.2.4",pl}var Rp;function Cx(){if(Rp)return Fc.exports;Rp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(l){console.error(l)}}return i(),Fc.exports=Nx(),Fc.exports}var Dx=Cx();const ng=k.createContext(null),_p=[{id:"terminal",name:"Terminal",icon:"terminal",component:"Terminal",defaultSize:{width:600,height:400},minSize:{width:500,height:300},resizable:!0,maximizable:!0,closable:!0},{id:"file-explorer",name:"File Explorer",icon:"folder",component:"FileExplorer",defaultSize:{width:800,height:500},minSize:{width:600,height:400},resizable:!0,maximizable:!0,closable:!0},{id:"settings",name:"Settings",icon:"settings",component:"Settings",defaultSize:{width:700,height:550},minSize:{width:650,height:500},resizable:!0,maximizable:!0,closable:!0},{id:"browser",name:"Browser",icon:"globe",component:"Browser",defaultSize:{width:900,height:600},minSize:{width:700,height:500},resizable:!0,maximizable:!0,closable:!0},{id:"calculator",name:"Calculator",icon:"calculator",component:"Calculator",defaultSize:{width:320,height:450},minSize:{width:280,height:400},resizable:!1,maximizable:!0,closable:!0},{id:"notes",name:"Notes",icon:"file-text",component:"Notes",defaultSize:{width:700,height:500},minSize:{width:500,height:400},resizable:!0,maximizable:!0,closable:!0},{id:"music",name:"Music",icon:"music",component:"Music",defaultSize:{width:800,height:500},minSize:{width:650,height:450},resizable:!0,maximizable:!0,closable:!0},{id:"vscode",name:"Code Editor",icon:"code",component:"CodeEditor",defaultSize:{width:900,height:650},minSize:{width:700,height:500},resizable:!0,maximizable:!0,closable:!0}],kx=[{id:"root",name:"Root",type:"folder",createdAt:Date.now(),modifiedAt:Date.now(),children:[{id:"documents",name:"Documents",type:"folder",createdAt:Date.now(),modifiedAt:Date.now(),children:[{id:"readme",name:"Welcome.txt",type:"file",content:`Welcome to SolenOS!

This is a beautiful, animated web-based operating system.
Enjoy exploring!`,createdAt:Date.now(),modifiedAt:Date.now()}]},{id:"pictures",name:"Pictures",type:"folder",createdAt:Date.now(),modifiedAt:Date.now(),children:[]},{id:"music",name:"Music",type:"folder",createdAt:Date.now(),modifiedAt:Date.now(),children:[]},{id:"downloads",name:"Downloads",type:"folder",createdAt:Date.now(),modifiedAt:Date.now(),children:[]}]}],yu=["linear-gradient(135deg, #667eea 0%, #764ba2 100%)","linear-gradient(135deg, #f093fb 0%, #f5576c 100%)","linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)","linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)","linear-gradient(135deg, #fa709a 0%, #fee140 100%)","linear-gradient(135deg, #30cfd0 0%, #330867 100%)","linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)","linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)"];function Ox({children:i}){const[l,o]=k.useState([]),[r,u]=k.useState(null),[m,d]=k.useState(!1),[y,p]=k.useState([]),[g]=k.useState(kx),[x,b]=k.useState("dark"),[S,A]=k.useState(0),[M,U]=k.useState("booting");k.useEffect(()=>{const V=setTimeout(()=>U("running"),1500);return()=>clearTimeout(V)},[]);const O=()=>`window-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,L=k.useCallback(V=>{const X=_p.find(H=>H.id===V);if(!X)return;const I=l.find(H=>H.appId===V&&!H.isMinimized);if(I){Q(I.id);return}const ot=l.length*30,j={id:O(),appId:X.id,title:X.name,icon:X.icon,isOpen:!0,isMinimized:!1,isMaximized:!1,zIndex:l.length+1,position:{x:100+ot,y:50+ot},size:{...X.defaultSize}};o(H=>[...H,j]),u(j.id),d(!1)},[l]),G=k.useCallback(V=>{o(X=>X.filter(I=>I.id!==V)),u(X=>X===V?null:X)},[]),Y=k.useCallback(V=>{o(X=>X.map(I=>I.id===V?{...I,isMinimized:!0}:I)),u(X=>X===V?null:X)},[]),F=k.useCallback(V=>{o(X=>X.map(I=>I.id===V?{...I,isMaximized:!I.isMaximized}:I))},[]),Q=k.useCallback(V=>{const X=Math.max(...l.map(I=>I.zIndex),0);o(I=>I.map(ot=>ot.id===V?{...ot,isMinimized:!1,zIndex:X+1}:ot)),u(V)},[l]),lt=k.useCallback((V,X)=>{o(I=>I.map(ot=>ot.id===V?{...ot,position:X}:ot))},[]),W=k.useCallback((V,X)=>{o(I=>I.map(ot=>ot.id===V?{...ot,size:X}:ot))},[]),J=k.useCallback(()=>{d(V=>!V)},[]),st=k.useCallback(()=>{d(!1)},[]),vt=k.useCallback(V=>{const X={...V,id:`notification-${Date.now()}`,timestamp:Date.now()};p(I=>[...I,X]),setTimeout(()=>{Nt(X.id)},5e3)},[]),Nt=k.useCallback(V=>{p(X=>X.filter(I=>I.id!==V))},[]),_t=k.useCallback(V=>{const X=yu.indexOf(V);X!==-1&&A(X)},[]),ve=k.useCallback(()=>{U("booting"),setTimeout(()=>U("running"),1500)},[]),ue=k.useCallback(()=>{o([]),u(null),d(!1),U("shutting-down"),setTimeout(()=>{U("shut-down")},1500)},[]),ie=k.useCallback(()=>{o([]),u(null),d(!1),U("restarting"),setTimeout(()=>{U("running")},1500)},[]),_={windows:l,activeWindowId:r,openWindow:L,closeWindow:G,minimizeWindow:Y,maximizeWindow:F,focusWindow:Q,updateWindowPosition:lt,updateWindowSize:W,apps:_p,isStartMenuOpen:m,toggleStartMenu:J,closeStartMenu:st,notifications:y,addNotification:vt,removeNotification:Nt,fileSystem:g,themeMode:x,setThemeMode:b,wallpaper:yu[S],setWallpaper:_t,powerState:M,powerOn:ve,shutdown:ue,restart:ie};return f.jsx(ng.Provider,{value:_,children:i})}function Wn(){const i=k.useContext(ng);if(!i)throw new Error("useOS must be used within an OSProvider");return i}const Xu=k.createContext({});function Qu(i){const l=k.useRef(null);return l.current===null&&(l.current=i()),l.current}const ig=typeof window<"u",ag=ig?k.useLayoutEffect:k.useEffect,To=k.createContext(null);function Zu(i,l){i.indexOf(l)===-1&&i.push(l)}function ho(i,l){const o=i.indexOf(l);o>-1&&i.splice(o,1)}const en=(i,l,o)=>o>l?l:o<i?i:o;let Ku=()=>{};const Tn={},lg=i=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i);function sg(i){return typeof i=="object"&&i!==null}const og=i=>/^0[^.\s]+$/u.test(i);function rg(i){let l;return()=>(l===void 0&&(l=i()),l)}const Le=i=>i,Rx=(i,l)=>o=>l(i(o)),El=(...i)=>i.reduce(Rx),wl=(i,l,o)=>{const r=l-i;return r===0?1:(o-i)/r};class Ju{constructor(){this.subscriptions=[]}add(l){return Zu(this.subscriptions,l),()=>ho(this.subscriptions,l)}notify(l,o,r){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](l,o,r);else for(let m=0;m<u;m++){const d=this.subscriptions[m];d&&d(l,o,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ze=i=>i*1e3,He=i=>i/1e3;function cg(i,l){return l?i*(1e3/l):0}const ug=(i,l,o)=>(((1-3*o+3*l)*i+(3*o-6*l))*i+3*l)*i,_x=1e-7,Vx=12;function Ux(i,l,o,r,u){let m,d,y=0;do d=l+(o-l)/2,m=ug(d,r,u)-i,m>0?o=d:l=d;while(Math.abs(m)>_x&&++y<Vx);return d}function Nl(i,l,o,r){if(i===l&&o===r)return Le;const u=m=>Ux(m,0,1,i,o);return m=>m===0||m===1?m:ug(u(m),l,r)}const fg=i=>l=>l<=.5?i(2*l)/2:(2-i(2*(1-l)))/2,dg=i=>l=>1-i(1-l),hg=Nl(.33,1.53,.69,.99),Fu=dg(hg),mg=fg(Fu),pg=i=>(i*=2)<1?.5*Fu(i):.5*(2-Math.pow(2,-10*(i-1))),Pu=i=>1-Math.sin(Math.acos(i)),gg=dg(Pu),yg=fg(Pu),Bx=Nl(.42,0,1,1),Hx=Nl(0,0,.58,1),vg=Nl(.42,0,.58,1),Lx=i=>Array.isArray(i)&&typeof i[0]!="number",xg=i=>Array.isArray(i)&&typeof i[0]=="number",qx={linear:Le,easeIn:Bx,easeInOut:vg,easeOut:Hx,circIn:Pu,circInOut:yg,circOut:gg,backIn:Fu,backInOut:mg,backOut:hg,anticipate:pg},Yx=i=>typeof i=="string",Vp=i=>{if(xg(i)){Ku(i.length===4);const[l,o,r,u]=i;return Nl(l,o,r,u)}else if(Yx(i))return qx[i];return i},to=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Gx(i,l){let o=new Set,r=new Set,u=!1,m=!1;const d=new WeakSet;let y={delta:0,timestamp:0,isProcessing:!1};function p(x){d.has(x)&&(g.schedule(x),i()),x(y)}const g={schedule:(x,b=!1,S=!1)=>{const M=S&&u?o:r;return b&&d.add(x),M.has(x)||M.add(x),x},cancel:x=>{r.delete(x),d.delete(x)},process:x=>{if(y=x,u){m=!0;return}u=!0,[o,r]=[r,o],o.forEach(p),o.clear(),u=!1,m&&(m=!1,g.process(x))}};return g}const Xx=40;function bg(i,l){let o=!1,r=!0;const u={delta:0,timestamp:0,isProcessing:!1},m=()=>o=!0,d=to.reduce((Y,F)=>(Y[F]=Gx(m),Y),{}),{setup:y,read:p,resolveKeyframes:g,preUpdate:x,update:b,preRender:S,render:A,postRender:M}=d,U=()=>{const Y=Tn.useManualTiming?u.timestamp:performance.now();o=!1,Tn.useManualTiming||(u.delta=r?1e3/60:Math.max(Math.min(Y-u.timestamp,Xx),1)),u.timestamp=Y,u.isProcessing=!0,y.process(u),p.process(u),g.process(u),x.process(u),b.process(u),S.process(u),A.process(u),M.process(u),u.isProcessing=!1,o&&l&&(r=!1,i(U))},O=()=>{o=!0,r=!0,u.isProcessing||i(U)};return{schedule:to.reduce((Y,F)=>{const Q=d[F];return Y[F]=(lt,W=!1,J=!1)=>(o||O(),Q.schedule(lt,W,J)),Y},{}),cancel:Y=>{for(let F=0;F<to.length;F++)d[to[F]].cancel(Y)},state:u,steps:d}}const{schedule:Ct,cancel:Pn,state:ne,steps:Ic}=bg(typeof requestAnimationFrame<"u"?requestAnimationFrame:Le,!0);let ao;function Qx(){ao=void 0}const re={now:()=>(ao===void 0&&re.set(ne.isProcessing||Tn.useManualTiming?ne.timestamp:performance.now()),ao),set:i=>{ao=i,queueMicrotask(Qx)}},Sg=i=>l=>typeof l=="string"&&l.startsWith(i),Tg=Sg("--"),Zx=Sg("var(--"),Wu=i=>Zx(i)?Kx.test(i.split("/*")[0].trim()):!1,Kx=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Up(i){return typeof i!="string"?!1:i.split("/*")[0].includes("var(--")}const va={test:i=>typeof i=="number",parse:parseFloat,transform:i=>i},jl={...va,transform:i=>en(0,1,i)},eo={...va,default:1},xl=i=>Math.round(i*1e5)/1e5,$u=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Jx(i){return i==null}const Fx=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Iu=(i,l)=>o=>!!(typeof o=="string"&&Fx.test(o)&&o.startsWith(i)||l&&!Jx(o)&&Object.prototype.hasOwnProperty.call(o,l)),wg=(i,l,o)=>r=>{if(typeof r!="string")return r;const[u,m,d,y]=r.match($u);return{[i]:parseFloat(u),[l]:parseFloat(m),[o]:parseFloat(d),alpha:y!==void 0?parseFloat(y):1}},Px=i=>en(0,255,i),tu={...va,transform:i=>Math.round(Px(i))},Si={test:Iu("rgb","red"),parse:wg("red","green","blue"),transform:({red:i,green:l,blue:o,alpha:r=1})=>"rgba("+tu.transform(i)+", "+tu.transform(l)+", "+tu.transform(o)+", "+xl(jl.transform(r))+")"};function Wx(i){let l="",o="",r="",u="";return i.length>5?(l=i.substring(1,3),o=i.substring(3,5),r=i.substring(5,7),u=i.substring(7,9)):(l=i.substring(1,2),o=i.substring(2,3),r=i.substring(3,4),u=i.substring(4,5),l+=l,o+=o,r+=r,u+=u),{red:parseInt(l,16),green:parseInt(o,16),blue:parseInt(r,16),alpha:u?parseInt(u,16)/255:1}}const vu={test:Iu("#"),parse:Wx,transform:Si.transform},Cl=i=>({test:l=>typeof l=="string"&&l.endsWith(i)&&l.split(" ").length===1,parse:parseFloat,transform:l=>`${l}${i}`}),Jn=Cl("deg"),tn=Cl("%"),$=Cl("px"),$x=Cl("vh"),Ix=Cl("vw"),Bp={...tn,parse:i=>tn.parse(i)/100,transform:i=>tn.transform(i*100)},ca={test:Iu("hsl","hue"),parse:wg("hue","saturation","lightness"),transform:({hue:i,saturation:l,lightness:o,alpha:r=1})=>"hsla("+Math.round(i)+", "+tn.transform(xl(l))+", "+tn.transform(xl(o))+", "+xl(jl.transform(r))+")"},Zt={test:i=>Si.test(i)||vu.test(i)||ca.test(i),parse:i=>Si.test(i)?Si.parse(i):ca.test(i)?ca.parse(i):vu.parse(i),transform:i=>typeof i=="string"?i:i.hasOwnProperty("red")?Si.transform(i):ca.transform(i),getAnimatableNone:i=>{const l=Zt.parse(i);return l.alpha=0,Zt.transform(l)}},tb=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function eb(i){return isNaN(i)&&typeof i=="string"&&(i.match($u)?.length||0)+(i.match(tb)?.length||0)>0}const jg="number",Ag="color",nb="var",ib="var(",Hp="${}",ab=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Al(i){const l=i.toString(),o=[],r={color:[],number:[],var:[]},u=[];let m=0;const y=l.replace(ab,p=>(Zt.test(p)?(r.color.push(m),u.push(Ag),o.push(Zt.parse(p))):p.startsWith(ib)?(r.var.push(m),u.push(nb),o.push(p)):(r.number.push(m),u.push(jg),o.push(parseFloat(p))),++m,Hp)).split(Hp);return{values:o,split:y,indexes:r,types:u}}function zg(i){return Al(i).values}function Mg(i){const{split:l,types:o}=Al(i),r=l.length;return u=>{let m="";for(let d=0;d<r;d++)if(m+=l[d],u[d]!==void 0){const y=o[d];y===jg?m+=xl(u[d]):y===Ag?m+=Zt.transform(u[d]):m+=u[d]}return m}}const lb=i=>typeof i=="number"?0:Zt.test(i)?Zt.getAnimatableNone(i):i;function sb(i){const l=zg(i);return Mg(i)(l.map(lb))}const Ke={test:eb,parse:zg,createTransformer:Mg,getAnimatableNone:sb};function eu(i,l,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?i+(l-i)*6*o:o<1/2?l:o<2/3?i+(l-i)*(2/3-o)*6:i}function ob({hue:i,saturation:l,lightness:o,alpha:r}){i/=360,l/=100,o/=100;let u=0,m=0,d=0;if(!l)u=m=d=o;else{const y=o<.5?o*(1+l):o+l-o*l,p=2*o-y;u=eu(p,y,i+1/3),m=eu(p,y,i),d=eu(p,y,i-1/3)}return{red:Math.round(u*255),green:Math.round(m*255),blue:Math.round(d*255),alpha:r}}function mo(i,l){return o=>o>0?l:i}const Rt=(i,l,o)=>i+(l-i)*o,nu=(i,l,o)=>{const r=i*i,u=o*(l*l-r)+r;return u<0?0:Math.sqrt(u)},rb=[vu,Si,ca],cb=i=>rb.find(l=>l.test(i));function Lp(i){const l=cb(i);if(!l)return!1;let o=l.parse(i);return l===ca&&(o=ob(o)),o}const qp=(i,l)=>{const o=Lp(i),r=Lp(l);if(!o||!r)return mo(i,l);const u={...o};return m=>(u.red=nu(o.red,r.red,m),u.green=nu(o.green,r.green,m),u.blue=nu(o.blue,r.blue,m),u.alpha=Rt(o.alpha,r.alpha,m),Si.transform(u))},xu=new Set(["none","hidden"]);function ub(i,l){return xu.has(i)?o=>o<=0?i:l:o=>o>=1?l:i}function fb(i,l){return o=>Rt(i,l,o)}function tf(i){return typeof i=="number"?fb:typeof i=="string"?Wu(i)?mo:Zt.test(i)?qp:mb:Array.isArray(i)?Eg:typeof i=="object"?Zt.test(i)?qp:db:mo}function Eg(i,l){const o=[...i],r=o.length,u=i.map((m,d)=>tf(m)(m,l[d]));return m=>{for(let d=0;d<r;d++)o[d]=u[d](m);return o}}function db(i,l){const o={...i,...l},r={};for(const u in o)i[u]!==void 0&&l[u]!==void 0&&(r[u]=tf(i[u])(i[u],l[u]));return u=>{for(const m in r)o[m]=r[m](u);return o}}function hb(i,l){const o=[],r={color:0,var:0,number:0};for(let u=0;u<l.values.length;u++){const m=l.types[u],d=i.indexes[m][r[m]],y=i.values[d]??0;o[u]=y,r[m]++}return o}const mb=(i,l)=>{const o=Ke.createTransformer(l),r=Al(i),u=Al(l);return r.indexes.var.length===u.indexes.var.length&&r.indexes.color.length===u.indexes.color.length&&r.indexes.number.length>=u.indexes.number.length?xu.has(i)&&!u.values.length||xu.has(l)&&!r.values.length?ub(i,l):El(Eg(hb(r,u),u.values),o):mo(i,l)};function Ng(i,l,o){return typeof i=="number"&&typeof l=="number"&&typeof o=="number"?Rt(i,l,o):tf(i)(i,l)}const pb=i=>{const l=({timestamp:o})=>i(o);return{start:(o=!0)=>Ct.update(l,o),stop:()=>Pn(l),now:()=>ne.isProcessing?ne.timestamp:re.now()}},Cg=(i,l,o=10)=>{let r="";const u=Math.max(Math.round(l/o),2);for(let m=0;m<u;m++)r+=Math.round(i(m/(u-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},po=2e4;function ef(i){let l=0;const o=50;let r=i.next(l);for(;!r.done&&l<po;)l+=o,r=i.next(l);return l>=po?1/0:l}function gb(i,l=100,o){const r=o({...i,keyframes:[0,l]}),u=Math.min(ef(r),po);return{type:"keyframes",ease:m=>r.next(u*m).value/l,duration:He(u)}}const yb=5;function Dg(i,l,o){const r=Math.max(l-yb,0);return cg(o-i(r),l-r)}const Bt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},iu=.001;function vb({duration:i=Bt.duration,bounce:l=Bt.bounce,velocity:o=Bt.velocity,mass:r=Bt.mass}){let u,m,d=1-l;d=en(Bt.minDamping,Bt.maxDamping,d),i=en(Bt.minDuration,Bt.maxDuration,He(i)),d<1?(u=g=>{const x=g*d,b=x*i,S=x-o,A=bu(g,d),M=Math.exp(-b);return iu-S/A*M},m=g=>{const b=g*d*i,S=b*o+o,A=Math.pow(d,2)*Math.pow(g,2)*i,M=Math.exp(-b),U=bu(Math.pow(g,2),d);return(-u(g)+iu>0?-1:1)*((S-A)*M)/U}):(u=g=>{const x=Math.exp(-g*i),b=(g-o)*i+1;return-iu+x*b},m=g=>{const x=Math.exp(-g*i),b=(o-g)*(i*i);return x*b});const y=5/i,p=bb(u,m,y);if(i=Ze(i),isNaN(p))return{stiffness:Bt.stiffness,damping:Bt.damping,duration:i};{const g=Math.pow(p,2)*r;return{stiffness:g,damping:d*2*Math.sqrt(r*g),duration:i}}}const xb=12;function bb(i,l,o){let r=o;for(let u=1;u<xb;u++)r=r-i(r)/l(r);return r}function bu(i,l){return i*Math.sqrt(1-l*l)}const Sb=["duration","bounce"],Tb=["stiffness","damping","mass"];function Yp(i,l){return l.some(o=>i[o]!==void 0)}function wb(i){let l={velocity:Bt.velocity,stiffness:Bt.stiffness,damping:Bt.damping,mass:Bt.mass,isResolvedFromDuration:!1,...i};if(!Yp(i,Tb)&&Yp(i,Sb))if(i.visualDuration){const o=i.visualDuration,r=2*Math.PI/(o*1.2),u=r*r,m=2*en(.05,1,1-(i.bounce||0))*Math.sqrt(u);l={...l,mass:Bt.mass,stiffness:u,damping:m}}else{const o=vb(i);l={...l,...o,mass:Bt.mass},l.isResolvedFromDuration=!0}return l}function go(i=Bt.visualDuration,l=Bt.bounce){const o=typeof i!="object"?{visualDuration:i,keyframes:[0,1],bounce:l}:i;let{restSpeed:r,restDelta:u}=o;const m=o.keyframes[0],d=o.keyframes[o.keyframes.length-1],y={done:!1,value:m},{stiffness:p,damping:g,mass:x,duration:b,velocity:S,isResolvedFromDuration:A}=wb({...o,velocity:-He(o.velocity||0)}),M=S||0,U=g/(2*Math.sqrt(p*x)),O=d-m,L=He(Math.sqrt(p/x)),G=Math.abs(O)<5;r||(r=G?Bt.restSpeed.granular:Bt.restSpeed.default),u||(u=G?Bt.restDelta.granular:Bt.restDelta.default);let Y;if(U<1){const Q=bu(L,U);Y=lt=>{const W=Math.exp(-U*L*lt);return d-W*((M+U*L*O)/Q*Math.sin(Q*lt)+O*Math.cos(Q*lt))}}else if(U===1)Y=Q=>d-Math.exp(-L*Q)*(O+(M+L*O)*Q);else{const Q=L*Math.sqrt(U*U-1);Y=lt=>{const W=Math.exp(-U*L*lt),J=Math.min(Q*lt,300);return d-W*((M+U*L*O)*Math.sinh(J)+Q*O*Math.cosh(J))/Q}}const F={calculatedDuration:A&&b||null,next:Q=>{const lt=Y(Q);if(A)y.done=Q>=b;else{let W=Q===0?M:0;U<1&&(W=Q===0?Ze(M):Dg(Y,Q,lt));const J=Math.abs(W)<=r,st=Math.abs(d-lt)<=u;y.done=J&&st}return y.value=y.done?d:lt,y},toString:()=>{const Q=Math.min(ef(F),po),lt=Cg(W=>F.next(Q*W).value,Q,30);return Q+"ms "+lt},toTransition:()=>{}};return F}go.applyToOptions=i=>{const l=gb(i,100,go);return i.ease=l.ease,i.duration=Ze(l.duration),i.type="keyframes",i};function Su({keyframes:i,velocity:l=0,power:o=.8,timeConstant:r=325,bounceDamping:u=10,bounceStiffness:m=500,modifyTarget:d,min:y,max:p,restDelta:g=.5,restSpeed:x}){const b=i[0],S={done:!1,value:b},A=J=>y!==void 0&&J<y||p!==void 0&&J>p,M=J=>y===void 0?p:p===void 0||Math.abs(y-J)<Math.abs(p-J)?y:p;let U=o*l;const O=b+U,L=d===void 0?O:d(O);L!==O&&(U=L-b);const G=J=>-U*Math.exp(-J/r),Y=J=>L+G(J),F=J=>{const st=G(J),vt=Y(J);S.done=Math.abs(st)<=g,S.value=S.done?L:vt};let Q,lt;const W=J=>{A(S.value)&&(Q=J,lt=go({keyframes:[S.value,M(S.value)],velocity:Dg(Y,J,S.value),damping:u,stiffness:m,restDelta:g,restSpeed:x}))};return W(0),{calculatedDuration:null,next:J=>{let st=!1;return!lt&&Q===void 0&&(st=!0,F(J),W(J)),Q!==void 0&&J>=Q?lt.next(J-Q):(!st&&F(J),S)}}}function jb(i,l,o){const r=[],u=o||Tn.mix||Ng,m=i.length-1;for(let d=0;d<m;d++){let y=u(i[d],i[d+1]);if(l){const p=Array.isArray(l)?l[d]||Le:l;y=El(p,y)}r.push(y)}return r}function Ab(i,l,{clamp:o=!0,ease:r,mixer:u}={}){const m=i.length;if(Ku(m===l.length),m===1)return()=>l[0];if(m===2&&l[0]===l[1])return()=>l[1];const d=i[0]===i[1];i[0]>i[m-1]&&(i=[...i].reverse(),l=[...l].reverse());const y=jb(l,r,u),p=y.length,g=x=>{if(d&&x<i[0])return l[0];let b=0;if(p>1)for(;b<i.length-2&&!(x<i[b+1]);b++);const S=wl(i[b],i[b+1],x);return y[b](S)};return o?x=>g(en(i[0],i[m-1],x)):g}function zb(i,l){const o=i[i.length-1];for(let r=1;r<=l;r++){const u=wl(0,l,r);i.push(Rt(o,1,u))}}function Mb(i){const l=[0];return zb(l,i.length-1),l}function Eb(i,l){return i.map(o=>o*l)}function Nb(i,l){return i.map(()=>l||vg).splice(0,i.length-1)}function bl({duration:i=300,keyframes:l,times:o,ease:r="easeInOut"}){const u=Lx(r)?r.map(Vp):Vp(r),m={done:!1,value:l[0]},d=Eb(o&&o.length===l.length?o:Mb(l),i),y=Ab(d,l,{ease:Array.isArray(u)?u:Nb(l,u)});return{calculatedDuration:i,next:p=>(m.value=y(p),m.done=p>=i,m)}}const Cb=i=>i!==null;function nf(i,{repeat:l,repeatType:o="loop"},r,u=1){const m=i.filter(Cb),y=u<0||l&&o!=="loop"&&l%2===1?0:m.length-1;return!y||r===void 0?m[y]:r}const Db={decay:Su,inertia:Su,tween:bl,keyframes:bl,spring:go};function kg(i){typeof i.type=="string"&&(i.type=Db[i.type])}class af{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(l=>{this.resolve=l})}notifyFinished(){this.resolve()}then(l,o){return this.finished.then(l,o)}}const kb=i=>i/100;class lf extends af{constructor(l){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:o}=this.options;o&&o.updatedAt!==re.now()&&this.tick(re.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=l,this.initAnimation(),this.play(),l.autoplay===!1&&this.pause()}initAnimation(){const{options:l}=this;kg(l);const{type:o=bl,repeat:r=0,repeatDelay:u=0,repeatType:m,velocity:d=0}=l;let{keyframes:y}=l;const p=o||bl;p!==bl&&typeof y[0]!="number"&&(this.mixKeyframes=El(kb,Ng(y[0],y[1])),y=[0,100]);const g=p({...l,keyframes:y});m==="mirror"&&(this.mirroredGenerator=p({...l,keyframes:[...y].reverse(),velocity:-d})),g.calculatedDuration===null&&(g.calculatedDuration=ef(g));const{calculatedDuration:x}=g;this.calculatedDuration=x,this.resolvedDuration=x+u,this.totalDuration=this.resolvedDuration*(r+1)-u,this.generator=g}updateTime(l){const o=Math.round(l-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=o}tick(l,o=!1){const{generator:r,totalDuration:u,mixKeyframes:m,mirroredGenerator:d,resolvedDuration:y,calculatedDuration:p}=this;if(this.startTime===null)return r.next(0);const{delay:g=0,keyframes:x,repeat:b,repeatType:S,repeatDelay:A,type:M,onUpdate:U,finalKeyframe:O}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,l):this.speed<0&&(this.startTime=Math.min(l-u/this.speed,this.startTime)),o?this.currentTime=l:this.updateTime(l);const L=this.currentTime-g*(this.playbackSpeed>=0?1:-1),G=this.playbackSpeed>=0?L<0:L>u;this.currentTime=Math.max(L,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let Y=this.currentTime,F=r;if(b){const J=Math.min(this.currentTime,u)/y;let st=Math.floor(J),vt=J%1;!vt&&J>=1&&(vt=1),vt===1&&st--,st=Math.min(st,b+1),st%2&&(S==="reverse"?(vt=1-vt,A&&(vt-=A/y)):S==="mirror"&&(F=d)),Y=en(0,1,vt)*y}const Q=G?{done:!1,value:x[0]}:F.next(Y);m&&(Q.value=m(Q.value));let{done:lt}=Q;!G&&p!==null&&(lt=this.playbackSpeed>=0?this.currentTime>=u:this.currentTime<=0);const W=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&lt);return W&&M!==Su&&(Q.value=nf(x,this.options,O,this.speed)),U&&U(Q.value),W&&this.finish(),Q}then(l,o){return this.finished.then(l,o)}get duration(){return He(this.calculatedDuration)}get iterationDuration(){const{delay:l=0}=this.options||{};return this.duration+He(l)}get time(){return He(this.currentTime)}set time(l){l=Ze(l),this.currentTime=l,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=l:this.driver&&(this.startTime=this.driver.now()-l/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(l){this.updateTime(re.now());const o=this.playbackSpeed!==l;this.playbackSpeed=l,o&&(this.time=He(this.currentTime))}play(){if(this.isStopped)return;const{driver:l=pb,startTime:o}=this.options;this.driver||(this.driver=l(u=>this.tick(u))),this.options.onPlay?.();const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=o??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(re.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(l){return this.startTime=0,this.tick(l,!0)}attachTimeline(l){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),l.observe(this)}}function Ob(i){for(let l=1;l<i.length;l++)i[l]??(i[l]=i[l-1])}const Ti=i=>i*180/Math.PI,Tu=i=>{const l=Ti(Math.atan2(i[1],i[0]));return wu(l)},Rb={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:i=>(Math.abs(i[0])+Math.abs(i[3]))/2,rotate:Tu,rotateZ:Tu,skewX:i=>Ti(Math.atan(i[1])),skewY:i=>Ti(Math.atan(i[2])),skew:i=>(Math.abs(i[1])+Math.abs(i[2]))/2},wu=i=>(i=i%360,i<0&&(i+=360),i),Gp=Tu,Xp=i=>Math.sqrt(i[0]*i[0]+i[1]*i[1]),Qp=i=>Math.sqrt(i[4]*i[4]+i[5]*i[5]),_b={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Xp,scaleY:Qp,scale:i=>(Xp(i)+Qp(i))/2,rotateX:i=>wu(Ti(Math.atan2(i[6],i[5]))),rotateY:i=>wu(Ti(Math.atan2(-i[2],i[0]))),rotateZ:Gp,rotate:Gp,skewX:i=>Ti(Math.atan(i[4])),skewY:i=>Ti(Math.atan(i[1])),skew:i=>(Math.abs(i[1])+Math.abs(i[4]))/2};function ju(i){return i.includes("scale")?1:0}function Au(i,l){if(!i||i==="none")return ju(l);const o=i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,u;if(o)r=_b,u=o;else{const y=i.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Rb,u=y}if(!u)return ju(l);const m=r[l],d=u[1].split(",").map(Ub);return typeof m=="function"?m(d):d[m]}const Vb=(i,l)=>{const{transform:o="none"}=getComputedStyle(i);return Au(o,l)};function Ub(i){return parseFloat(i.trim())}const xa=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ba=new Set(xa),Zp=i=>i===va||i===$,Bb=new Set(["x","y","z"]),Hb=xa.filter(i=>!Bb.has(i));function Lb(i){const l=[];return Hb.forEach(o=>{const r=i.getValue(o);r!==void 0&&(l.push([o,r.get()]),r.set(o.startsWith("scale")?1:0))}),l}const Fn={width:({x:i},{paddingLeft:l="0",paddingRight:o="0"})=>i.max-i.min-parseFloat(l)-parseFloat(o),height:({y:i},{paddingTop:l="0",paddingBottom:o="0"})=>i.max-i.min-parseFloat(l)-parseFloat(o),top:(i,{top:l})=>parseFloat(l),left:(i,{left:l})=>parseFloat(l),bottom:({y:i},{top:l})=>parseFloat(l)+(i.max-i.min),right:({x:i},{left:l})=>parseFloat(l)+(i.max-i.min),x:(i,{transform:l})=>Au(l,"x"),y:(i,{transform:l})=>Au(l,"y")};Fn.translateX=Fn.x;Fn.translateY=Fn.y;const wi=new Set;let zu=!1,Mu=!1,Eu=!1;function Og(){if(Mu){const i=Array.from(wi).filter(r=>r.needsMeasurement),l=new Set(i.map(r=>r.element)),o=new Map;l.forEach(r=>{const u=Lb(r);u.length&&(o.set(r,u),r.render())}),i.forEach(r=>r.measureInitialState()),l.forEach(r=>{r.render();const u=o.get(r);u&&u.forEach(([m,d])=>{r.getValue(m)?.set(d)})}),i.forEach(r=>r.measureEndState()),i.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Mu=!1,zu=!1,wi.forEach(i=>i.complete(Eu)),wi.clear()}function Rg(){wi.forEach(i=>{i.readKeyframes(),i.needsMeasurement&&(Mu=!0)})}function qb(){Eu=!0,Rg(),Og(),Eu=!1}class sf{constructor(l,o,r,u,m,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...l],this.onComplete=o,this.name=r,this.motionValue=u,this.element=m,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(wi.add(this),zu||(zu=!0,Ct.read(Rg),Ct.resolveKeyframes(Og))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:l,name:o,element:r,motionValue:u}=this;if(l[0]===null){const m=u?.get(),d=l[l.length-1];if(m!==void 0)l[0]=m;else if(r&&o){const y=r.readValue(o,d);y!=null&&(l[0]=y)}l[0]===void 0&&(l[0]=d),u&&m===void 0&&u.set(l[0])}Ob(l)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(l=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,l),wi.delete(this)}cancel(){this.state==="scheduled"&&(wi.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Yb=i=>i.startsWith("--");function Gb(i,l,o){Yb(l)?i.style.setProperty(l,o):i.style[l]=o}const Xb={};function _g(i,l){const o=rg(i);return()=>Xb[l]??o()}const Qb=_g(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Vg=_g(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),yl=([i,l,o,r])=>`cubic-bezier(${i}, ${l}, ${o}, ${r})`,Kp={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:yl([0,.65,.55,1]),circOut:yl([.55,0,1,.45]),backIn:yl([.31,.01,.66,-.59]),backOut:yl([.33,1.53,.69,.99])};function Ug(i,l){if(i)return typeof i=="function"?Vg()?Cg(i,l):"ease-out":xg(i)?yl(i):Array.isArray(i)?i.map(o=>Ug(o,l)||Kp.easeOut):Kp[i]}function Zb(i,l,o,{delay:r=0,duration:u=300,repeat:m=0,repeatType:d="loop",ease:y="easeOut",times:p}={},g=void 0){const x={[l]:o};p&&(x.offset=p);const b=Ug(y,u);Array.isArray(b)&&(x.easing=b);const S={delay:r,duration:u,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:m+1,direction:d==="reverse"?"alternate":"normal"};return g&&(S.pseudoElement=g),i.animate(x,S)}function Bg(i){return typeof i=="function"&&"applyToOptions"in i}function Kb({type:i,...l}){return Bg(i)&&Vg()?i.applyToOptions(l):(l.duration??(l.duration=300),l.ease??(l.ease="easeOut"),l)}class Hg extends af{constructor(l){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!l)return;const{element:o,name:r,keyframes:u,pseudoElement:m,allowFlatten:d=!1,finalKeyframe:y,onComplete:p}=l;this.isPseudoElement=!!m,this.allowFlatten=d,this.options=l,Ku(typeof l.type!="string");const g=Kb(l);this.animation=Zb(o,r,u,g,m),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!m){const x=nf(u,this.options,y,this.speed);this.updateMotionValue?this.updateMotionValue(x):Gb(o,r,x),this.animation.cancel()}p?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:l}=this;l==="idle"||l==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const l=this.options?.element;!this.isPseudoElement&&l?.isConnected&&this.animation.commitStyles?.()}get duration(){const l=this.animation.effect?.getComputedTiming?.().duration||0;return He(Number(l))}get iterationDuration(){const{delay:l=0}=this.options||{};return this.duration+He(l)}get time(){return He(Number(this.animation.currentTime)||0)}set time(l){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Ze(l)}get speed(){return this.animation.playbackRate}set speed(l){l<0&&(this.finishedTime=null),this.animation.playbackRate=l}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(l){this.manualStartTime=this.animation.startTime=l}attachTimeline({timeline:l,observe:o}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,l&&Qb()?(this.animation.timeline=l,Le):o(this)}}const Lg={anticipate:pg,backInOut:mg,circInOut:yg};function Jb(i){return i in Lg}function Fb(i){typeof i.ease=="string"&&Jb(i.ease)&&(i.ease=Lg[i.ease])}const au=10;class Pb extends Hg{constructor(l){Fb(l),kg(l),super(l),l.startTime!==void 0&&(this.startTime=l.startTime),this.options=l}updateMotionValue(l){const{motionValue:o,onUpdate:r,onComplete:u,element:m,...d}=this.options;if(!o)return;if(l!==void 0){o.set(l);return}const y=new lf({...d,autoplay:!1}),p=Math.max(au,re.now()-this.startTime),g=en(0,au,p-au);o.setWithVelocity(y.sample(Math.max(0,p-g)).value,y.sample(p).value,g),y.stop()}}const Jp=(i,l)=>l==="zIndex"?!1:!!(typeof i=="number"||Array.isArray(i)||typeof i=="string"&&(Ke.test(i)||i==="0")&&!i.startsWith("url("));function Wb(i){const l=i[0];if(i.length===1)return!0;for(let o=0;o<i.length;o++)if(i[o]!==l)return!0}function $b(i,l,o,r){const u=i[0];if(u===null)return!1;if(l==="display"||l==="visibility")return!0;const m=i[i.length-1],d=Jp(u,l),y=Jp(m,l);return!d||!y?!1:Wb(i)||(o==="spring"||Bg(o))&&r}function Nu(i){i.duration=0,i.type="keyframes"}const Ib=new Set(["opacity","clipPath","filter","transform"]),t2=rg(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function e2(i){const{motionValue:l,name:o,repeatDelay:r,repeatType:u,damping:m,type:d}=i;if(!(l?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:g}=l.owner.getProps();return t2()&&o&&Ib.has(o)&&(o!=="transform"||!g)&&!p&&!r&&u!=="mirror"&&m!==0&&d!=="inertia"}const n2=40;class i2 extends af{constructor({autoplay:l=!0,delay:o=0,type:r="keyframes",repeat:u=0,repeatDelay:m=0,repeatType:d="loop",keyframes:y,name:p,motionValue:g,element:x,...b}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=re.now();const S={autoplay:l,delay:o,type:r,repeat:u,repeatDelay:m,repeatType:d,name:p,motionValue:g,element:x,...b},A=x?.KeyframeResolver||sf;this.keyframeResolver=new A(y,(M,U,O)=>this.onKeyframesResolved(M,U,S,!O),p,g,x),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(l,o,r,u){this.keyframeResolver=void 0;const{name:m,type:d,velocity:y,delay:p,isHandoff:g,onUpdate:x}=r;this.resolvedAt=re.now(),$b(l,m,d,y)||((Tn.instantAnimations||!p)&&x?.(nf(l,r,o)),l[0]=l[l.length-1],Nu(r),r.repeat=0);const S={startTime:u?this.resolvedAt?this.resolvedAt-this.createdAt>n2?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:o,...r,keyframes:l},A=!g&&e2(S),M=S.motionValue?.owner?.current,U=A?new Pb({...S,element:M}):new lf(S);U.finished.then(()=>{this.notifyFinished()}).catch(Le),this.pendingTimeline&&(this.stopTimeline=U.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=U}get finished(){return this._animation?this.animation.finished:this._finished}then(l,o){return this.finished.finally(l).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),qb()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(l){this.animation.time=l}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(l){this.animation.speed=l}get startTime(){return this.animation.startTime}attachTimeline(l){return this._animation?this.stopTimeline=this.animation.attachTimeline(l):this.pendingTimeline=l,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function qg(i,l,o,r=0,u=1){const m=Array.from(i).sort((g,x)=>g.sortNodePosition(x)).indexOf(l),d=i.size,y=(d-1)*r;return typeof o=="function"?o(m,d):u===1?m*r:y-m*r}const a2=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function l2(i){const l=a2.exec(i);if(!l)return[,];const[,o,r,u]=l;return[`--${o??r}`,u]}function Yg(i,l,o=1){const[r,u]=l2(i);if(!r)return;const m=window.getComputedStyle(l).getPropertyValue(r);if(m){const d=m.trim();return lg(d)?parseFloat(d):d}return Wu(u)?Yg(u,l,o+1):u}const s2={type:"spring",stiffness:500,damping:25,restSpeed:10},o2=i=>({type:"spring",stiffness:550,damping:i===0?2*Math.sqrt(550):30,restSpeed:10}),r2={type:"keyframes",duration:.8},c2={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},u2=(i,{keyframes:l})=>l.length>2?r2:ba.has(i)?i.startsWith("scale")?o2(l[1]):s2:c2,f2=i=>i!==null;function d2(i,{repeat:l,repeatType:o="loop"},r){const u=i.filter(f2),m=l&&o!=="loop"&&l%2===1?0:u.length-1;return u[m]}function Gg(i,l){if(i?.inherit&&l){const{inherit:o,...r}=i;return{...l,...r}}return i}function of(i,l){const o=i?.[l]??i?.default??i;return o!==i?Gg(o,i):o}function h2({when:i,delay:l,delayChildren:o,staggerChildren:r,staggerDirection:u,repeat:m,repeatType:d,repeatDelay:y,from:p,elapsed:g,...x}){return!!Object.keys(x).length}const rf=(i,l,o,r={},u,m)=>d=>{const y=of(r,i)||{},p=y.delay||r.delay||0;let{elapsed:g=0}=r;g=g-Ze(p);const x={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:l.getVelocity(),...y,delay:-g,onUpdate:S=>{l.set(S),y.onUpdate&&y.onUpdate(S)},onComplete:()=>{d(),y.onComplete&&y.onComplete()},name:i,motionValue:l,element:m?void 0:u};h2(y)||Object.assign(x,u2(i,x)),x.duration&&(x.duration=Ze(x.duration)),x.repeatDelay&&(x.repeatDelay=Ze(x.repeatDelay)),x.from!==void 0&&(x.keyframes[0]=x.from);let b=!1;if((x.type===!1||x.duration===0&&!x.repeatDelay)&&(Nu(x),x.delay===0&&(b=!0)),(Tn.instantAnimations||Tn.skipAnimations||u?.shouldSkipAnimations)&&(b=!0,Nu(x),x.delay=0),x.allowFlatten=!y.type&&!y.ease,b&&!m&&l.get()!==void 0){const S=d2(x.keyframes,y);if(S!==void 0){Ct.update(()=>{x.onUpdate(S),x.onComplete()});return}}return y.isSync?new lf(x):new i2(x)};function Fp(i){const l=[{},{}];return i?.values.forEach((o,r)=>{l[0][r]=o.get(),l[1][r]=o.getVelocity()}),l}function cf(i,l,o,r){if(typeof l=="function"){const[u,m]=Fp(r);l=l(o!==void 0?o:i.custom,u,m)}if(typeof l=="string"&&(l=i.variants&&i.variants[l]),typeof l=="function"){const[u,m]=Fp(r);l=l(o!==void 0?o:i.custom,u,m)}return l}function ma(i,l,o){const r=i.getProps();return cf(r,l,o!==void 0?o:r.custom,i)}const Xg=new Set(["width","height","top","left","right","bottom",...xa]),Pp=30,m2=i=>!isNaN(parseFloat(i));class p2{constructor(l,o={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{const u=re.now();if(this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const m of this.dependents)m.dirty()},this.hasAnimated=!1,this.setCurrent(l),this.owner=o.owner}setCurrent(l){this.current=l,this.updatedAt=re.now(),this.canTrackVelocity===null&&l!==void 0&&(this.canTrackVelocity=m2(this.current))}setPrevFrameValue(l=this.current){this.prevFrameValue=l,this.prevUpdatedAt=this.updatedAt}onChange(l){return this.on("change",l)}on(l,o){this.events[l]||(this.events[l]=new Ju);const r=this.events[l].add(o);return l==="change"?()=>{r(),Ct.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const l in this.events)this.events[l].clear()}attach(l,o){this.passiveEffect=l,this.stopPassiveEffect=o}set(l){this.passiveEffect?this.passiveEffect(l,this.updateAndNotify):this.updateAndNotify(l)}setWithVelocity(l,o,r){this.set(o),this.prev=void 0,this.prevFrameValue=l,this.prevUpdatedAt=this.updatedAt-r}jump(l,o=!0){this.updateAndNotify(l),this.prev=l,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(l){this.dependents||(this.dependents=new Set),this.dependents.add(l)}removeDependent(l){this.dependents&&this.dependents.delete(l)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const l=re.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||l-this.updatedAt>Pp)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,Pp);return cg(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(l){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=l(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function pa(i,l){return new p2(i,l)}const Cu=i=>Array.isArray(i);function g2(i,l,o){i.hasValue(l)?i.getValue(l).set(o):i.addValue(l,pa(o))}function y2(i){return Cu(i)?i[i.length-1]||0:i}function v2(i,l){const o=ma(i,l);let{transitionEnd:r={},transition:u={},...m}=o||{};m={...m,...r};for(const d in m){const y=y2(m[d]);g2(i,d,y)}}const le=i=>!!(i&&i.getVelocity);function x2(i){return!!(le(i)&&i.add)}function Du(i,l){const o=i.getValue("willChange");if(x2(o))return o.add(l);if(!o&&Tn.WillChange){const r=new Tn.WillChange("auto");i.addValue("willChange",r),r.add(l)}}function uf(i){return i.replace(/([A-Z])/g,l=>`-${l.toLowerCase()}`)}const b2="framerAppearId",Qg="data-"+uf(b2);function Zg(i){return i.props[Qg]}function S2({protectedKeys:i,needsAnimating:l},o){const r=i.hasOwnProperty(o)&&l[o]!==!0;return l[o]=!1,r}function Kg(i,l,{delay:o=0,transitionOverride:r,type:u}={}){let{transition:m,transitionEnd:d,...y}=l;const p=i.getDefaultTransition();m=m?Gg(m,p):p;const g=m?.reduceMotion;r&&(m=r);const x=[],b=u&&i.animationState&&i.animationState.getState()[u];for(const S in y){const A=i.getValue(S,i.latestValues[S]??null),M=y[S];if(M===void 0||b&&S2(b,S))continue;const U={delay:o,...of(m||{},S)},O=A.get();if(O!==void 0&&!A.isAnimating&&!Array.isArray(M)&&M===O&&!U.velocity)continue;let L=!1;if(window.MotionHandoffAnimation){const F=Zg(i);if(F){const Q=window.MotionHandoffAnimation(F,S,Ct);Q!==null&&(U.startTime=Q,L=!0)}}Du(i,S);const G=g??i.shouldReduceMotion;A.start(rf(S,A,M,G&&Xg.has(S)?{type:!1}:U,i,L));const Y=A.animation;Y&&x.push(Y)}if(d){const S=()=>Ct.update(()=>{d&&v2(i,d)});x.length?Promise.all(x).then(S):S()}return x}function ku(i,l,o={}){const r=ma(i,l,o.type==="exit"?i.presenceContext?.custom:void 0);let{transition:u=i.getDefaultTransition()||{}}=r||{};o.transitionOverride&&(u=o.transitionOverride);const m=r?()=>Promise.all(Kg(i,r,o)):()=>Promise.resolve(),d=i.variantChildren&&i.variantChildren.size?(p=0)=>{const{delayChildren:g=0,staggerChildren:x,staggerDirection:b}=u;return T2(i,l,p,g,x,b,o)}:()=>Promise.resolve(),{when:y}=u;if(y){const[p,g]=y==="beforeChildren"?[m,d]:[d,m];return p().then(()=>g())}else return Promise.all([m(),d(o.delay)])}function T2(i,l,o=0,r=0,u=0,m=1,d){const y=[];for(const p of i.variantChildren)p.notify("AnimationStart",l),y.push(ku(p,l,{...d,delay:o+(typeof r=="function"?0:r)+qg(i.variantChildren,p,r,u,m)}).then(()=>p.notify("AnimationComplete",l)));return Promise.all(y)}function w2(i,l,o={}){i.notify("AnimationStart",l);let r;if(Array.isArray(l)){const u=l.map(m=>ku(i,m,o));r=Promise.all(u)}else if(typeof l=="string")r=ku(i,l,o);else{const u=typeof l=="function"?ma(i,l,o.custom):l;r=Promise.all(Kg(i,u,o))}return r.then(()=>{i.notify("AnimationComplete",l)})}const j2={test:i=>i==="auto",parse:i=>i},Jg=i=>l=>l.test(i),Fg=[va,$,tn,Jn,Ix,$x,j2],Wp=i=>Fg.find(Jg(i));function A2(i){return typeof i=="number"?i===0:i!==null?i==="none"||i==="0"||og(i):!0}const z2=new Set(["brightness","contrast","saturate","opacity"]);function M2(i){const[l,o]=i.slice(0,-1).split("(");if(l==="drop-shadow")return i;const[r]=o.match($u)||[];if(!r)return i;const u=o.replace(r,"");let m=z2.has(l)?1:0;return r!==o&&(m*=100),l+"("+m+u+")"}const E2=/\b([a-z-]*)\(.*?\)/gu,Ou={...Ke,getAnimatableNone:i=>{const l=i.match(E2);return l?l.map(M2).join(" "):i}},Ru={...Ke,getAnimatableNone:i=>{const l=Ke.parse(i);return Ke.createTransformer(i)(l.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},$p={...va,transform:Math.round},N2={rotate:Jn,rotateX:Jn,rotateY:Jn,rotateZ:Jn,scale:eo,scaleX:eo,scaleY:eo,scaleZ:eo,skew:Jn,skewX:Jn,skewY:Jn,distance:$,translateX:$,translateY:$,translateZ:$,x:$,y:$,z:$,perspective:$,transformPerspective:$,opacity:jl,originX:Bp,originY:Bp,originZ:$},ff={borderWidth:$,borderTopWidth:$,borderRightWidth:$,borderBottomWidth:$,borderLeftWidth:$,borderRadius:$,borderTopLeftRadius:$,borderTopRightRadius:$,borderBottomRightRadius:$,borderBottomLeftRadius:$,width:$,maxWidth:$,height:$,maxHeight:$,top:$,right:$,bottom:$,left:$,inset:$,insetBlock:$,insetBlockStart:$,insetBlockEnd:$,insetInline:$,insetInlineStart:$,insetInlineEnd:$,padding:$,paddingTop:$,paddingRight:$,paddingBottom:$,paddingLeft:$,paddingBlock:$,paddingBlockStart:$,paddingBlockEnd:$,paddingInline:$,paddingInlineStart:$,paddingInlineEnd:$,margin:$,marginTop:$,marginRight:$,marginBottom:$,marginLeft:$,marginBlock:$,marginBlockStart:$,marginBlockEnd:$,marginInline:$,marginInlineStart:$,marginInlineEnd:$,fontSize:$,backgroundPositionX:$,backgroundPositionY:$,...N2,zIndex:$p,fillOpacity:jl,strokeOpacity:jl,numOctaves:$p},C2={...ff,color:Zt,backgroundColor:Zt,outlineColor:Zt,fill:Zt,stroke:Zt,borderColor:Zt,borderTopColor:Zt,borderRightColor:Zt,borderBottomColor:Zt,borderLeftColor:Zt,filter:Ou,WebkitFilter:Ou,mask:Ru,WebkitMask:Ru},Pg=i=>C2[i],D2=new Set([Ou,Ru]);function Wg(i,l){let o=Pg(i);return D2.has(o)||(o=Ke),o.getAnimatableNone?o.getAnimatableNone(l):void 0}const k2=new Set(["auto","none","0"]);function O2(i,l,o){let r=0,u;for(;r<i.length&&!u;){const m=i[r];typeof m=="string"&&!k2.has(m)&&Al(m).values.length&&(u=i[r]),r++}if(u&&o)for(const m of l)i[m]=Wg(o,u)}class R2 extends sf{constructor(l,o,r,u,m){super(l,o,r,u,m,!0)}readKeyframes(){const{unresolvedKeyframes:l,element:o,name:r}=this;if(!o||!o.current)return;super.readKeyframes();for(let x=0;x<l.length;x++){let b=l[x];if(typeof b=="string"&&(b=b.trim(),Wu(b))){const S=Yg(b,o.current);S!==void 0&&(l[x]=S),x===l.length-1&&(this.finalKeyframe=b)}}if(this.resolveNoneKeyframes(),!Xg.has(r)||l.length!==2)return;const[u,m]=l,d=Wp(u),y=Wp(m),p=Up(u),g=Up(m);if(p!==g&&Fn[r]){this.needsMeasurement=!0;return}if(d!==y)if(Zp(d)&&Zp(y))for(let x=0;x<l.length;x++){const b=l[x];typeof b=="string"&&(l[x]=parseFloat(b))}else Fn[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:l,name:o}=this,r=[];for(let u=0;u<l.length;u++)(l[u]===null||A2(l[u]))&&r.push(u);r.length&&O2(l,r,o)}measureInitialState(){const{element:l,unresolvedKeyframes:o,name:r}=this;if(!l||!l.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Fn[r](l.measureViewportBox(),window.getComputedStyle(l.current)),o[0]=this.measuredOrigin;const u=o[o.length-1];u!==void 0&&l.getValue(r,u).jump(u,!1)}measureEndState(){const{element:l,name:o,unresolvedKeyframes:r}=this;if(!l||!l.current)return;const u=l.getValue(o);u&&u.jump(this.measuredOrigin,!1);const m=r.length-1,d=r[m];r[m]=Fn[o](l.measureViewportBox(),window.getComputedStyle(l.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),this.removedTransforms?.length&&this.removedTransforms.forEach(([y,p])=>{l.getValue(y).set(p)}),this.resolveNoneKeyframes()}}const _2=new Set(["opacity","clipPath","filter","transform"]);function $g(i,l,o){if(i==null)return[];if(i instanceof EventTarget)return[i];if(typeof i=="string"){let r=document;const u=o?.[i]??r.querySelectorAll(i);return u?Array.from(u):[]}return Array.from(i).filter(r=>r!=null)}const Ig=(i,l)=>l&&typeof i=="number"?l.transform(i):i;function _u(i){return sg(i)&&"offsetHeight"in i}const{schedule:df}=bg(queueMicrotask,!1),Qe={x:!1,y:!1};function ty(){return Qe.x||Qe.y}function V2(i){return i==="x"||i==="y"?Qe[i]?null:(Qe[i]=!0,()=>{Qe[i]=!1}):Qe.x||Qe.y?null:(Qe.x=Qe.y=!0,()=>{Qe.x=Qe.y=!1})}function ey(i,l){const o=$g(i),r=new AbortController,u={passive:!0,...l,signal:r.signal};return[o,u,()=>r.abort()]}function U2(i){return!(i.pointerType==="touch"||ty())}function B2(i,l,o={}){const[r,u,m]=ey(i,o);return r.forEach(d=>{let y=!1,p=!1,g;const x=()=>{d.removeEventListener("pointerleave",M)},b=O=>{g&&(g(O),g=void 0),x()},S=O=>{y=!1,window.removeEventListener("pointerup",S),window.removeEventListener("pointercancel",S),p&&(p=!1,b(O))},A=()=>{y=!0,window.addEventListener("pointerup",S,u),window.addEventListener("pointercancel",S,u)},M=O=>{if(O.pointerType!=="touch"){if(y){p=!0;return}b(O)}},U=O=>{if(!U2(O))return;p=!1;const L=l(d,O);typeof L=="function"&&(g=L,d.addEventListener("pointerleave",M,u))};d.addEventListener("pointerenter",U,u),d.addEventListener("pointerdown",A,u)}),m}const ny=(i,l)=>l?i===l?!0:ny(i,l.parentElement):!1,hf=i=>i.pointerType==="mouse"?typeof i.button!="number"||i.button<=0:i.isPrimary!==!1,H2=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function L2(i){return H2.has(i.tagName)||i.isContentEditable===!0}const q2=new Set(["INPUT","SELECT","TEXTAREA"]);function Y2(i){return q2.has(i.tagName)||i.isContentEditable===!0}const lo=new WeakSet;function Ip(i){return l=>{l.key==="Enter"&&i(l)}}function lu(i,l){i.dispatchEvent(new PointerEvent("pointer"+l,{isPrimary:!0,bubbles:!0}))}const G2=(i,l)=>{const o=i.currentTarget;if(!o)return;const r=Ip(()=>{if(lo.has(o))return;lu(o,"down");const u=Ip(()=>{lu(o,"up")}),m=()=>lu(o,"cancel");o.addEventListener("keyup",u,l),o.addEventListener("blur",m,l)});o.addEventListener("keydown",r,l),o.addEventListener("blur",()=>o.removeEventListener("keydown",r),l)};function t0(i){return hf(i)&&!ty()}const e0=new WeakSet;function X2(i,l,o={}){const[r,u,m]=ey(i,o),d=y=>{const p=y.currentTarget;if(!t0(y)||e0.has(y))return;lo.add(p),o.stopPropagation&&e0.add(y);const g=l(p,y),x=(A,M)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",S),lo.has(p)&&lo.delete(p),t0(A)&&typeof g=="function"&&g(A,{success:M})},b=A=>{x(A,p===window||p===document||o.useGlobalTarget||ny(p,A.target))},S=A=>{x(A,!1)};window.addEventListener("pointerup",b,u),window.addEventListener("pointercancel",S,u)};return r.forEach(y=>{(o.useGlobalTarget?window:y).addEventListener("pointerdown",d,u),_u(y)&&(y.addEventListener("focus",g=>G2(g,u)),!L2(y)&&!y.hasAttribute("tabindex")&&(y.tabIndex=0))}),m}function mf(i){return sg(i)&&"ownerSVGElement"in i}const so=new WeakMap;let oo;const iy=(i,l,o)=>(r,u)=>u&&u[0]?u[0][i+"Size"]:mf(r)&&"getBBox"in r?r.getBBox()[l]:r[o],Q2=iy("inline","width","offsetWidth"),Z2=iy("block","height","offsetHeight");function K2({target:i,borderBoxSize:l}){so.get(i)?.forEach(o=>{o(i,{get width(){return Q2(i,l)},get height(){return Z2(i,l)}})})}function J2(i){i.forEach(K2)}function F2(){typeof ResizeObserver>"u"||(oo=new ResizeObserver(J2))}function P2(i,l){oo||F2();const o=$g(i);return o.forEach(r=>{let u=so.get(r);u||(u=new Set,so.set(r,u)),u.add(l),oo?.observe(r)}),()=>{o.forEach(r=>{const u=so.get(r);u?.delete(l),u?.size||oo?.unobserve(r)})}}const ro=new Set;let ua;function W2(){ua=()=>{const i={get width(){return window.innerWidth},get height(){return window.innerHeight}};ro.forEach(l=>l(i))},window.addEventListener("resize",ua)}function $2(i){return ro.add(i),ua||W2(),()=>{ro.delete(i),!ro.size&&typeof ua=="function"&&(window.removeEventListener("resize",ua),ua=void 0)}}function n0(i,l){return typeof i=="function"?$2(i):P2(i,l)}function I2(i){return mf(i)&&i.tagName==="svg"}const tS=[...Fg,Zt,Ke],eS=i=>tS.find(Jg(i)),i0=()=>({translate:0,scale:1,origin:0,originPoint:0}),fa=()=>({x:i0(),y:i0()}),a0=()=>({min:0,max:0}),Jt=()=>({x:a0(),y:a0()}),nS=new WeakMap;function wo(i){return i!==null&&typeof i=="object"&&typeof i.start=="function"}function zl(i){return typeof i=="string"||Array.isArray(i)}const pf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],gf=["initial",...pf];function jo(i){return wo(i.animate)||gf.some(l=>zl(i[l]))}function ay(i){return!!(jo(i)||i.variants)}function iS(i,l,o){for(const r in l){const u=l[r],m=o[r];if(le(u))i.addValue(r,u);else if(le(m))i.addValue(r,pa(u,{owner:i}));else if(m!==u)if(i.hasValue(r)){const d=i.getValue(r);d.liveStyle===!0?d.jump(u):d.hasAnimated||d.set(u)}else{const d=i.getStaticValue(r);i.addValue(r,pa(d!==void 0?d:u,{owner:i}))}}for(const r in o)l[r]===void 0&&i.removeValue(r);return l}const Vu={current:null},ly={current:!1},aS=typeof window<"u";function lS(){if(ly.current=!0,!!aS)if(window.matchMedia){const i=window.matchMedia("(prefers-reduced-motion)"),l=()=>Vu.current=i.matches;i.addEventListener("change",l),l()}else Vu.current=!1}const l0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let yo={};function sy(i){yo=i}function sS(){return yo}class oS{scrapeMotionValuesFromProps(l,o,r){return{}}constructor({parent:l,props:o,presenceContext:r,reducedMotionConfig:u,skipAnimations:m,blockInitialAnimation:d,visualState:y},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=sf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const A=re.now();this.renderScheduledAt<A&&(this.renderScheduledAt=A,Ct.render(this.render,!1,!0))};const{latestValues:g,renderState:x}=y;this.latestValues=g,this.baseTarget={...g},this.initialValues=o.initial?{...g}:{},this.renderState=x,this.parent=l,this.props=o,this.presenceContext=r,this.depth=l?l.depth+1:0,this.reducedMotionConfig=u,this.skipAnimationsConfig=m,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=jo(o),this.isVariantNode=ay(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(l&&l.current);const{willChange:b,...S}=this.scrapeMotionValuesFromProps(o,{},this);for(const A in S){const M=S[A];g[A]!==void 0&&le(M)&&M.set(g[A])}}mount(l){if(this.hasBeenMounted)for(const o in this.initialValues)this.values.get(o)?.jump(this.initialValues[o]),this.latestValues[o]=this.initialValues[o];this.current=l,nS.set(l,this),this.projection&&!this.projection.instance&&this.projection.mount(l),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,r)=>this.bindToMotionValue(r,o)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(ly.current||lS(),this.shouldReduceMotion=Vu.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Pn(this.notifyUpdate),Pn(this.render),this.valueSubscriptions.forEach(l=>l()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const l in this.events)this.events[l].clear();for(const l in this.features){const o=this.features[l];o&&(o.unmount(),o.isMounted=!1)}this.current=null}addChild(l){this.children.add(l),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(l)}removeChild(l){this.children.delete(l),this.enteringChildren&&this.enteringChildren.delete(l)}bindToMotionValue(l,o){if(this.valueSubscriptions.has(l)&&this.valueSubscriptions.get(l)(),o.accelerate&&_2.has(l)&&this.current instanceof HTMLElement){const{factory:d,keyframes:y,times:p,ease:g,duration:x}=o.accelerate,b=new Hg({element:this.current,name:l,keyframes:y,times:p,ease:g,duration:Ze(x)}),S=d(b);this.valueSubscriptions.set(l,()=>{S(),b.cancel()});return}const r=ba.has(l);r&&this.onBindTransform&&this.onBindTransform();const u=o.on("change",d=>{this.latestValues[l]=d,this.props.onUpdate&&Ct.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let m;typeof window<"u"&&window.MotionCheckAppearSync&&(m=window.MotionCheckAppearSync(this,l,o)),this.valueSubscriptions.set(l,()=>{u(),m&&m(),o.owner&&o.stop()})}sortNodePosition(l){return!this.current||!this.sortInstanceNodePosition||this.type!==l.type?0:this.sortInstanceNodePosition(this.current,l.current)}updateFeatures(){let l="animation";for(l in yo){const o=yo[l];if(!o)continue;const{isEnabled:r,Feature:u}=o;if(!this.features[l]&&u&&r(this.props)&&(this.features[l]=new u(this)),this.features[l]){const m=this.features[l];m.isMounted?m.update():(m.mount(),m.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Jt()}getStaticValue(l){return this.latestValues[l]}setStaticValue(l,o){this.latestValues[l]=o}update(l,o){(l.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=l,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let r=0;r<l0.length;r++){const u=l0[r];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const m="on"+u,d=l[m];d&&(this.propEventSubscriptions[u]=this.on(u,d))}this.prevMotionValues=iS(this,this.scrapeMotionValuesFromProps(l,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(l){return this.props.variants?this.props.variants[l]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(l){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(l),()=>o.variantChildren.delete(l)}addValue(l,o){const r=this.values.get(l);o!==r&&(r&&this.removeValue(l),this.bindToMotionValue(l,o),this.values.set(l,o),this.latestValues[l]=o.get())}removeValue(l){this.values.delete(l);const o=this.valueSubscriptions.get(l);o&&(o(),this.valueSubscriptions.delete(l)),delete this.latestValues[l],this.removeValueFromRenderState(l,this.renderState)}hasValue(l){return this.values.has(l)}getValue(l,o){if(this.props.values&&this.props.values[l])return this.props.values[l];let r=this.values.get(l);return r===void 0&&o!==void 0&&(r=pa(o===null?void 0:o,{owner:this}),this.addValue(l,r)),r}readValue(l,o){let r=this.latestValues[l]!==void 0||!this.current?this.latestValues[l]:this.getBaseTargetFromProps(this.props,l)??this.readValueFromInstance(this.current,l,this.options);return r!=null&&(typeof r=="string"&&(lg(r)||og(r))?r=parseFloat(r):!eS(r)&&Ke.test(o)&&(r=Wg(l,o)),this.setBaseTarget(l,le(r)?r.get():r)),le(r)?r.get():r}setBaseTarget(l,o){this.baseTarget[l]=o}getBaseTarget(l){const{initial:o}=this.props;let r;if(typeof o=="string"||typeof o=="object"){const m=cf(this.props,o,this.presenceContext?.custom);m&&(r=m[l])}if(o&&r!==void 0)return r;const u=this.getBaseTargetFromProps(this.props,l);return u!==void 0&&!le(u)?u:this.initialValues[l]!==void 0&&r===void 0?void 0:this.baseTarget[l]}on(l,o){return this.events[l]||(this.events[l]=new Ju),this.events[l].add(o)}notify(l,...o){this.events[l]&&this.events[l].notify(...o)}scheduleRenderMicrotask(){df.render(this.render)}}class oy extends oS{constructor(){super(...arguments),this.KeyframeResolver=R2}sortInstanceNodePosition(l,o){return l.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(l,o){const r=l.style;return r?r[o]:void 0}removeValueFromRenderState(l,{vars:o,style:r}){delete o[l],delete r[l]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:l}=this.props;le(l)&&(this.childSubscription=l.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}class $n{constructor(l){this.isMounted=!1,this.node=l}update(){}}function ry({top:i,left:l,right:o,bottom:r}){return{x:{min:l,max:o},y:{min:i,max:r}}}function rS({x:i,y:l}){return{top:l.min,right:i.max,bottom:l.max,left:i.min}}function cS(i,l){if(!l)return i;const o=l({x:i.left,y:i.top}),r=l({x:i.right,y:i.bottom});return{top:o.y,left:o.x,bottom:r.y,right:r.x}}function su(i){return i===void 0||i===1}function Uu({scale:i,scaleX:l,scaleY:o}){return!su(i)||!su(l)||!su(o)}function bi(i){return Uu(i)||cy(i)||i.z||i.rotate||i.rotateX||i.rotateY||i.skewX||i.skewY}function cy(i){return s0(i.x)||s0(i.y)}function s0(i){return i&&i!=="0%"}function vo(i,l,o){const r=i-o,u=l*r;return o+u}function o0(i,l,o,r,u){return u!==void 0&&(i=vo(i,u,r)),vo(i,o,r)+l}function Bu(i,l=0,o=1,r,u){i.min=o0(i.min,l,o,r,u),i.max=o0(i.max,l,o,r,u)}function uy(i,{x:l,y:o}){Bu(i.x,l.translate,l.scale,l.originPoint),Bu(i.y,o.translate,o.scale,o.originPoint)}const r0=.999999999999,c0=1.0000000000001;function uS(i,l,o,r=!1){const u=o.length;if(!u)return;l.x=l.y=1;let m,d;for(let y=0;y<u;y++){m=o[y],d=m.projectionDelta;const{visualElement:p}=m.options;p&&p.props.style&&p.props.style.display==="contents"||(r&&m.options.layoutScroll&&m.scroll&&m!==m.root&&ha(i,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),d&&(l.x*=d.x.scale,l.y*=d.y.scale,uy(i,d)),r&&bi(m.latestValues)&&ha(i,m.latestValues))}l.x<c0&&l.x>r0&&(l.x=1),l.y<c0&&l.y>r0&&(l.y=1)}function da(i,l){i.min=i.min+l,i.max=i.max+l}function u0(i,l,o,r,u=.5){const m=Rt(i.min,i.max,u);Bu(i,l,o,m,r)}function ha(i,l){u0(i.x,l.x,l.scaleX,l.scale,l.originX),u0(i.y,l.y,l.scaleY,l.scale,l.originY)}function fy(i,l){return ry(cS(i.getBoundingClientRect(),l))}function fS(i,l,o){const r=fy(i,o),{scroll:u}=l;return u&&(da(r.x,u.offset.x),da(r.y,u.offset.y)),r}const dS={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},hS=xa.length;function mS(i,l,o){let r="",u=!0;for(let m=0;m<hS;m++){const d=xa[m],y=i[d];if(y===void 0)continue;let p=!0;if(typeof y=="number")p=y===(d.startsWith("scale")?1:0);else{const g=parseFloat(y);p=d.startsWith("scale")?g===1:g===0}if(!p||o){const g=Ig(y,ff[d]);if(!p){u=!1;const x=dS[d]||d;r+=`${x}(${g}) `}o&&(l[d]=g)}}return r=r.trim(),o?r=o(l,u?"":r):u&&(r="none"),r}function yf(i,l,o){const{style:r,vars:u,transformOrigin:m}=i;let d=!1,y=!1;for(const p in l){const g=l[p];if(ba.has(p)){d=!0;continue}else if(Tg(p)){u[p]=g;continue}else{const x=Ig(g,ff[p]);p.startsWith("origin")?(y=!0,m[p]=x):r[p]=x}}if(l.transform||(d||o?r.transform=mS(l,i.transform,o):r.transform&&(r.transform="none")),y){const{originX:p="50%",originY:g="50%",originZ:x=0}=m;r.transformOrigin=`${p} ${g} ${x}`}}function dy(i,{style:l,vars:o},r,u){const m=i.style;let d;for(d in l)m[d]=l[d];u?.applyProjectionStyles(m,r);for(d in o)m.setProperty(d,o[d])}function f0(i,l){return l.max===l.min?0:i/(l.max-l.min)*100}const gl={correct:(i,l)=>{if(!l.target)return i;if(typeof i=="string")if($.test(i))i=parseFloat(i);else return i;const o=f0(i,l.target.x),r=f0(i,l.target.y);return`${o}% ${r}%`}},pS={correct:(i,{treeScale:l,projectionDelta:o})=>{const r=i,u=Ke.parse(i);if(u.length>5)return r;const m=Ke.createTransformer(i),d=typeof u[0]!="number"?1:0,y=o.x.scale*l.x,p=o.y.scale*l.y;u[0+d]/=y,u[1+d]/=p;const g=Rt(y,p,.5);return typeof u[2+d]=="number"&&(u[2+d]/=g),typeof u[3+d]=="number"&&(u[3+d]/=g),m(u)}},Hu={borderRadius:{...gl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:gl,borderTopRightRadius:gl,borderBottomLeftRadius:gl,borderBottomRightRadius:gl,boxShadow:pS};function hy(i,{layout:l,layoutId:o}){return ba.has(i)||i.startsWith("origin")||(l||o!==void 0)&&(!!Hu[i]||i==="opacity")}function vf(i,l,o){const r=i.style,u=l?.style,m={};if(!r)return m;for(const d in r)(le(r[d])||u&&le(u[d])||hy(d,i)||o?.getValue(d)?.liveStyle!==void 0)&&(m[d]=r[d]);return m}function gS(i){return window.getComputedStyle(i)}class yS extends oy{constructor(){super(...arguments),this.type="html",this.renderInstance=dy}readValueFromInstance(l,o){if(ba.has(o))return this.projection?.isProjecting?ju(o):Vb(l,o);{const r=gS(l),u=(Tg(o)?r.getPropertyValue(o):r[o])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(l,{transformPagePoint:o}){return fy(l,o)}build(l,o,r){yf(l,o,r.transformTemplate)}scrapeMotionValuesFromProps(l,o,r){return vf(l,o,r)}}const vS={offset:"stroke-dashoffset",array:"stroke-dasharray"},xS={offset:"strokeDashoffset",array:"strokeDasharray"};function bS(i,l,o=1,r=0,u=!0){i.pathLength=1;const m=u?vS:xS;i[m.offset]=`${-r}`,i[m.array]=`${l} ${o}`}const SS=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function my(i,{attrX:l,attrY:o,attrScale:r,pathLength:u,pathSpacing:m=1,pathOffset:d=0,...y},p,g,x){if(yf(i,y,g),p){i.style.viewBox&&(i.attrs.viewBox=i.style.viewBox);return}i.attrs=i.style,i.style={};const{attrs:b,style:S}=i;b.transform&&(S.transform=b.transform,delete b.transform),(S.transform||b.transformOrigin)&&(S.transformOrigin=b.transformOrigin??"50% 50%",delete b.transformOrigin),S.transform&&(S.transformBox=x?.transformBox??"fill-box",delete b.transformBox);for(const A of SS)b[A]!==void 0&&(S[A]=b[A],delete b[A]);l!==void 0&&(b.x=l),o!==void 0&&(b.y=o),r!==void 0&&(b.scale=r),u!==void 0&&bS(b,u,m,d,!1)}const py=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),gy=i=>typeof i=="string"&&i.toLowerCase()==="svg";function TS(i,l,o,r){dy(i,l,void 0,r);for(const u in l.attrs)i.setAttribute(py.has(u)?u:uf(u),l.attrs[u])}function yy(i,l,o){const r=vf(i,l,o);for(const u in i)if(le(i[u])||le(l[u])){const m=xa.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u;r[m]=i[u]}return r}class wS extends oy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Jt}getBaseTargetFromProps(l,o){return l[o]}readValueFromInstance(l,o){if(ba.has(o)){const r=Pg(o);return r&&r.default||0}return o=py.has(o)?o:uf(o),l.getAttribute(o)}scrapeMotionValuesFromProps(l,o,r){return yy(l,o,r)}build(l,o,r){my(l,o,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(l,o,r,u){TS(l,o,r,u)}mount(l){this.isSVGTag=gy(l.tagName),super.mount(l)}}const jS=gf.length;function vy(i){if(!i)return;if(!i.isControllingVariants){const o=i.parent?vy(i.parent)||{}:{};return i.props.initial!==void 0&&(o.initial=i.props.initial),o}const l={};for(let o=0;o<jS;o++){const r=gf[o],u=i.props[r];(zl(u)||u===!1)&&(l[r]=u)}return l}function xy(i,l){if(!Array.isArray(l))return!1;const o=l.length;if(o!==i.length)return!1;for(let r=0;r<o;r++)if(l[r]!==i[r])return!1;return!0}const AS=[...pf].reverse(),zS=pf.length;function MS(i){return l=>Promise.all(l.map(({animation:o,options:r})=>w2(i,o,r)))}function ES(i){let l=MS(i),o=d0(),r=!0;const u=p=>(g,x)=>{const b=ma(i,x,p==="exit"?i.presenceContext?.custom:void 0);if(b){const{transition:S,transitionEnd:A,...M}=b;g={...g,...M,...A}}return g};function m(p){l=p(i)}function d(p){const{props:g}=i,x=vy(i.parent)||{},b=[],S=new Set;let A={},M=1/0;for(let O=0;O<zS;O++){const L=AS[O],G=o[L],Y=g[L]!==void 0?g[L]:x[L],F=zl(Y),Q=L===p?G.isActive:null;Q===!1&&(M=O);let lt=Y===x[L]&&Y!==g[L]&&F;if(lt&&r&&i.manuallyAnimateOnMount&&(lt=!1),G.protectedKeys={...A},!G.isActive&&Q===null||!Y&&!G.prevProp||wo(Y)||typeof Y=="boolean")continue;if(L==="exit"&&G.isActive&&Q!==!0){G.prevResolvedValues&&(A={...A,...G.prevResolvedValues});continue}const W=NS(G.prevProp,Y);let J=W||L===p&&G.isActive&&!lt&&F||O>M&&F,st=!1;const vt=Array.isArray(Y)?Y:[Y];let Nt=vt.reduce(u(L),{});Q===!1&&(Nt={});const{prevResolvedValues:_t={}}=G,ve={..._t,...Nt},ue=V=>{J=!0,S.has(V)&&(st=!0,S.delete(V)),G.needsAnimating[V]=!0;const X=i.getValue(V);X&&(X.liveStyle=!1)};for(const V in ve){const X=Nt[V],I=_t[V];if(A.hasOwnProperty(V))continue;let ot=!1;Cu(X)&&Cu(I)?ot=!xy(X,I):ot=X!==I,ot?X!=null?ue(V):S.add(V):X!==void 0&&S.has(V)?ue(V):G.protectedKeys[V]=!0}G.prevProp=Y,G.prevResolvedValues=Nt,G.isActive&&(A={...A,...Nt}),r&&i.blockInitialAnimation&&(J=!1);const ie=lt&&W;J&&(!ie||st)&&b.push(...vt.map(V=>{const X={type:L};if(typeof V=="string"&&r&&!ie&&i.manuallyAnimateOnMount&&i.parent){const{parent:I}=i,ot=ma(I,V);if(I.enteringChildren&&ot){const{delayChildren:j}=ot.transition||{};X.delay=qg(I.enteringChildren,i,j)}}return{animation:V,options:X}}))}if(S.size){const O={};if(typeof g.initial!="boolean"){const L=ma(i,Array.isArray(g.initial)?g.initial[0]:g.initial);L&&L.transition&&(O.transition=L.transition)}S.forEach(L=>{const G=i.getBaseTarget(L),Y=i.getValue(L);Y&&(Y.liveStyle=!0),O[L]=G??null}),b.push({animation:O})}let U=!!b.length;return r&&(g.initial===!1||g.initial===g.animate)&&!i.manuallyAnimateOnMount&&(U=!1),r=!1,U?l(b):Promise.resolve()}function y(p,g){if(o[p].isActive===g)return Promise.resolve();i.variantChildren?.forEach(b=>b.animationState?.setActive(p,g)),o[p].isActive=g;const x=d(p);for(const b in o)o[b].protectedKeys={};return x}return{animateChanges:d,setActive:y,setAnimateFunction:m,getState:()=>o,reset:()=>{o=d0()}}}function NS(i,l){return typeof l=="string"?l!==i:Array.isArray(l)?!xy(l,i):!1}function vi(i=!1){return{isActive:i,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function d0(){return{animate:vi(!0),whileInView:vi(),whileHover:vi(),whileTap:vi(),whileDrag:vi(),whileFocus:vi(),exit:vi()}}function h0(i,l){i.min=l.min,i.max=l.max}function Xe(i,l){h0(i.x,l.x),h0(i.y,l.y)}function m0(i,l){i.translate=l.translate,i.scale=l.scale,i.originPoint=l.originPoint,i.origin=l.origin}const by=1e-4,CS=1-by,DS=1+by,Sy=.01,kS=0-Sy,OS=0+Sy;function ce(i){return i.max-i.min}function RS(i,l,o){return Math.abs(i-l)<=o}function p0(i,l,o,r=.5){i.origin=r,i.originPoint=Rt(l.min,l.max,i.origin),i.scale=ce(o)/ce(l),i.translate=Rt(o.min,o.max,i.origin)-i.originPoint,(i.scale>=CS&&i.scale<=DS||isNaN(i.scale))&&(i.scale=1),(i.translate>=kS&&i.translate<=OS||isNaN(i.translate))&&(i.translate=0)}function Sl(i,l,o,r){p0(i.x,l.x,o.x,r?r.originX:void 0),p0(i.y,l.y,o.y,r?r.originY:void 0)}function g0(i,l,o){i.min=o.min+l.min,i.max=i.min+ce(l)}function _S(i,l,o){g0(i.x,l.x,o.x),g0(i.y,l.y,o.y)}function y0(i,l,o){i.min=l.min-o.min,i.max=i.min+ce(l)}function xo(i,l,o){y0(i.x,l.x,o.x),y0(i.y,l.y,o.y)}function v0(i,l,o,r,u){return i-=l,i=vo(i,1/o,r),u!==void 0&&(i=vo(i,1/u,r)),i}function VS(i,l=0,o=1,r=.5,u,m=i,d=i){if(tn.test(l)&&(l=parseFloat(l),l=Rt(d.min,d.max,l/100)-d.min),typeof l!="number")return;let y=Rt(m.min,m.max,r);i===m&&(y-=l),i.min=v0(i.min,l,o,y,u),i.max=v0(i.max,l,o,y,u)}function x0(i,l,[o,r,u],m,d){VS(i,l[o],l[r],l[u],l.scale,m,d)}const US=["x","scaleX","originX"],BS=["y","scaleY","originY"];function b0(i,l,o,r){x0(i.x,l,US,o?o.x:void 0,r?r.x:void 0),x0(i.y,l,BS,o?o.y:void 0,r?r.y:void 0)}function S0(i){return i.translate===0&&i.scale===1}function Ty(i){return S0(i.x)&&S0(i.y)}function T0(i,l){return i.min===l.min&&i.max===l.max}function HS(i,l){return T0(i.x,l.x)&&T0(i.y,l.y)}function w0(i,l){return Math.round(i.min)===Math.round(l.min)&&Math.round(i.max)===Math.round(l.max)}function wy(i,l){return w0(i.x,l.x)&&w0(i.y,l.y)}function j0(i){return ce(i.x)/ce(i.y)}function A0(i,l){return i.translate===l.translate&&i.scale===l.scale&&i.originPoint===l.originPoint}function Ie(i){return[i("x"),i("y")]}function LS(i,l,o){let r="";const u=i.x.translate/l.x,m=i.y.translate/l.y,d=o?.z||0;if((u||m||d)&&(r=`translate3d(${u}px, ${m}px, ${d}px) `),(l.x!==1||l.y!==1)&&(r+=`scale(${1/l.x}, ${1/l.y}) `),o){const{transformPerspective:g,rotate:x,rotateX:b,rotateY:S,skewX:A,skewY:M}=o;g&&(r=`perspective(${g}px) ${r}`),x&&(r+=`rotate(${x}deg) `),b&&(r+=`rotateX(${b}deg) `),S&&(r+=`rotateY(${S}deg) `),A&&(r+=`skewX(${A}deg) `),M&&(r+=`skewY(${M}deg) `)}const y=i.x.scale*l.x,p=i.y.scale*l.y;return(y!==1||p!==1)&&(r+=`scale(${y}, ${p})`),r||"none"}const jy=["TopLeft","TopRight","BottomLeft","BottomRight"],qS=jy.length,z0=i=>typeof i=="string"?parseFloat(i):i,M0=i=>typeof i=="number"||$.test(i);function YS(i,l,o,r,u,m){u?(i.opacity=Rt(0,o.opacity??1,GS(r)),i.opacityExit=Rt(l.opacity??1,0,XS(r))):m&&(i.opacity=Rt(l.opacity??1,o.opacity??1,r));for(let d=0;d<qS;d++){const y=`border${jy[d]}Radius`;let p=E0(l,y),g=E0(o,y);if(p===void 0&&g===void 0)continue;p||(p=0),g||(g=0),p===0||g===0||M0(p)===M0(g)?(i[y]=Math.max(Rt(z0(p),z0(g),r),0),(tn.test(g)||tn.test(p))&&(i[y]+="%")):i[y]=g}(l.rotate||o.rotate)&&(i.rotate=Rt(l.rotate||0,o.rotate||0,r))}function E0(i,l){return i[l]!==void 0?i[l]:i.borderRadius}const GS=Ay(0,.5,gg),XS=Ay(.5,.95,Le);function Ay(i,l,o){return r=>r<i?0:r>l?1:o(wl(i,l,r))}function QS(i,l,o){const r=le(i)?i:pa(i);return r.start(rf("",r,l,o)),r.animation}function Ml(i,l,o,r={passive:!0}){return i.addEventListener(l,o,r),()=>i.removeEventListener(l,o)}const ZS=(i,l)=>i.depth-l.depth;class KS{constructor(){this.children=[],this.isDirty=!1}add(l){Zu(this.children,l),this.isDirty=!0}remove(l){ho(this.children,l),this.isDirty=!0}forEach(l){this.isDirty&&this.children.sort(ZS),this.isDirty=!1,this.children.forEach(l)}}function JS(i,l){const o=re.now(),r=({timestamp:u})=>{const m=u-o;m>=l&&(Pn(r),i(m-l))};return Ct.setup(r,!0),()=>Pn(r)}function co(i){return le(i)?i.get():i}class FS{constructor(){this.members=[]}add(l){Zu(this.members,l);for(let o=this.members.length-1;o>=0;o--){const r=this.members[o];if(r===l||r===this.lead||r===this.prevLead)continue;const u=r.instance;u&&u.isConnected===!1&&r.isPresent!==!1&&!r.snapshot&&ho(this.members,r)}l.scheduleRender()}remove(l){if(ho(this.members,l),l===this.prevLead&&(this.prevLead=void 0),l===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(l){const o=this.members.findIndex(u=>l===u);if(o===0)return!1;let r;for(let u=o;u>=0;u--){const m=this.members[u],d=m.instance;if(m.isPresent!==!1&&(!d||d.isConnected!==!1)){r=m;break}}return r?(this.promote(r),!0):!1}promote(l,o){const r=this.lead;if(l!==r&&(this.prevLead=r,this.lead=l,l.show(),r)){r.instance&&r.scheduleRender(),l.scheduleRender();const u=r.options.layoutDependency,m=l.options.layoutDependency;if(!(u!==void 0&&m!==void 0&&u===m)){const p=r.instance;p&&p.isConnected===!1&&!r.snapshot||(l.resumeFrom=r,o&&(l.resumeFrom.preserveOpacity=!0),r.snapshot&&(l.snapshot=r.snapshot,l.snapshot.latestValues=r.animationValues||r.latestValues),l.root&&l.root.isUpdating&&(l.isLayoutDirty=!0))}const{crossfade:y}=l.options;y===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(l=>{const{options:o,resumingFrom:r}=l;o.onExitComplete&&o.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(l=>{l.instance&&l.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const uo={hasAnimatedSinceResize:!0,hasEverUpdated:!1},ou=["","X","Y","Z"],PS=1e3;let WS=0;function ru(i,l,o,r){const{latestValues:u}=l;u[i]&&(o[i]=u[i],l.setStaticValue(i,0),r&&(r[i]=0))}function zy(i){if(i.hasCheckedOptimisedAppear=!0,i.root===i)return;const{visualElement:l}=i.options;if(!l)return;const o=Zg(l);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:u,layoutId:m}=i.options;window.MotionCancelOptimisedAnimation(o,"transform",Ct,!(u||m))}const{parent:r}=i;r&&!r.hasCheckedOptimisedAppear&&zy(r)}function My({attachResizeListener:i,defaultParent:l,measureScroll:o,checkIsScrollRoot:r,resetTransform:u}){return class{constructor(d={},y=l?.()){this.id=WS++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(t5),this.nodes.forEach(a5),this.nodes.forEach(l5),this.nodes.forEach(e5)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=y?y.root||y:this,this.path=y?[...y.path,y]:[],this.parent=y,this.depth=y?y.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new KS)}addEventListener(d,y){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Ju),this.eventHandlers.get(d).add(y)}notifyListeners(d,...y){const p=this.eventHandlers.get(d);p&&p.notify(...y)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=mf(d)&&!I2(d),this.instance=d;const{layoutId:y,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||y)&&(this.isLayoutDirty=!0),i){let x,b=0;const S=()=>this.root.updateBlockedByResize=!1;Ct.read(()=>{b=window.innerWidth}),i(d,()=>{const A=window.innerWidth;A!==b&&(b=A,this.root.updateBlockedByResize=!0,x&&x(),x=JS(S,250),uo.hasAnimatedSinceResize&&(uo.hasAnimatedSinceResize=!1,this.nodes.forEach(D0)))})}y&&this.root.registerSharedNode(y,this),this.options.animate!==!1&&g&&(y||p)&&this.addEventListener("didUpdate",({delta:x,hasLayoutChanged:b,hasRelativeLayoutChanged:S,layout:A})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||g.getDefaultTransition()||u5,{onLayoutAnimationStart:U,onLayoutAnimationComplete:O}=g.getProps(),L=!this.targetLayout||!wy(this.targetLayout,A),G=!b&&S;if(this.options.layoutRoot||this.resumeFrom||G||b&&(L||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const Y={...of(M,"layout"),onPlay:U,onComplete:O};(g.shouldReduceMotion||this.options.layoutRoot)&&(Y.delay=0,Y.type=!1),this.startAnimation(Y),this.setAnimationOrigin(x,G)}else b||D0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=A})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Pn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(s5),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&zy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let x=0;x<this.path.length;x++){const b=this.path[x];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:y,layout:p}=this.options;if(y===void 0&&!p)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(N0);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(C0);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(i5),this.nodes.forEach($S),this.nodes.forEach(IS)):this.nodes.forEach(C0),this.clearAllSnapshots();const y=re.now();ne.delta=en(0,1e3/60,y-ne.timestamp),ne.timestamp=y,ne.isProcessing=!0,Ic.update.process(ne),Ic.preRender.process(ne),Ic.render.process(ne),ne.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,df.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(n5),this.sharedNodes.forEach(o5)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ct.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ct.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ce(this.snapshot.measuredBox.x)&&!ce(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Jt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:y}=this.options;y&&y.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let y=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(y=!1),y&&this.instance){const p=r(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!u)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,y=this.projectionDelta&&!Ty(this.projectionDelta),p=this.getTransformTemplate(),g=p?p(this.latestValues,""):void 0,x=g!==this.prevTransformTemplateValue;d&&this.instance&&(y||bi(this.latestValues)||x)&&(u(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const y=this.measurePageBox();let p=this.removeElementScroll(y);return d&&(p=this.removeTransform(p)),f5(p),{animationId:this.root.animationId,measuredBox:y,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:d}=this.options;if(!d)return Jt();const y=d.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(d5))){const{scroll:g}=this.root;g&&(da(y.x,g.offset.x),da(y.y,g.offset.y))}return y}removeElementScroll(d){const y=Jt();if(Xe(y,d),this.scroll?.wasRoot)return y;for(let p=0;p<this.path.length;p++){const g=this.path[p],{scroll:x,options:b}=g;g!==this.root&&x&&b.layoutScroll&&(x.wasRoot&&Xe(y,d),da(y.x,x.offset.x),da(y.y,x.offset.y))}return y}applyTransform(d,y=!1){const p=Jt();Xe(p,d);for(let g=0;g<this.path.length;g++){const x=this.path[g];!y&&x.options.layoutScroll&&x.scroll&&x!==x.root&&ha(p,{x:-x.scroll.offset.x,y:-x.scroll.offset.y}),bi(x.latestValues)&&ha(p,x.latestValues)}return bi(this.latestValues)&&ha(p,this.latestValues),p}removeTransform(d){const y=Jt();Xe(y,d);for(let p=0;p<this.path.length;p++){const g=this.path[p];if(!g.instance||!bi(g.latestValues))continue;Uu(g.latestValues)&&g.updateSnapshot();const x=Jt(),b=g.measurePageBox();Xe(x,b),b0(y,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,x)}return bi(this.latestValues)&&b0(y,this.latestValues),y}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ne.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){const y=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=y.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=y.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=y.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==y;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:x,layoutId:b}=this.options;if(!this.layout||!(x||b))return;this.resolvedRelativeTargetAt=ne.timestamp;const S=this.getClosestProjectingParent();S&&this.linkedParentVersion!==S.layoutVersion&&!S.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(S&&S.layout?this.createRelativeTarget(S,this.layout.layoutBox,S.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Jt(),this.targetWithTransforms=Jt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),_S(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Xe(this.target,this.layout.layoutBox),uy(this.target,this.targetDelta)):Xe(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?this.createRelativeTarget(S,this.target,S.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Uu(this.parent.latestValues)||cy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,y,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Jt(),this.relativeTargetOrigin=Jt(),xo(this.relativeTargetOrigin,y,p),Xe(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const d=this.getLead(),y=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(p=!1),y&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===ne.timestamp&&(p=!1),p)return;const{layout:g,layoutId:x}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||x))return;Xe(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,S=this.treeScale.y;uS(this.layoutCorrected,this.treeScale,this.path,y),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=Jt());const{target:A}=d;if(!A){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(m0(this.prevProjectionDelta.x,this.projectionDelta.x),m0(this.prevProjectionDelta.y,this.projectionDelta.y)),Sl(this.projectionDelta,this.layoutCorrected,A,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==S||!A0(this.projectionDelta.x,this.prevProjectionDelta.x)||!A0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",A))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){if(this.options.visualElement?.scheduleRender(),d){const y=this.getStack();y&&y.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=fa(),this.projectionDelta=fa(),this.projectionDeltaWithTransform=fa()}setAnimationOrigin(d,y=!1){const p=this.snapshot,g=p?p.latestValues:{},x={...this.latestValues},b=fa();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!y;const S=Jt(),A=p?p.source:void 0,M=this.layout?this.layout.source:void 0,U=A!==M,O=this.getStack(),L=!O||O.members.length<=1,G=!!(U&&!L&&this.options.crossfade===!0&&!this.path.some(c5));this.animationProgress=0;let Y;this.mixTargetDelta=F=>{const Q=F/1e3;k0(b.x,d.x,Q),k0(b.y,d.y,Q),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(xo(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox),r5(this.relativeTarget,this.relativeTargetOrigin,S,Q),Y&&HS(this.relativeTarget,Y)&&(this.isProjectionDirty=!1),Y||(Y=Jt()),Xe(Y,this.relativeTarget)),U&&(this.animationValues=x,YS(x,g,this.latestValues,Q,G,L)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=Q},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Pn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ct.update(()=>{uo.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=pa(0)),this.motionValue.jump(0,!1),this.currentAnimation=QS(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:y=>{this.mixTargetDelta(y),d.onUpdate&&d.onUpdate(y)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(PS),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:y,target:p,layout:g,latestValues:x}=d;if(!(!y||!p||!g)){if(this!==d&&this.layout&&g&&Ey(this.options.animationType,this.layout.layoutBox,g.layoutBox)){p=this.target||Jt();const b=ce(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+b;const S=ce(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+S}Xe(y,p),ha(y,x),Sl(this.projectionDeltaWithTransform,this.layoutCorrected,y,x)}}registerSharedNode(d,y){this.sharedNodes.has(d)||this.sharedNodes.set(d,new FS),this.sharedNodes.get(d).add(y);const g=y.options.initialPromotionConfig;y.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(y):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){const{layoutId:d}=this.options;return d?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:d}=this.options;return d?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:y,preserveFollowOpacity:p}={}){const g=this.getStack();g&&g.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),y&&this.setOptions({transition:y})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let y=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(y=!0),!y)return;const g={};p.z&&ru("z",d,g,this.animationValues);for(let x=0;x<ou.length;x++)ru(`rotate${ou[x]}`,d,g,this.animationValues),ru(`skew${ou[x]}`,d,g,this.animationValues);d.render();for(const x in g)d.setStaticValue(x,g[x]),this.animationValues&&(this.animationValues[x]=g[x]);d.scheduleRender()}applyProjectionStyles(d,y){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=co(y?.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=co(y?.pointerEvents)||""),this.hasProjected&&!bi(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const x=g.animationValues||g.latestValues;this.applyTransformsToTarget();let b=LS(this.projectionDeltaWithTransform,this.treeScale,x);p&&(b=p(x,b)),d.transform=b;const{x:S,y:A}=this.projectionDelta;d.transformOrigin=`${S.origin*100}% ${A.origin*100}% 0`,g.animationValues?d.opacity=g===this?x.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:x.opacityExit:d.opacity=g===this?x.opacity!==void 0?x.opacity:"":x.opacityExit!==void 0?x.opacityExit:0;for(const M in Hu){if(x[M]===void 0)continue;const{correct:U,applyTo:O,isCSSVariable:L}=Hu[M],G=b==="none"?x[M]:U(x[M],g);if(O){const Y=O.length;for(let F=0;F<Y;F++)d[O[F]]=G}else L?this.options.visualElement.renderState.vars[M]=G:d[M]=G}this.options.layoutId&&(d.pointerEvents=g===this?co(y?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>d.currentAnimation?.stop()),this.root.nodes.forEach(N0),this.root.sharedNodes.clear()}}}function $S(i){i.updateLayout()}function IS(i){const l=i.resumeFrom?.snapshot||i.snapshot;if(i.isLead()&&i.layout&&l&&i.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:r}=i.layout,{animationType:u}=i.options,m=l.source!==i.layout.source;u==="size"?Ie(x=>{const b=m?l.measuredBox[x]:l.layoutBox[x],S=ce(b);b.min=o[x].min,b.max=b.min+S}):Ey(u,l.layoutBox,o)&&Ie(x=>{const b=m?l.measuredBox[x]:l.layoutBox[x],S=ce(o[x]);b.max=b.min+S,i.relativeTarget&&!i.currentAnimation&&(i.isProjectionDirty=!0,i.relativeTarget[x].max=i.relativeTarget[x].min+S)});const d=fa();Sl(d,o,l.layoutBox);const y=fa();m?Sl(y,i.applyTransform(r,!0),l.measuredBox):Sl(y,o,l.layoutBox);const p=!Ty(d);let g=!1;if(!i.resumeFrom){const x=i.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:b,layout:S}=x;if(b&&S){const A=Jt();xo(A,l.layoutBox,b.layoutBox);const M=Jt();xo(M,o,S.layoutBox),wy(A,M)||(g=!0),x.options.layoutRoot&&(i.relativeTarget=M,i.relativeTargetOrigin=A,i.relativeParent=x)}}}i.notifyListeners("didUpdate",{layout:o,snapshot:l,delta:y,layoutDelta:d,hasLayoutChanged:p,hasRelativeLayoutChanged:g})}else if(i.isLead()){const{onExitComplete:o}=i.options;o&&o()}i.options.transition=void 0}function t5(i){i.parent&&(i.isProjecting()||(i.isProjectionDirty=i.parent.isProjectionDirty),i.isSharedProjectionDirty||(i.isSharedProjectionDirty=!!(i.isProjectionDirty||i.parent.isProjectionDirty||i.parent.isSharedProjectionDirty)),i.isTransformDirty||(i.isTransformDirty=i.parent.isTransformDirty))}function e5(i){i.isProjectionDirty=i.isSharedProjectionDirty=i.isTransformDirty=!1}function n5(i){i.clearSnapshot()}function N0(i){i.clearMeasurements()}function C0(i){i.isLayoutDirty=!1}function i5(i){const{visualElement:l}=i.options;l&&l.getProps().onBeforeLayoutMeasure&&l.notify("BeforeLayoutMeasure"),i.resetTransform()}function D0(i){i.finishAnimation(),i.targetDelta=i.relativeTarget=i.target=void 0,i.isProjectionDirty=!0}function a5(i){i.resolveTargetDelta()}function l5(i){i.calcProjection()}function s5(i){i.resetSkewAndRotation()}function o5(i){i.removeLeadSnapshot()}function k0(i,l,o){i.translate=Rt(l.translate,0,o),i.scale=Rt(l.scale,1,o),i.origin=l.origin,i.originPoint=l.originPoint}function O0(i,l,o,r){i.min=Rt(l.min,o.min,r),i.max=Rt(l.max,o.max,r)}function r5(i,l,o,r){O0(i.x,l.x,o.x,r),O0(i.y,l.y,o.y,r)}function c5(i){return i.animationValues&&i.animationValues.opacityExit!==void 0}const u5={duration:.45,ease:[.4,0,.1,1]},R0=i=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(i),_0=R0("applewebkit/")&&!R0("chrome/")?Math.round:Le;function V0(i){i.min=_0(i.min),i.max=_0(i.max)}function f5(i){V0(i.x),V0(i.y)}function Ey(i,l,o){return i==="position"||i==="preserve-aspect"&&!RS(j0(l),j0(o),.2)}function d5(i){return i!==i.root&&i.scroll?.wasRoot}const h5=My({attachResizeListener:(i,l)=>Ml(i,"resize",l),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),cu={current:void 0},Ny=My({measureScroll:i=>({x:i.scrollLeft,y:i.scrollTop}),defaultParent:()=>{if(!cu.current){const i=new h5({});i.mount(window),i.setOptions({layoutScroll:!0}),cu.current=i}return cu.current},resetTransform:(i,l)=>{i.style.transform=l!==void 0?l:"none"},checkIsScrollRoot:i=>window.getComputedStyle(i).position==="fixed"}),xf=k.createContext({transformPagePoint:i=>i,isStatic:!1,reducedMotion:"never"});function U0(i,l){if(typeof i=="function")return i(l);i!=null&&(i.current=l)}function m5(...i){return l=>{let o=!1;const r=i.map(u=>{const m=U0(u,l);return!o&&typeof m=="function"&&(o=!0),m});if(o)return()=>{for(let u=0;u<r.length;u++){const m=r[u];typeof m=="function"?m():U0(i[u],null)}}}}function p5(...i){return k.useCallback(m5(...i),i)}class g5 extends k.Component{getSnapshotBeforeUpdate(l){const o=this.props.childRef.current;if(o&&l.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=o.offsetParent,u=_u(r)&&r.offsetWidth||0,m=_u(r)&&r.offsetHeight||0,d=this.props.sizeRef.current;d.height=o.offsetHeight||0,d.width=o.offsetWidth||0,d.top=o.offsetTop,d.left=o.offsetLeft,d.right=u-d.width-d.left,d.bottom=m-d.height-d.top}return null}componentDidUpdate(){}render(){return this.props.children}}function y5({children:i,isPresent:l,anchorX:o,anchorY:r,root:u,pop:m}){const d=k.useId(),y=k.useRef(null),p=k.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:g}=k.useContext(xf),x=i.props?.ref??i?.ref,b=p5(y,x);return k.useInsertionEffect(()=>{const{width:S,height:A,top:M,left:U,right:O,bottom:L}=p.current;if(l||m===!1||!y.current||!S||!A)return;const G=o==="left"?`left: ${U}`:`right: ${O}`,Y=r==="bottom"?`bottom: ${L}`:`top: ${M}`;y.current.dataset.motionPopId=d;const F=document.createElement("style");g&&(F.nonce=g);const Q=u??document.head;return Q.appendChild(F),F.sheet&&F.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${S}px !important;
            height: ${A}px !important;
            ${G}px !important;
            ${Y}px !important;
          }
        `),()=>{Q.contains(F)&&Q.removeChild(F)}},[l]),f.jsx(g5,{isPresent:l,childRef:y,sizeRef:p,pop:m,children:m===!1?i:k.cloneElement(i,{ref:b})})}const v5=({children:i,initial:l,isPresent:o,onExitComplete:r,custom:u,presenceAffectsLayout:m,mode:d,anchorX:y,anchorY:p,root:g})=>{const x=Qu(x5),b=k.useId();let S=!0,A=k.useMemo(()=>(S=!1,{id:b,initial:l,isPresent:o,custom:u,onExitComplete:M=>{x.set(M,!0);for(const U of x.values())if(!U)return;r&&r()},register:M=>(x.set(M,!1),()=>x.delete(M))}),[o,x,r]);return m&&S&&(A={...A}),k.useMemo(()=>{x.forEach((M,U)=>x.set(U,!1))},[o]),k.useEffect(()=>{!o&&!x.size&&r&&r()},[o]),i=f.jsx(y5,{pop:d==="popLayout",isPresent:o,anchorX:y,anchorY:p,root:g,children:i}),f.jsx(To.Provider,{value:A,children:i})};function x5(){return new Map}function Cy(i=!0){const l=k.useContext(To);if(l===null)return[!0,null];const{isPresent:o,onExitComplete:r,register:u}=l,m=k.useId();k.useEffect(()=>{if(i)return u(m)},[i]);const d=k.useCallback(()=>i&&r&&r(m),[m,r,i]);return!o&&r?[!1,d]:[!0]}const no=i=>i.key||"";function B0(i){const l=[];return k.Children.forEach(i,o=>{k.isValidElement(o)&&l.push(o)}),l}const bf=({children:i,custom:l,initial:o=!0,onExitComplete:r,presenceAffectsLayout:u=!0,mode:m="sync",propagate:d=!1,anchorX:y="left",anchorY:p="top",root:g})=>{const[x,b]=Cy(d),S=k.useMemo(()=>B0(i),[i]),A=d&&!x?[]:S.map(no),M=k.useRef(!0),U=k.useRef(S),O=Qu(()=>new Map),L=k.useRef(new Set),[G,Y]=k.useState(S),[F,Q]=k.useState(S);ag(()=>{M.current=!1,U.current=S;for(let J=0;J<F.length;J++){const st=no(F[J]);A.includes(st)?(O.delete(st),L.current.delete(st)):O.get(st)!==!0&&O.set(st,!1)}},[F,A.length,A.join("-")]);const lt=[];if(S!==G){let J=[...S];for(let st=0;st<F.length;st++){const vt=F[st],Nt=no(vt);A.includes(Nt)||(J.splice(st,0,vt),lt.push(vt))}return m==="wait"&&lt.length&&(J=lt),Q(B0(J)),Y(S),null}const{forceRender:W}=k.useContext(Xu);return f.jsx(f.Fragment,{children:F.map(J=>{const st=no(J),vt=d&&!x?!1:S===F||A.includes(st),Nt=()=>{if(L.current.has(st))return;if(L.current.add(st),O.has(st))O.set(st,!0);else return;let _t=!0;O.forEach(ve=>{ve||(_t=!1)}),_t&&(W?.(),Q(U.current),d&&b?.(),r&&r())};return f.jsx(v5,{isPresent:vt,initial:!M.current||o?void 0:!1,custom:l,presenceAffectsLayout:u,mode:m,root:g,onExitComplete:vt?void 0:Nt,anchorX:y,anchorY:p,children:J},st)})})},Dy=k.createContext({strict:!1}),H0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let L0=!1;function b5(){if(L0)return;const i={};for(const l in H0)i[l]={isEnabled:o=>H0[l].some(r=>!!o[r])};sy(i),L0=!0}function ky(){return b5(),sS()}function S5(i){const l=ky();for(const o in i)l[o]={...l[o],...i[o]};sy(l)}const T5=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function bo(i){return i.startsWith("while")||i.startsWith("drag")&&i!=="draggable"||i.startsWith("layout")||i.startsWith("onTap")||i.startsWith("onPan")||i.startsWith("onLayout")||T5.has(i)}let Oy=i=>!bo(i);function w5(i){typeof i=="function"&&(Oy=l=>l.startsWith("on")?!bo(l):i(l))}try{w5(require("@emotion/is-prop-valid").default)}catch{}function j5(i,l,o){const r={};for(const u in i)u==="values"&&typeof i.values=="object"||(Oy(u)||o===!0&&bo(u)||!l&&!bo(u)||i.draggable&&u.startsWith("onDrag"))&&(r[u]=i[u]);return r}const Ao=k.createContext({});function A5(i,l){if(jo(i)){const{initial:o,animate:r}=i;return{initial:o===!1||zl(o)?o:void 0,animate:zl(r)?r:void 0}}return i.inherit!==!1?l:{}}function z5(i){const{initial:l,animate:o}=A5(i,k.useContext(Ao));return k.useMemo(()=>({initial:l,animate:o}),[q0(l),q0(o)])}function q0(i){return Array.isArray(i)?i.join(" "):i}const Sf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Ry(i,l,o){for(const r in l)!le(l[r])&&!hy(r,o)&&(i[r]=l[r])}function M5({transformTemplate:i},l){return k.useMemo(()=>{const o=Sf();return yf(o,l,i),Object.assign({},o.vars,o.style)},[l])}function E5(i,l){const o=i.style||{},r={};return Ry(r,o,i),Object.assign(r,M5(i,l)),r}function N5(i,l){const o={},r=E5(i,l);return i.drag&&i.dragListener!==!1&&(o.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=i.drag===!0?"none":`pan-${i.drag==="x"?"y":"x"}`),i.tabIndex===void 0&&(i.onTap||i.onTapStart||i.whileTap)&&(o.tabIndex=0),o.style=r,o}const _y=()=>({...Sf(),attrs:{}});function C5(i,l,o,r){const u=k.useMemo(()=>{const m=_y();return my(m,l,gy(r),i.transformTemplate,i.style),{...m.attrs,style:{...m.style}}},[l]);if(i.style){const m={};Ry(m,i.style,i),u.style={...m,...u.style}}return u}const D5=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Tf(i){return typeof i!="string"||i.includes("-")?!1:!!(D5.indexOf(i)>-1||/[A-Z]/u.test(i))}function k5(i,l,o,{latestValues:r},u,m=!1,d){const p=(d??Tf(i)?C5:N5)(l,r,u,i),g=j5(l,typeof i=="string",m),x=i!==k.Fragment?{...g,...p,ref:o}:{},{children:b}=l,S=k.useMemo(()=>le(b)?b.get():b,[b]);return k.createElement(i,{...x,children:S})}function O5({scrapeMotionValuesFromProps:i,createRenderState:l},o,r,u){return{latestValues:R5(o,r,u,i),renderState:l()}}function R5(i,l,o,r){const u={},m=r(i,{});for(const S in m)u[S]=co(m[S]);let{initial:d,animate:y}=i;const p=jo(i),g=ay(i);l&&g&&!p&&i.inherit!==!1&&(d===void 0&&(d=l.initial),y===void 0&&(y=l.animate));let x=o?o.initial===!1:!1;x=x||d===!1;const b=x?y:d;if(b&&typeof b!="boolean"&&!wo(b)){const S=Array.isArray(b)?b:[b];for(let A=0;A<S.length;A++){const M=cf(i,S[A]);if(M){const{transitionEnd:U,transition:O,...L}=M;for(const G in L){let Y=L[G];if(Array.isArray(Y)){const F=x?Y.length-1:0;Y=Y[F]}Y!==null&&(u[G]=Y)}for(const G in U)u[G]=U[G]}}}return u}const Vy=i=>(l,o)=>{const r=k.useContext(Ao),u=k.useContext(To),m=()=>O5(i,l,r,u);return o?m():Qu(m)},_5=Vy({scrapeMotionValuesFromProps:vf,createRenderState:Sf}),V5=Vy({scrapeMotionValuesFromProps:yy,createRenderState:_y}),U5=Symbol.for("motionComponentSymbol");function B5(i,l,o){const r=k.useRef(o);k.useInsertionEffect(()=>{r.current=o});const u=k.useRef(null);return k.useCallback(m=>{m&&i.onMount?.(m),l&&(m?l.mount(m):l.unmount());const d=r.current;if(typeof d=="function")if(m){const y=d(m);typeof y=="function"&&(u.current=y)}else u.current?(u.current(),u.current=null):d(m);else d&&(d.current=m)},[l])}const Uy=k.createContext({});function ra(i){return i&&typeof i=="object"&&Object.prototype.hasOwnProperty.call(i,"current")}function H5(i,l,o,r,u,m){const{visualElement:d}=k.useContext(Ao),y=k.useContext(Dy),p=k.useContext(To),g=k.useContext(xf),x=g.reducedMotion,b=g.skipAnimations,S=k.useRef(null),A=k.useRef(!1);r=r||y.renderer,!S.current&&r&&(S.current=r(i,{visualState:l,parent:d,props:o,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:x,skipAnimations:b,isSVG:m}),A.current&&S.current&&(S.current.manuallyAnimateOnMount=!0));const M=S.current,U=k.useContext(Uy);M&&!M.projection&&u&&(M.type==="html"||M.type==="svg")&&L5(S.current,o,u,U);const O=k.useRef(!1);k.useInsertionEffect(()=>{M&&O.current&&M.update(o,p)});const L=o[Qg],G=k.useRef(!!L&&!window.MotionHandoffIsComplete?.(L)&&window.MotionHasOptimisedAnimation?.(L));return ag(()=>{A.current=!0,M&&(O.current=!0,window.MotionIsMounted=!0,M.updateFeatures(),M.scheduleRenderMicrotask(),G.current&&M.animationState&&M.animationState.animateChanges())}),k.useEffect(()=>{M&&(!G.current&&M.animationState&&M.animationState.animateChanges(),G.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(L)}),G.current=!1),M.enteringChildren=void 0)}),M}function L5(i,l,o,r){const{layoutId:u,layout:m,drag:d,dragConstraints:y,layoutScroll:p,layoutRoot:g,layoutCrossfade:x}=l;i.projection=new o(i.latestValues,l["data-framer-portal-id"]?void 0:By(i.parent)),i.projection.setOptions({layoutId:u,layout:m,alwaysMeasureLayout:!!d||y&&ra(y),visualElement:i,animationType:typeof m=="string"?m:"both",initialPromotionConfig:r,crossfade:x,layoutScroll:p,layoutRoot:g})}function By(i){if(i)return i.options.allowProjection!==!1?i.projection:By(i.parent)}function uu(i,{forwardMotionProps:l=!1,type:o}={},r,u){r&&S5(r);const m=o?o==="svg":Tf(i),d=m?V5:_5;function y(g,x){let b;const S={...k.useContext(xf),...g,layoutId:q5(g)},{isStatic:A}=S,M=z5(g),U=d(g,A);if(!A&&ig){Y5();const O=G5(S);b=O.MeasureLayout,M.visualElement=H5(i,U,S,u,O.ProjectionNode,m)}return f.jsxs(Ao.Provider,{value:M,children:[b&&M.visualElement?f.jsx(b,{visualElement:M.visualElement,...S}):null,k5(i,g,B5(U,M.visualElement,x),U,A,l,m)]})}y.displayName=`motion.${typeof i=="string"?i:`create(${i.displayName??i.name??""})`}`;const p=k.forwardRef(y);return p[U5]=i,p}function q5({layoutId:i}){const l=k.useContext(Xu).id;return l&&i!==void 0?l+"-"+i:i}function Y5(i,l){k.useContext(Dy).strict}function G5(i){const l=ky(),{drag:o,layout:r}=l;if(!o&&!r)return{};const u={...o,...r};return{MeasureLayout:o?.isEnabled(i)||r?.isEnabled(i)?u.MeasureLayout:void 0,ProjectionNode:u.ProjectionNode}}function X5(i,l){if(typeof Proxy>"u")return uu;const o=new Map,r=(m,d)=>uu(m,d,i,l),u=(m,d)=>r(m,d);return new Proxy(u,{get:(m,d)=>d==="create"?r:(o.has(d)||o.set(d,uu(d,void 0,i,l)),o.get(d))})}const Q5=(i,l)=>l.isSVG??Tf(i)?new wS(l):new yS(l,{allowProjection:i!==k.Fragment});class Z5 extends $n{constructor(l){super(l),l.animationState||(l.animationState=ES(l))}updateAnimationControlsSubscription(){const{animate:l}=this.node.getProps();wo(l)&&(this.unmountControls=l.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:l}=this.node.getProps(),{animate:o}=this.node.prevProps||{};l!==o&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let K5=0;class J5 extends $n{constructor(){super(...arguments),this.id=K5++}update(){if(!this.node.presenceContext)return;const{isPresent:l,onExitComplete:o}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||l===r)return;const u=this.node.animationState.setActive("exit",!l);o&&!l&&u.then(()=>{o(this.id)})}mount(){const{register:l,onExitComplete:o}=this.node.presenceContext||{};o&&o(this.id),l&&(this.unmount=l(this.id))}unmount(){}}const F5={animation:{Feature:Z5},exit:{Feature:J5}};function Dl(i){return{point:{x:i.pageX,y:i.pageY}}}const P5=i=>l=>hf(l)&&i(l,Dl(l));function Tl(i,l,o,r){return Ml(i,l,P5(o),r)}const Hy=({current:i})=>i?i.ownerDocument.defaultView:null,Y0=(i,l)=>Math.abs(i-l);function W5(i,l){const o=Y0(i.x,l.x),r=Y0(i.y,l.y);return Math.sqrt(o**2+r**2)}const G0=new Set(["auto","scroll"]);class Ly{constructor(l,o,{transformPagePoint:r,contextWindow:u=window,dragSnapToOrigin:m=!1,distanceThreshold:d=3,element:y}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=A=>{this.handleScroll(A.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const A=du(this.lastMoveEventInfo,this.history),M=this.startEvent!==null,U=W5(A.offset,{x:0,y:0})>=this.distanceThreshold;if(!M&&!U)return;const{point:O}=A,{timestamp:L}=ne;this.history.push({...O,timestamp:L});const{onStart:G,onMove:Y}=this.handlers;M||(G&&G(this.lastMoveEvent,A),this.startEvent=this.lastMoveEvent),Y&&Y(this.lastMoveEvent,A)},this.handlePointerMove=(A,M)=>{this.lastMoveEvent=A,this.lastMoveEventInfo=fu(M,this.transformPagePoint),Ct.update(this.updatePoint,!0)},this.handlePointerUp=(A,M)=>{this.end();const{onEnd:U,onSessionEnd:O,resumeAnimation:L}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&L&&L(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const G=du(A.type==="pointercancel"?this.lastMoveEventInfo:fu(M,this.transformPagePoint),this.history);this.startEvent&&U&&U(A,G),O&&O(A,G)},!hf(l))return;this.dragSnapToOrigin=m,this.handlers=o,this.transformPagePoint=r,this.distanceThreshold=d,this.contextWindow=u||window;const p=Dl(l),g=fu(p,this.transformPagePoint),{point:x}=g,{timestamp:b}=ne;this.history=[{...x,timestamp:b}];const{onSessionStart:S}=o;S&&S(l,du(g,this.history)),this.removeListeners=El(Tl(this.contextWindow,"pointermove",this.handlePointerMove),Tl(this.contextWindow,"pointerup",this.handlePointerUp),Tl(this.contextWindow,"pointercancel",this.handlePointerUp)),y&&this.startScrollTracking(y)}startScrollTracking(l){let o=l.parentElement;for(;o;){const r=getComputedStyle(o);(G0.has(r.overflowX)||G0.has(r.overflowY))&&this.scrollPositions.set(o,{x:o.scrollLeft,y:o.scrollTop}),o=o.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(l){const o=this.scrollPositions.get(l);if(!o)return;const r=l===window,u=r?{x:window.scrollX,y:window.scrollY}:{x:l.scrollLeft,y:l.scrollTop},m={x:u.x-o.x,y:u.y-o.y};m.x===0&&m.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=m.x,this.lastMoveEventInfo.point.y+=m.y):this.history.length>0&&(this.history[0].x-=m.x,this.history[0].y-=m.y),this.scrollPositions.set(l,u),Ct.update(this.updatePoint,!0))}updateHandlers(l){this.handlers=l}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Pn(this.updatePoint)}}function fu(i,l){return l?{point:l(i.point)}:i}function X0(i,l){return{x:i.x-l.x,y:i.y-l.y}}function du({point:i},l){return{point:i,delta:X0(i,qy(l)),offset:X0(i,$5(l)),velocity:I5(l,.1)}}function $5(i){return i[0]}function qy(i){return i[i.length-1]}function I5(i,l){if(i.length<2)return{x:0,y:0};let o=i.length-1,r=null;const u=qy(i);for(;o>=0&&(r=i[o],!(u.timestamp-r.timestamp>Ze(l)));)o--;if(!r)return{x:0,y:0};r===i[0]&&i.length>2&&u.timestamp-r.timestamp>Ze(l)*2&&(r=i[1]);const m=He(u.timestamp-r.timestamp);if(m===0)return{x:0,y:0};const d={x:(u.x-r.x)/m,y:(u.y-r.y)/m};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function t3(i,{min:l,max:o},r){return l!==void 0&&i<l?i=r?Rt(l,i,r.min):Math.max(i,l):o!==void 0&&i>o&&(i=r?Rt(o,i,r.max):Math.min(i,o)),i}function Q0(i,l,o){return{min:l!==void 0?i.min+l:void 0,max:o!==void 0?i.max+o-(i.max-i.min):void 0}}function e3(i,{top:l,left:o,bottom:r,right:u}){return{x:Q0(i.x,o,u),y:Q0(i.y,l,r)}}function Z0(i,l){let o=l.min-i.min,r=l.max-i.max;return l.max-l.min<i.max-i.min&&([o,r]=[r,o]),{min:o,max:r}}function n3(i,l){return{x:Z0(i.x,l.x),y:Z0(i.y,l.y)}}function i3(i,l){let o=.5;const r=ce(i),u=ce(l);return u>r?o=wl(l.min,l.max-r,i.min):r>u&&(o=wl(i.min,i.max-u,l.min)),en(0,1,o)}function a3(i,l){const o={};return l.min!==void 0&&(o.min=l.min-i.min),l.max!==void 0&&(o.max=l.max-i.min),o}const Lu=.35;function l3(i=Lu){return i===!1?i=0:i===!0&&(i=Lu),{x:K0(i,"left","right"),y:K0(i,"top","bottom")}}function K0(i,l,o){return{min:J0(i,l),max:J0(i,o)}}function J0(i,l){return typeof i=="number"?i:i[l]||0}const s3=new WeakMap;class o3{constructor(l){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Jt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=l}start(l,{snapToCursor:o=!1,distanceThreshold:r}={}){const{presenceContext:u}=this.visualElement;if(u&&u.isPresent===!1)return;const m=b=>{o&&this.snapToCursor(Dl(b).point),this.stopAnimation()},d=(b,S)=>{const{drag:A,dragPropagation:M,onDragStart:U}=this.getProps();if(A&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=V2(A),!this.openDragLock))return;this.latestPointerEvent=b,this.latestPanInfo=S,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ie(L=>{let G=this.getAxisMotionValue(L).get()||0;if(tn.test(G)){const{projection:Y}=this.visualElement;if(Y&&Y.layout){const F=Y.layout.layoutBox[L];F&&(G=ce(F)*(parseFloat(G)/100))}}this.originPoint[L]=G}),U&&Ct.update(()=>U(b,S),!1,!0),Du(this.visualElement,"transform");const{animationState:O}=this.visualElement;O&&O.setActive("whileDrag",!0)},y=(b,S)=>{this.latestPointerEvent=b,this.latestPanInfo=S;const{dragPropagation:A,dragDirectionLock:M,onDirectionLock:U,onDrag:O}=this.getProps();if(!A&&!this.openDragLock)return;const{offset:L}=S;if(M&&this.currentDirection===null){this.currentDirection=c3(L),this.currentDirection!==null&&U&&U(this.currentDirection);return}this.updateAxis("x",S.point,L),this.updateAxis("y",S.point,L),this.visualElement.render(),O&&Ct.update(()=>O(b,S),!1,!0)},p=(b,S)=>{this.latestPointerEvent=b,this.latestPanInfo=S,this.stop(b,S),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>{const{dragSnapToOrigin:b}=this.getProps();(b||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:x}=this.getProps();this.panSession=new Ly(l,{onSessionStart:m,onStart:d,onMove:y,onSessionEnd:p,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:x,distanceThreshold:r,contextWindow:Hy(this.visualElement),element:this.visualElement.current})}stop(l,o){const r=l||this.latestPointerEvent,u=o||this.latestPanInfo,m=this.isDragging;if(this.cancel(),!m||!u||!r)return;const{velocity:d}=u;this.startAnimation(d);const{onDragEnd:y}=this.getProps();y&&Ct.postRender(()=>y(r,u))}cancel(){this.isDragging=!1;const{projection:l,animationState:o}=this.visualElement;l&&(l.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(l,o,r){const{drag:u}=this.getProps();if(!r||!io(l,u,this.currentDirection))return;const m=this.getAxisMotionValue(l);let d=this.originPoint[l]+r[l];this.constraints&&this.constraints[l]&&(d=t3(d,this.constraints[l],this.elastic[l])),m.set(d)}resolveConstraints(){const{dragConstraints:l,dragElastic:o}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,u=this.constraints;l&&ra(l)?this.constraints||(this.constraints=this.resolveRefConstraints()):l&&r?this.constraints=e3(r.layoutBox,l):this.constraints=!1,this.elastic=l3(o),u!==this.constraints&&!ra(l)&&r&&this.constraints&&!this.hasMutatedConstraints&&Ie(m=>{this.constraints!==!1&&this.getAxisMotionValue(m)&&(this.constraints[m]=a3(r.layoutBox[m],this.constraints[m]))})}resolveRefConstraints(){const{dragConstraints:l,onMeasureDragConstraints:o}=this.getProps();if(!l||!ra(l))return!1;const r=l.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;const m=fS(r,u.root,this.visualElement.getTransformPagePoint());let d=n3(u.layout.layoutBox,m);if(o){const y=o(rS(d));this.hasMutatedConstraints=!!y,y&&(d=ry(y))}return d}startAnimation(l){const{drag:o,dragMomentum:r,dragElastic:u,dragTransition:m,dragSnapToOrigin:d,onDragTransitionEnd:y}=this.getProps(),p=this.constraints||{},g=Ie(x=>{if(!io(x,o,this.currentDirection))return;let b=p&&p[x]||{};d&&(b={min:0,max:0});const S=u?200:1e6,A=u?40:1e7,M={type:"inertia",velocity:r?l[x]:0,bounceStiffness:S,bounceDamping:A,timeConstant:750,restDelta:1,restSpeed:10,...m,...b};return this.startAxisValueAnimation(x,M)});return Promise.all(g).then(y)}startAxisValueAnimation(l,o){const r=this.getAxisMotionValue(l);return Du(this.visualElement,l),r.start(rf(l,r,0,o,this.visualElement,!1))}stopAnimation(){Ie(l=>this.getAxisMotionValue(l).stop())}getAxisMotionValue(l){const o=`_drag${l.toUpperCase()}`,r=this.visualElement.getProps(),u=r[o];return u||this.visualElement.getValue(l,(r.initial?r.initial[l]:void 0)||0)}snapToCursor(l){Ie(o=>{const{drag:r}=this.getProps();if(!io(o,r,this.currentDirection))return;const{projection:u}=this.visualElement,m=this.getAxisMotionValue(o);if(u&&u.layout){const{min:d,max:y}=u.layout.layoutBox[o],p=m.get()||0;m.set(l[o]-Rt(d,y,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:l,dragConstraints:o}=this.getProps(),{projection:r}=this.visualElement;if(!ra(o)||!r||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};Ie(d=>{const y=this.getAxisMotionValue(d);if(y&&this.constraints!==!1){const p=y.get();u[d]=i3({min:p,max:p},this.constraints[d])}});const{transformTemplate:m}=this.visualElement.getProps();this.visualElement.current.style.transform=m?m({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),Ie(d=>{if(!io(d,l,null))return;const y=this.getAxisMotionValue(d),{min:p,max:g}=this.constraints[d];y.set(Rt(p,g,u[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;s3.set(this.visualElement,this);const l=this.visualElement.current,o=Tl(l,"pointerdown",g=>{const{drag:x,dragListener:b=!0}=this.getProps(),S=g.target,A=S!==l&&Y2(S);x&&b&&!A&&this.start(g)});let r;const u=()=>{const{dragConstraints:g}=this.getProps();ra(g)&&g.current&&(this.constraints=this.resolveRefConstraints(),r||(r=r3(l,g.current,()=>this.scalePositionWithinConstraints())))},{projection:m}=this.visualElement,d=m.addEventListener("measure",u);m&&!m.layout&&(m.root&&m.root.updateScroll(),m.updateLayout()),Ct.read(u);const y=Ml(window,"resize",()=>this.scalePositionWithinConstraints()),p=m.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:x})=>{this.isDragging&&x&&(Ie(b=>{const S=this.getAxisMotionValue(b);S&&(this.originPoint[b]+=g[b].translate,S.set(S.get()+g[b].translate))}),this.visualElement.render())}));return()=>{y(),o(),d(),p&&p(),r&&r()}}getProps(){const l=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:r=!1,dragPropagation:u=!1,dragConstraints:m=!1,dragElastic:d=Lu,dragMomentum:y=!0}=l;return{...l,drag:o,dragDirectionLock:r,dragPropagation:u,dragConstraints:m,dragElastic:d,dragMomentum:y}}}function F0(i){let l=!0;return()=>{if(l){l=!1;return}i()}}function r3(i,l,o){const r=n0(i,F0(o)),u=n0(l,F0(o));return()=>{r(),u()}}function io(i,l,o){return(l===!0||l===i)&&(o===null||o===i)}function c3(i,l=10){let o=null;return Math.abs(i.y)>l?o="y":Math.abs(i.x)>l&&(o="x"),o}class u3 extends $n{constructor(l){super(l),this.removeGroupControls=Le,this.removeListeners=Le,this.controls=new o3(l)}mount(){const{dragControls:l}=this.node.getProps();l&&(this.removeGroupControls=l.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Le}update(){const{dragControls:l}=this.node.getProps(),{dragControls:o}=this.node.prevProps||{};l!==o&&(this.removeGroupControls(),l&&(this.removeGroupControls=l.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const hu=i=>(l,o)=>{i&&Ct.update(()=>i(l,o),!1,!0)};class f3 extends $n{constructor(){super(...arguments),this.removePointerDownListener=Le}onPointerDown(l){this.session=new Ly(l,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Hy(this.node)})}createPanHandlers(){const{onPanSessionStart:l,onPanStart:o,onPan:r,onPanEnd:u}=this.node.getProps();return{onSessionStart:hu(l),onStart:hu(o),onMove:hu(r),onEnd:(m,d)=>{delete this.session,u&&Ct.postRender(()=>u(m,d))}}}mount(){this.removePointerDownListener=Tl(this.node.current,"pointerdown",l=>this.onPointerDown(l))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let mu=!1;class d3 extends k.Component{componentDidMount(){const{visualElement:l,layoutGroup:o,switchLayoutGroup:r,layoutId:u}=this.props,{projection:m}=l;m&&(o.group&&o.group.add(m),r&&r.register&&u&&r.register(m),mu&&m.root.didUpdate(),m.addEventListener("animationComplete",()=>{this.safeToRemove()}),m.setOptions({...m.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),uo.hasEverUpdated=!0}getSnapshotBeforeUpdate(l){const{layoutDependency:o,visualElement:r,drag:u,isPresent:m}=this.props,{projection:d}=r;return d&&(d.isPresent=m,l.layoutDependency!==o&&d.setOptions({...d.options,layoutDependency:o}),mu=!0,u||l.layoutDependency!==o||o===void 0||l.isPresent!==m?d.willUpdate():this.safeToRemove(),l.isPresent!==m&&(m?d.promote():d.relegate()||Ct.postRender(()=>{const y=d.getStack();(!y||!y.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:l}=this.props.visualElement;l&&(l.root.didUpdate(),df.postRender(()=>{!l.currentAnimation&&l.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:l,layoutGroup:o,switchLayoutGroup:r}=this.props,{projection:u}=l;mu=!0,u&&(u.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(u),r&&r.deregister&&r.deregister(u))}safeToRemove(){const{safeToRemove:l}=this.props;l&&l()}render(){return null}}function Yy(i){const[l,o]=Cy(),r=k.useContext(Xu);return f.jsx(d3,{...i,layoutGroup:r,switchLayoutGroup:k.useContext(Uy),isPresent:l,safeToRemove:o})}const h3={pan:{Feature:f3},drag:{Feature:u3,ProjectionNode:Ny,MeasureLayout:Yy}};function P0(i,l,o){const{props:r}=i;i.animationState&&r.whileHover&&i.animationState.setActive("whileHover",o==="Start");const u="onHover"+o,m=r[u];m&&Ct.postRender(()=>m(l,Dl(l)))}class m3 extends $n{mount(){const{current:l}=this.node;l&&(this.unmount=B2(l,(o,r)=>(P0(this.node,r,"Start"),u=>P0(this.node,u,"End"))))}unmount(){}}class p3 extends $n{constructor(){super(...arguments),this.isActive=!1}onFocus(){let l=!1;try{l=this.node.current.matches(":focus-visible")}catch{l=!0}!l||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=El(Ml(this.node.current,"focus",()=>this.onFocus()),Ml(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function W0(i,l,o){const{props:r}=i;if(i.current instanceof HTMLButtonElement&&i.current.disabled)return;i.animationState&&r.whileTap&&i.animationState.setActive("whileTap",o==="Start");const u="onTap"+(o==="End"?"":o),m=r[u];m&&Ct.postRender(()=>m(l,Dl(l)))}class g3 extends $n{mount(){const{current:l}=this.node;if(!l)return;const{globalTapTarget:o,propagate:r}=this.node.props;this.unmount=X2(l,(u,m)=>(W0(this.node,m,"Start"),(d,{success:y})=>W0(this.node,d,y?"End":"Cancel")),{useGlobalTarget:o,stopPropagation:r?.tap===!1})}unmount(){}}const qu=new WeakMap,pu=new WeakMap,y3=i=>{const l=qu.get(i.target);l&&l(i)},v3=i=>{i.forEach(y3)};function x3({root:i,...l}){const o=i||document;pu.has(o)||pu.set(o,{});const r=pu.get(o),u=JSON.stringify(l);return r[u]||(r[u]=new IntersectionObserver(v3,{root:i,...l})),r[u]}function b3(i,l,o){const r=x3(l);return qu.set(i,o),r.observe(i),()=>{qu.delete(i),r.unobserve(i)}}const S3={some:0,all:1};class T3 extends $n{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:l={}}=this.node.getProps(),{root:o,margin:r,amount:u="some",once:m}=l,d={root:o?o.current:void 0,rootMargin:r,threshold:typeof u=="number"?u:S3[u]},y=p=>{const{isIntersecting:g}=p;if(this.isInView===g||(this.isInView=g,m&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:x,onViewportLeave:b}=this.node.getProps(),S=g?x:b;S&&S(p)};return b3(this.node.current,d,y)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:l,prevProps:o}=this.node;["amount","margin","root"].some(w3(l,o))&&this.startObserver()}unmount(){}}function w3({viewport:i={}},{viewport:l={}}={}){return o=>i[o]!==l[o]}const j3={inView:{Feature:T3},tap:{Feature:g3},focus:{Feature:p3},hover:{Feature:m3}},A3={layout:{ProjectionNode:Ny,MeasureLayout:Yy}},z3={...F5,...j3,...h3,...A3},Z=X5(z3,Q5);const Gy=(...i)=>i.filter((l,o,r)=>!!l&&l.trim()!==""&&r.indexOf(l)===o).join(" ").trim();const M3=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const E3=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(l,o,r)=>r?r.toUpperCase():o.toLowerCase());const $0=i=>{const l=E3(i);return l.charAt(0).toUpperCase()+l.slice(1)};var N3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const C3=i=>{for(const l in i)if(l.startsWith("aria-")||l==="role"||l==="title")return!0;return!1};const D3=k.forwardRef(({color:i="currentColor",size:l=24,strokeWidth:o=2,absoluteStrokeWidth:r,className:u="",children:m,iconNode:d,...y},p)=>k.createElement("svg",{ref:p,...N3,width:l,height:l,stroke:i,strokeWidth:r?Number(o)*24/Number(l):o,className:Gy("lucide",u),...!m&&!C3(y)&&{"aria-hidden":"true"},...y},[...d.map(([g,x])=>k.createElement(g,x)),...Array.isArray(m)?m:[m]]));const nt=(i,l)=>{const o=k.forwardRef(({className:r,...u},m)=>k.createElement(D3,{ref:m,iconNode:l,className:Gy(`lucide-${M3($0(i))}`,`lucide-${i}`,r),...u}));return o.displayName=$0(i),o};const k3=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],O3=nt("arrow-left",k3);const R3=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],_3=nt("arrow-right",R3);const V3=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],U3=nt("arrow-up",V3);const B3=[["path",{d:"M 22 14 L 22 10",key:"nqc4tb"}],["rect",{x:"2",y:"6",width:"16",height:"12",rx:"2",key:"13zb55"}]],H3=nt("battery",B3);const L3=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],q3=nt("bell",L3);const Y3=[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}]],G3=nt("bluetooth",Y3);const X3=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],zo=nt("calculator",X3);const Q3=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],vl=nt("check",Q3);const Z3=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],kl=nt("chevron-right",Z3);const K3=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],J3=nt("chevron-up",K3);const F3=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],P3=nt("circle-alert",F3);const W3=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],$3=nt("circle-check-big",W3);const I3=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],tT=nt("clock",I3);const eT=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],Mo=nt("code",eT);const nT=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],iT=nt("copy",nT);const aT=[["path",{d:"M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z",key:"1yo7s0"}],["path",{d:"m12 9 6 6",key:"anjzzh"}],["path",{d:"m18 9-6 6",key:"1fp51s"}]],lT=nt("delete",aT);const sT=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],oT=nt("download",sT);const rT=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],ga=nt("file-text",rT);const cT=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}]],fo=nt("file",cT);const uT=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],Je=nt("folder",uT);const fT=[["path",{d:"M15 6a9 9 0 0 0-9 9V3",key:"1cii5b"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}]],dT=nt("git-branch",fT);const hT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],ya=nt("globe",hT);const mT=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],pT=nt("grid-3x3",mT);const gT=[["path",{d:"M10 16h.01",key:"1bzywj"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"18tbho"}],["path",{d:"M21.946 12.013H2.054",key:"zqlbp7"}],["path",{d:"M6 16h.01",key:"1pmjb7"}]],yT=nt("hard-drive",gT);const vT=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],xT=nt("heart",vT);const bT=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Xy=nt("house",bT);const ST=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],TT=nt("image",ST);const wT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Qy=nt("info",wT);const jT=[["path",{d:"M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",key:"1pdavp"}],["path",{d:"M20.054 15.987H3.946",key:"14rxg9"}]],AT=nt("laptop",jT);const zT=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],MT=nt("layout-grid",zT);const ET=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],NT=nt("list",ET);const CT=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],DT=nt("lock",CT);const kT=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],OT=nt("menu",kT);const RT=[["path",{d:"M5 12h14",key:"1ays0h"}]],_T=nt("minus",RT);const VT=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],UT=nt("monitor",VT);const BT=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],HT=nt("moon",BT);const LT=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],Ol=nt("music",LT);const qT=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],YT=nt("palette",qT);const GT=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],XT=nt("pause",GT);const QT=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],I0=nt("pen",QT);const ZT=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],KT=nt("play",ZT);const JT=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],FT=nt("plus",JT);const PT=[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]],Yu=nt("power",PT);const WT=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]],$T=nt("repeat",WT);const IT=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],wf=nt("rotate-cw",IT);const t4=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Eo=nt("search",t4);const e4=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Rl=nt("settings",e4);const n4=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Zy=nt("shield",n4);const i4=[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]],a4=nt("shuffle",i4);const l4=[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",key:"15892j"}],["path",{d:"M3 20V4",key:"1ptbpl"}]],s4=nt("skip-back",l4);const o4=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],r4=nt("skip-forward",o4);const c4=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],u4=nt("square",c4);const f4=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Ky=nt("star",f4);const d4=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],h4=nt("sun",d4);const m4=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],_l=nt("terminal",m4);const p4=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],g4=nt("trash-2",p4);const y4=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],v4=nt("triangle-alert",y4);const x4=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Jy=nt("user",x4);const b4=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Fy=nt("volume-2",b4);const S4=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],Py=nt("wifi",S4);const T4=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],So=nt("x",T4);function Wy(){const[i,l]=k.useState(new Date);return k.useEffect(()=>{const o=setInterval(()=>{l(new Date)},1e3);return()=>clearInterval(o)},[]),i}const w4={terminal:_l,folder:Je,settings:Rl,globe:ya,calculator:zo,"file-text":ga,music:Ol,code:Mo};function j4({icon:i,title:l,isActive:o,onClick:r,delay:u=0}){const m=w4[i]||Je;return f.jsxs(Z.button,{className:`taskbar-icon ${o?"active":""}`,onClick:r,initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},transition:{delay:u,type:"spring",stiffness:300},whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},children:[f.jsx("div",{className:"icon-bg"}),f.jsx(m,{size:22,strokeWidth:2}),o&&f.jsx("div",{className:"active-indicator"}),f.jsx("div",{className:"tooltip",children:l}),f.jsx("style",{children:`
        .taskbar-icon {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border: none;
          background: transparent;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
          overflow: visible;
        }

        .taskbar-icon:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
        }

        .taskbar-icon.active {
          background: rgba(255, 255, 255, 0.15);
          color: var(--text-primary);
        }

        .icon-bg {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
          opacity: 0;
          transition: opacity var(--transition-fast);
        }

        .taskbar-icon:hover .icon-bg,
        .taskbar-icon.active .icon-bg {
          opacity: 1;
        }

        .active-indicator {
          position: absolute;
          bottom: 4px;
          width: 4px;
          height: 4px;
          background: var(--primary-color);
          border-radius: 50%;
          transition: all var(--transition-fast);
        }

        .taskbar-icon.active .active-indicator {
          width: 16px;
          border-radius: 2px;
        }

        .taskbar-icon .tooltip {
          display: none;
        }

        .taskbar-icon:hover .tooltip {
          display: block;
          animation: slideUp 0.2s ease-out;
        }
      `})]})}function A4(){const{toggleStartMenu:i,isStartMenuOpen:l,windows:o,focusWindow:r,minimizeWindow:u,activeWindowId:m}=Wn(),d=Wy(),y=o.filter(p=>p.isOpen&&!p.isMinimized);return f.jsxs(Z.div,{className:"taskbar",initial:{y:100,opacity:0},animate:{y:0,opacity:1},transition:{delay:1.6,type:"spring",stiffness:100},children:[f.jsxs("div",{className:"taskbar-content",children:[f.jsx(Z.button,{className:`start-button ${l?"active":""}`,onClick:i,whileHover:{scale:1.05},whileTap:{scale:.95},children:f.jsx(MT,{size:22,strokeWidth:2.5})}),f.jsx("div",{className:"taskbar-divider"}),f.jsx("div",{className:"taskbar-apps",children:y.map((p,g)=>f.jsx(j4,{icon:p.icon,title:p.title,isActive:m===p.id,onClick:()=>{m===p.id?u(p.id):r(p.id)},delay:g*.05},p.id))}),f.jsxs("div",{className:"taskbar-tray",children:[f.jsxs("div",{className:"tray-icons",children:[f.jsx(Z.div,{className:"tray-icon",whileHover:{scale:1.1},whileTap:{scale:.9},children:f.jsx(J3,{size:16})}),f.jsx(Z.div,{className:"tray-icon",whileHover:{scale:1.1},whileTap:{scale:.9},children:f.jsx(Py,{size:18})}),f.jsx(Z.div,{className:"tray-icon",whileHover:{scale:1.1},whileTap:{scale:.9},children:f.jsx(Fy,{size:18})}),f.jsx(Z.div,{className:"tray-icon",whileHover:{scale:1.1},whileTap:{scale:.9},children:f.jsx(H3,{size:18})})]}),f.jsxs("div",{className:"taskbar-clock",children:[f.jsx("div",{className:"clock-time",children:d.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),f.jsx("div",{className:"clock-date",children:d.toLocaleDateString([],{month:"short",day:"numeric",year:"numeric"})})]}),f.jsx(Z.div,{className:"show-desktop",whileHover:{backgroundColor:"rgba(255,255,255,0.1)"},whileTap:{scale:.95}})]})]}),f.jsx("style",{children:`
        .taskbar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: var(--taskbar-height);
          background: rgba(15, 15, 15, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 9000;
        }

        .taskbar-content {
          display: flex;
          align-items: center;
          height: 100%;
          padding: 0 12px;
          gap: 8px;
        }

        .start-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border: none;
          background: transparent;
          border-radius: var(--radius-md);
          color: var(--text-primary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .start-button:hover {
          background: rgba(99, 102, 241, 0.2);
        }

        .start-button.active {
          background: rgba(99, 102, 241, 0.3);
        }

        .start-button.active svg {
          color: var(--primary-color);
        }

        .taskbar-divider {
          width: 1px;
          height: 32px;
          background: rgba(255, 255, 255, 0.1);
          margin: 0 4px;
        }

        .taskbar-apps {
          display: flex;
          align-items: center;
          gap: 4px;
          flex: 1;
          padding: 0 8px;
        }

        .taskbar-tray {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-left: 12px;
        }

        .tray-icons {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .tray-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .tray-icon:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
        }

        .taskbar-clock {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          padding: 6px 12px;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
          min-width: 70px;
        }

        .taskbar-clock:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .clock-time {
          font-size: 13px;
          font-weight: 500;
          color: var(--text-primary);
        }

        .clock-date {
          font-size: 11px;
          color: var(--text-secondary);
        }

        .show-desktop {
          width: 8px;
          height: 36px;
          border-radius: 4px;
          cursor: pointer;
          margin-left: 4px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `})]})}function z4(){const{isStartMenuOpen:i,closeStartMenu:l,apps:o,openWindow:r,shutdown:u,restart:m}=Wn(),d=o.slice(0,4),y=o;return f.jsx(bf,{children:i&&f.jsxs(f.Fragment,{children:[f.jsx(Z.div,{className:"start-menu-backdrop",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:l}),f.jsxs(Z.div,{className:"start-menu",initial:{y:100,opacity:0,scale:.95},animate:{y:0,opacity:1,scale:1},exit:{y:100,opacity:0,scale:.95},transition:{type:"spring",stiffness:300,damping:30},onClick:p=>p.stopPropagation(),children:[f.jsxs("div",{className:"start-menu-header",children:[f.jsxs("div",{className:"user-profile",children:[f.jsx("div",{className:"user-avatar",children:f.jsx(Jy,{size:24})}),f.jsxs("div",{className:"user-info",children:[f.jsx("span",{className:"user-name",children:"User"}),f.jsx("span",{className:"user-email",children:"user@solenos.com"})]})]}),f.jsxs("div",{className:"power-buttons",children:[f.jsx(Z.button,{className:"power-btn",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:m,children:f.jsx(wf,{size:18})}),f.jsx(Z.button,{className:"power-btn",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:u,children:f.jsx(Yu,{size:18})})]})]}),f.jsxs("div",{className:"search-container",children:[f.jsx(Eo,{size:18,className:"search-icon"}),f.jsx("input",{type:"text",className:"search-input",placeholder:"Search apps, files, and settings..."})]}),f.jsxs("div",{className:"start-section",children:[f.jsx("div",{className:"section-header",children:f.jsx("span",{children:"Pinned"})}),f.jsx("div",{className:"pinned-grid",children:d.map((p,g)=>f.jsxs(Z.button,{className:"app-tile",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:g*.05},whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>r(p.id),children:[f.jsx("div",{className:"app-tile-icon",children:f.jsx(tg,{name:p.icon})}),f.jsx("span",{className:"app-tile-name",children:p.name})]},p.id))})]}),f.jsxs("div",{className:"start-section",children:[f.jsxs("div",{className:"section-header",children:[f.jsx("span",{children:"All Apps"}),f.jsx(kl,{size:16})]}),f.jsx("div",{className:"all-apps-list",children:y.map((p,g)=>f.jsxs(Z.button,{className:"app-list-item",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.1+g*.03},whileHover:{x:4,backgroundColor:"rgba(255,255,255,0.05)"},onClick:()=>r(p.id),children:[f.jsx(tg,{name:p.icon,size:20}),f.jsx("span",{className:"app-list-name",children:p.name})]},p.id))})]}),f.jsx("style",{children:`
              .start-menu-backdrop {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: var(--taskbar-height);
                z-index: 8998;
              }

              .start-menu {
                position: fixed;
                bottom: calc(var(--taskbar-height) + 12px);
                left: 50%;
                transform: translateX(-50%);
                width: 600px;
                max-height: calc(100vh - var(--taskbar-height) - 80px);
                background: rgba(20, 20, 20, 0.95);
                backdrop-filter: blur(30px);
                -webkit-backdrop-filter: blur(30px);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: var(--radius-xl);
                padding: 24px;
                z-index: 8999;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
                overflow-y: auto;
              }

              .start-menu-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
              }

              .user-profile {
                display: flex;
                align-items: center;
                gap: 12px;
              }

              .user-avatar {
                width: 48px;
                height: 48px;
                border-radius: 50%;
                background: linear-gradient(135deg, #6366f1, #8b5cf6);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
              }

              .user-info {
                display: flex;
                flex-direction: column;
              }

              .user-name {
                font-size: 15px;
                font-weight: 600;
                color: var(--text-primary);
              }

              .user-email {
                font-size: 12px;
                color: var(--text-secondary);
              }

              .power-buttons {
                display: flex;
                gap: 8px;
              }

              .power-btn {
                width: 40px;
                height: 40px;
                border: none;
                background: rgba(255, 255, 255, 0.05);
                border-radius: var(--radius-md);
                color: var(--text-secondary);
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all var(--transition-fast);
              }

              .power-btn:hover {
                background: rgba(239, 68, 68, 0.2);
                color: #ef4444;
              }

              .search-container {
                position: relative;
                margin-bottom: 24px;
              }

              .search-icon {
                position: absolute;
                left: 14px;
                top: 50%;
                transform: translateY(-50%);
                color: var(--text-muted);
                pointer-events: none;
              }

              .search-input {
                width: 100%;
                padding: 12px 16px 12px 44px;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: var(--radius-md);
                color: var(--text-primary);
                font-size: 14px;
                transition: all var(--transition-fast);
              }

              .search-input:focus {
                outline: none;
                border-color: var(--primary-color);
                background: rgba(255, 255, 255, 0.08);
              }

              .search-input::placeholder {
                color: var(--text-muted);
              }

              .start-section {
                margin-bottom: 24px;
              }

              .section-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 12px;
                font-size: 13px;
                font-weight: 600;
                color: var(--text-secondary);
              }

              .pinned-grid {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 8px;
              }

              .app-tile {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 8px;
                padding: 16px 12px;
                border: none;
                background: rgba(255, 255, 255, 0.03);
                border-radius: var(--radius-lg);
                cursor: pointer;
                transition: all var(--transition-fast);
              }

              .app-tile:hover {
                background: rgba(255, 255, 255, 0.08);
              }

              .app-tile-icon {
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
                border-radius: var(--radius-md);
                color: var(--primary-color);
              }

              .app-tile-name {
                font-size: 11px;
                color: var(--text-secondary);
                text-align: center;
              }

              .all-apps-list {
                display: flex;
                flex-direction: column;
                gap: 4px;
              }

              .app-list-item {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 10px 12px;
                border: none;
                background: transparent;
                border-radius: var(--radius-md);
                cursor: pointer;
                transition: all var(--transition-fast);
                text-align: left;
              }

              .app-list-item:hover {
                background: rgba(255, 255, 255, 0.05);
              }

              .app-list-name {
                font-size: 14px;
                color: var(--text-primary);
              }
            `})]})]})})}function tg({name:i,size:l=24}){const o={terminal:f.jsx(_l,{size:l}),folder:f.jsx(Je,{size:l}),settings:f.jsx(Rl,{size:l}),globe:f.jsx(ya,{size:l}),calculator:f.jsx(zo,{size:l}),"file-text":f.jsx(ga,{size:l}),music:f.jsx(Ol,{size:l}),code:f.jsx(Mo,{size:l})};return f.jsx(f.Fragment,{children:o[i]||f.jsx(Je,{size:l})})}const gu={help:()=>`Available commands:
  help     - Show this help message
  clear    - Clear the terminal
  echo     - Print a message
  date     - Show current date and time
  whoami   - Display current user
  ls       - List directory contents
  pwd      - Print working directory
  neofetch - Display system info
  theme    - Change theme (light/dark)
  reboot   - Reboot the system`,clear:()=>"",echo:i=>i.join(" "),date:()=>new Date().toString(),whoami:()=>"user@solenos",ls:()=>"Documents/  Pictures/  Music/  Downloads/  Welcome.txt",pwd:()=>"/home/user",neofetch:()=>`
       ████████████       user@solenos
     ████████████████     ─────────────
    ██████░░░░████████    OS: SolenOS v1.0
   ██████░░░░░░████████   Kernel: Web 5.15
  ██████░░░░░░░░████████  Uptime: ${Math.floor(Math.random()*24)} hours
  ██████░░░░░░░░████████  Shell: bash
  ██████░░░░░░░░████████  Resolution: ${window.innerWidth}x${window.innerHeight}
   ██████░░░░░░████████   Theme: Dark
    ██████████████████    Terminal: SolenOS Terminal
     ████████████████     
      ██████████████      `,theme:i=>i[0]==="light"?(document.documentElement.style.setProperty("--background-dark","#f5f5f5"),document.documentElement.style.setProperty("--background-light","#ffffff"),document.documentElement.style.setProperty("--background-card","#e5e5e5"),document.documentElement.style.setProperty("--text-primary","#171717"),document.documentElement.style.setProperty("--text-secondary","#525252"),"Theme changed to light"):i[0]==="dark"?(document.documentElement.style.setProperty("--background-dark","#0f0f0f"),document.documentElement.style.setProperty("--background-light","#1a1a1a"),document.documentElement.style.setProperty("--background-card","#252525"),document.documentElement.style.setProperty("--text-primary","#ffffff"),document.documentElement.style.setProperty("--text-secondary","#a1a1aa"),"Theme changed to dark"):"Usage: theme [light|dark]",reboot:()=>(location.reload(),"Rebooting...")};function M4(){const[i,l]=k.useState([{command:"neofetch",output:gu.neofetch([])}]),[o,r]=k.useState(""),[u,m]=k.useState([]),[d,y]=k.useState(-1),p=k.useRef(null),g=k.useRef(null);k.useEffect(()=>{p.current?.focus()},[]),k.useEffect(()=>{g.current?.scrollTo({top:g.current.scrollHeight,behavior:"smooth"})},[i]);const x=S=>{S.preventDefault();const A=o.trim();if(!A){r("");return}const[M,...U]=A.split(" "),O=M.toLowerCase();let L="";gu[O]?L=gu[O](U):O!=="clear"&&(L=`Command not found: ${O}. Type 'help' for available commands.`),O==="clear"?l([]):(l(G=>[...G,{command:A,output:L}]),m(G=>[...G,A]),y(-1)),r("")},b=S=>{if(S.key==="ArrowUp"){if(S.preventDefault(),u.length>0){const A=d<u.length-1?d+1:d;y(A),r(u[u.length-1-A]||"")}}else if(S.key==="ArrowDown")if(S.preventDefault(),d>0){const A=d-1;y(A),r(u[u.length-1-A]||"")}else y(-1),r("")};return f.jsxs("div",{className:"terminal",onClick:()=>p.current?.focus(),children:[f.jsx("div",{className:"terminal-header",children:f.jsxs("div",{className:"terminal-title-bar",children:[f.jsx(_l,{size:16}),f.jsx("span",{children:"Terminal"})]})}),f.jsxs("div",{className:"terminal-body",ref:g,children:[i.map((S,A)=>f.jsxs(Z.div,{className:"terminal-entry",initial:{opacity:0,x:-10},animate:{opacity:1,x:0},children:[f.jsxs("div",{className:"terminal-command",children:[f.jsx("span",{className:"prompt",children:"user@solenos:~$"})," ",S.command]}),S.output&&f.jsx("pre",{className:"terminal-output",children:S.output})]},A)),f.jsxs("form",{onSubmit:x,className:"terminal-input-line",children:[f.jsx("span",{className:"prompt",children:"user@solenos:~$"}),f.jsx("input",{ref:p,type:"text",value:o,onChange:S=>r(S.target.value),onKeyDown:b,className:"terminal-input",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false"})]})]}),f.jsx("style",{children:`
        .terminal {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          background: #0d0d0d;
        }

        .terminal-header {
          padding: 8px 12px;
          background: #1a1a1a;
          border-bottom: 1px solid #2a2a2a;
        }

        .terminal-title-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #a1a1aa;
        }

        .terminal-body {
          flex: 1;
          padding: 12px;
          overflow-y: auto;
          font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
          font-size: 14px;
          line-height: 1.5;
        }

        .terminal-entry {
          margin-bottom: 8px;
        }

        .terminal-command {
          color: #22c55e;
          white-space: pre-wrap;
          word-break: break-all;
        }

        .prompt {
          color: #6366f1;
          font-weight: 600;
        }

        .terminal-output {
          color: #e4e4e4;
          white-space: pre-wrap;
          word-break: break-all;
          margin: 4px 0 8px 0;
        }

        .terminal-input-line {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #22c55e;
        }

        .terminal-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #e4e4e4;
          font-family: inherit;
          font-size: inherit;
          caret-color: #22c55e;
        }

        .terminal-body::-webkit-scrollbar {
          width: 8px;
        }

        .terminal-body::-webkit-scrollbar-track {
          background: #0d0d0d;
        }

        .terminal-body::-webkit-scrollbar-thumb {
          background: #2a2a2a;
          border-radius: 4px;
        }

        .terminal-body::-webkit-scrollbar-thumb:hover {
          background: #3a3a3a;
        }
      `})]})}function E4(){const{fileSystem:i}=Wn(),[l,o]=k.useState(["root"]),[r,u]=k.useState("grid"),[m,d]=k.useState(""),g=(()=>{let M=i[0];for(let U=1;U<l.length;U++){const O=M?.children?.find(L=>L.id===l[U]);if(O&&O.type==="folder")M=O;else return null}return M||null})()?.children||[],x=M=>{const U=l.indexOf(M);o(U!==-1?l.slice(0,U+1):[...l,M])},b=()=>{l.length>1&&o(l.slice(0,-1))},S=[{icon:Xy,label:"Home",id:"root"},{icon:tT,label:"Recent",id:"recent"},{icon:Ky,label:"Favorites",id:"favorites"},{icon:yT,label:"This PC",id:"pc"}],A=[{icon:TT,label:"Pictures",id:"pictures"},{icon:Ol,label:"Music",id:"music"},{icon:oT,label:"Downloads",id:"downloads"},{icon:ga,label:"Documents",id:"documents"}];return f.jsxs("div",{className:"file-explorer",children:[f.jsxs("div",{className:"sidebar",children:[f.jsxs("div",{className:"sidebar-section",children:[f.jsx("div",{className:"sidebar-title",children:"Quick Access"}),S.map(M=>f.jsxs(Z.button,{className:`sidebar-item ${l[0]===M.id?"active":""}`,whileHover:{x:4},onClick:()=>o([M.id]),children:[f.jsx(M.icon,{size:18}),f.jsx("span",{children:M.label})]},M.id))]}),f.jsxs("div",{className:"sidebar-section",children:[f.jsx("div",{className:"sidebar-title",children:"Folders"}),A.map(M=>f.jsxs(Z.button,{className:"sidebar-item",whileHover:{x:4},onClick:()=>x(M.id),children:[f.jsx(M.icon,{size:18}),f.jsx("span",{children:M.label})]},M.id))]})]}),f.jsxs("div",{className:"main-content",children:[f.jsxs("div",{className:"toolbar",children:[f.jsx("div",{className:"toolbar-nav",children:f.jsx("button",{className:"nav-btn",onClick:b,disabled:l.length<=1,children:f.jsx(U3,{size:18})})}),f.jsx("div",{className:"toolbar-path",children:l.map((M,U)=>f.jsxs("div",{className:"path-segment",children:[U>0&&f.jsx(kl,{size:16}),f.jsx("button",{onClick:()=>o(l.slice(0,U+1)),children:M.charAt(0).toUpperCase()+M.slice(1)})]},M))}),f.jsxs("div",{className:"toolbar-actions",children:[f.jsxs("div",{className:"search-box",children:[f.jsx(Eo,{size:16}),f.jsx("input",{type:"text",placeholder:"Search",value:m,onChange:M=>d(M.target.value)})]}),f.jsx("button",{className:`view-btn ${r==="grid"?"active":""}`,onClick:()=>u("grid"),children:f.jsx(pT,{size:18})}),f.jsx("button",{className:`view-btn ${r==="list"?"active":""}`,onClick:()=>u("list"),children:f.jsx(NT,{size:18})})]})]}),f.jsx("div",{className:`file-view ${r}`,children:g.length===0?f.jsxs("div",{className:"empty-folder",children:[f.jsx(Je,{size:64,strokeWidth:1}),f.jsx("p",{children:"This folder is empty"})]}):g.map((M,U)=>f.jsxs(Z.div,{className:`file-item ${M.type}`,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:U*.05},whileHover:{scale:1.02},whileTap:{scale:.98},children:[f.jsx("div",{className:"file-icon",children:M.type==="folder"?f.jsx(Je,{size:40,fill:"rgba(99, 102, 241, 0.2)"}):f.jsx(ga,{size:40})}),f.jsx("div",{className:"file-name",children:M.name}),r==="list"&&f.jsxs("div",{className:"file-meta",children:[f.jsx("span",{children:M.type==="file"?"File":"Folder"}),f.jsx("span",{children:new Date(M.modifiedAt).toLocaleDateString()})]})]},M.id))}),f.jsx("div",{className:"status-bar",children:f.jsxs("span",{children:[g.length," items"]})})]}),f.jsx("style",{children:`
        .file-explorer {
          width: 100%;
          height: 100%;
          display: flex;
          background: var(--background-dark);
          overflow: hidden;
        }

        .sidebar {
          width: 200px;
          height: 100%;
          background: var(--background-light);
          border-right: 1px solid var(--border-color);
          padding: 12px;
          overflow-y: auto;
          flex-shrink: 0;
        }

        .sidebar-section {
          margin-bottom: 20px;
        }

        .sidebar-title {
          font-size: 11px;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 8px;
        }

        .sidebar-item {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 10px 12px;
          border: none;
          background: transparent;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: left;
          font-size: 14px;
        }

        .sidebar-item:hover {
          background: var(--background-hover);
          color: var(--text-primary);
        }

        .sidebar-item.active {
          background: rgba(99, 102, 241, 0.2);
          color: var(--primary-color);
        }

        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .toolbar {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: var(--background-light);
          border-bottom: 1px solid var(--border-color);
        }

        .toolbar-nav {
          display: flex;
          gap: 4px;
        }

        .nav-btn {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: transparent;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .nav-btn:hover:not(:disabled) {
          background: var(--background-hover);
          color: var(--text-primary);
        }

        .nav-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .toolbar-path {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 4px;
          background: var(--background-card);
          padding: 8px 12px;
          border-radius: var(--radius-md);
        }

        .path-segment {
          display: flex;
          align-items: center;
          gap: 4px;
          color: var(--text-secondary);
        }

        .path-segment button {
          background: transparent;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          font-size: 14px;
          padding: 0 4px;
        }

        .path-segment button:hover {
          color: var(--primary-color);
        }

        .toolbar-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--background-card);
          padding: 8px 12px;
          border-radius: var(--radius-md);
        }

        .search-box svg {
          color: var(--text-muted);
        }

        .search-box input {
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-size: 14px;
          width: 150px;
        }

        .view-btn {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: transparent;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .view-btn:hover,
        .view-btn.active {
          background: var(--background-hover);
          color: var(--text-primary);
        }

        .file-view {
          flex: 1;
          padding: 16px;
          overflow-y: auto;
        }

        .file-view.grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          gap: 16px;
        }

        .file-view.list {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .file-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16px;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
          border: 1px solid transparent;
        }

        .file-view.list .file-item {
          flex-direction: row;
          align-items: center;
          padding: 12px 16px;
        }

        .file-item:hover {
          background: var(--background-hover);
          border-color: var(--border-color);
        }

        .file-icon {
          color: var(--primary-color);
          margin-bottom: 8px;
        }

        .file-view.list .file-icon {
          margin-bottom: 0;
          margin-right: 12px;
        }

        .file-name {
          font-size: 13px;
          color: var(--text-primary);
          text-align: center;
          word-break: break-word;
        }

        .file-view.list .file-name {
          text-align: left;
          flex: 1;
        }

        .file-meta {
          display: flex;
          gap: 16px;
          font-size: 12px;
          color: var(--text-secondary);
        }

        .empty-folder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: var(--text-muted);
          gap: 16px;
        }

        .status-bar {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 8px 16px;
          background: var(--background-light);
          border-top: 1px solid var(--border-color);
          font-size: 12px;
          color: var(--text-secondary);
        }
      `})]})}function N4(){const{themeMode:i,setThemeMode:l,wallpaper:o,setWallpaper:r,addNotification:u}=Wn(),[m,d]=k.useState("personalization"),y=[{id:"personalization",icon:YT,label:"Personalization"},{id:"system",icon:UT,label:"System"},{id:"accounts",icon:Jy,label:"Accounts"},{id:"notifications",icon:q3,label:"Notifications"},{id:"network",icon:Py,label:"Network"},{id:"bluetooth",icon:G3,label:"Bluetooth"},{id:"privacy",icon:Zy,label:"Privacy"},{id:"about",icon:Qy,label:"About"}];return f.jsxs("div",{className:"settings",children:[f.jsxs("div",{className:"settings-sidebar",children:[f.jsx("div",{className:"settings-search",children:f.jsx("input",{type:"text",placeholder:"Find a setting..."})}),f.jsx("div",{className:"settings-menu",children:y.map(p=>f.jsxs(Z.button,{className:`settings-menu-item ${m===p.id?"active":""}`,whileHover:{x:4},onClick:()=>d(p.id),children:[f.jsx(p.icon,{size:20}),f.jsx("span",{children:p.label}),f.jsx(kl,{size:16,className:"chevron"})]},p.id))})]}),f.jsxs("div",{className:"settings-content",children:[m==="personalization"&&f.jsx(C4,{themeMode:i,setThemeMode:l,wallpaper:o,setWallpaper:r,addNotification:u}),m==="system"&&f.jsx(D4,{}),m==="accounts"&&f.jsx(k4,{}),m==="notifications"&&f.jsx(O4,{}),m==="network"&&f.jsx(R4,{}),m==="bluetooth"&&f.jsx(_4,{}),m==="privacy"&&f.jsx(V4,{}),m==="about"&&f.jsx(U4,{})]}),f.jsx("style",{children:`
        .settings {
          width: 100%;
          height: 100%;
          display: flex;
          background: var(--background-dark);
          overflow: hidden;
        }

        .settings-sidebar {
          width: 260px;
          height: 100%;
          background: var(--background-light);
          border-right: 1px solid var(--border-color);
          padding: 20px 12px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          flex-shrink: 0;
        }

        .settings-content {
          flex: 1;
          padding: 24px;
          overflow-y: auto;
        }

        .settings-search input {
          width: 100%;
          padding: 10px 14px;
          background: var(--background-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-size: 14px;
        }

        .settings-search input:focus {
          outline: none;
          border-color: var(--primary-color);
        }

        .settings-menu {
          display: flex;
          flex-direction: column;
          gap: 4px;
          overflow-y: auto;
        }

        .settings-menu-item {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 12px;
          border: none;
          background: transparent;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: left;
          font-size: 14px;
        }

        .settings-menu-item:hover {
          background: var(--background-hover);
          color: var(--text-primary);
        }

        .settings-menu-item.active {
          background: rgba(99, 102, 241, 0.2);
          color: var(--primary-color);
        }

        .settings-menu-item .chevron {
          margin-left: auto;
          opacity: 0;
          transition: opacity var(--transition-fast);
        }

        .settings-menu-item:hover .chevron {
          opacity: 1;
        }

        .settings-section {
          max-width: 700px;
        }

        .settings-header {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 24px;
          color: var(--text-primary);
        }

        .settings-group {
          margin-bottom: 24px;
        }

        .settings-group-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .settings-card {
          background: var(--background-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 16px;
          margin-bottom: 12px;
        }

        .settings-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid var(--border-color);
        }

        .settings-row:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .settings-row-label {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .settings-row-title {
          font-size: 14px;
          color: var(--text-primary);
        }

        .settings-row-description {
          font-size: 12px;
          color: var(--text-muted);
        }
      `})]})}function C4({themeMode:i,setThemeMode:l,wallpaper:o,setWallpaper:r,addNotification:u}){return f.jsxs("div",{className:"settings-section",children:[f.jsx("h2",{className:"settings-header",children:"Personalization"}),f.jsxs("div",{className:"settings-group",children:[f.jsx("div",{className:"settings-group-title",children:"Theme"}),f.jsxs("div",{className:"theme-options",children:[f.jsxs(Z.button,{className:`theme-option ${i==="dark"?"active":""}`,whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>l("dark"),children:[f.jsx(HT,{size:24}),f.jsx("span",{children:"Dark"}),i==="dark"&&f.jsx(vl,{size:16,className:"check"})]}),f.jsxs(Z.button,{className:`theme-option ${i==="light"?"active":""}`,whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>l("light"),children:[f.jsx(h4,{size:24}),f.jsx("span",{children:"Light"}),i==="light"&&f.jsx(vl,{size:16,className:"check"})]}),f.jsxs(Z.button,{className:`theme-option ${i==="auto"?"active":""}`,whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>l("auto"),children:[f.jsx(AT,{size:24}),f.jsx("span",{children:"System"}),i==="auto"&&f.jsx(vl,{size:16,className:"check"})]})]})]}),f.jsxs("div",{className:"settings-group",children:[f.jsx("div",{className:"settings-group-title",children:"Wallpaper"}),f.jsx("div",{className:"wallpaper-grid",children:yu.map((m,d)=>f.jsx(Z.button,{className:`wallpaper-preview ${o===m?"active":""}`,style:{background:m},whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>{r(m),u({title:"Wallpaper Changed",message:"Your new wallpaper has been applied.",type:"success"})},children:o===m&&f.jsx(vl,{size:24,className:"wallpaper-check"})},d))})]}),f.jsx("style",{children:`
        .theme-options {
          display: flex;
          gap: 12px;
        }

        .theme-option {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 20px;
          border: 2px solid var(--border-color);
          background: var(--background-card);
          border-radius: var(--radius-lg);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
          position: relative;
        }

        .theme-option:hover {
          border-color: var(--text-muted);
        }

        .theme-option.active {
          border-color: var(--primary-color);
          background: rgba(99, 102, 241, 0.1);
          color: var(--primary-color);
        }

        .theme-option .check {
          position: absolute;
          top: 8px;
          right: 8px;
        }

        .wallpaper-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .wallpaper-preview {
          aspect-ratio: 16/9;
          border: 3px solid var(--border-color);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
          position: relative;
          overflow: hidden;
        }

        .wallpaper-preview:hover {
          border-color: var(--text-muted);
          transform: scale(1.05);
        }

        .wallpaper-preview.active {
          border-color: var(--primary-color);
        }

        .wallpaper-check {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
      `})]})}function D4(){return f.jsxs("div",{className:"settings-section",children:[f.jsx("h2",{className:"settings-header",children:"System"}),f.jsxs("div",{className:"settings-card",children:[f.jsxs("div",{className:"settings-row",children:[f.jsxs("div",{className:"settings-row-label",children:[f.jsx("span",{className:"settings-row-title",children:"Display Name"}),f.jsx("span",{className:"settings-row-description",children:"Your computer's name on the network"})]}),f.jsx("input",{className:"input",style:{width:200},defaultValue:"SolenOS-PC"})]}),f.jsxs("div",{className:"settings-row",children:[f.jsxs("div",{className:"settings-row-label",children:[f.jsx("span",{className:"settings-row-title",children:"Screen Brightness"}),f.jsx("span",{className:"settings-row-description",children:"Adjust your display brightness"})]}),f.jsx("input",{type:"range",min:"0",max:"100",defaultValue:"80"})]}),f.jsxs("div",{className:"settings-row",children:[f.jsxs("div",{className:"settings-row-label",children:[f.jsx("span",{className:"settings-row-title",children:"Night Light"}),f.jsx("span",{className:"settings-row-description",children:"Reduce blue light in the evening"})]}),f.jsx(Sn,{defaultChecked:!1})]})]})]})}function k4(){return f.jsxs("div",{className:"settings-section",children:[f.jsx("h2",{className:"settings-header",children:"Accounts"}),f.jsxs("div",{className:"settings-card",children:[f.jsxs("div",{className:"settings-row",children:[f.jsxs("div",{className:"settings-row-label",children:[f.jsx("span",{className:"settings-row-title",children:"Username"}),f.jsx("span",{className:"settings-row-description",children:"Your display name"})]}),f.jsx("input",{className:"input",style:{width:200},defaultValue:"User"})]}),f.jsxs("div",{className:"settings-row",children:[f.jsxs("div",{className:"settings-row-label",children:[f.jsx("span",{className:"settings-row-title",children:"Email"}),f.jsx("span",{className:"settings-row-description",children:"Your account email"})]}),f.jsx("span",{className:"settings-row-description",children:"user@solenos.com"})]})]})]})}function O4(){return f.jsxs("div",{className:"settings-section",children:[f.jsx("h2",{className:"settings-header",children:"Notifications"}),f.jsxs("div",{className:"settings-card",children:[f.jsxs("div",{className:"settings-row",children:[f.jsxs("div",{className:"settings-row-label",children:[f.jsx("span",{className:"settings-row-title",children:"Show Notifications"}),f.jsx("span",{className:"settings-row-description",children:"Allow apps to show notifications"})]}),f.jsx(Sn,{defaultChecked:!0})]}),f.jsxs("div",{className:"settings-row",children:[f.jsxs("div",{className:"settings-row-label",children:[f.jsx("span",{className:"settings-row-title",children:"Sound"}),f.jsx("span",{className:"settings-row-description",children:"Play sound for notifications"})]}),f.jsx(Sn,{defaultChecked:!0})]})]})]})}function R4(){return f.jsxs("div",{className:"settings-section",children:[f.jsx("h2",{className:"settings-header",children:"Network"}),f.jsxs("div",{className:"settings-card",children:[f.jsxs("div",{className:"settings-row",children:[f.jsxs("div",{className:"settings-row-label",children:[f.jsx("span",{className:"settings-row-title",children:"Wi-Fi"}),f.jsx("span",{className:"settings-row-description",children:"Connected to Home Network"})]}),f.jsx(Sn,{defaultChecked:!0})]}),f.jsxs("div",{className:"settings-row",children:[f.jsxs("div",{className:"settings-row-label",children:[f.jsx("span",{className:"settings-row-title",children:"Airplane Mode"}),f.jsx("span",{className:"settings-row-description",children:"Disable all wireless connections"})]}),f.jsx(Sn,{defaultChecked:!1})]})]})]})}function _4(){return f.jsxs("div",{className:"settings-section",children:[f.jsx("h2",{className:"settings-header",children:"Bluetooth"}),f.jsx("div",{className:"settings-card",children:f.jsxs("div",{className:"settings-row",children:[f.jsxs("div",{className:"settings-row-label",children:[f.jsx("span",{className:"settings-row-title",children:"Bluetooth"}),f.jsx("span",{className:"settings-row-description",children:"Discoverable as SolenOS-PC"})]}),f.jsx(Sn,{defaultChecked:!0})]})})]})}function V4(){return f.jsxs("div",{className:"settings-section",children:[f.jsx("h2",{className:"settings-header",children:"Privacy"}),f.jsxs("div",{className:"settings-card",children:[f.jsxs("div",{className:"settings-row",children:[f.jsxs("div",{className:"settings-row-label",children:[f.jsx("span",{className:"settings-row-title",children:"Location Services"}),f.jsx("span",{className:"settings-row-description",children:"Allow apps to access your location"})]}),f.jsx(Sn,{defaultChecked:!1})]}),f.jsxs("div",{className:"settings-row",children:[f.jsxs("div",{className:"settings-row-label",children:[f.jsx("span",{className:"settings-row-title",children:"Camera Access"}),f.jsx("span",{className:"settings-row-description",children:"Allow apps to use your camera"})]}),f.jsx(Sn,{defaultChecked:!0})]}),f.jsxs("div",{className:"settings-row",children:[f.jsxs("div",{className:"settings-row-label",children:[f.jsx("span",{className:"settings-row-title",children:"Microphone Access"}),f.jsx("span",{className:"settings-row-description",children:"Allow apps to use your microphone"})]}),f.jsx(Sn,{defaultChecked:!0})]})]})]})}function U4(){return f.jsxs("div",{className:"settings-section",children:[f.jsx("h2",{className:"settings-header",children:"About"}),f.jsxs("div",{className:"settings-card",style:{textAlign:"center",padding:40},children:[f.jsx("div",{style:{width:80,height:80,margin:"0 auto 20px",background:"linear-gradient(135deg, #6366f1, #8b5cf6)",borderRadius:20,display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,color:"white"},children:"S"}),f.jsx("h3",{style:{fontSize:20,marginBottom:8},children:"SolenOS"}),f.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:24},children:"Version 1.0.0"}),f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:16,textAlign:"left"},children:[f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:12,color:"var(--text-muted)"},children:"OS Type"}),f.jsx("div",{children:"Web-based OS"})]}),f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:12,color:"var(--text-muted)"},children:"Build"}),f.jsx("div",{children:"2025.02.19"})]}),f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:12,color:"var(--text-muted)"},children:"Framework"}),f.jsx("div",{children:"React + TypeScript"})]}),f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:12,color:"var(--text-muted)"},children:"Renderer"}),f.jsx("div",{children:"Vite"})]})]})]})]})}function Sn({defaultChecked:i=!1}){const[l,o]=k.useState(i);return f.jsx(Z.button,{className:`toggle-switch ${l?"active":""}`,whileTap:{scale:.95},onClick:()=>o(!l),children:f.jsx("div",{className:"toggle-knob"})})}function B4(){const[i,l]=k.useState("https://www.example.com"),[o,r]=k.useState("example.com");return f.jsxs("div",{className:"browser",children:[f.jsxs("div",{className:"browser-header",children:[f.jsxs("div",{className:"browser-nav",children:[f.jsx(Z.button,{className:"browser-btn",whileHover:{scale:1.1},whileTap:{scale:.9},children:f.jsx(O3,{size:18})}),f.jsx(Z.button,{className:"browser-btn",whileHover:{scale:1.1},whileTap:{scale:.9},children:f.jsx(_3,{size:18})}),f.jsx(Z.button,{className:"browser-btn",whileHover:{scale:1.1},whileTap:{scale:.9},children:f.jsx(wf,{size:18})}),f.jsx(Z.button,{className:"browser-btn",whileHover:{scale:1.1},whileTap:{scale:.9},children:f.jsx(Xy,{size:18})})]}),f.jsxs("div",{className:"browser-url-bar",children:[f.jsx(Zy,{size:16,className:"secure-icon"}),f.jsx("input",{type:"text",value:o,onChange:u=>{r(u.target.value),l(u.target.value)},onKeyDown:u=>{u.key==="Enter"&&r(i.replace(/^https?:\/\//,""))}}),f.jsx(Z.button,{className:"star-btn",whileHover:{scale:1.1},whileTap:{scale:.9},children:f.jsx(Ky,{size:16})})]}),f.jsx("div",{className:"browser-menu",children:f.jsx(Z.button,{className:"browser-btn",whileHover:{scale:1.1},whileTap:{scale:.9},children:f.jsx(DT,{size:18})})})]}),f.jsx("div",{className:"browser-content",children:f.jsxs("div",{className:"new-tab-page",children:[f.jsx(Z.div,{className:"logo",initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.2},children:f.jsx(ya,{size:80,strokeWidth:1})}),f.jsx(Z.h1,{className:"title",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3},children:"Solen Browser"}),f.jsx(Z.p,{className:"subtitle",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.4},children:"Fast, Secure, and Beautiful"}),f.jsxs(Z.div,{className:"search-box",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.5},children:[f.jsx(Eo,{size:20}),f.jsx("input",{type:"text",placeholder:"Search the web..."})]}),f.jsx(Z.div,{className:"quick-links",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.6},children:["Google","GitHub","YouTube","Reddit"].map((u,m)=>f.jsxs(Z.button,{className:"quick-link",initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.7+m*.1},whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},children:[f.jsx(ya,{size:24}),f.jsx("span",{children:u})]},u))})]})}),f.jsx("style",{children:`
        .browser {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          background: var(--background-dark);
        }

        .browser-header {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          background: var(--background-light);
          border-bottom: 1px solid var(--border-color);
        }

        .browser-nav {
          display: flex;
          gap: 4px;
        }

        .browser-btn {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: transparent;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .browser-btn:hover {
          background: var(--background-hover);
          color: var(--text-primary);
        }

        .browser-url-bar {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 12px;
          background: var(--background-card);
          padding: 10px 16px;
          border-radius: var(--radius-full, 9999px);
          border: 1px solid var(--border-color);
        }

        .browser-url-bar .secure-icon {
          color: #22c55e;
          flex-shrink: 0;
        }

        .browser-url-bar input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-size: 14px;
        }

        .star-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          border-radius: var(--radius-sm);
          transition: all var(--transition-fast);
        }

        .star-btn:hover {
          color: #fbbf24;
          background: rgba(251, 191, 36, 0.1);
        }

        .browser-menu {
          display: flex;
          gap: 4px;
        }

        .browser-content {
          flex: 1;
          overflow: hidden;
        }

        .new-tab-page {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          padding: 40px;
        }

        .logo {
          color: var(--primary-color);
          margin-bottom: 8px;
        }

        .title {
          font-size: 36px;
          font-weight: 600;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .subtitle {
          font-size: 16px;
          color: var(--text-secondary);
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          max-width: 600px;
          padding: 16px 20px;
          background: var(--background-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full, 9999px);
          margin-top: 24px;
        }

        .search-box svg {
          color: var(--text-muted);
          flex-shrink: 0;
        }

        .search-box input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-size: 16px;
        }

        .quick-links {
          display: flex;
          gap: 16px;
          margin-top: 32px;
        }

        .quick-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 20px 24px;
          border: none;
          background: var(--background-card);
          border-radius: var(--radius-lg);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .quick-link:hover {
          background: var(--background-hover);
          color: var(--primary-color);
          transform: translateY(-2px);
        }

        .quick-link span {
          font-size: 13px;
          font-weight: 500;
        }
      `})]})}function H4(){const[i,l]=k.useState("0"),[o,r]=k.useState(null),[u,m]=k.useState(null),[d,y]=k.useState(!1),p=O=>{d?(l(O),y(!1)):l(i==="0"?O:i+O)},g=()=>{if(d){l("0."),y(!1);return}i.includes(".")||l(i+".")},x=()=>{l("0"),r(null),m(null),y(!1)},b=O=>{const L=parseFloat(i);if(o===null)r(i);else if(u){const G=parseFloat(o);let Y;switch(u){case"+":Y=G+L;break;case"-":Y=G-L;break;case"×":Y=G*L;break;case"÷":Y=G/L;break;default:Y=L}l(String(Y)),r(String(Y))}y(!0),m(O)},U=[{label:"C",onClick:x,type:"function"},{label:"±",onClick:()=>{l(String(-parseFloat(i)))},type:"function"},{label:"%",onClick:()=>{l(String(parseFloat(i)/100))},type:"function"},{label:"÷",onClick:()=>b("÷"),type:"operator"},{label:"7",onClick:()=>p("7"),type:"number"},{label:"8",onClick:()=>p("8"),type:"number"},{label:"9",onClick:()=>p("9"),type:"number"},{label:"×",onClick:()=>b("×"),type:"operator"},{label:"4",onClick:()=>p("4"),type:"number"},{label:"5",onClick:()=>p("5"),type:"number"},{label:"6",onClick:()=>p("6"),type:"number"},{label:"-",onClick:()=>b("-"),type:"operator"},{label:"1",onClick:()=>p("1"),type:"number"},{label:"2",onClick:()=>p("2"),type:"number"},{label:"3",onClick:()=>p("3"),type:"number"},{label:"+",onClick:()=>b("+"),type:"operator"},{label:"0",onClick:()=>p("0"),type:"number",wide:!0},{label:".",onClick:g,type:"number"},{label:"=",onClick:()=>{if(!u||o===null)return;const O=parseFloat(i),L=parseFloat(o);let G;switch(u){case"+":G=L+O;break;case"-":G=L-O;break;case"×":G=L*O;break;case"÷":G=L/O;break;default:G=O}l(String(G)),r(null),m(null),y(!0)},type:"equals"}];return f.jsxs("div",{className:"calculator",children:[f.jsx("div",{className:"display",children:f.jsx(Z.div,{initial:{scale:.95,opacity:.5},animate:{scale:1,opacity:1},className:"display-value",children:i},i)}),f.jsx("div",{className:"buttons",children:U.map((O,L)=>f.jsx(Z.button,{className:`btn ${O.type} ${O.wide?"wide":""}`,onClick:O.onClick,whileHover:{scale:1.05},whileTap:{scale:.9},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{delay:L*.02},children:O.label==="C"&&O.type==="function"?f.jsx(lT,{size:20}):O.label},L))}),f.jsx("style",{children:`
        .calculator {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 16px;
          background: var(--background-dark);
        }

        .display {
          flex: 1;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          padding: 20px;
          background: var(--background-light);
          border-radius: var(--radius-lg);
          margin-bottom: 16px;
          overflow: hidden;
        }

        .display-value {
          font-size: 48px;
          font-weight: 300;
          color: var(--text-primary);
          text-align: right;
          word-break: break-all;
          line-height: 1.2;
        }

        .buttons {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }

        .btn {
          aspect-ratio: 1;
          border: none;
          border-radius: var(--radius-lg);
          font-size: 22px;
          font-weight: 500;
          cursor: pointer;
          transition: all var(--transition-fast);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn.wide {
          grid-column: span 2;
          aspect-ratio: auto;
        }

        .btn.number {
          background: var(--background-card);
          color: var(--text-primary);
        }

        .btn.number:hover {
          background: var(--background-hover);
        }

        .btn.function {
          background: var(--background-hover);
          color: var(--text-primary);
        }

        .btn.function:hover {
          background: var(--border-color);
        }

        .btn.operator {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
        }

        .btn.operator:hover {
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
        }

        .btn.equals {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          color: white;
        }

        .btn.equals:hover {
          background: linear-gradient(135deg, #16a34a, #15803d);
          box-shadow: 0 4px 15px rgba(34, 197, 94, 0.4);
        }
      `})]})}function L4(){const[i,l]=k.useState([{id:"1",title:"Welcome!",content:`Welcome to SolenOS Notes!

Start creating your notes here.`,createdAt:Date.now()}]),[o,r]=k.useState(i[0]),[u,m]=k.useState(!1),[d,y]=k.useState(""),[p,g]=k.useState(""),x=()=>{const A={id:Date.now().toString(),title:"New Note",content:"",createdAt:Date.now()};l([A,...i]),r(A),y(A.title),g(A.content),m(!0)},b=(A,M)=>{M.stopPropagation();const U=i.filter(O=>O.id!==A);l(U),o?.id===A&&r(U[0]||null)},S=()=>{if(!o)return;const A=i.map(M=>M.id===o.id?{...M,title:d,content:p}:M);l(A),r({...o,title:d,content:p}),m(!1)};return f.jsxs("div",{className:"notes",children:[f.jsxs("div",{className:"notes-sidebar",children:[f.jsxs("div",{className:"notes-header",children:[f.jsx("h2",{children:"Notes"}),f.jsx(Z.button,{className:"new-note-btn",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:x,children:f.jsx(FT,{size:20})})]}),f.jsx("div",{className:"notes-list",children:i.map((A,M)=>f.jsxs(Z.div,{className:`note-item ${o?.id===A.id?"active":""}`,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:M*.05},whileHover:{x:4},onClick:()=>{r(A),y(A.title),g(A.content),m(!1)},children:[f.jsxs("div",{className:"note-item-content",children:[f.jsx("div",{className:"note-item-title",children:A.title}),f.jsx("div",{className:"note-item-preview",children:A.content.slice(0,50)||"No content"}),f.jsx("div",{className:"note-item-date",children:new Date(A.createdAt).toLocaleDateString()})]}),f.jsx(Z.button,{className:"delete-note-btn",whileHover:{scale:1.1},whileTap:{scale:.9},onClick:U=>b(A.id,U),children:f.jsx(g4,{size:16})})]},A.id))})]}),f.jsx("div",{className:"notes-editor",children:o?f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"editor-header",children:[u?f.jsx("input",{type:"text",value:d,onChange:A=>y(A.target.value),className:"editor-title-input",placeholder:"Note title"}):f.jsx("h3",{className:"editor-title",children:o.title}),f.jsx("div",{className:"editor-actions",children:u?f.jsx(Z.button,{className:"save-btn",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:S,children:f.jsx(vl,{size:18})}):f.jsx(Z.button,{className:"edit-btn",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>{y(o.title),g(o.content),m(!0)},children:f.jsx(I0,{size:18})})})]}),f.jsx("div",{className:"editor-content",children:u?f.jsx("textarea",{value:p,onChange:A=>g(A.target.value),className:"editor-textarea",placeholder:"Start writing..."}):f.jsx("div",{className:"editor-text",children:o.content})})]}):f.jsxs("div",{className:"no-note-selected",children:[f.jsx(I0,{size:64,strokeWidth:1}),f.jsx("p",{children:"Select a note or create a new one"})]})}),f.jsx("style",{children:`
        .notes {
          width: 100%;
          height: 100%;
          display: flex;
          background: var(--background-dark);
          overflow: hidden;
        }

        .notes-sidebar {
          width: 280px;
          height: 100%;
          background: var(--background-light);
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
        }

        .notes-editor {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .notes-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid var(--border-color);
        }

        .notes-header h2 {
          font-size: 20px;
          font-weight: 600;
        }

        .new-note-btn {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: var(--primary-color);
          border-radius: var(--radius-md);
          color: white;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .new-note-btn:hover {
          background: var(--primary-hover);
        }

        .notes-list {
          flex: 1;
          overflow-y: auto;
          padding: 12px;
        }

        .note-item {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 14px;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
          margin-bottom: 4px;
        }

        .note-item:hover {
          background: var(--background-hover);
        }

        .note-item.active {
          background: rgba(99, 102, 241, 0.2);
        }

        .note-item-content {
          flex: 1;
          min-width: 0;
        }

        .note-item-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .note-item-preview {
          font-size: 12px;
          color: var(--text-secondary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 6px;
        }

        .note-item-date {
          font-size: 11px;
          color: var(--text-muted);
        }

        .delete-note-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border: none;
          background: transparent;
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          cursor: pointer;
          opacity: 0;
          transition: all var(--transition-fast);
          flex-shrink: 0;
        }

        .note-item:hover .delete-note-btn {
          opacity: 1;
        }

        .delete-note-btn:hover {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }

        .editor-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          border-bottom: 1px solid var(--border-color);
        }

        .editor-title {
          font-size: 20px;
          font-weight: 600;
        }

        .editor-title-input {
          font-size: 20px;
          font-weight: 600;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-primary);
          width: 300px;
        }

        .editor-actions {
          display: flex;
          gap: 8px;
        }

        .edit-btn,
        .save-btn {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: var(--background-hover);
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .save-btn {
          background: var(--success-color);
          color: white;
        }

        .editor-content {
          flex: 1;
          padding: 24px;
          overflow: hidden;
        }

        .editor-textarea {
          width: 100%;
          height: 100%;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-size: 15px;
          line-height: 1.6;
          resize: none;
        }

        .editor-text {
          font-size: 15px;
          line-height: 1.6;
          color: var(--text-primary);
          white-space: pre-wrap;
        }

        .no-note-selected {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          gap: 16px;
        }
      `})]})}const xi=[{id:"1",title:"Midnight Dreams",artist:"Luna Wave",duration:"3:45",cover:"🌙"},{id:"2",title:"Electric Sunrise",artist:"Neon Pulse",duration:"4:12",cover:"⚡"},{id:"3",title:"Ocean Breeze",artist:"Coastal Vibes",duration:"3:28",cover:"🌊"},{id:"4",title:"City Lights",artist:"Urban Beat",duration:"3:56",cover:"🌃"},{id:"5",title:"Mountain High",artist:"Peak Sounds",duration:"4:33",cover:"⛰️"}];function q4(){const[i,l]=k.useState(!1),[o,r]=k.useState(xi[0]),[u]=k.useState(35),[m]=k.useState(75),[d,y]=k.useState(!1);return f.jsxs("div",{className:"music",children:[f.jsxs("div",{className:"music-content",children:[f.jsxs("div",{className:"music-header",children:[f.jsx("h2",{children:"Now Playing"}),f.jsx("div",{className:"header-actions",children:f.jsx(Z.button,{className:`heart-btn ${d?"active":""}`,whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>y(!d),children:f.jsx(xT,{size:20,fill:d?"currentColor":"none"})})})]}),f.jsx(Z.div,{className:"album-art",animate:{rotate:i?360:0},transition:{duration:20,repeat:1/0,ease:"linear",repeatType:i?"loop":"reverse"},children:f.jsx("div",{className:"album-art-inner",children:o.cover})}),f.jsxs("div",{className:"song-info",children:[f.jsx("h3",{className:"song-title",children:o.title}),f.jsx("p",{className:"song-artist",children:o.artist})]}),f.jsxs("div",{className:"progress-container",children:[f.jsx("div",{className:"progress-bar",children:f.jsx(Z.div,{className:"progress-fill",style:{width:`${u}%`},children:f.jsx("div",{className:"progress-thumb"})})}),f.jsxs("div",{className:"progress-time",children:[f.jsx("span",{children:"1:18"}),f.jsx("span",{children:o.duration})]})]}),f.jsxs("div",{className:"controls",children:[f.jsx(Z.button,{className:"control-btn secondary",whileHover:{scale:1.1},whileTap:{scale:.9},children:f.jsx(a4,{size:18})}),f.jsx(Z.button,{className:"control-btn",whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>r(xi[Math.max(0,xi.indexOf(o)-1)]),children:f.jsx(s4,{size:24,fill:"currentColor"})}),f.jsx(Z.button,{className:"control-btn play-btn",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>l(!i),children:i?f.jsx(XT,{size:32,fill:"currentColor"}):f.jsx(KT,{size:32,fill:"currentColor"})}),f.jsx(Z.button,{className:"control-btn",whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>r(xi[Math.min(xi.length-1,xi.indexOf(o)+1)]),children:f.jsx(r4,{size:24,fill:"currentColor"})}),f.jsx(Z.button,{className:"control-btn secondary",whileHover:{scale:1.1},whileTap:{scale:.9},children:f.jsx($T,{size:18})})]}),f.jsxs("div",{className:"volume-container",children:[f.jsx(Fy,{size:18}),f.jsx("div",{className:"volume-bar",children:f.jsx(Z.div,{className:"volume-fill",style:{width:`${m}%`},children:f.jsx("div",{className:"volume-thumb"})})})]})]}),f.jsxs("div",{className:"playlist",children:[f.jsx("h3",{children:"Up Next"}),f.jsx("div",{className:"playlist-items",children:xi.map((p,g)=>f.jsxs(Z.div,{className:`playlist-item ${o.id===p.id?"active":""}`,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:g*.05},whileHover:{x:4,backgroundColor:"rgba(255,255,255,0.05)"},onClick:()=>r(p),children:[f.jsx("div",{className:"playlist-item-cover",children:p.cover}),f.jsxs("div",{className:"playlist-item-info",children:[f.jsx("div",{className:"playlist-item-title",children:p.title}),f.jsx("div",{className:"playlist-item-artist",children:p.artist})]}),f.jsx("div",{className:"playlist-item-duration",children:p.duration}),o.id===p.id&&i&&f.jsxs("div",{className:"equalizer",children:[f.jsx(Z.div,{className:"bar",animate:{height:[8,20,12,24,8]},transition:{duration:.5,repeat:1/0}}),f.jsx(Z.div,{className:"bar",animate:{height:[12,8,20,10,16]},transition:{duration:.6,repeat:1/0}}),f.jsx(Z.div,{className:"bar",animate:{height:[16,20,10,18,12]},transition:{duration:.7,repeat:1/0}})]})]},p.id))})]}),f.jsx("style",{children:`
        .music {
          width: 100%;
          height: 100%;
          display: flex;
          background: var(--background-dark);
          overflow: hidden;
        }

        .music-content {
          flex: 1;
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          overflow-y: auto;
        }

        .playlist {
          width: 280px;
          background: var(--background-light);
          border-left: 1px solid var(--border-color);
          padding: 20px;
          overflow-y: auto;
          flex-shrink: 0;
        }

        .music-header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .music-header h2 {
          font-size: 18px;
          font-weight: 600;
        }

        .heart-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border: none;
          background: transparent;
          border-radius: 50%;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .heart-btn:hover,
        .heart-btn.active {
          color: #ec4899;
          background: rgba(236, 72, 153, 0.1);
        }

        .album-art {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 20px 60px rgba(99, 102, 241, 0.4);
        }

        .album-art-inner {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: var(--background-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 64px;
        }

        .song-info {
          text-align: center;
        }

        .song-title {
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .song-artist {
          font-size: 14px;
          color: var(--text-secondary);
        }

        .progress-container {
          width: 100%;
          max-width: 400px;
        }

        .progress-bar {
          width: 100%;
          height: 6px;
          background: var(--background-hover);
          border-radius: 3px;
          cursor: pointer;
          position: relative;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          border-radius: 3px;
          position: relative;
        }

        .progress-thumb {
          position: absolute;
          right: -6px;
          top: 50%;
          transform: translateY(-50%);
          width: 12px;
          height: 12px;
          background: white;
          border-radius: 50%;
          opacity: 0;
          transition: opacity var(--transition-fast);
        }

        .progress-bar:hover .progress-thumb {
          opacity: 1;
        }

        .progress-time {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: var(--text-muted);
          margin-top: 8px;
        }

        .controls {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .control-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border: none;
          background: var(--background-card);
          border-radius: 50%;
          color: var(--text-primary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .control-btn:hover {
          background: var(--background-hover);
          transform: scale(1.1);
        }

        .control-btn.secondary {
          width: 36px;
          height: 36px;
          color: var(--text-secondary);
        }

        .play-btn {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
        }

        .play-btn:hover {
          box-shadow: 0 12px 32px rgba(99, 102, 241, 0.5);
        }

        .volume-container {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          max-width: 200px;
        }

        .volume-container svg {
          color: var(--text-secondary);
        }

        .volume-bar {
          flex: 1;
          height: 4px;
          background: var(--background-hover);
          border-radius: 2px;
          cursor: pointer;
        }

        .volume-fill {
          height: 100%;
          background: var(--text-secondary);
          border-radius: 2px;
          position: relative;
        }

        .volume-thumb {
          position: absolute;
          right: -4px;
          top: 50%;
          transform: translateY(-50%);
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
          opacity: 0;
        }

        .volume-bar:hover .volume-thumb {
          opacity: 1;
        }

        .playlist h3 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .playlist-items {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .playlist-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .playlist-item.active {
          background: rgba(99, 102, 241, 0.2);
        }

        .playlist-item-cover {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .playlist-item-info {
          flex: 1;
          min-width: 0;
        }

        .playlist-item-title {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-primary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .playlist-item-artist {
          font-size: 12px;
          color: var(--text-secondary);
        }

        .playlist-item-duration {
          font-size: 12px;
          color: var(--text-muted);
        }

        .equalizer {
          display: flex;
          align-items: flex-end;
          gap: 2px;
          height: 24px;
          padding-left: 8px;
        }

        .equalizer .bar {
          width: 3px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border-radius: 2px;
        }
      `})]})}const Y4=`// Welcome to SolenOS Code Editor
// Start coding your amazing projects here!

function greet(name: string): string {
  return \`Hello, \${name}! Welcome to SolenOS!\`;
}

const message = greet('Developer');
console.log(message);

// Features:
// - Syntax highlighting (simulated)
// - File explorer
// - Multiple tabs
// - Git integration (UI)

class SolenOS {
  private name: string;
  private version: string;

  constructor() {
    this.name = 'SolenOS';
    this.version = '1.0.0';
  }

  boot(): void {
    console.log(\`\${this.name} v\${this.version} is booting...\`);
  }
}

const os = new SolenOS();
os.boot();
`,G4=[{name:"src",type:"folder",children:[{name:"index.ts",type:"file"},{name:"app.ts",type:"file"},{name:"utils.ts",type:"file"},{name:"components",type:"folder",children:[{name:"Button.tsx",type:"file"},{name:"Input.tsx",type:"file"}]}]},{name:"public",type:"folder",children:[{name:"index.html",type:"file"},{name:"favicon.ico",type:"file"}]},{name:"package.json",type:"file"},{name:"tsconfig.json",type:"file"},{name:"README.md",type:"file"}];function X4(){const[i,l]=k.useState("index.ts"),[o,r]=k.useState(Y4),[u,m]=k.useState(["src"]),[d,y]=k.useState(!0),p=g=>{m(x=>x.includes(g)?x.filter(b=>b!==g):[...x,g])};return f.jsxs("div",{className:"code-editor",children:[f.jsxs("div",{className:"activity-bar",children:[f.jsx(Z.button,{className:`activity-btn ${d?"active":""}`,whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>y(!d),children:f.jsx(fo,{size:22})}),f.jsx(Z.button,{className:"activity-btn",whileHover:{scale:1.05},whileTap:{scale:.95},children:f.jsx(Eo,{size:22})}),f.jsx(Z.button,{className:"activity-btn",whileHover:{scale:1.05},whileTap:{scale:.95},children:f.jsx(dT,{size:22})}),f.jsx("div",{className:"activity-spacer"}),f.jsx(Z.button,{className:"activity-btn",whileHover:{scale:1.05},whileTap:{scale:.95},children:f.jsx(Rl,{size:22})})]}),d&&f.jsxs(Z.div,{className:"sidebar",initial:{width:0,opacity:0},animate:{width:240,opacity:1},exit:{width:0,opacity:0},children:[f.jsxs("div",{className:"sidebar-header",children:[f.jsx("span",{children:"Explorer"}),f.jsx(Z.button,{className:"sidebar-action",whileHover:{scale:1.1},whileTap:{scale:.9},children:f.jsx(OT,{size:16})})]}),f.jsx("div",{className:"file-tree",children:f.jsx($y,{items:G4,expandedFolders:u,toggleFolder:p,activeFile:i,setActiveFile:l,depth:0})})]}),f.jsxs("div",{className:"editor-container",children:[f.jsxs("div",{className:"tabs",children:[f.jsxs("div",{className:"tab active",children:[f.jsx(fo,{size:14}),f.jsx("span",{children:i}),f.jsx(Z.button,{className:"tab-close",whileHover:{scale:1.1},whileTap:{scale:.9},children:f.jsx(So,{size:12})})]}),f.jsxs("div",{className:"tab",children:[f.jsx(fo,{size:14}),f.jsx("span",{children:"app.ts"}),f.jsx(Z.button,{className:"tab-close",whileHover:{scale:1.1},whileTap:{scale:.9},children:f.jsx(So,{size:12})})]})]}),f.jsxs("div",{className:"breadcrumb",children:[f.jsx("span",{children:"src"}),f.jsx(kl,{size:14}),f.jsx("span",{children:i})]}),f.jsxs("div",{className:"code-area",children:[f.jsx("div",{className:"line-numbers",children:o.split(`
`).map((g,x)=>f.jsx("div",{className:"line-number",children:x+1},x))}),f.jsx("textarea",{className:"code-input",value:o,onChange:g=>r(g.target.value),spellCheck:!1})]}),f.jsxs("div",{className:"editor-status-bar",children:[f.jsxs("div",{className:"status-left",children:[f.jsx("span",{children:"TypeScript"}),f.jsx("span",{children:"UTF-8"})]}),f.jsxs("div",{className:"status-right",children:[f.jsxs("span",{children:["Ln ",o.split(`
`).length,", Col 1"]}),f.jsx("span",{children:"Spaces: 2"})]})]})]}),f.jsxs("div",{className:"terminal-panel",children:[f.jsxs("div",{className:"terminal-tabs",children:[f.jsx("span",{className:"terminal-tab active",children:"Terminal"}),f.jsx("span",{className:"terminal-tab",children:"Output"}),f.jsx("span",{className:"terminal-tab",children:"Problems"}),f.jsx("span",{className:"terminal-tab",children:"Debug Console"})]}),f.jsxs("div",{className:"terminal-content",children:[f.jsxs("div",{className:"terminal-line",children:[f.jsx("span",{className:"prompt",children:"user@solenos:~/project$"}),f.jsx("span",{children:"npm run dev"})]}),f.jsxs("div",{className:"terminal-output",children:[f.jsx("span",{style:{color:"#22c55e"},children:"✓"})," Ready in 234ms"]}),f.jsxs("div",{className:"terminal-output",children:[f.jsx("span",{style:{color:"#6366f1"},children:"➜"})," Local: http://localhost:5173/"]}),f.jsxs("div",{className:"terminal-cursor-line",children:[f.jsx("span",{className:"prompt",children:"user@solenos:~/project$"}),f.jsx(Z.span,{className:"terminal-cursor",animate:{opacity:[1,0]},transition:{duration:.8,repeat:1/0}})]})]})]}),f.jsx("style",{children:`
        .code-editor {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          background: #1e1e1e;
          overflow: hidden;
        }

        .activity-bar {
          width: 48px;
          background: #333333;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 8px 0;
        }

        .activity-btn {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: transparent;
          border-radius: var(--radius-md);
          color: #858585;
          cursor: pointer;
          transition: all var(--transition-fast);
          margin-bottom: 4px;
        }

        .activity-btn:hover {
          color: #ffffff;
        }

        .activity-btn.active {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
        }

        .activity-btn.active::before {
          content: '';
          position: absolute;
          left: 0;
          width: 2px;
          height: 20px;
          background: #6366f1;
        }

        .activity-spacer {
          flex: 1;
        }

        .sidebar {
          background: #252526;
          border-right: 1px solid #333333;
          overflow: hidden;
          flex-shrink: 0;
        }

        .sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #bbbbbb;
        }

        .sidebar-action {
          background: transparent;
          border: none;
          color: #858585;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          border-radius: var(--radius-sm);
        }

        .sidebar-action:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
        }

        .file-tree {
          padding: 8px 0;
        }

        .file-tree-item {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 16px;
          cursor: pointer;
          transition: all var(--transition-fast);
          font-size: 13px;
          color: #cccccc;
        }

        .file-tree-item:hover {
          background: #2a2d2e;
        }

        .file-tree-item.active {
          background: #37373d;
          color: #ffffff;
        }

        .file-tree-item.folder {
          font-weight: 500;
        }

        .file-tree-item .chevron {
          transition: transform var(--transition-fast);
        }

        .file-tree-item .chevron.expanded {
          transform: rotate(90deg);
        }

        .editor-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .tabs {
          display: flex;
          background: #252526;
          border-bottom: 1px solid #333333;
        }

        .tab {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: transparent;
          border-right: 1px solid #333333;
          color: #969696;
          cursor: pointer;
          font-size: 13px;
          min-width: 120px;
        }

        .tab.active {
          background: #1e1e1e;
          color: #ffffff;
        }

        .tab-close {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border: none;
          background: transparent;
          border-radius: var(--radius-sm);
          color: inherit;
          cursor: pointer;
          opacity: 0;
          transition: all var(--transition-fast);
        }

        .tab:hover .tab-close {
          opacity: 1;
        }

        .tab-close:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 8px 16px;
          background: #1e1e1e;
          font-size: 12px;
          color: #858585;
          border-bottom: 1px solid #333333;
        }

        .code-area {
          flex: 1;
          display: flex;
          overflow: hidden;
          background: #1e1e1e;
        }

        .line-numbers {
          padding: 16px 12px;
          background: #1e1e1e;
          color: #858585;
          font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
          font-size: 14px;
          line-height: 1.5;
          text-align: right;
          user-select: none;
        }

        .code-input {
          flex: 1;
          padding: 16px;
          background: transparent;
          border: none;
          outline: none;
          color: #d4d4d4;
          font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
          font-size: 14px;
          line-height: 1.5;
          resize: none;
          white-space: pre;
          overflow: auto;
        }

        .editor-status-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 4px 16px;
          background: #6366f1;
          font-size: 12px;
          color: white;
        }

        .status-left,
        .status-right {
          display: flex;
          gap: 16px;
        }

        .terminal-panel {
          height: 200px;
          background: #1e1e1e;
          border-top: 1px solid #333333;
          display: flex;
          flex-direction: column;
        }

        .terminal-tabs {
          display: flex;
          gap: 4px;
          padding: 8px 16px 0;
          border-bottom: 1px solid #333333;
        }

        .terminal-tab {
          padding: 8px 12px;
          font-size: 12px;
          color: #858585;
          cursor: pointer;
          border-radius: var(--radius-sm) var(--radius-sm) 0 0;
          transition: all var(--transition-fast);
        }

        .terminal-tab:hover {
          color: #ffffff;
        }

        .terminal-tab.active {
          color: #ffffff;
          background: #252526;
        }

        .terminal-content {
          flex: 1;
          padding: 12px 16px;
          font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
          font-size: 13px;
          overflow-y: auto;
        }

        .terminal-line {
          color: #d4d4d4;
          margin-bottom: 4px;
        }

        .terminal-output {
          color: #858585;
          margin-bottom: 4px;
        }

        .terminal-cursor-line {
          display: flex;
          align-items: center;
        }

        .prompt {
          color: #22c55e;
          margin-right: 8px;
        }

        .terminal-cursor {
          width: 8px;
          height: 16px;
          background: #6366f1;
          display: inline-block;
        }
      `})]})}function $y({items:i,expandedFolders:l,toggleFolder:o,activeFile:r,setActiveFile:u,depth:m}){return f.jsx(f.Fragment,{children:i.map((d,y)=>f.jsxs("div",{children:[f.jsxs(Z.div,{className:`file-tree-item ${d.type} ${r===d.name?"active":""}`,style:{paddingLeft:`${16+m*16}px`},initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:y*.02},onClick:()=>{d.type==="folder"?o(d.name):u(d.name)},children:[d.type==="folder"&&f.jsx(kl,{size:14,className:`chevron ${l.includes(d.name)?"expanded":""}`}),d.type==="folder"?f.jsx(Je,{size:16,fill:l.includes(d.name)?"#6366f1":"none"}):f.jsx(fo,{size:16}),f.jsx("span",{children:d.name})]}),d.type==="folder"&&l.includes(d.name)&&d.children&&f.jsx($y,{items:d.children,expandedFolders:l,toggleFolder:o,activeFile:r,setActiveFile:u,depth:m+1})]},`${d.name}-${y}`))})}function Q4(i){switch(i){case"terminal":return M4;case"file-explorer":return E4;case"settings":return N4;case"browser":return B4;case"calculator":return H4;case"notes":return L4;case"music":return q4;case"vscode":return X4;default:return null}}function Z4({windowState:i,isActive:l,onFocus:o}){const{closeWindow:r,minimizeWindow:u,maximizeWindow:m,updateWindowPosition:d,updateWindowSize:y,apps:p}=Wn(),[g,x]=k.useState(!1),[b,S]=k.useState(!1),A=k.useRef({x:0,y:0}),M=k.useRef(null),O=p.find(Q=>Q.id===i.appId)?.minSize||{width:400,height:300},L=Q4(i.appId),G=Q=>{i.isMaximized||(Q.preventDefault(),x(!0),A.current={x:Q.clientX-i.position.x,y:Q.clientY-i.position.y},o())},Y=Q=>{i.isMaximized||(Q.preventDefault(),Q.stopPropagation(),S(!0),o())};if(k.useEffect(()=>{const Q=W=>{if(g){const J=W.clientX-A.current.x,st=W.clientY-A.current.y,vt=window.innerWidth-O.width,Nt=window.innerHeight-100;d(i.id,{x:Math.max(-100,Math.min(J,vt)),y:Math.max(0,Math.min(st,Nt))})}else if(b&&M.current){const J=M.current.getBoundingClientRect(),st=Math.max(O.width,W.clientX-J.left),vt=Math.max(O.height,W.clientY-J.top);y(i.id,{width:st,height:vt})}},lt=()=>{x(!1),S(!1)};return(g||b)&&(document.addEventListener("mousemove",Q),document.addEventListener("mouseup",lt)),()=>{document.removeEventListener("mousemove",Q),document.removeEventListener("mouseup",lt)}},[g,b,i.id,O.width,O.height,d,y]),i.isMinimized)return null;const F=i.isMaximized?{top:0,left:0,width:"100%",height:"calc(100% - var(--taskbar-height))",borderRadius:0}:{top:i.position.y,left:i.position.x,width:i.size.width,height:i.size.height,minWidth:O.width,minHeight:O.height};return f.jsxs(Z.div,{ref:M,className:`window ${l?"active":""}`,style:F,initial:{scale:.9,opacity:0,y:20},animate:{scale:1,opacity:1,y:0},exit:{scale:.9,opacity:0,y:20},transition:{type:"spring",stiffness:300,damping:30},onClick:o,children:[f.jsxs("div",{className:"window-header",onDoubleClick:()=>m(i.id),onMouseDown:G,children:[f.jsxs("div",{className:"window-title",children:[f.jsx("div",{className:"window-icon",children:f.jsx(K4,{name:i.icon})}),f.jsx("span",{children:i.title})]}),f.jsxs("div",{className:"window-controls",children:[f.jsx("button",{className:"window-control minimize",onClick:Q=>{Q.stopPropagation(),u(i.id)},children:f.jsx(_T,{size:16})}),f.jsx("button",{className:"window-control maximize",onClick:Q=>{Q.stopPropagation(),m(i.id)},children:i.isMaximized?f.jsx(iT,{size:14}):f.jsx(u4,{size:14})}),f.jsx("button",{className:"window-control close",onClick:Q=>{Q.stopPropagation(),r(i.id)},children:f.jsx(So,{size:16})})]})]}),f.jsx("div",{className:"window-content",children:L&&f.jsx(L,{})}),!i.isMaximized&&f.jsx("div",{className:"resize-handle",onMouseDown:Y}),f.jsx("style",{children:`
        .window {
          position: absolute;
          background: rgba(20, 20, 20, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-lg);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          user-select: none;
        }

        .window.active {
          border-color: rgba(99, 102, 241, 0.3);
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.6);
        }

        .window-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.02);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          cursor: grab;
        }

        .window-header:active {
          cursor: grabbing;
        }

        .window:not(.active) .window-header {
          cursor: grab;
        }

        .window-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-secondary);
          pointer-events: none;
        }

        .window-icon {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
          border-radius: var(--radius-sm);
          color: var(--primary-color);
        }

        .window-controls {
          display: flex;
          gap: 4px;
          pointer-events: auto;
        }

        .window-control {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: transparent;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .window-control:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
        }

        .window-control.close:hover {
          background: #ef4444;
          color: white;
        }

        .window-content {
          flex: 1;
          overflow: auto;
          position: relative;
          user-select: text;
        }

        .resize-handle {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 20px;
          height: 20px;
          cursor: se-resize;
          z-index: 10;
        }

        .resize-handle::before {
          content: '';
          position: absolute;
          bottom: 6px;
          right: 6px;
          width: 8px;
          height: 8px;
          border-right: 2px solid var(--text-muted);
          border-bottom: 2px solid var(--text-muted);
        }
      `})]})}function K4({name:i}){const l={terminal:f.jsx(_l,{size:16}),folder:f.jsx(Je,{size:16}),settings:f.jsx(Rl,{size:16}),globe:f.jsx(ya,{size:16}),calculator:f.jsx(zo,{size:16}),"file-text":f.jsx(ga,{size:16}),music:f.jsx(Ol,{size:16}),code:f.jsx(Mo,{size:16})};return f.jsx(f.Fragment,{children:l[i]||f.jsx(Je,{size:16})})}function J4(){const{openWindow:i,apps:l}=Wn(),o=l.slice(0,5);return f.jsxs("div",{className:"desktop-icons",children:[o.map((r,u)=>f.jsxs(Z.button,{className:"desktop-icon",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:1.7+u*.1},whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>i(r.id),onDoubleClick:()=>i(r.id),children:[f.jsx("div",{className:"icon-background",children:f.jsx(F4,{name:r.icon})}),f.jsx("span",{className:"icon-label",children:r.name})]},r.id)),f.jsx("style",{children:`
        .desktop-icons {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 16px;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 100;
        }

        .desktop-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          padding: 12px 8px;
          border: none;
          background: transparent;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
          min-width: 80px;
        }

        .desktop-icon:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .icon-background {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3));
          border-radius: var(--radius-lg);
          color: white;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .icon-label {
          font-size: 12px;
          color: white;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
          text-align: center;
          max-width: 90px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      `})]})}function F4({name:i}){const l={terminal:f.jsx(_l,{size:28}),folder:f.jsx(Je,{size:28}),settings:f.jsx(Rl,{size:28}),globe:f.jsx(ya,{size:28}),calculator:f.jsx(zo,{size:28}),"file-text":f.jsx(ga,{size:28}),music:f.jsx(Ol,{size:28}),code:f.jsx(Mo,{size:28})};return f.jsx(f.Fragment,{children:l[i]||f.jsx(Je,{size:28})})}function P4(){const{notifications:i,removeNotification:l}=Wn(),o=u=>{switch(u){case"success":return f.jsx($3,{size:20});case"warning":return f.jsx(v4,{size:20});case"error":return f.jsx(P3,{size:20});default:return f.jsx(Qy,{size:20})}},r=u=>{switch(u){case"success":return"#22c55e";case"warning":return"#f59e0b";case"error":return"#ef4444";default:return"#6366f1"}};return f.jsxs("div",{className:"notification-area",children:[f.jsx(bf,{children:i.map((u,m)=>f.jsxs(Z.div,{className:"notification",initial:{x:400,opacity:0,scale:.9},animate:{x:0,opacity:1,scale:1},exit:{x:400,opacity:0,scale:.9},transition:{type:"spring",stiffness:300,damping:30},style:{bottom:`${100+m*80}px`,borderLeftColor:r(u.type)},children:[f.jsx("div",{className:"notification-icon",style:{color:r(u.type)},children:o(u.type)}),f.jsxs("div",{className:"notification-content",children:[f.jsx("div",{className:"notification-title",children:u.title}),f.jsx("div",{className:"notification-message",children:u.message})]}),f.jsx("button",{className:"notification-close",onClick:()=>l(u.id),children:f.jsx(So,{size:16})}),f.jsx(Z.div,{className:"notification-progress",initial:{width:"100%"},animate:{width:"0%"},transition:{duration:5,ease:"linear"}})]},u.id))}),f.jsx("style",{children:`
        .notification-area {
          position: fixed;
          right: 20px;
          z-index: 10000;
          display: flex;
          flex-direction: column;
          gap: 10px;
          pointer-events: none;
        }

        .notification {
          position: absolute;
          right: 0;
          width: 360px;
          padding: 16px;
          background: rgba(20, 20, 20, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-left: 4px solid;
          border-radius: var(--radius-lg);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: flex-start;
          gap: 12px;
          pointer-events: auto;
          overflow: hidden;
        }

        .notification-icon {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .notification-content {
          flex: 1;
          min-width: 0;
        }

        .notification-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .notification-message {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .notification-close {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border: none;
          background: transparent;
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          cursor: pointer;
          transition: all var(--transition-fast);
          flex-shrink: 0;
        }

        .notification-close:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
        }

        .notification-progress {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          background: rgba(255, 255, 255, 0.2);
        }
      `})]})}function W4({status:i="booting"}){const l={booting:"Starting SolenOS...",restarting:"Restarting...","shutting-down":"Shutting down..."},o={booting:f.jsx(Yu,{size:64,strokeWidth:1.5}),restarting:f.jsx(wf,{size:64,strokeWidth:1.5}),"shutting-down":f.jsx(Yu,{size:64,strokeWidth:1.5})};return f.jsxs(Z.div,{className:"boot-screen",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[f.jsxs(Z.div,{className:"boot-logo",initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.5,delay:.2},children:[f.jsx(Z.div,{className:"logo-icon",animate:i==="shutting-down"?{}:{rotate:i==="restarting"?[0,360]:[0,360],scale:[1,1.1,1]},transition:{rotate:{duration:2,ease:"easeInOut"},scale:{duration:1.5,repeat:1/0,ease:"easeInOut"}},children:o[i]}),f.jsx(Z.h1,{className:"logo-text",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},children:"SolenOS"}),f.jsx(Z.p,{className:"logo-subtitle",initial:{opacity:0},animate:{opacity:1},transition:{delay:.7},children:l[i]})]}),i!=="shutting-down"&&f.jsx(Z.div,{className:"boot-progress",initial:{opacity:0,width:0},animate:{opacity:1,width:"200px"},transition:{delay:.3},children:f.jsx(Z.div,{className:"progress-bar",initial:{width:0},animate:{width:"100%"},transition:{duration:1,ease:"easeInOut"}})}),i==="booting"&&f.jsx(Z.div,{className:"boot-tips",initial:{opacity:0},animate:{opacity:1},transition:{delay:1},children:f.jsx($4,{})}),f.jsx("style",{children:`
        .boot-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 40px;
          z-index: 9999;
        }

        .boot-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .logo-icon {
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          border-radius: 30px;
          box-shadow: 0 20px 60px rgba(99, 102, 241, 0.4);
          color: white;
        }

        .logo-text {
          font-size: 48px;
          font-weight: 300;
          letter-spacing: 8px;
          background: linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .logo-subtitle {
          font-size: 14px;
          color: #71717a;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .boot-progress {
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
          position: relative;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #6366f1, #8b5cf6, #6366f1);
          background-size: 200% 100%;
          border-radius: 2px;
          animation: shimmer 1.5s infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        .boot-tips {
          position: absolute;
          bottom: 60px;
          font-size: 14px;
          color: #71717a;
          text-align: center;
        }
      `})]})}const eg=["Click the Start button to explore apps","Drag windows to reposition them","Double-click desktop icons to open apps","Right-click on the desktop for more options","Use the taskbar to switch between apps","Press the maximize button for fullscreen"];function $4(){const i=Math.floor(Math.random()*eg.length);return f.jsx("p",{children:eg[i]})}function I4(){const{windows:i,activeWindowId:l,focusWindow:o,closeStartMenu:r,wallpaper:u,powerState:m,powerOn:d,themeMode:y}=Wn(),p=Wy();if(k.useEffect(()=>{const x=()=>{y==="dark"||y==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.style.setProperty("--background-dark","#0f0f0f"),document.documentElement.style.setProperty("--background-light","#1a1a1a"),document.documentElement.style.setProperty("--background-card","#252525"),document.documentElement.style.setProperty("--background-hover","#303030"),document.documentElement.style.setProperty("--text-primary","#ffffff"),document.documentElement.style.setProperty("--text-secondary","#a1a1aa"),document.documentElement.style.setProperty("--text-muted","#71717a")):(document.documentElement.style.setProperty("--background-dark","#f5f5f5"),document.documentElement.style.setProperty("--background-light","#ffffff"),document.documentElement.style.setProperty("--background-card","#e5e5e5"),document.documentElement.style.setProperty("--background-hover","#d4d4d4"),document.documentElement.style.setProperty("--text-primary","#171717"),document.documentElement.style.setProperty("--text-secondary","#525252"),document.documentElement.style.setProperty("--text-muted","#71717a"))};if(x(),y==="auto"){const b=window.matchMedia("(prefers-color-scheme: dark)"),S=()=>x();return b.addEventListener("change",S),()=>b.removeEventListener("change",S)}},[y]),m==="shut-down")return f.jsxs("div",{className:"shutdown-screen",onClick:d,children:[f.jsx("p",{children:"Click to power on"}),f.jsx("style",{children:`
          .shutdown-screen {
            width: 100%;
            height: 100%;
            background: #000;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #333;
            font-size: 14px;
            cursor: pointer;
          }
        `})]});if(m==="booting"||m==="restarting"||m==="shutting-down")return f.jsx(W4,{status:m});const g=x=>{x.target===x.currentTarget&&r()};return f.jsxs("div",{className:"desktop",style:{background:u,transition:"background 0.5s ease"},onClick:g,onContextMenu:x=>x.preventDefault(),children:[f.jsx(Z.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},className:"ambient-clock",children:p.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),f.jsxs("div",{className:"desktop-area",children:[f.jsx(J4,{}),f.jsx(bf,{children:i.map(x=>f.jsx(Z4,{windowState:x,isActive:l===x.id,onFocus:()=>o(x.id)},x.id))}),f.jsx(z4,{}),f.jsx(P4,{})]}),f.jsx(A4,{}),f.jsx("style",{children:`
        .desktop {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .desktop-area {
          width: 100%;
          height: calc(100% - var(--taskbar-height));
          position: relative;
          z-index: 10;
        }

        .ambient-clock {
          position: fixed;
          top: 20px;
          right: 30px;
          font-size: 300px;
          font-weight: 200;
          color: rgba(255, 255, 255, 0.03);
          pointer-events: none;
          z-index: 0;
          font-variant-numeric: tabular-nums;
        }
      `})]})}function tw(){return f.jsx(Ox,{children:f.jsx(I4,{})})}Dx.createRoot(document.getElementById("root")).render(f.jsx(k.StrictMode,{children:f.jsx(tw,{})}));
