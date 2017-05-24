var ship
var flowers = []
var drops = []

var playerOneImg
var playerLeftImg
var playerRightImg

var enemyShipImg
var playerLaserImg

function preload() { // p5 function used for loading images and sound files
  playerOneImg  = loadImage("objects/images/player.png")
  playerLeftImg  = loadImage("objects/images/playerLeft.png")
  playerRightImg = loadImage("objects/images/playerRight.png")
  playerLaserImg = loadImage("objects/images/laserRed.png")

  enemyShipImg = loadImage("objects/images/enemyShip.png")
}

function setup() {
  createCanvas(600, 800)
  ship = new Ship()  // create ship object with image

  for (var i = 0; i < 5; i++) { // create an array of flowers
    let randomHeight = random(-200, 100)
    let randomWidth = random(0,300)
    flowers[i] = new Flower(randomWidth, randomHeight,enemyShipImg) // create flowers with random height
    // flowers[i] = new Flower(i * 80 + 90, randomHeight,enemyShipImg) // create flowers with random height
    // set  width location for flowers
    // the i*80+80 allows the flowers to be evenly spaced out
  }

}

function draw() {
  background(51)
  ship.show(playerOneImg)
  ship.move()

  for (var i = 0; i < drops.length; i++) {  // loop through all the drops
    drops[i].show()
    drops[i].move()
    for (var j = 0; j < flowers.length; j++) { // while looping through all the drops do a loop through all the flowers
      if (drops[i].hits(flowers[j])) { // collision detection is true
        flowers[j].grow() // make flower grow on collision
        drops[i].evaporate() // remove drop on collision
        flowers.splice(0,1) // remove flower from array (destroyed)
        console.log('length of flowers '+ flowers.length)
      }
    }
  }

  var edge = false // check to see if flowers have hit an edge

  for (var i = 0; i < flowers.length; i++) {
    flowers[i].show()
    flowers[i].move()
    if (flowers[i].x > width || flowers[i].x < 0) { // Determine if line of flowers has hit the edge of screen.
      edge = true
    }
  }

  if (edge) { // if any flowers hit the edge then all the flowers should shift down
    for (var i = 0; i < flowers.length; i++) {
      flowers[i].shiftDown()
    }
  }

  for (var i = drops.length - 1; i >= 0; i--) { // walk down the array from the end. This is to make sure we dont miss any elements in the array as they get removed.
    if (drops[i].toDelete) { // if drop is to be deleted then remove from array
      drops.splice(i, 1) // splice object out of array
    }
  }

}

function keyReleased() {

  if (key != ' ') { // as long as key is not space bar then
    ship.setDir(0) // when a key is released stop moving ship
  }

}

function keyPressed() {
  if (key === ' ') { // if space bar is pressed the fire water drop
    var drop = new Drop(ship.x, height - 100, playerLaserImg) // start drop at ships x location
    drops.push(drop)
  }
  if (keyCode === RIGHT_ARROW) {
    console.log('moving right')
    ship.show(playerRightImg)
    ship.setDir(1) // 1 means move to the right
  } else if (keyCode === LEFT_ARROW) {
    console.log('moving left')
    ship.show(playerLeftImg)
    ship.setDir(-1) // -1 move to the left
  }
}
