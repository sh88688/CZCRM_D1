module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/css/all.min.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/bootstrap-css-only/css/bootstrap.min.css":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap-css-only/css/bootstrap.min.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/mdbreact/dist/css/mdb.css":
/*!************************************************!*\
  !*** ./node_modules/mdbreact/dist/css/mdb.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/auth.js":
/*!***********************!*\
  !*** ./pages/auth.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mdbreact */ "mdbreact");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mdbreact__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-css-only/css/bootstrap.min.css */ "./node_modules/bootstrap-css-only/css/bootstrap.min.css");
/* harmony import */ var bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mdbreact/dist/css/mdb.css */ "./node_modules/mdbreact/dist/css/mdb.css");
/* harmony import */ var mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/tvt/Desktop/Present/Study/React/CZCRM_D1/pages/auth.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
 // import fetchCall from '../components/fetchCaller';
//import Config from "../static/configs/urlConfig.json";






class AuthPage extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "clickHandler", event => {
      event.preventDefault();
      window.location = "/dashboard";
      /*
      const url = new URL(`http://api.cz-tuts.com/login`);
      const fetchCallOptions = {
            body: JSON.stringify(reqBody),
            method:'post',
            headers: {
            'Content-Type': 'application/json' 
          },
          credentials:'include'
        };
        const result = fetchCall(url, fetchCallOptions, "json");
       const reqBody={
        email: this.state.email,
        password: this.state.password
      };
      const url = new URL(`http://api.cz-tuts.com/login`);
      const fetchCallOptions = {
            body: JSON.stringify(reqBody),
            method:'post',
            headers: {
            'Content-Type': 'application/json' 
          },
          credentials:'include'
        };
       const result = fetchCall(url, fetchCallOptions, "json");
       
      result.then(function(data){
      // console.log(data);
       if(data.status){
        // toaster.success("Successfully Logged In");
       document.cookie='nodeSessID='+data.nodeSessID+";maxAge=3600000;path='/';domain='cz-tuts.com'";
         window.location="/dashboard";
       }
       else{
        alert(data.message);
       }
      });
      */
    });

    this.inputHandler = this.inputHandler.bind(this); // this.fetchCaller=this.fetchCaller.bind(this);

    this.state = {
      email: "",
      password: ""
    };
  } //  async  fetchCaller(url,options){
  //   try{
  //     let response=await fetch(url,options);
  //     let data=await response.json();
  //     return data;
  //   }
  //   catch(err){
  //     console.log(err);
  //   }
  //  } 


  inputHandler(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBContainer"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBRow"], {
      center: "true",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBCol"], {
      md: "5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBCard"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx("style", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, `
            .card{margin-top:20%}
            `), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBCardBody"], {
      className: "mx-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2374434637" + " " + "text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, __jsx("img", {
      src: "static/img/CZentrixLogo.png",
      height: "50",
      width: "150",
      className: "jsx-2374434637",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    })), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBInput"], {
      label: "Your email",
      group: true,
      type: "email",
      error: "wrong",
      success: "right",
      name: "email",
      onChange: this.inputHandler,
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBInput"], {
      label: "Your password",
      group: true,
      type: "password",
      name: "password",
      validate: true,
      containerClass: "mb-0",
      onChange: this.inputHandler,
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-2374434637" + " " + "font-small blue-text d-flex justify-content-end pb-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, "Forgot", __jsx("a", {
      href: "#!",
      className: "jsx-2374434637" + " " + "blue-text ml-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, "Password?")), __jsx("div", {
      className: "jsx-2374434637" + " " + "text-center mb-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBBtn"], {
      type: "button",
      gradient: "blue",
      rounded: true,
      className: "btn-block z-depth-1a",
      onClick: this.clickHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, "Sign in")), __jsx("p", {
      className: "jsx-2374434637" + " " + "font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, "or Sign in with:"), __jsx("div", {
      className: "jsx-2374434637" + " " + "row my-3 d-flex justify-content-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBBtn"], {
      type: "button",
      color: "white",
      rounded: true,
      className: "mr-md-3 z-depth-1a",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBIcon"], {
      fab: true,
      icon: "facebook-f",
      className: "blue-text text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    })), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBBtn"], {
      type: "button",
      color: "white",
      rounded: true,
      className: "mr-md-3 z-depth-1a",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBIcon"], {
      fab: true,
      icon: "twitter",
      className: "blue-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    })), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBBtn"], {
      type: "button",
      color: "white",
      rounded: true,
      className: "z-depth-1a",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBIcon"], {
      fab: true,
      icon: "google-plus-g",
      className: "blue-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    })))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBModalFooter"], {
      className: "mx-5 pt-3 mb-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-2374434637" + " " + "font-small grey-text d-flex justify-content-end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, "Not a member?", __jsx("a", {
      href: "/register",
      className: "jsx-2374434637" + " " + "blue-text ml-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, "Sign Up"))))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBCol"], {
      md: "5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2374434637" + " " + "left-card-login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, __jsx("img", {
      src: "static/img/worldmap.png",
      className: "jsx-2374434637",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2374434637",
      __self: this
    }, ".left-card-login{margin-top:40%;}.form-elegant .font-small{font-size:0.8rem;}.form-elegant .z-depth-1a{-webkit-box-shadow:0 2px 5px 0 rgba(55,161,255,0.26),0 4px 12px 0 rgba(121,155,254,0.25);box-shadow:0 2px 5px 0 rgba(55,161,255,0.26),0 4px 12px 0 rgba(121,155,254,0.25);}.form-elegant .z-depth-1-half,.form-elegant .btn:hover{-webkit-box-shadow:0 5px 11px 0 rgba(85,182,255,0.28),0 4px 15px 0 rgba(36,133,255,0.15);box-shadow:0 5px 11px 0 rgba(85,182,255,0.28),0 4px 15px 0 rgba(36,133,255,0.15);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90dnQvRGVza3RvcC9QcmVzZW50L1N0dWR5L1JlYWN0L0NaQ1JNX0QxL3BhZ2VzL2F1dGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0x5QixBQUtNLEFBRXdCLEFBRytFLEFBS0EsZUFWdEcsRUFFd0Isd0VBSXNFLEFBS0EsaUZBTEMsQUFLQSIsImZpbGUiOiIvVXNlcnMvdHZ0L0Rlc2t0b3AvUHJlc2VudC9TdHVkeS9SZWFjdC9DWkNSTV9EMS9wYWdlcy9hdXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IGZldGNoQ2FsbCBmcm9tICcuLi9jb21wb25lbnRzL2ZldGNoQ2FsbGVyJztcbi8vaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vc3RhdGljL2NvbmZpZ3MvdXJsQ29uZmlnLmpzb25cIjtcbmltcG9ydCB7IE1EQkNvbnRhaW5lciwgTURCUm93LCBNREJDb2wsIE1EQkNhcmQsIE1EQkNhcmRCb2R5LCBNREJJbnB1dCwgTURCQnRuLCBNREJJY29uLCBNREJNb2RhbEZvb3RlciB9IGZyb20gJ21kYnJlYWN0JztcbmltcG9ydCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzc1wiO1xuaW1wb3J0ICdib290c3RyYXAtY3NzLW9ubHkvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCAnbWRicmVhY3QvZGlzdC9jc3MvbWRiLmNzcyc7XG5cbmNsYXNzICBBdXRoUGFnZSBleHRlbmRzIENvbXBvbmVudCAge1xuICBcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmlucHV0SGFuZGxlcj10aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMuZmV0Y2hDYWxsZXI9dGhpcy5mZXRjaENhbGxlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGU9e2VtYWlsOlwiXCIscGFzc3dvcmQ6XCJcIn1cbiAgfVxuXG4gIC8vICBhc3luYyAgZmV0Y2hDYWxsZXIodXJsLG9wdGlvbnMpe1xuICAvLyAgIHRyeXtcbiAgICAgXG4gIC8vICAgICBsZXQgcmVzcG9uc2U9YXdhaXQgZmV0Y2godXJsLG9wdGlvbnMpO1xuICAgICAgXG4gIC8vICAgICBsZXQgZGF0YT1hd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIC8vICAgICByZXR1cm4gZGF0YTtcbiAgLy8gICB9XG4gIC8vICAgY2F0Y2goZXJyKXtcbiAgLy8gICAgIGNvbnNvbGUubG9nKGVycik7XG4gIC8vICAgfVxuICAgIFxuICAvLyAgfSBcbiAgIFxuICBcbiAgY2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB3aW5kb3cubG9jYXRpb249XCIvZGFzaGJvYXJkXCI7XG4gICAgLypcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGBodHRwOi8vYXBpLmN6LXR1dHMuY29tL2xvZ2luYCk7XG4gICAgY29uc3QgZmV0Y2hDYWxsT3B0aW9ucyA9IHtcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXFCb2R5KSxcbiAgICAgICAgICBtZXRob2Q6J3Bvc3QnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIFxuICAgICAgICB9LFxuICAgICAgICBjcmVkZW50aWFsczonaW5jbHVkZSdcbiAgICAgIH07XG4gICAgICBjb25zdCByZXN1bHQgPSBmZXRjaENhbGwodXJsLCBmZXRjaENhbGxPcHRpb25zLCBcImpzb25cIik7XG5cbiAgICBjb25zdCByZXFCb2R5PXtcbiAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxuICAgICAgcGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmRcbiAgICB9O1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYGh0dHA6Ly9hcGkuY3otdHV0cy5jb20vbG9naW5gKTtcbiAgICBjb25zdCBmZXRjaENhbGxPcHRpb25zID0ge1xuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcUJvZHkpLFxuICAgICAgICAgIG1ldGhvZDoncG9zdCcsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWRlbnRpYWxzOidpbmNsdWRlJ1xuICAgICAgfTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGZldGNoQ2FsbCh1cmwsIGZldGNoQ2FsbE9wdGlvbnMsIFwianNvblwiKTtcbiAgICAgXG4gICAgcmVzdWx0LnRoZW4oZnVuY3Rpb24oZGF0YSl7XG4gICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgaWYoZGF0YS5zdGF0dXMpe1xuICAgICAgLy8gdG9hc3Rlci5zdWNjZXNzKFwiU3VjY2Vzc2Z1bGx5IExvZ2dlZCBJblwiKTtcbiAgICAgZG9jdW1lbnQuY29va2llPSdub2RlU2Vzc0lEPScrZGF0YS5ub2RlU2Vzc0lEK1wiO21heEFnZT0zNjAwMDAwO3BhdGg9Jy8nO2RvbWFpbj0nY3otdHV0cy5jb20nXCI7XG4gICAgICAgd2luZG93LmxvY2F0aW9uPVwiL2Rhc2hib2FyZFwiO1xuICAgICB9XG4gICAgIGVsc2V7XG4gICAgICBhbGVydChkYXRhLm1lc3NhZ2UpO1xuICAgICB9XG4gIH0pO1xuKi9cbiAgfVxuICAgaW5wdXRIYW5kbGVyKGV2ZW50KXtcbiAgICBcbiAgICB0aGlzLnNldFN0YXRlKHtbZXZlbnQudGFyZ2V0Lm5hbWVdOmV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICB9XG4gIHJlbmRlcigpe1xuICByZXR1cm4gKFxuICAgIDxNREJDb250YWluZXIgPlxuICAgICAgPE1EQlJvdyBjZW50ZXI9XCJ0cnVlXCIgPlxuICAgICAgICA8TURCQ29sIG1kPVwiNVwiPlxuICAgICAgICAgIDxNREJDYXJkID5cbiAgICAgICAgICAgIDxzdHlsZT57YFxuICAgICAgICAgICAgLmNhcmR7bWFyZ2luLXRvcDoyMCV9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8TURCQ2FyZEJvZHkgY2xhc3NOYW1lPVwibXgtNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICA8aW1nIHNyYz1cInN0YXRpYy9pbWcvQ1plbnRyaXhMb2dvLnBuZ1wiIGhlaWdodD1cIjUwXCIgd2lkdGg9XCIxNTBcIj48L2ltZz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxNREJJbnB1dFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiWW91ciBlbWFpbFwiXG4gICAgICAgICAgICAgICAgZ3JvdXBcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIGVycm9yPVwid3JvbmdcIlxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgbmFtZSA9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyfVxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxNREJJbnB1dFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiWW91ciBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgZ3JvdXBcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVcbiAgICAgICAgICAgICAgICBjb250YWluZXJDbGFzcz1cIm1iLTBcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlcn1cbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNtYWxsIGJsdWUtdGV4dCBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBwYi0zXCI+XG4gICAgICAgICAgICAgICAgRm9yZ290XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMhXCIgY2xhc3NOYW1lPVwiYmx1ZS10ZXh0IG1sLTFcIj5cblxuICAgICAgICAgICAgICAgICAgUGFzc3dvcmQ/XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItM1wiPlxuICAgICAgICAgICAgICAgIDxNREJCdG5cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgZ3JhZGllbnQ9XCJibHVlXCJcbiAgICAgICAgICAgICAgICAgIHJvdW5kZWRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1ibG9jayB6LWRlcHRoLTFhXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrID17dGhpcy5jbGlja0hhbmRsZXJ9PlxuICAgICAgICAgICAgICAgICAgU2lnbiBpblxuICAgICAgICAgICAgICAgIDwvTURCQnRuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zbWFsbCBkYXJrLWdyZXktdGV4dCB0ZXh0LXJpZ2h0IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1iLTMgcHQtMlwiPlxuXG4gICAgICAgICAgICAgICAgb3IgU2lnbiBpbiB3aXRoOlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG15LTMgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8TURCQnRuXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgcm91bmRlZFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItbWQtMyB6LWRlcHRoLTFhXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8TURCSWNvbiBmYWIgaWNvbj1cImZhY2Vib29rLWZcIiBjbGFzc05hbWU9XCJibHVlLXRleHQgdGV4dC1jZW50ZXJcIiAvPlxuICAgICAgICAgICAgICAgIDwvTURCQnRuPlxuICAgICAgICAgICAgICAgIDxNREJCdG5cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICByb3VuZGVkXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci1tZC0zIHotZGVwdGgtMWFcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxNREJJY29uIGZhYiBpY29uPVwidHdpdHRlclwiIGNsYXNzTmFtZT1cImJsdWUtdGV4dFwiIC8+XG4gICAgICAgICAgICAgICAgPC9NREJCdG4+XG4gICAgICAgICAgICAgICAgPE1EQkJ0blxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgIHJvdW5kZWRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInotZGVwdGgtMWFcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxNREJJY29uIGZhYiBpY29uPVwiZ29vZ2xlLXBsdXMtZ1wiIGNsYXNzTmFtZT1cImJsdWUtdGV4dFwiIC8+XG4gICAgICAgICAgICAgICAgPC9NREJCdG4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9NREJDYXJkQm9keT5cbiAgICAgICAgICAgIDxNREJNb2RhbEZvb3RlciBjbGFzc05hbWU9XCJteC01IHB0LTMgbWItMVwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNtYWxsIGdyZXktdGV4dCBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICAgICAgICAgIE5vdCBhIG1lbWJlcj9cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3JlZ2lzdGVyXCIgY2xhc3NOYW1lPVwiYmx1ZS10ZXh0IG1sLTFcIj5cblxuICAgICAgICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9NREJNb2RhbEZvb3Rlcj5cbiAgICAgICAgICA8L01EQkNhcmQ+XG4gICAgICAgIDwvTURCQ29sPlxuICAgICAgICA8TURCQ29sIG1kPVwiNVwiPlxuICAgICAgICBcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LWNhcmQtbG9naW5cIj5cbiAgICAgICAgICAgICA8aW1nIHNyYz1cInN0YXRpYy9pbWcvd29ybGRtYXAucG5nXCI+PC9pbWc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIFxuICAgICAgICA8L01EQkNvbD5cbiAgICAgIDwvTURCUm93PlxuICAgICBcbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICBcbiAgICAgIC5sZWZ0LWNhcmQtbG9naW57XG4gICAgICAgIG1hcmdpbi10b3A6NDAlXG4gICAgICB9XG4gICAgICAgIC5mb3JtLWVsZWdhbnQgLmZvbnQtc21hbGwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07IH1cbiAgICAgICAgICBcbiAgICAgICAgICAuZm9ybS1lbGVnYW50IC56LWRlcHRoLTFhIHtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSg1NSwgMTYxLCAyNTUsIDAuMjYpLCAwIDRweCAxMnB4IDAgcmdiYSgxMjEsIDE1NSwgMjU0LCAwLjI1KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoNTUsIDE2MSwgMjU1LCAwLjI2KSwgMCA0cHggMTJweCAwIHJnYmEoMTIxLCAxNTUsIDI1NCwgMC4yNSk7IH1cbiAgICAgICAgICBcbiAgICAgICAgICAuZm9ybS1lbGVnYW50IC56LWRlcHRoLTEtaGFsZixcbiAgICAgICAgICAuZm9ybS1lbGVnYW50IC5idG46aG92ZXIge1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSg4NSwgMTgyLCAyNTUsIDAuMjgpLCAwIDRweCAxNXB4IDAgcmdiYSgzNiwgMTMzLCAyNTUsIDAuMTUpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoODUsIDE4MiwgMjU1LCAwLjI4KSwgMCA0cHggMTVweCAwIHJnYmEoMzYsIDEzMywgMjU1LCAwLjE1KTsgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTURCQ29udGFpbmVyPlxuICApO1xufVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0aFBhZ2U7Il19 */\n/*@ sourceURL=/Users/tvt/Desktop/Present/Study/React/CZCRM_D1/pages/auth.js */"));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (AuthPage);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/auth.js */ "./pages/auth.js");
var _jsxFileName = "/Users/tvt/Desktop/Present/Study/React/CZCRM_D1/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import Fetch from 'isomorphic-unfetch';
// import Layout from '../components/layout';



class Index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx(_pages_auth_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tvt/Desktop/Present/Study/React/CZCRM_D1/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "mdbreact":
/*!***************************!*\
  !*** external "mdbreact" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mdbreact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map