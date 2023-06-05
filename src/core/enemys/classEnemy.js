export default class Enemy {
  constructor(x = -200, y = 0, width, height, speed = 1, ctx, waypoints) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.waypoints = waypoints;
    this.weypointIndex = 0;
    this.offset = 0;
    this.ctx = ctx;

  }

  draw() {
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  update() {
    this.draw();
    const waypoint = this.waypoints[this.weypointIndex];
    const nextWaypoint = this.waypoints[this.weypointIndex + 1];

    if (this.weypointIndex === 0) {
      this.offset = Math.floor(Math.random() * 31) + 16;

      this.x += waypoint.x;
      console.log(this.x);
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
