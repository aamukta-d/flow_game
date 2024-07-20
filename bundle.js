(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.game_running = void 0;
var _scrabble = require("./scripts/scrabble");
var _qol = require("./scripts/qol");
var _timer = require("./scripts/timer");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var loop = "";
var game_running = exports.game_running = true;
function start() {
  return _start.apply(this, arguments);
}
function _start() {
  _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _scrabble.loadWords)();
        case 2:
          (0, _timer.startTimer)();
          if (loop === "") {
            loop = setInterval(game_loop, 1000);
          }
          if (_timer.real_time_left <= 1) {
            clearInterval(loop);
          }
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _start.apply(this, arguments);
}
var game_loop = function game_loop() {
  (0, _qol.render)((0, _qol.find)(".letter-spawns"), (0, _scrabble.letterElement)((0, _scrabble.randomLetter)()));
  (0, _scrabble.cleanCards)();
  //console.log(getEventListeners(document.querySelectorAll('.tile')));
};
function end() {}
start();
game_loop();
end();

},{"./scripts/qol":2,"./scripts/scrabble":3,"./scripts/timer":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.write = exports.undetect = exports.style = exports.render = exports.remove = exports.remClass = exports.isElement = exports.hasClass = exports.findAll = exports.find = exports.detect = exports.create = exports.attribs = exports.addClass = void 0;
var render = exports.render = function render(parent, child) {
  parent.appendChild(child);
};
var remove = exports.remove = function remove(parent, child) {
  if (child.parentNode === parent) {
    parent.removeChild(child);
  }
};
var create = exports.create = function create(element) {
  return document.createElement(element);
};
var addClass = exports.addClass = function addClass(element, classlist) {
  classlist.forEach(function (clas) {
    element.classList.add(clas);
  });
};
var hasClass = exports.hasClass = function hasClass(element, clas) {
  return element.classList.contains(clas);
};
var remClass = exports.remClass = function remClass(element, classlist) {
  classlist.forEach(function (clas) {
    element.classList.remove(clas);
  });
};
var find = exports.find = function find(selector) {
  return document.querySelector(selector);
};
var findAll = exports.findAll = function findAll(selector) {
  return document.querySelectorAll(selector);
};
var write = exports.write = function write(element, text) {
  element.textContent = text;
};
var detect = exports.detect = function detect(element, event, func) {
  element.addEventListener(event, func);
};
var undetect = exports.undetect = function undetect(element, event, func) {
  element.removeEventListener(event, func);
};
var style = exports.style = function style(element, styletext) {
  element.style.cssText = styletext;
};
var attribs = exports.attribs = function attribs(element, attribList, values) {
  attribList.map(function (attrib, index) {
    element.setAttribute(attrib, values[index]);
  });
};
var isElement = exports.isElement = function isElement($obj) {
  try {
    return $obj.constructor.__proto__.prototype.constructor.name ? true : false;
  } catch (e) {
    return false;
  }
};
var moveTo = function moveTo(element, x, y, size) {
  element.style.top = y - size / 2 + "px";
  element.style.left = x - size / 2 + "px";
};
var getPos = function getPos(evt, myrect) {
  var rect = myrect.getBoundingClientRect();
  var mousePos = {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
  return mousePos;
};
var checkCollision = function checkCollision(thing1, thing2) {
  if (thing1 === null || thing2 === null) {
    return false;
  }
  // Get the bounding box of the first element 
  var rect1 = thing1.getBoundingClientRect();

  // Get the bounding box of the second element 
  var rect2 = thing2.getBoundingClientRect();

  // Check if the two elements overlap 
  var overlap = !(rect1.right - 15 < rect2.left + 15 || rect1.left + 15 > rect2.right - 15 || rect1.bottom - 15 < rect2.top + 15 || rect1.top + 15 > rect2.bottom - 15);
  return overlap;
};
var checkCollisionReal = function checkCollisionReal(thing1, thing2) {
  if (thing1 === null || thing2 === null) {
    return false;
  }
  // Get the bounding box of the first element 
  var rect1 = thing1.getBoundingClientRect();

  // Get the bounding box of the second element 
  var rect2 = thing2.getBoundingClientRect();

  // Check if the two elements overlap 
  var overlap = !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom);
  return overlap;
};
var getPosEle = function getPosEle(element, size) {
  var left = element.style.left;
  var top = element.style.top;
  var x;
  var y;
  if (size === "none") {
    x = Number(left.substring(0, left.length - 2));
    y = Number(top.substring(0, top.length - 2));
  } else {
    x = Number(left.substring(0, left.length - 2)) + size / 2;
    y = Number(top.substring(0, top.length - 2)) + size / 2;
  }
  return {
    x: x,
    y: y
  };
};

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkWordNow = checkWordNow;
exports.cleanCards = cleanCards;
exports.formatted_words = void 0;
exports.letterElement = letterElement;
exports.loadWords = loadWords;
exports.points = void 0;
exports.randomLetter = randomLetter;
exports.words_submitted = exports.word_list = void 0;
var _qol = require("./qol");
var _main = require("../main");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var word_list = exports.word_list = [];
var letter_flow_list = [];
var loaded_letters = [];
var slots = [];
var holds = [];
var words_submitted = exports.words_submitted = [];
var word_modifiers = [];
var held_letters = [];
var hook_icon = (0, _qol.create)("img");
var replace_icon_list = [];
var formatted_words = exports.formatted_words = [];
var points = exports.points = 0;
function loadWords() {
  return _loadWords.apply(this, arguments);
}
function _loadWords() {
  _loadWords = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var fileUrl, response, data, word_list_temp, i;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          (0, _qol.detect)((0, _qol.find)(".submit"), "click", submitWord);
          (0, _qol.findAll)(".blank").forEach(function (slot) {
            slots.push(slot);
          });
          (0, _qol.findAll)(".hold").forEach(function (slot) {
            holds.push(slot);
          });
          fileUrl = 'https://raw.githubusercontent.com/jmlewis/valett/master/scrabble/sowpods.txt'; // provide file location
          _context.next = 6;
          return fetch(fileUrl);
        case 6:
          response = _context.sent;
          _context.next = 9;
          return response.text();
        case 9:
          data = _context.sent;
          word_list_temp = data.split("\r\n");
          exports.word_list = word_list = word_list_temp.map(function (word) {
            return word.toLowerCase();
          });
          hook_icon.src = "./hook.png";
          (0, _qol.addClass)(hook_icon, ["hook-icon"]);
          for (i = 0; i < 8; i++) {
            replace_icon_list.push((0, _qol.create)("img"));
            replace_icon_list[i].src = "./replace.png";
            (0, _qol.addClass)(replace_icon_list[i], ["replace-icon"]);
          }
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _loadWords.apply(this, arguments);
}
var submitWord = function submitWord() {
  var word = '';
  var formatted_word = [];
  loaded_letters.map(function (letter, index) {
    word = word + letter.textContent;
    (0, _qol.remove)(slots[index], letter);
    (0, _qol.remove)(slots[index], hook_icon);
    word_modifiers.push(letter.dataset.modifier);
    formatted_word.push({
      letter: letter.textContent,
      modifier: letter.dataset.modifier,
      hooked: letter.dataset.hooked === "true" ? true : false
    });
  });
  var score = checkWordNow(word.toLowerCase(), formatted_word);
  if (score === 0) {
    for (var i = 0; i < word.length; i++) {
      (0, _qol.render)((0, _qol.find)(".letter-spawns"), letterElement(word[i], [word_modifiers[i]]));
    }
  } else {
    var point_text = (0, _qol.find)(".points");
    exports.points = points = points + score;
    (0, _qol.write)(point_text, points);
    words_submitted.push(word);
    formatted_words.push(formatted_words);
    held_letters.map(function (letter, index) {
      (0, _qol.remove)((0, _qol.find)(".hold-".concat(index)), letter);
      (0, _qol.remove)(holds[index], hook_icon);
    });
    held_letters = [];
    loaded_letters.map(function (letter, index) {
      held_letters.push(letter);
      letter.dataset.hooked = "false";
      (0, _qol.render)((0, _qol.find)(".hold-".concat(index)), letter);
      (0, _qol.detect)(letter, "click", letterHook);
      (0, _qol.undetect)(letter, "click", letterRem);
    });
  }
  word_modifiers = [];
  loaded_letters = [];
  remove_replaces();
};
function remove_replaces() {
  held_letters.map(function (letter, index) {
    (0, _qol.remove)(holds[index], replace_icon_list[index]);
  });
}
function add_replaces() {
  held_letters.map(function (letter, index) {
    if (letter !== "hooked") {
      (0, _qol.render)(holds[index], replace_icon_list[index]);
    }
  });
}
function upgrade_letter(ele) {
  var new_modifier = ele.dataset.modifier;
  (0, _qol.remClass)(ele, [new_modifier]);
  switch (ele.dataset.modifier) {
    case "single-letter":
      new_modifier = "double-letter";
      break;
    case "double-letter":
      new_modifier = "triple-letter";
      break;
    case "triple-letter":
      new_modifier = "quad-letter";
      break;
    case "double-word":
      new_modifier = "triple-word";
      break;
    case "triple-word":
      new_modifier = "quad-word";
      break;
  }
  (0, _qol.addClass)(ele, [new_modifier]);
  ele.dataset.modifier = new_modifier;
}
function downgrade_letter(ele) {
  var new_modifier = ele.dataset.modifier;
  (0, _qol.remClass)(ele, [new_modifier]);
  switch (ele.dataset.modifier) {
    case "triple-letter":
      new_modifier = "double-letter";
      break;
    case "quad-letter":
      new_modifier = "triple-letter";
      break;
    case "double-letter":
      new_modifier = "single-letter";
      break;
    case "triple-word":
      new_modifier = "double-word";
      break;
    case "quad-word":
      new_modifier = "triple-word";
      break;
  }
  (0, _qol.addClass)(ele, [new_modifier]);
  ele.dataset.modifier = new_modifier;
}
var letterHook = function letterHook(e) {
  console.log("hook");
  var index = loaded_letters.map(function (letter) {
    return letter.dataset.hooked;
  }).indexOf("true");
  if (index != -1 && e.target.dataset.hooked === "false") {
    var index2 = held_letters.indexOf("hooked");
    var index3 = held_letters.indexOf(e.target);
    var letter = loaded_letters[index];
    letter.dataset.hooked = "false";
    held_letters[index2] = letter;
    (0, _qol.render)(holds[index2], letter);
    downgrade_letter(letter);
    (0, _qol.remove)(slots[index], letter);
    (0, _qol.remove)(slots[index], hook_icon);
    held_letters[index3] = "hooked";
    (0, _qol.render)(slots[index], e.target);
    upgrade_letter(e.target);
    (0, _qol.render)(slots[index], hook_icon);
    loaded_letters[index] = e.target;
    e.target.dataset.hooked = "true";
    remove_replaces();
    add_replaces();
  } else {
    if (e.target.dataset.hooked === "false") {
      if (loaded_letters.length < 8) {
        var _index = held_letters.indexOf(e.target);
        (0, _qol.remove)(holds[_index], e.target);
        held_letters[_index] = "hooked";
        loadLetter(e.target);
        (0, _qol.render)(slots[loaded_letters.length - 1], hook_icon);
        e.target.dataset.hooked = "true";
        upgrade_letter(e.target);
        remove_replaces();
        add_replaces();
      }
    } else {
      var _index2 = loaded_letters.indexOf(e.target);
      var _index3 = held_letters.indexOf("hooked");
      held_letters[_index3] = e.target;
      e.target.dataset.hooked = "false";
      (0, _qol.render)(holds[_index3], e.target);
      downgrade_letter(e.target);
      (0, _qol.remove)(slots[_index2], e.target);
      (0, _qol.remove)(slots[_index2], hook_icon);
      for (var i = _index2 + 1; i < loaded_letters.length; i++) {
        var temp = loaded_letters[i];
        (0, _qol.remove)((0, _qol.find)(".slot-".concat(i)), temp);
        (0, _qol.render)((0, _qol.find)(".slot-".concat(i - 1)), temp);
        loaded_letters[i - 1] = temp;
      }
      loaded_letters.pop();
      remove_replaces();
    }
  }
};
function checkWordNow(word, formatted_word) {
  var myword = word.toUpperCase();
  var total_score = 0;
  var multipler = 1;
  if (word_list.includes(word)) {
    formatted_word.forEach(function (lett) {
      var letter = lett.letter;
      var score = getLetterScore(letter);
      switch (lett.modifier) {
        case "triple-letter":
          score = score * 3;
          break;
        case "quad-letter":
          score = score * 4;
          break;
        case "double-letter":
          score = score * 2;
          break;
        case "triple-word":
          multipler = multipler * 3;
          break;
        case "quad-word":
          multipler = multipler * 4;
          break;
        case "double-word":
          multipler = multipler * 2;
          break;
      }
      total_score += score;
    });
    return total_score * multipler;
  } else {
    return 0;
  }
}
function getLetterScore(letter) {
  var score = 0;
  switch (letter) {
    case "E":
    case "A":
    case "I":
    case "O":
    case "N":
    case "R":
    case "T":
    case "L":
    case "S":
    case "U":
      score = 1;
      break;
    case "D":
    case "G":
      score = 2;
      break;
    case "B":
    case "C":
    case "M":
    case "P":
      score = 3;
      break;
    case "F":
    case "H":
    case "V":
    case "W":
    case "Y":
      score = 4;
      break;
    case "K":
      score = 5;
      break;
    case "J":
    case "X":
      score = 8;
      break;
    case "Q":
    case "Z":
      score = 10;
      break;
  }
  return score;
}
function letterElement(lett) {
  var modifier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var letter = lett.toUpperCase();
  var ele = (0, _qol.create)("span");
  ele.dataset.score = getLetterScore(letter);
  ele.dataset.hooked = false;
  (0, _qol.write)(ele, letter);
  (0, _qol.addClass)(ele, ["tile", "inflow"]);
  var rotation = Math.floor(Math.random() * 60) - 30;
  var translation = Math.floor(Math.random() * 200);
  var top = Math.floor(Math.random() * -40) - 25;
  var tile_type = Math.floor(Math.random() * 15 * 15);
  var tile_mod = "single-letter";
  if (modifier.length === 0 & tile_type < 8 || modifier.includes("triple-word")) {
    tile_mod = "triple-word";
  } else if (modifier.length === 0 & tile_type < 8 + 16 || modifier.includes("double-word")) {
    tile_mod = "double-word";
  } else if (modifier.length === 0 & tile_type < 8 + 16 + 12 || modifier.includes("triple-letter")) {
    tile_mod = "triple-letter";
  } else if (modifier.length === 0 & tile_type < 8 + 16 + 12 + 24 || modifier.includes("double-letter")) {
    tile_mod = "double-letter";
  }
  (0, _qol.addClass)(ele, [tile_mod]);
  ele.dataset.modifier = tile_mod;
  (0, _qol.style)(ele, "\n        position: absolute; \n        left: 5vw; \n        top: ".concat(top, "px;\n        transform: rotate(").concat(rotation, "deg) translate(-").concat(translation, "px,0px);\n    "));
  (0, _qol.detect)(ele, "click", letterTouch);
  letter_flow_list.push(ele);
  return ele;
}
var letterTouch = function letterTouch(e) {
  if (_main.game_running === true) {
    console.log("touch");
    if (loaded_letters.length < 8) {
      (0, _qol.undetect)(e.target, "click", letterTouch);
      (0, _qol.remove)((0, _qol.find)(".letter-spawns"), e.target);
      letter_flow_list = letter_flow_list.filter(function (letter) {
        return letter === e.target;
      });
      loadLetter(e.target);
      (0, _qol.detect)(e.target, "click", letterRem);
    }
  }
};
var letterRem = function letterRem(e) {
  console.log("rem");
  var index = loaded_letters.indexOf(e.target);
  (0, _qol.remove)((0, _qol.find)(".slot-".concat(index)), e.target);
  for (var i = index + 1; i < loaded_letters.length; i++) {
    var temp = loaded_letters[i];
    (0, _qol.remove)((0, _qol.find)(".slot-".concat(i)), temp);
    (0, _qol.render)((0, _qol.find)(".slot-".concat(i - 1)), temp);
    loaded_letters[i - 1] = temp;
  }
  loaded_letters.pop();
  (0, _qol.render)((0, _qol.find)(".letter-spawns"), letterElement(e.target.textContent, [e.target.dataset.modifier]));
};
function randomLetter() {
  var result = '';
  var characters = 'AAAAAAAAABBCCDDDDEEEEEEEEEEEEFFGGGHHIIIIIIIIIJKLLLLMMNNNNNNOOOOOOOOPPQRRRRRRSSSSTTTTTTUUUUVVWWXYYZ';
  var charactersLength = characters.length;
  result += characters.charAt(Math.floor(Math.random() * charactersLength));
  return result;
}
function loadLetter(letele) {
  (0, _qol.render)((0, _qol.find)(".slot-".concat(loaded_letters.length)), letele);
  (0, _qol.remClass)(letele, ["inflow"]);
  (0, _qol.addClass)(letele, ["loaded"]);
  (0, _qol.style)(letele, "\n        transform:rotate(0deg);\n        transform: translate(-1px,-1px);\n    ");
  loaded_letters.push(letele);
}
function cleanCards() {
  for (var i = letter_flow_list.length - 1; i >= 0; i--) {
    if (checkOffScreen(letter_flow_list[i])) {
      (0, _qol.remove)((0, _qol.find)(".letter-spawns"), letter_flow_list[i]);
      letter_flow_list.splice(i, 1);
    }
  }
}
function checkOffScreen(el) {
  return el.offsetLeft > document.body.offsetWidth + 200;
}

},{"../main":1,"./qol":2}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.real_time_left = void 0;
exports.startTimer = startTimer;
exports.timer = timer;
var countdown;
var real_time_left = exports.real_time_left = 1000;
var timerDisplay = document.querySelector('.timer');
var popup = document.getElementById("popup");
//const endTime = document.querySelector('.display__end-time');
//const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  // Clear any existing timers
  clearInterval(countdown);
  var now = Date.now();
  var then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  // Update the countdown every second
  countdown = setInterval(function () {
    var secondsLeft = Math.round((then - Date.now()) / 1000);
    exports.real_time_left = real_time_left = secondsLeft;
    // Stop the timer when it reaches zero
    if (secondsLeft < 0) {
      clearInterval(countdown);
      showPopup();
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}
function displayTimeLeft(seconds) {
  var minutes = Math.floor(seconds / 60);
  var remainderSeconds = seconds % 60;
  var display = "".concat(minutes, ":").concat(remainderSeconds < 10 ? '0' : '').concat(remainderSeconds);
  document.title = display;
  timerDisplay.textContent = display;
}
function displayEndTime(timestamp) {
  var end = new Date(timestamp);
  var hour = end.getHours();
  var adjustedHour = hour > 12 ? hour - 12 : hour;
  var minutes = end.getMinutes();
}
function startTimer() {
  // Start a 1-minute countdown (60 seconds)
  var seconds = 60;
  timer(seconds);
}

/*
buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  // Start a 1-minute countdown (60 seconds)
  const seconds = 60;
  timer(seconds);
  this.reset();
});
*/

function showPopup() {
  popup.style.display = 'block';
}

},{}]},{},[1]);
