function $(){}const W=t=>t;function bt(t,e){for(const n in e)t[n]=e[n];return t}function st(t){return t()}function it(){return Object.create(null)}function S(t){t.forEach(st)}function B(t){return typeof t=="function"}function Wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let L;function Gt(t,e){return L||(L=document.createElement("a")),L.href=e,t===L.href}function xt(t){return Object.keys(t).length===0}function $t(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Jt(t,e,n){t.$$.on_destroy.push($t(e,n))}function Kt(t,e,n,i){if(t){const r=ct(t,e,n,i);return t[0](r)}}function ct(t,e,n,i){return t[1]&&i?bt(n.ctx.slice(),t[1](i(e))):n.ctx}function Qt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(e.dirty.length,r.length);for(let a=0;a<s;a+=1)l[a]=e.dirty[a]|r[a];return l}return e.dirty|r}return e.dirty}function Ut(t,e,n,i,r,l){if(r){const s=ct(e,n,i,l);t.p(s,r)}}function Vt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Xt(t){return t&&B(t.destroy)?t.destroy:$}const lt=typeof window<"u";let G=lt?()=>window.performance.now():()=>Date.now(),Z=lt?t=>requestAnimationFrame(t):$;const C=new Set;function at(t){C.forEach(e=>{e.c(t)||(C.delete(e),e.f())}),C.size!==0&&Z(at)}function J(t){let e;return C.size===0&&Z(at),{promise:new Promise(n=>{C.add(e={c:t,f:n})}),abort(){C.delete(e)}}}let K=!1;function wt(){K=!0}function vt(){K=!1}function kt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Et(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<e.length;o++){const d=e[o];d.claim_order!==void 0&&c.push(d)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const o=e[c].claim_order,d=(r>0&&e[n[r]].claim_order<=o?r+1:kt(1,r,u=>e[n[u]].claim_order,o))-1;i[c]=n[d]+1;const _=d+1;n[_]=c,r=Math.max(_,r)}const l=[],s=[];let a=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);a>=c;a--)s.push(e[a]);a--}for(;a>=0;a--)s.push(e[a]);l.reverse(),s.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<s.length;c++){for(;o<l.length&&s[c].claim_order>=l[o].claim_order;)o++;const d=o<l.length?l[o]:null;t.insertBefore(s[c],d)}}function St(t,e){t.appendChild(e)}function ot(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ct(t){const e=ft("style");return Nt(ot(t),e),e.sheet}function Nt(t,e){return St(t.head||t,e),e.sheet}function At(t,e){if(K){for(Et(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Yt(t,e,n){K&&!n?At(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ut(t){t.parentNode.removeChild(t)}function Zt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ft(t){return document.createElement(t)}function Mt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function tt(t){return document.createTextNode(t)}function te(){return tt(" ")}function ee(){return tt("")}function ne(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ie(t){return function(e){return e.preventDefault(),t.call(this,e)}}function re(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function se(t){return t===""?null:+t}function jt(t){return Array.from(t.childNodes)}function Dt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function _t(t,e,n,i,r=!1){Dt(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const a=t[s];if(e(a)){const c=n(a);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),a}}for(let s=t.claim_info.last_index-1;s>=0;s--){const a=t[s];if(e(a)){const c=n(a);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,a}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function dt(t,e,n,i){return _t(t,r=>r.nodeName===e,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const a=r.attributes[s];n[a.name]||l.push(a.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(e))}function ce(t,e,n){return dt(t,e,n,ft)}function le(t,e,n){return dt(t,e,n,Mt)}function Rt(t,e){return _t(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>tt(e),!0)}function ae(t){return Rt(t," ")}function oe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ue(t,e){t.value=e==null?"":e}function fe(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function _e(t,e,n){t.classList[n?"add":"remove"](e)}function ht(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function de(t,e=document.body){return Array.from(e.querySelectorAll(t))}const H=new Map;let I=0;function qt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Bt(t,e){const n={stylesheet:Ct(e),rules:{}};return H.set(t,n),n}function D(t,e,n,i,r,l,s,a=0){const c=16.666/i;let o=`{
`;for(let m=0;m<=1;m+=c){const g=e+(n-e)*l(m);o+=m*100+`%{${s(g,1-g)}}
`}const d=o+`100% {${s(n,1-n)}}
}`,_=`__svelte_${qt(d)}_${a}`,u=ot(t),{stylesheet:f,rules:h}=H.get(u)||Bt(u,t);h[_]||(h[_]=!0,f.insertRule(`@keyframes ${_} ${d}`,f.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${_} ${i}ms linear ${r}ms 1 both`,I+=1,_}function R(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),I-=r,I||Pt())}function Pt(){Z(()=>{I||(H.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&ut(e)}),H.clear())})}function he(t,e,n,i){if(!e)return $;const r=t.getBoundingClientRect();if(e.left===r.left&&e.right===r.right&&e.top===r.top&&e.bottom===r.bottom)return $;const{delay:l=0,duration:s=300,easing:a=W,start:c=G()+l,end:o=c+s,tick:d=$,css:_}=n(t,{from:e,to:r},i);let u=!0,f=!1,h;function p(){_&&(h=D(t,0,1,s,l,a,_)),l||(f=!0)}function m(){_&&R(t,h),u=!1}return J(g=>{if(!f&&g>=c&&(f=!0),f&&g>=o&&(d(1,0),m()),!u)return!1;if(f){const b=g-c,x=0+1*a(b/s);d(x,1-x)}return!0}),p(),d(0,1),m}function me(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,r=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,Ot(t,r)}}function Ot(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),r=i.transform==="none"?"":i.transform;t.style.transform=`${r} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let q;function j(t){q=t}function Q(){if(!q)throw new Error("Function called outside component initialization");return q}function pe(t){Q().$$.on_mount.push(t)}function ye(t){Q().$$.after_update.push(t)}function ge(t){Q().$$.on_destroy.push(t)}function be(){const t=Q();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const l=ht(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,l)}),!l.defaultPrevented}return!0}}function xe(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const M=[],rt=[],z=[],X=[],mt=Promise.resolve();let Y=!1;function pt(){Y||(Y=!0,mt.then(yt))}function $e(){return pt(),mt}function N(t){z.push(t)}function we(t){X.push(t)}const V=new Set;let T=0;function yt(){const t=q;do{for(;T<M.length;){const e=M[T];T++,j(e),Lt(e.$$)}for(j(null),M.length=0,T=0;rt.length;)rt.pop()();for(let e=0;e<z.length;e+=1){const n=z[e];V.has(n)||(V.add(n),n())}z.length=0}while(M.length);for(;X.length;)X.pop()();Y=!1,V.clear(),j(t)}function Lt(t){if(t.fragment!==null){t.update(),S(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}let A;function et(){return A||(A=Promise.resolve(),A.then(()=>{A=null})),A}function E(t,e,n){t.dispatchEvent(ht(`${e?"intro":"outro"}${n}`))}const F=new Set;let k;function ve(){k={r:0,c:[],p:k}}function ke(){k.r||S(k.c),k=k.p}function gt(t,e){t&&t.i&&(F.delete(t),t.i(e))}function Tt(t,e,n,i){if(t&&t.o){if(F.has(t))return;F.add(t),k.c.push(()=>{F.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const nt={duration:0};function Ee(t,e,n){let i=e(t,n),r=!1,l,s,a=0;function c(){l&&R(t,l)}function o(){const{delay:_=0,duration:u=300,easing:f=W,tick:h=$,css:p}=i||nt;p&&(l=D(t,0,1,u,_,f,p,a++)),h(0,1);const m=G()+_,g=m+u;s&&s.abort(),r=!0,N(()=>E(t,!0,"start")),s=J(b=>{if(r){if(b>=g)return h(1,0),E(t,!0,"end"),c(),r=!1;if(b>=m){const x=f((b-m)/u);h(x,1-x)}}return r})}let d=!1;return{start(){d||(d=!0,R(t),B(i)?(i=i(),et().then(o)):o())},invalidate(){d=!1},end(){r&&(c(),r=!1)}}}function Se(t,e,n){let i=e(t,n),r=!0,l;const s=k;s.r+=1;function a(){const{delay:c=0,duration:o=300,easing:d=W,tick:_=$,css:u}=i||nt;u&&(l=D(t,1,0,o,c,d,u));const f=G()+c,h=f+o;N(()=>E(t,!1,"start")),J(p=>{if(r){if(p>=h)return _(0,1),E(t,!1,"end"),--s.r||S(s.c),!1;if(p>=f){const m=d((p-f)/o);_(1-m,m)}}return r})}return B(i)?et().then(()=>{i=i(),a()}):a(),{end(c){c&&i.tick&&i.tick(1,0),r&&(l&&R(t,l),r=!1)}}}function Ce(t,e,n,i){let r=e(t,n),l=i?0:1,s=null,a=null,c=null;function o(){c&&R(t,c)}function d(u,f){const h=u.b-l;return f*=Math.abs(h),{a:l,b:u.b,d:h,duration:f,start:u.start,end:u.start+f,group:u.group}}function _(u){const{delay:f=0,duration:h=300,easing:p=W,tick:m=$,css:g}=r||nt,b={start:G()+f,b:u};u||(b.group=k,k.r+=1),s||a?a=b:(g&&(o(),c=D(t,l,u,h,f,p,g)),u&&m(0,1),s=d(b,h),N(()=>E(t,u,"start")),J(x=>{if(a&&x>a.start&&(s=d(a,h),a=null,E(t,s.b,"start"),g&&(o(),c=D(t,l,s.b,s.duration,0,p,r.css))),s){if(x>=s.end)m(l=s.b,1-l),E(t,s.b,"end"),a||(s.b?o():--s.group.r||S(s.group.c)),s=null;else if(x>=s.start){const P=x-s.start;l=s.a+s.d*p(P/s.duration),m(l,1-l)}}return!!(s||a)}))}return{run(u){B(r)?et().then(()=>{r=r(),_(u)}):_(u)},end(){o(),s=a=null}}}function zt(t,e){Tt(t,1,1,()=>{e.delete(t.key)})}function Ne(t,e){t.f(),zt(t,e)}function Ae(t,e,n,i,r,l,s,a,c,o,d,_){let u=t.length,f=l.length,h=u;const p={};for(;h--;)p[t[h].key]=h;const m=[],g=new Map,b=new Map;for(h=f;h--;){const y=_(r,l,h),w=n(y);let v=s.get(w);v?i&&v.p(y,e):(v=o(w,y),v.c()),g.set(w,m[h]=v),w in p&&b.set(w,Math.abs(h-p[w]))}const x=new Set,P=new Set;function U(y){gt(y,1),y.m(a,d),s.set(y.key,y),d=y.first,f--}for(;u&&f;){const y=m[f-1],w=t[u-1],v=y.key,O=w.key;y===w?(d=y.first,u--,f--):g.has(O)?!s.has(v)||x.has(v)?U(y):P.has(O)?u--:b.get(v)>b.get(O)?(P.add(v),U(y)):(x.add(O),u--):(c(w,s),u--)}for(;u--;){const y=t[u];g.has(y.key)||c(y,s)}for(;f;)U(m[f-1]);return m}function Me(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function je(t){t&&t.c()}function De(t,e){t&&t.l(e)}function Ft(t,e,n,i){const{fragment:r,on_mount:l,on_destroy:s,after_update:a}=t.$$;r&&r.m(e,n),i||N(()=>{const c=l.map(st).filter(B);s?s.push(...c):S(c),t.$$.on_mount=[]}),a.forEach(N)}function Ht(t,e){const n=t.$$;n.fragment!==null&&(S(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function It(t,e){t.$$.dirty[0]===-1&&(M.push(t),pt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Re(t,e,n,i,r,l,s,a=[-1]){const c=q;j(t);const o=t.$$={fragment:null,ctx:null,props:l,update:$,not_equal:r,bound:it(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:it(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};s&&s(o.root);let d=!1;if(o.ctx=n?n(t,e.props||{},(_,u,...f)=>{const h=f.length?f[0]:u;return o.ctx&&r(o.ctx[_],o.ctx[_]=h)&&(!o.skip_bound&&o.bound[_]&&o.bound[_](h),d&&It(t,_)),u}):[],o.update(),d=!0,S(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){wt();const _=jt(e.target);o.fragment&&o.fragment.l(_),_.forEach(ut)}else o.fragment&&o.fragment.c();e.intro&&gt(t.$$.fragment),Ft(t,e.target,e.anchor,e.customElement),vt(),yt()}j(c)}class qe{$destroy(){Ht(this,1),this.$destroy=$}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!xt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Me as $,$ as A,Jt as B,be as C,At as D,ne as E,N as F,Mt as G,le as H,Gt as I,_e as J,Ce as K,S as L,Kt as M,Ut as N,Vt as O,Qt as P,bt as Q,B as R,qe as S,W as T,de as U,rt as V,ge as W,Xt as X,ue as Y,se as Z,Zt as _,te as a,we as a0,Ae as a1,Ne as a2,me as a3,Ot as a4,he as a5,Ee as a6,Se as a7,ie as a8,xe as a9,zt as aa,Yt as b,ae as c,ke as d,ee as e,gt as f,ve as g,ut as h,Re as i,ye as j,ft as k,ce as l,jt as m,re as n,pe as o,fe as p,tt as q,Rt as r,Wt as s,Tt as t,oe as u,je as v,De as w,Ft as x,Ht as y,$e as z};
