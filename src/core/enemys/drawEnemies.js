import Enemy from './classEnemy';
import { directedPath as path } from '../map/pathGeneration';
import ENEMIES_SETS from './enemySets';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
export const enemies = [];
let pause = false;
let wave = 1;
let startEnemiesAmount = 5;
const waypoints = getWaypoints(path);

export function drawEnemies() {
  const enemiesNumber = enemies.length;
  for (let i = enemiesNumber - 1; i >= 0; i--) {
    enemies[i].update();
  }
}

export function checkWave() {
  const wavePassed = isAllEnemiesDestroyed(enemies);
  if (wavePassed) startNewWave();
}

export function drawEnemiesHealthBar() {
  const enemiesNumber = enemies.length;
  for (let i = enemiesNumber - 1; i >= 0; i--) {
    if (enemies[i].currentHealt < enemies[i].enemySet.maxHealth) {
      enemies[i].drawHealthBar();
    }
  }
}

function spawnEnemies(amount, offset, wave) {
  for (let i = 1; i <= amount; i++) {
    const enemy = new Enemy(
      -offset * i,
      0,
      2,
      ctx,
      copyArray(waypoints),
      ENEMIES_SETS[wave - 1]
    );
    enemies.push(enemy);
  }
}


function getWaypoints(path) {
  const wayPoints = [];

  wayPoints.push(Object.assign({}, path[0]));
  wayPoints[0].x += -200;

  for (const point of path) {
    if (point.direction !== 'left' &&
     point.direction !== 'right' &&
     point.direction !== 'top' &&
     point.direction !== 'down') {

      wayPoints.push(Object.assign({}, point));
    }
  }
  wayPoints.push(Object.assign({}, path[path.length - 1]));
  wayPoints[wayPoints.length - 1].x += 200;

  return wayPoints;
}

function copyArray(arr) {
  return JSON.parse(JSON.stringify(arr));
}

function isAllEnemiesDestroyed(enemies) {
  const aliveEnemies = enemies.length;
  return aliveEnemies === 0;
}

function startNewWave() {
  if (wave !== 1 && wave < 6 && pause === false) {
    pause = true;
    setTimeout(() => {
      spawnEnemies(startEnemiesAmount, 100, wave);
      pause = false;
      startEnemiesAmount += 2;
      wave++;
    }, 5000);
  } else if (wave === 1) {
    spawnEnemies(startEnemiesAmount, 100, wave);
    startEnemiesAmount += 2;
    wave++;
  }
}
