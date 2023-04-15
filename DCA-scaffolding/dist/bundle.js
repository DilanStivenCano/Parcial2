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

/***/ "./src/components/button/button.ts":
/*!*****************************************!*\
  !*** ./src/components/button/button.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeButton\": () => (/* binding */ AttributeButton),\n/* harmony export */   \"default\": () => (/* binding */ Button)\n/* harmony export */ });\nvar _a;\nvar AttributeButton;\n(function (AttributeButton) {\n    AttributeButton[\"btn_categorie\"] = \"btn_categorie\";\n})(AttributeButton || (AttributeButton = {}));\nclass Button extends HTMLElement {\n    static get observedAttributes() {\n        const button = {\n            btn_categorie: null,\n        };\n        return Object.keys(button);\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = '';\n        const button = this.ownerDocument.createElement('button');\n    }\n}\n(_a = undefined.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(button);\ncustomElements.define('app-button', Button);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/button/button.ts?");

/***/ }),

/***/ "./src/components/card/card.ts":
/*!*************************************!*\
  !*** ./src/components/card/card.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeCard\": () => (/* binding */ AttributeCard),\n/* harmony export */   \"AttributeFigure\": () => (/* binding */ AttributeFigure),\n/* harmony export */   \"default\": () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button/button */ \"./src/components/button/button.ts\");\n\nvar AttributeCard;\n(function (AttributeCard) {\n    AttributeCard[\"categories\"] = \"categories\";\n    AttributeCard[\"btn_categorie\"] = \"btn_categorie\";\n})(AttributeCard || (AttributeCard = {}));\nvar AttributeFigure;\n(function (AttributeFigure) {\n})(AttributeFigure || (AttributeFigure = {}));\nclass Card extends HTMLElement {\n    static get observedAttributes() {\n        const card = {\n            categories: null,\n            btn_categorie: null,\n        };\n        return Object.keys(card);\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    constructor() {\n        super();\n        this.categories = \"\";\n        this.btn_categorie = \"\";\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const container = this.ownerDocument.createElement('section');\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\n            <section class=\"container\">\n            <h1>${this.categories}</h1>\n            </section>\n        `;\n        const button = this.ownerDocument.createElement('app-button');\n        button.setAttribute(_button_button__WEBPACK_IMPORTED_MODULE_0__.AttributeButton.btn_categorie, this.btn_categorie);\n        container.appendChild(button);\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(container);\n    }\n}\ncustomElements.define('app-card', Card);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/card/card.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './components/index'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _services_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/data */ \"./src/services/data.ts\");\n/* harmony import */ var _components_card_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/card/card */ \"./src/components/card/card.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const data = yield (0,_services_data__WEBPACK_IMPORTED_MODULE_1__.getData)();\n            this.render(data);\n        });\n    }\n    render(data) {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = '';\n        data.forEach((e) => {\n            var _a;\n            const card = this.ownerDocument.createElement('app-card');\n            card.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_2__.AttributeCard.categories, e.categories);\n            card.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_2__.AttributeCard.btn_categorie, e.btn_categorie);\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(card);\n        });\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ }),

/***/ "./src/services/data.ts":
/*!******************************!*\
  !*** ./src/services/data.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nfunction getData() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const data = yield fetch('https://api.chucknorris.io/jokes/categories').then(res => res.json());\n            console.log(data);\n            return data;\n        }\n        catch (error) {\n            console.error(error);\n        }\n    });\n}\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/services/data.ts?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;