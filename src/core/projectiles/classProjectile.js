export default class Projectile {
  constructor(x, y, ctx, target, speed = 10) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.target = target;
    this.speed = speed;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
    this.ctx.fillStyle = 'red';
    this.ctx.fill();
  }

  update() {
    this.draw();

    const directionAngle = Math.atan2(
      this.target.y - this.y,
      this.target.x - this.x
    );

    const xVelocity = Math.cos(directionAngle) * this.speed;
    const yVelocity = Math.sin(directionAngle) * this.speed;

    this.x += xVelocity;
    this.y += yVelocity;
  }
}
