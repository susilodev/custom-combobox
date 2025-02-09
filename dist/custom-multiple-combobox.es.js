import ar, { useState as ke, useRef as Ye, useMemo as lr, useEffect as ir } from "react";
import { useMultipleSelection as ve, useCombobox as pe, useSelect as cr } from "downshift";
import { CircleX as dr, X as Be, ChevronDown as ur } from "lucide-react";
var Ce = { exports: {} }, we = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function fr() {
  if (Fe) return we;
  Fe = 1;
  var r = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function o(t, c, f) {
    var d = null;
    if (f !== void 0 && (d = "" + f), c.key !== void 0 && (d = "" + c.key), "key" in c) {
      f = {};
      for (var g in c)
        g !== "key" && (f[g] = c[g]);
    } else f = c;
    return c = f.ref, {
      $$typeof: r,
      type: t,
      key: d,
      ref: c !== void 0 ? c : null,
      props: f
    };
  }
  return we.Fragment = n, we.jsx = o, we.jsxs = o, we;
}
var ye = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue;
function pr() {
  return Ue || (Ue = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === b ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case R:
          return "Fragment";
        case Y:
          return "Portal";
        case re:
          return "Profiler";
        case H:
          return "StrictMode";
        case J:
          return "Suspense";
        case L:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case te:
            return (e.displayName || "Context") + ".Provider";
          case q:
            return (e._context.displayName || "Context") + ".Consumer";
          case B:
            var l = e.render;
            return e = e.displayName, e || (e = l.displayName || l.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case x:
            return l = e.displayName || null, l !== null ? l : r(e.type) || "Memo";
          case _:
            l = e._payload, e = e._init;
            try {
              return r(e(l));
            } catch {
            }
        }
      return null;
    }
    function n(e) {
      return "" + e;
    }
    function o(e) {
      try {
        n(e);
        var l = !1;
      } catch {
        l = !0;
      }
      if (l) {
        l = console;
        var i = l.error, v = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i.call(
          l,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          v
        ), n(e);
      }
    }
    function t() {
    }
    function c() {
      if (Z === 0) {
        he = console.log, oe = console.info, ne = console.warn, ue = console.error, se = console.group, Oe = console.groupCollapsed, Ie = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: t,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      Z++;
    }
    function f() {
      if (Z--, Z === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: T({}, e, { value: he }),
          info: T({}, e, { value: oe }),
          warn: T({}, e, { value: ne }),
          error: T({}, e, { value: ue }),
          group: T({}, e, { value: se }),
          groupCollapsed: T({}, e, { value: Oe }),
          groupEnd: T({}, e, { value: Ie })
        });
      }
      0 > Z && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function d(e) {
      if (Re === void 0)
        try {
          throw Error();
        } catch (i) {
          var l = i.stack.trim().match(/\n( *(at )?)/);
          Re = l && l[1] || "", Ge = -1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < i.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Re + e + Ge;
    }
    function g(e, l) {
      if (!e || Se) return "";
      var i = je.get(e);
      if (i !== void 0) return i;
      Se = !0, i = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var v = null;
      v = w.H, w.H = null, c();
      try {
        var P = {
          DetermineComponentFrameRoot: function() {
            try {
              if (l) {
                var D = function() {
                  throw Error();
                };
                if (Object.defineProperty(D.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(D, []);
                  } catch (K) {
                    var Ee = K;
                  }
                  Reflect.construct(e, [], D);
                } else {
                  try {
                    D.call();
                  } catch (K) {
                    Ee = K;
                  }
                  e.call(D.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (K) {
                  Ee = K;
                }
                (D = e()) && typeof D.catch == "function" && D.catch(function() {
                });
              }
            } catch (K) {
              if (K && Ee && typeof K.stack == "string")
                return [K.stack, Ee.stack];
            }
            return [null, null];
          }
        };
        P.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var y = Object.getOwnPropertyDescriptor(
          P.DetermineComponentFrameRoot,
          "name"
        );
        y && y.configurable && Object.defineProperty(
          P.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var m = P.DetermineComponentFrameRoot(), X = m[0], fe = m[1];
        if (X && fe) {
          var z = X.split(`
`), ae = fe.split(`
`);
          for (m = y = 0; y < z.length && !z[y].includes(
            "DetermineComponentFrameRoot"
          ); )
            y++;
          for (; m < ae.length && !ae[m].includes(
            "DetermineComponentFrameRoot"
          ); )
            m++;
          if (y === z.length || m === ae.length)
            for (y = z.length - 1, m = ae.length - 1; 1 <= y && 0 <= m && z[y] !== ae[m]; )
              m--;
          for (; 1 <= y && 0 <= m; y--, m--)
            if (z[y] !== ae[m]) {
              if (y !== 1 || m !== 1)
                do
                  if (y--, m--, 0 > m || z[y] !== ae[m]) {
                    var xe = `
` + z[y].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && xe.includes("<anonymous>") && (xe = xe.replace("<anonymous>", e.displayName)), typeof e == "function" && je.set(e, xe), xe;
                  }
                while (1 <= y && 0 <= m);
              break;
            }
        }
      } finally {
        Se = !1, w.H = v, f(), Error.prepareStackTrace = i;
      }
      return z = (z = e ? e.displayName || e.name : "") ? d(z) : "", typeof e == "function" && je.set(e, z), z;
    }
    function u(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var l = e.prototype;
        return g(
          e,
          !(!l || !l.isReactComponent)
        );
      }
      if (typeof e == "string") return d(e);
      switch (e) {
        case J:
          return d("Suspense");
        case L:
          return d("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case B:
            return e = g(e.render, !1), e;
          case x:
            return u(e.type);
          case _:
            l = e._payload, e = e._init;
            try {
              return u(e(l));
            } catch {
            }
        }
      return "";
    }
    function k() {
      var e = w.A;
      return e === null ? null : e.getOwner();
    }
    function C(e) {
      if (A.call(e, "key")) {
        var l = Object.getOwnPropertyDescriptor(e, "key").get;
        if (l && l.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function I(e, l) {
      function i() {
        $e || ($e = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          l
        ));
      }
      i.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: i,
        configurable: !0
      });
    }
    function V() {
      var e = r(this.type);
      return Le[e] || (Le[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function W(e, l, i, v, P, y) {
      return i = y.ref, e = {
        $$typeof: M,
        type: e,
        key: l,
        props: y,
        _owner: P
      }, (i !== void 0 ? i : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: V
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function S(e, l, i, v, P, y) {
      if (typeof e == "string" || typeof e == "function" || e === R || e === re || e === H || e === J || e === L || e === O || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === x || e.$$typeof === te || e.$$typeof === q || e.$$typeof === B || e.$$typeof === ce || e.getModuleId !== void 0)) {
        var m = l.children;
        if (m !== void 0)
          if (v)
            if (de(m)) {
              for (v = 0; v < m.length; v++)
                j(m[v], e);
              Object.freeze && Object.freeze(m);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else j(m, e);
      } else
        m = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? v = "null" : de(e) ? v = "array" : e !== void 0 && e.$$typeof === M ? (v = "<" + (r(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          v,
          m
        );
      if (A.call(l, "key")) {
        m = r(e);
        var X = Object.keys(l).filter(function(z) {
          return z !== "key";
        });
        v = 0 < X.length ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}", Ve[m + v] || (X = 0 < X.length ? "{" + X.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          v,
          m,
          X,
          m
        ), Ve[m + v] = !0);
      }
      if (m = null, i !== void 0 && (o(i), m = "" + i), C(l) && (o(l.key), m = "" + l.key), "key" in l) {
        i = {};
        for (var fe in l)
          fe !== "key" && (i[fe] = l[fe]);
      } else i = l;
      return m && I(
        i,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), W(e, m, y, P, k(), i);
    }
    function j(e, l) {
      if (typeof e == "object" && e && e.$$typeof !== sr) {
        if (de(e))
          for (var i = 0; i < e.length; i++) {
            var v = e[i];
            G(v) && $(v, l);
          }
        else if (G(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? i = null : (i = p && e[p] || e["@@iterator"], i = typeof i == "function" ? i : null), typeof i == "function" && i !== e.entries && (i = i.call(e), i !== e))
          for (; !(e = i.next()).done; )
            G(e.value) && $(e.value, l);
      }
    }
    function G(e) {
      return typeof e == "object" && e !== null && e.$$typeof === M;
    }
    function $(e, l) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, l = F(l), !We[l])) {
        We[l] = !0;
        var i = "";
        e && e._owner != null && e._owner !== k() && (i = null, typeof e._owner.tag == "number" ? i = r(e._owner.type) : typeof e._owner.name == "string" && (i = e._owner.name), i = " It was passed a child from " + i + ".");
        var v = w.getCurrentStack;
        w.getCurrentStack = function() {
          var P = u(e.type);
          return v && (P += v() || ""), P;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          l,
          i
        ), w.getCurrentStack = v;
      }
    }
    function F(e) {
      var l = "", i = k();
      return i && (i = r(i.type)) && (l = `

Check the render method of \`` + i + "`."), l || (e = r(e)) && (l = `

Check the top-level render call using <` + e + ">."), l;
    }
    var U = ar, M = Symbol.for("react.transitional.element"), Y = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), H = Symbol.for("react.strict_mode"), re = Symbol.for("react.profiler"), q = Symbol.for("react.consumer"), te = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), p = Symbol.iterator, b = Symbol.for("react.client.reference"), w = U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = Object.prototype.hasOwnProperty, T = Object.assign, ce = Symbol.for("react.client.reference"), de = Array.isArray, Z = 0, he, oe, ne, ue, se, Oe, Ie;
    t.__reactDisabledLog = !0;
    var Re, Ge, Se = !1, je = new (typeof WeakMap == "function" ? WeakMap : Map)(), sr = Symbol.for("react.client.reference"), $e, Le = {}, Ve = {}, We = {};
    ye.Fragment = R, ye.jsx = function(e, l, i, v, P) {
      return S(e, l, i, !1, v, P);
    }, ye.jsxs = function(e, l, i, v, P) {
      return S(e, l, i, !0, v, P);
    };
  }()), ye;
}
var He;
function br() {
  return He || (He = 1, process.env.NODE_ENV === "production" ? Ce.exports = fr() : Ce.exports = pr()), Ce.exports;
}
var E = br();
const ze = "-", gr = (r) => {
  const n = hr(r), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: t
  } = r;
  return {
    getClassGroupId: (d) => {
      const g = d.split(ze);
      return g[0] === "" && g.length !== 1 && g.shift(), Ke(g, n) || mr(d);
    },
    getConflictingClassGroupIds: (d, g) => {
      const u = o[d] || [];
      return g && t[d] ? [...u, ...t[d]] : u;
    }
  };
}, Ke = (r, n) => {
  var d;
  if (r.length === 0)
    return n.classGroupId;
  const o = r[0], t = n.nextPart.get(o), c = t ? Ke(r.slice(1), t) : void 0;
  if (c)
    return c;
  if (n.validators.length === 0)
    return;
  const f = r.join(ze);
  return (d = n.validators.find(({
    validator: g
  }) => g(f))) == null ? void 0 : d.classGroupId;
}, qe = /^\[(.+)\]$/, mr = (r) => {
  if (qe.test(r)) {
    const n = qe.exec(r)[1], o = n == null ? void 0 : n.substring(0, n.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}, hr = (r) => {
  const {
    theme: n,
    classGroups: o
  } = r, t = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const c in o)
    Ne(o[c], t, c, n);
  return t;
}, Ne = (r, n, o, t) => {
  r.forEach((c) => {
    if (typeof c == "string") {
      const f = c === "" ? n : Je(n, c);
      f.classGroupId = o;
      return;
    }
    if (typeof c == "function") {
      if (xr(c)) {
        Ne(c(t), n, o, t);
        return;
      }
      n.validators.push({
        validator: c,
        classGroupId: o
      });
      return;
    }
    Object.entries(c).forEach(([f, d]) => {
      Ne(d, Je(n, f), o, t);
    });
  });
}, Je = (r, n) => {
  let o = r;
  return n.split(ze).forEach((t) => {
    o.nextPart.has(t) || o.nextPart.set(t, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(t);
  }), o;
}, xr = (r) => r.isThemeGetter, vr = (r) => {
  if (r < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let n = 0, o = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  const c = (f, d) => {
    o.set(f, d), n++, n > r && (n = 0, t = o, o = /* @__PURE__ */ new Map());
  };
  return {
    get(f) {
      let d = o.get(f);
      if (d !== void 0)
        return d;
      if ((d = t.get(f)) !== void 0)
        return c(f, d), d;
    },
    set(f, d) {
      o.has(f) ? o.set(f, d) : c(f, d);
    }
  };
}, Pe = "!", _e = ":", wr = _e.length, yr = (r) => {
  const {
    prefix: n,
    experimentalParseClassName: o
  } = r;
  let t = (c) => {
    const f = [];
    let d = 0, g = 0, u = 0, k;
    for (let S = 0; S < c.length; S++) {
      let j = c[S];
      if (d === 0 && g === 0) {
        if (j === _e) {
          f.push(c.slice(u, S)), u = S + wr;
          continue;
        }
        if (j === "/") {
          k = S;
          continue;
        }
      }
      j === "[" ? d++ : j === "]" ? d-- : j === "(" ? g++ : j === ")" && g--;
    }
    const C = f.length === 0 ? c : c.substring(u), I = Er(C), V = I !== C, W = k && k > u ? k - u : void 0;
    return {
      modifiers: f,
      hasImportantModifier: V,
      baseClassName: I,
      maybePostfixModifierPosition: W
    };
  };
  if (n) {
    const c = n + _e, f = t;
    t = (d) => d.startsWith(c) ? f(d.substring(c.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: d,
      maybePostfixModifierPosition: void 0
    };
  }
  if (o) {
    const c = t;
    t = (f) => o({
      className: f,
      parseClassName: c
    });
  }
  return t;
}, Er = (r) => r.endsWith(Pe) ? r.substring(0, r.length - 1) : r.startsWith(Pe) ? r.substring(1) : r, kr = (r) => {
  const n = Object.fromEntries(r.orderSensitiveModifiers.map((t) => [t, !0]));
  return (t) => {
    if (t.length <= 1)
      return t;
    const c = [];
    let f = [];
    return t.forEach((d) => {
      d[0] === "[" || n[d] ? (c.push(...f.sort(), d), f = []) : f.push(d);
    }), c.push(...f.sort()), c;
  };
}, Cr = (r) => ({
  cache: vr(r.cacheSize),
  parseClassName: yr(r),
  sortModifiers: kr(r),
  ...gr(r)
}), Tr = /\s+/, Rr = (r, n) => {
  const {
    parseClassName: o,
    getClassGroupId: t,
    getConflictingClassGroupIds: c,
    sortModifiers: f
  } = n, d = [], g = r.trim().split(Tr);
  let u = "";
  for (let k = g.length - 1; k >= 0; k -= 1) {
    const C = g[k], {
      isExternal: I,
      modifiers: V,
      hasImportantModifier: W,
      baseClassName: S,
      maybePostfixModifierPosition: j
    } = o(C);
    if (I) {
      u = C + (u.length > 0 ? " " + u : u);
      continue;
    }
    let G = !!j, $ = t(G ? S.substring(0, j) : S);
    if (!$) {
      if (!G) {
        u = C + (u.length > 0 ? " " + u : u);
        continue;
      }
      if ($ = t(S), !$) {
        u = C + (u.length > 0 ? " " + u : u);
        continue;
      }
      G = !1;
    }
    const F = f(V).join(":"), U = W ? F + Pe : F, M = U + $;
    if (d.includes(M))
      continue;
    d.push(M);
    const Y = c($, G);
    for (let R = 0; R < Y.length; ++R) {
      const H = Y[R];
      d.push(U + H);
    }
    u = C + (u.length > 0 ? " " + u : u);
  }
  return u;
};
function Sr() {
  let r = 0, n, o, t = "";
  for (; r < arguments.length; )
    (n = arguments[r++]) && (o = Ze(n)) && (t && (t += " "), t += o);
  return t;
}
const Ze = (r) => {
  if (typeof r == "string")
    return r;
  let n, o = "";
  for (let t = 0; t < r.length; t++)
    r[t] && (n = Ze(r[t])) && (o && (o += " "), o += n);
  return o;
};
function jr(r, ...n) {
  let o, t, c, f = d;
  function d(u) {
    const k = n.reduce((C, I) => I(C), r());
    return o = Cr(k), t = o.cache.get, c = o.cache.set, f = g, g(u);
  }
  function g(u) {
    const k = t(u);
    if (k)
      return k;
    const C = Rr(u, o);
    return c(u, C), C;
  }
  return function() {
    return f(Sr.apply(null, arguments));
  };
}
const N = (r) => {
  const n = (o) => o[r] || [];
  return n.isThemeGetter = !0, n;
}, De = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Qe = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Ar = /^\d+\/\d+$/, Nr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Pr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, _r = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, zr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Mr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, be = (r) => Ar.test(r), h = (r) => !!r && !Number.isNaN(Number(r)), le = (r) => !!r && Number.isInteger(Number(r)), Xe = (r) => r.endsWith("%") && h(r.slice(0, -1)), Q = (r) => Nr.test(r), Or = () => !0, Ir = (r) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Pr.test(r) && !_r.test(r)
), Me = () => !1, Gr = (r) => zr.test(r), $r = (r) => Mr.test(r), Lr = (r) => !s(r) && !a(r), Vr = (r) => ge(r, tr, Me), s = (r) => De.test(r), ie = (r) => ge(r, or, Ir), Ae = (r) => ge(r, Zr, h), Wr = (r) => ge(r, er, Me), Yr = (r) => ge(r, rr, $r), Br = (r) => ge(r, Me, Gr), a = (r) => Qe.test(r), Te = (r) => me(r, or), Fr = (r) => me(r, Dr), Ur = (r) => me(r, er), Hr = (r) => me(r, tr), qr = (r) => me(r, rr), Jr = (r) => me(r, Qr, !0), ge = (r, n, o) => {
  const t = De.exec(r);
  return t ? t[1] ? n(t[1]) : o(t[2]) : !1;
}, me = (r, n, o = !1) => {
  const t = Qe.exec(r);
  return t ? t[1] ? n(t[1]) : o : !1;
}, er = (r) => r === "position", Xr = /* @__PURE__ */ new Set(["image", "url"]), rr = (r) => Xr.has(r), Kr = /* @__PURE__ */ new Set(["length", "size", "percentage"]), tr = (r) => Kr.has(r), or = (r) => r === "length", Zr = (r) => r === "number", Dr = (r) => r === "family-name", Qr = (r) => r === "shadow", et = () => {
  const r = N("color"), n = N("font"), o = N("text"), t = N("font-weight"), c = N("tracking"), f = N("leading"), d = N("breakpoint"), g = N("container"), u = N("spacing"), k = N("radius"), C = N("shadow"), I = N("inset-shadow"), V = N("drop-shadow"), W = N("blur"), S = N("perspective"), j = N("aspect"), G = N("ease"), $ = N("animate"), F = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], U = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], M = () => ["auto", "hidden", "clip", "visible", "scroll"], Y = () => ["auto", "contain", "none"], R = () => [be, "px", "full", "auto", a, s, u], H = () => [le, "none", "subgrid", a, s], re = () => ["auto", {
    span: ["full", le, a, s]
  }, a, s], q = () => [le, "auto", a, s], te = () => ["auto", "min", "max", "fr", a, s], B = () => [a, s, u], J = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], L = () => ["start", "end", "center", "stretch"], x = () => [a, s, u], _ = () => ["px", ...x()], O = () => ["px", "auto", ...x()], p = () => [be, "auto", "px", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", a, s, u], b = () => [r, a, s], w = () => [Xe, ie], A = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    k,
    a,
    s
  ], T = () => ["", h, Te, ie], ce = () => ["solid", "dashed", "dotted", "double"], de = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Z = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    W,
    a,
    s
  ], he = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", a, s], oe = () => ["none", h, a, s], ne = () => ["none", h, a, s], ue = () => [h, a, s], se = () => [be, "full", "px", a, s, u];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Q],
      breakpoint: [Q],
      color: [Or],
      container: [Q],
      "drop-shadow": [Q],
      ease: ["in", "out", "in-out"],
      font: [Lr],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Q],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Q],
      shadow: [Q],
      spacing: [h],
      text: [Q],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", be, s, a, j]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [h, s, a, g]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": F()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": F()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...U(), s, a]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: M()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": M()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": M()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: Y()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Y()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Y()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: R()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": R()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": R()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: R()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: R()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: R()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: R()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: R()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: R()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [le, "auto", a, s]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [be, "full", "auto", a, s, g, u]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [h, be, "auto", "initial", "none", s]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", h, a, s]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", h, a, s]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [le, "first", "last", "none", a, s]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": H()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: re()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": q()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": q()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": H()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: re()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": q()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": q()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": te()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": te()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: B()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": B()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": B()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...J(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...L(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...L()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...J()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...L(), "baseline"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...L(), "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": J()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...L(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...L()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: _()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: _()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: _()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: _()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: _()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: _()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: _()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: _()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: _()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: O()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: O()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: O()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: O()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: O()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: O()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: O()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: O()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: O()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": x()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": x()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: p()
      }],
      w: [{
        w: [g, "screen", ...p()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          g,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...p()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          g,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [d]
          },
          ...p()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...p()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...p()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...p()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", o, Te, ie]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [t, a, Ae]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Xe, s]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Fr, s, n]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [c, a, s]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [h, "none", a, Ae]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          a,
          s,
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          f,
          u
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", a, s]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", a, s]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: b()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: b()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...ce(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [h, "from-font", "auto", a, ie]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: b()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [h, "auto", a, s]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: ["px", ...x()]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", a, s]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", a, s]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...U(), Ur, Wr]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "space", "round"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Hr, Vr]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, le, a, s],
          radial: ["", a, s],
          conic: [le, a, s]
        }, qr, Yr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: b()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: w()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: w()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: w()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: b()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: b()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: b()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: A()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": A()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": A()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": A()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": A()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": A()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": A()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": A()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": A()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": A()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": A()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": A()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": A()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": A()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": A()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: T()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": T()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": T()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": T()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": T()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": T()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": T()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": T()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": T()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": T()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": T()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ce(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...ce(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: b()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": b()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": b()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": b()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": b()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": b()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": b()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": b()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": b()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: b()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...ce(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [h, a, s]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", h, Te, ie]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [r]
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          C,
          Jr,
          Br
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: b()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", a, s, I]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": b()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: T()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: b()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [h, ie]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": b()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": T()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": b()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [h, a, s]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...de(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": de()
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          a,
          s
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Z()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [h, a, s]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [h, a, s]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          V,
          a,
          s
        ]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", h, a, s]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [h, a, s]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", h, a, s]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [h, a, s]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", h, a, s]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          a,
          s
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Z()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [h, a, s]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [h, a, s]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", h, a, s]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [h, a, s]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", h, a, s]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [h, a, s]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [h, a, s]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", h, a, s]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": x()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": x()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": x()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", a, s]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [h, "initial", a, s]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", G, a, s]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [h, a, s]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", $, a, s]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [S, a, s]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": he()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: oe()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": oe()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": oe()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": oe()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ne()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ne()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ne()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ne()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: ue()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ue()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ue()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [a, s, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: he()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: se()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": se()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": se()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": se()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: b()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: b()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", a, s]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": x()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": x()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": x()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": x()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": x()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": x()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": x()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": x()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": x()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": x()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": x()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": x()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": x()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": x()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": x()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": x()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": x()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": x()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", a, s]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...b()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [h, Te, ie, Ae]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...b()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["before", "after", "placeholder", "file", "marker", "selection", "first-line", "first-letter", "backdrop", "*", "**"]
  };
}, rt = /* @__PURE__ */ jr(et);
function nr(r) {
  var n, o, t = "";
  if (typeof r == "string" || typeof r == "number") t += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var c = r.length;
    for (n = 0; n < c; n++) r[n] && (o = nr(r[n])) && (t && (t += " "), t += o);
  } else for (o in r) r[o] && (t && (t += " "), t += o);
  return t;
}
function tt() {
  for (var r, n, o = 0, t = "", c = arguments.length; o < c; o++) (r = arguments[o]) && (n = nr(r)) && (t && (t += " "), t += n);
  return t;
}
function ee(...r) {
  return rt(tt(...r));
}
const ot = (r, n) => {
  if (!n) return r;
  const o = new RegExp(`(${n})`, "gi");
  return r.replace(o, '<mark class="bg-green-300">$1</mark>');
};
function lt({
  options: r,
  onSelect: n,
  multiple: o = !0,
  withSearch: t = !0,
  ...c
}) {
  const [f, d] = ke(""), [g, u] = ke([]), [k, C] = ke(!1), [I, V] = ke(!1), W = Ye(null), S = Ye(null), j = lr(
    () => r.filter(
      (p) => p.label.toLowerCase().includes(f.toLowerCase())
    ),
    [f, r]
  ), { getSelectedItemProps: G, removeSelectedItem: $, getDropdownProps: F } = ve({
    selectedItems: g,
    onStateChange({ selectedItems: p, type: b }) {
      switch (b) {
        case ve.stateChangeTypes.SelectedItemKeyDownBackspace:
        case ve.stateChangeTypes.SelectedItemKeyDownDelete:
        case ve.stateChangeTypes.DropdownKeyDownBackspace:
        case ve.stateChangeTypes.FunctionRemoveSelectedItem:
          u(p || []), n(p || []);
          break;
      }
    }
  }), U = () => {
    u([]), n([]);
  }, {
    isOpen: M,
    getToggleButtonProps: Y,
    getMenuProps: R,
    getInputProps: H,
    highlightedIndex: re,
    getItemProps: q
  } = pe({
    items: j,
    itemToString: (p) => p ? p.label : "",
    inputValue: f,
    defaultHighlightedIndex: 0,
    stateReducer: (p, { changes: b, type: w }) => {
      switch (w) {
        case pe.stateChangeTypes.InputKeyDownEnter:
        case pe.stateChangeTypes.ItemClick:
          return {
            ...b,
            isOpen: !0,
            highlightedIndex: 0
          };
        default:
          return b;
      }
    },
    onStateChange: ({
      inputValue: p,
      type: b,
      selectedItem: w
    }) => {
      switch (b) {
        case pe.stateChangeTypes.InputKeyDownEnter:
        case pe.stateChangeTypes.ItemClick:
          w && (o ? (u([...g, w]), n([...g, w])) : (u([w]), n([w])), d(""));
          break;
        case pe.stateChangeTypes.InputChange:
          d(p || "");
          break;
      }
    }
  }), {
    isOpen: te,
    getToggleButtonProps: B,
    getMenuProps: J,
    highlightedIndex: L,
    getItemProps: x
  } = cr({
    items: r,
    onSelectedItemChange: ({ selectedItem: p }) => {
      p && (o ? (u([...g, p]), n([...g, p])) : (u([p]), n([p])));
    }
  });
  ir(() => {
    const p = (b) => {
      W.current && !W.current.contains(b.target) && (C(!1), V(!1));
    };
    return document.addEventListener("mousedown", p), () => {
      document.removeEventListener("mousedown", p);
    };
  }, []);
  const _ = () => {
    V(!0);
  }, O = () => {
    V(!1);
  };
  return /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsx(
    "div",
    {
      className: "w-full flex flex-col bg-white h-auto z-[1002] relativea ",
      ref: W,
      ...c,
      children: /* @__PURE__ */ E.jsxs(
        "div",
        {
          className: "relative w-full cursor-pointer",
          onClick: () => {
            t && (C(!0), setTimeout(() => {
              var p;
              (p = S.current) == null || p.focus();
            }, 0));
          },
          children: [
            /* @__PURE__ */ E.jsxs(
              "div",
              {
                ...t ? Y() : B(),
                "aria-label": "toggle menu",
                className: "flex items-center border border-slate-300 bg-white rounded-md px-3 py-2 focus-within:shadow-sm focus-within:ring-slate-300 h-10 debug-red",
                children: [
                  /* @__PURE__ */ E.jsx("div", { className: "flex-1 overflow-x-auto scrollbar-hide", children: /* @__PURE__ */ E.jsx("div", { className: "flex gap-1 whitespace-nowrap", children: g.map((p, b) => /* @__PURE__ */ E.jsxs(
                    "span",
                    {
                      className: "bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-xs flex items-center gap-1 flex-shrink-0",
                      ...G({
                        selectedItem: p,
                        index: b
                      }),
                      children: [
                        p.label,
                        /* @__PURE__ */ E.jsx(
                          dr,
                          {
                            onClick: (w) => {
                              w.stopPropagation(), $(p);
                            },
                            className: ee(
                              "w-3 h-3 cursor-pointer text-gray-500 hover:text-gray-700",
                              !o && "hidden"
                            )
                          }
                        )
                      ]
                    },
                    `selected-item-${b}`
                  )) }) }),
                  /* @__PURE__ */ E.jsx(
                    Be,
                    {
                      onClick: (p) => {
                        p.stopPropagation(), U();
                      },
                      className: ee(
                        "h-4 w-4 bg-gray-400 p-1 rounded-full cursor-pointer text-slate-100 hover:text-white hover:bg-gray-600",
                        (t || g.length === 0) && "hidden"
                      )
                    }
                  ),
                  /* @__PURE__ */ E.jsx(
                    ur,
                    {
                      className: ee(
                        "ml-2 cursor-pointer text-xs outline-none focus:outline-none",
                        I ? "text-slate-500" : "text-slate-300"
                      )
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ E.jsx("div", { ...B(), children: /* @__PURE__ */ E.jsx(
              "ul",
              {
                ...J(),
                className: ee(
                  "absolute bg-white z-max left-0 w-full border border-gray-300 pt-1 rounded-bl-md rounded-br-md overflow-hidden",
                  !te || t ? "hidden" : ""
                ),
                children: r.map((p, b) => /* @__PURE__ */ E.jsx(
                  "li",
                  {
                    ...x({ item: p, index: b }),
                    className: ee(
                      "px-4 py-2 cursor-pointer hover:bg-green-100/70 transition",
                      L === b && "bg-green-50/80",
                      g.some(
                        (w) => w.value === p.value
                      ) && "font-semibold text-gray-900"
                    ),
                    children: p.label
                  },
                  p.value
                ))
              }
            ) }),
            /* @__PURE__ */ E.jsxs(
              "div",
              {
                className: ee(
                  "relative w-full mt-2 z-max",
                  !t || !k ? "hidden" : ""
                ),
                children: [
                  /* @__PURE__ */ E.jsxs(
                    "div",
                    {
                      onFocus: _,
                      onBlur: () => {
                        O(), C(!1);
                      },
                      className: "flex items-center border border-slate-300 bg-white rounded-md px-3 py-2 focus-within:shadow-sm focus-within:ring-slate-300",
                      children: [
                        /* @__PURE__ */ E.jsx(
                          "input",
                          {
                            ...H(
                              F({
                                placeholder: "Search...",
                                className: "flex-1 bg-transparent outline-none min-w-[100px]",
                                ref: S,
                                preventKeyAction: M
                              })
                            )
                          }
                        ),
                        /* @__PURE__ */ E.jsx(
                          Be,
                          {
                            onClick: () => d(""),
                            className: "h-4 w-4 bg-gray-400 p-1 rounded-full cursor-pointer text-slate-100 hover:text-white hover:bg-gray-600"
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ E.jsx("div", { ...Y(), children: /* @__PURE__ */ E.jsxs(
                    "ul",
                    {
                      ...R(),
                      className: ee(
                        "absolute left-0 w-full bg-white border border-gray-300 pt-2 rounded-bl-md rounded-br-md overflow-hidden z-[1000]",
                        !M && "hidden"
                      ),
                      children: [
                        j.map((p, b) => /* @__PURE__ */ E.jsx(
                          "li",
                          {
                            ...q({ item: p, index: b }),
                            className: ee(
                              "px-4 py-2 cursor-pointer hover:bg-green-100/70 transition",
                              re === b && "bg-green-50/80",
                              g.some(
                                (w) => w.value === p.value
                              ) && "font-semibold text-gray-900"
                            ),
                            children: /* @__PURE__ */ E.jsx(
                              "span",
                              {
                                dangerouslySetInnerHTML: {
                                  __html: ot(p.label, f)
                                }
                              }
                            )
                          },
                          p.value
                        )),
                        j.length === 0 && /* @__PURE__ */ E.jsx("li", { className: "justify-center w-full mx-auto text-center text-slate-400 p-2", children: "No options" })
                      ]
                    }
                  ) })
                ]
              }
            )
          ]
        }
      )
    }
  ) });
}
export {
  lt as CustomMultipleCombobox
};
