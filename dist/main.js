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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Enemy)\n/* harmony export */ });\nclass Enemy {\n  constructor(x = -200, y = 0, speed = 1, ctx, waypoints, enemySet) {\n    this.x = x;\n    this.y = y;\n    this.speed = speed;\n    this.currentHealt = enemySet.maxHealth;\n    this.waypoints = waypoints;\n    this.weypointIndex = 0;\n    this.offset = 0;\n    this.ctx = ctx;\n    this.image = new Image();\n    this.image.src = enemySet.imageSrc;\n    this.currentFrame = 0;\n    this.enemySet = {\n      maxHealth: enemySet.maxHealth,\n      award: enemySet.award,\n      imageSrc: enemySet.imageSrc,\n      frameStartY: enemySet.frameStartY,\n      frames: enemySet.frames,\n      spriteWidth: enemySet.spriteWidth,\n      spriteHeight: enemySet.spriteHeight,\n      hold: 5,\n      holdCounter: 0,\n    };\n  }\n\n  draw() {\n    const frameStartX = this.enemySet.spriteWidth * this.currentFrame;\n    const correctX = this.x - this.enemySet.spriteWidth / 2;\n    const correctY = this.y - this.enemySet.spriteHeight / 2;\n\n    this.ctx.drawImage(\n      this.image,\n      frameStartX,\n      this.enemySet.frameStartY,\n      this.enemySet.spriteWidth,\n      this.enemySet.spriteHeight,\n      correctX,\n      correctY,\n      this.enemySet.spriteWidth,\n      this.enemySet.spriteHeight\n    );\n\n    this.enemySet.holdCounter++;\n    if (this.enemySet.holdCounter % this.enemySet.hold === 0) {\n      this.currentFrame++;\n    }\n    if (this.currentFrame === this.enemySet.frames - 1) {\n      this.currentFrame = 0;\n    }\n  }\n\n  drawHealthBar() {\n    const referenceX = this.x - this.enemySet.spriteWidth / 2;\n    const referenceY = this.y - this.enemySet.spriteHeight / 2;\n    const endBarX = referenceX + this.enemySet.spriteWidth;\n    const HPCof = this.currentHealt / this.enemySet.maxHealth;\n    const HPBarX = referenceX + this.enemySet.spriteWidth * HPCof;\n\n    this.createBeveledRectangleContour(referenceX, referenceY, endBarX);\n    this.ctx.fillStyle = 'rgb(70,91,196)';\n    this.ctx.fill();\n    this.ctx.stroke();\n\n    this.createBeveledRectangleContour(referenceX, referenceY, HPBarX);\n    this.ctx.fillStyle = 'rgba(53,211,30,0.82)';\n    this.ctx.fill();\n  }\n  update() {\n    this.draw();\n\n    const waypoint = this.waypoints[this.weypointIndex];\n    const nextWaypoint = this.waypoints[this.weypointIndex + 1];\n\n    if (this.weypointIndex === 0) {\n      this.offset = Math.floor(Math.random() * 31) + 16;\n\n      this.x += waypoint.x;\n      this.y = waypoint.y + this.offset;\n\n      waypoint.y += this.offset;\n      waypoint.x += this.offset;\n\n      nextWaypoint.x += this.offset;\n      nextWaypoint.y += this.offset;\n      this.weypointIndex += 1;\n    } else {\n      const xDistance = waypoint.x - this.x;\n      const yDistance = waypoint.y - this.y;\n\n      const directionAngle = Math.atan2(yDistance, xDistance);\n      const xVelocity = Math.cos(directionAngle) * this.speed;\n      const yVelocity = Math.sin(directionAngle) * this.speed;\n\n      this.x += xVelocity;\n      this.y += yVelocity;\n\n      const xAbsoluteDiff = Math.abs(Math.round(this.x) - waypoint.x);\n      const yAbsoluteDiff = Math.abs(Math.round(this.y) - waypoint.y);\n\n      if (xAbsoluteDiff < Math.abs(xVelocity) &&\n        yAbsoluteDiff < Math.abs(yVelocity) &&\n        this.weypointIndex < this.waypoints.length - 1) {\n\n        nextWaypoint.x += this.offset;\n        nextWaypoint.y += this.offset;\n        this.weypointIndex += 1;\n      }\n    }\n  }\n\n  createBeveledRectangleContour(x, y, endX) {\n    this.ctx.beginPath();\n    this.ctx.moveTo(x, y + 2);\n    this.ctx.quadraticCurveTo(x, y, x + 2, y);\n    this.ctx.lineTo(endX - 2, y);\n    this.ctx.quadraticCurveTo(endX, y, endX, y + 2);\n    this.ctx.lineTo(endX, y + 6);\n    this.ctx.quadraticCurveTo(endX, y + 8, endX - 2, y + 8);\n    this.ctx.lineTo(x + 2, y + 8);\n    this.ctx.quadraticCurveTo(x, y + 8, x, y + 6);\n    this.ctx.lineTo(x, y + 2);\n  }\n}\n\n\n//# sourceURL=webpack://cursach/./src/core/enemys/classEnemy.js?");

/***/ }),

/***/ "./src/core/enemys/drawEnemies.js":
/*!****************************************!*\
  !*** ./src/core/enemys/drawEnemies.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkWave\": () => (/* binding */ checkWave),\n/* harmony export */   \"drawEnemies\": () => (/* binding */ drawEnemies),\n/* harmony export */   \"drawEnemiesHealthBar\": () => (/* binding */ drawEnemiesHealthBar),\n/* harmony export */   \"enemies\": () => (/* binding */ enemies)\n/* harmony export */ });\n/* harmony import */ var _classEnemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classEnemy */ \"./src/core/enemys/classEnemy.js\");\n/* harmony import */ var _map_pathGeneration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map/pathGeneration */ \"./src/core/map/pathGeneration.js\");\n/* harmony import */ var _enemySets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enemySets */ \"./src/core/enemys/enemySets.js\");\n/* harmony import */ var _map_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../map/settings */ \"./src/core/map/settings.js\");\n/* harmony import */ var _stats_stats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stats/stats */ \"./src/core/stats/stats.js\");\n\n\n\n\n\n\nconst canvas = document.getElementById('gameCanvas');\nconst ctx = canvas.getContext('2d');\n\nconst enemies = [];\nlet pause = false;\nconst waypoints = getWaypoints(_map_pathGeneration__WEBPACK_IMPORTED_MODULE_1__.directedPath);\n\nfunction drawEnemies() {\n  const enemiesNumber = enemies.length;\n  for (let i = enemiesNumber - 1; i >= 0; i--) {\n    enemies[i].update();\n\n    if (enemies[i].x > _map_settings__WEBPACK_IMPORTED_MODULE_3__.SETTINGS.MAP_WIDTH) {\n      enemies.splice(enemies[i], 1);\n      _stats_stats__WEBPACK_IMPORTED_MODULE_4__.resources.hearts--;\n    }\n  }\n}\n\nfunction checkWave() {\n  const wavePassed = isAllEnemiesDestroyed(enemies);\n  if (wavePassed) startNewWave();\n}\n\nfunction drawEnemiesHealthBar() {\n  const enemiesNumber = enemies.length;\n  for (let i = enemiesNumber - 1; i >= 0; i--) {\n    if (enemies[i].currentHealt < enemies[i].enemySet.maxHealth) {\n      enemies[i].drawHealthBar();\n    }\n  }\n}\n\nfunction spawnEnemies(amount, offset, wave) {\n  for (let i = 1; i <= amount; i++) {\n    const enemy = new _classEnemy__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n      -offset * i,\n      0,\n      2,\n      ctx,\n      copyArray(waypoints),\n      _enemySets__WEBPACK_IMPORTED_MODULE_2__[\"default\"][wave - 1]\n    );\n    enemies.push(enemy);\n  }\n}\n\n\nfunction getWaypoints(path) {\n  const wayPoints = [];\n\n  wayPoints.push(Object.assign({}, path[0]));\n  wayPoints[0].x += -200;\n\n  for (const point of path) {\n    if (point.direction !== 'left' &&\n     point.direction !== 'right' &&\n     point.direction !== 'top' &&\n     point.direction !== 'down') {\n\n      wayPoints.push(Object.assign({}, point));\n    }\n  }\n  wayPoints.push(Object.assign({}, path[path.length - 1]));\n  wayPoints[wayPoints.length - 1].x += 200;\n\n  return wayPoints;\n}\n\nfunction copyArray(arr) {\n  return JSON.parse(JSON.stringify(arr));\n}\n\nfunction isAllEnemiesDestroyed(enemies) {\n  const aliveEnemies = enemies.length;\n  return aliveEnemies === 0;\n}\n\nfunction startNewWave() {\n  if (_stats_stats__WEBPACK_IMPORTED_MODULE_4__.waveInfo.wave !== 1 && _stats_stats__WEBPACK_IMPORTED_MODULE_4__.waveInfo.wave < 6 && pause === false) {\n    pause = true;\n    setTimeout(() => {\n      spawnEnemies(_stats_stats__WEBPACK_IMPORTED_MODULE_4__.waveInfo.startEnemiesAmount, 100, _stats_stats__WEBPACK_IMPORTED_MODULE_4__.waveInfo.wave);\n      pause = false;\n      _stats_stats__WEBPACK_IMPORTED_MODULE_4__.waveInfo.startEnemiesAmount += 2;\n      _stats_stats__WEBPACK_IMPORTED_MODULE_4__.waveInfo.wave++;\n    }, 5000);\n  } else if (_stats_stats__WEBPACK_IMPORTED_MODULE_4__.waveInfo.wave === 1) {\n    spawnEnemies(_stats_stats__WEBPACK_IMPORTED_MODULE_4__.waveInfo.startEnemiesAmount, 100, _stats_stats__WEBPACK_IMPORTED_MODULE_4__.waveInfo.wave);\n    _stats_stats__WEBPACK_IMPORTED_MODULE_4__.waveInfo.startEnemiesAmount += 2;\n    _stats_stats__WEBPACK_IMPORTED_MODULE_4__.waveInfo.wave++;\n  }\n}\n\n\n//# sourceURL=webpack://cursach/./src/core/enemys/drawEnemies.js?");

/***/ }),

/***/ "./src/core/enemys/enemySets.js":
/*!**************************************!*\
  !*** ./src/core/enemys/enemySets.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sprites_walk_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprites/walk.png */ \"./src/core/enemys/sprites/walk.png\");\n\n\nclass EnemySet  {\n  constructor(\n    maxHealth,\n    award,\n    frameStartY,\n    frames,\n    spriteWidth,\n    spriteHeight,\n    imageSrc = _sprites_walk_png__WEBPACK_IMPORTED_MODULE_0__\n  ) {\n    this.maxHealth = maxHealth;\n    this.award = award;\n    this.frameStartY = frameStartY;\n    this.frames = frames;\n    this.spriteWidth = spriteWidth;\n    this.spriteHeight = spriteHeight;\n    this.imageSrc = imageSrc;\n  }\n}\n\nconst SLIME = new EnemySet(100, 40, 0, 8, 32, 32);\nconst WORM = new EnemySet(250, 60, 96, 9, 64, 64);\nconst SKELETON = new EnemySet(300, 100, 32, 12, 64, 64);\nconst NECROMANCER = new EnemySet(450, 125, 160, 8, 64, 64);\nconst DEATH = new EnemySet(500, 150, 224, 7, 64, 64);\n\nconst ENEMIES_SETS = [SLIME, WORM, SKELETON, NECROMANCER, DEATH];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ENEMIES_SETS);\n\n\n//# sourceURL=webpack://cursach/./src/core/enemys/enemySets.js?");

/***/ }),

/***/ "./src/core/events/placementMode.js":
/*!******************************************!*\
  !*** ./src/core/events/placementMode.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"activeTile\": () => (/* binding */ activeTile),\n/* harmony export */   \"cursor\": () => (/* binding */ cursor)\n/* harmony export */ });\n/* harmony import */ var _map_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map/settings */ \"./src/core/map/settings.js\");\n/* harmony import */ var _map_towerPlacementGeneration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map/towerPlacementGeneration */ \"./src/core/map/towerPlacementGeneration.js\");\n/* harmony import */ var _towerSelectButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./towerSelectButton */ \"./src/core/events/towerSelectButton.js\");\n/* harmony import */ var _towers_drawTower__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../towers/drawTower */ \"./src/core/towers/drawTower.js\");\n/* harmony import */ var _towers_towerSets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../towers/towerSets */ \"./src/core/towers/towerSets.js\");\n/* harmony import */ var _towers_weaponSets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../towers/weaponSets */ \"./src/core/towers/weaponSets.js\");\n\n\n\n\n\n\n\nconst canvas = document.getElementById('gameCanvas');\n\nconst cursor = {\n  x: 0,\n  y: 0\n};\n\nlet activeTile = null;\n\nwindow.addEventListener('mousemove', (event) => {\n  const canvasRect = canvas.getBoundingClientRect();\n  const canvasX = canvasRect.left;\n  const canvasY = canvasRect.top;\n\n  const xCof = _map_settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.MAP_WIDTH / canvas.offsetWidth;\n  const yCof = _map_settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.MAP_HEIGHT / canvas.offsetHeight;\n\n  cursor.x = xCof * (event.clientX - canvasX);\n  cursor.y = yCof * (event.clientY - canvasY);\n\n  for (let i = 0; i < _map_towerPlacementGeneration__WEBPACK_IMPORTED_MODULE_1__.towerPlacement.length; i++) {\n    const tile = _map_towerPlacementGeneration__WEBPACK_IMPORTED_MODULE_1__.towerPlacement[i];\n    if (cursor.x > tile.x &&\n      cursor.x < tile.x + _map_settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.TAIL_SIZE &&\n      cursor.y > tile.y &&\n      cursor.y < tile.y + _map_settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.TAIL_SIZE) {\n      activeTile = tile;\n      break;\n    } else {\n      activeTile = null;\n    }\n  }\n});\n\nwindow.addEventListener('click', () => {\n  if (_towerSelectButton__WEBPACK_IMPORTED_MODULE_2__.placementMode &&\n    activeTile !== null &&\n    activeTile.buildUp === false) {\n    const isTowerBuilt = (0,_towers_drawTower__WEBPACK_IMPORTED_MODULE_3__.buildTower)(_towerSelectButton__WEBPACK_IMPORTED_MODULE_2__.selectedTower, _towers_towerSets__WEBPACK_IMPORTED_MODULE_4__[\"default\"], activeTile, _towers_weaponSets__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\n    if (isTowerBuilt) activeTile.buildUp = true;\n  }\n});\n\n\n//# sourceURL=webpack://cursach/./src/core/events/placementMode.js?");

/***/ }),

/***/ "./src/core/events/showStats.js":
/*!**************************************!*\
  !*** ./src/core/events/showStats.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showStats\": () => (/* binding */ showStats)\n/* harmony export */ });\n/* harmony import */ var _stats_stats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stats/stats */ \"./src/core/stats/stats.js\");\n\n\nconst wave = document.querySelector('#wave');\nconst heart = document.querySelector('#heart');\nconst hrn = document.querySelector('#money').firstElementChild;\nconst cop = document.querySelector('#money').lastElementChild;\n\nfunction showStats() {\n  wave.innerHTML = `${_stats_stats__WEBPACK_IMPORTED_MODULE_0__.waveInfo.wave - 1}`;\n  heart.innerHTML = `${_stats_stats__WEBPACK_IMPORTED_MODULE_0__.resources.hearts}`;\n  hrn.innerHTML = `${Math.floor(_stats_stats__WEBPACK_IMPORTED_MODULE_0__.resources.hryvnias / 100)}`;\n  cop.innerHTML = `${_stats_stats__WEBPACK_IMPORTED_MODULE_0__.resources.hryvnias % 100}`;\n}\n\n\n//# sourceURL=webpack://cursach/./src/core/events/showStats.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map_pathGeneration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map/pathGeneration.js */ \"./src/core/map/pathGeneration.js\");\n/* harmony import */ var _map_settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map/settings.js */ \"./src/core/map/settings.js\");\n/* harmony import */ var _map_towerPlacementGeneration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map/towerPlacementGeneration.js */ \"./src/core/map/towerPlacementGeneration.js\");\n/* harmony import */ var _map_passiveZoneGeneration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/passiveZoneGeneration.js */ \"./src/core/map/passiveZoneGeneration.js\");\n/* harmony import */ var _map_mapDrawing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map/mapDrawing */ \"./src/core/map/mapDrawing.js\");\n/* harmony import */ var _enemys_drawEnemies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enemys/drawEnemies */ \"./src/core/enemys/drawEnemies.js\");\n/* harmony import */ var _events_towerSelectButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events/towerSelectButton */ \"./src/core/events/towerSelectButton.js\");\n/* harmony import */ var _towers_drawTower__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./towers/drawTower */ \"./src/core/towers/drawTower.js\");\n/* harmony import */ var _stats_stats__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stats/stats */ \"./src/core/stats/stats.js\");\n/* harmony import */ var _events_showStats__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./events/showStats */ \"./src/core/events/showStats.js\");\n/* harmony import */ var _events_startGame__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./events/startGame */ \"./src/core/events/startGame.js\");\n/* harmony import */ var _events_placementMode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./events/placementMode */ \"./src/core/events/placementMode.js\");\n/* harmony import */ var _enemys_classEnemy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./enemys/classEnemy */ \"./src/core/enemys/classEnemy.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst canvas = document.getElementById('gameCanvas');\nconst ctx = canvas.getContext('2d');\n// let stop = false;\n// setTimeout(() => stop = true,   1000000);\n\n(0,_map_mapDrawing__WEBPACK_IMPORTED_MODULE_4__.drawMap)(_map_passiveZoneGeneration_js__WEBPACK_IMPORTED_MODULE_3__.passiveZone, _map_pathGeneration_js__WEBPACK_IMPORTED_MODULE_0__.directedPath, _map_towerPlacementGeneration_js__WEBPACK_IMPORTED_MODULE_2__.towerPlacement);\nctx.drawImage(_map_mapDrawing__WEBPACK_IMPORTED_MODULE_4__.map, 0, 0);\n\nfunction render() {\n  const animationId = requestAnimationFrame(render);\n\n  ctx.drawImage(_map_mapDrawing__WEBPACK_IMPORTED_MODULE_4__.map, 0, 0);\n  if (_events_towerSelectButton__WEBPACK_IMPORTED_MODULE_6__.placementMode) {\n    (0,_map_mapDrawing__WEBPACK_IMPORTED_MODULE_4__.ShowPlacementMode)();\n    (0,_map_mapDrawing__WEBPACK_IMPORTED_MODULE_4__.highlightCells)();\n    (0,_towers_drawTower__WEBPACK_IMPORTED_MODULE_7__.drawTowersRange)();\n  }\n\n  (0,_enemys_drawEnemies__WEBPACK_IMPORTED_MODULE_5__.drawEnemies)();\n  (0,_towers_drawTower__WEBPACK_IMPORTED_MODULE_7__.drawTowersActivity)();\n  (0,_enemys_drawEnemies__WEBPACK_IMPORTED_MODULE_5__.drawEnemiesHealthBar)();\n  (0,_events_showStats__WEBPACK_IMPORTED_MODULE_9__.showStats)();\n\n  (0,_enemys_drawEnemies__WEBPACK_IMPORTED_MODULE_5__.checkWave)();\n\n  if (_stats_stats__WEBPACK_IMPORTED_MODULE_8__.resources.hearts === 0) cancelAnimationFrame(animationId);\n}\n\nrender();\n\n\n//# sourceURL=webpack://cursach/./src/core/index.js?");

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

/***/ "./src/core/stats/stats.js":
/*!*********************************!*\
  !*** ./src/core/stats/stats.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resources\": () => (/* binding */ resources),\n/* harmony export */   \"waveInfo\": () => (/* binding */ waveInfo)\n/* harmony export */ });\nconst resources = {\n  hearts: 10,\n  hryvnias: 2350,\n};\n\nconst waveInfo = {\n  wave: 1,\n  startEnemiesAmount: 5,\n};\n\n\n\n//# sourceURL=webpack://cursach/./src/core/stats/stats.js?");

/***/ }),

/***/ "./src/core/towers/classTower.js":
/*!***************************************!*\
  !*** ./src/core/towers/classTower.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tower)\n/* harmony export */ });\n/* harmony import */ var _projectiles_classProjectile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projectiles/classProjectile */ \"./src/core/projectiles/classProjectile.js\");\n/* harmony import */ var _map_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map/settings */ \"./src/core/map/settings.js\");\n\n\n\nclass Tower {\n  constructor(x, y, ctx, towerSet, weaponSet, target = null) {\n    this.x = x;\n    this.y = y;\n    this.target = target;\n    this.ctx = ctx;\n    this.towerImage = new Image();\n    this.towerImage.src = towerSet.imageSrc;\n    this.weaponImage = new Image();\n    this.weaponImage.src = weaponSet.imageSrc;\n    this.currentWeaponFrame = 0;\n    this.frames = 0;\n    this.weaponPos = {\n      x: this.x + _map_settings__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE / 2,\n      y: this.y - 10,\n    };\n    this.projectiles = [];\n    this.towerSet = {\n      damage: towerSet.damage,\n      attackSpeed: towerSet.attackSpeed,\n      range: towerSet.range,\n      spriteY: towerSet.spriteY,\n      const: towerSet.cost,\n      spriteWidth: towerSet.spriteWidth,\n      spriteHeight: towerSet.spriteHeight\n    };\n    this.weaponSet = {\n      frameStartX: weaponSet.frameStartX,\n      frameStartY: weaponSet.frameStartY,\n      frames: weaponSet.frames,\n      spriteSize: weaponSet.spriteSize,\n      rotates: weaponSet.rotates\n    };\n  }\n\n  showRange() {\n    this.ctx.beginPath();\n    this.ctx.arc(this.weaponPos.x, this.weaponPos.y, this.towerSet.range, 0, Math.PI * 2);\n    this.ctx.fillStyle = 'rgba(0,255,38,0.05)';\n    this.ctx.fill();\n    this.ctx.fillStyle = 'rgba(94,94,94,0.08)';\n    this.ctx.stroke();\n  }\n\n  drawTower() {\n    const correctY = this.y - 64;\n\n    this.ctx.drawImage(\n      this.towerImage,\n      0,\n      this.towerSet.spriteY,\n      this.towerSet.spriteWidth,\n      this.towerSet.spriteHeight,\n      this.x,\n      correctY,\n      this.towerSet.spriteWidth,\n      this.towerSet.spriteHeight\n    );\n  }\n\n  drawWeapon() {\n    const frameStartY =\n      this.weaponSet.frameStartY +\n      this.weaponSet.spriteSize *\n      this.currentWeaponFrame;\n\n    let angle;\n\n    if (this.target && this.weaponSet.rotates) {\n      const xDistance = this.target.x - this.weaponPos.x;\n      const yDistance = this.target.y - this.weaponPos.y;\n      angle = Math.atan2(yDistance, xDistance);\n    } else if (this.target && !this.weaponSet.rotates) {\n      angle = 3 * Math.PI / 2;\n    } else if (!this.target) {\n      angle = 3 * Math.PI / 2;\n      this.currentWeaponFrame = 0;\n    }\n\n    this.ctx.save();\n    this.ctx.translate(this.weaponPos.x, this.weaponPos.y);\n    this.ctx.rotate(angle);\n\n    this.ctx.drawImage(\n      this.weaponImage,\n      this.weaponSet.frameStartX,\n      frameStartY,\n      this.weaponSet.spriteSize,\n      this.weaponSet.spriteSize,\n      -this.weaponSet.spriteSize / 2,\n      -this.weaponSet.spriteSize / 2,\n      this.weaponSet.spriteSize,\n      this.weaponSet.spriteSize\n    );\n\n    this.ctx.restore();\n\n    const restFrames = this.towerSet.attackSpeed / this.weaponSet.frames;\n\n    if (this.frames % restFrames === 0 && this.target) {\n      this.currentWeaponFrame++;\n    }\n    if (this.currentWeaponFrame === this.weaponSet.frames - 1) {\n      this.currentWeaponFrame = 0;\n    }\n  }\n\n  update() {\n    this.drawTower();\n    this.drawWeapon();\n\n    if (this.frames % this.towerSet.attackSpeed === 0 && this.target) {\n      const projectile = new _projectiles_classProjectile__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n        this.weaponPos.x,\n        this.weaponPos.y,\n        this.ctx,\n        this.target\n      );\n\n      this.projectiles.push(projectile);\n    }\n\n    this.frames++;\n  }\n}\n\n\n//# sourceURL=webpack://cursach/./src/core/towers/classTower.js?");

/***/ }),

/***/ "./src/core/towers/drawTower.js":
/*!**************************************!*\
  !*** ./src/core/towers/drawTower.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildTower\": () => (/* binding */ buildTower),\n/* harmony export */   \"drawTowersActivity\": () => (/* binding */ drawTowersActivity),\n/* harmony export */   \"drawTowersRange\": () => (/* binding */ drawTowersRange),\n/* harmony export */   \"towers\": () => (/* binding */ towers)\n/* harmony export */ });\n/* harmony import */ var _classTower__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classTower */ \"./src/core/towers/classTower.js\");\n/* harmony import */ var _map_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map/settings */ \"./src/core/map/settings.js\");\n/* harmony import */ var _enemys_drawEnemies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enemys/drawEnemies */ \"./src/core/enemys/drawEnemies.js\");\n/* harmony import */ var _stats_stats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stats/stats */ \"./src/core/stats/stats.js\");\n\n\n\n\n\nconst canvas = document.getElementById('gameCanvas');\nconst ctx = canvas.getContext('2d');\n\nconst towers = [];\n\nfor (let i = 0; i < _map_settings__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.ROWS; i++) {\n  towers[i] = [];\n}\nfunction drawTowersActivity() {\n  for (const row of towers) {\n    for (const tower of row) {\n      tower.update();\n\n      tower.target = getTowerTarget(tower, _enemys_drawEnemies__WEBPACK_IMPORTED_MODULE_2__.enemies);\n      shoot(tower, _enemys_drawEnemies__WEBPACK_IMPORTED_MODULE_2__.enemies);\n    }\n  }\n}\n\nfunction drawTowersRange() {\n  for (const row of towers) {\n    for (const tower of row) {\n      tower.showRange();\n    }\n  }\n}\n\nfunction buildTower(type, towerSets, activeTile, weaponSets) {\n  const towerSet = towerSets[type];\n  const weaponSet = weaponSets[type];\n\n  if (towerSet.cost < _stats_stats__WEBPACK_IMPORTED_MODULE_3__.resources.hryvnias) {\n    const row = activeTile.y / _map_settings__WEBPACK_IMPORTED_MODULE_1__.SETTINGS.TAIL_SIZE;\n    const tower = new _classTower__WEBPACK_IMPORTED_MODULE_0__[\"default\"](activeTile.x, activeTile.y, ctx, towerSet, weaponSet);\n\n    _stats_stats__WEBPACK_IMPORTED_MODULE_3__.resources.hryvnias -= towerSet.cost;\n\n    towers[row].push(tower);\n\n    return true;\n  }\n\n  return false;\n}\n\nfunction findDistance(x1, y1, x2, y2) {\n  const xDifference = x1 - x2;\n  const yDifference = y1 - y2;\n\n  return Math.hypot(xDifference, yDifference);\n}\n\nfunction getTowerTarget(tower, enemies) {\n  const possibleTargets = enemies.filter((enemy) => {\n    const distance = findDistance(\n      enemy.x,\n      enemy.y,\n      tower.weaponPos.x,\n      tower.weaponPos.y\n    );\n\n    return distance < tower.towerSet.range;\n  });\n\n  return possibleTargets[0];\n}\n\nfunction shoot(tower, enemies) {\n  const projectileNum = tower.projectiles.length;\n\n  for (let i = projectileNum - 1; i >= 0; i--) {\n    const projectile = tower.projectiles[i];\n    projectile.update();\n\n    const distance = findDistance(\n      projectile.target.x,\n      projectile.target.y,\n      projectile.x,\n      projectile.y\n    );\n\n    if (distance < projectile.target.enemySet.spriteWidth / 4) {\n      projectile.target.currentHealt -= tower.towerSet.damage;\n      destroyEnemy(projectile.target, enemies);\n      tower.projectiles.pop();\n    }\n  }\n}\n\nfunction destroyEnemy(target, enemies) {\n  if (target.currentHealt <= 0) {\n    const enemyIndex = enemies.findIndex((enemy) => enemy === target);\n\n    if (enemyIndex > -1) {\n      enemies.splice(enemyIndex, 1);\n      _stats_stats__WEBPACK_IMPORTED_MODULE_3__.resources.hryvnias += target.enemySet.award;\n    }\n  }\n}\n\n\n//# sourceURL=webpack://cursach/./src/core/towers/drawTower.js?");

/***/ }),

/***/ "./src/core/towers/towerSets.js":
/*!**************************************!*\
  !*** ./src/core/towers/towerSets.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sprites_towers_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprites/towers.png */ \"./src/core/towers/sprites/towers.png\");\n\nclass TowerSets {\n  constructor(\n    damage,\n    attackSpeed = 50,\n    range = 150,\n    spriteY,\n    cost,\n    spriteWidth = 64,\n    spriteHeight = 128,\n    imageSrc = _sprites_towers_png__WEBPACK_IMPORTED_MODULE_0__\n  ) {\n    this.damage = damage;\n    this.range = range;\n    this.attackSpeed = attackSpeed;\n    this.spriteY = spriteY;\n    this.cost = cost;\n    this.imageSrc = imageSrc;\n    this.spriteWidth = spriteWidth;\n    this.spriteHeight = spriteHeight;\n  }\n}\n\nconst TOWER_ONE = new TowerSets(10, 24, 200, 0, 50);\nconst TOWER_TWO = new TowerSets(15, 80, 150, 128, 60,);\nconst TOWER_TREE = new TowerSets(17, 48, 175, 256, 20);\nconst TOWER_FOUR = new TowerSets(12, 58, 125, 384, 45);\nconst TOWER_FIVE = new TowerSets(32, 30, 250, 512, 65);\nconst TOWER_SIX = new TowerSets(9, 54, 175, 640, 70);\n\nconst TOWER_SETS = [TOWER_ONE, TOWER_TWO, TOWER_TREE, TOWER_FOUR, TOWER_FIVE, TOWER_SIX];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TOWER_SETS);\n\n\n\n//# sourceURL=webpack://cursach/./src/core/towers/towerSets.js?");

/***/ }),

/***/ "./src/core/towers/weaponSets.js":
/*!***************************************!*\
  !*** ./src/core/towers/weaponSets.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sprites_weapons_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprites/weapons.png */ \"./src/core/towers/sprites/weapons.png\");\n\n\nclass WeaponSets {\n  constructor(\n    frames,\n    spriteSize,\n    frameStartY,\n    frameStartX = 0,\n    rotates = true,\n    imageSrc = _sprites_weapons_png__WEBPACK_IMPORTED_MODULE_0__\n  ) {\n    this.frameStartX = frameStartX;\n    this.frameStartY = frameStartY;\n    this.frames = frames;\n    this.spriteSize = spriteSize;\n    this.rotates = rotates;\n    this.imageSrc = imageSrc;\n  }\n}\n\nconst WEAPON_ONE = new WeaponSets(6, 96, 0);\nconst WEAPON_TWO = new WeaponSets(16, 48, 576, 0, false);\nconst WEAPON_TREE = new WeaponSets(8, 96, 1855);\nconst WEAPON_FOUR = new WeaponSets(29, 96, 4799, -10, false);\nconst WEAPON_FIVE = new WeaponSets(6, 96, 7584, 96);\nconst WEAPON_SIX = new WeaponSets(6, 64, 8159);\n\nconst WEAPON_SETS = [WEAPON_ONE, WEAPON_TWO, WEAPON_TREE, WEAPON_FOUR, WEAPON_FIVE, WEAPON_SIX];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WEAPON_SETS);\n\n\n//# sourceURL=webpack://cursach/./src/core/towers/weaponSets.js?");

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

/***/ }),

/***/ "./src/core/towers/sprites/weapons.png":
/*!*********************************************!*\
  !*** ./src/core/towers/sprites/weapons.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/3876a699b2fb0c12227b.png\";\n\n//# sourceURL=webpack://cursach/./src/core/towers/sprites/weapons.png?");

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