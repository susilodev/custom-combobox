(function(J,z){typeof exports=="object"&&typeof module<"u"?z(exports,require("react"),require("downshift"),require("lucide-react")):typeof define=="function"&&define.amd?define(["exports","react","downshift","lucide-react"],z):(J=typeof globalThis<"u"?globalThis:J||self,z(J.CustomMultipleCombobox={},J.React,J.Downshift,J.LucideReact))})(this,function(J,z,I,Ce){"use strict";var ke={exports:{}},xe={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ie;function nr(){if(Ie)return xe;Ie=1;var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function o(t,c,u){var d=null;if(u!==void 0&&(d=""+u),c.key!==void 0&&(d=""+c.key),"key"in c){u={};for(var b in c)b!=="key"&&(u[b]=c[b])}else u=c;return c=u.ref,{$$typeof:r,type:t,key:d,ref:c!==void 0?c:null,props:u}}return xe.Fragment=n,xe.jsx=o,xe.jsxs=o,xe}var ve={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ge;function sr(){return Ge||(Ge=1,process.env.NODE_ENV!=="production"&&function(){function r(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===y?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case H:return"Portal";case re:return"Profiler";case $:return"StrictMode";case D:return"Suspense";case W:return"SuspenseList"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case ae:return(e.displayName||"Context")+".Provider";case K:return(e._context.displayName||"Context")+".Consumer";case q:var l=e.render;return e=e.displayName,e||(e=l.displayName||l.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case h:return l=e.displayName||null,l!==null?l:r(e.type)||"Memo";case p:l=e._payload,e=e._init;try{return r(e(l))}catch{}}return null}function n(e){return""+e}function o(e){try{n(e);var l=!1}catch{l=!0}if(l){l=console;var i=l.error,x=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return i.call(l,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",x),n(e)}}function t(){}function c(){if(te===0){we=console.log,le=console.info,ie=console.warn,me=console.error,ce=console.group,De=console.groupCollapsed,Ze=console.groupEnd;var e={configurable:!0,enumerable:!0,value:t,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}te++}function u(){if(te--,te===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:T({},e,{value:we}),info:T({},e,{value:le}),warn:T({},e,{value:ie}),error:T({},e,{value:me}),group:T({},e,{value:ce}),groupCollapsed:T({},e,{value:De}),groupEnd:T({},e,{value:Ze})})}0>te&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function d(e){if(_e===void 0)try{throw Error()}catch(i){var l=i.stack.trim().match(/\n( *(at )?)/);_e=l&&l[1]||"",Qe=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_e+e+Qe}function b(e,l){if(!e||ze)return"";var i=Oe.get(e);if(i!==void 0)return i;ze=!0,i=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var x=null;x=U.H,U.H=null,c();try{var P={DetermineComponentFrameRoot:function(){try{if(l){var oe=function(){throw Error()};if(Object.defineProperty(oe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(oe,[])}catch(Q){var Te=Q}Reflect.construct(e,[],oe)}else{try{oe.call()}catch(Q){Te=Q}e.call(oe.prototype)}}else{try{throw Error()}catch(Q){Te=Q}(oe=e())&&typeof oe.catch=="function"&&oe.catch(function(){})}}catch(Q){if(Q&&Te&&typeof Q.stack=="string")return[Q.stack,Te.stack]}return[null,null]}};P.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var E=Object.getOwnPropertyDescriptor(P.DetermineComponentFrameRoot,"name");E&&E.configurable&&Object.defineProperty(P.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=P.DetermineComponentFrameRoot(),Z=g[0],he=g[1];if(Z&&he){var _=Z.split(`
`),de=he.split(`
`);for(g=E=0;E<_.length&&!_[E].includes("DetermineComponentFrameRoot");)E++;for(;g<de.length&&!de[g].includes("DetermineComponentFrameRoot");)g++;if(E===_.length||g===de.length)for(E=_.length-1,g=de.length-1;1<=E&&0<=g&&_[E]!==de[g];)g--;for(;1<=E&&0<=g;E--,g--)if(_[E]!==de[g]){if(E!==1||g!==1)do if(E--,g--,0>g||_[E]!==de[g]){var Ee=`
`+_[E].replace(" at new "," at ");return e.displayName&&Ee.includes("<anonymous>")&&(Ee=Ee.replace("<anonymous>",e.displayName)),typeof e=="function"&&Oe.set(e,Ee),Ee}while(1<=E&&0<=g);break}}}finally{ze=!1,U.H=x,u(),Error.prepareStackTrace=i}return _=(_=e?e.displayName||e.name:"")?d(_):"",typeof e=="function"&&Oe.set(e,_),_}function f(e){if(e==null)return"";if(typeof e=="function"){var l=e.prototype;return b(e,!(!l||!l.isReactComponent))}if(typeof e=="string")return d(e);switch(e){case D:return d("Suspense");case W:return d("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case q:return e=b(e.render,!1),e;case h:return f(e.type);case p:l=e._payload,e=e._init;try{return f(e(l))}catch{}}return""}function k(){var e=U.A;return e===null?null:e.getOwner()}function S(e){if(N.call(e,"key")){var l=Object.getOwnPropertyDescriptor(e,"key").get;if(l&&l.isReactWarning)return!1}return e.key!==void 0}function G(e,l){function i(){er||(er=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",l))}i.isReactWarning=!0,Object.defineProperty(e,"key",{get:i,configurable:!0})}function Y(){var e=r(this.type);return rr[e]||(rr[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function B(e,l,i,x,P,E){return i=E.ref,e={$$typeof:V,type:e,key:l,props:E,_owner:P},(i!==void 0?i:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:Y}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function A(e,l,i,x,P,E){if(typeof e=="string"||typeof e=="function"||e===R||e===re||e===$||e===D||e===W||e===v||typeof e=="object"&&e!==null&&(e.$$typeof===p||e.$$typeof===h||e.$$typeof===ae||e.$$typeof===K||e.$$typeof===q||e.$$typeof===be||e.getModuleId!==void 0)){var g=l.children;if(g!==void 0)if(x)if(ge(g)){for(x=0;x<g.length;x++)M(g[x],e);Object.freeze&&Object.freeze(g)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else M(g,e)}else g="",(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(g+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),e===null?x="null":ge(e)?x="array":e!==void 0&&e.$$typeof===V?(x="<"+(r(e.type)||"Unknown")+" />",g=" Did you accidentally export a JSX literal instead of a component?"):x=typeof e,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",x,g);if(N.call(l,"key")){g=r(e);var Z=Object.keys(l).filter(function(_){return _!=="key"});x=0<Z.length?"{key: someKey, "+Z.join(": ..., ")+": ...}":"{key: someKey}",tr[g+x]||(Z=0<Z.length?"{"+Z.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,x,g,Z,g),tr[g+x]=!0)}if(g=null,i!==void 0&&(o(i),g=""+i),S(l)&&(o(l.key),g=""+l.key),"key"in l){i={};for(var he in l)he!=="key"&&(i[he]=l[he])}else i=l;return g&&G(i,typeof e=="function"?e.displayName||e.name||"Unknown":e),B(e,g,E,P,k(),i)}function M(e,l){if(typeof e=="object"&&e&&e.$$typeof!==qr){if(ge(e))for(var i=0;i<e.length;i++){var x=e[i];L(x)&&O(x,l)}else if(L(e))e._store&&(e._store.validated=1);else if(e===null||typeof e!="object"?i=null:(i=w&&e[w]||e["@@iterator"],i=typeof i=="function"?i:null),typeof i=="function"&&i!==e.entries&&(i=i.call(e),i!==e))for(;!(e=i.next()).done;)L(e.value)&&O(e.value,l)}}function L(e){return typeof e=="object"&&e!==null&&e.$$typeof===V}function O(e,l){if(e._store&&!e._store.validated&&e.key==null&&(e._store.validated=1,l=F(l),!or[l])){or[l]=!0;var i="";e&&e._owner!=null&&e._owner!==k()&&(i=null,typeof e._owner.tag=="number"?i=r(e._owner.type):typeof e._owner.name=="string"&&(i=e._owner.name),i=" It was passed a child from "+i+".");var x=U.getCurrentStack;U.getCurrentStack=function(){var P=f(e.type);return x&&(P+=x()||""),P},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',l,i),U.getCurrentStack=x}}function F(e){var l="",i=k();return i&&(i=r(i.type))&&(l=`

Check the render method of \``+i+"`."),l||(e=r(e))&&(l=`

Check the top-level render call using <`+e+">."),l}var X=z,V=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),re=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),ae=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),v=Symbol.for("react.offscreen"),w=Symbol.iterator,y=Symbol.for("react.client.reference"),U=X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=Object.prototype.hasOwnProperty,T=Object.assign,be=Symbol.for("react.client.reference"),ge=Array.isArray,te=0,we,le,ie,me,ce,De,Ze;t.__reactDisabledLog=!0;var _e,Qe,ze=!1,Oe=new(typeof WeakMap=="function"?WeakMap:Map),qr=Symbol.for("react.client.reference"),er,rr={},tr={},or={};ve.Fragment=R,ve.jsx=function(e,l,i,x,P){return A(e,l,i,!1,x,P)},ve.jsxs=function(e,l,i,x,P){return A(e,l,i,!0,x,P)}}()),ve}var Le;function ar(){return Le||(Le=1,process.env.NODE_ENV==="production"?ke.exports=nr():ke.exports=sr()),ke.exports}var C=ar();const Re="-",lr=r=>{const n=cr(r),{conflictingClassGroups:o,conflictingClassGroupModifiers:t}=r;return{getClassGroupId:d=>{const b=d.split(Re);return b[0]===""&&b.length!==1&&b.shift(),Ve(b,n)||ir(d)},getConflictingClassGroupIds:(d,b)=>{const f=o[d]||[];return b&&t[d]?[...f,...t[d]]:f}}},Ve=(r,n)=>{var d;if(r.length===0)return n.classGroupId;const o=r[0],t=n.nextPart.get(o),c=t?Ve(r.slice(1),t):void 0;if(c)return c;if(n.validators.length===0)return;const u=r.join(Re);return(d=n.validators.find(({validator:b})=>b(u)))==null?void 0:d.classGroupId},We=/^\[(.+)\]$/,ir=r=>{if(We.test(r)){const n=We.exec(r)[1],o=n==null?void 0:n.substring(0,n.indexOf(":"));if(o)return"arbitrary.."+o}},cr=r=>{const{theme:n,classGroups:o}=r,t={nextPart:new Map,validators:[]};for(const c in o)je(o[c],t,c,n);return t},je=(r,n,o,t)=>{r.forEach(c=>{if(typeof c=="string"){const u=c===""?n:Ye(n,c);u.classGroupId=o;return}if(typeof c=="function"){if(dr(c)){je(c(t),n,o,t);return}n.validators.push({validator:c,classGroupId:o});return}Object.entries(c).forEach(([u,d])=>{je(d,Ye(n,u),o,t)})})},Ye=(r,n)=>{let o=r;return n.split(Re).forEach(t=>{o.nextPart.has(t)||o.nextPart.set(t,{nextPart:new Map,validators:[]}),o=o.nextPart.get(t)}),o},dr=r=>r.isThemeGetter,ur=r=>{if(r<1)return{get:()=>{},set:()=>{}};let n=0,o=new Map,t=new Map;const c=(u,d)=>{o.set(u,d),n++,n>r&&(n=0,t=o,o=new Map)};return{get(u){let d=o.get(u);if(d!==void 0)return d;if((d=t.get(u))!==void 0)return c(u,d),d},set(u,d){o.has(u)?o.set(u,d):c(u,d)}}},Ae="!",Me=":",fr=Me.length,pr=r=>{const{prefix:n,experimentalParseClassName:o}=r;let t=c=>{const u=[];let d=0,b=0,f=0,k;for(let A=0;A<c.length;A++){let M=c[A];if(d===0&&b===0){if(M===Me){u.push(c.slice(f,A)),f=A+fr;continue}if(M==="/"){k=A;continue}}M==="["?d++:M==="]"?d--:M==="("?b++:M===")"&&b--}const S=u.length===0?c:c.substring(f),G=br(S),Y=G!==S,B=k&&k>f?k-f:void 0;return{modifiers:u,hasImportantModifier:Y,baseClassName:G,maybePostfixModifierPosition:B}};if(n){const c=n+Me,u=t;t=d=>d.startsWith(c)?u(d.substring(c.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:d,maybePostfixModifierPosition:void 0}}if(o){const c=t;t=u=>o({className:u,parseClassName:c})}return t},br=r=>r.endsWith(Ae)?r.substring(0,r.length-1):r.startsWith(Ae)?r.substring(1):r,gr=r=>{const n=Object.fromEntries(r.orderSensitiveModifiers.map(t=>[t,!0]));return t=>{if(t.length<=1)return t;const c=[];let u=[];return t.forEach(d=>{d[0]==="["||n[d]?(c.push(...u.sort(),d),u=[]):u.push(d)}),c.push(...u.sort()),c}},mr=r=>({cache:ur(r.cacheSize),parseClassName:pr(r),sortModifiers:gr(r),...lr(r)}),hr=/\s+/,xr=(r,n)=>{const{parseClassName:o,getClassGroupId:t,getConflictingClassGroupIds:c,sortModifiers:u}=n,d=[],b=r.trim().split(hr);let f="";for(let k=b.length-1;k>=0;k-=1){const S=b[k],{isExternal:G,modifiers:Y,hasImportantModifier:B,baseClassName:A,maybePostfixModifierPosition:M}=o(S);if(G){f=S+(f.length>0?" "+f:f);continue}let L=!!M,O=t(L?A.substring(0,M):A);if(!O){if(!L){f=S+(f.length>0?" "+f:f);continue}if(O=t(A),!O){f=S+(f.length>0?" "+f:f);continue}L=!1}const F=u(Y).join(":"),X=B?F+Ae:F,V=X+O;if(d.includes(V))continue;d.push(V);const H=c(O,L);for(let R=0;R<H.length;++R){const $=H[R];d.push(X+$)}f=S+(f.length>0?" "+f:f)}return f};function vr(){let r=0,n,o,t="";for(;r<arguments.length;)(n=arguments[r++])&&(o=Be(n))&&(t&&(t+=" "),t+=o);return t}const Be=r=>{if(typeof r=="string")return r;let n,o="";for(let t=0;t<r.length;t++)r[t]&&(n=Be(r[t]))&&(o&&(o+=" "),o+=n);return o};function yr(r,...n){let o,t,c,u=d;function d(f){const k=n.reduce((S,G)=>G(S),r());return o=mr(k),t=o.cache.get,c=o.cache.set,u=b,b(f)}function b(f){const k=t(f);if(k)return k;const S=xr(f,o);return c(f,S),S}return function(){return u(vr.apply(null,arguments))}}const j=r=>{const n=o=>o[r]||[];return n.isThemeGetter=!0,n},Fe=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Ue=/^\((?:(\w[\w-]*):)?(.+)\)$/i,wr=/^\d+\/\d+$/,Er=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Cr=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,kr=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Sr=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Tr=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,ue=r=>wr.test(r),m=r=>!!r&&!Number.isNaN(Number(r)),ne=r=>!!r&&Number.isInteger(Number(r)),He=r=>r.endsWith("%")&&m(r.slice(0,-1)),ee=r=>Er.test(r),Rr=()=>!0,jr=r=>Cr.test(r)&&!kr.test(r),Ne=()=>!1,Ar=r=>Sr.test(r),Mr=r=>Tr.test(r),Nr=r=>!s(r)&&!a(r),Pr=r=>fe(r,$e,Ne),s=r=>Fe.test(r),se=r=>fe(r,Ke,jr),Pe=r=>fe(r,Fr,m),_r=r=>fe(r,Je,Ne),zr=r=>fe(r,Xe,Mr),Or=r=>fe(r,Ne,Ar),a=r=>Ue.test(r),Se=r=>pe(r,Ke),Ir=r=>pe(r,Ur),Gr=r=>pe(r,Je),Lr=r=>pe(r,$e),Vr=r=>pe(r,Xe),Wr=r=>pe(r,Hr,!0),fe=(r,n,o)=>{const t=Fe.exec(r);return t?t[1]?n(t[1]):o(t[2]):!1},pe=(r,n,o=!1)=>{const t=Ue.exec(r);return t?t[1]?n(t[1]):o:!1},Je=r=>r==="position",Yr=new Set(["image","url"]),Xe=r=>Yr.has(r),Br=new Set(["length","size","percentage"]),$e=r=>Br.has(r),Ke=r=>r==="length",Fr=r=>r==="number",Ur=r=>r==="family-name",Hr=r=>r==="shadow",Jr=yr(()=>{const r=j("color"),n=j("font"),o=j("text"),t=j("font-weight"),c=j("tracking"),u=j("leading"),d=j("breakpoint"),b=j("container"),f=j("spacing"),k=j("radius"),S=j("shadow"),G=j("inset-shadow"),Y=j("drop-shadow"),B=j("blur"),A=j("perspective"),M=j("aspect"),L=j("ease"),O=j("animate"),F=()=>["auto","avoid","all","avoid-page","page","left","right","column"],X=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],V=()=>["auto","hidden","clip","visible","scroll"],H=()=>["auto","contain","none"],R=()=>[ue,"px","full","auto",a,s,f],$=()=>[ne,"none","subgrid",a,s],re=()=>["auto",{span:["full",ne,a,s]},a,s],K=()=>[ne,"auto",a,s],ae=()=>["auto","min","max","fr",a,s],q=()=>[a,s,f],D=()=>["start","end","center","between","around","evenly","stretch","baseline"],W=()=>["start","end","center","stretch"],h=()=>[a,s,f],p=()=>["px",...h()],v=()=>["px","auto",...h()],w=()=>[ue,"auto","px","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",a,s,f],y=()=>[r,a,s],U=()=>[He,se],N=()=>["","none","full",k,a,s],T=()=>["",m,Se,se],be=()=>["solid","dashed","dotted","double"],ge=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],te=()=>["","none",B,a,s],we=()=>["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",a,s],le=()=>["none",m,a,s],ie=()=>["none",m,a,s],me=()=>[m,a,s],ce=()=>[ue,"full","px",a,s,f];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[ee],breakpoint:[ee],color:[Rr],container:[ee],"drop-shadow":[ee],ease:["in","out","in-out"],font:[Nr],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[ee],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[ee],shadow:[ee],spacing:[m],text:[ee],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",ue,s,a,M]}],container:["container"],columns:[{columns:[m,s,a,b]}],"break-after":[{"break-after":F()}],"break-before":[{"break-before":F()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...X(),s,a]}],overflow:[{overflow:V()}],"overflow-x":[{"overflow-x":V()}],"overflow-y":[{"overflow-y":V()}],overscroll:[{overscroll:H()}],"overscroll-x":[{"overscroll-x":H()}],"overscroll-y":[{"overscroll-y":H()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:R()}],"inset-x":[{"inset-x":R()}],"inset-y":[{"inset-y":R()}],start:[{start:R()}],end:[{end:R()}],top:[{top:R()}],right:[{right:R()}],bottom:[{bottom:R()}],left:[{left:R()}],visibility:["visible","invisible","collapse"],z:[{z:[ne,"auto",a,s]}],basis:[{basis:[ue,"full","auto",a,s,b,f]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[m,ue,"auto","initial","none",s]}],grow:[{grow:["",m,a,s]}],shrink:[{shrink:["",m,a,s]}],order:[{order:[ne,"first","last","none",a,s]}],"grid-cols":[{"grid-cols":$()}],"col-start-end":[{col:re()}],"col-start":[{"col-start":K()}],"col-end":[{"col-end":K()}],"grid-rows":[{"grid-rows":$()}],"row-start-end":[{row:re()}],"row-start":[{"row-start":K()}],"row-end":[{"row-end":K()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":ae()}],"auto-rows":[{"auto-rows":ae()}],gap:[{gap:q()}],"gap-x":[{"gap-x":q()}],"gap-y":[{"gap-y":q()}],"justify-content":[{justify:[...D(),"normal"]}],"justify-items":[{"justify-items":[...W(),"normal"]}],"justify-self":[{"justify-self":["auto",...W()]}],"align-content":[{content:["normal",...D()]}],"align-items":[{items:[...W(),"baseline"]}],"align-self":[{self:["auto",...W(),"baseline"]}],"place-content":[{"place-content":D()}],"place-items":[{"place-items":[...W(),"baseline"]}],"place-self":[{"place-self":["auto",...W()]}],p:[{p:p()}],px:[{px:p()}],py:[{py:p()}],ps:[{ps:p()}],pe:[{pe:p()}],pt:[{pt:p()}],pr:[{pr:p()}],pb:[{pb:p()}],pl:[{pl:p()}],m:[{m:v()}],mx:[{mx:v()}],my:[{my:v()}],ms:[{ms:v()}],me:[{me:v()}],mt:[{mt:v()}],mr:[{mr:v()}],mb:[{mb:v()}],ml:[{ml:v()}],"space-x":[{"space-x":h()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":h()}],"space-y-reverse":["space-y-reverse"],size:[{size:w()}],w:[{w:[b,"screen",...w()]}],"min-w":[{"min-w":[b,"screen","none",...w()]}],"max-w":[{"max-w":[b,"screen","none","prose",{screen:[d]},...w()]}],h:[{h:["screen",...w()]}],"min-h":[{"min-h":["screen","none",...w()]}],"max-h":[{"max-h":["screen",...w()]}],"font-size":[{text:["base",o,Se,se]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[t,a,Pe]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",He,s]}],"font-family":[{font:[Ir,s,n]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[c,a,s]}],"line-clamp":[{"line-clamp":[m,"none",a,Pe]}],leading:[{leading:[a,s,u,f]}],"list-image":[{"list-image":["none",a,s]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",a,s]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:y()}],"text-color":[{text:y()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...be(),"wavy"]}],"text-decoration-thickness":[{decoration:[m,"from-font","auto",a,se]}],"text-decoration-color":[{decoration:y()}],"underline-offset":[{"underline-offset":[m,"auto",a,s]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:["px",...h()]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",a,s]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",a,s]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...X(),Gr,_r]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","space","round"]}]}],"bg-size":[{bg:["auto","cover","contain",Lr,Pr]}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},ne,a,s],radial:["",a,s],conic:[ne,a,s]},Vr,zr]}],"bg-color":[{bg:y()}],"gradient-from-pos":[{from:U()}],"gradient-via-pos":[{via:U()}],"gradient-to-pos":[{to:U()}],"gradient-from":[{from:y()}],"gradient-via":[{via:y()}],"gradient-to":[{to:y()}],rounded:[{rounded:N()}],"rounded-s":[{"rounded-s":N()}],"rounded-e":[{"rounded-e":N()}],"rounded-t":[{"rounded-t":N()}],"rounded-r":[{"rounded-r":N()}],"rounded-b":[{"rounded-b":N()}],"rounded-l":[{"rounded-l":N()}],"rounded-ss":[{"rounded-ss":N()}],"rounded-se":[{"rounded-se":N()}],"rounded-ee":[{"rounded-ee":N()}],"rounded-es":[{"rounded-es":N()}],"rounded-tl":[{"rounded-tl":N()}],"rounded-tr":[{"rounded-tr":N()}],"rounded-br":[{"rounded-br":N()}],"rounded-bl":[{"rounded-bl":N()}],"border-w":[{border:T()}],"border-w-x":[{"border-x":T()}],"border-w-y":[{"border-y":T()}],"border-w-s":[{"border-s":T()}],"border-w-e":[{"border-e":T()}],"border-w-t":[{"border-t":T()}],"border-w-r":[{"border-r":T()}],"border-w-b":[{"border-b":T()}],"border-w-l":[{"border-l":T()}],"divide-x":[{"divide-x":T()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":T()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...be(),"hidden","none"]}],"divide-style":[{divide:[...be(),"hidden","none"]}],"border-color":[{border:y()}],"border-color-x":[{"border-x":y()}],"border-color-y":[{"border-y":y()}],"border-color-s":[{"border-s":y()}],"border-color-e":[{"border-e":y()}],"border-color-t":[{"border-t":y()}],"border-color-r":[{"border-r":y()}],"border-color-b":[{"border-b":y()}],"border-color-l":[{"border-l":y()}],"divide-color":[{divide:y()}],"outline-style":[{outline:[...be(),"none","hidden"]}],"outline-offset":[{"outline-offset":[m,a,s]}],"outline-w":[{outline:["",m,Se,se]}],"outline-color":[{outline:[r]}],shadow:[{shadow:["","none",S,Wr,Or]}],"shadow-color":[{shadow:y()}],"inset-shadow":[{"inset-shadow":["none",a,s,G]}],"inset-shadow-color":[{"inset-shadow":y()}],"ring-w":[{ring:T()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:y()}],"ring-offset-w":[{"ring-offset":[m,se]}],"ring-offset-color":[{"ring-offset":y()}],"inset-ring-w":[{"inset-ring":T()}],"inset-ring-color":[{"inset-ring":y()}],opacity:[{opacity:[m,a,s]}],"mix-blend":[{"mix-blend":[...ge(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ge()}],filter:[{filter:["","none",a,s]}],blur:[{blur:te()}],brightness:[{brightness:[m,a,s]}],contrast:[{contrast:[m,a,s]}],"drop-shadow":[{"drop-shadow":["","none",Y,a,s]}],grayscale:[{grayscale:["",m,a,s]}],"hue-rotate":[{"hue-rotate":[m,a,s]}],invert:[{invert:["",m,a,s]}],saturate:[{saturate:[m,a,s]}],sepia:[{sepia:["",m,a,s]}],"backdrop-filter":[{"backdrop-filter":["","none",a,s]}],"backdrop-blur":[{"backdrop-blur":te()}],"backdrop-brightness":[{"backdrop-brightness":[m,a,s]}],"backdrop-contrast":[{"backdrop-contrast":[m,a,s]}],"backdrop-grayscale":[{"backdrop-grayscale":["",m,a,s]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[m,a,s]}],"backdrop-invert":[{"backdrop-invert":["",m,a,s]}],"backdrop-opacity":[{"backdrop-opacity":[m,a,s]}],"backdrop-saturate":[{"backdrop-saturate":[m,a,s]}],"backdrop-sepia":[{"backdrop-sepia":["",m,a,s]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":h()}],"border-spacing-x":[{"border-spacing-x":h()}],"border-spacing-y":[{"border-spacing-y":h()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",a,s]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[m,"initial",a,s]}],ease:[{ease:["linear","initial",L,a,s]}],delay:[{delay:[m,a,s]}],animate:[{animate:["none",O,a,s]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[A,a,s]}],"perspective-origin":[{"perspective-origin":we()}],rotate:[{rotate:le()}],"rotate-x":[{"rotate-x":le()}],"rotate-y":[{"rotate-y":le()}],"rotate-z":[{"rotate-z":le()}],scale:[{scale:ie()}],"scale-x":[{"scale-x":ie()}],"scale-y":[{"scale-y":ie()}],"scale-z":[{"scale-z":ie()}],"scale-3d":["scale-3d"],skew:[{skew:me()}],"skew-x":[{"skew-x":me()}],"skew-y":[{"skew-y":me()}],transform:[{transform:[a,s,"","none","gpu","cpu"]}],"transform-origin":[{origin:we()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:ce()}],"translate-x":[{"translate-x":ce()}],"translate-y":[{"translate-y":ce()}],"translate-z":[{"translate-z":ce()}],"translate-none":["translate-none"],accent:[{accent:y()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:y()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",a,s]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":h()}],"scroll-mx":[{"scroll-mx":h()}],"scroll-my":[{"scroll-my":h()}],"scroll-ms":[{"scroll-ms":h()}],"scroll-me":[{"scroll-me":h()}],"scroll-mt":[{"scroll-mt":h()}],"scroll-mr":[{"scroll-mr":h()}],"scroll-mb":[{"scroll-mb":h()}],"scroll-ml":[{"scroll-ml":h()}],"scroll-p":[{"scroll-p":h()}],"scroll-px":[{"scroll-px":h()}],"scroll-py":[{"scroll-py":h()}],"scroll-ps":[{"scroll-ps":h()}],"scroll-pe":[{"scroll-pe":h()}],"scroll-pt":[{"scroll-pt":h()}],"scroll-pr":[{"scroll-pr":h()}],"scroll-pb":[{"scroll-pb":h()}],"scroll-pl":[{"scroll-pl":h()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",a,s]}],fill:[{fill:["none",...y()]}],"stroke-w":[{stroke:[m,Se,se,Pe]}],stroke:[{stroke:["none",...y()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["before","after","placeholder","file","marker","selection","first-line","first-letter","backdrop","*","**"]}});function qe(r){var n,o,t="";if(typeof r=="string"||typeof r=="number")t+=r;else if(typeof r=="object")if(Array.isArray(r)){var c=r.length;for(n=0;n<c;n++)r[n]&&(o=qe(r[n]))&&(t&&(t+=" "),t+=o)}else for(o in r)r[o]&&(t&&(t+=" "),t+=o);return t}function Xr(){for(var r,n,o=0,t="",c=arguments.length;o<c;o++)(r=arguments[o])&&(n=qe(r))&&(t&&(t+=" "),t+=n);return t}function ye(...r){return Jr(Xr(...r))}const $r=(r,n)=>{if(!n)return r;const o=new RegExp(`(${n})`,"gi");return r.replace(o,'<mark class="bg-green-300">$1</mark>')};function Kr({options:r,onSelect:n,multiple:o=!0,withSearch:t=!0,...c}){const[u,d]=z.useState(""),[b,f]=z.useState([]),[k,S]=z.useState(!1),[G,Y]=z.useState(!1),B=z.useRef(null),A=z.useRef(null),M=z.useMemo(()=>r.filter(p=>p.label.toLowerCase().includes(u.toLowerCase())),[u,r]),{getSelectedItemProps:L,removeSelectedItem:O}=I.useMultipleSelection({selectedItems:b,onStateChange({selectedItems:p,type:v}){switch(v){case I.useMultipleSelection.stateChangeTypes.SelectedItemKeyDownBackspace:case I.useMultipleSelection.stateChangeTypes.SelectedItemKeyDownDelete:case I.useMultipleSelection.stateChangeTypes.DropdownKeyDownBackspace:case I.useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:f(p||[]),n(p||[]);break}}}),{isOpen:F,getToggleButtonProps:X,getMenuProps:V,getInputProps:H,highlightedIndex:R,getItemProps:$}=I.useCombobox({items:M,itemToString:p=>p?p.label:"",inputValue:u,defaultHighlightedIndex:0,stateReducer:(p,{changes:v,type:w})=>{switch(w){case I.useCombobox.stateChangeTypes.InputKeyDownEnter:case I.useCombobox.stateChangeTypes.ItemClick:return{...v,isOpen:!0,highlightedIndex:0};default:return v}},onStateChange:({inputValue:p,type:v,selectedItem:w})=>{switch(v){case I.useCombobox.stateChangeTypes.InputKeyDownEnter:case I.useCombobox.stateChangeTypes.ItemClick:w&&(o?(f([...b,w]),n([...b,w])):(f([w]),n([w])),d(""));break;case I.useCombobox.stateChangeTypes.InputChange:d(p||"");break}}}),{isOpen:re,getToggleButtonProps:K,getMenuProps:ae,highlightedIndex:q,getItemProps:D}=I.useSelect({items:r,onSelectedItemChange:({selectedItem:p})=>{p&&(o?(f([...b,p]),n([...b,p])):(f([p]),n([p])))}});z.useEffect(()=>{const p=v=>{B.current&&!B.current.contains(v.target)&&(S(!1),Y(!1))};return document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)}},[]);const W=()=>{Y(!0)},h=()=>{Y(!1)};return C.jsx(C.Fragment,{children:C.jsx("div",{className:"w-full flex flex-col bg-white h-auto z-[1002] relativea ",ref:B,...c,children:C.jsxs("div",{className:"relative w-full cursor-pointer",onClick:()=>{t&&(S(!0),setTimeout(()=>{var p;(p=A.current)==null||p.focus()},0))},children:[C.jsxs("div",{...t?X():K(),className:"flex items-center border border-slate-300 bg-white rounded-md px-3 py-2 focus-within:shadow-sm focus-within:ring-slate-300 h-10 debug-red",children:[C.jsx("div",{className:"flex flex-wrap gap-1 flex-1",children:b.map((p,v)=>C.jsxs("span",{className:"bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-xs flex items-center gap-1",...L({selectedItem:p,index:v}),children:[p.label,o&&C.jsx(Ce.CircleX,{onClick:w=>{w.stopPropagation(),O(p)},className:"w-3 h-3 cursor-pointer text-gray-500 hover:text-gray-700"})]},`selected-item-${v}`))}),!t&&b.length>0&&C.jsx(Ce.X,{onClick:()=>{O(b[0])},className:"h-4 w-4 bg-gray-400 p-1 rounded-full cursor-pointer text-slate-100 hover:text-white hover:bg-gray-600"}),C.jsx(Ce.ChevronDown,{className:ye("ml-2 cursor-pointer text-xs outline-none focus:outline-none",G?"text-slate-500":"text-slate-300")})]}),!t&&C.jsx(C.Fragment,{children:C.jsx("ul",{...ae(),className:ye("absolute bg-white z-max left-0 w-full border border-gray-300 pt-1 rounded-bl-md rounded-br-md overflow-hidden",!re&&"hidden"),children:re&&r.map((p,v)=>C.jsx("li",{...D({item:p,index:v}),className:ye("px-4 py-2 cursor-pointer hover:bg-green-100/70 transition",q===v&&"bg-green-50/80",b.some(w=>w.value===p.value)&&"font-semibold text-gray-900"),children:p.label},p.value))})}),t&&k&&C.jsxs("div",{className:"relative w-full mt-2 z-max",children:[C.jsxs("div",{onFocus:W,onBlur:()=>{h(),S(!1)},className:"flex items-center border border-slate-300 bg-white rounded-md px-3 py-2 focus-within:shadow-sm focus-within:ring-slate-300",children:[C.jsx("input",{...H({placeholder:"Search...",className:"flex-1 bg-transparent outline-none min-w-[100px]",ref:A})}),C.jsx(Ce.X,{onClick:()=>d(""),className:"h-4 w-4 bg-gray-400 p-1 rounded-full cursor-pointer text-slate-100 hover:text-white hover:bg-gray-600"})]}),C.jsxs("ul",{...V(),className:ye("absolute left-0 w-full bg-white border border-gray-300 pt-2 rounded-bl-md rounded-br-md overflow-hidden z-[1000]",!F&&"hidden"),children:[F&&M.map((p,v)=>C.jsx("li",{...$({item:p,index:v}),className:ye("px-4 py-2 cursor-pointer hover:bg-green-100/70 transition",R===v&&"bg-green-50/80",b.some(w=>w.value===p.value)&&"font-semibold text-gray-900"),children:C.jsx("span",{dangerouslySetInnerHTML:{__html:$r(p.label,u)}})},p.value)),F&&M.length===0&&C.jsx("li",{className:"justify-center w-full mx-auto text-center text-slate-400 p-2",children:"No options"})]})]})]})})})}J.CustomMultipleCombobox=Kr,Object.defineProperty(J,Symbol.toStringTag,{value:"Module"})});
