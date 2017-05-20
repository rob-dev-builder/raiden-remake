function Ship() {
  this.x = width/2
  this.xdir = 0

  this.show = function() {
    fill(255)
    rectMode(CENTER) // draw rectange via centre
    rect(this.x, height-20, 20, 60) // ship is rectangle. Sits at bottom 20 px up
  }

  // this function receives a value and sets this objects x direction to that value
  // this improves interactively so the ship moves smoothly across the screen
  this.setDir = function(dir){
    this.xdir = dir
  }

  this.move = function(dir) {
    this.x += this.xdir*5
  }
}
