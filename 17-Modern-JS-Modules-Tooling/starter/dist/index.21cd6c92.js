!function() {
  function t(t, r, e, n) {
    Object.defineProperty(t, r, { get: e, set: n, enumerable: !0, configurable: !0 });
  }

  var r = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {},
    e = {}, n = {}, o = r.parcelRequire7e89;

  function a(t, r, e, n, o, a, i) {
    try {
      var c = t[a](i), u = c.value;
    } catch (t) {
      return void e(t);
    }
    c.done ? r(u) : Promise.resolve(u).then(n, o);
  }

  function i(t, r) {
    if (!(t instanceof r)) throw new TypeError('Cannot call a class as a function');
  }

  function c(t, r, e) {
    if (!r.has(t)) throw new TypeError('attempted to ' + e + ' private field on non-instance');
    return r.get(t);
  }

  function u(t, r) {
    return r.get ? r.get.call(t) : r.value;
  }

  function f(t, r) {
    return u(t, c(t, r, 'get'));
  }

  function l(t, r) {
    if (r.has(t)) throw new TypeError('Cannot initialize the same private elements twice on an object');
  }

  function s(t, r, e) {
    l(t, r), r.set(t, e);
  }

  function v(t) {
    return t && t.constructor === Symbol ? 'symbol' : typeof t;
  }

  null == o && ((o = function(t) {
    if (t in e) return e[t].exports;
    if (t in n) {
      var r = n[t];
      delete n[t];
      var o = { id: t, exports: {} };
      return e[t] = o, r.call(o.exports, o, o.exports), o.exports;
    }
    var a = new Error('Cannot find module \'' + t + '\'');
    throw a.code = 'MODULE_NOT_FOUND', a;
  }).register = function(t, r) {
    n[t] = r;
  }, r.parcelRequire7e89 = o), o.register('SGfUu', (function(r, e) {
    t(r.exports, 'default', (function() {
      return f;
    }), (function(t) {
      return f = t;
    }));
    var n = o('26Anr'), a = o('hLJSc'), i = e && !e.nodeType && e, c = i && r && !r.nodeType && r,
      u = c && c.exports === i ? n.default.Buffer : void 0, f = (u ? u.isBuffer : void 0) || a.default;
  })), o.register('26Anr', (function(r, e) {
    t(r.exports, 'default', (function() {
      return i;
    }));
    var n = o('cdarw'), a = 'object' == typeof self && self && self.Object === Object && self,
      i = n.default || a || Function('return this')();
  })), o.register('cdarw', (function(e, n) {
    t(e.exports, 'default', (function() {
      return o;
    }));
    var o = 'object' == typeof r && r && r.Object === Object && r;
  })), o.register('hLJSc', (function(r, e) {
    t(r.exports, 'default', (function() {
      return n;
    }));
    var n = function() {
      return !1;
    };
  })), o.register('8nDQ8', (function(r, e) {
    t(r.exports, 'default', (function() {
      return u;
    }), (function(t) {
      return u = t;
    }));
    var n = o('cdarw'), a = e && !e.nodeType && e, i = a && r && !r.nodeType && r,
      c = i && i.exports === a && n.default.process, u = function() {
        try {
          var t = i && i.require && i.require('util').types;
          return t || c && c.binding && c.binding('util');
        } catch (t) {
        }
      }();
  })), o.register('5Oinc', (function(r, e) {
    t(r.exports, 'default', (function() {
      return f;
    }), (function(t) {
      return f = t;
    }));
    var n = o('26Anr'), a = e && !e.nodeType && e, i = a && r && !r.nodeType && r,
      c = i && i.exports === a ? n.default.Buffer : void 0, u = c ? c.allocUnsafe : void 0;
    var f = function(t, r) {
      if (r) return t.slice();
      var e = t.length, n = u ? u(e) : new t.constructor(e);
      return t.copy(n), n;
    };
  }));

  function p(t, r) {
    var e, n, o, a, i = {
      label: 0, sent: function() {
        if (1 & o[0]) throw o[1];
        return o[1];
      }, trys: [], ops: []
    };
    return a = {
      next: c(0),
      throw: c(1),
      return: c(2)
    }, 'function' == typeof Symbol && (a[Symbol.iterator] = function() {
      return this;
    }), a;

    function c(c) {
      return function(u) {
        return function(c) {
          if (e) throw new TypeError('Generator is already executing.');
          for (; a && (a = 0, c[0] && (i = 0)), i;) try {
            if (e = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, c[1])).done) return o;
            switch (n = 0, o && (c = [2 & c[0], o.value]), c[0]) {
              case 0:
              case 1:
                o = c;
                break;
              case 4:
                return i.label++, { value: c[1], done: !1 };
              case 5:
                i.label++, n = c[1], c = [0];
                continue;
              case 7:
                c = i.ops.pop(), i.trys.pop();
                continue;
              default:
                if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                  i = 0;
                  continue;
                }
                if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                  i.label = c[1];
                  break;
                }
                if (6 === c[0] && i.label < o[1]) {
                  i.label = o[1], o = c;
                  break;
                }
                if (o && i.label < o[2]) {
                  i.label = o[2], i.ops.push(c);
                  break;
                }
                o[2] && i.ops.pop(), i.trys.pop();
                continue;
            }
            c = r.call(t, i);
          } catch (t) {
            c = [6, t], n = 0;
          } finally {
            e = o = 0;
          }
          if (5 & c[0]) throw c[1];
          return { value: c[0] ? c[1] : void 0, done: !0 };
        }([c, u]);
      };
    }
  }

  Object.create;
  Object.create;
  var b, y, d = {}, h = function(t) {
    return t && t.Math == Math && t;
  };
  d = h('object' == typeof globalThis && globalThis) || h('object' == typeof window && window) || h('object' == typeof self && self) || h('object' == typeof r && r) || function() {
    return this;
  }() || Function('return this')();
  var g, j;
  g = !(j = function(t) {
    try {
      return !!t();
    } catch (t) {
      return !0;
    }
  })((function() {
    return 7 != Object.defineProperty({}, 1, {
      get: function() {
        return 7;
      }
    })[1];
  }));
  var w, _ = {};
  w = !j((function() {
    var t = function() {
    }.bind();
    return 'function' != typeof t || t.hasOwnProperty('prototype');
  }));
  var m, O = Function.prototype.call;
  _ = w ? O.bind(O) : function() {
    return O.apply(O, arguments);
  };
  var S = {}.propertyIsEnumerable, A = Object.getOwnPropertyDescriptor, P = A && !S.call({ 1: 2 }, 1);
  m = P ? function(t) {
    var r = A(this, t);
    return !!r && r.enumerable;
  } : S;
  var E;
  E = function(t, r) {
    return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: r };
  };
  var x, T = {}, z = {}, F = Function.prototype, I = F.call, M = w && F.bind.bind(I, I);
  z = w ? M : function(t) {
    return function() {
      return I.apply(t, arguments);
    };
  };
  var D, U = z({}.toString), k = z(''.slice);
  D = function(t) {
    return k(U(t), 8, -1);
  };
  var C = Object, L = z(''.split);
  T = j((function() {
    return !C('z').propertyIsEnumerable(0);
  })) ? function(t) {
    return 'String' == D(t) ? L(t, '') : C(t);
  } : C;
  var R, N;
  N = function(t) {
    return null == t;
  };
  var B = TypeError;
  R = function(t) {
    if (N(t)) throw B('Can\'t call method on ' + t);
    return t;
  }, x = function(t) {
    return T(R(t));
  };
  var q, G, W, $ = {}, V = {}, Q = 'object' == typeof document && document.all,
    H = (W = { all: Q, IS_HTMLDDA: void 0 === Q && void 0 !== Q }).all;
  V = W.IS_HTMLDDA ? function(t) {
    return 'function' == typeof t || t === H;
  } : function(t) {
    return 'function' == typeof t;
  };
  var J = W.all;
  $ = W.IS_HTMLDDA ? function(t) {
    return 'object' == typeof t ? null !== t : V(t) || t === J;
  } : function(t) {
    return 'object' == typeof t ? null !== t : V(t);
  };
  var X, K = {};
  X = function(t, r) {
    return arguments.length < 2 ? (e = d[t], V(e) ? e : void 0) : d[t] && d[t][r];
    var e;
  };
  var Y = {};
  Y = z({}.isPrototypeOf);
  var Z, tt, rt, et = {};
  et = 'undefined' != typeof navigator && String(navigator.userAgent) || '';
  var nt, ot, at = d.process, it = d.Deno, ct = at && at.versions || it && it.version, ut = ct && ct.v8;
  ut && (ot = (nt = ut.split('.'))[0] > 0 && nt[0] < 4 ? 1 : +(nt[0] + nt[1])), !ot && et && (!(nt = et.match(/Edge\/(\d+)/)) || nt[1] >= 74) && (nt = et.match(/Chrome\/(\d+)/)) && (ot = +nt[1]), rt = ot, Z = (tt = !!Object.getOwnPropertySymbols && !j((function() {
    var t = Symbol();
    return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && rt && rt < 41;
  }))) && !Symbol.sham && 'symbol' == v(Symbol.iterator);
  var ft = Object;
  K = Z ? function(t) {
    return 'symbol' == (void 0 === t ? 'undefined' : v(t));
  } : function(t) {
    var r = X('Symbol');
    return V(r) && Y(r.prototype, ft(t));
  };
  var lt, st, vt, pt = String;
  vt = function(t) {
    try {
      return pt(t);
    } catch (t) {
      return 'Object';
    }
  };
  var bt = TypeError;
  st = function(t) {
    if (V(t)) return t;
    throw bt(vt(t) + ' is not a function');
  }, lt = function(t, r) {
    var e = t[r];
    return N(e) ? void 0 : st(e);
  };
  var yt, dt = TypeError;
  yt = function(t, r) {
    var e, n;
    if ('string' === r && V(e = t.toString) && !$(n = _(e, t))) return n;
    if (V(e = t.valueOf) && !$(n = _(e, t))) return n;
    if ('string' !== r && V(e = t.toString) && !$(n = _(e, t))) return n;
    throw dt('Can\'t convert object to primitive value');
  };
  var ht, gt;
  var jt, wt = {}, _t = Object.defineProperty;
  jt = function(t, r) {
    try {
      _t(d, t, { value: r, configurable: !0, writable: !0 });
    } catch (e) {
      d[t] = r;
    }
    return r;
  };
  var mt = '__core-js_shared__', Ot = d[mt] || jt(mt, {});
  wt = Ot, (gt = function(t, r) {
    return wt[t] || (wt[t] = void 0 !== r ? r : {});
  })('versions', []).push({
    version: '3.30.0',
    mode: 'global',
    copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.30.0/LICENSE',
    source: 'https://github.com/zloirock/core-js'
  });
  var St, At = {}, Pt = Object;
  St = function(t) {
    return Pt(R(t));
  };
  var Et = z({}.hasOwnProperty);
  At = Object.hasOwn || function(t, r) {
    return Et(St(t), r);
  };
  var xt, Tt = 0, zt = Math.random(), Ft = z(1..toString);
  xt = function(t) {
    return 'Symbol(' + (void 0 === t ? '' : t) + ')_' + Ft(++Tt + zt, 36);
  };
  var It = d.Symbol, Mt = gt('wks'), Dt = Z ? It.for || It : It && It.withoutSetter || xt;
  ht = function(t) {
    return At(Mt, t) || (Mt[t] = tt && At(It, t) ? It[t] : Dt('Symbol.' + t)), Mt[t];
  };
  var Ut = TypeError, kt = ht('toPrimitive');
  G = function(t, r) {
    if (!$(t) || K(t)) return t;
    var e, n = lt(t, kt);
    if (n) {
      if (void 0 === r && (r = 'default'), e = _(n, t, r), !$(e) || K(e)) return e;
      throw Ut('Can\'t convert object to primitive value');
    }
    return void 0 === r && (r = 'number'), yt(t, r);
  }, q = function(t) {
    var r = G(t, 'string');
    return K(r) ? r : r + '';
  };
  var Ct, Lt, Rt = d.document, Nt = $(Rt) && $(Rt.createElement);
  Lt = function(t) {
    return Nt ? Rt.createElement(t) : {};
  }, Ct = !g && !j((function() {
    return 7 != Object.defineProperty(Lt('div'), 'a', {
      get: function() {
        return 7;
      }
    }).a;
  }));
  var Bt, qt, Gt = Object.getOwnPropertyDescriptor, Wt = y = g ? Gt : function(t, r) {
    if (t = x(t), r = q(r), Ct) try {
      return Gt(t, r);
    } catch (t) {
    }
    if (At(t, r)) return E(!_(m, t, r), t[r]);
  }, $t = {};
  qt = g && j((function() {
    return 42 != Object.defineProperty((function() {
    }), 'prototype', { value: 42, writable: !1 }).prototype;
  }));
  var Vt, Qt = String, Ht = TypeError;
  Vt = function(t) {
    if ($(t)) return t;
    throw Ht(Qt(t) + ' is not an object');
  };
  var Jt = TypeError, Xt = Object.defineProperty, Kt = Object.getOwnPropertyDescriptor, Yt = 'enumerable',
    Zt = 'configurable', tr = 'writable';
  Bt = g ? qt ? function(t, r, e) {
    if (Vt(t), r = q(r), Vt(e), 'function' == typeof t && 'prototype' === r && 'value' in e && tr in e && !e[tr]) {
      var n = Kt(t, r);
      n && n[tr] && (t[r] = e.value, e = {
        configurable: Zt in e ? e[Zt] : n[Zt],
        enumerable: Yt in e ? e[Yt] : n[Yt],
        writable: !1
      });
    }
    return Xt(t, r, e);
  } : Xt : function(t, r, e) {
    if (Vt(t), r = q(r), Vt(e), Ct) try {
      return Xt(t, r, e);
    } catch (t) {
    }
    if ('get' in e || 'set' in e) throw Jt('Accessors not supported');
    return 'value' in e && (t[r] = e.value), t;
  }, $t = g ? function(t, r, e) {
    return Bt(t, r, E(1, e));
  } : function(t, r, e) {
    return t[r] = e, t;
  };
  var rr, er, nr = Function.prototype, or = g && Object.getOwnPropertyDescriptor, ar = At(nr, 'name'), ir = {
    EXISTS: ar, PROPER: ar && 'something' === function() {
    }.name, CONFIGURABLE: ar && (!g || g && or(nr, 'name').configurable)
  }.CONFIGURABLE, cr = {}, ur = z(Function.toString);
  V(wt.inspectSource) || (wt.inspectSource = function(t) {
    return ur(t);
  }), cr = wt.inspectSource;
  var fr, lr, sr = d.WeakMap;
  lr = V(sr) && /native code/.test(String(sr));
  var vr, pr = gt('keys');
  vr = function(t) {
    return pr[t] || (pr[t] = xt(t));
  };
  var br = {};
  br = {};
  var yr, dr, hr, gr = 'Object already initialized', jr = d.TypeError, wr = d.WeakMap;
  if (lr || wt.state) {
    var _r = wt.state || (wt.state = new wr);
    _r.get = _r.get, _r.has = _r.has, _r.set = _r.set, yr = function(t, r) {
      if (_r.has(t)) throw jr(gr);
      return r.facade = t, _r.set(t, r), r;
    }, dr = function(t) {
      return _r.get(t) || {};
    }, hr = function(t) {
      return _r.has(t);
    };
  } else {
    var mr = vr('state');
    br[mr] = !0, yr = function(t, r) {
      if (At(t, mr)) throw jr(gr);
      return r.facade = t, $t(t, mr, r), r;
    }, dr = function(t) {
      return At(t, mr) ? t[mr] : {};
    }, hr = function(t) {
      return At(t, mr);
    };
  }
  var Or = (fr = {
      set: yr, get: dr, has: hr, enforce: function(t) {
        return hr(t) ? dr(t) : yr(t, {});
      }, getterFor: function(t) {
        return function(r) {
          var e;
          if (!$(r) || (e = dr(r)).type !== t) throw jr('Incompatible receiver, ' + t + ' required');
          return e;
        };
      }
    }).enforce, Sr = fr.get, Ar = String, Pr = Object.defineProperty, Er = z(''.slice), xr = z(''.replace),
    Tr = z([].join), zr = g && !j((function() {
      return 8 !== Pr((function() {
      }), 'length', { value: 8 }).length;
    })), Fr = String(String).split('String'), Ir = er = function(t, r, e) {
      'Symbol(' === Er(Ar(r), 0, 7) && (r = '[' + xr(Ar(r), /^Symbol\(([^)]*)\)/, '$1') + ']'), e && e.getter && (r = 'get ' + r), e && e.setter && (r = 'set ' + r), (!At(t, 'name') || ir && t.name !== r) && (g ? Pr(t, 'name', {
        value: r,
        configurable: !0
      }) : t.name = r), zr && e && At(e, 'arity') && t.length !== e.arity && Pr(t, 'length', { value: e.arity });
      try {
        e && At(e, 'constructor') && e.constructor ? g && Pr(t, 'prototype', { writable: !1 }) : t.prototype && (t.prototype = void 0);
      } catch (t) {
      }
      var n = Or(t);
      return At(n, 'source') || (n.source = Tr(Fr, 'string' == typeof r ? r : '')), t;
    };
  Function.prototype.toString = Ir((function() {
    return V(this) && Sr(this).source || cr(this);
  }), 'toString'), rr = function(t, r, e, n) {
    n || (n = {});
    var o = n.enumerable, a = void 0 !== n.name ? n.name : r;
    if (V(e) && er(e, a, n), n.global) o ? t[r] = e : jt(r, e); else {
      try {
        n.unsafe ? t[r] && (o = !0) : delete t[r];
      } catch (t) {
      }
      o ? t[r] = e : Bt(t, r, { value: e, enumerable: !1, configurable: !n.nonConfigurable, writable: !n.nonWritable });
    }
    return t;
  };
  var Mr, Dr, Ur, kr, Cr, Lr = {}, Rr = {}, Nr = Math.ceil, Br = Math.floor;
  Rr = Math.trunc || function(t) {
    var r = +t;
    return (r > 0 ? Br : Nr)(r);
  }, Cr = function(t) {
    var r = +t;
    return r != r || 0 === r ? 0 : Rr(r);
  };
  var qr = Math.max, Gr = Math.min;
  kr = function(t, r) {
    var e = Cr(t);
    return e < 0 ? qr(e + r, 0) : Gr(e, r);
  };
  var Wr, $r, Vr = Math.min;
  $r = function(t) {
    return t > 0 ? Vr(Cr(t), 9007199254740991) : 0;
  }, Wr = function(t) {
    return $r(t.length);
  };
  var Qr = function(t) {
    return function(r, e, n) {
      var o, a = x(r), i = Wr(a), c = kr(n, i);
      if (t && e != e) {
        for (; i > c;) if ((o = a[c++]) != o) return !0;
      } else for (; i > c; c++) if ((t || c in a) && a[c] === e) return t || c || 0;
      return !t && -1;
    };
  }, Hr = { includes: Qr(!0), indexOf: Qr(!1) }.indexOf, Jr = z([].push);
  Ur = function(t, r) {
    var e, n = x(t), o = 0, a = [];
    for (e in n) !At(br, e) && At(n, e) && Jr(a, e);
    for (; r.length > o;) At(n, e = r[o++]) && (~Hr(a, e) || Jr(a, e));
    return a;
  };
  var Xr, Kr = {},
    Yr = (Kr = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf']).concat('length', 'prototype');
  Dr = Object.getOwnPropertyNames || function(t) {
    return Ur(t, Yr);
  }, Xr = Object.getOwnPropertySymbols;
  var Zr = z([].concat);
  Lr = X('Reflect', 'ownKeys') || function(t) {
    var r = Dr(Vt(t));
    return Xr ? Zr(r, Xr(t)) : r;
  }, Mr = function(t, r, e) {
    for (var n = Lr(r), o = Bt, a = y, i = 0; i < n.length; i++) {
      var c = n[i];
      At(t, c) || e && At(e, c) || o(t, c, a(r, c));
    }
  };
  var te = {}, re = /#|\.prototype\./, ee = function(t, r) {
    var e = oe[ne(t)];
    return e == ie || e != ae && (V(r) ? j(r) : !!r);
  }, ne = ee.normalize = function(t) {
    return String(t).replace(re, '.').toLowerCase();
  }, oe = ee.data = {}, ae = ee.NATIVE = 'N', ie = ee.POLYFILL = 'P';
  te = ee, b = function(t, r) {
    var e, n, o, a, i, c = t.target, u = t.global, f = t.stat;
    if (e = u ? d : f ? d[c] || jt(c, {}) : (d[c] || {}).prototype) for (n in r) {
      if (a = r[n], o = t.dontCallGetSet ? (i = Wt(e, n)) && i.value : e[n], !te(u ? n : c + (f ? '.' : '#') + n, t.forced) && void 0 !== o) {
        if ((void 0 === a ? 'undefined' : v(a)) == (void 0 === o ? 'undefined' : v(o))) continue;
        Mr(a, o);
      }
      (t.sham || o && o.sham) && $t(a, 'sham', !0), rr(e, n, a, t);
    }
  };
  var ce, ue;
  ue = function(t) {
    if ('Function' === D(t)) return z(t);
  };
  var fe = ue(ue.bind);
  ce = function(t, r) {
    return st(t), void 0 === r ? t : w ? fe(t, r) : function() {
      return t.apply(r, arguments);
    };
  };
  var le, se, ve = {};
  ve = Array.isArray || function(t) {
    return 'Array' == D(t);
  };
  var pe, be = {}, ye = {}, de = {};
  de[ht('toStringTag')] = 'z', pe = '[object z]' === String(de);
  var he = ht('toStringTag'), ge = Object, je = 'Arguments' == D(function() {
    return arguments;
  }());
  ye = pe ? D : function(t) {
    var r, e, n;
    return void 0 === t ? 'Undefined' : null === t ? 'Null' : 'string' == typeof (e = function(t, r) {
      try {
        return t[r];
      } catch (t) {
      }
    }(r = ge(t), he)) ? e : je ? D(r) : 'Object' == (n = D(r)) && V(r.callee) ? 'Arguments' : n;
  };
  var we = function() {
    }, _e = [], me = X('Reflect', 'construct'), Oe = /^\s*(?:class|function)\b/, Se = z(Oe.exec), Ae = !Oe.exec(we),
    Pe = function(t) {
      if (!V(t)) return !1;
      try {
        return me(we, _e, t), !0;
      } catch (t) {
        return !1;
      }
    }, Ee = function(t) {
      if (!V(t)) return !1;
      switch (ye(t)) {
        case'AsyncFunction':
        case'GeneratorFunction':
        case'AsyncGeneratorFunction':
          return !1;
      }
      try {
        return Ae || !!Se(Oe, cr(t));
      } catch (t) {
        return !0;
      }
    };
  Ee.sham = !0, be = !me || j((function() {
    var t;
    return Pe(Pe.call) || !Pe(Object) || !Pe((function() {
      t = !0;
    })) || t;
  })) ? Ee : Pe;
  var xe = ht('species'), Te = Array;
  se = function(t) {
    var r;
    return ve(t) && (r = t.constructor, (be(r) && (r === Te || ve(r.prototype)) || $(r) && null === (r = r[xe])) && (r = void 0)), void 0 === r ? Te : r;
  }, le = function(t, r) {
    return new (se(t))(0 === r ? 0 : r);
  };
  var ze, Fe, Ie = z([].push), Me = function(t) {
    var r = 1 == t, e = 2 == t, n = 3 == t, o = 4 == t, a = 6 == t, i = 7 == t, c = 5 == t || a;
    return function(u, f, l, s) {
      for (var v, p, b = St(u), y = T(b), d = ce(f, l), h = Wr(y), g = 0, j = s || le, w = r ? j(u, h) : e || i ? j(u, 0) : void 0; h > g; g++) if ((c || g in y) && (p = d(v = y[g], g, b), t)) if (r) w[g] = p; else if (p) switch (t) {
        case 3:
          return !0;
        case 5:
          return v;
        case 6:
          return g;
        case 2:
          Ie(w, v);
      } else switch (t) {
        case 4:
          return !1;
        case 7:
          Ie(w, v);
      }
      return a ? -1 : n || o ? o : w;
    };
  }, De = {
    forEach: Me(0),
    map: Me(1),
    filter: Me(2),
    some: Me(3),
    every: Me(4),
    find: Me(5),
    findIndex: Me(6),
    filterReject: Me(7)
  }.find, Ue = {}, ke = {};
  ke = Object.keys || function(t) {
    return Ur(t, Kr);
  }, Fe = g && !qt ? Object.defineProperties : function(t, r) {
    Vt(t);
    for (var e, n = x(r), o = ke(r), a = o.length, i = 0; a > i;) Bt(t, e = o[i++], n[e]);
    return t;
  };
  var Ce = {};
  Ce = X('document', 'documentElement');
  var Le, Re = 'prototype', Ne = 'script', Be = vr('IE_PROTO'), qe = function() {
  }, Ge = function(t) {
    return '<' + Ne + '>' + t + '</' + Ne + '>';
  }, We = function(t) {
    t.write(Ge('')), t.close();
    var r = t.parentWindow.Object;
    return t = null, r;
  }, $e = function() {
    try {
      Le = new ActiveXObject('htmlfile');
    } catch (t) {
    }
    var t, r, e;
    $e = 'undefined' != typeof document ? document.domain && Le ? We(Le) : (r = Lt('iframe'), e = 'java' + Ne + ':', r.style.display = 'none', Ce.appendChild(r), r.src = String(e), (t = r.contentWindow.document).open(), t.write(Ge('document.F=Object')), t.close(), t.F) : We(Le);
    for (var n = Kr.length; n--;) delete $e[Re][Kr[n]];
    return $e();
  };
  br[Be] = !0, Ue = Object.create || function(t, r) {
    var e;
    return null !== t ? (qe[Re] = Vt(t), e = new qe, qe[Re] = null, e[Be] = t) : e = $e(), void 0 === r ? e : Fe(e, r);
  };
  var Ve = Bt, Qe = ht('unscopables'), He = Array.prototype;
  null == He[Qe] && Ve(He, Qe, { configurable: !0, value: Ue(null) }), ze = function(t) {
    He[Qe][t] = !0;
  };
  var Je = 'find', Xe = !0;
  Je in [] && Array(1)[Je]((function() {
    Xe = !1;
  })), b({ target: 'Array', proto: !0, forced: Xe }, {
    find: function(t) {
      return De(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  }), ze(Je), console.log('Start fetching users'), console.log('Finish fetching users'), console.log('Exported!');
  var Ke = [];

  function Ye(t, r) {
    Ke.push({ product: t, quantity: r }), console.log(''.concat(r, ' ').concat(t, ' added to cart'));
  }

  var Ze = function() {
    this.__data__ = [], this.size = 0;
  };
  var tn = function(t, r) {
    return t === r || t != t && r != r;
  };
  var rn = function(t, r) {
    for (var e = t.length; e--;) if (tn(t[e][0], r)) return e;
    return -1;
  }, en = Array.prototype.splice;
  var nn = function(t) {
    var r = this.__data__, e = rn(r, t);
    return !(e < 0) && (e == r.length - 1 ? r.pop() : en.call(r, e, 1), --this.size, !0);
  };
  var on = function(t) {
    var r = this.__data__, e = rn(r, t);
    return e < 0 ? void 0 : r[e][1];
  };
  var an = function(t) {
    return rn(this.__data__, t) > -1;
  };
  var cn = function(t, r) {
    var e = this.__data__, n = rn(e, t);
    return n < 0 ? (++this.size, e.push([t, r])) : e[n][1] = r, this;
  };

  function un(t) {
    var r = -1, e = null == t ? 0 : t.length;
    for (this.clear(); ++r < e;) {
      var n = t[r];
      this.set(n[0], n[1]);
    }
  }

  un.prototype.clear = Ze, un.prototype.delete = nn, un.prototype.get = on, un.prototype.has = an, un.prototype.set = cn;
  var fn = un;
  var ln = function() {
    this.__data__ = new fn, this.size = 0;
  };
  var sn = function(t) {
    var r = this.__data__, e = r.delete(t);
    return this.size = r.size, e;
  };
  var vn = function(t) {
    return this.__data__.get(t);
  };
  var pn = function(t) {
      return this.__data__.has(t);
    }, bn = (Nn = o('26Anr')).default.Symbol, yn = Object.prototype, dn = yn.hasOwnProperty, hn = yn.toString,
    gn = bn ? bn.toStringTag : void 0;
  var jn = function(t) {
    var r = dn.call(t, gn), e = t[gn];
    try {
      t[gn] = void 0;
      var n = !0;
    } catch (t) {
    }
    var o = hn.call(t);
    return n && (r ? t[gn] = e : delete t[gn]), o;
  }, wn = Object.prototype.toString;
  var _n = function(t) {
    return wn.call(t);
  }, mn = bn ? bn.toStringTag : void 0;
  var On = function(t) {
    return null == t ? void 0 === t ? '[object Undefined]' : '[object Null]' : mn && mn in Object(t) ? jn(t) : _n(t);
  };
  var Sn = function(t) {
    var r = void 0 === t ? 'undefined' : v(t);
    return null != t && ('object' == r || 'function' == r);
  };
  var An, Pn = function(t) {
      if (!Sn(t)) return !1;
      var r = On(t);
      return '[object Function]' == r || '[object GeneratorFunction]' == r || '[object AsyncFunction]' == r || '[object Proxy]' == r;
    }, En = (Nn = o('26Anr')).default['__core-js_shared__'],
    xn = (An = /[^.]+$/.exec(En && En.keys && En.keys.IE_PROTO || '')) ? 'Symbol(src)_1.' + An : '';
  var Tn = Function.prototype.toString;
  var zn = function(t) {
      if (null != t) {
        try {
          return Tn.call(t);
        } catch (t) {
        }
        try {
          return t + '';
        } catch (t) {
        }
      }
      return '';
    }, Fn = /^\[object .+?Constructor\]$/, In = Function.prototype, Mn = Object.prototype, Dn = In.toString,
    Un = Mn.hasOwnProperty,
    kn = RegExp('^' + Dn.call(Un).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  var Cn = function(t) {
    return !(!Sn(t) || (r = t, xn && xn in r)) && (Pn(t) ? kn : Fn).test(zn(t));
    var r;
  };
  var Ln = function(t, r) {
    return null == t ? void 0 : t[r];
  };
  var Rn = function(t, r) {
    var e = Ln(t, r);
    return Cn(e) ? e : void 0;
  }, Nn = o('26Anr'), Bn = Rn(Nn.default, 'Map'), qn = Rn(Object, 'create');
  var Gn = function() {
    this.__data__ = qn ? qn(null) : {}, this.size = 0;
  };
  var Wn = function(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }, $n = Object.prototype.hasOwnProperty;
  var Vn = function(t) {
    var r = this.__data__;
    if (qn) {
      var e = r[t];
      return '__lodash_hash_undefined__' === e ? void 0 : e;
    }
    return $n.call(r, t) ? r[t] : void 0;
  }, Qn = Object.prototype.hasOwnProperty;
  var Hn = function(t) {
    var r = this.__data__;
    return qn ? void 0 !== r[t] : Qn.call(r, t);
  };
  var Jn = function(t, r) {
    var e = this.__data__;
    return this.size += this.has(t) ? 0 : 1, e[t] = qn && void 0 === r ? '__lodash_hash_undefined__' : r, this;
  };

  function Xn(t) {
    var r = -1, e = null == t ? 0 : t.length;
    for (this.clear(); ++r < e;) {
      var n = t[r];
      this.set(n[0], n[1]);
    }
  }

  Xn.prototype.clear = Gn, Xn.prototype.delete = Wn, Xn.prototype.get = Vn, Xn.prototype.has = Hn, Xn.prototype.set = Jn;
  var Kn = Xn;
  var Yn = function() {
    this.size = 0, this.__data__ = { hash: new Kn, map: new (Bn || fn), string: new Kn };
  };
  var Zn = function(t, r) {
    var e, n, o = t.__data__;
    return ('string' == (n = void 0 === (e = r) ? 'undefined' : v(e)) || 'number' == n || 'symbol' == n || 'boolean' == n ? '__proto__' !== e : null === e) ? o['string' == typeof r ? 'string' : 'hash'] : o.map;
  };
  var to = function(t) {
    var r = Zn(this, t).delete(t);
    return this.size -= r ? 1 : 0, r;
  };
  var ro = function(t) {
    return Zn(this, t).get(t);
  };
  var eo = function(t) {
    return Zn(this, t).has(t);
  };
  var no = function(t, r) {
    var e = Zn(this, t), n = e.size;
    return e.set(t, r), this.size += e.size == n ? 0 : 1, this;
  };

  function oo(t) {
    var r = -1, e = null == t ? 0 : t.length;
    for (this.clear(); ++r < e;) {
      var n = t[r];
      this.set(n[0], n[1]);
    }
  }

  oo.prototype.clear = Yn, oo.prototype.delete = to, oo.prototype.get = ro, oo.prototype.has = eo, oo.prototype.set = no;
  var ao = oo;
  var io = function(t, r) {
    var e = this.__data__;
    if (e instanceof fn) {
      var n = e.__data__;
      if (!Bn || n.length < 199) return n.push([t, r]), this.size = ++e.size, this;
      e = this.__data__ = new ao(n);
    }
    return e.set(t, r), this.size = e.size, this;
  };

  function co(t) {
    var r = this.__data__ = new fn(t);
    this.size = r.size;
  }

  co.prototype.clear = ln, co.prototype.delete = sn, co.prototype.get = vn, co.prototype.has = pn, co.prototype.set = io;
  var uo = co;
  var fo = function(t, r) {
    for (var e = -1, n = null == t ? 0 : t.length; ++e < n && !1 !== r(t[e], e, t);) ;
    return t;
  }, lo = function() {
    try {
      var t = Rn(Object, 'defineProperty');
      return t({}, '', {}), t;
    } catch (t) {
    }
  }();
  var so = function(t, r, e) {
    '__proto__' == r && lo ? lo(t, r, { configurable: !0, enumerable: !0, value: e, writable: !0 }) : t[r] = e;
  }, vo = Object.prototype.hasOwnProperty;
  var po = function(t, r, e) {
    var n = t[r];
    vo.call(t, r) && tn(n, e) && (void 0 !== e || r in t) || so(t, r, e);
  };
  var bo = function(t, r, e, n) {
    var o = !e;
    e || (e = {});
    for (var a = -1, i = r.length; ++a < i;) {
      var c = r[a], u = n ? n(e[c], t[c], c, e, t) : void 0;
      void 0 === u && (u = t[c]), o ? so(e, c, u) : po(e, c, u);
    }
    return e;
  };
  var yo = function(t, r) {
    for (var e = -1, n = Array(t); ++e < t;) n[e] = r(e);
    return n;
  };
  var ho = function(t) {
    return null != t && 'object' == typeof t;
  };
  var go = function(t) {
    return ho(t) && '[object Arguments]' == On(t);
  }, jo = Object.prototype, wo = jo.hasOwnProperty, _o = jo.propertyIsEnumerable, mo = go(function() {
    return arguments;
  }()) ? go : function(t) {
    return ho(t) && wo.call(t, 'callee') && !_o.call(t, 'callee');
  }, Oo = mo, So = Array.isArray, Ao = o('SGfUu'), Po = /^(?:0|[1-9]\d*)$/;
  var Eo = function(t, r) {
    var e = void 0 === t ? 'undefined' : v(t);
    return !!(r = null == r ? 9007199254740991 : r) && ('number' == e || 'symbol' != e && Po.test(t)) && t > -1 && t % 1 == 0 && t < r;
  };
  var xo = function(t) {
    return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991;
  }, To = {};
  To['[object Float32Array]'] = To['[object Float64Array]'] = To['[object Int8Array]'] = To['[object Int16Array]'] = To['[object Int32Array]'] = To['[object Uint8Array]'] = To['[object Uint8ClampedArray]'] = To['[object Uint16Array]'] = To['[object Uint32Array]'] = !0, To['[object Arguments]'] = To['[object Array]'] = To['[object ArrayBuffer]'] = To['[object Boolean]'] = To['[object DataView]'] = To['[object Date]'] = To['[object Error]'] = To['[object Function]'] = To['[object Map]'] = To['[object Number]'] = To['[object Object]'] = To['[object RegExp]'] = To['[object Set]'] = To['[object String]'] = To['[object WeakMap]'] = !1;
  var zo = function(t) {
    return ho(t) && xo(t.length) && !!To[On(t)];
  };
  var Fo = function(t) {
      return function(r) {
        return t(r);
      };
    }, Io = (Ga = o('8nDQ8')).default && Ga.default.isTypedArray, Mo = Io ? Fo(Io) : zo,
    Do = Object.prototype.hasOwnProperty;
  var Uo = function(t, r) {
    var e = So(t), n = !e && Oo(t), o = !e && !n && (0, Ao.default)(t), a = !e && !n && !o && Mo(t),
      i = e || n || o || a, c = i ? yo(t.length, String) : [], u = c.length;
    for (var f in t) !r && !Do.call(t, f) || i && ('length' == f || o && ('offset' == f || 'parent' == f) || a && ('buffer' == f || 'byteLength' == f || 'byteOffset' == f) || Eo(f, u)) || c.push(f);
    return c;
  }, ko = Object.prototype;
  var Co = function(t) {
    var r = t && t.constructor;
    return t === ('function' == typeof r && r.prototype || ko);
  };
  var Lo = function(t, r) {
    return function(e) {
      return t(r(e));
    };
  }, Ro = Lo(Object.keys, Object), No = Object.prototype.hasOwnProperty;
  var Bo = function(t) {
    if (!Co(t)) return Ro(t);
    var r = [];
    for (var e in Object(t)) No.call(t, e) && 'constructor' != e && r.push(e);
    return r;
  };
  var qo = function(t) {
    return null != t && xo(t.length) && !Pn(t);
  };
  var Go = function(t) {
    return qo(t) ? Uo(t) : Bo(t);
  };
  var Wo = function(t, r) {
    return t && bo(r, Go(r), t);
  };
  var $o = function(t) {
    var r = [];
    if (null != t) for (var e in Object(t)) r.push(e);
    return r;
  }, Vo = Object.prototype.hasOwnProperty;
  var Qo = function(t) {
    if (!Sn(t)) return $o(t);
    var r = Co(t), e = [];
    for (var n in t) ('constructor' != n || !r && Vo.call(t, n)) && e.push(n);
    return e;
  };
  var Ho = function(t) {
    return qo(t) ? Uo(t, !0) : Qo(t);
  };
  var Jo = function(t, r) {
    return t && bo(r, Ho(r), t);
  }, Xo = o('5Oinc');
  var Ko = function(t, r) {
    var e = -1, n = t.length;
    for (r || (r = Array(n)); ++e < n;) r[e] = t[e];
    return r;
  };
  var Yo = function(t, r) {
    for (var e = -1, n = null == t ? 0 : t.length, o = 0, a = []; ++e < n;) {
      var i = t[e];
      r(i, e, t) && (a[o++] = i);
    }
    return a;
  };
  var Zo = function() {
    return [];
  }, ta = Object.prototype.propertyIsEnumerable, ra = Object.getOwnPropertySymbols, ea = ra ? function(t) {
    return null == t ? [] : (t = Object(t), Yo(ra(t), (function(r) {
      return ta.call(t, r);
    })));
  } : Zo;
  var na = function(t, r) {
    return bo(t, ea(t), r);
  };
  var oa = function(t, r) {
    for (var e = -1, n = r.length, o = t.length; ++e < n;) t[o + e] = r[e];
    return t;
  }, aa = Lo(Object.getPrototypeOf, Object), ia = Object.getOwnPropertySymbols ? function(t) {
    for (var r = []; t;) oa(r, ea(t)), t = aa(t);
    return r;
  } : Zo;
  var ca = function(t, r) {
    return bo(t, ia(t), r);
  };
  var ua = function(t, r, e) {
    var n = r(t);
    return So(t) ? n : oa(n, e(t));
  };
  var fa = function(t) {
    return ua(t, Go, ea);
  };
  var la = function(t) {
      return ua(t, Ho, ia);
    }, sa = (Nn = o('26Anr'), Rn(Nn.default, 'DataView')), va = (Nn = o('26Anr'), Rn(Nn.default, 'Promise')),
    pa = (Nn = o('26Anr'), Rn(Nn.default, 'Set')), ba = (Nn = o('26Anr'), Rn(Nn.default, 'WeakMap')),
    ya = '[object Map]', da = '[object Promise]', ha = '[object Set]', ga = '[object WeakMap]',
    ja = '[object DataView]', wa = zn(sa), _a = zn(Bn), ma = zn(va), Oa = zn(pa), Sa = zn(ba), Aa = On;
  (sa && Aa(new sa(new ArrayBuffer(1))) != ja || Bn && Aa(new Bn) != ya || va && Aa(va.resolve()) != da || pa && Aa(new pa) != ha || ba && Aa(new ba) != ga) && (Aa = function(t) {
    var r = On(t), e = '[object Object]' == r ? t.constructor : void 0, n = e ? zn(e) : '';
    if (n) switch (n) {
      case wa:
        return ja;
      case _a:
        return ya;
      case ma:
        return da;
      case Oa:
        return ha;
      case Sa:
        return ga;
    }
    return r;
  });
  var Pa = Aa, Ea = Object.prototype.hasOwnProperty;
  var xa = function(t) {
    var r = t.length, e = new t.constructor(r);
    return r && 'string' == typeof t[0] && Ea.call(t, 'index') && (e.index = t.index, e.input = t.input), e;
  }, Ta = (Nn = o('26Anr')).default.Uint8Array;
  var za = function(t) {
    var r = new t.constructor(t.byteLength);
    return new Ta(r).set(new Ta(t)), r;
  };
  var Fa = function(t, r) {
    var e = r ? za(t.buffer) : t.buffer;
    return new t.constructor(e, t.byteOffset, t.byteLength);
  }, Ia = /\w*$/;
  var Ma = bn ? bn.prototype : void 0, Da = Ma ? Ma.valueOf : void 0;
  var Ua = function(t, r) {
    var e = r ? za(t.buffer) : t.buffer;
    return new t.constructor(e, t.byteOffset, t.length);
  };
  var ka = function(t, r, e) {
    var n, o, a, i = t.constructor;
    switch (r) {
      case'[object ArrayBuffer]':
        return za(t);
      case'[object Boolean]':
      case'[object Date]':
        return new i(+t);
      case'[object DataView]':
        return Fa(t, e);
      case'[object Float32Array]':
      case'[object Float64Array]':
      case'[object Int8Array]':
      case'[object Int16Array]':
      case'[object Int32Array]':
      case'[object Uint8Array]':
      case'[object Uint8ClampedArray]':
      case'[object Uint16Array]':
      case'[object Uint32Array]':
        return Ua(t, e);
      case'[object Map]':
      case'[object Set]':
        return new i;
      case'[object Number]':
      case'[object String]':
        return new i(t);
      case'[object RegExp]':
        return (a = new (o = t).constructor(o.source, Ia.exec(o))).lastIndex = o.lastIndex, a;
      case'[object Symbol]':
        return n = t, Da ? Object(Da.call(n)) : {};
    }
  }, Ca = Object.create, La = function() {
    function t() {
    }

    return function(r) {
      if (!Sn(r)) return {};
      if (Ca) return Ca(r);
      t.prototype = r;
      var e = new t;
      return t.prototype = void 0, e;
    };
  }();
  var Ra = function(t) {
    return 'function' != typeof t.constructor || Co(t) ? {} : La(aa(t));
  };
  Ao = o('SGfUu');
  var Na = function(t) {
    return ho(t) && '[object Map]' == Pa(t);
  }, Ba = (Ga = o('8nDQ8')).default && Ga.default.isMap, qa = Ba ? Fo(Ba) : Na;
  var Ga, Wa = function(t) {
      return ho(t) && '[object Set]' == Pa(t);
    }, $a = (Ga = o('8nDQ8')).default && Ga.default.isSet, Va = $a ? Fo($a) : Wa, Qa = '[object Arguments]',
    Ha = '[object Function]', Ja = '[object Object]', Xa = {};
  Xa[Qa] = Xa['[object Array]'] = Xa['[object ArrayBuffer]'] = Xa['[object DataView]'] = Xa['[object Boolean]'] = Xa['[object Date]'] = Xa['[object Float32Array]'] = Xa['[object Float64Array]'] = Xa['[object Int8Array]'] = Xa['[object Int16Array]'] = Xa['[object Int32Array]'] = Xa['[object Map]'] = Xa['[object Number]'] = Xa[Ja] = Xa['[object RegExp]'] = Xa['[object Set]'] = Xa['[object String]'] = Xa['[object Symbol]'] = Xa['[object Uint8Array]'] = Xa['[object Uint8ClampedArray]'] = Xa['[object Uint16Array]'] = Xa['[object Uint32Array]'] = !0, Xa['[object Error]'] = Xa[Ha] = Xa['[object WeakMap]'] = !1;
  var Ka = function t(r, e, n, o, a, i) {
    var c, u = 1 & e, f = 2 & e, l = 4 & e;
    if (n && (c = a ? n(r, o, a, i) : n(r)), void 0 !== c) return c;
    if (!Sn(r)) return r;
    var s = So(r);
    if (s) {
      if (c = xa(r), !u) return Ko(r, c);
    } else {
      var v = Pa(r), p = v == Ha || '[object GeneratorFunction]' == v;
      if ((0, Ao.default)(r)) return (0, Xo.default)(r, u);
      if (v == Ja || v == Qa || p && !a) {
        if (c = f || p ? {} : Ra(r), !u) return f ? ca(r, Jo(c, r)) : na(r, Wo(c, r));
      } else {
        if (!Xa[v]) return a ? r : {};
        c = ka(r, v, u);
      }
    }
    i || (i = new uo);
    var b = i.get(r);
    if (b) return b;
    i.set(r, c), Va(r) ? r.forEach((function(o) {
      c.add(t(o, e, n, o, r, i));
    })) : qa(r) && r.forEach((function(o, a) {
      c.set(a, t(o, e, n, a, r, i));
    }));
    var y = s ? void 0 : (l ? f ? la : fa : f ? Ho : Go)(r);
    return fo(y || r, (function(o, a) {
      y && (o = r[a = o]), po(c, a, t(o, e, n, a, r, i));
    })), c;
  };
  var Ya, Za;
  console.log('Imported!'), Ya = 'apple', Za = 10, Ke.push({
    product: Ya,
    quantity: Za
  }), console.log(''.concat(Za, ' ').concat(Ya, ' added to cart')), console.log(237), console.log(23), Ye('bread', 2), Ye('pizza', 3), Ye('cocks', 555), console.log(Ke), console.log('Start fetching');
  var ti, ri, ei = (ti = function() {
    var t;
    return p(this, (function(r) {
      switch (r.label) {
        case 0:
          return [4, fetch('https://jsonplaceholder.typicode.com/posts')];
        case 1:
          return [4, r.sent().json()];
        case 2:
          return [2, { title: (t = r.sent()).at(-1).title, text: t.at(-1).body }];
      }
    }));
  }, ri = function() {
    var t = this, r = arguments;
    return new Promise((function(e, n) {
      var o = ti.apply(t, r);

      function i(t) {
        a(o, e, n, i, c, 'next', t);
      }

      function c(t) {
        a(o, e, n, i, c, 'throw', t);
      }

      i(void 0);
    }));
  }, function() {
    return ri.apply(this, arguments);
  });
  ei();
  console.log('Code after fetching');
  var ni = {
    addToCard: function(t, r) {
      Ke.push({ product: t, quantity: r }), console.log(''.concat(r, ' ').concat(t, ' added to cart'));
    }, cart: [], totalPrise: 234, totalQuantity: 23
  };
  ni.addToCard('appless', 2), ni.addToCard('pizzas', 4);
  var oi = { cart: [{ product: 'bread', quantity: 5 }, { product: 'pizza', quantity: 1 }], user: { loggedIn: !0 } },
    ai = Object.assign({}, oi), ii = Ka(oi, 5);
  console.log(ai), oi.user.loggedIn = !1, console.log(ai), console.log(ii);
  var ci = new WeakMap, ui = new function t(r) {
    i(this, t), s(this, ci, { writable: !0, value: 'hey' }), this.name = r, console.log(f(this, ci) + ' Jonas');
  };
  console.log(ui), console.log(Ke.find((function(t) {
    return t.quantity >= 2;
  })));
}();
//# sourceMappingURL=index.21cd6c92.js.map
