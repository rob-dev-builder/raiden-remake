function Drop(x, y){
  // the x and y params allow the program to setup randon locations for the drops

  this.x = x
  this.y = y
  this.r = 8

  this.show = function() {
    noStroke()
    fill(150,0,200)
    ellipse(this.x, this.y, this.r*2, this.r*2)
  }
  this.hits = function(flower) { // determine the distance between drop and flower
    var d = dist(this.x, this.y, flower.x, flower.y)
    if (d < this.r + flower.r){  // if distance between drop and flower radius is less than distance then return true
      return true
    } else {
      return false
    }

  }
  this.move = function(dir) {
    this.y = this.y - 5
  }
}
