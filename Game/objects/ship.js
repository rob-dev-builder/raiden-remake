function Ship() {
  this.x = width/2

  this.show = function() {
    fill(255)
    rectMode(CENTER) // draw rectange via centre
    rect(this.x, height-20, 20, 60) // ship is rectangle. Sits at bottom 20 px up
  }

  this.move = function(dir) {
    this.x += dir*5
  }
}
