import Tile from './tile.js';
export default class PathTile extends Tile {
  constructor(x, y, type = 'pathTile', direction = null) {
    super(x, y, type);
    this.direction = direction;
  }
}
