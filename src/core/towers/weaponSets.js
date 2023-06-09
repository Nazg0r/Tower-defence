import sprites from './sprites/weapons.png';

class WeaponSets {
  constructor(
    frames,
    spriteSize,
    frameStartY,
    frameStartX = 0,
    rotates = true,
    imageSrc = sprites
  ) {
    this.frameStartX = frameStartX;
    this.frameStartY = frameStartY;
    this.frames = frames;
    this.spriteSize = spriteSize;
    this.rotates = rotates;
    this.imageSrc = imageSrc;
  }
}

const WEAPON_ONE = new WeaponSets(6, 96, 0);
const WEAPON_TWO = new WeaponSets(16, 48, 576, 0, false);
const WEAPON_TREE = new WeaponSets(8, 96, 1855);
const WEAPON_FOUR = new WeaponSets(29, 96, 4799, -10, false);
const WEAPON_FIVE = new WeaponSets(6, 96, 7584, 96);
const WEAPON_SIX = new WeaponSets(6, 64, 8159);

const WEAPON_SETS = [WEAPON_ONE, WEAPON_TWO, WEAPON_TREE, WEAPON_FOUR, WEAPON_FIVE, WEAPON_SIX];

export default WEAPON_SETS;
