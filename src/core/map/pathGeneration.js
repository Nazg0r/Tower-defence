import { SETTINGS } from './settings.js';

class Zone {
  constructor(type, x, y) {
    this.type = type;
    this.x = x;
    this.y = y;
  }
}

class PathZone extends Zone {
  constructor(type, x, y, direction = null) {
    super(type, x, y);
    this.direction = direction;
  }
}
function createPathZone(x, y) {
  const type = 'pathZone';
  return new PathZone(type, x, y);
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

const pathField = isPathGenerated();

function definePathDirection(path) {
  const currentPath = path;
  const length = currentPath.length;

  currentPath[0].direction = 'right';
  currentPath[length - 1].direction = 'right';

  for (let i = 1; i < length - 1; i++) {
    const x1 = currentPath[i - 1].x;
    const y1 = currentPath[i - 1].y;
    const x2 = currentPath[i + 1].x;
    const y2 = currentPath[i + 1].y;

    setRightOrLeftDirection(x1, y1, x2, y2, currentPath[i]);
    setDownOrUpDirection(x1, y1, x2, y2, currentPath[i]);
    setTurnDirection(x1, y1, x2, y2, currentPath[i]);
  }
  return currentPath;
}

function setRightOrLeftDirection(x1, y1, x2, y2, pathField) {
  if (y1 === y2 && x1 < x2) pathField.direction = 'right';
  if (y1 === y2 && x1 > x2) pathField.direction = 'left';
}

function setDownOrUpDirection(x1, y1, x2, y2, pathField) {
  if (x1 === x2 && y1 < y2) pathField.direction = 'down';
  if (x1 === x2 && y1 > y2) pathField.direction = 'top';
}

function setTurnDirection(x1, y1, x2, y2, pathField) {
  if (y1 < y2 && x1 < x2 && x1 === pathField.x) pathField.direction = 'down-right';
  if (y1 < y2 && x1 < x2 && x1 !== pathField.x) pathField.direction = 'right-down';
  if (y1 < y2 && x1 > x2 && x1 === pathField.x) pathField.direction = 'down-left';
  if (y1 < y2 && x1 > x2 && x1 !== pathField.x) pathField.direction = 'left-down';
  if (y1 > y2 && x1 < x2 && x1 === pathField.x) pathField.direction = 'top-right';
  if (y1 > y2 && x1 < x2 && x1 !== pathField.x) pathField.direction = 'right-top';
  if (y1 > y2 && x1 > x2 && x1 === pathField.x) pathField.direction = 'top-left';
  if (y1 > y2 && x1 > x2 && x1 !== pathField.x) pathField.direction = 'left-top';
}
export const directedPath = definePathDirection(pathField);
