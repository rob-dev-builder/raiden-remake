function Flower(x, y) {
  // the x and y params allow the program to setup randon locations for the flowers

  this.x = x
  this.y = y
  this.r = 30

  this.xdir = 1

  this.grow = function() {
    this.r = this.r + 2
  }

  this.shiftDown = function() {
    this.xdir *= -1
    this.y += this.r
  }

  this.move = function(dir) {
    this.x = this.x + this.xdir // move x direction
  }

  this.show = function() {
    noStroke()
    fill(255, 0, 200, 150)
    rectMode(CENTER) // draw rectange via centre
    ellipse(this.x, this.y, this.r * 2, this.r + 2)
  }
}
