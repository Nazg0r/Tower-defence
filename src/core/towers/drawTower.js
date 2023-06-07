import Tower from './classTower';
import { SETTINGS } from '../map/settings';
import { enemies } from '../enemys/drawEnemies';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
export const towers = [];

for (let i = 0; i < SETTINGS.ROWS; i++) {
  towers[i] = [];
}
export function drawTowers() {
  for (const row of towers) {
    for (const tower of row) {
      tower.update();
      tower.target = null;

      const possibleTargets = enemies.filter((enemy) => {
        const xDifference = enemy.x - tower.weaponPos.x;
        const yDifference = enemy.y - tower.weaponPos.y;
        const distance = Math.hypot(xDifference, yDifference);

        return distance < tower.towerSet.range;
      });
      tower.target = possibleTargets[0];


      const projectileNum = tower.projectiles.length;
      for (let i = projectileNum - 1; i >= 0; i--) {
        const projectile = tower.projectiles[i];
        projectile.update();

        const xDifference = projectile.target.x - projectile.x;
        const yDifference = projectile.target.x - projectile.x;

        const distance = Math.hypot(xDifference, yDifference);
        if (distance < projectile.target.enemySet.spriteWidth / 10) {
          tower.projectiles.pop();
        }
      }
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
  const row = activeTile.y / SETTINGS.TAIL_SIZE;
  const towerSet = towerSets[type];
  const tower = new Tower(activeTile.x, activeTile.y, ctx, towerSet);

  towers[row].push(tower);
}

