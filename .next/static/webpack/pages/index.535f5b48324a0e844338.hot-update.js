/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ProductsFeed.js":
/*!****************************************!*\
  !*** ./src/components/ProductsFeed.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product */ \"./src/components/Product.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/josemendoza/Documents/Proyectos/portfolio/amazon-clone/frontend-amazon/src/components/ProductsFeed.js\";\n\n\n\nfunction ProductsFeed(_ref) {\n  var _this = this;\n\n  var products = _ref.products;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto\",\n    children: [products.slice(0, 4).map(function (_ref2) {\n      var id = _ref2.id,\n          title = _ref2.title,\n          price = _ref2.price,\n          description = _ref2.description,\n          category = _ref2.category,\n          image = _ref2.image;\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_2__.default, {\n        id: id,\n        title: title,\n        price: price,\n        description: description,\n        category: category,\n        image: image\n      }, id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 17\n      }, _this);\n    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      className: \"md:col-span-full\",\n      src: \"https://links.papareact.com/dyz\",\n      alt: \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"md:col-span-2\",\n      children: products.slice(4, 5).map(function (_ref3) {\n        var id = _ref3.id,\n            title = _ref3.title,\n            price = _ref3.price,\n            description = _ref3.description,\n            category = _ref3.category,\n            image = _ref3.image;\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_2__.default, {\n          id: id,\n          title: title,\n          price: price,\n          description: description,\n          category: category,\n          image: image\n        }, id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, this);\n}\n\n_c = ProductsFeed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductsFeed);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductsFeed\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdHNGZWVkLmpzP2Y5NGYiXSwibmFtZXMiOlsiUHJvZHVjdHNGZWVkIiwicHJvZHVjdHMiLCJzbGljZSIsIm1hcCIsImlkIiwidGl0bGUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxZQUFULE9BQW9DO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQ2hDLHNCQUNJO0FBQUssYUFBUyxFQUFDLHlGQUFmO0FBQUEsZUFDS0EsUUFBUSxDQUFDQyxLQUFULENBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFvQkMsR0FBcEIsQ0FBd0I7QUFBQSxVQUFHQyxFQUFILFNBQUdBLEVBQUg7QUFBQSxVQUFPQyxLQUFQLFNBQU9BLEtBQVA7QUFBQSxVQUFjQyxLQUFkLFNBQWNBLEtBQWQ7QUFBQSxVQUFxQkMsV0FBckIsU0FBcUJBLFdBQXJCO0FBQUEsVUFBa0NDLFFBQWxDLFNBQWtDQSxRQUFsQztBQUFBLFVBQTRDQyxLQUE1QyxTQUE0Q0EsS0FBNUM7QUFBQSwwQkFDckIsOERBQUMsNkNBQUQ7QUFFSSxVQUFFLEVBQUVMLEVBRlI7QUFHSSxhQUFLLEVBQUVDLEtBSFg7QUFJSSxhQUFLLEVBQUVDLEtBSlg7QUFLSSxtQkFBVyxFQUFFQyxXQUxqQjtBQU1JLGdCQUFRLEVBQUVDLFFBTmQ7QUFPSSxhQUFLLEVBQUVDO0FBUFgsU0FDU0wsRUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRHFCO0FBQUEsS0FBeEIsQ0FETCxlQVlJO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQWtDLFNBQUcsRUFBQyxpQ0FBdEM7QUFBd0UsU0FBRyxFQUFDO0FBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaSixlQWFJO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQSxnQkFDS0gsUUFBUSxDQUFDQyxLQUFULENBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFvQkMsR0FBcEIsQ0FBd0I7QUFBQSxZQUFHQyxFQUFILFNBQUdBLEVBQUg7QUFBQSxZQUFPQyxLQUFQLFNBQU9BLEtBQVA7QUFBQSxZQUFjQyxLQUFkLFNBQWNBLEtBQWQ7QUFBQSxZQUFxQkMsV0FBckIsU0FBcUJBLFdBQXJCO0FBQUEsWUFBa0NDLFFBQWxDLFNBQWtDQSxRQUFsQztBQUFBLFlBQTRDQyxLQUE1QyxTQUE0Q0EsS0FBNUM7QUFBQSw0QkFDckIsOERBQUMsNkNBQUQ7QUFFSSxZQUFFLEVBQUVMLEVBRlI7QUFHSSxlQUFLLEVBQUVDLEtBSFg7QUFJSSxlQUFLLEVBQUVDLEtBSlg7QUFLSSxxQkFBVyxFQUFFQyxXQUxqQjtBQU1JLGtCQUFRLEVBQUVDLFFBTmQ7QUFPSSxlQUFLLEVBQUVDO0FBUFgsV0FDU0wsRUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURxQjtBQUFBLE9BQXhCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNkJIOztLQTlCUUosWTtBQWdDVCwrREFBZUEsWUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RzRmVlZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4vUHJvZHVjdCdcblxuZnVuY3Rpb24gUHJvZHVjdHNGZWVkKHsgcHJvZHVjdHMgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWZsb3ctcm93LWRlbnNlIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIHhsOmdyaWQtY29scy00IG1kOi1tdC01MiBteC1hdXRvXCI+XG4gICAgICAgICAgICB7cHJvZHVjdHMuc2xpY2UoMCw0KS5tYXAoKHsgaWQsIHRpdGxlLCBwcmljZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5LCBpbWFnZSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPFByb2R1Y3RcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1kOmNvbC1zcGFuLWZ1bGxcIiBzcmM9XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vZHl6XCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tMlwiID4gXG4gICAgICAgICAgICAgICAge3Byb2R1Y3RzLnNsaWNlKDQsNSkubWFwKCh7IGlkLCB0aXRsZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSwgaW1hZ2UgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzRmVlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ProductsFeed.js\n");

/***/ })

});