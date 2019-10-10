webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/pieChart.js":
/*!********************************!*\
  !*** ./components/pieChart.js ***!
  \********************************/
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
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var _Styles_dashboard_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Styles/dashboard.css */ "./Styles/dashboard.css");
/* harmony import */ var _Styles_dashboard_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Styles_dashboard_css__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/tvt/Desktop/Present/Study/React/CZCRM_D1/components/pieChart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



var options = {
  legend: {
    display: false
  },
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  cutoutPercentage: 80,
  layout: {
    padding: 0
  },
  tooltips: {
    enabled: true,
    mode: 'index',
    intersect: false,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: '#fff',
    titleFontColor: '#263238',
    bodyFontColor: '#263238',
    footerFontColor: '#263238'
  }
};

var PieChart =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PieChart, _Component);

  function PieChart(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PieChart);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PieChart).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PieChart, [{
    key: "render",
    value: function render() {
      var SUM = this.props.data.reduce(function (accum, _ref) {
        var value = _ref.value;
        return accum + value;
      }, 0);
      var DATA = {
        labels: this.props.data.map(function (data) {
          return data.name;
        }),
        datasets: [{
          data: this.props.data.map(function (data) {
            return data.value;
          }),
          backgroundColor: ["#e53935", "#ffa000", "#303f9f"],
          hoverBackgroundColor: ["#f44336", "#ffb300", "#3f51b5"]
        }]
      };
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__["Doughnut"], {
        key: SUM,
        data: DATA,
        options: options,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      })), __jsx("div", {
        className: "stats",
        style: {
          overflow: "auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, DATA.labels.map(function (label, index) {
        return __jsx("div", {
          className: "device",
          key: label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, __jsx("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, DATA.labels[index]), __jsx("p", {
          className: "h6",
          style: {
            color: "".concat(DATA.datasets[0].backgroundColor[index])
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, Math.floor(DATA.datasets[0].data[index] / SUM * 100), "%"));
      })));
    }
  }]);

  return PieChart;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PieChart);

/***/ })

})
//# sourceMappingURL=dashboard.js.b63740679c51620cb3ce.hot-update.js.map