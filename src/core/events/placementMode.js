import { SETTINGS } from '../map/settings';
import { towerPlacement } from '../map/towerPlacementGeneration';
import { selectedTower, placementMode } from './towerSelectButton';
import { buildTower } from '../towers/drawTower';
import TOWER_SETS from '../towers/towerSets';
import WEAPON_SETS from '../towers/weaponSets';

const canvas = document.getElementById('gameCanvas');

export const cursor = {
  x: 0,
  y: 0
};

export let activeTile = null;

window.addEventListener('mousemove', (event) => {
  const canvasRect = canvas.getBoundingClientRect();
  const canvasX = canvasRect.left;
  const canvasY = canvasRect.top;

  const xCof = SETTINGS.MAP_WIDTH / canvas.offsetWidth;
  const yCof = SETTINGS.MAP_HEIGHT / canvas.offsetHeight;

  cursor.x = xCof * (event.clientX - canvasX);
  cursor.y = yCof * (event.clientY - canvasY);

  for (let i = 0; i < towerPlacement.length; i++) {
    const tile = towerPlacement[i];
    if (cursor.x > tile.x &&
      cursor.x < tile.x + SETTINGS.TAIL_SIZE &&
      cursor.y > tile.y &&
      cursor.y < tile.y + SETTINGS.TAIL_SIZE) {
      activeTile = tile;
      break;
    } else {
      activeTile = null;
    }
  }
});

window.addEventListener('click', () => {
  if (placementMode &&
    activeTile !== null &&
    activeTile.buildUp === false) {
    const isTowerBuilt = buildTower(selectedTower, TOWER_SETS, activeTile, WEAPON_SETS);

    if (isTowerBuilt) activeTile.buildUp = true;
  }
});
