function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);

  this.ydir = 1

  this.move = function() {
      this.y = this.y + this.ydir
  }

  this.show = function() {
    fill(255);
    noStroke();
  }
}
