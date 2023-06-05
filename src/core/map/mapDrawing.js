import { directedPath as path } from './pathGeneration.js';
import { SETTINGS } from './settings.js';
import img from './png/Test.png';


const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
export const map = new Image();
const image = new Image();
image.src = img;

const IMAGE_TAIL_SIZE = 16;

for (const field of path) {
  ctx.fillStyle = '#4f371d';
  ctx.fillRect(field.x, field.y, SETTINGS.TAIL_SIZE, SETTINGS.TAIL_SIZE);
}
function drawPath(path) {
  for (const pathField of path) {
    if (pathField.direction === 'left' || pathField.direction === 'right') {
      drawField(pathField, 208, 32);
    }

    if (pathField.direction === 'top' || pathField.direction === 'down') {
      drawField(pathField, 192, 32);
    }

    if (pathField.direction === 'right-down' || pathField.direction === 'top-left') {
      drawField(pathField, 208, 0);
    }

    if (pathField.direction === 'right-top' || pathField.direction === 'down-left') {
      drawField(pathField, 208, 16);
    }

    if (pathField.direction === 'top-right' || pathField.direction === 'left-down') {
      drawField(pathField, 192, 0);
    }

    if (pathField.direction === 'left-top' || pathField.direction === 'down-right') {
      drawField(pathField, 192, 16);
    }
  }
}

function drawPassiveZone(passiveZone) {
  for (const passiveField of passiveZone) {
    drawField(passiveField, 16, 128);
  }
}

function drawTowerPlacement(towerPlacement) {
  for (const towerField of towerPlacement) {
    drawField(towerField, 16, 16);
  }
}

function drawDecorations(passiveZone) {
  const decorativeZone = passiveZone.slice();
  const fieldValue = passiveZone.length;
  const k = 0.1;
  const decorationsValue = Math.round(fieldValue * k);
  const decVariants = 3;

  for (let i = 0; i < decorationsValue; i++) {
    const currentField = getRandomField(decorativeZone);
    const variant = getRandomDecoration(decVariants);
    if (variant === 1) drawField(currentField, 112, 0);
    if (variant === 2) drawField(currentField, 112, 16);
    if (variant === 3) drawField(currentField, 112, 32);
  }
}

function getRandomDecoration(variantsNum) {
  return Math.round(Math.random() * variantsNum) + 1;
}

function getRandomField(passiveZone) {
  let fieldValue = passiveZone.length;
  const fieldIndex = Math.round(Math.random() * fieldValue++);
  return passiveZone[fieldIndex];
}

function drawField(field, sx, sy) {
  const { TAIL_SIZE } = SETTINGS;

  ctx.drawImage(
    image,
    sx, sy,
    IMAGE_TAIL_SIZE, IMAGE_TAIL_SIZE,
    field.x, field.y,
    TAIL_SIZE, TAIL_SIZE
  );
}

export function drawMap(passiveZone, path, towerPlacement) {
  image.onload = () => {
    drawPassiveZone(passiveZone);
    drawPath(path);
    drawTowerPlacement(towerPlacement);
    drawDecorations(passiveZone);
    map.src = canvas.toDataURL();
  };
}

