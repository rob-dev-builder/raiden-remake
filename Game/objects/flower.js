function Flower(x, y){
  // the x and y params allow the program to setup randon locations for the flowers

  this.x = x
  this.y = y
  this.r = 30

  this.show = function() {
    fill(255,0,200)
    rectMode(CENTER) // draw rectange via centre
    ellipse(this.x, this.y, this.r*2, this.r+2)
  }

  this.move = function(dir) {
    this.x += dir*5
  }
}
