import Enemy from './classEnemy';
import { directedPath as path } from '../map/pathGeneration';
import ENEMIES_SETS from './enemySets';
import { SETTINGS } from '../map/settings';
import { resources, waveInfo } from '../stats/stats';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

export const enemies = [];
let pause = false;
const waypoints = getWaypoints(path);

export function drawEnemies() {
  const enemiesNumber = enemies.length;
  for (let i = enemiesNumber - 1; i >= 0; i--) {
    enemies[i].update();

    if (enemies[i].x > SETTINGS.MAP_WIDTH) {
      enemies.splice(enemies[i], 1);
      resources.hearts--;
    }
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
  if (waveInfo.wave !== 1 && waveInfo.wave < 6 && pause === false) {
    pause = true;
    setTimeout(() => {
      spawnEnemies(waveInfo.startEnemiesAmount, 100, waveInfo.wave);
      pause = false;
      waveInfo.startEnemiesAmount += 2;
      waveInfo.wave++;
    }, 5000);
  } else if (waveInfo.wave === 1) {
    spawnEnemies(waveInfo.startEnemiesAmount, 100, waveInfo.wave);
    waveInfo.startEnemiesAmount += 2;
    waveInfo.wave++;
  }
}
