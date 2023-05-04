import { SETTINGS } from './settings';

class Zone {
  constructor(type, x, y) {
    this.type = type;
    this.x = x;
    this.y = y;
  }
}

function createPathZone(x, y) {
  const type = 'pathZone';
  return new Zone(type, x, y);
}

function pathGeneration() {
  const path = [];
  let currentField = getRandomStart();
  path.push(currentField);

  while (!isPathEndReached(currentField)) {
    currentField = getNextPathPoint(currentField, path);
    path.push(currentField);
  }

  return path;
}

function getRandomStart() {
  const x = SETTINGS.START_X;
  const y = (Math.floor(Math.random() * (SETTINGS.ROWS - 1)) + 1) * SETTINGS.TAIL_SIZE;
  return createPathZone(x, y);
}
function isPathEndReached(currentField) {
  return currentField.x === SETTINGS.MAP_WIDTH - SETTINGS.TAIL_SIZE;
}

function getNextPathPoint(currentField, path) {
  const availablePath = findAvailablePath(currentField, path);
  return choosePath(availablePath);
}

function findAvailablePath(field, path) {
  let possiblePath = findPossiblePath(field, path);

  for (const possible of possiblePath) {
    const neighbors = findNeighbor(possible, path);
    if (neighbors > 2) {
      possiblePath = possiblePath.filter((item) => item !== possible);
    }
  }
  return possiblePath;
}

function findPossiblePath(field, path) {
  const existFields = path;
  const length = path.length;
  const thisF = field;
  const possiblePath = [];
  const d = SETTINGS.TAIL_SIZE;
  const xMin = SETTINGS.START_X;
  const xMax = SETTINGS.MAP_WIDTH;
  const yMin = SETTINGS.START_Y;
  const yMax = SETTINGS.MAP_HEIGHT;
  let prevF = existFields[length - 2];
  if (length === 1) prevF = existFields[0];

  if (thisF.x !== xMin) {
    if (prevF.x !== (thisF.x - d) && (prevF.y === thisF.y || prevF.y !== thisF.y)) {
      possiblePath.push(createPathZone(thisF.x - d, thisF.y));
    }
  }
  if (thisF.x !== xMax) {
    if (prevF.x !== (thisF.x + d) && (prevF.y === thisF.y || prevF.y !== thisF.y)) {
      possiblePath.push(createPathZone(thisF.x + d, thisF.y));
    }
  }
  if (thisF.y !== yMin) {
    if ((prevF.x === thisF.x || prevF.x !== thisF.x) && prevF.y !== (thisF.y - d)) {
      possiblePath.push(createPathZone(thisF.x, thisF.y - d));
    }
  }
  if (thisF.y !== yMax) {
    if ((prevF.x === thisF.x || prevF.x !== thisF.x) && prevF.y !== (thisF.y + d)) {
      possiblePath.push(createPathZone(thisF.x, thisF.y + d));
    }
  }
  return possiblePath;
}

function findNeighbor(poss, path) {
  const existFields = path;
  const thisField = poss;
  let neighbors = 0;
  const d = SETTINGS.TAIL_SIZE;
  const xMin = SETTINGS.START_X;
  const xMax = SETTINGS.MAP_WIDTH;
  const yMin = SETTINGS.START_Y;
  const yMax = SETTINGS.MAP_HEIGHT;

  for (const exist of existFields) {
    if (thisField.x === xMin) neighbors += 3;
    if (thisField.x === xMax) neighbors += 3;
    if (thisField.y === yMin) neighbors += 3;
    if (thisField.y === yMax) neighbors += 3;

    if (exist.x === thisField.x - d && exist.y === thisField.y) neighbors++;
    if (exist.x === thisField.x + d && exist.y === thisField.y) neighbors++;
    if (exist.x === thisField.x  && exist.y === thisField.y - d) neighbors++;
    if (exist.x === thisField.x  && exist.y === thisField.y + d) neighbors++;
    if (exist.x === thisField.x - d && exist.y === thisField.y - d) neighbors++;
    if (exist.x === thisField.x + d && exist.y === thisField.y + d) neighbors++;
    if (exist.x === thisField.x + d && exist.y === thisField.y - d) neighbors++;
    if (exist.x === thisField.x - d && exist.y === thisField.y + d) neighbors++;
  }
  return neighbors;
}

function choosePath(paths) {
  if (paths.length === 0) throw new Error('The path was looped');
  const ways = paths;
  const length =  paths.length;
  const wayIndex = Math.floor(Math.random() * length);
  return  ways[wayIndex];
}

function isPathGenerated() {
  while (true) {
    try {
      return pathGeneration();
    } catch (error) {
      console.error('Error');
    }
  }
}

export const path = isPathGenerated();
