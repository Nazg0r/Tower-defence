import { SETTINGS } from '../map/settings';

export default class Tower {
  constructor(x, y, ctx, imageSrc) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = imageSrc;

  }

  draw() {
    this.ctx.fillStyle = 'rgba(31,255,219,0.2)';
    this.ctx.fillRect(this.x, this.y, SETTINGS.TAIL_SIZE, SETTINGS.TAIL_SIZE);
  }

  update() {
    
  }
}
