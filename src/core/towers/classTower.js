import Projectile from '../projectiles/classProjectile';
import { SETTINGS } from '../map/settings';

export default class Tower {
  constructor(x, y, ctx, towerSet, weaponSet, target = null) {
    this.x = x;
    this.y = y;
    this.target = target;
    this.ctx = ctx;
    this.towerImage = new Image();
    this.towerImage.src = towerSet.imageSrc;
    this.weaponImage = new Image();
    this.weaponImage.src = weaponSet.imageSrc;
    this.currentWeaponFrame = 0;
    this.frames = 0;
    this.weaponPos = {
      x: this.x + SETTINGS.TAIL_SIZE / 2,
      y: this.y - 10,
    };
    this.projectiles = [];
    this.towerSet = {
      damage: towerSet.damage,
      attackSpeed: towerSet.attackSpeed,
      range: towerSet.range,
      spriteY: towerSet.spriteY,
      const: towerSet.cost,
      spriteWidth: towerSet.spriteWidth,
      spriteHeight: towerSet.spriteHeight
    };
    this.weaponSet = {
      frameStartX: weaponSet.frameStartX,
      frameStartY: weaponSet.frameStartY,
      frames: weaponSet.frames,
      spriteSize: weaponSet.spriteSize,
      rotates: weaponSet.rotates
    };
  }

  showRange() {
    this.ctx.beginPath();
    this.ctx.arc(this.weaponPos.x, this.weaponPos.y, this.towerSet.range, 0, Math.PI * 2);
    this.ctx.fillStyle = 'rgba(0,255,38,0.05)';
    this.ctx.fill();
    this.ctx.fillStyle = 'rgba(94,94,94,0.08)';
    this.ctx.stroke();
  }

  drawTower() {
    const correctY = this.y - 64;

    this.ctx.drawImage(
      this.towerImage,
      0,
      this.towerSet.spriteY,
      this.towerSet.spriteWidth,
      this.towerSet.spriteHeight,
      this.x,
      correctY,
      this.towerSet.spriteWidth,
      this.towerSet.spriteHeight
    );
  }

  drawWeapon() {
    const frameStartY =
      this.weaponSet.frameStartY +
      this.weaponSet.spriteSize *
      this.currentWeaponFrame;

    let angle;

    if (this.target && this.weaponSet.rotates) {
      const xDistance = this.target.x - this.weaponPos.x;
      const yDistance = this.target.y - this.weaponPos.y;
      angle = Math.atan2(yDistance, xDistance);
    } else if (this.target && !this.weaponSet.rotates) {
      angle = 3 * Math.PI / 2;
    } else if (!this.target) {
      angle = 3 * Math.PI / 2;
      this.currentWeaponFrame = 0;
    }

    this.ctx.save();
    this.ctx.translate(this.weaponPos.x, this.weaponPos.y);
    this.ctx.rotate(angle);

    this.ctx.drawImage(
      this.weaponImage,
      this.weaponSet.frameStartX,
      frameStartY,
      this.weaponSet.spriteSize,
      this.weaponSet.spriteSize,
      -this.weaponSet.spriteSize / 2,
      -this.weaponSet.spriteSize / 2,
      this.weaponSet.spriteSize,
      this.weaponSet.spriteSize
    );

    this.ctx.restore();

    const restFrames = this.towerSet.attackSpeed / this.weaponSet.frames;

    if (this.frames % restFrames === 0 && this.target) {
      this.currentWeaponFrame++;
    }
    if (this.currentWeaponFrame === this.weaponSet.frames - 1) {
      this.currentWeaponFrame = 0;
    }
  }

  update() {
    this.drawTower();
    this.drawWeapon();

    if (this.frames % this.towerSet.attackSpeed === 0 && this.target) {
      const projectile = new Projectile(
        this.weaponPos.x,
        this.weaponPos.y,
        this.ctx,
        this.target
      );

      this.projectiles.push(projectile);
    }

    this.frames++;
  }
}
