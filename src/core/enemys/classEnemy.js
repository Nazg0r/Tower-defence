export default class Enemy {
  constructor(x = -200, y = 0, speed = 1, ctx, waypoints, enemySet) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.waypoints = waypoints;
    this.weypointIndex = 0;
    this.offset = 0;
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = enemySet.imageSrc;
    this.currentFrame = 0;
    this.enemySet = {
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
}
