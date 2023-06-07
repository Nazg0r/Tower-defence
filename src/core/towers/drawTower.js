import Tower from './classTower';
import { SETTINGS } from '../map/settings';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
export const towers = [];

for (let i = 0; i < SETTINGS.ROWS; i++) {
  towers[i] = [];
}
export function drawTowers() {
  console.log(towers);
  for (const row of towers) {
    for (const tower of row) {
      tower.update();
    }
  }

}

export function buildTower(type, towerSets, activeTile) {
  const row = activeTile.y / SETTINGS.TAIL_SIZE;
  const towerSet = towerSets[type];
  const tower = new Tower(activeTile.x, activeTile.y, ctx, towerSet);


  towers[row].push(tower);

}
