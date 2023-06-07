import Enemy from './classEnemy';
import { directedPath as path } from '../map/pathGeneration';
import ENEMIES_SETS from './enemySets';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const enemies = [];
const waypoints = getWaypoints(path);

spawnEnemies(10, 100);
export function drawEnemy() {
  const enemiesNumber = enemies.length;
  for (let i = enemiesNumber - 1; i >= 0; i--) {
    enemies[i].update();
  }
}

function spawnEnemies(amount, offset) {
  for (let i = 1; i <= amount; i++) {
    const enemy = new Enemy(
      -offset * i,
      0,
      3.2,
      ctx,
      copyArray(waypoints),
      ENEMIES_SETS[0]
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
