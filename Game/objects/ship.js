function Ship(img) {
  this.x = width / 2
  this.xdir = 0
  this.img = img


  this.show = function() {
    imageMode(CENTER) // this is a p5 function. draw image via centre
    image(img, this.x, height - 50) // ship is positioned at bottom 50 px up.
  }

  // this function receives a value and sets this objects x direction to that value
  // this improves interactively so the ship moves smoothly across the screen
  this.setDir = function(dir) {
    this.xdir = dir
  }

  this.move = function(dir) {
    this.x += this.xdir * 5
  }
}
