export default class Tower {
  constructor(x, y, ctx, towerSet) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = towerSet.imageSrc;
    this.towerSet = {
      spriteY: towerSet.spriteY,
      spriteWidth: towerSet.spriteWidth,
      spriteHeight: towerSet.spriteHeight
    };
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
  }
}
