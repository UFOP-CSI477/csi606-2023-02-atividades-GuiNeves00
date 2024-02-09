"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/doadores/page",{

/***/ "(app-pages-browser)/./src/services/tipoSanguineoService.js":
/*!**********************************************!*\
  !*** ./src/services/tipoSanguineoService.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTipoSanguineoAsync: function() { return /* binding */ createTipoSanguineoAsync; },\n/* harmony export */   deleteTipoSanguineoAsync: function() { return /* binding */ deleteTipoSanguineoAsync; },\n/* harmony export */   getTipoSanguineoByIdAsync: function() { return /* binding */ getTipoSanguineoByIdAsync; },\n/* harmony export */   getTiposSanguineosAsync: function() { return /* binding */ getTiposSanguineosAsync; },\n/* harmony export */   updateTipoSanguineoAsync: function() { return /* binding */ updateTipoSanguineoAsync; }\n/* harmony export */ });\n/* harmony import */ var _http_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/http/url */ \"(app-pages-browser)/./src/http/url.js\");\n\nasync function createTipoSanguineoAsync(tipoSanguineoDto) {\n    try {\n        const response = await fetch(\"\".concat(_http_url__WEBPACK_IMPORTED_MODULE_0__[\"default\"], \"/TipoSanguineo\"), {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(tipoSanguineoDto)\n        });\n        if (!response.ok) {\n            throw new Error(\"Erro na requisi\\xe7\\xe3o: \".concat(response.status));\n        }\n        const data1 = await response.json();\n        return data1;\n    } catch (error) {\n        console.error(\"Erro na requisi\\xe7\\xe3o:\", error);\n        throw error;\n    }\n}\nasync function getTiposSanguineosAsync() {\n    try {\n        const response = await fetch(\"\".concat(_http_url__WEBPACK_IMPORTED_MODULE_0__[\"default\"], \"/TipoSanguineo\"));\n        if (!response.ok) {\n            throw new Error(\"Erro na requisi\\xe7\\xe3o: \".concat(response.status));\n        }\n        const data1 = await response.json();\n        return data1;\n    } catch (error) {\n        console.error(\"Erro na requisi\\xe7\\xe3o:\", error);\n        throw error;\n    }\n}\nasync function getTipoSanguineoByIdAsync(tipoSanguineoId) {\n    try {\n        const response = await fetch(\"\".concat(_http_url__WEBPACK_IMPORTED_MODULE_0__[\"default\"], \"/TipoSanguineo/\").concat(tipoSanguineoId));\n        if (!response.ok) {\n            throw new Error(\"Erro na requisi\\xe7\\xe3o: \".concat(response.status));\n        }\n        return data = response.json();\n    } catch (error) {\n        console.error(\"Erro na requisi\\xe7\\xe3o:\", error);\n        throw error;\n    }\n}\nasync function updateTipoSanguineoAsync(tipoSanguineoId, tipoSanguineoDto) {\n    try {\n        const response = await fetch(\"\".concat(_http_url__WEBPACK_IMPORTED_MODULE_0__[\"default\"], \"/TipoSanguineo/\").concat(tipoSanguineoId), {\n            method: \"PUT\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(tipoSanguineoDto)\n        });\n        if (!response.ok) {\n            throw new Error(\"Erro na requisi\\xe7\\xe3o: \".concat(response.status));\n        }\n        console.log(response);\n        return data;\n    } catch (error) {\n        console.error(\"Erro na requisi\\xe7\\xe3o:\", error);\n        throw error;\n    }\n}\nasync function deleteTipoSanguineoAsync(tipoSanguineoId) {\n    try {\n        const response = await fetch(\"\".concat(_http_url__WEBPACK_IMPORTED_MODULE_0__[\"default\"], \"/TipoSanguineo/\").concat(tipoSanguineoId), {\n            method: \"DELETE\"\n        });\n        if (!response.ok) {\n            throw new Error(\"Erro na requisi\\xe7\\xe3o: \".concat(response.status));\n        }\n        console.log(response);\n    } catch (error) {\n        console.error(\"Erro na requisi\\xe7\\xe3o:\", error);\n        throw error;\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZXJ2aWNlcy90aXBvU2FuZ3VpbmVvU2VydmljZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNkI7QUFFN0IsZUFBZUMseUJBQXlCQyxnQkFBZ0I7SUFDdEQsSUFBSTtRQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxHQUFPLE9BQUpKLGlEQUFHQSxFQUFDLG1CQUFpQjtZQUNuREssUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNQO1FBQ3ZCO1FBRUEsSUFBSSxDQUFDQyxTQUFTTyxFQUFFLEVBQUU7WUFDaEIsTUFBTSxJQUFJQyxNQUFNLDZCQUF1QyxPQUFoQlIsU0FBU1MsTUFBTTtRQUN4RDtRQUVBLE1BQU1DLFFBQU8sTUFBTVYsU0FBU1csSUFBSTtRQUNoQyxPQUFPRDtJQUNULEVBQUUsT0FBT0UsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsNkJBQXVCQTtRQUNyQyxNQUFNQTtJQUNSO0FBQ0Y7QUFFQSxlQUFlRTtJQUNiLElBQUk7UUFDRixNQUFNZCxXQUFXLE1BQU1DLE1BQU0sR0FBTyxPQUFKSixpREFBR0EsRUFBQztRQUNwQyxJQUFJLENBQUNHLFNBQVNPLEVBQUUsRUFBRTtZQUNoQixNQUFNLElBQUlDLE1BQU0sNkJBQXVDLE9BQWhCUixTQUFTUyxNQUFNO1FBQ3hEO1FBQ0EsTUFBTUMsUUFBTyxNQUFNVixTQUFTVyxJQUFJO1FBQ2hDLE9BQU9EO0lBQ1QsRUFBRSxPQUFPRSxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyw2QkFBdUJBO1FBQ3JDLE1BQU1BO0lBQ1I7QUFDRjtBQUVBLGVBQWVHLDBCQUEwQkMsZUFBZTtJQUN0RCxJQUFJO1FBQ0YsTUFBTWhCLFdBQVcsTUFBTUMsTUFBTSxHQUF3QmUsT0FBckJuQixpREFBR0EsRUFBQyxtQkFBaUMsT0FBaEJtQjtRQUNyRCxJQUFJLENBQUNoQixTQUFTTyxFQUFFLEVBQUU7WUFDaEIsTUFBTSxJQUFJQyxNQUFNLDZCQUF1QyxPQUFoQlIsU0FBU1MsTUFBTTtRQUN4RDtRQUNBLE9BQU9DLE9BQU9WLFNBQVNXLElBQUk7SUFDN0IsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyw2QkFBdUJBO1FBQ3JDLE1BQU1BO0lBQ1I7QUFDRjtBQUVBLGVBQWVLLHlCQUF5QkQsZUFBZSxFQUFFakIsZ0JBQWdCO0lBQ3ZFLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sR0FBd0JlLE9BQXJCbkIsaURBQUdBLEVBQUMsbUJBQWlDLE9BQWhCbUIsa0JBQW1CO1lBQ3RFZCxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ1A7UUFDdkI7UUFFQSxJQUFJLENBQUNDLFNBQVNPLEVBQUUsRUFBRTtZQUNoQixNQUFNLElBQUlDLE1BQU0sNkJBQXVDLE9BQWhCUixTQUFTUyxNQUFNO1FBQ3hEO1FBRUFJLFFBQVFLLEdBQUcsQ0FBQ2xCO1FBQ1osT0FBT1U7SUFDVCxFQUFFLE9BQU9FLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLDZCQUF1QkE7UUFDckMsTUFBTUE7SUFDUjtBQUNGO0FBRUEsZUFBZU8seUJBQXlCSCxlQUFlO0lBQ3JELElBQUk7UUFDRixNQUFNaEIsV0FBVyxNQUFNQyxNQUFNLEdBQXdCZSxPQUFyQm5CLGlEQUFHQSxFQUFDLG1CQUFpQyxPQUFoQm1CLGtCQUFtQjtZQUN0RWQsUUFBUTtRQUNWO1FBRUEsSUFBSSxDQUFDRixTQUFTTyxFQUFFLEVBQUU7WUFDaEIsTUFBTSxJQUFJQyxNQUFNLDZCQUF1QyxPQUFoQlIsU0FBU1MsTUFBTTtRQUN4RDtRQUNBSSxRQUFRSyxHQUFHLENBQUNsQjtJQUNkLEVBQUUsT0FBT1ksT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsNkJBQXVCQTtRQUNyQyxNQUFNQTtJQUNSO0FBQ0Y7QUFRRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2VydmljZXMvdGlwb1Nhbmd1aW5lb1NlcnZpY2UuanM/MjI1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXJsIGZyb20gXCJAL2h0dHAvdXJsXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVRpcG9TYW5ndWluZW9Bc3luYyh0aXBvU2FuZ3VpbmVvRHRvKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1cmx9L1RpcG9TYW5ndWluZW9gLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0aXBvU2FuZ3VpbmVvRHRvKSxcbiAgICB9KTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBuYSByZXF1aXNpw6fDo286ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm8gbmEgcmVxdWlzacOnw6NvOlwiLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0VGlwb3NTYW5ndWluZW9zQXN5bmMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1cmx9L1RpcG9TYW5ndWluZW9gKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm8gbmEgcmVxdWlzacOnw6NvOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJybyBuYSByZXF1aXNpw6fDo286XCIsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRUaXBvU2FuZ3VpbmVvQnlJZEFzeW5jKHRpcG9TYW5ndWluZW9JZCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXJsfS9UaXBvU2FuZ3VpbmVvLyR7dGlwb1Nhbmd1aW5lb0lkfWApO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBuYSByZXF1aXNpw6fDo286ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YSA9IHJlc3BvbnNlLmpzb24oKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvIG5hIHJlcXVpc2nDp8OjbzpcIiwgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRpcG9TYW5ndWluZW9Bc3luYyh0aXBvU2FuZ3VpbmVvSWQsIHRpcG9TYW5ndWluZW9EdG8pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VybH0vVGlwb1Nhbmd1aW5lby8ke3RpcG9TYW5ndWluZW9JZH1gLCB7XG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRpcG9TYW5ndWluZW9EdG8pLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIG5hIHJlcXVpc2nDp8OjbzogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvIG5hIHJlcXVpc2nDp8OjbzpcIiwgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRpcG9TYW5ndWluZW9Bc3luYyh0aXBvU2FuZ3VpbmVvSWQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VybH0vVGlwb1Nhbmd1aW5lby8ke3RpcG9TYW5ndWluZW9JZH1gLCB7XG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm8gbmEgcmVxdWlzacOnw6NvOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvIG5hIHJlcXVpc2nDp8OjbzpcIiwgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZVRpcG9TYW5ndWluZW9Bc3luYyxcbiAgZ2V0VGlwb3NTYW5ndWluZW9zQXN5bmMsXG4gIGdldFRpcG9TYW5ndWluZW9CeUlkQXN5bmMsXG4gIHVwZGF0ZVRpcG9TYW5ndWluZW9Bc3luYyxcbiAgZGVsZXRlVGlwb1Nhbmd1aW5lb0FzeW5jLFxufTtcbiJdLCJuYW1lcyI6WyJ1cmwiLCJjcmVhdGVUaXBvU2FuZ3VpbmVvQXN5bmMiLCJ0aXBvU2FuZ3VpbmVvRHRvIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImdldFRpcG9zU2FuZ3VpbmVvc0FzeW5jIiwiZ2V0VGlwb1Nhbmd1aW5lb0J5SWRBc3luYyIsInRpcG9TYW5ndWluZW9JZCIsInVwZGF0ZVRpcG9TYW5ndWluZW9Bc3luYyIsImxvZyIsImRlbGV0ZVRpcG9TYW5ndWluZW9Bc3luYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/services/tipoSanguineoService.js\n"));

/***/ })

});