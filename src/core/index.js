import { directedPath as path } from './map/pathGeneration.js';
import { SETTINGS } from './map/settings.js';
import { towerPlacement } from './map/towerPlacementGeneration.js';
import { passiveZone } from './map/passiveZoneGeneration.js';
import { drawMap, map, ShowPlacementMode, highlightCells } from './map/mapDrawing';
import { drawEnemies, drawEnemiesHealthBar, checkWave } from './enemys/drawEnemies';
import { placementMode } from './events/towerSelectButton';
import { drawTowersActivity, drawTowersRange } from './towers/drawTower';
import { start } from './events/startGame';
import { activeTile } from './events/placementMode';
import Enemy from './enemys/classEnemy';


const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let stop = false;
setTimeout(() => stop = true,   1000000);

drawMap(passiveZone, path, towerPlacement);
ctx.drawImage(map, 0, 0);

function render() {
  const animationId = requestAnimationFrame(render);

  ctx.drawImage(map, 0, 0);
  if (placementMode) {
    ShowPlacementMode();
    highlightCells();
    drawTowersRange();
  }

  drawEnemies();
  drawTowersActivity();
  drawEnemiesHealthBar();

  checkWave();

  if (stop) cancelAnimationFrame(animationId);
}
render();
