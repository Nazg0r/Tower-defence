import sprites from './sprites/towers.png';
class TowerSets {
  constructor(spriteY, spriteWidth = 64, spriteHeight = 128, imageSrc = sprites) {
    this.imageSrc = imageSrc;
    this.spriteY = spriteY;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
  }
}

const TOWER_ONE = new TowerSets(0);
const TOWER_TWO = new TowerSets(128);
const TOWER_TREE = new TowerSets(256);
const TOWER_FOUR = new TowerSets(384);
const TOWER_FIVE = new TowerSets(512);
const TOWER_SIX = new TowerSets(640);

const TOWER_SETS = [TOWER_ONE, TOWER_TWO, TOWER_TREE, TOWER_FOUR, TOWER_FIVE, TOWER_SIX];
export default TOWER_SETS;

