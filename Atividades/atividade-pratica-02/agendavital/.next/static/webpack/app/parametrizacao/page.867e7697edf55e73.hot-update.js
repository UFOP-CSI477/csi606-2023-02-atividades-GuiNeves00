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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UpdateForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_InputSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/InputSelect */ \"(app-pages-browser)/./src/components/InputSelect/index.js\");\n/* harmony import */ var _components_InputText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/InputText */ \"(app-pages-browser)/./src/components/InputText/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction UpdateForm(param) {\n    let { elementTitle, elementSubtitle, elements, updateElement, deleteElement, getElementById, selectOptions, selectOptionViewName, selectOptionLabel, selectOptionValue } = param;\n    _s();\n    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [selectedPropOption, setSelectedPropOption] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [newElementName, setNewElementName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [editField, setEditField] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const requiredFields = [\n            \"nome\"\n        ];\n        const isValid = requiredFields.every((field)=>newElementName !== null && newElementName.trim() !== \"\");\n        if (isValid) {\n            let element = await getElementById(selectedOption);\n            element.nome = newElementName;\n            element[selectOptionValue] = selectedPropOption;\n            await updateElement(element.id, element);\n            setEditField(!editField);\n        } else {\n            alert(\"Preencha todos os campos obrigat\\xf3rios!\");\n        }\n    };\n    const handleCancel = ()=>{\n        setEditField(!editField);\n        const element = elements.find((el)=>el.id === selectedOption);\n        setNewElementName(element.nome);\n    };\n    const handleEdit = ()=>{\n        setEditField(!editField);\n    };\n    const handleDelete = async ()=>{\n        await deleteElement(selectedOption);\n        setSelectedOption(\"\");\n        window.location.reload();\n    };\n    const handleSetSelectedOption = (option)=>{\n        setSelectedOption(option);\n        const element = elements.find((el)=>el.id === option);\n        setNewElementName(element.nome);\n        if (element[selectOptionLabel]) {\n            setSelectedPropOption(element[selectOptionLabel].id);\n        } else {\n            setSelectedPropOption(element[selectOptionValue]);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4 bg-white rounded shadow-md\",\n        children: [\n            !editField && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputSelect__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                label: \"Escolha um(a) \".concat(elementTitle, \" para editar\"),\n                options: elements,\n                onChange: (e)=>handleSetSelectedOption(e.target.value),\n                value: selectedOption,\n                optionViewName: \"nome\"\n            }, void 0, false, {\n                fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/parametrizacao/components/UpdateForm/index.js\",\n                lineNumber: 72,\n                columnNumber: 9\n            }, this),\n            editField && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputText__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            label: \"Edite o nome do(a) \".concat(elementTitle),\n                            value: newElementName,\n                            onChange: (e)=>setNewElementName(e.target.value),\n                            placeholder: \"Digite aqui o novo nome do(a) \".concat(elementSubtitle),\n                            id: \"nome\",\n                            nome: \"nome\"\n                        }, void 0, false, {\n                            fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/parametrizacao/components/UpdateForm/index.js\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputSelect__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            label: \"Escolha um(a) \".concat(selectOptionLabel),\n                            options: selectOptions,\n                            onChange: (e)=>setSelectedPropOption(e.target.value),\n                            value: selectedPropOption,\n                            optionViewName: selectOptionViewName\n                        }, void 0, false, {\n                            fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/parametrizacao/components/UpdateForm/index.js\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-start mt-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"bg-green-500 text-white p-2 rounded-md mr-2 flex items-center\",\n                                    onClick: (event)=>handleSubmit(event),\n                                    children: \"Salvar\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/parametrizacao/components/UpdateForm/index.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-gray-500 text-white p-2 rounded-md flex items-center\",\n                                    onClick: ()=>handleCancel(),\n                                    children: \"Cancelar\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/parametrizacao/components/UpdateForm/index.js\",\n                                    lineNumber: 108,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/parametrizacao/components/UpdateForm/index.js\",\n                            lineNumber: 100,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/parametrizacao/components/UpdateForm/index.js\",\n                    lineNumber: 82,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false),\n            !editField && selectedOption != \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white p-2 rounded-md mt-4 mr-2\",\n                        onClick: ()=>handleEdit(),\n                        children: \"Editar\"\n                    }, void 0, false, {\n                        fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/parametrizacao/components/UpdateForm/index.js\",\n                        lineNumber: 120,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-red-500 text-white p-2 rounded-md mt-4\",\n                        onClick: ()=>handleDelete(),\n                        children: \"Excluir\"\n                    }, void 0, false, {\n                        fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/parametrizacao/components/UpdateForm/index.js\",\n                        lineNumber: 126,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/matheusestevam/dev/projetos-pessoais/gri/tb2/agendavital/src/app/parametrizacao/components/UpdateForm/index.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(UpdateForm, \"IY7r5VnVqbG3ORk0ZAZZesI6NlQ=\");\n_c = UpdateForm;\nvar _c;\n$RefreshReg$(_c, \"UpdateForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFyYW1ldHJpemFjYW8vY29tcG9uZW50cy9VcGRhdGVGb3JtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ0o7QUFDckI7QUFDTztBQUVsQixTQUFTSSxXQUFXLEtBV2xDO1FBWGtDLEVBQ2pDQyxZQUFZLEVBQ1pDLGVBQWUsRUFDZkMsUUFBUSxFQUNSQyxhQUFhLEVBQ2JDLGFBQWEsRUFDYkMsY0FBYyxFQUNkQyxhQUFhLEVBQ2JDLG9CQUFvQixFQUNwQkMsaUJBQWlCLEVBQ2pCQyxpQkFBaUIsRUFDbEIsR0FYa0M7O0lBWWpDLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR2IsK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDYyxvQkFBb0JDLHNCQUFzQixHQUFHZiwrQ0FBUUEsQ0FBQztJQUM3RCxNQUFNLENBQUNnQixnQkFBZ0JDLGtCQUFrQixHQUFHakIsK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDa0IsV0FBV0MsYUFBYSxHQUFHbkIsK0NBQVFBLENBQUM7SUFFM0MsTUFBTW9CLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEIsTUFBTUMsaUJBQWlCO1lBQUM7U0FBTztRQUUvQixNQUFNQyxVQUFVRCxlQUFlRSxLQUFLLENBQ2xDLENBQUNDLFFBQVVWLG1CQUFtQixRQUFRQSxlQUFlVyxJQUFJLE9BQU87UUFFbEUsSUFBSUgsU0FBUztZQUNYLElBQUlJLFVBQVUsTUFBTXJCLGVBQWVLO1lBQ25DZ0IsUUFBUUMsSUFBSSxHQUFHYjtZQUNmWSxPQUFPLENBQUNqQixrQkFBa0IsR0FBR0c7WUFDN0IsTUFBTVQsY0FBY3VCLFFBQVFFLEVBQUUsRUFBRUY7WUFDaENULGFBQWEsQ0FBQ0Q7UUFDaEIsT0FBTztZQUNMYSxNQUFNO1FBQ1I7SUFDRjtJQUVBLE1BQU1DLGVBQWU7UUFDbkJiLGFBQWEsQ0FBQ0Q7UUFDZCxNQUFNVSxVQUFVeEIsU0FBUzZCLElBQUksQ0FBQyxDQUFDQyxLQUFPQSxHQUFHSixFQUFFLEtBQUtsQjtRQUNoREssa0JBQWtCVyxRQUFRQyxJQUFJO0lBQ2hDO0lBRUEsTUFBTU0sYUFBYTtRQUNqQmhCLGFBQWEsQ0FBQ0Q7SUFDaEI7SUFFQSxNQUFNa0IsZUFBZTtRQUNuQixNQUFNOUIsY0FBY007UUFDcEJDLGtCQUFrQjtRQUNsQndCLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTTtJQUN4QjtJQUVBLE1BQU1DLDBCQUEwQixDQUFDQztRQUMvQjVCLGtCQUFrQjRCO1FBQ2xCLE1BQU1iLFVBQVV4QixTQUFTNkIsSUFBSSxDQUFDLENBQUNDLEtBQU9BLEdBQUdKLEVBQUUsS0FBS1c7UUFDaER4QixrQkFBa0JXLFFBQVFDLElBQUk7UUFDOUIsSUFBR0QsT0FBTyxDQUFDbEIsa0JBQWtCLEVBQUM7WUFDNUJLLHNCQUFzQmEsT0FBTyxDQUFDbEIsa0JBQWtCLENBQUNvQixFQUFFO1FBQ3JELE9BQUs7WUFDSGYsc0JBQXNCYSxPQUFPLENBQUNqQixrQkFBa0I7UUFDbEQ7SUFFRjtJQUVBLHFCQUNFLDhEQUFDK0I7UUFBSUMsV0FBVTs7WUFDWixDQUFDekIsMkJBQ0EsOERBQUNyQiwrREFBV0E7Z0JBQ1YrQyxPQUFPLGlCQUE4QixPQUFiMUMsY0FBYTtnQkFDckMyQyxTQUFTekM7Z0JBQ1QwQyxVQUFVLENBQUN6QixJQUFNbUIsd0JBQXdCbkIsRUFBRTBCLE1BQU0sQ0FBQ0MsS0FBSztnQkFDdkRBLE9BQU9wQztnQkFDUHFDLGdCQUFnQjs7Ozs7O1lBR25CL0IsMkJBQ0M7MEJBQ0UsNEVBQUNnQzs7c0NBQ0MsOERBQUNwRCw2REFBU0E7NEJBQ1I4QyxPQUFPLHNCQUFtQyxPQUFiMUM7NEJBQzdCOEMsT0FBT2hDOzRCQUNQOEIsVUFBVSxDQUFDekIsSUFBTUosa0JBQWtCSSxFQUFFMEIsTUFBTSxDQUFDQyxLQUFLOzRCQUNqREcsYUFBYSxpQ0FBaUQsT0FBaEJoRDs0QkFDOUMyQixJQUFHOzRCQUNIRCxNQUFLOzs7Ozs7c0NBR1AsOERBQUNoQywrREFBV0E7NEJBQ1YrQyxPQUFPLGlCQUFtQyxPQUFsQmxDOzRCQUN4Qm1DLFNBQVNyQzs0QkFDVHNDLFVBQVUsQ0FBQ3pCLElBQU1OLHNCQUFzQk0sRUFBRTBCLE1BQU0sQ0FBQ0MsS0FBSzs0QkFDckRBLE9BQU9sQzs0QkFDUG1DLGdCQUFnQnhDOzs7Ozs7c0NBR2xCLDhEQUFDaUM7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDUztvQ0FDQ0MsTUFBSztvQ0FDTFYsV0FBVTtvQ0FDVlcsU0FBUyxDQUFDQyxRQUFVbkMsYUFBYW1DOzhDQUNsQzs7Ozs7OzhDQUdELDhEQUFDSDtvQ0FDQ1QsV0FBVTtvQ0FDVlcsU0FBUyxJQUFNdEI7OENBQ2hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT1IsQ0FBQ2QsYUFBYU4sa0JBQWtCLG9CQUMvQjs7a0NBQ0UsOERBQUN3Qzt3QkFDQ1QsV0FBVTt3QkFDVlcsU0FBUyxJQUFNbkI7a0NBQ2hCOzs7Ozs7a0NBR0QsOERBQUNpQjt3QkFDQ1QsV0FBVTt3QkFDVlcsU0FBUyxJQUFNbEI7a0NBQ2hCOzs7Ozs7Ozs7Ozs7OztBQU9YO0dBbEl3Qm5DO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFyYW1ldHJpemFjYW8vY29tcG9uZW50cy9VcGRhdGVGb3JtL2luZGV4LmpzPzE3NzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElucHV0U2VsZWN0IGZyb20gXCJAL2NvbXBvbmVudHMvSW5wdXRTZWxlY3RcIjtcbmltcG9ydCBJbnB1dFRleHQgZnJvbSBcIkAvY29tcG9uZW50cy9JbnB1dFRleHRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwZGF0ZUZvcm0oe1xuICBlbGVtZW50VGl0bGUsXG4gIGVsZW1lbnRTdWJ0aXRsZSxcbiAgZWxlbWVudHMsXG4gIHVwZGF0ZUVsZW1lbnQsXG4gIGRlbGV0ZUVsZW1lbnQsXG4gIGdldEVsZW1lbnRCeUlkLFxuICBzZWxlY3RPcHRpb25zLFxuICBzZWxlY3RPcHRpb25WaWV3TmFtZSxcbiAgc2VsZWN0T3B0aW9uTGFiZWwsXG4gIHNlbGVjdE9wdGlvblZhbHVlXG59KSB7XG4gIGNvbnN0IFtzZWxlY3RlZE9wdGlvbiwgc2V0U2VsZWN0ZWRPcHRpb25dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzZWxlY3RlZFByb3BPcHRpb24sIHNldFNlbGVjdGVkUHJvcE9wdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW25ld0VsZW1lbnROYW1lLCBzZXROZXdFbGVtZW50TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2VkaXRGaWVsZCwgc2V0RWRpdEZpZWxkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCByZXF1aXJlZEZpZWxkcyA9IFtcIm5vbWVcIl07XG5cbiAgICBjb25zdCBpc1ZhbGlkID0gcmVxdWlyZWRGaWVsZHMuZXZlcnkoXG4gICAgICAoZmllbGQpID0+IG5ld0VsZW1lbnROYW1lICE9PSBudWxsICYmIG5ld0VsZW1lbnROYW1lLnRyaW0oKSAhPT0gXCJcIlxuICAgICk7XG4gICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgIGxldCBlbGVtZW50ID0gYXdhaXQgZ2V0RWxlbWVudEJ5SWQoc2VsZWN0ZWRPcHRpb24pO1xuICAgICAgZWxlbWVudC5ub21lID0gbmV3RWxlbWVudE5hbWU7XG4gICAgICBlbGVtZW50W3NlbGVjdE9wdGlvblZhbHVlXSA9IHNlbGVjdGVkUHJvcE9wdGlvbjtcbiAgICAgIGF3YWl0IHVwZGF0ZUVsZW1lbnQoZWxlbWVudC5pZCwgZWxlbWVudCk7XG4gICAgICBzZXRFZGl0RmllbGQoIWVkaXRGaWVsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KFwiUHJlZW5jaGEgdG9kb3Mgb3MgY2FtcG9zIG9icmlnYXTDs3Jpb3MhXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XG4gICAgc2V0RWRpdEZpZWxkKCFlZGl0RmllbGQpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50cy5maW5kKChlbCkgPT4gZWwuaWQgPT09IHNlbGVjdGVkT3B0aW9uKTtcbiAgICBzZXROZXdFbGVtZW50TmFtZShlbGVtZW50Lm5vbWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUVkaXQgPSAoKSA9PiB7XG4gICAgc2V0RWRpdEZpZWxkKCFlZGl0RmllbGQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkZWxldGVFbGVtZW50KHNlbGVjdGVkT3B0aW9uKTtcbiAgICBzZXRTZWxlY3RlZE9wdGlvbihcIlwiKTtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2V0U2VsZWN0ZWRPcHRpb24gPSAob3B0aW9uKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRPcHRpb24ob3B0aW9uKTtcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHMuZmluZCgoZWwpID0+IGVsLmlkID09PSBvcHRpb24pO1xuICAgIHNldE5ld0VsZW1lbnROYW1lKGVsZW1lbnQubm9tZSk7XG4gICAgaWYoZWxlbWVudFtzZWxlY3RPcHRpb25MYWJlbF0pe1xuICAgICAgc2V0U2VsZWN0ZWRQcm9wT3B0aW9uKGVsZW1lbnRbc2VsZWN0T3B0aW9uTGFiZWxdLmlkKTsgIFxuICAgIH1lbHNle1xuICAgICAgc2V0U2VsZWN0ZWRQcm9wT3B0aW9uKGVsZW1lbnRbc2VsZWN0T3B0aW9uVmFsdWVdKTtcbiAgICB9XG4gICAgXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBiZy13aGl0ZSByb3VuZGVkIHNoYWRvdy1tZFwiPlxuICAgICAgeyFlZGl0RmllbGQgJiYgKFxuICAgICAgICA8SW5wdXRTZWxlY3RcbiAgICAgICAgICBsYWJlbD17YEVzY29saGEgdW0oYSkgJHtlbGVtZW50VGl0bGV9IHBhcmEgZWRpdGFyYH1cbiAgICAgICAgICBvcHRpb25zPXtlbGVtZW50c31cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVNldFNlbGVjdGVkT3B0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRPcHRpb259XG4gICAgICAgICAgb3B0aW9uVmlld05hbWU9e1wibm9tZVwifVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtlZGl0RmllbGQgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPElucHV0VGV4dFxuICAgICAgICAgICAgICBsYWJlbD17YEVkaXRlIG8gbm9tZSBkbyhhKSAke2VsZW1lbnRUaXRsZX1gfVxuICAgICAgICAgICAgICB2YWx1ZT17bmV3RWxlbWVudE5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3RWxlbWVudE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YERpZ2l0ZSBhcXVpIG8gbm92byBub21lIGRvKGEpICR7ZWxlbWVudFN1YnRpdGxlfWB9XG4gICAgICAgICAgICAgIGlkPVwibm9tZVwiXG4gICAgICAgICAgICAgIG5vbWU9XCJub21lXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxJbnB1dFNlbGVjdFxuICAgICAgICAgICAgICBsYWJlbD17YEVzY29saGEgdW0oYSkgJHtzZWxlY3RPcHRpb25MYWJlbH1gfVxuICAgICAgICAgICAgICBvcHRpb25zPXtzZWxlY3RPcHRpb25zfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlbGVjdGVkUHJvcE9wdGlvbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFByb3BPcHRpb259XG4gICAgICAgICAgICAgIG9wdGlvblZpZXdOYW1lPXtzZWxlY3RPcHRpb25WaWV3TmFtZX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1zdGFydCBtdC0zXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmVlbi01MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZC1tZCBtci0yIGZsZXggaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGhhbmRsZVN1Ym1pdChldmVudCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTYWx2YXJcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTUwMCB0ZXh0LXdoaXRlIHAtMiByb3VuZGVkLW1kIGZsZXggaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDYW5jZWwoKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENhbmNlbGFyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICB7IWVkaXRGaWVsZCAmJiBzZWxlY3RlZE9wdGlvbiAhPSBcIlwiICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHAtMiByb3VuZGVkLW1kIG10LTQgbXItMlwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVFZGl0KCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRWRpdGFyXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCB0ZXh0LXdoaXRlIHAtMiByb3VuZGVkLW1kIG10LTRcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRXhjbHVpclxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW5wdXRTZWxlY3QiLCJJbnB1dFRleHQiLCJSZWFjdCIsInVzZVN0YXRlIiwiVXBkYXRlRm9ybSIsImVsZW1lbnRUaXRsZSIsImVsZW1lbnRTdWJ0aXRsZSIsImVsZW1lbnRzIiwidXBkYXRlRWxlbWVudCIsImRlbGV0ZUVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNlbGVjdE9wdGlvbnMiLCJzZWxlY3RPcHRpb25WaWV3TmFtZSIsInNlbGVjdE9wdGlvbkxhYmVsIiwic2VsZWN0T3B0aW9uVmFsdWUiLCJzZWxlY3RlZE9wdGlvbiIsInNldFNlbGVjdGVkT3B0aW9uIiwic2VsZWN0ZWRQcm9wT3B0aW9uIiwic2V0U2VsZWN0ZWRQcm9wT3B0aW9uIiwibmV3RWxlbWVudE5hbWUiLCJzZXROZXdFbGVtZW50TmFtZSIsImVkaXRGaWVsZCIsInNldEVkaXRGaWVsZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlcXVpcmVkRmllbGRzIiwiaXNWYWxpZCIsImV2ZXJ5IiwiZmllbGQiLCJ0cmltIiwiZWxlbWVudCIsIm5vbWUiLCJpZCIsImFsZXJ0IiwiaGFuZGxlQ2FuY2VsIiwiZmluZCIsImVsIiwiaGFuZGxlRWRpdCIsImhhbmRsZURlbGV0ZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiaGFuZGxlU2V0U2VsZWN0ZWRPcHRpb24iLCJvcHRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsIm9wdGlvbnMiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwib3B0aW9uVmlld05hbWUiLCJmb3JtIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsImV2ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/parametrizacao/components/UpdateForm/index.js\n"));

/***/ })

});