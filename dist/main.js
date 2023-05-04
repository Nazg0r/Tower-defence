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

/***/ "./src/core/index.js":
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map_pathGeneration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map/pathGeneration */ \"./src/core/map/pathGeneration.js\");\n/* harmony import */ var _map_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map/settings */ \"./src/core/map/settings.js\");\n\n\n\nconst canvas = document.getElementById('gameCanvas');\nconst ctx = canvas.getContext('2d');\n\nfor (const field of _map_pathGeneration__WEBPACK_IMPORTED_MODULE_0__.path) {\n  ctx.fillStyle = '#000';\n  ctx.fillRect(field.x, field.y, _map_settings__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE, _map_settings__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE);\n  ctx.strokeStyle = '#000';\n  ctx.strokeRect(field.x, field.y, _map_settings__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE, _map_settings__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE);\n}\n\n\n//# sourceURL=webpack://cursach/./src/core/index.js?");

/***/ }),

/***/ "./src/core/map/pathGeneration.js":
/*!****************************************!*\
  !*** ./src/core/map/pathGeneration.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"path\": () => (/* binding */ path)\n/* harmony export */ });\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./src/core/map/settings.js\");\n\n\nclass Zone {\n  constructor(type, x, y) {\n    this.type = type;\n    this.x = x;\n    this.y = y;\n  }\n}\n\nfunction createPathZone(x, y) {\n  const type = 'pathZone';\n  return new Zone(type, x, y);\n}\n\nfunction pathGeneration() {\n  const path = [];\n  let currentField = getRandomStart();\n  path.push(currentField);\n\n  while (!isPathEndReached(currentField)) {\n    currentField = getNextPathPoint(currentField, path);\n    path.push(currentField);\n  }\n\n  return path;\n}\n\nfunction getRandomStart() {\n  const x = _settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.START_X;\n  const y = (Math.floor(Math.random() * (_settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.ROWS - 1)) + 1) * _settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.TAIL_SIZE;\n  return createPathZone(x, y);\n}\nfunction isPathEndReached(currentField) {\n  return currentField.x === _settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.MAP_WIDTH - _settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.TAIL_SIZE;\n}\n\nfunction getNextPathPoint(currentField, path) {\n  const availablePath = findAvailablePath(currentField, path);\n  return choosePath(availablePath);\n}\n\nfunction findAvailablePath(field, path) {\n  let possiblePath = findPossiblePath(field, path);\n\n  for (const possible of possiblePath) {\n    const neighbors = findNeighbor(possible, path);\n    if (neighbors > 2) {\n      possiblePath = possiblePath.filter((item) => item !== possible);\n    }\n  }\n  return possiblePath;\n}\n\nfunction findPossiblePath(field, path) {\n  const existFields = path;\n  const length = path.length;\n  const thisF = field;\n  const possiblePath = [];\n  const d = _settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.TAIL_SIZE;\n  const xMin = _settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.START_X;\n  const xMax = _settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.MAP_WIDTH;\n  const yMin = _settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.START_Y;\n  const yMax = _settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.MAP_HEIGHT;\n  let prevF = existFields[length - 2];\n  if (length === 1) prevF = existFields[0];\n\n  if (thisF.x !== xMin) {\n    if (prevF.x !== (thisF.x - d) && (prevF.y === thisF.y || prevF.y !== thisF.y)) {\n      possiblePath.push(createPathZone(thisF.x - d, thisF.y));\n    }\n  }\n  if (thisF.x !== xMax) {\n    if (prevF.x !== (thisF.x + d) && (prevF.y === thisF.y || prevF.y !== thisF.y)) {\n      possiblePath.push(createPathZone(thisF.x + d, thisF.y));\n    }\n  }\n  if (thisF.y !== yMin) {\n    if ((prevF.x === thisF.x || prevF.x !== thisF.x) && prevF.y !== (thisF.y - d)) {\n      possiblePath.push(createPathZone(thisF.x, thisF.y - d));\n    }\n  }\n  if (thisF.y !== yMax) {\n    if ((prevF.x === thisF.x || prevF.x !== thisF.x) && prevF.y !== (thisF.y + d)) {\n      possiblePath.push(createPathZone(thisF.x, thisF.y + d));\n    }\n  }\n  return possiblePath;\n}\n\nfunction findNeighbor(poss, path) {\n  const existFields = path;\n  const thisField = poss;\n  let neighbors = 0;\n  const d = _settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.TAIL_SIZE;\n  const xMin = _settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.START_X;\n  const xMax = _settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.MAP_WIDTH;\n  const yMin = _settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.START_Y;\n  const yMax = _settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.MAP_HEIGHT;\n\n  for (const exist of existFields) {\n    if (thisField.x === xMin) neighbors += 3;\n    if (thisField.x === xMax) neighbors += 3;\n    if (thisField.y === yMin) neighbors += 3;\n    if (thisField.y === yMax) neighbors += 3;\n\n    if (exist.x === thisField.x - d && exist.y === thisField.y) neighbors++;\n    if (exist.x === thisField.x + d && exist.y === thisField.y) neighbors++;\n    if (exist.x === thisField.x  && exist.y === thisField.y - d) neighbors++;\n    if (exist.x === thisField.x  && exist.y === thisField.y + d) neighbors++;\n    if (exist.x === thisField.x - d && exist.y === thisField.y - d) neighbors++;\n    if (exist.x === thisField.x + d && exist.y === thisField.y + d) neighbors++;\n    if (exist.x === thisField.x + d && exist.y === thisField.y - d) neighbors++;\n    if (exist.x === thisField.x - d && exist.y === thisField.y + d) neighbors++;\n  }\n  return neighbors;\n}\n\nfunction choosePath(paths) {\n  if (paths.length === 0) throw new Error('The path was looped');\n  const ways = paths;\n  const length =  paths.length;\n  const wayIndex = Math.floor(Math.random() * length);\n  return  ways[wayIndex];\n}\n\nfunction isPathGenerated() {\n  while (true) {\n    try {\n      return pathGeneration();\n    } catch (error) {\n      console.error('Error');\n    }\n  }\n}\n\nconst path = isPathGenerated();\n\n\n//# sourceURL=webpack://cursach/./src/core/map/pathGeneration.js?");

/***/ }),

/***/ "./src/core/map/settings.js":
/*!**********************************!*\
  !*** ./src/core/map/settings.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SETTINGS\": () => (/* binding */ SETTINGS)\n/* harmony export */ });\nconst SETTINGS = {\n  MAP_WIDTH: 1280,\n  MAP_HEIGHT: 768,\n  TAIL_SIZE: 64,\n  START_X: 0,\n  START_Y: 0,\n  COLUMNS: 20,\n  ROWS: 12\n};\n\n\n//# sourceURL=webpack://cursach/./src/core/map/settings.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/core/index.js");
/******/ 	
/******/ })()
;