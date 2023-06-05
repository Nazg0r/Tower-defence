import Tile from './tile.js';
export default class PassiveTile extends Tile {
  constructor(x, y, type = 'passiveTile') {
    super(x, y, type);
  }
}
