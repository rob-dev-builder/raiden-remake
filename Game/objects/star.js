function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  // this.x = 300
  // this.y = 400

   this.ydir = 5

  this.move = function() {
      this.y = this.y + this.ydir
      // if this.y = height then set height back to 0 again. This should 'recycle' stars back to top of screen
  }

  this.show = function() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, 5, 5)
  }
}
