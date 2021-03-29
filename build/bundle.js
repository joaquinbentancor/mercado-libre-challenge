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

/***/ "./config/index.ts":
/*!*************************!*\
  !*** ./config/index.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\ndotenv_1.default.config();\nexports.default = {\n    api: {\n        endpoint: process.env.MERCADO_LIBRE_API_URL,\n    }\n};\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./config/index.ts?");

/***/ }),

/***/ "./src/server/components/search/index.ts":
/*!***********************************************!*\
  !*** ./src/server/components/search/index.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getItem = exports.getItems = void 0;\nvar external_services_1 = __webpack_require__(/*! ../../external-services */ \"./src/server/external-services/index.ts\");\nvar author_1 = __importDefault(__webpack_require__(/*! ../../helpers/author */ \"./src/server/helpers/author.ts\"));\nvar getItems = function (query) { return __awaiter(void 0, void 0, void 0, function () {\n    var result, fullInformationItems, items, maxCategory;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, external_services_1.MercadoLibreAPI.fetchItems(query)];\n            case 1:\n                result = _a.sent();\n                fullInformationItems = result.results\n                    .slice(0, 4)\n                    .map(function (result) { return __awaiter(void 0, void 0, void 0, function () {\n                    var currency;\n                    return __generator(this, function (_a) {\n                        switch (_a.label) {\n                            case 0: return [4 /*yield*/, getItemSubResources({\n                                    currencyId: result.currency_id,\n                                })];\n                            case 1:\n                                currency = (_a.sent())[0];\n                                return [2 /*return*/, mapItem({ item: result, currency: currency })];\n                        }\n                    });\n                }); });\n                return [4 /*yield*/, Promise.all(fullInformationItems)];\n            case 2:\n                items = _a.sent();\n                return [4 /*yield*/, getMaxCategory(result.filters)];\n            case 3:\n                maxCategory = _a.sent();\n                return [2 /*return*/, { author: author_1.default, items: items, categories: mapCategory(maxCategory) }];\n        }\n    });\n}); };\nexports.getItems = getItems;\nvar getItem = function (itemId) { return __awaiter(void 0, void 0, void 0, function () {\n    var item, _a, currency, category, description;\n    return __generator(this, function (_b) {\n        switch (_b.label) {\n            case 0: return [4 /*yield*/, external_services_1.MercadoLibreAPI.fetchItem(itemId)];\n            case 1:\n                item = _b.sent();\n                return [4 /*yield*/, getItemSubResources({\n                        currencyId: item.currency_id,\n                        categoryId: item.category_id,\n                        itemId: itemId,\n                    })];\n            case 2:\n                _a = _b.sent(), currency = _a[0], category = _a[1], description = _a[2];\n                return [2 /*return*/, {\n                        author: author_1.default,\n                        item: mapItem({ item: item, description: description, currency: currency }),\n                        categories: mapCategory(category),\n                    }];\n        }\n    });\n}); };\nexports.getItem = getItem;\nvar mapItem = function (_a) {\n    var _b, _c;\n    var item = _a.item, _d = _a.description, description = _d === void 0 ? null : _d, _e = _a.currency, currency = _e === void 0 ? null : _e;\n    var mappedItem;\n    if (item) {\n        mappedItem = {\n            id: item.id,\n            title: item.title,\n            picture: item.thumbnail,\n            condition: item.condition,\n            free_shipping: (_b = item.shipping) === null || _b === void 0 ? void 0 : _b.free_shipping,\n            price: { amount: item.price },\n            sold_quantity: item.sold_quantity,\n            address: (_c = item.address) === null || _c === void 0 ? void 0 : _c.state_name,\n        };\n    }\n    if (currency) {\n        mappedItem = __assign(__assign({}, mappedItem), { price: __assign(__assign({}, mappedItem.price), { currency: currency.symbol, decimals: currency.decimal_places }) });\n    }\n    if (description) {\n        mappedItem = __assign(__assign({}, mappedItem), { description: description.plain_text });\n    }\n    return mappedItem;\n};\nvar mapCategory = function (category) { var _a; return (_a = category === null || category === void 0 ? void 0 : category.path_from_root) === null || _a === void 0 ? void 0 : _a.map(function (c) { return c.name; }); };\nvar getItemSubResources = function (_a) {\n    var _b = _a.currencyId, currencyId = _b === void 0 ? null : _b, _c = _a.categoryId, categoryId = _c === void 0 ? null : _c, _d = _a.itemId, itemId = _d === void 0 ? null : _d;\n    var subResources = [];\n    currencyId && subResources.push(external_services_1.MercadoLibreAPI.fetchCurrency(currencyId));\n    categoryId && subResources.push(external_services_1.MercadoLibreAPI.fetchCategory(categoryId));\n    itemId && subResources.push(external_services_1.MercadoLibreAPI.fetchItemDescription(itemId));\n    return Promise.all(subResources);\n};\nvar getMaxCategory = function (filters) { return __awaiter(void 0, void 0, void 0, function () {\n    var categoryFilter, allCategories, maxCategory;\n    var _a;\n    return __generator(this, function (_b) {\n        switch (_b.label) {\n            case 0:\n                if (!Array.isArray(filters)) {\n                    return [2 /*return*/, null];\n                }\n                categoryFilter = filters.find(function (f) { return f.id == \"category\"; });\n                if (!categoryFilter)\n                    return [2 /*return*/, null];\n                return [4 /*yield*/, Promise.all((_a = categoryFilter.values) === null || _a === void 0 ? void 0 : _a.reduce(function (acc, category) {\n                        acc.push(external_services_1.MercadoLibreAPI.fetchCategory(category.id));\n                        return acc;\n                    }, []))];\n            case 1:\n                allCategories = _b.sent();\n                maxCategory = allCategories.reduce(function (max, category) {\n                    if (category.total_items_in_this_category > max.total_items_in_this_category) {\n                        return category;\n                    }\n                    return max;\n                }, allCategories[0]);\n                return [2 /*return*/, maxCategory];\n        }\n    });\n}); };\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/server/components/search/index.ts?");

/***/ }),

/***/ "./src/server/external-services/index.ts":
/*!***********************************************!*\
  !*** ./src/server/external-services/index.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MercadoLibreAPI = void 0;\nvar axios_config_1 = __importDefault(__webpack_require__(/*! ../../shared/axios-config */ \"./src/shared/axios-config.ts\"));\nvar config_1 = __importDefault(__webpack_require__(/*! ../../../config */ \"./config/index.ts\"));\nvar MercadoLibreAPI;\n(function (MercadoLibreAPI) {\n    MercadoLibreAPI.fetchItems = function (query) {\n        return axios_config_1.default.get(config_1.default.api.endpoint + \"/sites/MLA/search?\" + query);\n    };\n    MercadoLibreAPI.fetchItem = function (itemId) {\n        return axios_config_1.default.get(config_1.default.api.endpoint + \"/items/\" + itemId);\n    };\n    MercadoLibreAPI.fetchItemDescription = function (itemId) {\n        return axios_config_1.default.get(config_1.default.api.endpoint + \"/items/\" + itemId + \"/description\");\n    };\n    MercadoLibreAPI.fetchCurrency = function (currencyId) {\n        return axios_config_1.default.get(config_1.default.api.endpoint + \"/currencies/\" + currencyId);\n    };\n    MercadoLibreAPI.fetchCategory = function (categoryId) {\n        return axios_config_1.default.get(config_1.default.api.endpoint + \"/categories/\" + categoryId);\n    };\n})(MercadoLibreAPI = exports.MercadoLibreAPI || (exports.MercadoLibreAPI = {}));\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/server/external-services/index.ts?");

/***/ }),

/***/ "./src/server/helpers/author.ts":
/*!**************************************!*\
  !*** ./src/server/helpers/author.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = {\n    name: \"Joaquin\",\n    lastname: \"Bentancor\",\n};\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/server/helpers/author.ts?");

/***/ }),

/***/ "./src/server/helpers/html-template.ts":
/*!*********************************************!*\
  !*** ./src/server/helpers/html-template.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar serialize_javascript_1 = __importDefault(__webpack_require__(/*! serialize-javascript */ \"serialize-javascript\"));\nexports.default = (function (injectableComponent, injectableData) {\n    var clientBundleScript = \"<script src=\\\"/client_bundle.js\\\"></script>\";\n    var clientBundleStyle = \"<link rel=\\\"stylesheet\\\" href=\\\"/bundle.css\\\">\";\n    return \"\\n    <!DOCTYPE html>\\n    <html lang=\\\"en\\\">\\n        <head>\\n          <meta charset=\\\"UTF-8\\\">\\n          <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n          <title>Mercado Libre</title>\\n          \" + clientBundleStyle + \"\\n          <script>window.__INITIAL_DATA__ = \" + serialize_javascript_1.default(injectableData) + \"</script>\\n        </head>\\n        <body>\\n          <div id=\\\"root\\\">\" + injectableComponent + \"</div>      \\n          \" + clientBundleScript + \"\\n        </body>\\n    </html>\\n    \";\n});\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/server/helpers/html-template.ts?");

/***/ }),

/***/ "./src/server/index.tsx":
/*!******************************!*\
  !*** ./src/server/index.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar server_1 = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar resources_1 = __importDefault(__webpack_require__(/*! ./resources */ \"./src/server/resources/index.ts\"));\nvar app_1 = __importDefault(__webpack_require__(/*! ../shared/containers/app */ \"./src/shared/containers/app/index.tsx\"));\nvar routes_1 = __webpack_require__(/*! ../shared/routes */ \"./src/shared/routes/index.ts\");\nvar html_template_1 = __importDefault(__webpack_require__(/*! ./helpers/html-template */ \"./src/server/helpers/html-template.ts\"));\nvar app = express_1.default();\nvar port = 3000;\napp.use(express_1.default.static(\"build/public\"));\napp.use(express_1.default.json());\napp.use(resources_1.default);\napp.use(function (err, res, req, next) { return next(err); });\napp.get(\"*\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var activeRoute, data, markup;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                activeRoute = routes_1.routes.find(function (route) { return react_router_dom_1.matchPath(req.path, route); });\n                return [4 /*yield*/, ((activeRoute === null || activeRoute === void 0 ? void 0 : activeRoute.fetchInitialData)\n                        ? activeRoute.fetchInitialData({ query: req.query, path: req.path })\n                        : Promise.resolve(req.path))];\n            case 1:\n                data = _a.sent();\n                markup = server_1.renderToString(react_1.default.createElement(react_router_dom_1.StaticRouter, { location: req.url },\n                    react_1.default.createElement(app_1.default, null)));\n                res.send(html_template_1.default(markup, data));\n                return [2 /*return*/];\n        }\n    });\n}); });\napp.listen(port, function () {\n    console.log(\"App listening on http://localhost:\" + port);\n});\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/server/index.tsx?");

/***/ }),

/***/ "./src/server/resources/index.ts":
/*!***************************************!*\
  !*** ./src/server/resources/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar querystring_1 = __importDefault(__webpack_require__(/*! querystring */ \"querystring\"));\nvar search_1 = __webpack_require__(/*! ../components/search */ \"./src/server/components/search/index.ts\");\nvar router = express_1.default.Router();\nrouter.get(\"/api/items\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var q, searchResults;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                q = req.query.q;\n                return [4 /*yield*/, search_1.getItems(querystring_1.default.stringify({ q: q.toString() }))];\n            case 1:\n                searchResults = _a.sent();\n                res.json(__assign({}, searchResults));\n                return [2 /*return*/];\n        }\n    });\n}); });\nrouter.get(\"/api/items/:id\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var item;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, search_1.getItem(req.params.id)];\n            case 1:\n                item = _a.sent();\n                res.json(__assign({}, item));\n                return [2 /*return*/];\n        }\n    });\n}); });\nexports.default = router;\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/server/resources/index.ts?");

/***/ }),

/***/ "./src/shared/axios-config.ts":
/*!************************************!*\
  !*** ./src/shared/axios-config.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar client = axios_1.default.create({ baseURL: \"http://localhost:3000\" });\nclient.interceptors.response.use(function (response) {\n    return response.data;\n}, function (error) {\n    console.log(error.response);\n    return Promise.reject(error.response);\n});\nexports.default = client;\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/axios-config.ts?");

/***/ }),

/***/ "./src/shared/containers/app/index.tsx":
/*!*********************************************!*\
  !*** ./src/shared/containers/app/index.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar routes_1 = __webpack_require__(/*! ../../routes */ \"./src/shared/routes/index.ts\");\nvar layout_1 = __webpack_require__(/*! ../../ui-components/layout */ \"./src/shared/ui-components/layout/index.tsx\");\nvar search_bar_1 = __importDefault(__webpack_require__(/*! ../search-bar */ \"./src/shared/containers/search-bar/index.tsx\"));\n__webpack_require__(/*! ./style.scss */ \"./src/shared/containers/app/style.scss\");\nexports.default = (function () {\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(search_bar_1.default, null),\n        react_1.default.createElement(react_router_dom_1.Switch, null, routes_1.routes.map(function (_a) {\n            var path = _a.path, exact = _a.exact, Component = _a.component, rest = __rest(_a, [\"path\", \"exact\", \"component\"]);\n            return (react_1.default.createElement(react_router_dom_1.Route, { key: path, path: path, exact: exact, render: function (props) { return (react_1.default.createElement(layout_1.Layout, null,\n                    react_1.default.createElement(Component, __assign({}, props, rest)))); } }));\n        }))));\n});\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/containers/app/index.tsx?");

/***/ }),

/***/ "./src/shared/containers/item-detail/index.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/containers/item-detail/index.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar use_server_side_data_1 = __webpack_require__(/*! ../../hooks/use-server-side-data */ \"./src/shared/hooks/use-server-side-data.ts\");\nvar breadcrumb_1 = __webpack_require__(/*! ../../ui-components/breadcrumb */ \"./src/shared/ui-components/breadcrumb/index.tsx\");\nvar item_detail_1 = __webpack_require__(/*! ../../ui-components/item-detail */ \"./src/shared/ui-components/item-detail/index.tsx\");\n__webpack_require__(/*! ./style.scss */ \"./src/shared/containers/item-detail/style.scss\");\nexports.default = (function () {\n    var getData = use_server_side_data_1.useServerSideData().getData;\n    var itemResult = getData();\n    return (react_1.default.createElement(\"div\", { className: \"item-detail\" },\n        react_1.default.createElement(breadcrumb_1.Breadcrumb, { tags: itemResult.categories }),\n        react_1.default.createElement(\"div\", { className: \"item-detail-wrapper\" }, itemResult.item && react_1.default.createElement(item_detail_1.ItemDetail, { item: itemResult.item }))));\n});\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/containers/item-detail/index.tsx?");

/***/ }),

/***/ "./src/shared/containers/search-bar/index.tsx":
/*!****************************************************!*\
  !*** ./src/shared/containers/search-bar/index.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar react_router_1 = __webpack_require__(/*! react-router */ \"react-router\");\nvar search_bar_1 = __webpack_require__(/*! ../../ui-components/search-bar */ \"./src/shared/ui-components/search-bar/index.tsx\");\nexports.default = (function () {\n    var history = react_router_1.useHistory();\n    return (react_1.default.createElement(search_bar_1.SearchBar, { onSearch: function (seed) { return history.push(\"/items?search=\" + seed); } }));\n});\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/containers/search-bar/index.tsx?");

/***/ }),

/***/ "./src/shared/containers/search-results/index.tsx":
/*!********************************************************!*\
  !*** ./src/shared/containers/search-results/index.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar react_router_1 = __webpack_require__(/*! react-router */ \"react-router\");\nvar item_box_1 = __webpack_require__(/*! ../../ui-components/item-box */ \"./src/shared/ui-components/item-box/index.tsx\");\nvar breadcrumb_1 = __webpack_require__(/*! ../../ui-components/breadcrumb */ \"./src/shared/ui-components/breadcrumb/index.tsx\");\nvar use_server_side_data_1 = __webpack_require__(/*! ../../hooks/use-server-side-data */ \"./src/shared/hooks/use-server-side-data.ts\");\n__webpack_require__(/*! ./style.scss */ \"./src/shared/containers/search-results/style.scss\");\nexports.default = (function () {\n    var _a;\n    var getData = use_server_side_data_1.useServerSideData().getData;\n    var itemsResult = getData();\n    var history = react_router_1.useHistory();\n    return (react_1.default.createElement(\"div\", { className: \"search-results\" },\n        react_1.default.createElement(breadcrumb_1.Breadcrumb, { tags: itemsResult.categories }),\n        react_1.default.createElement(\"div\", { className: \"search-results-wrapper\" }, (_a = itemsResult.items) === null || _a === void 0 ? void 0 : _a.map(function (item) { return (react_1.default.createElement(item_box_1.ItemBox, { key: item.id, item: item, onClickItem: function (itemId) { return history.push(\"/items/\" + itemId); } })); }))));\n});\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/containers/search-results/index.tsx?");

/***/ }),

/***/ "./src/shared/hooks/use-server-side-data.ts":
/*!**************************************************!*\
  !*** ./src/shared/hooks/use-server-side-data.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.useServerSideData = void 0;\nvar useServerSideData = function () {\n    var getData = function () {\n        return (typeof window !== \"undefined\" ? window.__INITIAL_DATA__ : {});\n    };\n    return { getData: getData };\n};\nexports.useServerSideData = useServerSideData;\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/hooks/use-server-side-data.ts?");

/***/ }),

/***/ "./src/shared/routes/index.ts":
/*!************************************!*\
  !*** ./src/shared/routes/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.routes = void 0;\nvar search_results_1 = __importDefault(__webpack_require__(/*! ../containers/search-results */ \"./src/shared/containers/search-results/index.tsx\"));\nvar item_detail_1 = __importDefault(__webpack_require__(/*! ../containers/item-detail */ \"./src/shared/containers/item-detail/index.tsx\"));\nvar items_1 = __webpack_require__(/*! ../services/items */ \"./src/shared/services/items/index.ts\");\nexports.routes = [\n    {\n        path: \"/items\",\n        component: search_results_1.default,\n        exact: true,\n        fetchInitialData: function (_a) {\n            var query = _a.query;\n            return items_1.search(query);\n        },\n    },\n    {\n        path: \"/items/:id\",\n        component: item_detail_1.default,\n        fetchInitialData: function (_a) {\n            var path = _a.path;\n            return items_1.getItem(path.split(\"/\").pop());\n        },\n    },\n];\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/routes/index.ts?");

/***/ }),

/***/ "./src/shared/services/items/index.ts":
/*!********************************************!*\
  !*** ./src/shared/services/items/index.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getItem = exports.search = void 0;\nvar axios_config_1 = __importDefault(__webpack_require__(/*! ../../axios-config */ \"./src/shared/axios-config.ts\"));\nvar search = function (query) { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, axios_config_1.default.get(\"/api/items?q=\" + query.search)];\n            case 1: return [2 /*return*/, _a.sent()];\n        }\n    });\n}); };\nexports.search = search;\nvar getItem = function (itemId) { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, axios_config_1.default.get(\"/api/items/\" + itemId)];\n            case 1: return [2 /*return*/, _a.sent()];\n        }\n    });\n}); };\nexports.getItem = getItem;\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/services/items/index.ts?");

/***/ }),

/***/ "./src/shared/ui-components/breadcrumb/index.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/ui-components/breadcrumb/index.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Breadcrumb = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\n__webpack_require__(/*! ./style.scss */ \"./src/shared/ui-components/breadcrumb/style.scss\");\nvar Breadcrumb = function (_a) {\n    var tags = _a.tags;\n    return (react_1.default.createElement(\"div\", { className: \"breadcrumb\" },\n        react_1.default.createElement(\"ul\", { className: \"breadcrumb-list\" }, tags === null || tags === void 0 ? void 0 : tags.map(function (item, key) { return (react_1.default.createElement(\"li\", { className: \"breadcrumb-item\", key: key }, item)); }))));\n};\nexports.Breadcrumb = Breadcrumb;\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/ui-components/breadcrumb/index.tsx?");

/***/ }),

/***/ "./src/shared/ui-components/item-box/index.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/ui-components/item-box/index.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ItemBox = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar shipping_png_1 = __importDefault(__webpack_require__(/*! ../../../assets/images/shipping.png */ \"./src/assets/images/shipping.png\"));\n__webpack_require__(/*! ./style.scss */ \"./src/shared/ui-components/item-box/style.scss\");\nvar ItemBox = function (_a) {\n    var _b, _c;\n    var item = _a.item, onClickItem = _a.onClickItem;\n    return (react_1.default.createElement(\"div\", { className: \"box-wrapper\" },\n        react_1.default.createElement(\"div\", { className: \"box-card\", onClick: function () { return onClickItem(item.id); } },\n            react_1.default.createElement(\"div\", { className: \"result-image\" },\n                react_1.default.createElement(\"img\", { src: item.picture })),\n            react_1.default.createElement(\"div\", { className: \"result-content-wrapper\" },\n                react_1.default.createElement(\"div\", { className: \"result-content-header\" },\n                    react_1.default.createElement(\"div\", { className: \"result-content-price\" },\n                        react_1.default.createElement(\"span\", null, (_b = item.price) === null || _b === void 0 ? void 0 :\n                            _b.currency,\n                            \" \", (_c = item.price) === null || _c === void 0 ? void 0 :\n                            _c.amount),\n                        item.free_shipping && react_1.default.createElement(\"img\", { src: shipping_png_1.default })),\n                    react_1.default.createElement(\"div\", { className: \"result-content-place\" },\n                        react_1.default.createElement(\"span\", null, item.address))),\n                react_1.default.createElement(\"div\", { className: \"result-content-title\" },\n                    react_1.default.createElement(\"span\", null, item.title))))));\n};\nexports.ItemBox = ItemBox;\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/ui-components/item-box/index.tsx?");

/***/ }),

/***/ "./src/shared/ui-components/item-detail/index.tsx":
/*!********************************************************!*\
  !*** ./src/shared/ui-components/item-detail/index.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ItemDetail = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\n__webpack_require__(/*! ./style.scss */ \"./src/shared/ui-components/item-detail/style.scss\");\nvar ItemDetail = function (_a) {\n    var item = _a.item;\n    return (react_1.default.createElement(\"div\", { className: \"detail-wrapper\" },\n        react_1.default.createElement(\"div\", { className: \"detail-card\" },\n            react_1.default.createElement(\"div\", { style: { display: \"flex\" } },\n                react_1.default.createElement(\"div\", { className: \"result-image\" },\n                    react_1.default.createElement(\"img\", { src: item.picture })),\n                react_1.default.createElement(\"div\", { className: \"item-condition-resume\" },\n                    react_1.default.createElement(\"div\", { className: \"item-condition-wrapper\" },\n                        react_1.default.createElement(\"span\", null,\n                            item.condition,\n                            \" - \",\n                            item.sold_quantity,\n                            \" vendidos\")),\n                    react_1.default.createElement(\"div\", { className: \"item-title-wrapper\" },\n                        react_1.default.createElement(\"span\", null, item.title)),\n                    react_1.default.createElement(\"div\", { className: \"item-price-wrapper\" },\n                        react_1.default.createElement(\"span\", null,\n                            item.price.currency,\n                            \" \",\n                            item.price.amount)),\n                    react_1.default.createElement(\"div\", { className: \"buy-button-wrapper\" },\n                        react_1.default.createElement(\"button\", { className: \"buy-button\" }, \" Comprar\")))),\n            react_1.default.createElement(\"div\", { className: \"item-description-wrapper\" },\n                react_1.default.createElement(\"div\", { className: \"item-description-title\" },\n                    react_1.default.createElement(\"span\", null, \"Descripci\\u00F3n del producto\")),\n                react_1.default.createElement(\"div\", { className: \"item-description-content\" },\n                    react_1.default.createElement(\"p\", null, item.description))))));\n};\nexports.ItemDetail = ItemDetail;\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/ui-components/item-detail/index.tsx?");

/***/ }),

/***/ "./src/shared/ui-components/layout/index.tsx":
/*!***************************************************!*\
  !*** ./src/shared/ui-components/layout/index.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Layout = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\n__webpack_require__(/*! ./style.scss */ \"./src/shared/ui-components/layout/style.scss\");\nvar Layout = function (_a) {\n    var children = _a.children;\n    return (react_1.default.createElement(\"div\", { className: \"layout\" },\n        react_1.default.createElement(\"div\", { className: \"layout-children-wrapper\" }, children)));\n};\nexports.Layout = Layout;\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/ui-components/layout/index.tsx?");

/***/ }),

/***/ "./src/shared/ui-components/search-bar/index.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/ui-components/search-bar/index.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.SearchBar = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar search_png_1 = __importDefault(__webpack_require__(/*! ../../../assets/images/search.png */ \"./src/assets/images/search.png\"));\nvar logo_png_1 = __importDefault(__webpack_require__(/*! ../../../assets/images/logo.png */ \"./src/assets/images/logo.png\"));\n__webpack_require__(/*! ./style.scss */ \"./src/shared/ui-components/search-bar/style.scss\");\nvar SearchBar = function (_a) {\n    var onSearch = _a.onSearch;\n    var _b = react_1.useState(null), searchSeed = _b[0], setSearchSeed = _b[1];\n    var onSubmitForm = function (evt) {\n        evt.preventDefault();\n        if (searchSeed) {\n            onSearch(searchSeed);\n        }\n    };\n    return (react_1.default.createElement(\"div\", { className: \"nav\" },\n        react_1.default.createElement(\"div\", { className: \"logo-wrapper\" },\n            react_1.default.createElement(\"img\", { src: logo_png_1.default, alt: \"\" })),\n        react_1.default.createElement(\"div\", { className: \"form-wrapper\" },\n            react_1.default.createElement(\"form\", { className: \"form\", onSubmit: onSubmitForm },\n                react_1.default.createElement(\"input\", { onChange: function (evt) { return setSearchSeed(evt.target.value); }, type: \"text\", className: \"input\", placeholder: \"Nunca dejes de buscar\" }),\n                react_1.default.createElement(\"button\", { className: \"search-button\" },\n                    react_1.default.createElement(\"img\", { src: search_png_1.default }))))));\n};\nexports.SearchBar = SearchBar;\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/ui-components/search-bar/index.tsx?");

/***/ }),

/***/ "./src/shared/containers/app/style.scss":
/*!**********************************************!*\
  !*** ./src/shared/containers/app/style.scss ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_variables_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js!../../styles/_variables.scss */ \"./node_modules/css-loader/dist/cjs.js!./src/shared/styles/_variables.scss\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_grid_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js!../../styles/_grid.scss */ \"./node_modules/css-loader/dist/cjs.js!./src/shared/styles/_grid.scss\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_variables_scss__WEBPACK_IMPORTED_MODULE_1__.default);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_grid_scss__WEBPACK_IMPORTED_MODULE_2__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n  background-color: $ultra-light-color;\\n  font-family: Proxima Nova, -apple-system, Helvetica Neue, Helvetica, Roboto,\\n    Arial, sans-serif;\\n\\n   ul {\\n    margin: 0;\\n    padding: 0;\\n  }\\n\\n  p {\\n    margin: 0;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/containers/app/style.scss?");

/***/ }),

/***/ "./src/shared/containers/item-detail/style.scss":
/*!******************************************************!*\
  !*** ./src/shared/containers/item-detail/style.scss ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_variables_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js!../../styles/_variables.scss */ \"./node_modules/css-loader/dist/cjs.js!./src/shared/styles/_variables.scss\");\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_variables_scss__WEBPACK_IMPORTED_MODULE_1__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".item-detail {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  \\n  .item-detail-wrapper {\\n    margin: $md-margin 0 0 0;\\n  }\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/containers/item-detail/style.scss?");

/***/ }),

/***/ "./src/shared/containers/search-results/style.scss":
/*!*********************************************************!*\
  !*** ./src/shared/containers/search-results/style.scss ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_variables_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js!../../styles/_variables.scss */ \"./node_modules/css-loader/dist/cjs.js!./src/shared/styles/_variables.scss\");\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_variables_scss__WEBPACK_IMPORTED_MODULE_1__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".search-results {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n\\n  .search-results-wrapper {\\n    margin: $md-margin 0 0 0;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/containers/search-results/style.scss?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/shared/styles/_grid.scss":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/shared/styles/_grid.scss ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@mixin ml-width($column-level) {\\n  width: 8.33% * $column-level;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/styles/_grid.scss?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/shared/styles/_variables.scss":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/shared/styles/_variables.scss ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"$primary-color: #FFE600;\\n$ultra-light-color: #EEEEEE;\\n$light-color: #999999;\\n$dark-color: #333333;\\n$button-color: #3483FA;\\n$md-margin: 16px;\\n$lg-margin: 32px;\\n$border-radius: 4px;\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/styles/_variables.scss?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/shared/ui-components/breadcrumb/style.scss":
/*!********************************************************!*\
  !*** ./src/shared/ui-components/breadcrumb/style.scss ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_variables_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js!../../styles/_variables.scss */ \"./node_modules/css-loader/dist/cjs.js!./src/shared/styles/_variables.scss\");\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_variables_scss__WEBPACK_IMPORTED_MODULE_1__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".breadcrumb {\\n  .breadcrumb-list {\\n    list-style: none;\\n    color: $light-color;\\n\\n    .breadcrumb-item {\\n      display: inline;\\n      font-size: 14px;\\n    }\\n\\n    li + li:before {\\n      padding: 8px;\\n      content: \\\">\\\";\\n    }\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/ui-components/breadcrumb/style.scss?");

/***/ }),

/***/ "./src/shared/ui-components/item-box/style.scss":
/*!******************************************************!*\
  !*** ./src/shared/ui-components/item-box/style.scss ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_variables_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js!../../styles/_variables.scss */ \"./node_modules/css-loader/dist/cjs.js!./src/shared/styles/_variables.scss\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_grid_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js!../../styles/_grid.scss */ \"./node_modules/css-loader/dist/cjs.js!./src/shared/styles/_grid.scss\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_variables_scss__WEBPACK_IMPORTED_MODULE_1__.default);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_grid_scss__WEBPACK_IMPORTED_MODULE_2__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".box-wrapper {\\n  display: flex;\\n  background-color: #fff;\\n  flex-grow: 1;\\n  border-bottom: thin solid $ultra-light-color;\\n  list-style: none;\\n\\n  .box-card {\\n    display: inline-flex;\\n    flex-direction: row;\\n    margin: $md-margin 0 $md-margin $md-margin;\\n    width: 100%;\\n\\n    &:hover {\\n      cursor: pointer;\\n    }\\n\\n    .result-image {\\n      border-radius: $border-radius;\\n      margin: 0 $md-margin 0 0;\\n\\n      img {\\n        width: 180px;\\n        height: 180px;\\n        @media only screen and (max-width: 768px) {\\n          height: 100px;\\n          width: 100px;\\n        }\\n      }\\n    }\\n\\n    .result-content-wrapper {\\n      width: 100%;\\n      display: flex;\\n      flex-direction: column;\\n\\n      .result-content-header {\\n        display: flex;\\n        align-items: center;\\n        margin: 0 0 $lg-margin 0;\\n\\n        .result-content-price {\\n          @include ml-width(9);\\n          font-size: 24px;\\n\\n          span {\\n            padding-right: 10px;\\n          }\\n        }\\n\\n        .result-content-place {\\n          @include ml-width(3);\\n          width: 100px;\\n          font-size: 12px;\\n        }\\n      }\\n\\n      .result-content-title {\\n        font-size: 18px;\\n      }\\n    }\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/ui-components/item-box/style.scss?");

/***/ }),

/***/ "./src/shared/ui-components/item-detail/style.scss":
/*!*********************************************************!*\
  !*** ./src/shared/ui-components/item-detail/style.scss ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_variables_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js!../../styles/_variables.scss */ \"./node_modules/css-loader/dist/cjs.js!./src/shared/styles/_variables.scss\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_grid_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js!../../styles/_grid.scss */ \"./node_modules/css-loader/dist/cjs.js!./src/shared/styles/_grid.scss\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_variables_scss__WEBPACK_IMPORTED_MODULE_1__.default);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_grid_scss__WEBPACK_IMPORTED_MODULE_2__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".detail-wrapper {\\n  display: flex;\\n  background-color: #fff;\\n\\n  .detail-card {\\n    margin: $lg-margin;\\n\\n    .result-image {\\n      @include ml-width(7);\\n      @media only screen and (max-width: 768px) {\\n        @include ml-width(5);\\n      }\\n      display: flex;\\n      justify-content: center;\\n      align-items: center;\\n\\n      img {\\n        width: 480px;\\n        @media only screen and (max-width: 768px) {\\n          width: 280px;\\n        }\\n      }\\n    }\\n\\n    .item-condition-resume {\\n      @include ml-width(5);\\n      @media only screen and (max-width: 768px) {\\n        @include ml-width(6);\\n      }\\n\\n      .item-condition-wrapper {\\n        font-size: 14px;\\n      }\\n\\n      .item-title-wrapper {\\n        margin: $md-margin 0 0 0;\\n        font-size: 24px;\\n      }\\n\\n      .item-price-wrapper {\\n        margin: $lg-margin 0 0 0;\\n        font-size: 46px;\\n      }\\n\\n      .buy-button-wrapper {\\n        margin: $lg-margin 0 0 0;\\n        .buy-button {\\n          background: $button-color;\\n          border: none;\\n          color: white;\\n          padding: 8px;\\n          width: 100%;\\n          border-radius: 4px;\\n        }\\n      }\\n    }\\n\\n    .item-description-wrapper {\\n      margin: $lg-margin 0 0 0;\\n      .item-description-title {\\n        font-size: 32px;\\n      }\\n\\n      .item-description-content {\\n        @include ml-width(7);\\n        @media only screen and (max-width: 768px) {\\n          width: 100%;\\n        }\\n\\n        margin: $lg-margin 0 0 0;\\n        font-size: 16px;\\n      }\\n    }\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/ui-components/item-detail/style.scss?");

/***/ }),

/***/ "./src/shared/ui-components/layout/style.scss":
/*!****************************************************!*\
  !*** ./src/shared/ui-components/layout/style.scss ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_variables_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js!../../styles/_variables.scss */ \"./node_modules/css-loader/dist/cjs.js!./src/shared/styles/_variables.scss\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_grid_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js!../../styles/_grid.scss */ \"./node_modules/css-loader/dist/cjs.js!./src/shared/styles/_grid.scss\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_variables_scss__WEBPACK_IMPORTED_MODULE_1__.default);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_grid_scss__WEBPACK_IMPORTED_MODULE_2__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".layout {\\n  display: flex;\\n  justify-content: center;\\n  margin: 82px 0 $md-margin 0;\\n\\n  .layout-children-wrapper {\\n    @include ml-width(10);\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/ui-components/layout/style.scss?");

/***/ }),

/***/ "./src/shared/ui-components/search-bar/style.scss":
/*!********************************************************!*\
  !*** ./src/shared/ui-components/search-bar/style.scss ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_variables_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js!../../styles/_variables.scss */ \"./node_modules/css-loader/dist/cjs.js!./src/shared/styles/_variables.scss\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_grid_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js!../../styles/_grid.scss */ \"./node_modules/css-loader/dist/cjs.js!./src/shared/styles/_grid.scss\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_variables_scss__WEBPACK_IMPORTED_MODULE_1__.default);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_grid_scss__WEBPACK_IMPORTED_MODULE_2__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".nav {\\n  background-color: $primary-color;\\n  height: 66px;\\n  display: flex;\\n  width: 100%;\\n  justify-content: center;\\n  position: fixed;\\n  top: 0;\\n\\n  .logo-wrapper {\\n    @include ml-width(1);\\n    @media only screen and (max-width: 768px) {\\n      @include ml-width(2);\\n    }\\n\\n    padding: 20px 0;\\n    display: flex;\\n    align-items: center;\\n  }\\n\\n  .form-wrapper {\\n    @include ml-width(9);\\n    @media only screen and (max-width: 768px) {\\n      @include ml-width(8);\\n    }\\n\\n    .form {\\n      height: 100%;\\n      width: 100%;\\n      padding: 0;\\n      margin: 0;\\n      position: relative;\\n\\n      .input {\\n        height: 30px;\\n        border: none;\\n        border-radius: $border-radius 0 0 $border-radius;\\n        margin: 12px 0;\\n        width: calc(100% - 54px);\\n        font-size: 15px;\\n        padding: 6px 12px;\\n        outline: none;\\n      }\\n\\n      .search-button {\\n        margin: 12px 0px;\\n        border-radius: 0 $border-radius $border-radius 0;\\n        height: 42px;\\n        width: 42px;\\n        border: none;\\n        position: absolute;\\n        right: 0;\\n        top: 0;\\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n\\n        &:hover {\\n          cursor: pointer;\\n        }\\n\\n        &:focus {\\n          outline: none;\\n        }\\n      }\\n    }\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/shared/ui-components/search-bar/style.scss?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"/6e1b2203dcf4f245660546bd49a616de.png\");\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/assets/images/logo.png?");

/***/ }),

/***/ "./src/assets/images/search.png":
/*!**************************************!*\
  !*** ./src/assets/images/search.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"/1d86c0e4ea35d3c3da1f3bfe51884738.png\");\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/assets/images/search.png?");

/***/ }),

/***/ "./src/assets/images/shipping.png":
/*!****************************************!*\
  !*** ./src/assets/images/shipping.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"/ab6bfe1ed7d9a4614387f1d0980fc37e.png\");\n\n//# sourceURL=webpack://mercado-libre-challenge/./src/assets/images/shipping.png?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");;

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");;

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

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-router");;

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