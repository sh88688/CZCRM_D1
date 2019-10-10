webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/cardContent.js":
/*!***********************************!*\
  !*** ./components/cardContent.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");
/* harmony import */ var _Styles_dashboard_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Styles/dashboard.css */ "./Styles/dashboard.css");
/* harmony import */ var _Styles_dashboard_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Styles_dashboard_css__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/tvt/Desktop/Present/Study/React/CZCRM_D1/components/cardContent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




var CardContent =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CardContent, _Component);

  function CardContent(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CardContent);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CardContent).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CardContent, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBRow"], {
        className: "my-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBCol"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx("span", {
        className: "float-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, this.props.data.primary.title), __jsx("span", {
        className: "float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, this.props.data.primary.value))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBRow"], {
        className: "my-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBCol"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBProgress"], {
        material: true,
        animated: true,
        value: this.props.data.primary.progress_value,
        height: "4px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBRow"], {
        className: "my-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBCol"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("small", {
        className: "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx("span", {
        className: "float-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, this.props.data.primary.progress_title), __jsx("span", {
        className: "float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "(".concat(this.props.data.primary.progress_value, ") %"))))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBRow"], {
        className: "my-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBCol"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx("span", {
        className: "float-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, this.props.data.secondary.title), __jsx("span", {
        className: "float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, this.props.data.secondary.value))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBRow"], {
        className: "my-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBCol"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBProgress"], {
        material: true,
        animated: true,
        value: this.props.data.secondary.progress_value,
        height: "4px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBRow"], {
        className: "my-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBCol"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("small", {
        className: "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx("span", {
        className: "float-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, this.props.data.secondary.progress_title), __jsx("span", {
        className: "float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "(".concat(this.props.data.secondary.progress_value, ") %"))))));
    }
  }]);

  return CardContent;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CardContent);

/***/ })

})
//# sourceMappingURL=dashboard.js.4ca07c692b38f8ef4212.hot-update.js.map