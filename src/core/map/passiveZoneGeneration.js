import { towerPlacement } from './towerPlacementGeneration.js';
import { SETTINGS } from './settings.js';
import { directedPath as path } from './pathGeneration.js';

class Zone {
  constructor(type, x, y) {
    this.type = type;
    this.x = x;
    this.y = y;
  }
}

function combinePlacement(placement1, placement2) {
  const newPlacement = placement1.slice();
  const middle = Math.floor(newPlacement.length / 2);
  newPlacement.splice(middle, 0, ...placement2);
  return newPlacement;
}
function createPassiveZone(x, y) {
  const type = 'passiveZone';
  return new Zone(type, x, y);
}
function sortPlacementByY(placement) {
  const placementCopy = placement.slice();
  return placementCopy.sort((oneField, anotherField) =>
    oneField.y - anotherField.y);
}

function chopPlacement(placement) {
  const planePlacement = [];
  let start = 0;

  for (let i = SETTINGS.TAIL_SIZE; i <= SETTINGS.MAP_HEIGHT; i += SETTINGS.TAIL_SIZE) {
    const end = placement.findIndex((field) =>  field.y === i);
    if (end === -1) {
      planePlacement.push([]);
    } else {
      planePlacement.push(placement.slice(start, end));
      start = end;
      if (placement.findIndex((field) =>  field.y === i + SETTINGS.TAIL_SIZE) === -1) {
        planePlacement.push(placement.slice(start));
      }
    }
  }

  return planePlacement;
}

function generatePassiveZone(planePlacement) {
  const passiveZone = [];
  let startY = 0;

  for (const row of planePlacement) {
    const length = SETTINGS.COLUMNS;

    for (let i = 0; i < length; i++) {
      if (!row.some((field) => field.x === i * SETTINGS.TAIL_SIZE)) {
        passiveZone.push(createPassiveZone(i * SETTINGS.TAIL_SIZE, startY));
      }
    }
    startY += SETTINGS.TAIL_SIZE;
  }
  return passiveZone;
}

const combinedPlacement = combinePlacement(towerPlacement, path);
const sortedPlacement = sortPlacementByY(combinedPlacement);
const planePlacement = chopPlacement(sortedPlacement);
export const passiveZone = generatePassiveZone(planePlacement);
