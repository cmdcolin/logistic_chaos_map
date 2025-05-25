(async () => {
  (function() {
    const _ = document.createElement("link").relList;
    if (_ && _.supports && _.supports("modulepreload")) return;
    for (const D of document.querySelectorAll('link[rel="modulepreload"]')) r(D);
    new MutationObserver((D) => {
      for (const U of D) if (U.type === "childList") for (const G of U.addedNodes) G.tagName === "LINK" && G.rel === "modulepreload" && r(G);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function p(D) {
      const U = {};
      return D.integrity && (U.integrity = D.integrity), D.referrerPolicy && (U.referrerPolicy = D.referrerPolicy), D.crossOrigin === "use-credentials" ? U.credentials = "include" : D.crossOrigin === "anonymous" ? U.credentials = "omit" : U.credentials = "same-origin", U;
    }
    function r(D) {
      if (D.ep) return;
      D.ep = true;
      const U = p(D);
      fetch(D.href, U);
    }
  })();
  var Bn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  function ri(v) {
    return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
  }
  var ai = {
    exports: {}
  }, me = {};
  var f0;
  function Lv() {
    if (f0) return me;
    f0 = 1;
    var v = Symbol.for("react.transitional.element"), _ = Symbol.for("react.fragment");
    function p(r, D, U) {
      var G = null;
      if (U !== void 0 && (G = "" + U), D.key !== void 0 && (G = "" + D.key), "key" in D) {
        U = {};
        for (var $ in D) $ !== "key" && (U[$] = D[$]);
      } else U = D;
      return D = U.ref, {
        $$typeof: v,
        type: r,
        key: G,
        ref: D !== void 0 ? D : null,
        props: U
      };
    }
    return me.Fragment = _, me.jsx = p, me.jsxs = p, me;
  }
  var c0;
  function Vv() {
    return c0 || (c0 = 1, ai.exports = Lv()), ai.exports;
  }
  var gl = Vv(), ui = {
    exports: {}
  }, W = {};
  var i0;
  function Kv() {
    if (i0) return W;
    i0 = 1;
    var v = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), U = Symbol.for("react.consumer"), G = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), y = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), Q = Symbol.iterator;
    function x(s) {
      return s === null || typeof s != "object" ? null : (s = Q && s[Q] || s["@@iterator"], typeof s == "function" ? s : null);
    }
    var Y = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function() {
      },
      enqueueReplaceState: function() {
      },
      enqueueSetState: function() {
      }
    }, tl = Object.assign, X = {};
    function J(s, E, H) {
      this.props = s, this.context = E, this.refs = X, this.updater = H || Y;
    }
    J.prototype.isReactComponent = {}, J.prototype.setState = function(s, E) {
      if (typeof s != "object" && typeof s != "function" && s != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, s, E, "setState");
    }, J.prototype.forceUpdate = function(s) {
      this.updater.enqueueForceUpdate(this, s, "forceUpdate");
    };
    function cl() {
    }
    cl.prototype = J.prototype;
    function al(s, E, H) {
      this.props = s, this.context = E, this.refs = X, this.updater = H || Y;
    }
    var ul = al.prototype = new cl();
    ul.constructor = al, tl(ul, J.prototype), ul.isPureReactComponent = true;
    var Ol = Array.isArray, k = {
      H: null,
      A: null,
      T: null,
      S: null,
      V: null
    }, ml = Object.prototype.hasOwnProperty;
    function Hl(s, E, H, R, C, el) {
      return H = el.ref, {
        $$typeof: v,
        type: s,
        key: E,
        ref: H !== void 0 ? H : null,
        props: el
      };
    }
    function Sl(s, E) {
      return Hl(s.type, E, void 0, void 0, void 0, s.props);
    }
    function Cl(s) {
      return typeof s == "object" && s !== null && s.$$typeof === v;
    }
    function Dt(s) {
      var E = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + s.replace(/[=:]/g, function(H) {
        return E[H];
      });
    }
    var ct = /\/+/g;
    function Rl(s, E) {
      return typeof s == "object" && s !== null && s.key != null ? Dt("" + s.key) : E.toString(36);
    }
    function gt() {
    }
    function Rt(s) {
      switch (s.status) {
        case "fulfilled":
          return s.value;
        case "rejected":
          throw s.reason;
        default:
          switch (typeof s.status == "string" ? s.then(gt, gt) : (s.status = "pending", s.then(function(E) {
            s.status === "pending" && (s.status = "fulfilled", s.value = E);
          }, function(E) {
            s.status === "pending" && (s.status = "rejected", s.reason = E);
          })), s.status) {
            case "fulfilled":
              return s.value;
            case "rejected":
              throw s.reason;
          }
      }
      throw s;
    }
    function xl(s, E, H, R, C) {
      var el = typeof s;
      (el === "undefined" || el === "boolean") && (s = null);
      var K = false;
      if (s === null) K = true;
      else switch (el) {
        case "bigint":
        case "string":
        case "number":
          K = true;
          break;
        case "object":
          switch (s.$$typeof) {
            case v:
            case _:
              K = true;
              break;
            case z:
              return K = s._init, xl(K(s._payload), E, H, R, C);
          }
      }
      if (K) return C = C(s), K = R === "" ? "." + Rl(s, 0) : R, Ol(C) ? (H = "", K != null && (H = K.replace(ct, "$&/") + "/"), xl(C, E, H, "", function(Kt) {
        return Kt;
      })) : C != null && (Cl(C) && (C = Sl(C, H + (C.key == null || s && s.key === C.key ? "" : ("" + C.key).replace(ct, "$&/") + "/") + K)), E.push(C)), 1;
      K = 0;
      var Fl = R === "" ? "." : R + ":";
      if (Ol(s)) for (var bl = 0; bl < s.length; bl++) R = s[bl], el = Fl + Rl(R, bl), K += xl(R, E, H, el, C);
      else if (bl = x(s), typeof bl == "function") for (s = bl.call(s), bl = 0; !(R = s.next()).done; ) R = R.value, el = Fl + Rl(R, bl++), K += xl(R, E, H, el, C);
      else if (el === "object") {
        if (typeof s.then == "function") return xl(Rt(s), E, H, R, C);
        throw E = String(s), Error("Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead.");
      }
      return K;
    }
    function S(s, E, H) {
      if (s == null) return s;
      var R = [], C = 0;
      return xl(s, R, "", "", function(el) {
        return E.call(H, el, C++);
      }), R;
    }
    function O(s) {
      if (s._status === -1) {
        var E = s._result;
        E = E(), E.then(function(H) {
          (s._status === 0 || s._status === -1) && (s._status = 1, s._result = H);
        }, function(H) {
          (s._status === 0 || s._status === -1) && (s._status = 2, s._result = H);
        }), s._status === -1 && (s._status = 0, s._result = E);
      }
      if (s._status === 1) return s._result.default;
      throw s._result;
    }
    var q = typeof reportError == "function" ? reportError : function(s) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var E = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s),
          error: s
        });
        if (!window.dispatchEvent(E)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", s);
        return;
      }
      console.error(s);
    };
    function w() {
    }
    return W.Children = {
      map: S,
      forEach: function(s, E, H) {
        S(s, function() {
          E.apply(this, arguments);
        }, H);
      },
      count: function(s) {
        var E = 0;
        return S(s, function() {
          E++;
        }), E;
      },
      toArray: function(s) {
        return S(s, function(E) {
          return E;
        }) || [];
      },
      only: function(s) {
        if (!Cl(s)) throw Error("React.Children.only expected to receive a single React element child.");
        return s;
      }
    }, W.Component = J, W.Fragment = p, W.Profiler = D, W.PureComponent = al, W.StrictMode = r, W.Suspense = N, W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k, W.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function(s) {
        return k.H.useMemoCache(s);
      }
    }, W.cache = function(s) {
      return function() {
        return s.apply(null, arguments);
      };
    }, W.cloneElement = function(s, E, H) {
      if (s == null) throw Error("The argument must be a React element, but you passed " + s + ".");
      var R = tl({}, s.props), C = s.key, el = void 0;
      if (E != null) for (K in E.ref !== void 0 && (el = void 0), E.key !== void 0 && (C = "" + E.key), E) !ml.call(E, K) || K === "key" || K === "__self" || K === "__source" || K === "ref" && E.ref === void 0 || (R[K] = E[K]);
      var K = arguments.length - 2;
      if (K === 1) R.children = H;
      else if (1 < K) {
        for (var Fl = Array(K), bl = 0; bl < K; bl++) Fl[bl] = arguments[bl + 2];
        R.children = Fl;
      }
      return Hl(s.type, C, void 0, void 0, el, R);
    }, W.createContext = function(s) {
      return s = {
        $$typeof: G,
        _currentValue: s,
        _currentValue2: s,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      }, s.Provider = s, s.Consumer = {
        $$typeof: U,
        _context: s
      }, s;
    }, W.createElement = function(s, E, H) {
      var R, C = {}, el = null;
      if (E != null) for (R in E.key !== void 0 && (el = "" + E.key), E) ml.call(E, R) && R !== "key" && R !== "__self" && R !== "__source" && (C[R] = E[R]);
      var K = arguments.length - 2;
      if (K === 1) C.children = H;
      else if (1 < K) {
        for (var Fl = Array(K), bl = 0; bl < K; bl++) Fl[bl] = arguments[bl + 2];
        C.children = Fl;
      }
      if (s && s.defaultProps) for (R in K = s.defaultProps, K) C[R] === void 0 && (C[R] = K[R]);
      return Hl(s, el, void 0, void 0, null, C);
    }, W.createRef = function() {
      return {
        current: null
      };
    }, W.forwardRef = function(s) {
      return {
        $$typeof: $,
        render: s
      };
    }, W.isValidElement = Cl, W.lazy = function(s) {
      return {
        $$typeof: z,
        _payload: {
          _status: -1,
          _result: s
        },
        _init: O
      };
    }, W.memo = function(s, E) {
      return {
        $$typeof: y,
        type: s,
        compare: E === void 0 ? null : E
      };
    }, W.startTransition = function(s) {
      var E = k.T, H = {};
      k.T = H;
      try {
        var R = s(), C = k.S;
        C !== null && C(H, R), typeof R == "object" && R !== null && typeof R.then == "function" && R.then(w, q);
      } catch (el) {
        q(el);
      } finally {
        k.T = E;
      }
    }, W.unstable_useCacheRefresh = function() {
      return k.H.useCacheRefresh();
    }, W.use = function(s) {
      return k.H.use(s);
    }, W.useActionState = function(s, E, H) {
      return k.H.useActionState(s, E, H);
    }, W.useCallback = function(s, E) {
      return k.H.useCallback(s, E);
    }, W.useContext = function(s) {
      return k.H.useContext(s);
    }, W.useDebugValue = function() {
    }, W.useDeferredValue = function(s, E) {
      return k.H.useDeferredValue(s, E);
    }, W.useEffect = function(s, E, H) {
      var R = k.H;
      if (typeof H == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
      return R.useEffect(s, E);
    }, W.useId = function() {
      return k.H.useId();
    }, W.useImperativeHandle = function(s, E, H) {
      return k.H.useImperativeHandle(s, E, H);
    }, W.useInsertionEffect = function(s, E) {
      return k.H.useInsertionEffect(s, E);
    }, W.useLayoutEffect = function(s, E) {
      return k.H.useLayoutEffect(s, E);
    }, W.useMemo = function(s, E) {
      return k.H.useMemo(s, E);
    }, W.useOptimistic = function(s, E) {
      return k.H.useOptimistic(s, E);
    }, W.useReducer = function(s, E, H) {
      return k.H.useReducer(s, E, H);
    }, W.useRef = function(s) {
      return k.H.useRef(s);
    }, W.useState = function(s) {
      return k.H.useState(s);
    }, W.useSyncExternalStore = function(s, E, H) {
      return k.H.useSyncExternalStore(s, E, H);
    }, W.useTransition = function() {
      return k.H.useTransition();
    }, W.version = "19.1.0", W;
  }
  var s0;
  function di() {
    return s0 || (s0 = 1, ui.exports = Kv()), ui.exports;
  }
  var pt = di();
  const si = ri(pt);
  var ei = {
    exports: {}
  }, ge = {}, ni = {
    exports: {}
  }, fi = {};
  var o0;
  function wv() {
    return o0 || (o0 = 1, function(v) {
      function _(S, O) {
        var q = S.length;
        S.push(O);
        l: for (; 0 < q; ) {
          var w = q - 1 >>> 1, s = S[w];
          if (0 < D(s, O)) S[w] = O, S[q] = s, q = w;
          else break l;
        }
      }
      function p(S) {
        return S.length === 0 ? null : S[0];
      }
      function r(S) {
        if (S.length === 0) return null;
        var O = S[0], q = S.pop();
        if (q !== O) {
          S[0] = q;
          l: for (var w = 0, s = S.length, E = s >>> 1; w < E; ) {
            var H = 2 * (w + 1) - 1, R = S[H], C = H + 1, el = S[C];
            if (0 > D(R, q)) C < s && 0 > D(el, R) ? (S[w] = el, S[C] = q, w = C) : (S[w] = R, S[H] = q, w = H);
            else if (C < s && 0 > D(el, q)) S[w] = el, S[C] = q, w = C;
            else break l;
          }
        }
        return O;
      }
      function D(S, O) {
        var q = S.sortIndex - O.sortIndex;
        return q !== 0 ? q : S.id - O.id;
      }
      if (v.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var U = performance;
        v.unstable_now = function() {
          return U.now();
        };
      } else {
        var G = Date, $ = G.now();
        v.unstable_now = function() {
          return G.now() - $;
        };
      }
      var N = [], y = [], z = 1, Q = null, x = 3, Y = false, tl = false, X = false, J = false, cl = typeof setTimeout == "function" ? setTimeout : null, al = typeof clearTimeout == "function" ? clearTimeout : null, ul = typeof setImmediate < "u" ? setImmediate : null;
      function Ol(S) {
        for (var O = p(y); O !== null; ) {
          if (O.callback === null) r(y);
          else if (O.startTime <= S) r(y), O.sortIndex = O.expirationTime, _(N, O);
          else break;
          O = p(y);
        }
      }
      function k(S) {
        if (X = false, Ol(S), !tl) if (p(N) !== null) tl = true, ml || (ml = true, Rl());
        else {
          var O = p(y);
          O !== null && xl(k, O.startTime - S);
        }
      }
      var ml = false, Hl = -1, Sl = 5, Cl = -1;
      function Dt() {
        return J ? true : !(v.unstable_now() - Cl < Sl);
      }
      function ct() {
        if (J = false, ml) {
          var S = v.unstable_now();
          Cl = S;
          var O = true;
          try {
            l: {
              tl = false, X && (X = false, al(Hl), Hl = -1), Y = true;
              var q = x;
              try {
                t: {
                  for (Ol(S), Q = p(N); Q !== null && !(Q.expirationTime > S && Dt()); ) {
                    var w = Q.callback;
                    if (typeof w == "function") {
                      Q.callback = null, x = Q.priorityLevel;
                      var s = w(Q.expirationTime <= S);
                      if (S = v.unstable_now(), typeof s == "function") {
                        Q.callback = s, Ol(S), O = true;
                        break t;
                      }
                      Q === p(N) && r(N), Ol(S);
                    } else r(N);
                    Q = p(N);
                  }
                  if (Q !== null) O = true;
                  else {
                    var E = p(y);
                    E !== null && xl(k, E.startTime - S), O = false;
                  }
                }
                break l;
              } finally {
                Q = null, x = q, Y = false;
              }
              O = void 0;
            }
          } finally {
            O ? Rl() : ml = false;
          }
        }
      }
      var Rl;
      if (typeof ul == "function") Rl = function() {
        ul(ct);
      };
      else if (typeof MessageChannel < "u") {
        var gt = new MessageChannel(), Rt = gt.port2;
        gt.port1.onmessage = ct, Rl = function() {
          Rt.postMessage(null);
        };
      } else Rl = function() {
        cl(ct, 0);
      };
      function xl(S, O) {
        Hl = cl(function() {
          S(v.unstable_now());
        }, O);
      }
      v.unstable_IdlePriority = 5, v.unstable_ImmediatePriority = 1, v.unstable_LowPriority = 4, v.unstable_NormalPriority = 3, v.unstable_Profiling = null, v.unstable_UserBlockingPriority = 2, v.unstable_cancelCallback = function(S) {
        S.callback = null;
      }, v.unstable_forceFrameRate = function(S) {
        0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Sl = 0 < S ? Math.floor(1e3 / S) : 5;
      }, v.unstable_getCurrentPriorityLevel = function() {
        return x;
      }, v.unstable_next = function(S) {
        switch (x) {
          case 1:
          case 2:
          case 3:
            var O = 3;
            break;
          default:
            O = x;
        }
        var q = x;
        x = O;
        try {
          return S();
        } finally {
          x = q;
        }
      }, v.unstable_requestPaint = function() {
        J = true;
      }, v.unstable_runWithPriority = function(S, O) {
        switch (S) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            S = 3;
        }
        var q = x;
        x = S;
        try {
          return O();
        } finally {
          x = q;
        }
      }, v.unstable_scheduleCallback = function(S, O, q) {
        var w = v.unstable_now();
        switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? w + q : w) : q = w, S) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return s = q + s, S = {
          id: z++,
          callback: O,
          priorityLevel: S,
          startTime: q,
          expirationTime: s,
          sortIndex: -1
        }, q > w ? (S.sortIndex = q, _(y, S), p(N) === null && S === p(y) && (X ? (al(Hl), Hl = -1) : X = true, xl(k, q - w))) : (S.sortIndex = s, _(N, S), tl || Y || (tl = true, ml || (ml = true, Rl()))), S;
      }, v.unstable_shouldYield = Dt, v.unstable_wrapCallback = function(S) {
        var O = x;
        return function() {
          var q = x;
          x = O;
          try {
            return S.apply(this, arguments);
          } finally {
            x = q;
          }
        };
      };
    }(fi)), fi;
  }
  var r0;
  function Jv() {
    return r0 || (r0 = 1, ni.exports = wv()), ni.exports;
  }
  var ci = {
    exports: {}
  }, Vl = {};
  var d0;
  function Wv() {
    if (d0) return Vl;
    d0 = 1;
    var v = di();
    function _(N) {
      var y = "https://react.dev/errors/" + N;
      if (1 < arguments.length) {
        y += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var z = 2; z < arguments.length; z++) y += "&args[]=" + encodeURIComponent(arguments[z]);
      }
      return "Minified React error #" + N + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function p() {
    }
    var r = {
      d: {
        f: p,
        r: function() {
          throw Error(_(522));
        },
        D: p,
        C: p,
        L: p,
        m: p,
        X: p,
        S: p,
        M: p
      },
      p: 0,
      findDOMNode: null
    }, D = Symbol.for("react.portal");
    function U(N, y, z) {
      var Q = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: D,
        key: Q == null ? null : "" + Q,
        children: N,
        containerInfo: y,
        implementation: z
      };
    }
    var G = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function $(N, y) {
      if (N === "font") return "";
      if (typeof y == "string") return y === "use-credentials" ? y : "";
    }
    return Vl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Vl.createPortal = function(N, y) {
      var z = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11) throw Error(_(299));
      return U(N, y, null, z);
    }, Vl.flushSync = function(N) {
      var y = G.T, z = r.p;
      try {
        if (G.T = null, r.p = 2, N) return N();
      } finally {
        G.T = y, r.p = z, r.d.f();
      }
    }, Vl.preconnect = function(N, y) {
      typeof N == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, r.d.C(N, y));
    }, Vl.prefetchDNS = function(N) {
      typeof N == "string" && r.d.D(N);
    }, Vl.preinit = function(N, y) {
      if (typeof N == "string" && y && typeof y.as == "string") {
        var z = y.as, Q = $(z, y.crossOrigin), x = typeof y.integrity == "string" ? y.integrity : void 0, Y = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
        z === "style" ? r.d.S(N, typeof y.precedence == "string" ? y.precedence : void 0, {
          crossOrigin: Q,
          integrity: x,
          fetchPriority: Y
        }) : z === "script" && r.d.X(N, {
          crossOrigin: Q,
          integrity: x,
          fetchPriority: Y,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0
        });
      }
    }, Vl.preinitModule = function(N, y) {
      if (typeof N == "string") if (typeof y == "object" && y !== null) {
        if (y.as == null || y.as === "script") {
          var z = $(y.as, y.crossOrigin);
          r.d.M(N, {
            crossOrigin: z,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0
          });
        }
      } else y == null && r.d.M(N);
    }, Vl.preload = function(N, y) {
      if (typeof N == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
        var z = y.as, Q = $(z, y.crossOrigin);
        r.d.L(N, z, {
          crossOrigin: Q,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0,
          type: typeof y.type == "string" ? y.type : void 0,
          fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
          referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
          imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
          imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
          media: typeof y.media == "string" ? y.media : void 0
        });
      }
    }, Vl.preloadModule = function(N, y) {
      if (typeof N == "string") if (y) {
        var z = $(y.as, y.crossOrigin);
        r.d.m(N, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: z,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else r.d.m(N);
    }, Vl.requestFormReset = function(N) {
      r.d.r(N);
    }, Vl.unstable_batchedUpdates = function(N, y) {
      return N(y);
    }, Vl.useFormState = function(N, y, z) {
      return G.H.useFormState(N, y, z);
    }, Vl.useFormStatus = function() {
      return G.H.useHostTransitionStatus();
    }, Vl.version = "19.1.0", Vl;
  }
  var v0;
  function $v() {
    if (v0) return ci.exports;
    v0 = 1;
    function v() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v);
      } catch (_) {
        console.error(_);
      }
    }
    return v(), ci.exports = Wv(), ci.exports;
  }
  var h0;
  function kv() {
    if (h0) return ge;
    h0 = 1;
    var v = Jv(), _ = di(), p = $v();
    function r(l) {
      var t = "https://react.dev/errors/" + l;
      if (1 < arguments.length) {
        t += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var a = 2; a < arguments.length; a++) t += "&args[]=" + encodeURIComponent(arguments[a]);
      }
      return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function D(l) {
      return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
    }
    function U(l) {
      var t = l, a = l;
      if (l.alternate) for (; t.return; ) t = t.return;
      else {
        l = t;
        do
          t = l, (t.flags & 4098) !== 0 && (a = t.return), l = t.return;
        while (l);
      }
      return t.tag === 3 ? a : null;
    }
    function G(l) {
      if (l.tag === 13) {
        var t = l.memoizedState;
        if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function $(l) {
      if (U(l) !== l) throw Error(r(188));
    }
    function N(l) {
      var t = l.alternate;
      if (!t) {
        if (t = U(l), t === null) throw Error(r(188));
        return t !== l ? null : l;
      }
      for (var a = l, u = t; ; ) {
        var e = a.return;
        if (e === null) break;
        var n = e.alternate;
        if (n === null) {
          if (u = e.return, u !== null) {
            a = u;
            continue;
          }
          break;
        }
        if (e.child === n.child) {
          for (n = e.child; n; ) {
            if (n === a) return $(e), l;
            if (n === u) return $(e), t;
            n = n.sibling;
          }
          throw Error(r(188));
        }
        if (a.return !== u.return) a = e, u = n;
        else {
          for (var f = false, c = e.child; c; ) {
            if (c === a) {
              f = true, a = e, u = n;
              break;
            }
            if (c === u) {
              f = true, u = e, a = n;
              break;
            }
            c = c.sibling;
          }
          if (!f) {
            for (c = n.child; c; ) {
              if (c === a) {
                f = true, a = n, u = e;
                break;
              }
              if (c === u) {
                f = true, u = n, a = e;
                break;
              }
              c = c.sibling;
            }
            if (!f) throw Error(r(189));
          }
        }
        if (a.alternate !== u) throw Error(r(190));
      }
      if (a.tag !== 3) throw Error(r(188));
      return a.stateNode.current === a ? l : t;
    }
    function y(l) {
      var t = l.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return l;
      for (l = l.child; l !== null; ) {
        if (t = y(l), t !== null) return t;
        l = l.sibling;
      }
      return null;
    }
    var z = Object.assign, Q = Symbol.for("react.element"), x = Symbol.for("react.transitional.element"), Y = Symbol.for("react.portal"), tl = Symbol.for("react.fragment"), X = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), cl = Symbol.for("react.provider"), al = Symbol.for("react.consumer"), ul = Symbol.for("react.context"), Ol = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), ml = Symbol.for("react.suspense_list"), Hl = Symbol.for("react.memo"), Sl = Symbol.for("react.lazy"), Cl = Symbol.for("react.activity"), Dt = Symbol.for("react.memo_cache_sentinel"), ct = Symbol.iterator;
    function Rl(l) {
      return l === null || typeof l != "object" ? null : (l = ct && l[ct] || l["@@iterator"], typeof l == "function" ? l : null);
    }
    var gt = Symbol.for("react.client.reference");
    function Rt(l) {
      if (l == null) return null;
      if (typeof l == "function") return l.$$typeof === gt ? null : l.displayName || l.name || null;
      if (typeof l == "string") return l;
      switch (l) {
        case tl:
          return "Fragment";
        case J:
          return "Profiler";
        case X:
          return "StrictMode";
        case k:
          return "Suspense";
        case ml:
          return "SuspenseList";
        case Cl:
          return "Activity";
      }
      if (typeof l == "object") switch (l.$$typeof) {
        case Y:
          return "Portal";
        case ul:
          return (l.displayName || "Context") + ".Provider";
        case al:
          return (l._context.displayName || "Context") + ".Consumer";
        case Ol:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Hl:
          return t = l.displayName || null, t !== null ? t : Rt(l.type) || "Memo";
        case Sl:
          t = l._payload, l = l._init;
          try {
            return Rt(l(t));
          } catch {
          }
      }
      return null;
    }
    var xl = Array.isArray, S = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, O = p.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = {
      pending: false,
      data: null,
      method: null,
      action: null
    }, w = [], s = -1;
    function E(l) {
      return {
        current: l
      };
    }
    function H(l) {
      0 > s || (l.current = w[s], w[s] = null, s--);
    }
    function R(l, t) {
      s++, w[s] = l.current, l.current = t;
    }
    var C = E(null), el = E(null), K = E(null), Fl = E(null);
    function bl(l, t) {
      switch (R(K, t), R(el, l), R(C, null), t.nodeType) {
        case 9:
        case 11:
          l = (l = t.documentElement) && (l = l.namespaceURI) ? qr(l) : 0;
          break;
        default:
          if (l = t.tagName, t = t.namespaceURI) t = qr(t), l = Br(t, l);
          else switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
      }
      H(C), R(C, l);
    }
    function Kt() {
      H(C), H(el), H(K);
    }
    function Qn(l) {
      l.memoizedState !== null && R(Fl, l);
      var t = C.current, a = Br(t, l.type);
      t !== a && (R(el, l), R(C, a));
    }
    function be(l) {
      el.current === l && (H(C), H(el)), Fl.current === l && (H(Fl), re._currentValue = q);
    }
    var Cn = Object.prototype.hasOwnProperty, Zn = v.unstable_scheduleCallback, Ln = v.unstable_cancelCallback, E0 = v.unstable_shouldYield, _0 = v.unstable_requestPaint, Et = v.unstable_now, A0 = v.unstable_getCurrentPriorityLevel, vi = v.unstable_ImmediatePriority, hi = v.unstable_UserBlockingPriority, Te = v.unstable_NormalPriority, M0 = v.unstable_LowPriority, yi = v.unstable_IdlePriority, z0 = v.log, O0 = v.unstable_setDisableYieldValue, bu = null, Il = null;
    function wt(l) {
      if (typeof z0 == "function" && O0(l), Il && typeof Il.setStrictMode == "function") try {
        Il.setStrictMode(bu, l);
      } catch {
      }
    }
    var Pl = Math.clz32 ? Math.clz32 : R0, p0 = Math.log, D0 = Math.LN2;
    function R0(l) {
      return l >>>= 0, l === 0 ? 32 : 31 - (p0(l) / D0 | 0) | 0;
    }
    var Ee = 256, _e = 4194304;
    function ma(l) {
      var t = l & 42;
      if (t !== 0) return t;
      switch (l & -l) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return l & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return l & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return l;
      }
    }
    function Ae(l, t, a) {
      var u = l.pendingLanes;
      if (u === 0) return 0;
      var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
      l = l.warmLanes;
      var c = u & 134217727;
      return c !== 0 ? (u = c & ~n, u !== 0 ? e = ma(u) : (f &= c, f !== 0 ? e = ma(f) : a || (a = c & ~l, a !== 0 && (e = ma(a))))) : (c = u & ~n, c !== 0 ? e = ma(c) : f !== 0 ? e = ma(f) : a || (a = u & ~l, a !== 0 && (e = ma(a)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, a = t & -t, n >= a || n === 32 && (a & 4194048) !== 0) ? t : e;
    }
    function Tu(l, t) {
      return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
    }
    function U0(l, t) {
      switch (l) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function mi() {
      var l = Ee;
      return Ee <<= 1, (Ee & 4194048) === 0 && (Ee = 256), l;
    }
    function gi() {
      var l = _e;
      return _e <<= 1, (_e & 62914560) === 0 && (_e = 4194304), l;
    }
    function Vn(l) {
      for (var t = [], a = 0; 31 > a; a++) t.push(l);
      return t;
    }
    function Eu(l, t) {
      l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
    }
    function N0(l, t, a, u, e, n) {
      var f = l.pendingLanes;
      l.pendingLanes = a, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= a, l.entangledLanes &= a, l.errorRecoveryDisabledLanes &= a, l.shellSuspendCounter = 0;
      var c = l.entanglements, i = l.expirationTimes, m = l.hiddenUpdates;
      for (a = f & ~a; 0 < a; ) {
        var T = 31 - Pl(a), M = 1 << T;
        c[T] = 0, i[T] = -1;
        var g = m[T];
        if (g !== null) for (m[T] = null, T = 0; T < g.length; T++) {
          var b = g[T];
          b !== null && (b.lane &= -536870913);
        }
        a &= ~M;
      }
      u !== 0 && Si(l, u, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
    }
    function Si(l, t, a) {
      l.pendingLanes |= t, l.suspendedLanes &= ~t;
      var u = 31 - Pl(t);
      l.entangledLanes |= t, l.entanglements[u] = l.entanglements[u] | 1073741824 | a & 4194090;
    }
    function bi(l, t) {
      var a = l.entangledLanes |= t;
      for (l = l.entanglements; a; ) {
        var u = 31 - Pl(a), e = 1 << u;
        e & t | l[u] & t && (l[u] |= t), a &= ~e;
      }
    }
    function Kn(l) {
      switch (l) {
        case 2:
          l = 1;
          break;
        case 8:
          l = 4;
          break;
        case 32:
          l = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          l = 128;
          break;
        case 268435456:
          l = 134217728;
          break;
        default:
          l = 0;
      }
      return l;
    }
    function wn(l) {
      return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
    }
    function Ti() {
      var l = O.p;
      return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : l0(l.type));
    }
    function H0(l, t) {
      var a = O.p;
      try {
        return O.p = l, t();
      } finally {
        O.p = a;
      }
    }
    var Jt = Math.random().toString(36).slice(2), Zl = "__reactFiber$" + Jt, wl = "__reactProps$" + Jt, qa = "__reactContainer$" + Jt, Jn = "__reactEvents$" + Jt, x0 = "__reactListeners$" + Jt, q0 = "__reactHandles$" + Jt, Ei = "__reactResources$" + Jt, _u = "__reactMarker$" + Jt;
    function Wn(l) {
      delete l[Zl], delete l[wl], delete l[Jn], delete l[x0], delete l[q0];
    }
    function Ba(l) {
      var t = l[Zl];
      if (t) return t;
      for (var a = l.parentNode; a; ) {
        if (t = a[qa] || a[Zl]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null) for (l = Gr(l); l !== null; ) {
            if (a = l[Zl]) return a;
            l = Gr(l);
          }
          return t;
        }
        l = a, a = l.parentNode;
      }
      return null;
    }
    function Ya(l) {
      if (l = l[Zl] || l[qa]) {
        var t = l.tag;
        if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return l;
      }
      return null;
    }
    function Au(l) {
      var t = l.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
      throw Error(r(33));
    }
    function Xa(l) {
      var t = l[Ei];
      return t || (t = l[Ei] = {
        hoistableStyles: /* @__PURE__ */ new Map(),
        hoistableScripts: /* @__PURE__ */ new Map()
      }), t;
    }
    function ql(l) {
      l[_u] = true;
    }
    var _i = /* @__PURE__ */ new Set(), Ai = {};
    function ga(l, t) {
      ja(l, t), ja(l + "Capture", t);
    }
    function ja(l, t) {
      for (Ai[l] = t, l = 0; l < t.length; l++) _i.add(t[l]);
    }
    var B0 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Mi = {}, zi = {};
    function Y0(l) {
      return Cn.call(zi, l) ? true : Cn.call(Mi, l) ? false : B0.test(l) ? zi[l] = true : (Mi[l] = true, false);
    }
    function Me(l, t, a) {
      if (Y0(t)) if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var u = t.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
    }
    function ze(l, t, a) {
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            l.removeAttribute(t);
            return;
        }
        l.setAttribute(t, "" + a);
      }
    }
    function Ut(l, t, a, u) {
      if (u === null) l.removeAttribute(a);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            l.removeAttribute(a);
            return;
        }
        l.setAttributeNS(t, a, "" + u);
      }
    }
    var $n, Oi;
    function Ga(l) {
      if ($n === void 0) try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        $n = t && t[1] || "", Oi = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return `
` + $n + l + Oi;
    }
    var kn = false;
    function Fn(l, t) {
      if (!l || kn) return "";
      kn = true;
      var a = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var u = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var M = function() {
                  throw Error();
                };
                if (Object.defineProperty(M.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(M, []);
                  } catch (b) {
                    var g = b;
                  }
                  Reflect.construct(l, [], M);
                } else {
                  try {
                    M.call();
                  } catch (b) {
                    g = b;
                  }
                  l.call(M.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (b) {
                  g = b;
                }
                (M = l()) && typeof M.catch == "function" && M.catch(function() {
                });
              }
            } catch (b) {
              if (b && g && typeof b.stack == "string") return [
                b.stack,
                g.stack
              ];
            }
            return [
              null,
              null
            ];
          }
        };
        u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var e = Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot, "name");
        e && e.configurable && Object.defineProperty(u.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot"
        });
        var n = u.DetermineComponentFrameRoot(), f = n[0], c = n[1];
        if (f && c) {
          var i = f.split(`
`), m = c.split(`
`);
          for (e = u = 0; u < i.length && !i[u].includes("DetermineComponentFrameRoot"); ) u++;
          for (; e < m.length && !m[e].includes("DetermineComponentFrameRoot"); ) e++;
          if (u === i.length || e === m.length) for (u = i.length - 1, e = m.length - 1; 1 <= u && 0 <= e && i[u] !== m[e]; ) e--;
          for (; 1 <= u && 0 <= e; u--, e--) if (i[u] !== m[e]) {
            if (u !== 1 || e !== 1) do
              if (u--, e--, 0 > e || i[u] !== m[e]) {
                var T = `
` + i[u].replace(" at new ", " at ");
                return l.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", l.displayName)), T;
              }
            while (1 <= u && 0 <= e);
            break;
          }
        }
      } finally {
        kn = false, Error.prepareStackTrace = a;
      }
      return (a = l ? l.displayName || l.name : "") ? Ga(a) : "";
    }
    function X0(l) {
      switch (l.tag) {
        case 26:
        case 27:
        case 5:
          return Ga(l.type);
        case 16:
          return Ga("Lazy");
        case 13:
          return Ga("Suspense");
        case 19:
          return Ga("SuspenseList");
        case 0:
        case 15:
          return Fn(l.type, false);
        case 11:
          return Fn(l.type.render, false);
        case 1:
          return Fn(l.type, true);
        case 31:
          return Ga("Activity");
        default:
          return "";
      }
    }
    function pi(l) {
      try {
        var t = "";
        do
          t += X0(l), l = l.return;
        while (l);
        return t;
      } catch (a) {
        return `
Error generating stack: ` + a.message + `
` + a.stack;
      }
    }
    function it(l) {
      switch (typeof l) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return l;
        case "object":
          return l;
        default:
          return "";
      }
    }
    function Di(l) {
      var t = l.type;
      return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function j0(l) {
      var t = Di(l) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t), u = "" + l[t];
      if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var e = a.get, n = a.set;
        return Object.defineProperty(l, t, {
          configurable: true,
          get: function() {
            return e.call(this);
          },
          set: function(f) {
            u = "" + f, n.call(this, f);
          }
        }), Object.defineProperty(l, t, {
          enumerable: a.enumerable
        }), {
          getValue: function() {
            return u;
          },
          setValue: function(f) {
            u = "" + f;
          },
          stopTracking: function() {
            l._valueTracker = null, delete l[t];
          }
        };
      }
    }
    function Oe(l) {
      l._valueTracker || (l._valueTracker = j0(l));
    }
    function Ri(l) {
      if (!l) return false;
      var t = l._valueTracker;
      if (!t) return true;
      var a = t.getValue(), u = "";
      return l && (u = Di(l) ? l.checked ? "true" : "false" : l.value), l = u, l !== a ? (t.setValue(l), true) : false;
    }
    function pe(l) {
      if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
      try {
        return l.activeElement || l.body;
      } catch {
        return l.body;
      }
    }
    var G0 = /[\n"\\]/g;
    function st(l) {
      return l.replace(G0, function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      });
    }
    function In(l, t, a, u, e, n, f, c) {
      l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + it(t)) : l.value !== "" + it(t) && (l.value = "" + it(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? Pn(l, f, it(t)) : a != null ? Pn(l, f, it(a)) : u != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + it(c) : l.removeAttribute("name");
    }
    function Ui(l, t, a, u, e, n, f, c) {
      if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || a != null) {
        if (!(n !== "submit" && n !== "reset" || t != null)) return;
        a = a != null ? "" + it(a) : "", t = t != null ? "" + it(t) : a, c || t === l.value || (l.value = t), l.defaultValue = t;
      }
      u = u ?? e, u = typeof u != "function" && typeof u != "symbol" && !!u, l.checked = c ? l.checked : !!u, l.defaultChecked = !!u, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f);
    }
    function Pn(l, t, a) {
      t === "number" && pe(l.ownerDocument) === l || l.defaultValue === "" + a || (l.defaultValue = "" + a);
    }
    function Qa(l, t, a, u) {
      if (l = l.options, t) {
        t = {};
        for (var e = 0; e < a.length; e++) t["$" + a[e]] = true;
        for (a = 0; a < l.length; a++) e = t.hasOwnProperty("$" + l[a].value), l[a].selected !== e && (l[a].selected = e), e && u && (l[a].defaultSelected = true);
      } else {
        for (a = "" + it(a), t = null, e = 0; e < l.length; e++) {
          if (l[e].value === a) {
            l[e].selected = true, u && (l[e].defaultSelected = true);
            return;
          }
          t !== null || l[e].disabled || (t = l[e]);
        }
        t !== null && (t.selected = true);
      }
    }
    function Ni(l, t, a) {
      if (t != null && (t = "" + it(t), t !== l.value && (l.value = t), a == null)) {
        l.defaultValue !== t && (l.defaultValue = t);
        return;
      }
      l.defaultValue = a != null ? "" + it(a) : "";
    }
    function Hi(l, t, a, u) {
      if (t == null) {
        if (u != null) {
          if (a != null) throw Error(r(92));
          if (xl(u)) {
            if (1 < u.length) throw Error(r(93));
            u = u[0];
          }
          a = u;
        }
        a == null && (a = ""), t = a;
      }
      a = it(t), l.defaultValue = a, u = l.textContent, u === a && u !== "" && u !== null && (l.value = u);
    }
    function Ca(l, t) {
      if (t) {
        var a = l.firstChild;
        if (a && a === l.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      l.textContent = t;
    }
    var Q0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function xi(l, t, a) {
      var u = t.indexOf("--") === 0;
      a == null || typeof a == "boolean" || a === "" ? u ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : u ? l.setProperty(t, a) : typeof a != "number" || a === 0 || Q0.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px";
    }
    function qi(l, t, a) {
      if (t != null && typeof t != "object") throw Error(r(62));
      if (l = l.style, a != null) {
        for (var u in a) !a.hasOwnProperty(u) || t != null && t.hasOwnProperty(u) || (u.indexOf("--") === 0 ? l.setProperty(u, "") : u === "float" ? l.cssFloat = "" : l[u] = "");
        for (var e in t) u = t[e], t.hasOwnProperty(e) && a[e] !== u && xi(l, e, u);
      } else for (var n in t) t.hasOwnProperty(n) && xi(l, n, t[n]);
    }
    function lf(l) {
      if (l.indexOf("-") === -1) return false;
      switch (l) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var C0 = /* @__PURE__ */ new Map([
      [
        "acceptCharset",
        "accept-charset"
      ],
      [
        "htmlFor",
        "for"
      ],
      [
        "httpEquiv",
        "http-equiv"
      ],
      [
        "crossOrigin",
        "crossorigin"
      ],
      [
        "accentHeight",
        "accent-height"
      ],
      [
        "alignmentBaseline",
        "alignment-baseline"
      ],
      [
        "arabicForm",
        "arabic-form"
      ],
      [
        "baselineShift",
        "baseline-shift"
      ],
      [
        "capHeight",
        "cap-height"
      ],
      [
        "clipPath",
        "clip-path"
      ],
      [
        "clipRule",
        "clip-rule"
      ],
      [
        "colorInterpolation",
        "color-interpolation"
      ],
      [
        "colorInterpolationFilters",
        "color-interpolation-filters"
      ],
      [
        "colorProfile",
        "color-profile"
      ],
      [
        "colorRendering",
        "color-rendering"
      ],
      [
        "dominantBaseline",
        "dominant-baseline"
      ],
      [
        "enableBackground",
        "enable-background"
      ],
      [
        "fillOpacity",
        "fill-opacity"
      ],
      [
        "fillRule",
        "fill-rule"
      ],
      [
        "floodColor",
        "flood-color"
      ],
      [
        "floodOpacity",
        "flood-opacity"
      ],
      [
        "fontFamily",
        "font-family"
      ],
      [
        "fontSize",
        "font-size"
      ],
      [
        "fontSizeAdjust",
        "font-size-adjust"
      ],
      [
        "fontStretch",
        "font-stretch"
      ],
      [
        "fontStyle",
        "font-style"
      ],
      [
        "fontVariant",
        "font-variant"
      ],
      [
        "fontWeight",
        "font-weight"
      ],
      [
        "glyphName",
        "glyph-name"
      ],
      [
        "glyphOrientationHorizontal",
        "glyph-orientation-horizontal"
      ],
      [
        "glyphOrientationVertical",
        "glyph-orientation-vertical"
      ],
      [
        "horizAdvX",
        "horiz-adv-x"
      ],
      [
        "horizOriginX",
        "horiz-origin-x"
      ],
      [
        "imageRendering",
        "image-rendering"
      ],
      [
        "letterSpacing",
        "letter-spacing"
      ],
      [
        "lightingColor",
        "lighting-color"
      ],
      [
        "markerEnd",
        "marker-end"
      ],
      [
        "markerMid",
        "marker-mid"
      ],
      [
        "markerStart",
        "marker-start"
      ],
      [
        "overlinePosition",
        "overline-position"
      ],
      [
        "overlineThickness",
        "overline-thickness"
      ],
      [
        "paintOrder",
        "paint-order"
      ],
      [
        "panose-1",
        "panose-1"
      ],
      [
        "pointerEvents",
        "pointer-events"
      ],
      [
        "renderingIntent",
        "rendering-intent"
      ],
      [
        "shapeRendering",
        "shape-rendering"
      ],
      [
        "stopColor",
        "stop-color"
      ],
      [
        "stopOpacity",
        "stop-opacity"
      ],
      [
        "strikethroughPosition",
        "strikethrough-position"
      ],
      [
        "strikethroughThickness",
        "strikethrough-thickness"
      ],
      [
        "strokeDasharray",
        "stroke-dasharray"
      ],
      [
        "strokeDashoffset",
        "stroke-dashoffset"
      ],
      [
        "strokeLinecap",
        "stroke-linecap"
      ],
      [
        "strokeLinejoin",
        "stroke-linejoin"
      ],
      [
        "strokeMiterlimit",
        "stroke-miterlimit"
      ],
      [
        "strokeOpacity",
        "stroke-opacity"
      ],
      [
        "strokeWidth",
        "stroke-width"
      ],
      [
        "textAnchor",
        "text-anchor"
      ],
      [
        "textDecoration",
        "text-decoration"
      ],
      [
        "textRendering",
        "text-rendering"
      ],
      [
        "transformOrigin",
        "transform-origin"
      ],
      [
        "underlinePosition",
        "underline-position"
      ],
      [
        "underlineThickness",
        "underline-thickness"
      ],
      [
        "unicodeBidi",
        "unicode-bidi"
      ],
      [
        "unicodeRange",
        "unicode-range"
      ],
      [
        "unitsPerEm",
        "units-per-em"
      ],
      [
        "vAlphabetic",
        "v-alphabetic"
      ],
      [
        "vHanging",
        "v-hanging"
      ],
      [
        "vIdeographic",
        "v-ideographic"
      ],
      [
        "vMathematical",
        "v-mathematical"
      ],
      [
        "vectorEffect",
        "vector-effect"
      ],
      [
        "vertAdvY",
        "vert-adv-y"
      ],
      [
        "vertOriginX",
        "vert-origin-x"
      ],
      [
        "vertOriginY",
        "vert-origin-y"
      ],
      [
        "wordSpacing",
        "word-spacing"
      ],
      [
        "writingMode",
        "writing-mode"
      ],
      [
        "xmlnsXlink",
        "xmlns:xlink"
      ],
      [
        "xHeight",
        "x-height"
      ]
    ]), Z0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function De(l) {
      return Z0.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
    }
    var tf = null;
    function af(l) {
      return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
    }
    var Za = null, La = null;
    function Bi(l) {
      var t = Ya(l);
      if (t && (l = t.stateNode)) {
        var a = l[wl] || null;
        l: switch (l = t.stateNode, t.type) {
          case "input":
            if (In(l, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), t = a.name, a.type === "radio" && t != null) {
              for (a = l; a.parentNode; ) a = a.parentNode;
              for (a = a.querySelectorAll('input[name="' + st("" + t) + '"][type="radio"]'), t = 0; t < a.length; t++) {
                var u = a[t];
                if (u !== l && u.form === l.form) {
                  var e = u[wl] || null;
                  if (!e) throw Error(r(90));
                  In(u, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name);
                }
              }
              for (t = 0; t < a.length; t++) u = a[t], u.form === l.form && Ri(u);
            }
            break l;
          case "textarea":
            Ni(l, a.value, a.defaultValue);
            break l;
          case "select":
            t = a.value, t != null && Qa(l, !!a.multiple, t, false);
        }
      }
    }
    var uf = false;
    function Yi(l, t, a) {
      if (uf) return l(t, a);
      uf = true;
      try {
        var u = l(t);
        return u;
      } finally {
        if (uf = false, (Za !== null || La !== null) && (hn(), Za && (t = Za, l = La, La = Za = null, Bi(t), l))) for (t = 0; t < l.length; t++) Bi(l[t]);
      }
    }
    function Mu(l, t) {
      var a = l.stateNode;
      if (a === null) return null;
      var u = a[wl] || null;
      if (u === null) return null;
      a = u[t];
      l: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (u = !u.disabled) || (l = l.type, u = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !u;
          break l;
        default:
          l = false;
      }
      if (l) return null;
      if (a && typeof a != "function") throw Error(r(231, t, typeof a));
      return a;
    }
    var Nt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ef = false;
    if (Nt) try {
      var zu = {};
      Object.defineProperty(zu, "passive", {
        get: function() {
          ef = true;
        }
      }), window.addEventListener("test", zu, zu), window.removeEventListener("test", zu, zu);
    } catch {
      ef = false;
    }
    var Wt = null, nf = null, Re = null;
    function Xi() {
      if (Re) return Re;
      var l, t = nf, a = t.length, u, e = "value" in Wt ? Wt.value : Wt.textContent, n = e.length;
      for (l = 0; l < a && t[l] === e[l]; l++) ;
      var f = a - l;
      for (u = 1; u <= f && t[a - u] === e[n - u]; u++) ;
      return Re = e.slice(l, 1 < u ? 1 - u : void 0);
    }
    function Ue(l) {
      var t = l.keyCode;
      return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
    }
    function Ne() {
      return true;
    }
    function ji() {
      return false;
    }
    function Jl(l) {
      function t(a, u, e, n, f) {
        this._reactName = a, this._targetInst = e, this.type = u, this.nativeEvent = n, this.target = f, this.currentTarget = null;
        for (var c in l) l.hasOwnProperty(c) && (a = l[c], this[c] = a ? a(n) : n[c]);
        return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === false) ? Ne : ji, this.isPropagationStopped = ji, this;
      }
      return z(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = false), this.isDefaultPrevented = Ne);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = true), this.isPropagationStopped = Ne);
        },
        persist: function() {
        },
        isPersistent: Ne
      }), t;
    }
    var Sa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, He = Jl(Sa), Ou = z({}, Sa, {
      view: 0,
      detail: 0
    }), L0 = Jl(Ou), ff, cf, pu, xe = z({}, Ou, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: of,
      button: 0,
      buttons: 0,
      relatedTarget: function(l) {
        return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
      },
      movementX: function(l) {
        return "movementX" in l ? l.movementX : (l !== pu && (pu && l.type === "mousemove" ? (ff = l.screenX - pu.screenX, cf = l.screenY - pu.screenY) : cf = ff = 0, pu = l), ff);
      },
      movementY: function(l) {
        return "movementY" in l ? l.movementY : cf;
      }
    }), Gi = Jl(xe), V0 = z({}, xe, {
      dataTransfer: 0
    }), K0 = Jl(V0), w0 = z({}, Ou, {
      relatedTarget: 0
    }), sf = Jl(w0), J0 = z({}, Sa, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), W0 = Jl(J0), $0 = z({}, Sa, {
      clipboardData: function(l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      }
    }), k0 = Jl($0), F0 = z({}, Sa, {
      data: 0
    }), Qi = Jl(F0), I0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, P0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, ld = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function td(l) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(l) : (l = ld[l]) ? !!t[l] : false;
    }
    function of() {
      return td;
    }
    var ad = z({}, Ou, {
      key: function(l) {
        if (l.key) {
          var t = I0[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress" ? (l = Ue(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? P0[l.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: of,
      charCode: function(l) {
        return l.type === "keypress" ? Ue(l) : 0;
      },
      keyCode: function(l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function(l) {
        return l.type === "keypress" ? Ue(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      }
    }), ud = Jl(ad), ed = z({}, xe, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Ci = Jl(ed), nd = z({}, Ou, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: of
    }), fd = Jl(nd), cd = z({}, Sa, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), id = Jl(cd), sd = z({}, xe, {
      deltaX: function(l) {
        return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
      },
      deltaY: function(l) {
        return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), od = Jl(sd), rd = z({}, Sa, {
      newState: 0,
      oldState: 0
    }), dd = Jl(rd), vd = [
      9,
      13,
      27,
      32
    ], rf = Nt && "CompositionEvent" in window, Du = null;
    Nt && "documentMode" in document && (Du = document.documentMode);
    var hd = Nt && "TextEvent" in window && !Du, Zi = Nt && (!rf || Du && 8 < Du && 11 >= Du), Li = " ", Vi = false;
    function Ki(l, t) {
      switch (l) {
        case "keyup":
          return vd.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function wi(l) {
      return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
    }
    var Va = false;
    function yd(l, t) {
      switch (l) {
        case "compositionend":
          return wi(t);
        case "keypress":
          return t.which !== 32 ? null : (Vi = true, Li);
        case "textInput":
          return l = t.data, l === Li && Vi ? null : l;
        default:
          return null;
      }
    }
    function md(l, t) {
      if (Va) return l === "compositionend" || !rf && Ki(l, t) ? (l = Xi(), Re = nf = Wt = null, Va = false, l) : null;
      switch (l) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Zi && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    var gd = {
      color: true,
      date: true,
      datetime: true,
      "datetime-local": true,
      email: true,
      month: true,
      number: true,
      password: true,
      range: true,
      search: true,
      tel: true,
      text: true,
      time: true,
      url: true,
      week: true
    };
    function Ji(l) {
      var t = l && l.nodeName && l.nodeName.toLowerCase();
      return t === "input" ? !!gd[l.type] : t === "textarea";
    }
    function Wi(l, t, a, u) {
      Za ? La ? La.push(u) : La = [
        u
      ] : Za = u, t = Tn(t, "onChange"), 0 < t.length && (a = new He("onChange", "change", null, a, u), l.push({
        event: a,
        listeners: t
      }));
    }
    var Ru = null, Uu = null;
    function Sd(l) {
      Rr(l, 0);
    }
    function qe(l) {
      var t = Au(l);
      if (Ri(t)) return l;
    }
    function $i(l, t) {
      if (l === "change") return t;
    }
    var ki = false;
    if (Nt) {
      var df;
      if (Nt) {
        var vf = "oninput" in document;
        if (!vf) {
          var Fi = document.createElement("div");
          Fi.setAttribute("oninput", "return;"), vf = typeof Fi.oninput == "function";
        }
        df = vf;
      } else df = false;
      ki = df && (!document.documentMode || 9 < document.documentMode);
    }
    function Ii() {
      Ru && (Ru.detachEvent("onpropertychange", Pi), Uu = Ru = null);
    }
    function Pi(l) {
      if (l.propertyName === "value" && qe(Uu)) {
        var t = [];
        Wi(t, Uu, l, af(l)), Yi(Sd, t);
      }
    }
    function bd(l, t, a) {
      l === "focusin" ? (Ii(), Ru = t, Uu = a, Ru.attachEvent("onpropertychange", Pi)) : l === "focusout" && Ii();
    }
    function Td(l) {
      if (l === "selectionchange" || l === "keyup" || l === "keydown") return qe(Uu);
    }
    function Ed(l, t) {
      if (l === "click") return qe(t);
    }
    function _d(l, t) {
      if (l === "input" || l === "change") return qe(t);
    }
    function Ad(l, t) {
      return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
    }
    var lt = typeof Object.is == "function" ? Object.is : Ad;
    function Nu(l, t) {
      if (lt(l, t)) return true;
      if (typeof l != "object" || l === null || typeof t != "object" || t === null) return false;
      var a = Object.keys(l), u = Object.keys(t);
      if (a.length !== u.length) return false;
      for (u = 0; u < a.length; u++) {
        var e = a[u];
        if (!Cn.call(t, e) || !lt(l[e], t[e])) return false;
      }
      return true;
    }
    function ls(l) {
      for (; l && l.firstChild; ) l = l.firstChild;
      return l;
    }
    function ts(l, t) {
      var a = ls(l);
      l = 0;
      for (var u; a; ) {
        if (a.nodeType === 3) {
          if (u = l + a.textContent.length, l <= t && u >= t) return {
            node: a,
            offset: t - l
          };
          l = u;
        }
        l: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break l;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = ls(a);
      }
    }
    function as(l, t) {
      return l && t ? l === t ? true : l && l.nodeType === 3 ? false : t && t.nodeType === 3 ? as(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : false : false;
    }
    function us(l) {
      l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
      for (var t = pe(l.document); t instanceof l.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = false;
        }
        if (a) l = t.contentWindow;
        else break;
        t = pe(l.document);
      }
      return t;
    }
    function hf(l) {
      var t = l && l.nodeName && l.nodeName.toLowerCase();
      return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
    }
    var Md = Nt && "documentMode" in document && 11 >= document.documentMode, Ka = null, yf = null, Hu = null, mf = false;
    function es(l, t, a) {
      var u = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      mf || Ka == null || Ka !== pe(u) || (u = Ka, "selectionStart" in u && hf(u) ? u = {
        start: u.selectionStart,
        end: u.selectionEnd
      } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
        anchorNode: u.anchorNode,
        anchorOffset: u.anchorOffset,
        focusNode: u.focusNode,
        focusOffset: u.focusOffset
      }), Hu && Nu(Hu, u) || (Hu = u, u = Tn(yf, "onSelect"), 0 < u.length && (t = new He("onSelect", "select", null, t, a), l.push({
        event: t,
        listeners: u
      }), t.target = Ka)));
    }
    function ba(l, t) {
      var a = {};
      return a[l.toLowerCase()] = t.toLowerCase(), a["Webkit" + l] = "webkit" + t, a["Moz" + l] = "moz" + t, a;
    }
    var wa = {
      animationend: ba("Animation", "AnimationEnd"),
      animationiteration: ba("Animation", "AnimationIteration"),
      animationstart: ba("Animation", "AnimationStart"),
      transitionrun: ba("Transition", "TransitionRun"),
      transitionstart: ba("Transition", "TransitionStart"),
      transitioncancel: ba("Transition", "TransitionCancel"),
      transitionend: ba("Transition", "TransitionEnd")
    }, gf = {}, ns = {};
    Nt && (ns = document.createElement("div").style, "AnimationEvent" in window || (delete wa.animationend.animation, delete wa.animationiteration.animation, delete wa.animationstart.animation), "TransitionEvent" in window || delete wa.transitionend.transition);
    function Ta(l) {
      if (gf[l]) return gf[l];
      if (!wa[l]) return l;
      var t = wa[l], a;
      for (a in t) if (t.hasOwnProperty(a) && a in ns) return gf[l] = t[a];
      return l;
    }
    var fs = Ta("animationend"), cs = Ta("animationiteration"), is = Ta("animationstart"), zd = Ta("transitionrun"), Od = Ta("transitionstart"), pd = Ta("transitioncancel"), ss = Ta("transitionend"), os = /* @__PURE__ */ new Map(), Sf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Sf.push("scrollEnd");
    function St(l, t) {
      os.set(l, t), ga(t, [
        l
      ]);
    }
    var rs = /* @__PURE__ */ new WeakMap();
    function ot(l, t) {
      if (typeof l == "object" && l !== null) {
        var a = rs.get(l);
        return a !== void 0 ? a : (t = {
          value: l,
          source: t,
          stack: pi(t)
        }, rs.set(l, t), t);
      }
      return {
        value: l,
        source: t,
        stack: pi(t)
      };
    }
    var rt = [], Ja = 0, bf = 0;
    function Be() {
      for (var l = Ja, t = bf = Ja = 0; t < l; ) {
        var a = rt[t];
        rt[t++] = null;
        var u = rt[t];
        rt[t++] = null;
        var e = rt[t];
        rt[t++] = null;
        var n = rt[t];
        if (rt[t++] = null, u !== null && e !== null) {
          var f = u.pending;
          f === null ? e.next = e : (e.next = f.next, f.next = e), u.pending = e;
        }
        n !== 0 && ds(a, e, n);
      }
    }
    function Ye(l, t, a, u) {
      rt[Ja++] = l, rt[Ja++] = t, rt[Ja++] = a, rt[Ja++] = u, bf |= u, l.lanes |= u, l = l.alternate, l !== null && (l.lanes |= u);
    }
    function Tf(l, t, a, u) {
      return Ye(l, t, a, u), Xe(l);
    }
    function Wa(l, t) {
      return Ye(l, null, null, t), Xe(l);
    }
    function ds(l, t, a) {
      l.lanes |= a;
      var u = l.alternate;
      u !== null && (u.lanes |= a);
      for (var e = false, n = l.return; n !== null; ) n.childLanes |= a, u = n.alternate, u !== null && (u.childLanes |= a), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = true)), l = n, n = n.return;
      return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - Pl(a), l = n.hiddenUpdates, u = l[e], u === null ? l[e] = [
        t
      ] : u.push(t), t.lane = a | 536870912), n) : null;
    }
    function Xe(l) {
      if (50 < ue) throw ue = 0, Oc = null, Error(r(185));
      for (var t = l.return; t !== null; ) l = t, t = l.return;
      return l.tag === 3 ? l.stateNode : null;
    }
    var $a = {};
    function Dd(l, t, a, u) {
      this.tag = l, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function tt(l, t, a, u) {
      return new Dd(l, t, a, u);
    }
    function Ef(l) {
      return l = l.prototype, !(!l || !l.isReactComponent);
    }
    function Ht(l, t) {
      var a = l.alternate;
      return a === null ? (a = tt(l.tag, t, l.key, l.mode), a.elementType = l.elementType, a.type = l.type, a.stateNode = l.stateNode, a.alternate = l, l.alternate = a) : (a.pendingProps = t, a.type = l.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = l.flags & 65011712, a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, t = l.dependencies, a.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
      }, a.sibling = l.sibling, a.index = l.index, a.ref = l.ref, a.refCleanup = l.refCleanup, a;
    }
    function vs(l, t) {
      l.flags &= 65011714;
      var a = l.alternate;
      return a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
      }), l;
    }
    function je(l, t, a, u, e, n) {
      var f = 0;
      if (u = l, typeof l == "function") Ef(l) && (f = 1);
      else if (typeof l == "string") f = Uv(l, a, C.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
      else l: switch (l) {
        case Cl:
          return l = tt(31, a, t, e), l.elementType = Cl, l.lanes = n, l;
        case tl:
          return Ea(a.children, e, n, t);
        case X:
          f = 8, e |= 24;
          break;
        case J:
          return l = tt(12, a, t, e | 2), l.elementType = J, l.lanes = n, l;
        case k:
          return l = tt(13, a, t, e), l.elementType = k, l.lanes = n, l;
        case ml:
          return l = tt(19, a, t, e), l.elementType = ml, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null) switch (l.$$typeof) {
            case cl:
            case ul:
              f = 10;
              break l;
            case al:
              f = 9;
              break l;
            case Ol:
              f = 11;
              break l;
            case Hl:
              f = 14;
              break l;
            case Sl:
              f = 16, u = null;
              break l;
          }
          f = 29, a = Error(r(130, l === null ? "null" : typeof l, "")), u = null;
      }
      return t = tt(f, a, t, e), t.elementType = l, t.type = u, t.lanes = n, t;
    }
    function Ea(l, t, a, u) {
      return l = tt(7, l, u, t), l.lanes = a, l;
    }
    function _f(l, t, a) {
      return l = tt(6, l, null, t), l.lanes = a, l;
    }
    function Af(l, t, a) {
      return t = tt(4, l.children !== null ? l.children : [], l.key, t), t.lanes = a, t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation
      }, t;
    }
    var ka = [], Fa = 0, Ge = null, Qe = 0, dt = [], vt = 0, _a = null, xt = 1, qt = "";
    function Aa(l, t) {
      ka[Fa++] = Qe, ka[Fa++] = Ge, Ge = l, Qe = t;
    }
    function hs(l, t, a) {
      dt[vt++] = xt, dt[vt++] = qt, dt[vt++] = _a, _a = l;
      var u = xt;
      l = qt;
      var e = 32 - Pl(u) - 1;
      u &= ~(1 << e), a += 1;
      var n = 32 - Pl(t) + e;
      if (30 < n) {
        var f = e - e % 5;
        n = (u & (1 << f) - 1).toString(32), u >>= f, e -= f, xt = 1 << 32 - Pl(t) + e | a << e | u, qt = n + l;
      } else xt = 1 << n | a << e | u, qt = l;
    }
    function Mf(l) {
      l.return !== null && (Aa(l, 1), hs(l, 1, 0));
    }
    function zf(l) {
      for (; l === Ge; ) Ge = ka[--Fa], ka[Fa] = null, Qe = ka[--Fa], ka[Fa] = null;
      for (; l === _a; ) _a = dt[--vt], dt[vt] = null, qt = dt[--vt], dt[vt] = null, xt = dt[--vt], dt[vt] = null;
    }
    var Kl = null, _l = null, il = false, Ma = null, _t = false, Of = Error(r(519));
    function za(l) {
      var t = Error(r(418, ""));
      throw Bu(ot(t, l)), Of;
    }
    function ys(l) {
      var t = l.stateNode, a = l.type, u = l.memoizedProps;
      switch (t[Zl] = l, t[wl] = u, a) {
        case "dialog":
          ll("cancel", t), ll("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          ll("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < ne.length; a++) ll(ne[a], t);
          break;
        case "source":
          ll("error", t);
          break;
        case "img":
        case "image":
        case "link":
          ll("error", t), ll("load", t);
          break;
        case "details":
          ll("toggle", t);
          break;
        case "input":
          ll("invalid", t), Ui(t, u.value, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name, true), Oe(t);
          break;
        case "select":
          ll("invalid", t);
          break;
        case "textarea":
          ll("invalid", t), Hi(t, u.value, u.defaultValue, u.children), Oe(t);
      }
      a = u.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || u.suppressHydrationWarning === true || xr(t.textContent, a) ? (u.popover != null && (ll("beforetoggle", t), ll("toggle", t)), u.onScroll != null && ll("scroll", t), u.onScrollEnd != null && ll("scrollend", t), u.onClick != null && (t.onclick = En), t = true) : t = false, t || za(l);
    }
    function ms(l) {
      for (Kl = l.return; Kl; ) switch (Kl.tag) {
        case 5:
        case 13:
          _t = false;
          return;
        case 27:
        case 3:
          _t = true;
          return;
        default:
          Kl = Kl.return;
      }
    }
    function xu(l) {
      if (l !== Kl) return false;
      if (!il) return ms(l), il = true, false;
      var t = l.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || Zc(l.type, l.memoizedProps)), a = !a), a && _l && za(l), ms(l), t === 13) {
        if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(317));
        l: {
          for (l = l.nextSibling, t = 0; l; ) {
            if (l.nodeType === 8) if (a = l.data, a === "/$") {
              if (t === 0) {
                _l = Tt(l.nextSibling);
                break l;
              }
              t--;
            } else a !== "$" && a !== "$!" && a !== "$?" || t++;
            l = l.nextSibling;
          }
          _l = null;
        }
      } else t === 27 ? (t = _l, oa(l.type) ? (l = wc, wc = null, _l = l) : _l = t) : _l = Kl ? Tt(l.stateNode.nextSibling) : null;
      return true;
    }
    function qu() {
      _l = Kl = null, il = false;
    }
    function gs() {
      var l = Ma;
      return l !== null && (kl === null ? kl = l : kl.push.apply(kl, l), Ma = null), l;
    }
    function Bu(l) {
      Ma === null ? Ma = [
        l
      ] : Ma.push(l);
    }
    var pf = E(null), Oa = null, Bt = null;
    function $t(l, t, a) {
      R(pf, t._currentValue), t._currentValue = a;
    }
    function Yt(l) {
      l._currentValue = pf.current, H(pf);
    }
    function Df(l, t, a) {
      for (; l !== null; ) {
        var u = l.alternate;
        if ((l.childLanes & t) !== t ? (l.childLanes |= t, u !== null && (u.childLanes |= t)) : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t), l === a) break;
        l = l.return;
      }
    }
    function Rf(l, t, a, u) {
      var e = l.child;
      for (e !== null && (e.return = l); e !== null; ) {
        var n = e.dependencies;
        if (n !== null) {
          var f = e.child;
          n = n.firstContext;
          l: for (; n !== null; ) {
            var c = n;
            n = e;
            for (var i = 0; i < t.length; i++) if (c.context === t[i]) {
              n.lanes |= a, c = n.alternate, c !== null && (c.lanes |= a), Df(n.return, a, l), u || (f = null);
              break l;
            }
            n = c.next;
          }
        } else if (e.tag === 18) {
          if (f = e.return, f === null) throw Error(r(341));
          f.lanes |= a, n = f.alternate, n !== null && (n.lanes |= a), Df(f, a, l), f = null;
        } else f = e.child;
        if (f !== null) f.return = e;
        else for (f = e; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (e = f.sibling, e !== null) {
            e.return = f.return, f = e;
            break;
          }
          f = f.return;
        }
        e = f;
      }
    }
    function Yu(l, t, a, u) {
      l = null;
      for (var e = t, n = false; e !== null; ) {
        if (!n) {
          if ((e.flags & 524288) !== 0) n = true;
          else if ((e.flags & 262144) !== 0) break;
        }
        if (e.tag === 10) {
          var f = e.alternate;
          if (f === null) throw Error(r(387));
          if (f = f.memoizedProps, f !== null) {
            var c = e.type;
            lt(e.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [
              c
            ]);
          }
        } else if (e === Fl.current) {
          if (f = e.alternate, f === null) throw Error(r(387));
          f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(re) : l = [
            re
          ]);
        }
        e = e.return;
      }
      l !== null && Rf(t, l, a, u), t.flags |= 262144;
    }
    function Ce(l) {
      for (l = l.firstContext; l !== null; ) {
        if (!lt(l.context._currentValue, l.memoizedValue)) return true;
        l = l.next;
      }
      return false;
    }
    function pa(l) {
      Oa = l, Bt = null, l = l.dependencies, l !== null && (l.firstContext = null);
    }
    function Ll(l) {
      return Ss(Oa, l);
    }
    function Ze(l, t) {
      return Oa === null && pa(l), Ss(l, t);
    }
    function Ss(l, t) {
      var a = t._currentValue;
      if (t = {
        context: t,
        memoizedValue: a,
        next: null
      }, Bt === null) {
        if (l === null) throw Error(r(308));
        Bt = t, l.dependencies = {
          lanes: 0,
          firstContext: t
        }, l.flags |= 524288;
      } else Bt = Bt.next = t;
      return a;
    }
    var Rd = typeof AbortController < "u" ? AbortController : function() {
      var l = [], t = this.signal = {
        aborted: false,
        addEventListener: function(a, u) {
          l.push(u);
        }
      };
      this.abort = function() {
        t.aborted = true, l.forEach(function(a) {
          return a();
        });
      };
    }, Ud = v.unstable_scheduleCallback, Nd = v.unstable_NormalPriority, Ul = {
      $$typeof: ul,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
    function Uf() {
      return {
        controller: new Rd(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function Xu(l) {
      l.refCount--, l.refCount === 0 && Ud(Nd, function() {
        l.controller.abort();
      });
    }
    var ju = null, Nf = 0, Ia = 0, Pa = null;
    function Hd(l, t) {
      if (ju === null) {
        var a = ju = [];
        Nf = 0, Ia = xc(), Pa = {
          status: "pending",
          value: void 0,
          then: function(u) {
            a.push(u);
          }
        };
      }
      return Nf++, t.then(bs, bs), t;
    }
    function bs() {
      if (--Nf === 0 && ju !== null) {
        Pa !== null && (Pa.status = "fulfilled");
        var l = ju;
        ju = null, Ia = 0, Pa = null;
        for (var t = 0; t < l.length; t++) (0, l[t])();
      }
    }
    function xd(l, t) {
      var a = [], u = {
        status: "pending",
        value: null,
        reason: null,
        then: function(e) {
          a.push(e);
        }
      };
      return l.then(function() {
        u.status = "fulfilled", u.value = t;
        for (var e = 0; e < a.length; e++) (0, a[e])(t);
      }, function(e) {
        for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++) (0, a[e])(void 0);
      }), u;
    }
    var Ts = S.S;
    S.S = function(l, t) {
      typeof t == "object" && t !== null && typeof t.then == "function" && Hd(l, t), Ts !== null && Ts(l, t);
    };
    var Da = E(null);
    function Hf() {
      var l = Da.current;
      return l !== null ? l : yl.pooledCache;
    }
    function Le(l, t) {
      t === null ? R(Da, Da.current) : R(Da, t.pool);
    }
    function Es() {
      var l = Hf();
      return l === null ? null : {
        parent: Ul._currentValue,
        pool: l
      };
    }
    var Gu = Error(r(460)), _s = Error(r(474)), Ve = Error(r(542)), xf = {
      then: function() {
      }
    };
    function As(l) {
      return l = l.status, l === "fulfilled" || l === "rejected";
    }
    function Ke() {
    }
    function Ms(l, t, a) {
      switch (a = l[a], a === void 0 ? l.push(t) : a !== t && (t.then(Ke, Ke), t = a), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw l = t.reason, Os(l), l;
        default:
          if (typeof t.status == "string") t.then(Ke, Ke);
          else {
            if (l = yl, l !== null && 100 < l.shellSuspendCounter) throw Error(r(482));
            l = t, l.status = "pending", l.then(function(u) {
              if (t.status === "pending") {
                var e = t;
                e.status = "fulfilled", e.value = u;
              }
            }, function(u) {
              if (t.status === "pending") {
                var e = t;
                e.status = "rejected", e.reason = u;
              }
            });
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw l = t.reason, Os(l), l;
          }
          throw Qu = t, Gu;
      }
    }
    var Qu = null;
    function zs() {
      if (Qu === null) throw Error(r(459));
      var l = Qu;
      return Qu = null, l;
    }
    function Os(l) {
      if (l === Gu || l === Ve) throw Error(r(483));
    }
    var kt = false;
    function qf(l) {
      l.updateQueue = {
        baseState: l.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          lanes: 0,
          hiddenCallbacks: null
        },
        callbacks: null
      };
    }
    function Bf(l, t) {
      l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
        baseState: l.baseState,
        firstBaseUpdate: l.firstBaseUpdate,
        lastBaseUpdate: l.lastBaseUpdate,
        shared: l.shared,
        callbacks: null
      });
    }
    function Ft(l) {
      return {
        lane: l,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function It(l, t, a) {
      var u = l.updateQueue;
      if (u === null) return null;
      if (u = u.shared, (sl & 2) !== 0) {
        var e = u.pending;
        return e === null ? t.next = t : (t.next = e.next, e.next = t), u.pending = t, t = Xe(l), ds(l, null, a), t;
      }
      return Ye(l, u, t, a), Xe(l);
    }
    function Cu(l, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var u = t.lanes;
        u &= l.pendingLanes, a |= u, t.lanes = a, bi(l, a);
      }
    }
    function Yf(l, t) {
      var a = l.updateQueue, u = l.alternate;
      if (u !== null && (u = u.updateQueue, a === u)) {
        var e = null, n = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var f = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            n === null ? e = n = f : n = n.next = f, a = a.next;
          } while (a !== null);
          n === null ? e = n = t : n = n.next = t;
        } else e = n = t;
        a = {
          baseState: u.baseState,
          firstBaseUpdate: e,
          lastBaseUpdate: n,
          shared: u.shared,
          callbacks: u.callbacks
        }, l.updateQueue = a;
        return;
      }
      l = a.lastBaseUpdate, l === null ? a.firstBaseUpdate = t : l.next = t, a.lastBaseUpdate = t;
    }
    var Xf = false;
    function Zu() {
      if (Xf) {
        var l = Pa;
        if (l !== null) throw l;
      }
    }
    function Lu(l, t, a, u) {
      Xf = false;
      var e = l.updateQueue;
      kt = false;
      var n = e.firstBaseUpdate, f = e.lastBaseUpdate, c = e.shared.pending;
      if (c !== null) {
        e.shared.pending = null;
        var i = c, m = i.next;
        i.next = null, f === null ? n = m : f.next = m, f = i;
        var T = l.alternate;
        T !== null && (T = T.updateQueue, c = T.lastBaseUpdate, c !== f && (c === null ? T.firstBaseUpdate = m : c.next = m, T.lastBaseUpdate = i));
      }
      if (n !== null) {
        var M = e.baseState;
        f = 0, T = m = i = null, c = n;
        do {
          var g = c.lane & -536870913, b = g !== c.lane;
          if (b ? (nl & g) === g : (u & g) === g) {
            g !== 0 && g === Ia && (Xf = true), T !== null && (T = T.next = {
              lane: 0,
              tag: c.tag,
              payload: c.payload,
              callback: null,
              next: null
            });
            l: {
              var V = l, Z = c;
              g = t;
              var vl = a;
              switch (Z.tag) {
                case 1:
                  if (V = Z.payload, typeof V == "function") {
                    M = V.call(vl, M, g);
                    break l;
                  }
                  M = V;
                  break l;
                case 3:
                  V.flags = V.flags & -65537 | 128;
                case 0:
                  if (V = Z.payload, g = typeof V == "function" ? V.call(vl, M, g) : V, g == null) break l;
                  M = z({}, M, g);
                  break l;
                case 2:
                  kt = true;
              }
            }
            g = c.callback, g !== null && (l.flags |= 64, b && (l.flags |= 8192), b = e.callbacks, b === null ? e.callbacks = [
              g
            ] : b.push(g));
          } else b = {
            lane: g,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, T === null ? (m = T = b, i = M) : T = T.next = b, f |= g;
          if (c = c.next, c === null) {
            if (c = e.shared.pending, c === null) break;
            b = c, c = b.next, b.next = null, e.lastBaseUpdate = b, e.shared.pending = null;
          }
        } while (true);
        T === null && (i = M), e.baseState = i, e.firstBaseUpdate = m, e.lastBaseUpdate = T, n === null && (e.shared.lanes = 0), fa |= f, l.lanes = f, l.memoizedState = M;
      }
    }
    function ps(l, t) {
      if (typeof l != "function") throw Error(r(191, l));
      l.call(t);
    }
    function Ds(l, t) {
      var a = l.callbacks;
      if (a !== null) for (l.callbacks = null, l = 0; l < a.length; l++) ps(a[l], t);
    }
    var lu = E(null), we = E(0);
    function Rs(l, t) {
      l = Lt, R(we, l), R(lu, t), Lt = l | t.baseLanes;
    }
    function jf() {
      R(we, Lt), R(lu, lu.current);
    }
    function Gf() {
      Lt = we.current, H(lu), H(we);
    }
    var Pt = 0, F = null, rl = null, pl = null, Je = false, tu = false, Ra = false, We = 0, Vu = 0, au = null, qd = 0;
    function Ml() {
      throw Error(r(321));
    }
    function Qf(l, t) {
      if (t === null) return false;
      for (var a = 0; a < t.length && a < l.length; a++) if (!lt(l[a], t[a])) return false;
      return true;
    }
    function Cf(l, t, a, u, e, n) {
      return Pt = n, F = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, S.H = l === null || l.memoizedState === null ? vo : ho, Ra = false, n = a(u, e), Ra = false, tu && (n = Ns(t, a, u, e)), Us(l), n;
    }
    function Us(l) {
      S.H = ln;
      var t = rl !== null && rl.next !== null;
      if (Pt = 0, pl = rl = F = null, Je = false, Vu = 0, au = null, t) throw Error(r(300));
      l === null || Bl || (l = l.dependencies, l !== null && Ce(l) && (Bl = true));
    }
    function Ns(l, t, a, u) {
      F = l;
      var e = 0;
      do {
        if (tu && (au = null), Vu = 0, tu = false, 25 <= e) throw Error(r(301));
        if (e += 1, pl = rl = null, l.updateQueue != null) {
          var n = l.updateQueue;
          n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
        }
        S.H = Cd, n = t(a, u);
      } while (tu);
      return n;
    }
    function Bd() {
      var l = S.H, t = l.useState()[0];
      return t = typeof t.then == "function" ? Ku(t) : t, l = l.useState()[0], (rl !== null ? rl.memoizedState : null) !== l && (F.flags |= 1024), t;
    }
    function Zf() {
      var l = We !== 0;
      return We = 0, l;
    }
    function Lf(l, t, a) {
      t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~a;
    }
    function Vf(l) {
      if (Je) {
        for (l = l.memoizedState; l !== null; ) {
          var t = l.queue;
          t !== null && (t.pending = null), l = l.next;
        }
        Je = false;
      }
      Pt = 0, pl = rl = F = null, tu = false, Vu = We = 0, au = null;
    }
    function Wl() {
      var l = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return pl === null ? F.memoizedState = pl = l : pl = pl.next = l, pl;
    }
    function Dl() {
      if (rl === null) {
        var l = F.alternate;
        l = l !== null ? l.memoizedState : null;
      } else l = rl.next;
      var t = pl === null ? F.memoizedState : pl.next;
      if (t !== null) pl = t, rl = l;
      else {
        if (l === null) throw F.alternate === null ? Error(r(467)) : Error(r(310));
        rl = l, l = {
          memoizedState: rl.memoizedState,
          baseState: rl.baseState,
          baseQueue: rl.baseQueue,
          queue: rl.queue,
          next: null
        }, pl === null ? F.memoizedState = pl = l : pl = pl.next = l;
      }
      return pl;
    }
    function Kf() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
    }
    function Ku(l) {
      var t = Vu;
      return Vu += 1, au === null && (au = []), l = Ms(au, l, t), t = F, (pl === null ? t.memoizedState : pl.next) === null && (t = t.alternate, S.H = t === null || t.memoizedState === null ? vo : ho), l;
    }
    function $e(l) {
      if (l !== null && typeof l == "object") {
        if (typeof l.then == "function") return Ku(l);
        if (l.$$typeof === ul) return Ll(l);
      }
      throw Error(r(438, String(l)));
    }
    function wf(l) {
      var t = null, a = F.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var u = F.alternate;
        u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (t = {
          data: u.data.map(function(e) {
            return e.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = {
        data: [],
        index: 0
      }), a === null && (a = Kf(), F.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0) for (a = t.data[t.index] = Array(l), u = 0; u < l; u++) a[u] = Dt;
      return t.index++, a;
    }
    function Xt(l, t) {
      return typeof t == "function" ? t(l) : t;
    }
    function ke(l) {
      var t = Dl();
      return Jf(t, rl, l);
    }
    function Jf(l, t, a) {
      var u = l.queue;
      if (u === null) throw Error(r(311));
      u.lastRenderedReducer = a;
      var e = l.baseQueue, n = u.pending;
      if (n !== null) {
        if (e !== null) {
          var f = e.next;
          e.next = n.next, n.next = f;
        }
        t.baseQueue = e = n, u.pending = null;
      }
      if (n = l.baseState, e === null) l.memoizedState = n;
      else {
        t = e.next;
        var c = f = null, i = null, m = t, T = false;
        do {
          var M = m.lane & -536870913;
          if (M !== m.lane ? (nl & M) === M : (Pt & M) === M) {
            var g = m.revertLane;
            if (g === 0) i !== null && (i = i.next = {
              lane: 0,
              revertLane: 0,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null
            }), M === Ia && (T = true);
            else if ((Pt & g) === g) {
              m = m.next, g === Ia && (T = true);
              continue;
            } else M = {
              lane: 0,
              revertLane: m.revertLane,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null
            }, i === null ? (c = i = M, f = n) : i = i.next = M, F.lanes |= g, fa |= g;
            M = m.action, Ra && a(n, M), n = m.hasEagerState ? m.eagerState : a(n, M);
          } else g = {
            lane: M,
            revertLane: m.revertLane,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null
          }, i === null ? (c = i = g, f = n) : i = i.next = g, F.lanes |= M, fa |= M;
          m = m.next;
        } while (m !== null && m !== t);
        if (i === null ? f = n : i.next = c, !lt(n, l.memoizedState) && (Bl = true, T && (a = Pa, a !== null))) throw a;
        l.memoizedState = n, l.baseState = f, l.baseQueue = i, u.lastRenderedState = n;
      }
      return e === null && (u.lanes = 0), [
        l.memoizedState,
        u.dispatch
      ];
    }
    function Wf(l) {
      var t = Dl(), a = t.queue;
      if (a === null) throw Error(r(311));
      a.lastRenderedReducer = l;
      var u = a.dispatch, e = a.pending, n = t.memoizedState;
      if (e !== null) {
        a.pending = null;
        var f = e = e.next;
        do
          n = l(n, f.action), f = f.next;
        while (f !== e);
        lt(n, t.memoizedState) || (Bl = true), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), a.lastRenderedState = n;
      }
      return [
        n,
        u
      ];
    }
    function Hs(l, t, a) {
      var u = F, e = Dl(), n = il;
      if (n) {
        if (a === void 0) throw Error(r(407));
        a = a();
      } else a = t();
      var f = !lt((rl || e).memoizedState, a);
      f && (e.memoizedState = a, Bl = true), e = e.queue;
      var c = Bs.bind(null, u, e, l);
      if (wu(2048, 8, c, [
        l
      ]), e.getSnapshot !== t || f || pl !== null && pl.memoizedState.tag & 1) {
        if (u.flags |= 2048, uu(9, Fe(), qs.bind(null, u, e, a, t), null), yl === null) throw Error(r(349));
        n || (Pt & 124) !== 0 || xs(u, t, a);
      }
      return a;
    }
    function xs(l, t, a) {
      l.flags |= 16384, l = {
        getSnapshot: t,
        value: a
      }, t = F.updateQueue, t === null ? (t = Kf(), F.updateQueue = t, t.stores = [
        l
      ]) : (a = t.stores, a === null ? t.stores = [
        l
      ] : a.push(l));
    }
    function qs(l, t, a, u) {
      t.value = a, t.getSnapshot = u, Ys(t) && Xs(l);
    }
    function Bs(l, t, a) {
      return a(function() {
        Ys(t) && Xs(l);
      });
    }
    function Ys(l) {
      var t = l.getSnapshot;
      l = l.value;
      try {
        var a = t();
        return !lt(l, a);
      } catch {
        return true;
      }
    }
    function Xs(l) {
      var t = Wa(l, 2);
      t !== null && ft(t, l, 2);
    }
    function $f(l) {
      var t = Wl();
      if (typeof l == "function") {
        var a = l;
        if (l = a(), Ra) {
          wt(true);
          try {
            a();
          } finally {
            wt(false);
          }
        }
      }
      return t.memoizedState = t.baseState = l, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xt,
        lastRenderedState: l
      }, t;
    }
    function js(l, t, a, u) {
      return l.baseState = a, Jf(l, rl, typeof u == "function" ? u : Xt);
    }
    function Yd(l, t, a, u, e) {
      if (Pe(l)) throw Error(r(485));
      if (l = t.action, l !== null) {
        var n = {
          payload: e,
          action: l,
          next: null,
          isTransition: true,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(f) {
            n.listeners.push(f);
          }
        };
        S.T !== null ? a(true) : n.isTransition = false, u(n), a = t.pending, a === null ? (n.next = t.pending = n, Gs(t, n)) : (n.next = a.next, t.pending = a.next = n);
      }
    }
    function Gs(l, t) {
      var a = t.action, u = t.payload, e = l.state;
      if (t.isTransition) {
        var n = S.T, f = {};
        S.T = f;
        try {
          var c = a(e, u), i = S.S;
          i !== null && i(f, c), Qs(l, t, c);
        } catch (m) {
          kf(l, t, m);
        } finally {
          S.T = n;
        }
      } else try {
        n = a(e, u), Qs(l, t, n);
      } catch (m) {
        kf(l, t, m);
      }
    }
    function Qs(l, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(u) {
        Cs(l, t, u);
      }, function(u) {
        return kf(l, t, u);
      }) : Cs(l, t, a);
    }
    function Cs(l, t, a) {
      t.status = "fulfilled", t.value = a, Zs(t), l.state = a, t = l.pending, t !== null && (a = t.next, a === t ? l.pending = null : (a = a.next, t.next = a, Gs(l, a)));
    }
    function kf(l, t, a) {
      var u = l.pending;
      if (l.pending = null, u !== null) {
        u = u.next;
        do
          t.status = "rejected", t.reason = a, Zs(t), t = t.next;
        while (t !== u);
      }
      l.action = null;
    }
    function Zs(l) {
      l = l.listeners;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
    function Ls(l, t) {
      return t;
    }
    function Vs(l, t) {
      if (il) {
        var a = yl.formState;
        if (a !== null) {
          l: {
            var u = F;
            if (il) {
              if (_l) {
                t: {
                  for (var e = _l, n = _t; e.nodeType !== 8; ) {
                    if (!n) {
                      e = null;
                      break t;
                    }
                    if (e = Tt(e.nextSibling), e === null) {
                      e = null;
                      break t;
                    }
                  }
                  n = e.data, e = n === "F!" || n === "F" ? e : null;
                }
                if (e) {
                  _l = Tt(e.nextSibling), u = e.data === "F!";
                  break l;
                }
              }
              za(u);
            }
            u = false;
          }
          u && (t = a[0]);
        }
      }
      return a = Wl(), a.memoizedState = a.baseState = t, u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ls,
        lastRenderedState: t
      }, a.queue = u, a = so.bind(null, F, u), u.dispatch = a, u = $f(false), n = tc.bind(null, F, false, u.queue), u = Wl(), e = {
        state: t,
        dispatch: null,
        action: l,
        pending: null
      }, u.queue = e, a = Yd.bind(null, F, e, n, a), e.dispatch = a, u.memoizedState = l, [
        t,
        a,
        false
      ];
    }
    function Ks(l) {
      var t = Dl();
      return ws(t, rl, l);
    }
    function ws(l, t, a) {
      if (t = Jf(l, t, Ls)[0], l = ke(Xt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
        var u = Ku(t);
      } catch (f) {
        throw f === Gu ? Ve : f;
      }
      else u = t;
      t = Dl();
      var e = t.queue, n = e.dispatch;
      return a !== t.memoizedState && (F.flags |= 2048, uu(9, Fe(), Xd.bind(null, e, a), null)), [
        u,
        n,
        l
      ];
    }
    function Xd(l, t) {
      l.action = t;
    }
    function Js(l) {
      var t = Dl(), a = rl;
      if (a !== null) return ws(t, a, l);
      Dl(), t = t.memoizedState, a = Dl();
      var u = a.queue.dispatch;
      return a.memoizedState = l, [
        t,
        u,
        false
      ];
    }
    function uu(l, t, a, u) {
      return l = {
        tag: l,
        create: a,
        deps: u,
        inst: t,
        next: null
      }, t = F.updateQueue, t === null && (t = Kf(), F.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = l.next = l : (u = a.next, a.next = l, l.next = u, t.lastEffect = l), l;
    }
    function Fe() {
      return {
        destroy: void 0,
        resource: void 0
      };
    }
    function Ws() {
      return Dl().memoizedState;
    }
    function Ie(l, t, a, u) {
      var e = Wl();
      u = u === void 0 ? null : u, F.flags |= l, e.memoizedState = uu(1 | t, Fe(), a, u);
    }
    function wu(l, t, a, u) {
      var e = Dl();
      u = u === void 0 ? null : u;
      var n = e.memoizedState.inst;
      rl !== null && u !== null && Qf(u, rl.memoizedState.deps) ? e.memoizedState = uu(t, n, a, u) : (F.flags |= l, e.memoizedState = uu(1 | t, n, a, u));
    }
    function $s(l, t) {
      Ie(8390656, 8, l, t);
    }
    function ks(l, t) {
      wu(2048, 8, l, t);
    }
    function Fs(l, t) {
      return wu(4, 2, l, t);
    }
    function Is(l, t) {
      return wu(4, 4, l, t);
    }
    function Ps(l, t) {
      if (typeof t == "function") {
        l = l();
        var a = t(l);
        return function() {
          typeof a == "function" ? a() : t(null);
        };
      }
      if (t != null) return l = l(), t.current = l, function() {
        t.current = null;
      };
    }
    function lo(l, t, a) {
      a = a != null ? a.concat([
        l
      ]) : null, wu(4, 4, Ps.bind(null, t, l), a);
    }
    function Ff() {
    }
    function to(l, t) {
      var a = Dl();
      t = t === void 0 ? null : t;
      var u = a.memoizedState;
      return t !== null && Qf(t, u[1]) ? u[0] : (a.memoizedState = [
        l,
        t
      ], l);
    }
    function ao(l, t) {
      var a = Dl();
      t = t === void 0 ? null : t;
      var u = a.memoizedState;
      if (t !== null && Qf(t, u[1])) return u[0];
      if (u = l(), Ra) {
        wt(true);
        try {
          l();
        } finally {
          wt(false);
        }
      }
      return a.memoizedState = [
        u,
        t
      ], u;
    }
    function If(l, t, a) {
      return a === void 0 || (Pt & 1073741824) !== 0 ? l.memoizedState = t : (l.memoizedState = a, l = fr(), F.lanes |= l, fa |= l, a);
    }
    function uo(l, t, a, u) {
      return lt(a, t) ? a : lu.current !== null ? (l = If(l, a, u), lt(l, t) || (Bl = true), l) : (Pt & 42) === 0 ? (Bl = true, l.memoizedState = a) : (l = fr(), F.lanes |= l, fa |= l, t);
    }
    function eo(l, t, a, u, e) {
      var n = O.p;
      O.p = n !== 0 && 8 > n ? n : 8;
      var f = S.T, c = {};
      S.T = c, tc(l, false, t, a);
      try {
        var i = e(), m = S.S;
        if (m !== null && m(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
          var T = xd(i, u);
          Ju(l, t, T, nt(l));
        } else Ju(l, t, u, nt(l));
      } catch (M) {
        Ju(l, t, {
          then: function() {
          },
          status: "rejected",
          reason: M
        }, nt());
      } finally {
        O.p = n, S.T = f;
      }
    }
    function jd() {
    }
    function Pf(l, t, a, u) {
      if (l.tag !== 5) throw Error(r(476));
      var e = no(l).queue;
      eo(l, e, t, q, a === null ? jd : function() {
        return fo(l), a(u);
      });
    }
    function no(l) {
      var t = l.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: q,
        baseState: q,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Xt,
          lastRenderedState: q
        },
        next: null
      };
      var a = {};
      return t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Xt,
          lastRenderedState: a
        },
        next: null
      }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
    }
    function fo(l) {
      var t = no(l).next.queue;
      Ju(l, t, {}, nt());
    }
    function lc() {
      return Ll(re);
    }
    function co() {
      return Dl().memoizedState;
    }
    function io() {
      return Dl().memoizedState;
    }
    function Gd(l) {
      for (var t = l.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var a = nt();
            l = Ft(a);
            var u = It(t, l, a);
            u !== null && (ft(u, t, a), Cu(u, t, a)), t = {
              cache: Uf()
            }, l.payload = t;
            return;
        }
        t = t.return;
      }
    }
    function Qd(l, t, a) {
      var u = nt();
      a = {
        lane: u,
        revertLane: 0,
        action: a,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, Pe(l) ? oo(t, a) : (a = Tf(l, t, a, u), a !== null && (ft(a, l, u), ro(a, t, u)));
    }
    function so(l, t, a) {
      var u = nt();
      Ju(l, t, a, u);
    }
    function Ju(l, t, a, u) {
      var e = {
        lane: u,
        revertLane: 0,
        action: a,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (Pe(l)) oo(t, e);
      else {
        var n = l.alternate;
        if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null)) try {
          var f = t.lastRenderedState, c = n(f, a);
          if (e.hasEagerState = true, e.eagerState = c, lt(c, f)) return Ye(l, t, e, 0), yl === null && Be(), false;
        } catch {
        } finally {
        }
        if (a = Tf(l, t, e, u), a !== null) return ft(a, l, u), ro(a, t, u), true;
      }
      return false;
    }
    function tc(l, t, a, u) {
      if (u = {
        lane: 2,
        revertLane: xc(),
        action: u,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, Pe(l)) {
        if (t) throw Error(r(479));
      } else t = Tf(l, a, u, 2), t !== null && ft(t, l, 2);
    }
    function Pe(l) {
      var t = l.alternate;
      return l === F || t !== null && t === F;
    }
    function oo(l, t) {
      tu = Je = true;
      var a = l.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t;
    }
    function ro(l, t, a) {
      if ((a & 4194048) !== 0) {
        var u = t.lanes;
        u &= l.pendingLanes, a |= u, t.lanes = a, bi(l, a);
      }
    }
    var ln = {
      readContext: Ll,
      use: $e,
      useCallback: Ml,
      useContext: Ml,
      useEffect: Ml,
      useImperativeHandle: Ml,
      useLayoutEffect: Ml,
      useInsertionEffect: Ml,
      useMemo: Ml,
      useReducer: Ml,
      useRef: Ml,
      useState: Ml,
      useDebugValue: Ml,
      useDeferredValue: Ml,
      useTransition: Ml,
      useSyncExternalStore: Ml,
      useId: Ml,
      useHostTransitionStatus: Ml,
      useFormState: Ml,
      useActionState: Ml,
      useOptimistic: Ml,
      useMemoCache: Ml,
      useCacheRefresh: Ml
    }, vo = {
      readContext: Ll,
      use: $e,
      useCallback: function(l, t) {
        return Wl().memoizedState = [
          l,
          t === void 0 ? null : t
        ], l;
      },
      useContext: Ll,
      useEffect: $s,
      useImperativeHandle: function(l, t, a) {
        a = a != null ? a.concat([
          l
        ]) : null, Ie(4194308, 4, Ps.bind(null, t, l), a);
      },
      useLayoutEffect: function(l, t) {
        return Ie(4194308, 4, l, t);
      },
      useInsertionEffect: function(l, t) {
        Ie(4, 2, l, t);
      },
      useMemo: function(l, t) {
        var a = Wl();
        t = t === void 0 ? null : t;
        var u = l();
        if (Ra) {
          wt(true);
          try {
            l();
          } finally {
            wt(false);
          }
        }
        return a.memoizedState = [
          u,
          t
        ], u;
      },
      useReducer: function(l, t, a) {
        var u = Wl();
        if (a !== void 0) {
          var e = a(t);
          if (Ra) {
            wt(true);
            try {
              a(t);
            } finally {
              wt(false);
            }
          }
        } else e = t;
        return u.memoizedState = u.baseState = e, l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: l,
          lastRenderedState: e
        }, u.queue = l, l = l.dispatch = Qd.bind(null, F, l), [
          u.memoizedState,
          l
        ];
      },
      useRef: function(l) {
        var t = Wl();
        return l = {
          current: l
        }, t.memoizedState = l;
      },
      useState: function(l) {
        l = $f(l);
        var t = l.queue, a = so.bind(null, F, t);
        return t.dispatch = a, [
          l.memoizedState,
          a
        ];
      },
      useDebugValue: Ff,
      useDeferredValue: function(l, t) {
        var a = Wl();
        return If(a, l, t);
      },
      useTransition: function() {
        var l = $f(false);
        return l = eo.bind(null, F, l.queue, true, false), Wl().memoizedState = l, [
          false,
          l
        ];
      },
      useSyncExternalStore: function(l, t, a) {
        var u = F, e = Wl();
        if (il) {
          if (a === void 0) throw Error(r(407));
          a = a();
        } else {
          if (a = t(), yl === null) throw Error(r(349));
          (nl & 124) !== 0 || xs(u, t, a);
        }
        e.memoizedState = a;
        var n = {
          value: a,
          getSnapshot: t
        };
        return e.queue = n, $s(Bs.bind(null, u, n, l), [
          l
        ]), u.flags |= 2048, uu(9, Fe(), qs.bind(null, u, n, a, t), null), a;
      },
      useId: function() {
        var l = Wl(), t = yl.identifierPrefix;
        if (il) {
          var a = qt, u = xt;
          a = (u & ~(1 << 32 - Pl(u) - 1)).toString(32) + a, t = "\xAB" + t + "R" + a, a = We++, 0 < a && (t += "H" + a.toString(32)), t += "\xBB";
        } else a = qd++, t = "\xAB" + t + "r" + a.toString(32) + "\xBB";
        return l.memoizedState = t;
      },
      useHostTransitionStatus: lc,
      useFormState: Vs,
      useActionState: Vs,
      useOptimistic: function(l) {
        var t = Wl();
        t.memoizedState = t.baseState = l;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return t.queue = a, t = tc.bind(null, F, true, a), a.dispatch = t, [
          l,
          t
        ];
      },
      useMemoCache: wf,
      useCacheRefresh: function() {
        return Wl().memoizedState = Gd.bind(null, F);
      }
    }, ho = {
      readContext: Ll,
      use: $e,
      useCallback: to,
      useContext: Ll,
      useEffect: ks,
      useImperativeHandle: lo,
      useInsertionEffect: Fs,
      useLayoutEffect: Is,
      useMemo: ao,
      useReducer: ke,
      useRef: Ws,
      useState: function() {
        return ke(Xt);
      },
      useDebugValue: Ff,
      useDeferredValue: function(l, t) {
        var a = Dl();
        return uo(a, rl.memoizedState, l, t);
      },
      useTransition: function() {
        var l = ke(Xt)[0], t = Dl().memoizedState;
        return [
          typeof l == "boolean" ? l : Ku(l),
          t
        ];
      },
      useSyncExternalStore: Hs,
      useId: co,
      useHostTransitionStatus: lc,
      useFormState: Ks,
      useActionState: Ks,
      useOptimistic: function(l, t) {
        var a = Dl();
        return js(a, rl, l, t);
      },
      useMemoCache: wf,
      useCacheRefresh: io
    }, Cd = {
      readContext: Ll,
      use: $e,
      useCallback: to,
      useContext: Ll,
      useEffect: ks,
      useImperativeHandle: lo,
      useInsertionEffect: Fs,
      useLayoutEffect: Is,
      useMemo: ao,
      useReducer: Wf,
      useRef: Ws,
      useState: function() {
        return Wf(Xt);
      },
      useDebugValue: Ff,
      useDeferredValue: function(l, t) {
        var a = Dl();
        return rl === null ? If(a, l, t) : uo(a, rl.memoizedState, l, t);
      },
      useTransition: function() {
        var l = Wf(Xt)[0], t = Dl().memoizedState;
        return [
          typeof l == "boolean" ? l : Ku(l),
          t
        ];
      },
      useSyncExternalStore: Hs,
      useId: co,
      useHostTransitionStatus: lc,
      useFormState: Js,
      useActionState: Js,
      useOptimistic: function(l, t) {
        var a = Dl();
        return rl !== null ? js(a, rl, l, t) : (a.baseState = l, [
          l,
          a.queue.dispatch
        ]);
      },
      useMemoCache: wf,
      useCacheRefresh: io
    }, eu = null, Wu = 0;
    function tn(l) {
      var t = Wu;
      return Wu += 1, eu === null && (eu = []), Ms(eu, l, t);
    }
    function $u(l, t) {
      t = t.props.ref, l.ref = t !== void 0 ? t : null;
    }
    function an(l, t) {
      throw t.$$typeof === Q ? Error(r(525)) : (l = Object.prototype.toString.call(t), Error(r(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)));
    }
    function yo(l) {
      var t = l._init;
      return t(l._payload);
    }
    function mo(l) {
      function t(d, o) {
        if (l) {
          var h = d.deletions;
          h === null ? (d.deletions = [
            o
          ], d.flags |= 16) : h.push(o);
        }
      }
      function a(d, o) {
        if (!l) return null;
        for (; o !== null; ) t(d, o), o = o.sibling;
        return null;
      }
      function u(d) {
        for (var o = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? o.set(d.key, d) : o.set(d.index, d), d = d.sibling;
        return o;
      }
      function e(d, o) {
        return d = Ht(d, o), d.index = 0, d.sibling = null, d;
      }
      function n(d, o, h) {
        return d.index = h, l ? (h = d.alternate, h !== null ? (h = h.index, h < o ? (d.flags |= 67108866, o) : h) : (d.flags |= 67108866, o)) : (d.flags |= 1048576, o);
      }
      function f(d) {
        return l && d.alternate === null && (d.flags |= 67108866), d;
      }
      function c(d, o, h, A) {
        return o === null || o.tag !== 6 ? (o = _f(h, d.mode, A), o.return = d, o) : (o = e(o, h), o.return = d, o);
      }
      function i(d, o, h, A) {
        var B = h.type;
        return B === tl ? T(d, o, h.props.children, A, h.key) : o !== null && (o.elementType === B || typeof B == "object" && B !== null && B.$$typeof === Sl && yo(B) === o.type) ? (o = e(o, h.props), $u(o, h), o.return = d, o) : (o = je(h.type, h.key, h.props, null, d.mode, A), $u(o, h), o.return = d, o);
      }
      function m(d, o, h, A) {
        return o === null || o.tag !== 4 || o.stateNode.containerInfo !== h.containerInfo || o.stateNode.implementation !== h.implementation ? (o = Af(h, d.mode, A), o.return = d, o) : (o = e(o, h.children || []), o.return = d, o);
      }
      function T(d, o, h, A, B) {
        return o === null || o.tag !== 7 ? (o = Ea(h, d.mode, A, B), o.return = d, o) : (o = e(o, h), o.return = d, o);
      }
      function M(d, o, h) {
        if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint") return o = _f("" + o, d.mode, h), o.return = d, o;
        if (typeof o == "object" && o !== null) {
          switch (o.$$typeof) {
            case x:
              return h = je(o.type, o.key, o.props, null, d.mode, h), $u(h, o), h.return = d, h;
            case Y:
              return o = Af(o, d.mode, h), o.return = d, o;
            case Sl:
              var A = o._init;
              return o = A(o._payload), M(d, o, h);
          }
          if (xl(o) || Rl(o)) return o = Ea(o, d.mode, h, null), o.return = d, o;
          if (typeof o.then == "function") return M(d, tn(o), h);
          if (o.$$typeof === ul) return M(d, Ze(d, o), h);
          an(d, o);
        }
        return null;
      }
      function g(d, o, h, A) {
        var B = o !== null ? o.key : null;
        if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint") return B !== null ? null : c(d, o, "" + h, A);
        if (typeof h == "object" && h !== null) {
          switch (h.$$typeof) {
            case x:
              return h.key === B ? i(d, o, h, A) : null;
            case Y:
              return h.key === B ? m(d, o, h, A) : null;
            case Sl:
              return B = h._init, h = B(h._payload), g(d, o, h, A);
          }
          if (xl(h) || Rl(h)) return B !== null ? null : T(d, o, h, A, null);
          if (typeof h.then == "function") return g(d, o, tn(h), A);
          if (h.$$typeof === ul) return g(d, o, Ze(d, h), A);
          an(d, h);
        }
        return null;
      }
      function b(d, o, h, A, B) {
        if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint") return d = d.get(h) || null, c(o, d, "" + A, B);
        if (typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case x:
              return d = d.get(A.key === null ? h : A.key) || null, i(o, d, A, B);
            case Y:
              return d = d.get(A.key === null ? h : A.key) || null, m(o, d, A, B);
            case Sl:
              var I = A._init;
              return A = I(A._payload), b(d, o, h, A, B);
          }
          if (xl(A) || Rl(A)) return d = d.get(h) || null, T(o, d, A, B, null);
          if (typeof A.then == "function") return b(d, o, h, tn(A), B);
          if (A.$$typeof === ul) return b(d, o, h, Ze(o, A), B);
          an(o, A);
        }
        return null;
      }
      function V(d, o, h, A) {
        for (var B = null, I = null, j = o, L = o = 0, Xl = null; j !== null && L < h.length; L++) {
          j.index > L ? (Xl = j, j = null) : Xl = j.sibling;
          var fl = g(d, j, h[L], A);
          if (fl === null) {
            j === null && (j = Xl);
            break;
          }
          l && j && fl.alternate === null && t(d, j), o = n(fl, o, L), I === null ? B = fl : I.sibling = fl, I = fl, j = Xl;
        }
        if (L === h.length) return a(d, j), il && Aa(d, L), B;
        if (j === null) {
          for (; L < h.length; L++) j = M(d, h[L], A), j !== null && (o = n(j, o, L), I === null ? B = j : I.sibling = j, I = j);
          return il && Aa(d, L), B;
        }
        for (j = u(j); L < h.length; L++) Xl = b(j, d, L, h[L], A), Xl !== null && (l && Xl.alternate !== null && j.delete(Xl.key === null ? L : Xl.key), o = n(Xl, o, L), I === null ? B = Xl : I.sibling = Xl, I = Xl);
        return l && j.forEach(function(ya) {
          return t(d, ya);
        }), il && Aa(d, L), B;
      }
      function Z(d, o, h, A) {
        if (h == null) throw Error(r(151));
        for (var B = null, I = null, j = o, L = o = 0, Xl = null, fl = h.next(); j !== null && !fl.done; L++, fl = h.next()) {
          j.index > L ? (Xl = j, j = null) : Xl = j.sibling;
          var ya = g(d, j, fl.value, A);
          if (ya === null) {
            j === null && (j = Xl);
            break;
          }
          l && j && ya.alternate === null && t(d, j), o = n(ya, o, L), I === null ? B = ya : I.sibling = ya, I = ya, j = Xl;
        }
        if (fl.done) return a(d, j), il && Aa(d, L), B;
        if (j === null) {
          for (; !fl.done; L++, fl = h.next()) fl = M(d, fl.value, A), fl !== null && (o = n(fl, o, L), I === null ? B = fl : I.sibling = fl, I = fl);
          return il && Aa(d, L), B;
        }
        for (j = u(j); !fl.done; L++, fl = h.next()) fl = b(j, d, L, fl.value, A), fl !== null && (l && fl.alternate !== null && j.delete(fl.key === null ? L : fl.key), o = n(fl, o, L), I === null ? B = fl : I.sibling = fl, I = fl);
        return l && j.forEach(function(Zv) {
          return t(d, Zv);
        }), il && Aa(d, L), B;
      }
      function vl(d, o, h, A) {
        if (typeof h == "object" && h !== null && h.type === tl && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
          switch (h.$$typeof) {
            case x:
              l: {
                for (var B = h.key; o !== null; ) {
                  if (o.key === B) {
                    if (B = h.type, B === tl) {
                      if (o.tag === 7) {
                        a(d, o.sibling), A = e(o, h.props.children), A.return = d, d = A;
                        break l;
                      }
                    } else if (o.elementType === B || typeof B == "object" && B !== null && B.$$typeof === Sl && yo(B) === o.type) {
                      a(d, o.sibling), A = e(o, h.props), $u(A, h), A.return = d, d = A;
                      break l;
                    }
                    a(d, o);
                    break;
                  } else t(d, o);
                  o = o.sibling;
                }
                h.type === tl ? (A = Ea(h.props.children, d.mode, A, h.key), A.return = d, d = A) : (A = je(h.type, h.key, h.props, null, d.mode, A), $u(A, h), A.return = d, d = A);
              }
              return f(d);
            case Y:
              l: {
                for (B = h.key; o !== null; ) {
                  if (o.key === B) if (o.tag === 4 && o.stateNode.containerInfo === h.containerInfo && o.stateNode.implementation === h.implementation) {
                    a(d, o.sibling), A = e(o, h.children || []), A.return = d, d = A;
                    break l;
                  } else {
                    a(d, o);
                    break;
                  }
                  else t(d, o);
                  o = o.sibling;
                }
                A = Af(h, d.mode, A), A.return = d, d = A;
              }
              return f(d);
            case Sl:
              return B = h._init, h = B(h._payload), vl(d, o, h, A);
          }
          if (xl(h)) return V(d, o, h, A);
          if (Rl(h)) {
            if (B = Rl(h), typeof B != "function") throw Error(r(150));
            return h = B.call(h), Z(d, o, h, A);
          }
          if (typeof h.then == "function") return vl(d, o, tn(h), A);
          if (h.$$typeof === ul) return vl(d, o, Ze(d, h), A);
          an(d, h);
        }
        return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h, o !== null && o.tag === 6 ? (a(d, o.sibling), A = e(o, h), A.return = d, d = A) : (a(d, o), A = _f(h, d.mode, A), A.return = d, d = A), f(d)) : a(d, o);
      }
      return function(d, o, h, A) {
        try {
          Wu = 0;
          var B = vl(d, o, h, A);
          return eu = null, B;
        } catch (j) {
          if (j === Gu || j === Ve) throw j;
          var I = tt(29, j, null, d.mode);
          return I.lanes = A, I.return = d, I;
        } finally {
        }
      };
    }
    var nu = mo(true), go = mo(false), ht = E(null), At = null;
    function la(l) {
      var t = l.alternate;
      R(Nl, Nl.current & 1), R(ht, l), At === null && (t === null || lu.current !== null || t.memoizedState !== null) && (At = l);
    }
    function So(l) {
      if (l.tag === 22) {
        if (R(Nl, Nl.current), R(ht, l), At === null) {
          var t = l.alternate;
          t !== null && t.memoizedState !== null && (At = l);
        }
      } else ta();
    }
    function ta() {
      R(Nl, Nl.current), R(ht, ht.current);
    }
    function jt(l) {
      H(ht), At === l && (At = null), H(Nl);
    }
    var Nl = E(0);
    function un(l) {
      for (var t = l; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || Kc(a))) return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function ac(l, t, a, u) {
      t = l.memoizedState, a = a(u, t), a = a == null ? t : z({}, t, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a);
    }
    var uc = {
      enqueueSetState: function(l, t, a) {
        l = l._reactInternals;
        var u = nt(), e = Ft(u);
        e.payload = t, a != null && (e.callback = a), t = It(l, e, u), t !== null && (ft(t, l, u), Cu(t, l, u));
      },
      enqueueReplaceState: function(l, t, a) {
        l = l._reactInternals;
        var u = nt(), e = Ft(u);
        e.tag = 1, e.payload = t, a != null && (e.callback = a), t = It(l, e, u), t !== null && (ft(t, l, u), Cu(t, l, u));
      },
      enqueueForceUpdate: function(l, t) {
        l = l._reactInternals;
        var a = nt(), u = Ft(a);
        u.tag = 2, t != null && (u.callback = t), t = It(l, u, a), t !== null && (ft(t, l, a), Cu(t, l, a));
      }
    };
    function bo(l, t, a, u, e, n, f) {
      return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(u, n, f) : t.prototype && t.prototype.isPureReactComponent ? !Nu(a, u) || !Nu(e, n) : true;
    }
    function To(l, t, a, u) {
      l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, u), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, u), t.state !== l && uc.enqueueReplaceState(t, t.state, null);
    }
    function Ua(l, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var u in t) u !== "ref" && (a[u] = t[u]);
      }
      if (l = l.defaultProps) {
        a === t && (a = z({}, a));
        for (var e in l) a[e] === void 0 && (a[e] = l[e]);
      }
      return a;
    }
    var en = typeof reportError == "function" ? reportError : function(l) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
          error: l
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", l);
        return;
      }
      console.error(l);
    };
    function Eo(l) {
      en(l);
    }
    function _o(l) {
      console.error(l);
    }
    function Ao(l) {
      en(l);
    }
    function nn(l, t) {
      try {
        var a = l.onUncaughtError;
        a(t.value, {
          componentStack: t.stack
        });
      } catch (u) {
        setTimeout(function() {
          throw u;
        });
      }
    }
    function Mo(l, t, a) {
      try {
        var u = l.onCaughtError;
        u(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (e) {
        setTimeout(function() {
          throw e;
        });
      }
    }
    function ec(l, t, a) {
      return a = Ft(a), a.tag = 3, a.payload = {
        element: null
      }, a.callback = function() {
        nn(l, t);
      }, a;
    }
    function zo(l) {
      return l = Ft(l), l.tag = 3, l;
    }
    function Oo(l, t, a, u) {
      var e = a.type.getDerivedStateFromError;
      if (typeof e == "function") {
        var n = u.value;
        l.payload = function() {
          return e(n);
        }, l.callback = function() {
          Mo(t, a, u);
        };
      }
      var f = a.stateNode;
      f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
        Mo(t, a, u), typeof e != "function" && (ca === null ? ca = /* @__PURE__ */ new Set([
          this
        ]) : ca.add(this));
        var c = u.stack;
        this.componentDidCatch(u.value, {
          componentStack: c !== null ? c : ""
        });
      });
    }
    function Zd(l, t, a, u, e) {
      if (a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
        if (t = a.alternate, t !== null && Yu(t, a, e, true), a = ht.current, a !== null) {
          switch (a.tag) {
            case 13:
              return At === null ? Dc() : a.alternate === null && Al === 0 && (Al = 3), a.flags &= -257, a.flags |= 65536, a.lanes = e, u === xf ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([
                u
              ]) : t.add(u), Uc(l, u, e)), false;
            case 22:
              return a.flags |= 65536, u === xf ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([
                  u
                ])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([
                u
              ]) : a.add(u)), Uc(l, u, e)), false;
          }
          throw Error(r(435, a.tag));
        }
        return Uc(l, u, e), Dc(), false;
      }
      if (il) return t = ht.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, u !== Of && (l = Error(r(422), {
        cause: u
      }), Bu(ot(l, a)))) : (u !== Of && (t = Error(r(423), {
        cause: u
      }), Bu(ot(t, a))), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, u = ot(u, a), e = ec(l.stateNode, u, e), Yf(l, e), Al !== 4 && (Al = 2)), false;
      var n = Error(r(520), {
        cause: u
      });
      if (n = ot(n, a), ae === null ? ae = [
        n
      ] : ae.push(n), Al !== 4 && (Al = 2), t === null) return true;
      u = ot(u, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, l = e & -e, a.lanes |= l, l = ec(a.stateNode, u, l), Yf(a, l), false;
          case 1:
            if (t = a.type, n = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ca === null || !ca.has(n)))) return a.flags |= 65536, e &= -e, a.lanes |= e, e = zo(e), Oo(e, l, a, u), Yf(a, e), false;
        }
        a = a.return;
      } while (a !== null);
      return false;
    }
    var po = Error(r(461)), Bl = false;
    function jl(l, t, a, u) {
      t.child = l === null ? go(t, null, a, u) : nu(t, l.child, a, u);
    }
    function Do(l, t, a, u, e) {
      a = a.render;
      var n = t.ref;
      if ("ref" in u) {
        var f = {};
        for (var c in u) c !== "ref" && (f[c] = u[c]);
      } else f = u;
      return pa(t), u = Cf(l, t, a, f, n, e), c = Zf(), l !== null && !Bl ? (Lf(l, t, e), Gt(l, t, e)) : (il && c && Mf(t), t.flags |= 1, jl(l, t, u, e), t.child);
    }
    function Ro(l, t, a, u, e) {
      if (l === null) {
        var n = a.type;
        return typeof n == "function" && !Ef(n) && n.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = n, Uo(l, t, n, u, e)) : (l = je(a.type, null, u, t, t.mode, e), l.ref = t.ref, l.return = t, t.child = l);
      }
      if (n = l.child, !dc(l, e)) {
        var f = n.memoizedProps;
        if (a = a.compare, a = a !== null ? a : Nu, a(f, u) && l.ref === t.ref) return Gt(l, t, e);
      }
      return t.flags |= 1, l = Ht(n, u), l.ref = t.ref, l.return = t, t.child = l;
    }
    function Uo(l, t, a, u, e) {
      if (l !== null) {
        var n = l.memoizedProps;
        if (Nu(n, u) && l.ref === t.ref) if (Bl = false, t.pendingProps = u = n, dc(l, e)) (l.flags & 131072) !== 0 && (Bl = true);
        else return t.lanes = l.lanes, Gt(l, t, e);
      }
      return nc(l, t, a, u, e);
    }
    function No(l, t, a) {
      var u = t.pendingProps, e = u.children, n = l !== null ? l.memoizedState : null;
      if (u.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (u = n !== null ? n.baseLanes | a : a, l !== null) {
            for (e = t.child = l.child, n = 0; e !== null; ) n = n | e.lanes | e.childLanes, e = e.sibling;
            t.childLanes = n & ~u;
          } else t.childLanes = 0, t.child = null;
          return Ho(l, t, u, a);
        }
        if ((a & 536870912) !== 0) t.memoizedState = {
          baseLanes: 0,
          cachePool: null
        }, l !== null && Le(t, n !== null ? n.cachePool : null), n !== null ? Rs(t, n) : jf(), So(t);
        else return t.lanes = t.childLanes = 536870912, Ho(l, t, n !== null ? n.baseLanes | a : a, a);
      } else n !== null ? (Le(t, n.cachePool), Rs(t, n), ta(), t.memoizedState = null) : (l !== null && Le(t, null), jf(), ta());
      return jl(l, t, e, a), t.child;
    }
    function Ho(l, t, a, u) {
      var e = Hf();
      return e = e === null ? null : {
        parent: Ul._currentValue,
        pool: e
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: e
      }, l !== null && Le(t, null), jf(), So(t), l !== null && Yu(l, t, u, true), null;
    }
    function fn(l, t) {
      var a = t.ref;
      if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object") throw Error(r(284));
        (l === null || l.ref !== a) && (t.flags |= 4194816);
      }
    }
    function nc(l, t, a, u, e) {
      return pa(t), a = Cf(l, t, a, u, void 0, e), u = Zf(), l !== null && !Bl ? (Lf(l, t, e), Gt(l, t, e)) : (il && u && Mf(t), t.flags |= 1, jl(l, t, a, e), t.child);
    }
    function xo(l, t, a, u, e, n) {
      return pa(t), t.updateQueue = null, a = Ns(t, u, a, e), Us(l), u = Zf(), l !== null && !Bl ? (Lf(l, t, n), Gt(l, t, n)) : (il && u && Mf(t), t.flags |= 1, jl(l, t, a, n), t.child);
    }
    function qo(l, t, a, u, e) {
      if (pa(t), t.stateNode === null) {
        var n = $a, f = a.contextType;
        typeof f == "object" && f !== null && (n = Ll(f)), n = new a(u, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = uc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = u, n.state = t.memoizedState, n.refs = {}, qf(t), f = a.contextType, n.context = typeof f == "object" && f !== null ? Ll(f) : $a, n.state = t.memoizedState, f = a.getDerivedStateFromProps, typeof f == "function" && (ac(t, a, f, u), n.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && uc.enqueueReplaceState(n, n.state, null), Lu(t, u, n, e), Zu(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = true;
      } else if (l === null) {
        n = t.stateNode;
        var c = t.memoizedProps, i = Ua(a, c);
        n.props = i;
        var m = n.context, T = a.contextType;
        f = $a, typeof T == "object" && T !== null && (f = Ll(T));
        var M = a.getDerivedStateFromProps;
        T = typeof M == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, T || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || m !== f) && To(t, n, u, f), kt = false;
        var g = t.memoizedState;
        n.state = g, Lu(t, u, n, e), Zu(), m = t.memoizedState, c || g !== m || kt ? (typeof M == "function" && (ac(t, a, M, u), m = t.memoizedState), (i = kt || bo(t, a, i, u, g, m, f)) ? (T || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = u, t.memoizedState = m), n.props = u, n.state = m, n.context = f, u = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = false);
      } else {
        n = t.stateNode, Bf(l, t), f = t.memoizedProps, T = Ua(a, f), n.props = T, M = t.pendingProps, g = n.context, m = a.contextType, i = $a, typeof m == "object" && m !== null && (i = Ll(m)), c = a.getDerivedStateFromProps, (m = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== M || g !== i) && To(t, n, u, i), kt = false, g = t.memoizedState, n.state = g, Lu(t, u, n, e), Zu();
        var b = t.memoizedState;
        f !== M || g !== b || kt || l !== null && l.dependencies !== null && Ce(l.dependencies) ? (typeof c == "function" && (ac(t, a, c, u), b = t.memoizedState), (T = kt || bo(t, a, T, u, g, b, i) || l !== null && l.dependencies !== null && Ce(l.dependencies)) ? (m || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, b, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(u, b, i)), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && g === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && g === l.memoizedState || (t.flags |= 1024), t.memoizedProps = u, t.memoizedState = b), n.props = u, n.state = b, n.context = i, u = T) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && g === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && g === l.memoizedState || (t.flags |= 1024), u = false);
      }
      return n = u, fn(l, t), u = (t.flags & 128) !== 0, n || u ? (n = t.stateNode, a = u && typeof a.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && u ? (t.child = nu(t, l.child, null, e), t.child = nu(t, null, a, e)) : jl(l, t, a, e), t.memoizedState = n.state, l = t.child) : l = Gt(l, t, e), l;
    }
    function Bo(l, t, a, u) {
      return qu(), t.flags |= 256, jl(l, t, a, u), t.child;
    }
    var fc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    };
    function cc(l) {
      return {
        baseLanes: l,
        cachePool: Es()
      };
    }
    function ic(l, t, a) {
      return l = l !== null ? l.childLanes & ~a : 0, t && (l |= yt), l;
    }
    function Yo(l, t, a) {
      var u = t.pendingProps, e = false, n = (t.flags & 128) !== 0, f;
      if ((f = n) || (f = l !== null && l.memoizedState === null ? false : (Nl.current & 2) !== 0), f && (e = true, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
        if (il) {
          if (e ? la(t) : ta(), il) {
            var c = _l, i;
            if (i = c) {
              l: {
                for (i = c, c = _t; i.nodeType !== 8; ) {
                  if (!c) {
                    c = null;
                    break l;
                  }
                  if (i = Tt(i.nextSibling), i === null) {
                    c = null;
                    break l;
                  }
                }
                c = i;
              }
              c !== null ? (t.memoizedState = {
                dehydrated: c,
                treeContext: _a !== null ? {
                  id: xt,
                  overflow: qt
                } : null,
                retryLane: 536870912,
                hydrationErrors: null
              }, i = tt(18, null, null, 0), i.stateNode = c, i.return = t, t.child = i, Kl = t, _l = null, i = true) : i = false;
            }
            i || za(t);
          }
          if (c = t.memoizedState, c !== null && (c = c.dehydrated, c !== null)) return Kc(c) ? t.lanes = 32 : t.lanes = 536870912, null;
          jt(t);
        }
        return c = u.children, u = u.fallback, e ? (ta(), e = t.mode, c = cn({
          mode: "hidden",
          children: c
        }, e), u = Ea(u, e, a, null), c.return = t, u.return = t, c.sibling = u, t.child = c, e = t.child, e.memoizedState = cc(a), e.childLanes = ic(l, f, a), t.memoizedState = fc, u) : (la(t), sc(t, c));
      }
      if (i = l.memoizedState, i !== null && (c = i.dehydrated, c !== null)) {
        if (n) t.flags & 256 ? (la(t), t.flags &= -257, t = oc(l, t, a)) : t.memoizedState !== null ? (ta(), t.child = l.child, t.flags |= 128, t = null) : (ta(), e = u.fallback, c = t.mode, u = cn({
          mode: "visible",
          children: u.children
        }, c), e = Ea(e, c, a, null), e.flags |= 2, u.return = t, e.return = t, u.sibling = e, t.child = u, nu(t, l.child, null, a), u = t.child, u.memoizedState = cc(a), u.childLanes = ic(l, f, a), t.memoizedState = fc, t = e);
        else if (la(t), Kc(c)) {
          if (f = c.nextSibling && c.nextSibling.dataset, f) var m = f.dgst;
          f = m, u = Error(r(419)), u.stack = "", u.digest = f, Bu({
            value: u,
            source: null,
            stack: null
          }), t = oc(l, t, a);
        } else if (Bl || Yu(l, t, a, false), f = (a & l.childLanes) !== 0, Bl || f) {
          if (f = yl, f !== null && (u = a & -a, u = (u & 42) !== 0 ? 1 : Kn(u), u = (u & (f.suspendedLanes | a)) !== 0 ? 0 : u, u !== 0 && u !== i.retryLane)) throw i.retryLane = u, Wa(l, u), ft(f, l, u), po;
          c.data === "$?" || Dc(), t = oc(l, t, a);
        } else c.data === "$?" ? (t.flags |= 192, t.child = l.child, t = null) : (l = i.treeContext, _l = Tt(c.nextSibling), Kl = t, il = true, Ma = null, _t = false, l !== null && (dt[vt++] = xt, dt[vt++] = qt, dt[vt++] = _a, xt = l.id, qt = l.overflow, _a = t), t = sc(t, u.children), t.flags |= 4096);
        return t;
      }
      return e ? (ta(), e = u.fallback, c = t.mode, i = l.child, m = i.sibling, u = Ht(i, {
        mode: "hidden",
        children: u.children
      }), u.subtreeFlags = i.subtreeFlags & 65011712, m !== null ? e = Ht(m, e) : (e = Ea(e, c, a, null), e.flags |= 2), e.return = t, u.return = t, u.sibling = e, t.child = u, u = e, e = t.child, c = l.child.memoizedState, c === null ? c = cc(a) : (i = c.cachePool, i !== null ? (m = Ul._currentValue, i = i.parent !== m ? {
        parent: m,
        pool: m
      } : i) : i = Es(), c = {
        baseLanes: c.baseLanes | a,
        cachePool: i
      }), e.memoizedState = c, e.childLanes = ic(l, f, a), t.memoizedState = fc, u) : (la(t), a = l.child, l = a.sibling, a = Ht(a, {
        mode: "visible",
        children: u.children
      }), a.return = t, a.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [
        l
      ], t.flags |= 16) : f.push(l)), t.child = a, t.memoizedState = null, a);
    }
    function sc(l, t) {
      return t = cn({
        mode: "visible",
        children: t
      }, l.mode), t.return = l, l.child = t;
    }
    function cn(l, t) {
      return l = tt(22, l, null, t), l.lanes = 0, l.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }, l;
    }
    function oc(l, t, a) {
      return nu(t, l.child, null, a), l = sc(t, t.pendingProps.children), l.flags |= 2, t.memoizedState = null, l;
    }
    function Xo(l, t, a) {
      l.lanes |= t;
      var u = l.alternate;
      u !== null && (u.lanes |= t), Df(l.return, t, a);
    }
    function rc(l, t, a, u, e) {
      var n = l.memoizedState;
      n === null ? l.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: u,
        tail: a,
        tailMode: e
      } : (n.isBackwards = t, n.rendering = null, n.renderingStartTime = 0, n.last = u, n.tail = a, n.tailMode = e);
    }
    function jo(l, t, a) {
      var u = t.pendingProps, e = u.revealOrder, n = u.tail;
      if (jl(l, t, u.children, a), u = Nl.current, (u & 2) !== 0) u = u & 1 | 2, t.flags |= 128;
      else {
        if (l !== null && (l.flags & 128) !== 0) l: for (l = t.child; l !== null; ) {
          if (l.tag === 13) l.memoizedState !== null && Xo(l, a, t);
          else if (l.tag === 19) Xo(l, a, t);
          else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === t) break l;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t) break l;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
        u &= 1;
      }
      switch (R(Nl, u), e) {
        case "forwards":
          for (a = t.child, e = null; a !== null; ) l = a.alternate, l !== null && un(l) === null && (e = a), a = a.sibling;
          a = e, a === null ? (e = t.child, t.child = null) : (e = a.sibling, a.sibling = null), rc(t, false, e, a, n);
          break;
        case "backwards":
          for (a = null, e = t.child, t.child = null; e !== null; ) {
            if (l = e.alternate, l !== null && un(l) === null) {
              t.child = e;
              break;
            }
            l = e.sibling, e.sibling = a, a = e, e = l;
          }
          rc(t, true, a, null, n);
          break;
        case "together":
          rc(t, false, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Gt(l, t, a) {
      if (l !== null && (t.dependencies = l.dependencies), fa |= t.lanes, (a & t.childLanes) === 0) if (l !== null) {
        if (Yu(l, t, a, false), (a & t.childLanes) === 0) return null;
      } else return null;
      if (l !== null && t.child !== l.child) throw Error(r(153));
      if (t.child !== null) {
        for (l = t.child, a = Ht(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null; ) l = l.sibling, a = a.sibling = Ht(l, l.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function dc(l, t) {
      return (l.lanes & t) !== 0 ? true : (l = l.dependencies, !!(l !== null && Ce(l)));
    }
    function Ld(l, t, a) {
      switch (t.tag) {
        case 3:
          bl(t, t.stateNode.containerInfo), $t(t, Ul, l.memoizedState.cache), qu();
          break;
        case 27:
        case 5:
          Qn(t);
          break;
        case 4:
          bl(t, t.stateNode.containerInfo);
          break;
        case 10:
          $t(t, t.type, t.memoizedProps.value);
          break;
        case 13:
          var u = t.memoizedState;
          if (u !== null) return u.dehydrated !== null ? (la(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Yo(l, t, a) : (la(t), l = Gt(l, t, a), l !== null ? l.sibling : null);
          la(t);
          break;
        case 19:
          var e = (l.flags & 128) !== 0;
          if (u = (a & t.childLanes) !== 0, u || (Yu(l, t, a, false), u = (a & t.childLanes) !== 0), e) {
            if (u) return jo(l, t, a);
            t.flags |= 128;
          }
          if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), R(Nl, Nl.current), u) break;
          return null;
        case 22:
        case 23:
          return t.lanes = 0, No(l, t, a);
        case 24:
          $t(t, Ul, l.memoizedState.cache);
      }
      return Gt(l, t, a);
    }
    function Go(l, t, a) {
      if (l !== null) if (l.memoizedProps !== t.pendingProps) Bl = true;
      else {
        if (!dc(l, a) && (t.flags & 128) === 0) return Bl = false, Ld(l, t, a);
        Bl = (l.flags & 131072) !== 0;
      }
      else Bl = false, il && (t.flags & 1048576) !== 0 && hs(t, Qe, t.index);
      switch (t.lanes = 0, t.tag) {
        case 16:
          l: {
            l = t.pendingProps;
            var u = t.elementType, e = u._init;
            if (u = e(u._payload), t.type = u, typeof u == "function") Ef(u) ? (l = Ua(u, l), t.tag = 1, t = qo(null, t, u, l, a)) : (t.tag = 0, t = nc(null, t, u, l, a));
            else {
              if (u != null) {
                if (e = u.$$typeof, e === Ol) {
                  t.tag = 11, t = Do(null, t, u, l, a);
                  break l;
                } else if (e === Hl) {
                  t.tag = 14, t = Ro(null, t, u, l, a);
                  break l;
                }
              }
              throw t = Rt(u) || u, Error(r(306, t, ""));
            }
          }
          return t;
        case 0:
          return nc(l, t, t.type, t.pendingProps, a);
        case 1:
          return u = t.type, e = Ua(u, t.pendingProps), qo(l, t, u, e, a);
        case 3:
          l: {
            if (bl(t, t.stateNode.containerInfo), l === null) throw Error(r(387));
            u = t.pendingProps;
            var n = t.memoizedState;
            e = n.element, Bf(l, t), Lu(t, u, null, a);
            var f = t.memoizedState;
            if (u = f.cache, $t(t, Ul, u), u !== n.cache && Rf(t, [
              Ul
            ], a, true), Zu(), u = f.element, n.isDehydrated) if (n = {
              element: u,
              isDehydrated: false,
              cache: f.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = Bo(l, t, u, a);
              break l;
            } else if (u !== e) {
              e = ot(Error(r(424)), t), Bu(e), t = Bo(l, t, u, a);
              break l;
            } else {
              switch (l = t.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (_l = Tt(l.firstChild), Kl = t, il = true, Ma = null, _t = true, a = go(t, null, u, a), t.child = a; a; ) a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
            else {
              if (qu(), u === e) {
                t = Gt(l, t, a);
                break l;
              }
              jl(l, t, u, a);
            }
            t = t.child;
          }
          return t;
        case 26:
          return fn(l, t), l === null ? (a = Lr(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : il || (a = t.type, l = t.pendingProps, u = _n(K.current).createElement(a), u[Zl] = t, u[wl] = l, Ql(u, a, l), ql(u), t.stateNode = u) : t.memoizedState = Lr(t.type, l.memoizedProps, t.pendingProps, l.memoizedState), null;
        case 27:
          return Qn(t), l === null && il && (u = t.stateNode = Qr(t.type, t.pendingProps, K.current), Kl = t, _t = true, e = _l, oa(t.type) ? (wc = e, _l = Tt(u.firstChild)) : _l = e), jl(l, t, t.pendingProps.children, a), fn(l, t), l === null && (t.flags |= 4194304), t.child;
        case 5:
          return l === null && il && ((e = u = _l) && (u = gv(u, t.type, t.pendingProps, _t), u !== null ? (t.stateNode = u, Kl = t, _l = Tt(u.firstChild), _t = false, e = true) : e = false), e || za(t)), Qn(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, u = n.children, Zc(e, n) ? u = null : f !== null && Zc(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = Cf(l, t, Bd, null, null, a), re._currentValue = e), fn(l, t), jl(l, t, u, a), t.child;
        case 6:
          return l === null && il && ((l = a = _l) && (a = Sv(a, t.pendingProps, _t), a !== null ? (t.stateNode = a, Kl = t, _l = null, l = true) : l = false), l || za(t)), null;
        case 13:
          return Yo(l, t, a);
        case 4:
          return bl(t, t.stateNode.containerInfo), u = t.pendingProps, l === null ? t.child = nu(t, null, u, a) : jl(l, t, u, a), t.child;
        case 11:
          return Do(l, t, t.type, t.pendingProps, a);
        case 7:
          return jl(l, t, t.pendingProps, a), t.child;
        case 8:
          return jl(l, t, t.pendingProps.children, a), t.child;
        case 12:
          return jl(l, t, t.pendingProps.children, a), t.child;
        case 10:
          return u = t.pendingProps, $t(t, t.type, u.value), jl(l, t, u.children, a), t.child;
        case 9:
          return e = t.type._context, u = t.pendingProps.children, pa(t), e = Ll(e), u = u(e), t.flags |= 1, jl(l, t, u, a), t.child;
        case 14:
          return Ro(l, t, t.type, t.pendingProps, a);
        case 15:
          return Uo(l, t, t.type, t.pendingProps, a);
        case 19:
          return jo(l, t, a);
        case 31:
          return u = t.pendingProps, a = t.mode, u = {
            mode: u.mode,
            children: u.children
          }, l === null ? (a = cn(u, a), a.ref = t.ref, t.child = a, a.return = t, t = a) : (a = Ht(l.child, u), a.ref = t.ref, t.child = a, a.return = t, t = a), t;
        case 22:
          return No(l, t, a);
        case 24:
          return pa(t), u = Ll(Ul), l === null ? (e = Hf(), e === null && (e = yl, n = Uf(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= a), e = n), t.memoizedState = {
            parent: u,
            cache: e
          }, qf(t), $t(t, Ul, e)) : ((l.lanes & a) !== 0 && (Bf(l, t), Lu(t, null, null, a), Zu()), e = l.memoizedState, n = t.memoizedState, e.parent !== u ? (e = {
            parent: u,
            cache: u
          }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), $t(t, Ul, u)) : (u = n.cache, $t(t, Ul, u), u !== e.cache && Rf(t, [
            Ul
          ], a, true))), jl(l, t, t.pendingProps.children, a), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(r(156, t.tag));
    }
    function Qt(l) {
      l.flags |= 4;
    }
    function Qo(l, t) {
      if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
      else if (l.flags |= 16777216, !Wr(t)) {
        if (t = ht.current, t !== null && ((nl & 4194048) === nl ? At !== null : (nl & 62914560) !== nl && (nl & 536870912) === 0 || t !== At)) throw Qu = xf, _s;
        l.flags |= 8192;
      }
    }
    function sn(l, t) {
      t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? gi() : 536870912, l.lanes |= t, su |= t);
    }
    function ku(l, t) {
      if (!il) switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; ) t.alternate !== null && (a = t), t = t.sibling;
          a === null ? l.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = l.tail;
          for (var u = null; a !== null; ) a.alternate !== null && (u = a), a = a.sibling;
          u === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : u.sibling = null;
      }
    }
    function El(l) {
      var t = l.alternate !== null && l.alternate.child === l.child, a = 0, u = 0;
      if (t) for (var e = l.child; e !== null; ) a |= e.lanes | e.childLanes, u |= e.subtreeFlags & 65011712, u |= e.flags & 65011712, e.return = l, e = e.sibling;
      else for (e = l.child; e !== null; ) a |= e.lanes | e.childLanes, u |= e.subtreeFlags, u |= e.flags, e.return = l, e = e.sibling;
      return l.subtreeFlags |= u, l.childLanes = a, t;
    }
    function Vd(l, t, a) {
      var u = t.pendingProps;
      switch (zf(t), t.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return El(t), null;
        case 1:
          return El(t), null;
        case 3:
          return a = t.stateNode, u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), Yt(Ul), Kt(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (xu(t) ? Qt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, gs())), El(t), null;
        case 26:
          return a = t.memoizedState, l === null ? (Qt(t), a !== null ? (El(t), Qo(t, a)) : (El(t), t.flags &= -16777217)) : a ? a !== l.memoizedState ? (Qt(t), El(t), Qo(t, a)) : (El(t), t.flags &= -16777217) : (l.memoizedProps !== u && Qt(t), El(t), t.flags &= -16777217), null;
        case 27:
          be(t), a = K.current;
          var e = t.type;
          if (l !== null && t.stateNode != null) l.memoizedProps !== u && Qt(t);
          else {
            if (!u) {
              if (t.stateNode === null) throw Error(r(166));
              return El(t), null;
            }
            l = C.current, xu(t) ? ys(t) : (l = Qr(e, u, a), t.stateNode = l, Qt(t));
          }
          return El(t), null;
        case 5:
          if (be(t), a = t.type, l !== null && t.stateNode != null) l.memoizedProps !== u && Qt(t);
          else {
            if (!u) {
              if (t.stateNode === null) throw Error(r(166));
              return El(t), null;
            }
            if (l = C.current, xu(t)) ys(t);
            else {
              switch (e = _n(K.current), l) {
                case 1:
                  l = e.createElementNS("http://www.w3.org/2000/svg", a);
                  break;
                case 2:
                  l = e.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                  break;
                default:
                  switch (a) {
                    case "svg":
                      l = e.createElementNS("http://www.w3.org/2000/svg", a);
                      break;
                    case "math":
                      l = e.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                      break;
                    case "script":
                      l = e.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                      break;
                    case "select":
                      l = typeof u.is == "string" ? e.createElement("select", {
                        is: u.is
                      }) : e.createElement("select"), u.multiple ? l.multiple = true : u.size && (l.size = u.size);
                      break;
                    default:
                      l = typeof u.is == "string" ? e.createElement(a, {
                        is: u.is
                      }) : e.createElement(a);
                  }
              }
              l[Zl] = t, l[wl] = u;
              l: for (e = t.child; e !== null; ) {
                if (e.tag === 5 || e.tag === 6) l.appendChild(e.stateNode);
                else if (e.tag !== 4 && e.tag !== 27 && e.child !== null) {
                  e.child.return = e, e = e.child;
                  continue;
                }
                if (e === t) break l;
                for (; e.sibling === null; ) {
                  if (e.return === null || e.return === t) break l;
                  e = e.return;
                }
                e.sibling.return = e.return, e = e.sibling;
              }
              t.stateNode = l;
              l: switch (Ql(l, a, u), a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!u.autoFocus;
                  break l;
                case "img":
                  l = true;
                  break l;
                default:
                  l = false;
              }
              l && Qt(t);
            }
          }
          return El(t), t.flags &= -16777217, null;
        case 6:
          if (l && t.stateNode != null) l.memoizedProps !== u && Qt(t);
          else {
            if (typeof u != "string" && t.stateNode === null) throw Error(r(166));
            if (l = K.current, xu(t)) {
              if (l = t.stateNode, a = t.memoizedProps, u = null, e = Kl, e !== null) switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
              l[Zl] = t, l = !!(l.nodeValue === a || u !== null && u.suppressHydrationWarning === true || xr(l.nodeValue, a)), l || za(t);
            } else l = _n(l).createTextNode(u), l[Zl] = t, t.stateNode = l;
          }
          return El(t), null;
        case 13:
          if (u = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
            if (e = xu(t), u !== null && u.dehydrated !== null) {
              if (l === null) {
                if (!e) throw Error(r(318));
                if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
                e[Zl] = t;
              } else qu(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
              El(t), e = false;
            } else e = gs(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = true;
            if (!e) return t.flags & 256 ? (jt(t), t) : (jt(t), null);
          }
          if (jt(t), (t.flags & 128) !== 0) return t.lanes = a, t;
          if (a = u !== null, l = l !== null && l.memoizedState !== null, a) {
            u = t.child, e = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (e = u.alternate.memoizedState.cachePool.pool);
            var n = null;
            u.memoizedState !== null && u.memoizedState.cachePool !== null && (n = u.memoizedState.cachePool.pool), n !== e && (u.flags |= 2048);
          }
          return a !== l && a && (t.child.flags |= 8192), sn(t, t.updateQueue), El(t), null;
        case 4:
          return Kt(), l === null && Xc(t.stateNode.containerInfo), El(t), null;
        case 10:
          return Yt(t.type), El(t), null;
        case 19:
          if (H(Nl), e = t.memoizedState, e === null) return El(t), null;
          if (u = (t.flags & 128) !== 0, n = e.rendering, n === null) if (u) ku(e, false);
          else {
            if (Al !== 0 || l !== null && (l.flags & 128) !== 0) for (l = t.child; l !== null; ) {
              if (n = un(l), n !== null) {
                for (t.flags |= 128, ku(e, false), l = n.updateQueue, t.updateQueue = l, sn(t, l), t.subtreeFlags = 0, l = a, a = t.child; a !== null; ) vs(a, l), a = a.sibling;
                return R(Nl, Nl.current & 1 | 2), t.child;
              }
              l = l.sibling;
            }
            e.tail !== null && Et() > dn && (t.flags |= 128, u = true, ku(e, false), t.lanes = 4194304);
          }
          else {
            if (!u) if (l = un(n), l !== null) {
              if (t.flags |= 128, u = true, l = l.updateQueue, t.updateQueue = l, sn(t, l), ku(e, true), e.tail === null && e.tailMode === "hidden" && !n.alternate && !il) return El(t), null;
            } else 2 * Et() - e.renderingStartTime > dn && a !== 536870912 && (t.flags |= 128, u = true, ku(e, false), t.lanes = 4194304);
            e.isBackwards ? (n.sibling = t.child, t.child = n) : (l = e.last, l !== null ? l.sibling = n : t.child = n, e.last = n);
          }
          return e.tail !== null ? (t = e.tail, e.rendering = t, e.tail = t.sibling, e.renderingStartTime = Et(), t.sibling = null, l = Nl.current, R(Nl, u ? l & 1 | 2 : l & 1), t) : (El(t), null);
        case 22:
        case 23:
          return jt(t), Gf(), u = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== u && (t.flags |= 8192) : u && (t.flags |= 8192), u ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (El(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : El(t), a = t.updateQueue, a !== null && sn(t, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), u = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (u = t.memoizedState.cachePool.pool), u !== a && (t.flags |= 2048), l !== null && H(Da), null;
        case 24:
          return a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Yt(Ul), El(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(r(156, t.tag));
    }
    function Kd(l, t) {
      switch (zf(t), t.tag) {
        case 1:
          return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
        case 3:
          return Yt(Ul), Kt(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return be(t), null;
        case 13:
          if (jt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
            if (t.alternate === null) throw Error(r(340));
            qu();
          }
          return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
        case 19:
          return H(Nl), null;
        case 4:
          return Kt(), null;
        case 10:
          return Yt(t.type), null;
        case 22:
        case 23:
          return jt(t), Gf(), l !== null && H(Da), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
        case 24:
          return Yt(Ul), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Co(l, t) {
      switch (zf(t), t.tag) {
        case 3:
          Yt(Ul), Kt();
          break;
        case 26:
        case 27:
        case 5:
          be(t);
          break;
        case 4:
          Kt();
          break;
        case 13:
          jt(t);
          break;
        case 19:
          H(Nl);
          break;
        case 10:
          Yt(t.type);
          break;
        case 22:
        case 23:
          jt(t), Gf(), l !== null && H(Da);
          break;
        case 24:
          Yt(Ul);
      }
    }
    function Fu(l, t) {
      try {
        var a = t.updateQueue, u = a !== null ? a.lastEffect : null;
        if (u !== null) {
          var e = u.next;
          a = e;
          do {
            if ((a.tag & l) === l) {
              u = void 0;
              var n = a.create, f = a.inst;
              u = n(), f.destroy = u;
            }
            a = a.next;
          } while (a !== e);
        }
      } catch (c) {
        hl(t, t.return, c);
      }
    }
    function aa(l, t, a) {
      try {
        var u = t.updateQueue, e = u !== null ? u.lastEffect : null;
        if (e !== null) {
          var n = e.next;
          u = n;
          do {
            if ((u.tag & l) === l) {
              var f = u.inst, c = f.destroy;
              if (c !== void 0) {
                f.destroy = void 0, e = t;
                var i = a, m = c;
                try {
                  m();
                } catch (T) {
                  hl(e, i, T);
                }
              }
            }
            u = u.next;
          } while (u !== n);
        }
      } catch (T) {
        hl(t, t.return, T);
      }
    }
    function Zo(l) {
      var t = l.updateQueue;
      if (t !== null) {
        var a = l.stateNode;
        try {
          Ds(t, a);
        } catch (u) {
          hl(l, l.return, u);
        }
      }
    }
    function Lo(l, t, a) {
      a.props = Ua(l.type, l.memoizedProps), a.state = l.memoizedState;
      try {
        a.componentWillUnmount();
      } catch (u) {
        hl(l, t, u);
      }
    }
    function Iu(l, t) {
      try {
        var a = l.ref;
        if (a !== null) {
          switch (l.tag) {
            case 26:
            case 27:
            case 5:
              var u = l.stateNode;
              break;
            case 30:
              u = l.stateNode;
              break;
            default:
              u = l.stateNode;
          }
          typeof a == "function" ? l.refCleanup = a(u) : a.current = u;
        }
      } catch (e) {
        hl(l, t, e);
      }
    }
    function Mt(l, t) {
      var a = l.ref, u = l.refCleanup;
      if (a !== null) if (typeof u == "function") try {
        u();
      } catch (e) {
        hl(l, t, e);
      } finally {
        l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
      }
      else if (typeof a == "function") try {
        a(null);
      } catch (e) {
        hl(l, t, e);
      }
      else a.current = null;
    }
    function Vo(l) {
      var t = l.type, a = l.memoizedProps, u = l.stateNode;
      try {
        l: switch (t) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            a.autoFocus && u.focus();
            break l;
          case "img":
            a.src ? u.src = a.src : a.srcSet && (u.srcset = a.srcSet);
        }
      } catch (e) {
        hl(l, l.return, e);
      }
    }
    function vc(l, t, a) {
      try {
        var u = l.stateNode;
        dv(u, l.type, a, t), u[wl] = t;
      } catch (e) {
        hl(l, l.return, e);
      }
    }
    function Ko(l) {
      return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && oa(l.type) || l.tag === 4;
    }
    function hc(l) {
      l: for (; ; ) {
        for (; l.sibling === null; ) {
          if (l.return === null || Ko(l.return)) return null;
          l = l.return;
        }
        for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
          if (l.tag === 27 && oa(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
          l.child.return = l, l = l.child;
        }
        if (!(l.flags & 2)) return l.stateNode;
      }
    }
    function yc(l, t, a) {
      var u = l.tag;
      if (u === 5 || u === 6) l = l.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(l, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(l), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = En));
      else if (u !== 4 && (u === 27 && oa(l.type) && (a = l.stateNode, t = null), l = l.child, l !== null)) for (yc(l, t, a), l = l.sibling; l !== null; ) yc(l, t, a), l = l.sibling;
    }
    function on(l, t, a) {
      var u = l.tag;
      if (u === 5 || u === 6) l = l.stateNode, t ? a.insertBefore(l, t) : a.appendChild(l);
      else if (u !== 4 && (u === 27 && oa(l.type) && (a = l.stateNode), l = l.child, l !== null)) for (on(l, t, a), l = l.sibling; l !== null; ) on(l, t, a), l = l.sibling;
    }
    function wo(l) {
      var t = l.stateNode, a = l.memoizedProps;
      try {
        for (var u = l.type, e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
        Ql(t, u, a), t[Zl] = l, t[wl] = a;
      } catch (n) {
        hl(l, l.return, n);
      }
    }
    var Ct = false, zl = false, mc = false, Jo = typeof WeakSet == "function" ? WeakSet : Set, Yl = null;
    function wd(l, t) {
      if (l = l.containerInfo, Qc = Dn, l = us(l), hf(l)) {
        if ("selectionStart" in l) var a = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
        else l: {
          a = (a = l.ownerDocument) && a.defaultView || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var e = u.anchorOffset, n = u.focusNode;
            u = u.focusOffset;
            try {
              a.nodeType, n.nodeType;
            } catch {
              a = null;
              break l;
            }
            var f = 0, c = -1, i = -1, m = 0, T = 0, M = l, g = null;
            t: for (; ; ) {
              for (var b; M !== a || e !== 0 && M.nodeType !== 3 || (c = f + e), M !== n || u !== 0 && M.nodeType !== 3 || (i = f + u), M.nodeType === 3 && (f += M.nodeValue.length), (b = M.firstChild) !== null; ) g = M, M = b;
              for (; ; ) {
                if (M === l) break t;
                if (g === a && ++m === e && (c = f), g === n && ++T === u && (i = f), (b = M.nextSibling) !== null) break;
                M = g, g = M.parentNode;
              }
              M = b;
            }
            a = c === -1 || i === -1 ? null : {
              start: c,
              end: i
            };
          } else a = null;
        }
        a = a || {
          start: 0,
          end: 0
        };
      } else a = null;
      for (Cc = {
        focusedElem: l,
        selectionRange: a
      }, Dn = false, Yl = t; Yl !== null; ) if (t = Yl, l = t.child, (t.subtreeFlags & 1024) !== 0 && l !== null) l.return = t, Yl = l;
      else for (; Yl !== null; ) {
        switch (t = Yl, n = t.alternate, l = t.flags, t.tag) {
          case 0:
            break;
          case 11:
          case 15:
            break;
          case 1:
            if ((l & 1024) !== 0 && n !== null) {
              l = void 0, a = t, e = n.memoizedProps, n = n.memoizedState, u = a.stateNode;
              try {
                var V = Ua(a.type, e, a.elementType === a.type);
                l = u.getSnapshotBeforeUpdate(V, n), u.__reactInternalSnapshotBeforeUpdate = l;
              } catch (Z) {
                hl(a, a.return, Z);
              }
            }
            break;
          case 3:
            if ((l & 1024) !== 0) {
              if (l = t.stateNode.containerInfo, a = l.nodeType, a === 9) Vc(l);
              else if (a === 1) switch (l.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Vc(l);
                  break;
                default:
                  l.textContent = "";
              }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          default:
            if ((l & 1024) !== 0) throw Error(r(163));
        }
        if (l = t.sibling, l !== null) {
          l.return = t.return, Yl = l;
          break;
        }
        Yl = t.return;
      }
    }
    function Wo(l, t, a) {
      var u = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ua(l, a), u & 4 && Fu(5, a);
          break;
        case 1:
          if (ua(l, a), u & 4) if (l = a.stateNode, t === null) try {
            l.componentDidMount();
          } catch (f) {
            hl(a, a.return, f);
          }
          else {
            var e = Ua(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              hl(a, a.return, f);
            }
          }
          u & 64 && Zo(a), u & 512 && Iu(a, a.return);
          break;
        case 3:
          if (ua(l, a), u & 64 && (l = a.updateQueue, l !== null)) {
            if (t = null, a.child !== null) switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
            try {
              Ds(l, t);
            } catch (f) {
              hl(a, a.return, f);
            }
          }
          break;
        case 27:
          t === null && u & 4 && wo(a);
        case 26:
        case 5:
          ua(l, a), t === null && u & 4 && Vo(a), u & 512 && Iu(a, a.return);
          break;
        case 12:
          ua(l, a);
          break;
        case 13:
          ua(l, a), u & 4 && Fo(l, a), u & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = tv.bind(null, a), bv(l, a))));
          break;
        case 22:
          if (u = a.memoizedState !== null || Ct, !u) {
            t = t !== null && t.memoizedState !== null || zl, e = Ct;
            var n = zl;
            Ct = u, (zl = t) && !n ? ea(l, a, (a.subtreeFlags & 8772) !== 0) : ua(l, a), Ct = e, zl = n;
          }
          break;
        case 30:
          break;
        default:
          ua(l, a);
      }
    }
    function $o(l) {
      var t = l.alternate;
      t !== null && (l.alternate = null, $o(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Wn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
    }
    var Tl = null, $l = false;
    function Zt(l, t, a) {
      for (a = a.child; a !== null; ) ko(l, t, a), a = a.sibling;
    }
    function ko(l, t, a) {
      if (Il && typeof Il.onCommitFiberUnmount == "function") try {
        Il.onCommitFiberUnmount(bu, a);
      } catch {
      }
      switch (a.tag) {
        case 26:
          zl || Mt(a, t), Zt(l, t, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
          break;
        case 27:
          zl || Mt(a, t);
          var u = Tl, e = $l;
          oa(a.type) && (Tl = a.stateNode, $l = false), Zt(l, t, a), ce(a.stateNode), Tl = u, $l = e;
          break;
        case 5:
          zl || Mt(a, t);
        case 6:
          if (u = Tl, e = $l, Tl = null, Zt(l, t, a), Tl = u, $l = e, Tl !== null) if ($l) try {
            (Tl.nodeType === 9 ? Tl.body : Tl.nodeName === "HTML" ? Tl.ownerDocument.body : Tl).removeChild(a.stateNode);
          } catch (n) {
            hl(a, t, n);
          }
          else try {
            Tl.removeChild(a.stateNode);
          } catch (n) {
            hl(a, t, n);
          }
          break;
        case 18:
          Tl !== null && ($l ? (l = Tl, jr(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, a.stateNode), ye(l)) : jr(Tl, a.stateNode));
          break;
        case 4:
          u = Tl, e = $l, Tl = a.stateNode.containerInfo, $l = true, Zt(l, t, a), Tl = u, $l = e;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          zl || aa(2, a, t), zl || aa(4, a, t), Zt(l, t, a);
          break;
        case 1:
          zl || (Mt(a, t), u = a.stateNode, typeof u.componentWillUnmount == "function" && Lo(a, t, u)), Zt(l, t, a);
          break;
        case 21:
          Zt(l, t, a);
          break;
        case 22:
          zl = (u = zl) || a.memoizedState !== null, Zt(l, t, a), zl = u;
          break;
        default:
          Zt(l, t, a);
      }
    }
    function Fo(l, t) {
      if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null)))) try {
        ye(l);
      } catch (a) {
        hl(t, t.return, a);
      }
    }
    function Jd(l) {
      switch (l.tag) {
        case 13:
        case 19:
          var t = l.stateNode;
          return t === null && (t = l.stateNode = new Jo()), t;
        case 22:
          return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Jo()), t;
        default:
          throw Error(r(435, l.tag));
      }
    }
    function gc(l, t) {
      var a = Jd(l);
      t.forEach(function(u) {
        var e = av.bind(null, l, u);
        a.has(u) || (a.add(u), u.then(e, e));
      });
    }
    function at(l, t) {
      var a = t.deletions;
      if (a !== null) for (var u = 0; u < a.length; u++) {
        var e = a[u], n = l, f = t, c = f;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (oa(c.type)) {
                Tl = c.stateNode, $l = false;
                break l;
              }
              break;
            case 5:
              Tl = c.stateNode, $l = false;
              break l;
            case 3:
            case 4:
              Tl = c.stateNode.containerInfo, $l = true;
              break l;
          }
          c = c.return;
        }
        if (Tl === null) throw Error(r(160));
        ko(n, f, e), Tl = null, $l = false, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
      if (t.subtreeFlags & 13878) for (t = t.child; t !== null; ) Io(t, l), t = t.sibling;
    }
    var bt = null;
    function Io(l, t) {
      var a = l.alternate, u = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          at(t, l), ut(l), u & 4 && (aa(3, l, l.return), Fu(3, l), aa(5, l, l.return));
          break;
        case 1:
          at(t, l), ut(l), u & 512 && (zl || a === null || Mt(a, a.return)), u & 64 && Ct && (l = l.updateQueue, l !== null && (u = l.callbacks, u !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? u : a.concat(u))));
          break;
        case 26:
          var e = bt;
          if (at(t, l), ut(l), u & 512 && (zl || a === null || Mt(a, a.return)), u & 4) {
            var n = a !== null ? a.memoizedState : null;
            if (u = l.memoizedState, a === null) if (u === null) if (l.stateNode === null) {
              l: {
                u = l.type, a = l.memoizedProps, e = e.ownerDocument || e;
                t: switch (u) {
                  case "title":
                    n = e.getElementsByTagName("title")[0], (!n || n[_u] || n[Zl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(u), e.head.insertBefore(n, e.querySelector("head > title"))), Ql(n, u, a), n[Zl] = l, ql(n), u = n;
                    break l;
                  case "link":
                    var f = wr("link", "href", e).get(u + (a.href || ""));
                    if (f) {
                      for (var c = 0; c < f.length; c++) if (n = f[c], n.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && n.getAttribute("rel") === (a.rel == null ? null : a.rel) && n.getAttribute("title") === (a.title == null ? null : a.title) && n.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                        f.splice(c, 1);
                        break t;
                      }
                    }
                    n = e.createElement(u), Ql(n, u, a), e.head.appendChild(n);
                    break;
                  case "meta":
                    if (f = wr("meta", "content", e).get(u + (a.content || ""))) {
                      for (c = 0; c < f.length; c++) if (n = f[c], n.getAttribute("content") === (a.content == null ? null : "" + a.content) && n.getAttribute("name") === (a.name == null ? null : a.name) && n.getAttribute("property") === (a.property == null ? null : a.property) && n.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && n.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                        f.splice(c, 1);
                        break t;
                      }
                    }
                    n = e.createElement(u), Ql(n, u, a), e.head.appendChild(n);
                    break;
                  default:
                    throw Error(r(468, u));
                }
                n[Zl] = l, ql(n), u = n;
              }
              l.stateNode = u;
            } else Jr(e, l.type, l.stateNode);
            else l.stateNode = Kr(e, u, l.memoizedProps);
            else n !== u ? (n === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : n.count--, u === null ? Jr(e, l.type, l.stateNode) : Kr(e, u, l.memoizedProps)) : u === null && l.stateNode !== null && vc(l, l.memoizedProps, a.memoizedProps);
          }
          break;
        case 27:
          at(t, l), ut(l), u & 512 && (zl || a === null || Mt(a, a.return)), a !== null && u & 4 && vc(l, l.memoizedProps, a.memoizedProps);
          break;
        case 5:
          if (at(t, l), ut(l), u & 512 && (zl || a === null || Mt(a, a.return)), l.flags & 32) {
            e = l.stateNode;
            try {
              Ca(e, "");
            } catch (b) {
              hl(l, l.return, b);
            }
          }
          u & 4 && l.stateNode != null && (e = l.memoizedProps, vc(l, e, a !== null ? a.memoizedProps : e)), u & 1024 && (mc = true);
          break;
        case 6:
          if (at(t, l), ut(l), u & 4) {
            if (l.stateNode === null) throw Error(r(162));
            u = l.memoizedProps, a = l.stateNode;
            try {
              a.nodeValue = u;
            } catch (b) {
              hl(l, l.return, b);
            }
          }
          break;
        case 3:
          if (zn = null, e = bt, bt = An(t.containerInfo), at(t, l), bt = e, ut(l), u & 4 && a !== null && a.memoizedState.isDehydrated) try {
            ye(t.containerInfo);
          } catch (b) {
            hl(l, l.return, b);
          }
          mc && (mc = false, Po(l));
          break;
        case 4:
          u = bt, bt = An(l.stateNode.containerInfo), at(t, l), ut(l), bt = u;
          break;
        case 12:
          at(t, l), ut(l);
          break;
        case 13:
          at(t, l), ut(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Ac = Et()), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, gc(l, u)));
          break;
        case 22:
          e = l.memoizedState !== null;
          var i = a !== null && a.memoizedState !== null, m = Ct, T = zl;
          if (Ct = m || e, zl = T || i, at(t, l), zl = T, Ct = m, ut(l), u & 8192) l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (a === null || i || Ct || zl || Na(l)), a = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                i = a = t;
                try {
                  if (n = i.stateNode, e) f = n.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    c = i.stateNode;
                    var M = i.memoizedProps.style, g = M != null && M.hasOwnProperty("display") ? M.display : null;
                    c.style.display = g == null || typeof g == "boolean" ? "" : ("" + g).trim();
                  }
                } catch (b) {
                  hl(i, i.return, b);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                i = t;
                try {
                  i.stateNode.nodeValue = e ? "" : i.memoizedProps;
                } catch (b) {
                  hl(i, i.return, b);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              a === t && (a = null), t = t.return;
            }
            a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
          }
          u & 4 && (u = l.updateQueue, u !== null && (a = u.retryQueue, a !== null && (u.retryQueue = null, gc(l, a))));
          break;
        case 19:
          at(t, l), ut(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, gc(l, u)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          at(t, l), ut(l);
      }
    }
    function ut(l) {
      var t = l.flags;
      if (t & 2) {
        try {
          for (var a, u = l.return; u !== null; ) {
            if (Ko(u)) {
              a = u;
              break;
            }
            u = u.return;
          }
          if (a == null) throw Error(r(160));
          switch (a.tag) {
            case 27:
              var e = a.stateNode, n = hc(l);
              on(l, n, e);
              break;
            case 5:
              var f = a.stateNode;
              a.flags & 32 && (Ca(f, ""), a.flags &= -33);
              var c = hc(l);
              on(l, c, f);
              break;
            case 3:
            case 4:
              var i = a.stateNode.containerInfo, m = hc(l);
              yc(l, m, i);
              break;
            default:
              throw Error(r(161));
          }
        } catch (T) {
          hl(l, l.return, T);
        }
        l.flags &= -3;
      }
      t & 4096 && (l.flags &= -4097);
    }
    function Po(l) {
      if (l.subtreeFlags & 1024) for (l = l.child; l !== null; ) {
        var t = l;
        Po(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
    }
    function ua(l, t) {
      if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) Wo(l, t.alternate, t), t = t.sibling;
    }
    function Na(l) {
      for (l = l.child; l !== null; ) {
        var t = l;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            aa(4, t, t.return), Na(t);
            break;
          case 1:
            Mt(t, t.return);
            var a = t.stateNode;
            typeof a.componentWillUnmount == "function" && Lo(t, t.return, a), Na(t);
            break;
          case 27:
            ce(t.stateNode);
          case 26:
          case 5:
            Mt(t, t.return), Na(t);
            break;
          case 22:
            t.memoizedState === null && Na(t);
            break;
          case 30:
            Na(t);
            break;
          default:
            Na(t);
        }
        l = l.sibling;
      }
    }
    function ea(l, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
        var u = t.alternate, e = l, n = t, f = n.flags;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            ea(e, n, a), Fu(4, n);
            break;
          case 1:
            if (ea(e, n, a), u = n, e = u.stateNode, typeof e.componentDidMount == "function") try {
              e.componentDidMount();
            } catch (m) {
              hl(u, u.return, m);
            }
            if (u = n, e = u.updateQueue, e !== null) {
              var c = u.stateNode;
              try {
                var i = e.shared.hiddenCallbacks;
                if (i !== null) for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++) ps(i[e], c);
              } catch (m) {
                hl(u, u.return, m);
              }
            }
            a && f & 64 && Zo(n), Iu(n, n.return);
            break;
          case 27:
            wo(n);
          case 26:
          case 5:
            ea(e, n, a), a && u === null && f & 4 && Vo(n), Iu(n, n.return);
            break;
          case 12:
            ea(e, n, a);
            break;
          case 13:
            ea(e, n, a), a && f & 4 && Fo(e, n);
            break;
          case 22:
            n.memoizedState === null && ea(e, n, a), Iu(n, n.return);
            break;
          case 30:
            break;
          default:
            ea(e, n, a);
        }
        t = t.sibling;
      }
    }
    function Sc(l, t) {
      var a = null;
      l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (l != null && l.refCount++, a != null && Xu(a));
    }
    function bc(l, t) {
      l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Xu(l));
    }
    function zt(l, t, a, u) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) lr(l, t, a, u), t = t.sibling;
    }
    function lr(l, t, a, u) {
      var e = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          zt(l, t, a, u), e & 2048 && Fu(9, t);
          break;
        case 1:
          zt(l, t, a, u);
          break;
        case 3:
          zt(l, t, a, u), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Xu(l)));
          break;
        case 12:
          if (e & 2048) {
            zt(l, t, a, u), l = t.stateNode;
            try {
              var n = t.memoizedProps, f = n.id, c = n.onPostCommit;
              typeof c == "function" && c(f, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0);
            } catch (i) {
              hl(t, t.return, i);
            }
          } else zt(l, t, a, u);
          break;
        case 13:
          zt(l, t, a, u);
          break;
        case 23:
          break;
        case 22:
          n = t.stateNode, f = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? zt(l, t, a, u) : Pu(l, t) : n._visibility & 2 ? zt(l, t, a, u) : (n._visibility |= 2, fu(l, t, a, u, (t.subtreeFlags & 10256) !== 0)), e & 2048 && Sc(f, t);
          break;
        case 24:
          zt(l, t, a, u), e & 2048 && bc(t.alternate, t);
          break;
        default:
          zt(l, t, a, u);
      }
    }
    function fu(l, t, a, u, e) {
      for (e = e && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
        var n = l, f = t, c = a, i = u, m = f.flags;
        switch (f.tag) {
          case 0:
          case 11:
          case 15:
            fu(n, f, c, i, e), Fu(8, f);
            break;
          case 23:
            break;
          case 22:
            var T = f.stateNode;
            f.memoizedState !== null ? T._visibility & 2 ? fu(n, f, c, i, e) : Pu(n, f) : (T._visibility |= 2, fu(n, f, c, i, e)), e && m & 2048 && Sc(f.alternate, f);
            break;
          case 24:
            fu(n, f, c, i, e), e && m & 2048 && bc(f.alternate, f);
            break;
          default:
            fu(n, f, c, i, e);
        }
        t = t.sibling;
      }
    }
    function Pu(l, t) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
        var a = l, u = t, e = u.flags;
        switch (u.tag) {
          case 22:
            Pu(a, u), e & 2048 && Sc(u.alternate, u);
            break;
          case 24:
            Pu(a, u), e & 2048 && bc(u.alternate, u);
            break;
          default:
            Pu(a, u);
        }
        t = t.sibling;
      }
    }
    var le = 8192;
    function cu(l) {
      if (l.subtreeFlags & le) for (l = l.child; l !== null; ) tr(l), l = l.sibling;
    }
    function tr(l) {
      switch (l.tag) {
        case 26:
          cu(l), l.flags & le && l.memoizedState !== null && Hv(bt, l.memoizedState, l.memoizedProps);
          break;
        case 5:
          cu(l);
          break;
        case 3:
        case 4:
          var t = bt;
          bt = An(l.stateNode.containerInfo), cu(l), bt = t;
          break;
        case 22:
          l.memoizedState === null && (t = l.alternate, t !== null && t.memoizedState !== null ? (t = le, le = 16777216, cu(l), le = t) : cu(l));
          break;
        default:
          cu(l);
      }
    }
    function ar(l) {
      var t = l.alternate;
      if (t !== null && (l = t.child, l !== null)) {
        t.child = null;
        do
          t = l.sibling, l.sibling = null, l = t;
        while (l !== null);
      }
    }
    function te(l) {
      var t = l.deletions;
      if ((l.flags & 16) !== 0) {
        if (t !== null) for (var a = 0; a < t.length; a++) {
          var u = t[a];
          Yl = u, er(u, l);
        }
        ar(l);
      }
      if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) ur(l), l = l.sibling;
    }
    function ur(l) {
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          te(l), l.flags & 2048 && aa(9, l, l.return);
          break;
        case 3:
          te(l);
          break;
        case 12:
          te(l);
          break;
        case 22:
          var t = l.stateNode;
          l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, rn(l)) : te(l);
          break;
        default:
          te(l);
      }
    }
    function rn(l) {
      var t = l.deletions;
      if ((l.flags & 16) !== 0) {
        if (t !== null) for (var a = 0; a < t.length; a++) {
          var u = t[a];
          Yl = u, er(u, l);
        }
        ar(l);
      }
      for (l = l.child; l !== null; ) {
        switch (t = l, t.tag) {
          case 0:
          case 11:
          case 15:
            aa(8, t, t.return), rn(t);
            break;
          case 22:
            a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, rn(t));
            break;
          default:
            rn(t);
        }
        l = l.sibling;
      }
    }
    function er(l, t) {
      for (; Yl !== null; ) {
        var a = Yl;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            aa(8, a, t);
            break;
          case 23:
          case 22:
            if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
              var u = a.memoizedState.cachePool.pool;
              u != null && u.refCount++;
            }
            break;
          case 24:
            Xu(a.memoizedState.cache);
        }
        if (u = a.child, u !== null) u.return = a, Yl = u;
        else l: for (a = l; Yl !== null; ) {
          u = Yl;
          var e = u.sibling, n = u.return;
          if ($o(u), u === a) {
            Yl = null;
            break l;
          }
          if (e !== null) {
            e.return = n, Yl = e;
            break l;
          }
          Yl = n;
        }
      }
    }
    var Wd = {
      getCacheForType: function(l) {
        var t = Ll(Ul), a = t.data.get(l);
        return a === void 0 && (a = l(), t.data.set(l, a)), a;
      }
    }, $d = typeof WeakMap == "function" ? WeakMap : Map, sl = 0, yl = null, P = null, nl = 0, ol = 0, et = null, na = false, iu = false, Tc = false, Lt = 0, Al = 0, fa = 0, Ha = 0, Ec = 0, yt = 0, su = 0, ae = null, kl = null, _c = false, Ac = 0, dn = 1 / 0, vn = null, ca = null, Gl = 0, ia = null, ou = null, ru = 0, Mc = 0, zc = null, nr = null, ue = 0, Oc = null;
    function nt() {
      if ((sl & 2) !== 0 && nl !== 0) return nl & -nl;
      if (S.T !== null) {
        var l = Ia;
        return l !== 0 ? l : xc();
      }
      return Ti();
    }
    function fr() {
      yt === 0 && (yt = (nl & 536870912) === 0 || il ? mi() : 536870912);
      var l = ht.current;
      return l !== null && (l.flags |= 32), yt;
    }
    function ft(l, t, a) {
      (l === yl && (ol === 2 || ol === 9) || l.cancelPendingCommit !== null) && (du(l, 0), sa(l, nl, yt, false)), Eu(l, a), ((sl & 2) === 0 || l !== yl) && (l === yl && ((sl & 2) === 0 && (Ha |= a), Al === 4 && sa(l, nl, yt, false)), Ot(l));
    }
    function cr(l, t, a) {
      if ((sl & 6) !== 0) throw Error(r(327));
      var u = !a && (t & 124) === 0 && (t & l.expiredLanes) === 0 || Tu(l, t), e = u ? Id(l, t) : Rc(l, t, true), n = u;
      do {
        if (e === 0) {
          iu && !u && sa(l, t, 0, false);
          break;
        } else {
          if (a = l.current.alternate, n && !kd(a)) {
            e = Rc(l, t, false), n = false;
            continue;
          }
          if (e === 2) {
            if (n = t, l.errorRecoveryDisabledLanes & n) var f = 0;
            else f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
            if (f !== 0) {
              t = f;
              l: {
                var c = l;
                e = ae;
                var i = c.current.memoizedState.isDehydrated;
                if (i && (du(c, f).flags |= 256), f = Rc(c, f, false), f !== 2) {
                  if (Tc && !i) {
                    c.errorRecoveryDisabledLanes |= n, Ha |= n, e = 4;
                    break l;
                  }
                  n = kl, kl = e, n !== null && (kl === null ? kl = n : kl.push.apply(kl, n));
                }
                e = f;
              }
              if (n = false, e !== 2) continue;
            }
          }
          if (e === 1) {
            du(l, 0), sa(l, t, 0, true);
            break;
          }
          l: {
            switch (u = l, n = e, n) {
              case 0:
              case 1:
                throw Error(r(345));
              case 4:
                if ((t & 4194048) !== t) break;
              case 6:
                sa(u, t, yt, !na);
                break l;
              case 2:
                kl = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(r(329));
            }
            if ((t & 62914560) === t && (e = Ac + 300 - Et(), 10 < e)) {
              if (sa(u, t, yt, !na), Ae(u, 0, true) !== 0) break l;
              u.timeoutHandle = Yr(ir.bind(null, u, a, kl, vn, _c, t, yt, Ha, su, na, n, 2, -0, 0), e);
              break l;
            }
            ir(u, a, kl, vn, _c, t, yt, Ha, su, na, n, 0, -0, 0);
          }
        }
        break;
      } while (true);
      Ot(l);
    }
    function ir(l, t, a, u, e, n, f, c, i, m, T, M, g, b) {
      if (l.timeoutHandle = -1, M = t.subtreeFlags, (M & 8192 || (M & 16785408) === 16785408) && (oe = {
        stylesheets: null,
        count: 0,
        unsuspend: Nv
      }, tr(t), M = xv(), M !== null)) {
        l.cancelPendingCommit = M(yr.bind(null, l, t, n, a, u, e, f, c, i, T, 1, g, b)), sa(l, n, f, !m);
        return;
      }
      yr(l, t, n, a, u, e, f, c, i);
    }
    function kd(l) {
      for (var t = l; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null))) for (var u = 0; u < a.length; u++) {
          var e = a[u], n = e.getSnapshot;
          e = e.value;
          try {
            if (!lt(n(), e)) return false;
          } catch {
            return false;
          }
        }
        if (a = t.child, t.subtreeFlags & 16384 && a !== null) a.return = t, t = a;
        else {
          if (t === l) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === l) return true;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return true;
    }
    function sa(l, t, a, u) {
      t &= ~Ec, t &= ~Ha, l.suspendedLanes |= t, l.pingedLanes &= ~t, u && (l.warmLanes |= t), u = l.expirationTimes;
      for (var e = t; 0 < e; ) {
        var n = 31 - Pl(e), f = 1 << n;
        u[n] = -1, e &= ~f;
      }
      a !== 0 && Si(l, a, t);
    }
    function hn() {
      return (sl & 6) === 0 ? (ee(0), false) : true;
    }
    function pc() {
      if (P !== null) {
        if (ol === 0) var l = P.return;
        else l = P, Bt = Oa = null, Vf(l), eu = null, Wu = 0, l = P;
        for (; l !== null; ) Co(l.alternate, l), l = l.return;
        P = null;
      }
    }
    function du(l, t) {
      var a = l.timeoutHandle;
      a !== -1 && (l.timeoutHandle = -1, hv(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), pc(), yl = l, P = a = Ht(l.current, null), nl = t, ol = 0, et = null, na = false, iu = Tu(l, t), Tc = false, su = yt = Ec = Ha = fa = Al = 0, kl = ae = null, _c = false, (t & 8) !== 0 && (t |= t & 32);
      var u = l.entangledLanes;
      if (u !== 0) for (l = l.entanglements, u &= t; 0 < u; ) {
        var e = 31 - Pl(u), n = 1 << e;
        t |= l[e], u &= ~n;
      }
      return Lt = t, Be(), a;
    }
    function sr(l, t) {
      F = null, S.H = ln, t === Gu || t === Ve ? (t = zs(), ol = 3) : t === _s ? (t = zs(), ol = 4) : ol = t === po ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, et = t, P === null && (Al = 1, nn(l, ot(t, l.current)));
    }
    function or() {
      var l = S.H;
      return S.H = ln, l === null ? ln : l;
    }
    function rr() {
      var l = S.A;
      return S.A = Wd, l;
    }
    function Dc() {
      Al = 4, na || (nl & 4194048) !== nl && ht.current !== null || (iu = true), (fa & 134217727) === 0 && (Ha & 134217727) === 0 || yl === null || sa(yl, nl, yt, false);
    }
    function Rc(l, t, a) {
      var u = sl;
      sl |= 2;
      var e = or(), n = rr();
      (yl !== l || nl !== t) && (vn = null, du(l, t)), t = false;
      var f = Al;
      l: do
        try {
          if (ol !== 0 && P !== null) {
            var c = P, i = et;
            switch (ol) {
              case 8:
                pc(), f = 6;
                break l;
              case 3:
              case 2:
              case 9:
              case 6:
                ht.current === null && (t = true);
                var m = ol;
                if (ol = 0, et = null, vu(l, c, i, m), a && iu) {
                  f = 0;
                  break l;
                }
                break;
              default:
                m = ol, ol = 0, et = null, vu(l, c, i, m);
            }
          }
          Fd(), f = Al;
          break;
        } catch (T) {
          sr(l, T);
        }
      while (true);
      return t && l.shellSuspendCounter++, Bt = Oa = null, sl = u, S.H = e, S.A = n, P === null && (yl = null, nl = 0, Be()), f;
    }
    function Fd() {
      for (; P !== null; ) dr(P);
    }
    function Id(l, t) {
      var a = sl;
      sl |= 2;
      var u = or(), e = rr();
      yl !== l || nl !== t ? (vn = null, dn = Et() + 500, du(l, t)) : iu = Tu(l, t);
      l: do
        try {
          if (ol !== 0 && P !== null) {
            t = P;
            var n = et;
            t: switch (ol) {
              case 1:
                ol = 0, et = null, vu(l, t, n, 1);
                break;
              case 2:
              case 9:
                if (As(n)) {
                  ol = 0, et = null, vr(t);
                  break;
                }
                t = function() {
                  ol !== 2 && ol !== 9 || yl !== l || (ol = 7), Ot(l);
                }, n.then(t, t);
                break l;
              case 3:
                ol = 7;
                break l;
              case 4:
                ol = 5;
                break l;
              case 7:
                As(n) ? (ol = 0, et = null, vr(t)) : (ol = 0, et = null, vu(l, t, n, 7));
                break;
              case 5:
                var f = null;
                switch (P.tag) {
                  case 26:
                    f = P.memoizedState;
                  case 5:
                  case 27:
                    var c = P;
                    if (!f || Wr(f)) {
                      ol = 0, et = null;
                      var i = c.sibling;
                      if (i !== null) P = i;
                      else {
                        var m = c.return;
                        m !== null ? (P = m, yn(m)) : P = null;
                      }
                      break t;
                    }
                }
                ol = 0, et = null, vu(l, t, n, 5);
                break;
              case 6:
                ol = 0, et = null, vu(l, t, n, 6);
                break;
              case 8:
                pc(), Al = 6;
                break l;
              default:
                throw Error(r(462));
            }
          }
          Pd();
          break;
        } catch (T) {
          sr(l, T);
        }
      while (true);
      return Bt = Oa = null, S.H = u, S.A = e, sl = a, P !== null ? 0 : (yl = null, nl = 0, Be(), Al);
    }
    function Pd() {
      for (; P !== null && !E0(); ) dr(P);
    }
    function dr(l) {
      var t = Go(l.alternate, l, Lt);
      l.memoizedProps = l.pendingProps, t === null ? yn(l) : P = t;
    }
    function vr(l) {
      var t = l, a = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = xo(a, t, t.pendingProps, t.type, void 0, nl);
          break;
        case 11:
          t = xo(a, t, t.pendingProps, t.type.render, t.ref, nl);
          break;
        case 5:
          Vf(t);
        default:
          Co(a, t), t = P = vs(t, Lt), t = Go(a, t, Lt);
      }
      l.memoizedProps = l.pendingProps, t === null ? yn(l) : P = t;
    }
    function vu(l, t, a, u) {
      Bt = Oa = null, Vf(t), eu = null, Wu = 0;
      var e = t.return;
      try {
        if (Zd(l, e, t, a, nl)) {
          Al = 1, nn(l, ot(a, l.current)), P = null;
          return;
        }
      } catch (n) {
        if (e !== null) throw P = e, n;
        Al = 1, nn(l, ot(a, l.current)), P = null;
        return;
      }
      t.flags & 32768 ? (il || u === 1 ? l = true : iu || (nl & 536870912) !== 0 ? l = false : (na = l = true, (u === 2 || u === 9 || u === 3 || u === 6) && (u = ht.current, u !== null && u.tag === 13 && (u.flags |= 16384))), hr(t, l)) : yn(t);
    }
    function yn(l) {
      var t = l;
      do {
        if ((t.flags & 32768) !== 0) {
          hr(t, na);
          return;
        }
        l = t.return;
        var a = Vd(t.alternate, t, Lt);
        if (a !== null) {
          P = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          P = t;
          return;
        }
        P = t = l;
      } while (t !== null);
      Al === 0 && (Al = 5);
    }
    function hr(l, t) {
      do {
        var a = Kd(l.alternate, l);
        if (a !== null) {
          a.flags &= 32767, P = a;
          return;
        }
        if (a = l.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (l = l.sibling, l !== null)) {
          P = l;
          return;
        }
        P = l = a;
      } while (l !== null);
      Al = 6, P = null;
    }
    function yr(l, t, a, u, e, n, f, c, i) {
      l.cancelPendingCommit = null;
      do
        mn();
      while (Gl !== 0);
      if ((sl & 6) !== 0) throw Error(r(327));
      if (t !== null) {
        if (t === l.current) throw Error(r(177));
        if (n = t.lanes | t.childLanes, n |= bf, N0(l, a, n, f, c, i), l === yl && (P = yl = null, nl = 0), ou = t, ia = l, ru = a, Mc = n, zc = e, nr = u, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, uv(Te, function() {
          return Tr(), null;
        })) : (l.callbackNode = null, l.callbackPriority = 0), u = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || u) {
          u = S.T, S.T = null, e = O.p, O.p = 2, f = sl, sl |= 4;
          try {
            wd(l, t, a);
          } finally {
            sl = f, O.p = e, S.T = u;
          }
        }
        Gl = 1, mr(), gr(), Sr();
      }
    }
    function mr() {
      if (Gl === 1) {
        Gl = 0;
        var l = ia, t = ou, a = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || a) {
          a = S.T, S.T = null;
          var u = O.p;
          O.p = 2;
          var e = sl;
          sl |= 4;
          try {
            Io(t, l);
            var n = Cc, f = us(l.containerInfo), c = n.focusedElem, i = n.selectionRange;
            if (f !== c && c && c.ownerDocument && as(c.ownerDocument.documentElement, c)) {
              if (i !== null && hf(c)) {
                var m = i.start, T = i.end;
                if (T === void 0 && (T = m), "selectionStart" in c) c.selectionStart = m, c.selectionEnd = Math.min(T, c.value.length);
                else {
                  var M = c.ownerDocument || document, g = M && M.defaultView || window;
                  if (g.getSelection) {
                    var b = g.getSelection(), V = c.textContent.length, Z = Math.min(i.start, V), vl = i.end === void 0 ? Z : Math.min(i.end, V);
                    !b.extend && Z > vl && (f = vl, vl = Z, Z = f);
                    var d = ts(c, Z), o = ts(c, vl);
                    if (d && o && (b.rangeCount !== 1 || b.anchorNode !== d.node || b.anchorOffset !== d.offset || b.focusNode !== o.node || b.focusOffset !== o.offset)) {
                      var h = M.createRange();
                      h.setStart(d.node, d.offset), b.removeAllRanges(), Z > vl ? (b.addRange(h), b.extend(o.node, o.offset)) : (h.setEnd(o.node, o.offset), b.addRange(h));
                    }
                  }
                }
              }
              for (M = [], b = c; b = b.parentNode; ) b.nodeType === 1 && M.push({
                element: b,
                left: b.scrollLeft,
                top: b.scrollTop
              });
              for (typeof c.focus == "function" && c.focus(), c = 0; c < M.length; c++) {
                var A = M[c];
                A.element.scrollLeft = A.left, A.element.scrollTop = A.top;
              }
            }
            Dn = !!Qc, Cc = Qc = null;
          } finally {
            sl = e, O.p = u, S.T = a;
          }
        }
        l.current = t, Gl = 2;
      }
    }
    function gr() {
      if (Gl === 2) {
        Gl = 0;
        var l = ia, t = ou, a = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || a) {
          a = S.T, S.T = null;
          var u = O.p;
          O.p = 2;
          var e = sl;
          sl |= 4;
          try {
            Wo(l, t.alternate, t);
          } finally {
            sl = e, O.p = u, S.T = a;
          }
        }
        Gl = 3;
      }
    }
    function Sr() {
      if (Gl === 4 || Gl === 3) {
        Gl = 0, _0();
        var l = ia, t = ou, a = ru, u = nr;
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Gl = 5 : (Gl = 0, ou = ia = null, br(l, l.pendingLanes));
        var e = l.pendingLanes;
        if (e === 0 && (ca = null), wn(a), t = t.stateNode, Il && typeof Il.onCommitFiberRoot == "function") try {
          Il.onCommitFiberRoot(bu, t, void 0, (t.current.flags & 128) === 128);
        } catch {
        }
        if (u !== null) {
          t = S.T, e = O.p, O.p = 2, S.T = null;
          try {
            for (var n = l.onRecoverableError, f = 0; f < u.length; f++) {
              var c = u[f];
              n(c.value, {
                componentStack: c.stack
              });
            }
          } finally {
            S.T = t, O.p = e;
          }
        }
        (ru & 3) !== 0 && mn(), Ot(l), e = l.pendingLanes, (a & 4194090) !== 0 && (e & 42) !== 0 ? l === Oc ? ue++ : (ue = 0, Oc = l) : ue = 0, ee(0);
      }
    }
    function br(l, t) {
      (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Xu(t)));
    }
    function mn(l) {
      return mr(), gr(), Sr(), Tr();
    }
    function Tr() {
      if (Gl !== 5) return false;
      var l = ia, t = Mc;
      Mc = 0;
      var a = wn(ru), u = S.T, e = O.p;
      try {
        O.p = 32 > a ? 32 : a, S.T = null, a = zc, zc = null;
        var n = ia, f = ru;
        if (Gl = 0, ou = ia = null, ru = 0, (sl & 6) !== 0) throw Error(r(331));
        var c = sl;
        if (sl |= 4, ur(n.current), lr(n, n.current, f, a), sl = c, ee(0, false), Il && typeof Il.onPostCommitFiberRoot == "function") try {
          Il.onPostCommitFiberRoot(bu, n);
        } catch {
        }
        return true;
      } finally {
        O.p = e, S.T = u, br(l, t);
      }
    }
    function Er(l, t, a) {
      t = ot(a, t), t = ec(l.stateNode, t, 2), l = It(l, t, 2), l !== null && (Eu(l, 2), Ot(l));
    }
    function hl(l, t, a) {
      if (l.tag === 3) Er(l, l, a);
      else for (; t !== null; ) {
        if (t.tag === 3) {
          Er(t, l, a);
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (ca === null || !ca.has(u))) {
            l = ot(a, l), a = zo(2), u = It(t, a, 2), u !== null && (Oo(a, u, t, l), Eu(u, 2), Ot(u));
            break;
          }
        }
        t = t.return;
      }
    }
    function Uc(l, t, a) {
      var u = l.pingCache;
      if (u === null) {
        u = l.pingCache = new $d();
        var e = /* @__PURE__ */ new Set();
        u.set(t, e);
      } else e = u.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), u.set(t, e));
      e.has(a) || (Tc = true, e.add(a), l = lv.bind(null, l, t, a), t.then(l, l));
    }
    function lv(l, t, a) {
      var u = l.pingCache;
      u !== null && u.delete(t), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, yl === l && (nl & a) === a && (Al === 4 || Al === 3 && (nl & 62914560) === nl && 300 > Et() - Ac ? (sl & 2) === 0 && du(l, 0) : Ec |= a, su === nl && (su = 0)), Ot(l);
    }
    function _r(l, t) {
      t === 0 && (t = gi()), l = Wa(l, t), l !== null && (Eu(l, t), Ot(l));
    }
    function tv(l) {
      var t = l.memoizedState, a = 0;
      t !== null && (a = t.retryLane), _r(l, a);
    }
    function av(l, t) {
      var a = 0;
      switch (l.tag) {
        case 13:
          var u = l.stateNode, e = l.memoizedState;
          e !== null && (a = e.retryLane);
          break;
        case 19:
          u = l.stateNode;
          break;
        case 22:
          u = l.stateNode._retryCache;
          break;
        default:
          throw Error(r(314));
      }
      u !== null && u.delete(t), _r(l, a);
    }
    function uv(l, t) {
      return Zn(l, t);
    }
    var gn = null, hu = null, Nc = false, Sn = false, Hc = false, xa = 0;
    function Ot(l) {
      l !== hu && l.next === null && (hu === null ? gn = hu = l : hu = hu.next = l), Sn = true, Nc || (Nc = true, nv());
    }
    function ee(l, t) {
      if (!Hc && Sn) {
        Hc = true;
        do
          for (var a = false, u = gn; u !== null; ) {
            if (l !== 0) {
              var e = u.pendingLanes;
              if (e === 0) var n = 0;
              else {
                var f = u.suspendedLanes, c = u.pingedLanes;
                n = (1 << 31 - Pl(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
              }
              n !== 0 && (a = true, Or(u, n));
            } else n = nl, n = Ae(u, u === yl ? n : 0, u.cancelPendingCommit !== null || u.timeoutHandle !== -1), (n & 3) === 0 || Tu(u, n) || (a = true, Or(u, n));
            u = u.next;
          }
        while (a);
        Hc = false;
      }
    }
    function ev() {
      Ar();
    }
    function Ar() {
      Sn = Nc = false;
      var l = 0;
      xa !== 0 && (vv() && (l = xa), xa = 0);
      for (var t = Et(), a = null, u = gn; u !== null; ) {
        var e = u.next, n = Mr(u, t);
        n === 0 ? (u.next = null, a === null ? gn = e : a.next = e, e === null && (hu = a)) : (a = u, (l !== 0 || (n & 3) !== 0) && (Sn = true)), u = e;
      }
      ee(l);
    }
    function Mr(l, t) {
      for (var a = l.suspendedLanes, u = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
        var f = 31 - Pl(n), c = 1 << f, i = e[f];
        i === -1 ? ((c & a) === 0 || (c & u) !== 0) && (e[f] = U0(c, t)) : i <= t && (l.expiredLanes |= c), n &= ~c;
      }
      if (t = yl, a = nl, a = Ae(l, l === t ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), u = l.callbackNode, a === 0 || l === t && (ol === 2 || ol === 9) || l.cancelPendingCommit !== null) return u !== null && u !== null && Ln(u), l.callbackNode = null, l.callbackPriority = 0;
      if ((a & 3) === 0 || Tu(l, a)) {
        if (t = a & -a, t === l.callbackPriority) return t;
        switch (u !== null && Ln(u), wn(a)) {
          case 2:
          case 8:
            a = hi;
            break;
          case 32:
            a = Te;
            break;
          case 268435456:
            a = yi;
            break;
          default:
            a = Te;
        }
        return u = zr.bind(null, l), a = Zn(a, u), l.callbackPriority = t, l.callbackNode = a, t;
      }
      return u !== null && u !== null && Ln(u), l.callbackPriority = 2, l.callbackNode = null, 2;
    }
    function zr(l, t) {
      if (Gl !== 0 && Gl !== 5) return l.callbackNode = null, l.callbackPriority = 0, null;
      var a = l.callbackNode;
      if (mn() && l.callbackNode !== a) return null;
      var u = nl;
      return u = Ae(l, l === yl ? u : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), u === 0 ? null : (cr(l, u, t), Mr(l, Et()), l.callbackNode != null && l.callbackNode === a ? zr.bind(null, l) : null);
    }
    function Or(l, t) {
      if (mn()) return null;
      cr(l, t, true);
    }
    function nv() {
      yv(function() {
        (sl & 6) !== 0 ? Zn(vi, ev) : Ar();
      });
    }
    function xc() {
      return xa === 0 && (xa = mi()), xa;
    }
    function pr(l) {
      return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : De("" + l);
    }
    function Dr(l, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, l.id && a.setAttribute("form", l.id), t.parentNode.insertBefore(a, t), l = new FormData(l), a.parentNode.removeChild(a), l;
    }
    function fv(l, t, a, u, e) {
      if (t === "submit" && a && a.stateNode === e) {
        var n = pr((e[wl] || null).action), f = u.submitter;
        f && (t = (t = f[wl] || null) ? pr(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
        var c = new He("action", "action", null, u, e);
        l.push({
          event: c,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (u.defaultPrevented) {
                  if (xa !== 0) {
                    var i = f ? Dr(e, f) : new FormData(e);
                    Pf(a, {
                      pending: true,
                      data: i,
                      method: e.method,
                      action: n
                    }, null, i);
                  }
                } else typeof n == "function" && (c.preventDefault(), i = f ? Dr(e, f) : new FormData(e), Pf(a, {
                  pending: true,
                  data: i,
                  method: e.method,
                  action: n
                }, n, i));
              },
              currentTarget: e
            }
          ]
        });
      }
    }
    for (var qc = 0; qc < Sf.length; qc++) {
      var Bc = Sf[qc], cv = Bc.toLowerCase(), iv = Bc[0].toUpperCase() + Bc.slice(1);
      St(cv, "on" + iv);
    }
    St(fs, "onAnimationEnd"), St(cs, "onAnimationIteration"), St(is, "onAnimationStart"), St("dblclick", "onDoubleClick"), St("focusin", "onFocus"), St("focusout", "onBlur"), St(zd, "onTransitionRun"), St(Od, "onTransitionStart"), St(pd, "onTransitionCancel"), St(ss, "onTransitionEnd"), ja("onMouseEnter", [
      "mouseout",
      "mouseover"
    ]), ja("onMouseLeave", [
      "mouseout",
      "mouseover"
    ]), ja("onPointerEnter", [
      "pointerout",
      "pointerover"
    ]), ja("onPointerLeave", [
      "pointerout",
      "pointerover"
    ]), ga("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ga("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ga("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), ga("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ga("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ga("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var ne = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), sv = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ne));
    function Rr(l, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < l.length; a++) {
        var u = l[a], e = u.event;
        u = u.listeners;
        l: {
          var n = void 0;
          if (t) for (var f = u.length - 1; 0 <= f; f--) {
            var c = u[f], i = c.instance, m = c.currentTarget;
            if (c = c.listener, i !== n && e.isPropagationStopped()) break l;
            n = c, e.currentTarget = m;
            try {
              n(e);
            } catch (T) {
              en(T);
            }
            e.currentTarget = null, n = i;
          }
          else for (f = 0; f < u.length; f++) {
            if (c = u[f], i = c.instance, m = c.currentTarget, c = c.listener, i !== n && e.isPropagationStopped()) break l;
            n = c, e.currentTarget = m;
            try {
              n(e);
            } catch (T) {
              en(T);
            }
            e.currentTarget = null, n = i;
          }
        }
      }
    }
    function ll(l, t) {
      var a = t[Jn];
      a === void 0 && (a = t[Jn] = /* @__PURE__ */ new Set());
      var u = l + "__bubble";
      a.has(u) || (Ur(t, l, 2, false), a.add(u));
    }
    function Yc(l, t, a) {
      var u = 0;
      t && (u |= 4), Ur(a, l, u, t);
    }
    var bn = "_reactListening" + Math.random().toString(36).slice(2);
    function Xc(l) {
      if (!l[bn]) {
        l[bn] = true, _i.forEach(function(a) {
          a !== "selectionchange" && (sv.has(a) || Yc(a, false, l), Yc(a, true, l));
        });
        var t = l.nodeType === 9 ? l : l.ownerDocument;
        t === null || t[bn] || (t[bn] = true, Yc("selectionchange", false, t));
      }
    }
    function Ur(l, t, a, u) {
      switch (l0(t)) {
        case 2:
          var e = Yv;
          break;
        case 8:
          e = Xv;
          break;
        default:
          e = Fc;
      }
      a = e.bind(null, t, a, l), e = void 0, !ef || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = true), u ? e !== void 0 ? l.addEventListener(t, a, {
        capture: true,
        passive: e
      }) : l.addEventListener(t, a, true) : e !== void 0 ? l.addEventListener(t, a, {
        passive: e
      }) : l.addEventListener(t, a, false);
    }
    function jc(l, t, a, u, e) {
      var n = u;
      if ((t & 1) === 0 && (t & 2) === 0 && u !== null) l: for (; ; ) {
        if (u === null) return;
        var f = u.tag;
        if (f === 3 || f === 4) {
          var c = u.stateNode.containerInfo;
          if (c === e) break;
          if (f === 4) for (f = u.return; f !== null; ) {
            var i = f.tag;
            if ((i === 3 || i === 4) && f.stateNode.containerInfo === e) return;
            f = f.return;
          }
          for (; c !== null; ) {
            if (f = Ba(c), f === null) return;
            if (i = f.tag, i === 5 || i === 6 || i === 26 || i === 27) {
              u = n = f;
              continue l;
            }
            c = c.parentNode;
          }
        }
        u = u.return;
      }
      Yi(function() {
        var m = n, T = af(a), M = [];
        l: {
          var g = os.get(l);
          if (g !== void 0) {
            var b = He, V = l;
            switch (l) {
              case "keypress":
                if (Ue(a) === 0) break l;
              case "keydown":
              case "keyup":
                b = ud;
                break;
              case "focusin":
                V = "focus", b = sf;
                break;
              case "focusout":
                V = "blur", b = sf;
                break;
              case "beforeblur":
              case "afterblur":
                b = sf;
                break;
              case "click":
                if (a.button === 2) break l;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                b = Gi;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                b = K0;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                b = fd;
                break;
              case fs:
              case cs:
              case is:
                b = W0;
                break;
              case ss:
                b = id;
                break;
              case "scroll":
              case "scrollend":
                b = L0;
                break;
              case "wheel":
                b = od;
                break;
              case "copy":
              case "cut":
              case "paste":
                b = k0;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                b = Ci;
                break;
              case "toggle":
              case "beforetoggle":
                b = dd;
            }
            var Z = (t & 4) !== 0, vl = !Z && (l === "scroll" || l === "scrollend"), d = Z ? g !== null ? g + "Capture" : null : g;
            Z = [];
            for (var o = m, h; o !== null; ) {
              var A = o;
              if (h = A.stateNode, A = A.tag, A !== 5 && A !== 26 && A !== 27 || h === null || d === null || (A = Mu(o, d), A != null && Z.push(fe(o, A, h))), vl) break;
              o = o.return;
            }
            0 < Z.length && (g = new b(g, V, null, a, T), M.push({
              event: g,
              listeners: Z
            }));
          }
        }
        if ((t & 7) === 0) {
          l: {
            if (g = l === "mouseover" || l === "pointerover", b = l === "mouseout" || l === "pointerout", g && a !== tf && (V = a.relatedTarget || a.fromElement) && (Ba(V) || V[qa])) break l;
            if ((b || g) && (g = T.window === T ? T : (g = T.ownerDocument) ? g.defaultView || g.parentWindow : window, b ? (V = a.relatedTarget || a.toElement, b = m, V = V ? Ba(V) : null, V !== null && (vl = U(V), Z = V.tag, V !== vl || Z !== 5 && Z !== 27 && Z !== 6) && (V = null)) : (b = null, V = m), b !== V)) {
              if (Z = Gi, A = "onMouseLeave", d = "onMouseEnter", o = "mouse", (l === "pointerout" || l === "pointerover") && (Z = Ci, A = "onPointerLeave", d = "onPointerEnter", o = "pointer"), vl = b == null ? g : Au(b), h = V == null ? g : Au(V), g = new Z(A, o + "leave", b, a, T), g.target = vl, g.relatedTarget = h, A = null, Ba(T) === m && (Z = new Z(d, o + "enter", V, a, T), Z.target = h, Z.relatedTarget = vl, A = Z), vl = A, b && V) t: {
                for (Z = b, d = V, o = 0, h = Z; h; h = yu(h)) o++;
                for (h = 0, A = d; A; A = yu(A)) h++;
                for (; 0 < o - h; ) Z = yu(Z), o--;
                for (; 0 < h - o; ) d = yu(d), h--;
                for (; o--; ) {
                  if (Z === d || d !== null && Z === d.alternate) break t;
                  Z = yu(Z), d = yu(d);
                }
                Z = null;
              }
              else Z = null;
              b !== null && Nr(M, g, b, Z, false), V !== null && vl !== null && Nr(M, vl, V, Z, true);
            }
          }
          l: {
            if (g = m ? Au(m) : window, b = g.nodeName && g.nodeName.toLowerCase(), b === "select" || b === "input" && g.type === "file") var B = $i;
            else if (Ji(g)) if (ki) B = _d;
            else {
              B = Td;
              var I = bd;
            }
            else b = g.nodeName, !b || b.toLowerCase() !== "input" || g.type !== "checkbox" && g.type !== "radio" ? m && lf(m.elementType) && (B = $i) : B = Ed;
            if (B && (B = B(l, m))) {
              Wi(M, B, a, T);
              break l;
            }
            I && I(l, g, m), l === "focusout" && m && g.type === "number" && m.memoizedProps.value != null && Pn(g, "number", g.value);
          }
          switch (I = m ? Au(m) : window, l) {
            case "focusin":
              (Ji(I) || I.contentEditable === "true") && (Ka = I, yf = m, Hu = null);
              break;
            case "focusout":
              Hu = yf = Ka = null;
              break;
            case "mousedown":
              mf = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              mf = false, es(M, a, T);
              break;
            case "selectionchange":
              if (Md) break;
            case "keydown":
            case "keyup":
              es(M, a, T);
          }
          var j;
          if (rf) l: {
            switch (l) {
              case "compositionstart":
                var L = "onCompositionStart";
                break l;
              case "compositionend":
                L = "onCompositionEnd";
                break l;
              case "compositionupdate":
                L = "onCompositionUpdate";
                break l;
            }
            L = void 0;
          }
          else Va ? Ki(l, a) && (L = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (L = "onCompositionStart");
          L && (Zi && a.locale !== "ko" && (Va || L !== "onCompositionStart" ? L === "onCompositionEnd" && Va && (j = Xi()) : (Wt = T, nf = "value" in Wt ? Wt.value : Wt.textContent, Va = true)), I = Tn(m, L), 0 < I.length && (L = new Qi(L, l, null, a, T), M.push({
            event: L,
            listeners: I
          }), j ? L.data = j : (j = wi(a), j !== null && (L.data = j)))), (j = hd ? yd(l, a) : md(l, a)) && (L = Tn(m, "onBeforeInput"), 0 < L.length && (I = new Qi("onBeforeInput", "beforeinput", null, a, T), M.push({
            event: I,
            listeners: L
          }), I.data = j)), fv(M, l, m, a, T);
        }
        Rr(M, t);
      });
    }
    function fe(l, t, a) {
      return {
        instance: l,
        listener: t,
        currentTarget: a
      };
    }
    function Tn(l, t) {
      for (var a = t + "Capture", u = []; l !== null; ) {
        var e = l, n = e.stateNode;
        if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = Mu(l, a), e != null && u.unshift(fe(l, e, n)), e = Mu(l, t), e != null && u.push(fe(l, e, n))), l.tag === 3) return u;
        l = l.return;
      }
      return [];
    }
    function yu(l) {
      if (l === null) return null;
      do
        l = l.return;
      while (l && l.tag !== 5 && l.tag !== 27);
      return l || null;
    }
    function Nr(l, t, a, u, e) {
      for (var n = t._reactName, f = []; a !== null && a !== u; ) {
        var c = a, i = c.alternate, m = c.stateNode;
        if (c = c.tag, i !== null && i === u) break;
        c !== 5 && c !== 26 && c !== 27 || m === null || (i = m, e ? (m = Mu(a, n), m != null && f.unshift(fe(a, m, i))) : e || (m = Mu(a, n), m != null && f.push(fe(a, m, i)))), a = a.return;
      }
      f.length !== 0 && l.push({
        event: t,
        listeners: f
      });
    }
    var ov = /\r\n?/g, rv = /\u0000|\uFFFD/g;
    function Hr(l) {
      return (typeof l == "string" ? l : "" + l).replace(ov, `
`).replace(rv, "");
    }
    function xr(l, t) {
      return t = Hr(t), Hr(l) === t;
    }
    function En() {
    }
    function dl(l, t, a, u, e, n) {
      switch (a) {
        case "children":
          typeof u == "string" ? t === "body" || t === "textarea" && u === "" || Ca(l, u) : (typeof u == "number" || typeof u == "bigint") && t !== "body" && Ca(l, "" + u);
          break;
        case "className":
          ze(l, "class", u);
          break;
        case "tabIndex":
          ze(l, "tabindex", u);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          ze(l, a, u);
          break;
        case "style":
          qi(l, u, n);
          break;
        case "data":
          if (t !== "object") {
            ze(l, "data", u);
            break;
          }
        case "src":
        case "href":
          if (u === "" && (t !== "a" || a !== "href")) {
            l.removeAttribute(a);
            break;
          }
          if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
            l.removeAttribute(a);
            break;
          }
          u = De("" + u), l.setAttribute(a, u);
          break;
        case "action":
        case "formAction":
          if (typeof u == "function") {
            l.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break;
          } else typeof n == "function" && (a === "formAction" ? (t !== "input" && dl(l, t, "name", e.name, e, null), dl(l, t, "formEncType", e.formEncType, e, null), dl(l, t, "formMethod", e.formMethod, e, null), dl(l, t, "formTarget", e.formTarget, e, null)) : (dl(l, t, "encType", e.encType, e, null), dl(l, t, "method", e.method, e, null), dl(l, t, "target", e.target, e, null)));
          if (u == null || typeof u == "symbol" || typeof u == "boolean") {
            l.removeAttribute(a);
            break;
          }
          u = De("" + u), l.setAttribute(a, u);
          break;
        case "onClick":
          u != null && (l.onclick = En);
          break;
        case "onScroll":
          u != null && ll("scroll", l);
          break;
        case "onScrollEnd":
          u != null && ll("scrollend", l);
          break;
        case "dangerouslySetInnerHTML":
          if (u != null) {
            if (typeof u != "object" || !("__html" in u)) throw Error(r(61));
            if (a = u.__html, a != null) {
              if (e.children != null) throw Error(r(60));
              l.innerHTML = a;
            }
          }
          break;
        case "multiple":
          l.multiple = u && typeof u != "function" && typeof u != "symbol";
          break;
        case "muted":
          l.muted = u && typeof u != "function" && typeof u != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
            l.removeAttribute("xlink:href");
            break;
          }
          a = De("" + u), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "" + u) : l.removeAttribute(a);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          u && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "") : l.removeAttribute(a);
          break;
        case "capture":
        case "download":
          u === true ? l.setAttribute(a, "") : u !== false && u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, u) : l.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? l.setAttribute(a, u) : l.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? l.removeAttribute(a) : l.setAttribute(a, u);
          break;
        case "popover":
          ll("beforetoggle", l), ll("toggle", l), Me(l, "popover", u);
          break;
        case "xlinkActuate":
          Ut(l, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
          break;
        case "xlinkArcrole":
          Ut(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
          break;
        case "xlinkRole":
          Ut(l, "http://www.w3.org/1999/xlink", "xlink:role", u);
          break;
        case "xlinkShow":
          Ut(l, "http://www.w3.org/1999/xlink", "xlink:show", u);
          break;
        case "xlinkTitle":
          Ut(l, "http://www.w3.org/1999/xlink", "xlink:title", u);
          break;
        case "xlinkType":
          Ut(l, "http://www.w3.org/1999/xlink", "xlink:type", u);
          break;
        case "xmlBase":
          Ut(l, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
          break;
        case "xmlLang":
          Ut(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
          break;
        case "xmlSpace":
          Ut(l, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
          break;
        case "is":
          Me(l, "is", u);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = C0.get(a) || a, Me(l, a, u));
      }
    }
    function Gc(l, t, a, u, e, n) {
      switch (a) {
        case "style":
          qi(l, u, n);
          break;
        case "dangerouslySetInnerHTML":
          if (u != null) {
            if (typeof u != "object" || !("__html" in u)) throw Error(r(61));
            if (a = u.__html, a != null) {
              if (e.children != null) throw Error(r(60));
              l.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof u == "string" ? Ca(l, u) : (typeof u == "number" || typeof u == "bigint") && Ca(l, "" + u);
          break;
        case "onScroll":
          u != null && ll("scroll", l);
          break;
        case "onScrollEnd":
          u != null && ll("scrollend", l);
          break;
        case "onClick":
          u != null && (l.onclick = En);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (!Ai.hasOwnProperty(a)) l: {
            if (a[0] === "o" && a[1] === "n" && (e = a.endsWith("Capture"), t = a.slice(2, e ? a.length - 7 : void 0), n = l[wl] || null, n = n != null ? n[a] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof u == "function")) {
              typeof n != "function" && n !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)), l.addEventListener(t, u, e);
              break l;
            }
            a in l ? l[a] = u : u === true ? l.setAttribute(a, "") : Me(l, a, u);
          }
      }
    }
    function Ql(l, t, a) {
      switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          ll("error", l), ll("load", l);
          var u = false, e = false, n;
          for (n in a) if (a.hasOwnProperty(n)) {
            var f = a[n];
            if (f != null) switch (n) {
              case "src":
                u = true;
                break;
              case "srcSet":
                e = true;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                dl(l, t, n, f, a, null);
            }
          }
          e && dl(l, t, "srcSet", a.srcSet, a, null), u && dl(l, t, "src", a.src, a, null);
          return;
        case "input":
          ll("invalid", l);
          var c = n = f = e = null, i = null, m = null;
          for (u in a) if (a.hasOwnProperty(u)) {
            var T = a[u];
            if (T != null) switch (u) {
              case "name":
                e = T;
                break;
              case "type":
                f = T;
                break;
              case "checked":
                i = T;
                break;
              case "defaultChecked":
                m = T;
                break;
              case "value":
                n = T;
                break;
              case "defaultValue":
                c = T;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null) throw Error(r(137, t));
                break;
              default:
                dl(l, t, u, T, a, null);
            }
          }
          Ui(l, n, c, i, m, f, e, false), Oe(l);
          return;
        case "select":
          ll("invalid", l), u = f = n = null;
          for (e in a) if (a.hasOwnProperty(e) && (c = a[e], c != null)) switch (e) {
            case "value":
              n = c;
              break;
            case "defaultValue":
              f = c;
              break;
            case "multiple":
              u = c;
            default:
              dl(l, t, e, c, a, null);
          }
          t = n, a = f, l.multiple = !!u, t != null ? Qa(l, !!u, t, false) : a != null && Qa(l, !!u, a, true);
          return;
        case "textarea":
          ll("invalid", l), n = e = u = null;
          for (f in a) if (a.hasOwnProperty(f) && (c = a[f], c != null)) switch (f) {
            case "value":
              u = c;
              break;
            case "defaultValue":
              e = c;
              break;
            case "children":
              n = c;
              break;
            case "dangerouslySetInnerHTML":
              if (c != null) throw Error(r(91));
              break;
            default:
              dl(l, t, f, c, a, null);
          }
          Hi(l, u, e, n), Oe(l);
          return;
        case "option":
          for (i in a) if (a.hasOwnProperty(i) && (u = a[i], u != null)) switch (i) {
            case "selected":
              l.selected = u && typeof u != "function" && typeof u != "symbol";
              break;
            default:
              dl(l, t, i, u, a, null);
          }
          return;
        case "dialog":
          ll("beforetoggle", l), ll("toggle", l), ll("cancel", l), ll("close", l);
          break;
        case "iframe":
        case "object":
          ll("load", l);
          break;
        case "video":
        case "audio":
          for (u = 0; u < ne.length; u++) ll(ne[u], l);
          break;
        case "image":
          ll("error", l), ll("load", l);
          break;
        case "details":
          ll("toggle", l);
          break;
        case "embed":
        case "source":
        case "link":
          ll("error", l), ll("load", l);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (m in a) if (a.hasOwnProperty(m) && (u = a[m], u != null)) switch (m) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(r(137, t));
            default:
              dl(l, t, m, u, a, null);
          }
          return;
        default:
          if (lf(t)) {
            for (T in a) a.hasOwnProperty(T) && (u = a[T], u !== void 0 && Gc(l, t, T, u, a, void 0));
            return;
          }
      }
      for (c in a) a.hasOwnProperty(c) && (u = a[c], u != null && dl(l, t, c, u, a, null));
    }
    function dv(l, t, a, u) {
      switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var e = null, n = null, f = null, c = null, i = null, m = null, T = null;
          for (b in a) {
            var M = a[b];
            if (a.hasOwnProperty(b) && M != null) switch (b) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = M;
              default:
                u.hasOwnProperty(b) || dl(l, t, b, null, u, M);
            }
          }
          for (var g in u) {
            var b = u[g];
            if (M = a[g], u.hasOwnProperty(g) && (b != null || M != null)) switch (g) {
              case "type":
                n = b;
                break;
              case "name":
                e = b;
                break;
              case "checked":
                m = b;
                break;
              case "defaultChecked":
                T = b;
                break;
              case "value":
                f = b;
                break;
              case "defaultValue":
                c = b;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(r(137, t));
                break;
              default:
                b !== M && dl(l, t, g, b, u, M);
            }
          }
          In(l, f, c, i, m, T, n, e);
          return;
        case "select":
          b = f = c = g = null;
          for (n in a) if (i = a[n], a.hasOwnProperty(n) && i != null) switch (n) {
            case "value":
              break;
            case "multiple":
              b = i;
            default:
              u.hasOwnProperty(n) || dl(l, t, n, null, u, i);
          }
          for (e in u) if (n = u[e], i = a[e], u.hasOwnProperty(e) && (n != null || i != null)) switch (e) {
            case "value":
              g = n;
              break;
            case "defaultValue":
              c = n;
              break;
            case "multiple":
              f = n;
            default:
              n !== i && dl(l, t, e, n, u, i);
          }
          t = c, a = f, u = b, g != null ? Qa(l, !!a, g, false) : !!u != !!a && (t != null ? Qa(l, !!a, t, true) : Qa(l, !!a, a ? [] : "", false));
          return;
        case "textarea":
          b = g = null;
          for (c in a) if (e = a[c], a.hasOwnProperty(c) && e != null && !u.hasOwnProperty(c)) switch (c) {
            case "value":
              break;
            case "children":
              break;
            default:
              dl(l, t, c, null, u, e);
          }
          for (f in u) if (e = u[f], n = a[f], u.hasOwnProperty(f) && (e != null || n != null)) switch (f) {
            case "value":
              g = e;
              break;
            case "defaultValue":
              b = e;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (e != null) throw Error(r(91));
              break;
            default:
              e !== n && dl(l, t, f, e, u, n);
          }
          Ni(l, g, b);
          return;
        case "option":
          for (var V in a) if (g = a[V], a.hasOwnProperty(V) && g != null && !u.hasOwnProperty(V)) switch (V) {
            case "selected":
              l.selected = false;
              break;
            default:
              dl(l, t, V, null, u, g);
          }
          for (i in u) if (g = u[i], b = a[i], u.hasOwnProperty(i) && g !== b && (g != null || b != null)) switch (i) {
            case "selected":
              l.selected = g && typeof g != "function" && typeof g != "symbol";
              break;
            default:
              dl(l, t, i, g, u, b);
          }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var Z in a) g = a[Z], a.hasOwnProperty(Z) && g != null && !u.hasOwnProperty(Z) && dl(l, t, Z, null, u, g);
          for (m in u) if (g = u[m], b = a[m], u.hasOwnProperty(m) && g !== b && (g != null || b != null)) switch (m) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (g != null) throw Error(r(137, t));
              break;
            default:
              dl(l, t, m, g, u, b);
          }
          return;
        default:
          if (lf(t)) {
            for (var vl in a) g = a[vl], a.hasOwnProperty(vl) && g !== void 0 && !u.hasOwnProperty(vl) && Gc(l, t, vl, void 0, u, g);
            for (T in u) g = u[T], b = a[T], !u.hasOwnProperty(T) || g === b || g === void 0 && b === void 0 || Gc(l, t, T, g, u, b);
            return;
          }
      }
      for (var d in a) g = a[d], a.hasOwnProperty(d) && g != null && !u.hasOwnProperty(d) && dl(l, t, d, null, u, g);
      for (M in u) g = u[M], b = a[M], !u.hasOwnProperty(M) || g === b || g == null && b == null || dl(l, t, M, g, u, b);
    }
    var Qc = null, Cc = null;
    function _n(l) {
      return l.nodeType === 9 ? l : l.ownerDocument;
    }
    function qr(l) {
      switch (l) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function Br(l, t) {
      if (l === 0) switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
      return l === 1 && t === "foreignObject" ? 0 : l;
    }
    function Zc(l, t) {
      return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var Lc = null;
    function vv() {
      var l = window.event;
      return l && l.type === "popstate" ? l === Lc ? false : (Lc = l, true) : (Lc = null, false);
    }
    var Yr = typeof setTimeout == "function" ? setTimeout : void 0, hv = typeof clearTimeout == "function" ? clearTimeout : void 0, Xr = typeof Promise == "function" ? Promise : void 0, yv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xr < "u" ? function(l) {
      return Xr.resolve(null).then(l).catch(mv);
    } : Yr;
    function mv(l) {
      setTimeout(function() {
        throw l;
      });
    }
    function oa(l) {
      return l === "head";
    }
    function jr(l, t) {
      var a = t, u = 0, e = 0;
      do {
        var n = a.nextSibling;
        if (l.removeChild(a), n && n.nodeType === 8) if (a = n.data, a === "/$") {
          if (0 < u && 8 > u) {
            a = u;
            var f = l.ownerDocument;
            if (a & 1 && ce(f.documentElement), a & 2 && ce(f.body), a & 4) for (a = f.head, ce(a), f = a.firstChild; f; ) {
              var c = f.nextSibling, i = f.nodeName;
              f[_u] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = c;
            }
          }
          if (e === 0) {
            l.removeChild(n), ye(t);
            return;
          }
          e--;
        } else a === "$" || a === "$?" || a === "$!" ? e++ : u = a.charCodeAt(0) - 48;
        else u = 0;
        a = n;
      } while (a);
      ye(t);
    }
    function Vc(l) {
      var t = l.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Vc(a), Wn(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        l.removeChild(a);
      }
    }
    function gv(l, t, a, u) {
      for (; l.nodeType === 1; ) {
        var e = a;
        if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
        } else if (u) {
          if (!l[_u]) switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence")) break;
              if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title)) break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop")) break;
              return l;
            default:
              return l;
          }
        } else if (t === "input" && l.type === "hidden") {
          var n = e.name == null ? null : "" + e.name;
          if (e.type === "hidden" && l.getAttribute("name") === n) return l;
        } else return l;
        if (l = Tt(l.nextSibling), l === null) break;
      }
      return null;
    }
    function Sv(l, t, a) {
      if (t === "") return null;
      for (; l.nodeType !== 3; ) if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = Tt(l.nextSibling), l === null)) return null;
      return l;
    }
    function Kc(l) {
      return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
    }
    function bv(l, t) {
      var a = l.ownerDocument;
      if (l.data !== "$?" || a.readyState === "complete") t();
      else {
        var u = function() {
          t(), a.removeEventListener("DOMContentLoaded", u);
        };
        a.addEventListener("DOMContentLoaded", u), l._reactRetry = u;
      }
    }
    function Tt(l) {
      for (; l != null; l = l.nextSibling) {
        var t = l.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F") break;
          if (t === "/$") return null;
        }
      }
      return l;
    }
    var wc = null;
    function Gr(l) {
      l = l.previousSibling;
      for (var t = 0; l; ) {
        if (l.nodeType === 8) {
          var a = l.data;
          if (a === "$" || a === "$!" || a === "$?") {
            if (t === 0) return l;
            t--;
          } else a === "/$" && t++;
        }
        l = l.previousSibling;
      }
      return null;
    }
    function Qr(l, t, a) {
      switch (t = _n(a), l) {
        case "html":
          if (l = t.documentElement, !l) throw Error(r(452));
          return l;
        case "head":
          if (l = t.head, !l) throw Error(r(453));
          return l;
        case "body":
          if (l = t.body, !l) throw Error(r(454));
          return l;
        default:
          throw Error(r(451));
      }
    }
    function ce(l) {
      for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
      Wn(l);
    }
    var mt = /* @__PURE__ */ new Map(), Cr = /* @__PURE__ */ new Set();
    function An(l) {
      return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
    }
    var Vt = O.d;
    O.d = {
      f: Tv,
      r: Ev,
      D: _v,
      C: Av,
      L: Mv,
      m: zv,
      X: pv,
      S: Ov,
      M: Dv
    };
    function Tv() {
      var l = Vt.f(), t = hn();
      return l || t;
    }
    function Ev(l) {
      var t = Ya(l);
      t !== null && t.tag === 5 && t.type === "form" ? fo(t) : Vt.r(l);
    }
    var mu = typeof document > "u" ? null : document;
    function Zr(l, t, a) {
      var u = mu;
      if (u && typeof t == "string" && t) {
        var e = st(t);
        e = 'link[rel="' + l + '"][href="' + e + '"]', typeof a == "string" && (e += '[crossorigin="' + a + '"]'), Cr.has(e) || (Cr.add(e), l = {
          rel: l,
          crossOrigin: a,
          href: t
        }, u.querySelector(e) === null && (t = u.createElement("link"), Ql(t, "link", l), ql(t), u.head.appendChild(t)));
      }
    }
    function _v(l) {
      Vt.D(l), Zr("dns-prefetch", l, null);
    }
    function Av(l, t) {
      Vt.C(l, t), Zr("preconnect", l, t);
    }
    function Mv(l, t, a) {
      Vt.L(l, t, a);
      var u = mu;
      if (u && l && t) {
        var e = 'link[rel="preload"][as="' + st(t) + '"]';
        t === "image" && a && a.imageSrcSet ? (e += '[imagesrcset="' + st(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (e += '[imagesizes="' + st(a.imageSizes) + '"]')) : e += '[href="' + st(l) + '"]';
        var n = e;
        switch (t) {
          case "style":
            n = gu(l);
            break;
          case "script":
            n = Su(l);
        }
        mt.has(n) || (l = z({
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : l,
          as: t
        }, a), mt.set(n, l), u.querySelector(e) !== null || t === "style" && u.querySelector(ie(n)) || t === "script" && u.querySelector(se(n)) || (t = u.createElement("link"), Ql(t, "link", l), ql(t), u.head.appendChild(t)));
      }
    }
    function zv(l, t) {
      Vt.m(l, t);
      var a = mu;
      if (a && l) {
        var u = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + st(u) + '"][href="' + st(l) + '"]', n = e;
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            n = Su(l);
        }
        if (!mt.has(n) && (l = z({
          rel: "modulepreload",
          href: l
        }, t), mt.set(n, l), a.querySelector(e) === null)) {
          switch (u) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (a.querySelector(se(n))) return;
          }
          u = a.createElement("link"), Ql(u, "link", l), ql(u), a.head.appendChild(u);
        }
      }
    }
    function Ov(l, t, a) {
      Vt.S(l, t, a);
      var u = mu;
      if (u && l) {
        var e = Xa(u).hoistableStyles, n = gu(l);
        t = t || "default";
        var f = e.get(n);
        if (!f) {
          var c = {
            loading: 0,
            preload: null
          };
          if (f = u.querySelector(ie(n))) c.loading = 5;
          else {
            l = z({
              rel: "stylesheet",
              href: l,
              "data-precedence": t
            }, a), (a = mt.get(n)) && Jc(l, a);
            var i = f = u.createElement("link");
            ql(i), Ql(i, "link", l), i._p = new Promise(function(m, T) {
              i.onload = m, i.onerror = T;
            }), i.addEventListener("load", function() {
              c.loading |= 1;
            }), i.addEventListener("error", function() {
              c.loading |= 2;
            }), c.loading |= 4, Mn(f, t, u);
          }
          f = {
            type: "stylesheet",
            instance: f,
            count: 1,
            state: c
          }, e.set(n, f);
        }
      }
    }
    function pv(l, t) {
      Vt.X(l, t);
      var a = mu;
      if (a && l) {
        var u = Xa(a).hoistableScripts, e = Su(l), n = u.get(e);
        n || (n = a.querySelector(se(e)), n || (l = z({
          src: l,
          async: true
        }, t), (t = mt.get(e)) && Wc(l, t), n = a.createElement("script"), ql(n), Ql(n, "link", l), a.head.appendChild(n)), n = {
          type: "script",
          instance: n,
          count: 1,
          state: null
        }, u.set(e, n));
      }
    }
    function Dv(l, t) {
      Vt.M(l, t);
      var a = mu;
      if (a && l) {
        var u = Xa(a).hoistableScripts, e = Su(l), n = u.get(e);
        n || (n = a.querySelector(se(e)), n || (l = z({
          src: l,
          async: true,
          type: "module"
        }, t), (t = mt.get(e)) && Wc(l, t), n = a.createElement("script"), ql(n), Ql(n, "link", l), a.head.appendChild(n)), n = {
          type: "script",
          instance: n,
          count: 1,
          state: null
        }, u.set(e, n));
      }
    }
    function Lr(l, t, a, u) {
      var e = (e = K.current) ? An(e) : null;
      if (!e) throw Error(r(446));
      switch (l) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (t = gu(a.href), a = Xa(e).hoistableStyles, u = a.get(t), u || (u = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, a.set(t, u)), u) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            l = gu(a.href);
            var n = Xa(e).hoistableStyles, f = n.get(l);
            if (f || (e = e.ownerDocument || e, f = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, n.set(l, f), (n = e.querySelector(ie(l))) && !n._p && (f.instance = n, f.state.loading = 5), mt.has(l) || (a = {
              rel: "preload",
              as: "style",
              href: a.href,
              crossOrigin: a.crossOrigin,
              integrity: a.integrity,
              media: a.media,
              hrefLang: a.hrefLang,
              referrerPolicy: a.referrerPolicy
            }, mt.set(l, a), n || Rv(e, l, a, f.state))), t && u === null) throw Error(r(528, ""));
            return f;
          }
          if (t && u !== null) throw Error(r(529, ""));
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Su(a), a = Xa(e).hoistableScripts, u = a.get(t), u || (u = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, a.set(t, u)), u) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        default:
          throw Error(r(444, l));
      }
    }
    function gu(l) {
      return 'href="' + st(l) + '"';
    }
    function ie(l) {
      return 'link[rel="stylesheet"][' + l + "]";
    }
    function Vr(l) {
      return z({}, l, {
        "data-precedence": l.precedence,
        precedence: null
      });
    }
    function Rv(l, t, a, u) {
      l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? u.loading = 1 : (t = l.createElement("link"), u.preload = t, t.addEventListener("load", function() {
        return u.loading |= 1;
      }), t.addEventListener("error", function() {
        return u.loading |= 2;
      }), Ql(t, "link", a), ql(t), l.head.appendChild(t));
    }
    function Su(l) {
      return '[src="' + st(l) + '"]';
    }
    function se(l) {
      return "script[async]" + l;
    }
    function Kr(l, t, a) {
      if (t.count++, t.instance === null) switch (t.type) {
        case "style":
          var u = l.querySelector('style[data-href~="' + st(a.href) + '"]');
          if (u) return t.instance = u, ql(u), u;
          var e = z({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return u = (l.ownerDocument || l).createElement("style"), ql(u), Ql(u, "style", e), Mn(u, a.precedence, l), t.instance = u;
        case "stylesheet":
          e = gu(a.href);
          var n = l.querySelector(ie(e));
          if (n) return t.state.loading |= 4, t.instance = n, ql(n), n;
          u = Vr(a), (e = mt.get(e)) && Jc(u, e), n = (l.ownerDocument || l).createElement("link"), ql(n);
          var f = n;
          return f._p = new Promise(function(c, i) {
            f.onload = c, f.onerror = i;
          }), Ql(n, "link", u), t.state.loading |= 4, Mn(n, a.precedence, l), t.instance = n;
        case "script":
          return n = Su(a.src), (e = l.querySelector(se(n))) ? (t.instance = e, ql(e), e) : (u = a, (e = mt.get(n)) && (u = z({}, a), Wc(u, e)), l = l.ownerDocument || l, e = l.createElement("script"), ql(e), Ql(e, "link", u), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
      else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (u = t.instance, t.state.loading |= 4, Mn(u, a.precedence, l));
      return t.instance;
    }
    function Mn(l, t, a) {
      for (var u = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), e = u.length ? u[u.length - 1] : null, n = e, f = 0; f < u.length; f++) {
        var c = u[f];
        if (c.dataset.precedence === t) n = c;
        else if (n !== e) break;
      }
      n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(l, t.firstChild));
    }
    function Jc(l, t) {
      l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
    }
    function Wc(l, t) {
      l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
    }
    var zn = null;
    function wr(l, t, a) {
      if (zn === null) {
        var u = /* @__PURE__ */ new Map(), e = zn = /* @__PURE__ */ new Map();
        e.set(a, u);
      } else e = zn, u = e.get(a), u || (u = /* @__PURE__ */ new Map(), e.set(a, u));
      if (u.has(l)) return u;
      for (u.set(l, null), a = a.getElementsByTagName(l), e = 0; e < a.length; e++) {
        var n = a[e];
        if (!(n[_u] || n[Zl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
          var f = n.getAttribute(t) || "";
          f = l + f;
          var c = u.get(f);
          c ? c.push(n) : u.set(f, [
            n
          ]);
        }
      }
      return u;
    }
    function Jr(l, t, a) {
      l = l.ownerDocument || l, l.head.insertBefore(a, t === "title" ? l.querySelector("head > title") : null);
    }
    function Uv(l, t, a) {
      if (a === 1 || t.itemProp != null) return false;
      switch (l) {
        case "meta":
        case "title":
          return true;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
          return true;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
          switch (t.rel) {
            case "stylesheet":
              return l = t.disabled, typeof t.precedence == "string" && l == null;
            default:
              return true;
          }
        case "script":
          if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return true;
      }
      return false;
    }
    function Wr(l) {
      return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
    }
    var oe = null;
    function Nv() {
    }
    function Hv(l, t, a) {
      if (oe === null) throw Error(r(475));
      var u = oe;
      if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (t.state.loading & 4) === 0) {
        if (t.instance === null) {
          var e = gu(a.href), n = l.querySelector(ie(e));
          if (n) {
            l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (u.count++, u = On.bind(u), l.then(u, u)), t.state.loading |= 4, t.instance = n, ql(n);
            return;
          }
          n = l.ownerDocument || l, a = Vr(a), (e = mt.get(e)) && Jc(a, e), n = n.createElement("link"), ql(n);
          var f = n;
          f._p = new Promise(function(c, i) {
            f.onload = c, f.onerror = i;
          }), Ql(n, "link", a), t.instance = n;
        }
        u.stylesheets === null && (u.stylesheets = /* @__PURE__ */ new Map()), u.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (u.count++, t = On.bind(u), l.addEventListener("load", t), l.addEventListener("error", t));
      }
    }
    function xv() {
      if (oe === null) throw Error(r(475));
      var l = oe;
      return l.stylesheets && l.count === 0 && $c(l, l.stylesheets), 0 < l.count ? function(t) {
        var a = setTimeout(function() {
          if (l.stylesheets && $c(l, l.stylesheets), l.unsuspend) {
            var u = l.unsuspend;
            l.unsuspend = null, u();
          }
        }, 6e4);
        return l.unsuspend = t, function() {
          l.unsuspend = null, clearTimeout(a);
        };
      } : null;
    }
    function On() {
      if (this.count--, this.count === 0) {
        if (this.stylesheets) $c(this, this.stylesheets);
        else if (this.unsuspend) {
          var l = this.unsuspend;
          this.unsuspend = null, l();
        }
      }
    }
    var pn = null;
    function $c(l, t) {
      l.stylesheets = null, l.unsuspend !== null && (l.count++, pn = /* @__PURE__ */ new Map(), t.forEach(qv, l), pn = null, On.call(l));
    }
    function qv(l, t) {
      if (!(t.state.loading & 4)) {
        var a = pn.get(l);
        if (a) var u = a.get(null);
        else {
          a = /* @__PURE__ */ new Map(), pn.set(l, a);
          for (var e = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < e.length; n++) {
            var f = e[n];
            (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (a.set(f.dataset.precedence, f), u = f);
          }
          u && a.set(null, u);
        }
        e = t.instance, f = e.getAttribute("data-precedence"), n = a.get(f) || u, n === u && a.set(null, e), a.set(f, e), this.count++, u = On.bind(this), e.addEventListener("load", u), e.addEventListener("error", u), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
      }
    }
    var re = {
      $$typeof: ul,
      Provider: null,
      Consumer: null,
      _currentValue: q,
      _currentValue2: q,
      _threadCount: 0
    };
    function Bv(l, t, a, u, e, n, f, c) {
      this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Vn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vn(0), this.hiddenUpdates = Vn(null), this.identifierPrefix = u, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function $r(l, t, a, u, e, n, f, c, i, m, T, M) {
      return l = new Bv(l, t, a, f, c, i, m, M), t = 1, n === true && (t |= 24), n = tt(3, null, null, t), l.current = n, n.stateNode = l, t = Uf(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
        element: u,
        isDehydrated: a,
        cache: t
      }, qf(n), l;
    }
    function kr(l) {
      return l ? (l = $a, l) : $a;
    }
    function Fr(l, t, a, u, e, n) {
      e = kr(e), u.context === null ? u.context = e : u.pendingContext = e, u = Ft(t), u.payload = {
        element: a
      }, n = n === void 0 ? null : n, n !== null && (u.callback = n), a = It(l, u, t), a !== null && (ft(a, l, t), Cu(a, l, t));
    }
    function Ir(l, t) {
      if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
        var a = l.retryLane;
        l.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function kc(l, t) {
      Ir(l, t), (l = l.alternate) && Ir(l, t);
    }
    function Pr(l) {
      if (l.tag === 13) {
        var t = Wa(l, 67108864);
        t !== null && ft(t, l, 67108864), kc(l, 67108864);
      }
    }
    var Dn = true;
    function Yv(l, t, a, u) {
      var e = S.T;
      S.T = null;
      var n = O.p;
      try {
        O.p = 2, Fc(l, t, a, u);
      } finally {
        O.p = n, S.T = e;
      }
    }
    function Xv(l, t, a, u) {
      var e = S.T;
      S.T = null;
      var n = O.p;
      try {
        O.p = 8, Fc(l, t, a, u);
      } finally {
        O.p = n, S.T = e;
      }
    }
    function Fc(l, t, a, u) {
      if (Dn) {
        var e = Ic(u);
        if (e === null) jc(l, t, u, Rn, a), t0(l, u);
        else if (Gv(e, l, t, a, u)) u.stopPropagation();
        else if (t0(l, u), t & 4 && -1 < jv.indexOf(l)) {
          for (; e !== null; ) {
            var n = Ya(e);
            if (n !== null) switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = ma(n.pendingLanes);
                  if (f !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var i = 1 << 31 - Pl(f);
                      c.entanglements[1] |= i, f &= ~i;
                    }
                    Ot(n), (sl & 6) === 0 && (dn = Et() + 500, ee(0));
                  }
                }
                break;
              case 13:
                c = Wa(n, 2), c !== null && ft(c, n, 2), hn(), kc(n, 2);
            }
            if (n = Ic(u), n === null && jc(l, t, u, Rn, a), n === e) break;
            e = n;
          }
          e !== null && u.stopPropagation();
        } else jc(l, t, u, null, a);
      }
    }
    function Ic(l) {
      return l = af(l), Pc(l);
    }
    var Rn = null;
    function Pc(l) {
      if (Rn = null, l = Ba(l), l !== null) {
        var t = U(l);
        if (t === null) l = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (l = G(t), l !== null) return l;
            l = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            l = null;
          } else t !== l && (l = null);
        }
      }
      return Rn = l, null;
    }
    function l0(l) {
      switch (l) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 8;
        case "message":
          switch (A0()) {
            case vi:
              return 2;
            case hi:
              return 8;
            case Te:
            case M0:
              return 32;
            case yi:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var li = false, ra = null, da = null, va = null, de = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), ha = [], jv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function t0(l, t) {
      switch (l) {
        case "focusin":
        case "focusout":
          ra = null;
          break;
        case "dragenter":
        case "dragleave":
          da = null;
          break;
        case "mouseover":
        case "mouseout":
          va = null;
          break;
        case "pointerover":
        case "pointerout":
          de.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          ve.delete(t.pointerId);
      }
    }
    function he(l, t, a, u, e, n) {
      return l === null || l.nativeEvent !== n ? (l = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: u,
        nativeEvent: n,
        targetContainers: [
          e
        ]
      }, t !== null && (t = Ya(t), t !== null && Pr(t)), l) : (l.eventSystemFlags |= u, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
    }
    function Gv(l, t, a, u, e) {
      switch (t) {
        case "focusin":
          return ra = he(ra, l, t, a, u, e), true;
        case "dragenter":
          return da = he(da, l, t, a, u, e), true;
        case "mouseover":
          return va = he(va, l, t, a, u, e), true;
        case "pointerover":
          var n = e.pointerId;
          return de.set(n, he(de.get(n) || null, l, t, a, u, e)), true;
        case "gotpointercapture":
          return n = e.pointerId, ve.set(n, he(ve.get(n) || null, l, t, a, u, e)), true;
      }
      return false;
    }
    function a0(l) {
      var t = Ba(l.target);
      if (t !== null) {
        var a = U(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = G(a), t !== null) {
              l.blockedOn = t, H0(l.priority, function() {
                if (a.tag === 13) {
                  var u = nt();
                  u = Kn(u);
                  var e = Wa(a, u);
                  e !== null && ft(e, a, u), kc(a, u);
                }
              });
              return;
            }
          } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      l.blockedOn = null;
    }
    function Un(l) {
      if (l.blockedOn !== null) return false;
      for (var t = l.targetContainers; 0 < t.length; ) {
        var a = Ic(l.nativeEvent);
        if (a === null) {
          a = l.nativeEvent;
          var u = new a.constructor(a.type, a);
          tf = u, a.target.dispatchEvent(u), tf = null;
        } else return t = Ya(a), t !== null && Pr(t), l.blockedOn = a, false;
        t.shift();
      }
      return true;
    }
    function u0(l, t, a) {
      Un(l) && a.delete(t);
    }
    function Qv() {
      li = false, ra !== null && Un(ra) && (ra = null), da !== null && Un(da) && (da = null), va !== null && Un(va) && (va = null), de.forEach(u0), ve.forEach(u0);
    }
    function Nn(l, t) {
      l.blockedOn === t && (l.blockedOn = null, li || (li = true, v.unstable_scheduleCallback(v.unstable_NormalPriority, Qv)));
    }
    var Hn = null;
    function e0(l) {
      Hn !== l && (Hn = l, v.unstable_scheduleCallback(v.unstable_NormalPriority, function() {
        Hn === l && (Hn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t], u = l[t + 1], e = l[t + 2];
          if (typeof u != "function") {
            if (Pc(u || a) === null) continue;
            break;
          }
          var n = Ya(a);
          n !== null && (l.splice(t, 3), t -= 3, Pf(n, {
            pending: true,
            data: e,
            method: a.method,
            action: u
          }, u, e));
        }
      }));
    }
    function ye(l) {
      function t(i) {
        return Nn(i, l);
      }
      ra !== null && Nn(ra, l), da !== null && Nn(da, l), va !== null && Nn(va, l), de.forEach(t), ve.forEach(t);
      for (var a = 0; a < ha.length; a++) {
        var u = ha[a];
        u.blockedOn === l && (u.blockedOn = null);
      }
      for (; 0 < ha.length && (a = ha[0], a.blockedOn === null); ) a0(a), a.blockedOn === null && ha.shift();
      if (a = (l.ownerDocument || l).$$reactFormReplay, a != null) for (u = 0; u < a.length; u += 3) {
        var e = a[u], n = a[u + 1], f = e[wl] || null;
        if (typeof n == "function") f || e0(a);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[wl] || null) c = f.formAction;
            else if (Pc(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? a[u + 1] = c : (a.splice(u, 3), u -= 3), e0(a);
        }
      }
    }
    function ti(l) {
      this._internalRoot = l;
    }
    xn.prototype.render = ti.prototype.render = function(l) {
      var t = this._internalRoot;
      if (t === null) throw Error(r(409));
      var a = t.current, u = nt();
      Fr(a, u, l, t, null, null);
    }, xn.prototype.unmount = ti.prototype.unmount = function() {
      var l = this._internalRoot;
      if (l !== null) {
        this._internalRoot = null;
        var t = l.containerInfo;
        Fr(l.current, 2, null, l, null, null), hn(), t[qa] = null;
      }
    };
    function xn(l) {
      this._internalRoot = l;
    }
    xn.prototype.unstable_scheduleHydration = function(l) {
      if (l) {
        var t = Ti();
        l = {
          blockedOn: null,
          target: l,
          priority: t
        };
        for (var a = 0; a < ha.length && t !== 0 && t < ha[a].priority; a++) ;
        ha.splice(a, 0, l), a === 0 && a0(l);
      }
    };
    var n0 = _.version;
    if (n0 !== "19.1.0") throw Error(r(527, n0, "19.1.0"));
    O.findDOMNode = function(l) {
      var t = l._reactInternals;
      if (t === void 0) throw typeof l.render == "function" ? Error(r(188)) : (l = Object.keys(l).join(","), Error(r(268, l)));
      return l = N(t), l = l !== null ? y(l) : null, l = l === null ? null : l.stateNode, l;
    };
    var Cv = {
      bundleType: 0,
      version: "19.1.0",
      rendererPackageName: "react-dom",
      currentDispatcherRef: S,
      reconcilerVersion: "19.1.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var qn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!qn.isDisabled && qn.supportsFiber) try {
        bu = qn.inject(Cv), Il = qn;
      } catch {
      }
    }
    return ge.createRoot = function(l, t) {
      if (!D(l)) throw Error(r(299));
      var a = false, u = "", e = Eo, n = _o, f = Ao, c = null;
      return t != null && (t.unstable_strictMode === true && (a = true), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (c = t.unstable_transitionCallbacks)), t = $r(l, 1, false, null, null, a, u, e, n, f, c, null), l[qa] = t.current, Xc(l), new ti(t);
    }, ge.hydrateRoot = function(l, t, a) {
      if (!D(l)) throw Error(r(299));
      var u = false, e = "", n = Eo, f = _o, c = Ao, i = null, m = null;
      return a != null && (a.unstable_strictMode === true && (u = true), a.identifierPrefix !== void 0 && (e = a.identifierPrefix), a.onUncaughtError !== void 0 && (n = a.onUncaughtError), a.onCaughtError !== void 0 && (f = a.onCaughtError), a.onRecoverableError !== void 0 && (c = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (i = a.unstable_transitionCallbacks), a.formState !== void 0 && (m = a.formState)), t = $r(l, 1, true, t, a ?? null, u, e, n, f, c, i, m), t.context = kr(null), a = t.current, u = nt(), u = Kn(u), e = Ft(u), e.callback = null, It(a, e, u), a = u, t.current.lanes = a, Eu(t, a), Ot(t), l[qa] = t.current, Xc(l), new xn(t);
    }, ge.version = "19.1.0", ge;
  }
  var y0;
  function Fv() {
    if (y0) return ei.exports;
    y0 = 1;
    function v() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v);
      } catch (_) {
        console.error(_);
      }
    }
    return v(), ei.exports = kv(), ei.exports;
  }
  var Iv = Fv();
  const Pv = ri(Iv);
  var Xn = {
    exports: {}
  }, lh = Xn.exports, m0;
  function th() {
    return m0 || (m0 = 1, function(v, _) {
      (function(p, r) {
        r();
      })(lh, function() {
        function p(y, z) {
          return typeof z > "u" ? z = {
            autoBom: false
          } : typeof z != "object" && (console.warn("Deprecated: Expected third argument to be a object"), z = {
            autoBom: !z
          }), z.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(y.type) ? new Blob([
            "\uFEFF",
            y
          ], {
            type: y.type
          }) : y;
        }
        function r(y, z, Q) {
          var x = new XMLHttpRequest();
          x.open("GET", y), x.responseType = "blob", x.onload = function() {
            N(x.response, z, Q);
          }, x.onerror = function() {
            console.error("could not download file");
          }, x.send();
        }
        function D(y) {
          var z = new XMLHttpRequest();
          z.open("HEAD", y, false);
          try {
            z.send();
          } catch {
          }
          return 200 <= z.status && 299 >= z.status;
        }
        function U(y) {
          try {
            y.dispatchEvent(new MouseEvent("click"));
          } catch {
            var z = document.createEvent("MouseEvents");
            z.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), y.dispatchEvent(z);
          }
        }
        var G = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof Bn == "object" && Bn.global === Bn ? Bn : void 0, $ = G.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), N = G.saveAs || (typeof window != "object" || window !== G ? function() {
        } : "download" in HTMLAnchorElement.prototype && !$ ? function(y, z, Q) {
          var x = G.URL || G.webkitURL, Y = document.createElement("a");
          z = z || y.name || "download", Y.download = z, Y.rel = "noopener", typeof y == "string" ? (Y.href = y, Y.origin === location.origin ? U(Y) : D(Y.href) ? r(y, z, Q) : U(Y, Y.target = "_blank")) : (Y.href = x.createObjectURL(y), setTimeout(function() {
            x.revokeObjectURL(Y.href);
          }, 4e4), setTimeout(function() {
            U(Y);
          }, 0));
        } : "msSaveOrOpenBlob" in navigator ? function(y, z, Q) {
          if (z = z || y.name || "download", typeof y != "string") navigator.msSaveOrOpenBlob(p(y, Q), z);
          else if (D(y)) r(y, z, Q);
          else {
            var x = document.createElement("a");
            x.href = y, x.target = "_blank", setTimeout(function() {
              U(x);
            });
          }
        } : function(y, z, Q, x) {
          if (x = x || open("", "_blank"), x && (x.document.title = x.document.body.innerText = "downloading..."), typeof y == "string") return r(y, z, Q);
          var Y = y.type === "application/octet-stream", tl = /constructor/i.test(G.HTMLElement) || G.safari, X = /CriOS\/[\d]+/.test(navigator.userAgent);
          if ((X || Y && tl || $) && typeof FileReader < "u") {
            var J = new FileReader();
            J.onloadend = function() {
              var ul = J.result;
              ul = X ? ul : ul.replace(/^data:[^;]*;/, "data:attachment/file;"), x ? x.location.href = ul : location = ul, x = null;
            }, J.readAsDataURL(y);
          } else {
            var cl = G.URL || G.webkitURL, al = cl.createObjectURL(y);
            x ? x.location = al : location.href = al, x = null, setTimeout(function() {
              cl.revokeObjectURL(al);
            }, 4e4);
          }
        });
        G.saveAs = N.saveAs = N, v.exports = N;
      });
    }(Xn)), Xn.exports;
  }
  var ah = th();
  const uh = ri(ah), eh = "" + new URL("index_bg-vBur-QFe.wasm", import.meta.url).href, nh = async (v = {}, _) => {
    let p;
    if (_.startsWith("data:")) {
      const r = _.replace(/^data:.*?base64,/, "");
      let D;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") D = Buffer.from(r, "base64");
      else if (typeof atob == "function") {
        const U = atob(r);
        D = new Uint8Array(U.length);
        for (let G = 0; G < U.length; G++) D[G] = U.charCodeAt(G);
      } else throw new Error("Cannot decode base64-encoded data URL");
      p = await WebAssembly.instantiate(D, v);
    } else {
      const r = await fetch(_), D = r.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && D.startsWith("application/wasm")) p = await WebAssembly.instantiateStreaming(r, v);
      else {
        const U = await r.arrayBuffer();
        p = await WebAssembly.instantiate(U, v);
      }
    }
    return p.instance.exports;
  }, fh = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
  let S0 = new fh("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  S0.decode();
  let ii = new Uint8Array();
  function ch() {
    return ii.byteLength === 0 && (ii = new Uint8Array(Eh.buffer)), ii;
  }
  function ih(v, _) {
    return S0.decode(ch().subarray(v, v + _));
  }
  const Gn = new Array(32).fill(void 0);
  Gn.push(void 0, null, true, false);
  let jn = 32;
  function sh(v) {
    if (jn == 1) throw new Error("out of js stack");
    return Gn[--jn] = v, jn;
  }
  function Yn(v) {
    if (typeof v != "number") throw new Error("expected a number argument");
  }
  function oh(v) {
    if (typeof v != "boolean") throw new Error("expected a boolean argument");
  }
  function rh(v, _, p, r, D, U, G, $, N, y) {
    try {
      Yn(_), Yn(p), oh($), Yn(N), Yn(y), _h(sh(v), _, p, r, D, U, G, $, N, y);
    } finally {
      Gn[jn++] = void 0;
    }
  }
  function dh(v) {
    return Gn[v];
  }
  function vh(v, _) {
    try {
      return v.apply(this, _);
    } catch (p) {
      let r = function() {
        try {
          return p instanceof Error ? `${p.message}

Stack:
${p.stack}` : p.toString();
        } catch {
          return "<failed to stringify thrown value>";
        }
      }();
      throw console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", r), p;
    }
  }
  function Se(v) {
    return () => {
      throw new Error(`${v} is not defined`);
    };
  }
  function hh() {
    return vh(function(v, _, p, r, D) {
      dh(v).fillRect(_, p, r, D);
    }, arguments);
  }
  const yh = typeof Math.floor == "function" ? Math.floor : Se("Math.floor"), mh = typeof Math.log == "function" ? Math.log : Se("Math.log"), gh = typeof Math.max == "function" ? Math.max : Se("Math.max"), Sh = typeof Math.pow == "function" ? Math.pow : Se("Math.pow"), bh = typeof Math.random == "function" ? Math.random : Se("Math.random");
  function Th(v, _) {
    throw new Error(ih(v, _));
  }
  URL = globalThis.URL;
  const b0 = await nh({
    "./index_bg.js": {
      __wbg_fillRect_3b87fb719605af54: hh,
      __wbg_floor_a1c943a320ab9b8e: yh,
      __wbg_log_51acad4ecf2d4061: mh,
      __wbg_max_a25134139f03effb: gh,
      __wbg_pow_a9941844927795cf: Sh,
      __wbg_random_5ee0189319837e3a: bh,
      __wbindgen_throw: Th
    }
  }, eh), Eh = b0.memory, _h = b0.draw, g0 = (v) => {
    let _;
    const p = /* @__PURE__ */ new Set(), r = (y, z) => {
      const Q = typeof y == "function" ? y(_) : y;
      if (!Object.is(Q, _)) {
        const x = _;
        _ = z ?? (typeof Q != "object" || Q === null) ? Q : Object.assign({}, _, Q), p.forEach((Y) => Y(_, x));
      }
    }, D = () => _, $ = {
      setState: r,
      getState: D,
      getInitialState: () => N,
      subscribe: (y) => (p.add(y), () => p.delete(y))
    }, N = _ = v(r, D, $);
    return $;
  }, Ah = (v) => v ? g0(v) : g0, Mh = (v) => v;
  function zh(v, _ = Mh) {
    const p = si.useSyncExternalStore(v.subscribe, () => _(v.getState()), () => _(v.getInitialState()));
    return si.useDebugValue(p), p;
  }
  const Oh = (v) => {
    const _ = Ah(v), p = (r) => zh(_, r);
    return Object.assign(p, _), p;
  }, ph = (v) => Oh;
  function T0(v, _) {
    let p;
    try {
      p = v();
    } catch {
      return;
    }
    return {
      getItem: (D) => {
        var U;
        const G = (N) => N === null ? null : JSON.parse(N, void 0), $ = (U = p.getItem(D)) != null ? U : null;
        return $ instanceof Promise ? $.then(G) : G($);
      },
      setItem: (D, U) => p.setItem(D, JSON.stringify(U, void 0)),
      removeItem: (D) => p.removeItem(D)
    };
  }
  const oi = (v) => (_) => {
    try {
      const p = v(_);
      return p instanceof Promise ? p : {
        then(r) {
          return oi(r)(p);
        },
        catch(r) {
          return this;
        }
      };
    } catch (p) {
      return {
        then(r) {
          return this;
        },
        catch(r) {
          return oi(r)(p);
        }
      };
    }
  }, Dh = (v, _) => (p, r, D) => {
    let U = {
      storage: T0(() => localStorage),
      partialize: (X) => X,
      version: 0,
      merge: (X, J) => ({
        ...J,
        ...X
      }),
      ..._
    }, G = false;
    const $ = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Set();
    let y = U.storage;
    if (!y) return v((...X) => {
      console.warn(`[zustand persist middleware] Unable to update item '${U.name}', the given storage is currently unavailable.`), p(...X);
    }, r, D);
    const z = () => {
      const X = U.partialize({
        ...r()
      });
      return y.setItem(U.name, {
        state: X,
        version: U.version
      });
    }, Q = D.setState;
    D.setState = (X, J) => {
      Q(X, J), z();
    };
    const x = v((...X) => {
      p(...X), z();
    }, r, D);
    D.getInitialState = () => x;
    let Y;
    const tl = () => {
      var X, J;
      if (!y) return;
      G = false, $.forEach((al) => {
        var ul;
        return al((ul = r()) != null ? ul : x);
      });
      const cl = ((J = U.onRehydrateStorage) == null ? void 0 : J.call(U, (X = r()) != null ? X : x)) || void 0;
      return oi(y.getItem.bind(y))(U.name).then((al) => {
        if (al) if (typeof al.version == "number" && al.version !== U.version) {
          if (U.migrate) {
            const ul = U.migrate(al.state, al.version);
            return ul instanceof Promise ? ul.then((Ol) => [
              true,
              Ol
            ]) : [
              true,
              ul
            ];
          }
          console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
        } else return [
          false,
          al.state
        ];
        return [
          false,
          void 0
        ];
      }).then((al) => {
        var ul;
        const [Ol, k] = al;
        if (Y = U.merge(k, (ul = r()) != null ? ul : x), p(Y, true), Ol) return z();
      }).then(() => {
        cl == null ? void 0 : cl(Y, void 0), Y = r(), G = true, N.forEach((al) => al(Y));
      }).catch((al) => {
        cl == null ? void 0 : cl(void 0, al);
      });
    };
    return D.persist = {
      setOptions: (X) => {
        U = {
          ...U,
          ...X
        }, X.storage && (y = X.storage);
      },
      clearStorage: () => {
        y == null ? void 0 : y.removeItem(U.name);
      },
      getOptions: () => U,
      rehydrate: () => tl(),
      hasHydrated: () => G,
      onHydrate: (X) => ($.add(X), () => {
        $.delete(X);
      }),
      onFinishHydration: (X) => (N.add(X), () => {
        N.delete(X);
      })
    }, U.skipHydration || tl(), Y || x;
  }, Rh = Dh, Uh = {
    N: {
      title: "N",
      type: "string",
      callback: (v, _) => {
        _.setN(v);
      }
    },
    scaleFactor: {
      title: "Canvas drawing scale factor (higher for high resolution)",
      type: "string",
      callback: (v, _) => {
        _.setScaleFactor(v);
      }
    },
    M: {
      title: "M",
      type: "string",
      callback: (v, _) => {
        _.setM(v);
      }
    },
    bg: {
      title: "Background color",
      type: "string",
      callback: (v, _) => {
        _.setBg(v);
      }
    },
    fg: {
      title: "Foreground color",
      type: "string",
      callback: (v, _) => {
        _.setFg(v);
      }
    },
    wasm: {
      title: "Draw with WASM (warning: if used, main thread may hang)",
      type: "checkbox",
      callback: (v, _) => {
        _.setWasm(v);
      }
    },
    vert: {
      title: "Vertical",
      type: "checkbox",
      callback: (v, _) => {
        _.setVert(v);
      }
    },
    animate: {
      title: "Animate (warning: if off, can hang main thread. also only works for non-wasm currently)",
      type: "checkbox",
      callback: (v, _) => {
        _.setAnimate(v);
      }
    }
  }, Nh = {
    getItem: (v) => {
      const p = new URLSearchParams(location.hash.slice(1)).get(v) ?? "";
      return JSON.parse(p);
    },
    setItem: (v, _) => {
      const p = new URLSearchParams(location.hash.slice(1));
      p.set(v, JSON.stringify(_)), location.hash = p.toString();
    },
    removeItem: (v) => {
      const _ = new URLSearchParams(location.hash.slice(1));
      _.delete(v), location.hash = _.toString();
    }
  }, Hh = ph()(Rh((v) => ({
    minX: "0",
    maxX: "1",
    minR: "2",
    maxR: "4",
    animate: true,
    wasm: false,
    vert: false,
    bg: "black",
    fg: "rgba(255,255,255,0.2)",
    scaleFactor: "2",
    M: "50000",
    N: "1000",
    setMinX: (_) => {
      v(() => ({
        minX: `${_}`
      }));
    },
    setMaxX: (_) => {
      v(() => ({
        maxX: `${_}`
      }));
    },
    setMinR: (_) => {
      v(() => ({
        minR: `${_}`
      }));
    },
    setMaxR: (_) => {
      v(() => ({
        maxR: `${_}`
      }));
    },
    setM: (_) => {
      v(() => ({
        M: `${_}`
      }));
    },
    setN: (_) => {
      v(() => ({
        N: `${_}`
      }));
    },
    setScaleFactor: (_) => {
      v(() => ({
        scaleFactor: _
      }));
    },
    setAnimate: (_) => {
      v(() => ({
        animate: _
      }));
    },
    setWasm: (_) => {
      v(() => ({
        wasm: _
      }));
    },
    setVert: (_) => {
      v(() => ({
        vert: _
      }));
    },
    setFg: (_) => {
      v(() => ({
        fg: _
      }));
    },
    setBg: (_) => {
      v(() => ({
        bg: _
      }));
    }
  }), {
    name: "settings",
    storage: T0(() => Nh)
  }));
  function* xh(v, _, p, r, D, U, G, $, N, y) {
    yield* $ ? Bh(v, _, p, r, D, U, G, N, y) : qh(v, _, p, r, D, U, G, N, y);
  }
  function* qh(v, _, p, r, D, U, G, $, N) {
    const y = (D - r) / _, z = 1.5 ** Math.log(1 / (D - r)) * 1e3;
    for (let Q = 0; Q < _; Q++) {
      yield Q + 1;
      const x = Q * y + r;
      let Y = Math.random();
      for (let tl = 0; tl < Math.max(z, 1e4); tl++) Y = x * Y * (1 - Y);
      for (let tl = 0, X = 0; tl < N && X < $; X++) {
        const J = p * ((Y - U) / (G - U)), cl = _ * ((x - r) / (D - r));
        J > 0 && J < p && (v.fillRect(cl, J, 1, 1), tl++), Y = x * Y * (1 - Y);
      }
    }
  }
  function* Bh(v, _, p, r, D, U, G, $, N) {
    const y = (D - r) / _, z = 1.5 ** Math.log(1 / (D - r)) * 1e3;
    for (let Q = 0; Q < _; Q++) {
      yield Q + 1;
      const x = Q * y + r;
      let Y = Math.random();
      for (let tl = 0; tl < Math.max(z, 1e4); tl++) Y = x * Y * (1 - Y);
      for (let tl = 0, X = 0; tl < N && X < $; X++) {
        const J = _ * ((Y - U) / (G - U)), cl = p * ((x - r) / (D - r));
        J > 0 && J < _ && (v.fillRect(J, cl, 1, 1), tl++), Y = x * Y * (1 - Y);
      }
    }
  }
  function Yh() {
    const v = Hh(), { wasm: _, vert: p, animate: r, fg: D, bg: U, minX: G, maxX: $, minR: N, maxR: y, scaleFactor: z, N: Q, M: x } = v, Y = pt.useRef(null), tl = pt.useRef(null), X = +G, J = +$, cl = +N, al = +y, ul = +z, Ol = +Q, k = +x, [ml, Hl] = pt.useState(), [Sl, Cl] = pt.useState(), [Dt, ct] = pt.useState(true), [Rl, gt] = pt.useState(0), [Rt, xl] = pt.useState(0);
    return pt.useEffect(() => {
      let S = false;
      if (!Number.isNaN(+ul) && !Number.isNaN(+Ol) && !Number.isNaN(+k)) {
        const O = Y.current;
        if (!O) return;
        const q = O.getContext("2d");
        if (!q) return;
        const { width: w, height: s } = O.getBoundingClientRect(), E = +ul;
        O.width = w * E, O.height = s * E, ct(true), gt(0), setTimeout(() => {
          (async () => {
            q.fillStyle = U, q.fillRect(0, 0, w * E, s * E), q.fillStyle = D;
            const H = performance.now();
            if (_) rh(q, w * E, s * E, cl, al, X, J, p, k, Ol);
            else {
              let R = performance.now();
              for (const C of xh(q, w * E, s * E, cl, al, X, J, p, +k, +Ol)) if (r && (gt(C / (w * E)), performance.now() - R > 10 && (await new Promise((el) => setTimeout(el, 0)), R = performance.now())), S) break;
            }
            xl(performance.now() - H), S || (ct(false), gt(0));
          })();
        }, 100);
      }
      return () => {
        S = true;
      };
    }, [
      cl,
      al,
      X,
      J,
      ul,
      p,
      r,
      _,
      Ol,
      k,
      D,
      U
    ]), pt.useEffect(() => {
      const S = tl.current;
      if (!S) return;
      const O = S.getContext("2d");
      if (!O) return;
      const { width: q, height: w } = S.getBoundingClientRect();
      if (S.width = q, S.height = w, ml && Sl) {
        O.clearRect(0, 0, q, w);
        const [s, E] = ml, [H, R] = Sl;
        O.fillStyle = "rgba(255,0,0,0.3)", O.fillRect(s, E, H - s, R - E);
      }
    }, [
      ml,
      Sl
    ]), gl.jsxs("div", {
      className: "m-5",
      children: [
        gl.jsx("h1", {
          className: "text-3xl",
          children: "f(x)=rx(x-1)"
        }),
        gl.jsx("p", {
          children: "The function above is iterated for values of r between [2,4] and x between [0,1] and points. Click and drag a region to zoom in. The program iterates, trying to draw N points (with a limit of iterating M times) in the zoomed in region, which results in higher computation time at zoomed in values. When zoomed in, it has to iterate the logistic map longer to find that many points to draw resulting in it being slower when zoomed in."
        }),
        gl.jsx("p", {
          children: 'The scale factor (can make it e.g. 4 to make the canvas 4x larger than the screen size itself) makes the canvas size larger, allowing the code to render higher resolution images (use the "Save PNG" to save the resulting image). You can then import the result into gimp and do smooth downsampling of the result to get smooth unpixelated textures. Increasing the M and N paramters allows controlling how many points are drawn at high zoom level.'
        }),
        gl.jsx("p", {
          children: "Note: my main goal when starting this project was to demonstrate using wasm+react in a monorepo in a basic way. The wasm drawing mode is not faster and doesn't provide the animation/progress bar but may be able to be improved. Also note, the work is done on the main thread so the browser may hang if animation is not used"
        }),
        gl.jsxs("p", {
          children: [
            "See ",
            gl.jsx("a", {
              href: "https://en.wikipedia.org/wiki/Logistic_map",
              children: "Wikipedia"
            }),
            " ",
            "for more info on the fractal"
          ]
        }),
        gl.jsxs("div", {
          children: [
            Object.entries(Uh).map(([S, { title: O, type: q, callback: w }]) => q === "checkbox" ? gl.jsxs("div", {
              children: [
                gl.jsx("input", {
                  id: S,
                  type: "checkbox",
                  checked: v[S],
                  onChange: (s) => {
                    w(s.target.checked, v);
                  }
                }),
                gl.jsx("label", {
                  htmlFor: S,
                  children: O
                })
              ]
            }, S) : gl.jsxs("div", {
              children: [
                gl.jsx("input", {
                  id: S,
                  type: "text",
                  value: `${v[S]}`,
                  onChange: (s) => {
                    w(s.target.value, v);
                  }
                }),
                gl.jsx("label", {
                  htmlFor: S,
                  children: O
                })
              ]
            }, S)),
            gl.jsx("p", {
              children: Dt ? `Loading...${Rl ? `${(Rl * 100).toPrecision(3)}%` : ""}` : null
            }),
            gl.jsx("button", {
              onClick: () => {
                var _a;
                return (_a = Y.current) == null ? void 0 : _a.toBlob((S) => {
                  S && uh(S, `frac_${performance.now()}.png`);
                });
              },
              children: "Save as PNG"
            }),
            gl.jsx("button", {
              onClick: () => {
                v.setMaxX("1"), v.setMinX("0"), v.setMinR("2"), v.setMaxR("4");
              },
              children: "Reset"
            }),
            Dt ? null : gl.jsxs("p", {
              children: [
                "Render time: ",
                Rt / 1e3,
                "s"
              ]
            })
          ]
        }),
        gl.jsxs("div", {
          className: "relative",
          children: [
            gl.jsx("canvas", {
              ref: Y,
              className: "bg-white w-full h-full"
            }),
            gl.jsx("canvas", {
              className: "absolute left-0 top-0 w-full h-screen cursor-crosshair z-50",
              ref: tl,
              onMouseDown: (S) => {
                const { offsetX: O, offsetY: q } = S.nativeEvent;
                Hl([
                  O,
                  q
                ]), Cl([
                  O,
                  q
                ]);
              },
              onMouseMove: (S) => {
                const { offsetX: O, offsetY: q } = S.nativeEvent;
                ml && Cl([
                  O,
                  q
                ]);
              },
              onMouseLeave: () => {
                Hl(void 0), Cl(void 0);
              },
              onMouseUp: () => {
                const S = tl.current;
                if (S && ml && Sl && Math.abs(ml[0] - Sl[0]) > 2 && Math.abs(ml[1] - Sl[1]) > 2) {
                  const O = Math.min(ml[0], Sl[0]), q = Math.max(ml[0], Sl[0]), w = Math.min(ml[1], Sl[1]), s = Math.max(ml[1], Sl[1]), { width: E, height: H } = S.getBoundingClientRect(), R = p ? {
                    minR: (al - cl) * w / H + cl,
                    maxR: (al - cl) * s / H + cl,
                    minX: (J - X) * O / E + X,
                    maxX: (J - X) * q / E + X
                  } : {
                    minR: (al - cl) * O / E + cl,
                    maxR: (al - cl) * q / E + cl,
                    minX: (J - X) * w / H + X,
                    maxX: (J - X) * s / H + X
                  };
                  v.setMaxX(R.maxX), v.setMinX(R.minX), v.setMaxR(R.maxR), v.setMinR(R.minR), Hl(void 0), Cl(void 0);
                } else Hl(void 0), Cl(void 0);
              }
            })
          ]
        }),
        gl.jsxs("p", {
          children: [
            "Source code",
            " ",
            gl.jsx("a", {
              href: "https://github.com/cmdcolin/logistic_chaos_map",
              children: "Github"
            }),
            "."
          ]
        })
      ]
    });
  }
  const Xh = Pv.createRoot(document.querySelector("#root"));
  Xh.render(gl.jsx(si.StrictMode, {
    children: gl.jsx(Yh, {})
  }));
})();
