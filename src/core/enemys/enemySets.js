import sprites from './sprites/walk.png';

class EnemySet  {
  constructor(frameStartY, frames, spriteWidth, spriteHeight, imageSrc = sprites) {
    this.frameStartY = frameStartY;
    this.frames = frames;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
    this.imageSrc = imageSrc;
  }
}

const SLIME = new EnemySet(0, 8, 32, 32);
const WORM = new EnemySet(96, 9, 64, 64);
const SKELETON = new EnemySet(32, 12, 64, 64);
const NECROMANCER = new EnemySet(160, 8, 64, 64);
const DEATH = new EnemySet(224, 7, 64, 64);

const ENEMIES_SETS = [SLIME, WORM, SKELETON, NECROMANCER, DEATH];
export default ENEMIES_SETS;
