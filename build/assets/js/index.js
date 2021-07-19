/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/mkcvs/dist/index.js":
/*!******************************************!*\
  !*** ./node_modules/mkcvs/dist/index.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, e) {
  "object" == ( false ? 0 : _typeof(exports)) && "object" == ( false ? 0 : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(window, function () {
  return function () {
    var t = {
      996: function _(t) {
        var e = function e(t) {
          null == t && (t = new Date().getTime()), this.N = 624, this.M = 397, this.MATRIX_A = 2567483615, this.UPPER_MASK = 2147483648, this.LOWER_MASK = 2147483647, this.mt = new Array(this.N), this.mti = this.N + 1, t.constructor == Array ? this.init_by_array(t, t.length) : this.init_seed(t);
        };

        e.prototype.init_seed = function (t) {
          for (this.mt[0] = t >>> 0, this.mti = 1; this.mti < this.N; this.mti++) {
            t = this.mt[this.mti - 1] ^ this.mt[this.mti - 1] >>> 30;
            this.mt[this.mti] = (1812433253 * ((4294901760 & t) >>> 16) << 16) + 1812433253 * (65535 & t) + this.mti, this.mt[this.mti] >>>= 0;
          }
        }, e.prototype.init_by_array = function (t, e) {
          var i, n, s;

          for (this.init_seed(19650218), i = 1, n = 0, s = this.N > e ? this.N : e; s; s--) {
            var r = this.mt[i - 1] ^ this.mt[i - 1] >>> 30;
            this.mt[i] = (this.mt[i] ^ (1664525 * ((4294901760 & r) >>> 16) << 16) + 1664525 * (65535 & r)) + t[n] + n, this.mt[i] >>>= 0, n++, ++i >= this.N && (this.mt[0] = this.mt[this.N - 1], i = 1), n >= e && (n = 0);
          }

          for (s = this.N - 1; s; s--) {
            r = this.mt[i - 1] ^ this.mt[i - 1] >>> 30;
            this.mt[i] = (this.mt[i] ^ (1566083941 * ((4294901760 & r) >>> 16) << 16) + 1566083941 * (65535 & r)) - i, this.mt[i] >>>= 0, ++i >= this.N && (this.mt[0] = this.mt[this.N - 1], i = 1);
          }

          this.mt[0] = 2147483648;
        }, e.prototype.random_int = function () {
          var t,
              e = new Array(0, this.MATRIX_A);

          if (this.mti >= this.N) {
            var i;

            for (this.mti == this.N + 1 && this.init_seed(5489), i = 0; i < this.N - this.M; i++) {
              t = this.mt[i] & this.UPPER_MASK | this.mt[i + 1] & this.LOWER_MASK, this.mt[i] = this.mt[i + this.M] ^ t >>> 1 ^ e[1 & t];
            }

            for (; i < this.N - 1; i++) {
              t = this.mt[i] & this.UPPER_MASK | this.mt[i + 1] & this.LOWER_MASK, this.mt[i] = this.mt[i + (this.M - this.N)] ^ t >>> 1 ^ e[1 & t];
            }

            t = this.mt[this.N - 1] & this.UPPER_MASK | this.mt[0] & this.LOWER_MASK, this.mt[this.N - 1] = this.mt[this.M - 1] ^ t >>> 1 ^ e[1 & t], this.mti = 0;
          }

          return t = this.mt[this.mti++], t ^= t >>> 11, t ^= t << 7 & 2636928640, t ^= t << 15 & 4022730752, (t ^= t >>> 18) >>> 0;
        }, e.prototype.random_int31 = function () {
          return this.random_int() >>> 1;
        }, e.prototype.random_incl = function () {
          return this.random_int() * (1 / 4294967295);
        }, e.prototype.random = function () {
          return this.random_int() * (1 / 4294967296);
        }, e.prototype.random_excl = function () {
          return (this.random_int() + .5) * (1 / 4294967296);
        }, e.prototype.random_long = function () {
          return (67108864 * (this.random_int() >>> 5) + (this.random_int() >>> 6)) * (1 / 9007199254740992);
        }, t.exports = e;
      }
    },
        e = {};

    function i(n) {
      var s = e[n];
      if (void 0 !== s) return s.exports;
      var r = e[n] = {
        exports: {}
      };
      return t[n](r, r.exports, i), r.exports;
    }

    i.d = function (t, e) {
      for (var n in e) {
        i.o(e, n) && !i.o(t, n) && Object.defineProperty(t, n, {
          enumerable: !0,
          get: e[n]
        });
      }
    }, i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, i.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    };
    var n = {};
    return function () {
      "use strict";

      i.r(n), i.d(n, {
        Composition: function Composition() {
          return g;
        },
        colorInterpolation: function colorInterpolation() {
          return x;
        },
        colorToRgba: function colorToRgba() {
          return a;
        },
        debounce: function debounce() {
          return e;
        },
        degreeToRadian: function degreeToRadian() {
          return h;
        },
        forEach: function forEach() {
          return l;
        },
        getChannelValuesFromRgba: function getChannelValuesFromRgba() {
          return u;
        },
        getDistance: function getDistance() {
          return o;
        },
        is: function is() {
          return s;
        },
        lerp: function lerp() {
          return y;
        },
        perlinNoise: function perlinNoise() {
          return w;
        },
        pointerEventToXY: function pointerEventToXY() {
          return c;
        },
        randomID: function randomID() {
          return f;
        },
        randomWithinRange: function randomWithinRange() {
          return r;
        }
      });
      var t = new (i(996))();
      /**
       *
       * debounce function
       * @export
       * @param {Function} func
       * @param {number} delay
       * @returns
       */

      function e(t, e) {
        var i,
            n = this;
        return function () {
          var s = n,
              r = arguments;
          clearTimeout(i), i = setTimeout(function () {
            t.apply(s, r);
          }, e);
        };
      }

      var s = {
        und: function und(t) {
          return void 0 === t;
        },
        nil: function nil(t) {
          return s.und(t) || null === t;
        },
        hex: function hex(t) {
          return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t);
        },
        rgba: function rgba(t) {
          return /^rgba/.test(t);
        },
        rgb: function rgb(t) {
          return /^rgb/.test(t);
        },
        hsl: function hsl(t) {
          return /^hsl/.test(t);
        },
        col: function col(t) {
          return s.hex(t) || s.rgb(t) || s.hsl(t);
        }
      };
      /**
       * 產生指定範圍內的隨機值
       *
       * @export
       * @param {number} min
       * @param {number} max
       * @param {number} [seed]
       * @returns
       */

      function r(e, i, n) {
        return t.random(n) * (i - e) + e;
      }
      /**
       * 取得點對點的距離絕對值
       *
       * @export
       * @param {Point} point1
       * @param {point} point2
       * @returns
       */


      function o(t, e) {
        var i = (e.x - t.x) * (e.x - t.x) + (e.y - t.y) * (e.y - t.y) + ((null == e ? void 0 : e.z) - (null == t ? void 0 : t.z)) * ((null == e ? void 0 : e.z) - (null == t ? void 0 : t.z));
        return Math.sqrt(i);
      }
      /**
       *
       * 度度量轉徑度量
       *
       * @export
       * @param {Number} degree
       * @returns
       */


      function h(t) {
        return t / 180 * Math.PI;
      }
      /**
       * 統一 touchEvent/mouseEvent 的事件觸發座標取得方式
       * @export
       * @param {object}  傳入的event 物件
       * @returns {Object} 一個物件, 內含事件觸發座標的X/Y 座標值
       */


      function c(t) {
        var e = {
          x: 0,
          y: 0
        };

        if ("touchstart" === t.type || "touchmove" === t.type || "touchend" === t.type || "touchcancel" === t.type) {
          var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0];
          e.x = i.pageX, e.y = i.pageY;
        } else "mousedown" !== t.type && "mouseup" !== t.type && "mousemove" !== t.type && "mouseover" !== t.type && "mouseout" !== t.type && "mouseenter" !== t.type && "mouseleave" !== t.type || (e.x = t.pageX, e.y = t.pageY);

        return e;
      }
      /**
       * rgb 值轉成rgba值
       *
       * @param {String} rgbValue
       * @returns {String} rgbavalue
       */

      /**
       *
       *
       * @export
       * @param {string} val
       * @returns {String} rgbavalue
       */


      function a(t) {
        return s.rgb(t) ? (i = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e = t)) ? "rgba(" + i[1] + ",1)" : e : s.hex(t) ?
        /**
         * hex值轉rgba值
         *
         * @param {String} hexValue
         * @returns {String} rgbavalue
         */
        function (t) {
          var e = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, e, i, n) {
            return e + e + i + i + n + n;
          }),
              i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
          return "rgba(" + parseInt(i[1], 16) + "," + parseInt(i[2], 16) + "," + parseInt(i[3], 16) + ",1)";
        }
        /**
         * hsl值轉rgba值
         *
         * @param {String} hslValue
         * @returns {String} rgbavalue
         */
        (t) : s.hsl(t) ? function (t) {
          var e,
              i,
              n,
              s = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),
              r = parseInt(s[1], 10) / 360,
              o = parseInt(s[2], 10) / 100,
              h = parseInt(s[3], 10) / 100,
              c = s[4] || 1;

          function a(t, e, i) {
            return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t;
          }

          if (0 == o) e = i = n = h;else {
            var u = h < .5 ? h * (1 + o) : h + o - h * o,
                f = 2 * h - u;
            e = a(f, u, r + 1 / 3), i = a(f, u, r), n = a(f, u, r - 1 / 3);
          }
          return "rgba(" + 255 * e + "," + 255 * i + "," + 255 * n + "," + c + ")";
        }(t) : void 0;
        var e, i;
      }
      /**
       *
       *
       * @export
       * @param {String} rgba
       * @returns
       */


      function u(t) {
        return t.replace(/^(rgb|rgba)\(/, "").replace(/\)$/, "").replace(/\s/g, "").split(",").map(function (t) {
          return parseInt(t);
        });
      }
      /**
       * 產生隨機id
       *
       * @export
       * @param {number} digits id碼位數
       * @returns
       */


      function f(t) {
        for (var e = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVXYZ23456789", i = "", n = 0; n < t; n++) {
          i += e[Math.floor(r(0, e.length))];
        }

        return i;
      }
      /**
       * 遍歷陣列
       *
       * @export
       * @param {*} array
       * @param {*} callback
       */


      function l(t, e) {
        for (var i = 0; i < t.length; i++) {
          e(i, t[i]);
        }
      }

      var d = function () {
        function t(t, e) {
          this.frameIsPaused = !1, this.layerType = "2d", this.onFrame = function () {}, this.canvasSizefixed = !1, this.ele = t, this.cvs = document.createElement("canvas"), this.ctx = this.cvs.getContext("2d"), this.syncData = e, this.init();
        }

        return t.prototype.init = function () {
          this.triggerResizingMechanism();
        }, t.prototype.triggerResizingMechanism = function () {
          if (!this.canvasSizefixed) {
            var t = this.ele.getBoundingClientRect().width,
                e = this.ele.getBoundingClientRect().height;
            this.cvs.width = t, this.cvs.height = e;
          }
        }, t.prototype.setSize = function (t, e) {
          this.canvasSizefixed = !0, this.cvs.width = t, this.cvs.height = e;
        }, t.prototype.drawSquare = function (t, e, i, n, s) {
          this.ctx.save(), this.ctx.fillStyle = n, this.ctx.globalAlpha = s, this.ctx.fillRect(t - i / 2, e - i / 2, i, i), this.ctx.restore();
        }, t.prototype.drawCircle = function (t, e, i, n, s) {
          this.ctx.save(), this.ctx.fillStyle = n, this.ctx.globalAlpha = s, this.ctx.beginPath(), this.ctx.arc(t, e, i / 2, 0, 2 * Math.PI, !0), this.ctx.closePath(), this.ctx.fill(), this.ctx.restore();
        }, t.prototype.drawLine = function (t, e, i, n) {
          this.ctx.save(), this.ctx.strokeStyle = i, this.ctx.lineWidth = n, this.ctx.beginPath(), this.ctx.moveTo(t.x, t.y), this.ctx.lineTo(e.x, e.y), this.ctx.closePath(), this.ctx.stroke(), this.ctx.restore();
        }, t.prototype.background = function (t) {
          this.ctx.save(), this.ctx.fillStyle = t, this.ctx.fillRect(0, 0, this.cvs.width, this.cvs.height), this.ctx.restore();
        }, t.prototype.clear = function () {
          this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
        }, t;
      }(),
          m = function () {
        function t(t, e) {
          this.frameIsPaused = !1, this.layerType = "3d", this.onFrame = function () {}, this.canvasSizefixed = !1, this.ele = t, this.cvs = document.createElement("canvas"), this.ctx = this.cvs.getContext("webgl"), this.syncData = e, this.init();
        }

        return t.prototype.init = function () {
          this.triggerResizingMechanism();
        }, t.prototype.triggerResizingMechanism = function () {
          if (!this.canvasSizefixed) {
            var t = this.ele.getBoundingClientRect().width,
                e = this.ele.getBoundingClientRect().height;
            this.cvs.width = t, this.cvs.height = e;
          }
        }, t.prototype.setSize = function (t, e) {
          this.canvasSizefixed = !0, this.cvs.width = t, this.cvs.height = e;
        }, t;
      }(),
          p = function () {
        function t(t, e) {
          this.frameIsPaused = !1, this.layerType = "webgl", this.onFrame = function () {}, this.canvasSizefixed = !1, this.ele = t, this.cvs = document.createElement("canvas"), this.ctx = this.cvs.getContext("webgl"), this.syncData = e, this.init();
        }

        return t.prototype.init = function () {
          this.triggerResizingMechanism();
        }, t.prototype.triggerResizingMechanism = function () {
          if (!this.canvasSizefixed) {
            var t = this.ele.getBoundingClientRect().width,
                e = this.ele.getBoundingClientRect().height;
            this.cvs.width = t, this.cvs.height = e;
          }
        }, t.prototype.setSize = function (t, e) {
          this.canvasSizefixed = !0, this.cvs.width = t, this.cvs.height = e;
        }, t;
      }(),
          v = function () {
        function t(t, e) {
          this.layerType = "dom", this.onFrame = function () {}, this.ele = t, this.syncData = e, this.init();
        }

        return t.prototype.init = function () {
          this.dom = document.createElement("div"), this.dom.style.position = "absolute", this.dom.style.width = "100%", this.dom.style.height = "100%", this.ele.prepend(this.dom);
        }, t;
      }(),
          g = function () {
        function t(t) {
          this.stack = [], this.syncData = {
            mouse: {
              x: 0,
              y: 0
            },
            isClick: !1,
            frameCount: 0,
            timeElapsed: 0,
            previousFrameTime: performance.now()
          }, this.onResize = function () {}, this.ele = t, this.setBlockPreventingMechanism(), this.addEventHandler(), this.genBaseCanvas(), this.refreshBaseFrameCounter();
        }

        return t.prototype.newLayer = function (t) {
          var e;

          switch (t) {
            case "2d":
              e = new d(this.ele, this.syncData);
              break;

            case "3d":
              e = new m(this.ele, this.syncData);
              break;

            case "webgl":
              e = new p(this.ele, this.syncData);
              break;

            case "dom":
              e = new v(this.ele, this.syncData);
          }

          return this.stack.unshift(e), e;
        }, t.prototype.triggerResizingMechanism = function () {
          var t = this.ele.getBoundingClientRect().width,
              e = this.ele.getBoundingClientRect().height;
          this.cvs.width = t, this.cvs.height = e, this.setPosition();
        }, t.prototype.genBaseCanvas = function () {
          this.cvs = document.createElement("canvas"), this.ctx = this.cvs.getContext("2d"), this.triggerResizingMechanism(), this.ele.append(this.cvs);
        }, t.prototype.addEventHandler = function () {
          var t = this;
          this.ele.addEventListener("mousedown", function () {
            t.syncData.isClick = !0;
          }), this.ele.addEventListener("mouseup", function () {
            t.syncData.isClick = !1;
          }), this.ele.addEventListener("touchstart", function () {
            t.syncData.isClick = !0;
          }), this.ele.addEventListener("touchend", function () {
            t.syncData.isClick = !1;
          }), this.ele.addEventListener("mousemove", function (e) {
            var i = c(e);
            t.syncData.mouse = i;
          }), this.ele.addEventListener("touchmove", function (e) {
            var i = c(e);
            t.syncData.mouse = i;
          }), window.addEventListener("resize", e(function () {
            t.triggerResizingMechanism(), setTimeout(function () {
              t.onResize();
            }), l(t.stack, function (t, e) {
              "dom" !== e.layerType && e.triggerResizingMechanism();
            });
          }, 200));
        }, t.prototype.setPosition = function () {
          this.ele.style.position = "";
          window.getComputedStyle(this.ele).getPropertyValue("position");
          this.ele.style.position = "relative";
        }, t.prototype.setBlockPreventingMechanism = function () {
          var t = function t() {
            return console.error("MKCVS:Alert/Confirm Is Forbidden In This FrameWork"), !1;
          };

          window.alert && (window.alert = t), window.confirm && (window.confirm = t);
        }, t.prototype.renderAllStack = function () {
          var t = this,
              e = this.stack.length;
          this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height), l(this.stack, function (i, n) {
            t.ctx.drawImage(t.stack[e - 1 - i].cvs, 0, 0, t.cvs.width, t.cvs.height);
          });
        }, t.prototype.refreshBaseFrameCounter = function () {
          var t = this,
              e = performance.now();
          this.syncData.timeElapsed = e - this.syncData.previousFrameTime, this.syncData.frameCount += 1, this.syncData.previousFrameTime = e, l(this.stack, function (t, e) {
            e.onFrame();
          }), this.renderAllStack(), "visible" === document.visibilityState ? requestAnimationFrame(function () {
            t.refreshBaseFrameCounter();
          }) : setTimeout(function () {
            t.refreshBaseFrameCounter();
          }, 1e3 / 60);
        }, t;
      }();
      /**
       * 線性內插函數
       *
       * @export
       * @param {*} x
       * @param {*} min
       * @param {*} max
       * @param {*} virtualMin
       * @param {*} virtualMax
       * @returns
       */


      function y(t, e, i, n, s) {
        return (t - e) / (i - e) * (s - n) + n;
      }

      function x(t, e, i, n, r) {
        if (!(s.col(n) && s.col(r))) return new TypeError("colorInterpolation: 色彩參數非規制");

        for (var o = u(a(n)), h = u(a(r)), c = [], f = 0; f < 4; f++) {
          c[f] = y(t, e, i, o[f], h[f]);
        }

        return "rgba(" + c + ")";
      }
      /**
       * 柏林噪聲演算
       *
       * @export
       * @param {Number} x
       * @param {Number} y
       * @param {Number} z
       * @returns 一個float值, 代表[x,y,z] 該點座標產生的噪聲值
       */


      function w(t, e, i) {
        var n = function n(t) {
          return t * t * t * (t * (6 * t - 15) + 10);
        },
            s = function s(t, e, i) {
          return e + t * (i - e);
        },
            r = function r(t, e, i, n) {
          var s = 15 & t,
              r = s < 8 ? e : i,
              o = s < 4 ? i : 12 == s || 14 == s ? e : n;
          return (0 == (1 & s) ? r : -r) + (0 == (2 & s) ? o : -o);
        },
            o = function o(t) {
          return (1 + t) / 2;
        };

        return function (t, e, i) {
          for (var h = new Array(512), c = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180], a = 0; a < 256; a++) {
            h[256 + a] = h[a] = c[a];
          }

          var u = 255 & Math.floor(t),
              f = 255 & Math.floor(e),
              l = 255 & Math.floor(i);
          t -= Math.floor(t), e -= Math.floor(e), i -= Math.floor(i);
          var d = n(t),
              m = n(e),
              p = n(i),
              v = h[u] + f,
              g = h[v] + l,
              y = h[v + 1] + l,
              x = h[u + 1] + f,
              w = h[x] + l,
              b = h[x + 1] + l;
          return o(s(p, s(m, s(d, r(h[g], t, e, i), r(h[w], t - 1, e, i)), s(d, r(h[y], t, e - 1, i), r(h[b], t - 1, e - 1, i))), s(m, s(d, r(h[g + 1], t, e, i - 1), r(h[w + 1], t - 1, e, i - 1)), s(d, r(h[y + 1], t, e - 1, i - 1), r(h[b + 1], t - 1, e - 1, i - 1)))));
        }(t, e, i);
      }
    }(), n;
  }();
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/assets/index.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mkcvs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mkcvs */ "./node_modules/mkcvs/dist/index.js");
/* harmony import */ var mkcvs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mkcvs__WEBPACK_IMPORTED_MODULE_0__);


window.onload = function () {
  var div = document.querySelector('canvas');
  new mkcvs__WEBPACK_IMPORTED_MODULE_0__.Composition(div);
};
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************************!*\
  !*** ./src/assets/scss/main.scss ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=index.js.map