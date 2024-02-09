"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _hooks_useDoacoes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useDoacoes */ \"(app-pages-browser)/./src/hooks/useDoacoes.js\");\n/* harmony import */ var _components_DoacaoForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/DoacaoForm */ \"(app-pages-browser)/./src/components/DoacaoForm/index.js\");\n/* harmony import */ var _barrel_optimize_names_FaUpDown_react_icons_fa6__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FaUpDown!=!react-icons/fa6 */ \"(app-pages-browser)/./node_modules/react-icons/fa6/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { doacoes, loading, error, addDoacao } = (0,_hooks_useDoacoes__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"mt-14\",\n            children: \"Carregando doa\\xe7\\xf5es...\"\n        }, void 0, false, {\n            fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/page.js\",\n            lineNumber: 14,\n            columnNumber: 12\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"mt-14\",\n            children: [\n                \"Ocorreu um erro ao carregar as doa\\xe7\\xf5es: \",\n                error.message\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/page.js\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this);\n    }\n    const handleSubmit = async (e, formValues)=>{\n        e.preventDefault();\n        const requiredFields = [\n            \"doadorId\",\n            \"localColetaId\"\n        ];\n        const isValid = requiredFields.every((field)=>formValues[field] !== null && formValues[field] !== \"\");\n        if (isValid) {\n            console.log(\"Formul\\xe1rio enviado:\", formValues);\n            await addDoacao(formValues);\n            window.location.reload();\n        } else {\n            alert(\"Preencha todos os campos obrigat\\xf3rios!\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-14\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DoacaoForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                handleSubmit: handleSubmit\n            }, void 0, false, {\n                fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/page.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            doacoes.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-around flex-wrap gap-24 mt-8\",\n                children: doacoes.map((doacao)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"cursor-pointer\",\n                        onClick: ()=>router.push(\"/doacoes/\".concat(doacao.id)),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-w-xs rounded overflow-hidden shadow-lg bg-white p-3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"px-6 py-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \" flex flex-col gap-2 items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-xl\",\n                                            children: doacao.doador.nome\n                                        }, void 0, false, {\n                                            fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/page.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaUpDown_react_icons_fa6__WEBPACK_IMPORTED_MODULE_5__.FaUpDown, {}, void 0, false, {\n                                            fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/page.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-xl\",\n                                            children: doacao.localColeta.nome\n                                        }, void 0, false, {\n                                            fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/page.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: doacao.data\n                                        }, void 0, false, {\n                                            fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/page.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/page.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/page.js\",\n                                lineNumber: 53,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/page.js\",\n                            lineNumber: 52,\n                            columnNumber: 15\n                        }, this)\n                    }, doacao.id, false, {\n                        fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/page.js\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/page.js\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Nenhuma doa\\xe7\\xe3o encontrado.\"\n            }, void 0, false, {\n                fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/page.js\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/page.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"Q2IkJjxdmwLHQT9H8v6FQNtpa5U=\", false, function() {\n    return [\n        _hooks_useDoacoes__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ3lDO0FBQ0c7QUFDQTtBQUNLO0FBQ047QUFFNUIsU0FBU007O0lBQ3RCLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsU0FBUyxFQUFFLEdBQUdQLDZEQUFVQTtJQUN6RCxNQUFNUSxTQUFTVCwwREFBU0E7SUFFeEJELGdEQUFTQSxDQUFDLEtBQU8sR0FBRyxFQUFFO0lBQ3RCLElBQUlPLFNBQVM7UUFDWCxxQkFBTyw4REFBQ0k7WUFBRUMsV0FBVTtzQkFBUTs7Ozs7O0lBQzlCO0lBRUEsSUFBSUosT0FBTztRQUNULHFCQUNFLDhEQUFDRztZQUFFQyxXQUFVOztnQkFBUTtnQkFDc0JKLE1BQU1LLE9BQU87Ozs7Ozs7SUFHNUQ7SUFFQSxNQUFNQyxlQUFlLE9BQU9DLEdBQUdDO1FBQzdCRCxFQUFFRSxjQUFjO1FBQ2hCLE1BQU1DLGlCQUFpQjtZQUFDO1lBQVk7U0FBZ0I7UUFFcEQsTUFBTUMsVUFBVUQsZUFBZUUsS0FBSyxDQUNsQyxDQUFDQyxRQUFVTCxVQUFVLENBQUNLLE1BQU0sS0FBSyxRQUFRTCxVQUFVLENBQUNLLE1BQU0sS0FBSztRQUVqRSxJQUFJRixTQUFTO1lBQ1hHLFFBQVFDLEdBQUcsQ0FBQywwQkFBdUJQO1lBQ25DLE1BQU1QLFVBQVVPO1lBQ2hCUSxPQUFPQyxRQUFRLENBQUNDLE1BQU07UUFDeEIsT0FBTztZQUNMQyxNQUFNO1FBQ1I7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJaEIsV0FBVTs7MEJBQ2IsOERBQUNULDhEQUFVQTtnQkFBQ1csY0FBY0E7Ozs7OztZQUN6QlIsUUFBUXVCLE1BQU0sR0FBRyxrQkFDaEIsOERBQUNEO2dCQUFJaEIsV0FBVTswQkFDWk4sUUFBUXdCLEdBQUcsQ0FBQyxDQUFDQyx1QkFDWiw4REFBQ0M7d0JBQ0NwQixXQUFVO3dCQUVWcUIsU0FBUyxJQUFNdkIsT0FBT3dCLElBQUksQ0FBQyxZQUFzQixPQUFWSCxPQUFPSSxFQUFFO2tDQUVoRCw0RUFBQ1A7NEJBQUloQixXQUFVO3NDQUNiLDRFQUFDZ0I7Z0NBQUloQixXQUFVOzBDQUNiLDRFQUFDZ0I7b0NBQUloQixXQUFVOztzREFDYiw4REFBQ0Q7NENBQUVDLFdBQVU7c0RBQVdtQixPQUFPSyxNQUFNLENBQUNDLElBQUk7Ozs7OztzREFDMUMsOERBQUNqQyxxRkFBUUE7Ozs7O3NEQUNULDhEQUFDTzs0Q0FBRUMsV0FBVTtzREFBV21CLE9BQU9PLFdBQVcsQ0FBQ0QsSUFBSTs7Ozs7O3NEQUMvQyw4REFBQzFCO3NEQUFHb0IsT0FBT1EsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFUaEJSLE9BQU9JLEVBQUU7Ozs7Ozs7OztxQ0FpQnBCLDhEQUFDUDswQkFBSTs7Ozs7Ozs7Ozs7O0FBSWI7R0E5RHdCdkI7O1FBQ3lCSCx5REFBVUE7UUFDMUNELHNEQUFTQTs7O0tBRkZJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgUmVhY3QsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHVzZURvYWNvZXMgZnJvbSBcIkAvaG9va3MvdXNlRG9hY29lc1wiO1xuaW1wb3J0IERvYWNhb0Zvcm0gZnJvbSBcIkAvY29tcG9uZW50cy9Eb2FjYW9Gb3JtXCI7XG5pbXBvcnQgeyBGYVVwRG93biB9IGZyb20gXCJyZWFjdC1pY29ucy9mYTZcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBkb2Fjb2VzLCBsb2FkaW5nLCBlcnJvciwgYWRkRG9hY2FvIH0gPSB1c2VEb2Fjb2VzKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7fSwgW10pO1xuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJtdC0xNFwiPkNhcnJlZ2FuZG8gZG9hw6fDtWVzLi4uPC9wPjtcbiAgfVxuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiAoXG4gICAgICA8cCBjbGFzc05hbWU9XCJtdC0xNFwiPlxuICAgICAgICBPY29ycmV1IHVtIGVycm8gYW8gY2FycmVnYXIgYXMgZG9hw6fDtWVzOiB7ZXJyb3IubWVzc2FnZX1cbiAgICAgIDwvcD5cbiAgICApO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUsIGZvcm1WYWx1ZXMpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcmVxdWlyZWRGaWVsZHMgPSBbXCJkb2Fkb3JJZFwiLCBcImxvY2FsQ29sZXRhSWRcIl07XG5cbiAgICBjb25zdCBpc1ZhbGlkID0gcmVxdWlyZWRGaWVsZHMuZXZlcnkoXG4gICAgICAoZmllbGQpID0+IGZvcm1WYWx1ZXNbZmllbGRdICE9PSBudWxsICYmIGZvcm1WYWx1ZXNbZmllbGRdICE9PSBcIlwiXG4gICAgKTtcbiAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgY29uc29sZS5sb2coXCJGb3JtdWzDoXJpbyBlbnZpYWRvOlwiLCBmb3JtVmFsdWVzKTtcbiAgICAgIGF3YWl0IGFkZERvYWNhbyhmb3JtVmFsdWVzKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoXCJQcmVlbmNoYSB0b2RvcyBvcyBjYW1wb3Mgb2JyaWdhdMOzcmlvcyFcIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xNFwiPlxuICAgICAgPERvYWNhb0Zvcm0gaGFuZGxlU3VibWl0PXtoYW5kbGVTdWJtaXR9IC8+XG4gICAgICB7ZG9hY29lcy5sZW5ndGggPiAwID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1hcm91bmQgZmxleC13cmFwIGdhcC0yNCBtdC04XCI+XG4gICAgICAgICAge2RvYWNvZXMubWFwKChkb2FjYW8pID0+IChcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAga2V5PXtkb2FjYW8uaWR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvZG9hY29lcy8ke2RvYWNhby5pZH1gKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy14cyByb3VuZGVkIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctbGcgYmctd2hpdGUgcC0zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggZmxleC1jb2wgZ2FwLTIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGxcIj57ZG9hY2FvLmRvYWRvci5ub21lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPEZhVXBEb3duLz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bFwiPntkb2FjYW8ubG9jYWxDb2xldGEubm9tZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPntkb2FjYW8uZGF0YX08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdj5OZW5odW1hIGRvYcOnw6NvIGVuY29udHJhZG8uPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwidXNlRG9hY29lcyIsIkRvYWNhb0Zvcm0iLCJGYVVwRG93biIsIkhvbWUiLCJkb2Fjb2VzIiwibG9hZGluZyIsImVycm9yIiwiYWRkRG9hY2FvIiwicm91dGVyIiwicCIsImNsYXNzTmFtZSIsIm1lc3NhZ2UiLCJoYW5kbGVTdWJtaXQiLCJlIiwiZm9ybVZhbHVlcyIsInByZXZlbnREZWZhdWx0IiwicmVxdWlyZWRGaWVsZHMiLCJpc1ZhbGlkIiwiZXZlcnkiLCJmaWVsZCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImFsZXJ0IiwiZGl2IiwibGVuZ3RoIiwibWFwIiwiZG9hY2FvIiwiYSIsIm9uQ2xpY2siLCJwdXNoIiwiaWQiLCJkb2Fkb3IiLCJub21lIiwibG9jYWxDb2xldGEiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});