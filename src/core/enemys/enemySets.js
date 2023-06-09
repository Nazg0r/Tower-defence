import sprites from './sprites/walk.png';

class EnemySet  {
  constructor(
    maxHealth,
    award,
    frameStartY,
    frames,
    spriteWidth,
    spriteHeight,
    imageSrc = sprites
  ) {
    this.maxHealth = maxHealth;
    this.award = award;
    this.frameStartY = frameStartY;
    this.frames = frames;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
    this.imageSrc = imageSrc;
  }
}

const SLIME = new EnemySet(100, 40, 0, 8, 32, 32);
const WORM = new EnemySet(250, 60, 96, 9, 64, 64);
const SKELETON = new EnemySet(300, 100, 32, 12, 64, 64);
const NECROMANCER = new EnemySet(450, 125, 160, 8, 64, 64);
const DEATH = new EnemySet(500, 150, 224, 7, 64, 64);

const ENEMIES_SETS = [SLIME, WORM, SKELETON, NECROMANCER, DEATH];
export default ENEMIES_SETS;
