import { directedPath as path } from './map/pathGeneration.js';
import { SETTINGS } from './map/settings.js';
import { towerPlacement } from './map/towerPlacementGeneration.js';
import { passiveZone } from './map/passiveZoneGeneration.js';
import { drawMap, map } from './map/mapDrawing';
import { towerSelectButton } from './events/towerSelectButton';
import { drawEnemy } from './enemys/drawEnemy';
import Enemy from './enemys/classEnemy';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let stop = false;
setTimeout(() => stop = true,   25000);

drawMap(passiveZone, path, towerPlacement);
ctx.drawImage(map, 0, 0);

function render() {
  const animationId = requestAnimationFrame(render);

  ctx.drawImage(map, 0, 0);
  drawEnemy();

  if (stop) cancelAnimationFrame(animationId);
}

render();
