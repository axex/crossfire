!function (t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e(require("react")) : "function" == typeof define && define.amd ? define(["react"], e) : "object" == typeof exports ? exports.ReactDnD = e(require("react")) : t.ReactDnD = e(t.React)
}(this, function (t) {
  return function (t) {
    function e(n) {
      if (r[n])return r[n].exports;
      var o = r[n] = {exports: {}, id: n, loaded: !1};
      return t[n].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
    }

    var r = {};
    return e.m = t, e.c = r, e.p = "", e(0)
  }([function (t, e, r) {
    "use strict";
    function n(t) {
      if (t && t.__esModule)return t;
      var e = {};
      if (null != t)for (var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
      return e["default"] = t, e
    }

    function o(t, e) {
      for (var r = Object.getOwnPropertyNames(e), n = 0; n < r.length; n++) {
        var o = r[n], i = Object.getOwnPropertyDescriptor(e, o);
        i && i.configurable && void 0 === t[o] && Object.defineProperty(t, o, i)
      }
      return t
    }

    e.__esModule = !0;
    var i = r(46);
    o(e, n(i));
    var a = r(37), s = n(a);
    e.HTML5 = s
  }, function (t, e, r) {
    "use strict";
    var n = function (t, e, r, n, o, i, a, s) {
      if (!t) {
        var u;
        if (void 0 === e)u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
          var c = [r, n, o, i, a, s], f = 0;
          u = new Error("Invariant Violation: " + e.replace(/%s/g, function () {
              return c[f++]
            }))
        }
        throw u.framesToPop = 1, u
      }
    };
    t.exports = n
  }, function (t, e, r) {
    var n = r(10), o = r(14), i = r(11), a = "[object Array]", s = Object.prototype, u = s.toString, c = n(Array, "isArray"), f = c || function (t) {
        return i(t) && o(t.length) && u.call(t) == a
      };
    t.exports = f
  }, function (t, e, r) {
    function n(t) {
      return null != t && i(o(t))
    }

    var o = r(96), i = r(14);
    t.exports = n
  }, function (t, e, r) {
    function n(t) {
      var e = typeof t;
      return !!t && ("object" == e || "function" == e)
    }

    t.exports = n
  }, function (e, r, n) {
    e.exports = t
  }, function (t, e, r) {
    "use strict";
    function n(t, e) {
      if (t === e)return !0;
      var r = Object.keys(t), n = Object.keys(e);
      if (r.length !== n.length)return !1;
      for (var o = Object.prototype.hasOwnProperty, i = 0; i < r.length; i++) {
        if (!o.call(e, r[i]) || t[r[i]] !== e[r[i]])return !1;
        var a = t[r[i]], s = e[r[i]];
        if (a !== s)return !1
      }
      return !0
    }

    e.__esModule = !0, e["default"] = n, t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      return t.prototype.constructor.name
    }

    var o = function (t) {
      return t && t.__esModule ? t["default"] : t
    }, i = function (t, e) {
      var r = Object.create(t.prototype), n = t.apply(r, e);
      return null == n || "object" != typeof n && "function" != typeof n ? r : n
    }, a = function (t, e, r) {
      e && Object.defineProperties(t, e), r && Object.defineProperties(t.prototype, r)
    }, s = function (t, e) {
      if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (t.__proto__ = e)
    }, u = function (t, e) {
      if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }, c = o(r(70)), f = o(r(69)), l = r(71).Dispatcher, p = o(r(27)), d = function (t) {
      function e() {
        u(this, e), this.dispatcher = new l, this._stores = {}, this._actions = {}
      }

      return s(e, t), a(e, null, {
        createStore: {
          value: function (t, e) {
            for (var r = arguments.length, o = Array(r > 2 ? r - 2 : 0), a = 2; r > a; a++)o[a - 2] = arguments[a];
            if (!(e.prototype instanceof c)) {
              var s = n(e);
              throw new Error("You've attempted to create a store from the class " + s + ", which does not have the base Store class in its prototype chain. Make sure " + ("you're using the `extends` keyword: `class " + s + " extends ") + "Store { ... }`")
            }
            if (this._stores.hasOwnProperty(t) && this._stores[t])throw new Error("You've attempted to create multiple stores with key " + t + ". Keys must be unique.");
            var u = i(e, o), f = this.dispatcher.register(u.handler.bind(u));
            return u._waitFor = this.waitFor.bind(this), u._token = f, this._stores[t] = u, u
          }, writable: !0, configurable: !0
        }, getStore: {
          value: function (t) {
            return this._stores.hasOwnProperty(t) ? this._stores[t] : void 0
          }, writable: !0, configurable: !0
        }, createActions: {
          value: function (t, e) {
            for (var r = arguments.length, o = Array(r > 2 ? r - 2 : 0), a = 2; r > a; a++)o[a - 2] = arguments[a];
            if (!(e.prototype instanceof f) && e !== f) {
              var s = n(e);
              throw new Error("You've attempted to create actions from the class " + s + ", which does not have the base Actions class in its prototype chain. Make " + ("sure you're using the `extends` keyword: `class " + s + " ") + "extends Actions { ... }`")
            }
            if (this._actions.hasOwnProperty(t) && this._actions[t])throw new Error("You've attempted to create multiple actions with key " + t + ". Keys must be unique.");
            var u = i(e, o);
            return u.dispatch = this.dispatch.bind(this), u.dispatchAsync = this.dispatchAsync.bind(this), this._actions[t] = u, u
          }, writable: !0, configurable: !0
        }, getActions: {
          value: function (t) {
            return this._actions.hasOwnProperty(t) ? this._actions[t] : void 0
          }, writable: !0, configurable: !0
        }, getActionIds: {
          value: function (t) {
            var e = this.getActions(t);
            if (e)return e.getConstants()
          }, writable: !0, configurable: !0
        }, dispatch: {
          value: function (t, e) {
            this._dispatch({actionId: t, body: e})
          }, writable: !0, configurable: !0
        }, dispatchAsync: {
          value: function (t, e, r) {
            var n = this, o = {actionId: t, async: "begin"};
            return r && (o.actionArgs = r), this._dispatch(o), e.then(function (e) {
              return n._dispatch({actionId: t, body: e, async: "success"}), e
            }, function (e) {
              return n._dispatch({actionId: t, error: e, async: "failure"}), Promise.reject(e)
            })["catch"](function (t) {
              return n.emit("error", t), Promise.reject(t)
            })
          }, writable: !0, configurable: !0
        }, _dispatch: {
          value: function (t) {
            this.dispatcher.dispatch(t), this.emit("dispatch", t)
          }, writable: !0, configurable: !0
        }, waitFor: {
          value: function (t) {
            Array.isArray(t) || (t = [t]);
            var e = function (t) {
              return t instanceof c ? t._token : t
            }, r = t.map(e);
            this.dispatcher.waitFor(r)
          }, writable: !0, configurable: !0
        }, removeAllStoreListeners: {
          value: function (t) {
            for (var e in this._stores)if (this._stores.hasOwnProperty(e)) {
              var r = this._stores[e];
              r.removeAllListeners(t)
            }
          }, writable: !0, configurable: !0
        }, serialize: {
          value: function r() {
            var t = {};
            for (var e in this._stores)if (this._stores.hasOwnProperty(e)) {
              var n = this._stores[e], r = n.constructor.serialize;
              if ("function" == typeof r) {
                var o = r(n.state);
                if ("string" != typeof o) {
                  n.constructor.name
                }
                if (t[e] = o, "function" != typeof n.constructor.deserialize) {
                  n.constructor.name
                }
              }
            }
            return JSON.stringify(t)
          }, writable: !0, configurable: !0
        }, deserialize: {
          value: function o(t) {
            var e = void 0;
            try {
              e = JSON.parse(t)
            } catch (r) {
              this.constructor.name
            }
            for (var n in this._stores)if (this._stores.hasOwnProperty(n)) {
              var i = this._stores[n], o = i.constructor.deserialize;
              if ("function" == typeof o) {
                var a = e[n], s = o(a);
                if (i.replaceState(s), "function" != typeof i.constructor.serialize) {
                  i.constructor.name
                }
              }
            }
          }, writable: !0, configurable: !0
        }
      }), e
    }(p);
    e["default"] = d, d.prototype.getConstants = d.prototype.getActionIds, d.prototype.dehydrate = d.prototype.serialize, d.prototype.hydrate = d.prototype.deserialize;
    var h = d;
    e.Flux = d, e.Flummox = h, e.Store = c, e.Actions = f, Object.defineProperty(e, "__esModule", {value: !0})
  }, function (t, e, r) {
    var n = r(10), o = r(103), i = "[object Object]", a = Object.prototype, s = a.toString, u = n(Object, "getPrototypeOf"), c = u ? function (t) {
      if (!t || s.call(t) != i)return !1;
      var e = n(t, "valueOf"), r = e && (r = u(e)) && u(r);
      return r ? t == r || u(t) == r : o(t)
    } : o;
    t.exports = c
  }, function (t, e, r) {
    function n(t, e) {
      if ("function" != typeof t)throw new TypeError(o);
      return e = i(void 0 === e ? t.length - 1 : +e || 0, 0), function () {
        for (var r = arguments, n = -1, o = i(r.length - e, 0), a = Array(o); ++n < o;)a[n] = r[e + n];
        switch (e) {
          case 0:
            return t.call(this, a);
          case 1:
            return t.call(this, r[0], a);
          case 2:
            return t.call(this, r[0], r[1], a)
        }
        var s = Array(e + 1);
        for (n = -1; ++n < e;)s[n] = r[n];
        return s[e] = a, t.apply(this, s)
      }
    }

    var o = "Expected a function", i = Math.max;
    t.exports = n
  }, function (t, e, r) {
    function n(t, e) {
      var r = null == t ? void 0 : t[e];
      return o(r) ? r : void 0
    }

    var o = r(106);
    t.exports = n
  }, function (t, e, r) {
    function n(t) {
      return !!t && "object" == typeof t
    }

    t.exports = n
  }, function (t, e, r) {
    "use strict";
    function n(t, e) {
      for (var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), o = 2; r > o; o++)n[o - 2] = arguments[o]
    }

    e.__esModule = !0, e["default"] = n, t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    function n(t, e) {
      if (t === e)return !0;
      if ("object" != typeof t || null === t || "object" != typeof e || null === e)return !1;
      var r = Object.keys(t), n = Object.keys(e);
      if (r.length !== n.length)return !1;
      for (var o = Object.prototype.hasOwnProperty, i = 0; i < r.length; i++) {
        if (!o.call(e, r[i]))return !1;
        var a = t[r[i]], s = e[r[i]];
        if (a !== s || "object" == typeof a || "object" == typeof s)return !1
      }
      return !0
    }

    e.__esModule = !0, e["default"] = n, t.exports = e["default"]
  }, function (t, e, r) {
    function n(t) {
      return "number" == typeof t && t > -1 && t % 1 == 0 && o >= t
    }

    var o = 9007199254740991;
    t.exports = n
  }, function (t, e, r) {
    "use strict";
    var n = function (t) {
      return t && t.__esModule ? t : {"default": t}
    };
    e.__esModule = !0;
    var o = r(16), i = n(o);
    e.isDisposable = i["default"];
    var a = r(54), s = n(a);
    e.Disposable = s["default"];
    var u = r(53), c = n(u);
    e.CompositeDisposable = c["default"];
    var f = r(55), l = n(f);
    e.SerialDisposable = l["default"]
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      return Boolean(t && "function" == typeof t.dispose)
    }

    e.__esModule = !0, e["default"] = n, t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    var n = function (t) {
      return t && t.__esModule ? t["default"] : t
    };
    e.__esModule = !0;
    var o = r(56);
    e.DragDropManager = n(o);
    var i = r(58);
    e.DragSource = n(i);
    var a = r(59);
    e.DropTarget = n(a);
    var s = r(63);
    e.createTestBackend = n(s)
  }, function (t, e, r) {
    function n(t, e, r) {
      if (e !== e)return o(t, r);
      for (var n = r - 1, i = t.length; ++n < i;)if (t[n] === e)return n;
      return -1
    }

    var o = r(97);
    t.exports = n
  }, function (t, e, r) {
    function n(t, e) {
      var r = t.data, n = "string" == typeof e || o(e) ? r.set.has(e) : r.hash[e];
      return n ? 0 : -1
    }

    var o = r(4);
    t.exports = n
  }, function (t, e, r) {
    (function (e) {
      var n = r(82), o = r(110), i = r(10), a = i(e, "Set"), s = i(Object, "create"), u = s && a ? function (t) {
        return new n(t)
      } : o(null);
      t.exports = u
    }).call(e, function () {
      return this
    }())
  }, function (t, e, r) {
    function n(t, e) {
      return t = "number" == typeof t || o.test(t) ? +t : -1, e = null == e ? i : e, t > -1 && t % 1 == 0 && e > t
    }

    var o = /^\d+$/, i = 9007199254740991;
    t.exports = n
  }, function (t, e, r) {
    function n(t) {
      return i(t) && o(t) && u.call(t) == a
    }

    var o = r(3), i = r(11), a = "[object Arguments]", s = Object.prototype, u = s.toString;
    t.exports = n
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      return t && t.__esModule ? t : {"default": t}
    }

    function o(t, e) {
      if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (t.__proto__ = e)
    }

    function a(t) {
      var e = t.DecoratedComponent, r = t.createHandler, n = t.createMonitor, a = t.createConnector, p = t.registerHandler, h = t.containerDisplayName, v = t.getType, y = t.collect, b = t.options, _ = b.arePropsEqual, w = void 0 === _ ? g["default"] : _, S = e.displayName || e.name || "Component";
      return function (t) {
        function g(e, i) {
          o(this, g), t.call(this, e, i), this.handleChange = this.handleChange.bind(this), this.handleChildRef = this.handleChildRef.bind(this), m["default"]("object" == typeof this.context.dragDropManager, "Could not find the drag and drop manager in the context of %s. Make sure to wrap the top-level component of your app with DragDropContext. Read more: http://gaearon.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context", S, S), this.manager = this.context.dragDropManager, this.handlerMonitor = n(this.manager), this.handler = r(this.handlerMonitor), this.disposable = new l.SerialDisposable, this.receiveProps(e), this.state = this.getCurrentState()
        }

        return i(g, t), g.prototype.getHandlerId = function () {
          return this.handlerId
        }, g.prototype.getDecoratedComponentInstance = function () {
          return this.decoratedComponentInstance
        }, g.prototype.shouldComponentUpdate = function (t, e) {
          return !w(t, this.props) || !d["default"](e, this.state)
        }, g.prototype.componentWillReceiveProps = function (t) {
          w(t, this.props) || (this.receiveProps(t), this.handleChange())
        }, g.prototype.componentWillUnmount = function () {
          this.disposable.dispose()
        }, g.prototype.receiveProps = function (t) {
          this.handler.receiveProps(t), this.receiveType(v(t))
        }, g.prototype.receiveType = function (t) {
          if (t !== this.currentType) {
            this.currentType = t;
            var e = p(t, this.handler, this.manager), r = e.handlerId, n = e.unregister, o = a(this.manager.getBackend()), i = D["default"](o, r), s = i.handlerConnector, u = i.disposable, c = this.manager.getMonitor(), f = c.subscribeToStateChange(this.handleChange, {handlerIds: [r]});
            this.disposable.setDisposable(new l.CompositeDisposable(new l.Disposable(n), new l.Disposable(f), u)), this.handlerMonitor.receiveHandlerId(r), this.handlerConnector = s, this.handlerId = r
          }
        }, g.prototype.handleChange = function () {
          var t = this.getCurrentState();
          d["default"](t, this.state) || this.setState(t)
        }, g.prototype.handleChildRef = function (t) {
          this.decoratedComponentInstance = t, this.handler.receiveComponent(t)
        }, g.prototype.getCurrentState = function () {
          var t = y(this.handlerConnector, this.handlerMonitor);
          return t
        }, g.prototype.render = function () {
          return f["default"].createElement(e, s({}, this.props, this.state, {ref: this.handleChildRef}))
        }, u(g, null, [{key: "DecoratedComponent", value: e, enumerable: !0}, {
          key: "displayName",
          value: "" + h + "(" + S + ")",
          enumerable: !0
        }, {key: "contextTypes", value: {dragDropManager: c.PropTypes.object.isRequired}, enumerable: !0}]), g
      }(c.Component)
    }

    e.__esModule = !0;
    var s = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var n in r)Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
      }, u = function () {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }

      return function (e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e
      }
    }();
    e["default"] = a;
    var c = r(5), f = n(c), l = r(15), p = r(6), d = n(p), h = r(13), g = n(h), v = r(8), y = (n(v), r(1)), m = n(y), b = r(38), D = n(b);
    t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      return t && t.__esModule ? t : {"default": t}
    }

    e.__esModule = !0;
    var o = r(80), i = n(o), a = i["default"](function () {
      return /firefox/i.test(navigator.userAgent)
    });
    e.isFirefox = a;
    var s = i["default"](function () {
      return Boolean(window.safari)
    });
    e.isSafari = s
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      return t && t.__esModule ? t : {"default": t}
    }

    function o(t, e) {
      return "string" == typeof t || "symbol" == typeof t || e && a["default"](t) && t.every(function (t) {
          return o(t, !1)
        })
    }

    e.__esModule = !0, e["default"] = o;
    var i = r(2), a = n(i);
    t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    function n(t, e) {
      return a["default"](t) ? t.some(function (t) {
        return t === e
      }) : t === e
    }

    var o = function (t) {
      return t && t.__esModule ? t : {"default": t}
    };
    e.__esModule = !0, e["default"] = n;
    var i = r(2), a = o(i);
    t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    function n(t, e, r) {
      this.fn = t, this.context = e, this.once = r || !1
    }

    function o() {
    }

    o.prototype._events = void 0, o.prototype.listeners = function (t) {
      if (!this._events || !this._events[t])return [];
      if (this._events[t].fn)return [this._events[t].fn];
      for (var e = 0, r = this._events[t].length, n = new Array(r); r > e; e++)n[e] = this._events[t][e].fn;
      return n
    }, o.prototype.emit = function (t, e, r, n, o, i) {
      if (!this._events || !this._events[t])return !1;
      var a, s, u = this._events[t], c = arguments.length;
      if ("function" == typeof u.fn) {
        switch (u.once && this.removeListener(t, u.fn, !0), c) {
          case 1:
            return u.fn.call(u.context), !0;
          case 2:
            return u.fn.call(u.context, e), !0;
          case 3:
            return u.fn.call(u.context, e, r), !0;
          case 4:
            return u.fn.call(u.context, e, r, n), !0;
          case 5:
            return u.fn.call(u.context, e, r, n, o), !0;
          case 6:
            return u.fn.call(u.context, e, r, n, o, i), !0
        }
        for (s = 1, a = new Array(c - 1); c > s; s++)a[s - 1] = arguments[s];
        u.fn.apply(u.context, a)
      } else {
        var f, l = u.length;
        for (s = 0; l > s; s++)switch (u[s].once && this.removeListener(t, u[s].fn, !0), c) {
          case 1:
            u[s].fn.call(u[s].context);
            break;
          case 2:
            u[s].fn.call(u[s].context, e);
            break;
          case 3:
            u[s].fn.call(u[s].context, e, r);
            break;
          default:
            if (!a)for (f = 1, a = new Array(c - 1); c > f; f++)a[f - 1] = arguments[f];
            u[s].fn.apply(u[s].context, a)
        }
      }
      return !0
    }, o.prototype.on = function (t, e, r) {
      var o = new n(e, r || this);
      return this._events || (this._events = {}), this._events[t] ? this._events[t].fn ? this._events[t] = [this._events[t], o] : this._events[t].push(o) : this._events[t] = o, this
    }, o.prototype.once = function (t, e, r) {
      var o = new n(e, r || this, !0);
      return this._events || (this._events = {}), this._events[t] ? this._events[t].fn ? this._events[t] = [this._events[t], o] : this._events[t].push(o) : this._events[t] = o, this
    }, o.prototype.removeListener = function (t, e, r) {
      if (!this._events || !this._events[t])return this;
      var n = this._events[t], o = [];
      if (e && (n.fn && (n.fn !== e || r && !n.once) && o.push(n), !n.fn))for (var i = 0, a = n.length; a > i; i++)(n[i].fn !== e || r && !n[i].once) && o.push(n[i]);
      return o.length ? this._events[t] = 1 === o.length ? o[0] : o : delete this._events[t], this
    }, o.prototype.removeAllListeners = function (t) {
      return this._events ? (t ? delete this._events[t] : this._events = {}, this) : this
    }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prototype.setMaxListeners = function () {
      return this
    }, o.EventEmitter = o, o.EventEmitter2 = o, o.EventEmitter3 = o, t.exports = o
  }, function (t, e, r) {
    var n = r(29), o = r(3), i = r(9), a = i(function (t, e) {
      return o(t) ? n(t, e) : []
    });
    t.exports = a
  }, function (t, e, r) {
    function n(t, e) {
      var r = t ? t.length : 0, n = [];
      if (!r)return n;
      var s = -1, u = o, c = !0, f = c && e.length >= 200 ? a(e) : null, l = e.length;
      f && (u = i, c = !1, e = f);
      t:for (; ++s < r;) {
        var p = t[s];
        if (c && p === p) {
          for (var d = l; d--;)if (e[d] === p)continue t;
          n.push(p)
        } else u(e, p, 0) < 0 && n.push(p)
      }
      return n
    }

    var o = r(18), i = r(19), a = r(20);
    t.exports = n
  }, function (t, e, r) {
    function n(t, e) {
      var r = -1, n = o, s = t.length, u = !0, c = u && s >= 200, f = c ? a() : null, l = [];
      f ? (n = i, u = !1) : (c = !1, f = e ? [] : l);
      t:for (; ++r < s;) {
        var p = t[r], d = e ? e(p, r, t) : p;
        if (u && p === p) {
          for (var h = f.length; h--;)if (f[h] === d)continue t;
          e && f.push(d), l.push(p)
        } else n(f, d, 0) < 0 && ((e || c) && f.push(d), l.push(p))
      }
      return l
    }

    var o = r(18), i = r(19), a = r(20);
    t.exports = n
  }, function (t, e, r) {
    var n = r(10), o = r(3), i = r(4), a = r(104), s = n(Object, "keys"), u = s ? function (t) {
      var e = null == t ? null : t.constructor;
      return "function" == typeof e && e.prototype === t || "function" != typeof t && o(t) ? a(t) : i(t) ? s(t) : []
    } : a;
    t.exports = u
  }, function (t, e, r) {
    function n(t) {
      if (null == t)return [];
      u(t) || (t = Object(t));
      var e = t.length;
      e = e && s(e) && (i(t) || o(t)) && e || 0;
      for (var r = t.constructor, n = -1, c = "function" == typeof r && r.prototype === t, l = Array(e), p = e > 0; ++n < e;)l[n] = n + "";
      for (var d in t)p && a(d, e) || "constructor" == d && (c || !f.call(t, d)) || l.push(d);
      return l
    }

    var o = r(22), i = r(2), a = r(21), s = r(14), u = r(4), c = Object.prototype, f = c.hasOwnProperty;
    t.exports = n
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      return t && t.__esModule ? t : {"default": t}
    }

    function o(t, e) {
      if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (t.__proto__ = e)
    }

    function a(t) {
      v["default"].apply(void 0, ["DragDropContext", "backend"].concat(c.call(arguments))), "object" == typeof t && "function" == typeof t["default"] && (t = t["default"]), h["default"]("function" == typeof t, "Expected the backend to be a function or an ES6 module exporting a default function. Read more: http://gaearon.github.io/react-dnd/docs-drag-drop-context.html");
      var e = {dragDropManager: new p.DragDropManager(t)};
      return function (t) {
        var r = t.displayName || t.name || "Component";
        return function (n) {
          function a() {
            o(this, a), null != n && n.apply(this, arguments)
          }

          return i(a, n), a.prototype.getDecoratedComponentInstance = function () {
            return this.refs.child
          }, a.prototype.getManager = function () {
            return e.dragDropManager
          }, a.prototype.getChildContext = function () {
            return e
          }, a.prototype.render = function () {
            return l["default"].createElement(t, s({}, this.props, {ref: "child"}))
          }, u(a, null, [{key: "DecoratedComponent", value: t, enumerable: !0}, {
            key: "displayName",
            value: "DragDropContext(" + r + ")",
            enumerable: !0
          }, {key: "childContextTypes", value: {dragDropManager: f.PropTypes.object.isRequired}, enumerable: !0}]), a
        }(f.Component)
      }
    }

    e.__esModule = !0;
    var s = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var n in r)Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
      }, u = function () {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }

      return function (e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e
      }
    }(), c = Array.prototype.slice;
    e["default"] = a;
    var f = r(5), l = n(f), p = r(17), d = r(1), h = n(d), g = r(12), v = n(g);
    t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      return t && t.__esModule ? t : {"default": t}
    }

    function o(t, e) {
      if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (t.__proto__ = e)
    }

    function a(t) {
      var e = void 0 === arguments[1] ? {} : arguments[1];
      return _["default"].apply(void 0, ["DragLayer", "collect[, options]"].concat(c.call(arguments))), b["default"]("function" == typeof t, 'Expected "collect" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ', "Instead, received %s. Read more: http://gaearon.github.io/react-dnd/docs-drag-layer.html", t), b["default"](y["default"](e), 'Expected "options" provided as the second argument to DragLayer to be a plain object when specified. Instead, received %s. Read more: http://gaearon.github.io/react-dnd/docs-drag-layer.html', e), function (r) {
        var n = e.arePropsEqual, a = void 0 === n ? g["default"] : n, c = r.displayName || r.name || "Component";
        return function (e) {
          function n(t, r) {
            o(this, n), e.call(this, t), this.handleChange = this.handleChange.bind(this), this.manager = r.dragDropManager, b["default"]("object" == typeof this.manager, "Could not find the drag and drop manager in the context of %s. Make sure to wrap the top-level component of your app with DragDropContext. Read more: http://gaearon.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context", c, c), this.state = this.getCurrentState()
          }

          return i(n, e), n.prototype.getDecoratedComponentInstance = function () {
            return this.refs.child
          }, n.prototype.shouldComponentUpdate = function (t, e) {
            return !a(t, this.props) || !d["default"](e, this.state)
          }, n.prototype.componentDidMount = function () {
            var t = this.manager.getMonitor();
            this.unsubscribe = t.subscribeToOffsetChange(this.handleChange)
          }, n.prototype.componentWillUnmount = function () {
            this.unsubscribe()
          }, n.prototype.handleChange = function () {
            var t = this.getCurrentState();
            d["default"](t, this.state) || this.setState(t)
          }, n.prototype.getCurrentState = function () {
            var e = this.manager.getMonitor();
            return t(e)
          }, n.prototype.render = function () {
            return l["default"].createElement(r, s({}, this.props, this.state, {ref: "child"}))
          }, u(n, null, [{key: "DecoratedComponent", value: r, enumerable: !0}, {
            key: "displayName",
            value: "DragLayer(" + c + ")",
            enumerable: !0
          }, {key: "contextTypes", value: {dragDropManager: f.PropTypes.object.isRequired}, enumerable: !0}]), n
        }(f.Component)
      }
    }

    e.__esModule = !0;
    var s = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var n in r)Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
      }, u = function () {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }

      return function (e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e
      }
    }(), c = Array.prototype.slice;
    e["default"] = a;
    var f = r(5), l = n(f), p = (r(17), r(6)), d = n(p), h = r(13), g = n(h), v = r(8), y = n(v), m = r(1), b = n(m), D = r(12), _ = n(D);
    t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      return t && t.__esModule ? t : {"default": t}
    }

    function o(t, e, r) {
      var n = void 0 === arguments[3] ? {} : arguments[3];
      h["default"].apply(void 0, ["DragSource", "type, spec, collect[, options]"].concat(i.call(arguments)));
      var o = t;
      "function" != typeof t && (f["default"](C["default"](t), 'Expected "type" provided as the first argument to DragSource to be a string, or a function that returns a string given the current props. Instead, received %s. Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', t), o = function () {
        return t
      }), f["default"](p["default"](e), 'Expected "spec" provided as the second argument to DragSource to be a plain object. Instead, received %s. Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', e);
      var a = D["default"](e);
      return f["default"]("function" == typeof r, 'Expected "collect" provided as the third argument to DragSource to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', r), f["default"](p["default"](n), 'Expected "options" provided as the fourth argument to DragSource to be a plain object when specified. Instead, received %s. Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', r), function (t) {
        return v["default"]({
          connectBackend: function (t, e) {
            return t.connectDragSource(e)
          },
          containerDisplayName: "DragSource",
          createHandler: a,
          registerHandler: m["default"],
          createMonitor: w["default"],
          createConnector: O["default"],
          DecoratedComponent: t,
          getType: o,
          collect: r,
          options: n
        })
      }
    }

    e.__esModule = !0;
    var i = Array.prototype.slice;
    e["default"] = o;
    var a = r(5), s = (n(a), r(6)), u = (n(s), r(13)), c = (n(u), r(1)), f = n(c), l = r(8), p = n(l), d = r(12), h = n(d), g = r(23), v = n(g), y = r(47), m = n(y), b = r(41), D = n(b), _ = r(42), w = n(_), S = r(40), O = n(S), x = r(25), C = n(x);
    t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      return t && t.__esModule ? t : {"default": t}
    }

    function o(t, e, r) {
      var n = void 0 === arguments[3] ? {} : arguments[3];
      h["default"].apply(void 0, ["DropTarget", "type, spec, collect[, options]"].concat(i.call(arguments)));
      var o = t;
      "function" != typeof t && (f["default"](C["default"](t, !0), 'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', t), o = function () {
        return t
      }), f["default"](p["default"](e), 'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', e);
      var a = D["default"](e);
      return f["default"]("function" == typeof r, 'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', r), f["default"](p["default"](n), 'Expected "options" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', r), function (t) {
        return v["default"]({
          connectBackend: function (t, e) {
            return t.connectDropTarget(e)
          },
          containerDisplayName: "DropTarget",
          createHandler: a,
          registerHandler: m["default"],
          createMonitor: w["default"],
          createConnector: O["default"],
          DecoratedComponent: t,
          getType: o,
          collect: r,
          options: n
        })
      }
    }

    e.__esModule = !0;
    var i = Array.prototype.slice;
    e["default"] = o;
    var a = r(5), s = (n(a), r(6)), u = (n(s), r(13)), c = (n(u), r(1)), f = n(c), l = r(8), p = n(l), d = r(12), h = n(d), g = r(23), v = n(g), y = r(48), m = n(y), b = r(44), D = n(b), _ = r(45), w = n(_), S = r(43), O = n(S), x = r(25), C = n(x);
    t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      return t && t.__esModule ? t : {"default": t}
    }

    function o(t, e) {
      if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (t.__proto__ = e)
    }

    function a(t, e, r) {
      return Object.defineProperty(t, e, {value: r, enumerable: !0, configurable: !0, writable: !0})
    }

    function s() {
      return O || (O = new Image, O.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), O
    }

    function u(t, e, r) {
      var n = e.reduce(function (e, r) {
        return e || t.getData(r)
      }, null);
      return null != n ? n : r
    }

    function c(t) {
      var e = C[t], r = e.exposeProperty, n = e.matchesTypes, s = e.getData;
      return function (t) {
        function e() {
          o(this, e), t.call(this), this.item = Object.defineProperties({}, a({}, r, {
            get: function () {
              return console.warn("Browser doesn't allow reading \"" + r + '" until the drop event.'), null
            }, configurable: !0, enumerable: !0
          }))
        }

        return i(e, t), e.prototype.mutateItemByReadingDataTransfer = function (t) {
          delete this.item[r], this.item[r] = s(t, n)
        }, e.prototype.beginDrag = function () {
          return this.item
        }, e
      }(d.DragSource)
    }

    function f(t) {
      var e = Array.prototype.slice.call(t.types || []);
      return Object.keys(C).filter(function (t) {
          var r = C[t].matchesTypes;
          return r.some(function (t) {
            return e.indexOf(t) > -1
          })
        })[0] || null
    }

    function l(t) {
      return new T(t)
    }

    e.__esModule = !0;
    var p;
    e.getEmptyImage = s, e["default"] = l;
    var d = r(17), h = r(49), g = n(h), v = r(24), y = r(50), m = r(6), b = n(m), D = r(108), _ = n(D), w = r(1), S = n(w), O = void 0, x = {
      FILE: "__NATIVE_FILE__",
      URL: "__NATIVE_URL__",
      TEXT: "__NATIVE_TEXT__"
    };
    e.NativeTypes = x;
    var C = (p = {}, a(p, x.FILE, {
      exposeProperty: "files", matchesTypes: ["Files"], getData: function (t) {
        return Array.prototype.slice.call(t.files)
      }
    }), a(p, x.URL, {
      exposeProperty: "urls", matchesTypes: ["Url", "text/uri-list"], getData: function (t, e) {
        return u(t, e, "").split("\n")
      }
    }), a(p, x.TEXT, {
      exposeProperty: "text", matchesTypes: ["Text", "text/plain"], getData: function (t, e) {
        return u(t, e, "")
      }
    }), p), T = function () {
      function t(e) {
        o(this, t), this.actions = e.getActions(), this.monitor = e.getMonitor(), this.registry = e.getRegistry(), this.sourcePreviewNodes = {}, this.sourcePreviewNodeOptions = {}, this.sourceNodes = {}, this.sourceNodeOptions = {}, this.enterLeaveCounter = new g["default"], this.getSourceClientOffset = this.getSourceClientOffset.bind(this), this.handleTopDragStart = this.handleTopDragStart.bind(this), this.handleTopDragStartCapture = this.handleTopDragStartCapture.bind(this), this.handleTopDragEndCapture = this.handleTopDragEndCapture.bind(this), this.handleTopDragEnter = this.handleTopDragEnter.bind(this), this.handleTopDragEnterCapture = this.handleTopDragEnterCapture.bind(this), this.handleTopDragLeaveCapture = this.handleTopDragLeaveCapture.bind(this), this.handleTopDragOver = this.handleTopDragOver.bind(this), this.handleTopDragOverCapture = this.handleTopDragOverCapture.bind(this), this.handleTopDrop = this.handleTopDrop.bind(this), this.handleTopDropCapture = this.handleTopDropCapture.bind(this), this.handleSelectStart = this.handleSelectStart.bind(this), this.endDragIfSourceWasRemovedFromDOM = this.endDragIfSourceWasRemovedFromDOM.bind(this)
      }

      return t.prototype.setup = function () {
        "undefined" != typeof window && (S["default"](!this.constructor.isSetUp, "Cannot have two HTML5 backends at the same time."), this.constructor.isSetUp = !0, window.addEventListener("dragstart", this.handleTopDragStart), window.addEventListener("dragstart", this.handleTopDragStartCapture, !0), window.addEventListener("dragend", this.handleTopDragEndCapture, !0), window.addEventListener("dragenter", this.handleTopDragEnter), window.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), window.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), window.addEventListener("dragover", this.handleTopDragOver), window.addEventListener("dragover", this.handleTopDragOverCapture, !0), window.addEventListener("drop", this.handleTopDrop), window.addEventListener("drop", this.handleTopDropCapture, !0))
      }, t.prototype.teardown = function () {
        "undefined" != typeof window && (this.constructor.isSetUp = !1, window.removeEventListener("dragstart", this.handleTopDragStart), window.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), window.removeEventListener("dragend", this.handleTopDragEndCapture, !0), window.removeEventListener("dragenter", this.handleTopDragEnter), window.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), window.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), window.removeEventListener("dragover", this.handleTopDragOver), window.removeEventListener("dragover", this.handleTopDragOverCapture, !0), window.removeEventListener("drop", this.handleTopDrop), window.removeEventListener("drop", this.handleTopDropCapture, !0), this.clearCurrentDragSourceNode())
      }, t.prototype.connectDragPreview = function (t, e, r) {
        var n = this;
        return this.sourcePreviewNodeOptions[t] = r, this.sourcePreviewNodes[t] = e, function () {
          delete n.sourcePreviewNodes[t], delete n.sourcePreviewNodeOptions[t]
        }
      }, t.prototype.connectDragSource = function (t, e, r) {
        var n = this;
        this.sourceNodes[t] = e, this.sourceNodeOptions[t] = r;
        var o = function (e) {
          return n.handleDragStart(e, t)
        }, i = function (e) {
          return n.handleSelectStart(e, t)
        };
        return e.setAttribute("draggable", !0),
          e.addEventListener("dragstart", o), e.addEventListener("selectstart", i), function () {
          delete n.sourceNodes[t], delete n.sourceNodeOptions[t], e.removeEventListener("dragstart", o), e.removeEventListener("selectstart", i), e.setAttribute("draggable", !1)
        }
      }, t.prototype.connectDropTarget = function (t, e) {
        var r = this, n = function (e) {
          return r.handleDragEnter(e, t)
        }, o = function (e) {
          return r.handleDragOver(e, t)
        }, i = function (e) {
          return r.handleDrop(e, t)
        };
        return e.addEventListener("dragenter", n), e.addEventListener("dragover", o), e.addEventListener("drop", i), function () {
          e.removeEventListener("dragenter", n), e.removeEventListener("dragover", o), e.removeEventListener("drop", i)
        }
      }, t.prototype.getCurrentSourceNodeOptions = function () {
        var t = this.monitor.getSourceId(), e = this.sourceNodeOptions[t];
        return _["default"](e || {}, {dropEffect: "move"})
      }, t.prototype.getCurrentDropEffect = function () {
        return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect
      }, t.prototype.getCurrentSourcePreviewNodeOptions = function () {
        var t = this.monitor.getSourceId(), e = this.sourcePreviewNodeOptions[t];
        return _["default"](e || {}, {anchorX: .5, anchorY: .5, captureDraggingState: !1})
      }, t.prototype.getSourceClientOffset = function (t) {
        return y.getElementClientOffset(this.sourceNodes[t])
      }, t.prototype.isDraggingNativeItem = function () {
        var t = this.monitor.getItemType();
        return Object.keys(x).some(function (e) {
          return x[e] === t
        })
      }, t.prototype.beginDragNativeItem = function (t) {
        this.clearCurrentDragSourceNode();
        var e = c(t);
        this.currentNativeSource = new e, this.currentNativeHandle = this.registry.addSource(t, this.currentNativeSource), this.actions.beginDrag([this.currentNativeHandle])
      }, t.prototype.endDragNativeItem = function () {
        this.actions.endDrag(), this.registry.removeSource(this.currentNativeHandle), this.currentNativeHandle = null, this.currentNativeSource = null
      }, t.prototype.endDragIfSourceWasRemovedFromDOM = function () {
        var t = this.currentDragSourceNode;
        document.body.contains(t) || (this.actions.endDrag(), this.clearCurrentDragSourceNode())
      }, t.prototype.setCurrentDragSourceNode = function (t) {
        this.clearCurrentDragSourceNode(), this.currentDragSourceNode = t, this.currentDragSourceNodeOffset = y.getElementClientOffset(t), this.currentDragSourceNodeOffsetChanged = !1, window.addEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0)
      }, t.prototype.clearCurrentDragSourceNode = function () {
        return this.currentDragSourceNode ? (this.currentDragSourceNode = null, this.currentDragSourceNodeOffset = null, this.currentDragSourceNodeOffsetChanged = !1, window.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0), !0) : !1
      }, t.prototype.checkIfCurrentDragSourceRectChanged = function () {
        var t = this.currentDragSourceNode;
        return t ? this.currentDragSourceNodeOffsetChanged ? !0 : (this.currentDragSourceNodeOffsetChanged = !b["default"](y.getElementClientOffset(t), this.currentDragSourceNodeOffset), this.currentDragSourceNodeOffsetChanged) : !1
      }, t.prototype.handleTopDragStartCapture = function () {
        this.clearCurrentDragSourceNode(), this.dragStartSourceIds = []
      }, t.prototype.handleDragStart = function (t, e) {
        this.dragStartSourceIds.unshift(e)
      }, t.prototype.handleTopDragStart = function (t) {
        var e = this, r = this.dragStartSourceIds;
        this.dragStartSourceIds = null;
        var n = y.getEventClientOffset(t);
        this.actions.beginDrag(r, {
          publishSource: !1,
          getSourceClientOffset: this.getSourceClientOffset,
          clientOffset: n
        });
        var o = t.dataTransfer, i = f(o);
        if (this.monitor.isDragging()) {
          if ("function" == typeof o.setDragImage) {
            var a = this.monitor.getSourceId(), s = this.sourceNodes[a], u = this.sourcePreviewNodes[a] || s, c = this.getCurrentSourcePreviewNodeOptions(), l = c.anchorX, p = c.anchorY, d = {
              anchorX: l,
              anchorY: p
            }, h = y.getDragPreviewOffset(s, u, n, d);
            o.setDragImage(u, h.x, h.y)
          }
          try {
            o.setData("application/json", {})
          } catch (g) {
          }
          this.setCurrentDragSourceNode(t.target);
          var v = this.getCurrentSourcePreviewNodeOptions(), m = v.captureDraggingState;
          m ? this.actions.publishDragSource() : setTimeout(function () {
            return e.actions.publishDragSource()
          })
        } else if (i)this.beginDragNativeItem(i); else {
          if (!(o.types || t.target.hasAttribute && t.target.hasAttribute("draggable")))return;
          t.preventDefault()
        }
      }, t.prototype.handleTopDragEndCapture = function () {
        this.clearCurrentDragSourceNode() && this.actions.endDrag()
      }, t.prototype.handleTopDragEnterCapture = function (t) {
        this.dragEnterTargetIds = [];
        var e = this.enterLeaveCounter.enter(t.target);
        if (e && !this.monitor.isDragging()) {
          var r = t.dataTransfer, n = f(r);
          n && this.beginDragNativeItem(n)
        }
      }, t.prototype.handleDragEnter = function (t, e) {
        this.dragEnterTargetIds.unshift(e)
      }, t.prototype.handleTopDragEnter = function (t) {
        var e = this, r = this.dragEnterTargetIds;
        if (this.dragEnterTargetIds = [], this.monitor.isDragging()) {
          v.isFirefox() || this.actions.hover(r, {clientOffset: y.getEventClientOffset(t)});
          var n = r.some(function (t) {
            return e.monitor.canDropOnTarget(t)
          });
          n && (t.preventDefault(), t.dataTransfer.dropEffect = this.getCurrentDropEffect())
        }
      }, t.prototype.handleTopDragOverCapture = function () {
        this.dragOverTargetIds = []
      }, t.prototype.handleDragOver = function (t, e) {
        this.dragOverTargetIds.unshift(e)
      }, t.prototype.handleTopDragOver = function (t) {
        var e = this, r = this.dragOverTargetIds;
        if (this.dragOverTargetIds = [], !this.monitor.isDragging())return t.preventDefault(), void(t.dataTransfer.dropEffect = "none");
        this.actions.hover(r, {clientOffset: y.getEventClientOffset(t)});
        var n = r.some(function (t) {
          return e.monitor.canDropOnTarget(t)
        });
        n ? (t.preventDefault(), t.dataTransfer.dropEffect = this.getCurrentDropEffect()) : this.isDraggingNativeItem() ? (t.preventDefault(), t.dataTransfer.dropEffect = "none") : this.checkIfCurrentDragSourceRectChanged() && (t.preventDefault(), t.dataTransfer.dropEffect = "move")
      }, t.prototype.handleTopDragLeaveCapture = function (t) {
        this.isDraggingNativeItem() && t.preventDefault();
        var e = this.enterLeaveCounter.leave(t.target);
        e && this.isDraggingNativeItem() && this.endDragNativeItem()
      }, t.prototype.handleTopDropCapture = function (t) {
        this.dropTargetIds = [], this.isDraggingNativeItem() && (t.preventDefault(), this.currentNativeSource.mutateItemByReadingDataTransfer(t.dataTransfer)), this.enterLeaveCounter.reset()
      }, t.prototype.handleDrop = function (t, e) {
        this.dropTargetIds.unshift(e)
      }, t.prototype.handleTopDrop = function (t) {
        var e = this.dropTargetIds;
        this.dropTargetIds = [], this.actions.hover(e, {clientOffset: y.getEventClientOffset(t)}), this.actions.drop(), this.isDraggingNativeItem() ? this.endDragNativeItem() : this.endDragIfSourceWasRemovedFromDOM()
      }, t.prototype.handleSelectStart = function (t) {
        t.preventDefault(), "function" == typeof t.target.dragDrop && t.target.dragDrop()
      }, t
    }()
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      return t && t.__esModule ? t : {"default": t}
    }

    function o(t, e) {
      var r = new s.CompositeDisposable, n = {};
      return Object.keys(t).forEach(function (o) {
        var i = a["default"](e, t[o]), s = i.disposable, u = i.ref;
        r.add(s), n[o] = function () {
          return u
        }
      }), {disposable: r, handlerConnector: n}
    }

    e.__esModule = !0, e["default"] = o;
    var i = r(39), a = n(i), s = r(15);
    t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      return t && t.__esModule ? t : {"default": t}
    }

    function o(t, e) {
      function r(s, l) {
        if (f.isValidElement(s)) {
          var p = s;
          return u["default"](p, function (t) {
            return r(t, l)
          })
        }
        var d = f.findDOMNode(s);
        if (d !== o || !a["default"](i, l)) {
          if (o = d, i = l, !d)return void n.setDisposable(null);
          var h = e(t, d, l);
          n.setDisposable(new c.Disposable(h))
        }
      }

      var n = new c.SerialDisposable, o = null, i = null;
      return {ref: r, disposable: n}
    }

    e.__esModule = !0, e["default"] = o;
    var i = r(6), a = n(i), s = r(51), u = n(s), c = r(15), f = r(5);
    t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      return {dragSource: t.connectDragSource.bind(t), dragPreview: t.connectDragPreview.bind(t)}
    }

    e.__esModule = !0, e["default"] = n, t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      return t && t.__esModule ? t : {"default": t}
    }

    function o(t, e) {
      if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function i(t) {
      Object.keys(t).forEach(function (e) {
        s["default"](c.indexOf(e) > -1, 'Expected the drag source specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', c.join(", "), e), s["default"]("function" == typeof t[e], "Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html", e, e, t[e])
      }), f.forEach(function (e) {
        s["default"]("function" == typeof t[e], "Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html", e, e, t[e])
      });
      var e = function () {
        function e(t) {
          o(this, e), this.monitor = t, this.props = null, this.component = null
        }

        return e.prototype.receiveProps = function (t) {
          this.props = t
        }, e.prototype.receiveComponent = function (t) {
          this.component = t
        }, e.prototype.canDrag = function () {
          return t.canDrag ? t.canDrag(this.props, this.monitor) : !0
        }, e.prototype.isDragging = function (e, r) {
          return t.isDragging ? t.isDragging(this.props, this.monitor) : r === e.getSourceId()
        }, e.prototype.beginDrag = function () {
          var e = t.beginDrag(this.props, this.monitor, this.component);
          return e
        }, e.prototype.endDrag = function () {
          t.endDrag && t.endDrag(this.props, this.monitor, this.component)
        }, e
      }();
      return function (t) {
        return new e(t)
      }
    }

    e.__esModule = !0, e["default"] = i;
    var a = r(1), s = n(a), u = r(8), c = (n(u), ["canDrag", "beginDrag", "canDrag", "isDragging", "endDrag"]), f = ["beginDrag"];
    t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      return t && t.__esModule ? t : {"default": t}
    }

    function o(t, e) {
      if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function i(t) {
      return new f(t)
    }

    e.__esModule = !0, e["default"] = i;
    var a = r(1), s = n(a), u = !1, c = !1, f = function () {
      function t(e) {
        o(this, t), this.internalMonitor = e.getMonitor()
      }

      return t.prototype.receiveHandlerId = function (t) {
        this.sourceId = t
      }, t.prototype.canDrag = function () {
        s["default"](!u, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://gaearon.github.io/react-dnd/docs-drag-source-monitor.html");
        try {
          return u = !0, this.internalMonitor.canDragSource(this.sourceId)
        } finally {
          u = !1
        }
      }, t.prototype.isDragging = function () {
        s["default"](!c, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://gaearon.github.io/react-dnd/docs-drag-source-monitor.html");
        try {
          return c = !0, this.internalMonitor.isDraggingSource(this.sourceId)
        } finally {
          c = !1
        }
      }, t.prototype.getItemType = function () {
        return this.internalMonitor.getItemType()
      }, t.prototype.getItem = function () {
        return this.internalMonitor.getItem()
      }, t.prototype.getDropResult = function () {
        return this.internalMonitor.getDropResult()
      }, t.prototype.didDrop = function () {
        return this.internalMonitor.didDrop()
      }, t.prototype.getInitialClientOffset = function () {
        return this.internalMonitor.getInitialClientOffset()
      }, t.prototype.getInitialSourceClientOffset = function () {
        return this.internalMonitor.getInitialSourceClientOffset()
      }, t.prototype.getSourceClientOffset = function () {
        return this.internalMonitor.getSourceClientOffset()
      }, t.prototype.getClientOffset = function () {
        return this.internalMonitor.getClientOffset()
      }, t.prototype.getDifferenceFromInitialOffset = function () {
        return this.internalMonitor.getDifferenceFromInitialOffset()
      }, t
    }();
    t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      return {dropTarget: t.connectDropTarget.bind(t)}
    }

    e.__esModule = !0, e["default"] = n, t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      return t && t.__esModule ? t : {"default": t}
    }

    function o(t, e) {
      if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function i(t) {
      Object.keys(t).forEach(function (e) {
        s["default"](c.indexOf(e) > -1, 'Expected the drop target specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', c.join(", "), e), s["default"]("function" == typeof t[e], "Expected %s in the drop target specification to be a function. Instead received a specification with %s: %s. Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html", e, e, t[e])
      });
      var e = function () {
        function e(t) {
          o(this, e), this.monitor = t, this.props = null, this.component = null
        }

        return e.prototype.receiveProps = function (t) {
          this.props = t
        }, e.prototype.receiveMonitor = function (t) {
          this.monitor = t
        }, e.prototype.receiveComponent = function (t) {
          this.component = t
        }, e.prototype.canDrop = function () {
          return t.canDrop ? t.canDrop(this.props, this.monitor) : !0
        }, e.prototype.hover = function () {
          t.hover && t.hover(this.props, this.monitor, this.component)
        }, e.prototype.drop = function () {
          if (t.drop) {
            var e = t.drop(this.props, this.monitor, this.component);
            return e
          }
        }, e
      }();
      return function (t) {
        return new e(t)
      }
    }

    e.__esModule = !0, e["default"] = i;
    var a = r(1), s = n(a), u = r(8), c = (n(u), ["canDrop", "hover", "drop"]);
    t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      return t && t.__esModule ? t : {"default": t}
    }

    function o(t, e) {
      if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function i(t) {
      return new c(t)
    }

    e.__esModule = !0, e["default"] = i;
    var a = r(1), s = n(a), u = !1, c = function () {
      function t(e) {
        o(this, t), this.internalMonitor = e.getMonitor()
      }

      return t.prototype.receiveHandlerId = function (t) {
        this.targetId = t
      }, t.prototype.canDrop = function () {
        s["default"](!u, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://gaearon.github.io/react-dnd/docs-drop-target-monitor.html");
        try {
          return u = !0, this.internalMonitor.canDropOnTarget(this.targetId)
        } finally {
          u = !1
        }
      }, t.prototype.isOver = function (t) {
        return this.internalMonitor.isOverTarget(this.targetId, t)
      }, t.prototype.getItemType = function () {
        return this.internalMonitor.getItemType()
      }, t.prototype.getItem = function () {
        return this.internalMonitor.getItem()
      }, t.prototype.getDropResult = function () {
        return this.internalMonitor.getDropResult()
      }, t.prototype.didDrop = function () {
        return this.internalMonitor.didDrop()
      }, t.prototype.getInitialClientOffset = function () {
        return this.internalMonitor.getInitialClientOffset()
      }, t.prototype.getInitialSourceClientOffset = function () {
        return this.internalMonitor.getInitialSourceClientOffset()
      }, t.prototype.getSourceClientOffset = function () {
        return this.internalMonitor.getSourceClientOffset()
      }, t.prototype.getClientOffset = function () {
        return this.internalMonitor.getClientOffset()
      }, t.prototype.getDifferenceFromInitialOffset = function () {
        return this.internalMonitor.getDifferenceFromInitialOffset()
      }, t
    }();
    t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      return t && t.__esModule ? t["default"] : t
    }

    e.__esModule = !0;
    var o = r(33);
    e.DragDropContext = n(o);
    var i = r(34);
    e.DragLayer = n(i);
    var a = r(35);
    e.DragSource = n(a);
    var s = r(36);
    e.DropTarget = n(s)
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      return t && t.__esModule ? t : {"default": t}
    }

    function o(t, e, r) {
      function n() {
        o.removeSource(i)
      }

      var o = r.getRegistry(), i = o.addSource(t, e);
      return {handlerId: i, unregister: n}
    }

    e.__esModule = !0, e["default"] = o;
    var i = r(1);
    n(i);
    t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      return t && t.__esModule ? t : {"default": t}
    }

    function o(t, e, r) {
      function n() {
        o.removeTarget(i)
      }

      var o = r.getRegistry(), i = o.addTarget(t, e);
      return {handlerId: i, unregister: n}
    }

    e.__esModule = !0, e["default"] = o;
    var i = r(1);
    n(i);
    t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      return t && t.__esModule ? t : {"default": t}
    }

    function o(t, e) {
      if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    e.__esModule = !0;
    var i = r(78), a = n(i), s = r(28), u = n(s), c = function () {
      function t() {
        o(this, t), this.entered = []
      }

      return t.prototype.enter = function (t) {
        var e = this.entered.length;
        return this.entered = a["default"](this.entered.filter(function (e) {
          return document.documentElement.contains(e) && (!e.contains || e.contains(t))
        }), [t]), 0 === e && this.entered.length > 0
      }, t.prototype.leave = function (t) {
        var e = this.entered.length;
        return this.entered = u["default"](this.entered.filter(function (t) {
          return document.documentElement.contains(t)
        }), t), e > 0 && 0 === this.entered.length
      }, t.prototype.reset = function () {
        this.entered = []
      }, t
    }();
    e["default"] = c, t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      return t && t.__esModule ? t : {"default": t}
    }

    function o(t) {
      if (t.nodeType !== f && (t = t.parentElement), !t)return null;
      var e = t.getBoundingClientRect(), r = e.top, n = e.left;
      return {x: n, y: r}
    }

    function i(t) {
      return {x: t.clientX, y: t.clientY}
    }

    function a(t, e, r, n) {
      var i = "IMG" === e.nodeName && (s.isFirefox() || !document.documentElement.contains(e)), a = i ? t : e, u = o(a), f = {
        x: r.x - u.x,
        y: r.y - u.y
      }, l = t.offsetWidth, p = t.offsetHeight, d = n.anchorX, h = n.anchorY, g = i ? e.width : l, v = i ? e.height : p;
      s.isSafari() && i ? (v /= window.devicePixelRatio, g /= window.devicePixelRatio) : s.isFirefox() && !i && (v *= window.devicePixelRatio, g *= window.devicePixelRatio);
      var y = c["default"]([0, .5, 1], [f.x, f.x / l * g, f.x + g - l]), m = c["default"]([0, .5, 1], [f.y, f.y / p * v, f.y + v - p]), b = y(d), D = m(h);
      return s.isSafari() && i && (D += (window.devicePixelRatio - 1) * v), {x: b, y: D}
    }

    e.__esModule = !0, e.getElementClientOffset = o, e.getEventClientOffset = i, e.getDragPreviewOffset = a;
    var s = r(24), u = r(52), c = n(u), f = 1
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      return t && t.__esModule ? t : {"default": t}
    }

    function o(t, e) {
      var r = t.ref;
      return a["default"]("string" != typeof r, "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute"), s.cloneElement(t, {
        ref: function (t) {
          e(t), r && r(t)
        }
      })
    }

    e.__esModule = !0, e["default"] = o;
    var i = r(1), a = n(i), s = r(5);
    t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    function n(t, e) {
      for (var r = t.length, n = [], o = 0; r > o; o++)n.push(o);
      n.sort(function (e, r) {
        return t[e] < t[r] ? -1 : 1
      });
      var i = t, a = e;
      t = [], e = [];
      for (var o = 0; r > o; o++)t.push(+i[n[o]]), e.push(+a[n[o]]);
      for (var s = [], u = [], c = [], f = void 0, l = void 0, o = 0; r - 1 > o; o++)f = t[o + 1] - t[o], l = e[o + 1] - e[o], u.push(f), s.push(l), c.push(l / f);
      for (var p = [c[0]], o = 0; o < u.length - 1; o++) {
        var d = c[o], h = c[o + 1];
        if (0 >= d * h)p.push(0); else {
          f = u[o];
          var g = u[o + 1], v = f + g;
          p.push(3 * v / ((v + g) / d + (v + f) / h))
        }
      }
      p.push(c[c.length - 1]);
      for (var y = [], m = [], b = void 0, o = 0; o < p.length - 1; o++) {
        b = c[o];
        var D = p[o], _ = 1 / u[o], v = D + p[o + 1] - b - b;
        y.push((b - D - v) * _), m.push(v * _ * _)
      }
      return function (r) {
        var n = t.length - 1;
        if (r === t[n])return e[n];
        for (var o = 0, i = m.length - 1, a = void 0; i >= o;) {
          a = Math.floor(.5 * (o + i));
          var s = t[a];
          if (r > s)o = a + 1; else {
            if (!(s > r))return e[a];
            i = a - 1
          }
        }
        n = Math.max(0, i);
        var u = r - t[n], c = u * u;
        return e[n] + p[n] * u + y[n] * c + m[n] * u * c
      }
    }

    e.__esModule = !0, e["default"] = n, t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    var n = function (t) {
      return t && t.__esModule ? t : {"default": t}
    }, o = function (t, e) {
      if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    };
    e.__esModule = !0;
    var i = r(16), a = n(i), s = function () {
      function t() {
        for (var e = arguments.length, r = Array(e), n = 0; e > n; n++)r[n] = arguments[n];
        o(this, t), Array.isArray(r[0]) && 1 === r.length && (r = r[0]);
        for (var i = 0; i < r.length; i++)if (!a["default"](r[i]))throw new Error("Expected a disposable");
        this.disposables = r, this.isDisposed = !1
      }

      return t.prototype.add = function (t) {
        this.isDisposed ? t.dispose() : this.disposables.push(t)
      }, t.prototype.remove = function (t) {
        if (this.isDisposed)return !1;
        var e = this.disposables.indexOf(t);
        return -1 === e ? !1 : (this.disposables.splice(e, 1), t.dispose(), !0)
      }, t.prototype.dispose = function () {
        if (!this.isDisposed) {
          for (var t = this.disposables.length, e = new Array(t), r = 0; t > r; r++)e[r] = this.disposables[r];
          this.isDisposed = !0, this.disposables = [], this.length = 0;
          for (var r = 0; t > r; r++)e[r].dispose()
        }
      }, t
    }();
    e["default"] = s, t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    var n = function (t, e) {
      if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }, o = function () {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }

      return function (e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e
      }
    }();
    e.__esModule = !0;
    var i = function () {
    }, a = function () {
      function t(e) {
        n(this, t), this.isDisposed = !1, this.action = e || i
      }

      return t.prototype.dispose = function () {
        this.isDisposed || (this.action.call(null), this.isDisposed = !0)
      }, o(t, null, [{key: "empty", enumerable: !0, value: {dispose: i}}]), t
    }();
    e["default"] = a, t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    var n = function (t) {
      return t && t.__esModule ? t : {"default": t}
    }, o = function (t, e) {
      if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    };
    e.__esModule = !0;
    var i = r(16), a = n(i), s = function () {
      function t() {
        o(this, t), this.isDisposed = !1, this.current = null
      }

      return t.prototype.getDisposable = function () {
        return this.current
      }, t.prototype.setDisposable = function () {
        var t = void 0 === arguments[0] ? null : arguments[0];
        if (null != t && !a["default"](t))throw new Error("Expected either an empty value or a valid disposable");
        var e = this.isDisposed, r = void 0;
        e || (r = this.current, this.current = t), r && r.dispose(), e && t && t.dispose()
      }, t.prototype.dispose = function () {
        if (!this.isDisposed) {
          this.isDisposed = !0;
          var t = this.current;
          this.current = null, t && t.dispose()
        }
      }, t
    }();
    e["default"] = s, t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    var n = function (t) {
      return t && t.__esModule ? t : {"default": t}
    }, o = function (t, e) {
      if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    };
    e.__esModule = !0;
    var i = r(60), a = n(i), s = r(57), u = n(s), c = r(67), f = n(c), l = function () {
      function t(e) {
        o(this, t);
        var r = new a["default"](this);
        this.flux = r, this.registry = new f["default"](r.registryActions), this.monitor = new u["default"](r, this.registry), this.backend = e(this), r.refCountStore.addListener("change", this.handleRefCountChange, this)
      }

      return t.prototype.handleRefCountChange = function () {
        var t = this.flux.refCountStore.hasRefs();
        t && !this.isSetUp ? (this.backend.setup(), this.isSetUp = !0) : !t && this.isSetUp && (this.backend.teardown(), this.isSetUp = !1)
      }, t.prototype.getMonitor = function () {
        return this.monitor
      }, t.prototype.getBackend = function () {
        return this.backend
      }, t.prototype.getRegistry = function () {
        return this.registry
      }, t.prototype.getActions = function () {
        return this.flux.dragDropActions
      }, t
    }();
    e["default"] = l, t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    var n = function (t) {
      return t && t.__esModule ? t : {"default": t}
    }, o = function (t, e) {
      if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    };
    e.__esModule = !0;
    var i = r(1), a = n(i), s = r(26), u = n(s), c = r(2), f = n(c), l = function () {
      function t(e, r) {
        o(this, t), this.dragOperationStore = e.dragOperationStore, this.dragOffsetStore = e.dragOffsetStore, this.registry = r
      }

      return t.prototype.subscribeToStateChange = function (t) {
        var e = void 0 === arguments[1] ? {} : arguments[1], r = e.handlerIds, n = void 0 === r ? null : r;
        a["default"]("function" == typeof t, "listener must be a function.");
        var o = this.dragOperationStore, i = t;
        return n && (a["default"](f["default"](n), "handlerIds, when specified, must be an array of strings."), i = function () {
          o.areDirty(n) && t()
        }), o.addListener("change", i), function () {
          o.removeListener("change", i)
        }
      }, t.prototype.subscribeToOffsetChange = function (t) {
        a["default"]("function" == typeof t, "listener must be a function.");
        var e = this.dragOffsetStore;
        return e.addListener("change", t), function () {
          e.removeListener("change", t)
        }
      }, t.prototype.canDragSource = function (t) {
        var e = this.registry.getSource(t);
        return a["default"](e, "Expected to find a valid source."), this.isDragging() ? !1 : e.canDrag(this, t)
      }, t.prototype.canDropOnTarget = function (t) {
        var e = this.registry.getTarget(t);
        if (a["default"](e, "Expected to find a valid target."), !this.isDragging() || this.didDrop())return !1;
        var r = this.registry.getTargetType(t), n = this.getItemType();
        return u["default"](r, n) && e.canDrop(this, t)
      }, t.prototype.isDragging = function () {
        return this.dragOperationStore.isDragging()
      }, t.prototype.isDraggingSource = function (t) {
        var e = this.registry.getSource(t, !0);
        if (a["default"](e, "Expected to find a valid source."), !this.isDragging() || !this.isSourcePublic())return !1;
        var r = this.registry.getSourceType(t), n = this.getItemType();
        return r !== n ? !1 : e.isDragging(this, t)
      }, t.prototype.isOverTarget = function (t) {
        var e = void 0 === arguments[1] ? {} : arguments[1], r = e.shallow, n = void 0 === r ? !1 : r;
        if (!this.isDragging())return !1;
        var o = this.registry.getTargetType(t), i = this.getItemType();
        if (!u["default"](o, i))return !1;
        var a = this.getTargetIds();
        if (!a.length)return !1;
        var s = a.indexOf(t);
        return n ? s === a.length - 1 : s > -1
      }, t.prototype.getItemType = function () {
        return this.dragOperationStore.getItemType()
      }, t.prototype.getItem = function () {
        return this.dragOperationStore.getItem()
      }, t.prototype.getSourceId = function () {
        return this.dragOperationStore.getSourceId()
      }, t.prototype.getTargetIds = function () {
        return this.dragOperationStore.getTargetIds()
      }, t.prototype.getDropResult = function () {
        return this.dragOperationStore.getDropResult()
      }, t.prototype.didDrop = function () {
        return this.dragOperationStore.didDrop()
      }, t.prototype.isSourcePublic = function () {
        return this.dragOperationStore.isSourcePublic()
      }, t.prototype.getInitialClientOffset = function () {
        return this.dragOffsetStore.getInitialClientOffset()
      }, t.prototype.getInitialSourceClientOffset = function () {
        return this.dragOffsetStore.getInitialSourceClientOffset()
      }, t.prototype.getSourceClientOffset = function () {
        return this.dragOffsetStore.getSourceClientOffset()
      }, t.prototype.getClientOffset = function () {
        return this.dragOffsetStore.getClientOffset()
      }, t.prototype.getDifferenceFromInitialOffset = function () {
        return this.dragOffsetStore.getDifferenceFromInitialOffset()
      }, t
    }();
    e["default"] = l, t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    var n = function (t, e) {
      if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    };
    e.__esModule = !0;
    var o = function () {
      function t() {
        n(this, t)
      }

      return t.prototype.canDrag = function () {
        return !0
      }, t.prototype.isDragging = function (t, e) {
        return e === t.getSourceId()
      }, t.prototype.endDrag = function () {
      }, t
    }();
    e["default"] = o, t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    var n = function (t, e) {
      if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    };
    e.__esModule = !0;
    var o = function () {
      function t() {
        n(this, t)
      }

      return t.prototype.canDrop = function () {
        return !0
      }, t.prototype.hover = function () {
      }, t.prototype.drop = function () {
      }, t
    }();
    e["default"] = o, t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    var n = function (t) {
      return t && t.__esModule ? t : {"default": t}
    }, o = function (t, e) {
      if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }, i = function (t, e) {
      if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (t.__proto__ = e)
    };
    e.__esModule = !0;
    var a = r(7), s = r(61), u = n(s), c = r(62), f = n(c), l = r(65), p = n(l), d = r(64), h = n(d), g = r(66), v = n(g), y = function (t) {
      function e(r) {
        o(this, e), t.call(this), this.dragDropActions = this.createActions("dragDropActions", u["default"], r), this.dragDropActionIds = this.getActionIds("dragDropActions"), this.registryActions = this.createActions("registryActions", f["default"]), this.registryActionIds = this.getActionIds("registryActions"), this.dragOperationStore = this.createStore("dragOperationStore", p["default"], this), this.dragOffsetStore = this.createStore("dragOffsetStore", h["default"], this), this.refCountStore = this.createStore("refCountStore", v["default"], this)
      }

      return i(e, t), e
    }(a.Flummox);
    e["default"] = y, t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    var n = function (t) {
      return t && t.__esModule ? t : {"default": t}
    }, o = function (t, e) {
      if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }, i = function (t, e) {
      if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (t.__proto__ = e)
    };
    e.__esModule = !0;
    var a = r(7), s = r(26), u = n(s), c = r(1), f = n(c), l = r(2), p = n(l), d = r(4), h = n(d), g = function (t) {
      function e(r) {
        o(this, e), t.call(this), this.manager = r
      }

      return i(e, t), e.prototype.beginDrag = function (t) {
        var e = void 0 === arguments[1] ? {} : arguments[1], r = e.publishSource, n = void 0 === r ? !0 : r, o = e.clientOffset, i = void 0 === o ? null : o, a = e.getSourceClientOffset;
        f["default"](p["default"](t), "Expected sourceIds to be an array.");
        var s = this.manager.getMonitor(), u = this.manager.getRegistry();
        f["default"](!s.isDragging(), "Cannot call beginDrag while dragging.");
        for (var c = 0; c < t.length; c++)f["default"](u.getSource(t[c]), "Expected sourceIds to be registered.");
        for (var l = null, c = t.length - 1; c >= 0; c--)if (s.canDragSource(t[c])) {
          l = t[c];
          break
        }
        if (null !== l) {
          var d = null;
          i && (f["default"]("function" == typeof a, "When clientOffset is provided, getSourceClientOffset must be a function."), d = a(l));
          var g = u.getSource(l), v = g.beginDrag(s, l);
          f["default"](h["default"](v), "Item must be an object."), u.pinSource(l);
          var y = u.getSourceType(l);
          return {itemType: y, item: v, sourceId: l, clientOffset: i, sourceClientOffset: d, isSourcePublic: n}
        }
      }, e.prototype.publishDragSource = function () {
        var t = this.manager.getMonitor();
        if (t.isDragging())return {}
      }, e.prototype.hover = function (t) {
        var e = void 0 === arguments[1] ? {} : arguments[1], r = e.clientOffset, n = void 0 === r ? null : r;
        f["default"](p["default"](t), "Expected targetIds to be an array."), t = t.slice(0);
        var o = this.manager.getMonitor(), i = this.manager.getRegistry();
        f["default"](o.isDragging(), "Cannot call hover while not dragging."), f["default"](!o.didDrop(), "Cannot call hover after drop.");
        for (var a = o.getItemType(), s = 0; s < t.length; s++) {
          var c = t[s];
          f["default"](t.lastIndexOf(c) === s, "Expected targetIds to be unique in the passed array.");
          var l = i.getTarget(c);
          f["default"](l, "Expected targetIds to be registered.");
          var d = i.getTargetType(c);
          u["default"](d, a) && l.hover(o, c)
        }
        return {targetIds: t, clientOffset: n}
      }, e.prototype.drop = function () {
        var t = this, e = this.manager.getMonitor(), r = this.manager.getRegistry();
        f["default"](e.isDragging(), "Cannot call drop while not dragging."), f["default"](!e.didDrop(), "Cannot call drop twice during one drag operation.");
        var n = this.getActionIds(), o = n.drop, i = e.getTargetIds().filter(e.canDropOnTarget, e);
        i.reverse(), i.forEach(function (n, i) {
          var a = r.getTarget(n), s = a.drop(e, n);
          f["default"]("undefined" == typeof s || h["default"](s), "Drop result must either be an object or undefined."), "undefined" == typeof s && (s = 0 === i ? {} : e.getDropResult()), t.dispatch(o, {dropResult: s})
        })
      }, e.prototype.endDrag = function () {
        var t = this.manager.getMonitor(), e = this.manager.getRegistry();
        f["default"](t.isDragging(), "Cannot call endDrag while not dragging.");
        var r = t.getSourceId(), n = e.getSource(r, !0);
        return n.endDrag(t, r), e.unpinSource(), {}
      }, e
    }(a.Actions);
    e["default"] = g, t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    var n = function (t, e) {
      if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }, o = function (t, e) {
      if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (t.__proto__ = e)
    };
    e.__esModule = !0;
    var i = r(7), a = function (t) {
      function e() {
        n(this, e), null != t && t.apply(this, arguments)
      }

      return o(e, t), e.prototype.addSource = function (t) {
        return {sourceId: t}
      }, e.prototype.addTarget = function (t) {
        return {targetId: t}
      }, e.prototype.removeSource = function (t) {
        return {sourceId: t}
      }, e.prototype.removeTarget = function (t) {
        return {targetId: t}
      }, e
    }(i.Actions);
    e["default"] = a, t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      return new u(t)
    }

    var o = function (t) {
      return t && t.__esModule ? t : {"default": t}
    }, i = function (t, e) {
      if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    };
    e.__esModule = !0, e["default"] = n;
    var a = r(112), s = o(a), u = function () {
      function t(e) {
        i(this, t), this.actions = e.getActions()
      }

      return t.prototype.setup = function () {
        this.didCallSetup = !0
      }, t.prototype.teardown = function () {
        this.didCallTeardown = !0
      }, t.prototype.connectDragSource = function () {
        return s["default"]
      }, t.prototype.connectDragPreview = function () {
        return s["default"]
      }, t.prototype.connectDropTarget = function () {
        return s["default"]
      }, t.prototype.simulateBeginDrag = function (t, e) {
        this.actions.beginDrag(t, e)
      }, t.prototype.simulatePublishDragSource = function () {
        this.actions.publishDragSource()
      }, t.prototype.simulateHover = function (t, e) {
        this.actions.hover(t, e)
      }, t.prototype.simulateDrop = function () {
        this.actions.drop()
      }, t.prototype.simulateEndDrag = function () {
        this.actions.endDrag()
      }, t
    }();
    t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    function n(t, e) {
      return t === e ? !0 : t && e && t.x === e.x && t.y === e.y
    }

    var o = function (t, e) {
      if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }, i = function (t, e) {
      if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (t.__proto__ = e)
    };
    e.__esModule = !0;
    var a = r(7), s = function (t) {
      function e(r) {
        o(this, e), t.call(this);
        var n = r.dragDropActionIds;
        this.register(n.beginDrag, this.handleBeginDrag), this.register(n.hover, this.handleHover), this.register(n.endDrag, this.handleEndDrag), this.register(n.drop, this.handleDrop), this.state = {
          initialSourceClientOffset: null,
          initialClientOffset: null,
          clientOffset: null
        }
      }

      return i(e, t), e.prototype.handleBeginDrag = function (t) {
        var e = t.clientOffset, r = t.sourceClientOffset;
        this.setState({initialClientOffset: e, initialSourceClientOffset: r, clientOffset: e})
      }, e.prototype.handleHover = function (t) {
        var e = t.clientOffset, r = this.state.clientOffset;
        n(e, r) || this.setState({clientOffset: e})
      }, e.prototype.handleEndDrag = function () {
        this.setState({initialClientOffset: null, initialSourceClientOffset: null, clientOffset: null})
      }, e.prototype.handleDrop = function () {
        this.setState({initialClientOffset: null, initialSourceClientOffset: null, clientOffset: null})
      }, e.prototype.getInitialClientOffset = function () {
        return this.state.initialClientOffset
      }, e.prototype.getInitialSourceClientOffset = function () {
        return this.state.initialSourceClientOffset
      }, e.prototype.getClientOffset = function () {
        return this.state.clientOffset
      }, e.prototype.getSourceClientOffset = function () {
        var t = this.state, e = t.clientOffset, r = t.initialClientOffset, n = t.initialSourceClientOffset;
        return e && r && n ? {x: e.x + n.x - r.x, y: e.y + n.y - r.y} : null
      }, e.prototype.getDifferenceFromInitialOffset = function () {
        var t = this.state, e = t.clientOffset, r = t.initialClientOffset;
        return e && r ? {x: e.x - r.x, y: e.y - r.y} : null
      }, e
    }(a.Store);
    e["default"] = s, t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    var n = function (t) {
      return t && t.__esModule ? t : {"default": t}
    }, o = function (t, e) {
      if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }, i = function (t, e) {
      if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (t.__proto__ = e)
    };
    e.__esModule = !0;
    var a = r(7), s = r(79), u = n(s), c = r(28), f = n(c), l = r(77), p = n(l), d = {__all__: !0}, h = function (t) {
      function e(r) {
        o(this, e), t.call(this);
        var n = r.dragDropActionIds, i = r.registryActionIds;
        this.register(n.beginDrag, this.handleBeginDrag), this.register(n.publishDragSource, this.handlePublishDragSource), this.register(n.hover, this.handleHover), this.register(n.endDrag, this.handleEndDrag), this.register(n.drop, this.handleDrop), this.register(i.removeTarget, this.handleRemoveTarget), this.dirtyHandlerIds = [], this.state = {
          itemType: null,
          item: null,
          sourceId: null,
          targetIds: [],
          dropResult: null,
          didDrop: !1,
          isSourcePublic: null
        }
      }

      return i(e, t), e.prototype.setState = function (e) {
        var r = void 0 === arguments[1] ? d : arguments[1];
        this.dirtyHandlerIds = r, t.prototype.setState.call(this, e)
      }, e.prototype.handleBeginDrag = function (t) {
        var e = t.itemType, r = t.item, n = t.sourceId, o = t.isSourcePublic;
        this.setState({itemType: e, item: r, sourceId: n, isSourcePublic: o, dropResult: null, didDrop: !1})
      }, e.prototype.handlePublishDragSource = function () {
        this.setState({isSourcePublic: !0})
      }, e.prototype.handleHover = function (t) {
        var e = t.targetIds, r = this.state.targetIds, n = u["default"](e, r), o = !1;
        if (0 === n.length) {
          for (var i = 0; i < e.length; i++)if (e[i] !== r[i]) {
            o = !0;
            break
          }
        } else o = !0;
        if (o) {
          var a = r[r.length - 1], s = e[e.length - 1];
          a !== s && (a && n.push(a), s && n.push(s)), this.setState({targetIds: e}, n)
        }
      }, e.prototype.handleRemoveTarget = function (t) {
        var e = t.targetId, r = this.state.targetIds;
        -1 !== r.indexOf(e) && this.setState({targetIds: f["default"](r, e)}, [])
      }, e.prototype.handleDrop = function (t) {
        var e = t.dropResult;
        this.setState({dropResult: e, didDrop: !0, targetIds: []})
      }, e.prototype.handleEndDrag = function () {
        this.setState({
          itemType: null,
          item: null,
          sourceId: null,
          dropResult: null,
          didDrop: !1,
          isSourcePublic: null,
          targetIds: []
        })
      }, e.prototype.isDragging = function () {
        return Boolean(this.getItemType())
      }, e.prototype.getItemType = function () {
        return this.state.itemType
      }, e.prototype.getSourceId = function () {
        return this.state.sourceId
      }, e.prototype.getTargetIds = function () {
        return this.state.targetIds.slice(0)
      }, e.prototype.getItem = function () {
        return this.state.item
      }, e.prototype.getDropResult = function () {
        return this.state.dropResult
      }, e.prototype.didDrop = function () {
        return this.state.didDrop
      }, e.prototype.isSourcePublic = function () {
        return this.state.isSourcePublic
      }, e.prototype.areDirty = function (t) {
        return this.dirtyHandlerIds === d ? !0 : p["default"](t, this.dirtyHandlerIds).length > 0
      }, e
    }(a.Store);
    e["default"] = h, t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    var n = function (t, e) {
      if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }, o = function (t, e) {
      if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (t.__proto__ = e)
    };
    e.__esModule = !0;
    var i = r(7), a = function (t) {
      function e(r) {
        n(this, e), t.call(this);
        var o = r.registryActionIds;
        this.register(o.addSource, this.addRef), this.register(o.addTarget, this.addRef), this.register(o.removeSource, this.removeRef), this.register(o.removeTarget, this.removeRef), this.state = {refCount: 0}
      }

      return o(e, t), e.prototype.addRef = function () {
        this.setState({refCount: this.state.refCount + 1})
      }, e.prototype.removeRef = function () {
        this.setState({refCount: this.state.refCount - 1})
      }, e.prototype.hasRefs = function () {
        return this.state.refCount > 0
      }, e
    }(i.Store);
    e["default"] = a, t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      l["default"]("function" == typeof t.canDrag, "Expected canDrag to be a function."), l["default"]("function" == typeof t.beginDrag, "Expected beginDrag to be a function."), l["default"]("function" == typeof t.endDrag, "Expected endDrag to be a function.")
    }

    function o(t) {
      l["default"]("function" == typeof t.canDrop, "Expected canDrop to be a function."), l["default"]("function" == typeof t.hover, "Expected hover to be a function."), l["default"]("function" == typeof t.drop, "Expected beginDrag to be a function.")
    }

    function i(t, e) {
      return e && g["default"](t) ? void t.forEach(function (t) {
        return i(t, !1)
      }) : void l["default"]("string" == typeof t || "symbol" == typeof t, e ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.")
    }

    function a(t) {
      var e = y["default"]().toString();
      switch (t) {
        case m.SOURCE:
          return "S" + e;
        case m.TARGET:
          return "T" + e;
        default:
          l["default"](!1, "Unknown role: " + t)
      }
    }

    function s(t) {
      switch (t[0]) {
        case"S":
          return m.SOURCE;
        case"T":
          return m.TARGET;
        default:
          l["default"](!1, "Cannot parse handler ID: " + t)
      }
    }

    var u = function (t) {
      return t && t.__esModule ? t : {"default": t}
    }, c = function (t, e) {
      if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    };
    e.__esModule = !0;
    var f = r(1), l = u(f), p = r(76), d = u(p), h = r(2), g = u(h), v = r(68), y = u(v), m = d["default"]({
      SOURCE: null,
      TARGET: null
    }), b = function () {
      function t(e) {
        c(this, t), this.actions = e, this.types = {}, this.handlers = {}, this.pinnedSourceId = null, this.pinnedSource = null
      }

      return t.prototype.addSource = function (t, e) {
        i(t), n(e);
        var r = this.addHandler(m.SOURCE, t, e);
        return this.actions.addSource(r), r
      }, t.prototype.addTarget = function (t, e) {
        i(t, !0), o(e);
        var r = this.addHandler(m.TARGET, t, e);
        return this.actions.addTarget(r), r
      }, t.prototype.addHandler = function (t, e, r) {
        var n = a(t);
        return this.types[n] = e, this.handlers[n] = r, n
      }, t.prototype.containsHandler = function (t) {
        var e = this;
        return Object.keys(this.handlers).some(function (r) {
          return e.handlers[r] === t
        })
      }, t.prototype.getSource = function (t, e) {
        l["default"](this.isSourceId(t), "Expected a valid source ID.");
        var r = e && t === this.pinnedSourceId, n = r ? this.pinnedSource : this.handlers[t];
        return n
      }, t.prototype.getTarget = function (t) {
        return l["default"](this.isTargetId(t), "Expected a valid target ID."), this.handlers[t]
      }, t.prototype.getSourceType = function (t) {
        return l["default"](this.isSourceId(t), "Expected a valid source ID."), this.types[t]
      }, t.prototype.getTargetType = function (t) {
        return l["default"](this.isTargetId(t), "Expected a valid target ID."), this.types[t]
      }, t.prototype.isSourceId = function (t) {
        var e = s(t);
        return e === m.SOURCE
      }, t.prototype.isTargetId = function (t) {
        var e = s(t);
        return e === m.TARGET
      }, t.prototype.removeSource = function (t) {
        l["default"](this.getSource(t), "Expected an existing source."), delete this.handlers[t], delete this.types[t], this.actions.removeSource(t)
      }, t.prototype.removeTarget = function (t) {
        l["default"](this.getTarget(t), "Expected an existing target."), delete this.handlers[t], delete this.types[t], this.actions.removeTarget(t)
      }, t.prototype.pinSource = function (t) {
        var e = this.getSource(t);
        l["default"](e, "Expected an existing source."), this.pinnedSourceId = t, this.pinnedSource = e
      }, t.prototype.unpinSource = function () {
        l["default"](this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null
      }, t
    }();
    e["default"] = b, t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    function n() {
      return o++
    }

    e.__esModule = !0, e["default"] = n;
    var o = 0;
    t.exports = e["default"]
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      return t && "function" == typeof t.then
    }

    var o = function (t) {
      return t && t.__esModule ? t["default"] : t
    }, i = function (t, e, r) {
      e && Object.defineProperties(t, e), r && Object.defineProperties(t.prototype, r)
    }, a = function (t, e) {
      if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }, s = o(r(75)), u = function () {
      function t() {
        a(this, t), this._baseId = s();
        for (var e = this._getActionMethodNames(), r = 0; r < e.length; r++) {
          var n = e[r];
          this._wrapAction(n)
        }
        this.getConstants = this.getActionIds
      }

      return i(t, null, {
        getActionIds: {
          value: function () {
            var t = this;
            return this._getActionMethodNames().reduce(function (e, r) {
              return e[r] = t[r]._id, e
            }, {})
          }, writable: !0, configurable: !0
        }, _getActionMethodNames: {
          value: function (t) {
            var e = this;
            return Object.getOwnPropertyNames(this.constructor.prototype).filter(function (t) {
              return "constructor" !== t && "function" == typeof e[t]
            })
          }, writable: !0, configurable: !0
        }, _wrapAction: {
          value: function (t) {
            var e = this, r = this[t], o = this._createActionId(t), i = function () {
              for (var i = arguments.length, a = Array(i), s = 0; i > s; s++)a[s] = arguments[s];
              var u = r.apply(e, a);
              if (n(u)) {
                var c = u;
                return e._dispatchAsync(o, c, a, t)["catch"](function (t) {
                }), c
              }
              return e._dispatch(o, u, a, t)
            };
            i._id = o, this[t] = i
          }, writable: !0, configurable: !0
        }, _createActionId: {
          value: function (t) {
            return "" + this._baseId + "-" + t
          }, writable: !0, configurable: !0
        }, _dispatch: {
          value: function (t, e, r, n) {
            return "function" == typeof this.dispatch && "undefined" != typeof e && this.dispatch(t, e, r), e
          }, writable: !0, configurable: !0
        }, _dispatchAsync: {
          value: function (t, e, r, n) {
            return "function" == typeof this.dispatchAsync ? this.dispatchAsync(t, e, r) : e
          }, writable: !0, configurable: !0
        }
      }), t
    }();
    t.exports = u
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      return "function" == typeof t ? t._id : t
    }

    var o = function (t) {
      return t && t.__esModule ? t["default"] : t
    }, i = function (t, e, r) {
      e && Object.defineProperties(t, e), r && Object.defineProperties(t.prototype, r)
    }, a = function (t, e) {
      if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (t.__proto__ = e)
    }, s = function (t, e) {
      if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }, u = o(r(27)), c = o(r(74)), f = function (t) {
      function e() {
        s(this, e), this.state = void 0, this._handlers = {}, this._asyncHandlers = {}
      }

      return a(e, t), i(e, null, {
        getState: {
          value: function () {
            return c({}, this.state)
          }, writable: !0, configurable: !0
        }, setState: {
          value: function (t) {
            "undefined" == typeof this.state && (this.state = {}), this._isHandlingDispatch ? (this._pendingState = c(this._pendingState, t), this._emitChangeAfterHandlingDispatch = !0) : (this.state = c({}, this.state, t), this.emit("change"))
          }, writable: !0, configurable: !0
        }, replaceState: {
          value: function (t) {
            "undefined" == typeof this.state && (this.state = {}), this._isHandlingDispatch ? (this._pendingState = c({}, t), this._emitChangeAfterHandlingDispatch = !0) : (this.state = c({}, t), this.emit("change"))
          }, writable: !0, configurable: !0
        }, forceUpdate: {
          value: function () {
            this._isHandlingDispatch ? this._emitChangeAfterHandlingDispatch = !0 : this.emit("change")
          }, writable: !0, configurable: !0
        }, register: {
          value: function (t, e) {
            t = n(t), "function" == typeof e && (this._handlers[t] = e.bind(this))
          }, writable: !0, configurable: !0
        }, registerAsync: {
          value: function (t, e, r, o) {
            t = n(t);
            var i = {begin: e, success: r, failure: o};
            for (var a in i)if (i.hasOwnProperty(a)) {
              var s = i[a];
              "function" == typeof s ? i[a] = s.bind(this) : delete i[a]
            }
            this._asyncHandlers[t] = i
          }, writable: !0, configurable: !0
        }, waitFor: {
          value: function (t) {
            this._waitFor(t)
          }, writable: !0, configurable: !0
        }, handler: {
          value: function (t) {
            var e = t.body, r = t.actionId, n = t.async, o = t.actionArgs, i = t.error, a = this._handlers[r], s = this._asyncHandlers[r] && this._asyncHandlers[r][n];
            if (n)switch (n) {
              case"begin":
                return void("function" == typeof s && this._performHandler.apply(this, [s].concat(o)));
              case"failure":
                return void("function" == typeof s && this._performHandler(s, i));
              case"success":
                "function" == typeof s && (a = s);
                break;
              default:
                return
            }
            "function" == typeof a && this._performHandler(a, e)
          }, writable: !0, configurable: !0
        }, _performHandler: {
          value: function (t) {
            for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; e > n; n++)r[n - 1] = arguments[n];
            this._isHandlingDispatch = !0, this._pendingState = c({}, this.state), this._emitChangeAfterHandlingDispatch = !1;
            try {
              t.apply(this, r)
            } finally {
              this._emitChangeAfterHandlingDispatch && (this.state = this._pendingState, this.emit("change")), this._isHandlingDispatch = !1, this._pendingState = {}, this._emitChangeAfterHandlingDispatch = !1
            }
          }, writable: !0, configurable: !0
        }
      }), e
    }(u);
    t.exports = f
  }, function (t, e, r) {
    t.exports.Dispatcher = r(72)
  }, function (t, e, r) {
    "use strict";
    function n() {
      this.$Dispatcher_callbacks = {}, this.$Dispatcher_isPending = {}, this.$Dispatcher_isHandled = {}, this.$Dispatcher_isDispatching = !1, this.$Dispatcher_pendingPayload = null
    }

    var o = r(73), i = 1, a = "ID_";
    n.prototype.register = function (t) {
      var e = a + i++;
      return this.$Dispatcher_callbacks[e] = t, e
    }, n.prototype.unregister = function (t) {
      o(this.$Dispatcher_callbacks[t], "Dispatcher.unregister(...): `%s` does not map to a registered callback.", t), delete this.$Dispatcher_callbacks[t]
    }, n.prototype.waitFor = function (t) {
      o(this.$Dispatcher_isDispatching, "Dispatcher.waitFor(...): Must be invoked while dispatching.");
      for (var e = 0; e < t.length; e++) {
        var r = t[e];
        this.$Dispatcher_isPending[r] ? o(this.$Dispatcher_isHandled[r], "Dispatcher.waitFor(...): Circular dependency detected while waiting for `%s`.", r) : (o(this.$Dispatcher_callbacks[r], "Dispatcher.waitFor(...): `%s` does not map to a registered callback.", r), this.$Dispatcher_invokeCallback(r))
      }
    }, n.prototype.dispatch = function (t) {
      o(!this.$Dispatcher_isDispatching, "Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch."), this.$Dispatcher_startDispatching(t);
      try {
        for (var e in this.$Dispatcher_callbacks)this.$Dispatcher_isPending[e] || this.$Dispatcher_invokeCallback(e)
      } finally {
        this.$Dispatcher_stopDispatching()
      }
    }, n.prototype.isDispatching = function () {
      return this.$Dispatcher_isDispatching
    }, n.prototype.$Dispatcher_invokeCallback = function (t) {
      this.$Dispatcher_isPending[t] = !0, this.$Dispatcher_callbacks[t](this.$Dispatcher_pendingPayload), this.$Dispatcher_isHandled[t] = !0
    }, n.prototype.$Dispatcher_startDispatching = function (t) {
      for (var e in this.$Dispatcher_callbacks)this.$Dispatcher_isPending[e] = !1, this.$Dispatcher_isHandled[e] = !1;
      this.$Dispatcher_pendingPayload = t, this.$Dispatcher_isDispatching = !0
    }, n.prototype.$Dispatcher_stopDispatching = function () {
      this.$Dispatcher_pendingPayload = null, this.$Dispatcher_isDispatching = !1
    }, t.exports = n
  }, function (t, e, r) {
    "use strict";
    var n = function (t, e, r, n, o, i, a, s) {
      if (!t) {
        var u;
        if (void 0 === e)u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
          var c = [r, n, o, i, a, s], f = 0;
          u = new Error("Invariant Violation: " + e.replace(/%s/g, function () {
              return c[f++]
            }))
        }
        throw u.framesToPop = 1, u
      }
    };
    t.exports = n
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      if (null == t)throw new TypeError("Object.assign cannot be called with null or undefined");
      return Object(t)
    }

    t.exports = Object.assign || function (t, e) {
        for (var r, o, i = n(t), a = 1; a < arguments.length; a++) {
          r = arguments[a], o = Object.keys(Object(r));
          for (var s = 0; s < o.length; s++)i[o[s]] = r[o[s]]
        }
        return i
      }
  }, function (t, e, r) {
    "use strict";
    var n = 0, o = t.exports = function (t) {
      t = t || {};
      var e = t.prefix, r = t.suffix, o = ++n * (t.multiplier || 1);
      return null == e && (e = ""), null == r && (r = ""), String(e) + o + String(r)
    };
    o.reset = function () {
      return n = 0
    }
  }, function (t, e, r) {
    "use strict";
    var n = function (t) {
      var e, r = {};
      if (!(t instanceof Object) || Array.isArray(t))throw new Error("keyMirror(...): Argument must be an object.");
      for (e in t)t.hasOwnProperty(e) && (r[e] = e);
      return r
    };
    t.exports = n
  }, function (t, e, r) {
    var n = r(18), o = r(19), i = r(20), a = r(3), s = r(9), u = s(function (t) {
      for (var e = t.length, r = e, s = Array(h), u = n, c = !0, f = []; r--;) {
        var l = t[r] = a(l = t[r]) ? l : [];
        s[r] = c && l.length >= 120 ? i(r && l) : null
      }
      var p = t[0], d = -1, h = p ? p.length : 0, g = s[0];
      t:for (; ++d < h;)if (l = p[d], (g ? o(g, l) : u(f, l, 0)) < 0) {
        for (var r = e; --r;) {
          var v = s[r];
          if ((v ? o(v, l) : u(t[r], l, 0)) < 0)continue t
        }
        g && g.push(l), f.push(l)
      }
      return f
    });
    t.exports = u
  }, function (t, e, r) {
    var n = r(87), o = r(30), i = r(9), a = i(function (t) {
      return o(n(t, !1, !0))
    });
    t.exports = a
  }, function (t, e, r) {
    function n() {
      for (var t = -1, e = arguments.length; ++t < e;) {
        var r = arguments[t];
        if (a(r))var n = n ? o(n, r).concat(o(r, n)) : r
      }
      return n ? i(n) : []
    }

    var o = r(29), i = r(30), a = r(3);
    t.exports = n
  }, function (t, e, r) {
    function n(t, e) {
      if ("function" != typeof t || e && "function" != typeof e)throw new TypeError(i);
      var r = function () {
        var n = arguments, o = e ? e.apply(this, n) : n[0], i = r.cache;
        if (i.has(o))return i.get(o);
        var a = t.apply(this, n);
        return r.cache = i.set(o, a), a
      };
      return r.cache = new n.Cache, r
    }

    var o = r(81), i = "Expected a function";
    n.Cache = o, t.exports = n
  }, function (t, e, r) {
    function n() {
      this.__data__ = {}
    }

    var o = r(99), i = r(100), a = r(101), s = r(102);
    n.prototype["delete"] = o, n.prototype.get = i, n.prototype.has = a, n.prototype.set = s, t.exports = n
  }, function (t, e, r) {
    (function (e) {
      function n(t) {
        var e = t ? t.length : 0;
        for (this.data = {hash: s(null), set: new a}; e--;)this.push(t[e])
      }

      var o = r(93), i = r(10), a = i(e, "Set"), s = i(Object, "create");
      n.prototype.push = o, t.exports = n
    }).call(e, function () {
      return this
    }())
  }, function (t, e, r) {
    function n(t, e) {
      return void 0 === t ? e : t
    }

    t.exports = n
  }, function (t, e, r) {
    function n(t, e, r) {
      for (var n = -1, i = o(e), a = i.length; ++n < a;) {
        var s = i[n], u = t[s], c = r(u, e[s], s, t, e);
        (c === c ? c === u : u !== u) && (void 0 !== u || s in t) || (t[s] = c)
      }
      return t
    }

    var o = r(31);
    t.exports = n
  }, function (t, e, r) {
    function n(t, e) {
      return null == e ? t : o(e, i(e), t)
    }

    var o = r(86), i = r(31);
    t.exports = n
  }, function (t, e, r) {
    function n(t, e, r) {
      r || (r = {});
      for (var n = -1, o = e.length; ++n < o;) {
        var i = e[n];
        r[i] = t[i]
      }
      return r
    }

    t.exports = n
  }, function (t, e, r) {
    function n(t, e, r) {
      for (var u = -1, c = t.length, f = -1, l = []; ++u < c;) {
        var p = t[u];
        if (s(p) && a(p) && (r || i(p) || o(p))) {
          e && (p = n(p, e, r));
          for (var d = -1, h = p.length; ++d < h;)l[++f] = p[d]
        } else r || (l[++f] = p)
      }
      return l
    }

    var o = r(22), i = r(2), a = r(3), s = r(11);
    t.exports = n
  }, function (t, e, r) {
    var n = r(95), o = n();
    t.exports = o
  }, function (t, e, r) {
    function n(t, e) {
      return o(t, e, i)
    }

    var o = r(88), i = r(32);
    t.exports = n
  }, function (t, e, r) {
    function n(t) {
      return function (e) {
        return null == e ? void 0 : e[t]
      }
    }

    t.exports = n
  }, function (t, e, r) {
    function n(t) {
      return "string" == typeof t ? t : null == t ? "" : t + ""
    }

    t.exports = n
  }, function (t, e, r) {
    function n(t, e, r) {
      if ("function" != typeof t)return o;
      if (void 0 === e)return t;
      switch (r) {
        case 1:
          return function (r) {
            return t.call(e, r)
          };
        case 3:
          return function (r, n, o) {
            return t.call(e, r, n, o)
          };
        case 4:
          return function (r, n, o, i) {
            return t.call(e, r, n, o, i)
          };
        case 5:
          return function (r, n, o, i, a) {
            return t.call(e, r, n, o, i, a)
          }
      }
      return function () {
        return t.apply(e, arguments)
      }
    }

    var o = r(111);
    t.exports = n
  }, function (t, e, r) {
    function n(t) {
      var e = this.data;
      "string" == typeof t || o(t) ? e.set.add(t) : e.hash[t] = !0
    }

    var o = r(4);
    t.exports = n
  }, function (t, e, r) {
    function n(t) {
      return a(function (e, r) {
        var n = -1, a = null == e ? 0 : r.length, s = a > 2 ? r[a - 2] : void 0, u = a > 2 ? r[2] : void 0, c = a > 1 ? r[a - 1] : void 0;
        for ("function" == typeof s ? (s = o(s, c, 5), a -= 2) : (s = "function" == typeof c ? c : void 0, a -= s ? 1 : 0), u && i(r[0], r[1], u) && (s = 3 > a ? void 0 : s, a = 1); ++n < a;) {
          var f = r[n];
          f && t(e, f, s)
        }
        return e
      })
    }

    var o = r(92), i = r(98), a = r(9);
    t.exports = n
  }, function (t, e, r) {
    function n(t) {
      return function (e, r, n) {
        for (var i = o(e), a = n(e), s = a.length, u = t ? s : -1; t ? u-- : ++u < s;) {
          var c = a[u];
          if (r(i[c], c, i) === !1)break
        }
        return e
      }
    }

    var o = r(105);
    t.exports = n
  }, function (t, e, r) {
    var n = r(90), o = n("length");
    t.exports = o
  }, function (t, e, r) {
    function n(t, e, r) {
      for (var n = t.length, o = e + (r ? 0 : -1); r ? o-- : ++o < n;) {
        var i = t[o];
        if (i !== i)return o
      }
      return -1
    }

    t.exports = n
  }, function (t, e, r) {
    function n(t, e, r) {
      if (!a(r))return !1;
      var n = typeof e;
      if ("number" == n ? o(r) && i(e, r.length) : "string" == n && e in r) {
        var s = r[e];
        return t === t ? t === s : s !== s
      }
      return !1
    }

    var o = r(3), i = r(21), a = r(4);
    t.exports = n
  }, function (t, e, r) {
    function n(t) {
      return this.has(t) && delete this.__data__[t]
    }

    t.exports = n
  }, function (t, e, r) {
    function n(t) {
      return "__proto__" == t ? void 0 : this.__data__[t]
    }

    t.exports = n
  }, function (t, e, r) {
    function n(t) {
      return "__proto__" != t && i.call(this.__data__, t)
    }

    var o = Object.prototype, i = o.hasOwnProperty;
    t.exports = n
  }, function (t, e, r) {
    function n(t, e) {
      return "__proto__" != t && (this.__data__[t] = e), this
    }

    t.exports = n
  }, function (t, e, r) {
    function n(t) {
      var e;
      if (!i(t) || c.call(t) != a || !u.call(t, "constructor") && (e = t.constructor, "function" == typeof e && !(e instanceof e)))return !1;
      var r;
      return o(t, function (t, e) {
        r = e
      }), void 0 === r || u.call(t, r)
    }

    var o = r(89), i = r(11), a = "[object Object]", s = Object.prototype, u = s.hasOwnProperty, c = s.toString;
    t.exports = n
  }, function (t, e, r) {
    function n(t) {
      for (var e = u(t), r = e.length, n = r && t.length, c = !!n && s(n) && (i(t) || o(t)), l = -1, p = []; ++l < r;) {
        var d = e[l];
        (c && a(d, n) || f.call(t, d)) && p.push(d)
      }
      return p
    }

    var o = r(22), i = r(2), a = r(21), s = r(14), u = r(32), c = Object.prototype, f = c.hasOwnProperty;
    t.exports = n
  }, function (t, e, r) {
    function n(t) {
      return o(t) ? t : Object(t)
    }

    var o = r(4);
    t.exports = n
  }, function (t, e, r) {
    function n(t) {
      return null == t ? !1 : l.call(t) == a ? p.test(c.call(t)) : i(t) && s.test(t)
    }

    var o = r(109), i = r(11), a = "[object Function]", s = /^\[object .+?Constructor\]$/, u = Object.prototype, c = Function.prototype.toString, f = u.hasOwnProperty, l = u.toString, p = RegExp("^" + o(c.call(f)).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = n
  }, function (t, e, r) {
    var n = r(84), o = r(85), i = r(94), a = i(function (t, e, r) {
      return r ? n(t, e, r) : o(t, e)
    });
    t.exports = a
  }, function (t, e, r) {
    var n = r(107), o = r(83), i = r(9), a = i(function (t) {
      var e = t[0];
      return null == e ? e : (t.push(o), n.apply(void 0, t))
    });
    t.exports = a
  }, function (t, e, r) {
    function n(t) {
      return t = o(t), t && a.test(t) ? t.replace(i, "\\$&") : t
    }

    var o = r(91), i = /[.*+?^${}()|[\]\/\\]/g, a = RegExp(i.source);
    t.exports = n
  }, function (t, e, r) {
    function n(t) {
      return function () {
        return t
      }
    }

    t.exports = n
  }, function (t, e, r) {
    function n(t) {
      return t
    }

    t.exports = n
  }, function (t, e, r) {
    function n() {
    }

    t.exports = n
  }])
});
