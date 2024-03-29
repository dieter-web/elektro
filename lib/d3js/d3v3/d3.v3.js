d3 = (function () {
  function n(n) {
    return null != n && !isNaN(n);
  }
  function t(n) {
    return n.length;
  }
  function e(n) {
    for (var t = 1; (n * t) % 1; ) t *= 10;
    return t;
  }
  function r(n, t) {
    try {
      for (var e in t)
        Object.defineProperty(n.prototype, e, { value: t[e], enumerable: !1 });
    } catch (r) {
      n.prototype = t;
    }
  }
  function i() {}
  function u() {}
  function a(n, t, e) {
    return function () {
      var r = e.apply(t, arguments);
      return r === t ? n : r;
    };
  }
  function o(n, t) {
    if (t in n) return t;
    t = t.charAt(0).toUpperCase() + t.substring(1);
    for (var e = 0, r = Aa.length; r > e; ++e) {
      var i = Aa[e] + t;
      if (i in n) return i;
    }
  }
  function c(n) {
    for (var t = -1, e = n.length, r = []; ++t < e; ) r.push(n[t]);
    return r;
  }
  function l(n) {
    return Array.prototype.slice.call(n);
  }
  function f() {}
  function s() {}
  function h(n) {
    function t() {
      for (var t, r = e, i = -1, u = r.length; ++i < u; )
        (t = r[i].on) && t.apply(this, arguments);
      return n;
    }
    var e = [],
      r = new i();
    return (
      (t.on = function (t, i) {
        var u,
          a = r.get(t);
        return arguments.length < 2
          ? a && a.on
          : (a &&
              ((a.on = null),
              (e = e.slice(0, (u = e.indexOf(a))).concat(e.slice(u + 1))),
              r.remove(t)),
            i && e.push(r.set(t, { on: i })),
            n);
      }),
      t
    );
  }
  function g() {
    va.event.preventDefault();
  }
  function p() {
    for (var n, t = va.event; (n = t.sourceEvent); ) t = n;
    return t;
  }
  function d(n) {
    for (var t = new s(), e = 0, r = arguments.length; ++e < r; )
      t[arguments[e]] = h(t);
    return (
      (t.of = function (e, r) {
        return function (i) {
          try {
            var u = (i.sourceEvent = va.event);
            (i.target = n), (va.event = i), t[i.type].apply(e, r);
          } finally {
            va.event = u;
          }
        };
      }),
      t
    );
  }
  function m(n) {
    return Ta(n, Ha), n;
  }
  function v(n) {
    return function () {
      return za(n, this);
    };
  }
  function y(n) {
    return function () {
      return Da(n, this);
    };
  }
  function M(n, t) {
    function e() {
      this.removeAttribute(n);
    }
    function r() {
      this.removeAttributeNS(n.space, n.local);
    }
    function i() {
      this.setAttribute(n, t);
    }
    function u() {
      this.setAttributeNS(n.space, n.local, t);
    }
    function a() {
      var e = t.apply(this, arguments);
      null == e ? this.removeAttribute(n) : this.setAttribute(n, e);
    }
    function o() {
      var e = t.apply(this, arguments);
      null == e
        ? this.removeAttributeNS(n.space, n.local)
        : this.setAttributeNS(n.space, n.local, e);
    }
    return (
      (n = va.ns.qualify(n)),
      null == t
        ? n.local
          ? r
          : e
        : "function" == typeof t
        ? n.local
          ? o
          : a
        : n.local
        ? u
        : i
    );
  }
  function x(n) {
    return n.trim().replace(/\s+/g, " ");
  }
  function b(n) {
    return new RegExp("(?:^|\\s+)" + va.requote(n) + "(?:\\s+|$)", "g");
  }
  function _(n, t) {
    function e() {
      for (var e = -1; ++e < i; ) n[e](this, t);
    }
    function r() {
      for (var e = -1, r = t.apply(this, arguments); ++e < i; ) n[e](this, r);
    }
    n = n.trim().split(/\s+/).map(w);
    var i = n.length;
    return "function" == typeof t ? r : e;
  }
  function w(n) {
    var t = b(n);
    return function (e, r) {
      if ((i = e.classList)) return r ? i.add(n) : i.remove(n);
      var i = e.getAttribute("class") || "";
      r
        ? ((t.lastIndex = 0),
          t.test(i) || e.setAttribute("class", x(i + " " + n)))
        : e.setAttribute("class", x(i.replace(t, " ")));
    };
  }
  function S(n, t, e) {
    function r() {
      this.style.removeProperty(n);
    }
    function i() {
      this.style.setProperty(n, t, e);
    }
    function u() {
      var r = t.apply(this, arguments);
      null == r
        ? this.style.removeProperty(n)
        : this.style.setProperty(n, r, e);
    }
    return null == t ? r : "function" == typeof t ? u : i;
  }
  function E(n, t) {
    function e() {
      delete this[n];
    }
    function r() {
      this[n] = t;
    }
    function i() {
      var e = t.apply(this, arguments);
      null == e ? delete this[n] : (this[n] = e);
    }
    return null == t ? e : "function" == typeof t ? i : r;
  }
  function k(n) {
    return { __data__: n };
  }
  function A(n) {
    return function () {
      return La(this, n);
    };
  }
  function N(n) {
    return (
      arguments.length || (n = va.ascending),
      function (t, e) {
        return !t - !e || n(t.__data__, e.__data__);
      }
    );
  }
  function q(n, t) {
    for (var e = 0, r = n.length; r > e; e++)
      for (var i, u = n[e], a = 0, o = u.length; o > a; a++)
        (i = u[a]) && t(i, a, e);
    return n;
  }
  function T(n) {
    return Ta(n, Pa), n;
  }
  function C(n, t, e) {
    function r() {
      var t = this[a];
      t && (this.removeEventListener(n, t, t.$), delete this[a]);
    }
    function i() {
      var i = c(t, Na(arguments));
      r.call(this),
        this.addEventListener(n, (this[a] = i), (i.$ = e)),
        (i._ = t);
    }
    function u() {
      var t,
        e = new RegExp("^__on([^.]+)" + va.requote(n) + "$");
      for (var r in this)
        if ((t = r.match(e))) {
          var i = this[r];
          this.removeEventListener(t[1], i, i.$), delete this[r];
        }
    }
    var a = "__on" + n,
      o = n.indexOf("."),
      c = z;
    o > 0 && (n = n.substring(0, o));
    var l = Ra.get(n);
    return l && ((n = l), (c = D)), o ? (t ? i : r) : t ? f : u;
  }
  function z(n, t) {
    return function (e) {
      var r = va.event;
      (va.event = e), (t[0] = this.__data__);
      try {
        n.apply(this, t);
      } finally {
        va.event = r;
      }
    };
  }
  function D(n, t) {
    var e = z(n, t);
    return function (n) {
      var t = this,
        r = n.relatedTarget;
      (r && (r === t || 8 & r.compareDocumentPosition(t))) || e.call(t, n);
    };
  }
  function j(n) {
    var t = "selectstart." + n,
      e = "dragstart." + n,
      r = "click." + n,
      i = va.select(xa).on(t, g).on(e, g),
      u = Ma.style,
      a = u[Ya];
    return (
      (u[Ya] = "none"),
      function (n) {
        function o() {
          i.on(r, null);
        }
        i.on(t, null).on(e, null),
          (u[Ya] = a),
          n &&
            (i.on(
              r,
              function () {
                g(), o();
              },
              !0
            ),
            setTimeout(o, 0));
      }
    );
  }
  function L(n, t) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      if (0 > Ua && (xa.scrollX || xa.scrollY)) {
        e = va.select("body").append("svg").style(
          {
            position: "absolute",
            top: 0,
            left: 0,
            margin: 0,
            padding: 0,
            border: "none",
          },
          "important"
        );
        var i = e[0][0].getScreenCTM();
        (Ua = !(i.f || i.e)), e.remove();
      }
      return (
        Ua
          ? ((r.x = t.pageX), (r.y = t.pageY))
          : ((r.x = t.clientX), (r.y = t.clientY)),
        (r = r.matrixTransform(n.getScreenCTM().inverse())),
        [r.x, r.y]
      );
    }
    var u = n.getBoundingClientRect();
    return [t.clientX - u.left - n.clientLeft, t.clientY - u.top - n.clientTop];
  }
  function H() {}
  function F(n, t, e) {
    return new P(n, t, e);
  }
  function P(n, t, e) {
    (this.h = n), (this.s = t), (this.l = e);
  }
  function O(n, t, e) {
    function r(n) {
      return (
        n > 360 ? (n -= 360) : 0 > n && (n += 360),
        60 > n
          ? u + ((a - u) * n) / 60
          : 180 > n
          ? a
          : 240 > n
          ? u + ((a - u) * (240 - n)) / 60
          : u
      );
    }
    function i(n) {
      return Math.round(255 * r(n));
    }
    var u, a;
    return (
      (n = isNaN(n) ? 0 : (n %= 360) < 0 ? n + 360 : n),
      (t = isNaN(t) ? 0 : 0 > t ? 0 : t > 1 ? 1 : t),
      (e = 0 > e ? 0 : e > 1 ? 1 : e),
      (a = 0.5 >= e ? e * (1 + t) : e + t - e * t),
      (u = 2 * e - a),
      et(i(n + 120), i(n), i(n - 120))
    );
  }
  function R(n) {
    return n > 0 ? 1 : 0 > n ? -1 : 0;
  }
  function Y(n) {
    return n > 1 ? 0 : -1 > n ? Ba : Math.acos(n);
  }
  function U(n) {
    return n > 1 ? Ba / 2 : -1 > n ? -Ba / 2 : Math.asin(n);
  }
  function I(n) {
    return (Math.exp(n) - Math.exp(-n)) / 2;
  }
  function V(n) {
    return (Math.exp(n) + Math.exp(-n)) / 2;
  }
  function X(n) {
    return (n = Math.sin(n / 2)) * n;
  }
  function Z(n, t, e) {
    return new B(n, t, e);
  }
  function B(n, t, e) {
    (this.h = n), (this.c = t), (this.l = e);
  }
  function $(n, t, e) {
    return (
      isNaN(n) && (n = 0),
      isNaN(t) && (t = 0),
      W(e, Math.cos((n *= Ja)) * t, Math.sin(n) * t)
    );
  }
  function W(n, t, e) {
    return new J(n, t, e);
  }
  function J(n, t, e) {
    (this.l = n), (this.a = t), (this.b = e);
  }
  function G(n, t, e) {
    var r = (n + 16) / 116,
      i = r + t / 500,
      u = r - e / 200;
    return (
      (i = Q(i) * no),
      (r = Q(r) * to),
      (u = Q(u) * eo),
      et(
        tt(3.2404542 * i - 1.5371385 * r - 0.4985314 * u),
        tt(-0.969266 * i + 1.8760108 * r + 0.041556 * u),
        tt(0.0556434 * i - 0.2040259 * r + 1.0572252 * u)
      )
    );
  }
  function K(n, t, e) {
    return n > 0
      ? Z(Math.atan2(e, t) * Ga, Math.sqrt(t * t + e * e), n)
      : Z(0 / 0, 0 / 0, n);
  }
  function Q(n) {
    return n > 0.206893034 ? n * n * n : (n - 4 / 29) / 7.787037;
  }
  function nt(n) {
    return n > 0.008856 ? Math.pow(n, 1 / 3) : 7.787037 * n + 4 / 29;
  }
  function tt(n) {
    return Math.round(
      255 * (0.00304 >= n ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - 0.055)
    );
  }
  function et(n, t, e) {
    return new rt(n, t, e);
  }
  function rt(n, t, e) {
    (this.r = n), (this.g = t), (this.b = e);
  }
  function it(n) {
    return 16 > n
      ? "0" + Math.max(0, n).toString(16)
      : Math.min(255, n).toString(16);
  }
  function ut(n, t, e) {
    var r,
      i,
      u,
      a = 0,
      o = 0,
      c = 0;
    if ((r = /([a-z]+)\((.*)\)/i.exec(n)))
      switch (((i = r[2].split(",")), r[1])) {
        case "hsl":
          return e(
            parseFloat(i[0]),
            parseFloat(i[1]) / 100,
            parseFloat(i[2]) / 100
          );
        case "rgb":
          return t(lt(i[0]), lt(i[1]), lt(i[2]));
      }
    return (u = uo.get(n))
      ? t(u.r, u.g, u.b)
      : (null != n &&
          "#" === n.charAt(0) &&
          (4 === n.length
            ? ((a = n.charAt(1)),
              (a += a),
              (o = n.charAt(2)),
              (o += o),
              (c = n.charAt(3)),
              (c += c))
            : 7 === n.length &&
              ((a = n.substring(1, 3)),
              (o = n.substring(3, 5)),
              (c = n.substring(5, 7))),
          (a = parseInt(a, 16)),
          (o = parseInt(o, 16)),
          (c = parseInt(c, 16))),
        t(a, o, c));
  }
  function at(n, t, e) {
    var r,
      i,
      u = Math.min((n /= 255), (t /= 255), (e /= 255)),
      a = Math.max(n, t, e),
      o = a - u,
      c = (a + u) / 2;
    return (
      o
        ? ((i = 0.5 > c ? o / (a + u) : o / (2 - a - u)),
          (r =
            n == a
              ? (t - e) / o + (e > t ? 6 : 0)
              : t == a
              ? (e - n) / o + 2
              : (n - t) / o + 4),
          (r *= 60))
        : ((r = 0 / 0), (i = c > 0 && 1 > c ? 0 : r)),
      F(r, i, c)
    );
  }
  function ot(n, t, e) {
    (n = ct(n)), (t = ct(t)), (e = ct(e));
    var r = nt((0.4124564 * n + 0.3575761 * t + 0.1804375 * e) / no),
      i = nt((0.2126729 * n + 0.7151522 * t + 0.072175 * e) / to),
      u = nt((0.0193339 * n + 0.119192 * t + 0.9503041 * e) / eo);
    return W(116 * i - 16, 500 * (r - i), 200 * (i - u));
  }
  function ct(n) {
    return (n /= 255) <= 0.04045
      ? n / 12.92
      : Math.pow((n + 0.055) / 1.055, 2.4);
  }
  function lt(n) {
    var t = parseFloat(n);
    return "%" === n.charAt(n.length - 1) ? Math.round(2.55 * t) : t;
  }
  function ft(n) {
    return "function" == typeof n
      ? n
      : function () {
          return n;
        };
  }
  function st(n) {
    return n;
  }
  function ht(n) {
    return function (t, e, r) {
      return (
        2 === arguments.length &&
          "function" == typeof e &&
          ((r = e), (e = null)),
        gt(t, e, n, r)
      );
    };
  }
  function gt(n, t, e, r) {
    function i() {
      var n,
        t = c.status;
      if ((!t && c.responseText) || (t >= 200 && 300 > t) || 304 === t) {
        try {
          n = e.call(u, c);
        } catch (r) {
          return a.error.call(u, r), void 0;
        }
        a.load.call(u, n);
      } else a.error.call(u, c);
    }
    var u = {},
      a = va.dispatch("progress", "load", "error"),
      o = {},
      c = new XMLHttpRequest(),
      l = null;
    return (
      !xa.XDomainRequest ||
        "withCredentials" in c ||
        !/^(http(s)?:)?\/\//.test(n) ||
        (c = new XDomainRequest()),
      "onload" in c
        ? (c.onload = c.onerror = i)
        : (c.onreadystatechange = function () {
            c.readyState > 3 && i();
          }),
      (c.onprogress = function (n) {
        var t = va.event;
        va.event = n;
        try {
          a.progress.call(u, c);
        } finally {
          va.event = t;
        }
      }),
      (u.header = function (n, t) {
        return (
          (n = (n + "").toLowerCase()),
          arguments.length < 2
            ? o[n]
            : (null == t ? delete o[n] : (o[n] = t + ""), u)
        );
      }),
      (u.mimeType = function (n) {
        return arguments.length ? ((t = null == n ? null : n + ""), u) : t;
      }),
      (u.responseType = function (n) {
        return arguments.length ? ((l = n), u) : l;
      }),
      (u.response = function (n) {
        return (e = n), u;
      }),
      ["get", "post"].forEach(function (n) {
        u[n] = function () {
          return u.send.apply(u, [n].concat(Na(arguments)));
        };
      }),
      (u.send = function (e, r, i) {
        if (
          (2 === arguments.length &&
            "function" == typeof r &&
            ((i = r), (r = null)),
          c.open(e, n, !0),
          null == t || "accept" in o || (o.accept = t + ",*/*"),
          c.setRequestHeader)
        )
          for (var a in o) c.setRequestHeader(a, o[a]);
        return (
          null != t && c.overrideMimeType && c.overrideMimeType(t),
          null != l && (c.responseType = l),
          null != i &&
            u.on("error", i).on("load", function (n) {
              i(null, n);
            }),
          c.send(null == r ? null : r),
          u
        );
      }),
      (u.abort = function () {
        return c.abort(), u;
      }),
      va.rebind(u, a, "on"),
      null == r ? u : u.get(pt(r))
    );
  }
  function pt(n) {
    return 1 === n.length
      ? function (t, e) {
          n(null == t ? e : null);
        }
      : n;
  }
  function dt() {
    var n = mt(),
      t = vt() - n;
    t > 24
      ? (isFinite(t) && (clearTimeout(lo), (lo = setTimeout(dt, t))), (co = 0))
      : ((co = 1), fo(dt));
  }
  function mt() {
    for (var n = Date.now(), t = ao; t; )
      n >= t.time && (t.flush = t.callback(n - t.time)), (t = t.next);
    return n;
  }
  function vt() {
    for (var n, t = ao, e = 1 / 0; t; )
      t.flush
        ? (t = n ? (n.next = t.next) : (ao = t.next))
        : (t.time < e && (e = t.time), (t = (n = t).next));
    return (oo = n), e;
  }
  function yt(n, t) {
    var e = Math.pow(10, 3 * Math.abs(8 - t));
    return {
      scale:
        t > 8
          ? function (n) {
              return n / e;
            }
          : function (n) {
              return n * e;
            },
      symbol: n,
    };
  }
  function Mt(n, t) {
    return t - (n ? Math.ceil(Math.log(n) / Math.LN10) : 1);
  }
  function xt(n) {
    return n + "";
  }
  function bt() {}
  function _t(n, t, e) {
    var r = (e.s = n + t),
      i = r - n,
      u = r - i;
    e.t = n - u + (t - i);
  }
  function wt(n, t) {
    n && _o.hasOwnProperty(n.type) && _o[n.type](n, t);
  }
  function St(n, t, e) {
    var r,
      i = -1,
      u = n.length - e;
    for (t.lineStart(); ++i < u; ) (r = n[i]), t.point(r[0], r[1]);
    t.lineEnd();
  }
  function Et(n, t) {
    var e = -1,
      r = n.length;
    for (t.polygonStart(); ++e < r; ) St(n[e], t, 1);
    t.polygonEnd();
  }
  function kt() {
    function n(n, t) {
      (n *= Ja), (t = (t * Ja) / 2 + Ba / 4);
      var e = n - r,
        a = Math.cos(t),
        o = Math.sin(t),
        c = u * o,
        l = i * a + c * Math.cos(e),
        f = c * Math.sin(e);
      So.add(Math.atan2(f, l)), (r = n), (i = a), (u = o);
    }
    var t, e, r, i, u;
    (Eo.point = function (a, o) {
      (Eo.point = n),
        (r = (t = a) * Ja),
        (i = Math.cos((o = ((e = o) * Ja) / 2 + Ba / 4))),
        (u = Math.sin(o));
    }),
      (Eo.lineEnd = function () {
        n(t, e);
      });
  }
  function At(n) {
    var t = n[0],
      e = n[1],
      r = Math.cos(e);
    return [r * Math.cos(t), r * Math.sin(t), Math.sin(e)];
  }
  function Nt(n, t) {
    return n[0] * t[0] + n[1] * t[1] + n[2] * t[2];
  }
  function qt(n, t) {
    return [
      n[1] * t[2] - n[2] * t[1],
      n[2] * t[0] - n[0] * t[2],
      n[0] * t[1] - n[1] * t[0],
    ];
  }
  function Tt(n, t) {
    (n[0] += t[0]), (n[1] += t[1]), (n[2] += t[2]);
  }
  function Ct(n, t) {
    return [n[0] * t, n[1] * t, n[2] * t];
  }
  function zt(n) {
    var t = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
    (n[0] /= t), (n[1] /= t), (n[2] /= t);
  }
  function Dt(n) {
    return [Math.atan2(n[1], n[0]), U(n[2])];
  }
  function jt(n, t) {
    return Math.abs(n[0] - t[0]) < $a && Math.abs(n[1] - t[1]) < $a;
  }
  function Lt(n, t) {
    n *= Ja;
    var e = Math.cos((t *= Ja));
    Ht(e * Math.cos(n), e * Math.sin(n), Math.sin(t));
  }
  function Ht(n, t, e) {
    ++ko, (No += (n - No) / ko), (qo += (t - qo) / ko), (To += (e - To) / ko);
  }
  function Ft() {
    function n(n, i) {
      n *= Ja;
      var u = Math.cos((i *= Ja)),
        a = u * Math.cos(n),
        o = u * Math.sin(n),
        c = Math.sin(i),
        l = Math.atan2(
          Math.sqrt(
            (l = e * c - r * o) * l +
              (l = r * a - t * c) * l +
              (l = t * o - e * a) * l
          ),
          t * a + e * o + r * c
        );
      (Ao += l),
        (Co += l * (t + (t = a))),
        (zo += l * (e + (e = o))),
        (Do += l * (r + (r = c))),
        Ht(t, e, r);
    }
    var t, e, r;
    Fo.point = function (i, u) {
      i *= Ja;
      var a = Math.cos((u *= Ja));
      (t = a * Math.cos(i)),
        (e = a * Math.sin(i)),
        (r = Math.sin(u)),
        (Fo.point = n),
        Ht(t, e, r);
    };
  }
  function Pt() {
    Fo.point = Lt;
  }
  function Ot() {
    function n(n, t) {
      n *= Ja;
      var e = Math.cos((t *= Ja)),
        a = e * Math.cos(n),
        o = e * Math.sin(n),
        c = Math.sin(t),
        l = i * c - u * o,
        f = u * a - r * c,
        s = r * o - i * a,
        h = Math.sqrt(l * l + f * f + s * s),
        g = r * a + i * o + u * c,
        p = h && -Y(g) / h,
        d = Math.atan2(h, g);
      (jo += p * l),
        (Lo += p * f),
        (Ho += p * s),
        (Ao += d),
        (Co += d * (r + (r = a))),
        (zo += d * (i + (i = o))),
        (Do += d * (u + (u = c))),
        Ht(r, i, u);
    }
    var t, e, r, i, u;
    (Fo.point = function (a, o) {
      (t = a), (e = o), (Fo.point = n), (a *= Ja);
      var c = Math.cos((o *= Ja));
      (r = c * Math.cos(a)),
        (i = c * Math.sin(a)),
        (u = Math.sin(o)),
        Ht(r, i, u);
    }),
      (Fo.lineEnd = function () {
        n(t, e), (Fo.lineEnd = Pt), (Fo.point = Lt);
      });
  }
  function Rt() {
    return !0;
  }
  function Yt(n, t, e, r, i) {
    var u = [],
      a = [];
    if (
      (n.forEach(function (n) {
        if (!((t = n.length - 1) <= 0)) {
          var t,
            e = n[0],
            r = n[t];
          if (jt(e, r)) {
            i.lineStart();
            for (var o = 0; t > o; ++o) i.point((e = n[o])[0], e[1]);
            return i.lineEnd(), void 0;
          }
          var c = {
              point: e,
              points: n,
              other: null,
              visited: !1,
              entry: !0,
              subject: !0,
            },
            l = {
              point: e,
              points: [e],
              other: c,
              visited: !1,
              entry: !1,
              subject: !1,
            };
          (c.other = l),
            u.push(c),
            a.push(l),
            (c = {
              point: r,
              points: [r],
              other: null,
              visited: !1,
              entry: !1,
              subject: !0,
            }),
            (l = {
              point: r,
              points: [r],
              other: c,
              visited: !1,
              entry: !0,
              subject: !1,
            }),
            (c.other = l),
            u.push(c),
            a.push(l);
        }
      }),
      a.sort(t),
      Ut(u),
      Ut(a),
      u.length)
    ) {
      if (e)
        for (var o = 1, c = !e(a[0].point), l = a.length; l > o; ++o)
          a[o].entry = c = !c;
      for (var f, s, h, g = u[0]; ; ) {
        for (f = g; f.visited; ) if ((f = f.next) === g) return;
        (s = f.points), i.lineStart();
        do {
          if (((f.visited = f.other.visited = !0), f.entry)) {
            if (f.subject)
              for (var o = 0; o < s.length; o++) i.point((h = s[o])[0], h[1]);
            else r(f.point, f.next.point, 1, i);
            f = f.next;
          } else {
            if (f.subject) {
              s = f.prev.points;
              for (var o = s.length; --o >= 0; ) i.point((h = s[o])[0], h[1]);
            } else r(f.point, f.prev.point, -1, i);
            f = f.prev;
          }
          (f = f.other), (s = f.points);
        } while (!f.visited);
        i.lineEnd();
      }
    }
  }
  function Ut(n) {
    if ((t = n.length)) {
      for (var t, e, r = 0, i = n[0]; ++r < t; )
        (i.next = e = n[r]), (e.prev = i), (i = e);
      (i.next = e = n[0]), (e.prev = i);
    }
  }
  function It(n, t, e, r) {
    return function (i) {
      function u(t, e) {
        n(t, e) && i.point(t, e);
      }
      function a(n, t) {
        d.point(n, t);
      }
      function o() {
        (m.point = a), d.lineStart();
      }
      function c() {
        (m.point = u), d.lineEnd();
      }
      function l(n, t) {
        y.point(n, t), p.push([n, t]);
      }
      function f() {
        y.lineStart(), (p = []);
      }
      function s() {
        l(p[0][0], p[0][1]), y.lineEnd();
        var n,
          t = y.clean(),
          e = v.buffer(),
          r = e.length;
        if ((p.pop(), g.push(p), (p = null), r)) {
          if (1 & t) {
            n = e[0];
            var u,
              r = n.length - 1,
              a = -1;
            for (i.lineStart(); ++a < r; ) i.point((u = n[a])[0], u[1]);
            return i.lineEnd(), void 0;
          }
          r > 1 && 2 & t && e.push(e.pop().concat(e.shift())),
            h.push(e.filter(Vt));
        }
      }
      var h,
        g,
        p,
        d = t(i),
        m = {
          point: u,
          lineStart: o,
          lineEnd: c,
          polygonStart: function () {
            (m.point = l),
              (m.lineStart = f),
              (m.lineEnd = s),
              (h = []),
              (g = []),
              i.polygonStart();
          },
          polygonEnd: function () {
            (m.point = u),
              (m.lineStart = o),
              (m.lineEnd = c),
              (h = va.merge(h)),
              h.length
                ? Yt(h, Zt, null, e, i)
                : r(g) && (i.lineStart(), e(null, null, 1, i), i.lineEnd()),
              i.polygonEnd(),
              (h = g = null);
          },
          sphere: function () {
            i.polygonStart(),
              i.lineStart(),
              e(null, null, 1, i),
              i.lineEnd(),
              i.polygonEnd();
          },
        },
        v = Xt(),
        y = t(v);
      return m;
    };
  }
  function Vt(n) {
    return n.length > 1;
  }
  function Xt() {
    var n,
      t = [];
    return {
      lineStart: function () {
        t.push((n = []));
      },
      point: function (t, e) {
        n.push([t, e]);
      },
      lineEnd: f,
      buffer: function () {
        var e = t;
        return (t = []), (n = null), e;
      },
      rejoin: function () {
        t.length > 1 && t.push(t.pop().concat(t.shift()));
      },
    };
  }
  function Zt(n, t) {
    return (
      ((n = n.point)[0] < 0 ? n[1] - Ba / 2 - $a : Ba / 2 - n[1]) -
      ((t = t.point)[0] < 0 ? t[1] - Ba / 2 - $a : Ba / 2 - t[1])
    );
  }
  function Bt(n, t) {
    var e = n[0],
      r = n[1],
      i = [Math.sin(e), -Math.cos(e), 0],
      u = 0,
      a = !1,
      o = !1,
      c = 0;
    So.reset();
    for (var l = 0, f = t.length; f > l; ++l) {
      var s = t[l],
        h = s.length;
      if (h) {
        for (
          var g = s[0],
            p = g[0],
            d = g[1] / 2 + Ba / 4,
            m = Math.sin(d),
            v = Math.cos(d),
            y = 1;
          ;

        ) {
          y === h && (y = 0), (n = s[y]);
          var M = n[0],
            x = n[1] / 2 + Ba / 4,
            b = Math.sin(x),
            _ = Math.cos(x),
            w = M - p,
            S = Math.abs(w) > Ba,
            E = m * b;
          if (
            (So.add(Math.atan2(E * Math.sin(w), v * _ + E * Math.cos(w))),
            Math.abs(x) < $a && (o = !0),
            (u += S ? w + (w >= 0 ? 2 : -2) * Ba : w),
            S ^ (p >= e) ^ (M >= e))
          ) {
            var k = qt(At(g), At(n));
            zt(k);
            var A = qt(i, k);
            zt(A);
            var N = (S ^ (w >= 0) ? -1 : 1) * U(A[2]);
            r > N && (c += S ^ (w >= 0) ? 1 : -1);
          }
          if (!y++) break;
          (p = M), (m = b), (v = _), (g = n);
        }
        Math.abs(u) > $a && (a = !0);
      }
    }
    return ((!o && !a && 0 > So) || -$a > u) ^ (1 & c);
  }
  function $t(n) {
    var t,
      e = 0 / 0,
      r = 0 / 0,
      i = 0 / 0;
    return {
      lineStart: function () {
        n.lineStart(), (t = 1);
      },
      point: function (u, a) {
        var o = u > 0 ? Ba : -Ba,
          c = Math.abs(u - e);
        Math.abs(c - Ba) < $a
          ? (n.point(e, (r = (r + a) / 2 > 0 ? Ba / 2 : -Ba / 2)),
            n.point(i, r),
            n.lineEnd(),
            n.lineStart(),
            n.point(o, r),
            n.point(u, r),
            (t = 0))
          : i !== o &&
            c >= Ba &&
            (Math.abs(e - i) < $a && (e -= i * $a),
            Math.abs(u - o) < $a && (u -= o * $a),
            (r = Wt(e, r, u, a)),
            n.point(i, r),
            n.lineEnd(),
            n.lineStart(),
            n.point(o, r),
            (t = 0)),
          n.point((e = u), (r = a)),
          (i = o);
      },
      lineEnd: function () {
        n.lineEnd(), (e = r = 0 / 0);
      },
      clean: function () {
        return 2 - t;
      },
    };
  }
  function Wt(n, t, e, r) {
    var i,
      u,
      a = Math.sin(n - e);
    return Math.abs(a) > $a
      ? Math.atan(
          (Math.sin(t) * (u = Math.cos(r)) * Math.sin(e) -
            Math.sin(r) * (i = Math.cos(t)) * Math.sin(n)) /
            (i * u * a)
        )
      : (t + r) / 2;
  }
  function Jt(n, t, e, r) {
    var i;
    if (null == n)
      (i = (e * Ba) / 2),
        r.point(-Ba, i),
        r.point(0, i),
        r.point(Ba, i),
        r.point(Ba, 0),
        r.point(Ba, -i),
        r.point(0, -i),
        r.point(-Ba, -i),
        r.point(-Ba, 0),
        r.point(-Ba, i);
    else if (Math.abs(n[0] - t[0]) > $a) {
      var u = (n[0] < t[0] ? 1 : -1) * Ba;
      (i = (e * u) / 2), r.point(-u, i), r.point(0, i), r.point(u, i);
    } else r.point(t[0], t[1]);
  }
  function Gt(n) {
    return Bt(Oo, n);
  }
  function Kt(n) {
    function t(n, t) {
      return Math.cos(n) * Math.cos(t) > a;
    }
    function e(n) {
      var e, u, a, c, f;
      return {
        lineStart: function () {
          (c = a = !1), (f = 1);
        },
        point: function (s, h) {
          var g,
            p = [s, h],
            d = t(s, h),
            m = o ? (d ? 0 : i(s, h)) : d ? i(s + (0 > s ? Ba : -Ba), h) : 0;
          if (
            (!e && (c = a = d) && n.lineStart(),
            d !== a &&
              ((g = r(e, p)),
              (jt(e, g) || jt(p, g)) &&
                ((p[0] += $a), (p[1] += $a), (d = t(p[0], p[1])))),
            d !== a)
          )
            (f = 0),
              d
                ? (n.lineStart(), (g = r(p, e)), n.point(g[0], g[1]))
                : ((g = r(e, p)), n.point(g[0], g[1]), n.lineEnd()),
              (e = g);
          else if (l && e && o ^ d) {
            var v;
            m & u ||
              !(v = r(p, e, !0)) ||
              ((f = 0),
              o
                ? (n.lineStart(),
                  n.point(v[0][0], v[0][1]),
                  n.point(v[1][0], v[1][1]),
                  n.lineEnd())
                : (n.point(v[1][0], v[1][1]),
                  n.lineEnd(),
                  n.lineStart(),
                  n.point(v[0][0], v[0][1])));
          }
          !d || (e && jt(e, p)) || n.point(p[0], p[1]),
            (e = p),
            (a = d),
            (u = m);
        },
        lineEnd: function () {
          a && n.lineEnd(), (e = null);
        },
        clean: function () {
          return f | ((c && a) << 1);
        },
      };
    }
    function r(n, t, e) {
      var r = At(n),
        i = At(t),
        u = [1, 0, 0],
        o = qt(r, i),
        c = Nt(o, o),
        l = o[0],
        f = c - l * l;
      if (!f) return !e && n;
      var s = (a * c) / f,
        h = (-a * l) / f,
        g = qt(u, o),
        p = Ct(u, s),
        d = Ct(o, h);
      Tt(p, d);
      var m = g,
        v = Nt(p, m),
        y = Nt(m, m),
        M = v * v - y * (Nt(p, p) - 1);
      if (!(0 > M)) {
        var x = Math.sqrt(M),
          b = Ct(m, (-v - x) / y);
        if ((Tt(b, p), (b = Dt(b)), !e)) return b;
        var _,
          w = n[0],
          S = t[0],
          E = n[1],
          k = t[1];
        w > S && ((_ = w), (w = S), (S = _));
        var A = S - w,
          N = Math.abs(A - Ba) < $a,
          q = N || $a > A;
        if (
          (!N && E > k && ((_ = E), (E = k), (k = _)),
          q
            ? N
              ? (E + k > 0) ^ (b[1] < (Math.abs(b[0] - w) < $a ? E : k))
              : E <= b[1] && b[1] <= k
            : (A > Ba) ^ (w <= b[0] && b[0] <= S))
        ) {
          var T = Ct(m, (-v + x) / y);
          return Tt(T, p), [b, Dt(T)];
        }
      }
    }
    function i(t, e) {
      var r = o ? n : Ba - n,
        i = 0;
      return (
        -r > t ? (i |= 1) : t > r && (i |= 2),
        -r > e ? (i |= 4) : e > r && (i |= 8),
        i
      );
    }
    function u(n) {
      return Bt(c, n);
    }
    var a = Math.cos(n),
      o = a > 0,
      c = [n, 0],
      l = Math.abs(a) > $a,
      f = we(n, 6 * Ja);
    return It(t, e, f, u);
  }
  function Qt(n, t, e, r) {
    function i(r, i) {
      return Math.abs(r[0] - n) < $a
        ? i > 0
          ? 0
          : 3
        : Math.abs(r[0] - e) < $a
        ? i > 0
          ? 2
          : 1
        : Math.abs(r[1] - t) < $a
        ? i > 0
          ? 1
          : 0
        : i > 0
        ? 3
        : 2;
    }
    function u(n, t) {
      return a(n.point, t.point);
    }
    function a(n, t) {
      var e = i(n, 1),
        r = i(t, 1);
      return e !== r
        ? e - r
        : 0 === e
        ? t[1] - n[1]
        : 1 === e
        ? n[0] - t[0]
        : 2 === e
        ? n[1] - t[1]
        : t[0] - n[0];
    }
    function o(i, u) {
      var a = u[0] - i[0],
        o = u[1] - i[1],
        c = [0, 1];
      return Math.abs(a) < $a && Math.abs(o) < $a
        ? n <= i[0] && i[0] <= e && t <= i[1] && i[1] <= r
        : ne(n - i[0], a, c) &&
          ne(i[0] - e, -a, c) &&
          ne(t - i[1], o, c) &&
          ne(i[1] - r, -o, c)
        ? (c[1] < 1 && ((u[0] = i[0] + c[1] * a), (u[1] = i[1] + c[1] * o)),
          c[0] > 0 && ((i[0] += c[0] * a), (i[1] += c[0] * o)),
          !0)
        : !1;
    }
    return function (c) {
      function l(u) {
        var a = i(u, -1),
          o = f([0 === a || 3 === a ? n : e, a > 1 ? r : t]);
        return o;
      }
      function f(n) {
        for (var t = 0, e = M.length, r = n[1], i = 0; e > i; ++i)
          for (var u, a = 1, o = M[i], c = o.length, l = o[0]; c > a; ++a)
            (u = o[a]),
              l[1] <= r
                ? u[1] > r && s(l, u, n) > 0 && ++t
                : u[1] <= r && s(l, u, n) < 0 && --t,
              (l = u);
        return 0 !== t;
      }
      function s(n, t, e) {
        return (t[0] - n[0]) * (e[1] - n[1]) - (e[0] - n[0]) * (t[1] - n[1]);
      }
      function h(u, o, c, l) {
        var f = 0,
          s = 0;
        if (
          null == u ||
          (f = i(u, c)) !== (s = i(o, c)) ||
          (a(u, o) < 0) ^ (c > 0)
        ) {
          do l.point(0 === f || 3 === f ? n : e, f > 1 ? r : t);
          while ((f = (f + c + 4) % 4) !== s);
        } else l.point(o[0], o[1]);
      }
      function g(i, u) {
        return i >= n && e >= i && u >= t && r >= u;
      }
      function p(n, t) {
        g(n, t) && c.point(n, t);
      }
      function d() {
        (T.point = v),
          M && M.push((x = [])),
          (A = !0),
          (k = !1),
          (S = E = 0 / 0);
      }
      function m() {
        y && (v(b, _), w && k && q.rejoin(), y.push(q.buffer())),
          (T.point = p),
          k && c.lineEnd();
      }
      function v(n, t) {
        (n = Math.max(-Ro, Math.min(Ro, n))),
          (t = Math.max(-Ro, Math.min(Ro, t)));
        var e = g(n, t);
        if ((M && x.push([n, t]), A))
          (b = n),
            (_ = t),
            (w = e),
            (A = !1),
            e && (c.lineStart(), c.point(n, t));
        else if (e && k) c.point(n, t);
        else {
          var r = [S, E],
            i = [n, t];
          o(r, i)
            ? (k || (c.lineStart(), c.point(r[0], r[1])),
              c.point(i[0], i[1]),
              e || c.lineEnd())
            : e && (c.lineStart(), c.point(n, t));
        }
        (S = n), (E = t), (k = e);
      }
      var y,
        M,
        x,
        b,
        _,
        w,
        S,
        E,
        k,
        A,
        N = c,
        q = Xt(),
        T = {
          point: p,
          lineStart: d,
          lineEnd: m,
          polygonStart: function () {
            (c = q), (y = []), (M = []);
          },
          polygonEnd: function () {
            (c = N),
              (y = va.merge(y)).length
                ? (c.polygonStart(), Yt(y, u, l, h, c), c.polygonEnd())
                : f([n, t]) &&
                  (c.polygonStart(),
                  c.lineStart(),
                  h(null, null, 1, c),
                  c.lineEnd(),
                  c.polygonEnd()),
              (y = M = x = null);
          },
        };
      return T;
    };
  }
  function ne(n, t, e) {
    if (Math.abs(t) < $a) return 0 >= n;
    var r = n / t;
    if (t > 0) {
      if (r > e[1]) return !1;
      r > e[0] && (e[0] = r);
    } else {
      if (r < e[0]) return !1;
      r < e[1] && (e[1] = r);
    }
    return !0;
  }
  function te(n, t) {
    function e(e, r) {
      return (e = n(e, r)), t(e[0], e[1]);
    }
    return (
      n.invert &&
        t.invert &&
        (e.invert = function (e, r) {
          return (e = t.invert(e, r)), e && n.invert(e[0], e[1]);
        }),
      e
    );
  }
  function ee(n) {
    var t = 0,
      e = Ba / 3,
      r = me(n),
      i = r(t, e);
    return (
      (i.parallels = function (n) {
        return arguments.length
          ? r((t = (n[0] * Ba) / 180), (e = (n[1] * Ba) / 180))
          : [180 * (t / Ba), 180 * (e / Ba)];
      }),
      i
    );
  }
  function re(n, t) {
    function e(n, t) {
      var e = Math.sqrt(u - 2 * i * Math.sin(t)) / i;
      return [e * Math.sin((n *= i)), a - e * Math.cos(n)];
    }
    var r = Math.sin(n),
      i = (r + Math.sin(t)) / 2,
      u = 1 + r * (2 * i - r),
      a = Math.sqrt(u) / i;
    return (
      (e.invert = function (n, t) {
        var e = a - t;
        return [
          Math.atan2(n, e) / i,
          U((u - (n * n + e * e) * i * i) / (2 * i)),
        ];
      }),
      e
    );
  }
  function ie() {
    function n(n, t) {
      (Uo += i * n - r * t), (r = n), (i = t);
    }
    var t, e, r, i;
    (Bo.point = function (u, a) {
      (Bo.point = n), (t = r = u), (e = i = a);
    }),
      (Bo.lineEnd = function () {
        n(t, e);
      });
  }
  function ue(n, t) {
    Io > n && (Io = n),
      n > Xo && (Xo = n),
      Vo > t && (Vo = t),
      t > Zo && (Zo = t);
  }
  function ae() {
    function n(n, t) {
      a.push("M", n, ",", t, u);
    }
    function t(n, t) {
      a.push("M", n, ",", t), (o.point = e);
    }
    function e(n, t) {
      a.push("L", n, ",", t);
    }
    function r() {
      o.point = n;
    }
    function i() {
      a.push("Z");
    }
    var u = oe(4.5),
      a = [],
      o = {
        point: n,
        lineStart: function () {
          o.point = t;
        },
        lineEnd: r,
        polygonStart: function () {
          o.lineEnd = i;
        },
        polygonEnd: function () {
          (o.lineEnd = r), (o.point = n);
        },
        pointRadius: function (n) {
          return (u = oe(n)), o;
        },
        result: function () {
          if (a.length) {
            var n = a.join("");
            return (a = []), n;
          }
        },
      };
    return o;
  }
  function oe(n) {
    return (
      "m0," +
      n +
      "a" +
      n +
      "," +
      n +
      " 0 1,1 0," +
      -2 * n +
      "a" +
      n +
      "," +
      n +
      " 0 1,1 0," +
      2 * n +
      "z"
    );
  }
  function ce(n, t) {
    (No += n), (qo += t), ++To;
  }
  function le() {
    function n(n, r) {
      var i = n - t,
        u = r - e,
        a = Math.sqrt(i * i + u * u);
      (Co += (a * (t + n)) / 2),
        (zo += (a * (e + r)) / 2),
        (Do += a),
        ce((t = n), (e = r));
    }
    var t, e;
    Wo.point = function (r, i) {
      (Wo.point = n), ce((t = r), (e = i));
    };
  }
  function fe() {
    Wo.point = ce;
  }
  function se() {
    function n(n, t) {
      var e = n - r,
        u = t - i,
        a = Math.sqrt(e * e + u * u);
      (Co += (a * (r + n)) / 2),
        (zo += (a * (i + t)) / 2),
        (Do += a),
        (a = i * n - r * t),
        (jo += a * (r + n)),
        (Lo += a * (i + t)),
        (Ho += 3 * a),
        ce((r = n), (i = t));
    }
    var t, e, r, i;
    (Wo.point = function (u, a) {
      (Wo.point = n), ce((t = r = u), (e = i = a));
    }),
      (Wo.lineEnd = function () {
        n(t, e);
      });
  }
  function he(n) {
    function t(t, e) {
      n.moveTo(t, e), n.arc(t, e, a, 0, 2 * Ba);
    }
    function e(t, e) {
      n.moveTo(t, e), (o.point = r);
    }
    function r(t, e) {
      n.lineTo(t, e);
    }
    function i() {
      o.point = t;
    }
    function u() {
      n.closePath();
    }
    var a = 4.5,
      o = {
        point: t,
        lineStart: function () {
          o.point = e;
        },
        lineEnd: i,
        polygonStart: function () {
          o.lineEnd = u;
        },
        polygonEnd: function () {
          (o.lineEnd = i), (o.point = t);
        },
        pointRadius: function (n) {
          return (a = n), o;
        },
        result: f,
      };
    return o;
  }
  function ge(n) {
    function t(t) {
      function r(e, r) {
        (e = n(e, r)), t.point(e[0], e[1]);
      }
      function i() {
        (M = 0 / 0), (S.point = a), t.lineStart();
      }
      function a(r, i) {
        var a = At([r, i]),
          o = n(r, i);
        e(
          M,
          x,
          y,
          b,
          _,
          w,
          (M = o[0]),
          (x = o[1]),
          (y = r),
          (b = a[0]),
          (_ = a[1]),
          (w = a[2]),
          u,
          t
        ),
          t.point(M, x);
      }
      function o() {
        (S.point = r), t.lineEnd();
      }
      function c() {
        i(), (S.point = l), (S.lineEnd = f);
      }
      function l(n, t) {
        a((s = n), (h = t)),
          (g = M),
          (p = x),
          (d = b),
          (m = _),
          (v = w),
          (S.point = a);
      }
      function f() {
        e(M, x, y, b, _, w, g, p, s, d, m, v, u, t), (S.lineEnd = o), o();
      }
      var s,
        h,
        g,
        p,
        d,
        m,
        v,
        y,
        M,
        x,
        b,
        _,
        w,
        S = {
          point: r,
          lineStart: i,
          lineEnd: o,
          polygonStart: function () {
            t.polygonStart(), (S.lineStart = c);
          },
          polygonEnd: function () {
            t.polygonEnd(), (S.lineStart = i);
          },
        };
      return S;
    }
    function e(t, u, a, o, c, l, f, s, h, g, p, d, m, v) {
      var y = f - t,
        M = s - u,
        x = y * y + M * M;
      if (x > 4 * r && m--) {
        var b = o + g,
          _ = c + p,
          w = l + d,
          S = Math.sqrt(b * b + _ * _ + w * w),
          E = Math.asin((w /= S)),
          k = Math.abs(Math.abs(w) - 1) < $a ? (a + h) / 2 : Math.atan2(_, b),
          A = n(k, E),
          N = A[0],
          q = A[1],
          T = N - t,
          C = q - u,
          z = M * T - y * C;
        ((z * z) / x > r ||
          Math.abs((y * T + M * C) / x - 0.5) > 0.3 ||
          i > o * g + c * p + l * d) &&
          (e(t, u, a, o, c, l, N, q, k, (b /= S), (_ /= S), w, m, v),
          v.point(N, q),
          e(N, q, k, b, _, w, f, s, h, g, p, d, m, v));
      }
    }
    var r = 0.5,
      i = Math.cos(30 * Ja),
      u = 16;
    return (
      (t.precision = function (n) {
        return arguments.length
          ? ((u = (r = n * n) > 0 && 16), t)
          : Math.sqrt(r);
      }),
      t
    );
  }
  function pe(n) {
    var t = ge(function (t, e) {
      return n([t * Ga, e * Ga]);
    });
    return function (n) {
      return (
        (n = t(n)),
        {
          point: function (t, e) {
            n.point(t * Ja, e * Ja);
          },
          sphere: function () {
            n.sphere();
          },
          lineStart: function () {
            n.lineStart();
          },
          lineEnd: function () {
            n.lineEnd();
          },
          polygonStart: function () {
            n.polygonStart();
          },
          polygonEnd: function () {
            n.polygonEnd();
          },
        }
      );
    };
  }
  function de(n) {
    return me(function () {
      return n;
    })();
  }
  function me(n) {
    function t(n) {
      return (n = o(n[0] * Ja, n[1] * Ja)), [n[0] * h + c, l - n[1] * h];
    }
    function e(n) {
      return (
        (n = o.invert((n[0] - c) / h, (l - n[1]) / h)),
        n && [n[0] * Ga, n[1] * Ga]
      );
    }
    function r() {
      o = te((a = Me(v, y, M)), u);
      var n = u(d, m);
      return (c = g - n[0] * h), (l = p + n[1] * h), i();
    }
    function i() {
      return f && ((f.valid = !1), (f = null)), t;
    }
    var u,
      a,
      o,
      c,
      l,
      f,
      s = ge(function (n, t) {
        return (n = u(n, t)), [n[0] * h + c, l - n[1] * h];
      }),
      h = 150,
      g = 480,
      p = 250,
      d = 0,
      m = 0,
      v = 0,
      y = 0,
      M = 0,
      x = Po,
      b = st,
      _ = null,
      w = null;
    return (
      (t.stream = function (n) {
        return f && (f.valid = !1), (f = ve(a, x(s(b(n))))), (f.valid = !0), f;
      }),
      (t.clipAngle = function (n) {
        return arguments.length
          ? ((x = null == n ? ((_ = n), Po) : Kt((_ = +n) * Ja)), i())
          : _;
      }),
      (t.clipExtent = function (n) {
        return arguments.length
          ? ((w = n),
            (b = null == n ? st : Qt(n[0][0], n[0][1], n[1][0], n[1][1])),
            i())
          : w;
      }),
      (t.scale = function (n) {
        return arguments.length ? ((h = +n), r()) : h;
      }),
      (t.translate = function (n) {
        return arguments.length ? ((g = +n[0]), (p = +n[1]), r()) : [g, p];
      }),
      (t.center = function (n) {
        return arguments.length
          ? ((d = (n[0] % 360) * Ja), (m = (n[1] % 360) * Ja), r())
          : [d * Ga, m * Ga];
      }),
      (t.rotate = function (n) {
        return arguments.length
          ? ((v = (n[0] % 360) * Ja),
            (y = (n[1] % 360) * Ja),
            (M = n.length > 2 ? (n[2] % 360) * Ja : 0),
            r())
          : [v * Ga, y * Ga, M * Ga];
      }),
      va.rebind(t, s, "precision"),
      function () {
        return (u = n.apply(this, arguments)), (t.invert = u.invert && e), r();
      }
    );
  }
  function ve(n, t) {
    return {
      point: function (e, r) {
        (r = n(e * Ja, r * Ja)),
          (e = r[0]),
          t.point(e > Ba ? e - 2 * Ba : -Ba > e ? e + 2 * Ba : e, r[1]);
      },
      sphere: function () {
        t.sphere();
      },
      lineStart: function () {
        t.lineStart();
      },
      lineEnd: function () {
        t.lineEnd();
      },
      polygonStart: function () {
        t.polygonStart();
      },
      polygonEnd: function () {
        t.polygonEnd();
      },
    };
  }
  function ye(n, t) {
    return [n, t];
  }
  function Me(n, t, e) {
    return n ? (t || e ? te(be(n), _e(t, e)) : be(n)) : t || e ? _e(t, e) : ye;
  }
  function xe(n) {
    return function (t, e) {
      return (t += n), [t > Ba ? t - 2 * Ba : -Ba > t ? t + 2 * Ba : t, e];
    };
  }
  function be(n) {
    var t = xe(n);
    return (t.invert = xe(-n)), t;
  }
  function _e(n, t) {
    function e(n, t) {
      var e = Math.cos(t),
        o = Math.cos(n) * e,
        c = Math.sin(n) * e,
        l = Math.sin(t),
        f = l * r + o * i;
      return [Math.atan2(c * u - f * a, o * r - l * i), U(f * u + c * a)];
    }
    var r = Math.cos(n),
      i = Math.sin(n),
      u = Math.cos(t),
      a = Math.sin(t);
    return (
      (e.invert = function (n, t) {
        var e = Math.cos(t),
          o = Math.cos(n) * e,
          c = Math.sin(n) * e,
          l = Math.sin(t),
          f = l * u - c * a;
        return [Math.atan2(c * u + l * a, o * r + f * i), U(f * r - o * i)];
      }),
      e
    );
  }
  function we(n, t) {
    var e = Math.cos(n),
      r = Math.sin(n);
    return function (i, u, a, o) {
      null != i
        ? ((i = Se(e, i)),
          (u = Se(e, u)),
          (a > 0 ? u > i : i > u) && (i += 2 * a * Ba))
        : ((i = n + 2 * a * Ba), (u = n));
      for (var c, l = a * t, f = i; a > 0 ? f > u : u > f; f -= l)
        o.point((c = Dt([e, -r * Math.cos(f), -r * Math.sin(f)]))[0], c[1]);
    };
  }
  function Se(n, t) {
    var e = At(t);
    (e[0] -= n), zt(e);
    var r = Y(-e[1]);
    return ((-e[2] < 0 ? -r : r) + 2 * Math.PI - $a) % (2 * Math.PI);
  }
  function Ee(n, t, e) {
    var r = va.range(n, t - $a, e).concat(t);
    return function (n) {
      return r.map(function (t) {
        return [n, t];
      });
    };
  }
  function ke(n, t, e) {
    var r = va.range(n, t - $a, e).concat(t);
    return function (n) {
      return r.map(function (t) {
        return [t, n];
      });
    };
  }
  function Ae(n) {
    return n.source;
  }
  function Ne(n) {
    return n.target;
  }
  function qe(n, t, e, r) {
    var i = Math.cos(t),
      u = Math.sin(t),
      a = Math.cos(r),
      o = Math.sin(r),
      c = i * Math.cos(n),
      l = i * Math.sin(n),
      f = a * Math.cos(e),
      s = a * Math.sin(e),
      h = 2 * Math.asin(Math.sqrt(X(r - t) + i * a * X(e - n))),
      g = 1 / Math.sin(h),
      p = h
        ? function (n) {
            var t = Math.sin((n *= h)) * g,
              e = Math.sin(h - n) * g,
              r = e * c + t * f,
              i = e * l + t * s,
              a = e * u + t * o;
            return [
              Math.atan2(i, r) * Ga,
              Math.atan2(a, Math.sqrt(r * r + i * i)) * Ga,
            ];
          }
        : function () {
            return [n * Ga, t * Ga];
          };
    return (p.distance = h), p;
  }
  function Te() {
    function n(n, i) {
      var u = Math.sin((i *= Ja)),
        a = Math.cos(i),
        o = Math.abs((n *= Ja) - t),
        c = Math.cos(o);
      (Jo += Math.atan2(
        Math.sqrt((o = a * Math.sin(o)) * o + (o = r * u - e * a * c) * o),
        e * u + r * a * c
      )),
        (t = n),
        (e = u),
        (r = a);
    }
    var t, e, r;
    (Go.point = function (i, u) {
      (t = i * Ja),
        (e = Math.sin((u *= Ja))),
        (r = Math.cos(u)),
        (Go.point = n);
    }),
      (Go.lineEnd = function () {
        Go.point = Go.lineEnd = f;
      });
  }
  function Ce(n, t) {
    function e(t, e) {
      var r = Math.cos(t),
        i = Math.cos(e),
        u = n(r * i);
      return [u * i * Math.sin(t), u * Math.sin(e)];
    }
    return (
      (e.invert = function (n, e) {
        var r = Math.sqrt(n * n + e * e),
          i = t(r),
          u = Math.sin(i),
          a = Math.cos(i);
        return [Math.atan2(n * u, r * a), Math.asin(r && (e * u) / r)];
      }),
      e
    );
  }
  function ze(n, t) {
    function e(n, t) {
      var e = Math.abs(Math.abs(t) - Ba / 2) < $a ? 0 : a / Math.pow(i(t), u);
      return [e * Math.sin(u * n), a - e * Math.cos(u * n)];
    }
    var r = Math.cos(n),
      i = function (n) {
        return Math.tan(Ba / 4 + n / 2);
      },
      u =
        n === t
          ? Math.sin(n)
          : Math.log(r / Math.cos(t)) / Math.log(i(t) / i(n)),
      a = (r * Math.pow(i(n), u)) / u;
    return u
      ? ((e.invert = function (n, t) {
          var e = a - t,
            r = R(u) * Math.sqrt(n * n + e * e);
          return [
            Math.atan2(n, e) / u,
            2 * Math.atan(Math.pow(a / r, 1 / u)) - Ba / 2,
          ];
        }),
        e)
      : je;
  }
  function De(n, t) {
    function e(n, t) {
      var e = u - t;
      return [e * Math.sin(i * n), u - e * Math.cos(i * n)];
    }
    var r = Math.cos(n),
      i = n === t ? Math.sin(n) : (r - Math.cos(t)) / (t - n),
      u = r / i + n;
    return Math.abs(i) < $a
      ? ye
      : ((e.invert = function (n, t) {
          var e = u - t;
          return [Math.atan2(n, e) / i, u - R(i) * Math.sqrt(n * n + e * e)];
        }),
        e);
  }
  function je(n, t) {
    return [n, Math.log(Math.tan(Ba / 4 + t / 2))];
  }
  function Le(n) {
    var t,
      e = de(n),
      r = e.scale,
      i = e.translate,
      u = e.clipExtent;
    return (
      (e.scale = function () {
        var n = r.apply(e, arguments);
        return n === e ? (t ? e.clipExtent(null) : e) : n;
      }),
      (e.translate = function () {
        var n = i.apply(e, arguments);
        return n === e ? (t ? e.clipExtent(null) : e) : n;
      }),
      (e.clipExtent = function (n) {
        var a = u.apply(e, arguments);
        if (a === e) {
          if ((t = null == n)) {
            var o = Ba * r(),
              c = i();
            u([
              [c[0] - o, c[1] - o],
              [c[0] + o, c[1] + o],
            ]);
          }
        } else t && (a = null);
        return a;
      }),
      e.clipExtent(null)
    );
  }
  function He(n, t) {
    var e = Math.cos(t) * Math.sin(n);
    return [
      Math.log((1 + e) / (1 - e)) / 2,
      Math.atan2(Math.tan(t), Math.cos(n)),
    ];
  }
  function Fe(n) {
    function t(t) {
      function a() {
        l.push("M", u(n(f), o));
      }
      for (
        var c, l = [], f = [], s = -1, h = t.length, g = ft(e), p = ft(r);
        ++s < h;

      )
        i.call(this, (c = t[s]), s)
          ? f.push([+g.call(this, c, s), +p.call(this, c, s)])
          : f.length && (a(), (f = []));
      return f.length && a(), l.length ? l.join("") : null;
    }
    var e = Pe,
      r = Oe,
      i = Rt,
      u = Re,
      a = u.key,
      o = 0.7;
    return (
      (t.x = function (n) {
        return arguments.length ? ((e = n), t) : e;
      }),
      (t.y = function (n) {
        return arguments.length ? ((r = n), t) : r;
      }),
      (t.defined = function (n) {
        return arguments.length ? ((i = n), t) : i;
      }),
      (t.interpolate = function (n) {
        return arguments.length
          ? ((a = "function" == typeof n ? (u = n) : (u = rc.get(n) || Re).key),
            t)
          : a;
      }),
      (t.tension = function (n) {
        return arguments.length ? ((o = n), t) : o;
      }),
      t
    );
  }
  function Pe(n) {
    return n[0];
  }
  function Oe(n) {
    return n[1];
  }
  function Re(n) {
    return n.join("L");
  }
  function Ye(n) {
    return Re(n) + "Z";
  }
  function Ue(n) {
    for (var t = 0, e = n.length, r = n[0], i = [r[0], ",", r[1]]; ++t < e; )
      i.push("H", (r[0] + (r = n[t])[0]) / 2, "V", r[1]);
    return e > 1 && i.push("H", r[0]), i.join("");
  }
  function Ie(n) {
    for (var t = 0, e = n.length, r = n[0], i = [r[0], ",", r[1]]; ++t < e; )
      i.push("V", (r = n[t])[1], "H", r[0]);
    return i.join("");
  }
  function Ve(n) {
    for (var t = 0, e = n.length, r = n[0], i = [r[0], ",", r[1]]; ++t < e; )
      i.push("H", (r = n[t])[0], "V", r[1]);
    return i.join("");
  }
  function Xe(n, t) {
    return n.length < 4 ? Re(n) : n[1] + $e(n.slice(1, n.length - 1), We(n, t));
  }
  function Ze(n, t) {
    return n.length < 3
      ? Re(n)
      : n[0] +
          $e((n.push(n[0]), n), We([n[n.length - 2]].concat(n, [n[1]]), t));
  }
  function Be(n, t) {
    return n.length < 3 ? Re(n) : n[0] + $e(n, We(n, t));
  }
  function $e(n, t) {
    if (t.length < 1 || (n.length != t.length && n.length != t.length + 2))
      return Re(n);
    var e = n.length != t.length,
      r = "",
      i = n[0],
      u = n[1],
      a = t[0],
      o = a,
      c = 1;
    if (
      (e &&
        ((r +=
          "Q" +
          (u[0] - (2 * a[0]) / 3) +
          "," +
          (u[1] - (2 * a[1]) / 3) +
          "," +
          u[0] +
          "," +
          u[1]),
        (i = n[1]),
        (c = 2)),
      t.length > 1)
    ) {
      (o = t[1]),
        (u = n[c]),
        c++,
        (r +=
          "C" +
          (i[0] + a[0]) +
          "," +
          (i[1] + a[1]) +
          "," +
          (u[0] - o[0]) +
          "," +
          (u[1] - o[1]) +
          "," +
          u[0] +
          "," +
          u[1]);
      for (var l = 2; l < t.length; l++, c++)
        (u = n[c]),
          (o = t[l]),
          (r +=
            "S" +
            (u[0] - o[0]) +
            "," +
            (u[1] - o[1]) +
            "," +
            u[0] +
            "," +
            u[1]);
    }
    if (e) {
      var f = n[c];
      r +=
        "Q" +
        (u[0] + (2 * o[0]) / 3) +
        "," +
        (u[1] + (2 * o[1]) / 3) +
        "," +
        f[0] +
        "," +
        f[1];
    }
    return r;
  }
  function We(n, t) {
    for (
      var e, r = [], i = (1 - t) / 2, u = n[0], a = n[1], o = 1, c = n.length;
      ++o < c;

    )
      (e = u),
        (u = a),
        (a = n[o]),
        r.push([i * (a[0] - e[0]), i * (a[1] - e[1])]);
    return r;
  }
  function Je(n) {
    if (n.length < 3) return Re(n);
    var t = 1,
      e = n.length,
      r = n[0],
      i = r[0],
      u = r[1],
      a = [i, i, i, (r = n[1])[0]],
      o = [u, u, u, r[1]],
      c = [i, ",", u];
    for (tr(c, a, o); ++t < e; )
      (r = n[t]), a.shift(), a.push(r[0]), o.shift(), o.push(r[1]), tr(c, a, o);
    for (t = -1; ++t < 2; )
      a.shift(), a.push(r[0]), o.shift(), o.push(r[1]), tr(c, a, o);
    return c.join("");
  }
  function Ge(n) {
    if (n.length < 4) return Re(n);
    for (var t, e = [], r = -1, i = n.length, u = [0], a = [0]; ++r < 3; )
      (t = n[r]), u.push(t[0]), a.push(t[1]);
    for (e.push(nr(ac, u) + "," + nr(ac, a)), --r; ++r < i; )
      (t = n[r]), u.shift(), u.push(t[0]), a.shift(), a.push(t[1]), tr(e, u, a);
    return e.join("");
  }
  function Ke(n) {
    for (var t, e, r = -1, i = n.length, u = i + 4, a = [], o = []; ++r < 4; )
      (e = n[r % i]), a.push(e[0]), o.push(e[1]);
    for (t = [nr(ac, a), ",", nr(ac, o)], --r; ++r < u; )
      (e = n[r % i]),
        a.shift(),
        a.push(e[0]),
        o.shift(),
        o.push(e[1]),
        tr(t, a, o);
    return t.join("");
  }
  function Qe(n, t) {
    var e = n.length - 1;
    if (e)
      for (
        var r,
          i,
          u = n[0][0],
          a = n[0][1],
          o = n[e][0] - u,
          c = n[e][1] - a,
          l = -1;
        ++l <= e;

      )
        (r = n[l]),
          (i = l / e),
          (r[0] = t * r[0] + (1 - t) * (u + i * o)),
          (r[1] = t * r[1] + (1 - t) * (a + i * c));
    return Je(n);
  }
  function nr(n, t) {
    return n[0] * t[0] + n[1] * t[1] + n[2] * t[2] + n[3] * t[3];
  }
  function tr(n, t, e) {
    n.push(
      "C",
      nr(ic, t),
      ",",
      nr(ic, e),
      ",",
      nr(uc, t),
      ",",
      nr(uc, e),
      ",",
      nr(ac, t),
      ",",
      nr(ac, e)
    );
  }
  function er(n, t) {
    return (t[1] - n[1]) / (t[0] - n[0]);
  }
  function rr(n) {
    for (
      var t = 0,
        e = n.length - 1,
        r = [],
        i = n[0],
        u = n[1],
        a = (r[0] = er(i, u));
      ++t < e;

    )
      r[t] = (a + (a = er((i = u), (u = n[t + 1])))) / 2;
    return (r[t] = a), r;
  }
  function ir(n) {
    for (var t, e, r, i, u = [], a = rr(n), o = -1, c = n.length - 1; ++o < c; )
      (t = er(n[o], n[o + 1])),
        Math.abs(t) < 1e-6
          ? (a[o] = a[o + 1] = 0)
          : ((e = a[o] / t),
            (r = a[o + 1] / t),
            (i = e * e + r * r),
            i > 9 &&
              ((i = (3 * t) / Math.sqrt(i)),
              (a[o] = i * e),
              (a[o + 1] = i * r)));
    for (o = -1; ++o <= c; )
      (i =
        (n[Math.min(c, o + 1)][0] - n[Math.max(0, o - 1)][0]) /
        (6 * (1 + a[o] * a[o]))),
        u.push([i || 0, a[o] * i || 0]);
    return u;
  }
  function ur(n) {
    return n.length < 3 ? Re(n) : n[0] + $e(n, ir(n));
  }
  function ar(n, t, e, r) {
    var i, u, a, o, c, l, f;
    return (
      (i = r[n]),
      (u = i[0]),
      (a = i[1]),
      (i = r[t]),
      (o = i[0]),
      (c = i[1]),
      (i = r[e]),
      (l = i[0]),
      (f = i[1]),
      (f - a) * (o - u) - (c - a) * (l - u) > 0
    );
  }
  function or(n, t, e) {
    return (e[0] - t[0]) * (n[1] - t[1]) < (e[1] - t[1]) * (n[0] - t[0]);
  }
  function cr(n, t, e, r) {
    var i = n[0],
      u = e[0],
      a = t[0] - i,
      o = r[0] - u,
      c = n[1],
      l = e[1],
      f = t[1] - c,
      s = r[1] - l,
      h = (o * (c - l) - s * (i - u)) / (s * a - o * f);
    return [i + h * a, c + h * f];
  }
  function lr(n, t) {
    var e = {
        list: n
          .map(function (n, t) {
            return { index: t, x: n[0], y: n[1] };
          })
          .sort(function (n, t) {
            return n.y < t.y
              ? -1
              : n.y > t.y
              ? 1
              : n.x < t.x
              ? -1
              : n.x > t.x
              ? 1
              : 0;
          }),
        bottomSite: null,
      },
      r = {
        list: [],
        leftEnd: null,
        rightEnd: null,
        init: function () {
          (r.leftEnd = r.createHalfEdge(null, "l")),
            (r.rightEnd = r.createHalfEdge(null, "l")),
            (r.leftEnd.r = r.rightEnd),
            (r.rightEnd.l = r.leftEnd),
            r.list.unshift(r.leftEnd, r.rightEnd);
        },
        createHalfEdge: function (n, t) {
          return { edge: n, side: t, vertex: null, l: null, r: null };
        },
        insert: function (n, t) {
          (t.l = n), (t.r = n.r), (n.r.l = t), (n.r = t);
        },
        leftBound: function (n) {
          var t = r.leftEnd;
          do t = t.r;
          while (t != r.rightEnd && i.rightOf(t, n));
          return (t = t.l);
        },
        del: function (n) {
          (n.l.r = n.r), (n.r.l = n.l), (n.edge = null);
        },
        right: function (n) {
          return n.r;
        },
        left: function (n) {
          return n.l;
        },
        leftRegion: function (n) {
          return null == n.edge ? e.bottomSite : n.edge.region[n.side];
        },
        rightRegion: function (n) {
          return null == n.edge ? e.bottomSite : n.edge.region[oc[n.side]];
        },
      },
      i = {
        bisect: function (n, t) {
          var e = { region: { l: n, r: t }, ep: { l: null, r: null } },
            r = t.x - n.x,
            i = t.y - n.y,
            u = r > 0 ? r : -r,
            a = i > 0 ? i : -i;
          return (
            (e.c = n.x * r + n.y * i + 0.5 * (r * r + i * i)),
            u > a
              ? ((e.a = 1), (e.b = i / r), (e.c /= r))
              : ((e.b = 1), (e.a = r / i), (e.c /= i)),
            e
          );
        },
        intersect: function (n, t) {
          var e = n.edge,
            r = t.edge;
          if (!e || !r || e.region.r == r.region.r) return null;
          var i = e.a * r.b - e.b * r.a;
          if (Math.abs(i) < 1e-10) return null;
          var u,
            a,
            o = (e.c * r.b - r.c * e.b) / i,
            c = (r.c * e.a - e.c * r.a) / i,
            l = e.region.r,
            f = r.region.r;
          l.y < f.y || (l.y == f.y && l.x < f.x)
            ? ((u = n), (a = e))
            : ((u = t), (a = r));
          var s = o >= a.region.r.x;
          return (s && "l" === u.side) || (!s && "r" === u.side)
            ? null
            : { x: o, y: c };
        },
        rightOf: function (n, t) {
          var e = n.edge,
            r = e.region.r,
            i = t.x > r.x;
          if (i && "l" === n.side) return 1;
          if (!i && "r" === n.side) return 0;
          if (1 === e.a) {
            var u = t.y - r.y,
              a = t.x - r.x,
              o = 0,
              c = 0;
            if (
              ((!i && e.b < 0) || (i && e.b >= 0)
                ? (c = o = u >= e.b * a)
                : ((c = t.x + t.y * e.b > e.c),
                  e.b < 0 && (c = !c),
                  c || (o = 1)),
              !o)
            ) {
              var l = r.x - e.region.l.x;
              (c =
                e.b * (a * a - u * u) < l * u * (1 + (2 * a) / l + e.b * e.b)),
                e.b < 0 && (c = !c);
            }
          } else {
            var f = e.c - e.a * t.x,
              s = t.y - f,
              h = t.x - r.x,
              g = f - r.y;
            c = s * s > h * h + g * g;
          }
          return "l" === n.side ? c : !c;
        },
        endPoint: function (n, e, r) {
          (n.ep[e] = r), n.ep[oc[e]] && t(n);
        },
        distance: function (n, t) {
          var e = n.x - t.x,
            r = n.y - t.y;
          return Math.sqrt(e * e + r * r);
        },
      },
      u = {
        list: [],
        insert: function (n, t, e) {
          (n.vertex = t), (n.ystar = t.y + e);
          for (var r = 0, i = u.list, a = i.length; a > r; r++) {
            var o = i[r];
            if (
              !(n.ystar > o.ystar || (n.ystar == o.ystar && t.x > o.vertex.x))
            )
              break;
          }
          i.splice(r, 0, n);
        },
        del: function (n) {
          for (var t = 0, e = u.list, r = e.length; r > t && e[t] != n; ++t);
          e.splice(t, 1);
        },
        empty: function () {
          return 0 === u.list.length;
        },
        nextEvent: function (n) {
          for (var t = 0, e = u.list, r = e.length; r > t; ++t)
            if (e[t] == n) return e[t + 1];
          return null;
        },
        min: function () {
          var n = u.list[0];
          return { x: n.vertex.x, y: n.ystar };
        },
        extractMin: function () {
          return u.list.shift();
        },
      };
    r.init(), (e.bottomSite = e.list.shift());
    for (var a, o, c, l, f, s, h, g, p, d, m, v, y, M = e.list.shift(); ; )
      if (
        (u.empty() || (a = u.min()),
        M && (u.empty() || M.y < a.y || (M.y == a.y && M.x < a.x)))
      )
        (o = r.leftBound(M)),
          (c = r.right(o)),
          (h = r.rightRegion(o)),
          (v = i.bisect(h, M)),
          (s = r.createHalfEdge(v, "l")),
          r.insert(o, s),
          (d = i.intersect(o, s)),
          d && (u.del(o), u.insert(o, d, i.distance(d, M))),
          (o = s),
          (s = r.createHalfEdge(v, "r")),
          r.insert(o, s),
          (d = i.intersect(s, c)),
          d && u.insert(s, d, i.distance(d, M)),
          (M = e.list.shift());
      else {
        if (u.empty()) break;
        (o = u.extractMin()),
          (l = r.left(o)),
          (c = r.right(o)),
          (f = r.right(c)),
          (h = r.leftRegion(o)),
          (g = r.rightRegion(c)),
          (m = o.vertex),
          i.endPoint(o.edge, o.side, m),
          i.endPoint(c.edge, c.side, m),
          r.del(o),
          u.del(c),
          r.del(c),
          (y = "l"),
          h.y > g.y && ((p = h), (h = g), (g = p), (y = "r")),
          (v = i.bisect(h, g)),
          (s = r.createHalfEdge(v, y)),
          r.insert(l, s),
          i.endPoint(v, oc[y], m),
          (d = i.intersect(l, s)),
          d && (u.del(l), u.insert(l, d, i.distance(d, h))),
          (d = i.intersect(s, f)),
          d && u.insert(s, d, i.distance(d, h));
      }
    for (o = r.right(r.leftEnd); o != r.rightEnd; o = r.right(o)) t(o.edge);
  }
  function fr(n) {
    return n.x;
  }
  function sr(n) {
    return n.y;
  }
  function hr() {
    return { leaf: !0, nodes: [], point: null, x: null, y: null };
  }
  function gr(n, t, e, r, i, u) {
    if (!n(t, e, r, i, u)) {
      var a = 0.5 * (e + i),
        o = 0.5 * (r + u),
        c = t.nodes;
      c[0] && gr(n, c[0], e, r, a, o),
        c[1] && gr(n, c[1], a, r, i, o),
        c[2] && gr(n, c[2], e, o, a, u),
        c[3] && gr(n, c[3], a, o, i, u);
    }
  }
  function pr(n, t) {
    (n = va.rgb(n)), (t = va.rgb(t));
    var e = n.r,
      r = n.g,
      i = n.b,
      u = t.r - e,
      a = t.g - r,
      o = t.b - i;
    return function (n) {
      return (
        "#" +
        it(Math.round(e + u * n)) +
        it(Math.round(r + a * n)) +
        it(Math.round(i + o * n))
      );
    };
  }
  function dr(n) {
    var t = [n.a, n.b],
      e = [n.c, n.d],
      r = vr(t),
      i = mr(t, e),
      u = vr(yr(e, t, -i)) || 0;
    t[0] * e[1] < e[0] * t[1] &&
      ((t[0] *= -1), (t[1] *= -1), (r *= -1), (i *= -1)),
      (this.rotate =
        (r ? Math.atan2(t[1], t[0]) : Math.atan2(-e[0], e[1])) * Ga),
      (this.translate = [n.e, n.f]),
      (this.scale = [r, u]),
      (this.skew = u ? Math.atan2(i, u) * Ga : 0);
  }
  function mr(n, t) {
    return n[0] * t[0] + n[1] * t[1];
  }
  function vr(n) {
    var t = Math.sqrt(mr(n, n));
    return t && ((n[0] /= t), (n[1] /= t)), t;
  }
  function yr(n, t, e) {
    return (n[0] += e * t[0]), (n[1] += e * t[1]), n;
  }
  function Mr(n, t) {
    return (
      (t -= n = +n),
      function (e) {
        return n + t * e;
      }
    );
  }
  function xr(n, t) {
    var e,
      r = [],
      i = [],
      u = va.transform(n),
      a = va.transform(t),
      o = u.translate,
      c = a.translate,
      l = u.rotate,
      f = a.rotate,
      s = u.skew,
      h = a.skew,
      g = u.scale,
      p = a.scale;
    return (
      o[0] != c[0] || o[1] != c[1]
        ? (r.push("translate(", null, ",", null, ")"),
          i.push({ i: 1, x: Mr(o[0], c[0]) }, { i: 3, x: Mr(o[1], c[1]) }))
        : c[0] || c[1]
        ? r.push("translate(" + c + ")")
        : r.push(""),
      l != f
        ? (l - f > 180 ? (f += 360) : f - l > 180 && (l += 360),
          i.push({
            i: r.push(r.pop() + "rotate(", null, ")") - 2,
            x: Mr(l, f),
          }))
        : f && r.push(r.pop() + "rotate(" + f + ")"),
      s != h
        ? i.push({ i: r.push(r.pop() + "skewX(", null, ")") - 2, x: Mr(s, h) })
        : h && r.push(r.pop() + "skewX(" + h + ")"),
      g[0] != p[0] || g[1] != p[1]
        ? ((e = r.push(r.pop() + "scale(", null, ",", null, ")")),
          i.push(
            { i: e - 4, x: Mr(g[0], p[0]) },
            { i: e - 2, x: Mr(g[1], p[1]) }
          ))
        : (1 != p[0] || 1 != p[1]) && r.push(r.pop() + "scale(" + p + ")"),
      (e = i.length),
      function (n) {
        for (var t, u = -1; ++u < e; ) r[(t = i[u]).i] = t.x(n);
        return r.join("");
      }
    );
  }
  function br(n, t) {
    var e,
      r = {},
      i = {};
    for (e in n) e in t ? (r[e] = Sr(e)(n[e], t[e])) : (i[e] = n[e]);
    for (e in t) e in n || (i[e] = t[e]);
    return function (n) {
      for (e in r) i[e] = r[e](n);
      return i;
    };
  }
  function _r(n, t) {
    var e,
      r,
      i,
      u,
      a,
      o = 0,
      c = 0,
      l = [],
      f = [];
    for (n += "", t += "", lc.lastIndex = 0, r = 0; (e = lc.exec(t)); ++r)
      e.index && l.push(t.substring(o, (c = e.index))),
        f.push({ i: l.length, x: e[0] }),
        l.push(null),
        (o = lc.lastIndex);
    for (
      o < t.length && l.push(t.substring(o)), r = 0, u = f.length;
      (e = lc.exec(n)) && u > r;
      ++r
    )
      if (((a = f[r]), a.x == e[0])) {
        if (a.i)
          if (null == l[a.i + 1])
            for (l[a.i - 1] += a.x, l.splice(a.i, 1), i = r + 1; u > i; ++i)
              f[i].i--;
          else
            for (
              l[a.i - 1] += a.x + l[a.i + 1], l.splice(a.i, 2), i = r + 1;
              u > i;
              ++i
            )
              f[i].i -= 2;
        else if (null == l[a.i + 1]) l[a.i] = a.x;
        else
          for (
            l[a.i] = a.x + l[a.i + 1], l.splice(a.i + 1, 1), i = r + 1;
            u > i;
            ++i
          )
            f[i].i--;
        f.splice(r, 1), u--, r--;
      } else a.x = Mr(parseFloat(e[0]), parseFloat(a.x));
    for (; u > r; )
      (a = f.pop()),
        null == l[a.i + 1]
          ? (l[a.i] = a.x)
          : ((l[a.i] = a.x + l[a.i + 1]), l.splice(a.i + 1, 1)),
        u--;
    return 1 === l.length
      ? null == l[0]
        ? ((a = f[0].x),
          function (n) {
            return a(n) + "";
          })
        : function () {
            return t;
          }
      : function (n) {
          for (r = 0; u > r; ++r) l[(a = f[r]).i] = a.x(n);
          return l.join("");
        };
  }
  function wr(n, t) {
    for (
      var e, r = va.interpolators.length;
      --r >= 0 && !(e = va.interpolators[r](n, t));

    );
    return e;
  }
  function Sr(n) {
    return "transform" == n ? xr : wr;
  }
  function Er(n, t) {
    var e,
      r = [],
      i = [],
      u = n.length,
      a = t.length,
      o = Math.min(n.length, t.length);
    for (e = 0; o > e; ++e) r.push(wr(n[e], t[e]));
    for (; u > e; ++e) i[e] = n[e];
    for (; a > e; ++e) i[e] = t[e];
    return function (n) {
      for (e = 0; o > e; ++e) i[e] = r[e](n);
      return i;
    };
  }
  function kr(n) {
    return function (t) {
      return 0 >= t ? 0 : t >= 1 ? 1 : n(t);
    };
  }
  function Ar(n) {
    return function (t) {
      return 1 - n(1 - t);
    };
  }
  function Nr(n) {
    return function (t) {
      return 0.5 * (0.5 > t ? n(2 * t) : 2 - n(2 - 2 * t));
    };
  }
  function qr(n) {
    return n * n;
  }
  function Tr(n) {
    return n * n * n;
  }
  function Cr(n) {
    if (0 >= n) return 0;
    if (n >= 1) return 1;
    var t = n * n,
      e = t * n;
    return 4 * (0.5 > n ? e : 3 * (n - t) + e - 0.75);
  }
  function zr(n) {
    return function (t) {
      return Math.pow(t, n);
    };
  }
  function Dr(n) {
    return 1 - Math.cos((n * Ba) / 2);
  }
  function jr(n) {
    return Math.pow(2, 10 * (n - 1));
  }
  function Lr(n) {
    return 1 - Math.sqrt(1 - n * n);
  }
  function Hr(n, t) {
    var e;
    return (
      arguments.length < 2 && (t = 0.45),
      arguments.length
        ? (e = (t / (2 * Ba)) * Math.asin(1 / n))
        : ((n = 1), (e = t / 4)),
      function (r) {
        return 1 + n * Math.pow(2, 10 * -r) * Math.sin((2 * (r - e) * Ba) / t);
      }
    );
  }
  function Fr(n) {
    return (
      n || (n = 1.70158),
      function (t) {
        return t * t * ((n + 1) * t - n);
      }
    );
  }
  function Pr(n) {
    return 1 / 2.75 > n
      ? 7.5625 * n * n
      : 2 / 2.75 > n
      ? 7.5625 * (n -= 1.5 / 2.75) * n + 0.75
      : 2.5 / 2.75 > n
      ? 7.5625 * (n -= 2.25 / 2.75) * n + 0.9375
      : 7.5625 * (n -= 2.625 / 2.75) * n + 0.984375;
  }
  function Or(n, t) {
    (n = va.hcl(n)), (t = va.hcl(t));
    var e = n.h,
      r = n.c,
      i = n.l,
      u = t.h - e,
      a = t.c - r,
      o = t.l - i;
    return (
      isNaN(a) && ((a = 0), (r = isNaN(r) ? t.c : r)),
      isNaN(u)
        ? ((u = 0), (e = isNaN(e) ? t.h : e))
        : u > 180
        ? (u -= 360)
        : -180 > u && (u += 360),
      function (n) {
        return $(e + u * n, r + a * n, i + o * n) + "";
      }
    );
  }
  function Rr(n, t) {
    (n = va.hsl(n)), (t = va.hsl(t));
    var e = n.h,
      r = n.s,
      i = n.l,
      u = t.h - e,
      a = t.s - r,
      o = t.l - i;
    return (
      isNaN(a) && ((a = 0), (r = isNaN(r) ? t.s : r)),
      isNaN(u)
        ? ((u = 0), (e = isNaN(e) ? t.h : e))
        : u > 180
        ? (u -= 360)
        : -180 > u && (u += 360),
      function (n) {
        return O(e + u * n, r + a * n, i + o * n) + "";
      }
    );
  }
  function Yr(n, t) {
    (n = va.lab(n)), (t = va.lab(t));
    var e = n.l,
      r = n.a,
      i = n.b,
      u = t.l - e,
      a = t.a - r,
      o = t.b - i;
    return function (n) {
      return G(e + u * n, r + a * n, i + o * n) + "";
    };
  }
  function Ur(n, t) {
    return (
      (t -= n),
      function (e) {
        return Math.round(n + t * e);
      }
    );
  }
  function Ir(n, t) {
    return (
      (t = t - (n = +n) ? 1 / (t - n) : 0),
      function (e) {
        return (e - n) * t;
      }
    );
  }
  function Vr(n, t) {
    return (
      (t = t - (n = +n) ? 1 / (t - n) : 0),
      function (e) {
        return Math.max(0, Math.min(1, (e - n) * t));
      }
    );
  }
  function Xr(n) {
    for (var t = n.source, e = n.target, r = Br(t, e), i = [t]; t !== r; )
      (t = t.parent), i.push(t);
    for (var u = i.length; e !== r; ) i.splice(u, 0, e), (e = e.parent);
    return i;
  }
  function Zr(n) {
    for (var t = [], e = n.parent; null != e; )
      t.push(n), (n = e), (e = e.parent);
    return t.push(n), t;
  }
  function Br(n, t) {
    if (n === t) return n;
    for (
      var e = Zr(n), r = Zr(t), i = e.pop(), u = r.pop(), a = null;
      i === u;

    )
      (a = i), (i = e.pop()), (u = r.pop());
    return a;
  }
  function $r(n) {
    n.fixed |= 2;
  }
  function Wr(n) {
    n.fixed &= -7;
  }
  function Jr(n) {
    (n.fixed |= 4), (n.px = n.x), (n.py = n.y);
  }
  function Gr(n) {
    n.fixed &= -5;
  }
  function Kr(n, t, e) {
    var r = 0,
      i = 0;
    if (((n.charge = 0), !n.leaf))
      for (var u, a = n.nodes, o = a.length, c = -1; ++c < o; )
        (u = a[c]),
          null != u &&
            (Kr(u, t, e),
            (n.charge += u.charge),
            (r += u.charge * u.cx),
            (i += u.charge * u.cy));
    if (n.point) {
      n.leaf ||
        ((n.point.x += Math.random() - 0.5),
        (n.point.y += Math.random() - 0.5));
      var l = t * e[n.point.index];
      (n.charge += n.pointCharge = l),
        (r += l * n.point.x),
        (i += l * n.point.y);
    }
    (n.cx = r / n.charge), (n.cy = i / n.charge);
  }
  function Qr(n, t) {
    return (
      va.rebind(n, t, "sort", "children", "value"),
      (n.nodes = n),
      (n.links = ri),
      n
    );
  }
  function ni(n) {
    return n.children;
  }
  function ti(n) {
    return n.value;
  }
  function ei(n, t) {
    return t.value - n.value;
  }
  function ri(n) {
    return va.merge(
      n.map(function (n) {
        return (n.children || []).map(function (t) {
          return { source: n, target: t };
        });
      })
    );
  }
  function ii(n) {
    return n.x;
  }
  function ui(n) {
    return n.y;
  }
  function ai(n, t, e) {
    (n.y0 = t), (n.y = e);
  }
  function oi(n) {
    return va.range(n.length);
  }
  function ci(n) {
    for (var t = -1, e = n[0].length, r = []; ++t < e; ) r[t] = 0;
    return r;
  }
  function li(n) {
    for (var t, e = 1, r = 0, i = n[0][1], u = n.length; u > e; ++e)
      (t = n[e][1]) > i && ((r = e), (i = t));
    return r;
  }
  function fi(n) {
    return n.reduce(si, 0);
  }
  function si(n, t) {
    return n + t[1];
  }
  function hi(n, t) {
    return gi(n, Math.ceil(Math.log(t.length) / Math.LN2 + 1));
  }
  function gi(n, t) {
    for (var e = -1, r = +n[0], i = (n[1] - r) / t, u = []; ++e <= t; )
      u[e] = i * e + r;
    return u;
  }
  function pi(n) {
    return [va.min(n), va.max(n)];
  }
  function di(n, t) {
    return n.parent == t.parent ? 1 : 2;
  }
  function mi(n) {
    var t = n.children;
    return t && t.length ? t[0] : n._tree.thread;
  }
  function vi(n) {
    var t,
      e = n.children;
    return e && (t = e.length) ? e[t - 1] : n._tree.thread;
  }
  function yi(n, t) {
    var e = n.children;
    if (e && (i = e.length))
      for (var r, i, u = -1; ++u < i; ) t((r = yi(e[u], t)), n) > 0 && (n = r);
    return n;
  }
  function Mi(n, t) {
    return n.x - t.x;
  }
  function xi(n, t) {
    return t.x - n.x;
  }
  function bi(n, t) {
    return n.depth - t.depth;
  }
  function _i(n, t) {
    function e(n, r) {
      var i = n.children;
      if (i && (a = i.length))
        for (var u, a, o = null, c = -1; ++c < a; )
          (u = i[c]), e(u, o), (o = u);
      t(n, r);
    }
    e(n, null);
  }
  function wi(n) {
    for (var t, e = 0, r = 0, i = n.children, u = i.length; --u >= 0; )
      (t = i[u]._tree),
        (t.prelim += e),
        (t.mod += e),
        (e += t.shift + (r += t.change));
  }
  function Si(n, t, e) {
    (n = n._tree), (t = t._tree);
    var r = e / (t.number - n.number);
    (n.change += r),
      (t.change -= r),
      (t.shift += e),
      (t.prelim += e),
      (t.mod += e);
  }
  function Ei(n, t, e) {
    return n._tree.ancestor.parent == t.parent ? n._tree.ancestor : e;
  }
  function ki(n, t) {
    return n.value - t.value;
  }
  function Ai(n, t) {
    var e = n._pack_next;
    (n._pack_next = t),
      (t._pack_prev = n),
      (t._pack_next = e),
      (e._pack_prev = t);
  }
  function Ni(n, t) {
    (n._pack_next = t), (t._pack_prev = n);
  }
  function qi(n, t) {
    var e = t.x - n.x,
      r = t.y - n.y,
      i = n.r + t.r;
    return 0.999 * i * i > e * e + r * r;
  }
  function Ti(n) {
    function t(n) {
      (f = Math.min(n.x - n.r, f)),
        (s = Math.max(n.x + n.r, s)),
        (h = Math.min(n.y - n.r, h)),
        (g = Math.max(n.y + n.r, g));
    }
    if ((e = n.children) && (l = e.length)) {
      var e,
        r,
        i,
        u,
        a,
        o,
        c,
        l,
        f = 1 / 0,
        s = -1 / 0,
        h = 1 / 0,
        g = -1 / 0;
      if (
        (e.forEach(Ci),
        (r = e[0]),
        (r.x = -r.r),
        (r.y = 0),
        t(r),
        l > 1 && ((i = e[1]), (i.x = i.r), (i.y = 0), t(i), l > 2))
      )
        for (
          u = e[2],
            ji(r, i, u),
            t(u),
            Ai(r, u),
            r._pack_prev = u,
            Ai(u, i),
            i = r._pack_next,
            a = 3;
          l > a;
          a++
        ) {
          ji(r, i, (u = e[a]));
          var p = 0,
            d = 1,
            m = 1;
          for (o = i._pack_next; o !== i; o = o._pack_next, d++)
            if (qi(o, u)) {
              p = 1;
              break;
            }
          if (1 == p)
            for (
              c = r._pack_prev;
              c !== o._pack_prev && !qi(c, u);
              c = c._pack_prev, m++
            );
          p
            ? (m > d || (d == m && i.r < r.r) ? Ni(r, (i = o)) : Ni((r = c), i),
              a--)
            : (Ai(r, u), (i = u), t(u));
        }
      var v = (f + s) / 2,
        y = (h + g) / 2,
        M = 0;
      for (a = 0; l > a; a++)
        (u = e[a]),
          (u.x -= v),
          (u.y -= y),
          (M = Math.max(M, u.r + Math.sqrt(u.x * u.x + u.y * u.y)));
      (n.r = M), e.forEach(zi);
    }
  }
  function Ci(n) {
    n._pack_next = n._pack_prev = n;
  }
  function zi(n) {
    delete n._pack_next, delete n._pack_prev;
  }
  function Di(n, t, e, r) {
    var i = n.children;
    if (((n.x = t += r * n.x), (n.y = e += r * n.y), (n.r *= r), i))
      for (var u = -1, a = i.length; ++u < a; ) Di(i[u], t, e, r);
  }
  function ji(n, t, e) {
    var r = n.r + e.r,
      i = t.x - n.x,
      u = t.y - n.y;
    if (r && (i || u)) {
      var a = t.r + e.r,
        o = i * i + u * u;
      (a *= a), (r *= r);
      var c = 0.5 + (r - a) / (2 * o),
        l =
          Math.sqrt(Math.max(0, 2 * a * (r + o) - (r -= o) * r - a * a)) /
          (2 * o);
      (e.x = n.x + c * i + l * u), (e.y = n.y + c * u - l * i);
    } else (e.x = n.x + r), (e.y = n.y);
  }
  function Li(n) {
    return (
      1 +
      va.max(n, function (n) {
        return n.y;
      })
    );
  }
  function Hi(n) {
    return (
      n.reduce(function (n, t) {
        return n + t.x;
      }, 0) / n.length
    );
  }
  function Fi(n) {
    var t = n.children;
    return t && t.length ? Fi(t[0]) : n;
  }
  function Pi(n) {
    var t,
      e = n.children;
    return e && (t = e.length) ? Pi(e[t - 1]) : n;
  }
  function Oi(n) {
    return { x: n.x, y: n.y, dx: n.dx, dy: n.dy };
  }
  function Ri(n, t) {
    var e = n.x + t[3],
      r = n.y + t[0],
      i = n.dx - t[1] - t[3],
      u = n.dy - t[0] - t[2];
    return (
      0 > i && ((e += i / 2), (i = 0)),
      0 > u && ((r += u / 2), (u = 0)),
      { x: e, y: r, dx: i, dy: u }
    );
  }
  function Yi(n) {
    var t = n[0],
      e = n[n.length - 1];
    return e > t ? [t, e] : [e, t];
  }
  function Ui(n) {
    return n.rangeExtent ? n.rangeExtent() : Yi(n.range());
  }
  function Ii(n, t, e, r) {
    var i = e(n[0], n[1]),
      u = r(t[0], t[1]);
    return function (n) {
      return u(i(n));
    };
  }
  function Vi(n, t) {
    var e,
      r = 0,
      i = n.length - 1,
      u = n[r],
      a = n[i];
    return (
      u > a && ((e = r), (r = i), (i = e), (e = u), (u = a), (a = e)),
      (n[r] = t.floor(u)),
      (n[i] = t.ceil(a)),
      n
    );
  }
  function Xi(n) {
    return n
      ? {
          floor: function (t) {
            return Math.floor(t / n) * n;
          },
          ceil: function (t) {
            return Math.ceil(t / n) * n;
          },
        }
      : yc;
  }
  function Zi(n, t, e, r) {
    var i = [],
      u = [],
      a = 0,
      o = Math.min(n.length, t.length) - 1;
    for (
      n[o] < n[0] && ((n = n.slice().reverse()), (t = t.slice().reverse()));
      ++a <= o;

    )
      i.push(e(n[a - 1], n[a])), u.push(r(t[a - 1], t[a]));
    return function (t) {
      var e = va.bisect(n, t, 1, o) - 1;
      return u[e](i[e](t));
    };
  }
  function Bi(n, t, e, r) {
    function i() {
      var i = Math.min(n.length, t.length) > 2 ? Zi : Ii,
        c = r ? Vr : Ir;
      return (a = i(n, t, c, e)), (o = i(t, n, c, wr)), u;
    }
    function u(n) {
      return a(n);
    }
    var a, o;
    return (
      (u.invert = function (n) {
        return o(n);
      }),
      (u.domain = function (t) {
        return arguments.length ? ((n = t.map(Number)), i()) : n;
      }),
      (u.range = function (n) {
        return arguments.length ? ((t = n), i()) : t;
      }),
      (u.rangeRound = function (n) {
        return u.range(n).interpolate(Ur);
      }),
      (u.clamp = function (n) {
        return arguments.length ? ((r = n), i()) : r;
      }),
      (u.interpolate = function (n) {
        return arguments.length ? ((e = n), i()) : e;
      }),
      (u.ticks = function (t) {
        return Ki(n, t);
      }),
      (u.tickFormat = function (t, e) {
        return Qi(n, t, e);
      }),
      (u.nice = function (t) {
        return Wi(n, t), i();
      }),
      (u.copy = function () {
        return Bi(n, t, e, r);
      }),
      i()
    );
  }
  function $i(n, t) {
    return va.rebind(n, t, "range", "rangeRound", "interpolate", "clamp");
  }
  function Wi(n, t) {
    return Vi(n, Xi(t ? Gi(n, t)[2] : Ji(n)));
  }
  function Ji(n) {
    var t = Yi(n),
      e = t[1] - t[0];
    return Math.pow(10, Math.round(Math.log(e) / Math.LN10) - 1);
  }
  function Gi(n, t) {
    var e = Yi(n),
      r = e[1] - e[0],
      i = Math.pow(10, Math.floor(Math.log(r / t) / Math.LN10)),
      u = (t / r) * i;
    return (
      0.15 >= u ? (i *= 10) : 0.35 >= u ? (i *= 5) : 0.75 >= u && (i *= 2),
      (e[0] = Math.ceil(e[0] / i) * i),
      (e[1] = Math.floor(e[1] / i) * i + 0.5 * i),
      (e[2] = i),
      e
    );
  }
  function Ki(n, t) {
    return va.range.apply(va, Gi(n, t));
  }
  function Qi(n, t, e) {
    var r = -Math.floor(Math.log(Gi(n, t)[2]) / Math.LN10 + 0.01);
    return va.format(
      e
        ? e.replace(mo, function (n, t, e, i, u, a, o, c, l, f) {
            return [
              t,
              e,
              i,
              u,
              a,
              o,
              c,
              l || "." + (r - 2 * ("%" === f)),
              f,
            ].join("");
          })
        : ",." + r + "f"
    );
  }
  function nu(n, t, e, r, i) {
    function u(t) {
      return n(e(t));
    }
    return (
      (u.invert = function (t) {
        return r(n.invert(t));
      }),
      (u.domain = function (t) {
        return arguments.length
          ? (t[0] < 0 ? ((e = ru), (r = iu)) : ((e = tu), (r = eu)),
            n.domain((i = t.map(Number)).map(e)),
            u)
          : i;
      }),
      (u.base = function (n) {
        return arguments.length ? ((t = +n), u) : t;
      }),
      (u.nice = function () {
        function r(n) {
          return Math.pow(t, Math.floor(Math.log(n) / Math.log(t)));
        }
        function a(n) {
          return Math.pow(t, Math.ceil(Math.log(n) / Math.log(t)));
        }
        return (
          n.domain(
            Vi(
              i,
              e === tu
                ? { floor: r, ceil: a }
                : {
                    floor: function (n) {
                      return -a(-n);
                    },
                    ceil: function (n) {
                      return -r(-n);
                    },
                  }
            ).map(e)
          ),
          u
        );
      }),
      (u.ticks = function () {
        var i = Yi(n.domain()),
          u = [];
        if (i.every(isFinite)) {
          var a = Math.log(t),
            o = Math.floor(i[0] / a),
            c = Math.ceil(i[1] / a),
            l = r(i[0]),
            f = r(i[1]),
            s = t % 1 ? 2 : t;
          if (e === ru)
            for (u.push(-Math.pow(t, -o)); o++ < c; )
              for (var h = s - 1; h > 0; h--) u.push(-Math.pow(t, -o) * h);
          else {
            for (; c > o; o++)
              for (var h = 1; s > h; h++) u.push(Math.pow(t, o) * h);
            u.push(Math.pow(t, o));
          }
          for (o = 0; u[o] < l; o++);
          for (c = u.length; u[c - 1] > f; c--);
          u = u.slice(o, c);
        }
        return u;
      }),
      (u.tickFormat = function (n, i) {
        if (!arguments.length) return Mc;
        arguments.length < 2
          ? (i = Mc)
          : "function" != typeof i && (i = va.format(i));
        var a,
          o = Math.log(t),
          c = Math.max(0.1, n / u.ticks().length),
          l = e === ru ? ((a = -1e-12), Math.floor) : ((a = 1e-12), Math.ceil);
        return function (n) {
          return n / r(o * l(e(n) / o + a)) <= c ? i(n) : "";
        };
      }),
      (u.copy = function () {
        return nu(n.copy(), t, e, r, i);
      }),
      $i(u, n)
    );
  }
  function tu(n) {
    return Math.log(0 > n ? 0 : n);
  }
  function eu(n) {
    return Math.exp(n);
  }
  function ru(n) {
    return -Math.log(n > 0 ? 0 : -n);
  }
  function iu(n) {
    return -Math.exp(-n);
  }
  function uu(n, t, e) {
    function r(t) {
      return n(i(t));
    }
    var i = au(t),
      u = au(1 / t);
    return (
      (r.invert = function (t) {
        return u(n.invert(t));
      }),
      (r.domain = function (t) {
        return arguments.length ? (n.domain((e = t.map(Number)).map(i)), r) : e;
      }),
      (r.ticks = function (n) {
        return Ki(e, n);
      }),
      (r.tickFormat = function (n, t) {
        return Qi(e, n, t);
      }),
      (r.nice = function (n) {
        return r.domain(Wi(e, n));
      }),
      (r.exponent = function (a) {
        return arguments.length
          ? ((i = au((t = a))), (u = au(1 / t)), n.domain(e.map(i)), r)
          : t;
      }),
      (r.copy = function () {
        return uu(n.copy(), t, e);
      }),
      $i(r, n)
    );
  }
  function au(n) {
    return function (t) {
      return 0 > t ? -Math.pow(-t, n) : Math.pow(t, n);
    };
  }
  function ou(n, t) {
    function e(t) {
      return a[((u.get(t) || u.set(t, n.push(t))) - 1) % a.length];
    }
    function r(t, e) {
      return va.range(n.length).map(function (n) {
        return t + e * n;
      });
    }
    var u, a, o;
    return (
      (e.domain = function (r) {
        if (!arguments.length) return n;
        (n = []), (u = new i());
        for (var a, o = -1, c = r.length; ++o < c; )
          u.has((a = r[o])) || u.set(a, n.push(a));
        return e[t.t].apply(e, t.a);
      }),
      (e.range = function (n) {
        return arguments.length
          ? ((a = n), (o = 0), (t = { t: "range", a: arguments }), e)
          : a;
      }),
      (e.rangePoints = function (i, u) {
        arguments.length < 2 && (u = 0);
        var c = i[0],
          l = i[1],
          f = (l - c) / (Math.max(1, n.length - 1) + u);
        return (
          (a = r(n.length < 2 ? (c + l) / 2 : c + (f * u) / 2, f)),
          (o = 0),
          (t = { t: "rangePoints", a: arguments }),
          e
        );
      }),
      (e.rangeBands = function (i, u, c) {
        arguments.length < 2 && (u = 0), arguments.length < 3 && (c = u);
        var l = i[1] < i[0],
          f = i[l - 0],
          s = i[1 - l],
          h = (s - f) / (n.length - u + 2 * c);
        return (
          (a = r(f + h * c, h)),
          l && a.reverse(),
          (o = h * (1 - u)),
          (t = { t: "rangeBands", a: arguments }),
          e
        );
      }),
      (e.rangeRoundBands = function (i, u, c) {
        arguments.length < 2 && (u = 0), arguments.length < 3 && (c = u);
        var l = i[1] < i[0],
          f = i[l - 0],
          s = i[1 - l],
          h = Math.floor((s - f) / (n.length - u + 2 * c)),
          g = s - f - (n.length - u) * h;
        return (
          (a = r(f + Math.round(g / 2), h)),
          l && a.reverse(),
          (o = Math.round(h * (1 - u))),
          (t = { t: "rangeRoundBands", a: arguments }),
          e
        );
      }),
      (e.rangeBand = function () {
        return o;
      }),
      (e.rangeExtent = function () {
        return Yi(t.a[0]);
      }),
      (e.copy = function () {
        return ou(n, t);
      }),
      e.domain(n)
    );
  }
  function cu(n, t) {
    function e() {
      var e = 0,
        u = t.length;
      for (i = []; ++e < u; ) i[e - 1] = va.quantile(n, e / u);
      return r;
    }
    function r(n) {
      return isNaN((n = +n)) ? void 0 : t[va.bisect(i, n)];
    }
    var i;
    return (
      (r.domain = function (t) {
        return arguments.length
          ? ((n = t
              .filter(function (n) {
                return !isNaN(n);
              })
              .sort(va.ascending)),
            e())
          : n;
      }),
      (r.range = function (n) {
        return arguments.length ? ((t = n), e()) : t;
      }),
      (r.quantiles = function () {
        return i;
      }),
      (r.copy = function () {
        return cu(n, t);
      }),
      e()
    );
  }
  function lu(n, t, e) {
    function r(t) {
      return e[Math.max(0, Math.min(a, Math.floor(u * (t - n))))];
    }
    function i() {
      return (u = e.length / (t - n)), (a = e.length - 1), r;
    }
    var u, a;
    return (
      (r.domain = function (e) {
        return arguments.length
          ? ((n = +e[0]), (t = +e[e.length - 1]), i())
          : [n, t];
      }),
      (r.range = function (n) {
        return arguments.length ? ((e = n), i()) : e;
      }),
      (r.copy = function () {
        return lu(n, t, e);
      }),
      (r.invertExtent = function (t) {
        return (
          (t = e.indexOf(t)), (t = 0 > t ? 0 / 0 : t / u + n), [t, t + 1 / u]
        );
      }),
      i()
    );
  }
  function fu(n, t) {
    function e(e) {
      return e >= e ? t[va.bisect(n, e)] : void 0;
    }
    return (
      (e.domain = function (t) {
        return arguments.length ? ((n = t), e) : n;
      }),
      (e.range = function (n) {
        return arguments.length ? ((t = n), e) : t;
      }),
      (e.invertExtent = function (e) {
        return (e = t.indexOf(e)), [n[e - 1], n[e]];
      }),
      (e.copy = function () {
        return fu(n, t);
      }),
      e
    );
  }
  function su(n) {
    function t(n) {
      return +n;
    }
    return (
      (t.invert = t),
      (t.domain = t.range = function (e) {
        return arguments.length ? ((n = e.map(t)), t) : n;
      }),
      (t.ticks = function (t) {
        return Ki(n, t);
      }),
      (t.tickFormat = function (t, e) {
        return Qi(n, t, e);
      }),
      (t.copy = function () {
        return su(n);
      }),
      t
    );
  }
  function hu(n) {
    return n.innerRadius;
  }
  function gu(n) {
    return n.outerRadius;
  }
  function pu(n) {
    return n.startAngle;
  }
  function du(n) {
    return n.endAngle;
  }
  function mu(n) {
    for (var t, e, r, i = -1, u = n.length; ++i < u; )
      (t = n[i]),
        (e = t[0]),
        (r = t[1] + Sc),
        (t[0] = e * Math.cos(r)),
        (t[1] = e * Math.sin(r));
    return n;
  }
  function vu(n) {
    function t(t) {
      function c() {
        d.push("M", o(n(v), s), f, l(n(m.reverse()), s), "Z");
      }
      for (
        var h,
          g,
          p,
          d = [],
          m = [],
          v = [],
          y = -1,
          M = t.length,
          x = ft(e),
          b = ft(i),
          _ =
            e === r
              ? function () {
                  return g;
                }
              : ft(r),
          w =
            i === u
              ? function () {
                  return p;
                }
              : ft(u);
        ++y < M;

      )
        a.call(this, (h = t[y]), y)
          ? (m.push([(g = +x.call(this, h, y)), (p = +b.call(this, h, y))]),
            v.push([+_.call(this, h, y), +w.call(this, h, y)]))
          : m.length && (c(), (m = []), (v = []));
      return m.length && c(), d.length ? d.join("") : null;
    }
    var e = Pe,
      r = Pe,
      i = 0,
      u = Oe,
      a = Rt,
      o = Re,
      c = o.key,
      l = o,
      f = "L",
      s = 0.7;
    return (
      (t.x = function (n) {
        return arguments.length ? ((e = r = n), t) : r;
      }),
      (t.x0 = function (n) {
        return arguments.length ? ((e = n), t) : e;
      }),
      (t.x1 = function (n) {
        return arguments.length ? ((r = n), t) : r;
      }),
      (t.y = function (n) {
        return arguments.length ? ((i = u = n), t) : u;
      }),
      (t.y0 = function (n) {
        return arguments.length ? ((i = n), t) : i;
      }),
      (t.y1 = function (n) {
        return arguments.length ? ((u = n), t) : u;
      }),
      (t.defined = function (n) {
        return arguments.length ? ((a = n), t) : a;
      }),
      (t.interpolate = function (n) {
        return arguments.length
          ? ((c = "function" == typeof n ? (o = n) : (o = rc.get(n) || Re).key),
            (l = o.reverse || o),
            (f = o.closed ? "M" : "L"),
            t)
          : c;
      }),
      (t.tension = function (n) {
        return arguments.length ? ((s = n), t) : s;
      }),
      t
    );
  }
  function yu(n) {
    return n.radius;
  }
  function Mu(n) {
    return [n.x, n.y];
  }
  function xu(n) {
    return function () {
      var t = n.apply(this, arguments),
        e = t[0],
        r = t[1] + Sc;
      return [e * Math.cos(r), e * Math.sin(r)];
    };
  }
  function bu() {
    return 64;
  }
  function _u() {
    return "circle";
  }
  function wu(n) {
    var t = Math.sqrt(n / Ba);
    return (
      "M0," +
      t +
      "A" +
      t +
      "," +
      t +
      " 0 1,1 0," +
      -t +
      "A" +
      t +
      "," +
      t +
      " 0 1,1 0," +
      t +
      "Z"
    );
  }
  function Su(n, t) {
    return Ta(n, Tc), (n.id = t), n;
  }
  function Eu(n, t, e, r) {
    var i = n.id;
    return q(
      n,
      "function" == typeof e
        ? function (n, u, a) {
            n.__transition__[i].tween.set(t, r(e.call(n, n.__data__, u, a)));
          }
        : ((e = r(e)),
          function (n) {
            n.__transition__[i].tween.set(t, e);
          })
    );
  }
  function ku(n) {
    return (
      null == n && (n = ""),
      function () {
        this.textContent = n;
      }
    );
  }
  function Au(n, t, e, r) {
    var u = n.__transition__ || (n.__transition__ = { active: 0, count: 0 }),
      a = u[e];
    if (!a) {
      var o = r.time;
      return (
        (a = u[e] = {
          tween: new i(),
          event: va.dispatch("start", "end"),
          time: o,
          ease: r.ease,
          delay: r.delay,
          duration: r.duration,
        }),
        ++u.count,
        va.timer(
          function (r) {
            function i(r) {
              return u.active > e
                ? l()
                : ((u.active = e),
                  h.start.call(n, f, t),
                  a.tween.forEach(function (e, r) {
                    (r = r.call(n, f, t)) && d.push(r);
                  }),
                  c(r) || va.timer(c, 0, o),
                  1);
            }
            function c(r) {
              if (u.active !== e) return l();
              for (var i = (r - g) / p, a = s(i), o = d.length; o > 0; )
                d[--o].call(n, a);
              return i >= 1 ? (l(), h.end.call(n, f, t), 1) : void 0;
            }
            function l() {
              return --u.count ? delete u[e] : delete n.__transition__, 1;
            }
            var f = n.__data__,
              s = a.ease,
              h = a.event,
              g = a.delay,
              p = a.duration,
              d = [];
            return r >= g ? i(r) : va.timer(i, g, o), 1;
          },
          0,
          o
        ),
        a
      );
    }
  }
  function Nu(n, t) {
    n.attr("transform", function (n) {
      return "translate(" + t(n) + ",0)";
    });
  }
  function qu(n, t) {
    n.attr("transform", function (n) {
      return "translate(0," + t(n) + ")";
    });
  }
  function Tu(n, t, e) {
    if (((r = []), e && t.length > 1)) {
      for (
        var r,
          i,
          u,
          a = Yi(n.domain()),
          o = -1,
          c = t.length,
          l = (t[1] - t[0]) / ++e;
        ++o < c;

      )
        for (i = e; --i > 0; ) (u = +t[o] - i * l) >= a[0] && r.push(u);
      for (--o, i = 0; ++i < e && (u = +t[o] + i * l) < a[1]; ) r.push(u);
    }
    return r;
  }
  function Cu() {
    this._ = new Date(
      arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]
    );
  }
  function zu(n, t, e) {
    function r(t) {
      var e = n(t),
        r = u(e, 1);
      return r - t > t - e ? e : r;
    }
    function i(e) {
      return t((e = n(new Fc(e - 1))), 1), e;
    }
    function u(n, e) {
      return t((n = new Fc(+n)), e), n;
    }
    function a(n, r, u) {
      var a = i(n),
        o = [];
      if (u > 1) for (; r > a; ) e(a) % u || o.push(new Date(+a)), t(a, 1);
      else for (; r > a; ) o.push(new Date(+a)), t(a, 1);
      return o;
    }
    function o(n, t, e) {
      try {
        Fc = Cu;
        var r = new Cu();
        return (r._ = n), a(r, t, e);
      } finally {
        Fc = Date;
      }
    }
    (n.floor = n), (n.round = r), (n.ceil = i), (n.offset = u), (n.range = a);
    var c = (n.utc = Du(n));
    return (
      (c.floor = c),
      (c.round = Du(r)),
      (c.ceil = Du(i)),
      (c.offset = Du(u)),
      (c.range = o),
      n
    );
  }
  function Du(n) {
    return function (t, e) {
      try {
        Fc = Cu;
        var r = new Cu();
        return (r._ = t), n(r, e)._;
      } finally {
        Fc = Date;
      }
    };
  }
  function ju(n, t, e, r) {
    for (var i, u, a = 0, o = t.length, c = e.length; o > a; ) {
      if (r >= c) return -1;
      if (((i = t.charCodeAt(a++)), 37 === i)) {
        if (((u = il[t.charAt(a++)]), !u || (r = u(n, e, r)) < 0)) return -1;
      } else if (i != e.charCodeAt(r++)) return -1;
    }
    return r;
  }
  function Lu(n) {
    return new RegExp("^(?:" + n.map(va.requote).join("|") + ")", "i");
  }
  function Hu(n) {
    for (var t = new i(), e = -1, r = n.length; ++e < r; )
      t.set(n[e].toLowerCase(), e);
    return t;
  }
  function Fu(n, t, e) {
    var r = 0 > n ? "-" : "",
      i = (r ? -n : n) + "",
      u = i.length;
    return r + (e > u ? new Array(e - u + 1).join(t) + i : i);
  }
  function Pu(n, t, e) {
    Wc.lastIndex = 0;
    var r = Wc.exec(t.substring(e));
    return r ? ((n.w = Jc.get(r[0].toLowerCase())), e + r[0].length) : -1;
  }
  function Ou(n, t, e) {
    Bc.lastIndex = 0;
    var r = Bc.exec(t.substring(e));
    return r ? ((n.w = $c.get(r[0].toLowerCase())), e + r[0].length) : -1;
  }
  function Ru(n, t, e) {
    ul.lastIndex = 0;
    var r = ul.exec(t.substring(e, e + 1));
    return r ? ((n.w = +r[0]), e + r[0].length) : -1;
  }
  function Yu(n, t, e) {
    ul.lastIndex = 0;
    var r = ul.exec(t.substring(e));
    return r ? ((n.U = +r[0]), e + r[0].length) : -1;
  }
  function Uu(n, t, e) {
    ul.lastIndex = 0;
    var r = ul.exec(t.substring(e));
    return r ? ((n.W = +r[0]), e + r[0].length) : -1;
  }
  function Iu(n, t, e) {
    Qc.lastIndex = 0;
    var r = Qc.exec(t.substring(e));
    return r ? ((n.m = nl.get(r[0].toLowerCase())), e + r[0].length) : -1;
  }
  function Vu(n, t, e) {
    Gc.lastIndex = 0;
    var r = Gc.exec(t.substring(e));
    return r ? ((n.m = Kc.get(r[0].toLowerCase())), e + r[0].length) : -1;
  }
  function Xu(n, t, e) {
    return ju(n, rl.c.toString(), t, e);
  }
  function Zu(n, t, e) {
    return ju(n, rl.x.toString(), t, e);
  }
  function Bu(n, t, e) {
    return ju(n, rl.X.toString(), t, e);
  }
  function $u(n, t, e) {
    ul.lastIndex = 0;
    var r = ul.exec(t.substring(e, e + 4));
    return r ? ((n.y = +r[0]), e + r[0].length) : -1;
  }
  function Wu(n, t, e) {
    ul.lastIndex = 0;
    var r = ul.exec(t.substring(e, e + 2));
    return r ? ((n.y = Ju(+r[0])), e + r[0].length) : -1;
  }
  function Ju(n) {
    return n + (n > 68 ? 1900 : 2e3);
  }
  function Gu(n, t, e) {
    ul.lastIndex = 0;
    var r = ul.exec(t.substring(e, e + 2));
    return r ? ((n.m = r[0] - 1), e + r[0].length) : -1;
  }
  function Ku(n, t, e) {
    ul.lastIndex = 0;
    var r = ul.exec(t.substring(e, e + 2));
    return r ? ((n.d = +r[0]), e + r[0].length) : -1;
  }
  function Qu(n, t, e) {
    ul.lastIndex = 0;
    var r = ul.exec(t.substring(e, e + 3));
    return r ? ((n.j = +r[0]), e + r[0].length) : -1;
  }
  function na(n, t, e) {
    ul.lastIndex = 0;
    var r = ul.exec(t.substring(e, e + 2));
    return r ? ((n.H = +r[0]), e + r[0].length) : -1;
  }
  function ta(n, t, e) {
    ul.lastIndex = 0;
    var r = ul.exec(t.substring(e, e + 2));
    return r ? ((n.M = +r[0]), e + r[0].length) : -1;
  }
  function ea(n, t, e) {
    ul.lastIndex = 0;
    var r = ul.exec(t.substring(e, e + 2));
    return r ? ((n.S = +r[0]), e + r[0].length) : -1;
  }
  function ra(n, t, e) {
    ul.lastIndex = 0;
    var r = ul.exec(t.substring(e, e + 3));
    return r ? ((n.L = +r[0]), e + r[0].length) : -1;
  }
  function ia(n, t, e) {
    var r = al.get(t.substring(e, (e += 2)).toLowerCase());
    return null == r ? -1 : ((n.p = r), e);
  }
  function ua(n) {
    var t = n.getTimezoneOffset(),
      e = t > 0 ? "-" : "+",
      r = ~~(Math.abs(t) / 60),
      i = Math.abs(t) % 60;
    return e + Fu(r, "0", 2) + Fu(i, "0", 2);
  }
  function aa(n, t, e) {
    tl.lastIndex = 0;
    var r = tl.exec(t.substring(e, e + 1));
    return r ? e + r[0].length : -1;
  }
  function oa(n) {
    return n.toISOString();
  }
  function ca(n, t, e) {
    function r(t) {
      return n(t);
    }
    return (
      (r.invert = function (t) {
        return la(n.invert(t));
      }),
      (r.domain = function (t) {
        return arguments.length ? (n.domain(t), r) : n.domain().map(la);
      }),
      (r.nice = function (n) {
        return r.domain(Vi(r.domain(), n));
      }),
      (r.ticks = function (e, i) {
        var u = Yi(r.domain());
        if ("function" != typeof e) {
          var a = u[1] - u[0],
            o = a / e,
            c = va.bisect(cl, o);
          if (c == cl.length) return t.year(u, e);
          if (!c) return n.ticks(e).map(la);
          Math.log(o / cl[c - 1]) < Math.log(cl[c] / o) && --c,
            (e = t[c]),
            (i = e[1]),
            (e = e[0].range);
        }
        return e(u[0], new Date(+u[1] + 1), i);
      }),
      (r.tickFormat = function () {
        return e;
      }),
      (r.copy = function () {
        return ca(n.copy(), t, e);
      }),
      $i(r, n)
    );
  }
  function la(n) {
    return new Date(n);
  }
  function fa(n) {
    return function (t) {
      for (var e = n.length - 1, r = n[e]; !r[1](t); ) r = n[--e];
      return r[0](t);
    };
  }
  function sa(n) {
    var t = new Date(n, 0, 1);
    return t.setFullYear(n), t;
  }
  function ha(n) {
    var t = n.getFullYear(),
      e = sa(t),
      r = sa(t + 1);
    return t + (n - e) / (r - e);
  }
  function ga(n) {
    var t = new Date(Date.UTC(n, 0, 1));
    return t.setUTCFullYear(n), t;
  }
  function pa(n) {
    var t = n.getUTCFullYear(),
      e = ga(t),
      r = ga(t + 1);
    return t + (n - e) / (r - e);
  }
  function da(n) {
    return JSON.parse(n.responseText);
  }
  function ma(n) {
    var t = ya.createRange();
    return t.selectNode(ya.body), t.createContextualFragment(n.responseText);
  }
  var va = { version: "3.2.2" };
  Date.now ||
    (Date.now = function () {
      return +new Date();
    });
  var ya = document,
    Ma = ya.documentElement,
    xa = window;
  try {
    ya.createElement("div").style.setProperty("opacity", 0, "");
  } catch (ba) {
    var _a = xa.CSSStyleDeclaration.prototype,
      wa = _a.setProperty;
    _a.setProperty = function (n, t, e) {
      wa.call(this, n, t + "", e);
    };
  }
  (va.ascending = function (n, t) {
    return t > n ? -1 : n > t ? 1 : n >= t ? 0 : 0 / 0;
  }),
    (va.descending = function (n, t) {
      return n > t ? -1 : t > n ? 1 : t >= n ? 0 : 0 / 0;
    }),
    (va.min = function (n, t) {
      var e,
        r,
        i = -1,
        u = n.length;
      if (1 === arguments.length) {
        for (; ++i < u && !(null != (e = n[i]) && e >= e); ) e = void 0;
        for (; ++i < u; ) null != (r = n[i]) && e > r && (e = r);
      } else {
        for (; ++i < u && !(null != (e = t.call(n, n[i], i)) && e >= e); )
          e = void 0;
        for (; ++i < u; ) null != (r = t.call(n, n[i], i)) && e > r && (e = r);
      }
      return e;
    }),
    (va.max = function (n, t) {
      var e,
        r,
        i = -1,
        u = n.length;
      if (1 === arguments.length) {
        for (; ++i < u && !(null != (e = n[i]) && e >= e); ) e = void 0;
        for (; ++i < u; ) null != (r = n[i]) && r > e && (e = r);
      } else {
        for (; ++i < u && !(null != (e = t.call(n, n[i], i)) && e >= e); )
          e = void 0;
        for (; ++i < u; ) null != (r = t.call(n, n[i], i)) && r > e && (e = r);
      }
      return e;
    }),
    (va.extent = function (n, t) {
      var e,
        r,
        i,
        u = -1,
        a = n.length;
      if (1 === arguments.length) {
        for (; ++u < a && !(null != (e = i = n[u]) && e >= e); ) e = i = void 0;
        for (; ++u < a; )
          null != (r = n[u]) && (e > r && (e = r), r > i && (i = r));
      } else {
        for (; ++u < a && !(null != (e = i = t.call(n, n[u], u)) && e >= e); )
          e = void 0;
        for (; ++u < a; )
          null != (r = t.call(n, n[u], u)) &&
            (e > r && (e = r), r > i && (i = r));
      }
      return [e, i];
    }),
    (va.sum = function (n, t) {
      var e,
        r = 0,
        i = n.length,
        u = -1;
      if (1 === arguments.length)
        for (; ++u < i; ) isNaN((e = +n[u])) || (r += e);
      else for (; ++u < i; ) isNaN((e = +t.call(n, n[u], u))) || (r += e);
      return r;
    }),
    (va.mean = function (t, e) {
      var r,
        i = t.length,
        u = 0,
        a = -1,
        o = 0;
      if (1 === arguments.length)
        for (; ++a < i; ) n((r = t[a])) && (u += (r - u) / ++o);
      else
        for (; ++a < i; ) n((r = e.call(t, t[a], a))) && (u += (r - u) / ++o);
      return o ? u : void 0;
    }),
    (va.quantile = function (n, t) {
      var e = (n.length - 1) * t + 1,
        r = Math.floor(e),
        i = +n[r - 1],
        u = e - r;
      return u ? i + u * (n[r] - i) : i;
    }),
    (va.median = function (t, e) {
      return (
        arguments.length > 1 && (t = t.map(e)),
        (t = t.filter(n)),
        t.length ? va.quantile(t.sort(va.ascending), 0.5) : void 0
      );
    }),
    (va.bisector = function (n) {
      return {
        left: function (t, e, r, i) {
          for (
            arguments.length < 3 && (r = 0),
              arguments.length < 4 && (i = t.length);
            i > r;

          ) {
            var u = (r + i) >>> 1;
            n.call(t, t[u], u) < e ? (r = u + 1) : (i = u);
          }
          return r;
        },
        right: function (t, e, r, i) {
          for (
            arguments.length < 3 && (r = 0),
              arguments.length < 4 && (i = t.length);
            i > r;

          ) {
            var u = (r + i) >>> 1;
            e < n.call(t, t[u], u) ? (i = u) : (r = u + 1);
          }
          return r;
        },
      };
    });
  var Sa = va.bisector(function (n) {
    return n;
  });
  (va.bisectLeft = Sa.left),
    (va.bisect = va.bisectRight = Sa.right),
    (va.shuffle = function (n) {
      for (var t, e, r = n.length; r; )
        (e = 0 | (Math.random() * r--)), (t = n[r]), (n[r] = n[e]), (n[e] = t);
      return n;
    }),
    (va.permute = function (n, t) {
      for (var e = [], r = -1, i = t.length; ++r < i; ) e[r] = n[t[r]];
      return e;
    }),
    (va.zip = function () {
      if (!(i = arguments.length)) return [];
      for (var n = -1, e = va.min(arguments, t), r = new Array(e); ++n < e; )
        for (var i, u = -1, a = (r[n] = new Array(i)); ++u < i; )
          a[u] = arguments[u][n];
      return r;
    }),
    (va.transpose = function (n) {
      return va.zip.apply(va, n);
    }),
    (va.keys = function (n) {
      var t = [];
      for (var e in n) t.push(e);
      return t;
    }),
    (va.values = function (n) {
      var t = [];
      for (var e in n) t.push(n[e]);
      return t;
    }),
    (va.entries = function (n) {
      var t = [];
      for (var e in n) t.push({ key: e, value: n[e] });
      return t;
    }),
    (va.merge = function (n) {
      return Array.prototype.concat.apply([], n);
    }),
    (va.range = function (n, t, r) {
      if (
        (arguments.length < 3 &&
          ((r = 1), arguments.length < 2 && ((t = n), (n = 0))),
        1 / 0 === (t - n) / r)
      )
        throw new Error("infinite range");
      var i,
        u = [],
        a = e(Math.abs(r)),
        o = -1;
      if (((n *= a), (t *= a), (r *= a), 0 > r))
        for (; (i = n + r * ++o) > t; ) u.push(i / a);
      else for (; (i = n + r * ++o) < t; ) u.push(i / a);
      return u;
    }),
    (va.map = function (n) {
      var t = new i();
      for (var e in n) t.set(e, n[e]);
      return t;
    }),
    r(i, {
      has: function (n) {
        return Ea + n in this;
      },
      get: function (n) {
        return this[Ea + n];
      },
      set: function (n, t) {
        return (this[Ea + n] = t);
      },
      remove: function (n) {
        return (n = Ea + n), n in this && delete this[n];
      },
      keys: function () {
        var n = [];
        return (
          this.forEach(function (t) {
            n.push(t);
          }),
          n
        );
      },
      values: function () {
        var n = [];
        return (
          this.forEach(function (t, e) {
            n.push(e);
          }),
          n
        );
      },
      entries: function () {
        var n = [];
        return (
          this.forEach(function (t, e) {
            n.push({ key: t, value: e });
          }),
          n
        );
      },
      forEach: function (n) {
        for (var t in this)
          t.charCodeAt(0) === ka && n.call(this, t.substring(1), this[t]);
      },
    });
  var Ea = "\0",
    ka = Ea.charCodeAt(0);
  (va.nest = function () {
    function n(t, o, c) {
      if (c >= a.length) return r ? r.call(u, o) : e ? o.sort(e) : o;
      for (
        var l, f, s, h, g = -1, p = o.length, d = a[c++], m = new i();
        ++g < p;

      )
        (h = m.get((l = d((f = o[g]))))) ? h.push(f) : m.set(l, [f]);
      return (
        t
          ? ((f = t()),
            (s = function (e, r) {
              f.set(e, n(t, r, c));
            }))
          : ((f = {}),
            (s = function (e, r) {
              f[e] = n(t, r, c);
            })),
        m.forEach(s),
        f
      );
    }
    function t(n, e) {
      if (e >= a.length) return n;
      var r = [],
        i = o[e++];
      return (
        n.forEach(function (n, i) {
          r.push({ key: n, values: t(i, e) });
        }),
        i
          ? r.sort(function (n, t) {
              return i(n.key, t.key);
            })
          : r
      );
    }
    var e,
      r,
      u = {},
      a = [],
      o = [];
    return (
      (u.map = function (t, e) {
        return n(e, t, 0);
      }),
      (u.entries = function (e) {
        return t(n(va.map, e, 0), 0);
      }),
      (u.key = function (n) {
        return a.push(n), u;
      }),
      (u.sortKeys = function (n) {
        return (o[a.length - 1] = n), u;
      }),
      (u.sortValues = function (n) {
        return (e = n), u;
      }),
      (u.rollup = function (n) {
        return (r = n), u;
      }),
      u
    );
  }),
    (va.set = function (n) {
      var t = new u();
      if (n) for (var e = 0; e < n.length; e++) t.add(n[e]);
      return t;
    }),
    r(u, {
      has: function (n) {
        return Ea + n in this;
      },
      add: function (n) {
        return (this[Ea + n] = !0), n;
      },
      remove: function (n) {
        return (n = Ea + n), n in this && delete this[n];
      },
      values: function () {
        var n = [];
        return (
          this.forEach(function (t) {
            n.push(t);
          }),
          n
        );
      },
      forEach: function (n) {
        for (var t in this)
          t.charCodeAt(0) === ka && n.call(this, t.substring(1));
      },
    }),
    (va.behavior = {}),
    (va.rebind = function (n, t) {
      for (var e, r = 1, i = arguments.length; ++r < i; )
        n[(e = arguments[r])] = a(n, t, t[e]);
      return n;
    });
  var Aa = ["webkit", "ms", "moz", "Moz", "o", "O"],
    Na = l;
  try {
    Na(Ma.childNodes)[0].nodeType;
  } catch (qa) {
    Na = c;
  }
  var Ta = [].__proto__
    ? function (n, t) {
        n.__proto__ = t;
      }
    : function (n, t) {
        for (var e in t) n[e] = t[e];
      };
  (va.dispatch = function () {
    for (var n = new s(), t = -1, e = arguments.length; ++t < e; )
      n[arguments[t]] = h(n);
    return n;
  }),
    (s.prototype.on = function (n, t) {
      var e = n.indexOf("."),
        r = "";
      if ((e >= 0 && ((r = n.substring(e + 1)), (n = n.substring(0, e))), n))
        return arguments.length < 2 ? this[n].on(r) : this[n].on(r, t);
      if (2 === arguments.length) {
        if (null == t)
          for (n in this) this.hasOwnProperty(n) && this[n].on(r, null);
        return this;
      }
    }),
    (va.event = null),
    (va.requote = function (n) {
      return n.replace(Ca, "\\$&");
    });
  var Ca = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
    za = function (n, t) {
      return t.querySelector(n);
    },
    Da = function (n, t) {
      return t.querySelectorAll(n);
    },
    ja = Ma[o(Ma, "matchesSelector")],
    La = function (n, t) {
      return ja.call(n, t);
    };
  "function" == typeof Sizzle &&
    ((za = function (n, t) {
      return Sizzle(n, t)[0] || null;
    }),
    (Da = function (n, t) {
      return Sizzle.uniqueSort(Sizzle(n, t));
    }),
    (La = Sizzle.matchesSelector)),
    (va.selection = function () {
      return Oa;
    });
  var Ha = (va.selection.prototype = []);
  (Ha.select = function (n) {
    var t,
      e,
      r,
      i,
      u = [];
    "function" != typeof n && (n = v(n));
    for (var a = -1, o = this.length; ++a < o; ) {
      u.push((t = [])), (t.parentNode = (r = this[a]).parentNode);
      for (var c = -1, l = r.length; ++c < l; )
        (i = r[c])
          ? (t.push((e = n.call(i, i.__data__, c))),
            e && "__data__" in i && (e.__data__ = i.__data__))
          : t.push(null);
    }
    return m(u);
  }),
    (Ha.selectAll = function (n) {
      var t,
        e,
        r = [];
      "function" != typeof n && (n = y(n));
      for (var i = -1, u = this.length; ++i < u; )
        for (var a = this[i], o = -1, c = a.length; ++o < c; )
          (e = a[o]) &&
            (r.push((t = Na(n.call(e, e.__data__, o)))), (t.parentNode = e));
      return m(r);
    });
  var Fa = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
  };
  (va.ns = {
    prefix: Fa,
    qualify: function (n) {
      var t = n.indexOf(":"),
        e = n;
      return (
        t >= 0 && ((e = n.substring(0, t)), (n = n.substring(t + 1))),
        Fa.hasOwnProperty(e) ? { space: Fa[e], local: n } : n
      );
    },
  }),
    (Ha.attr = function (n, t) {
      if (arguments.length < 2) {
        if ("string" == typeof n) {
          var e = this.node();
          return (
            (n = va.ns.qualify(n)),
            n.local ? e.getAttributeNS(n.space, n.local) : e.getAttribute(n)
          );
        }
        for (t in n) this.each(M(t, n[t]));
        return this;
      }
      return this.each(M(n, t));
    }),
    (Ha.classed = function (n, t) {
      if (arguments.length < 2) {
        if ("string" == typeof n) {
          var e = this.node(),
            r = (n = n.trim().split(/^|\s+/g)).length,
            i = -1;
          if ((t = e.classList)) {
            for (; ++i < r; ) if (!t.contains(n[i])) return !1;
          } else
            for (t = e.getAttribute("class"); ++i < r; )
              if (!b(n[i]).test(t)) return !1;
          return !0;
        }
        for (t in n) this.each(_(t, n[t]));
        return this;
      }
      return this.each(_(n, t));
    }),
    (Ha.style = function (n, t, e) {
      var r = arguments.length;
      if (3 > r) {
        if ("string" != typeof n) {
          2 > r && (t = "");
          for (e in n) this.each(S(e, n[e], t));
          return this;
        }
        if (2 > r)
          return xa.getComputedStyle(this.node(), null).getPropertyValue(n);
        e = "";
      }
      return this.each(S(n, t, e));
    }),
    (Ha.property = function (n, t) {
      if (arguments.length < 2) {
        if ("string" == typeof n) return this.node()[n];
        for (t in n) this.each(E(t, n[t]));
        return this;
      }
      return this.each(E(n, t));
    }),
    (Ha.text = function (n) {
      return arguments.length
        ? this.each(
            "function" == typeof n
              ? function () {
                  var t = n.apply(this, arguments);
                  this.textContent = null == t ? "" : t;
                }
              : null == n
              ? function () {
                  this.textContent = "";
                }
              : function () {
                  this.textContent = n;
                }
          )
        : this.node().textContent;
    }),
    (Ha.html = function (n) {
      return arguments.length
        ? this.each(
            "function" == typeof n
              ? function () {
                  var t = n.apply(this, arguments);
                  this.innerHTML = null == t ? "" : t;
                }
              : null == n
              ? function () {
                  this.innerHTML = "";
                }
              : function () {
                  this.innerHTML = n;
                }
          )
        : this.node().innerHTML;
    }),
    (Ha.append = function (n) {
      function t() {
        return this.appendChild(ya.createElementNS(this.namespaceURI, n));
      }
      function e() {
        return this.appendChild(ya.createElementNS(n.space, n.local));
      }
      return (n = va.ns.qualify(n)), this.select(n.local ? e : t);
    }),
    (Ha.insert = function (n, t) {
      function e(e, r) {
        return this.insertBefore(
          ya.createElementNS(this.namespaceURI, n),
          t.call(this, e, r)
        );
      }
      function r(e, r) {
        return this.insertBefore(
          ya.createElementNS(n.space, n.local),
          t.call(this, e, r)
        );
      }
      return (
        (n = va.ns.qualify(n)),
        "function" != typeof t && (t = v(t)),
        this.select(n.local ? r : e)
      );
    }),
    (Ha.remove = function () {
      return this.each(function () {
        var n = this.parentNode;
        n && n.removeChild(this);
      });
    }),
    (Ha.data = function (n, t) {
      function e(n, e) {
        var r,
          u,
          a,
          o = n.length,
          s = e.length,
          h = Math.min(o, s),
          g = new Array(s),
          p = new Array(s),
          d = new Array(o);
        if (t) {
          var m,
            v = new i(),
            y = new i(),
            M = [];
          for (r = -1; ++r < o; )
            (m = t.call((u = n[r]), u.__data__, r)),
              v.has(m) ? (d[r] = u) : v.set(m, u),
              M.push(m);
          for (r = -1; ++r < s; )
            (m = t.call(e, (a = e[r]), r)),
              (u = v.get(m))
                ? ((g[r] = u), (u.__data__ = a))
                : y.has(m) || (p[r] = k(a)),
              y.set(m, a),
              v.remove(m);
          for (r = -1; ++r < o; ) v.has(M[r]) && (d[r] = n[r]);
        } else {
          for (r = -1; ++r < h; )
            (u = n[r]),
              (a = e[r]),
              u ? ((u.__data__ = a), (g[r] = u)) : (p[r] = k(a));
          for (; s > r; ++r) p[r] = k(e[r]);
          for (; o > r; ++r) d[r] = n[r];
        }
        (p.update = g),
          (p.parentNode = g.parentNode = d.parentNode = n.parentNode),
          c.push(p),
          l.push(g),
          f.push(d);
      }
      var r,
        u,
        a = -1,
        o = this.length;
      if (!arguments.length) {
        for (n = new Array((o = (r = this[0]).length)); ++a < o; )
          (u = r[a]) && (n[a] = u.__data__);
        return n;
      }
      var c = T([]),
        l = m([]),
        f = m([]);
      if ("function" == typeof n)
        for (; ++a < o; ) e((r = this[a]), n.call(r, r.parentNode.__data__, a));
      else for (; ++a < o; ) e((r = this[a]), n);
      return (
        (l.enter = function () {
          return c;
        }),
        (l.exit = function () {
          return f;
        }),
        l
      );
    }),
    (Ha.datum = function (n) {
      return arguments.length
        ? this.property("__data__", n)
        : this.property("__data__");
    }),
    (Ha.filter = function (n) {
      var t,
        e,
        r,
        i = [];
      "function" != typeof n && (n = A(n));
      for (var u = 0, a = this.length; a > u; u++) {
        i.push((t = [])), (t.parentNode = (e = this[u]).parentNode);
        for (var o = 0, c = e.length; c > o; o++)
          (r = e[o]) && n.call(r, r.__data__, o) && t.push(r);
      }
      return m(i);
    }),
    (Ha.order = function () {
      for (var n = -1, t = this.length; ++n < t; )
        for (var e, r = this[n], i = r.length - 1, u = r[i]; --i >= 0; )
          (e = r[i]) &&
            (u && u !== e.nextSibling && u.parentNode.insertBefore(e, u),
            (u = e));
      return this;
    }),
    (Ha.sort = function (n) {
      n = N.apply(this, arguments);
      for (var t = -1, e = this.length; ++t < e; ) this[t].sort(n);
      return this.order();
    }),
    (Ha.each = function (n) {
      return q(this, function (t, e, r) {
        n.call(t, t.__data__, e, r);
      });
    }),
    (Ha.call = function (n) {
      var t = Na(arguments);
      return n.apply((t[0] = this), t), this;
    }),
    (Ha.empty = function () {
      return !this.node();
    }),
    (Ha.node = function () {
      for (var n = 0, t = this.length; t > n; n++)
        for (var e = this[n], r = 0, i = e.length; i > r; r++) {
          var u = e[r];
          if (u) return u;
        }
      return null;
    }),
    (Ha.size = function () {
      var n = 0;
      return (
        this.each(function () {
          ++n;
        }),
        n
      );
    });
  var Pa = [];
  (va.selection.enter = T),
    (va.selection.enter.prototype = Pa),
    (Pa.append = Ha.append),
    (Pa.insert = Ha.insert),
    (Pa.empty = Ha.empty),
    (Pa.node = Ha.node),
    (Pa.call = Ha.call),
    (Pa.size = Ha.size),
    (Pa.select = function (n) {
      for (var t, e, r, i, u, a = [], o = -1, c = this.length; ++o < c; ) {
        (r = (i = this[o]).update),
          a.push((t = [])),
          (t.parentNode = i.parentNode);
        for (var l = -1, f = i.length; ++l < f; )
          (u = i[l])
            ? (t.push((r[l] = e = n.call(i.parentNode, u.__data__, l))),
              (e.__data__ = u.__data__))
            : t.push(null);
      }
      return m(a);
    }),
    (Ha.transition = function () {
      var n,
        t,
        e = Ac || ++Cc,
        r = [],
        i = Object.create(zc);
      i.time = Date.now();
      for (var u = -1, a = this.length; ++u < a; ) {
        r.push((n = []));
        for (var o = this[u], c = -1, l = o.length; ++c < l; )
          (t = o[c]) && Au(t, c, e, i), n.push(t);
      }
      return Su(r, e);
    }),
    (va.select = function (n) {
      var t = ["string" == typeof n ? za(n, ya) : n];
      return (t.parentNode = Ma), m([t]);
    }),
    (va.selectAll = function (n) {
      var t = Na("string" == typeof n ? Da(n, ya) : n);
      return (t.parentNode = Ma), m([t]);
    });
  var Oa = va.select(Ma);
  Ha.on = function (n, t, e) {
    var r = arguments.length;
    if (3 > r) {
      if ("string" != typeof n) {
        2 > r && (t = !1);
        for (e in n) this.each(C(e, n[e], t));
        return this;
      }
      if (2 > r) return (r = this.node()["__on" + n]) && r._;
      e = !1;
    }
    return this.each(C(n, t, e));
  };
  var Ra = va.map({ mouseenter: "mouseover", mouseleave: "mouseout" });
  Ra.forEach(function (n) {
    "on" + n in ya && Ra.remove(n);
  });
  var Ya = o(Ma.style, "userSelect");
  va.mouse = function (n) {
    return L(n, p());
  };
  var Ua = /WebKit/.test(xa.navigator.userAgent) ? -1 : 0;
  (va.touches = function (n, t) {
    return (
      arguments.length < 2 && (t = p().touches),
      t
        ? Na(t).map(function (t) {
            var e = L(n, t);
            return (e.identifier = t.identifier), e;
          })
        : []
    );
  }),
    (va.behavior.drag = function () {
      function n() {
        this.on("mousedown.drag", t).on("touchstart.drag", t);
      }
      function t() {
        function n() {
          var n = a.parentNode;
          return null != l
            ? va.touches(n).filter(function (n) {
                return n.identifier === l;
              })[0]
            : va.mouse(n);
        }
        function t() {
          if (!a.parentNode) return i();
          var t = n(),
            e = t[0] - f[0],
            r = t[1] - f[1];
          (s |= e | r),
            (f = t),
            o({ type: "drag", x: t[0] + u[0], y: t[1] + u[1], dx: e, dy: r });
        }
        function i() {
          g
            .on(null != l ? "touchmove.drag-" + l : "mousemove.drag", null)
            .on(null != l ? "touchend.drag-" + l : "mouseup.drag", null),
            h(s && va.event.target === c),
            o({ type: "dragend" });
        }
        var u,
          a = this,
          o = e.of(a, arguments),
          c = va.event.target,
          l = va.event.touches ? va.event.changedTouches[0].identifier : null,
          f = n(),
          s = 0,
          h = j(null != l ? "drag-" + l : "drag"),
          g = va
            .select(xa)
            .on(null != l ? "touchmove.drag-" + l : "mousemove.drag", t)
            .on(null != l ? "touchend.drag-" + l : "mouseup.drag", i, !0);
        r
          ? ((u = r.apply(a, arguments)), (u = [u.x - f[0], u.y - f[1]]))
          : (u = [0, 0]),
          o({ type: "dragstart" });
      }
      var e = d(n, "drag", "dragstart", "dragend"),
        r = null;
      return (
        (n.origin = function (t) {
          return arguments.length ? ((r = t), n) : r;
        }),
        va.rebind(n, e, "on")
      );
    }),
    (va.behavior.zoom = function () {
      function n() {
        this.on("mousedown.zoom", o)
          .on("mousemove.zoom", l)
          .on(Xa + ".zoom", c)
          .on("dblclick.zoom", f)
          .on("touchstart.zoom", s)
          .on("touchmove.zoom", h)
          .on("touchend.zoom", s);
      }
      function t(n) {
        return [(n[0] - _[0]) / w, (n[1] - _[1]) / w];
      }
      function e(n) {
        return [n[0] * w + _[0], n[1] * w + _[1]];
      }
      function r(n) {
        w = Math.max(S[0], Math.min(S[1], n));
      }
      function i(n, t) {
        (t = e(t)), (_[0] += n[0] - t[0]), (_[1] += n[1] - t[1]);
      }
      function u() {
        y &&
          y.domain(
            v
              .range()
              .map(function (n) {
                return (n - _[0]) / w;
              })
              .map(v.invert)
          ),
          x &&
            x.domain(
              M.range()
                .map(function (n) {
                  return (n - _[1]) / w;
                })
                .map(M.invert)
            );
      }
      function a(n) {
        u(),
          va.event.preventDefault(),
          n({ type: "zoom", scale: w, translate: _ });
      }
      function o() {
        function n() {
          (c = 1), i(va.mouse(r), f), a(u);
        }
        function e() {
          l.on("mousemove.zoom", null).on("mouseup.zoom", null),
            s(c && va.event.target === o);
        }
        var r = this,
          u = E.of(r, arguments),
          o = va.event.target,
          c = 0,
          l = va.select(xa).on("mousemove.zoom", n).on("mouseup.zoom", e),
          f = t(va.mouse(r)),
          s = j("zoom");
      }
      function c() {
        g || (g = t(va.mouse(this))),
          r(Math.pow(2, 0.002 * Ia()) * w),
          i(va.mouse(this), g),
          a(E.of(this, arguments));
      }
      function l() {
        g = null;
      }
      function f() {
        var n = va.mouse(this),
          e = t(n),
          u = Math.log(w) / Math.LN2;
        r(
          Math.pow(2, va.event.shiftKey ? Math.ceil(u) - 1 : Math.floor(u) + 1)
        ),
          i(n, e),
          a(E.of(this, arguments));
      }
      function s() {
        var n = va.touches(this),
          e = Date.now();
        if (
          ((m = w),
          (g = {}),
          (p = 0),
          n.forEach(function (n) {
            g[n.identifier] = t(n);
          }),
          1 === n.length)
        ) {
          if (500 > e - b) {
            var u = n[0],
              o = t(n[0]);
            r(2 * w), i(u, o), a(E.of(this, arguments));
          }
          b = e;
        } else if (n.length > 1) {
          var u = n[0],
            c = n[1],
            l = u[0] - c[0],
            f = u[1] - c[1];
          p = l * l + f * f;
        }
      }
      function h() {
        var n = va.touches(this),
          t = n[0],
          e = g[t.identifier];
        if ((u = n[1])) {
          var u,
            o = g[u.identifier],
            c = va.event.scale;
          if (null == c) {
            var l = (l = u[0] - t[0]) * l + (l = u[1] - t[1]) * l;
            c = p && Math.sqrt(l / p);
          }
          (t = [(t[0] + u[0]) / 2, (t[1] + u[1]) / 2]),
            (e = [(e[0] + o[0]) / 2, (e[1] + o[1]) / 2]),
            r(c * m);
        }
        i(t, e), (b = null), a(E.of(this, arguments));
      }
      var g,
        p,
        m,
        v,
        y,
        M,
        x,
        b,
        _ = [0, 0],
        w = 1,
        S = Va,
        E = d(n, "zoom");
      return (
        (n.translate = function (t) {
          return arguments.length ? ((_ = t.map(Number)), u(), n) : _;
        }),
        (n.scale = function (t) {
          return arguments.length ? ((w = +t), u(), n) : w;
        }),
        (n.scaleExtent = function (t) {
          return arguments.length
            ? ((S = null == t ? Va : t.map(Number)), n)
            : S;
        }),
        (n.x = function (t) {
          return arguments.length
            ? ((y = t), (v = t.copy()), (_ = [0, 0]), (w = 1), n)
            : y;
        }),
        (n.y = function (t) {
          return arguments.length
            ? ((x = t), (M = t.copy()), (_ = [0, 0]), (w = 1), n)
            : x;
        }),
        va.rebind(n, E, "on")
      );
    });
  var Ia,
    Va = [0, 1 / 0],
    Xa =
      "onwheel" in ya
        ? ((Ia = function () {
            return -va.event.deltaY * (va.event.deltaMode ? 120 : 1);
          }),
          "wheel")
        : "onmousewheel" in ya
        ? ((Ia = function () {
            return va.event.wheelDelta;
          }),
          "mousewheel")
        : ((Ia = function () {
            return -va.event.detail;
          }),
          "MozMousePixelScroll");
  (H.prototype.toString = function () {
    return this.rgb() + "";
  }),
    (va.hsl = function (n, t, e) {
      return 1 === arguments.length
        ? n instanceof P
          ? F(n.h, n.s, n.l)
          : ut("" + n, at, F)
        : F(+n, +t, +e);
    });
  var Za = (P.prototype = new H());
  (Za.brighter = function (n) {
    return (
      (n = Math.pow(0.7, arguments.length ? n : 1)),
      F(this.h, this.s, this.l / n)
    );
  }),
    (Za.darker = function (n) {
      return (
        (n = Math.pow(0.7, arguments.length ? n : 1)),
        F(this.h, this.s, n * this.l)
      );
    }),
    (Za.rgb = function () {
      return O(this.h, this.s, this.l);
    });
  var Ba = Math.PI,
    $a = 1e-6,
    Wa = $a * $a,
    Ja = Ba / 180,
    Ga = 180 / Ba;
  va.hcl = function (n, t, e) {
    return 1 === arguments.length
      ? n instanceof B
        ? Z(n.h, n.c, n.l)
        : n instanceof J
        ? K(n.l, n.a, n.b)
        : K((n = ot((n = va.rgb(n)).r, n.g, n.b)).l, n.a, n.b)
      : Z(+n, +t, +e);
  };
  var Ka = (B.prototype = new H());
  (Ka.brighter = function (n) {
    return Z(
      this.h,
      this.c,
      Math.min(100, this.l + Qa * (arguments.length ? n : 1))
    );
  }),
    (Ka.darker = function (n) {
      return Z(
        this.h,
        this.c,
        Math.max(0, this.l - Qa * (arguments.length ? n : 1))
      );
    }),
    (Ka.rgb = function () {
      return $(this.h, this.c, this.l).rgb();
    }),
    (va.lab = function (n, t, e) {
      return 1 === arguments.length
        ? n instanceof J
          ? W(n.l, n.a, n.b)
          : n instanceof B
          ? $(n.l, n.c, n.h)
          : ot((n = va.rgb(n)).r, n.g, n.b)
        : W(+n, +t, +e);
    });
  var Qa = 18,
    no = 0.95047,
    to = 1,
    eo = 1.08883,
    ro = (J.prototype = new H());
  (ro.brighter = function (n) {
    return W(
      Math.min(100, this.l + Qa * (arguments.length ? n : 1)),
      this.a,
      this.b
    );
  }),
    (ro.darker = function (n) {
      return W(
        Math.max(0, this.l - Qa * (arguments.length ? n : 1)),
        this.a,
        this.b
      );
    }),
    (ro.rgb = function () {
      return G(this.l, this.a, this.b);
    }),
    (va.rgb = function (n, t, e) {
      return 1 === arguments.length
        ? n instanceof rt
          ? et(n.r, n.g, n.b)
          : ut("" + n, et, O)
        : et(~~n, ~~t, ~~e);
    });
  var io = (rt.prototype = new H());
  (io.brighter = function (n) {
    n = Math.pow(0.7, arguments.length ? n : 1);
    var t = this.r,
      e = this.g,
      r = this.b,
      i = 30;
    return t || e || r
      ? (t && i > t && (t = i),
        e && i > e && (e = i),
        r && i > r && (r = i),
        et(
          Math.min(255, Math.floor(t / n)),
          Math.min(255, Math.floor(e / n)),
          Math.min(255, Math.floor(r / n))
        ))
      : et(i, i, i);
  }),
    (io.darker = function (n) {
      return (
        (n = Math.pow(0.7, arguments.length ? n : 1)),
        et(
          Math.floor(n * this.r),
          Math.floor(n * this.g),
          Math.floor(n * this.b)
        )
      );
    }),
    (io.hsl = function () {
      return at(this.r, this.g, this.b);
    }),
    (io.toString = function () {
      return "#" + it(this.r) + it(this.g) + it(this.b);
    });
  var uo = va.map({
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32",
  });
  uo.forEach(function (n, t) {
    uo.set(n, ut(t, et, O));
  }),
    (va.functor = ft),
    (va.xhr = ht(st)),
    (va.dsv = function (n, t) {
      function e(n, e, u) {
        arguments.length < 3 && ((u = e), (e = null));
        var a = va.xhr(n, t, u);
        return (
          (a.row = function (n) {
            return arguments.length
              ? a.response(null == (e = n) ? r : i(n))
              : e;
          }),
          a.row(e)
        );
      }
      function r(n) {
        return e.parse(n.responseText);
      }
      function i(n) {
        return function (t) {
          return e.parse(t.responseText, n);
        };
      }
      function a(t) {
        return t.map(o).join(n);
      }
      function o(n) {
        return c.test(n) ? '"' + n.replace(/\"/g, '""') + '"' : n;
      }
      var c = new RegExp('["' + n + "\n]"),
        l = n.charCodeAt(0);
      return (
        (e.parse = function (n, t) {
          var r;
          return e.parseRows(n, function (n, e) {
            if (r) return r(n, e - 1);
            var i = new Function(
              "d",
              "return {" +
                n
                  .map(function (n, t) {
                    return JSON.stringify(n) + ": d[" + t + "]";
                  })
                  .join(",") +
                "}"
            );
            r = t
              ? function (n, e) {
                  return t(i(n), e);
                }
              : i;
          });
        }),
        (e.parseRows = function (n, t) {
          function e() {
            if (f >= c) return a;
            if (i) return (i = !1), u;
            var t = f;
            if (34 === n.charCodeAt(t)) {
              for (var e = t; e++ < c; )
                if (34 === n.charCodeAt(e)) {
                  if (34 !== n.charCodeAt(e + 1)) break;
                  ++e;
                }
              f = e + 2;
              var r = n.charCodeAt(e + 1);
              return (
                13 === r
                  ? ((i = !0), 10 === n.charCodeAt(e + 2) && ++f)
                  : 10 === r && (i = !0),
                n.substring(t + 1, e).replace(/""/g, '"')
              );
            }
            for (; c > f; ) {
              var r = n.charCodeAt(f++),
                o = 1;
              if (10 === r) i = !0;
              else if (13 === r) (i = !0), 10 === n.charCodeAt(f) && (++f, ++o);
              else if (r !== l) continue;
              return n.substring(t, f - o);
            }
            return n.substring(t);
          }
          for (
            var r, i, u = {}, a = {}, o = [], c = n.length, f = 0, s = 0;
            (r = e()) !== a;

          ) {
            for (var h = []; r !== u && r !== a; ) h.push(r), (r = e());
            (!t || (h = t(h, s++))) && o.push(h);
          }
          return o;
        }),
        (e.format = function (t) {
          if (Array.isArray(t[0])) return e.formatRows(t);
          var r = new u(),
            i = [];
          return (
            t.forEach(function (n) {
              for (var t in n) r.has(t) || i.push(r.add(t));
            }),
            [i.map(o).join(n)]
              .concat(
                t.map(function (t) {
                  return i
                    .map(function (n) {
                      return o(t[n]);
                    })
                    .join(n);
                })
              )
              .join("\n")
          );
        }),
        (e.formatRows = function (n) {
          return n.map(a).join("\n");
        }),
        e
      );
    }),
    (va.csv = va.dsv(",", "text/csv")),
    (va.tsv = va.dsv(" ", "text/tab-separated-values"));
  var ao, oo, co, lo;
  (va.timer = function (n, t, e) {
    if (arguments.length < 3) {
      if (arguments.length < 2) t = 0;
      else if (!isFinite(t)) return;
      e = Date.now();
    }
    var r = e + t,
      i = { callback: n, time: r, next: null };
    oo ? (oo.next = i) : (ao = i),
      (oo = i),
      co || ((lo = clearTimeout(lo)), (co = 1), fo(dt));
  }),
    (va.timer.flush = function () {
      mt(), vt();
    });
  var fo =
      xa[o(xa, "requestAnimationFrame")] ||
      function (n) {
        setTimeout(n, 17);
      },
    so = ".",
    ho = ",",
    go = [3, 3],
    po = [
      "y",
      "z",
      "a",
      "f",
      "p",
      "n",
      "µ",
      "m",
      "",
      "k",
      "M",
      "G",
      "T",
      "P",
      "E",
      "Z",
      "Y",
    ].map(yt);
  (va.formatPrefix = function (n, t) {
    var e = 0;
    return (
      n &&
        (0 > n && (n *= -1),
        t && (n = va.round(n, Mt(n, t))),
        (e = 1 + Math.floor(1e-12 + Math.log(n) / Math.LN10)),
        (e = Math.max(
          -24,
          Math.min(24, 3 * Math.floor((0 >= e ? e + 1 : e - 1) / 3))
        ))),
      po[8 + e / 3]
    );
  }),
    (va.round = function (n, t) {
      return t ? Math.round(n * (t = Math.pow(10, t))) / t : Math.round(n);
    }),
    (va.format = function (n) {
      var t = mo.exec(n),
        e = t[1] || " ",
        r = t[2] || ">",
        i = t[3] || "",
        u = t[4] || "",
        a = t[5],
        o = +t[6],
        c = t[7],
        l = t[8],
        f = t[9],
        s = 1,
        h = "",
        g = !1;
      switch (
        (l && (l = +l.substring(1)),
        (a || ("0" === e && "=" === r)) &&
          ((a = e = "0"), (r = "="), c && (o -= Math.floor((o - 1) / 4))),
        f)
      ) {
        case "n":
          (c = !0), (f = "g");
          break;
        case "%":
          (s = 100), (h = "%"), (f = "f");
          break;
        case "p":
          (s = 100), (h = "%"), (f = "r");
          break;
        case "b":
        case "o":
        case "x":
        case "X":
          u && (u = "0" + f.toLowerCase());
        case "c":
        case "d":
          (g = !0), (l = 0);
          break;
        case "s":
          (s = -1), (f = "r");
      }
      "#" === u && (u = ""),
        "r" != f || l || (f = "g"),
        null != l &&
          ("g" == f
            ? (l = Math.max(1, Math.min(21, l)))
            : ("e" == f || "f" == f) && (l = Math.max(0, Math.min(20, l)))),
        (f = vo.get(f) || xt);
      var p = a && c;
      return function (n) {
        if (g && n % 1) return "";
        var t = 0 > n || (0 === n && 0 > 1 / n) ? ((n = -n), "-") : i;
        if (0 > s) {
          var d = va.formatPrefix(n, l);
          (n = d.scale(n)), (h = d.symbol);
        } else n *= s;
        (n = f(n, l)), !a && c && (n = yo(n));
        var m = u.length + n.length + (p ? 0 : t.length),
          v = o > m ? new Array((m = o - m + 1)).join(e) : "";
        return (
          p && (n = yo(v + n)),
          so && n.replace(".", so),
          (t += u),
          ("<" === r
            ? t + n + v
            : ">" === r
            ? v + t + n
            : "^" === r
            ? v.substring(0, (m >>= 1)) + t + n + v.substring(m)
            : t + (p ? n : v + n)) + h
        );
      };
    });
  var mo = /(?:([^{])?([<>=^]))?([+\- ])?(#)?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
    vo = va.map({
      b: function (n) {
        return n.toString(2);
      },
      c: function (n) {
        return String.fromCharCode(n);
      },
      o: function (n) {
        return n.toString(8);
      },
      x: function (n) {
        return n.toString(16);
      },
      X: function (n) {
        return n.toString(16).toUpperCase();
      },
      g: function (n, t) {
        return n.toPrecision(t);
      },
      e: function (n, t) {
        return n.toExponential(t);
      },
      f: function (n, t) {
        return n.toFixed(t);
      },
      r: function (n, t) {
        return (n = va.round(n, Mt(n, t))).toFixed(
          Math.max(0, Math.min(20, Mt(n * (1 + 1e-15), t)))
        );
      },
    }),
    yo = st;
  if (go) {
    var Mo = go.length;
    yo = function (n) {
      for (
        var t = n.lastIndexOf("."),
          e = t >= 0 ? "." + n.substring(t + 1) : ((t = n.length), ""),
          r = [],
          i = 0,
          u = go[0];
        t > 0 && u > 0;

      )
        r.push(n.substring((t -= u), t + u)), (u = go[(i = (i + 1) % Mo)]);
      return r.reverse().join(ho || "") + e;
    };
  }
  (va.geo = {}),
    (bt.prototype = {
      s: 0,
      t: 0,
      add: function (n) {
        _t(n, this.t, xo),
          _t(xo.s, this.s, this),
          this.s ? (this.t += xo.t) : (this.s = xo.t);
      },
      reset: function () {
        this.s = this.t = 0;
      },
      valueOf: function () {
        return this.s;
      },
    });
  var xo = new bt();
  va.geo.stream = function (n, t) {
    n && bo.hasOwnProperty(n.type) ? bo[n.type](n, t) : wt(n, t);
  };
  var bo = {
      Feature: function (n, t) {
        wt(n.geometry, t);
      },
      FeatureCollection: function (n, t) {
        for (var e = n.features, r = -1, i = e.length; ++r < i; )
          wt(e[r].geometry, t);
      },
    },
    _o = {
      Sphere: function (n, t) {
        t.sphere();
      },
      Point: function (n, t) {
        var e = n.coordinates;
        t.point(e[0], e[1]);
      },
      MultiPoint: function (n, t) {
        for (var e, r = n.coordinates, i = -1, u = r.length; ++i < u; )
          (e = r[i]), t.point(e[0], e[1]);
      },
      LineString: function (n, t) {
        St(n.coordinates, t, 0);
      },
      MultiLineString: function (n, t) {
        for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
          St(e[r], t, 0);
      },
      Polygon: function (n, t) {
        Et(n.coordinates, t);
      },
      MultiPolygon: function (n, t) {
        for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
          Et(e[r], t);
      },
      GeometryCollection: function (n, t) {
        for (var e = n.geometries, r = -1, i = e.length; ++r < i; ) wt(e[r], t);
      },
    };
  va.geo.area = function (n) {
    return (wo = 0), va.geo.stream(n, Eo), wo;
  };
  var wo,
    So = new bt(),
    Eo = {
      sphere: function () {
        wo += 4 * Ba;
      },
      point: f,
      lineStart: f,
      lineEnd: f,
      polygonStart: function () {
        So.reset(), (Eo.lineStart = kt);
      },
      polygonEnd: function () {
        var n = 2 * So;
        (wo += 0 > n ? 4 * Ba + n : n),
          (Eo.lineStart = Eo.lineEnd = Eo.point = f);
      },
    };
  (va.geo.bounds = (function () {
    function n(n, t) {
      M.push((x = [(f = n), (h = n)])), s > t && (s = t), t > g && (g = t);
    }
    function t(t, e) {
      var r = At([t * Ja, e * Ja]);
      if (v) {
        var i = qt(v, r),
          u = [i[1], -i[0], 0],
          a = qt(u, i);
        zt(a), (a = Dt(a));
        var c = t - p,
          l = c > 0 ? 1 : -1,
          d = a[0] * Ga * l,
          m = Math.abs(c) > 180;
        if (m ^ (d > l * p && l * t > d)) {
          var y = a[1] * Ga;
          y > g && (g = y);
        } else if (
          ((d = ((d + 360) % 360) - 180), m ^ (d > l * p && l * t > d))
        ) {
          var y = -a[1] * Ga;
          s > y && (s = y);
        } else s > e && (s = e), e > g && (g = e);
        m
          ? p > t
            ? o(f, t) > o(f, h) && (h = t)
            : o(t, h) > o(f, h) && (f = t)
          : h >= f
          ? (f > t && (f = t), t > h && (h = t))
          : t > p
          ? o(f, t) > o(f, h) && (h = t)
          : o(t, h) > o(f, h) && (f = t);
      } else n(t, e);
      (v = r), (p = t);
    }
    function e() {
      b.point = t;
    }
    function r() {
      (x[0] = f), (x[1] = h), (b.point = n), (v = null);
    }
    function i(n, e) {
      if (v) {
        var r = n - p;
        y += Math.abs(r) > 180 ? r + (r > 0 ? 360 : -360) : r;
      } else (d = n), (m = e);
      Eo.point(n, e), t(n, e);
    }
    function u() {
      Eo.lineStart();
    }
    function a() {
      i(d, m),
        Eo.lineEnd(),
        Math.abs(y) > $a && (f = -(h = 180)),
        (x[0] = f),
        (x[1] = h),
        (v = null);
    }
    function o(n, t) {
      return (t -= n) < 0 ? t + 360 : t;
    }
    function c(n, t) {
      return n[0] - t[0];
    }
    function l(n, t) {
      return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n;
    }
    var f,
      s,
      h,
      g,
      p,
      d,
      m,
      v,
      y,
      M,
      x,
      b = {
        point: n,
        lineStart: e,
        lineEnd: r,
        polygonStart: function () {
          (b.point = i),
            (b.lineStart = u),
            (b.lineEnd = a),
            (y = 0),
            Eo.polygonStart();
        },
        polygonEnd: function () {
          Eo.polygonEnd(),
            (b.point = n),
            (b.lineStart = e),
            (b.lineEnd = r),
            0 > So
              ? ((f = -(h = 180)), (s = -(g = 90)))
              : y > $a
              ? (g = 90)
              : -$a > y && (s = -90),
            (x[0] = f),
            (x[1] = h);
        },
      };
    return function (n) {
      (g = h = -(f = s = 1 / 0)), (M = []), va.geo.stream(n, b);
      var t = M.length;
      if (t) {
        M.sort(c);
        for (var e, r = 1, i = M[0], u = [i]; t > r; ++r)
          (e = M[r]),
            l(e[0], i) || l(e[1], i)
              ? (o(i[0], e[1]) > o(i[0], i[1]) && (i[1] = e[1]),
                o(e[0], i[1]) > o(i[0], i[1]) && (i[0] = e[0]))
              : u.push((i = e));
        for (
          var a, e, p = -1 / 0, t = u.length - 1, r = 0, i = u[t];
          t >= r;
          i = e, ++r
        )
          (e = u[r]),
            (a = o(i[1], e[0])) > p && ((p = a), (f = e[0]), (h = i[1]));
      }
      return (
        (M = x = null),
        1 / 0 === f || 1 / 0 === s
          ? [
              [0 / 0, 0 / 0],
              [0 / 0, 0 / 0],
            ]
          : [
              [f, s],
              [h, g],
            ]
      );
    };
  })()),
    (va.geo.centroid = function (n) {
      (ko = Ao = No = qo = To = Co = zo = Do = jo = Lo = Ho = 0),
        va.geo.stream(n, Fo);
      var t = jo,
        e = Lo,
        r = Ho,
        i = t * t + e * e + r * r;
      return Wa > i &&
        ((t = Co),
        (e = zo),
        (r = Do),
        $a > Ao && ((t = No), (e = qo), (r = To)),
        (i = t * t + e * e + r * r),
        Wa > i)
        ? [0 / 0, 0 / 0]
        : [Math.atan2(e, t) * Ga, U(r / Math.sqrt(i)) * Ga];
    });
  var ko,
    Ao,
    No,
    qo,
    To,
    Co,
    zo,
    Do,
    jo,
    Lo,
    Ho,
    Fo = {
      sphere: f,
      point: Lt,
      lineStart: Ft,
      lineEnd: Pt,
      polygonStart: function () {
        Fo.lineStart = Ot;
      },
      polygonEnd: function () {
        Fo.lineStart = Ft;
      },
    },
    Po = It(Rt, $t, Jt, Gt),
    Oo = [-Ba, 0],
    Ro = 1e9;
  ((va.geo.conicEqualArea = function () {
    return ee(re);
  }).raw = re),
    (va.geo.albers = function () {
      return va.geo
        .conicEqualArea()
        .rotate([96, 0])
        .center([-0.6, 38.7])
        .parallels([29.5, 45.5])
        .scale(1070);
    }),
    (va.geo.albersUsa = function () {
      function n(n) {
        var u = n[0],
          a = n[1];
        return (t = null), e(u, a), t || (r(u, a), t) || i(u, a), t;
      }
      var t,
        e,
        r,
        i,
        u = va.geo.albers(),
        a = va.geo
          .conicEqualArea()
          .rotate([154, 0])
          .center([-2, 58.5])
          .parallels([55, 65]),
        o = va.geo
          .conicEqualArea()
          .rotate([157, 0])
          .center([-3, 19.9])
          .parallels([8, 18]),
        c = {
          point: function (n, e) {
            t = [n, e];
          },
        };
      return (
        (n.invert = function (n) {
          var t = u.scale(),
            e = u.translate(),
            r = (n[0] - e[0]) / t,
            i = (n[1] - e[1]) / t;
          return (i >= 0.12 && 0.234 > i && r >= -0.425 && -0.214 > r
            ? a
            : i >= 0.166 && 0.234 > i && r >= -0.214 && -0.115 > r
            ? o
            : u
          ).invert(n);
        }),
        (n.stream = function (n) {
          var t = u.stream(n),
            e = a.stream(n),
            r = o.stream(n);
          return {
            point: function (n, i) {
              t.point(n, i), e.point(n, i), r.point(n, i);
            },
            sphere: function () {
              t.sphere(), e.sphere(), r.sphere();
            },
            lineStart: function () {
              t.lineStart(), e.lineStart(), r.lineStart();
            },
            lineEnd: function () {
              t.lineEnd(), e.lineEnd(), r.lineEnd();
            },
            polygonStart: function () {
              t.polygonStart(), e.polygonStart(), r.polygonStart();
            },
            polygonEnd: function () {
              t.polygonEnd(), e.polygonEnd(), r.polygonEnd();
            },
          };
        }),
        (n.precision = function (t) {
          return arguments.length
            ? (u.precision(t), a.precision(t), o.precision(t), n)
            : u.precision();
        }),
        (n.scale = function (t) {
          return arguments.length
            ? (u.scale(t),
              a.scale(0.35 * t),
              o.scale(t),
              n.translate(u.translate()))
            : u.scale();
        }),
        (n.translate = function (t) {
          if (!arguments.length) return u.translate();
          var l = u.scale(),
            f = +t[0],
            s = +t[1];
          return (
            (e = u
              .translate(t)
              .clipExtent([
                [f - 0.455 * l, s - 0.238 * l],
                [f + 0.455 * l, s + 0.238 * l],
              ])
              .stream(c).point),
            (r = a
              .translate([f - 0.307 * l, s + 0.201 * l])
              .clipExtent([
                [f - 0.425 * l + $a, s + 0.12 * l + $a],
                [f - 0.214 * l - $a, s + 0.234 * l - $a],
              ])
              .stream(c).point),
            (i = o
              .translate([f - 0.205 * l, s + 0.212 * l])
              .clipExtent([
                [f - 0.214 * l + $a, s + 0.166 * l + $a],
                [f - 0.115 * l - $a, s + 0.234 * l - $a],
              ])
              .stream(c).point),
            n
          );
        }),
        n.scale(1070)
      );
    });
  var Yo,
    Uo,
    Io,
    Vo,
    Xo,
    Zo,
    Bo = {
      point: f,
      lineStart: f,
      lineEnd: f,
      polygonStart: function () {
        (Uo = 0), (Bo.lineStart = ie);
      },
      polygonEnd: function () {
        (Bo.lineStart = Bo.lineEnd = Bo.point = f), (Yo += Math.abs(Uo / 2));
      },
    },
    $o = {
      point: ue,
      lineStart: f,
      lineEnd: f,
      polygonStart: f,
      polygonEnd: f,
    },
    Wo = {
      point: ce,
      lineStart: le,
      lineEnd: fe,
      polygonStart: function () {
        Wo.lineStart = se;
      },
      polygonEnd: function () {
        (Wo.point = ce), (Wo.lineStart = le), (Wo.lineEnd = fe);
      },
    };
  (va.geo.path = function () {
    function n(n) {
      return (
        n &&
          ("function" == typeof o && u.pointRadius(+o.apply(this, arguments)),
          (a && a.valid) || (a = i(u)),
          va.geo.stream(n, a)),
        u.result()
      );
    }
    function t() {
      return (a = null), n;
    }
    var e,
      r,
      i,
      u,
      a,
      o = 4.5;
    return (
      (n.area = function (n) {
        return (Yo = 0), va.geo.stream(n, i(Bo)), Yo;
      }),
      (n.centroid = function (n) {
        return (
          (No = qo = To = Co = zo = Do = jo = Lo = Ho = 0),
          va.geo.stream(n, i(Wo)),
          Ho
            ? [jo / Ho, Lo / Ho]
            : Do
            ? [Co / Do, zo / Do]
            : To
            ? [No / To, qo / To]
            : [0 / 0, 0 / 0]
        );
      }),
      (n.bounds = function (n) {
        return (
          (Xo = Zo = -(Io = Vo = 1 / 0)),
          va.geo.stream(n, i($o)),
          [
            [Io, Vo],
            [Xo, Zo],
          ]
        );
      }),
      (n.projection = function (n) {
        return arguments.length
          ? ((i = (e = n) ? n.stream || pe(n) : st), t())
          : e;
      }),
      (n.context = function (n) {
        return arguments.length
          ? ((u = null == (r = n) ? new ae() : new he(n)),
            "function" != typeof o && u.pointRadius(o),
            t())
          : r;
      }),
      (n.pointRadius = function (t) {
        return arguments.length
          ? ((o = "function" == typeof t ? t : (u.pointRadius(+t), +t)), n)
          : o;
      }),
      n.projection(va.geo.albersUsa()).context(null)
    );
  }),
    (va.geo.projection = de),
    (va.geo.projectionMutator = me),
    ((va.geo.equirectangular = function () {
      return de(ye);
    }).raw = ye.invert = ye),
    (va.geo.rotation = function (n) {
      function t(t) {
        return (t = n(t[0] * Ja, t[1] * Ja)), (t[0] *= Ga), (t[1] *= Ga), t;
      }
      return (
        (n = Me((n[0] % 360) * Ja, n[1] * Ja, n.length > 2 ? n[2] * Ja : 0)),
        (t.invert = function (t) {
          return (
            (t = n.invert(t[0] * Ja, t[1] * Ja)), (t[0] *= Ga), (t[1] *= Ga), t
          );
        }),
        t
      );
    }),
    (va.geo.circle = function () {
      function n() {
        var n = "function" == typeof r ? r.apply(this, arguments) : r,
          t = Me(-n[0] * Ja, -n[1] * Ja, 0).invert,
          i = [];
        return (
          e(null, null, 1, {
            point: function (n, e) {
              i.push((n = t(n, e))), (n[0] *= Ga), (n[1] *= Ga);
            },
          }),
          { type: "Polygon", coordinates: [i] }
        );
      }
      var t,
        e,
        r = [0, 0],
        i = 6;
      return (
        (n.origin = function (t) {
          return arguments.length ? ((r = t), n) : r;
        }),
        (n.angle = function (r) {
          return arguments.length ? ((e = we((t = +r) * Ja, i * Ja)), n) : t;
        }),
        (n.precision = function (r) {
          return arguments.length ? ((e = we(t * Ja, (i = +r) * Ja)), n) : i;
        }),
        n.angle(90)
      );
    }),
    (va.geo.distance = function (n, t) {
      var e,
        r = (t[0] - n[0]) * Ja,
        i = n[1] * Ja,
        u = t[1] * Ja,
        a = Math.sin(r),
        o = Math.cos(r),
        c = Math.sin(i),
        l = Math.cos(i),
        f = Math.sin(u),
        s = Math.cos(u);
      return Math.atan2(
        Math.sqrt((e = s * a) * e + (e = l * f - c * s * o) * e),
        c * f + l * s * o
      );
    }),
    (va.geo.graticule = function () {
      function n() {
        return { type: "MultiLineString", coordinates: t() };
      }
      function t() {
        return va
          .range(Math.ceil(u / m) * m, i, m)
          .map(h)
          .concat(va.range(Math.ceil(l / v) * v, c, v).map(g))
          .concat(
            va
              .range(Math.ceil(r / p) * p, e, p)
              .filter(function (n) {
                return Math.abs(n % m) > $a;
              })
              .map(f)
          )
          .concat(
            va
              .range(Math.ceil(o / d) * d, a, d)
              .filter(function (n) {
                return Math.abs(n % v) > $a;
              })
              .map(s)
          );
      }
      var e,
        r,
        i,
        u,
        a,
        o,
        c,
        l,
        f,
        s,
        h,
        g,
        p = 10,
        d = p,
        m = 90,
        v = 360,
        y = 2.5;
      return (
        (n.lines = function () {
          return t().map(function (n) {
            return { type: "LineString", coordinates: n };
          });
        }),
        (n.outline = function () {
          return {
            type: "Polygon",
            coordinates: [
              h(u).concat(
                g(c).slice(1),
                h(i).reverse().slice(1),
                g(l).reverse().slice(1)
              ),
            ],
          };
        }),
        (n.extent = function (t) {
          return arguments.length
            ? n.majorExtent(t).minorExtent(t)
            : n.minorExtent();
        }),
        (n.majorExtent = function (t) {
          return arguments.length
            ? ((u = +t[0][0]),
              (i = +t[1][0]),
              (l = +t[0][1]),
              (c = +t[1][1]),
              u > i && ((t = u), (u = i), (i = t)),
              l > c && ((t = l), (l = c), (c = t)),
              n.precision(y))
            : [
                [u, l],
                [i, c],
              ];
        }),
        (n.minorExtent = function (t) {
          return arguments.length
            ? ((r = +t[0][0]),
              (e = +t[1][0]),
              (o = +t[0][1]),
              (a = +t[1][1]),
              r > e && ((t = r), (r = e), (e = t)),
              o > a && ((t = o), (o = a), (a = t)),
              n.precision(y))
            : [
                [r, o],
                [e, a],
              ];
        }),
        (n.step = function (t) {
          return arguments.length ? n.majorStep(t).minorStep(t) : n.minorStep();
        }),
        (n.majorStep = function (t) {
          return arguments.length ? ((m = +t[0]), (v = +t[1]), n) : [m, v];
        }),
        (n.minorStep = function (t) {
          return arguments.length ? ((p = +t[0]), (d = +t[1]), n) : [p, d];
        }),
        (n.precision = function (t) {
          return arguments.length
            ? ((y = +t),
              (f = Ee(o, a, 90)),
              (s = ke(r, e, y)),
              (h = Ee(l, c, 90)),
              (g = ke(u, i, y)),
              n)
            : y;
        }),
        n
          .majorExtent([
            [-180, -90 + $a],
            [180, 90 - $a],
          ])
          .minorExtent([
            [-180, -80 - $a],
            [180, 80 + $a],
          ])
      );
    }),
    (va.geo.greatArc = function () {
      function n() {
        return {
          type: "LineString",
          coordinates: [
            t || r.apply(this, arguments),
            e || i.apply(this, arguments),
          ],
        };
      }
      var t,
        e,
        r = Ae,
        i = Ne;
      return (
        (n.distance = function () {
          return va.geo.distance(
            t || r.apply(this, arguments),
            e || i.apply(this, arguments)
          );
        }),
        (n.source = function (e) {
          return arguments.length
            ? ((r = e), (t = "function" == typeof e ? null : e), n)
            : r;
        }),
        (n.target = function (t) {
          return arguments.length
            ? ((i = t), (e = "function" == typeof t ? null : t), n)
            : i;
        }),
        (n.precision = function () {
          return arguments.length ? n : 0;
        }),
        n
      );
    }),
    (va.geo.interpolate = function (n, t) {
      return qe(n[0] * Ja, n[1] * Ja, t[0] * Ja, t[1] * Ja);
    }),
    (va.geo.length = function (n) {
      return (Jo = 0), va.geo.stream(n, Go), Jo;
    });
  var Jo,
    Go = {
      sphere: f,
      point: f,
      lineStart: Te,
      lineEnd: f,
      polygonStart: f,
      polygonEnd: f,
    },
    Ko = Ce(
      function (n) {
        return Math.sqrt(2 / (1 + n));
      },
      function (n) {
        return 2 * Math.asin(n / 2);
      }
    );
  (va.geo.azimuthalEqualArea = function () {
    return de(Ko);
  }).raw = Ko;
  var Qo = Ce(function (n) {
    var t = Math.acos(n);
    return t && t / Math.sin(t);
  }, st);
  ((va.geo.azimuthalEquidistant = function () {
    return de(Qo);
  }).raw = Qo),
    ((va.geo.conicConformal = function () {
      return ee(ze);
    }).raw = ze),
    ((va.geo.conicEquidistant = function () {
      return ee(De);
    }).raw = De);
  var nc = Ce(function (n) {
    return 1 / n;
  }, Math.atan);
  ((va.geo.gnomonic = function () {
    return de(nc);
  }).raw = nc),
    (je.invert = function (n, t) {
      return [n, 2 * Math.atan(Math.exp(t)) - Ba / 2];
    }),
    ((va.geo.mercator = function () {
      return Le(je);
    }).raw = je);
  var tc = Ce(function () {
    return 1;
  }, Math.asin);
  (va.geo.orthographic = function () {
    return de(tc);
  }).raw = tc;
  var ec = Ce(
    function (n) {
      return 1 / (1 + n);
    },
    function (n) {
      return 2 * Math.atan(n);
    }
  );
  ((va.geo.stereographic = function () {
    return de(ec);
  }).raw = ec),
    (He.invert = function (n, t) {
      return [Math.atan2(I(n), Math.cos(t)), U(Math.sin(t) / V(n))];
    }),
    ((va.geo.transverseMercator = function () {
      return Le(He);
    }).raw = He),
    (va.geom = {}),
    (va.svg = {}),
    (va.svg.line = function () {
      return Fe(st);
    });
  var rc = va.map({
    linear: Re,
    "linear-closed": Ye,
    step: Ue,
    "step-before": Ie,
    "step-after": Ve,
    basis: Je,
    "basis-open": Ge,
    "basis-closed": Ke,
    bundle: Qe,
    cardinal: Be,
    "cardinal-open": Xe,
    "cardinal-closed": Ze,
    monotone: ur,
  });
  rc.forEach(function (n, t) {
    (t.key = n), (t.closed = /-closed$/.test(n));
  });
  var ic = [0, 2 / 3, 1 / 3, 0],
    uc = [0, 1 / 3, 2 / 3, 0],
    ac = [0, 1 / 6, 2 / 3, 1 / 6];
  (va.geom.hull = function (n) {
    function t(n) {
      if (n.length < 3) return [];
      var t,
        i,
        u,
        a,
        o,
        c,
        l,
        f,
        s,
        h,
        g,
        p,
        d = ft(e),
        m = ft(r),
        v = n.length,
        y = v - 1,
        M = [],
        x = [],
        b = 0;
      if (d === Pe && r === Oe) t = n;
      else
        for (u = 0, t = []; v > u; ++u)
          t.push([+d.call(this, (i = n[u]), u), +m.call(this, i, u)]);
      for (u = 1; v > u; ++u)
        (t[u][1] < t[b][1] || (t[u][1] == t[b][1] && t[u][0] < t[b][0])) &&
          (b = u);
      for (u = 0; v > u; ++u)
        u !== b &&
          ((c = t[u][1] - t[b][1]),
          (o = t[u][0] - t[b][0]),
          M.push({ angle: Math.atan2(c, o), index: u }));
      for (
        M.sort(function (n, t) {
          return n.angle - t.angle;
        }),
          g = M[0].angle,
          h = M[0].index,
          s = 0,
          u = 1;
        y > u;
        ++u
      ) {
        if (((a = M[u].index), g == M[u].angle)) {
          if (
            ((o = t[h][0] - t[b][0]),
            (c = t[h][1] - t[b][1]),
            (l = t[a][0] - t[b][0]),
            (f = t[a][1] - t[b][1]),
            o * o + c * c >= l * l + f * f)
          ) {
            M[u].index = -1;
            continue;
          }
          M[s].index = -1;
        }
        (g = M[u].angle), (s = u), (h = a);
      }
      for (x.push(b), u = 0, a = 0; 2 > u; ++a)
        M[a].index > -1 && (x.push(M[a].index), u++);
      for (p = x.length; y > a; ++a)
        if (!(M[a].index < 0)) {
          for (; !ar(x[p - 2], x[p - 1], M[a].index, t); ) --p;
          x[p++] = M[a].index;
        }
      var _ = [];
      for (u = p - 1; u >= 0; --u) _.push(n[x[u]]);
      return _;
    }
    var e = Pe,
      r = Oe;
    return arguments.length
      ? t(n)
      : ((t.x = function (n) {
          return arguments.length ? ((e = n), t) : e;
        }),
        (t.y = function (n) {
          return arguments.length ? ((r = n), t) : r;
        }),
        t);
  }),
    (va.geom.polygon = function (n) {
      return (
        (n.area = function () {
          for (
            var t = 0,
              e = n.length,
              r = n[e - 1][1] * n[0][0] - n[e - 1][0] * n[0][1];
            ++t < e;

          )
            r += n[t - 1][1] * n[t][0] - n[t - 1][0] * n[t][1];
          return 0.5 * r;
        }),
        (n.centroid = function (t) {
          var e,
            r,
            i = -1,
            u = n.length,
            a = 0,
            o = 0,
            c = n[u - 1];
          for (arguments.length || (t = -1 / (6 * n.area())); ++i < u; )
            (e = c),
              (c = n[i]),
              (r = e[0] * c[1] - c[0] * e[1]),
              (a += (e[0] + c[0]) * r),
              (o += (e[1] + c[1]) * r);
          return [a * t, o * t];
        }),
        (n.clip = function (t) {
          for (
            var e, r, i, u, a, o, c = -1, l = n.length, f = n[l - 1];
            ++c < l;

          ) {
            for (
              e = t.slice(),
                t.length = 0,
                u = n[c],
                a = e[(i = e.length) - 1],
                r = -1;
              ++r < i;

            )
              (o = e[r]),
                or(o, f, u)
                  ? (or(a, f, u) || t.push(cr(a, o, f, u)), t.push(o))
                  : or(a, f, u) && t.push(cr(a, o, f, u)),
                (a = o);
            f = u;
          }
          return t;
        }),
        n
      );
    }),
    (va.geom.delaunay = function (n) {
      var t = n.map(function () {
          return [];
        }),
        e = [];
      return (
        lr(n, function (e) {
          t[e.region.l.index].push(n[e.region.r.index]);
        }),
        t.forEach(function (t, r) {
          var i = n[r],
            u = i[0],
            a = i[1];
          t.forEach(function (n) {
            n.angle = Math.atan2(n[0] - u, n[1] - a);
          }),
            t.sort(function (n, t) {
              return n.angle - t.angle;
            });
          for (var o = 0, c = t.length - 1; c > o; o++)
            e.push([i, t[o], t[o + 1]]);
        }),
        e
      );
    }),
    (va.geom.voronoi = function (n) {
      function t(n) {
        var t,
          u,
          a,
          o = n.map(function () {
            return [];
          }),
          c = ft(e),
          l = ft(r),
          f = n.length,
          s = 1e6;
        if (c === Pe && l === Oe) t = n;
        else
          for (t = new Array(f), a = 0; f > a; ++a)
            t[a] = [+c.call(this, (u = n[a]), a), +l.call(this, u, a)];
        if (
          (lr(t, function (n) {
            var t, e, r, i, u, a;
            1 === n.a && n.b >= 0
              ? ((t = n.ep.r), (e = n.ep.l))
              : ((t = n.ep.l), (e = n.ep.r)),
              1 === n.a
                ? ((u = t ? t.y : -s),
                  (r = n.c - n.b * u),
                  (a = e ? e.y : s),
                  (i = n.c - n.b * a))
                : ((r = t ? t.x : -s),
                  (u = n.c - n.a * r),
                  (i = e ? e.x : s),
                  (a = n.c - n.a * i));
            var c = [r, u],
              l = [i, a];
            o[n.region.l.index].push(c, l), o[n.region.r.index].push(c, l);
          }),
          (o = o.map(function (n, e) {
            var r = t[e][0],
              i = t[e][1],
              u = n.map(function (n) {
                return Math.atan2(n[0] - r, n[1] - i);
              }),
              a = va.range(n.length).sort(function (n, t) {
                return u[n] - u[t];
              });
            return a
              .filter(function (n, t) {
                return !t || u[n] - u[a[t - 1]] > $a;
              })
              .map(function (t) {
                return n[t];
              });
          })),
          o.forEach(function (n, e) {
            var r = n.length;
            if (!r) return n.push([-s, -s], [-s, s], [s, s], [s, -s]);
            if (!(r > 2)) {
              var i = t[e],
                u = n[0],
                a = n[1],
                o = i[0],
                c = i[1],
                l = u[0],
                f = u[1],
                h = a[0],
                g = a[1],
                p = Math.abs(h - l),
                d = g - f;
              if (Math.abs(d) < $a) {
                var m = f > c ? -s : s;
                n.push([-s, m], [s, m]);
              } else if ($a > p) {
                var v = l > o ? -s : s;
                n.push([v, -s], [v, s]);
              } else {
                var m = (l - o) * (g - f) > (h - l) * (f - c) ? s : -s,
                  y = Math.abs(d) - p;
                Math.abs(y) < $a
                  ? n.push([0 > d ? m : -m, m])
                  : (y > 0 && (m *= -1), n.push([-s, m], [s, m]));
              }
            }
          }),
          i)
        )
          for (a = 0; f > a; ++a) i.clip(o[a]);
        for (a = 0; f > a; ++a) o[a].point = n[a];
        return o;
      }
      var e = Pe,
        r = Oe,
        i = null;
      return arguments.length
        ? t(n)
        : ((t.x = function (n) {
            return arguments.length ? ((e = n), t) : e;
          }),
          (t.y = function (n) {
            return arguments.length ? ((r = n), t) : r;
          }),
          (t.clipExtent = function (n) {
            if (!arguments.length) return i && [i[0], i[2]];
            if (null == n) i = null;
            else {
              var e = +n[0][0],
                r = +n[0][1],
                u = +n[1][0],
                a = +n[1][1];
              i = va.geom.polygon([
                [e, r],
                [e, a],
                [u, a],
                [u, r],
              ]);
            }
            return t;
          }),
          (t.size = function (n) {
            return arguments.length
              ? t.clipExtent(n && [[0, 0], n])
              : i && i[2];
          }),
          (t.links = function (n) {
            var t,
              i,
              u,
              a = n.map(function () {
                return [];
              }),
              o = [],
              c = ft(e),
              l = ft(r),
              f = n.length;
            if (c === Pe && l === Oe) t = n;
            else
              for (t = new Array(f), u = 0; f > u; ++u)
                t[u] = [+c.call(this, (i = n[u]), u), +l.call(this, i, u)];
            return (
              lr(t, function (t) {
                var e = t.region.l.index,
                  r = t.region.r.index;
                a[e][r] ||
                  ((a[e][r] = a[r][e] = !0),
                  o.push({ source: n[e], target: n[r] }));
              }),
              o
            );
          }),
          (t.triangles = function (n) {
            if (e === Pe && r === Oe) return va.geom.delaunay(n);
            for (
              var t,
                i = new Array(c),
                u = ft(e),
                a = ft(r),
                o = -1,
                c = n.length;
              ++o < c;

            )
              (i[o] = [
                +u.call(this, (t = n[o]), o),
                +a.call(this, t, o),
              ]).data = t;
            return va.geom.delaunay(i).map(function (n) {
              return n.map(function (n) {
                return n.data;
              });
            });
          }),
          t);
    });
  var oc = { l: "r", r: "l" };
  (va.geom.quadtree = function (n, t, e, r, i) {
    function u(n) {
      function u(n, t, e, r, i, u, a, o) {
        if (!isNaN(e) && !isNaN(r))
          if (n.leaf) {
            var c = n.x,
              f = n.y;
            if (null != c)
              if (Math.abs(c - e) + Math.abs(f - r) < 0.01)
                l(n, t, e, r, i, u, a, o);
              else {
                var s = n.point;
                (n.x = n.y = n.point = null),
                  l(n, s, c, f, i, u, a, o),
                  l(n, t, e, r, i, u, a, o);
              }
            else (n.x = e), (n.y = r), (n.point = t);
          } else l(n, t, e, r, i, u, a, o);
      }
      function l(n, t, e, r, i, a, o, c) {
        var l = 0.5 * (i + o),
          f = 0.5 * (a + c),
          s = e >= l,
          h = r >= f,
          g = (h << 1) + s;
        (n.leaf = !1),
          (n = n.nodes[g] || (n.nodes[g] = hr())),
          s ? (i = l) : (o = l),
          h ? (a = f) : (c = f),
          u(n, t, e, r, i, a, o, c);
      }
      var f,
        s,
        h,
        g,
        p,
        d,
        m,
        v,
        y,
        M = ft(o),
        x = ft(c);
      if (null != t) (d = t), (m = e), (v = r), (y = i);
      else if (
        ((v = y = -(d = m = 1 / 0)), (s = []), (h = []), (p = n.length), a)
      )
        for (g = 0; p > g; ++g)
          (f = n[g]),
            f.x < d && (d = f.x),
            f.y < m && (m = f.y),
            f.x > v && (v = f.x),
            f.y > y && (y = f.y),
            s.push(f.x),
            h.push(f.y);
      else
        for (g = 0; p > g; ++g) {
          var b = +M((f = n[g]), g),
            _ = +x(f, g);
          d > b && (d = b),
            m > _ && (m = _),
            b > v && (v = b),
            _ > y && (y = _),
            s.push(b),
            h.push(_);
        }
      var w = v - d,
        S = y - m;
      w > S ? (y = m + w) : (v = d + S);
      var E = hr();
      if (
        ((E.add = function (n) {
          u(E, n, +M(n, ++g), +x(n, g), d, m, v, y);
        }),
        (E.visit = function (n) {
          gr(n, E, d, m, v, y);
        }),
        (g = -1),
        null == t)
      ) {
        for (; ++g < p; ) u(E, n[g], s[g], h[g], d, m, v, y);
        --g;
      } else n.forEach(E.add);
      return (s = h = n = f = null), E;
    }
    var a,
      o = Pe,
      c = Oe;
    return (a = arguments.length)
      ? ((o = fr), (c = sr), 3 === a && ((i = e), (r = t), (e = t = 0)), u(n))
      : ((u.x = function (n) {
          return arguments.length ? ((o = n), u) : o;
        }),
        (u.y = function (n) {
          return arguments.length ? ((c = n), u) : c;
        }),
        (u.extent = function (n) {
          return arguments.length
            ? (null == n
                ? (t = e = r = i = null)
                : ((t = +n[0][0]),
                  (e = +n[0][1]),
                  (r = +n[1][0]),
                  (i = +n[1][1])),
              u)
            : null == t
            ? null
            : [
                [t, e],
                [r, i],
              ];
        }),
        (u.size = function (n) {
          return arguments.length
            ? (null == n
                ? (t = e = r = i = null)
                : ((t = e = 0), (r = +n[0]), (i = +n[1])),
              u)
            : null == t
            ? null
            : [r - t, i - e];
        }),
        u);
  }),
    (va.interpolateRgb = pr),
    (va.transform = function (n) {
      var t = ya.createElementNS(va.ns.prefix.svg, "g");
      return (va.transform = function (n) {
        if (null != n) {
          t.setAttribute("transform", n);
          var e = t.transform.baseVal.consolidate();
        }
        return new dr(e ? e.matrix : cc);
      })(n);
    }),
    (dr.prototype.toString = function () {
      return (
        "translate(" +
        this.translate +
        ")rotate(" +
        this.rotate +
        ")skewX(" +
        this.skew +
        ")scale(" +
        this.scale +
        ")"
      );
    });
  var cc = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
  (va.interpolateNumber = Mr),
    (va.interpolateTransform = xr),
    (va.interpolateObject = br),
    (va.interpolateString = _r);
  var lc = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  (va.interpolate = wr),
    (va.interpolators = [
      function (n, t) {
        var e = typeof t;
        return ("string" === e
          ? uo.has(t) || /^(#|rgb\(|hsl\()/.test(t)
            ? pr
            : _r
          : t instanceof H
          ? pr
          : "object" === e
          ? Array.isArray(t)
            ? Er
            : br
          : Mr)(n, t);
      },
    ]),
    (va.interpolateArray = Er);
  var fc = function () {
      return st;
    },
    sc = va.map({
      linear: fc,
      poly: zr,
      quad: function () {
        return qr;
      },
      cubic: function () {
        return Tr;
      },
      sin: function () {
        return Dr;
      },
      exp: function () {
        return jr;
      },
      circle: function () {
        return Lr;
      },
      elastic: Hr,
      back: Fr,
      bounce: function () {
        return Pr;
      },
    }),
    hc = va.map({
      in: st,
      out: Ar,
      "in-out": Nr,
      "out-in": function (n) {
        return Nr(Ar(n));
      },
    });
  (va.ease = function (n) {
    var t = n.indexOf("-"),
      e = t >= 0 ? n.substring(0, t) : n,
      r = t >= 0 ? n.substring(t + 1) : "in";
    return (
      (e = sc.get(e) || fc),
      (r = hc.get(r) || st),
      kr(r(e.apply(null, Array.prototype.slice.call(arguments, 1))))
    );
  }),
    (va.interpolateHcl = Or),
    (va.interpolateHsl = Rr),
    (va.interpolateLab = Yr),
    (va.interpolateRound = Ur),
    (va.layout = {}),
    (va.layout.bundle = function () {
      return function (n) {
        for (var t = [], e = -1, r = n.length; ++e < r; ) t.push(Xr(n[e]));
        return t;
      };
    }),
    (va.layout.chord = function () {
      function n() {
        var n,
          l,
          s,
          h,
          g,
          p = {},
          d = [],
          m = va.range(u),
          v = [];
        for (e = [], r = [], n = 0, h = -1; ++h < u; ) {
          for (l = 0, g = -1; ++g < u; ) l += i[h][g];
          d.push(l), v.push(va.range(u)), (n += l);
        }
        for (
          a &&
            m.sort(function (n, t) {
              return a(d[n], d[t]);
            }),
            o &&
              v.forEach(function (n, t) {
                n.sort(function (n, e) {
                  return o(i[t][n], i[t][e]);
                });
              }),
            n = (2 * Ba - f * u) / n,
            l = 0,
            h = -1;
          ++h < u;

        ) {
          for (s = l, g = -1; ++g < u; ) {
            var y = m[h],
              M = v[y][g],
              x = i[y][M],
              b = l,
              _ = (l += x * n);
            p[y + "-" + M] = {
              index: y,
              subindex: M,
              startAngle: b,
              endAngle: _,
              value: x,
            };
          }
          (r[y] = { index: y, startAngle: s, endAngle: l, value: (l - s) / n }),
            (l += f);
        }
        for (h = -1; ++h < u; )
          for (g = h - 1; ++g < u; ) {
            var w = p[h + "-" + g],
              S = p[g + "-" + h];
            (w.value || S.value) &&
              e.push(
                w.value < S.value
                  ? { source: S, target: w }
                  : { source: w, target: S }
              );
          }
        c && t();
      }
      function t() {
        e.sort(function (n, t) {
          return c(
            (n.source.value + n.target.value) / 2,
            (t.source.value + t.target.value) / 2
          );
        });
      }
      var e,
        r,
        i,
        u,
        a,
        o,
        c,
        l = {},
        f = 0;
      return (
        (l.matrix = function (n) {
          return arguments.length
            ? ((u = (i = n) && i.length), (e = r = null), l)
            : i;
        }),
        (l.padding = function (n) {
          return arguments.length ? ((f = n), (e = r = null), l) : f;
        }),
        (l.sortGroups = function (n) {
          return arguments.length ? ((a = n), (e = r = null), l) : a;
        }),
        (l.sortSubgroups = function (n) {
          return arguments.length ? ((o = n), (e = null), l) : o;
        }),
        (l.sortChords = function (n) {
          return arguments.length ? ((c = n), e && t(), l) : c;
        }),
        (l.chords = function () {
          return e || n(), e;
        }),
        (l.groups = function () {
          return r || n(), r;
        }),
        l
      );
    }),
    (va.layout.force = function () {
      function n(n) {
        return function (t, e, r, i) {
          if (t.point !== n) {
            var u = t.cx - n.x,
              a = t.cy - n.y,
              o = 1 / Math.sqrt(u * u + a * a);
            if (d > (i - e) * o) {
              var c = t.charge * o * o;
              return (n.px -= u * c), (n.py -= a * c), !0;
            }
            if (t.point && isFinite(o)) {
              var c = t.pointCharge * o * o;
              (n.px -= u * c), (n.py -= a * c);
            }
          }
          return !t.charge;
        };
      }
      function t(n) {
        (n.px = va.event.x), (n.py = va.event.y), o.resume();
      }
      var e,
        r,
        i,
        u,
        a,
        o = {},
        c = va.dispatch("start", "tick", "end"),
        l = [1, 1],
        f = 0.9,
        s = gc,
        h = pc,
        g = -30,
        p = 0.1,
        d = 0.8,
        m = [],
        v = [];
      return (
        (o.tick = function () {
          if ((r *= 0.99) < 0.005)
            return c.end({ type: "end", alpha: (r = 0) }), !0;
          var t,
            e,
            o,
            s,
            h,
            d,
            y,
            M,
            x,
            b = m.length,
            _ = v.length;
          for (e = 0; _ > e; ++e)
            (o = v[e]),
              (s = o.source),
              (h = o.target),
              (M = h.x - s.x),
              (x = h.y - s.y),
              (d = M * M + x * x) &&
                ((d = (r * u[e] * ((d = Math.sqrt(d)) - i[e])) / d),
                (M *= d),
                (x *= d),
                (h.x -= M * (y = s.weight / (h.weight + s.weight))),
                (h.y -= x * y),
                (s.x += M * (y = 1 - y)),
                (s.y += x * y));
          if ((y = r * p) && ((M = l[0] / 2), (x = l[1] / 2), (e = -1), y))
            for (; ++e < b; )
              (o = m[e]), (o.x += (M - o.x) * y), (o.y += (x - o.y) * y);
          if (g)
            for (Kr((t = va.geom.quadtree(m)), r, a), e = -1; ++e < b; )
              (o = m[e]).fixed || t.visit(n(o));
          for (e = -1; ++e < b; )
            (o = m[e]),
              o.fixed
                ? ((o.x = o.px), (o.y = o.py))
                : ((o.x -= (o.px - (o.px = o.x)) * f),
                  (o.y -= (o.py - (o.py = o.y)) * f));
          c.tick({ type: "tick", alpha: r });
        }),
        (o.nodes = function (n) {
          return arguments.length ? ((m = n), o) : m;
        }),
        (o.links = function (n) {
          return arguments.length ? ((v = n), o) : v;
        }),
        (o.size = function (n) {
          return arguments.length ? ((l = n), o) : l;
        }),
        (o.linkDistance = function (n) {
          return arguments.length
            ? ((s = "function" == typeof n ? n : +n), o)
            : s;
        }),
        (o.distance = o.linkDistance),
        (o.linkStrength = function (n) {
          return arguments.length
            ? ((h = "function" == typeof n ? n : +n), o)
            : h;
        }),
        (o.friction = function (n) {
          return arguments.length ? ((f = +n), o) : f;
        }),
        (o.charge = function (n) {
          return arguments.length
            ? ((g = "function" == typeof n ? n : +n), o)
            : g;
        }),
        (o.gravity = function (n) {
          return arguments.length ? ((p = +n), o) : p;
        }),
        (o.theta = function (n) {
          return arguments.length ? ((d = +n), o) : d;
        }),
        (o.alpha = function (n) {
          return arguments.length
            ? ((n = +n),
              r
                ? (r = n > 0 ? n : 0)
                : n > 0 &&
                  (c.start({ type: "start", alpha: (r = n) }),
                  va.timer(o.tick)),
              o)
            : r;
        }),
        (o.start = function () {
          function n(n, r) {
            for (var i, u = t(e), a = -1, o = u.length; ++a < o; )
              if (!isNaN((i = u[a][n]))) return i;
            return Math.random() * r;
          }
          function t() {
            if (!c) {
              for (c = [], r = 0; p > r; ++r) c[r] = [];
              for (r = 0; d > r; ++r) {
                var n = v[r];
                c[n.source.index].push(n.target),
                  c[n.target.index].push(n.source);
              }
            }
            return c[e];
          }
          var e,
            r,
            c,
            f,
            p = m.length,
            d = v.length,
            y = l[0],
            M = l[1];
          for (e = 0; p > e; ++e) ((f = m[e]).index = e), (f.weight = 0);
          for (e = 0; d > e; ++e)
            (f = v[e]),
              "number" == typeof f.source && (f.source = m[f.source]),
              "number" == typeof f.target && (f.target = m[f.target]),
              ++f.source.weight,
              ++f.target.weight;
          for (e = 0; p > e; ++e)
            (f = m[e]),
              isNaN(f.x) && (f.x = n("x", y)),
              isNaN(f.y) && (f.y = n("y", M)),
              isNaN(f.px) && (f.px = f.x),
              isNaN(f.py) && (f.py = f.y);
          if (((i = []), "function" == typeof s))
            for (e = 0; d > e; ++e) i[e] = +s.call(this, v[e], e);
          else for (e = 0; d > e; ++e) i[e] = s;
          if (((u = []), "function" == typeof h))
            for (e = 0; d > e; ++e) u[e] = +h.call(this, v[e], e);
          else for (e = 0; d > e; ++e) u[e] = h;
          if (((a = []), "function" == typeof g))
            for (e = 0; p > e; ++e) a[e] = +g.call(this, m[e], e);
          else for (e = 0; p > e; ++e) a[e] = g;
          return o.resume();
        }),
        (o.resume = function () {
          return o.alpha(0.1);
        }),
        (o.stop = function () {
          return o.alpha(0);
        }),
        (o.drag = function () {
          return (
            e ||
              (e = va.behavior
                .drag()
                .origin(st)
                .on("dragstart.force", $r)
                .on("drag.force", t)
                .on("dragend.force", Wr)),
            arguments.length
              ? (this.on("mouseover.force", Jr)
                  .on("mouseout.force", Gr)
                  .call(e),
                void 0)
              : e
          );
        }),
        va.rebind(o, c, "on")
      );
    });
  var gc = 20,
    pc = 1;
  (va.layout.hierarchy = function () {
    function n(t, a, o) {
      var c = i.call(e, t, a);
      if (((t.depth = a), o.push(t), c && (l = c.length))) {
        for (
          var l, f, s = -1, h = (t.children = []), g = 0, p = a + 1;
          ++s < l;

        )
          (f = n(c[s], p, o)), (f.parent = t), h.push(f), (g += f.value);
        r && h.sort(r), u && (t.value = g);
      } else u && (t.value = +u.call(e, t, a) || 0);
      return t;
    }
    function t(n, r) {
      var i = n.children,
        a = 0;
      if (i && (o = i.length))
        for (var o, c = -1, l = r + 1; ++c < o; ) a += t(i[c], l);
      else u && (a = +u.call(e, n, r) || 0);
      return u && (n.value = a), a;
    }
    function e(t) {
      var e = [];
      return n(t, 0, e), e;
    }
    var r = ei,
      i = ni,
      u = ti;
    return (
      (e.sort = function (n) {
        return arguments.length ? ((r = n), e) : r;
      }),
      (e.children = function (n) {
        return arguments.length ? ((i = n), e) : i;
      }),
      (e.value = function (n) {
        return arguments.length ? ((u = n), e) : u;
      }),
      (e.revalue = function (n) {
        return t(n, 0), n;
      }),
      e
    );
  }),
    (va.layout.partition = function () {
      function n(t, e, r, i) {
        var u = t.children;
        if (
          ((t.x = e),
          (t.y = t.depth * i),
          (t.dx = r),
          (t.dy = i),
          u && (a = u.length))
        ) {
          var a,
            o,
            c,
            l = -1;
          for (r = t.value ? r / t.value : 0; ++l < a; )
            n((o = u[l]), e, (c = o.value * r), i), (e += c);
        }
      }
      function t(n) {
        var e = n.children,
          r = 0;
        if (e && (i = e.length))
          for (var i, u = -1; ++u < i; ) r = Math.max(r, t(e[u]));
        return 1 + r;
      }
      function e(e, u) {
        var a = r.call(this, e, u);
        return n(a[0], 0, i[0], i[1] / t(a[0])), a;
      }
      var r = va.layout.hierarchy(),
        i = [1, 1];
      return (
        (e.size = function (n) {
          return arguments.length ? ((i = n), e) : i;
        }),
        Qr(e, r)
      );
    }),
    (va.layout.pie = function () {
      function n(u) {
        var a = u.map(function (e, r) {
            return +t.call(n, e, r);
          }),
          o = +("function" == typeof r ? r.apply(this, arguments) : r),
          c =
            (("function" == typeof i ? i.apply(this, arguments) : i) - o) /
            va.sum(a),
          l = va.range(u.length);
        null != e &&
          l.sort(
            e === dc
              ? function (n, t) {
                  return a[t] - a[n];
                }
              : function (n, t) {
                  return e(u[n], u[t]);
                }
          );
        var f = [];
        return (
          l.forEach(function (n) {
            var t;
            f[n] = {
              data: u[n],
              value: (t = a[n]),
              startAngle: o,
              endAngle: (o += t * c),
            };
          }),
          f
        );
      }
      var t = Number,
        e = dc,
        r = 0,
        i = 2 * Ba;
      return (
        (n.value = function (e) {
          return arguments.length ? ((t = e), n) : t;
        }),
        (n.sort = function (t) {
          return arguments.length ? ((e = t), n) : e;
        }),
        (n.startAngle = function (t) {
          return arguments.length ? ((r = t), n) : r;
        }),
        (n.endAngle = function (t) {
          return arguments.length ? ((i = t), n) : i;
        }),
        n
      );
    });
  var dc = {};
  va.layout.stack = function () {
    function n(o, c) {
      var l = o.map(function (e, r) {
          return t.call(n, e, r);
        }),
        f = l.map(function (t) {
          return t.map(function (t, e) {
            return [u.call(n, t, e), a.call(n, t, e)];
          });
        }),
        s = e.call(n, f, c);
      (l = va.permute(l, s)), (f = va.permute(f, s));
      var h,
        g,
        p,
        d = r.call(n, f, c),
        m = l.length,
        v = l[0].length;
      for (g = 0; v > g; ++g)
        for (i.call(n, l[0][g], (p = d[g]), f[0][g][1]), h = 1; m > h; ++h)
          i.call(n, l[h][g], (p += f[h - 1][g][1]), f[h][g][1]);
      return o;
    }
    var t = st,
      e = oi,
      r = ci,
      i = ai,
      u = ii,
      a = ui;
    return (
      (n.values = function (e) {
        return arguments.length ? ((t = e), n) : t;
      }),
      (n.order = function (t) {
        return arguments.length
          ? ((e = "function" == typeof t ? t : mc.get(t) || oi), n)
          : e;
      }),
      (n.offset = function (t) {
        return arguments.length
          ? ((r = "function" == typeof t ? t : vc.get(t) || ci), n)
          : r;
      }),
      (n.x = function (t) {
        return arguments.length ? ((u = t), n) : u;
      }),
      (n.y = function (t) {
        return arguments.length ? ((a = t), n) : a;
      }),
      (n.out = function (t) {
        return arguments.length ? ((i = t), n) : i;
      }),
      n
    );
  };
  var mc = va.map({
      "inside-out": function (n) {
        var t,
          e,
          r = n.length,
          i = n.map(li),
          u = n.map(fi),
          a = va.range(r).sort(function (n, t) {
            return i[n] - i[t];
          }),
          o = 0,
          c = 0,
          l = [],
          f = [];
        for (t = 0; r > t; ++t)
          (e = a[t]),
            c > o ? ((o += u[e]), l.push(e)) : ((c += u[e]), f.push(e));
        return f.reverse().concat(l);
      },
      reverse: function (n) {
        return va.range(n.length).reverse();
      },
      default: oi,
    }),
    vc = va.map({
      silhouette: function (n) {
        var t,
          e,
          r,
          i = n.length,
          u = n[0].length,
          a = [],
          o = 0,
          c = [];
        for (e = 0; u > e; ++e) {
          for (t = 0, r = 0; i > t; t++) r += n[t][e][1];
          r > o && (o = r), a.push(r);
        }
        for (e = 0; u > e; ++e) c[e] = (o - a[e]) / 2;
        return c;
      },
      wiggle: function (n) {
        var t,
          e,
          r,
          i,
          u,
          a,
          o,
          c,
          l,
          f = n.length,
          s = n[0],
          h = s.length,
          g = [];
        for (g[0] = c = l = 0, e = 1; h > e; ++e) {
          for (t = 0, i = 0; f > t; ++t) i += n[t][e][1];
          for (t = 0, u = 0, o = s[e][0] - s[e - 1][0]; f > t; ++t) {
            for (r = 0, a = (n[t][e][1] - n[t][e - 1][1]) / (2 * o); t > r; ++r)
              a += (n[r][e][1] - n[r][e - 1][1]) / o;
            u += a * n[t][e][1];
          }
          (g[e] = c -= i ? (u / i) * o : 0), l > c && (l = c);
        }
        for (e = 0; h > e; ++e) g[e] -= l;
        return g;
      },
      expand: function (n) {
        var t,
          e,
          r,
          i = n.length,
          u = n[0].length,
          a = 1 / i,
          o = [];
        for (e = 0; u > e; ++e) {
          for (t = 0, r = 0; i > t; t++) r += n[t][e][1];
          if (r) for (t = 0; i > t; t++) n[t][e][1] /= r;
          else for (t = 0; i > t; t++) n[t][e][1] = a;
        }
        for (e = 0; u > e; ++e) o[e] = 0;
        return o;
      },
      zero: ci,
    });
  (va.layout.histogram = function () {
    function n(n, u) {
      for (
        var a,
          o,
          c = [],
          l = n.map(e, this),
          f = r.call(this, l, u),
          s = i.call(this, f, l, u),
          u = -1,
          h = l.length,
          g = s.length - 1,
          p = t ? 1 : 1 / h;
        ++u < g;

      )
        (a = c[u] = []), (a.dx = s[u + 1] - (a.x = s[u])), (a.y = 0);
      if (g > 0)
        for (u = -1; ++u < h; )
          (o = l[u]),
            o >= f[0] &&
              o <= f[1] &&
              ((a = c[va.bisect(s, o, 1, g) - 1]), (a.y += p), a.push(n[u]));
      return c;
    }
    var t = !0,
      e = Number,
      r = pi,
      i = hi;
    return (
      (n.value = function (t) {
        return arguments.length ? ((e = t), n) : e;
      }),
      (n.range = function (t) {
        return arguments.length ? ((r = ft(t)), n) : r;
      }),
      (n.bins = function (t) {
        return arguments.length
          ? ((i =
              "number" == typeof t
                ? function (n) {
                    return gi(n, t);
                  }
                : ft(t)),
            n)
          : i;
      }),
      (n.frequency = function (e) {
        return arguments.length ? ((t = !!e), n) : t;
      }),
      n
    );
  }),
    (va.layout.tree = function () {
      function n(n, u) {
        function a(n, t) {
          var r = n.children,
            i = n._tree;
          if (r && (u = r.length)) {
            for (var u, o, l, f = r[0], s = f, h = -1; ++h < u; )
              (l = r[h]), a(l, o), (s = c(l, o, s)), (o = l);
            wi(n);
            var g = 0.5 * (f._tree.prelim + l._tree.prelim);
            t
              ? ((i.prelim = t._tree.prelim + e(n, t)), (i.mod = i.prelim - g))
              : (i.prelim = g);
          } else t && (i.prelim = t._tree.prelim + e(n, t));
        }
        function o(n, t) {
          n.x = n._tree.prelim + t;
          var e = n.children;
          if (e && (r = e.length)) {
            var r,
              i = -1;
            for (t += n._tree.mod; ++i < r; ) o(e[i], t);
          }
        }
        function c(n, t, r) {
          if (t) {
            for (
              var i,
                u = n,
                a = n,
                o = t,
                c = n.parent.children[0],
                l = u._tree.mod,
                f = a._tree.mod,
                s = o._tree.mod,
                h = c._tree.mod;
              (o = vi(o)), (u = mi(u)), o && u;

            )
              (c = mi(c)),
                (a = vi(a)),
                (a._tree.ancestor = n),
                (i = o._tree.prelim + s - u._tree.prelim - l + e(o, u)),
                i > 0 && (Si(Ei(o, n, r), n, i), (l += i), (f += i)),
                (s += o._tree.mod),
                (l += u._tree.mod),
                (h += c._tree.mod),
                (f += a._tree.mod);
            o && !vi(a) && ((a._tree.thread = o), (a._tree.mod += s - f)),
              u &&
                !mi(c) &&
                ((c._tree.thread = u), (c._tree.mod += l - h), (r = n));
          }
          return r;
        }
        var l = t.call(this, n, u),
          f = l[0];
        _i(f, function (n, t) {
          n._tree = {
            ancestor: n,
            prelim: 0,
            mod: 0,
            change: 0,
            shift: 0,
            number: t ? t._tree.number + 1 : 0,
          };
        }),
          a(f),
          o(f, -f._tree.prelim);
        var s = yi(f, xi),
          h = yi(f, Mi),
          g = yi(f, bi),
          p = s.x - e(s, h) / 2,
          d = h.x + e(h, s) / 2,
          m = g.depth || 1;
        return (
          _i(
            f,
            i
              ? function (n) {
                  (n.x *= r[0]), (n.y = n.depth * r[1]), delete n._tree;
                }
              : function (n) {
                  (n.x = ((n.x - p) / (d - p)) * r[0]),
                    (n.y = (n.depth / m) * r[1]),
                    delete n._tree;
                }
          ),
          l
        );
      }
      var t = va.layout.hierarchy().sort(null).value(null),
        e = di,
        r = [1, 1],
        i = !1;
      return (
        (n.separation = function (t) {
          return arguments.length ? ((e = t), n) : e;
        }),
        (n.size = function (t) {
          return arguments.length ? ((i = null == (r = t)), n) : i ? null : r;
        }),
        (n.nodeSize = function (t) {
          return arguments.length ? ((i = null != (r = t)), n) : i ? r : null;
        }),
        Qr(n, t)
      );
    }),
    (va.layout.pack = function () {
      function n(n, u) {
        var a = e.call(this, n, u),
          o = a[0],
          c = i[0],
          l = i[1],
          f = t || Math.sqrt;
        if (
          ((o.x = o.y = 0),
          _i(o, function (n) {
            n.r = f(n.value);
          }),
          _i(o, Ti),
          r)
        ) {
          var s = (r * (t ? 1 : Math.max((2 * o.r) / c, (2 * o.r) / l))) / 2;
          _i(o, function (n) {
            n.r += s;
          }),
            _i(o, Ti),
            _i(o, function (n) {
              n.r -= s;
            });
        }
        return (
          Di(
            o,
            c / 2,
            l / 2,
            t ? 1 : 1 / Math.max((2 * o.r) / c, (2 * o.r) / l)
          ),
          a
        );
      }
      var t,
        e = va.layout.hierarchy().sort(ki),
        r = 0,
        i = [1, 1];
      return (
        (n.size = function (t) {
          return arguments.length ? ((i = t), n) : i;
        }),
        (n.radius = function (e) {
          return arguments.length ? ((t = e), n) : t;
        }),
        (n.padding = function (t) {
          return arguments.length ? ((r = +t), n) : r;
        }),
        Qr(n, e)
      );
    }),
    (va.layout.cluster = function () {
      function n(n, u) {
        var a,
          o = t.call(this, n, u),
          c = o[0],
          l = 0;
        _i(c, function (n) {
          var t = n.children;
          t && t.length
            ? ((n.x = Hi(t)), (n.y = Li(t)))
            : ((n.x = a ? (l += e(n, a)) : 0), (n.y = 0), (a = n));
        });
        var f = Fi(c),
          s = Pi(c),
          h = f.x - e(f, s) / 2,
          g = s.x + e(s, f) / 2;
        return (
          _i(
            c,
            i
              ? function (n) {
                  (n.x = (n.x - c.x) * r[0]), (n.y = (c.y - n.y) * r[1]);
                }
              : function (n) {
                  (n.x = ((n.x - h) / (g - h)) * r[0]),
                    (n.y = (1 - (c.y ? n.y / c.y : 1)) * r[1]);
                }
          ),
          o
        );
      }
      var t = va.layout.hierarchy().sort(null).value(null),
        e = di,
        r = [1, 1],
        i = !1;
      return (
        (n.separation = function (t) {
          return arguments.length ? ((e = t), n) : e;
        }),
        (n.size = function (t) {
          return arguments.length ? ((i = null == (r = t)), n) : i ? null : r;
        }),
        (n.nodeSize = function (t) {
          return arguments.length ? ((i = null != (r = t)), n) : i ? r : null;
        }),
        Qr(n, t)
      );
    }),
    (va.layout.treemap = function () {
      function n(n, t) {
        for (var e, r, i = -1, u = n.length; ++i < u; )
          (r = (e = n[i]).value * (0 > t ? 0 : t)),
            (e.area = isNaN(r) || 0 >= r ? 0 : r);
      }
      function t(e) {
        var u = e.children;
        if (u && u.length) {
          var a,
            o,
            c,
            l = s(e),
            f = [],
            h = u.slice(),
            p = 1 / 0,
            d =
              "slice" === g
                ? l.dx
                : "dice" === g
                ? l.dy
                : "slice-dice" === g
                ? 1 & e.depth
                  ? l.dy
                  : l.dx
                : Math.min(l.dx, l.dy);
          for (n(h, (l.dx * l.dy) / e.value), f.area = 0; (c = h.length) > 0; )
            f.push((a = h[c - 1])),
              (f.area += a.area),
              "squarify" !== g || (o = r(f, d)) <= p
                ? (h.pop(), (p = o))
                : ((f.area -= f.pop().area),
                  i(f, d, l, !1),
                  (d = Math.min(l.dx, l.dy)),
                  (f.length = f.area = 0),
                  (p = 1 / 0));
          f.length && (i(f, d, l, !0), (f.length = f.area = 0)), u.forEach(t);
        }
      }
      function e(t) {
        var r = t.children;
        if (r && r.length) {
          var u,
            a = s(t),
            o = r.slice(),
            c = [];
          for (n(o, (a.dx * a.dy) / t.value), c.area = 0; (u = o.pop()); )
            c.push(u),
              (c.area += u.area),
              null != u.z &&
                (i(c, u.z ? a.dx : a.dy, a, !o.length),
                (c.length = c.area = 0));
          r.forEach(e);
        }
      }
      function r(n, t) {
        for (
          var e, r = n.area, i = 0, u = 1 / 0, a = -1, o = n.length;
          ++a < o;

        )
          (e = n[a].area) && (u > e && (u = e), e > i && (i = e));
        return (
          (r *= r),
          (t *= t),
          r ? Math.max((t * i * p) / r, r / (t * u * p)) : 1 / 0
        );
      }
      function i(n, t, e, r) {
        var i,
          u = -1,
          a = n.length,
          o = e.x,
          l = e.y,
          f = t ? c(n.area / t) : 0;
        if (t == e.dx) {
          for ((r || f > e.dy) && (f = e.dy); ++u < a; )
            (i = n[u]),
              (i.x = o),
              (i.y = l),
              (i.dy = f),
              (o += i.dx = Math.min(e.x + e.dx - o, f ? c(i.area / f) : 0));
          (i.z = !0), (i.dx += e.x + e.dx - o), (e.y += f), (e.dy -= f);
        } else {
          for ((r || f > e.dx) && (f = e.dx); ++u < a; )
            (i = n[u]),
              (i.x = o),
              (i.y = l),
              (i.dx = f),
              (l += i.dy = Math.min(e.y + e.dy - l, f ? c(i.area / f) : 0));
          (i.z = !1), (i.dy += e.y + e.dy - l), (e.x += f), (e.dx -= f);
        }
      }
      function u(r) {
        var i = a || o(r),
          u = i[0];
        return (
          (u.x = 0),
          (u.y = 0),
          (u.dx = l[0]),
          (u.dy = l[1]),
          a && o.revalue(u),
          n([u], (u.dx * u.dy) / u.value),
          (a ? e : t)(u),
          h && (a = i),
          i
        );
      }
      var a,
        o = va.layout.hierarchy(),
        c = Math.round,
        l = [1, 1],
        f = null,
        s = Oi,
        h = !1,
        g = "squarify",
        p = 0.5 * (1 + Math.sqrt(5));
      return (
        (u.size = function (n) {
          return arguments.length ? ((l = n), u) : l;
        }),
        (u.padding = function (n) {
          function t(t) {
            var e = n.call(u, t, t.depth);
            return null == e
              ? Oi(t)
              : Ri(t, "number" == typeof e ? [e, e, e, e] : e);
          }
          function e(t) {
            return Ri(t, n);
          }
          if (!arguments.length) return f;
          var r;
          return (
            (s =
              null == (f = n)
                ? Oi
                : "function" == (r = typeof n)
                ? t
                : "number" === r
                ? ((n = [n, n, n, n]), e)
                : e),
            u
          );
        }),
        (u.round = function (n) {
          return arguments.length
            ? ((c = n ? Math.round : Number), u)
            : c != Number;
        }),
        (u.sticky = function (n) {
          return arguments.length ? ((h = n), (a = null), u) : h;
        }),
        (u.ratio = function (n) {
          return arguments.length ? ((p = n), u) : p;
        }),
        (u.mode = function (n) {
          return arguments.length ? ((g = n + ""), u) : g;
        }),
        Qr(u, o)
      );
    }),
    (va.random = {
      normal: function (n, t) {
        var e = arguments.length;
        return (
          2 > e && (t = 1),
          1 > e && (n = 0),
          function () {
            var e, r, i;
            do
              (e = 2 * Math.random() - 1),
                (r = 2 * Math.random() - 1),
                (i = e * e + r * r);
            while (!i || i > 1);
            return n + t * e * Math.sqrt((-2 * Math.log(i)) / i);
          }
        );
      },
      logNormal: function () {
        var n = va.random.normal.apply(va, arguments);
        return function () {
          return Math.exp(n());
        };
      },
      irwinHall: function (n) {
        return function () {
          for (var t = 0, e = 0; n > e; e++) t += Math.random();
          return t / n;
        };
      },
    }),
    (va.scale = {});
  var yc = { floor: st, ceil: st };
  (va.scale.linear = function () {
    return Bi([0, 1], [0, 1], wr, !1);
  }),
    (va.scale.log = function () {
      return nu(va.scale.linear().domain([0, Math.LN10]), 10, tu, eu, [1, 10]);
    });
  var Mc = va.format(".0e");
  (va.scale.pow = function () {
    return uu(va.scale.linear(), 1, [0, 1]);
  }),
    (va.scale.sqrt = function () {
      return va.scale.pow().exponent(0.5);
    }),
    (va.scale.ordinal = function () {
      return ou([], { t: "range", a: [[]] });
    }),
    (va.scale.category10 = function () {
      return va.scale.ordinal().range(xc);
    }),
    (va.scale.category20 = function () {
      return va.scale.ordinal().range(bc);
    }),
    (va.scale.category20b = function () {
      return va.scale.ordinal().range(_c);
    }),
    (va.scale.category20c = function () {
      return va.scale.ordinal().range(wc);
    });
  var xc = [
      "#1f77b4",
      "#ff7f0e",
      "#2ca02c",
      "#d62728",
      "#9467bd",
      "#8c564b",
      "#e377c2",
      "#7f7f7f",
      "#bcbd22",
      "#17becf",
    ],
    bc = [
      "#1f77b4",
      "#aec7e8",
      "#ff7f0e",
      "#ffbb78",
      "#2ca02c",
      "#98df8a",
      "#d62728",
      "#ff9896",
      "#9467bd",
      "#c5b0d5",
      "#8c564b",
      "#c49c94",
      "#e377c2",
      "#f7b6d2",
      "#7f7f7f",
      "#c7c7c7",
      "#bcbd22",
      "#dbdb8d",
      "#17becf",
      "#9edae5",
    ],
    _c = [
      "#393b79",
      "#5254a3",
      "#6b6ecf",
      "#9c9ede",
      "#637939",
      "#8ca252",
      "#b5cf6b",
      "#cedb9c",
      "#8c6d31",
      "#bd9e39",
      "#e7ba52",
      "#e7cb94",
      "#843c39",
      "#ad494a",
      "#d6616b",
      "#e7969c",
      "#7b4173",
      "#a55194",
      "#ce6dbd",
      "#de9ed6",
    ],
    wc = [
      "#3182bd",
      "#6baed6",
      "#9ecae1",
      "#c6dbef",
      "#e6550d",
      "#fd8d3c",
      "#fdae6b",
      "#fdd0a2",
      "#31a354",
      "#74c476",
      "#a1d99b",
      "#c7e9c0",
      "#756bb1",
      "#9e9ac8",
      "#bcbddc",
      "#dadaeb",
      "#636363",
      "#969696",
      "#bdbdbd",
      "#d9d9d9",
    ];
  (va.scale.quantile = function () {
    return cu([], []);
  }),
    (va.scale.quantize = function () {
      return lu(0, 1, [0, 1]);
    }),
    (va.scale.threshold = function () {
      return fu([0.5], [0, 1]);
    }),
    (va.scale.identity = function () {
      return su([0, 1]);
    }),
    (va.svg.arc = function () {
      function n() {
        var n = t.apply(this, arguments),
          u = e.apply(this, arguments),
          a = r.apply(this, arguments) + Sc,
          o = i.apply(this, arguments) + Sc,
          c = (a > o && ((c = a), (a = o), (o = c)), o - a),
          l = Ba > c ? "0" : "1",
          f = Math.cos(a),
          s = Math.sin(a),
          h = Math.cos(o),
          g = Math.sin(o);
        return c >= Ec
          ? n
            ? "M0," +
              u +
              "A" +
              u +
              "," +
              u +
              " 0 1,1 0," +
              -u +
              "A" +
              u +
              "," +
              u +
              " 0 1,1 0," +
              u +
              "M0," +
              n +
              "A" +
              n +
              "," +
              n +
              " 0 1,0 0," +
              -n +
              "A" +
              n +
              "," +
              n +
              " 0 1,0 0," +
              n +
              "Z"
            : "M0," +
              u +
              "A" +
              u +
              "," +
              u +
              " 0 1,1 0," +
              -u +
              "A" +
              u +
              "," +
              u +
              " 0 1,1 0," +
              u +
              "Z"
          : n
          ? "M" +
            u * f +
            "," +
            u * s +
            "A" +
            u +
            "," +
            u +
            " 0 " +
            l +
            ",1 " +
            u * h +
            "," +
            u * g +
            "L" +
            n * h +
            "," +
            n * g +
            "A" +
            n +
            "," +
            n +
            " 0 " +
            l +
            ",0 " +
            n * f +
            "," +
            n * s +
            "Z"
          : "M" +
            u * f +
            "," +
            u * s +
            "A" +
            u +
            "," +
            u +
            " 0 " +
            l +
            ",1 " +
            u * h +
            "," +
            u * g +
            "L0,0" +
            "Z";
      }
      var t = hu,
        e = gu,
        r = pu,
        i = du;
      return (
        (n.innerRadius = function (e) {
          return arguments.length ? ((t = ft(e)), n) : t;
        }),
        (n.outerRadius = function (t) {
          return arguments.length ? ((e = ft(t)), n) : e;
        }),
        (n.startAngle = function (t) {
          return arguments.length ? ((r = ft(t)), n) : r;
        }),
        (n.endAngle = function (t) {
          return arguments.length ? ((i = ft(t)), n) : i;
        }),
        (n.centroid = function () {
          var n = (t.apply(this, arguments) + e.apply(this, arguments)) / 2,
            u = (r.apply(this, arguments) + i.apply(this, arguments)) / 2 + Sc;
          return [Math.cos(u) * n, Math.sin(u) * n];
        }),
        n
      );
    });
  var Sc = -Ba / 2,
    Ec = 2 * Ba - 1e-6;
  (va.svg.line.radial = function () {
    var n = Fe(mu);
    return (n.radius = n.x), delete n.x, (n.angle = n.y), delete n.y, n;
  }),
    (Ie.reverse = Ve),
    (Ve.reverse = Ie),
    (va.svg.area = function () {
      return vu(st);
    }),
    (va.svg.area.radial = function () {
      var n = vu(mu);
      return (
        (n.radius = n.x),
        delete n.x,
        (n.innerRadius = n.x0),
        delete n.x0,
        (n.outerRadius = n.x1),
        delete n.x1,
        (n.angle = n.y),
        delete n.y,
        (n.startAngle = n.y0),
        delete n.y0,
        (n.endAngle = n.y1),
        delete n.y1,
        n
      );
    }),
    (va.svg.chord = function () {
      function n(n, o) {
        var c = t(this, u, n, o),
          l = t(this, a, n, o);
        return (
          "M" +
          c.p0 +
          r(c.r, c.p1, c.a1 - c.a0) +
          (e(c, l)
            ? i(c.r, c.p1, c.r, c.p0)
            : i(c.r, c.p1, l.r, l.p0) +
              r(l.r, l.p1, l.a1 - l.a0) +
              i(l.r, l.p1, c.r, c.p0)) +
          "Z"
        );
      }
      function t(n, t, e, r) {
        var i = t.call(n, e, r),
          u = o.call(n, i, r),
          a = c.call(n, i, r) + Sc,
          f = l.call(n, i, r) + Sc;
        return {
          r: u,
          a0: a,
          a1: f,
          p0: [u * Math.cos(a), u * Math.sin(a)],
          p1: [u * Math.cos(f), u * Math.sin(f)],
        };
      }
      function e(n, t) {
        return n.a0 == t.a0 && n.a1 == t.a1;
      }
      function r(n, t, e) {
        return "A" + n + "," + n + " 0 " + +(e > Ba) + ",1 " + t;
      }
      function i(n, t, e, r) {
        return "Q 0,0 " + r;
      }
      var u = Ae,
        a = Ne,
        o = yu,
        c = pu,
        l = du;
      return (
        (n.radius = function (t) {
          return arguments.length ? ((o = ft(t)), n) : o;
        }),
        (n.source = function (t) {
          return arguments.length ? ((u = ft(t)), n) : u;
        }),
        (n.target = function (t) {
          return arguments.length ? ((a = ft(t)), n) : a;
        }),
        (n.startAngle = function (t) {
          return arguments.length ? ((c = ft(t)), n) : c;
        }),
        (n.endAngle = function (t) {
          return arguments.length ? ((l = ft(t)), n) : l;
        }),
        n
      );
    }),
    (va.svg.diagonal = function () {
      function n(n, i) {
        var u = t.call(this, n, i),
          a = e.call(this, n, i),
          o = (u.y + a.y) / 2,
          c = [u, { x: u.x, y: o }, { x: a.x, y: o }, a];
        return (
          (c = c.map(r)), "M" + c[0] + "C" + c[1] + " " + c[2] + " " + c[3]
        );
      }
      var t = Ae,
        e = Ne,
        r = Mu;
      return (
        (n.source = function (e) {
          return arguments.length ? ((t = ft(e)), n) : t;
        }),
        (n.target = function (t) {
          return arguments.length ? ((e = ft(t)), n) : e;
        }),
        (n.projection = function (t) {
          return arguments.length ? ((r = t), n) : r;
        }),
        n
      );
    }),
    (va.svg.diagonal.radial = function () {
      var n = va.svg.diagonal(),
        t = Mu,
        e = n.projection;
      return (
        (n.projection = function (n) {
          return arguments.length ? e(xu((t = n))) : t;
        }),
        n
      );
    }),
    (va.svg.symbol = function () {
      function n(n, r) {
        return (kc.get(t.call(this, n, r)) || wu)(e.call(this, n, r));
      }
      var t = _u,
        e = bu;
      return (
        (n.type = function (e) {
          return arguments.length ? ((t = ft(e)), n) : t;
        }),
        (n.size = function (t) {
          return arguments.length ? ((e = ft(t)), n) : e;
        }),
        n
      );
    });
  var kc = va.map({
    circle: wu,
    cross: function (n) {
      var t = Math.sqrt(n / 5) / 2;
      return (
        "M" +
        -3 * t +
        "," +
        -t +
        "H" +
        -t +
        "V" +
        -3 * t +
        "H" +
        t +
        "V" +
        -t +
        "H" +
        3 * t +
        "V" +
        t +
        "H" +
        t +
        "V" +
        3 * t +
        "H" +
        -t +
        "V" +
        t +
        "H" +
        -3 * t +
        "Z"
      );
    },
    diamond: function (n) {
      var t = Math.sqrt(n / (2 * qc)),
        e = t * qc;
      return "M0," + -t + "L" + e + ",0" + " 0," + t + " " + -e + ",0" + "Z";
    },
    square: function (n) {
      var t = Math.sqrt(n) / 2;
      return (
        "M" +
        -t +
        "," +
        -t +
        "L" +
        t +
        "," +
        -t +
        " " +
        t +
        "," +
        t +
        " " +
        -t +
        "," +
        t +
        "Z"
      );
    },
    "triangle-down": function (n) {
      var t = Math.sqrt(n / Nc),
        e = (t * Nc) / 2;
      return "M0," + e + "L" + t + "," + -e + " " + -t + "," + -e + "Z";
    },
    "triangle-up": function (n) {
      var t = Math.sqrt(n / Nc),
        e = (t * Nc) / 2;
      return "M0," + -e + "L" + t + "," + e + " " + -t + "," + e + "Z";
    },
  });
  va.svg.symbolTypes = kc.keys();
  var Ac,
    Nc = Math.sqrt(3),
    qc = Math.tan(30 * Ja),
    Tc = [],
    Cc = 0,
    zc = { ease: Cr, delay: 0, duration: 250 };
  (Tc.call = Ha.call),
    (Tc.empty = Ha.empty),
    (Tc.node = Ha.node),
    (Tc.size = Ha.size),
    (va.transition = function (n) {
      return arguments.length ? (Ac ? n.transition() : n) : Oa.transition();
    }),
    (va.transition.prototype = Tc),
    (Tc.select = function (n) {
      var t,
        e,
        r,
        i = this.id,
        u = [];
      "function" != typeof n && (n = v(n));
      for (var a = -1, o = this.length; ++a < o; ) {
        u.push((t = []));
        for (var c = this[a], l = -1, f = c.length; ++l < f; )
          (r = c[l]) && (e = n.call(r, r.__data__, l))
            ? ("__data__" in r && (e.__data__ = r.__data__),
              Au(e, l, i, r.__transition__[i]),
              t.push(e))
            : t.push(null);
      }
      return Su(u, i);
    }),
    (Tc.selectAll = function (n) {
      var t,
        e,
        r,
        i,
        u,
        a = this.id,
        o = [];
      "function" != typeof n && (n = y(n));
      for (var c = -1, l = this.length; ++c < l; )
        for (var f = this[c], s = -1, h = f.length; ++s < h; )
          if ((r = f[s])) {
            (u = r.__transition__[a]),
              (e = n.call(r, r.__data__, s)),
              o.push((t = []));
            for (var g = -1, p = e.length; ++g < p; )
              (i = e[g]) && Au(i, g, a, u), t.push(i);
          }
      return Su(o, a);
    }),
    (Tc.filter = function (n) {
      var t,
        e,
        r,
        i = [];
      "function" != typeof n && (n = A(n));
      for (var u = 0, a = this.length; a > u; u++) {
        i.push((t = []));
        for (var e = this[u], o = 0, c = e.length; c > o; o++)
          (r = e[o]) && n.call(r, r.__data__, o) && t.push(r);
      }
      return Su(i, this.id, this.time).ease(this.ease());
    }),
    (Tc.tween = function (n, t) {
      var e = this.id;
      return arguments.length < 2
        ? this.node().__transition__[e].tween.get(n)
        : q(
            this,
            null == t
              ? function (t) {
                  t.__transition__[e].tween.remove(n);
                }
              : function (r) {
                  r.__transition__[e].tween.set(n, t);
                }
          );
    }),
    (Tc.attr = function (n, t) {
      function e() {
        this.removeAttribute(o);
      }
      function r() {
        this.removeAttributeNS(o.space, o.local);
      }
      function i(n) {
        return null == n
          ? e
          : ((n += ""),
            function () {
              var t,
                e = this.getAttribute(o);
              return (
                e !== n &&
                ((t = a(e, n)),
                function (n) {
                  this.setAttribute(o, t(n));
                })
              );
            });
      }
      function u(n) {
        return null == n
          ? r
          : ((n += ""),
            function () {
              var t,
                e = this.getAttributeNS(o.space, o.local);
              return (
                e !== n &&
                ((t = a(e, n)),
                function (n) {
                  this.setAttributeNS(o.space, o.local, t(n));
                })
              );
            });
      }
      if (arguments.length < 2) {
        for (t in n) this.attr(t, n[t]);
        return this;
      }
      var a = Sr(n),
        o = va.ns.qualify(n);
      return Eu(this, "attr." + n, t, o.local ? u : i);
    }),
    (Tc.attrTween = function (n, t) {
      function e(n, e) {
        var r = t.call(this, n, e, this.getAttribute(i));
        return (
          r &&
          function (n) {
            this.setAttribute(i, r(n));
          }
        );
      }
      function r(n, e) {
        var r = t.call(this, n, e, this.getAttributeNS(i.space, i.local));
        return (
          r &&
          function (n) {
            this.setAttributeNS(i.space, i.local, r(n));
          }
        );
      }
      var i = va.ns.qualify(n);
      return this.tween("attr." + n, i.local ? r : e);
    }),
    (Tc.style = function (n, t, e) {
      function r() {
        this.style.removeProperty(n);
      }
      function i(t) {
        return null == t
          ? r
          : ((t += ""),
            function () {
              var r,
                i = xa.getComputedStyle(this, null).getPropertyValue(n);
              return (
                i !== t &&
                ((r = a(i, t)),
                function (t) {
                  this.style.setProperty(n, r(t), e);
                })
              );
            });
      }
      var u = arguments.length;
      if (3 > u) {
        if ("string" != typeof n) {
          2 > u && (t = "");
          for (e in n) this.style(e, n[e], t);
          return this;
        }
        e = "";
      }
      var a = Sr(n);
      return Eu(this, "style." + n, t, i);
    }),
    (Tc.styleTween = function (n, t, e) {
      function r(r, i) {
        var u = t.call(
          this,
          r,
          i,
          xa.getComputedStyle(this, null).getPropertyValue(n)
        );
        return (
          u &&
          function (t) {
            this.style.setProperty(n, u(t), e);
          }
        );
      }
      return arguments.length < 3 && (e = ""), this.tween("style." + n, r);
    }),
    (Tc.text = function (n) {
      return Eu(this, "text", n, ku);
    }),
    (Tc.remove = function () {
      return this.each("end.transition", function () {
        var n;
        !this.__transition__ && (n = this.parentNode) && n.removeChild(this);
      });
    }),
    (Tc.ease = function (n) {
      var t = this.id;
      return arguments.length < 1
        ? this.node().__transition__[t].ease
        : ("function" != typeof n && (n = va.ease.apply(va, arguments)),
          q(this, function (e) {
            e.__transition__[t].ease = n;
          }));
    }),
    (Tc.delay = function (n) {
      var t = this.id;
      return q(
        this,
        "function" == typeof n
          ? function (e, r, i) {
              e.__transition__[t].delay = 0 | n.call(e, e.__data__, r, i);
            }
          : ((n |= 0),
            function (e) {
              e.__transition__[t].delay = n;
            })
      );
    }),
    (Tc.duration = function (n) {
      var t = this.id;
      return q(
        this,
        "function" == typeof n
          ? function (e, r, i) {
              e.__transition__[t].duration = Math.max(
                1,
                0 | n.call(e, e.__data__, r, i)
              );
            }
          : ((n = Math.max(1, 0 | n)),
            function (e) {
              e.__transition__[t].duration = n;
            })
      );
    }),
    (Tc.each = function (n, t) {
      var e = this.id;
      if (arguments.length < 2) {
        var r = zc,
          i = Ac;
        (Ac = e),
          q(this, function (t, r, i) {
            (zc = t.__transition__[e]), n.call(t, t.__data__, r, i);
          }),
          (zc = r),
          (Ac = i);
      } else
        q(this, function (r) {
          r.__transition__[e].event.on(n, t);
        });
      return this;
    }),
    (Tc.transition = function () {
      for (
        var n, t, e, r, i = this.id, u = ++Cc, a = [], o = 0, c = this.length;
        c > o;
        o++
      ) {
        a.push((n = []));
        for (var t = this[o], l = 0, f = t.length; f > l; l++)
          (e = t[l]) &&
            ((r = Object.create(e.__transition__[i])),
            (r.delay += r.duration),
            Au(e, l, u, r)),
            n.push(e);
      }
      return Su(a, u);
    }),
    (va.svg.axis = function () {
      function n(n) {
        n.each(function () {
          var n,
            s = va.select(this),
            h = null == l ? (e.ticks ? e.ticks.apply(e, c) : e.domain()) : l,
            g =
              null == t
                ? e.tickFormat
                  ? e.tickFormat.apply(e, c)
                  : String
                : t,
            p = Tu(e, h, f),
            d = s.selectAll(".tick.minor").data(p, String),
            m = d
              .enter()
              .insert("line", ".tick")
              .attr("class", "tick minor")
              .style("opacity", 1e-6),
            v = va.transition(d.exit()).style("opacity", 1e-6).remove(),
            y = va.transition(d).style("opacity", 1),
            M = s.selectAll(".tick.major").data(h, String),
            x = M.enter()
              .insert("g", ".domain")
              .attr("class", "tick major")
              .style("opacity", 1e-6),
            b = va.transition(M.exit()).style("opacity", 1e-6).remove(),
            _ = va.transition(M).style("opacity", 1),
            w = Ui(e),
            S = s.selectAll(".domain").data([0]),
            E =
              (S.enter().append("path").attr("class", "domain"),
              va.transition(S)),
            k = e.copy(),
            A = this.__chart__ || k;
          (this.__chart__ = k), x.append("line"), x.append("text");
          var N = x.select("line"),
            q = _.select("line"),
            T = M.select("text").text(g),
            C = x.select("text"),
            z = _.select("text");
          switch (r) {
            case "bottom":
              (n = Nu),
                m.attr("y2", u),
                y.attr("x2", 0).attr("y2", u),
                N.attr("y2", i),
                C.attr("y", Math.max(i, 0) + o),
                q.attr("x2", 0).attr("y2", i),
                z.attr("x", 0).attr("y", Math.max(i, 0) + o),
                T.attr("dy", ".71em").style("text-anchor", "middle"),
                E.attr("d", "M" + w[0] + "," + a + "V0H" + w[1] + "V" + a);
              break;
            case "top":
              (n = Nu),
                m.attr("y2", -u),
                y.attr("x2", 0).attr("y2", -u),
                N.attr("y2", -i),
                C.attr("y", -(Math.max(i, 0) + o)),
                q.attr("x2", 0).attr("y2", -i),
                z.attr("x", 0).attr("y", -(Math.max(i, 0) + o)),
                T.attr("dy", "0em").style("text-anchor", "middle"),
                E.attr("d", "M" + w[0] + "," + -a + "V0H" + w[1] + "V" + -a);
              break;
            case "left":
              (n = qu),
                m.attr("x2", -u),
                y.attr("x2", -u).attr("y2", 0),
                N.attr("x2", -i),
                C.attr("x", -(Math.max(i, 0) + o)),
                q.attr("x2", -i).attr("y2", 0),
                z.attr("x", -(Math.max(i, 0) + o)).attr("y", 0),
                T.attr("dy", ".32em").style("text-anchor", "end"),
                E.attr("d", "M" + -a + "," + w[0] + "H0V" + w[1] + "H" + -a);
              break;
            case "right":
              (n = qu),
                m.attr("x2", u),
                y.attr("x2", u).attr("y2", 0),
                N.attr("x2", i),
                C.attr("x", Math.max(i, 0) + o),
                q.attr("x2", i).attr("y2", 0),
                z.attr("x", Math.max(i, 0) + o).attr("y", 0),
                T.attr("dy", ".32em").style("text-anchor", "start"),
                E.attr("d", "M" + a + "," + w[0] + "H0V" + w[1] + "H" + a);
          }
          if (e.ticks)
            x.call(n, A),
              _.call(n, k),
              b.call(n, k),
              m.call(n, A),
              y.call(n, k),
              v.call(n, k);
          else {
            var D = k.rangeBand() / 2,
              j = function (n) {
                return k(n) + D;
              };
            x.call(n, j), _.call(n, j);
          }
        });
      }
      var t,
        e = va.scale.linear(),
        r = Dc,
        i = 6,
        u = 6,
        a = 6,
        o = 3,
        c = [10],
        l = null,
        f = 0;
      return (
        (n.scale = function (t) {
          return arguments.length ? ((e = t), n) : e;
        }),
        (n.orient = function (t) {
          return arguments.length ? ((r = t in jc ? t + "" : Dc), n) : r;
        }),
        (n.ticks = function () {
          return arguments.length ? ((c = arguments), n) : c;
        }),
        (n.tickValues = function (t) {
          return arguments.length ? ((l = t), n) : l;
        }),
        (n.tickFormat = function (e) {
          return arguments.length ? ((t = e), n) : t;
        }),
        (n.tickSize = function (t, e) {
          if (!arguments.length) return i;
          var r = arguments.length - 1;
          return (
            (i = +t), (u = r > 1 ? +e : i), (a = r > 0 ? +arguments[r] : i), n
          );
        }),
        (n.tickPadding = function (t) {
          return arguments.length ? ((o = +t), n) : o;
        }),
        (n.tickSubdivide = function (t) {
          return arguments.length ? ((f = +t), n) : f;
        }),
        n
      );
    });
  var Dc = "bottom",
    jc = { top: 1, right: 1, bottom: 1, left: 1 };
  va.svg.brush = function () {
    function n(u) {
      u.each(function () {
        var u,
          a = va.select(this),
          f = a.selectAll(".background").data([0]),
          s = a.selectAll(".extent").data([0]),
          h = a.selectAll(".resize").data(l, String);
        a
          .style("pointer-events", "all")
          .on("mousedown.brush", i)
          .on("touchstart.brush", i),
          f
            .enter()
            .append("rect")
            .attr("class", "background")
            .style("visibility", "hidden")
            .style("cursor", "crosshair"),
          s
            .enter()
            .append("rect")
            .attr("class", "extent")
            .style("cursor", "move"),
          h
            .enter()
            .append("g")
            .attr("class", function (n) {
              return "resize " + n;
            })
            .style("cursor", function (n) {
              return Lc[n];
            })
            .append("rect")
            .attr("x", function (n) {
              return /[ew]$/.test(n) ? -3 : null;
            })
            .attr("y", function (n) {
              return /^[ns]/.test(n) ? -3 : null;
            })
            .attr("width", 6)
            .attr("height", 6)
            .style("visibility", "hidden"),
          h.style("display", n.empty() ? "none" : null),
          h.exit().remove(),
          o &&
            ((u = Ui(o)), f.attr("x", u[0]).attr("width", u[1] - u[0]), e(a)),
          c &&
            ((u = Ui(c)), f.attr("y", u[0]).attr("height", u[1] - u[0]), r(a)),
          t(a);
      });
    }
    function t(n) {
      n.selectAll(".resize").attr("transform", function (n) {
        return (
          "translate(" + f[+/e$/.test(n)][0] + "," + f[+/^s/.test(n)][1] + ")"
        );
      });
    }
    function e(n) {
      n.select(".extent").attr("x", f[0][0]),
        n.selectAll(".extent,.n>rect,.s>rect").attr("width", f[1][0] - f[0][0]);
    }
    function r(n) {
      n.select(".extent").attr("y", f[0][1]),
        n
          .selectAll(".extent,.e>rect,.w>rect")
          .attr("height", f[1][1] - f[0][1]);
    }
    function i() {
      function i() {
        var n = va.event.changedTouches;
        return n ? va.touches(M, n)[0] : va.mouse(M);
      }
      function l() {
        32 == va.event.keyCode &&
          (k || ((v = null), (N[0] -= f[1][0]), (N[1] -= f[1][1]), (k = 2)),
          g());
      }
      function h() {
        32 == va.event.keyCode &&
          2 == k &&
          ((N[0] += f[1][0]), (N[1] += f[1][1]), (k = 0), g());
      }
      function p() {
        var n = i(),
          u = !1;
        y && ((n[0] += y[0]), (n[1] += y[1])),
          k ||
            (va.event.altKey
              ? (v || (v = [(f[0][0] + f[1][0]) / 2, (f[0][1] + f[1][1]) / 2]),
                (N[0] = f[+(n[0] < v[0])][0]),
                (N[1] = f[+(n[1] < v[1])][1]))
              : (v = null)),
          S && d(n, o, 0) && (e(_), (u = !0)),
          E && d(n, c, 1) && (r(_), (u = !0)),
          u && (t(_), b({ type: "brush", mode: k ? "move" : "resize" }));
      }
      function d(n, t, e) {
        var r,
          i,
          a = Ui(t),
          o = a[0],
          c = a[1],
          l = N[e],
          h = f[1][e] - f[0][e];
        return (
          k && ((o -= l), (c -= h + l)),
          (r = s[e] ? Math.max(o, Math.min(c, n[e])) : n[e]),
          k
            ? (i = (r += l) + h)
            : (v && (l = Math.max(o, Math.min(c, 2 * v[e] - r))),
              r > l ? ((i = r), (r = l)) : (i = l)),
          f[0][e] !== r || f[1][e] !== i
            ? ((u = null), (f[0][e] = r), (f[1][e] = i), !0)
            : void 0
        );
      }
      function m() {
        p(),
          _.style("pointer-events", "all")
            .selectAll(".resize")
            .style("display", n.empty() ? "none" : null),
          va.select("body").style("cursor", null),
          q
            .on("mousemove.brush", null)
            .on("mouseup.brush", null)
            .on("touchmove.brush", null)
            .on("touchend.brush", null)
            .on("keydown.brush", null)
            .on("keyup.brush", null),
          A(),
          b({ type: "brushend" });
      }
      var v,
        y,
        M = this,
        x = va.select(va.event.target),
        b = a.of(M, arguments),
        _ = va.select(M),
        w = x.datum(),
        S = !/^(n|s)$/.test(w) && o,
        E = !/^(e|w)$/.test(w) && c,
        k = x.classed("extent"),
        A = j("brush"),
        N = i(),
        q = va.select(xa).on("keydown.brush", l).on("keyup.brush", h);
      if (
        (va.event.changedTouches
          ? q.on("touchmove.brush", p).on("touchend.brush", m)
          : q.on("mousemove.brush", p).on("mouseup.brush", m),
        k)
      )
        (N[0] = f[0][0] - N[0]), (N[1] = f[0][1] - N[1]);
      else if (w) {
        var T = +/w$/.test(w),
          C = +/^n/.test(w);
        (y = [f[1 - T][0] - N[0], f[1 - C][1] - N[1]]),
          (N[0] = f[T][0]),
          (N[1] = f[C][1]);
      } else va.event.altKey && (v = N.slice());
      _.style("pointer-events", "none")
        .selectAll(".resize")
        .style("display", null),
        va.select("body").style("cursor", x.style("cursor")),
        b({ type: "brushstart" }),
        p();
    }
    var u,
      a = d(n, "brushstart", "brush", "brushend"),
      o = null,
      c = null,
      l = Hc[0],
      f = [
        [0, 0],
        [0, 0],
      ],
      s = [!0, !0];
    return (
      (n.x = function (t) {
        return arguments.length ? ((o = t), (l = Hc[(!o << 1) | !c]), n) : o;
      }),
      (n.y = function (t) {
        return arguments.length ? ((c = t), (l = Hc[(!o << 1) | !c]), n) : c;
      }),
      (n.clamp = function (t) {
        return arguments.length
          ? (o && c ? (s = [!!t[0], !!t[1]]) : (o || c) && (s[+!o] = !!t), n)
          : o && c
          ? s
          : o || c
          ? s[+!o]
          : null;
      }),
      (n.extent = function (t) {
        var e, r, i, a, l;
        return arguments.length
          ? ((u = [
              [0, 0],
              [0, 0],
            ]),
            o &&
              ((e = t[0]),
              (r = t[1]),
              c && ((e = e[0]), (r = r[0])),
              (u[0][0] = e),
              (u[1][0] = r),
              o.invert && ((e = o(e)), (r = o(r))),
              e > r && ((l = e), (e = r), (r = l)),
              (f[0][0] = 0 | e),
              (f[1][0] = 0 | r)),
            c &&
              ((i = t[0]),
              (a = t[1]),
              o && ((i = i[1]), (a = a[1])),
              (u[0][1] = i),
              (u[1][1] = a),
              c.invert && ((i = c(i)), (a = c(a))),
              i > a && ((l = i), (i = a), (a = l)),
              (f[0][1] = 0 | i),
              (f[1][1] = 0 | a)),
            n)
          : ((t = u || f),
            o &&
              ((e = t[0][0]),
              (r = t[1][0]),
              u ||
                ((e = f[0][0]),
                (r = f[1][0]),
                o.invert && ((e = o.invert(e)), (r = o.invert(r))),
                e > r && ((l = e), (e = r), (r = l)))),
            c &&
              ((i = t[0][1]),
              (a = t[1][1]),
              u ||
                ((i = f[0][1]),
                (a = f[1][1]),
                c.invert && ((i = c.invert(i)), (a = c.invert(a))),
                i > a && ((l = i), (i = a), (a = l)))),
            o && c
              ? [
                  [e, i],
                  [r, a],
                ]
              : o
              ? [e, r]
              : c && [i, a]);
      }),
      (n.clear = function () {
        return (u = null), (f[0][0] = f[0][1] = f[1][0] = f[1][1] = 0), n;
      }),
      (n.empty = function () {
        return (o && f[0][0] === f[1][0]) || (c && f[0][1] === f[1][1]);
      }),
      va.rebind(n, a, "on")
    );
  };
  var Lc = {
      n: "ns-resize",
      e: "ew-resize",
      s: "ns-resize",
      w: "ew-resize",
      nw: "nwse-resize",
      ne: "nesw-resize",
      se: "nwse-resize",
      sw: "nesw-resize",
    },
    Hc = [
      ["n", "e", "s", "w", "nw", "ne", "se", "sw"],
      ["e", "w"],
      ["n", "s"],
      [],
    ];
  va.time = {};
  var Fc = Date,
    Pc = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  Cu.prototype = {
    getDate: function () {
      return this._.getUTCDate();
    },
    getDay: function () {
      return this._.getUTCDay();
    },
    getFullYear: function () {
      return this._.getUTCFullYear();
    },
    getHours: function () {
      return this._.getUTCHours();
    },
    getMilliseconds: function () {
      return this._.getUTCMilliseconds();
    },
    getMinutes: function () {
      return this._.getUTCMinutes();
    },
    getMonth: function () {
      return this._.getUTCMonth();
    },
    getSeconds: function () {
      return this._.getUTCSeconds();
    },
    getTime: function () {
      return this._.getTime();
    },
    getTimezoneOffset: function () {
      return 0;
    },
    valueOf: function () {
      return this._.valueOf();
    },
    setDate: function () {
      Oc.setUTCDate.apply(this._, arguments);
    },
    setDay: function () {
      Oc.setUTCDay.apply(this._, arguments);
    },
    setFullYear: function () {
      Oc.setUTCFullYear.apply(this._, arguments);
    },
    setHours: function () {
      Oc.setUTCHours.apply(this._, arguments);
    },
    setMilliseconds: function () {
      Oc.setUTCMilliseconds.apply(this._, arguments);
    },
    setMinutes: function () {
      Oc.setUTCMinutes.apply(this._, arguments);
    },
    setMonth: function () {
      Oc.setUTCMonth.apply(this._, arguments);
    },
    setSeconds: function () {
      Oc.setUTCSeconds.apply(this._, arguments);
    },
    setTime: function () {
      Oc.setTime.apply(this._, arguments);
    },
  };
  var Oc = Date.prototype,
    Rc = "%a %b %e %X %Y",
    Yc = "%m/%d/%Y",
    Uc = "%H:%M:%S",
    Ic = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    Vc = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    Xc = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    Zc = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
  (va.time.year = zu(
    function (n) {
      return (n = va.time.day(n)), n.setMonth(0, 1), n;
    },
    function (n, t) {
      n.setFullYear(n.getFullYear() + t);
    },
    function (n) {
      return n.getFullYear();
    }
  )),
    (va.time.years = va.time.year.range),
    (va.time.years.utc = va.time.year.utc.range),
    (va.time.day = zu(
      function (n) {
        var t = new Fc(2e3, 0);
        return t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), t;
      },
      function (n, t) {
        n.setDate(n.getDate() + t);
      },
      function (n) {
        return n.getDate() - 1;
      }
    )),
    (va.time.days = va.time.day.range),
    (va.time.days.utc = va.time.day.utc.range),
    (va.time.dayOfYear = function (n) {
      var t = va.time.year(n);
      return Math.floor(
        (n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5
      );
    }),
    Pc.forEach(function (n, t) {
      (n = n.toLowerCase()), (t = 7 - t);
      var e = (va.time[n] = zu(
        function (n) {
          return (
            (n = va.time.day(n)).setDate(n.getDate() - ((n.getDay() + t) % 7)),
            n
          );
        },
        function (n, t) {
          n.setDate(n.getDate() + 7 * Math.floor(t));
        },
        function (n) {
          var e = va.time.year(n).getDay();
          return (
            Math.floor((va.time.dayOfYear(n) + ((e + t) % 7)) / 7) - (e !== t)
          );
        }
      ));
      (va.time[n + "s"] = e.range),
        (va.time[n + "s"].utc = e.utc.range),
        (va.time[n + "OfYear"] = function (n) {
          var e = va.time.year(n).getDay();
          return Math.floor((va.time.dayOfYear(n) + ((e + t) % 7)) / 7);
        });
    }),
    (va.time.week = va.time.sunday),
    (va.time.weeks = va.time.sunday.range),
    (va.time.weeks.utc = va.time.sunday.utc.range),
    (va.time.weekOfYear = va.time.sundayOfYear),
    (va.time.format = function (n) {
      function t(t) {
        for (var r, i, u, a = [], o = -1, c = 0; ++o < e; )
          37 === n.charCodeAt(o) &&
            (a.push(n.substring(c, o)),
            null != (i = el[(r = n.charAt(++o))]) && (r = n.charAt(++o)),
            (u = rl[r]) && (r = u(t, null == i ? ("e" === r ? " " : "0") : i)),
            a.push(r),
            (c = o + 1));
        return a.push(n.substring(c, o)), a.join("");
      }
      var e = n.length;
      return (
        (t.parse = function (t) {
          var e = { y: 1900, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 },
            r = ju(e, n, t, 0);
          if (r != t.length) return null;
          "p" in e && (e.H = (e.H % 12) + 12 * e.p);
          var i = new Fc();
          return (
            "j" in e
              ? i.setFullYear(e.y, 0, e.j)
              : "w" in e && ("W" in e || "U" in e)
              ? (i.setFullYear(e.y, 0, 1),
                i.setFullYear(
                  e.y,
                  0,
                  "W" in e
                    ? ((e.w + 6) % 7) + 7 * e.W - ((i.getDay() + 5) % 7)
                    : e.w + 7 * e.U - ((i.getDay() + 6) % 7)
                ))
              : i.setFullYear(e.y, e.m, e.d),
            i.setHours(e.H, e.M, e.S, e.L),
            i
          );
        }),
        (t.toString = function () {
          return n;
        }),
        t
      );
    });
  var Bc = Lu(Ic),
    $c = Hu(Ic),
    Wc = Lu(Vc),
    Jc = Hu(Vc),
    Gc = Lu(Xc),
    Kc = Hu(Xc),
    Qc = Lu(Zc),
    nl = Hu(Zc),
    tl = /^%/,
    el = { "-": "", _: " ", 0: "0" },
    rl = {
      a: function (n) {
        return Vc[n.getDay()];
      },
      A: function (n) {
        return Ic[n.getDay()];
      },
      b: function (n) {
        return Zc[n.getMonth()];
      },
      B: function (n) {
        return Xc[n.getMonth()];
      },
      c: va.time.format(Rc),
      d: function (n, t) {
        return Fu(n.getDate(), t, 2);
      },
      e: function (n, t) {
        return Fu(n.getDate(), t, 2);
      },
      H: function (n, t) {
        return Fu(n.getHours(), t, 2);
      },
      I: function (n, t) {
        return Fu(n.getHours() % 12 || 12, t, 2);
      },
      j: function (n, t) {
        return Fu(1 + va.time.dayOfYear(n), t, 3);
      },
      L: function (n, t) {
        return Fu(n.getMilliseconds(), t, 3);
      },
      m: function (n, t) {
        return Fu(n.getMonth() + 1, t, 2);
      },
      M: function (n, t) {
        return Fu(n.getMinutes(), t, 2);
      },
      p: function (n) {
        return n.getHours() >= 12 ? "PM" : "AM";
      },
      S: function (n, t) {
        return Fu(n.getSeconds(), t, 2);
      },
      U: function (n, t) {
        return Fu(va.time.sundayOfYear(n), t, 2);
      },
      w: function (n) {
        return n.getDay();
      },
      W: function (n, t) {
        return Fu(va.time.mondayOfYear(n), t, 2);
      },
      x: va.time.format(Yc),
      X: va.time.format(Uc),
      y: function (n, t) {
        return Fu(n.getFullYear() % 100, t, 2);
      },
      Y: function (n, t) {
        return Fu(n.getFullYear() % 1e4, t, 4);
      },
      Z: ua,
      "%": function () {
        return "%";
      },
    },
    il = {
      a: Pu,
      A: Ou,
      b: Iu,
      B: Vu,
      c: Xu,
      d: Ku,
      e: Ku,
      H: na,
      I: na,
      j: Qu,
      L: ra,
      m: Gu,
      M: ta,
      p: ia,
      S: ea,
      U: Yu,
      w: Ru,
      W: Uu,
      x: Zu,
      X: Bu,
      y: Wu,
      Y: $u,
      "%": aa,
    },
    ul = /^\s*\d+/,
    al = va.map({ am: 0, pm: 1 });
  va.time.format.utc = function (n) {
    function t(n) {
      try {
        Fc = Cu;
        var t = new Fc();
        return (t._ = n), e(t);
      } finally {
        Fc = Date;
      }
    }
    var e = va.time.format(n);
    return (
      (t.parse = function (n) {
        try {
          Fc = Cu;
          var t = e.parse(n);
          return t && t._;
        } finally {
          Fc = Date;
        }
      }),
      (t.toString = e.toString),
      t
    );
  };
  var ol = va.time.format.utc("%Y-%m-%dT%H:%M:%S.%LZ");
  (va.time.format.iso =
    Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z")
      ? oa
      : ol),
    (oa.parse = function (n) {
      var t = new Date(n);
      return isNaN(t) ? null : t;
    }),
    (oa.toString = ol.toString),
    (va.time.second = zu(
      function (n) {
        return new Fc(1e3 * Math.floor(n / 1e3));
      },
      function (n, t) {
        n.setTime(n.getTime() + 1e3 * Math.floor(t));
      },
      function (n) {
        return n.getSeconds();
      }
    )),
    (va.time.seconds = va.time.second.range),
    (va.time.seconds.utc = va.time.second.utc.range),
    (va.time.minute = zu(
      function (n) {
        return new Fc(6e4 * Math.floor(n / 6e4));
      },
      function (n, t) {
        n.setTime(n.getTime() + 6e4 * Math.floor(t));
      },
      function (n) {
        return n.getMinutes();
      }
    )),
    (va.time.minutes = va.time.minute.range),
    (va.time.minutes.utc = va.time.minute.utc.range),
    (va.time.hour = zu(
      function (n) {
        var t = n.getTimezoneOffset() / 60;
        return new Fc(36e5 * (Math.floor(n / 36e5 - t) + t));
      },
      function (n, t) {
        n.setTime(n.getTime() + 36e5 * Math.floor(t));
      },
      function (n) {
        return n.getHours();
      }
    )),
    (va.time.hours = va.time.hour.range),
    (va.time.hours.utc = va.time.hour.utc.range),
    (va.time.month = zu(
      function (n) {
        return (n = va.time.day(n)), n.setDate(1), n;
      },
      function (n, t) {
        n.setMonth(n.getMonth() + t);
      },
      function (n) {
        return n.getMonth();
      }
    )),
    (va.time.months = va.time.month.range),
    (va.time.months.utc = va.time.month.utc.range);
  var cl = [
      1e3,
      5e3,
      15e3,
      3e4,
      6e4,
      3e5,
      9e5,
      18e5,
      36e5,
      108e5,
      216e5,
      432e5,
      864e5,
      1728e5,
      6048e5,
      2592e6,
      7776e6,
      31536e6,
    ],
    ll = [
      [va.time.second, 1],
      [va.time.second, 5],
      [va.time.second, 15],
      [va.time.second, 30],
      [va.time.minute, 1],
      [va.time.minute, 5],
      [va.time.minute, 15],
      [va.time.minute, 30],
      [va.time.hour, 1],
      [va.time.hour, 3],
      [va.time.hour, 6],
      [va.time.hour, 12],
      [va.time.day, 1],
      [va.time.day, 2],
      [va.time.week, 1],
      [va.time.month, 1],
      [va.time.month, 3],
      [va.time.year, 1],
    ],
    fl = [
      [va.time.format("%Y"), Rt],
      [
        va.time.format("%B"),
        function (n) {
          return n.getMonth();
        },
      ],
      [
        va.time.format("%b %d"),
        function (n) {
          return 1 != n.getDate();
        },
      ],
      [
        va.time.format("%a %d"),
        function (n) {
          return n.getDay() && 1 != n.getDate();
        },
      ],
      [
        va.time.format("%I %p"),
        function (n) {
          return n.getHours();
        },
      ],
      [
        va.time.format("%I:%M"),
        function (n) {
          return n.getMinutes();
        },
      ],
      [
        va.time.format(":%S"),
        function (n) {
          return n.getSeconds();
        },
      ],
      [
        va.time.format(".%L"),
        function (n) {
          return n.getMilliseconds();
        },
      ],
    ],
    sl = va.scale.linear(),
    hl = fa(fl);
  (ll.year = function (n, t) {
    return sl.domain(n.map(ha)).ticks(t).map(sa);
  }),
    (va.time.scale = function () {
      return ca(va.scale.linear(), ll, hl);
    });
  var gl = ll.map(function (n) {
      return [n[0].utc, n[1]];
    }),
    pl = [
      [va.time.format.utc("%Y"), Rt],
      [
        va.time.format.utc("%B"),
        function (n) {
          return n.getUTCMonth();
        },
      ],
      [
        va.time.format.utc("%b %d"),
        function (n) {
          return 1 != n.getUTCDate();
        },
      ],
      [
        va.time.format.utc("%a %d"),
        function (n) {
          return n.getUTCDay() && 1 != n.getUTCDate();
        },
      ],
      [
        va.time.format.utc("%I %p"),
        function (n) {
          return n.getUTCHours();
        },
      ],
      [
        va.time.format.utc("%I:%M"),
        function (n) {
          return n.getUTCMinutes();
        },
      ],
      [
        va.time.format.utc(":%S"),
        function (n) {
          return n.getUTCSeconds();
        },
      ],
      [
        va.time.format.utc(".%L"),
        function (n) {
          return n.getUTCMilliseconds();
        },
      ],
    ],
    dl = fa(pl);
  return (
    (gl.year = function (n, t) {
      return sl.domain(n.map(pa)).ticks(t).map(ga);
    }),
    (va.time.scale.utc = function () {
      return ca(va.scale.linear(), gl, dl);
    }),
    (va.text = ht(function (n) {
      return n.responseText;
    })),
    (va.json = function (n, t) {
      return gt(n, "application/json", da, t);
    }),
    (va.html = function (n, t) {
      return gt(n, "text/html", ma, t);
    }),
    (va.xml = ht(function (n) {
      return n.responseXML;
    })),
    va
  );
})();
