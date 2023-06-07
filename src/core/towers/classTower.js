import Projectile from '../projectiles/classProjectile';
import { SETTINGS } from '../map/settings';
export default class Tower {
  constructor(x, y, ctx, towerSet, target = null) {
    this.x = x;
    this.y = y;
    this.target = target;
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = towerSet.imageSrc;
    this.frames = 0;
    this.weaponPos = {
      x: this.x + SETTINGS.TAIL_SIZE / 2,
      y: this.y - 10,
    };
    this.projectiles = [];
    this.towerSet = {
      attackSpeed: towerSet.attackSpeed,
      range: towerSet.range,
      spriteY: towerSet.spriteY,
      spriteWidth: towerSet.spriteWidth,
      spriteHeight: towerSet.spriteHeight
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

  draw() {
    const correctY = this.y - 64;

    this.ctx.drawImage(
      this.image,
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

  update() {
    this.draw();
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
