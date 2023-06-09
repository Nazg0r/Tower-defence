export default class Enemy {
  constructor(x = -200, y = 0, speed = 1, ctx, waypoints, enemySet) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.currentHealt = enemySet.maxHealth;
    this.waypoints = waypoints;
    this.weypointIndex = 0;
    this.offset = 0;
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = enemySet.imageSrc;
    this.currentFrame = 0;
    this.enemySet = {
      maxHealth: enemySet.maxHealth,
      award: enemySet.award,
      imageSrc: enemySet.imageSrc,
      frameStartY: enemySet.frameStartY,
      frames: enemySet.frames,
      spriteWidth: enemySet.spriteWidth,
      spriteHeight: enemySet.spriteHeight,
      hold: 5,
      holdCounter: 0,
    };
  }

  draw() {
    const frameStartX = this.enemySet.spriteWidth * this.currentFrame;
    const correctX = this.x - this.enemySet.spriteWidth / 2;
    const correctY = this.y - this.enemySet.spriteHeight / 2;

    this.ctx.drawImage(
      this.image,
      frameStartX,
      this.enemySet.frameStartY,
      this.enemySet.spriteWidth,
      this.enemySet.spriteHeight,
      correctX,
      correctY,
      this.enemySet.spriteWidth,
      this.enemySet.spriteHeight
    );

    this.enemySet.holdCounter++;
    if (this.enemySet.holdCounter % this.enemySet.hold === 0) {
      this.currentFrame++;
    }
    if (this.currentFrame === this.enemySet.frames - 1) {
      this.currentFrame = 0;
    }
  }

  drawHealthBar() {
    const referenceX = this.x - this.enemySet.spriteWidth / 2;
    const referenceY = this.y - this.enemySet.spriteHeight / 2;
    const endBarX = referenceX + this.enemySet.spriteWidth;
    const HPCof = this.currentHealt / this.enemySet.maxHealth;
    const HPBarX = referenceX + this.enemySet.spriteWidth * HPCof;

    this.createBeveledRectangleContour(referenceX, referenceY, endBarX);
    this.ctx.fillStyle = 'rgb(70,91,196)';
    this.ctx.fill();
    this.ctx.stroke();

    this.createBeveledRectangleContour(referenceX, referenceY, HPBarX);
    this.ctx.fillStyle = 'rgba(53,211,30,0.82)';
    this.ctx.fill();
  }
  update() {
    this.draw();

    const waypoint = this.waypoints[this.weypointIndex];
    const nextWaypoint = this.waypoints[this.weypointIndex + 1];

    if (this.weypointIndex === 0) {
      this.offset = Math.floor(Math.random() * 31) + 16;

      this.x += waypoint.x;
      this.y = waypoint.y + this.offset;

      waypoint.y += this.offset;
      waypoint.x += this.offset;

      nextWaypoint.x += this.offset;
      nextWaypoint.y += this.offset;
      this.weypointIndex += 1;
    } else {
      const xDistance = waypoint.x - this.x;
      const yDistance = waypoint.y - this.y;

      const directionAngle = Math.atan2(yDistance, xDistance);
      const xVelocity = Math.cos(directionAngle) * this.speed;
      const yVelocity = Math.sin(directionAngle) * this.speed;

      this.x += xVelocity;
      this.y += yVelocity;

      const xAbsoluteDiff = Math.abs(Math.round(this.x) - waypoint.x);
      const yAbsoluteDiff = Math.abs(Math.round(this.y) - waypoint.y);

      if (xAbsoluteDiff < Math.abs(xVelocity) &&
        yAbsoluteDiff < Math.abs(yVelocity) &&
        this.weypointIndex < this.waypoints.length - 1) {

        nextWaypoint.x += this.offset;
        nextWaypoint.y += this.offset;
        this.weypointIndex += 1;
      }
    }
  }

  createBeveledRectangleContour(x, y, endX) {
    this.ctx.beginPath();
    this.ctx.moveTo(x, y + 2);
    this.ctx.quadraticCurveTo(x, y, x + 2, y);
    this.ctx.lineTo(endX - 2, y);
    this.ctx.quadraticCurveTo(endX, y, endX, y + 2);
    this.ctx.lineTo(endX, y + 6);
    this.ctx.quadraticCurveTo(endX, y + 8, endX - 2, y + 8);
    this.ctx.lineTo(x + 2, y + 8);
    this.ctx.quadraticCurveTo(x, y + 8, x, y + 6);
    this.ctx.lineTo(x, y + 2);
  }
}
