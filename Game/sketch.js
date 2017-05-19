var ship
var flowers = []
var drops = []

function setup() {
 createCanvas(600, 400)
 ship = new Ship()
 // drop = new Drop(width/2, height/2) // drop starting location
 for (var i = 0; i < 6; i++){ // create an array of flowers
    flowers[i] = new Flower(i*80+80,60)
    // set  width location for flowers
    // the i*80+80 allows the flowers to be evenly spaced out
 }

}

function draw() {
 background(51)
 ship.show()

 for (var i = 0; i < drops.length; i++){
    drops[i].show()
    drops[i].move()

    for (var j = 0; j < flowers.length; j++){
       if (drops[i].hits(flowers[j]))  //collision detection
       console.log("WATERING")
    }
 }

 for (var i = 0; i < flowers.length; i++){
   flowers[i].show()
 }


}

function keyPressed() {
 if (key === ' '){
    var drop = new Drop(ship.x,height) // start drop at ships x location
    drops.push(drop)
 }
  if (keyCode === RIGHT_ARROW){
    ship.move(1) // 1 means move to the right
  } else if (keyCode === LEFT_ARROW) {
    ship.move(-1) // -1 move to the left
  }
}
