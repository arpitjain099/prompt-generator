import{S as fe,i as ue,s as ce,a as S,k as w,c as P,l as v,m as k,h,n as a,J as W,b as A,D as m,g as ve,t as V,d as ke,f as R,E as D,a8 as q,A as J,Z as ut,Y as Z,I as je,L as Ue,q as N,r as B,v as pe,e as z,w as de,x as he,y as me,u as ye,V as Q,$ as ae,a0 as ne,F as pt,K as xe,p as dt,M as ht,N as mt,O as _t,P as bt,a9 as gt}from"./index-2e06e8b9.js";import{P as $e}from"./constants-80ada001.js";import{S as wt}from"./scale-38bb9777.js";import{P as vt}from"./Popover-628e72e9.js";import{f as et}from"./index-2af9d510.js";import{w as kt}from"./singletons-81a9e444.js";function yt(o){let e,t,l,i,r,s;return{c(){e=w("div"),t=w("textarea"),this.h()},l(f){e=v(f,"DIV",{class:!0});var u=k(e);t=v(u,"TEXTAREA",{rows:!0,name:!0,type:!0,class:!0,id:!0,title:!0,placeholder:!0}),k(t).forEach(h),u.forEach(h),this.h()},h(){a(t,"rows","4"),a(t,"name",l=o[7]+"-prompt"),a(t,"type","text"),a(t,"class","form-control w-100"),a(t,"id",i=o[7]+"-prompt"),a(t,"title",o[10]),a(t,"placeholder",o[1]),a(e,"class","card-body")},m(f,u){A(f,e,u),m(e,t),Z(t,o[0].prompt),r||(s=D(t,"input",o[15]),r=!0)},p(f,u){u&128&&l!==(l=f[7]+"-prompt")&&a(t,"name",l),u&128&&i!==(i=f[7]+"-prompt")&&a(t,"id",i),u&2&&a(t,"placeholder",f[1]),u&1&&Z(t,f[0].prompt)},d(f){f&&h(e),r=!1,s()}}}function Et(o){let e,t,l,i,r,s,f,u,b,n;return{c(){e=w("div"),t=w("label"),l=w("p"),r=S(),s=w("textarea"),this.h()},l(p){e=v(p,"DIV",{class:!0});var d=k(e);t=v(d,"LABEL",{for:!0,class:!0});var E=k(t);l=v(E,"P",{class:!0});var T=k(l);T.forEach(h),E.forEach(h),r=P(d),s=v(d,"TEXTAREA",{rows:!0,name:!0,type:!0,pattern:!0,class:!0,id:!0,title:!0,placeholder:!0}),k(s).forEach(h),d.forEach(h),this.h()},h(){a(l,"class","card-title"),a(t,"for",i=o[7]+"-prompt"),a(t,"class","form-label"),a(s,"rows","3"),a(s,"name",f=o[7]+"-prompt"),a(s,"type","url"),a(s,"pattern","https://.*"),a(s,"class","form-control w-100"),a(s,"id",u=o[7]+"-prompt"),a(s,"title",o[10]),a(s,"placeholder",o[1]),a(e,"class","card-body imagepath")},m(p,d){A(p,e,d),m(e,t),m(t,l),l.innerHTML=o[9],m(e,r),m(e,s),Z(s,o[0].prompt),b||(n=D(s,"input",o[14]),b=!0)},p(p,d){d&128&&i!==(i=p[7]+"-prompt")&&a(t,"for",i),d&128&&f!==(f=p[7]+"-prompt")&&a(s,"name",f),d&128&&u!==(u=p[7]+"-prompt")&&a(s,"id",u),d&2&&a(s,"placeholder",p[1]),d&1&&Z(s,p[0].prompt)},d(p){p&&h(e),b=!1,n()}}}function Tt(o){let e,t,l,i,r,s,f,u,b;return{c(){e=w("div"),t=w("img"),r=S(),s=w("div"),f=w("p"),this.h()},l(n){e=v(n,"DIV",{class:!0});var p=k(e);t=v(p,"IMG",{loading:!0,src:!0,alt:!0}),p.forEach(h),r=P(n),s=v(n,"DIV",{class:!0});var d=k(s);f=v(d,"P",{class:!0});var E=k(f);E.forEach(h),d.forEach(h),this.h()},h(){a(t,"loading","lazy"),je(t.src,l=$e+o[6]+o[8]+".webp")||a(t,"src",l),a(t,"alt",i="created with prompt: "+o[0].prompt),a(e,"class","card-img-top"),a(f,"class","card-title"),a(s,"class","card-body")},m(n,p){A(n,e,p),m(e,t),A(n,r,p),A(n,s,p),m(s,f),f.innerHTML=o[9],u||(b=[D(e,"click",o[12]),D(s,"click",o[12])],u=!0)},p(n,p){p&64&&!je(t.src,l=$e+n[6]+n[8]+".webp")&&a(t,"src",l),p&1&&i!==(i="created with prompt: "+n[0].prompt)&&a(t,"alt",i)},d(n){n&&h(e),n&&h(r),n&&h(s),u=!1,Ue(b)}}}function It(o){let e,t,l;return{c(){e=w("p"),t=N("delete this prompt part "),l=w("i"),this.h()},l(i){e=v(i,"P",{class:!0});var r=k(e);t=B(r,"delete this prompt part "),l=v(r,"I",{class:!0}),k(l).forEach(h),r.forEach(h),this.h()},h(){a(l,"class","fa-solid fa-arrow-right-long me-2"),a(e,"class","text-muted pb-1")},m(i,r){A(i,e,r),m(e,t),m(e,l)},p:J,i:J,o:J,d(i){i&&h(e)}}}function Ct(o){let e,t,l,i,r,s,f,u,b,n=!o[0].weighted&&o[0].tid===0&&tt();l=new wt({});let p=o[0].weighted&&lt(o);return{c(){n&&n.c(),e=S(),t=w("button"),pe(l.$$.fragment),r=S(),p&&p.c(),s=z(),this.h()},l(d){n&&n.l(d),e=P(d),t=v(d,"BUTTON",{class:!0,title:!0});var E=k(t);de(l.$$.fragment,E),E.forEach(h),r=P(d),p&&p.l(d),s=z(),this.h()},h(){a(t,"class","btn input-group-text weight-btn"),a(t,"title",i=(o[0].weighted?"Hide":"Show")+" weight setting (::)")},m(d,E){n&&n.m(d,E),A(d,e,E),A(d,t,E),he(l,t,null),A(d,r,E),p&&p.m(d,E),A(d,s,E),f=!0,u||(b=D(t,"click",q(o[11])),u=!0)},p(d,E){!d[0].weighted&&d[0].tid===0?n||(n=tt(),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null),(!f||E&1&&i!==(i=(d[0].weighted?"Hide":"Show")+" weight setting (::)"))&&a(t,"title",i),d[0].weighted?p?p.p(d,E):(p=lt(d),p.c(),p.m(s.parentNode,s)):p&&(p.d(1),p=null)},i(d){f||(R(l.$$.fragment,d),f=!0)},o(d){V(l.$$.fragment,d),f=!1},d(d){n&&n.d(d),d&&h(e),d&&h(t),me(l),d&&h(r),p&&p.d(d),d&&h(s),u=!1,b()}}}function tt(o){let e,t,l;return{c(){e=w("p"),t=N("add weight or hard break "),l=w("i"),this.h()},l(i){e=v(i,"P",{class:!0});var r=k(e);t=B(r,"add weight or hard break "),l=v(r,"I",{class:!0}),k(l).forEach(h),r.forEach(h),this.h()},h(){a(l,"class","fa-solid fa-arrow-right-long me-2"),a(e,"class","text-muted")},m(i,r){A(i,e,r),m(e,t),m(e,l)},d(i){i&&h(e)}}}function lt(o){let e,t,l,i;return{c(){e=w("input"),this.h()},l(r){e=v(r,"INPUT",{title:!0,name:!0,type:!0,min:!0,max:!0,step:!0,placeholder:!0,class:!0}),this.h()},h(){a(e,"title","set the weight of this detail"),a(e,"name",t=o[7]+"-weight"),a(e,"type","number"),a(e,"min","-100"),a(e,"max","100"),a(e,"step","0.1"),a(e,"placeholder","1"),a(e,"class","form-control")},m(r,s){A(r,e,s),Z(e,o[0].weight),l||(i=D(e,"input",o[16]),l=!0)},p(r,s){s&128&&t!==(t=r[7]+"-weight")&&a(e,"name",t),s&1&&ut(e.value)!==r[0].weight&&Z(e,r[0].weight)},d(r){r&&h(e),l=!1,i()}}}function rt(o){let e,t,l,i;return{c(){e=w("button"),t=w("i"),this.h()},l(r){e=v(r,"BUTTON",{class:!0,title:!0});var s=k(e);t=v(s,"I",{class:!0}),k(t).forEach(h),s.forEach(h),this.h()},h(){a(t,"class","fa-solid fa-circle-plus"),a(e,"class","btn input-group-text"),a(e,"title","Add this part!")},m(r,s){A(r,e,s),m(e,t),l||(i=D(e,"click",q(o[12])),l=!0)},p:J,d(r){r&&h(e),l=!1,i()}}}function it(o){let e,t,l,i;return{c(){e=w("button"),t=w("i"),this.h()},l(r){e=v(r,"BUTTON",{class:!0,title:!0});var s=k(e);t=v(s,"I",{class:!0}),k(t).forEach(h),s.forEach(h),this.h()},h(){a(t,"class","fa-solid fa-trash mb-1 mt-1"),a(e,"class","btn input-group-text delete-btn"),a(e,"title","Delete this part!"),W(e,"roundleftop",o[0].tid===0&&!o[5])},m(r,s){A(r,e,s),m(e,t),l||(i=D(e,"click",q(o[13])),l=!0)},p(r,s){s&33&&W(e,"roundleftop",r[0].tid===0&&!r[5])},d(r){r&&h(e),l=!1,i()}}}function At(o){let e,t,l,i,r,s,f,u;function b(g,c){return g[8]?Tt:g[4]?Et:yt}let n=b(o),p=n(o);const d=[Ct,It],E=[];function T(g,c){return g[5]?0:g[0].tid===0?1:-1}~(i=T(o))&&(r=E[i]=d[i](o));let y=o[3]&&rt(o),_=o[2]&&it(o);return{c(){p.c(),e=S(),t=w("div"),l=w("div"),r&&r.c(),s=S(),y&&y.c(),f=S(),_&&_.c(),this.h()},l(g){p.l(g),e=P(g),t=v(g,"DIV",{class:!0});var c=k(t);l=v(c,"DIV",{class:!0});var I=k(l);r&&r.l(I),s=P(I),y&&y.l(I),f=P(I),_&&_.l(I),I.forEach(h),c.forEach(h),this.h()},h(){a(l,"class","input-group"),W(l,"weighted",o[0].weighted),a(t,"class","card-footer")},m(g,c){p.m(g,c),A(g,e,c),A(g,t,c),m(t,l),~i&&E[i].m(l,null),m(l,s),y&&y.m(l,null),m(l,f),_&&_.m(l,null),u=!0},p(g,[c]){n===(n=b(g))&&p?p.p(g,c):(p.d(1),p=n(g),p&&(p.c(),p.m(e.parentNode,e)));let I=i;i=T(g),i===I?~i&&E[i].p(g,c):(r&&(ve(),V(E[I],1,1,()=>{E[I]=null}),ke()),~i?(r=E[i],r?r.p(g,c):(r=E[i]=d[i](g),r.c()),R(r,1),r.m(l,s)):r=null),g[3]?y?y.p(g,c):(y=rt(g),y.c(),y.m(l,f)):y&&(y.d(1),y=null),g[2]?_?_.p(g,c):(_=it(g),_.c(),_.m(l,null)):_&&(_.d(1),_=null),(!u||c&1)&&W(l,"weighted",g[0].weighted)},i(g){u||(R(r),u=!0)},o(g){V(r),u=!1},d(g){p.d(g),g&&h(e),g&&h(t),~i&&E[i].d(),y&&y.d(),_&&_.d()}}}function St(o,e,t){let{obj:l}=e,{deletable:i=!1}=e,{addable:r=!1}=e,{placeholder:s=""}=e,{image:f=!1}=e,{cangetweight:u=!1}=e,{selectedPath:b=""}=e,n=l.dir,p=l.text,d="",E=l.note;l.tid&&(f?d="i-"+l.tid.toString():d="p-"+l.tid.toString()),!s&&l.placeholder&&(s=l.placeholder);const T=()=>{t(0,l.weighted=!l.weighted,l)},y=()=>{t(0,l.included=!0,l)},_=()=>{t(0,l.included=!1,l)};function g(){l.prompt=this.value,t(0,l)}function c(){l.prompt=this.value,t(0,l)}function I(){l.weight=ut(this.value),t(0,l)}return o.$$set=C=>{"obj"in C&&t(0,l=C.obj),"deletable"in C&&t(2,i=C.deletable),"addable"in C&&t(3,r=C.addable),"placeholder"in C&&t(1,s=C.placeholder),"image"in C&&t(4,f=C.image),"cangetweight"in C&&t(5,u=C.cangetweight),"selectedPath"in C&&t(6,b=C.selectedPath)},[l,s,i,r,f,u,b,d,n,p,E,T,y,_,g,c,I]}class $t extends fe{constructor(e){super(),ue(this,e,St,At,ce,{obj:0,deletable:2,addable:3,placeholder:1,image:4,cangetweight:5,selectedPath:6})}}function ot(o){let e,t;return{c(){e=w("span"),t=N(o[0]),this.h()},l(l){e=v(l,"SPAN",{class:!0});var i=k(e);t=B(i,o[0]),i.forEach(h),this.h()},h(){a(e,"class","copy-btn-text")},m(l,i){A(l,e,i),m(e,t)},p(l,i){i&1&&ye(t,l[0])},d(l){l&&h(e)}}}function Pt(o){let e,t,l;return{c(){e=w("span"),t=w("i"),l=N(" Copied!"),this.h()},l(i){e=v(i,"SPAN",{class:!0});var r=k(e);t=v(r,"I",{class:!0}),k(t).forEach(h),l=B(r," Copied!"),r.forEach(h),this.h()},h(){a(t,"class","fa-solid fa-circle-check"),a(e,"class","text-success")},m(i,r){A(i,e,r),m(e,t),m(e,l)},d(i){i&&h(e)}}}function Ot(o){let e,t,l;return{c(){e=w("span"),t=w("i"),l=N(" Empty!"),this.h()},l(i){e=v(i,"SPAN",{class:!0});var r=k(e);t=v(r,"I",{class:!0}),k(t).forEach(h),l=B(r," Empty!"),r.forEach(h),this.h()},h(){a(t,"class","fa-solid fa-circle-xmark"),a(e,"class","text-danger")},m(i,r){A(i,e,r),m(e,t),m(e,l)},d(i){i&&h(e)}}}function Nt(o){let e;function t(r,s){return r[2]?Ot:Pt}let l=t(o),i=l(o);return{c(){i.c(),e=z()},l(r){i.l(r),e=z()},m(r,s){i.m(r,s),A(r,e,s)},p(r,s){l!==(l=t(r))&&(i.d(1),i=l(r),i&&(i.c(),i.m(e.parentNode,e)))},d(r){i.d(r),r&&h(e)}}}function Bt(o){let e,t,l,i,r,s,f,u,b=o[0]&&ot(o);return r=new vt({props:{isOpen:o[3],referenceElement:o[1],placement:"bottom-start",spaceAway:10,$$slots:{default:[Nt]},$$scope:{ctx:o}}}),{c(){e=w("button"),t=w("i"),l=S(),b&&b.c(),i=S(),pe(r.$$.fragment),this.h()},l(n){e=v(n,"BUTTON",{type:!0,class:!0,title:!0,"data-toggle":!0,"data-placement":!0});var p=k(e);t=v(p,"I",{class:!0}),k(t).forEach(h),l=P(p),b&&b.l(p),p.forEach(h),i=P(n),de(r.$$.fragment,n),this.h()},h(){a(t,"class","fa-solid fa-copy"),a(e,"type","button"),a(e,"class","btn btn-secondary btn-doit copy-prompt"),a(e,"title","Copy to clipboard"),a(e,"data-toggle","tooltip"),a(e,"data-placement","bottom-start")},m(n,p){A(n,e,p),m(e,t),m(e,l),b&&b.m(e,null),o[7](e),A(n,i,p),he(r,n,p),s=!0,f||(u=D(e,"click",q(o[4])),f=!0)},p(n,[p]){n[0]?b?b.p(n,p):(b=ot(n),b.c(),b.m(e,null)):b&&(b.d(1),b=null);const d={};p&8&&(d.isOpen=n[3]),p&2&&(d.referenceElement=n[1]),p&260&&(d.$$scope={dirty:p,ctx:n}),r.$set(d)},i(n){s||(R(r.$$.fragment,n),s=!0)},o(n){V(r.$$.fragment,n),s=!1},d(n){n&&h(e),b&&b.d(),o[7](null),n&&h(i),me(r,n),f=!1,u()}}}function Dt(o,e,t){let{promptToCopy:l}=e,{copiedOnce:i=!1}=e,{buttonText:r=""}=e,s,f=!1,u=!1;const b=()=>{const p=()=>{let d=0;const E=setInterval(()=>{d++,d===3&&(clearInterval(E),t(3,u=!1),t(2,f=!0))},500)};l!=""?(t(2,f=!1),navigator.clipboard.writeText(l).then(()=>{t(3,u=!0),t(5,i=!0),p()}).catch(()=>{const d=document.querySelector("#prompt-built");try{d&&d.select(),document.execCommand("copy"),t(3,u=!0),t(5,i=!0),p()}catch(E){console.error(E)}})):(t(2,f=!0),t(3,u=!0),p())};function n(p){Q[p?"unshift":"push"](()=>{s=p,t(1,s)})}return o.$$set=p=>{"promptToCopy"in p&&t(6,l=p.promptToCopy),"copiedOnce"in p&&t(5,i=p.copiedOnce),"buttonText"in p&&t(0,r=p.buttonText)},[r,s,f,u,b,i,l,n]}class ct extends fe{constructor(e){super(),ue(this,e,Dt,Bt,ce,{promptToCopy:6,copiedOnce:5,buttonText:0})}}function st(o){let e,t;return{c(){e=w("span"),t=N(o[1]),this.h()},l(l){e=v(l,"SPAN",{class:!0});var i=k(e);t=B(i,o[1]),i.forEach(h),this.h()},h(){a(e,"class","copy-btn-text")},m(l,i){A(l,e,i),m(e,t)},p(l,i){i&2&&ye(t,l[1])},d(l){l&&h(e)}}}function Lt(o){let e,t,l,i,r=o[1]&&st(o);return{c(){e=w("a"),t=w("i"),l=S(),r&&r.c(),this.h()},l(s){e=v(s,"A",{type:!0,class:!0,title:!0,href:!0,target:!0});var f=k(e);t=v(f,"I",{class:!0}),k(t).forEach(h),l=P(f),r&&r.l(f),f.forEach(h),this.h()},h(){a(t,"class","fa-solid fa-external-link"),a(e,"type","button"),a(e,"class","btn btn-secondary btn-doit copy-prompt"),a(e,"title","Run prompt"),a(e,"href",i="https://www.creativefabrica.com/spark/tools/art-generator/?pt="+encodeURIComponent(o[0])),a(e,"target","_blank")},m(s,f){A(s,e,f),m(e,t),m(e,l),r&&r.m(e,null)},p(s,[f]){s[1]?r?r.p(s,f):(r=st(s),r.c(),r.m(e,null)):r&&(r.d(1),r=null),f&1&&i!==(i="https://www.creativefabrica.com/spark/tools/art-generator/?pt="+encodeURIComponent(s[0]))&&a(e,"href",i)},i:J,o:J,d(s){s&&h(e),r&&r.d()}}}function Rt(o,e,t){let{promptToCopy:l}=e,{buttonText:i=""}=e;return o.$$set=r=>{"promptToCopy"in r&&t(0,l=r.promptToCopy),"buttonText"in r&&t(1,i=r.buttonText)},[l,i]}class Vt extends fe{constructor(e){super(),ue(this,e,Rt,Lt,ce,{promptToCopy:0,buttonText:1})}}function at(o){let e,t,l,i=o[4]?"Hide":"Show",r,s,f,u,b,n,p,d;function E(g,c){return g[4]?Ut:Ht}let T=E(o),y=T(o),_=o[4]&&nt(o);return{c(){e=w("button"),y.c(),t=S(),l=w("span"),r=N(i),s=N(" prompt builder menu"),u=S(),_&&_.c(),b=z(),this.h()},l(g){e=v(g,"BUTTON",{title:!0,type:!0,class:!0,"aria-expanded":!0});var c=k(e);y.l(c),t=P(c),l=v(c,"SPAN",{class:!0});var I=k(l);r=B(I,i),s=B(I," prompt builder menu"),I.forEach(h),c.forEach(h),u=P(g),_&&_.l(g),b=z(),this.h()},h(){a(l,"class","visually-hidden"),a(e,"title",f=(o[4]?"Hide":"Show")+" Dropdown"),a(e,"type","button"),a(e,"class","btn btn-secondary dropdown dropdown-toggle btn-dropdown"),a(e,"aria-expanded","false")},m(g,c){A(g,e,c),y.m(e,null),m(e,t),m(e,l),m(l,r),m(l,s),A(g,u,c),_&&_.m(g,c),A(g,b,c),n=!0,p||(d=D(e,"click",o[5]),p=!0)},p(g,c){T!==(T=E(g))&&(y.d(1),y=T(g),y&&(y.c(),y.m(e,t))),(!n||c&16)&&i!==(i=g[4]?"Hide":"Show")&&ye(r,i),(!n||c&16&&f!==(f=(g[4]?"Hide":"Show")+" Dropdown"))&&a(e,"title",f),g[4]?_?(_.p(g,c),c&16&&R(_,1)):(_=nt(g),_.c(),R(_,1),_.m(b.parentNode,b)):_&&(ve(),V(_,1,1,()=>{_=null}),ke())},i(g){n||(R(_),n=!0)},o(g){V(_),n=!1},d(g){g&&h(e),y.d(),g&&h(u),_&&_.d(g),g&&h(b),p=!1,d()}}}function Ht(o){let e;return{c(){e=w("i"),this.h()},l(t){e=v(t,"I",{class:!0}),k(e).forEach(h),this.h()},h(){a(e,"class","fa-solid fa-ellipsis-vertical px-1")},m(t,l){A(t,e,l)},d(t){t&&h(e)}}}function Ut(o){let e;return{c(){e=w("i"),this.h()},l(t){e=v(t,"I",{class:!0,style:!0}),k(e).forEach(h),this.h()},h(){a(e,"class","fa-solid fa-ellipsis-vertical fa-rotate-by px-1"),dt(e,"--fa-rotate-angle","45deg")},m(t,l){A(t,e,l)},d(t){t&&h(e)}}}function nt(o){let e,t,l,i,r,s,f,u,b,n,p,d,E,T,y,_,g,c,I,C,X,j,M,x,Ee,Te,$,F,ee,Ie,Ce,_e,te,be,Ae,le,U,re,Se,K,Pe,Oe,ie,G,oe,Ne,Y,se,Be,qe,L=o[2]==="parameters"&&ft(o);return{c(){e=w("ul"),t=w("li"),l=w("a"),i=w("i"),r=N(" Select a different diffusion model"),s=S(),f=w("li"),u=w("hr"),b=S(),n=w("li"),p=w("a"),d=w("i"),E=N(`
							Composer `),T=w("span"),y=N("top of the page"),_=S(),g=w("li"),c=w("a"),I=w("i"),C=N(`
							Base image`),X=S(),j=w("li"),M=w("a"),x=w("i"),Ee=N(`
							Details`),Te=S(),$=w("li"),F=w("a"),ee=w("i"),Ie=N(`
							Styles`),Ce=S(),L&&L.c(),_e=S(),te=w("li"),be=w("hr"),Ae=S(),le=w("li"),U=w("a"),re=w("i"),Se=N(` Clean sheet
							`),K=w("span"),Pe=N("Reset the form!"),Oe=S(),ie=w("li"),G=w("button"),oe=w("i"),Ne=N(" Stay tooned for more features\u2026"),this.h()},l(H){e=v(H,"UL",{class:!0});var O=k(e);t=v(O,"LI",{});var Me=k(t);l=v(Me,"A",{class:!0,title:!0,href:!0});var De=k(l);i=v(De,"I",{class:!0}),k(i).forEach(h),r=B(De," Select a different diffusion model"),De.forEach(h),Me.forEach(h),s=P(O),f=v(O,"LI",{});var Fe=k(f);u=v(Fe,"HR",{class:!0}),Fe.forEach(h),b=P(O),n=v(O,"LI",{});var Ge=k(n);p=v(Ge,"A",{href:!0,class:!0});var ge=k(p);d=v(ge,"I",{class:!0}),k(d).forEach(h),E=B(ge,`
							Composer `),T=v(ge,"SPAN",{class:!0});var Xe=k(T);y=B(Xe,"top of the page"),Xe.forEach(h),ge.forEach(h),Ge.forEach(h),_=P(O),g=v(O,"LI",{});var Ye=k(g);c=v(Ye,"A",{href:!0,class:!0});var Le=k(c);I=v(Le,"I",{class:!0}),k(I).forEach(h),C=B(Le,`
							Base image`),Le.forEach(h),Ye.forEach(h),X=P(O),j=v(O,"LI",{});var Je=k(j);M=v(Je,"A",{href:!0,id:!0,class:!0});var Re=k(M);x=v(Re,"I",{class:!0}),k(x).forEach(h),Ee=B(Re,`
							Details`),Re.forEach(h),Je.forEach(h),Te=P(O),$=v(O,"LI",{});var Ke=k($);F=v(Ke,"A",{href:!0,class:!0});var Ve=k(F);ee=v(Ve,"I",{class:!0}),k(ee).forEach(h),Ie=B(Ve,`
							Styles`),Ve.forEach(h),Ke.forEach(h),Ce=P(O),L&&L.l(O),_e=P(O),te=v(O,"LI",{});var We=k(te);be=v(We,"HR",{class:!0}),We.forEach(h),Ae=P(O),le=v(O,"LI",{});var Ze=k(le);U=v(Ze,"A",{class:!0,title:!0,href:!0,"data-sveltekit-reload":!0});var we=k(U);re=v(we,"I",{class:!0}),k(re).forEach(h),Se=B(we,` Clean sheet
							`),K=v(we,"SPAN",{class:!0});var ze=k(K);Pe=B(ze,"Reset the form!"),ze.forEach(h),we.forEach(h),Ze.forEach(h),Oe=P(O),ie=v(O,"LI",{});var Qe=k(ie);G=v(Qe,"BUTTON",{class:!0,title:!0});var He=k(G);oe=v(He,"I",{class:!0}),k(oe).forEach(h),Ne=B(He," Stay tooned for more features\u2026"),He.forEach(h),Qe.forEach(h),O.forEach(h),this.h()},h(){a(i,"class","fa-solid fa-delete-left me-1"),a(l,"class","dropdown-item dropdown-item-destructive"),a(l,"title","Select a different diffusion model"),a(l,"href","/prompt-builder/"),a(u,"class","dropdown-divider"),a(d,"class","fa-solid fa-square-arrow-up-right me-1"),a(T,"class","text-muted ms-1"),a(p,"href","#start"),a(p,"class","dropdown-item"),a(I,"class","fa-solid fa-camera me-1"),a(c,"href","#baseimage"),a(c,"class","dropdown-item"),a(x,"class","fa-solid fa-info me-1"),a(M,"href","#details"),a(M,"id","details-link"),a(M,"class","dropdown-item"),a(ee,"class","fa-solid fa-palette me-1"),a(F,"href","#styles"),a(F,"class","dropdown-item"),a(be,"class","dropdown-divider"),a(re,"class","fa-solid fa-trash-arrow-up me-1"),a(K,"class","text-muted ms-1"),a(U,"class","dropdown-item dropdown-item-destructive"),a(U,"title","Reset everyting to blank!"),a(U,"href",o[3]),a(U,"data-sveltekit-reload",""),a(oe,"class","fa-solid fa-clipboard-list me-1"),a(G,"class","dropdown-item"),a(G,"title","Coming soon"),G.disabled=!0,a(e,"class","dropdown-menu show")},m(H,O){A(H,e,O),m(e,t),m(t,l),m(l,i),m(l,r),m(e,s),m(e,f),m(f,u),m(e,b),m(e,n),m(n,p),m(p,d),m(p,E),m(p,T),m(T,y),m(e,_),m(e,g),m(g,c),m(c,I),m(c,C),m(e,X),m(e,j),m(j,M),m(M,x),m(M,Ee),m(e,Te),m(e,$),m($,F),m(F,ee),m(F,Ie),m(e,Ce),L&&L.m(e,null),m(e,_e),m(e,te),m(te,be),m(e,Ae),m(e,le),m(le,U),m(U,re),m(U,Se),m(U,K),m(K,Pe),m(e,Oe),m(e,ie),m(ie,G),m(G,oe),m(G,Ne),se=!0,Be||(qe=[D(p,"click",q(o[6])),D(c,"click",q(o[7])),D(M,"click",q(o[7])),D(F,"click",q(o[7]))],Be=!0)},p(H,O){H[2]==="parameters"?L?L.p(H,O):(L=ft(H),L.c(),L.m(e,_e)):L&&(L.d(1),L=null),(!se||O&8)&&a(U,"href",H[3])},i(H){se||(pt(()=>{Y||(Y=xe(e,et,{y:-200,duration:200},!0)),Y.run(1)}),se=!0)},o(H){Y||(Y=xe(e,et,{y:-200,duration:200},!1)),Y.run(0),se=!1},d(H){H&&h(e),L&&L.d(),H&&Y&&Y.end(),Be=!1,Ue(qe)}}}function ft(o){let e,t,l,i,r,s,f,u,b,n,p;return{c(){e=w("li"),t=w("a"),l=w("i"),i=N(`
								Parameters`),r=S(),s=w("li"),f=w("a"),u=w("i"),b=N(`
								Sizes`),this.h()},l(d){e=v(d,"LI",{});var E=k(e);t=v(E,"A",{href:!0,class:!0});var T=k(t);l=v(T,"I",{class:!0}),k(l).forEach(h),i=B(T,`
								Parameters`),T.forEach(h),E.forEach(h),r=P(d),s=v(d,"LI",{});var y=k(s);f=v(y,"A",{href:!0,class:!0});var _=k(f);u=v(_,"I",{class:!0}),k(u).forEach(h),b=B(_,`
								Sizes`),_.forEach(h),y.forEach(h),this.h()},h(){a(l,"class","fa-solid fa-folder-plus me-1"),a(t,"href","#parameters"),a(t,"class","dropdown-item"),a(u,"class","fa-solid fa-ruler-combined me-1"),a(f,"href","#sizes"),a(f,"class","dropdown-item")},m(d,E){A(d,e,E),m(e,t),m(t,l),m(t,i),A(d,r,E),A(d,s,E),m(s,f),m(f,u),m(f,b),n||(p=[D(t,"click",q(o[7])),D(f,"click",q(o[7]))],n=!0)},p:J,d(d){d&&h(e),d&&h(r),d&&h(s),n=!1,Ue(p)}}}function qt(o){let e,t,l,i;function r(u){o[10](u)}function s(u){o[11](u)}let f={};return o[0]!==void 0&&(f.promptToCopy=o[0]),o[1]!==void 0&&(f.copiedOnce=o[1]),e=new ct({props:f}),Q.push(()=>ae(e,"promptToCopy",r)),Q.push(()=>ae(e,"copiedOnce",s)),{c(){pe(e.$$.fragment)},l(u){de(e.$$.fragment,u)},m(u,b){he(e,u,b),i=!0},p(u,b){const n={};!t&&b&1&&(t=!0,n.promptToCopy=u[0],ne(()=>t=!1)),!l&&b&2&&(l=!0,n.copiedOnce=u[1],ne(()=>l=!1)),e.$set(n)},i(u){i||(R(e.$$.fragment,u),i=!0)},o(u){V(e.$$.fragment,u),i=!1},d(u){me(e,u)}}}function Mt(o){let e,t,l,i;function r(u){o[8](u)}function s(u){o[9](u)}let f={buttonText:"Copy"};return o[0]!==void 0&&(f.promptToCopy=o[0]),o[1]!==void 0&&(f.copiedOnce=o[1]),e=new ct({props:f}),Q.push(()=>ae(e,"promptToCopy",r)),Q.push(()=>ae(e,"copiedOnce",s)),{c(){pe(e.$$.fragment)},l(u){de(e.$$.fragment,u)},m(u,b){he(e,u,b),i=!0},p(u,b){const n={};!t&&b&1&&(t=!0,n.promptToCopy=u[0],ne(()=>t=!1)),!l&&b&2&&(l=!0,n.copiedOnce=u[1],ne(()=>l=!1)),e.$set(n)},i(u){i||(R(e.$$.fragment,u),i=!0)},o(u){V(e.$$.fragment,u),i=!1},d(u){me(e,u)}}}function Ft(o){let e,t,l,i,r,s,f,u,b,n,p,d=o[2]&&at(o);const E=[Mt,qt],T=[];function y(c,I){return c[4]?0:1}s=y(o),f=T[s]=E[s](o);function _(c){o[12](c)}let g={buttonText:"Run prompt now"};return o[0]!==void 0&&(g.promptToCopy=o[0]),b=new Vt({props:g}),Q.push(()=>ae(b,"promptToCopy",_)),{c(){e=w("header"),t=w("div"),d&&d.c(),l=S(),i=w("input"),r=S(),f.c(),u=S(),pe(b.$$.fragment),this.h()},l(c){e=v(c,"HEADER",{class:!0});var I=k(e);t=v(I,"DIV",{class:!0});var C=k(t);d&&d.l(C),l=P(C),i=v(C,"INPUT",{title:!0,id:!0,class:!0,type:!0,placeholder:!0,"aria-label":!0}),r=P(C),f.l(C),u=P(C),de(b.$$.fragment,C),C.forEach(h),I.forEach(h),this.h()},h(){a(i,"title","give this to your favorite AI"),a(i,"id","prompt-built"),a(i,"class","form-control header-input"),a(i,"type","text"),i.value=o[0],a(i,"placeholder","The prompt will appear as it gets built. Give this your favorite AI!"),a(i,"aria-label","prompt"),a(t,"class","container input-group"),a(e,"class","sticky-top flex-md-nowrap py-2 shadow")},m(c,I){A(c,e,I),m(e,t),d&&d.m(t,null),m(t,l),m(t,i),m(t,r),T[s].m(t,null),m(t,u),he(b,t,null),p=!0},p(c,[I]){c[2]?d?(d.p(c,I),I&4&&R(d,1)):(d=at(c),d.c(),R(d,1),d.m(t,l)):d&&(ve(),V(d,1,1,()=>{d=null}),ke()),(!p||I&1&&i.value!==c[0])&&(i.value=c[0]);let C=s;s=y(c),s===C?T[s].p(c,I):(ve(),V(T[C],1,1,()=>{T[C]=null}),ke(),f=T[s],f?f.p(c,I):(f=T[s]=E[s](c),f.c()),R(f,1),f.m(t,u));const X={};!n&&I&1&&(n=!0,X.promptToCopy=c[0],ne(()=>n=!1)),b.$set(X)},i(c){p||(R(d),R(f),R(b.$$.fragment,c),p=!0)},o(c){V(d),V(f),V(b.$$.fragment,c),p=!1},d(c){c&&h(e),d&&d.d(),T[s].d(),me(b)}}}function Gt(o,e,t){let{promptToCopy:l}=e,{submenu:i=void 0}=e,{copiedOnce:r=!1}=e,{here:s}=e,f=!1;const u=()=>{t(4,f=!f)},b=()=>{document.body.scrollIntoView({behavior:"smooth"}),t(4,f=!1)};function n(_,g=-55){const c=_.target;let I="";if(I=c.getAttribute("href"),I){const C=document.querySelector(I);if(C){const X=C.getBoundingClientRect().top+window.pageYOffset+g;window.scrollTo({top:X,behavior:"smooth"}),C.click()}else document.body.scrollIntoView({behavior:"smooth"});t(4,f=!1)}}function p(_){l=_,t(0,l)}function d(_){r=_,t(1,r)}function E(_){l=_,t(0,l)}function T(_){r=_,t(1,r)}function y(_){l=_,t(0,l)}return o.$$set=_=>{"promptToCopy"in _&&t(0,l=_.promptToCopy),"submenu"in _&&t(2,i=_.submenu),"copiedOnce"in _&&t(1,r=_.copiedOnce),"here"in _&&t(3,s=_.here)},[l,r,i,s,f,u,b,n,p,d,E,T,y]}class el extends fe{constructor(e){super(),ue(this,e,Gt,Ft,ce,{promptToCopy:0,submenu:2,copiedOnce:1,here:3})}}function tl(o,e,t,l,i){const r=",",s=[],f=[],u=[];let b,n,p,d="",E="";i&&(i.command&&(E=i.command),i.weightseparator&&(d=i.weightseparator));function T(c){if(c.included&&c.prompt){let I=r,C=c.prompt;return c.bakedweight?(I="",c.weight?C=C.replace(/{w}/g,c.weight.toString()):C=C.replace(/{w}/g,"1")):c.weighted&&(I=d,c.weight!==1&&(c.weight?I+=c.weight.toString():c.weight===0&&(I="",C=""))),f.length!==0&&c.weighted&&f[f.length-1][1]===r&&(f[f.length-1][1]=d),f.push([C,I]),!0}else return!1}function y(c){if(c.prompt&&t)switch(c.id){case"customsize-0":break;case"customsize-3":{t.customsizes[4].prompt&&u.push(c.prefix+c.prompt);break}case"customsize-4":{t.customsizes[3].prompt&&u.push(c.prefix+c.prompt);break}default:{u.push(c.prefix+c.prompt);break}}}function _(c){c.prompt&&c.included&&s.push(c.prompt)}o&&o.forEach(_),e&&e.forEach(T);function g(c){c.active&&(c.id==="iw"?s.length!==0&&u.push(c.prefix+" "+c.value):c.type==="range"?u.push(c.prefix+" "+c.value):c.type==="number"?c.value&&u.push(c.prefix+" "+c.value):c.prompt&&u.push(c.prompt))}if(l&&l.forEach(g),t)switch(t.sizesgroup){case"":break;case"___":{t.customsizes.forEach(y);break}default:{u.push(t.sizesgroup);break}}return f.length!==0||s.length!==0?(s.length!==0?b=s.join(" ")+" ":b="",n=f.map(c=>c.join("")).join(" ").replace(/  +/g," "),n.slice(-1)===r&&(n=n.slice(0,-1)),n.slice(-2)===d&&(n=n.slice(0,-2)),u.length!==0?p=" "+u.join(" ").replace(/\s(?=:\d+)/g,""):p="",E?E+b+n+p:b+n+p):""}function Xt(o){let e,t,l,i,r,s,f,u,b,n,p,d;const E=o[5].default,T=ht(E,o,o[4],null);return{c(){e=w("div"),t=w("button"),l=w("div"),i=w("i"),s=S(),f=w("div"),u=N(o[1]),b=S(),T&&T.c(),this.h()},l(y){e=v(y,"DIV",{class:!0});var _=k(e);t=v(_,"BUTTON",{title:!0,class:!0});var g=k(t);l=v(g,"DIV",{class:!0});var c=k(l);i=v(c,"I",{class:!0}),k(i).forEach(h),s=P(c),f=v(c,"DIV",{});var I=k(f);u=B(I,o[1]),I.forEach(h),c.forEach(h),g.forEach(h),b=P(_),T&&T.l(_),_.forEach(h),this.h()},h(){a(i,"class",r="fa-solid "+o[3]+" fs-1"),a(l,"class","plusbtn-inner"),a(t,"title",o[2]),a(t,"class","plusbtn"),a(e,"class","card text-card plusbtn-wrapper"),W(e,"image-card",o[0])},m(y,_){A(y,e,_),m(e,t),m(t,l),m(l,i),m(l,s),m(l,f),m(f,u),m(e,b),T&&T.m(e,null),n=!0,p||(d=D(t,"click",q(o[6])),p=!0)},p(y,[_]){(!n||_&8&&r!==(r="fa-solid "+y[3]+" fs-1"))&&a(i,"class",r),(!n||_&2)&&ye(u,y[1]),(!n||_&4)&&a(t,"title",y[2]),T&&T.p&&(!n||_&16)&&mt(T,E,y,y[4],n?bt(E,y[4],_,null):_t(y[4]),null),(!n||_&1)&&W(e,"image-card",y[0])},i(y){n||(R(T,y),n=!0)},o(y){V(T,y),n=!1},d(y){y&&h(e),T&&T.d(y),p=!1,d()}}}function Yt(o,e,t){let{$$slots:l={},$$scope:i}=e,{image:r=!1}=e,{text:s=""}=e,{title:f=""}=e,u="fa-plus";r&&(u="fa-comment-image");function b(n){gt.call(this,o,n)}return o.$$set=n=>{"image"in n&&t(0,r=n.image),"text"in n&&t(1,s=n.text),"title"in n&&t(2,f=n.title),"$$scope"in n&&t(4,i=n.$$scope)},[r,s,f,u,i,l,b]}class ll extends fe{constructor(e){super(),ue(this,e,Yt,Xt,ce,{image:0,text:1,title:2})}}function Jt(o,e,t){let l=0,i="",r=!1,s=0,f,u=!1;return o.category?l=o.category:r=!0,o.prompt&&(i=o.prompt),o.weight&&(f=o.weight),o.weighted&&(u=!0),t?s=t:o.tid&&(s=o.tid),{prompt:i,tid:s,category:l,included:r,weighted:u,weight:f,placeholder:e,...o}}function Kt(){const o=kt([]);let e=0;function t(l,i){const r=e;e++,o.update(s=>[...s,Jt(l,i,r)])}return{subscribe:o.subscribe,add:(l,i)=>{t(l,i)},remove:l=>{o.update(i=>i.filter(r=>r.tid!==l))}}}const rl=Kt();export{ll as A,$t as C,el as P,ct as a,tl as b,rl as p};