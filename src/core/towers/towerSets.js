import sprites from './sprites/towers.png';
class TowerSets {
  constructor(
    damage,
    attackSpeed = 50,
    range = 150,
    spriteY,
    spriteWidth = 64,
    spriteHeight = 128,
    imageSrc = sprites
  ) {
    this.damage = damage;
    this.range = range;
    this.attackSpeed = attackSpeed;
    this.imageSrc = imageSrc;
    this.spriteY = spriteY;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
  }
}

const TOWER_ONE = new TowerSets(10, 25, 200, 0);
const TOWER_TWO = new TowerSets(15, 40, 150, 128);
const TOWER_TREE = new TowerSets(17, 55, 175, 256);
const TOWER_FOUR = new TowerSets(12, 35, 125, 384);
const TOWER_FIVE = new TowerSets(32, 100, 250, 512);
const TOWER_SIX = new TowerSets(9, 22, 175, 640);

const TOWER_SETS = [TOWER_ONE, TOWER_TWO, TOWER_TREE, TOWER_FOUR, TOWER_FIVE, TOWER_SIX];
export default TOWER_SETS;

