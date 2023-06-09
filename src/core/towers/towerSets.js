import sprites from './sprites/towers.png';
class TowerSets {
  constructor(
    damage,
    attackSpeed = 50,
    range = 150,
    spriteY,
    cost,
    spriteWidth = 64,
    spriteHeight = 128,
    imageSrc = sprites
  ) {
    this.damage = damage;
    this.range = range;
    this.attackSpeed = attackSpeed;
    this.spriteY = spriteY;
    this.cost = cost;
    this.imageSrc = imageSrc;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
  }
}

const TOWER_ONE = new TowerSets(10, 24, 200, 0, 50);
const TOWER_TWO = new TowerSets(15, 80, 150, 128, 60,);
const TOWER_TREE = new TowerSets(17, 48, 175, 256, 20);
const TOWER_FOUR = new TowerSets(12, 58, 125, 384, 45);
const TOWER_FIVE = new TowerSets(32, 30, 250, 512, 65);
const TOWER_SIX = new TowerSets(9, 54, 175, 640, 70);

const TOWER_SETS = [TOWER_ONE, TOWER_TWO, TOWER_TREE, TOWER_FOUR, TOWER_FIVE, TOWER_SIX];

export default TOWER_SETS;

