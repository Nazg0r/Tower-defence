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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Enemy)\n/* harmony export */ });\nclass Enemy {\r\n  constructor(x = -200, y = 0, speed = 1, ctx, waypoints, enemySet) {\r\n    this.x = x;\r\n    this.y = y;\r\n    this.speed = speed;\r\n    this.currentHealt = enemySet.maxHealth;\r\n    this.waypoints = waypoints;\r\n    this.weypointIndex = 0;\r\n    this.offset = 0;\r\n    this.ctx = ctx;\r\n    this.image = new Image();\r\n    this.image.src = enemySet.imageSrc;\r\n    this.currentFrame = 0;\r\n    this.enemySet = {\r\n      maxHealth: enemySet.maxHealth,\r\n      imageSrc: enemySet.imageSrc,\r\n      frameStartY: enemySet.frameStartY,\r\n      frames: enemySet.frames,\r\n      spriteWidth: enemySet.spriteWidth,\r\n      spriteHeight: enemySet.spriteHeight,\r\n      hold: 5,\r\n      holdCounter: 0,\r\n    };\r\n  }\r\n\r\n  draw() {\r\n    const frameStartX = this.enemySet.spriteWidth * this.currentFrame;\r\n    const correctX = this.x - this.enemySet.spriteWidth / 2;\r\n    const correctY = this.y - this.enemySet.spriteHeight / 2;\r\n\r\n    this.ctx.drawImage(\r\n      this.image,\r\n      frameStartX,\r\n      this.enemySet.frameStartY,\r\n      this.enemySet.spriteWidth,\r\n      this.enemySet.spriteHeight,\r\n      correctX,\r\n      correctY,\r\n      this.enemySet.spriteWidth,\r\n      this.enemySet.spriteHeight\r\n    );\r\n\r\n    this.enemySet.holdCounter++;\r\n    if (this.enemySet.holdCounter % this.enemySet.hold === 0) {\r\n      this.currentFrame++;\r\n    }\r\n    if (this.currentFrame === this.enemySet.frames - 1) {\r\n      this.currentFrame = 0;\r\n    }\r\n  }\r\n\r\n  drawHealthBar() {\r\n    const referenceX = this.x - this.enemySet.spriteWidth / 2;\r\n    const referenceY = this.y - this.enemySet.spriteHeight / 2;\r\n    const endBarX = referenceX + this.enemySet.spriteWidth;\r\n    const HPCof = this.currentHealt / this.enemySet.maxHealth;\r\n    const HPBarX = referenceX + this.enemySet.spriteWidth * HPCof;\r\n\r\n    this.createBeveledRectangleContour(referenceX, referenceY, endBarX);\r\n    this.ctx.fillStyle = 'rgb(70,91,196)';\r\n    this.ctx.fill();\r\n    this.ctx.stroke();\r\n\r\n    this.createBeveledRectangleContour(referenceX, referenceY, HPBarX);\r\n    this.ctx.fillStyle = 'rgba(53,211,30,0.82)';\r\n    this.ctx.fill();\r\n  }\r\n  update() {\r\n    this.draw();\r\n\r\n    const waypoint = this.waypoints[this.weypointIndex];\r\n    const nextWaypoint = this.waypoints[this.weypointIndex + 1];\r\n\r\n    if (this.weypointIndex === 0) {\r\n      this.offset = Math.floor(Math.random() * 31) + 16;\r\n\r\n      this.x += waypoint.x;\r\n      this.y = waypoint.y + this.offset;\r\n\r\n      waypoint.y += this.offset;\r\n      waypoint.x += this.offset;\r\n\r\n      nextWaypoint.x += this.offset;\r\n      nextWaypoint.y += this.offset;\r\n      this.weypointIndex += 1;\r\n    } else {\r\n      const xDistance = waypoint.x - this.x;\r\n      const yDistance = waypoint.y - this.y;\r\n\r\n      const directionAngle = Math.atan2(yDistance, xDistance);\r\n      const xVelocity = Math.cos(directionAngle) * this.speed;\r\n      const yVelocity = Math.sin(directionAngle) * this.speed;\r\n\r\n      this.x += xVelocity;\r\n      this.y += yVelocity;\r\n\r\n      const xAbsoluteDiff = Math.abs(Math.round(this.x) - waypoint.x);\r\n      const yAbsoluteDiff = Math.abs(Math.round(this.y) - waypoint.y);\r\n\r\n      if (xAbsoluteDiff < Math.abs(xVelocity) &&\r\n        yAbsoluteDiff < Math.abs(yVelocity) &&\r\n        this.weypointIndex < this.waypoints.length - 1) {\r\n\r\n        nextWaypoint.x += this.offset;\r\n        nextWaypoint.y += this.offset;\r\n        this.weypointIndex += 1;\r\n      }\r\n    }\r\n  }\r\n\r\n  createBeveledRectangleContour(x, y, endX) {\r\n    this.ctx.beginPath();\r\n    this.ctx.moveTo(x, y + 2);\r\n    this.ctx.quadraticCurveTo(x, y, x + 2, y);\r\n    this.ctx.lineTo(endX - 2, y);\r\n    this.ctx.quadraticCurveTo(endX, y, endX, y + 2);\r\n    this.ctx.lineTo(endX, y + 6);\r\n    this.ctx.quadraticCurveTo(endX, y + 8, endX - 2, y + 8);\r\n    this.ctx.lineTo(x + 2, y + 8);\r\n    this.ctx.quadraticCurveTo(x, y + 8, x, y + 6);\r\n    this.ctx.lineTo(x, y + 2);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://cursach/./src/core/enemys/classEnemy.js?");

/***/ }),

/***/ "./src/core/enemys/drawEnemies.js":
/*!****************************************!*\
  !*** ./src/core/enemys/drawEnemies.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkWave\": () => (/* binding */ checkWave),\n/* harmony export */   \"drawEnemies\": () => (/* binding */ drawEnemies),\n/* harmony export */   \"drawEnemiesHealthBar\": () => (/* binding */ drawEnemiesHealthBar),\n/* harmony export */   \"enemies\": () => (/* binding */ enemies)\n/* harmony export */ });\n/* harmony import */ var _classEnemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classEnemy */ \"./src/core/enemys/classEnemy.js\");\n/* harmony import */ var _map_pathGeneration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map/pathGeneration */ \"./src/core/map/pathGeneration.js\");\n/* harmony import */ var _enemySets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enemySets */ \"./src/core/enemys/enemySets.js\");\n\n\n\n\nconst canvas = document.getElementById('gameCanvas');\nconst ctx = canvas.getContext('2d');\nconst enemies = [];\nlet pause = false;\nlet wave = 1;\nlet startEnemiesAmount = 5;\nconst waypoints = getWaypoints(_map_pathGeneration__WEBPACK_IMPORTED_MODULE_1__.directedPath);\n\nfunction drawEnemies() {\n  const enemiesNumber = enemies.length;\n  for (let i = enemiesNumber - 1; i >= 0; i--) {\n    enemies[i].update();\n  }\n}\n\nfunction checkWave() {\n  const wavePassed = isAllEnemiesDestroyed(enemies);\n  if (wavePassed) startNewWave();\n}\n\nfunction drawEnemiesHealthBar() {\n  const enemiesNumber = enemies.length;\n  for (let i = enemiesNumber - 1; i >= 0; i--) {\n    if (enemies[i].currentHealt < enemies[i].enemySet.maxHealth) {\n      enemies[i].drawHealthBar();\n    }\n  }\n}\n\nfunction spawnEnemies(amount, offset, wave) {\n  for (let i = 1; i <= amount; i++) {\n    const enemy = new _classEnemy__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n      -offset * i,\n      0,\n      2,\n      ctx,\n      copyArray(waypoints),\n      _enemySets__WEBPACK_IMPORTED_MODULE_2__[\"default\"][wave - 1]\n    );\n    enemies.push(enemy);\n  }\n}\n\n\nfunction getWaypoints(path) {\n  const wayPoints = [];\n\n  wayPoints.push(Object.assign({}, path[0]));\n  wayPoints[0].x += -200;\n\n  for (const point of path) {\n    if (point.direction !== 'left' &&\n     point.direction !== 'right' &&\n     point.direction !== 'top' &&\n     point.direction !== 'down') {\n\n      wayPoints.push(Object.assign({}, point));\n    }\n  }\n  wayPoints.push(Object.assign({}, path[path.length - 1]));\n  wayPoints[wayPoints.length - 1].x += 200;\n\n  return wayPoints;\n}\n\nfunction copyArray(arr) {\n  return JSON.parse(JSON.stringify(arr));\n}\n\nfunction isAllEnemiesDestroyed(enemies) {\n  const aliveEnemies = enemies.length;\n  return aliveEnemies === 0;\n}\n\nfunction startNewWave() {\n  if (wave !== 1 && wave < 6 && pause === false) {\n    pause = true;\n    setTimeout(() => {\n      spawnEnemies(startEnemiesAmount, 100, wave);\n      pause = false;\n      startEnemiesAmount += 2;\n      wave++;\n    }, 5000);\n  } else if (wave === 1) {\n    spawnEnemies(startEnemiesAmount, 100, wave);\n    startEnemiesAmount += 2;\n    wave++;\n  }\n}\n\n\n//# sourceURL=webpack://cursach/./src/core/enemys/drawEnemies.js?");

/***/ }),

/***/ "./src/core/enemys/enemySets.js":
/*!**************************************!*\
  !*** ./src/core/enemys/enemySets.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sprites_walk_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprites/walk.png */ \"./src/core/enemys/sprites/walk.png\");\n\r\n\r\nclass EnemySet  {\r\n  constructor(\r\n    maxHealth,\r\n    frameStartY,\r\n    frames,\r\n    spriteWidth,\r\n    spriteHeight,\r\n    imageSrc = _sprites_walk_png__WEBPACK_IMPORTED_MODULE_0__\r\n  ) {\r\n    this.maxHealth = maxHealth;\r\n    this.frameStartY = frameStartY;\r\n    this.frames = frames;\r\n    this.spriteWidth = spriteWidth;\r\n    this.spriteHeight = spriteHeight;\r\n    this.imageSrc = imageSrc;\r\n  }\r\n}\r\n\r\nconst SLIME = new EnemySet(100, 0, 8, 32, 32);\r\nconst WORM = new EnemySet(250, 96, 9, 64, 64);\r\nconst SKELETON = new EnemySet(300, 32, 12, 64, 64);\r\nconst NECROMANCER = new EnemySet(450, 160, 8, 64, 64);\r\nconst DEATH = new EnemySet(500, 224, 7, 64, 64);\r\n\r\nconst ENEMIES_SETS = [SLIME, WORM, SKELETON, NECROMANCER, DEATH];\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ENEMIES_SETS);\r\n\n\n//# sourceURL=webpack://cursach/./src/core/enemys/enemySets.js?");

/***/ }),

/***/ "./src/core/events/placementMode.js":
/*!******************************************!*\
  !*** ./src/core/events/placementMode.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"activeTile\": () => (/* binding */ activeTile),\n/* harmony export */   \"cursor\": () => (/* binding */ cursor)\n/* harmony export */ });\n/* harmony import */ var _map_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map/settings */ \"./src/core/map/settings.js\");\n/* harmony import */ var _map_towerPlacementGeneration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map/towerPlacementGeneration */ \"./src/core/map/towerPlacementGeneration.js\");\n/* harmony import */ var _towerSelectButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./towerSelectButton */ \"./src/core/events/towerSelectButton.js\");\n/* harmony import */ var _towers_drawTower__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../towers/drawTower */ \"./src/core/towers/drawTower.js\");\n/* harmony import */ var _towers_towerSets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../towers/towerSets */ \"./src/core/towers/towerSets.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst canvas = document.getElementById('gameCanvas');\r\n\r\nconst cursor = {\r\n  x: 0,\r\n  y: 0\r\n};\r\n\r\nlet activeTile = null;\r\n\r\nwindow.addEventListener('mousemove', (event) => {\r\n  const canvasRect = canvas.getBoundingClientRect();\r\n  const canvasX = canvasRect.left;\r\n  const canvasY = canvasRect.top;\r\n\r\n  const xCof = _map_settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.MAP_WIDTH / canvas.offsetWidth;\r\n  const yCof = _map_settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.MAP_HEIGHT / canvas.offsetHeight;\r\n\r\n  cursor.x = xCof * (event.clientX - canvasX);\r\n  cursor.y = yCof * (event.clientY - canvasY);\r\n\r\n  for (let i = 0; i < _map_towerPlacementGeneration__WEBPACK_IMPORTED_MODULE_1__.towerPlacement.length; i++) {\r\n    const tile = _map_towerPlacementGeneration__WEBPACK_IMPORTED_MODULE_1__.towerPlacement[i];\r\n    if (cursor.x > tile.x &&\r\n      cursor.x < tile.x + _map_settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.TAIL_SIZE &&\r\n      cursor.y > tile.y &&\r\n      cursor.y < tile.y + _map_settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.TAIL_SIZE) {\r\n      activeTile = tile;\r\n      break;\r\n    } else {\r\n      activeTile = null;\r\n    }\r\n  }\r\n});\r\n\r\nwindow.addEventListener('click', () => {\r\n  if (_towerSelectButton__WEBPACK_IMPORTED_MODULE_2__.placementMode &&\r\n    activeTile !== null &&\r\n    activeTile.buildUp === false) {\r\n\r\n    (0,_towers_drawTower__WEBPACK_IMPORTED_MODULE_3__.buildTower)(_towerSelectButton__WEBPACK_IMPORTED_MODULE_2__.selectedTower, _towers_towerSets__WEBPACK_IMPORTED_MODULE_4__[\"default\"], activeTile);\r\n    activeTile.buildUp = true;\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://cursach/./src/core/events/placementMode.js?");

/***/ }),

/***/ "./src/core/events/startGame.js":
/*!**************************************!*\
  !*** ./src/core/events/startGame.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"start\": () => (/* binding */ start)\n/* harmony export */ });\nlet start = false;\r\n\r\nconst\r\n  startGame = document.querySelector('.start-game'),\r\n  startGameButtonGo = document.querySelector('.start-game__button--go'),\r\n  startGameWrapper = document.querySelector('.start-game__wrapper'),\r\n  startGameProgress = document.querySelector('.start-game__progress'),\r\n  startGameProgressAnim = document.querySelector('.start-game__progress--anim');\r\n\r\nlet startGameProgressAnimIntervalCounter = 1;\r\n\r\nconst startGameProgressAnimInterval = setInterval(() => {\r\n  startGameProgressAnim.style.setProperty(\r\n    '--pos',\r\n    `${56 * startGameProgressAnimIntervalCounter}px`\r\n  );\r\n\r\n  startGameProgressAnimIntervalCounter++;\r\n  if (startGameProgressAnimIntervalCounter === 17) {\r\n    startGameProgressAnimIntervalCounter = 1;\r\n  }\r\n}, 90);\r\n\r\nstartGameButtonGo.addEventListener('click', () => {\r\n  start = true;\r\n  startGameWrapper.classList.add('_hidden');\r\n  setTimeout(() => {\r\n    startGameProgress.classList.add('_visible');\r\n\r\n    setTimeout(() => {\r\n      startGame.classList.add('_hidden');\r\n      clearInterval(startGameProgressAnimInterval);\r\n    }, 4000);\r\n  }, 700);\r\n});\r\n\n\n//# sourceURL=webpack://cursach/./src/core/events/startGame.js?");

/***/ }),

/***/ "./src/core/events/towerSelectButton.js":
/*!**********************************************!*\
  !*** ./src/core/events/towerSelectButton.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"placementMode\": () => (/* binding */ placementMode),\n/* harmony export */   \"selectedTower\": () => (/* binding */ selectedTower)\n/* harmony export */ });\nlet placementMode = false;\r\nlet selectedTower = null;\r\n\r\nconst\r\n  gameMenuCollectionButtons = document.querySelectorAll('.game-menu-collection [data-tower-id]'),\r\n  towerFeaturesPopups = document.querySelectorAll('.tower-features-popup'),\r\n  gameMenuTowerFeatures = document.querySelector('.game-menu-tower-features'),\r\n  gameMenuWrapper = document.querySelector('.game-menu-wrapper'),\r\n  gameMenuCollection = document.querySelector('.game-menu-collection'),\r\n  gameMenuTarget = document.querySelector('.game-menu-target');\r\n\r\nfunction clearActiveFromFeaturesPopups() {\r\n  towerFeaturesPopups.forEach((towerFeaturesPopup) => {\r\n    if (towerFeaturesPopup.classList.contains('_active')) {\r\n      towerFeaturesPopup.classList.remove('_active');\r\n    }\r\n  });\r\n}\r\n\r\ngameMenuCollection.addEventListener('mouseleave', () => {\r\n  if (gameMenuTowerFeatures.classList.contains('_active')) {\r\n    gameMenuTowerFeatures.classList.remove('_active');\r\n  }\r\n});\r\n\r\ngameMenuWrapper.addEventListener('mouseleave', () => {\r\n  if (gameMenuCollection.classList.contains('_hover-active')) {\r\n    gameMenuCollection.classList.remove('_hover-active');\r\n  }\r\n});\r\n\r\ngameMenuCollectionButtons.forEach((gameMenuCollectionButton, type) => {\r\n  const towerPopup = document.querySelector(`#${gameMenuCollectionButton.dataset.towerId}`);\r\n  if (towerPopup) {\r\n    gameMenuCollectionButton.addEventListener('mouseenter', () => {\r\n      clearActiveFromFeaturesPopups();\r\n      if (!gameMenuTowerFeatures.classList.contains('_active')) {\r\n        gameMenuTowerFeatures.classList.add('_active');\r\n      }\r\n      towerPopup.classList.add('_active');\r\n    });\r\n\r\n    gameMenuCollectionButton.addEventListener('click', () => {\r\n      clearActiveFromFeaturesPopups();\r\n      setTimeout(() => placementMode = true, 0);\r\n      if (placementMode) {\r\n        placementMode = false;\r\n        setTimeout(() => placementMode = true, 0);\r\n      }\r\n      selectedTower = type;\r\n      gameMenuCollection.classList.remove('_hover-active');\r\n      gameMenuCollection.classList.remove('_active');\r\n      if (gameMenuTowerFeatures.classList.contains('_active')) {\r\n        gameMenuTowerFeatures.classList.remove('_active');\r\n      }\r\n      towerPopup.classList.remove('_active');\r\n    });\r\n  }\r\n});\r\n\r\ngameMenuTarget.addEventListener('mouseenter', () => {\r\n  gameMenuCollection.classList.add('_hover-active');\r\n});\r\n\r\ngameMenuTarget.addEventListener('click', () => {\r\n  gameMenuCollection.classList.toggle('_active');\r\n  placementMode = false;\r\n});\r\n\r\ndocument.querySelector('body').addEventListener('click', (event) => {\r\n  if (!event.target.closest('.game-menu-collection') &&\r\n    !event.target.closest('.game-menu-target')) {\r\n    gameMenuCollection.classList.remove('_active');\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://cursach/./src/core/events/towerSelectButton.js?");

/***/ }),

/***/ "./src/core/index.js":
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map_pathGeneration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map/pathGeneration.js */ \"./src/core/map/pathGeneration.js\");\n/* harmony import */ var _map_settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map/settings.js */ \"./src/core/map/settings.js\");\n/* harmony import */ var _map_towerPlacementGeneration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map/towerPlacementGeneration.js */ \"./src/core/map/towerPlacementGeneration.js\");\n/* harmony import */ var _map_passiveZoneGeneration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/passiveZoneGeneration.js */ \"./src/core/map/passiveZoneGeneration.js\");\n/* harmony import */ var _map_mapDrawing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map/mapDrawing */ \"./src/core/map/mapDrawing.js\");\n/* harmony import */ var _enemys_drawEnemies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enemys/drawEnemies */ \"./src/core/enemys/drawEnemies.js\");\n/* harmony import */ var _events_towerSelectButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events/towerSelectButton */ \"./src/core/events/towerSelectButton.js\");\n/* harmony import */ var _towers_drawTower__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./towers/drawTower */ \"./src/core/towers/drawTower.js\");\n/* harmony import */ var _events_startGame__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events/startGame */ \"./src/core/events/startGame.js\");\n/* harmony import */ var _events_placementMode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./events/placementMode */ \"./src/core/events/placementMode.js\");\n/* harmony import */ var _enemys_classEnemy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./enemys/classEnemy */ \"./src/core/enemys/classEnemy.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst canvas = document.getElementById('gameCanvas');\r\nconst ctx = canvas.getContext('2d');\r\nlet stop = false;\r\nsetTimeout(() => stop = true,   1000000);\r\n\r\n(0,_map_mapDrawing__WEBPACK_IMPORTED_MODULE_4__.drawMap)(_map_passiveZoneGeneration_js__WEBPACK_IMPORTED_MODULE_3__.passiveZone, _map_pathGeneration_js__WEBPACK_IMPORTED_MODULE_0__.directedPath, _map_towerPlacementGeneration_js__WEBPACK_IMPORTED_MODULE_2__.towerPlacement);\r\nctx.drawImage(_map_mapDrawing__WEBPACK_IMPORTED_MODULE_4__.map, 0, 0);\r\n\r\nfunction render() {\r\n  const animationId = requestAnimationFrame(render);\r\n\r\n  ctx.drawImage(_map_mapDrawing__WEBPACK_IMPORTED_MODULE_4__.map, 0, 0);\r\n  if (_events_towerSelectButton__WEBPACK_IMPORTED_MODULE_6__.placementMode) {\r\n    (0,_map_mapDrawing__WEBPACK_IMPORTED_MODULE_4__.ShowPlacementMode)();\r\n    (0,_map_mapDrawing__WEBPACK_IMPORTED_MODULE_4__.highlightCells)();\r\n    (0,_towers_drawTower__WEBPACK_IMPORTED_MODULE_7__.drawTowersRange)();\r\n  }\r\n\r\n  (0,_enemys_drawEnemies__WEBPACK_IMPORTED_MODULE_5__.drawEnemies)();\r\n  (0,_towers_drawTower__WEBPACK_IMPORTED_MODULE_7__.drawTowersActivity)();\r\n  (0,_enemys_drawEnemies__WEBPACK_IMPORTED_MODULE_5__.drawEnemiesHealthBar)();\r\n\r\n  (0,_enemys_drawEnemies__WEBPACK_IMPORTED_MODULE_5__.checkWave)();\r\n\r\n  if (stop) cancelAnimationFrame(animationId);\r\n}\r\nrender();\r\n\n\n//# sourceURL=webpack://cursach/./src/core/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TowerTile)\n/* harmony export */ });\n/* harmony import */ var _tile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile.js */ \"./src/core/map/Tiles/tile.js\");\n\r\n\r\nclass TowerTile extends _tile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(x, y, type = 'towerTile') {\r\n    super(x, y, type);\r\n    this.buildUp = false;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://cursach/./src/core/map/Tiles/towerTile.js?");

/***/ }),

/***/ "./src/core/map/mapDrawing.js":
/*!************************************!*\
  !*** ./src/core/map/mapDrawing.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ShowPlacementMode\": () => (/* binding */ ShowPlacementMode),\n/* harmony export */   \"drawMap\": () => (/* binding */ drawMap),\n/* harmony export */   \"highlightCells\": () => (/* binding */ highlightCells),\n/* harmony export */   \"map\": () => (/* binding */ map)\n/* harmony export */ });\n/* harmony import */ var _pathGeneration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pathGeneration.js */ \"./src/core/map/pathGeneration.js\");\n/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.js */ \"./src/core/map/settings.js\");\n/* harmony import */ var _passiveZoneGeneration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./passiveZoneGeneration */ \"./src/core/map/passiveZoneGeneration.js\");\n/* harmony import */ var _towerPlacementGeneration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./towerPlacementGeneration */ \"./src/core/map/towerPlacementGeneration.js\");\n/* harmony import */ var _events_placementMode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events/placementMode */ \"./src/core/events/placementMode.js\");\n/* harmony import */ var _png_Test_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./png/Test.png */ \"./src/core/map/png/Test.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst canvas = document.getElementById('gameCanvas');\r\nconst ctx = canvas.getContext('2d');\r\nconst map = new Image();\r\nconst image = new Image();\r\nimage.src = _png_Test_png__WEBPACK_IMPORTED_MODULE_5__;\r\n\r\nconst IMAGE_TAIL_SIZE = 16;\r\n\r\nfor (const field of _pathGeneration_js__WEBPACK_IMPORTED_MODULE_0__.directedPath) {\r\n  ctx.fillStyle = '#4f371d';\r\n  ctx.fillRect(field.x, field.y, _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE, _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE);\r\n}\r\nfunction drawPath(path) {\r\n  for (const pathField of path) {\r\n    if (pathField.direction === 'left' || pathField.direction === 'right') {\r\n      drawField(pathField, 208, 32);\r\n    }\r\n\r\n    if (pathField.direction === 'top' || pathField.direction === 'down') {\r\n      drawField(pathField, 192, 32);\r\n    }\r\n\r\n    if (pathField.direction === 'right-down' || pathField.direction === 'top-left') {\r\n      drawField(pathField, 208, 0);\r\n    }\r\n\r\n    if (pathField.direction === 'right-top' || pathField.direction === 'down-left') {\r\n      drawField(pathField, 208, 16);\r\n    }\r\n\r\n    if (pathField.direction === 'top-right' || pathField.direction === 'left-down') {\r\n      drawField(pathField, 192, 0);\r\n    }\r\n\r\n    if (pathField.direction === 'left-top' || pathField.direction === 'down-right') {\r\n      drawField(pathField, 192, 16);\r\n    }\r\n  }\r\n}\r\n\r\nfunction drawPassiveZone(passiveZone) {\r\n  for (const passiveField of passiveZone) {\r\n    drawField(passiveField, 16, 128);\r\n  }\r\n}\r\n\r\nfunction drawTowerPlacement(towerPlacement) {\r\n  for (const towerField of towerPlacement) {\r\n    drawField(towerField, 16, 128);\r\n  }\r\n}\r\n\r\nfunction drawDecorations(passiveZone) {\r\n  const decorativeZone = passiveZone.slice();\r\n  const fieldValue = passiveZone.length;\r\n  const k = 0.1;\r\n  const decorationsValue = Math.round(fieldValue * k);\r\n  const decVariants = 3;\r\n\r\n  for (let i = 0; i < decorationsValue; i++) {\r\n    const currentField = getRandomField(decorativeZone);\r\n    const variant = getRandomDecoration(decVariants);\r\n    if (variant === 1) drawField(currentField, 112, 0);\r\n    if (variant === 2) drawField(currentField, 112, 16);\r\n    if (variant === 3) drawField(currentField, 112, 32);\r\n  }\r\n}\r\n\r\nfunction getRandomDecoration(variantsNum) {\r\n  return Math.round(Math.random() * variantsNum) + 1;\r\n}\r\n\r\nfunction getRandomField(passiveZone) {\r\n  let fieldValue = passiveZone.length;\r\n  const fieldIndex = Math.round(Math.random() * fieldValue++);\r\n  return passiveZone[fieldIndex];\r\n}\r\n\r\nfunction drawField(field, sx, sy) {\r\n  const { TAIL_SIZE } = _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS;\r\n\r\n  ctx.drawImage(\r\n    image,\r\n    sx, sy,\r\n    IMAGE_TAIL_SIZE, IMAGE_TAIL_SIZE,\r\n    field.x, field.y,\r\n    TAIL_SIZE, TAIL_SIZE\r\n  );\r\n}\r\n\r\nfunction drawMap(passiveZone, path, towerPlacement) {\r\n  image.onload = () => {\r\n    drawPassiveZone(passiveZone);\r\n    drawPath(path);\r\n    drawTowerPlacement(towerPlacement);\r\n    drawDecorations(passiveZone);\r\n    map.src = canvas.toDataURL();\r\n  };\r\n}\r\n\r\nfunction drawGrid() {\r\n  for (const field of _passiveZoneGeneration__WEBPACK_IMPORTED_MODULE_2__.passiveZone) {\r\n    ctx.fillStyle = 'black';\r\n    ctx.strokeRect(field.x, field.y, _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE, _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE);\r\n  }\r\n  for (const field of _towerPlacementGeneration__WEBPACK_IMPORTED_MODULE_3__.towerPlacement) {\r\n    ctx.fillStyle = 'black';\r\n    ctx.strokeRect(field.x, field.y, _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE, _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE);\r\n  }\r\n}\r\nfunction markTowerPlacement() {\r\n  for (const field of _towerPlacementGeneration__WEBPACK_IMPORTED_MODULE_3__.towerPlacement) {\r\n    ctx.fillStyle = 'rgba(31,255,219,0.2)';\r\n    ctx.fillRect(field.x, field.y, _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE, _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE);\r\n  }\r\n}\r\nfunction ShowPlacementMode() {\r\n  drawGrid();\r\n  markTowerPlacement();\r\n}\r\n\r\nfunction highlightCells() {\r\n  if (_events_placementMode__WEBPACK_IMPORTED_MODULE_4__.activeTile) {\r\n    ctx.fillStyle = 'rgba(31,255,219,0.2)';\r\n    ctx.fillRect(_events_placementMode__WEBPACK_IMPORTED_MODULE_4__.activeTile.x, _events_placementMode__WEBPACK_IMPORTED_MODULE_4__.activeTile.y, _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE, _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE);\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://cursach/./src/core/map/mapDrawing.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SETTINGS\": () => (/* binding */ SETTINGS)\n/* harmony export */ });\nconst SETTINGS = {\r\n  MAP_WIDTH: 1280,\r\n  MAP_HEIGHT: 768,\r\n  TAIL_SIZE: 64,\r\n  START_X: 0,\r\n  START_Y: 0,\r\n  COLUMNS: 20,\r\n  ROWS: 12\r\n};\r\n\n\n//# sourceURL=webpack://cursach/./src/core/map/settings.js?");

/***/ }),

/***/ "./src/core/map/towerPlacementGeneration.js":
/*!**************************************************!*\
  !*** ./src/core/map/towerPlacementGeneration.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"towerPlacement\": () => (/* binding */ towerPlacement)\n/* harmony export */ });\n/* harmony import */ var _pathGeneration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pathGeneration.js */ \"./src/core/map/pathGeneration.js\");\n/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.js */ \"./src/core/map/settings.js\");\n/* harmony import */ var _Tiles_towerTile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tiles/towerTile.js */ \"./src/core/map/Tiles/towerTile.js\");\n\r\n\r\n\r\n\r\n\r\nfunction towerPlacementGeneration(path) {\r\n  const currentPath = path;\r\n  const towerPlacement = [];\r\n  const d = _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE;\r\n\r\n  for (const pathField of currentPath) {\r\n    const direction = pathField.direction;\r\n\r\n    if (direction === 'right' || direction === 'left') {\r\n      addTowerZoneOverPath(towerPlacement, pathField, d);\r\n      addTowerZoneUnderPath(towerPlacement, pathField, d);\r\n    }\r\n    if (direction === 'down' || direction === 'top') {\r\n      addTowerZoneLeftOfPath(towerPlacement, pathField, d);\r\n      addTowerZoneRightOfPath(towerPlacement, pathField, d);\r\n    }\r\n    if (direction === 'right-down' || direction === 'top-left') {\r\n      addTowerZoneOverPath(towerPlacement, pathField, d);\r\n      addTowerZoneRightOfPath(towerPlacement, pathField, d);\r\n      addTowerZoneOverPath(towerPlacement, pathField, d, d);\r\n      addTowerZoneOverPath(towerPlacement, pathField, d, 2 * d);\r\n    }\r\n    if (direction === 'right-top' || direction === 'down-left') {\r\n      addTowerZoneUnderPath(towerPlacement, pathField, d);\r\n      addTowerZoneRightOfPath(towerPlacement, pathField, d);\r\n      addTowerZoneUnderPath(towerPlacement, pathField, d, d);\r\n      addTowerZoneUnderPath(towerPlacement, pathField, d, 2 * d);\r\n    }\r\n    if (direction === 'top-right' || direction === 'left-down') {\r\n      addTowerZoneOverPath(towerPlacement, pathField, d);\r\n      addTowerZoneLeftOfPath(towerPlacement, pathField, d);\r\n      addTowerZoneOverPath(towerPlacement, pathField, d, -d);\r\n      addTowerZoneOverPath(towerPlacement, pathField, d, -2 * d);\r\n    }\r\n    if (direction === 'left-top' || direction === 'down-right') {\r\n      addTowerZoneUnderPath(towerPlacement, pathField, d);\r\n      addTowerZoneLeftOfPath(towerPlacement, pathField, d);\r\n      addTowerZoneUnderPath(towerPlacement, pathField, d, -d);\r\n      addTowerZoneUnderPath(towerPlacement, pathField, d, -2 * d);\r\n\r\n    }\r\n  }\r\n  return towerPlacement;\r\n}\r\n\r\nfunction addTowerZoneOverPath(towerPlacement, pathField, delta,  offset = null) {\r\n  if (!isTowerZoneExist(pathField.x + offset, pathField.y - delta, towerPlacement)) {\r\n    towerPlacement.push(new _Tiles_towerTile_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](pathField.x + offset, pathField.y - delta));\r\n  }\r\n  if (!isTowerZoneExist(pathField.x + offset, pathField.y - 2 * delta, towerPlacement)) {\r\n    towerPlacement.push(new _Tiles_towerTile_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](pathField.x + offset, pathField.y - 2 * delta));\r\n  }\r\n}\r\n\r\nfunction addTowerZoneUnderPath(towerPlacement, pathField, delta, offset = null) {\r\n  if (!isTowerZoneExist(pathField.x + offset, pathField.y + delta, towerPlacement)) {\r\n    towerPlacement.push(new _Tiles_towerTile_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](pathField.x + offset, pathField.y + delta));\r\n  }\r\n  if (!isTowerZoneExist(pathField.x + offset, pathField.y + 2 * delta, towerPlacement)) {\r\n    towerPlacement.push(new _Tiles_towerTile_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](pathField.x + offset, pathField.y + 2 * delta));\r\n  }\r\n}\r\n\r\nfunction addTowerZoneLeftOfPath(towerPlacement, pathField, delta) {\r\n  if (!isTowerZoneExist(pathField.x - delta, pathField.y, towerPlacement)) {\r\n    towerPlacement.push(new _Tiles_towerTile_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](pathField.x - delta, pathField.y));\r\n  }\r\n  if (!isTowerZoneExist(pathField.x - 2 * delta, pathField.y, towerPlacement)) {\r\n    towerPlacement.push(new _Tiles_towerTile_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](pathField.x - 2 * delta, pathField.y));\r\n  }\r\n}\r\n\r\nfunction addTowerZoneRightOfPath(towerPlacement, pathField, delta) {\r\n  if (!isTowerZoneExist(pathField.x + delta, pathField.y, towerPlacement)) {\r\n    towerPlacement.push(new _Tiles_towerTile_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](pathField.x + delta, pathField.y));\r\n  }\r\n  if (!isTowerZoneExist(pathField.x + 2 * delta, pathField.y, towerPlacement)) {\r\n    towerPlacement.push(new _Tiles_towerTile_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](pathField.x + 2 * delta, pathField.y));\r\n  }\r\n}\r\n\r\nfunction isTowerZoneExist(x, y, towerPlacement) {\r\n  for (const towerField of towerPlacement) {\r\n    if (towerField.x === x && towerField.y === y) {\r\n      return true;\r\n    }\r\n  }\r\n}\r\n\r\nfunction removeExtraZone(towerPlacement, path) {\r\n  let filteredTowerPlacement = removeAbroadZone(towerPlacement);\r\n  filteredTowerPlacement = removeOverlay(filteredTowerPlacement, path);\r\n  return filteredTowerPlacement;\r\n}\r\nfunction removeAbroadZone(towerPlacement) {\r\n  return towerPlacement.filter((towerField) =>\r\n    towerField.x >= _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.START_X &&\r\n    towerField.y >= _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.START_Y &&\r\n    towerField.y < _settings_js__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.MAP_HEIGHT\r\n  );\r\n}\r\nfunction removeOverlay(towerPlacement, path) {\r\n  return towerPlacement.filter((towerField) =>\r\n    !path.some((pathField) => pathField.x === towerField.x &&\r\n    pathField.y === towerField.y)\r\n  );\r\n}\r\n\r\nlet towerPlacement = towerPlacementGeneration(_pathGeneration_js__WEBPACK_IMPORTED_MODULE_0__.directedPath);\r\ntowerPlacement = removeExtraZone(towerPlacement, _pathGeneration_js__WEBPACK_IMPORTED_MODULE_0__.directedPath);\r\n\r\n\n\n//# sourceURL=webpack://cursach/./src/core/map/towerPlacementGeneration.js?");

/***/ }),

/***/ "./src/core/projectiles/classProjectile.js":
/*!*************************************************!*\
  !*** ./src/core/projectiles/classProjectile.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Projectile)\n/* harmony export */ });\nclass Projectile {\r\n  constructor(x, y, ctx, target, speed = 10) {\r\n    this.x = x;\r\n    this.y = y;\r\n    this.ctx = ctx;\r\n    this.target = target;\r\n    this.speed = speed;\r\n  }\r\n\r\n  draw() {\r\n    this.ctx.beginPath();\r\n    this.ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);\r\n    this.ctx.fillStyle = 'red';\r\n    this.ctx.fill();\r\n  }\r\n\r\n  update() {\r\n    this.draw();\r\n\r\n    const directionAngle = Math.atan2(\r\n      this.target.y - this.y,\r\n      this.target.x - this.x\r\n    );\r\n\r\n    const xVelocity = Math.cos(directionAngle) * this.speed;\r\n    const yVelocity = Math.sin(directionAngle) * this.speed;\r\n\r\n    this.x += xVelocity;\r\n    this.y += yVelocity;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://cursach/./src/core/projectiles/classProjectile.js?");

/***/ }),

/***/ "./src/core/towers/classTower.js":
/*!***************************************!*\
  !*** ./src/core/towers/classTower.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tower)\n/* harmony export */ });\n/* harmony import */ var _projectiles_classProjectile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projectiles/classProjectile */ \"./src/core/projectiles/classProjectile.js\");\n/* harmony import */ var _map_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map/settings */ \"./src/core/map/settings.js\");\n\r\n\r\nclass Tower {\r\n  constructor(x, y, ctx, towerSet, target = null) {\r\n    this.x = x;\r\n    this.y = y;\r\n    this.target = target;\r\n    this.ctx = ctx;\r\n    this.image = new Image();\r\n    this.image.src = towerSet.imageSrc;\r\n    this.frames = 0;\r\n    this.weaponPos = {\r\n      x: this.x + _map_settings__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE / 2,\r\n      y: this.y - 10,\r\n    };\r\n    this.projectiles = [];\r\n    this.towerSet = {\r\n      damage: towerSet.damage,\r\n      attackSpeed: towerSet.attackSpeed,\r\n      range: towerSet.range,\r\n      spriteY: towerSet.spriteY,\r\n      spriteWidth: towerSet.spriteWidth,\r\n      spriteHeight: towerSet.spriteHeight\r\n    };\r\n  }\r\n\r\n  showRange() {\r\n    this.ctx.beginPath();\r\n    this.ctx.arc(this.weaponPos.x, this.weaponPos.y, this.towerSet.range, 0, Math.PI * 2);\r\n    this.ctx.fillStyle = 'rgba(0,255,38,0.05)';\r\n    this.ctx.fill();\r\n    this.ctx.fillStyle = 'rgba(94,94,94,0.08)';\r\n    this.ctx.stroke();\r\n  }\r\n\r\n  draw() {\r\n    const correctY = this.y - 64;\r\n\r\n    this.ctx.drawImage(\r\n      this.image,\r\n      0,\r\n      this.towerSet.spriteY,\r\n      this.towerSet.spriteWidth,\r\n      this.towerSet.spriteHeight,\r\n      this.x,\r\n      correctY,\r\n      this.towerSet.spriteWidth,\r\n      this.towerSet.spriteHeight\r\n    );\r\n  }\r\n\r\n  update() {\r\n    this.draw();\r\n    if (this.frames % this.towerSet.attackSpeed === 0 && this.target) {\r\n      const projectile = new _projectiles_classProjectile__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n        this.weaponPos.x,\r\n        this.weaponPos.y,\r\n        this.ctx,\r\n        this.target\r\n      );\r\n\r\n      this.projectiles.push(projectile);\r\n    }\r\n\r\n    this.frames++;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://cursach/./src/core/towers/classTower.js?");

/***/ }),

/***/ "./src/core/towers/drawTower.js":
/*!**************************************!*\
  !*** ./src/core/towers/drawTower.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildTower\": () => (/* binding */ buildTower),\n/* harmony export */   \"drawTowersActivity\": () => (/* binding */ drawTowersActivity),\n/* harmony export */   \"drawTowersRange\": () => (/* binding */ drawTowersRange),\n/* harmony export */   \"towers\": () => (/* binding */ towers)\n/* harmony export */ });\n/* harmony import */ var _classTower__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classTower */ \"./src/core/towers/classTower.js\");\n/* harmony import */ var _map_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map/settings */ \"./src/core/map/settings.js\");\n/* harmony import */ var _enemys_drawEnemies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enemys/drawEnemies */ \"./src/core/enemys/drawEnemies.js\");\n\n\n\n\nconst canvas = document.getElementById('gameCanvas');\nconst ctx = canvas.getContext('2d');\nconst towers = [];\n\nfor (let i = 0; i < _map_settings__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.ROWS; i++) {\n  towers[i] = [];\n}\nfunction drawTowersActivity() {\n  for (const row of towers) {\n    for (const tower of row) {\n      tower.update();\n\n      tower.target = getTowerTarget(tower, _enemys_drawEnemies__WEBPACK_IMPORTED_MODULE_2__.enemies);\n      shoot(tower, _enemys_drawEnemies__WEBPACK_IMPORTED_MODULE_2__.enemies);\n    }\n  }\n}\n\nfunction drawTowersRange() {\n  for (const row of towers) {\n    for (const tower of row) {\n      tower.showRange();\n    }\n  }\n}\n\nfunction buildTower(type, towerSets, activeTile) {\n  const row = activeTile.y / _map_settings__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE;\n  const towerSet = towerSets[type];\n  const tower = new _classTower__WEBPACK_IMPORTED_MODULE_0__[\"default\"](activeTile.x, activeTile.y, ctx, towerSet);\n\n  towers[row].push(tower);\n}\n\nfunction findDistance(x1, y1, x2, y2) {\n  const xDifference = x1 - x2;\n  const yDifference = y1 - y2;\n\n  return Math.hypot(xDifference, yDifference);\n}\n\nfunction getTowerTarget(tower, enemies) {\n  const possibleTargets = enemies.filter((enemy) => {\n    const distance = findDistance(\n      enemy.x,\n      enemy.y,\n      tower.weaponPos.x,\n      tower.weaponPos.y\n    );\n\n    return distance < tower.towerSet.range;\n  });\n\n  return possibleTargets[0];\n}\n\nfunction shoot(tower, enemies) {\n  const projectileNum = tower.projectiles.length;\n\n  for (let i = projectileNum - 1; i >= 0; i--) {\n    const projectile = tower.projectiles[i];\n    projectile.update();\n\n    const distance = findDistance(\n      projectile.target.x,\n      projectile.target.y,\n      projectile.x,\n      projectile.y\n    );\n\n    if (distance < projectile.target.enemySet.spriteWidth / 4) {\n      projectile.target.currentHealt -= tower.towerSet.damage;\n      destroyEnemy(projectile.target, enemies);\n      tower.projectiles.pop();\n    }\n  }\n}\n\nfunction destroyEnemy(target, enemies) {\n  if (target.currentHealt <= 0) {\n    const enemyIndex = enemies.findIndex((enemy) => enemy === target);\n\n    if (enemyIndex > -1) enemies.splice(enemyIndex, 1);\n  }\n}\n\n\n//# sourceURL=webpack://cursach/./src/core/towers/drawTower.js?");

/***/ }),

/***/ "./src/core/towers/towerSets.js":
/*!**************************************!*\
  !*** ./src/core/towers/towerSets.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sprites_towers_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprites/towers.png */ \"./src/core/towers/sprites/towers.png\");\n\r\nclass TowerSets {\r\n  constructor(\r\n    damage,\r\n    attackSpeed = 50,\r\n    range = 150,\r\n    spriteY,\r\n    spriteWidth = 64,\r\n    spriteHeight = 128,\r\n    imageSrc = _sprites_towers_png__WEBPACK_IMPORTED_MODULE_0__\r\n  ) {\r\n    this.damage = damage;\r\n    this.range = range;\r\n    this.attackSpeed = attackSpeed;\r\n    this.imageSrc = imageSrc;\r\n    this.spriteY = spriteY;\r\n    this.spriteWidth = spriteWidth;\r\n    this.spriteHeight = spriteHeight;\r\n  }\r\n}\r\n\r\nconst TOWER_ONE = new TowerSets(10, 25, 200, 0);\r\nconst TOWER_TWO = new TowerSets(15, 40, 150, 128);\r\nconst TOWER_TREE = new TowerSets(17, 55, 175, 256);\r\nconst TOWER_FOUR = new TowerSets(12, 35, 125, 384);\r\nconst TOWER_FIVE = new TowerSets(32, 100, 250, 512);\r\nconst TOWER_SIX = new TowerSets(9, 22, 175, 640);\r\n\r\nconst TOWER_SETS = [TOWER_ONE, TOWER_TWO, TOWER_TREE, TOWER_FOUR, TOWER_FIVE, TOWER_SIX];\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TOWER_SETS);\r\n\r\n\n\n//# sourceURL=webpack://cursach/./src/core/towers/towerSets.js?");

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