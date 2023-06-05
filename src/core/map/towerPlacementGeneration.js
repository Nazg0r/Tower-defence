import { directedPath as path } from './pathGeneration.js';
import { SETTINGS } from './settings.js';
import TowerTile from './Tiles/towerTile.js';


function towerPlacementGeneration(path) {
  const currentPath = path;
  const towerPlacement = [];
  const d = SETTINGS.TAIL_SIZE;

  for (const pathField of currentPath) {
    const direction = pathField.direction;

    if (direction === 'right' || direction === 'left') {
      addTowerZoneOverPath(towerPlacement, pathField, d);
      addTowerZoneUnderPath(towerPlacement, pathField, d);
    }
    if (direction === 'down' || direction === 'top') {
      addTowerZoneLeftOfPath(towerPlacement, pathField, d);
      addTowerZoneRightOfPath(towerPlacement, pathField, d);
    }
    if (direction === 'right-down' || direction === 'top-left') {
      addTowerZoneOverPath(towerPlacement, pathField, d);
      addTowerZoneRightOfPath(towerPlacement, pathField, d);
      addTowerZoneOverPath(towerPlacement, pathField, d, d);
      addTowerZoneOverPath(towerPlacement, pathField, d, 2 * d);
    }
    if (direction === 'right-top' || direction === 'down-left') {
      addTowerZoneUnderPath(towerPlacement, pathField, d);
      addTowerZoneRightOfPath(towerPlacement, pathField, d);
      addTowerZoneUnderPath(towerPlacement, pathField, d, d);
      addTowerZoneUnderPath(towerPlacement, pathField, d, 2 * d);
    }
    if (direction === 'top-right' || direction === 'left-down') {
      addTowerZoneOverPath(towerPlacement, pathField, d);
      addTowerZoneLeftOfPath(towerPlacement, pathField, d);
      addTowerZoneOverPath(towerPlacement, pathField, d, -d);
      addTowerZoneOverPath(towerPlacement, pathField, d, -2 * d);
    }
    if (direction === 'left-top' || direction === 'down-right') {
      addTowerZoneUnderPath(towerPlacement, pathField, d);
      addTowerZoneLeftOfPath(towerPlacement, pathField, d);
      addTowerZoneUnderPath(towerPlacement, pathField, d, -d);
      addTowerZoneUnderPath(towerPlacement, pathField, d, -2 * d);

    }
  }
  return towerPlacement;
}

function addTowerZoneOverPath(towerPlacement, pathField, delta,  offset = null) {
  if (!isTowerZoneExist(pathField.x + offset, pathField.y - delta, towerPlacement)) {
    towerPlacement.push(new TowerTile(pathField.x + offset, pathField.y - delta));
  }
  if (!isTowerZoneExist(pathField.x + offset, pathField.y - 2 * delta, towerPlacement)) {
    towerPlacement.push(new TowerTile(pathField.x + offset, pathField.y - 2 * delta));
  }
}

function addTowerZoneUnderPath(towerPlacement, pathField, delta, offset = null) {
  if (!isTowerZoneExist(pathField.x + offset, pathField.y + delta, towerPlacement)) {
    towerPlacement.push(new TowerTile(pathField.x + offset, pathField.y + delta));
  }
  if (!isTowerZoneExist(pathField.x + offset, pathField.y + 2 * delta, towerPlacement)) {
    towerPlacement.push(new TowerTile(pathField.x + offset, pathField.y + 2 * delta));
  }
}

function addTowerZoneLeftOfPath(towerPlacement, pathField, delta) {
  if (!isTowerZoneExist(pathField.x - delta, pathField.y, towerPlacement)) {
    towerPlacement.push(new TowerTile(pathField.x - delta, pathField.y));
  }
  if (!isTowerZoneExist(pathField.x - 2 * delta, pathField.y, towerPlacement)) {
    towerPlacement.push(new TowerTile(pathField.x - 2 * delta, pathField.y));
  }
}

function addTowerZoneRightOfPath(towerPlacement, pathField, delta) {
  if (!isTowerZoneExist(pathField.x + delta, pathField.y, towerPlacement)) {
    towerPlacement.push(new TowerTile(pathField.x + delta, pathField.y));
  }
  if (!isTowerZoneExist(pathField.x + 2 * delta, pathField.y, towerPlacement)) {
    towerPlacement.push(new TowerTile(pathField.x + 2 * delta, pathField.y));
  }
}

function isTowerZoneExist(x, y, towerPlacement) {
  for (const towerField of towerPlacement) {
    if (towerField.x === x && towerField.y === y) {
      return true;
    }
  }
}

function removeExtraZone(towerPlacement, path) {
  let filteredTowerPlacement = removeAbroadZone(towerPlacement);
  filteredTowerPlacement = removeOverlay(filteredTowerPlacement, path);
  return filteredTowerPlacement;
}
function removeAbroadZone(towerPlacement) {
  return towerPlacement.filter((towerField) =>
    towerField.x >= SETTINGS.START_X &&
    towerField.y >= SETTINGS.START_Y &&
    towerField.y < SETTINGS.MAP_HEIGHT
  );
}
function removeOverlay(towerPlacement, path) {
  return towerPlacement.filter((towerField) =>
    !path.some((pathField) => pathField.x === towerField.x &&
    pathField.y === towerField.y)
  );
}

let towerPlacement = towerPlacementGeneration(path);
towerPlacement = removeExtraZone(towerPlacement, path);
export { towerPlacement };
