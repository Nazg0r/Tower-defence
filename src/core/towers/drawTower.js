import Tower from './classTower';
import { SETTINGS } from '../map/settings';
import { enemies } from '../enemys/drawEnemies';
import { resources } from '../stats/stats';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

export const towers = [];

for (let i = 0; i < SETTINGS.ROWS; i++) {
  towers[i] = [];
}
export function drawTowersActivity() {
  for (const row of towers) {
    for (const tower of row) {
      tower.update();

      tower.target = getTowerTarget(tower, enemies);
      shoot(tower, enemies);
    }
  }
}

export function drawTowersRange() {
  for (const row of towers) {
    for (const tower of row) {
      tower.showRange();
    }
  }
}

export function buildTower(type, towerSets, activeTile) {
  const towerSet = towerSets[type];

  if (towerSet.cost < resources.hryvnias) {
    const row = activeTile.y / SETTINGS.TAIL_SIZE;
    const tower = new Tower(activeTile.x, activeTile.y, ctx, towerSet);

    resources.hryvnias -= towerSet.cost;

    towers[row].push(tower);

    return true;
  }

  return false;
}

function findDistance(x1, y1, x2, y2) {
  const xDifference = x1 - x2;
  const yDifference = y1 - y2;

  return Math.hypot(xDifference, yDifference);
}

function getTowerTarget(tower, enemies) {
  const possibleTargets = enemies.filter((enemy) => {
    const distance = findDistance(
      enemy.x,
      enemy.y,
      tower.weaponPos.x,
      tower.weaponPos.y
    );

    return distance < tower.towerSet.range;
  });

  return possibleTargets[0];
}

function shoot(tower, enemies) {
  const projectileNum = tower.projectiles.length;

  for (let i = projectileNum - 1; i >= 0; i--) {
    const projectile = tower.projectiles[i];
    projectile.update();

    const distance = findDistance(
      projectile.target.x,
      projectile.target.y,
      projectile.x,
      projectile.y
    );

    if (distance < projectile.target.enemySet.spriteWidth / 4) {
      projectile.target.currentHealt -= tower.towerSet.damage;
      destroyEnemy(projectile.target, enemies);
      tower.projectiles.pop();
    }
  }
}

function destroyEnemy(target, enemies) {
  if (target.currentHealt <= 0) {
    const enemyIndex = enemies.findIndex((enemy) => enemy === target);

    if (enemyIndex > -1) {
      enemies.splice(enemyIndex, 1);
      resources.hryvnias += target.enemySet.award;
    }
  }
}
