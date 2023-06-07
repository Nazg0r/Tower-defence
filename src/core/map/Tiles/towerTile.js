import Tile from './tile.js';

export default class TowerTile extends Tile {
  constructor(x, y, type = 'towerTile') {
    super(x, y, type);
    this.buildUp = false;
  }
}
