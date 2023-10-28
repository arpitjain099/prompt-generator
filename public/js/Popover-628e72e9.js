import{S as kt,i as Dt,s as Tt,e as rt,b as ze,f as je,g as Rt,t as Ie,d as Bt,h as Q,C as jt,W as Lt,M as St,k as we,a as nt,l as Oe,m as xe,c as ot,n as Z,D as ye,N as Ht,O as Mt,P as _t,F as Wt,K as it,V as Ft}from"./index-2e06e8b9.js";import{a as at}from"./index-2af9d510.js";/* empty css                                              */function I(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ae(t){var e=I(t).Element;return t instanceof e||t instanceof Element}function W(t){var e=I(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Ue(t){if(typeof ShadowRoot>"u")return!1;var e=I(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}var ie=Math.max,Se=Math.min,le=Math.round;function Ne(){var t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function yt(){return!/^((?!chrome|android).)*safari/i.test(Ne())}function ue(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!1);var n=t.getBoundingClientRect(),o=1,a=1;e&&W(t)&&(o=t.offsetWidth>0&&le(n.width)/t.offsetWidth||1,a=t.offsetHeight>0&&le(n.height)/t.offsetHeight||1);var c=ae(t)?I(t):window,i=c.visualViewport,s=!yt()&&r,u=(n.left+(s&&i?i.offsetLeft:0))/o,f=(n.top+(s&&i?i.offsetTop:0))/a,w=n.width/o,h=n.height/a;return{width:w,height:h,top:f,right:u+w,bottom:f+h,left:u,x:u,y:f}}function Xe(t){var e=I(t),r=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Vt(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function It(t){return t===I(t)||!W(t)?Xe(t):Vt(t)}function X(t){return t?(t.nodeName||"").toLowerCase():null}function $(t){return((ae(t)?t.ownerDocument:t.document)||window.document).documentElement}function Ye(t){return ue($(t)).left+Xe(t).scrollLeft}function K(t){return I(t).getComputedStyle(t)}function Ge(t){var e=K(t),r=e.overflow,n=e.overflowX,o=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function Nt(t){var e=t.getBoundingClientRect(),r=le(e.width)/t.offsetWidth||1,n=le(e.height)/t.offsetHeight||1;return r!==1||n!==1}function qt(t,e,r){r===void 0&&(r=!1);var n=W(e),o=W(e)&&Nt(e),a=$(e),c=ue(t,o,r),i={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!r)&&((X(e)!=="body"||Ge(a))&&(i=It(e)),W(e)?(s=ue(e,!0),s.x+=e.clientLeft,s.y+=e.clientTop):a&&(s.x=Ye(a))),{x:c.left+i.scrollLeft-s.x,y:c.top+i.scrollTop-s.y,width:c.width,height:c.height}}function Ke(t){var e=ue(t),r=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:n}}function He(t){return X(t)==="html"?t:t.assignedSlot||t.parentNode||(Ue(t)?t.host:null)||$(t)}function bt(t){return["html","body","#document"].indexOf(X(t))>=0?t.ownerDocument.body:W(t)&&Ge(t)?t:bt(He(t))}function Ee(t,e){var r;e===void 0&&(e=[]);var n=bt(t),o=n===((r=t.ownerDocument)==null?void 0:r.body),a=I(n),c=o?[a].concat(a.visualViewport||[],Ge(n)?n:[]):n,i=e.concat(c);return o?i:i.concat(Ee(He(c)))}function zt(t){return["table","td","th"].indexOf(X(t))>=0}function st(t){return!W(t)||K(t).position==="fixed"?null:t.offsetParent}function Ut(t){var e=/firefox/i.test(Ne()),r=/Trident/i.test(Ne());if(r&&W(t)){var n=K(t);if(n.position==="fixed")return null}var o=He(t);for(Ue(o)&&(o=o.host);W(o)&&["html","body"].indexOf(X(o))<0;){var a=K(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||e&&a.willChange==="filter"||e&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function ke(t){for(var e=I(t),r=st(t);r&&zt(r)&&K(r).position==="static";)r=st(r);return r&&(X(r)==="html"||X(r)==="body"&&K(r).position==="static")?e:r||Ut(t)||e}var H="top",F="bottom",V="right",M="left",Je="auto",De=[H,F,V,M],pe="start",Pe="end",Xt="clippingParents",wt="viewport",be="popper",Yt="reference",ft=De.reduce(function(t,e){return t.concat([e+"-"+pe,e+"-"+Pe])},[]),Ot=[].concat(De,[Je]).reduce(function(t,e){return t.concat([e,e+"-"+pe,e+"-"+Pe])},[]),Gt="beforeRead",Kt="read",Jt="afterRead",Qt="beforeMain",Zt="main",$t="afterMain",er="beforeWrite",tr="write",rr="afterWrite",nr=[Gt,Kt,Jt,Qt,Zt,$t,er,tr,rr];function or(t){var e=new Map,r=new Set,n=[];t.forEach(function(a){e.set(a.name,a)});function o(a){r.add(a.name);var c=[].concat(a.requires||[],a.requiresIfExists||[]);c.forEach(function(i){if(!r.has(i)){var s=e.get(i);s&&o(s)}}),n.push(a)}return t.forEach(function(a){r.has(a.name)||o(a)}),n}function ir(t){var e=or(t);return nr.reduce(function(r,n){return r.concat(e.filter(function(o){return o.phase===n}))},[])}function ar(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function U(t){return t.split("-")[0]}function sr(t){var e=t.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(e).map(function(r){return e[r]})}function fr(t,e){var r=I(t),n=$(t),o=r.visualViewport,a=n.clientWidth,c=n.clientHeight,i=0,s=0;if(o){a=o.width,c=o.height;var u=yt();(u||!u&&e==="fixed")&&(i=o.offsetLeft,s=o.offsetTop)}return{width:a,height:c,x:i+Ye(t),y:s}}function cr(t){var e,r=$(t),n=Xe(t),o=(e=t.ownerDocument)==null?void 0:e.body,a=ie(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),c=ie(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),i=-n.scrollLeft+Ye(t),s=-n.scrollTop;return K(o||r).direction==="rtl"&&(i+=ie(r.clientWidth,o?o.clientWidth:0)-a),{width:a,height:c,x:i,y:s}}function xt(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&Ue(r)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function qe(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function lr(t,e){var r=ue(t,!1,e==="fixed");return r.top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r}function ct(t,e,r){return e===wt?qe(fr(t,r)):ae(e)?lr(e,r):qe(cr($(t)))}function ur(t){var e=Ee(He(t)),r=["absolute","fixed"].indexOf(K(t).position)>=0,n=r&&W(t)?ke(t):t;return ae(n)?e.filter(function(o){return ae(o)&&xt(o,n)&&X(o)!=="body"}):[]}function pr(t,e,r,n){var o=e==="clippingParents"?ur(t):[].concat(e),a=[].concat(o,[r]),c=a[0],i=a.reduce(function(s,u){var f=ct(t,u,n);return s.top=ie(f.top,s.top),s.right=Se(f.right,s.right),s.bottom=Se(f.bottom,s.bottom),s.left=ie(f.left,s.left),s},ct(t,c,n));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function ve(t){return t.split("-")[1]}function Qe(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Et(t){var e=t.reference,r=t.element,n=t.placement,o=n?U(n):null,a=n?ve(n):null,c=e.x+e.width/2-r.width/2,i=e.y+e.height/2-r.height/2,s;switch(o){case H:s={x:c,y:e.y-r.height};break;case F:s={x:c,y:e.y+e.height};break;case V:s={x:e.x+e.width,y:i};break;case M:s={x:e.x-r.width,y:i};break;default:s={x:e.x,y:e.y}}var u=o?Qe(o):null;if(u!=null){var f=u==="y"?"height":"width";switch(a){case pe:s[u]=s[u]-(e[f]/2-r[f]/2);break;case Pe:s[u]=s[u]+(e[f]/2-r[f]/2);break}}return s}function At(){return{top:0,right:0,bottom:0,left:0}}function Pt(t){return Object.assign({},At(),t)}function Ct(t,e){return e.reduce(function(r,n){return r[n]=t,r},{})}function Ce(t,e){e===void 0&&(e={});var r=e,n=r.placement,o=n===void 0?t.placement:n,a=r.strategy,c=a===void 0?t.strategy:a,i=r.boundary,s=i===void 0?Xt:i,u=r.rootBoundary,f=u===void 0?wt:u,w=r.elementContext,h=w===void 0?be:w,l=r.altBoundary,y=l===void 0?!1:l,m=r.padding,b=m===void 0?0:m,O=Pt(typeof b!="number"?b:Ct(b,De)),P=h===be?Yt:be,E=t.rects.popper,v=t.elements[y?P:h],d=pr(ae(v)?v:v.contextElement||$(t.elements.popper),s,f,c),g=ue(t.elements.reference),x=Et({reference:g,element:E,strategy:"absolute",placement:o}),C=qe(Object.assign({},E,x)),k=h===be?C:g,A={top:d.top-k.top+O.top,bottom:k.bottom-d.bottom+O.bottom,left:d.left-k.left+O.left,right:k.right-d.right+O.right},D=t.modifiersData.offset;if(h===be&&D){var T=D[o];Object.keys(A).forEach(function(R){var B=[V,F].indexOf(R)>=0?1:-1,Y=[H,F].indexOf(R)>=0?"y":"x";A[R]+=T[Y]*B})}return A}var lt={placement:"bottom",modifiers:[],strategy:"absolute"};function ut(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function vr(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,n=r===void 0?[]:r,o=e.defaultOptions,a=o===void 0?lt:o;return function(i,s,u){u===void 0&&(u=a);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},lt,a),modifiersData:{},elements:{reference:i,popper:s},attributes:{},styles:{}},w=[],h=!1,l={state:f,setOptions:function(O){var P=typeof O=="function"?O(f.options):O;m(),f.options=Object.assign({},a,f.options,P),f.scrollParents={reference:ae(i)?Ee(i):i.contextElement?Ee(i.contextElement):[],popper:Ee(s)};var E=ir(sr([].concat(n,f.options.modifiers)));return f.orderedModifiers=E.filter(function(v){return v.enabled}),y(),l.update()},forceUpdate:function(){if(!h){var O=f.elements,P=O.reference,E=O.popper;if(!!ut(P,E)){f.rects={reference:qt(P,ke(E),f.options.strategy==="fixed"),popper:Ke(E)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(A){return f.modifiersData[A.name]=Object.assign({},A.data)});for(var v=0;v<f.orderedModifiers.length;v++){if(f.reset===!0){f.reset=!1,v=-1;continue}var d=f.orderedModifiers[v],g=d.fn,x=d.options,C=x===void 0?{}:x,k=d.name;typeof g=="function"&&(f=g({state:f,options:C,name:k,instance:l})||f)}}}},update:ar(function(){return new Promise(function(b){l.forceUpdate(),b(f)})}),destroy:function(){m(),h=!0}};if(!ut(i,s))return l;l.setOptions(u).then(function(b){!h&&u.onFirstUpdate&&u.onFirstUpdate(b)});function y(){f.orderedModifiers.forEach(function(b){var O=b.name,P=b.options,E=P===void 0?{}:P,v=b.effect;if(typeof v=="function"){var d=v({state:f,name:O,instance:l,options:E}),g=function(){};w.push(d||g)}})}function m(){w.forEach(function(b){return b()}),w=[]}return l}}var Be={passive:!0};function dr(t){var e=t.state,r=t.instance,n=t.options,o=n.scroll,a=o===void 0?!0:o,c=n.resize,i=c===void 0?!0:c,s=I(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return a&&u.forEach(function(f){f.addEventListener("scroll",r.update,Be)}),i&&s.addEventListener("resize",r.update,Be),function(){a&&u.forEach(function(f){f.removeEventListener("scroll",r.update,Be)}),i&&s.removeEventListener("resize",r.update,Be)}}const mr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:dr,data:{}};function hr(t){var e=t.state,r=t.name;e.modifiersData[r]=Et({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const gr={name:"popperOffsets",enabled:!0,phase:"read",fn:hr,data:{}};var yr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function br(t){var e=t.x,r=t.y,n=window,o=n.devicePixelRatio||1;return{x:le(e*o)/o||0,y:le(r*o)/o||0}}function pt(t){var e,r=t.popper,n=t.popperRect,o=t.placement,a=t.variation,c=t.offsets,i=t.position,s=t.gpuAcceleration,u=t.adaptive,f=t.roundOffsets,w=t.isFixed,h=c.x,l=h===void 0?0:h,y=c.y,m=y===void 0?0:y,b=typeof f=="function"?f({x:l,y:m}):{x:l,y:m};l=b.x,m=b.y;var O=c.hasOwnProperty("x"),P=c.hasOwnProperty("y"),E=M,v=H,d=window;if(u){var g=ke(r),x="clientHeight",C="clientWidth";if(g===I(r)&&(g=$(r),K(g).position!=="static"&&i==="absolute"&&(x="scrollHeight",C="scrollWidth")),g=g,o===H||(o===M||o===V)&&a===Pe){v=F;var k=w&&g===d&&d.visualViewport?d.visualViewport.height:g[x];m-=k-n.height,m*=s?1:-1}if(o===M||(o===H||o===F)&&a===Pe){E=V;var A=w&&g===d&&d.visualViewport?d.visualViewport.width:g[C];l-=A-n.width,l*=s?1:-1}}var D=Object.assign({position:i},u&&yr),T=f===!0?br({x:l,y:m}):{x:l,y:m};if(l=T.x,m=T.y,s){var R;return Object.assign({},D,(R={},R[v]=P?"0":"",R[E]=O?"0":"",R.transform=(d.devicePixelRatio||1)<=1?"translate("+l+"px, "+m+"px)":"translate3d("+l+"px, "+m+"px, 0)",R))}return Object.assign({},D,(e={},e[v]=P?m+"px":"",e[E]=O?l+"px":"",e.transform="",e))}function wr(t){var e=t.state,r=t.options,n=r.gpuAcceleration,o=n===void 0?!0:n,a=r.adaptive,c=a===void 0?!0:a,i=r.roundOffsets,s=i===void 0?!0:i,u={placement:U(e.placement),variation:ve(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:o,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,pt(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:c,roundOffsets:s})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,pt(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Or={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:wr,data:{}};function xr(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var n=e.styles[r]||{},o=e.attributes[r]||{},a=e.elements[r];!W(a)||!X(a)||(Object.assign(a.style,n),Object.keys(o).forEach(function(c){var i=o[c];i===!1?a.removeAttribute(c):a.setAttribute(c,i===!0?"":i)}))})}function Er(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(n){var o=e.elements[n],a=e.attributes[n]||{},c=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:r[n]),i=c.reduce(function(s,u){return s[u]="",s},{});!W(o)||!X(o)||(Object.assign(o.style,i),Object.keys(a).forEach(function(s){o.removeAttribute(s)}))})}}const Ar={name:"applyStyles",enabled:!0,phase:"write",fn:xr,effect:Er,requires:["computeStyles"]};function Pr(t,e,r){var n=U(t),o=[M,H].indexOf(n)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,c=a[0],i=a[1];return c=c||0,i=(i||0)*o,[M,V].indexOf(n)>=0?{x:i,y:c}:{x:c,y:i}}function Cr(t){var e=t.state,r=t.options,n=t.name,o=r.offset,a=o===void 0?[0,0]:o,c=Ot.reduce(function(f,w){return f[w]=Pr(w,e.rects,a),f},{}),i=c[e.placement],s=i.x,u=i.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=s,e.modifiersData.popperOffsets.y+=u),e.modifiersData[n]=c}const kr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Cr};var Dr={left:"right",right:"left",bottom:"top",top:"bottom"};function Le(t){return t.replace(/left|right|bottom|top/g,function(e){return Dr[e]})}var Tr={start:"end",end:"start"};function vt(t){return t.replace(/start|end/g,function(e){return Tr[e]})}function Rr(t,e){e===void 0&&(e={});var r=e,n=r.placement,o=r.boundary,a=r.rootBoundary,c=r.padding,i=r.flipVariations,s=r.allowedAutoPlacements,u=s===void 0?Ot:s,f=ve(n),w=f?i?ft:ft.filter(function(y){return ve(y)===f}):De,h=w.filter(function(y){return u.indexOf(y)>=0});h.length===0&&(h=w);var l=h.reduce(function(y,m){return y[m]=Ce(t,{placement:m,boundary:o,rootBoundary:a,padding:c})[U(m)],y},{});return Object.keys(l).sort(function(y,m){return l[y]-l[m]})}function Br(t){if(U(t)===Je)return[];var e=Le(t);return[vt(t),e,vt(e)]}function jr(t){var e=t.state,r=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var o=r.mainAxis,a=o===void 0?!0:o,c=r.altAxis,i=c===void 0?!0:c,s=r.fallbackPlacements,u=r.padding,f=r.boundary,w=r.rootBoundary,h=r.altBoundary,l=r.flipVariations,y=l===void 0?!0:l,m=r.allowedAutoPlacements,b=e.options.placement,O=U(b),P=O===b,E=s||(P||!y?[Le(b)]:Br(b)),v=[b].concat(E).reduce(function(N,_){return N.concat(U(_)===Je?Rr(e,{placement:_,boundary:f,rootBoundary:w,padding:u,flipVariations:y,allowedAutoPlacements:m}):_)},[]),d=e.rects.reference,g=e.rects.popper,x=new Map,C=!0,k=v[0],A=0;A<v.length;A++){var D=v[A],T=U(D),R=ve(D)===pe,B=[H,F].indexOf(T)>=0,Y=B?"width":"height",j=Ce(e,{placement:D,boundary:f,rootBoundary:w,altBoundary:h,padding:u}),L=B?R?V:M:R?F:H;d[Y]>g[Y]&&(L=Le(L));var S=Le(L),q=[];if(a&&q.push(j[T]<=0),i&&q.push(j[L]<=0,j[S]<=0),q.every(function(N){return N})){k=D,C=!1;break}x.set(D,q)}if(C)for(var se=y?3:1,fe=function(_){var re=v.find(function(ne){var G=x.get(ne);if(G)return G.slice(0,_).every(function(de){return de})});if(re)return k=re,"break"},ee=se;ee>0;ee--){var te=fe(ee);if(te==="break")break}e.placement!==k&&(e.modifiersData[n]._skip=!0,e.placement=k,e.reset=!0)}}const Lr={name:"flip",enabled:!0,phase:"main",fn:jr,requiresIfExists:["offset"],data:{_skip:!1}};function Sr(t){return t==="x"?"y":"x"}function Ae(t,e,r){return ie(t,Se(e,r))}function Hr(t,e,r){var n=Ae(t,e,r);return n>r?r:n}function Mr(t){var e=t.state,r=t.options,n=t.name,o=r.mainAxis,a=o===void 0?!0:o,c=r.altAxis,i=c===void 0?!1:c,s=r.boundary,u=r.rootBoundary,f=r.altBoundary,w=r.padding,h=r.tether,l=h===void 0?!0:h,y=r.tetherOffset,m=y===void 0?0:y,b=Ce(e,{boundary:s,rootBoundary:u,padding:w,altBoundary:f}),O=U(e.placement),P=ve(e.placement),E=!P,v=Qe(O),d=Sr(v),g=e.modifiersData.popperOffsets,x=e.rects.reference,C=e.rects.popper,k=typeof m=="function"?m(Object.assign({},e.rects,{placement:e.placement})):m,A=typeof k=="number"?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),D=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,T={x:0,y:0};if(!!g){if(a){var R,B=v==="y"?H:M,Y=v==="y"?F:V,j=v==="y"?"height":"width",L=g[v],S=L+b[B],q=L-b[Y],se=l?-C[j]/2:0,fe=P===pe?x[j]:C[j],ee=P===pe?-C[j]:-x[j],te=e.elements.arrow,N=l&&te?Ke(te):{width:0,height:0},_=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:At(),re=_[B],ne=_[Y],G=Ae(0,x[j],N[j]),de=E?x[j]/2-se-G-re-A.mainAxis:fe-G-re-A.mainAxis,Te=E?-x[j]/2+se+G+ne+A.mainAxis:ee+G+ne+A.mainAxis,me=e.elements.arrow&&ke(e.elements.arrow),Me=me?v==="y"?me.clientTop||0:me.clientLeft||0:0,he=(R=D==null?void 0:D[v])!=null?R:0,_e=L+de-he-Me,We=L+Te-he,ge=Ae(l?Se(S,_e):S,L,l?ie(q,We):q);g[v]=ge,T[v]=ge-L}if(i){var Re,Fe=v==="x"?H:M,Ve=v==="x"?F:V,z=g[d],ce=d==="y"?"height":"width",p=z+b[Fe],oe=z-b[Ve],J=[H,M].indexOf(O)!==-1,Ze=(Re=D==null?void 0:D[d])!=null?Re:0,$e=J?p:z-x[ce]-C[ce]-Ze+A.altAxis,et=J?z+x[ce]+C[ce]-Ze-A.altAxis:oe,tt=l&&J?Hr($e,z,et):Ae(l?$e:p,z,l?et:oe);g[d]=tt,T[d]=tt-z}e.modifiersData[n]=T}}const _r={name:"preventOverflow",enabled:!0,phase:"main",fn:Mr,requiresIfExists:["offset"]};var Wr=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,Pt(typeof e!="number"?e:Ct(e,De))};function Fr(t){var e,r=t.state,n=t.name,o=t.options,a=r.elements.arrow,c=r.modifiersData.popperOffsets,i=U(r.placement),s=Qe(i),u=[M,V].indexOf(i)>=0,f=u?"height":"width";if(!(!a||!c)){var w=Wr(o.padding,r),h=Ke(a),l=s==="y"?H:M,y=s==="y"?F:V,m=r.rects.reference[f]+r.rects.reference[s]-c[s]-r.rects.popper[f],b=c[s]-r.rects.reference[s],O=ke(a),P=O?s==="y"?O.clientHeight||0:O.clientWidth||0:0,E=m/2-b/2,v=w[l],d=P-h[f]-w[y],g=P/2-h[f]/2+E,x=Ae(v,g,d),C=s;r.modifiersData[n]=(e={},e[C]=x,e.centerOffset=x-g,e)}}function Vr(t){var e=t.state,r=t.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=e.elements.popper.querySelector(o),!o)||!xt(e.elements.popper,o)||(e.elements.arrow=o))}const Ir={name:"arrow",enabled:!0,phase:"main",fn:Fr,effect:Vr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function dt(t,e,r){return r===void 0&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}function mt(t){return[H,V,F,M].some(function(e){return t[e]>=0})}function Nr(t){var e=t.state,r=t.name,n=e.rects.reference,o=e.rects.popper,a=e.modifiersData.preventOverflow,c=Ce(e,{elementContext:"reference"}),i=Ce(e,{altBoundary:!0}),s=dt(c,n),u=dt(i,o,a),f=mt(s),w=mt(u);e.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:u,isReferenceHidden:f,hasPopperEscaped:w},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":w})}const qr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Nr};var zr=[mr,gr,Or,Ar,kr,Lr,_r,Ir,qr],Ur=vr({defaultModifiers:zr});function ht(t){let e,r,n=t[3].has("hover")&&t[0]>0,o,a,c,i,s,u,f=n&&gt(t);const w=t[27].default,h=St(w,t,t[26],null);return{c(){e=we("div"),r=we("div"),f&&f.c(),o=nt(),a=we("div"),c=nt(),i=we("div"),h&&h.c(),this.h()},l(l){e=Oe(l,"DIV",{class:!0});var y=xe(e);r=Oe(y,"DIV",{class:!0,role:!0});var m=xe(r);f&&f.l(m),o=ot(m),a=Oe(m,"DIV",{class:!0});var b=xe(a);b.forEach(Q),c=ot(m),i=Oe(m,"DIV",{class:!0});var O=xe(i);h&&h.l(O),O.forEach(Q),m.forEach(Q),y.forEach(Q),this.h()},h(){Z(a,"class","popover-arrow"),Z(i,"class","popover-body"),Z(r,"class","popover show bs-popover-bottom"),Z(r,"role","tooltip"),Z(e,"class","pm-popover svelte-gyrm8z")},m(l,y){ze(l,e,y),ye(e,r),f&&f.m(r,null),ye(r,o),ye(r,a),ye(r,c),ye(r,i),h&&h.m(i,null),t[28](e),u=!0},p(l,y){y[0]&9&&(n=l[3].has("hover")&&l[0]>0),n?f?f.p(l,y):(f=gt(l),f.c(),f.m(r,o)):f&&(f.d(1),f=null),h&&h.p&&(!u||y[0]&67108864)&&Ht(h,w,l,l[26],u?_t(w,l[26],y,null):Mt(l[26]),null)},i(l){u||(je(h,l),Wt(()=>{s||(s=it(r,at,{duration:250},!0)),s.run(1)}),u=!0)},o(l){Ie(h,l),s||(s=it(r,at,{duration:250},!1)),s.run(0),u=!1},d(l){l&&Q(e),f&&f.d(),h&&h.d(l),l&&s&&s.end(),t[28](null)}}}function gt(t){let e,r;return{c(){e=we("div"),this.h()},l(n){e=Oe(n,"DIV",{class:!0,style:!0}),xe(e).forEach(Q),this.h()},h(){Z(e,"class","popover-hover-bridge svelte-gyrm8z"),Z(e,"style",r=`--popover-space-away: ${t[0]}px;`)},m(n,o){ze(n,e,o)},p(n,o){o[0]&1&&r!==(r=`--popover-space-away: ${n[0]}px;`)&&Z(e,"style",r)},d(n){n&&Q(e)}}}function Xr(t){let e,r,n=t[2]&&ht(t);return{c(){n&&n.c(),e=rt()},l(o){n&&n.l(o),e=rt()},m(o,a){n&&n.m(o,a),ze(o,e,a),r=!0},p(o,a){o[2]?n?(n.p(o,a),a[0]&4&&je(n,1)):(n=ht(o),n.c(),je(n,1),n.m(e.parentNode,e)):n&&(Rt(),Ie(n,1,1,()=>{n=null}),Bt())},i(o){r||(je(n),r=!0)},o(o){Ie(n),r=!1},d(o){n&&n.d(o),o&&Q(e)}}}function Yr(t,e,r){let n,{$$slots:o={},$$scope:a}=e,{isOpen:c=void 0}=e,{referenceElement:i}=e,{triggerEvents:s=[]}=e,{remainOpenOnPopoverHover:u=!0}=e,{remainOpenOnPopoverFocus:f=!0}=e,{closeOnEscape:w=!1}=e,{closeOnClickAway:h=!1}=e,{ignoreClickWhileOpeningBuffer:l=300}=e,{handleContextMenuForHover:y=!1}=e,{closeDelay:m=50}=e,{placement:b="bottom"}=e,{spaceAway:O=0}=e,{spaceAlong:P=0}=e,{popperOptions:E={}}=e,{popperInstance:v=void 0}=e,d,g=!1,x=!1,C=!1,k=!1,A=!1,D=!1,T=!1,R=[],B=new Set;const Y=jt();let j,L=!1;function S(p,oe,J){p.addEventListener(oe,J),R.push({element:p,event:oe,fn:J})}function q(){v==null||v.destroy(),r(4,v=null)}function se(){r(4,v=Ur(i,d,n()))}function fe(p){p.key==="Escape"&&N()}function ee(){!(i!=null&&i.contains(document.activeElement))&&!(d!=null&&d.contains(document.activeElement))&&N()}function te(p){!(i!=null&&i.contains(p.target))&&!(d!=null&&d.contains(p.target))&&ee()}function N(){r(19,C=!1),r(21,A=!1),r(20,k=!1),r(18,x=!1),r(18,x=!1),r(23,T=!1),r(22,D=!1)}function _(){g&&C&&N()}function re(){r(19,C=!C),(!C||L)&&N()}let ne;function G(){r(21,A=!0),clearTimeout(ne),T&&r(23,T=!1)}function de(){ne=setTimeout(()=>{r(21,A=!1),x||r(22,D=!1)},m)}let Te;function me(){r(20,k=!0),clearTimeout(Te)}function Me(){Te=setTimeout(()=>{r(20,k=!1),_()},m)}let he;function _e(){r(18,x=!0),clearTimeout(he),T&&r(23,T=!1)}function We(){he=setTimeout(()=>{r(18,x=!1),A||r(22,D=!1),_()},m)}let ge;function Re(){r(22,D=!0),clearTimeout(ge)}function Fe(){ge=setTimeout(()=>{r(22,D=!1),_()},m)}function Ve(){r(23,T=!0)}function z(){for(const{element:p,event:oe,fn:J}of R)p==null||p.removeEventListener(oe,J);R=[]}Lt(()=>{q(),z()});function ce(p){Ft[p?"unshift":"push"](()=>{d=p,r(1,d)})}return t.$$set=p=>{"isOpen"in p&&r(5,c=p.isOpen),"referenceElement"in p&&r(6,i=p.referenceElement),"triggerEvents"in p&&r(7,s=p.triggerEvents),"remainOpenOnPopoverHover"in p&&r(8,u=p.remainOpenOnPopoverHover),"remainOpenOnPopoverFocus"in p&&r(9,f=p.remainOpenOnPopoverFocus),"closeOnEscape"in p&&r(10,w=p.closeOnEscape),"closeOnClickAway"in p&&r(11,h=p.closeOnClickAway),"ignoreClickWhileOpeningBuffer"in p&&r(12,l=p.ignoreClickWhileOpeningBuffer),"handleContextMenuForHover"in p&&r(13,y=p.handleContextMenuForHover),"closeDelay"in p&&r(14,m=p.closeDelay),"placement"in p&&r(15,b=p.placement),"spaceAway"in p&&r(0,O=p.spaceAway),"spaceAlong"in p&&r(16,P=p.spaceAlong),"popperOptions"in p&&r(17,E=p.popperOptions),"popperInstance"in p&&r(4,v=p.popperInstance),"$$scope"in p&&r(26,a=p.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&33296420){const p=g;r(2,g=typeof c=="boolean"?c:x||C||k||A||D||T),p!==g&&(g?r(24,j=setTimeout(()=>L=!0,l)):(clearTimeout(j),L=!1),Y("change",{isOpen:g}))}t.$$.dirty[0]&128&&(r(3,B=new Set(s)),z()),t.$$.dirty[0]&70&&g&&d&&i&&(q(),se()),t.$$.dirty[0]&229377&&r(25,n=function(){let p=[{name:"offset",options:{offset:[P,O]}}];return E!=null&&E.modifiers&&(p=p.concat(E.modifiers)),{...E,placement:b,modifiers:p}}),t.$$.dirty[0]&33554448&&v&&v.setOptions(n()),t.$$.dirty[0]&72&&B.size>0&&i&&(B.has("click")&&S(i,"click",re),B.has("hover")&&(S(i,"mouseenter",G),S(i,"mouseleave",de)),B.has("focus")&&(S(i,"focus",me),S(i,"blur",Me))),t.$$.dirty[0]&8970&&B.size>0&&d&&(B.has("hover")&&u&&(S(d,"mouseenter",_e),S(d,"mouseleave",We),y&&S(d,"contextmenu",Ve)),B.has("focus")&&f&&(S(d,"focusin",Re),S(d,"focusout",Fe))),t.$$.dirty[0]&1028&&globalThis.document&&(g&&w?document.addEventListener("keydown",fe):document.removeEventListener("keydown",fe)),t.$$.dirty[0]&2052&&globalThis.document&&(g&&h?document.addEventListener("click",te):document.removeEventListener("click",te))},[O,d,g,B,v,c,i,s,u,f,w,h,l,y,m,b,P,E,x,C,k,A,D,T,j,n,a,o,ce]}class Qr extends kt{constructor(e){super(),Dt(this,e,Yr,Xr,Tt,{isOpen:5,referenceElement:6,triggerEvents:7,remainOpenOnPopoverHover:8,remainOpenOnPopoverFocus:9,closeOnEscape:10,closeOnClickAway:11,ignoreClickWhileOpeningBuffer:12,handleContextMenuForHover:13,closeDelay:14,placement:15,spaceAway:0,spaceAlong:16,popperOptions:17,popperInstance:4},null,[-1,-1])}}export{Qr as P};