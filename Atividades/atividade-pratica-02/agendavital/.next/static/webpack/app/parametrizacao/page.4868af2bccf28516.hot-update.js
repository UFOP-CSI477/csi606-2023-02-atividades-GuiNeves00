"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/parametrizacao/page",{

/***/ "(app-pages-browser)/./src/app/parametrizacao/components/UpdateForm/index.js":
/*!***************************************************************!*\
  !*** ./src/app/parametrizacao/components/UpdateForm/index.js ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UpdateForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_InputSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/InputSelect */ \"(app-pages-browser)/./src/components/InputSelect/index.js\");\n/* harmony import */ var _components_InputText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/InputText */ \"(app-pages-browser)/./src/components/InputText/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction UpdateForm(param) {\n    let { elementTitle, elementSubtitle, elements, updateElement, deleteElement, getElementById, selectOptions, selectOptionViewName, selectOptionLabel, selectOptionValue } = param;\n    _s();\n    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [selectedPropOption, setSelectedPropOption] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [newElementName, setNewElementName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [editField, setEditField] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const requiredFields = [\n            \"nome\"\n        ];\n        const isValid = requiredFields.every((field)=>newElementName !== null && newElementName.trim() !== \"\");\n        if (isValid) {\n            let element = await getElementById(selectedOption);\n            element.nome = newElementName;\n            element[selectOptionValue] = selectedPropOption;\n            await updateElement(element.id, element);\n            setEditField(!editField);\n        } else {\n            alert(\"Preencha todos os campos obrigat\\xf3rios!\");\n        }\n    };\n    const handleCancel = ()=>{\n        setEditField(!editField);\n        const element = elements.find((el)=>el.id === selectedOption);\n        setNewElementName(element.nome);\n    };\n    const handleEdit = ()=>{\n        setEditField(!editField);\n    };\n    const handleDelete = async ()=>{\n        await deleteElement(selectedOption);\n        setSelectedOption(\"\");\n        window.location.reload();\n    };\n    const handleSetSelectedOption = (option)=>{\n        setSelectedOption(option);\n        const element = elements.find((el)=>el.id === option);\n        setNewElementName(element.nome);\n        console.log(element);\n        if (element[selectOptionLabel].id) {}\n        setSelectedPropOption(element[selectOptionValue]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4 bg-white rounded shadow-md\",\n        children: [\n            !editField && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputSelect__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                label: \"Escolha um(a) \".concat(elementTitle, \" para editar\"),\n                options: elements,\n                onChange: (e)=>handleSetSelectedOption(e.target.value),\n                value: selectedOption,\n                optionViewName: \"nome\"\n            }, void 0, false, {\n                fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/parametrizacao/components/UpdateForm/index.js\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, this),\n            editField && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputText__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            label: \"Edite o nome do(a) \".concat(elementTitle),\n                            value: newElementName,\n                            onChange: (e)=>setNewElementName(e.target.value),\n                            placeholder: \"Digite aqui o novo nome do(a) \".concat(elementSubtitle),\n                            id: \"nome\",\n                            nome: \"nome\"\n                        }, void 0, false, {\n                            fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/parametrizacao/components/UpdateForm/index.js\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputSelect__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            label: \"Escolha um(a) \".concat(selectOptionLabel),\n                            options: selectOptions,\n                            onChange: (e)=>setSelectedPropOption(e.target.value),\n                            value: selectedPropOption,\n                            optionViewName: selectOptionViewName\n                        }, void 0, false, {\n                            fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/parametrizacao/components/UpdateForm/index.js\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-start mt-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"bg-green-500 text-white p-2 rounded-md mr-2 flex items-center\",\n                                    onClick: (event)=>handleSubmit(event),\n                                    children: \"Salvar\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/parametrizacao/components/UpdateForm/index.js\",\n                                    lineNumber: 100,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-gray-500 text-white p-2 rounded-md flex items-center\",\n                                    onClick: ()=>handleCancel(),\n                                    children: \"Cancelar\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/parametrizacao/components/UpdateForm/index.js\",\n                                    lineNumber: 107,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/parametrizacao/components/UpdateForm/index.js\",\n                            lineNumber: 99,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/parametrizacao/components/UpdateForm/index.js\",\n                    lineNumber: 81,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false),\n            !editField && selectedOption != \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white p-2 rounded-md mt-4 mr-2\",\n                        onClick: ()=>handleEdit(),\n                        children: \"Editar\"\n                    }, void 0, false, {\n                        fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/parametrizacao/components/UpdateForm/index.js\",\n                        lineNumber: 119,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-red-500 text-white p-2 rounded-md mt-4\",\n                        onClick: ()=>handleDelete(),\n                        children: \"Excluir\"\n                    }, void 0, false, {\n                        fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/parametrizacao/components/UpdateForm/index.js\",\n                        lineNumber: 125,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/parametrizacao/components/UpdateForm/index.js\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_s(UpdateForm, \"IY7r5VnVqbG3ORk0ZAZZesI6NlQ=\");\n_c = UpdateForm;\nvar _c;\n$RefreshReg$(_c, \"UpdateForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFyYW1ldHJpemFjYW8vY29tcG9uZW50cy9VcGRhdGVGb3JtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ0o7QUFDckI7QUFDTztBQUVsQixTQUFTSSxXQUFXLEtBV2xDO1FBWGtDLEVBQ2pDQyxZQUFZLEVBQ1pDLGVBQWUsRUFDZkMsUUFBUSxFQUNSQyxhQUFhLEVBQ2JDLGFBQWEsRUFDYkMsY0FBYyxFQUNkQyxhQUFhLEVBQ2JDLG9CQUFvQixFQUNwQkMsaUJBQWlCLEVBQ2pCQyxpQkFBaUIsRUFDbEIsR0FYa0M7O0lBWWpDLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR2IsK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDYyxvQkFBb0JDLHNCQUFzQixHQUFHZiwrQ0FBUUEsQ0FBQztJQUM3RCxNQUFNLENBQUNnQixnQkFBZ0JDLGtCQUFrQixHQUFHakIsK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDa0IsV0FBV0MsYUFBYSxHQUFHbkIsK0NBQVFBLENBQUM7SUFFM0MsTUFBTW9CLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEIsTUFBTUMsaUJBQWlCO1lBQUM7U0FBTztRQUUvQixNQUFNQyxVQUFVRCxlQUFlRSxLQUFLLENBQ2xDLENBQUNDLFFBQVVWLG1CQUFtQixRQUFRQSxlQUFlVyxJQUFJLE9BQU87UUFFbEUsSUFBSUgsU0FBUztZQUNYLElBQUlJLFVBQVUsTUFBTXJCLGVBQWVLO1lBQ25DZ0IsUUFBUUMsSUFBSSxHQUFHYjtZQUNmWSxPQUFPLENBQUNqQixrQkFBa0IsR0FBR0c7WUFDN0IsTUFBTVQsY0FBY3VCLFFBQVFFLEVBQUUsRUFBRUY7WUFDaENULGFBQWEsQ0FBQ0Q7UUFDaEIsT0FBTztZQUNMYSxNQUFNO1FBQ1I7SUFDRjtJQUVBLE1BQU1DLGVBQWU7UUFDbkJiLGFBQWEsQ0FBQ0Q7UUFDZCxNQUFNVSxVQUFVeEIsU0FBUzZCLElBQUksQ0FBQyxDQUFDQyxLQUFPQSxHQUFHSixFQUFFLEtBQUtsQjtRQUNoREssa0JBQWtCVyxRQUFRQyxJQUFJO0lBQ2hDO0lBRUEsTUFBTU0sYUFBYTtRQUNqQmhCLGFBQWEsQ0FBQ0Q7SUFDaEI7SUFFQSxNQUFNa0IsZUFBZTtRQUNuQixNQUFNOUIsY0FBY007UUFDcEJDLGtCQUFrQjtRQUNsQndCLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTTtJQUN4QjtJQUVBLE1BQU1DLDBCQUEwQixDQUFDQztRQUMvQjVCLGtCQUFrQjRCO1FBQ2xCLE1BQU1iLFVBQVV4QixTQUFTNkIsSUFBSSxDQUFDLENBQUNDLEtBQU9BLEdBQUdKLEVBQUUsS0FBS1c7UUFDaER4QixrQkFBa0JXLFFBQVFDLElBQUk7UUFDOUJhLFFBQVFDLEdBQUcsQ0FBQ2Y7UUFDWixJQUFHQSxPQUFPLENBQUNsQixrQkFBa0IsQ0FBQ29CLEVBQUUsRUFBQyxDQUVqQztRQUNBZixzQkFBc0JhLE9BQU8sQ0FBQ2pCLGtCQUFrQjtJQUNsRDtJQUVBLHFCQUNFLDhEQUFDaUM7UUFBSUMsV0FBVTs7WUFDWixDQUFDM0IsMkJBQ0EsOERBQUNyQiwrREFBV0E7Z0JBQ1ZpRCxPQUFPLGlCQUE4QixPQUFiNUMsY0FBYTtnQkFDckM2QyxTQUFTM0M7Z0JBQ1Q0QyxVQUFVLENBQUMzQixJQUFNbUIsd0JBQXdCbkIsRUFBRTRCLE1BQU0sQ0FBQ0MsS0FBSztnQkFDdkRBLE9BQU90QztnQkFDUHVDLGdCQUFnQjs7Ozs7O1lBR25CakMsMkJBQ0M7MEJBQ0UsNEVBQUNrQzs7c0NBQ0MsOERBQUN0RCw2REFBU0E7NEJBQ1JnRCxPQUFPLHNCQUFtQyxPQUFiNUM7NEJBQzdCZ0QsT0FBT2xDOzRCQUNQZ0MsVUFBVSxDQUFDM0IsSUFBTUosa0JBQWtCSSxFQUFFNEIsTUFBTSxDQUFDQyxLQUFLOzRCQUNqREcsYUFBYSxpQ0FBaUQsT0FBaEJsRDs0QkFDOUMyQixJQUFHOzRCQUNIRCxNQUFLOzs7Ozs7c0NBR1AsOERBQUNoQywrREFBV0E7NEJBQ1ZpRCxPQUFPLGlCQUFtQyxPQUFsQnBDOzRCQUN4QnFDLFNBQVN2Qzs0QkFDVHdDLFVBQVUsQ0FBQzNCLElBQU1OLHNCQUFzQk0sRUFBRTRCLE1BQU0sQ0FBQ0MsS0FBSzs0QkFDckRBLE9BQU9wQzs0QkFDUHFDLGdCQUFnQjFDOzs7Ozs7c0NBR2xCLDhEQUFDbUM7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDUztvQ0FDQ0MsTUFBSztvQ0FDTFYsV0FBVTtvQ0FDVlcsU0FBUyxDQUFDQyxRQUFVckMsYUFBYXFDOzhDQUNsQzs7Ozs7OzhDQUdELDhEQUFDSDtvQ0FDQ1QsV0FBVTtvQ0FDVlcsU0FBUyxJQUFNeEI7OENBQ2hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT1IsQ0FBQ2QsYUFBYU4sa0JBQWtCLG9CQUMvQjs7a0NBQ0UsOERBQUMwQzt3QkFDQ1QsV0FBVTt3QkFDVlcsU0FBUyxJQUFNckI7a0NBQ2hCOzs7Ozs7a0NBR0QsOERBQUNtQjt3QkFDQ1QsV0FBVTt3QkFDVlcsU0FBUyxJQUFNcEI7a0NBQ2hCOzs7Ozs7Ozs7Ozs7OztBQU9YO0dBakl3Qm5DO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFyYW1ldHJpemFjYW8vY29tcG9uZW50cy9VcGRhdGVGb3JtL2luZGV4LmpzPzE3NzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElucHV0U2VsZWN0IGZyb20gXCJAL2NvbXBvbmVudHMvSW5wdXRTZWxlY3RcIjtcbmltcG9ydCBJbnB1dFRleHQgZnJvbSBcIkAvY29tcG9uZW50cy9JbnB1dFRleHRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwZGF0ZUZvcm0oe1xuICBlbGVtZW50VGl0bGUsXG4gIGVsZW1lbnRTdWJ0aXRsZSxcbiAgZWxlbWVudHMsXG4gIHVwZGF0ZUVsZW1lbnQsXG4gIGRlbGV0ZUVsZW1lbnQsXG4gIGdldEVsZW1lbnRCeUlkLFxuICBzZWxlY3RPcHRpb25zLFxuICBzZWxlY3RPcHRpb25WaWV3TmFtZSxcbiAgc2VsZWN0T3B0aW9uTGFiZWwsXG4gIHNlbGVjdE9wdGlvblZhbHVlXG59KSB7XG4gIGNvbnN0IFtzZWxlY3RlZE9wdGlvbiwgc2V0U2VsZWN0ZWRPcHRpb25dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzZWxlY3RlZFByb3BPcHRpb24sIHNldFNlbGVjdGVkUHJvcE9wdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW25ld0VsZW1lbnROYW1lLCBzZXROZXdFbGVtZW50TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2VkaXRGaWVsZCwgc2V0RWRpdEZpZWxkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCByZXF1aXJlZEZpZWxkcyA9IFtcIm5vbWVcIl07XG5cbiAgICBjb25zdCBpc1ZhbGlkID0gcmVxdWlyZWRGaWVsZHMuZXZlcnkoXG4gICAgICAoZmllbGQpID0+IG5ld0VsZW1lbnROYW1lICE9PSBudWxsICYmIG5ld0VsZW1lbnROYW1lLnRyaW0oKSAhPT0gXCJcIlxuICAgICk7XG4gICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgIGxldCBlbGVtZW50ID0gYXdhaXQgZ2V0RWxlbWVudEJ5SWQoc2VsZWN0ZWRPcHRpb24pO1xuICAgICAgZWxlbWVudC5ub21lID0gbmV3RWxlbWVudE5hbWU7XG4gICAgICBlbGVtZW50W3NlbGVjdE9wdGlvblZhbHVlXSA9IHNlbGVjdGVkUHJvcE9wdGlvbjtcbiAgICAgIGF3YWl0IHVwZGF0ZUVsZW1lbnQoZWxlbWVudC5pZCwgZWxlbWVudCk7XG4gICAgICBzZXRFZGl0RmllbGQoIWVkaXRGaWVsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KFwiUHJlZW5jaGEgdG9kb3Mgb3MgY2FtcG9zIG9icmlnYXTDs3Jpb3MhXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XG4gICAgc2V0RWRpdEZpZWxkKCFlZGl0RmllbGQpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50cy5maW5kKChlbCkgPT4gZWwuaWQgPT09IHNlbGVjdGVkT3B0aW9uKTtcbiAgICBzZXROZXdFbGVtZW50TmFtZShlbGVtZW50Lm5vbWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUVkaXQgPSAoKSA9PiB7XG4gICAgc2V0RWRpdEZpZWxkKCFlZGl0RmllbGQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkZWxldGVFbGVtZW50KHNlbGVjdGVkT3B0aW9uKTtcbiAgICBzZXRTZWxlY3RlZE9wdGlvbihcIlwiKTtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2V0U2VsZWN0ZWRPcHRpb24gPSAob3B0aW9uKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRPcHRpb24ob3B0aW9uKTtcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHMuZmluZCgoZWwpID0+IGVsLmlkID09PSBvcHRpb24pO1xuICAgIHNldE5ld0VsZW1lbnROYW1lKGVsZW1lbnQubm9tZSk7XG4gICAgY29uc29sZS5sb2coZWxlbWVudClcbiAgICBpZihlbGVtZW50W3NlbGVjdE9wdGlvbkxhYmVsXS5pZCl7XG4gICAgICBcbiAgICB9XG4gICAgc2V0U2VsZWN0ZWRQcm9wT3B0aW9uKGVsZW1lbnRbc2VsZWN0T3B0aW9uVmFsdWVdKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJnLXdoaXRlIHJvdW5kZWQgc2hhZG93LW1kXCI+XG4gICAgICB7IWVkaXRGaWVsZCAmJiAoXG4gICAgICAgIDxJbnB1dFNlbGVjdFxuICAgICAgICAgIGxhYmVsPXtgRXNjb2xoYSB1bShhKSAke2VsZW1lbnRUaXRsZX0gcGFyYSBlZGl0YXJgfVxuICAgICAgICAgIG9wdGlvbnM9e2VsZW1lbnRzfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlU2V0U2VsZWN0ZWRPcHRpb24oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZE9wdGlvbn1cbiAgICAgICAgICBvcHRpb25WaWV3TmFtZT17XCJub21lXCJ9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge2VkaXRGaWVsZCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8SW5wdXRUZXh0XG4gICAgICAgICAgICAgIGxhYmVsPXtgRWRpdGUgbyBub21lIGRvKGEpICR7ZWxlbWVudFRpdGxlfWB9XG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdFbGVtZW50TmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdFbGVtZW50TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgRGlnaXRlIGFxdWkgbyBub3ZvIG5vbWUgZG8oYSkgJHtlbGVtZW50U3VidGl0bGV9YH1cbiAgICAgICAgICAgICAgaWQ9XCJub21lXCJcbiAgICAgICAgICAgICAgbm9tZT1cIm5vbWVcIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPElucHV0U2VsZWN0XG4gICAgICAgICAgICAgIGxhYmVsPXtgRXNjb2xoYSB1bShhKSAke3NlbGVjdE9wdGlvbkxhYmVsfWB9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e3NlbGVjdE9wdGlvbnN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VsZWN0ZWRQcm9wT3B0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkUHJvcE9wdGlvbn1cbiAgICAgICAgICAgICAgb3B0aW9uVmlld05hbWU9e3NlbGVjdE9wdGlvblZpZXdOYW1lfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLXN0YXJ0IG10LTNcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlIHAtMiByb3VuZGVkLW1kIG1yLTIgZmxleCBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gaGFuZGxlU3VibWl0KGV2ZW50KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNhbHZhclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNTAwIHRleHQtd2hpdGUgcC0yIHJvdW5kZWQtbWQgZmxleCBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNhbmNlbCgpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2FuY2VsYXJcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIHshZWRpdEZpZWxkICYmIHNlbGVjdGVkT3B0aW9uICE9IFwiXCIgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcC0yIHJvdW5kZWQtbWQgbXQtNCBtci0yXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUVkaXQoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBFZGl0YXJcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIHRleHQtd2hpdGUgcC0yIHJvdW5kZWQtbWQgbXQtNFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBFeGNsdWlyXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbnB1dFNlbGVjdCIsIklucHV0VGV4dCIsIlJlYWN0IiwidXNlU3RhdGUiLCJVcGRhdGVGb3JtIiwiZWxlbWVudFRpdGxlIiwiZWxlbWVudFN1YnRpdGxlIiwiZWxlbWVudHMiLCJ1cGRhdGVFbGVtZW50IiwiZGVsZXRlRWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VsZWN0T3B0aW9ucyIsInNlbGVjdE9wdGlvblZpZXdOYW1lIiwic2VsZWN0T3B0aW9uTGFiZWwiLCJzZWxlY3RPcHRpb25WYWx1ZSIsInNlbGVjdGVkT3B0aW9uIiwic2V0U2VsZWN0ZWRPcHRpb24iLCJzZWxlY3RlZFByb3BPcHRpb24iLCJzZXRTZWxlY3RlZFByb3BPcHRpb24iLCJuZXdFbGVtZW50TmFtZSIsInNldE5ld0VsZW1lbnROYW1lIiwiZWRpdEZpZWxkIiwic2V0RWRpdEZpZWxkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVxdWlyZWRGaWVsZHMiLCJpc1ZhbGlkIiwiZXZlcnkiLCJmaWVsZCIsInRyaW0iLCJlbGVtZW50Iiwibm9tZSIsImlkIiwiYWxlcnQiLCJoYW5kbGVDYW5jZWwiLCJmaW5kIiwiZWwiLCJoYW5kbGVFZGl0IiwiaGFuZGxlRGVsZXRlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJoYW5kbGVTZXRTZWxlY3RlZE9wdGlvbiIsIm9wdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsIm9wdGlvbnMiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwib3B0aW9uVmlld05hbWUiLCJmb3JtIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsImV2ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/parametrizacao/components/UpdateForm/index.js\n"));

/***/ })

});