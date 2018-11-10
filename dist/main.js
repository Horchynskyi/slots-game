/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony import */ var _reels_zone_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reels_zone/index */ \"./src/js/reels_zone/index.js\");\n\r\n\r\n\r\nclass Game extends PIXI.Application {\r\n  constructor() {\r\n    super(window.innerWidth, window.innerHeight, {backgroundColor : 0x1099bb});\r\n    document.body.appendChild(this.view);\r\n    window.game = this;\r\n\r\n    const reelsZone = new _reels_zone_index__WEBPACK_IMPORTED_MODULE_0__[\"ReelsZone\"]();\r\n    reelsZone.position.set(this.screen.width * 0.5, this.screen.height * 0.5);\r\n\r\n    this.stage.addChild(reelsZone);\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/js/game.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources */ \"./src/js/resources.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/js/game.js\");\n\r\n\r\n\r\n\r\n\r\n_resources__WEBPACK_IMPORTED_MODULE_0__[\"RESOURCES\"].forEach((resourceData) => {\r\n  PIXI.loader.add(resourceData.name, resourceData.path, { crossOrigin: '' });\r\n});\r\n\r\nPIXI.loader.load(() => {\r\n  new _game__WEBPACK_IMPORTED_MODULE_1__[\"Game\"]();\r\n});\r\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/reels_zone/index.js":
/*!************************************!*\
  !*** ./src/js/reels_zone/index.js ***!
  \************************************/
/*! exports provided: ReelsZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ReelsZone\", function() { return ReelsZone; });\n/* harmony import */ var _reel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reel */ \"./src/js/reels_zone/reel.js\");\n\r\n\r\n\r\nclass ReelsZone extends PIXI.Container {\r\n  constructor() {\r\n    super();\r\n\r\n    const reelsContainer = new PIXI.Container();\r\n    this.addChild(reelsContainer);\r\n\r\n    const offsetX = 180;\r\n    for ( let i = 0; i < 5; i++ ) {\r\n      const reel = new _reel__WEBPACK_IMPORTED_MODULE_0__[\"Reel\"]();\r\n      reel.x = offsetX * i;\r\n      \r\n      reelsContainer.addChild(reel);\r\n    }\r\n    \r\n    let width = reelsContainer.children[reelsContainer.children.length - 1].x;\r\n    reelsContainer.pivot.x = width * 0.5;\r\n\r\n    const coverOffset = 65;\r\n    const height = 400;\r\n    this._createCoverRect(0, -reelsContainer.height * 0.4 + coverOffset, game.screen.width, -height);\r\n    this._createCoverRect(0, reelsContainer.height * 0.4 - coverOffset, game.screen.width, height);\r\n  }\r\n\r\n  _createCoverRect(x, y, w, h) {\r\n    const graphics = new PIXI.Graphics();\r\n    graphics.position.set(x, y);\r\n    graphics.beginFill(0x000000);\r\n    graphics.drawRect(-w * 0.5, 0, w, h);\r\n\r\n    this.addChild(graphics);\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/js/reels_zone/index.js?");

/***/ }),

/***/ "./src/js/reels_zone/reel.js":
/*!***********************************!*\
  !*** ./src/js/reels_zone/reel.js ***!
  \***********************************/
/*! exports provided: Reel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Reel\", function() { return Reel; });\n/* harmony import */ var _slot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slot */ \"./src/js/reels_zone/slot.js\");\n\r\n\r\n\r\nclass Reel extends PIXI.Container {\r\n  constructor() {\r\n    super();\r\n\r\n    const offsetY = 180;\r\n    for ( let i = 0; i < 5; i++ ) {\r\n      const slot = new _slot__WEBPACK_IMPORTED_MODULE_0__[\"Slot\"]();\r\n      slot.y = offsetY * i;\r\n\r\n      this.addChild(slot);\r\n    }\r\n\r\n    const height = this.children[this.children.length - 1].y;\r\n    this.pivot.y = height * 0.5;\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/js/reels_zone/reel.js?");

/***/ }),

/***/ "./src/js/reels_zone/slot.js":
/*!***********************************!*\
  !*** ./src/js/reels_zone/slot.js ***!
  \***********************************/
/*! exports provided: Slot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Slot\", function() { return Slot; });\n\r\nclass Slot extends PIXI.Sprite {\r\n  constructor() {\r\n    super(PIXI.Texture.fromFrame('wild'));\r\n\r\n    this.anchor.set(0.5);\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/js/reels_zone/slot.js?");

/***/ }),

/***/ "./src/js/resources.js":
/*!*****************************!*\
  !*** ./src/js/resources.js ***!
  \*****************************/
/*! exports provided: RESOURCES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RESOURCES\", function() { return RESOURCES; });\n\r\nconst path = './img/';\r\nconst frames = [\r\n  'wild.png'\r\n];\r\n\r\nconst RESOURCES = frames.map((frameName) => {\r\n    return {\r\n      name: frameName.split('.')[0],\r\n      path: path + frameName\r\n    }\r\n  }\r\n);\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/resources.js?");

/***/ })

/******/ });