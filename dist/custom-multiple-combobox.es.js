import ar, { useState as ke, useRef as Ye, useMemo as lr, useEffect as ir } from "react";
import { useMultipleSelection as xe, useCombobox as fe, useSelect as cr } from "downshift";
import { CircleX as dr, X as Be, ChevronDown as ur } from "lucide-react";
var Ce = { exports: {} }, ve = {};
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
  if (Fe) return ve;
  Fe = 1;
  var r = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function o(t, c, u) {
    var d = null;
    if (u !== void 0 && (d = "" + u), c.key !== void 0 && (d = "" + c.key), "key" in c) {
      u = {};
      for (var b in c)
        b !== "key" && (u[b] = c[b]);
    } else u = c;
    return c = u.ref, {
      $$typeof: r,
      type: t,
      key: d,
      ref: c !== void 0 ? c : null,
      props: u
    };
  }
  return ve.Fragment = n, ve.jsx = o, ve.jsxs = o, ve;
}
var we = {};
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
        return e.$$typeof === w ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case S:
          return "Fragment";
        case B:
          return "Portal";
        case Z:
          return "Profiler";
        case U:
          return "StrictMode";
        case J:
          return "Suspense";
        case $:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case re:
            return (e.displayName || "Context") + ".Provider";
          case H:
            return (e._context.displayName || "Context") + ".Consumer";
          case q:
            var l = e.render;
            return e = e.displayName, e || (e = l.displayName || l.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case h:
            return l = e.displayName || null, l !== null ? l : r(e.type) || "Memo";
          case p:
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
        var i = l.error, x = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i.call(
          l,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          x
        ), n(e);
      }
    }
    function t() {
    }
    function c() {
      if (Q === 0) {
        me = console.log, te = console.info, oe = console.warn, de = console.error, ne = console.group, Oe = console.groupCollapsed, Ie = console.groupEnd;
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
      Q++;
    }
    function u() {
      if (Q--, Q === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: R({}, e, { value: me }),
          info: R({}, e, { value: te }),
          warn: R({}, e, { value: oe }),
          error: R({}, e, { value: de }),
          group: R({}, e, { value: ne }),
          groupCollapsed: R({}, e, { value: Oe }),
          groupEnd: R({}, e, { value: Ie })
        });
      }
      0 > Q && console.error(
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
    function b(e, l) {
      if (!e || Se) return "";
      var i = Ae.get(e);
      if (i !== void 0) return i;
      Se = !0, i = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var x = null;
      x = Y.H, Y.H = null, c();
      try {
        var _ = {
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
        _.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var E = Object.getOwnPropertyDescriptor(
          _.DetermineComponentFrameRoot,
          "name"
        );
        E && E.configurable && Object.defineProperty(
          _.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var g = _.DetermineComponentFrameRoot(), X = g[0], ue = g[1];
        if (X && ue) {
          var z = X.split(`
`), se = ue.split(`
`);
          for (g = E = 0; E < z.length && !z[E].includes(
            "DetermineComponentFrameRoot"
          ); )
            E++;
          for (; g < se.length && !se[g].includes(
            "DetermineComponentFrameRoot"
          ); )
            g++;
          if (E === z.length || g === se.length)
            for (E = z.length - 1, g = se.length - 1; 1 <= E && 0 <= g && z[E] !== se[g]; )
              g--;
          for (; 1 <= E && 0 <= g; E--, g--)
            if (z[E] !== se[g]) {
              if (E !== 1 || g !== 1)
                do
                  if (E--, g--, 0 > g || z[E] !== se[g]) {
                    var he = `
` + z[E].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && he.includes("<anonymous>") && (he = he.replace("<anonymous>", e.displayName)), typeof e == "function" && Ae.set(e, he), he;
                  }
                while (1 <= E && 0 <= g);
              break;
            }
        }
      } finally {
        Se = !1, Y.H = x, u(), Error.prepareStackTrace = i;
      }
      return z = (z = e ? e.displayName || e.name : "") ? d(z) : "", typeof e == "function" && Ae.set(e, z), z;
    }
    function f(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var l = e.prototype;
        return b(
          e,
          !(!l || !l.isReactComponent)
        );
      }
      if (typeof e == "string") return d(e);
      switch (e) {
        case J:
          return d("Suspense");
        case $:
          return d("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case q:
            return e = b(e.render, !1), e;
          case h:
            return f(e.type);
          case p:
            l = e._payload, e = e._init;
            try {
              return f(e(l));
            } catch {
            }
        }
      return "";
    }
    function C() {
      var e = Y.A;
      return e === null ? null : e.getOwner();
    }
    function T(e) {
      if (N.call(e, "key")) {
        var l = Object.getOwnPropertyDescriptor(e, "key").get;
        if (l && l.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function O(e, l) {
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
    function L() {
      var e = r(this.type);
      return Le[e] || (Le[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function V(e, l, i, x, _, E) {
      return i = E.ref, e = {
        $$typeof: G,
        type: e,
        key: l,
        props: E,
        _owner: _
      }, (i !== void 0 ? i : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: L
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
    function A(e, l, i, x, _, E) {
      if (typeof e == "string" || typeof e == "function" || e === S || e === Z || e === U || e === J || e === $ || e === v || typeof e == "object" && e !== null && (e.$$typeof === p || e.$$typeof === h || e.$$typeof === re || e.$$typeof === H || e.$$typeof === q || e.$$typeof === ie || e.getModuleId !== void 0)) {
        var g = l.children;
        if (g !== void 0)
          if (x)
            if (ce(g)) {
              for (x = 0; x < g.length; x++)
                j(g[x], e);
              Object.freeze && Object.freeze(g);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else j(g, e);
      } else
        g = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? x = "null" : ce(e) ? x = "array" : e !== void 0 && e.$$typeof === G ? (x = "<" + (r(e.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : x = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          x,
          g
        );
      if (N.call(l, "key")) {
        g = r(e);
        var X = Object.keys(l).filter(function(z) {
          return z !== "key";
        });
        x = 0 < X.length ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}", Ve[g + x] || (X = 0 < X.length ? "{" + X.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          x,
          g,
          X,
          g
        ), Ve[g + x] = !0);
      }
      if (g = null, i !== void 0 && (o(i), g = "" + i), T(l) && (o(l.key), g = "" + l.key), "key" in l) {
        i = {};
        for (var ue in l)
          ue !== "key" && (i[ue] = l[ue]);
      } else i = l;
      return g && O(
        i,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), V(e, g, E, _, C(), i);
    }
    function j(e, l) {
      if (typeof e == "object" && e && e.$$typeof !== sr) {
        if (ce(e))
          for (var i = 0; i < e.length; i++) {
            var x = e[i];
            I(x) && M(x, l);
          }
        else if (I(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? i = null : (i = y && e[y] || e["@@iterator"], i = typeof i == "function" ? i : null), typeof i == "function" && i !== e.entries && (i = i.call(e), i !== e))
          for (; !(e = i.next()).done; )
            I(e.value) && M(e.value, l);
      }
    }
    function I(e) {
      return typeof e == "object" && e !== null && e.$$typeof === G;
    }
    function M(e, l) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, l = W(l), !We[l])) {
        We[l] = !0;
        var i = "";
        e && e._owner != null && e._owner !== C() && (i = null, typeof e._owner.tag == "number" ? i = r(e._owner.type) : typeof e._owner.name == "string" && (i = e._owner.name), i = " It was passed a child from " + i + ".");
        var x = Y.getCurrentStack;
        Y.getCurrentStack = function() {
          var _ = f(e.type);
          return x && (_ += x() || ""), _;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          l,
          i
        ), Y.getCurrentStack = x;
      }
    }
    function W(e) {
      var l = "", i = C();
      return i && (i = r(i.type)) && (l = `

Check the render method of \`` + i + "`."), l || (e = r(e)) && (l = `

Check the top-level render call using <` + e + ">."), l;
    }
    var F = ar, G = Symbol.for("react.transitional.element"), B = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), U = Symbol.for("react.strict_mode"), Z = Symbol.for("react.profiler"), H = Symbol.for("react.consumer"), re = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), y = Symbol.iterator, w = Symbol.for("react.client.reference"), Y = F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, R = Object.assign, ie = Symbol.for("react.client.reference"), ce = Array.isArray, Q = 0, me, te, oe, de, ne, Oe, Ie;
    t.__reactDisabledLog = !0;
    var Re, Ge, Se = !1, Ae = new (typeof WeakMap == "function" ? WeakMap : Map)(), sr = Symbol.for("react.client.reference"), $e, Le = {}, Ve = {}, We = {};
    we.Fragment = S, we.jsx = function(e, l, i, x, _) {
      return A(e, l, i, !1, x, _);
    }, we.jsxs = function(e, l, i, x, _) {
      return A(e, l, i, !0, x, _);
    };
  }()), we;
}
var He;
function br() {
  return He || (He = 1, process.env.NODE_ENV === "production" ? Ce.exports = fr() : Ce.exports = pr()), Ce.exports;
}
var k = br();
const ze = "-", gr = (r) => {
  const n = hr(r), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: t
  } = r;
  return {
    getClassGroupId: (d) => {
      const b = d.split(ze);
      return b[0] === "" && b.length !== 1 && b.shift(), Ke(b, n) || mr(d);
    },
    getConflictingClassGroupIds: (d, b) => {
      const f = o[d] || [];
      return b && t[d] ? [...f, ...t[d]] : f;
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
  const u = r.join(ze);
  return (d = n.validators.find(({
    validator: b
  }) => b(u))) == null ? void 0 : d.classGroupId;
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
      const u = c === "" ? n : Je(n, c);
      u.classGroupId = o;
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
    Object.entries(c).forEach(([u, d]) => {
      Ne(d, Je(n, u), o, t);
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
  const c = (u, d) => {
    o.set(u, d), n++, n > r && (n = 0, t = o, o = /* @__PURE__ */ new Map());
  };
  return {
    get(u) {
      let d = o.get(u);
      if (d !== void 0)
        return d;
      if ((d = t.get(u)) !== void 0)
        return c(u, d), d;
    },
    set(u, d) {
      o.has(u) ? o.set(u, d) : c(u, d);
    }
  };
}, Pe = "!", _e = ":", wr = _e.length, yr = (r) => {
  const {
    prefix: n,
    experimentalParseClassName: o
  } = r;
  let t = (c) => {
    const u = [];
    let d = 0, b = 0, f = 0, C;
    for (let A = 0; A < c.length; A++) {
      let j = c[A];
      if (d === 0 && b === 0) {
        if (j === _e) {
          u.push(c.slice(f, A)), f = A + wr;
          continue;
        }
        if (j === "/") {
          C = A;
          continue;
        }
      }
      j === "[" ? d++ : j === "]" ? d-- : j === "(" ? b++ : j === ")" && b--;
    }
    const T = u.length === 0 ? c : c.substring(f), O = Er(T), L = O !== T, V = C && C > f ? C - f : void 0;
    return {
      modifiers: u,
      hasImportantModifier: L,
      baseClassName: O,
      maybePostfixModifierPosition: V
    };
  };
  if (n) {
    const c = n + _e, u = t;
    t = (d) => d.startsWith(c) ? u(d.substring(c.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: d,
      maybePostfixModifierPosition: void 0
    };
  }
  if (o) {
    const c = t;
    t = (u) => o({
      className: u,
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
    let u = [];
    return t.forEach((d) => {
      d[0] === "[" || n[d] ? (c.push(...u.sort(), d), u = []) : u.push(d);
    }), c.push(...u.sort()), c;
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
    sortModifiers: u
  } = n, d = [], b = r.trim().split(Tr);
  let f = "";
  for (let C = b.length - 1; C >= 0; C -= 1) {
    const T = b[C], {
      isExternal: O,
      modifiers: L,
      hasImportantModifier: V,
      baseClassName: A,
      maybePostfixModifierPosition: j
    } = o(T);
    if (O) {
      f = T + (f.length > 0 ? " " + f : f);
      continue;
    }
    let I = !!j, M = t(I ? A.substring(0, j) : A);
    if (!M) {
      if (!I) {
        f = T + (f.length > 0 ? " " + f : f);
        continue;
      }
      if (M = t(A), !M) {
        f = T + (f.length > 0 ? " " + f : f);
        continue;
      }
      I = !1;
    }
    const W = u(L).join(":"), F = V ? W + Pe : W, G = F + M;
    if (d.includes(G))
      continue;
    d.push(G);
    const B = c(M, I);
    for (let S = 0; S < B.length; ++S) {
      const U = B[S];
      d.push(F + U);
    }
    f = T + (f.length > 0 ? " " + f : f);
  }
  return f;
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
function Ar(r, ...n) {
  let o, t, c, u = d;
  function d(f) {
    const C = n.reduce((T, O) => O(T), r());
    return o = Cr(C), t = o.cache.get, c = o.cache.set, u = b, b(f);
  }
  function b(f) {
    const C = t(f);
    if (C)
      return C;
    const T = Rr(f, o);
    return c(f, T), T;
  }
  return function() {
    return u(Sr.apply(null, arguments));
  };
}
const P = (r) => {
  const n = (o) => o[r] || [];
  return n.isThemeGetter = !0, n;
}, Qe = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, De = /^\((?:(\w[\w-]*):)?(.+)\)$/i, jr = /^\d+\/\d+$/, Nr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Pr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, _r = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, zr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Mr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, pe = (r) => jr.test(r), m = (r) => !!r && !Number.isNaN(Number(r)), ae = (r) => !!r && Number.isInteger(Number(r)), Xe = (r) => r.endsWith("%") && m(r.slice(0, -1)), ee = (r) => Nr.test(r), Or = () => !0, Ir = (r) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Pr.test(r) && !_r.test(r)
), Me = () => !1, Gr = (r) => zr.test(r), $r = (r) => Mr.test(r), Lr = (r) => !s(r) && !a(r), Vr = (r) => be(r, tr, Me), s = (r) => Qe.test(r), le = (r) => be(r, or, Ir), je = (r) => be(r, Zr, m), Wr = (r) => be(r, er, Me), Yr = (r) => be(r, rr, $r), Br = (r) => be(r, Me, Gr), a = (r) => De.test(r), Te = (r) => ge(r, or), Fr = (r) => ge(r, Qr), Ur = (r) => ge(r, er), Hr = (r) => ge(r, tr), qr = (r) => ge(r, rr), Jr = (r) => ge(r, Dr, !0), be = (r, n, o) => {
  const t = Qe.exec(r);
  return t ? t[1] ? n(t[1]) : o(t[2]) : !1;
}, ge = (r, n, o = !1) => {
  const t = De.exec(r);
  return t ? t[1] ? n(t[1]) : o : !1;
}, er = (r) => r === "position", Xr = /* @__PURE__ */ new Set(["image", "url"]), rr = (r) => Xr.has(r), Kr = /* @__PURE__ */ new Set(["length", "size", "percentage"]), tr = (r) => Kr.has(r), or = (r) => r === "length", Zr = (r) => r === "number", Qr = (r) => r === "family-name", Dr = (r) => r === "shadow", et = () => {
  const r = P("color"), n = P("font"), o = P("text"), t = P("font-weight"), c = P("tracking"), u = P("leading"), d = P("breakpoint"), b = P("container"), f = P("spacing"), C = P("radius"), T = P("shadow"), O = P("inset-shadow"), L = P("drop-shadow"), V = P("blur"), A = P("perspective"), j = P("aspect"), I = P("ease"), M = P("animate"), W = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], F = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], G = () => ["auto", "hidden", "clip", "visible", "scroll"], B = () => ["auto", "contain", "none"], S = () => [pe, "px", "full", "auto", a, s, f], U = () => [ae, "none", "subgrid", a, s], Z = () => ["auto", {
    span: ["full", ae, a, s]
  }, a, s], H = () => [ae, "auto", a, s], re = () => ["auto", "min", "max", "fr", a, s], q = () => [a, s, f], J = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], $ = () => ["start", "end", "center", "stretch"], h = () => [a, s, f], p = () => ["px", ...h()], v = () => ["px", "auto", ...h()], y = () => [pe, "auto", "px", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", a, s, f], w = () => [r, a, s], Y = () => [Xe, le], N = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    C,
    a,
    s
  ], R = () => ["", m, Te, le], ie = () => ["solid", "dashed", "dotted", "double"], ce = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Q = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    V,
    a,
    s
  ], me = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", a, s], te = () => ["none", m, a, s], oe = () => ["none", m, a, s], de = () => [m, a, s], ne = () => [pe, "full", "px", a, s, f];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ee],
      breakpoint: [ee],
      color: [Or],
      container: [ee],
      "drop-shadow": [ee],
      ease: ["in", "out", "in-out"],
      font: [Lr],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ee],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ee],
      shadow: [ee],
      spacing: [m],
      text: [ee],
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
        aspect: ["auto", "square", pe, s, a, j]
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
        columns: [m, s, a, b]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": W()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": W()
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
        object: [...F(), s, a]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: G()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": G()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": G()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: B()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": B()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": B()
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
        inset: S()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": S()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": S()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: S()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: S()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: S()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: S()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: S()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: S()
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
        z: [ae, "auto", a, s]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [pe, "full", "auto", a, s, b, f]
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
        flex: [m, pe, "auto", "initial", "none", s]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", m, a, s]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", m, a, s]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ae, "first", "last", "none", a, s]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": U()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: Z()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": H()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": H()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": U()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: Z()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": H()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": H()
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
        "auto-cols": re()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": re()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: q()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": q()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": q()
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
        "justify-items": [...$(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...$()]
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
        items: [...$(), "baseline"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...$(), "baseline"]
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
        "place-items": [...$(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...$()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: p()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: p()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: p()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: p()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: p()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: p()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: p()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: p()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: p()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: v()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: v()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: v()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: v()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: v()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: v()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: v()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: v()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: v()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": h()
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
        "space-y": h()
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
        size: y()
      }],
      w: [{
        w: [b, "screen", ...y()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          b,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...y()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          b,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [d]
          },
          ...y()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...y()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...y()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...y()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", o, Te, le]
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
        font: [t, a, je]
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
        "line-clamp": [m, "none", a, je]
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
          u,
          f
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
        placeholder: w()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: w()
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
        decoration: [...ie(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [m, "from-font", "auto", a, le]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: w()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [m, "auto", a, s]
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
        indent: ["px", ...h()]
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
        bg: [...F(), Ur, Wr]
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
          }, ae, a, s],
          radial: ["", a, s],
          conic: [ae, a, s]
        }, qr, Yr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: w()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: Y()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: Y()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: Y()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: w()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: w()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: w()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: N()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": N()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": N()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": N()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": N()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": N()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": N()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": N()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": N()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": N()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": N()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": N()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": N()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": N()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": N()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: R()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": R()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": R()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": R()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": R()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": R()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": R()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": R()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": R()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": R()
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
        "divide-y": R()
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
        border: [...ie(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...ie(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: w()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": w()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": w()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": w()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": w()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": w()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": w()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": w()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": w()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: w()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...ie(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [m, a, s]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", m, Te, le]
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
          T,
          Jr,
          Br
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: w()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", a, s, O]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": w()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: R()
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
        ring: w()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [m, le]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": w()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": R()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": w()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [m, a, s]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ce(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ce()
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
        blur: Q()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [m, a, s]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [m, a, s]
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
          L,
          a,
          s
        ]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", m, a, s]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [m, a, s]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", m, a, s]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [m, a, s]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", m, a, s]
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
        "backdrop-blur": Q()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [m, a, s]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [m, a, s]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", m, a, s]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [m, a, s]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", m, a, s]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [m, a, s]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [m, a, s]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", m, a, s]
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
        "border-spacing": h()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": h()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": h()
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
        duration: [m, "initial", a, s]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", I, a, s]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [m, a, s]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", M, a, s]
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
        perspective: [A, a, s]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": me()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: te()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": te()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": te()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": te()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: oe()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": oe()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": oe()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": oe()
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
        skew: de()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": de()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": de()
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
        origin: me()
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
        translate: ne()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ne()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ne()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ne()
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
        accent: w()
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
        caret: w()
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
        "scroll-m": h()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": h()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": h()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": h()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": h()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": h()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": h()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": h()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": h()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": h()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": h()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": h()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": h()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": h()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": h()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": h()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": h()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": h()
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
        fill: ["none", ...w()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [m, Te, le, je]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...w()]
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
}, rt = /* @__PURE__ */ Ar(et);
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
function ye(...r) {
  return rt(tt(...r));
}
const ot = (r, n) => {
  if (!n)
    return r;
  const o = new RegExp(`(${n})`, "gi");
  return r.replace(o, '<mark class="bg-green-300">$1</mark>');
};
function lt({
  options: r,
  onSelect: n,
  multiple: o = !0,
  withSearch: t = !0,
  // Default value untuk withSearch adalah true
  ...c
}) {
  const [u, d] = ke(""), [b, f] = ke([]), [C, T] = ke(!1), [O, L] = ke(!1), V = Ye(null), A = Ye(null), j = lr(() => r.filter((p) => p.label.toLowerCase().includes(u.toLowerCase())), [u, r]), { getSelectedItemProps: I, removeSelectedItem: M } = xe({
    selectedItems: b,
    onStateChange({ selectedItems: p, type: v }) {
      switch (v) {
        case xe.stateChangeTypes.SelectedItemKeyDownBackspace:
        case xe.stateChangeTypes.SelectedItemKeyDownDelete:
        case xe.stateChangeTypes.DropdownKeyDownBackspace:
        case xe.stateChangeTypes.FunctionRemoveSelectedItem:
          f(p || []), n(p || []);
          break;
      }
    }
  }), { isOpen: W, getToggleButtonProps: F, getMenuProps: G, getInputProps: B, highlightedIndex: S, getItemProps: U } = fe({
    items: j,
    itemToString: (p) => p ? p.label : "",
    inputValue: u,
    defaultHighlightedIndex: 0,
    stateReducer: (p, { changes: v, type: y }) => {
      switch (y) {
        case fe.stateChangeTypes.InputKeyDownEnter:
        case fe.stateChangeTypes.ItemClick:
          return {
            ...v,
            isOpen: !0,
            highlightedIndex: 0
          };
        default:
          return v;
      }
    },
    onStateChange: ({ inputValue: p, type: v, selectedItem: y }) => {
      switch (v) {
        case fe.stateChangeTypes.InputKeyDownEnter:
        case fe.stateChangeTypes.ItemClick:
          y && (o ? (f([...b, y]), n([...b, y])) : (f([y]), n([y])), d(""));
          break;
        case fe.stateChangeTypes.InputChange:
          d(p || "");
          break;
      }
    }
  }), { isOpen: Z, getToggleButtonProps: H, getMenuProps: re, highlightedIndex: q, getItemProps: J } = cr({
    items: r,
    onSelectedItemChange: ({ selectedItem: p }) => {
      p && (o ? (f([...b, p]), n([...b, p])) : (f([p]), n([p])));
    }
  });
  ir(() => {
    const p = (v) => {
      V.current && !V.current.contains(v.target) && (T(!1), L(!1));
    };
    return document.addEventListener("mousedown", p), () => {
      document.removeEventListener("mousedown", p);
    };
  }, []);
  const $ = () => {
    L(!0);
  }, h = () => {
    L(!1);
  };
  return k.jsx(k.Fragment, { children: k.jsx("div", { className: "w-full flex flex-col bg-white h-auto z-[1002] relativea ", ref: V, ...c, children: k.jsxs("div", { className: "relative w-full cursor-pointer", onClick: () => {
    t && (T(!0), setTimeout(() => {
      var p;
      (p = A.current) == null || p.focus();
    }, 0));
  }, children: [k.jsxs("div", { ...t ? F() : H(), className: "flex items-center border border-slate-300 bg-white rounded-md px-3 py-2 focus-within:shadow-sm focus-within:ring-slate-300 h-10 debug-red", children: [k.jsx("div", { className: "flex flex-wrap gap-1 flex-1", children: b.map((p, v) => k.jsxs("span", { className: "bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-xs flex items-center gap-1", ...I({
    selectedItem: p,
    index: v
  }), children: [p.label, o && k.jsx(dr, { onClick: (y) => {
    y.stopPropagation(), M(p);
  }, className: "w-3 h-3 cursor-pointer text-gray-500 hover:text-gray-700" })] }, `selected-item-${v}`)) }), !t && b.length > 0 && k.jsx(Be, { onClick: () => {
    M(b[0]);
  }, className: "h-4 w-4 bg-gray-400 p-1 rounded-full cursor-pointer text-slate-100 hover:text-white hover:bg-gray-600" }), k.jsx(ur, { className: ye("ml-2 cursor-pointer text-xs outline-none focus:outline-none", O ? "text-slate-500" : "text-slate-300") })] }), !t && k.jsx(k.Fragment, { children: k.jsx("ul", { ...re(), className: ye("absolute bg-white z-max left-0 w-full border border-gray-300 pt-1 rounded-bl-md rounded-br-md overflow-hidden", !Z && "hidden"), children: Z && r.map((p, v) => k.jsx("li", { ...J({ item: p, index: v }), className: ye("px-4 py-2 cursor-pointer hover:bg-green-100/70 transition", q === v && "bg-green-50/80", b.some((y) => y.value === p.value) && "font-semibold text-gray-900"), children: p.label }, p.value)) }) }), t && C && k.jsxs("div", { className: "relative w-full mt-2 z-max", children: [k.jsxs("div", { onFocus: $, onBlur: () => {
    h(), T(!1);
  }, className: "flex items-center border border-slate-300 bg-white rounded-md px-3 py-2 focus-within:shadow-sm focus-within:ring-slate-300", children: [k.jsx("input", { ...B({
    placeholder: "Search...",
    className: "flex-1 bg-transparent outline-none min-w-[100px]",
    ref: A
  }) }), k.jsx(Be, { onClick: () => d(""), className: "h-4 w-4 bg-gray-400 p-1 rounded-full cursor-pointer text-slate-100 hover:text-white hover:bg-gray-600" })] }), k.jsxs("ul", { ...G(), className: ye("absolute left-0 w-full bg-white border border-gray-300 pt-2 rounded-bl-md rounded-br-md overflow-hidden z-[1000]", !W && "hidden"), children: [W && j.map((p, v) => k.jsx("li", { ...U({ item: p, index: v }), className: ye("px-4 py-2 cursor-pointer hover:bg-green-100/70 transition", S === v && "bg-green-50/80", b.some((y) => y.value === p.value) && "font-semibold text-gray-900"), children: k.jsx("span", { dangerouslySetInnerHTML: {
    __html: ot(p.label, u)
  } }) }, p.value)), W && j.length === 0 && k.jsx("li", { className: "justify-center w-full mx-auto text-center text-slate-400 p-2", children: "No options" })] })] })] }) }) });
}
export {
  lt as CustomMultipleCombobox
};
