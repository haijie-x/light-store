import g from "react";
function Y(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var N = { exports: {} }, j = {}, V = { exports: {} }, B = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var H;
function k() {
  if (H)
    return B;
  H = 1;
  var e = g;
  function S(r, o) {
    return r === o && (r !== 0 || 1 / r === 1 / o) || r !== r && o !== o;
  }
  var v = typeof Object.is == "function" ? Object.is : S, m = e.useState, L = e.useEffect, p = e.useLayoutEffect, T = e.useDebugValue;
  function O(r, o) {
    var a = o(), s = m({ inst: { value: a, getSnapshot: o } }), c = s[0].inst, f = s[1];
    return p(function() {
      c.value = a, c.getSnapshot = o, h(c) && f({ inst: c });
    }, [r, a, o]), L(function() {
      return h(c) && f({ inst: c }), r(function() {
        h(c) && f({ inst: c });
      });
    }, [r]), T(a), a;
  }
  function h(r) {
    var o = r.getSnapshot;
    r = r.value;
    try {
      var a = o();
      return !v(r, a);
    } catch {
      return !0;
    }
  }
  function _(r, o) {
    return o();
  }
  var u = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? _ : O;
  return B.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, B;
}
var W = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var K;
function P() {
  return K || (K = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = g, S = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(i) {
      {
        for (var t = arguments.length, d = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
          d[n - 1] = arguments[n];
        m("error", i, d);
      }
    }
    function m(i, t, d) {
      {
        var n = S.ReactDebugCurrentFrame, l = n.getStackAddendum();
        l !== "" && (t += "%s", d = d.concat([l]));
        var y = d.map(function(E) {
          return String(E);
        });
        y.unshift("Warning: " + t), Function.prototype.apply.call(console[i], console, y);
      }
    }
    function L(i, t) {
      return i === t && (i !== 0 || 1 / i === 1 / t) || i !== i && t !== t;
    }
    var p = typeof Object.is == "function" ? Object.is : L, T = e.useState, O = e.useEffect, h = e.useLayoutEffect, _ = e.useDebugValue, u = !1, r = !1;
    function o(i, t, d) {
      u || e.startTransition !== void 0 && (u = !0, v("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var n = t();
      if (!r) {
        var l = t();
        p(n, l) || (v("The result of getSnapshot should be cached to avoid an infinite loop"), r = !0);
      }
      var y = T({
        inst: {
          value: n,
          getSnapshot: t
        }
      }), E = y[0].inst, R = y[1];
      return h(function() {
        E.value = n, E.getSnapshot = t, a(E) && R({
          inst: E
        });
      }, [i, n, t]), O(function() {
        a(E) && R({
          inst: E
        });
        var x = function() {
          a(E) && R({
            inst: E
          });
        };
        return i(x);
      }, [i]), _(n), n;
    }
    function a(i) {
      var t = i.getSnapshot, d = i.value;
      try {
        var n = t();
        return !p(d, n);
      } catch {
        return !0;
      }
    }
    function s(i, t, d) {
      return t();
    }
    var c = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", f = !c, w = f ? s : o, A = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : w;
    W.useSyncExternalStore = A, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), W;
}
var U;
function z() {
  return U || (U = 1, process.env.NODE_ENV === "production" ? V.exports = k() : V.exports = P()), V.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q;
function J() {
  if (q)
    return j;
  q = 1;
  var e = g, S = z();
  function v(_, u) {
    return _ === u && (_ !== 0 || 1 / _ === 1 / u) || _ !== _ && u !== u;
  }
  var m = typeof Object.is == "function" ? Object.is : v, L = S.useSyncExternalStore, p = e.useRef, T = e.useEffect, O = e.useMemo, h = e.useDebugValue;
  return j.useSyncExternalStoreWithSelector = function(_, u, r, o, a) {
    var s = p(null);
    if (s.current === null) {
      var c = { hasValue: !1, value: null };
      s.current = c;
    } else
      c = s.current;
    s = O(function() {
      function w(n) {
        if (!A) {
          if (A = !0, i = n, n = o(n), a !== void 0 && c.hasValue) {
            var l = c.value;
            if (a(l, n))
              return t = l;
          }
          return t = n;
        }
        if (l = t, m(i, n))
          return l;
        var y = o(n);
        return a !== void 0 && a(l, y) ? l : (i = n, t = y);
      }
      var A = !1, i, t, d = r === void 0 ? null : r;
      return [function() {
        return w(u());
      }, d === null ? void 0 : function() {
        return w(d());
      }];
    }, [u, r, o, a]);
    var f = L(_, s[0], s[1]);
    return T(function() {
      c.hasValue = !0, c.value = f;
    }, [f]), h(f), f;
  }, j;
}
var b = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $;
function Q() {
  return $ || ($ = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = g, S = z();
    function v(u, r) {
      return u === r && (u !== 0 || 1 / u === 1 / r) || u !== u && r !== r;
    }
    var m = typeof Object.is == "function" ? Object.is : v, L = S.useSyncExternalStore, p = e.useRef, T = e.useEffect, O = e.useMemo, h = e.useDebugValue;
    function _(u, r, o, a, s) {
      var c = p(null), f;
      c.current === null ? (f = {
        hasValue: !1,
        value: null
      }, c.current = f) : f = c.current;
      var w = O(function() {
        var d = !1, n, l, y = function(D) {
          if (!d) {
            d = !0, n = D;
            var I = a(D);
            if (s !== void 0 && f.hasValue) {
              var C = f.value;
              if (s(C, I))
                return l = C, C;
            }
            return l = I, I;
          }
          var F = n, G = l;
          if (m(F, D))
            return G;
          var M = a(D);
          return s !== void 0 && s(G, M) ? G : (n = D, l = M, M);
        }, E = o === void 0 ? null : o, R = function() {
          return y(r());
        }, x = E === null ? void 0 : function() {
          return y(E());
        };
        return [R, x];
      }, [r, o, a, s]), A = w[0], i = w[1], t = L(u, A, i);
      return T(function() {
        f.hasValue = !0, f.value = t;
      }, [t]), h(t), t;
    }
    b.useSyncExternalStoreWithSelector = _, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), b;
}
process.env.NODE_ENV === "production" ? N.exports = J() : N.exports = Q();
var X = N.exports;
const Z = /* @__PURE__ */ Y(X), { useSyncExternalStoreWithSelector: ee } = Z, re = (e) => {
  const S = /* @__PURE__ */ new Set(), v = () => p, m = (O) => {
    const h = p, _ = typeof O == "function" ? O(p) : O;
    Object.is(h, _) || (p = Object.assign({}, h, _), S.forEach((u) => u == null ? void 0 : u()));
  }, L = (O) => (S.add(O), () => S.delete(O));
  let p = e == null ? void 0 : e(v, m);
  return {
    state: p,
    setState: m,
    getState: v,
    subscribe: L
  };
}, ne = (e, S) => {
  let v;
  return typeof g.useSyncExternalStore > "u" ? (S = S ?? e.getState, v = ee(
    e.subscribe,
    e.getState,
    () => window.__INIT_DATA__,
    S
  )) : (S && console.warn(
    "Sorry to tell you, it does not support `selector` params. Because it use `useSyncExternalStore` api which is built in react v18+"
  ), v = g.useSyncExternalStore(
    e.subscribe,
    e.getState,
    () => window.__INIT_DATA__
  )), v;
};
export {
  re as createStore,
  ne as useStore
};
