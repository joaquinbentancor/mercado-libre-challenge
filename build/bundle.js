/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/server/helpers/html-template.ts":
/*!*********************************************!*\
  !*** ./src/server/helpers/html-template.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar serialize_javascript_1 = __importDefault(__webpack_require__(/*! serialize-javascript */ \"serialize-javascript\"));\nexports.default = (function (injectableComponent, injectableData) {\n    var clientBundleScript = \"<script src=\\\"client_bundle.js\\\"></script>\";\n    var clientBundleStyle = \"<link rel=\\\"stylesheet\\\" href=\\\"bundle.css\\\">\";\n    return \"\\n    <!DOCTYPE html>\\n    <html lang=\\\"en\\\">\\n        <head>\\n            <meta charset=\\\"UTF-8\\\">\\n            <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n            <title>Mercado Libre</title>\\n            \" + clientBundleStyle + \"\\n            <script>window.__INITIAL_DATA__ = \" + serialize_javascript_1.default(injectableData) + \"</script>\\n        </head>\\n        <body>\\n            <div id=\\\"root\\\">\" + injectableComponent + \"</div>\\n            \" + clientBundleScript + \"\\n        </body>\\n    </html>\\n    \";\n});\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/server/helpers/html-template.ts?");

/***/ }),

/***/ "./src/server/index.tsx":
/*!******************************!*\
  !*** ./src/server/index.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar server_1 = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar html_template_1 = __importDefault(__webpack_require__(/*! ./helpers/html-template */ \"./src/server/helpers/html-template.ts\"));\nvar app_1 = __webpack_require__(/*! ../shared/components/app */ \"./src/shared/components/app/index.tsx\");\nvar app = express_1.default();\nvar port = 3000;\napp.use(express_1.default.static(\"build/public\"));\napp.use(express_1.default.json());\napp.get(\"*\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var markup;\n    return __generator(this, function (_a) {\n        markup = server_1.renderToString(react_1.default.createElement(react_router_dom_1.StaticRouter, { location: req.url },\n            react_1.default.createElement(app_1.App, null)));\n        res.send(html_template_1.default(markup, { test: \"test\" }));\n        return [2 /*return*/];\n    });\n}); });\napp.listen(port, function () {\n    console.log(\"App listening on http://localhost:\" + port);\n});\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/server/index.tsx?");

/***/ }),

/***/ "./src/shared/components/app/index.tsx":
/*!*********************************************!*\
  !*** ./src/shared/components/app/index.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.App = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar search_bar_1 = __webpack_require__(/*! ../search-bar */ \"./src/shared/components/search-bar/index.tsx\");\nvar search_results_1 = __webpack_require__(/*! ../../containers/search-results */ \"./src/shared/containers/search-results/index.tsx\");\n__webpack_require__(/*! ./style.scss */ \"./src/shared/components/app/style.scss\");\nvar App = function () {\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(search_bar_1.SearchBar, null),\n        react_1.default.createElement(search_results_1.SearchResults, null)));\n};\nexports.App = App;\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/components/app/index.tsx?");

/***/ }),

/***/ "./src/shared/components/result-box/index.tsx":
/*!****************************************************!*\
  !*** ./src/shared/components/result-box/index.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ResultBox = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar shipping_png_1 = __importDefault(__webpack_require__(/*! ../../../assets/images/shipping.png */ \"./src/assets/images/shipping.png\"));\n__webpack_require__(/*! ./style.scss */ \"./src/shared/components/result-box/style.scss\");\nvar ResultBox = function () {\n    return (react_1.default.createElement(\"div\", { className: \"result-wrapper\" },\n        react_1.default.createElement(\"div\", { className: \"result-card\" },\n            react_1.default.createElement(\"div\", { className: \"result-image col-2\" },\n                react_1.default.createElement(\"img\", { src: shipping_png_1.default })),\n            react_1.default.createElement(\"div\", { className: \"result-content-wrapper\" },\n                react_1.default.createElement(\"div\", { className: \"result-content-header\" },\n                    react_1.default.createElement(\"div\", { className: \"result-content-price col-1\" },\n                        react_1.default.createElement(\"span\", null, \"$ 2000\")),\n                     true && (react_1.default.createElement(\"div\", { className: \"col-7\" },\n                        react_1.default.createElement(\"img\", { src: shipping_png_1.default }))),\n                    react_1.default.createElement(\"div\", { className: \"result-content-place col-2\" },\n                        react_1.default.createElement(\"span\", null, \"Capital Federal\")),\n                    react_1.default.createElement(\"div\", null)),\n                react_1.default.createElement(\"div\", { className: \"result-content-description\" },\n                    react_1.default.createElement(\"span\", null, \"Test very very very large description.\"))))));\n};\nexports.ResultBox = ResultBox;\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/components/result-box/index.tsx?");

/***/ }),

/***/ "./src/shared/components/search-bar/index.tsx":
/*!****************************************************!*\
  !*** ./src/shared/components/search-bar/index.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.SearchBar = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar search_png_1 = __importDefault(__webpack_require__(/*! ../../../assets/images/search.png */ \"./src/assets/images/search.png\"));\nvar logo_png_1 = __importDefault(__webpack_require__(/*! ../../../assets/images/logo.png */ \"./src/assets/images/logo.png\"));\n__webpack_require__(/*! ./style.scss */ \"./src/shared/components/search-bar/style.scss\");\nvar SearchBar = function () {\n    return (react_1.default.createElement(\"div\", { className: \"nav\" },\n        react_1.default.createElement(\"div\", { className: \"logo-wrapper col-1\" },\n            react_1.default.createElement(\"img\", { src: logo_png_1.default, alt: \"\" })),\n        react_1.default.createElement(\"div\", { className: \"col-9\" },\n            react_1.default.createElement(\"form\", { className: \"form\" },\n                react_1.default.createElement(\"input\", { type: \"text\", className: \"input\", placeholder: \"Nunca dejes de buscar\" }),\n                react_1.default.createElement(\"button\", { className: \"button\" },\n                    react_1.default.createElement(\"img\", { src: search_png_1.default, alt: \"\" }))))));\n};\nexports.SearchBar = SearchBar;\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/components/search-bar/index.tsx?");

/***/ }),

/***/ "./src/shared/containers/search-results/index.tsx":
/*!********************************************************!*\
  !*** ./src/shared/containers/search-results/index.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.SearchResults = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar result_box_1 = __webpack_require__(/*! ../../components/result-box */ \"./src/shared/components/result-box/index.tsx\");\n__webpack_require__(/*! ./style.scss */ \"./src/shared/containers/search-results/style.scss\");\nvar SearchResults = function () {\n    return (react_1.default.createElement(\"div\", { className: \"search-results\" },\n        react_1.default.createElement(\"div\", { className: \"col-10\" }, [0, 1, 2, 3].map(function (item) { return (react_1.default.createElement(result_box_1.ResultBox, { key: item })); }))));\n};\nexports.SearchResults = SearchResults;\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/containers/search-results/index.tsx?");

/***/ }),

/***/ "./src/shared/components/app/style.scss":
/*!**********************************************!*\
  !*** ./src/shared/components/app/style.scss ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_variables_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js!../../styles/_variables.scss */ \"./node_modules/css-loader/dist/cjs.js!./src/shared/styles/_variables.scss\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_grid_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js!../../styles/_grid.scss */ \"./node_modules/css-loader/dist/cjs.js!./src/shared/styles/_grid.scss\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_variables_scss__WEBPACK_IMPORTED_MODULE_1__.default);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_grid_scss__WEBPACK_IMPORTED_MODULE_2__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n  background-color: $light-color;\\n  font-family: Proxima Nova, -apple-system, Helvetica Neue, Helvetica, Roboto,\\n    Arial, sans-serif;\\n\\n  ol {\\n    margin: 0;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/components/app/style.scss?");

/***/ }),

/***/ "./src/shared/components/result-box/style.scss":
/*!*****************************************************!*\
  !*** ./src/shared/components/result-box/style.scss ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_variables_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js!../../styles/_variables.scss */ \"./node_modules/css-loader/dist/cjs.js!./src/shared/styles/_variables.scss\");\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_variables_scss__WEBPACK_IMPORTED_MODULE_1__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".result-wrapper {\\n  display: flex;\\n  background-color: #fff;\\n  flex-grow: 1;\\n  border-bottom: thin solid $light-color;\\n  list-style: none;\\n\\n  .result-card {\\n    display: inline-flex;\\n    flex-direction: row;\\n    padding: $md-padding 0 $md-padding $md-padding;\\n    position: relative;\\n    width: 100%;\\n\\n    .result-image {\\n      border-radius: $border-radius;\\n      box-sizing: content-box;\\n      flex-shrink: 0;\\n      margin: 0 $md-padding 0 0;\\n\\n      img {\\n        width: 180px;\\n        height: 180px;\\n      }\\n    }\\n\\n    .result-content-wrapper {\\n      width: 100%;\\n      display: flex;\\n      flex-direction: column;\\n\\n      .result-content-header {\\n        display: flex;\\n        align-items: center;\\n        justify-content: space-between;\\n        padding-bottom: $lg-padding;\\n\\n        .result-content-price {\\n          font-size: $xlg-font-size;\\n        }\\n\\n        .result-content-place {\\n          width: 100px;\\n          font-size: $xs-font-size;\\n        }\\n      }\\n\\n      .result-content-description {\\n        font-size: $md-font-size;\\n      }\\n    }\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/components/result-box/style.scss?");

/***/ }),

/***/ "./src/shared/components/search-bar/style.scss":
/*!*****************************************************!*\
  !*** ./src/shared/components/search-bar/style.scss ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_variables_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js!../../styles/_variables.scss */ \"./node_modules/css-loader/dist/cjs.js!./src/shared/styles/_variables.scss\");\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_variables_scss__WEBPACK_IMPORTED_MODULE_1__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".nav {\\n  background-color: $primary-color;\\n  height: 66px;\\n  display: flex;\\n  width: 100%;\\n  justify-content: center;\\n\\n  .logo-wrapper {\\n    padding: 20px 0;\\n    display: flex;\\n    align-items: center;\\n  }\\n\\n  .form {\\n    height: 100%;\\n    width: 100%;\\n    padding: 0;\\n    margin: 0;\\n    position: relative;\\n\\n    .input {\\n      height: 30px;\\n      border: none;\\n      border-radius: $border-radius 0 0 $border-radius;\\n      margin: 12px 0;\\n      width: calc(100% - 54px);\\n      font-size: 15px;\\n      padding: 6px 12px;\\n      outline: none;\\n    }\\n\\n    .button {\\n      margin: 12px 0px;\\n      border-radius: 0 $border-radius $border-radius 0;\\n      height: 42px;\\n      width: 42px;\\n      border: none;\\n      position: absolute;\\n      right: 0;\\n      top: 0;\\n      display: flex;\\n      align-items: center;\\n      justify-content: center;\\n    }\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/components/search-bar/style.scss?");

/***/ }),

/***/ "./src/shared/containers/search-results/style.scss":
/*!*********************************************************!*\
  !*** ./src/shared/containers/search-results/style.scss ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_variables_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js!../../styles/_variables.scss */ \"./node_modules/css-loader/dist/cjs.js!./src/shared/styles/_variables.scss\");\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_variables_scss__WEBPACK_IMPORTED_MODULE_1__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".search-results {\\n  width: 100%;\\n  display: flex;\\n  padding-top: $md-padding;\\n  justify-content: center;\\n}\\n\\n.search-results > div {\\n  display: inline-flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  padding: $md-padding 0;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/containers/search-results/style.scss?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/shared/styles/_grid.scss":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/shared/styles/_grid.scss ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".col-1 {\\n  width: 8.33%;\\n}\\n.col-2 {\\n  width: 16.66%;\\n}\\n.col-3 {\\n  width: 25%;\\n}\\n.col-4 {\\n  width: 33.33%;\\n}\\n.col-5 {\\n  width: 41.66%;\\n}\\n.col-6 {\\n  width: 50%;\\n}\\n.col-7 {\\n  width: 58.33%;\\n}\\n.col-8 {\\n  width: 66.66%;\\n}\\n.col-9 {\\n  width: 75%;\\n}\\n.col-10 {\\n  width: 83.33%;\\n}\\n.col-11 {\\n  width: 91.66%;\\n}\\n.col-12 {\\n  width: 100%;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/styles/_grid.scss?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/shared/styles/_variables.scss":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/shared/styles/_variables.scss ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"$primary-color: #ffe600;\\n$light-color: #eee;\\n$md-padding: 16px;\\n$lg-padding: 32px;\\n$border-radius: 4px;\\n$xs-font-size: 12px;\\n$md-font-size: 14px;\\n$lg-font-size: 18px;\\n$xlg-font-size: 24px;\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/styles/_variables.scss?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://mercado-libre-challenge/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"./6e1b2203dcf4f245660546bd49a616de.png\");\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/assets/images/logo.png?");

/***/ }),

/***/ "./src/assets/images/search.png":
/*!**************************************!*\
  !*** ./src/assets/images/search.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"./1d86c0e4ea35d3c3da1f3bfe51884738.png\");\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/assets/images/search.png?");

/***/ }),

/***/ "./src/assets/images/shipping.png":
/*!****************************************!*\
  !*** ./src/assets/images/shipping.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"./ab6bfe1ed7d9a4614387f1d0980fc37e.png\");\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/assets/images/shipping.png?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");;

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("serialize-javascript");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/index.tsx");
/******/ 	
/******/ })()
;