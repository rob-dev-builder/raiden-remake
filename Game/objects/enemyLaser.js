function EnemyLaser(x, y, img) {
  // the x and y params allow the program to setup randon locations for the enemy lasers

  this.x = x
  this.y = y
  this.r = 8
  this.img = img
  this.toDelete = false

  this.show = function() {
    image(img, this.x, this.y)
  }

  this.evaporate = function() {
    this.toDelete = true
  }

  this.hits = function(player) { // determine the distance between enemy laser and player for collision detection
    var d = dist(this.x, this.y, player.x, player.y) // get the distance between enemy laser and player object
    if (d < this.r + player.r) { // if distance between enemy laser and player radius is less than distance then return true
      return true // collision detected
    } else {
      return false // no collision detected
    }

  }
  this.move = function(dir) {
    this.y = this.y + 5 // move enemy laser speed
  }
}
