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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Enemy)\n/* harmony export */ });\nclass Enemy {\n  constructor(x = -200, y = 0, speed = 1, ctx, waypoints, enemySet) {\n    this.x = x;\n    this.y = y;\n    this.speed = speed;\n    this.waypoints = waypoints;\n    this.weypointIndex = 0;\n    this.offset = 0;\n    this.ctx = ctx;\n    this.image = new Image();\n    this.image.src = enemySet.imageSrc;\n    this.currentFrame = 0;\n    this.enemySet = {\n      imageSrc: enemySet.imageSrc,\n      frameStartY: enemySet.frameStartY,\n      frames: enemySet.frames,\n      spriteWidth: enemySet.spriteWidth,\n      spriteHeight: enemySet.spriteHeight,\n      hold: 5,\n      holdCounter: 0,\n    };\n  }\n\n  draw() {\n    const frameStartX = this.enemySet.spriteWidth * this.currentFrame;\n    const correctX = this.x - this.enemySet.spriteWidth / 2;\n    const correctY = this.y - this.enemySet.spriteHeight / 2;\n\n    this.ctx.drawImage(\n      this.image,\n      frameStartX,\n      this.enemySet.frameStartY,\n      this.enemySet.spriteWidth,\n      this.enemySet.spriteHeight,\n      correctX,\n      correctY,\n      this.enemySet.spriteWidth,\n      this.enemySet.spriteHeight\n    );\n\n    this.enemySet.holdCounter++;\n    if (this.enemySet.holdCounter % this.enemySet.hold === 0) {\n      this.currentFrame++;\n    }\n    if (this.currentFrame === this.enemySet.frames - 1) {\n      this.currentFrame = 0;\n    }\n  }\n  update() {\n    this.draw();\n    const waypoint = this.waypoints[this.weypointIndex];\n    const nextWaypoint = this.waypoints[this.weypointIndex + 1];\n\n    if (this.weypointIndex === 0) {\n      this.offset = Math.floor(Math.random() * 31) + 16;\n\n      this.x += waypoint.x;\n      this.y = waypoint.y + this.offset;\n\n      waypoint.y += this.offset;\n      waypoint.x += this.offset;\n\n      nextWaypoint.x += this.offset;\n      nextWaypoint.y += this.offset;\n      this.weypointIndex += 1;\n    } else {\n      const xDistance = waypoint.x - this.x;\n      const yDistance = waypoint.y - this.y;\n\n      const directionAngle = Math.atan2(yDistance, xDistance);\n      const xVelocity = Math.cos(directionAngle) * this.speed;\n      const yVelocity = Math.sin(directionAngle) * this.speed;\n\n      this.x += xVelocity;\n      this.y += yVelocity;\n\n      const xAbsoluteDiff = Math.abs(Math.round(this.x) - waypoint.x);\n      const yAbsoluteDiff = Math.abs(Math.round(this.y) - waypoint.y);\n\n      if (xAbsoluteDiff < Math.abs(xVelocity) &&\n        yAbsoluteDiff < Math.abs(yVelocity) &&\n        this.weypointIndex < this.waypoints.length - 1) {\n\n        nextWaypoint.x += this.offset;\n        nextWaypoint.y += this.offset;\n        this.weypointIndex += 1;\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack://cursach/./src/core/enemys/classEnemy.js?");

/***/ }),

/***/ "./src/core/enemys/drawEnemies.js":
/*!****************************************!*\
  !*** ./src/core/enemys/drawEnemies.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawEnemies\": () => (/* binding */ drawEnemies),\n/* harmony export */   \"enemies\": () => (/* binding */ enemies)\n/* harmony export */ });\n/* harmony import */ var _classEnemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classEnemy */ \"./src/core/enemys/classEnemy.js\");\n/* harmony import */ var _map_pathGeneration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map/pathGeneration */ \"./src/core/map/pathGeneration.js\");\n/* harmony import */ var _enemySets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enemySets */ \"./src/core/enemys/enemySets.js\");\n\n\n\n\nconst canvas = document.getElementById('gameCanvas');\nconst ctx = canvas.getContext('2d');\nconst enemies = [];\nconst waypoints = getWaypoints(_map_pathGeneration__WEBPACK_IMPORTED_MODULE_1__.directedPath);\n\nspawnEnemies(10, 100);\nfunction drawEnemies() {\n  const enemiesNumber = enemies.length;\n  for (let i = enemiesNumber - 1; i >= 0; i--) {\n    enemies[i].update();\n  }\n}\n\nfunction spawnEnemies(amount, offset) {\n  for (let i = 1; i <= amount; i++) {\n    const enemy = new _classEnemy__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n      -offset * i,\n      0,\n      2,\n      ctx,\n      copyArray(waypoints),\n      _enemySets__WEBPACK_IMPORTED_MODULE_2__[\"default\"][2]\n    );\n    enemies.push(enemy);\n  }\n}\n\n\nfunction getWaypoints(path) {\n  const wayPoints = [];\n\n  wayPoints.push(Object.assign({}, path[0]));\n  wayPoints[0].x += -200;\n\n  for (const point of path) {\n    if (point.direction !== 'left' &&\n     point.direction !== 'right' &&\n     point.direction !== 'top' &&\n     point.direction !== 'down') {\n\n      wayPoints.push(Object.assign({}, point));\n    }\n  }\n  wayPoints.push(Object.assign({}, path[path.length - 1]));\n  wayPoints[wayPoints.length - 1].x += 200;\n\n  return wayPoints;\n}\n\nfunction copyArray(arr) {\n  return JSON.parse(JSON.stringify(arr));\n}\n\n\n//# sourceURL=webpack://cursach/./src/core/enemys/drawEnemies.js?");

/***/ }),

/***/ "./src/core/enemys/enemySets.js":
/*!**************************************!*\
  !*** ./src/core/enemys/enemySets.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sprites_walk_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprites/walk.png */ \"./src/core/enemys/sprites/walk.png\");\n\n\nclass EnemySet  {\n  constructor(frameStartY, frames, spriteWidth, spriteHeight, imageSrc = _sprites_walk_png__WEBPACK_IMPORTED_MODULE_0__) {\n    this.frameStartY = frameStartY;\n    this.frames = frames;\n    this.spriteWidth = spriteWidth;\n    this.spriteHeight = spriteHeight;\n    this.imageSrc = imageSrc;\n  }\n}\n\nconst SLIME = new EnemySet(0, 8, 32, 32);\nconst WORM = new EnemySet(96, 9, 64, 64);\nconst SKELETON = new EnemySet(32, 12, 64, 64);\nconst NECROMANCER = new EnemySet(160, 8, 64, 64);\nconst DEATH = new EnemySet(224, 7, 64, 64);\n\nconst ENEMIES_SETS = [SLIME, WORM, SKELETON, NECROMANCER, DEATH];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ENEMIES_SETS);\n\n\n//# sourceURL=webpack://cursach/./src/core/enemys/enemySets.js?");

/***/ }),

/***/ "./src/core/events/placementMode.js":
/*!******************************************!*\
  !*** ./src/core/events/placementMode.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"activeTile\": () => (/* binding */ activeTile),\n/* harmony export */   \"cursor\": () => (/* binding */ cursor)\n/* harmony export */ });\n/* harmony import */ var _map_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map/settings */ \"./src/core/map/settings.js\");\n/* harmony import */ var _map_towerPlacementGeneration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map/towerPlacementGeneration */ \"./src/core/map/towerPlacementGeneration.js\");\n/* harmony import */ var _towerSelectButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./towerSelectButton */ \"./src/core/events/towerSelectButton.js\");\n/* harmony import */ var _towers_drawTower__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../towers/drawTower */ \"./src/core/towers/drawTower.js\");\n/* harmony import */ var _towers_towerSets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../towers/towerSets */ \"./src/core/towers/towerSets.js\");\n\n\n\n\n\n\nconst canvas = document.getElementById('gameCanvas');\n\nconst cursor = {\n  x: 0,\n  y: 0\n};\n\nlet activeTile = null;\n\nwindow.addEventListener('mousemove', (event) => {\n  const canvasRect = canvas.getBoundingClientRect();\n  const canvasX = canvasRect.left;\n  const canvasY = canvasRect.top;\n\n  const xCof = _map_settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.MAP_WIDTH / canvas.offsetWidth;\n  const yCof = _map_settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.MAP_HEIGHT / canvas.offsetHeight;\n\n  cursor.x = xCof * (event.clientX - canvasX);\n  cursor.y = yCof * (event.clientY - canvasY);\n\n  for (let i = 0; i < _map_towerPlacementGeneration__WEBPACK_IMPORTED_MODULE_1__.towerPlacement.length; i++) {\n    const tile = _map_towerPlacementGeneration__WEBPACK_IMPORTED_MODULE_1__.towerPlacement[i];\n    if (cursor.x > tile.x &&\n      cursor.x < tile.x + _map_settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.TAIL_SIZE &&\n      cursor.y > tile.y &&\n      cursor.y < tile.y + _map_settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.TAIL_SIZE) {\n      activeTile = tile;\n      break;\n    } else {\n      activeTile = null;\n    }\n  }\n});\n\nwindow.addEventListener('click', () => {\n  if (_towerSelectButton__WEBPACK_IMPORTED_MODULE_2__.placementMode &&\n    activeTile !== null &&\n    activeTile.buildUp === false) {\n\n    (0,_towers_drawTower__WEBPACK_IMPORTED_MODULE_3__.buildTower)(_towerSelectButton__WEBPACK_IMPORTED_MODULE_2__.selectedTower, _towers_towerSets__WEBPACK_IMPORTED_MODULE_4__[\"default\"], activeTile);\n    activeTile.buildUp = true;\n  }\n});\n\n\n//# sourceURL=webpack://cursach/./src/core/events/placementMode.js?");

/***/ }),

/***/ "./src/core/events/towerSelectButton.js":
/*!**********************************************!*\
  !*** ./src/core/events/towerSelectButton.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"placementMode\": () => (/* binding */ placementMode),\n/* harmony export */   \"selectedTower\": () => (/* binding */ selectedTower)\n/* harmony export */ });\nlet placementMode = false;\nlet selectedTower = null;\n\nconst\n  gameMenuCollectionButtons = document.querySelectorAll('.game-menu-collection [data-tower-id]'),\n  towerFeaturesPopups = document.querySelectorAll('.tower-features-popup'),\n  gameMenuTowerFeatures = document.querySelector('.game-menu-tower-features'),\n  gameMenuWrapper = document.querySelector('.game-menu-wrapper'),\n  gameMenuCollection = document.querySelector('.game-menu-collection'),\n  gameMenuTarget = document.querySelector('.game-menu-target');\n\nfunction clearActiveFromFeaturesPopups() {\n  towerFeaturesPopups.forEach((towerFeaturesPopup) => {\n    if (towerFeaturesPopup.classList.contains('_active')) {\n      towerFeaturesPopup.classList.remove('_active');\n    }\n  });\n}\n\ngameMenuCollection.addEventListener('mouseleave', () => {\n  if (gameMenuTowerFeatures.classList.contains('_active')) {\n    gameMenuTowerFeatures.classList.remove('_active');\n  }\n});\n\ngameMenuWrapper.addEventListener('mouseleave', () => {\n  if (gameMenuCollection.classList.contains('_hover-active')) {\n    gameMenuCollection.classList.remove('_hover-active');\n  }\n});\n\ngameMenuCollectionButtons.forEach((gameMenuCollectionButton, type) => {\n  const towerPopup = document.querySelector(`#${gameMenuCollectionButton.dataset.towerId}`);\n  if (towerPopup) {\n    gameMenuCollectionButton.addEventListener('mouseenter', () => {\n      clearActiveFromFeaturesPopups();\n      if (!gameMenuTowerFeatures.classList.contains('_active')) {\n        gameMenuTowerFeatures.classList.add('_active');\n      }\n      towerPopup.classList.add('_active');\n    });\n\n    gameMenuCollectionButton.addEventListener('click', () => {\n      clearActiveFromFeaturesPopups();\n      setTimeout(() => placementMode = true, 0);\n      if (placementMode) {\n        placementMode = false;\n        setTimeout(() => placementMode = true, 0);\n      }\n      selectedTower = type;\n      gameMenuCollection.classList.remove('_hover-active');\n      gameMenuCollection.classList.remove('_active');\n      if (gameMenuTowerFeatures.classList.contains('_active')) {\n        gameMenuTowerFeatures.classList.remove('_active');\n      }\n      towerPopup.classList.remove('_active');\n    });\n  }\n});\n\ngameMenuTarget.addEventListener('mouseenter', () => {\n  gameMenuCollection.classList.add('_hover-active');\n});\n\ngameMenuTarget.addEventListener('click', () => {\n  gameMenuCollection.classList.toggle('_active');\n  placementMode = false;\n});\n\ndocument.querySelector('body').addEventListener('click', (event) => {\n  if (!event.target.closest('.game-menu-collection') &&\n    !event.target.closest('.game-menu-target')) {\n    gameMenuCollection.classList.remove('_active');\n  }\n});\n\n\n//# sourceURL=webpack://cursach/./src/core/events/towerSelectButton.js?");

/***/ }),

/***/ "./src/core/index.js":
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map_pathGeneration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map/pathGeneration.js */ \"./src/core/map/pathGeneration.js\");\n/* harmony import */ var _map_settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map/settings.js */ \"./src/core/map/settings.js\");\n/* harmony import */ var _map_towerPlacementGeneration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map/towerPlacementGeneration.js */ \"./src/core/map/towerPlacementGeneration.js\");\n/* harmony import */ var _map_passiveZoneGeneration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/passiveZoneGeneration.js */ \"./src/core/map/passiveZoneGeneration.js\");\n/* harmony import */ var _map_mapDrawing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map/mapDrawing */ \"./src/core/map/mapDrawing.js\");\n/* harmony import */ var _enemys_drawEnemies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enemys/drawEnemies */ \"./src/core/enemys/drawEnemies.js\");\n/* harmony import */ var _events_towerSelectButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events/towerSelectButton */ \"./src/core/events/towerSelectButton.js\");\n/* harmony import */ var _towers_drawTower__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./towers/drawTower */ \"./src/core/towers/drawTower.js\");\n/* harmony import */ var _events_placementMode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events/placementMode */ \"./src/core/events/placementMode.js\");\n/* harmony import */ var _enemys_classEnemy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./enemys/classEnemy */ \"./src/core/enemys/classEnemy.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst canvas = document.getElementById('gameCanvas');\nconst ctx = canvas.getContext('2d');\nlet stop = false;\nsetTimeout(() => stop = true,   30000);\n\n(0,_map_mapDrawing__WEBPACK_IMPORTED_MODULE_4__.drawMap)(_map_passiveZoneGeneration_js__WEBPACK_IMPORTED_MODULE_3__.passiveZone, _map_pathGeneration_js__WEBPACK_IMPORTED_MODULE_0__.directedPath, _map_towerPlacementGeneration_js__WEBPACK_IMPORTED_MODULE_2__.towerPlacement);\nctx.drawImage(_map_mapDrawing__WEBPACK_IMPORTED_MODULE_4__.map, 0, 0);\n\nfunction render() {\n  const animationId = requestAnimationFrame(render);\n\n  ctx.drawImage(_map_mapDrawing__WEBPACK_IMPORTED_MODULE_4__.map, 0, 0);\n  if (_events_towerSelectButton__WEBPACK_IMPORTED_MODULE_6__.placementMode) {\n    (0,_map_mapDrawing__WEBPACK_IMPORTED_MODULE_4__.ShowPlacementMode)();\n    (0,_map_mapDrawing__WEBPACK_IMPORTED_MODULE_4__.highlightCells)();\n    (0,_towers_drawTower__WEBPACK_IMPORTED_MODULE_7__.drawTowersRange)();\n  }\n\n  (0,_enemys_drawEnemies__WEBPACK_IMPORTED_MODULE_5__.drawEnemies)();\n  (0,_towers_drawTower__WEBPACK_IMPORTED_MODULE_7__.drawTowers)();\n\n  if (stop) cancelAnimationFrame(animationId);\n}\nrender();\n\n\n//# sourceURL=webpack://cursach/./src/core/index.js?");

/***/ }),

/***/ "./src/core/map/Tiles/passiveTile.js":
/*!*******************************************!*\
  !*** ./src/core/map/Tiles/passiveTile.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PassiveTile)\n/* harmony export */ });\n/* harmony import */ var _tile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile.js */ \"./src/core/map/Tiles/tile.js\");\n\r\nclass PassiveTile extends _tile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(x, y, type = 'passiveTile') {\r\n    super(x, y, type);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://cursach/./src/core/map/Tiles/passiveTile.js?");

/***/ }),

/***/ "./src/core/map/Tiles/pathTile.js":
/*!****************************************!*\
  !*** ./src/core/map/Tiles/pathTile.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PathTile)\n/* harmony export */ });\n/* harmony import */ var _tile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile.js */ \"./src/core/map/Tiles/tile.js\");\n\r\nclass PathTile extends _tile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(x, y, type = 'pathTile', direction = null) {\r\n    super(x, y, type);\r\n    this.direction = direction;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://cursach/./src/core/map/Tiles/pathTile.js?");

/***/ }),

/***/ "./src/core/map/Tiles/tile.js":
/*!************************************!*\
  !*** ./src/core/map/Tiles/tile.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tile)\n/* harmony export */ });\nclass Tile {\r\n  constructor(x, y, type) {\r\n    this.type = type;\r\n    this.x = x;\r\n    this.y = y;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://cursach/./src/core/map/Tiles/tile.js?");

/***/ }),

/***/ "./src/core/map/Tiles/towerTile.js":
/*!*****************************************!*\
  !*** ./src/core/map/Tiles/towerTile.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TowerTile)\n/* harmony export */ });\n/* harmony import */ var _tile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile.js */ \"./src/core/map/Tiles/tile.js\");\n\n\nclass TowerTile extends _tile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(x, y, type = 'towerTile') {\n    super(x, y, type);\n    this.buildUp = false;\n  }\n}\n\n\n//# sourceURL=webpack://cursach/./src/core/map/Tiles/towerTile.js?");

/***/ }),

/***/ "./src/core/map/mapDrawing.js":
/*!************************************!*\
  !*** ./src/core/map/mapDrawing.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ShowPlacementMode\": () => (/* binding */ ShowPlacementMode),\n/* harmony export */   \"drawMap\": () => (/* binding */ drawMap),\n/* harmony export */   \"highlightCells\": () => (/* binding */ highlightCells),\n/* harmony export */   \"map\": () => (/* binding */ map)\n/* harmony export */ });\n/* harmony import */ var _pathGeneration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pathGeneration.js */ \"./src/core/map/pathGeneration.js\");\n/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.js */ \"./src/core/map/settings.js\");\n/* harmony import */ var _passiveZoneGeneration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./passiveZoneGeneration */ \"./src/core/map/passiveZoneGeneration.js\");\n/* harmony import */ var _towerPlacementGeneration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./towerPlacementGeneration */ \"./src/core/map/towerPlacementGeneration.js\");\n/* harmony import */ var _events_placementMode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events/placementMode */ \"./src/core/events/placementMode.js\");\n/* harmony import */ var _png_Test_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./png/Test.png */ \"./src/core/map/png/Test.png\");\n\n\n\n\n\n\n\n\nconst canvas = document.getElementById('gameCanvas');\nconst ctx = canvas.getContext('2d');\nconst map = new Image();\nconst image = new Image();\nimage.src = _png_Test_png__WEBPACK_IMPORTED_MODULE_5__;\n\nconst IMAGE_TAIL_SIZE = 16;\n\nfor (const field of _pathGeneration_js__WEBPACK_IMPORTED_MODULE_0__.directedPath) {\n  ctx.fillStyle = '#4f371d';\n  ctx.fillRect(field.x, field.y, _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE, _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE);\n}\nfunction drawPath(path) {\n  for (const pathField of path) {\n    if (pathField.direction === 'left' || pathField.direction === 'right') {\n      drawField(pathField, 208, 32);\n    }\n\n    if (pathField.direction === 'top' || pathField.direction === 'down') {\n      drawField(pathField, 192, 32);\n    }\n\n    if (pathField.direction === 'right-down' || pathField.direction === 'top-left') {\n      drawField(pathField, 208, 0);\n    }\n\n    if (pathField.direction === 'right-top' || pathField.direction === 'down-left') {\n      drawField(pathField, 208, 16);\n    }\n\n    if (pathField.direction === 'top-right' || pathField.direction === 'left-down') {\n      drawField(pathField, 192, 0);\n    }\n\n    if (pathField.direction === 'left-top' || pathField.direction === 'down-right') {\n      drawField(pathField, 192, 16);\n    }\n  }\n}\n\nfunction drawPassiveZone(passiveZone) {\n  for (const passiveField of passiveZone) {\n    drawField(passiveField, 16, 128);\n  }\n}\n\nfunction drawTowerPlacement(towerPlacement) {\n  for (const towerField of towerPlacement) {\n    drawField(towerField, 16, 128);\n  }\n}\n\nfunction drawDecorations(passiveZone) {\n  const decorativeZone = passiveZone.slice();\n  const fieldValue = passiveZone.length;\n  const k = 0.1;\n  const decorationsValue = Math.round(fieldValue * k);\n  const decVariants = 3;\n\n  for (let i = 0; i < decorationsValue; i++) {\n    const currentField = getRandomField(decorativeZone);\n    const variant = getRandomDecoration(decVariants);\n    if (variant === 1) drawField(currentField, 112, 0);\n    if (variant === 2) drawField(currentField, 112, 16);\n    if (variant === 3) drawField(currentField, 112, 32);\n  }\n}\n\nfunction getRandomDecoration(variantsNum) {\n  return Math.round(Math.random() * variantsNum) + 1;\n}\n\nfunction getRandomField(passiveZone) {\n  let fieldValue = passiveZone.length;\n  const fieldIndex = Math.round(Math.random() * fieldValue++);\n  return passiveZone[fieldIndex];\n}\n\nfunction drawField(field, sx, sy) {\n  const { TAIL_SIZE } = _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS;\n\n  ctx.drawImage(\n    image,\n    sx, sy,\n    IMAGE_TAIL_SIZE, IMAGE_TAIL_SIZE,\n    field.x, field.y,\n    TAIL_SIZE, TAIL_SIZE\n  );\n}\n\nfunction drawMap(passiveZone, path, towerPlacement) {\n  image.onload = () => {\n    drawPassiveZone(passiveZone);\n    drawPath(path);\n    drawTowerPlacement(towerPlacement);\n    drawDecorations(passiveZone);\n    map.src = canvas.toDataURL();\n  };\n}\n\nfunction drawGrid() {\n  for (const field of _passiveZoneGeneration__WEBPACK_IMPORTED_MODULE_2__.passiveZone) {\n    ctx.fillStyle = 'black';\n    ctx.strokeRect(field.x, field.y, _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE, _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE);\n  }\n  for (const field of _towerPlacementGeneration__WEBPACK_IMPORTED_MODULE_3__.towerPlacement) {\n    ctx.fillStyle = 'black';\n    ctx.strokeRect(field.x, field.y, _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE, _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE);\n  }\n}\nfunction markTowerPlacement() {\n  for (const field of _towerPlacementGeneration__WEBPACK_IMPORTED_MODULE_3__.towerPlacement) {\n    ctx.fillStyle = 'rgba(31,255,219,0.2)';\n    ctx.fillRect(field.x, field.y, _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE, _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE);\n  }\n}\nfunction ShowPlacementMode() {\n  drawGrid();\n  markTowerPlacement();\n}\n\nfunction highlightCells() {\n  if (_events_placementMode__WEBPACK_IMPORTED_MODULE_4__.activeTile) {\n    ctx.fillStyle = 'rgba(31,255,219,0.2)';\n    ctx.fillRect(_events_placementMode__WEBPACK_IMPORTED_MODULE_4__.activeTile.x, _events_placementMode__WEBPACK_IMPORTED_MODULE_4__.activeTile.y, _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE, _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE);\n  }\n}\n\n\n\n//# sourceURL=webpack://cursach/./src/core/map/mapDrawing.js?");

/***/ }),

/***/ "./src/core/map/passiveZoneGeneration.js":
/*!***********************************************!*\
  !*** ./src/core/map/passiveZoneGeneration.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"passiveZone\": () => (/* binding */ passiveZone)\n/* harmony export */ });\n/* harmony import */ var _towerPlacementGeneration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./towerPlacementGeneration.js */ \"./src/core/map/towerPlacementGeneration.js\");\n/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.js */ \"./src/core/map/settings.js\");\n/* harmony import */ var _pathGeneration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pathGeneration.js */ \"./src/core/map/pathGeneration.js\");\n/* harmony import */ var _Tiles_passiveTile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tiles/passiveTile.js */ \"./src/core/map/Tiles/passiveTile.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction combinePlacement(placement1, placement2) {\r\n  const newPlacement = placement1.slice();\r\n  const middle = Math.floor(newPlacement.length / 2);\r\n  newPlacement.splice(middle, 0, ...placement2);\r\n  return newPlacement;\r\n}\r\n\r\nfunction sortPlacementByY(placement) {\r\n  const placementCopy = placement.slice();\r\n  return placementCopy.sort((oneField, anotherField) =>\r\n    oneField.y - anotherField.y);\r\n}\r\n\r\nfunction chopPlacement(placement) {\r\n  const planePlacement = [];\r\n  let start = 0;\r\n\r\n  for (let i = _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE; i <= _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.MAP_HEIGHT; i += _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE) {\r\n    const end = placement.findIndex((field) =>  field.y === i);\r\n    if (end === -1) {\r\n      planePlacement.push([]);\r\n    } else {\r\n      planePlacement.push(placement.slice(start, end));\r\n      start = end;\r\n      if (placement.findIndex((field) =>  field.y === i + _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE) === -1) {\r\n        planePlacement.push(placement.slice(start));\r\n      }\r\n    }\r\n  }\r\n\r\n  return planePlacement;\r\n}\r\n\r\nfunction generatePassiveZone(planePlacement) {\r\n  const passiveZone = [];\r\n  let startY = 0;\r\n\r\n  for (const row of planePlacement) {\r\n    const length = _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.COLUMNS;\r\n\r\n    for (let i = 0; i < length; i++) {\r\n      if (!row.some((field) => field.x === i * _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE)) {\r\n        passiveZone.push(new _Tiles_passiveTile_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](i * _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE, startY));\r\n      }\r\n    }\r\n    startY += _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE;\r\n  }\r\n  return passiveZone;\r\n}\r\n\r\nconst combinedPlacement = combinePlacement(_towerPlacementGeneration_js__WEBPACK_IMPORTED_MODULE_0__.towerPlacement, _pathGeneration_js__WEBPACK_IMPORTED_MODULE_2__.directedPath);\r\nconst sortedPlacement = sortPlacementByY(combinedPlacement);\r\nconst planePlacement = chopPlacement(sortedPlacement);\r\nconst passiveZone = generatePassiveZone(planePlacement);\r\n\n\n//# sourceURL=webpack://cursach/./src/core/map/passiveZoneGeneration.js?");

/***/ }),

/***/ "./src/core/map/pathGeneration.js":
/*!****************************************!*\
  !*** ./src/core/map/pathGeneration.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"directedPath\": () => (/* binding */ directedPath)\n/* harmony export */ });\n/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.js */ \"./src/core/map/settings.js\");\n/* harmony import */ var _Tiles_pathTile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tiles/pathTile.js */ \"./src/core/map/Tiles/pathTile.js\");\n\r\n\r\n\r\n\r\nfunction pathGeneration() {\r\n  const path = [];\r\n  let currentField = getRandomStart();\r\n  path.push(currentField);\r\n\r\n  while (!isPathEndReached(currentField)) {\r\n    currentField = getNextPathPoint(currentField, path);\r\n    path.push(currentField);\r\n  }\r\n\r\n  return path;\r\n}\r\n\r\nfunction getRandomStart() {\r\n  const x = _settings_js__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.START_X;\r\n  const y = (Math.floor(Math.random() * (_settings_js__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.ROWS - 1)) + 1) * _settings_js__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.TAIL_SIZE;\r\n  return new _Tiles_pathTile_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x, y);\r\n}\r\nfunction isPathEndReached(currentField) {\r\n  return currentField.x === _settings_js__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.MAP_WIDTH - _settings_js__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.TAIL_SIZE;\r\n}\r\n\r\nfunction getNextPathPoint(currentField, path) {\r\n  const availablePath = findAvailablePath(currentField, path);\r\n  return choosePath(availablePath);\r\n}\r\n\r\nfunction findAvailablePath(field, path) {\r\n  let possiblePath = findPossiblePath(field, path);\r\n\r\n  for (const possible of possiblePath) {\r\n    const neighbors = findNeighbor(possible, path);\r\n    if (neighbors > 2) {\r\n      possiblePath = possiblePath.filter((item) => item !== possible);\r\n    }\r\n  }\r\n  return possiblePath;\r\n}\r\n\r\nfunction findPossiblePath(field, path) {\r\n  const existFields = path;\r\n  const length = path.length;\r\n  const thisF = field;\r\n  const possiblePath = [];\r\n  const d = _settings_js__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.TAIL_SIZE;\r\n  const xMin = _settings_js__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.START_X;\r\n  const xMax = _settings_js__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.MAP_WIDTH;\r\n  const yMin = _settings_js__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.START_Y;\r\n  const yMax = _settings_js__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.MAP_HEIGHT;\r\n  let prevF = existFields[length - 2];\r\n  if (length === 1) prevF = existFields[0];\r\n\r\n  if (thisF.x !== xMin) {\r\n    if (prevF.x !== (thisF.x - d) && (prevF.y === thisF.y || prevF.y !== thisF.y)) {\r\n      possiblePath.push(new _Tiles_pathTile_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](thisF.x - d, thisF.y));\r\n    }\r\n  }\r\n  if (thisF.x !== xMax) {\r\n    if (prevF.x !== (thisF.x + d) && (prevF.y === thisF.y || prevF.y !== thisF.y)) {\r\n      possiblePath.push(new _Tiles_pathTile_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](thisF.x + d, thisF.y));\r\n    }\r\n  }\r\n  if (thisF.y !== yMin) {\r\n    if ((prevF.x === thisF.x || prevF.x !== thisF.x) && prevF.y !== (thisF.y - d)) {\r\n      possiblePath.push(new _Tiles_pathTile_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](thisF.x, thisF.y - d));\r\n    }\r\n  }\r\n  if (thisF.y !== yMax) {\r\n    if ((prevF.x === thisF.x || prevF.x !== thisF.x) && prevF.y !== (thisF.y + d)) {\r\n      possiblePath.push(new _Tiles_pathTile_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](thisF.x, thisF.y + d));\r\n    }\r\n  }\r\n  return possiblePath;\r\n}\r\n\r\nfunction findNeighbor(possible, path) {\r\n  const existFields = path;\r\n  const thisField = possible;\r\n  let neighbors = 0;\r\n  const d = _settings_js__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.TAIL_SIZE;\r\n  const xMin = _settings_js__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.START_X;\r\n  const xMax = _settings_js__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.MAP_WIDTH;\r\n  const yMin = _settings_js__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.START_Y;\r\n  const yMax = _settings_js__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.MAP_HEIGHT;\r\n\r\n  for (const exist of existFields) {\r\n    if (thisField.x === xMin) neighbors += 3;\r\n    if (thisField.x === xMax) neighbors += 3;\r\n    if (thisField.y === yMin) neighbors += 3;\r\n    if (thisField.y === yMax) neighbors += 3;\r\n\r\n    if (exist.x === thisField.x - d && exist.y === thisField.y) neighbors++;\r\n    if (exist.x === thisField.x + d && exist.y === thisField.y) neighbors++;\r\n    if (exist.x === thisField.x  && exist.y === thisField.y - d) neighbors++;\r\n    if (exist.x === thisField.x  && exist.y === thisField.y + d) neighbors++;\r\n    if (exist.x === thisField.x - d && exist.y === thisField.y - d) neighbors++;\r\n    if (exist.x === thisField.x + d && exist.y === thisField.y + d) neighbors++;\r\n    if (exist.x === thisField.x + d && exist.y === thisField.y - d) neighbors++;\r\n    if (exist.x === thisField.x - d && exist.y === thisField.y + d) neighbors++;\r\n  }\r\n  return neighbors;\r\n}\r\n\r\nfunction choosePath(paths) {\r\n  if (paths.length === 0) throw new Error('The path was looped');\r\n  const ways = paths;\r\n  const length =  paths.length;\r\n  const wayIndex = Math.floor(Math.random() * length);\r\n  return  ways[wayIndex];\r\n}\r\n\r\nfunction isPathGenerated() {\r\n  while (true) {\r\n    try {\r\n      return pathGeneration();\r\n    } catch (error) {\r\n      console.error('Error');\r\n    }\r\n  }\r\n}\r\n\r\nconst pathField = isPathGenerated();\r\n\r\nfunction definePathDirection(path) {\r\n  const currentPath = path;\r\n  const length = currentPath.length;\r\n\r\n  currentPath[0].direction = 'right';\r\n  currentPath[length - 1].direction = 'right';\r\n\r\n  for (let i = 1; i < length - 1; i++) {\r\n    const x1 = currentPath[i - 1].x;\r\n    const y1 = currentPath[i - 1].y;\r\n    const x2 = currentPath[i + 1].x;\r\n    const y2 = currentPath[i + 1].y;\r\n\r\n    setRightOrLeftDirection(x1, y1, x2, y2, currentPath[i]);\r\n    setDownOrUpDirection(x1, y1, x2, y2, currentPath[i]);\r\n    setTurnDirection(x1, y1, x2, y2, currentPath[i]);\r\n  }\r\n  return currentPath;\r\n}\r\n\r\nfunction setRightOrLeftDirection(x1, y1, x2, y2, pathField) {\r\n  if (y1 === y2 && x1 < x2) pathField.direction = 'right';\r\n  if (y1 === y2 && x1 > x2) pathField.direction = 'left';\r\n}\r\n\r\nfunction setDownOrUpDirection(x1, y1, x2, y2, pathField) {\r\n  if (x1 === x2 && y1 < y2) pathField.direction = 'down';\r\n  if (x1 === x2 && y1 > y2) pathField.direction = 'top';\r\n}\r\n\r\nfunction setTurnDirection(x1, y1, x2, y2, pathField) {\r\n  if (y1 < y2 && x1 < x2 && x1 === pathField.x) pathField.direction = 'down-right';\r\n  if (y1 < y2 && x1 < x2 && x1 !== pathField.x) pathField.direction = 'right-down';\r\n  if (y1 < y2 && x1 > x2 && x1 === pathField.x) pathField.direction = 'down-left';\r\n  if (y1 < y2 && x1 > x2 && x1 !== pathField.x) pathField.direction = 'left-down';\r\n  if (y1 > y2 && x1 < x2 && x1 === pathField.x) pathField.direction = 'top-right';\r\n  if (y1 > y2 && x1 < x2 && x1 !== pathField.x) pathField.direction = 'right-top';\r\n  if (y1 > y2 && x1 > x2 && x1 === pathField.x) pathField.direction = 'top-left';\r\n  if (y1 > y2 && x1 > x2 && x1 !== pathField.x) pathField.direction = 'left-top';\r\n}\r\nconst directedPath = definePathDirection(pathField);\r\n\n\n//# sourceURL=webpack://cursach/./src/core/map/pathGeneration.js?");

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

/***/ "./src/core/projectiles/classProjectile.js":
/*!*************************************************!*\
  !*** ./src/core/projectiles/classProjectile.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Projectile)\n/* harmony export */ });\nclass Projectile {\n  constructor(x, y, ctx, target, speed = 10) {\n    this.x = x;\n    this.y = y;\n    this.ctx = ctx;\n    this.target = target;\n    this.speed = speed;\n  }\n\n  draw() {\n    this.ctx.beginPath();\n    this.ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);\n    this.ctx.fillStyle = 'red';\n    this.ctx.fill();\n  }\n\n  update() {\n    this.draw();\n\n    const directionAngle = Math.atan2(\n      this.target.y - this.y,\n      this.target.x - this.x\n    );\n\n    const xVelocity = Math.cos(directionAngle) * this.speed;\n    const yVelocity = Math.sin(directionAngle) * this.speed;\n\n    this.x += xVelocity;\n    this.y += yVelocity;\n  }\n}\n\n\n//# sourceURL=webpack://cursach/./src/core/projectiles/classProjectile.js?");

/***/ }),

/***/ "./src/core/towers/classTower.js":
/*!***************************************!*\
  !*** ./src/core/towers/classTower.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tower)\n/* harmony export */ });\n/* harmony import */ var _projectiles_classProjectile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projectiles/classProjectile */ \"./src/core/projectiles/classProjectile.js\");\n/* harmony import */ var _map_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map/settings */ \"./src/core/map/settings.js\");\n\n\nclass Tower {\n  constructor(x, y, ctx, towerSet, target = null) {\n    this.x = x;\n    this.y = y;\n    this.target = target;\n    this.ctx = ctx;\n    this.image = new Image();\n    this.image.src = towerSet.imageSrc;\n    this.frames = 0;\n    this.weaponPos = {\n      x: this.x + _map_settings__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE / 2,\n      y: this.y - 10,\n    };\n    this.projectiles = [];\n    this.towerSet = {\n      attackSpeed: towerSet.attackSpeed,\n      range: towerSet.range,\n      spriteY: towerSet.spriteY,\n      spriteWidth: towerSet.spriteWidth,\n      spriteHeight: towerSet.spriteHeight\n    };\n  }\n\n  showRange() {\n    this.ctx.beginPath();\n    this.ctx.arc(this.weaponPos.x, this.weaponPos.y, this.towerSet.range, 0, Math.PI * 2);\n    this.ctx.fillStyle = 'rgba(0,255,38,0.05)';\n    this.ctx.fill();\n    this.ctx.fillStyle = 'rgba(94,94,94,0.08)';\n    this.ctx.stroke();\n  }\n\n  draw() {\n    const correctY = this.y - 64;\n\n    this.ctx.drawImage(\n      this.image,\n      0,\n      this.towerSet.spriteY,\n      this.towerSet.spriteWidth,\n      this.towerSet.spriteHeight,\n      this.x,\n      correctY,\n      this.towerSet.spriteWidth,\n      this.towerSet.spriteHeight\n    );\n  }\n\n  update() {\n    this.draw();\n    if (this.frames % this.towerSet.attackSpeed === 0 && this.target) {\n      const projectile = new _projectiles_classProjectile__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n        this.weaponPos.x,\n        this.weaponPos.y,\n        this.ctx,\n        this.target\n      );\n\n      this.projectiles.push(projectile);\n    }\n\n    this.frames++;\n  }\n}\n\n\n//# sourceURL=webpack://cursach/./src/core/towers/classTower.js?");

/***/ }),

/***/ "./src/core/towers/drawTower.js":
/*!**************************************!*\
  !*** ./src/core/towers/drawTower.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildTower\": () => (/* binding */ buildTower),\n/* harmony export */   \"drawTowers\": () => (/* binding */ drawTowers),\n/* harmony export */   \"drawTowersRange\": () => (/* binding */ drawTowersRange),\n/* harmony export */   \"towers\": () => (/* binding */ towers)\n/* harmony export */ });\n/* harmony import */ var _classTower__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classTower */ \"./src/core/towers/classTower.js\");\n/* harmony import */ var _map_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map/settings */ \"./src/core/map/settings.js\");\n/* harmony import */ var _enemys_drawEnemies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enemys/drawEnemies */ \"./src/core/enemys/drawEnemies.js\");\n\n\n\n\nconst canvas = document.getElementById('gameCanvas');\nconst ctx = canvas.getContext('2d');\nconst towers = [];\n\nfor (let i = 0; i < _map_settings__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.ROWS; i++) {\n  towers[i] = [];\n}\nfunction drawTowers() {\n  for (const row of towers) {\n    for (const tower of row) {\n      tower.update();\n      tower.target = null;\n\n      const possibleTargets = _enemys_drawEnemies__WEBPACK_IMPORTED_MODULE_2__.enemies.filter((enemy) => {\n        const xDifference = enemy.x - tower.weaponPos.x;\n        const yDifference = enemy.y - tower.weaponPos.y;\n        const distance = Math.hypot(xDifference, yDifference);\n\n        return distance < tower.towerSet.range;\n      });\n      tower.target = possibleTargets[0];\n\n\n      const projectileNum = tower.projectiles.length;\n      for (let i = projectileNum - 1; i >= 0; i--) {\n        const projectile = tower.projectiles[i];\n        projectile.update();\n\n        const xDifference = projectile.target.x - projectile.x;\n        const yDifference = projectile.target.x - projectile.x;\n\n        const distance = Math.hypot(xDifference, yDifference);\n        if (distance < projectile.target.enemySet.spriteWidth / 10) {\n          tower.projectiles.pop();\n        }\n      }\n    }\n  }\n}\n\nfunction drawTowersRange() {\n  for (const row of towers) {\n    for (const tower of row) {\n      tower.showRange();\n    }\n  }\n}\n\nfunction buildTower(type, towerSets, activeTile) {\n  const row = activeTile.y / _map_settings__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE;\n  const towerSet = towerSets[type];\n  const tower = new _classTower__WEBPACK_IMPORTED_MODULE_0__[\"default\"](activeTile.x, activeTile.y, ctx, towerSet);\n\n  towers[row].push(tower);\n}\n\n\n\n//# sourceURL=webpack://cursach/./src/core/towers/drawTower.js?");

/***/ }),

/***/ "./src/core/towers/towerSets.js":
/*!**************************************!*\
  !*** ./src/core/towers/towerSets.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sprites_towers_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprites/towers.png */ \"./src/core/towers/sprites/towers.png\");\n\nclass TowerSets {\n  constructor(range, spriteY, spriteWidth = 64, spriteHeight = 128, imageSrc = _sprites_towers_png__WEBPACK_IMPORTED_MODULE_0__, attackSpeed = 50) {\n    this.range = range;\n    this.attackSpeed = attackSpeed;\n    this.imageSrc = imageSrc;\n    this.spriteY = spriteY;\n    this.spriteWidth = spriteWidth;\n    this.spriteHeight = spriteHeight;\n  }\n}\n\nconst TOWER_ONE = new TowerSets(150, 0);\nconst TOWER_TWO = new TowerSets(200, 128);\nconst TOWER_TREE = new TowerSets(150, 256);\nconst TOWER_FOUR = new TowerSets(200, 384);\nconst TOWER_FIVE = new TowerSets(150, 512);\nconst TOWER_SIX = new TowerSets(200, 640);\n\nconst TOWER_SETS = [TOWER_ONE, TOWER_TWO, TOWER_TREE, TOWER_FOUR, TOWER_FIVE, TOWER_SIX];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TOWER_SETS);\n\n\n\n//# sourceURL=webpack://cursach/./src/core/towers/towerSets.js?");

/***/ }),

/***/ "./src/core/enemys/sprites/walk.png":
/*!******************************************!*\
  !*** ./src/core/enemys/sprites/walk.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/433bbbc9c19a438d3724.png\";\n\n//# sourceURL=webpack://cursach/./src/core/enemys/sprites/walk.png?");

/***/ }),

/***/ "./src/core/map/png/Test.png":
/*!***********************************!*\
  !*** ./src/core/map/png/Test.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/4d1ddad374cfcbd1393c.png\";\n\n//# sourceURL=webpack://cursach/./src/core/map/png/Test.png?");

/***/ }),

/***/ "./src/core/towers/sprites/towers.png":
/*!********************************************!*\
  !*** ./src/core/towers/sprites/towers.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/0e80b35cfec08fe59efa.png\";\n\n//# sourceURL=webpack://cursach/./src/core/towers/sprites/towers.png?");

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