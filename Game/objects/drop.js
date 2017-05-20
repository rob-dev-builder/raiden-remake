function Drop(x, y, img) {
  // the x and y params allow the program to setup randon locations for the drops

  this.x = x
  this.y = y
  this.r = 8
  this.img = img
  this.toDelete = false

  this.show = function() {
    // noStroke()
    // fill(150, 0, 200)
    // ellipse(this.x, this.y, this.r * 2, this.r * 2)
    image(img, this.x, this.y)
  }

  this.evaporate = function() {
    this.toDelete = true
  }

  this.hits = function(flower) { // determine the distance between drop and flower for collision detection
    var d = dist(this.x, this.y, flower.x, flower.y) // get the distance between drop and flower object
    if (d < this.r + flower.r) { // if distance between drop and flower radius is less than distance then return true
      return true  // collision detected
    } else {
      return false  // no collision detected
    }

  }
  this.move = function(dir) {
    this.y = this.y - 5 // move drop speed
  }
}
