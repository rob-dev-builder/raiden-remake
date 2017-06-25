function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);

   this.ydir = 5

  this.move = function() {
      // Check if star has reached the end of the screen. If it has then move back to top of screen.
      // Else move the star down the screen.
      if (this.y >= height){
        this.y = 0
      } else{
        this.y = this.y + this.ydir
      }
  }

  this.show = function() {
    fill(250);
    noStroke();
    ellipse(this.x, this.y, 2, 2)
  }
}
