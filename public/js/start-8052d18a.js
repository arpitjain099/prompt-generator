import {S as He, i as Me, s as Xe, a as Ye, e as B, c as Qe, b as G, g as le, t as J, d as ce, f as F, h as K, j as Ze, o as ye, k as et, l as tt, m as rt, n as ge, p as C, q as nt, r as at, u as ot, v as H, w as Re, x as M, y as X, z as Ce} from "./index-2e06e8b9.js";
import {g as xe, f as Be, s as z, a as be, b as it, i as st} from "./singletons-81a9e444.js";
const lt = function() {
    const e = document.createElement("link").relList;
    return e && e.supports && e.supports("modulepreload") ? "modulepreload" : "preload"
}()
  , ct = function(r, e) {
    return new URL(r,e).href
}
  , Je = {}
  , U = function(e, t, c) {
    return !t || t.length === 0 ? e() : Promise.all(t.map(i=>{
        if (i = ct(i, c),
        i in Je)
            return;
        Je[i] = !0;
        const d = i.endsWith(".css")
          , a = d ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${i}"]${a}`))
            return;
        const f = document.createElement("link");
        if (f.rel = d ? "stylesheet" : lt,
        d || (f.as = "script",
        f.crossOrigin = ""),
        f.href = i,
        document.head.appendChild(f),
        d)
            return new Promise((_,m)=>{
                f.addEventListener("load", _),
                f.addEventListener("error", ()=>m(new Error(`Unable to preload CSS for ${i}`)))
            }
            )
    }
    )).then(()=>e())
};
function ft(r, e) {
    return r === "/" || e === "ignore" ? r : e === "never" ? r.endsWith("/") ? r.slice(0, -1) : r : e === "always" && !r.endsWith("/") ? r + "/" : r
}
function ut(r) {
    for (const e in r)
        r[e] = r[e].replace(/%23/g, "#").replace(/%3[Bb]/g, ";").replace(/%2[Cc]/g, ",").replace(/%2[Ff]/g, "/").replace(/%3[Ff]/g, "?").replace(/%3[Aa]/g, ":").replace(/%40/g, "@").replace(/%26/g, "&").replace(/%3[Dd]/g, "=").replace(/%2[Bb]/g, "+").replace(/%24/g, "$");
    return r
}
const dt = ["href", "pathname", "search", "searchParams", "toString", "toJSON"];
function pt(r, e) {
    const t = new URL(r);
    for (const c of dt) {
        let i = t[c];
        Object.defineProperty(t, c, {
            get() {
                return e(),
                i
            },
            enumerable: !0,
            configurable: !0
        })
    }
    return t[Symbol.for("nodejs.util.inspect.custom")] = (c,i,d)=>d(r, i),
    ht(t),
    t
}
function ht(r) {
    Object.defineProperty(r, "hash", {
        get() {
            throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")
        }
    })
}
function mt(r) {
    let e = 5381
      , t = r.length;
    if (typeof r == "string")
        for (; t; )
            e = e * 33 ^ r.charCodeAt(--t);
    else
        for (; t; )
            e = e * 33 ^ r[--t];
    return (e >>> 0).toString(36)
}
const Le = window.fetch;
window.fetch = (r,e)=>{
    if ((r instanceof Request ? r.method : (e == null ? void 0 : e.method) || "GET") !== "GET") {
        const c = new URL(r instanceof Request ? r.url : r.toString(),document.baseURI).href;
        se.delete(c)
    }
    return Le(r, e)
}
;
const se = new Map;
function _t(r, e, t) {
    let i = `script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request ? r.url : r)}]`;
    t && typeof t.body == "string" && (i += `[data-hash="${mt(t.body)}"]`);
    const d = document.querySelector(i);
    if (d != null && d.textContent) {
        const {body: a, ...f} = JSON.parse(d.textContent)
          , _ = d.getAttribute("data-ttl");
        return _ && se.set(e, {
            body: a,
            init: f,
            ttl: 1e3 * Number(_)
        }),
        Promise.resolve(new Response(a,f))
    }
    return Le(r, t)
}
function gt(r, e) {
    const t = se.get(r);
    if (t) {
        if (performance.now() < t.ttl)
            return new Response(t.body,t.init);
        se.delete(r)
    }
    return Le(r, e)
}
const wt = /^(\.\.\.)?(\w+)(?:=(\w+))?$/;
function yt(r) {
    const e = []
      , t = [];
    let c = !0;
    return {
        pattern: r === "" ? /^\/$/ : new RegExp(`^${r.split(/(?:\/|$)/).filter(bt).map((d,a,f)=>{
            const _ = decodeURIComponent(d)
              , m = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(_);
            if (m)
                return e.push(m[1]),
                t.push(m[2]),
                "(?:/(.*))?";
            const y = a === f.length - 1;
            return _ && "/" + _.split(/\[(.+?)\]/).map((P,R)=>{
                if (R % 2) {
                    const V = wt.exec(P);
                    if (!V)
                        throw new Error(`Invalid param: ${P}. Params and matcher names can only have underscores and alphanumeric characters.`);
                    const [,N,q,j] = V;
                    return e.push(q),
                    t.push(j),
                    N ? "(.*?)" : "([^/]+?)"
                }
                return y && P.includes(".") && (c = !1),
                P.normalize().replace(/%5[Bb]/g, "[").replace(/%5[Dd]/g, "]").replace(/#/g, "%23").replace(/\?/g, "%3F").replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            }
            ).join("")
        }
        ).join("")}${c ? "/?" : ""}$`),
        names: e,
        types: t
    }
}
function bt(r) {
    return !/^\([^)]+\)$/.test(r)
}
function vt(r, e, t, c) {
    const i = {};
    for (let d = 0; d < e.length; d += 1) {
        const a = e[d]
          , f = t[d]
          , _ = r[d + 1] || "";
        if (f) {
            const m = c[f];
            if (!m)
                throw new Error(`Missing "${f}" param matcher`);
            if (!m(_))
                return
        }
        i[a] = _
    }
    return i
}
function Et(r, e, t, c) {
    const i = new Set(e);
    return Object.entries(t).map(([f,[_,m,y]])=>{
        const {pattern: P, names: R, types: V} = yt(f)
          , N = {
            id: f,
            exec: q=>{
                const j = P.exec(q);
                if (j)
                    return vt(j, R, V, c)
            }
            ,
            errors: [1, ...y || []].map(q=>r[q]),
            layouts: [0, ...m || []].map(a),
            leaf: d(_)
        };
        return N.errors.length = N.layouts.length = Math.max(N.errors.length, N.layouts.length),
        N
    }
    );
    function d(f) {
        const _ = f < 0;
        return _ && (f = ~f),
        [_, r[f]]
    }
    function a(f) {
        return f === void 0 ? f : [i.has(f), r[f]]
    }
}
function kt(r) {
    let e, t, c;
    var i = r[0][0];
    function d(a) {
        return {
            props: {
                data: a[2],
                form: a[1]
            }
        }
    }
    return i && (e = new i(d(r))),
    {
        c() {
            e && H(e.$$.fragment),
            t = B()
        },
        l(a) {
            e && Re(e.$$.fragment, a),
            t = B()
        },
        m(a, f) {
            e && M(e, a, f),
            G(a, t, f),
            c = !0
        },
        p(a, f) {
            const _ = {};
            if (f & 4 && (_.data = a[2]),
            f & 2 && (_.form = a[1]),
            i !== (i = a[0][0])) {
                if (e) {
                    le();
                    const m = e;
                    J(m.$$.fragment, 1, 0, ()=>{
                        X(m, 1)
                    }
                    ),
                    ce()
                }
                i ? (e = new i(d(a)),
                H(e.$$.fragment),
                F(e.$$.fragment, 1),
                M(e, t.parentNode, t)) : e = null
            } else
                i && e.$set(_)
        },
        i(a) {
            c || (e && F(e.$$.fragment, a),
            c = !0)
        },
        o(a) {
            e && J(e.$$.fragment, a),
            c = !1
        },
        d(a) {
            a && K(t),
            e && X(e, a)
        }
    }
}
function Rt(r) {
    let e, t, c;
    var i = r[0][0];
    function d(a) {
        return {
            props: {
                data: a[2],
                $$slots: {
                    default: [Lt]
                },
                $$scope: {
                    ctx: a
                }
            }
        }
    }
    return i && (e = new i(d(r))),
    {
        c() {
            e && H(e.$$.fragment),
            t = B()
        },
        l(a) {
            e && Re(e.$$.fragment, a),
            t = B()
        },
        m(a, f) {
            e && M(e, a, f),
            G(a, t, f),
            c = !0
        },
        p(a, f) {
            const _ = {};
            if (f & 4 && (_.data = a[2]),
            f & 523 && (_.$$scope = {
                dirty: f,
                ctx: a
            }),
            i !== (i = a[0][0])) {
                if (e) {
                    le();
                    const m = e;
                    J(m.$$.fragment, 1, 0, ()=>{
                        X(m, 1)
                    }
                    ),
                    ce()
                }
                i ? (e = new i(d(a)),
                H(e.$$.fragment),
                F(e.$$.fragment, 1),
                M(e, t.parentNode, t)) : e = null
            } else
                i && e.$set(_)
        },
        i(a) {
            c || (e && F(e.$$.fragment, a),
            c = !0)
        },
        o(a) {
            e && J(e.$$.fragment, a),
            c = !1
        },
        d(a) {
            a && K(t),
            e && X(e, a)
        }
    }
}
function Lt(r) {
    let e, t, c;
    var i = r[0][1];
    function d(a) {
        return {
            props: {
                data: a[3],
                form: a[1]
            }
        }
    }
    return i && (e = new i(d(r))),
    {
        c() {
            e && H(e.$$.fragment),
            t = B()
        },
        l(a) {
            e && Re(e.$$.fragment, a),
            t = B()
        },
        m(a, f) {
            e && M(e, a, f),
            G(a, t, f),
            c = !0
        },
        p(a, f) {
            const _ = {};
            if (f & 8 && (_.data = a[3]),
            f & 2 && (_.form = a[1]),
            i !== (i = a[0][1])) {
                if (e) {
                    le();
                    const m = e;
                    J(m.$$.fragment, 1, 0, ()=>{
                        X(m, 1)
                    }
                    ),
                    ce()
                }
                i ? (e = new i(d(a)),
                H(e.$$.fragment),
                F(e.$$.fragment, 1),
                M(e, t.parentNode, t)) : e = null
            } else
                i && e.$set(_)
        },
        i(a) {
            c || (e && F(e.$$.fragment, a),
            c = !0)
        },
        o(a) {
            e && J(e.$$.fragment, a),
            c = !1
        },
        d(a) {
            a && K(t),
            e && X(e, a)
        }
    }
}
function Fe(r) {
    let e, t = r[5] && Ke(r);
    return {
        c() {
            e = et("div"),
            t && t.c(),
            this.h()
        },
        l(c) {
            e = tt(c, "DIV", {
                id: !0,
                "aria-live": !0,
                "aria-atomic": !0,
                style: !0
            });
            var i = rt(e);
            t && t.l(i),
            i.forEach(K),
            this.h()
        },
        h() {
            ge(e, "id", "svelte-announcer"),
            ge(e, "aria-live", "assertive"),
            ge(e, "aria-atomic", "true"),
            C(e, "position", "absolute"),
            C(e, "left", "0"),
            C(e, "top", "0"),
            C(e, "clip", "rect(0 0 0 0)"),
            C(e, "clip-path", "inset(50%)"),
            C(e, "overflow", "hidden"),
            C(e, "white-space", "nowrap"),
            C(e, "width", "1px"),
            C(e, "height", "1px")
        },
        m(c, i) {
            G(c, e, i),
            t && t.m(e, null)
        },
        p(c, i) {
            c[5] ? t ? t.p(c, i) : (t = Ke(c),
            t.c(),
            t.m(e, null)) : t && (t.d(1),
            t = null)
        },
        d(c) {
            c && K(e),
            t && t.d()
        }
    }
}
function Ke(r) {
    let e;
    return {
        c() {
            e = nt(r[6])
        },
        l(t) {
            e = at(t, r[6])
        },
        m(t, c) {
            G(t, e, c)
        },
        p(t, c) {
            c & 64 && ot(e, t[6])
        },
        d(t) {
            t && K(e)
        }
    }
}
function St(r) {
    let e, t, c, i, d;
    const a = [Rt, kt]
      , f = [];
    function _(y, P) {
        return y[0][1] ? 0 : 1
    }
    e = _(r),
    t = f[e] = a[e](r);
    let m = r[4] && Fe(r);
    return {
        c() {
            t.c(),
            c = Ye(),
            m && m.c(),
            i = B()
        },
        l(y) {
            t.l(y),
            c = Qe(y),
            m && m.l(y),
            i = B()
        },
        m(y, P) {
            f[e].m(y, P),
            G(y, c, P),
            m && m.m(y, P),
            G(y, i, P),
            d = !0
        },
        p(y, [P]) {
            let R = e;
            e = _(y),
            e === R ? f[e].p(y, P) : (le(),
            J(f[R], 1, 1, ()=>{
                f[R] = null
            }
            ),
            ce(),
            t = f[e],
            t ? t.p(y, P) : (t = f[e] = a[e](y),
            t.c()),
            F(t, 1),
            t.m(c.parentNode, c)),
            y[4] ? m ? m.p(y, P) : (m = Fe(y),
            m.c(),
            m.m(i.parentNode, i)) : m && (m.d(1),
            m = null)
        },
        i(y) {
            d || (F(t),
            d = !0)
        },
        o(y) {
            J(t),
            d = !1
        },
        d(y) {
            f[e].d(y),
            y && K(c),
            m && m.d(y),
            y && K(i)
        }
    }
}
function Pt(r, e, t) {
    let {stores: c} = e
      , {page: i} = e
      , {components: d} = e
      , {form: a} = e
      , {data_0: f=null} = e
      , {data_1: _=null} = e;
    Ze(c.page.notify);
    let m = !1
      , y = !1
      , P = null;
    return ye(()=>{
        const R = c.page.subscribe(()=>{
            m && (t(5, y = !0),
            t(6, P = document.title || "untitled page"))
        }
        );
        return t(4, m = !0),
        R
    }
    ),
    r.$$set = R=>{
        "stores"in R && t(7, c = R.stores),
        "page"in R && t(8, i = R.page),
        "components"in R && t(0, d = R.components),
        "form"in R && t(1, a = R.form),
        "data_0"in R && t(2, f = R.data_0),
        "data_1"in R && t(3, _ = R.data_1)
    }
    ,
    r.$$.update = ()=>{
        r.$$.dirty & 384 && c.page.set(i)
    }
    ,
    [d, a, f, _, m, y, P, c, i]
}
class Ot extends He {
    constructor(e) {
        super(),
        Me(this, e, Pt, St, Xe, {
            stores: 7,
            page: 8,
            components: 0,
            form: 1,
            data_0: 2,
            data_1: 3
        })
    }
}
const It = {}
  , fe = [()=>U(()=>import("./0-e1d39424.js"), ["./0-e1d39424.js", "./_layout-1daba58d.js", "./_layout.svelte-2e0dbcfc.js", "./../css/_layout-af8b2493.css", "./index-2e06e8b9.js", "./constants-80ada001.js", "./index-2af9d510.js", "./stores-fd96f28d.js", "./singletons-81a9e444.js"], import.meta.url), ()=>U(()=>import("./1-1fe4d78d.js"), ["./1-1fe4d78d.js", "./_error.svelte-be9f50fe.js", "./index-2e06e8b9.js", "./Wszp-89b85316.js", "./Popover-628e72e9.js", "./../css/Popover-7f515a5b.css", "./index-2af9d510.js"], import.meta.url), ()=>U(()=>import("./2-2889c6b6.js"), ["./2-2889c6b6.js", "./svelte-a31032ac.js", "./index-2e06e8b9.js", "./stores-fd96f28d.js", "./singletons-81a9e444.js", "./constants-80ada001.js"], import.meta.url), ()=>U(()=>import("./3-db1d7ba2.js"), ["./3-db1d7ba2.js", "./_page.svelte-38fe1dc7.js", "./index-2e06e8b9.js", "./Wszp-89b85316.js", "./Popover-628e72e9.js", "./../css/Popover-7f515a5b.css", "./index-2af9d510.js"], import.meta.url), ()=>U(()=>import("./4-9d7c5338.js"), ["./4-9d7c5338.js", "./_page.svelte-c0d38e14.js", "./index-2e06e8b9.js", "./stores-fd96f28d.js", "./singletons-81a9e444.js", "./constants-80ada001.js", "./scale-38bb9777.js"], import.meta.url), ()=>U(()=>import("./5-d6d03d31.js"), ["./5-d6d03d31.js", "./_page.svelte-a2c6eeef.js", "./../css/Popover-7f515a5b.css", "./index-2e06e8b9.js", "./stores-fd96f28d.js", "./singletons-81a9e444.js", "./constants-80ada001.js"], import.meta.url), ()=>U(()=>import("./6-c8e84395.js"), ["./6-c8e84395.js", "./_page.svelte-883943ea.js", "./index-2e06e8b9.js", "./stores-fd96f28d.js", "./singletons-81a9e444.js", "./Wszp-89b85316.js", "./Popover-628e72e9.js", "./../css/Popover-7f515a5b.css", "./index-2af9d510.js"], import.meta.url), ()=>U(()=>import("./7-2145cfd5.js"), ["./7-2145cfd5.js", "./_page.svelte-9fdce4d7.js", "./index-2e06e8b9.js", "./stores-fd96f28d.js", "./singletons-81a9e444.js", "./PromptBuilder-cd4858e0.js", "./index-2af9d510.js", "./partStore-b156b3a0.js", "./constants-80ada001.js", "./scale-38bb9777.js", "./Popover-628e72e9.js", "./../css/Popover-7f515a5b.css"], import.meta.url), ()=>U(()=>import("./8-c00d1a4a.js"), ["./8-c00d1a4a.js", "./_page.svelte-cbe8f771.js", "./index-2e06e8b9.js", "./stores-fd96f28d.js", "./singletons-81a9e444.js", "./constants-80ada001.js", "./details-80ca7ef7.js", "./PromptBuilder-cd4858e0.js", "./index-2af9d510.js", "./partStore-b156b3a0.js", "./scale-38bb9777.js", "./Popover-628e72e9.js", "./../css/Popover-7f515a5b.css"], import.meta.url), ()=>U(()=>import("./9-7b217d49.js"), ["./9-7b217d49.js", "./_page.svelte-ef81e76f.js", "./index-2e06e8b9.js", "./stores-fd96f28d.js", "./singletons-81a9e444.js", "./constants-80ada001.js", "./details-80ca7ef7.js", "./PromptBuilder-cd4858e0.js", "./index-2af9d510.js", "./partStore-b156b3a0.js", "./scale-38bb9777.js", "./Popover-628e72e9.js", "./../css/Popover-7f515a5b.css"], import.meta.url), ()=>U(()=>import("./10-38169887.js"), ["./10-38169887.js", "./_page.svelte-4e4b8e89.js", "./index-2e06e8b9.js", "./stores-fd96f28d.js", "./singletons-81a9e444.js", "./constants-80ada001.js"], import.meta.url), ()=>U(()=>import("./11-d6f2723a.js"), ["./11-d6f2723a.js", "./_page.svelte-654e012a.js", "./index-2e06e8b9.js", "./stores-fd96f28d.js", "./singletons-81a9e444.js", "./constants-80ada001.js", "./PromptBuilder-cd4858e0.js", "./index-2af9d510.js", "./partStore-b156b3a0.js", "./scale-38bb9777.js", "./Popover-628e72e9.js", "./../css/Popover-7f515a5b.css"], import.meta.url), ()=>U(()=>import("./12-64925df2.js"), ["./12-64925df2.js", "./_page.svelte-615ab2f1.js", "./index-2e06e8b9.js", "./stores-fd96f28d.js", "./singletons-81a9e444.js", "./Wszp-89b85316.js", "./Popover-628e72e9.js", "./../css/Popover-7f515a5b.css", "./index-2af9d510.js"], import.meta.url), ()=>U(()=>import("./13-39ccc65a.js"), ["./13-39ccc65a.js", "./_page.svelte-bbc967fa.js", "./index-2e06e8b9.js", "./stores-fd96f28d.js", "./singletons-81a9e444.js", "./constants-80ada001.js"], import.meta.url), ()=>U(()=>import("./14-6bb5df5f.js"), ["./14-6bb5df5f.js", "./_page.svelte-7116868c.js", "./index-2e06e8b9.js", "./stores-fd96f28d.js", "./singletons-81a9e444.js", "./constants-80ada001.js", "./Wszp-89b85316.js", "./Popover-628e72e9.js", "./../css/Popover-7f515a5b.css", "./index-2af9d510.js"], import.meta.url), ()=>U(()=>import("./15-e1bcc12d.js"), ["./15-e1bcc12d.js", "./_page.svelte-f971d831.js", "./index-2e06e8b9.js", "./stores-fd96f28d.js", "./singletons-81a9e444.js", "./constants-80ada001.js", "./details-80ca7ef7.js", "./PromptBuilder-cd4858e0.js", "./index-2af9d510.js", "./partStore-b156b3a0.js", "./scale-38bb9777.js", "./Popover-628e72e9.js", "./../css/Popover-7f515a5b.css"], import.meta.url), ()=>U(()=>import("./16-f63921df.js"), ["./16-f63921df.js", "./_page.svelte-81fc85c5.js", "./index-2e06e8b9.js", "./stores-fd96f28d.js", "./singletons-81a9e444.js", "./Wszp-89b85316.js", "./Popover-628e72e9.js", "./../css/Popover-7f515a5b.css", "./index-2af9d510.js"], import.meta.url), ()=>U(()=>import("./17-4cf9bfc1.js"), ["./17-4cf9bfc1.js", "./_page.svelte-0916ab49.js", "./index-2e06e8b9.js", "./stores-fd96f28d.js", "./singletons-81a9e444.js", "./constants-80ada001.js", "./index-2af9d510.js", "./partStore-b156b3a0.js", "./scale-38bb9777.js", "./Popover-628e72e9.js", "./../css/Popover-7f515a5b.css"], import.meta.url)]
  , $t = []
  , At = {
    "": [2],
    404: [3],
    changelog: [4],
    contact: [5],
    cookies: [6],
    "creative-fabrica-spark-prompt-builder": [7],
    "dreamstudio-prompt-builder": [8],
    "generic-prompt-builder": [9],
    "grid-splitter": [10],
    "midjourney-prompt-builder": [11],
    privacy: [12],
    "prompt-builder": [13],
    sponsors: [14],
    "stable-diffusion-prompt-builder": [15],
    tos: [16],
    tutorials: [17]
}
  , Tt = {
    handleError: ({error: r})=>{
        console.error(r)
    }
};
class ve {
    constructor(e, t) {
        this.status = e,
        typeof t == "string" ? this.body = {
            message: t
        } : t ? this.body = t : this.body = {
            message: `Error: ${e}`
        }
    }
    toString() {
        return JSON.stringify(this.body)
    }
}
class ze {
    constructor(e, t) {
        this.status = e,
        this.location = t
    }
}
const Dt = "/__data.js";
async function Ut(r) {
    var e;
    for (const t in r)
        if (typeof ((e = r[t]) == null ? void 0 : e.then) == "function")
            return Object.fromEntries(await Promise.all(Object.entries(r).map(async([c,i])=>[c, await i])));
    return r
}
const We = "sveltekit:scroll"
  , x = "sveltekit:index"
  , ae = Et(fe, $t, At, It)
  , Ee = fe[0]
  , ke = fe[1];
Ee();
ke();
let ee = {};
try {
    ee = JSON.parse(sessionStorage[We])
} catch {}
function we(r) {
    ee[r] = be()
}
function Vt({target: r, base: e, trailing_slash: t}) {
    var je;
    const c = [];
    let i = null;
    const d = {
        before_navigate: [],
        after_navigate: []
    };
    let a = {
        branch: [],
        error: null,
        url: null
    }, f = !1, _ = !1, m = !0, y = !1, P = !1, R, V = (je = history.state) == null ? void 0 : je[x];
    V || (V = Date.now(),
    history.replaceState({
        ...history.state,
        [x]: V
    }, "", location.href));
    const N = ee[V];
    N && (history.scrollRestoration = "manual",
    scrollTo(N.x, N.y));
    let q = !1, j, Se, te;
    async function Pe() {
        te = te || Promise.resolve(),
        await te,
        te = null;
        const n = new URL(location.href)
          , l = he(n, !0);
        i = null,
        await Ie(l, n, [])
    }
    async function ue(n, {noscroll: l=!1, replaceState: u=!1, keepfocus: o=!1, state: s={}}, p, h) {
        return typeof n == "string" && (n = new URL(n,xe(document))),
        me({
            url: n,
            scroll: l ? be() : null,
            keepfocus: o,
            redirect_chain: p,
            details: {
                state: s,
                replaceState: u
            },
            nav_token: h,
            accepted: ()=>{}
            ,
            blocked: ()=>{}
            ,
            type: "goto"
        })
    }
    async function Oe(n) {
        const l = he(n, !1);
        if (!l)
            throw new Error("Attempted to prefetch a URL that does not belong to this app");
        return i = {
            id: l.id,
            promise: Te(l)
        },
        i.promise
    }
    async function Ie(n, l, u, o, s={}, p) {
        var E, v;
        Se = s;
        let h = n && await Te(n);
        if (h || (h = await Ve(l, null, Z(new Error(`Not found: ${l.pathname}`), {
            url: l,
            params: {},
            routeId: null
        }), 404)),
        l = (n == null ? void 0 : n.url) || l,
        Se !== s)
            return !1;
        if (h.type === "redirect")
            if (u.length > 10 || u.includes(l.pathname))
                h = await re({
                    status: 500,
                    error: Z(new Error("Redirect loop"), {
                        url: l,
                        params: {},
                        routeId: null
                    }),
                    url: l,
                    routeId: null
                });
            else
                return ue(new URL(h.location,l).href, {}, [...u, l.pathname], s),
                !1;
        else
            ((v = (E = h.props) == null ? void 0 : E.page) == null ? void 0 : v.status) >= 400 && await z.updated.check() && await ne(l);
        if (c.length = 0,
        P = !1,
        y = !0,
        o && o.details) {
            const {details: w} = o
              , b = w.replaceState ? 0 : 1;
            w.state[x] = V += b,
            history[w.replaceState ? "replaceState" : "pushState"](w.state, "", l)
        }
        if (i = null,
        _) {
            a = h.state,
            h.props.page && (h.props.page.url = l);
            const w = ie();
            R.$set(h.props),
            w()
        } else
            $e(h);
        if (o) {
            const {scroll: w, keepfocus: b} = o;
            if (!b) {
                const L = document.body
                  , O = L.getAttribute("tabindex");
                L.tabIndex = -1,
                L.focus({
                    preventScroll: !0
                }),
                setTimeout(()=>{
                    var I;
                    (I = getSelection()) == null || I.removeAllRanges()
                }
                ),
                O !== null ? L.setAttribute("tabindex", O) : L.removeAttribute("tabindex")
            }
            if (await Ce(),
            m) {
                const L = l.hash && document.getElementById(l.hash.slice(1));
                w ? scrollTo(w.x, w.y) : L ? L.scrollIntoView() : scrollTo(0, 0)
            }
        } else
            await Ce();
        m = !0,
        h.props.page && (j = h.props.page),
        p && p(),
        y = !1
    }
    function $e(n) {
        var s, p;
        a = n.state;
        const l = document.querySelector("style[data-sveltekit]");
        l && l.remove(),
        j = n.props.page;
        const u = ie();
        R = new Ot({
            target: r,
            props: {
                ...n.props,
                stores: z
            },
            hydrate: !0
        }),
        u();
        const o = {
            from: null,
            to: oe("to", {
                params: a.params,
                routeId: (p = (s = a.route) == null ? void 0 : s.id) != null ? p : null,
                url: new URL(location.href)
            }),
            type: "load"
        };
        d.after_navigate.forEach(h=>h(o)),
        _ = !0
    }
    async function Y({url: n, params: l, branch: u, status: o, error: s, route: p, form: h}) {
        var O;
        const E = u.filter(Boolean)
          , v = {
            type: "loaded",
            state: {
                url: n,
                params: l,
                branch: u,
                error: s,
                route: p
            },
            props: {
                components: E.map(I=>I.node.component)
            }
        };
        h !== void 0 && (v.props.form = h);
        let w = {}
          , b = !j;
        for (let I = 0; I < E.length; I += 1) {
            const T = E[I];
            w = {
                ...w,
                ...T.data
            },
            (b || !a.branch.some(D=>D === T)) && (v.props[`data_ ${I}`] = w,
            b = b || Object.keys((O = T.data) != null ? O : {}).length > 0)
        }
        if (b || (b = Object.keys(j.data).length !== Object.keys(w).length),
        !a.url || n.href !== a.url.href || a.error !== s || h !== void 0 || b) {
            v.props.page = {
                error: s,
                params: l,
                routeId: p && p.id,
                status: o,
                url: n,
                form: h,
                data: b ? w : j.data
            };
            const I = (T,D)=>{
                Object.defineProperty(v.props.page, T, {
                    get: ()=>{
                        throw new Error(`$page.${T} has been replaced by $page.url.${D}`)
                    }
                })
            }
            ;
            I("origin", "origin"),
            I("path", "pathname"),
            I("query", "searchParams")
        }
        return v
    }
    async function de({loader: n, parent: l, url: u, params: o, routeId: s, server_data_node: p}) {
        var w, b, L, O, I;
        let h = null;
        const E = {
            dependencies: new Set,
            params: new Set,
            parent: !1,
            url: !1
        }
          , v = await n();
        if ((w = v.shared) != null && w.load) {
            let T = function(...S) {
                for (const g of S) {
                    const {href: k} = new URL(g,u);
                    E.dependencies.add(k)
                }
            };
            const D = {
                routeId: s,
                params: new Proxy(o,{
                    get: (S,g)=>(E.params.add(g),
                    S[g])
                }),
                data: (b = p == null ? void 0 : p.data) != null ? b : null,
                url: pt(u, ()=>{
                    E.url = !0
                }
                ),
                async fetch(S, g) {
                    let k;
                    S instanceof Request ? (k = S.url,
                    g = {
                        body: S.method === "GET" || S.method === "HEAD" ? void 0 : await S.blob(),
                        cache: S.cache,
                        credentials: S.credentials,
                        headers: S.headers,
                        integrity: S.integrity,
                        keepalive: S.keepalive,
                        method: S.method,
                        mode: S.mode,
                        redirect: S.redirect,
                        referrer: S.referrer,
                        referrerPolicy: S.referrerPolicy,
                        signal: S.signal,
                        ...g
                    }) : k = S;
                    const A = new URL(k,u).href;
                    return T(A),
                    _ ? gt(A, g) : _t(k, A, g)
                },
                setHeaders: ()=>{}
                ,
                depends: T,
                parent() {
                    return E.parent = !0,
                    l()
                }
            };
            Object.defineProperties(D, {
                props: {
                    get() {
                        throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")
                    },
                    enumerable: !1
                },
                session: {
                    get() {
                        throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")
                    },
                    enumerable: !1
                },
                stuff: {
                    get() {
                        throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")
                    },
                    enumerable: !1
                }
            }),
            h = (L = await v.shared.load.call(null, D)) != null ? L : null,
            h = h ? await Ut(h) : null
        }
        return {
            node: v,
            loader: n,
            server: p,
            shared: (O = v.shared) != null && O.load ? {
                type: "data",
                data: h,
                uses: E
            } : null,
            data: (I = h != null ? h : p == null ? void 0 : p.data) != null ? I : null
        }
    }
    function Ae(n, l, u, o) {
        if (P)
            return !0;
        if (!u)
            return !1;
        if (u.parent && l || u.url && n)
            return !0;
        for (const s of u.params)
            if (o[s] !== a.params[s])
                return !0;
        for (const s of u.dependencies)
            if (c.some(p=>p(new URL(s))))
                return !0;
        return !1
    }
    function pe(n, l) {
        var u, o;
        return (n == null ? void 0 : n.type) === "data" ? {
            type: "data",
            data: n.data,
            uses: {
                dependencies: new Set((u = n.uses.dependencies) != null ? u : []),
                params: new Set((o = n.uses.params) != null ? o : []),
                parent: !!n.uses.parent,
                url: !!n.uses.url
            }
        } : (n == null ? void 0 : n.type) === "skip" && l != null ? l : null
    }
    async function Te({id: n, invalidating: l, url: u, params: o, route: s}) {
        var S;
        if ((i == null ? void 0 : i.id) === n)
            return i.promise;
        const {errors: p, layouts: h, leaf: E} = s
          , v = [...h, E];
        p.forEach(g=>g == null ? void 0 : g().catch(()=>{}
        )),
        v.forEach(g=>g == null ? void 0 : g[1]().catch(()=>{}
        ));
        let w = null;
        const b = a.url ? n !== a.url.pathname + a.url.search : !1
          , L = v.reduce((g,k,A)=>{
            var Q;
            const $ = a.branch[A]
              , W = !!(k != null && k[0]) && (($ == null ? void 0 : $.loader) !== k[1] || Ae(b, g.some(Boolean), (Q = $.server) == null ? void 0 : Q.uses, o));
            return g.push(W),
            g
        }
        , []);
        if (L.some(Boolean)) {
            try {
                w = await Ge(u, L)
            } catch (g) {
                return re({
                    status: 500,
                    error: Z(g, {
                        url: u,
                        params: o,
                        routeId: s.id
                    }),
                    url: u,
                    routeId: s.id
                })
            }
            if (w.type === "redirect")
                return w
        }
        const O = w == null ? void 0 : w.nodes;
        let I = !1;
        const T = v.map(async(g,k)=>{
            var Q;
            if (!g)
                return;
            const A = a.branch[k]
              , $ = O == null ? void 0 : O[k];
            if ((!$ || $.type === "skip") && g[1] === (A == null ? void 0 : A.loader) && !Ae(b, I, (Q = A.shared) == null ? void 0 : Q.uses, o))
                return A;
            if (I = !0,
            ($ == null ? void 0 : $.type) === "error")
                throw $;
            return de({
                loader: g[1],
                url: u,
                params: o,
                routeId: s.id,
                parent: async()=>{
                    var qe;
                    const Ne = {};
                    for (let _e = 0; _e < k; _e += 1)
                        Object.assign(Ne, (qe = await T[_e]) == null ? void 0 : qe.data);
                    return Ne
                }
                ,
                server_data_node: pe($ === void 0 && g[0] ? {
                    type: "skip"
                } : $ != null ? $ : null, A == null ? void 0 : A.server)
            })
        }
        );
        for (const g of T)
            g.catch(()=>{}
            );
        const D = [];
        for (let g = 0; g < v.length; g += 1)
            if (v[g])
                try {
                    D.push(await T[g])
                } catch (k) {
                    if (k instanceof ze)
                        return {
                            type: "redirect",
                            location: k.location
                        };
                    let A = 500, $;
                    O != null && O.includes(k) ? (A = (S = k.status) != null ? S : A,
                    $ = k.error) : k instanceof ve ? (A = k.status,
                    $ = k.body) : $ = Z(k, {
                        params: o,
                        url: u,
                        routeId: s.id
                    });
                    const W = await De(g, D, p);
                    return W ? await Y({
                        url: u,
                        params: o,
                        branch: D.slice(0, W.idx).concat(W.node),
                        status: A,
                        error: $,
                        route: s
                    }) : await Ve(u, s.id, $, A)
                }
            else
                D.push(void 0);
        return await Y({
            url: u,
            params: o,
            branch: D,
            status: 200,
            error: null,
            route: s,
            form: l ? void 0 : null
        })
    }
    async function De(n, l, u) {
        for (; n--; )
            if (u[n]) {
                let o = n;
                for (; !l[o]; )
                    o -= 1;
                try {
                    return {
                        idx: o + 1,
                        node: {
                            node: await u[n](),
                            loader: u[n],
                            data: {},
                            server: null,
                            shared: null
                        }
                    }
                } catch {
                    continue
                }
            }
    }
    async function re({status: n, error: l, url: u, routeId: o}) {
        var w;
        const s = {}
          , p = await Ee();
        let h = null;
        if (p.server)
            try {
                const b = await Ge(u, [!0]);
                if (b.type !== "data" || b.nodes[0] && b.nodes[0].type !== "data")
                    throw 0;
                h = (w = b.nodes[0]) != null ? w : null
            } catch {
                (u.origin !== location.origin || u.pathname !== location.pathname || f) && await ne(u)
            }
        const E = await de({
            loader: Ee,
            url: u,
            params: s,
            routeId: o,
            parent: ()=>Promise.resolve({}),
            server_data_node: pe(h)
        })
          , v = {
            node: await ke(),
            loader: ke,
            shared: null,
            server: null,
            data: null
        };
        return await Y({
            url: u,
            params: s,
            branch: [E, v],
            status: n,
            error: l,
            route: null
        })
    }
    function he(n, l) {
        if (Ue(n))
            return;
        const u = decodeURI(n.pathname.slice(e.length) || "/");
        for (const o of ae) {
            const s = o.exec(u);
            if (s) {
                const p = new URL(n.origin + ft(n.pathname, t) + n.search + n.hash);
                return {
                    id: p.pathname + p.search,
                    invalidating: l,
                    route: o,
                    params: ut(s),
                    url: p
                }
            }
        }
    }
    function Ue(n) {
        return n.origin !== location.origin || !n.pathname.startsWith(e)
    }
    async function me({url: n, scroll: l, keepfocus: u, redirect_chain: o, details: s, type: p, delta: h, nav_token: E, accepted: v, blocked: w}) {
        var T, D, S, g;
        let b = !1;
        const L = he(n, !1)
          , O = {
            from: oe("from", {
                params: a.params,
                routeId: (D = (T = a.route) == null ? void 0 : T.id) != null ? D : null,
                url: a.url
            }),
            to: oe("to", {
                params: (S = L == null ? void 0 : L.params) != null ? S : null,
                routeId: (g = L == null ? void 0 : L.route.id) != null ? g : null,
                url: n
            }),
            type: p
        };
        h !== void 0 && (O.delta = h);
        const I = {
            ...O,
            cancel: ()=>{
                b = !0
            }
        };
        if (d.before_navigate.forEach(k=>k(I)),
        b) {
            w();
            return
        }
        we(V),
        v(),
        _ && z.navigating.set(O),
        await Ie(L, n, o, {
            scroll: l,
            keepfocus: u,
            details: s
        }, E, ()=>{
            d.after_navigate.forEach(k=>k(O)),
            z.navigating.set(null)
        }
        )
    }
    async function Ve(n, l, u, o) {
        return n.origin === location.origin && n.pathname === location.pathname && !f ? await re({
            status: o,
            error: u,
            url: n,
            routeId: l
        }) : await ne(n)
    }
    function ne(n) {
        return location.href = n.href,
        new Promise(()=>{}
        )
    }
    return {
        after_navigate: n=>{
            ye(()=>(d.after_navigate.push(n),
            ()=>{
                const l = d.after_navigate.indexOf(n);
                d.after_navigate.splice(l, 1)
            }
            ))
        }
        ,
        before_navigate: n=>{
            ye(()=>(d.before_navigate.push(n),
            ()=>{
                const l = d.before_navigate.indexOf(n);
                d.before_navigate.splice(l, 1)
            }
            ))
        }
        ,
        disable_scroll_handling: ()=>{
            (y || !_) && (m = !1)
        }
        ,
        goto: (n,l={})=>ue(n, l, []),
        invalidate: n=>{
            if (n === void 0)
                throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");
            if (typeof n == "function")
                c.push(n);
            else {
                const {href: l} = new URL(n,location.href);
                c.push(u=>u.href === l)
            }
            return Pe()
        }
        ,
        invalidateAll: ()=>(P = !0,
        Pe()),
        prefetch: async n=>{
            const l = new URL(n,xe(document));
            await Oe(l)
        }
        ,
        prefetch_routes: async n=>{
            const u = (n ? ae.filter(o=>n.some(s=>o.exec(s))) : ae).map(o=>Promise.all([...o.layouts, o.leaf].map(s=>s == null ? void 0 : s[1]())));
            await Promise.all(u)
        }
        ,
        apply_action: async n=>{
            if (n.type === "error") {
                const l = new URL(location.href)
                  , {branch: u, route: o} = a;
                if (!o)
                    return;
                const s = await De(a.branch.length, u, o.errors);
                if (s) {
                    const p = await Y({
                        url: l,
                        params: a.params,
                        branch: u.slice(0, s.idx).concat(s.node),
                        status: 500,
                        error: n.error,
                        route: o
                    });
                    a = p.state;
                    const h = ie();
                    R.$set(p.props),
                    h()
                }
            } else if (n.type === "redirect")
                ue(n.location, {}, []);
            else {
                const l = {
                    form: n.data,
                    page: {
                        ...j,
                        form: n.data,
                        status: n.status
                    }
                }
                  , u = ie();
                R.$set(l),
                u()
            }
        }
        ,
        _start_router: ()=>{
            history.scrollRestoration = "manual",
            addEventListener("beforeunload", o=>{
                var h, E;
                let s = !1;
                const p = {
                    from: oe("from", {
                        params: a.params,
                        routeId: (E = (h = a.route) == null ? void 0 : h.id) != null ? E : null,
                        url: a.url
                    }),
                    to: null,
                    type: "unload",
                    cancel: ()=>s = !0
                };
                d.before_navigate.forEach(v=>v(p)),
                s ? (o.preventDefault(),
                o.returnValue = "") : history.scrollRestoration = "auto"
            }
            ),
            addEventListener("visibilitychange", ()=>{
                if (document.visibilityState === "hidden") {
                    we(V);
                    try {
                        sessionStorage[We] = JSON.stringify(ee)
                    } catch {}
                }
            }
            );
            const n = o=>{
                const {url: s, options: p} = Be(o);
                if (s && p.prefetch) {
                    if (Ue(s))
                        return;
                    Oe(s)
                }
            }
            ;
            let l;
            const u = o=>{
                clearTimeout(l),
                l = setTimeout(()=>{
                    var s;
                    (s = o.target) == null || s.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{
                        bubbles: !0
                    }))
                }
                , 20)
            }
            ;
            addEventListener("touchstart", n),
            addEventListener("mousemove", u),
            addEventListener("sveltekit:trigger_prefetch", n),
            addEventListener("click", o=>{
                if (o.button || o.which !== 1 || o.metaKey || o.ctrlKey || o.shiftKey || o.altKey || o.defaultPrevented)
                    return;
                const {a: s, url: p, options: h} = Be(o);
                if (!s || !p)
                    return;
                const E = s instanceof SVGAElement;
                if (!E && !(p.protocol === "https:" || p.protocol === "http:"))
                    return;
                const v = (s.getAttribute("rel") || "").split(/\s+/);
                if (s.hasAttribute("download") || v.includes("external") || h.reload || (E ? s.target.baseVal : s.target))
                    return;
                const [w,b] = p.href.split("#");
                if (b !== void 0 && w === location.href.split("#")[0]) {
                    q = !0,
                    we(V),
                    a.url = p,
                    z.page.set({
                        ...j,
                        url: p
                    }),
                    z.page.notify();
                    return
                }
                me({
                    url: p,
                    scroll: h.noscroll ? be() : null,
                    keepfocus: !1,
                    redirect_chain: [],
                    details: {
                        state: {},
                        replaceState: p.href === location.href
                    },
                    accepted: ()=>o.preventDefault(),
                    blocked: ()=>o.preventDefault(),
                    type: "link"
                })
            }
            ),
            addEventListener("popstate", o=>{
                if (o.state) {
                    if (o.state[x] === V)
                        return;
                    const s = o.state[x] - V;
                    me({
                        url: new URL(location.href),
                        scroll: ee[o.state[x]],
                        keepfocus: !1,
                        redirect_chain: [],
                        details: null,
                        accepted: ()=>{
                            V = o.state[x]
                        }
                        ,
                        blocked: ()=>{
                            history.go(-s)
                        }
                        ,
                        type: "popstate",
                        delta: s
                    })
                }
            }
            ),
            addEventListener("hashchange", ()=>{
                q && (q = !1,
                history.replaceState({
                    ...history.state,
                    [x]: ++V
                }, "", location.href))
            }
            );
            for (const o of document.querySelectorAll("link"))
                o.rel === "icon" && (o.href = o.href);
            addEventListener("pageshow", o=>{
                o.persisted && z.navigating.set(null)
            }
            )
        }
        ,
        _hydrate: async({status: n, error: l, node_ids: u, params: o, routeId: s, data: p, form: h})=>{
            var w;
            f = !0;
            const E = new URL(location.href);
            let v;
            try {
                const b = u.map(async(L,O)=>{
                    const I = p[O];
                    return de({
                        loader: fe[L],
                        url: E,
                        params: o,
                        routeId: s,
                        parent: async()=>{
                            const T = {};
                            for (let D = 0; D < O; D += 1)
                                Object.assign(T, (await b[D]).data);
                            return T
                        }
                        ,
                        server_data_node: pe(I)
                    })
                }
                );
                v = await Y({
                    url: E,
                    params: o,
                    branch: await Promise.all(b),
                    status: n,
                    error: l,
                    form: h,
                    route: (w = ae.find(L=>L.id === s)) != null ? w : null
                })
            } catch (b) {
                if (b instanceof ze) {
                    await ne(new URL(b.location,location.href));
                    return
                }
                v = await re({
                    status: b instanceof ve ? b.status : 500,
                    error: Z(b, {
                        url: E,
                        params: o,
                        routeId: s
                    }),
                    url: E,
                    routeId: s
                })
            }
            $e(v)
        }
    }
}
let jt = 1;
async function Ge(r, e) {
    const t = new URL(r);
    t.pathname = r.pathname.replace(/\/$/, "") + Dt,
    t.searchParams.set("__invalid", e.map(i=>i ? "y" : "n").join("")),
    t.searchParams.set("__id", String(jt++)),
    await U(()=>import(t.href), [], import.meta.url);
    const c = window.__sveltekit_data;
    return delete window.__sveltekit_data,
    c
}
function Z(r, e) {
    var t;
    return r instanceof ve ? r.body : (t = Tt.handleError({
        error: r,
        event: e
    })) != null ? t : {
        message: e.routeId != null ? "Internal Error" : "Not Found"
    }
}
const Nt = ["hash", "href", "host", "hostname", "origin", "pathname", "port", "protocol", "search", "searchParams", "toString", "toJSON"];
function oe(r, e) {
    for (const t of Nt)
        Object.defineProperty(e, t, {
            get() {
                throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)
            },
            enumerable: !1
        });
    return e
}
function ie() {
    return ()=>{}
}
async function xt({env: r, hydrate: e, paths: t, target: c, trailing_slash: i}) {
    it(t);
    const d = Vt({
        target: c,
        base: t.base,
        trailing_slash: i
    });
    st({
        client: d
    }),
    e ? await d._hydrate(e) : d.goto(location.href, {
        replaceState: !0
    }),
    d._start_router()
}
export {xt as start};
