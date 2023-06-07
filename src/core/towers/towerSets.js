import sprites from './sprites/towers.png';
class TowerSets {
  constructor(range, spriteY, spriteWidth = 64, spriteHeight = 128, imageSrc = sprites, attackSpeed = 50) {
    this.range = range;
    this.attackSpeed = attackSpeed;
    this.imageSrc = imageSrc;
    this.spriteY = spriteY;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
  }
}

const TOWER_ONE = new TowerSets(150, 0);
const TOWER_TWO = new TowerSets(200, 128);
const TOWER_TREE = new TowerSets(150, 256);
const TOWER_FOUR = new TowerSets(200, 384);
const TOWER_FIVE = new TowerSets(150, 512);
const TOWER_SIX = new TowerSets(200, 640);

const TOWER_SETS = [TOWER_ONE, TOWER_TWO, TOWER_TREE, TOWER_FOUR, TOWER_FIVE, TOWER_SIX];
export default TOWER_SETS;

