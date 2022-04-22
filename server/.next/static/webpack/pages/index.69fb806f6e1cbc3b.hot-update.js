"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_pascal_test_solidity_update_number_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_pascal_test_solidity_update_number_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_pascal_test_solidity_update_number_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var components_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Form */ \"./components/Form.tsx\");\n/* harmony import */ var services_getWeb3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! services/getWeb3 */ \"./services/getWeb3.ts\");\n/* harmony import */ var public_Box_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! public/Box.json */ \"./public/Box.json\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), provider = ref[0], setProvider = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), account1 = ref1[0], setAccount = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), contract = ref2[0], setContract = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), values = ref3[0], setValues = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), storedValue = ref4[0], setStoredValue = ref4[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        (0,services_getWeb3__WEBPACK_IMPORTED_MODULE_5__[\"default\"])().then(function(web3) {\n            setProvider(web3);\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        createContract();\n    }, [\n        provider\n    ]);\n    var onSubmit = function() {\n        var _ref = _asyncToGenerator(_Users_pascal_test_solidity_update_number_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var response;\n            return _Users_pascal_test_solidity_update_number_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        if (!contract) {\n                            _ctx.next = 8;\n                            break;\n                        }\n                        _ctx.next = 4;\n                        return contract.methods.store(values.eth).send({\n                            from: account1\n                        });\n                    case 4:\n                        _ctx.next = 6;\n                        return contract.methods.retrieve().call();\n                    case 6:\n                        response = _ctx.sent;\n                        setStoredValue(response);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var createContract = function() {\n        var _ref = _asyncToGenerator(_Users_pascal_test_solidity_update_number_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var account, deployedNetwork, instance, response;\n            return _Users_pascal_test_solidity_update_number_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(provider && !contract)) {\n                            _ctx.next = 12;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return provider === null || provider === void 0 ? void 0 : provider.eth.getAccounts();\n                    case 3:\n                        account = _ctx.sent;\n                        deployedNetwork = public_Box_json__WEBPACK_IMPORTED_MODULE_6__.networks[5777];\n                        instance = new provider.eth.Contract(public_Box_json__WEBPACK_IMPORTED_MODULE_6__.abi, deployedNetwork && deployedNetwork.address);\n                        setAccount(account[0]);\n                        setContract(instance);\n                        _ctx.next = 10;\n                        return instance.methods.retrieve();\n                    case 10:\n                        response = _ctx.sent;\n                        setStoredValue(response);\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function createContract() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"w-56\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_Form__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    onSubmit: onSubmit,\n                    setValues: setValues\n                }, void 0, false, {\n                    fileName: \"/Users/pascal/test/solidity-update-number/server/pages/index.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        \"Stored Value : \",\n                        storedValue\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/pascal/test/solidity-update-number/server/pages/index.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/pascal/test/solidity-update-number/server/pages/index.tsx\",\n            lineNumber: 62,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/pascal/test/solidity-update-number/server/pages/index.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"fQI8eVkdQPLo83uGqiOWR5MrhDU=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXNEd0Q7d0JBQ2xETixjQUFjLENBQUNNLFFBQVEsQ0FBQyxDQUFDOzs7Ozs7UUFFN0IsQ0FBQzt3QkFmS0gsY0FBYzs7OztJQWlCcEIsTUFBTSw2RUFDSGpCLHlEQUFNOzhGQUNKb0MsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBTTs7NEZBQ2xCcEMsdURBQUk7b0JBQUNpQixRQUFRLEVBQUVBLFFBQVE7b0JBQUVOLFNBQVMsRUFBRUEsU0FBUzs7Ozs7OzRGQUM3Q3dCLENBQUc7O3dCQUFDLENBQWU7d0JBQUN2QixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEMsQ0FBQztHQW5ES1QsSUFBSTtLQUFKQSxJQUFJO0FBcURWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xuaW1wb3J0IHsgQWJpSXRlbSB9IGZyb20gXCJ3ZWIzLXV0aWxzXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCJjb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcImNvbXBvbmVudHMvRm9ybVwiO1xuaW1wb3J0IGdldFdlYjMgZnJvbSBcInNlcnZpY2VzL2dldFdlYjNcIjtcbmltcG9ydCBCb3ggZnJvbSBcInB1YmxpYy9Cb3guanNvblwiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIGV0aGVyZXVtPzogYW55O1xuICAgIHdlYjM/OiBhbnk7XG4gIH1cbn1cblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtwcm92aWRlciwgc2V0UHJvdmlkZXJdID0gdXNlU3RhdGU8V2ViMyB8IHVuZGVmaW5lZD4oKTtcbiAgY29uc3QgW2FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbY29udHJhY3QsIHNldENvbnRyYWN0XSA9IHVzZVN0YXRlPGFueT4oKTtcbiAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlPE9iaj4oe30pO1xuICBjb25zdCBbc3RvcmVkVmFsdWUsIHNldFN0b3JlZFZhbHVlXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0V2ViMygpLnRoZW4oKHdlYjMpID0+IHtcbiAgICAgIHNldFByb3ZpZGVyKHdlYjMpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjcmVhdGVDb250cmFjdCgpO1xuICB9LCBbcHJvdmlkZXJdKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChlOiBGb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGNvbnRyYWN0KSB7XG4gICAgICBhd2FpdCBjb250cmFjdC5tZXRob2RzLnN0b3JlKHZhbHVlcy5ldGgpLnNlbmQoeyBmcm9tOiBhY2NvdW50IH0pO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLnJldHJpZXZlKCkuY2FsbCgpO1xuICAgICAgc2V0U3RvcmVkVmFsdWUocmVzcG9uc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjcmVhdGVDb250cmFjdCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAocHJvdmlkZXIgJiYgIWNvbnRyYWN0KSB7XG4gICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgcHJvdmlkZXI/LmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgLy8gY29uc3QgbmV0d29ya0lkID0gYXdhaXQgcHJvdmlkZXI/LmV0aC5uZXQuZ2V0SWQoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKG5ldHdvcmtJZCwgQm94Lm5ldHdvcmtzKTtcbiAgICAgIGNvbnN0IGRlcGxveWVkTmV0d29yayA9IEJveC5uZXR3b3Jrc1s1Nzc3XTtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHByb3ZpZGVyLmV0aC5Db250cmFjdChcbiAgICAgICAgQm94LmFiaSBhcyBBYmlJdGVtW10sXG4gICAgICAgIGRlcGxveWVkTmV0d29yayAmJiBkZXBsb3llZE5ldHdvcmsuYWRkcmVzc1xuICAgICAgKTtcbiAgICAgIHNldEFjY291bnQoYWNjb3VudFswXSk7XG4gICAgICBzZXRDb250cmFjdChpbnN0YW5jZSk7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGluc3RhbmNlLm1ldGhvZHMucmV0cmlldmUoKTtcbiAgICAgIHNldFN0b3JlZFZhbHVlKHJlc3BvbnNlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTU2XCI+XG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gc2V0VmFsdWVzPXtzZXRWYWx1ZXN9IC8+XG4gICAgICAgIDxkaXY+U3RvcmVkIFZhbHVlIDoge3N0b3JlZFZhbHVlfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGF5b3V0IiwiRm9ybSIsImdldFdlYjMiLCJCb3giLCJIb21lIiwicHJvdmlkZXIiLCJzZXRQcm92aWRlciIsImFjY291bnQiLCJzZXRBY2NvdW50IiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsInZhbHVlcyIsInNldFZhbHVlcyIsInN0b3JlZFZhbHVlIiwic2V0U3RvcmVkVmFsdWUiLCJ0aGVuIiwid2ViMyIsImNyZWF0ZUNvbnRyYWN0Iiwib25TdWJtaXQiLCJlIiwicmVzcG9uc2UiLCJwcmV2ZW50RGVmYXVsdCIsIm1ldGhvZHMiLCJzdG9yZSIsImV0aCIsInNlbmQiLCJmcm9tIiwicmV0cmlldmUiLCJjYWxsIiwiZGVwbG95ZWROZXR3b3JrIiwiaW5zdGFuY2UiLCJnZXRBY2NvdW50cyIsIm5ldHdvcmtzIiwiQ29udHJhY3QiLCJhYmkiLCJhZGRyZXNzIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});