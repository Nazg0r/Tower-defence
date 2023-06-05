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

/***/ "./src/core/enemys/classEnemy.js":
/*!***************************************!*\
  !*** ./src/core/enemys/classEnemy.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Enemy)\n/* harmony export */ });\nclass Enemy {\n  constructor(x = -200, y = 0, width, height, speed = 1, ctx, waypoints) {\n    this.x = x;\n    this.y = y;\n    this.width = width;\n    this.height = height;\n    this.speed = speed;\n    this.waypoints = waypoints;\n    this.weypointIndex = 0;\n    this.offset = 0;\n    this.ctx = ctx;\n\n  }\n\n  draw() {\n    this.ctx.fillStyle = 'red';\n    this.ctx.fillRect(this.x, this.y, this.width, this.height);\n  }\n  update() {\n    this.draw();\n    const waypoint = this.waypoints[this.weypointIndex];\n    const nextWaypoint = this.waypoints[this.weypointIndex + 1];\n\n    if (this.weypointIndex === 0) {\n      this.offset = Math.floor(Math.random() * 31) + 16;\n\n      this.x += waypoint.x;\n      console.log(this.x);\n      this.y = waypoint.y + this.offset;\n      waypoint.y += this.offset;\n      waypoint.x += this.offset;\n      nextWaypoint.x += this.offset;\n      nextWaypoint.y += this.offset;\n      this.weypointIndex += 1;\n    } else {\n      const xDistance = waypoint.x - this.x;\n      const yDistance = waypoint.y - this.y;\n      const directionAngle = Math.atan2(yDistance, xDistance);\n      const xVelocity = Math.cos(directionAngle) * this.speed;\n      const yVelocity = Math.sin(directionAngle) * this.speed;\n\n      this.x += xVelocity;\n      this.y += yVelocity;\n\n      const xAbsoluteDiff = Math.abs(Math.round(this.x) - waypoint.x);\n      const yAbsoluteDiff = Math.abs(Math.round(this.y) - waypoint.y);\n\n      if (xAbsoluteDiff < Math.abs(xVelocity) &&\n        yAbsoluteDiff < Math.abs(yVelocity) &&\n        this.weypointIndex < this.waypoints.length - 1) {\n\n        nextWaypoint.x += this.offset;\n        nextWaypoint.y += this.offset;\n        this.weypointIndex += 1;\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack://cursach/./src/core/enemys/classEnemy.js?");

/***/ }),

/***/ "./src/core/enemys/drawEnemy.js":
/*!**************************************!*\
  !*** ./src/core/enemys/drawEnemy.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawEnemy\": () => (/* binding */ drawEnemy)\n/* harmony export */ });\n/* harmony import */ var _classEnemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classEnemy */ \"./src/core/enemys/classEnemy.js\");\n/* harmony import */ var _map_pathGeneration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map/pathGeneration */ \"./src/core/map/pathGeneration.js\");\n\n\n\nconst canvas = document.getElementById('gameCanvas');\nconst ctx = canvas.getContext('2d');\nconst enemies = [];\nconst waypoints = getWaypoints(_map_pathGeneration__WEBPACK_IMPORTED_MODULE_1__.directedPath);\n\nspawnEnemies(10, 100);\nfunction drawEnemy() {\n  const enemiesNumber = enemies.length;\n  for (let i = enemiesNumber - 1; i >= 0; i--) {\n    enemies[i].update();\n  }\n}\n\nfunction spawnEnemies(amount, offset) {\n  for (let i = 1; i <= amount; i++) {\n    enemies.push(new _classEnemy__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-offset * i, 0, 20, 20, 3.2, ctx, copyArray(waypoints)));\n  }\n}\n\nfunction getWaypoints(path) {\n  const wayPoints = [];\n\n  wayPoints.push(Object.assign({}, path[0]));\n  wayPoints[0].x += -200;\n\n  for (const point of path) {\n    if (point.direction !== 'left' &&\n     point.direction !== 'right' &&\n     point.direction !== 'top' &&\n     point.direction !== 'down') {\n\n      wayPoints.push(Object.assign({}, point));\n    }\n  }\n  wayPoints.push(Object.assign({}, path[path.length - 1]));\n  wayPoints[wayPoints.length - 1].x += 200;\n\n  return wayPoints;\n}\n\nfunction copyArray(arr) {\n  return JSON.parse(JSON.stringify(arr));\n}\n\n\n//# sourceURL=webpack://cursach/./src/core/enemys/drawEnemy.js?");

/***/ }),

/***/ "./src/core/events/towerSelectButton.js":
/*!**********************************************!*\
  !*** ./src/core/events/towerSelectButton.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"towerSelectButton\": () => (/* binding */ towerSelectButton)\n/* harmony export */ });\n\nconst towerSelectButton = document.getElementById('towerSelectButton');\n\ntowerSelectButton.addEventListener('mouseover', highlightIcon);\ntowerSelectButton.addEventListener('mouseout', highlightIcon2);\nfunction highlightIcon(event) {\n  event.target.style.backgroundColor = 'rgba(192,192,192,0.5)';\n}\nfunction highlightIcon2(event) {\n  event.target.style.backgroundColor = '';\n}\n\n\n//# sourceURL=webpack://cursach/./src/core/events/towerSelectButton.js?");

/***/ }),

/***/ "./src/core/index.js":
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map_pathGeneration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map/pathGeneration.js */ \"./src/core/map/pathGeneration.js\");\n/* harmony import */ var _map_settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map/settings.js */ \"./src/core/map/settings.js\");\n/* harmony import */ var _map_towerPlacementGeneration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map/towerPlacementGeneration.js */ \"./src/core/map/towerPlacementGeneration.js\");\n/* harmony import */ var _map_passiveZoneGeneration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/passiveZoneGeneration.js */ \"./src/core/map/passiveZoneGeneration.js\");\n/* harmony import */ var _map_mapDrawing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map/mapDrawing */ \"./src/core/map/mapDrawing.js\");\n/* harmony import */ var _events_towerSelectButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events/towerSelectButton */ \"./src/core/events/towerSelectButton.js\");\n/* harmony import */ var _enemys_drawEnemy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enemys/drawEnemy */ \"./src/core/enemys/drawEnemy.js\");\n/* harmony import */ var _enemys_classEnemy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enemys/classEnemy */ \"./src/core/enemys/classEnemy.js\");\n\n\n\n\n\n\n\n\n\nconst canvas = document.getElementById('gameCanvas');\nconst ctx = canvas.getContext('2d');\nlet stop = false;\nsetTimeout(() => stop = true, 25000);\n\n(0,_map_mapDrawing__WEBPACK_IMPORTED_MODULE_4__.drawMap)(_map_passiveZoneGeneration_js__WEBPACK_IMPORTED_MODULE_3__.passiveZone, _map_pathGeneration_js__WEBPACK_IMPORTED_MODULE_0__.directedPath, _map_towerPlacementGeneration_js__WEBPACK_IMPORTED_MODULE_2__.towerPlacement);\nctx.drawImage(_map_mapDrawing__WEBPACK_IMPORTED_MODULE_4__.map, 0, 0);\n\nfunction render() {\n  const animationId = requestAnimationFrame(render);\n\n  ctx.drawImage(_map_mapDrawing__WEBPACK_IMPORTED_MODULE_4__.map, 0, 0);\n  (0,_enemys_drawEnemy__WEBPACK_IMPORTED_MODULE_6__.drawEnemy)();\n\n  if (stop) cancelAnimationFrame(animationId);\n}\n\nrender();\n\n\n//# sourceURL=webpack://cursach/./src/core/index.js?");

/***/ }),

/***/ "./src/core/map/Tiles/passiveTile.js":
/*!*******************************************!*\
  !*** ./src/core/map/Tiles/passiveTile.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PassiveTile)\n/* harmony export */ });\n/* harmony import */ var _tile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile.js */ \"./src/core/map/Tiles/tile.js\");\n\nclass PassiveTile extends _tile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(x, y, type = 'passiveTile') {\n    super(x, y, type);\n  }\n}\n\n\n//# sourceURL=webpack://cursach/./src/core/map/Tiles/passiveTile.js?");

/***/ }),

/***/ "./src/core/map/Tiles/pathTile.js":
/*!****************************************!*\
  !*** ./src/core/map/Tiles/pathTile.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PathTile)\n/* harmony export */ });\n/* harmony import */ var _tile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile.js */ \"./src/core/map/Tiles/tile.js\");\n\nclass PathTile extends _tile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(x, y, type = 'pathTile', direction = null) {\n    super(x, y, type);\n    this.direction = direction;\n  }\n}\n\n\n//# sourceURL=webpack://cursach/./src/core/map/Tiles/pathTile.js?");

/***/ }),

/***/ "./src/core/map/Tiles/tile.js":
/*!************************************!*\
  !*** ./src/core/map/Tiles/tile.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tile)\n/* harmony export */ });\nclass Tile {\n  constructor(x, y, type) {\n    this.type = type;\n    this.x = x;\n    this.y = y;\n  }\n}\n\n\n//# sourceURL=webpack://cursach/./src/core/map/Tiles/tile.js?");

/***/ }),

/***/ "./src/core/map/Tiles/towerTile.js":
/*!*****************************************!*\
  !*** ./src/core/map/Tiles/towerTile.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TowerTile)\n/* harmony export */ });\n/* harmony import */ var _tile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile.js */ \"./src/core/map/Tiles/tile.js\");\n\nclass TowerTile extends _tile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(x, y, type = 'towerTile') {\n    super(x, y, type);\n  }\n}\n\n\n//# sourceURL=webpack://cursach/./src/core/map/Tiles/towerTile.js?");

/***/ }),

/***/ "./src/core/map/mapDrawing.js":
/*!************************************!*\
  !*** ./src/core/map/mapDrawing.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawMap\": () => (/* binding */ drawMap),\n/* harmony export */   \"map\": () => (/* binding */ map)\n/* harmony export */ });\n/* harmony import */ var _pathGeneration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pathGeneration.js */ \"./src/core/map/pathGeneration.js\");\n/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.js */ \"./src/core/map/settings.js\");\n/* harmony import */ var _png_Test_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./png/Test.png */ \"./src/core/map/png/Test.png\");\n\n\n\n\n\nconst canvas = document.getElementById('gameCanvas');\nconst ctx = canvas.getContext('2d');\nconst map = new Image();\nconst image = new Image();\nimage.src = _png_Test_png__WEBPACK_IMPORTED_MODULE_2__;\n\nconst IMAGE_TAIL_SIZE = 16;\n\nfor (const field of _pathGeneration_js__WEBPACK_IMPORTED_MODULE_0__.directedPath) {\n  ctx.fillStyle = '#4f371d';\n  ctx.fillRect(field.x, field.y, _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE, _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE);\n}\nfunction drawPath(path) {\n  for (const pathField of path) {\n    if (pathField.direction === 'left' || pathField.direction === 'right') {\n      drawField(pathField, 208, 32);\n    }\n\n    if (pathField.direction === 'top' || pathField.direction === 'down') {\n      drawField(pathField, 192, 32);\n    }\n\n    if (pathField.direction === 'right-down' || pathField.direction === 'top-left') {\n      drawField(pathField, 208, 0);\n    }\n\n    if (pathField.direction === 'right-top' || pathField.direction === 'down-left') {\n      drawField(pathField, 208, 16);\n    }\n\n    if (pathField.direction === 'top-right' || pathField.direction === 'left-down') {\n      drawField(pathField, 192, 0);\n    }\n\n    if (pathField.direction === 'left-top' || pathField.direction === 'down-right') {\n      drawField(pathField, 192, 16);\n    }\n  }\n}\n\nfunction drawPassiveZone(passiveZone) {\n  for (const passiveField of passiveZone) {\n    drawField(passiveField, 16, 128);\n  }\n}\n\nfunction drawTowerPlacement(towerPlacement) {\n  for (const towerField of towerPlacement) {\n    drawField(towerField, 16, 16);\n  }\n}\n\nfunction drawDecorations(passiveZone) {\n  const decorativeZone = passiveZone.slice();\n  const fieldValue = passiveZone.length;\n  const k = 0.1;\n  const decorationsValue = Math.round(fieldValue * k);\n  const decVariants = 3;\n\n  for (let i = 0; i < decorationsValue; i++) {\n    const currentField = getRandomField(decorativeZone);\n    const variant = getRandomDecoration(decVariants);\n    if (variant === 1) drawField(currentField, 112, 0);\n    if (variant === 2) drawField(currentField, 112, 16);\n    if (variant === 3) drawField(currentField, 112, 32);\n  }\n}\n\nfunction getRandomDecoration(variantsNum) {\n  return Math.round(Math.random() * variantsNum) + 1;\n}\n\nfunction getRandomField(passiveZone) {\n  let fieldValue = passiveZone.length;\n  const fieldIndex = Math.round(Math.random() * fieldValue++);\n  return passiveZone[fieldIndex];\n}\n\nfunction drawField(field, sx, sy) {\n  const { TAIL_SIZE } = _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS;\n\n  ctx.drawImage(\n    image,\n    sx, sy,\n    IMAGE_TAIL_SIZE, IMAGE_TAIL_SIZE,\n    field.x, field.y,\n    TAIL_SIZE, TAIL_SIZE\n  );\n}\n\nfunction drawMap(passiveZone, path, towerPlacement) {\n  image.onload = () => {\n    drawPassiveZone(passiveZone);\n    drawPath(path);\n    drawTowerPlacement(towerPlacement);\n    drawDecorations(passiveZone);\n    map.src = canvas.toDataURL();\n  };\n}\n\n\n\n//# sourceURL=webpack://cursach/./src/core/map/mapDrawing.js?");

/***/ }),

/***/ "./src/core/map/passiveZoneGeneration.js":
/*!***********************************************!*\
  !*** ./src/core/map/passiveZoneGeneration.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"passiveZone\": () => (/* binding */ passiveZone)\n/* harmony export */ });\n/* harmony import */ var _towerPlacementGeneration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./towerPlacementGeneration.js */ \"./src/core/map/towerPlacementGeneration.js\");\n/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.js */ \"./src/core/map/settings.js\");\n/* harmony import */ var _pathGeneration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pathGeneration.js */ \"./src/core/map/pathGeneration.js\");\n/* harmony import */ var _Tiles_passiveTile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tiles/passiveTile.js */ \"./src/core/map/Tiles/passiveTile.js\");\n\n\n\n\n\n\nfunction combinePlacement(placement1, placement2) {\n  const newPlacement = placement1.slice();\n  const middle = Math.floor(newPlacement.length / 2);\n  newPlacement.splice(middle, 0, ...placement2);\n  return newPlacement;\n}\n\nfunction sortPlacementByY(placement) {\n  const placementCopy = placement.slice();\n  return placementCopy.sort((oneField, anotherField) =>\n    oneField.y - anotherField.y);\n}\n\nfunction chopPlacement(placement) {\n  const planePlacement = [];\n  let start = 0;\n\n  for (let i = _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE; i <= _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.MAP_HEIGHT; i += _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE) {\n    const end = placement.findIndex((field) =>  field.y === i);\n    if (end === -1) {\n      planePlacement.push([]);\n    } else {\n      planePlacement.push(placement.slice(start, end));\n      start = end;\n      if (placement.findIndex((field) =>  field.y === i + _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE) === -1) {\n        planePlacement.push(placement.slice(start));\n      }\n    }\n  }\n\n  return planePlacement;\n}\n\nfunction generatePassiveZone(planePlacement) {\n  const passiveZone = [];\n  let startY = 0;\n\n  for (const row of planePlacement) {\n    const length = _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.COLUMNS;\n\n    for (let i = 0; i < length; i++) {\n      if (!row.some((field) => field.x === i * _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE)) {\n        passiveZone.push(new _Tiles_passiveTile_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](i * _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE, startY));\n      }\n    }\n    startY += _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE;\n  }\n  return passiveZone;\n}\n\nconst combinedPlacement = combinePlacement(_towerPlacementGeneration_js__WEBPACK_IMPORTED_MODULE_0__.towerPlacement, _pathGeneration_js__WEBPACK_IMPORTED_MODULE_2__.directedPath);\nconst sortedPlacement = sortPlacementByY(combinedPlacement);\nconst planePlacement = chopPlacement(sortedPlacement);\nconst passiveZone = generatePassiveZone(planePlacement);\n\n\n//# sourceURL=webpack://cursach/./src/core/map/passiveZoneGeneration.js?");

/***/ }),

/***/ "./src/core/map/pathGeneration.js":
/*!****************************************!*\
  !*** ./src/core/map/pathGeneration.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"directedPath\": () => (/* binding */ directedPath)\n/* harmony export */ });\n/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.js */ \"./src/core/map/settings.js\");\n/* harmony import */ var _Tiles_pathTile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tiles/pathTile.js */ \"./src/core/map/Tiles/pathTile.js\");\n\n\n\n\nfunction pathGeneration() {\n  const path = [];\n  let currentField = getRandomStart();\n  path.push(currentField);\n\n  while (!isPathEndReached(currentField)) {\n    currentField = getNextPathPoint(currentField, path);\n    path.push(currentField);\n  }\n\n  return path;\n}\n\nfunction getRandomStart() {\n  const x = _settings_js__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.START_X;\n  const y = (Math.floor(Math.random() * (_settings_js__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.ROWS - 1)) + 1) * _settings_js__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.TAIL_SIZE;\n  return new _Tiles_pathTile_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x, y);\n}\nfunction isPathEndReached(currentField) {\n  return currentField.x === _settings_js__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.MAP_WIDTH - _settings_js__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.TAIL_SIZE;\n}\n\nfunction getNextPathPoint(currentField, path) {\n  const availablePath = findAvailablePath(currentField, path);\n  return choosePath(availablePath);\n}\n\nfunction findAvailablePath(field, path) {\n  let possiblePath = findPossiblePath(field, path);\n\n  for (const possible of possiblePath) {\n    const neighbors = findNeighbor(possible, path);\n    if (neighbors > 2) {\n      possiblePath = possiblePath.filter((item) => item !== possible);\n    }\n  }\n  return possiblePath;\n}\n\nfunction findPossiblePath(field, path) {\n  const existFields = path;\n  const length = path.length;\n  const thisF = field;\n  const possiblePath = [];\n  const d = _settings_js__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.TAIL_SIZE;\n  const xMin = _settings_js__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.START_X;\n  const xMax = _settings_js__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.MAP_WIDTH;\n  const yMin = _settings_js__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.START_Y;\n  const yMax = _settings_js__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.MAP_HEIGHT;\n  let prevF = existFields[length - 2];\n  if (length === 1) prevF = existFields[0];\n\n  if (thisF.x !== xMin) {\n    if (prevF.x !== (thisF.x - d) && (prevF.y === thisF.y || prevF.y !== thisF.y)) {\n      possiblePath.push(new _Tiles_pathTile_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](thisF.x - d, thisF.y));\n    }\n  }\n  if (thisF.x !== xMax) {\n    if (prevF.x !== (thisF.x + d) && (prevF.y === thisF.y || prevF.y !== thisF.y)) {\n      possiblePath.push(new _Tiles_pathTile_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](thisF.x + d, thisF.y));\n    }\n  }\n  if (thisF.y !== yMin) {\n    if ((prevF.x === thisF.x || prevF.x !== thisF.x) && prevF.y !== (thisF.y - d)) {\n      possiblePath.push(new _Tiles_pathTile_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](thisF.x, thisF.y - d));\n    }\n  }\n  if (thisF.y !== yMax) {\n    if ((prevF.x === thisF.x || prevF.x !== thisF.x) && prevF.y !== (thisF.y + d)) {\n      possiblePath.push(new _Tiles_pathTile_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](thisF.x, thisF.y + d));\n    }\n  }\n  return possiblePath;\n}\n\nfunction findNeighbor(possible, path) {\n  const existFields = path;\n  const thisField = possible;\n  let neighbors = 0;\n  const d = _settings_js__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.TAIL_SIZE;\n  const xMin = _settings_js__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.START_X;\n  const xMax = _settings_js__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.MAP_WIDTH;\n  const yMin = _settings_js__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.START_Y;\n  const yMax = _settings_js__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.MAP_HEIGHT;\n\n  for (const exist of existFields) {\n    if (thisField.x === xMin) neighbors += 3;\n    if (thisField.x === xMax) neighbors += 3;\n    if (thisField.y === yMin) neighbors += 3;\n    if (thisField.y === yMax) neighbors += 3;\n\n    if (exist.x === thisField.x - d && exist.y === thisField.y) neighbors++;\n    if (exist.x === thisField.x + d && exist.y === thisField.y) neighbors++;\n    if (exist.x === thisField.x  && exist.y === thisField.y - d) neighbors++;\n    if (exist.x === thisField.x  && exist.y === thisField.y + d) neighbors++;\n    if (exist.x === thisField.x - d && exist.y === thisField.y - d) neighbors++;\n    if (exist.x === thisField.x + d && exist.y === thisField.y + d) neighbors++;\n    if (exist.x === thisField.x + d && exist.y === thisField.y - d) neighbors++;\n    if (exist.x === thisField.x - d && exist.y === thisField.y + d) neighbors++;\n  }\n  return neighbors;\n}\n\nfunction choosePath(paths) {\n  if (paths.length === 0) throw new Error('The path was looped');\n  const ways = paths;\n  const length =  paths.length;\n  const wayIndex = Math.floor(Math.random() * length);\n  return  ways[wayIndex];\n}\n\nfunction isPathGenerated() {\n  while (true) {\n    try {\n      return pathGeneration();\n    } catch (error) {\n      console.error('Error');\n    }\n  }\n}\n\nconst pathField = isPathGenerated();\n\nfunction definePathDirection(path) {\n  const currentPath = path;\n  const length = currentPath.length;\n\n  currentPath[0].direction = 'right';\n  currentPath[length - 1].direction = 'right';\n\n  for (let i = 1; i < length - 1; i++) {\n    const x1 = currentPath[i - 1].x;\n    const y1 = currentPath[i - 1].y;\n    const x2 = currentPath[i + 1].x;\n    const y2 = currentPath[i + 1].y;\n\n    setRightOrLeftDirection(x1, y1, x2, y2, currentPath[i]);\n    setDownOrUpDirection(x1, y1, x2, y2, currentPath[i]);\n    setTurnDirection(x1, y1, x2, y2, currentPath[i]);\n  }\n  return currentPath;\n}\n\nfunction setRightOrLeftDirection(x1, y1, x2, y2, pathField) {\n  if (y1 === y2 && x1 < x2) pathField.direction = 'right';\n  if (y1 === y2 && x1 > x2) pathField.direction = 'left';\n}\n\nfunction setDownOrUpDirection(x1, y1, x2, y2, pathField) {\n  if (x1 === x2 && y1 < y2) pathField.direction = 'down';\n  if (x1 === x2 && y1 > y2) pathField.direction = 'top';\n}\n\nfunction setTurnDirection(x1, y1, x2, y2, pathField) {\n  if (y1 < y2 && x1 < x2 && x1 === pathField.x) pathField.direction = 'down-right';\n  if (y1 < y2 && x1 < x2 && x1 !== pathField.x) pathField.direction = 'right-down';\n  if (y1 < y2 && x1 > x2 && x1 === pathField.x) pathField.direction = 'down-left';\n  if (y1 < y2 && x1 > x2 && x1 !== pathField.x) pathField.direction = 'left-down';\n  if (y1 > y2 && x1 < x2 && x1 === pathField.x) pathField.direction = 'top-right';\n  if (y1 > y2 && x1 < x2 && x1 !== pathField.x) pathField.direction = 'right-top';\n  if (y1 > y2 && x1 > x2 && x1 === pathField.x) pathField.direction = 'top-left';\n  if (y1 > y2 && x1 > x2 && x1 !== pathField.x) pathField.direction = 'left-top';\n}\nconst directedPath = definePathDirection(pathField);\n\n\n//# sourceURL=webpack://cursach/./src/core/map/pathGeneration.js?");

/***/ }),

/***/ "./src/core/map/settings.js":
/*!**********************************!*\
  !*** ./src/core/map/settings.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SETTINGS\": () => (/* binding */ SETTINGS)\n/* harmony export */ });\nconst SETTINGS = {\n  MAP_WIDTH: 1280,\n  MAP_HEIGHT: 768,\n  TAIL_SIZE: 64,\n  START_X: 0,\n  START_Y: 0,\n  COLUMNS: 20,\n  ROWS: 12\n};\n\n\n//# sourceURL=webpack://cursach/./src/core/map/settings.js?");

/***/ }),

/***/ "./src/core/map/towerPlacementGeneration.js":
/*!**************************************************!*\
  !*** ./src/core/map/towerPlacementGeneration.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"towerPlacement\": () => (/* binding */ towerPlacement)\n/* harmony export */ });\n/* harmony import */ var _pathGeneration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pathGeneration.js */ \"./src/core/map/pathGeneration.js\");\n/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.js */ \"./src/core/map/settings.js\");\n/* harmony import */ var _Tiles_towerTile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tiles/towerTile.js */ \"./src/core/map/Tiles/towerTile.js\");\n\n\n\n\n\nfunction towerPlacementGeneration(path) {\n  const currentPath = path;\n  const towerPlacement = [];\n  const d = _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE;\n\n  for (const pathField of currentPath) {\n    const direction = pathField.direction;\n\n    if (direction === 'right' || direction === 'left') {\n      addTowerZoneOverPath(towerPlacement, pathField, d);\n      addTowerZoneUnderPath(towerPlacement, pathField, d);\n    }\n    if (direction === 'down' || direction === 'top') {\n      addTowerZoneLeftOfPath(towerPlacement, pathField, d);\n      addTowerZoneRightOfPath(towerPlacement, pathField, d);\n    }\n    if (direction === 'right-down' || direction === 'top-left') {\n      addTowerZoneOverPath(towerPlacement, pathField, d);\n      addTowerZoneRightOfPath(towerPlacement, pathField, d);\n      addTowerZoneOverPath(towerPlacement, pathField, d, d);\n      addTowerZoneOverPath(towerPlacement, pathField, d, 2 * d);\n    }\n    if (direction === 'right-top' || direction === 'down-left') {\n      addTowerZoneUnderPath(towerPlacement, pathField, d);\n      addTowerZoneRightOfPath(towerPlacement, pathField, d);\n      addTowerZoneUnderPath(towerPlacement, pathField, d, d);\n      addTowerZoneUnderPath(towerPlacement, pathField, d, 2 * d);\n    }\n    if (direction === 'top-right' || direction === 'left-down') {\n      addTowerZoneOverPath(towerPlacement, pathField, d);\n      addTowerZoneLeftOfPath(towerPlacement, pathField, d);\n      addTowerZoneOverPath(towerPlacement, pathField, d, -d);\n      addTowerZoneOverPath(towerPlacement, pathField, d, -2 * d);\n    }\n    if (direction === 'left-top' || direction === 'down-right') {\n      addTowerZoneUnderPath(towerPlacement, pathField, d);\n      addTowerZoneLeftOfPath(towerPlacement, pathField, d);\n      addTowerZoneUnderPath(towerPlacement, pathField, d, -d);\n      addTowerZoneUnderPath(towerPlacement, pathField, d, -2 * d);\n\n    }\n  }\n  return towerPlacement;\n}\n\nfunction addTowerZoneOverPath(towerPlacement, pathField, delta,  offset = null) {\n  if (!isTowerZoneExist(pathField.x + offset, pathField.y - delta, towerPlacement)) {\n    towerPlacement.push(new _Tiles_towerTile_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](pathField.x + offset, pathField.y - delta));\n  }\n  if (!isTowerZoneExist(pathField.x + offset, pathField.y - 2 * delta, towerPlacement)) {\n    towerPlacement.push(new _Tiles_towerTile_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](pathField.x + offset, pathField.y - 2 * delta));\n  }\n}\n\nfunction addTowerZoneUnderPath(towerPlacement, pathField, delta, offset = null) {\n  if (!isTowerZoneExist(pathField.x + offset, pathField.y + delta, towerPlacement)) {\n    towerPlacement.push(new _Tiles_towerTile_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](pathField.x + offset, pathField.y + delta));\n  }\n  if (!isTowerZoneExist(pathField.x + offset, pathField.y + 2 * delta, towerPlacement)) {\n    towerPlacement.push(new _Tiles_towerTile_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](pathField.x + offset, pathField.y + 2 * delta));\n  }\n}\n\nfunction addTowerZoneLeftOfPath(towerPlacement, pathField, delta) {\n  if (!isTowerZoneExist(pathField.x - delta, pathField.y, towerPlacement)) {\n    towerPlacement.push(new _Tiles_towerTile_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](pathField.x - delta, pathField.y));\n  }\n  if (!isTowerZoneExist(pathField.x - 2 * delta, pathField.y, towerPlacement)) {\n    towerPlacement.push(new _Tiles_towerTile_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](pathField.x - 2 * delta, pathField.y));\n  }\n}\n\nfunction addTowerZoneRightOfPath(towerPlacement, pathField, delta) {\n  if (!isTowerZoneExist(pathField.x + delta, pathField.y, towerPlacement)) {\n    towerPlacement.push(new _Tiles_towerTile_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](pathField.x + delta, pathField.y));\n  }\n  if (!isTowerZoneExist(pathField.x + 2 * delta, pathField.y, towerPlacement)) {\n    towerPlacement.push(new _Tiles_towerTile_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](pathField.x + 2 * delta, pathField.y));\n  }\n}\n\nfunction isTowerZoneExist(x, y, towerPlacement) {\n  for (const towerField of towerPlacement) {\n    if (towerField.x === x && towerField.y === y) {\n      return true;\n    }\n  }\n}\n\nfunction removeExtraZone(towerPlacement, path) {\n  let filteredTowerPlacement = removeAbroadZone(towerPlacement);\n  filteredTowerPlacement = removeOverlay(filteredTowerPlacement, path);\n  return filteredTowerPlacement;\n}\nfunction removeAbroadZone(towerPlacement) {\n  return towerPlacement.filter((towerField) =>\n    towerField.x >= _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.START_X &&\n    towerField.y >= _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.START_Y &&\n    towerField.y < _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.MAP_HEIGHT\n  );\n}\nfunction removeOverlay(towerPlacement, path) {\n  return towerPlacement.filter((towerField) =>\n    !path.some((pathField) => pathField.x === towerField.x &&\n    pathField.y === towerField.y)\n  );\n}\n\nlet towerPlacement = towerPlacementGeneration(_pathGeneration_js__WEBPACK_IMPORTED_MODULE_0__.directedPath);\ntowerPlacement = removeExtraZone(towerPlacement, _pathGeneration_js__WEBPACK_IMPORTED_MODULE_0__.directedPath);\n\n\n\n//# sourceURL=webpack://cursach/./src/core/map/towerPlacementGeneration.js?");

/***/ }),

/***/ "./src/core/map/png/Test.png":
/*!***********************************!*\
  !*** ./src/core/map/png/Test.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/4d1ddad374cfcbd1393c.png\";\n\n//# sourceURL=webpack://cursach/./src/core/map/png/Test.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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