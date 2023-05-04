import { path } from './map/pathGeneration';
import { SETTINGS } from './map/settings';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

for (const field of path) {
  ctx.fillStyle = '#000';
  ctx.fillRect(field.x, field.y, SETTINGS.TAIL_SIZE, SETTINGS.TAIL_SIZE);
  ctx.strokeStyle = '#000';
  ctx.strokeRect(field.x, field.y, SETTINGS.TAIL_SIZE, SETTINGS.TAIL_SIZE);
}
