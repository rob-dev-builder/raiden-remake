var ship
var enemyWave = []
var playerLasers = []

var playerOneImg
var playerLeftImg
var playerRightImg

var enemyShipImg
var playerLaserImg

function preload() { // p5 function used for loading images and sound files
  playerOneImg = loadImage("objects/images/player.png")
  playerLeftImg = loadImage("objects/images/playerLeft.png")
  playerRightImg = loadImage("objects/images/playerRight.png")
  playerLaserImg = loadImage("objects/images/laserRed.png")

  enemyShipImg = loadImage("objects/images/enemyShip.png")
}

function setup() {
  createCanvas(600, 800)
  ship = new Ship() // create ship object with image

  let randomAmountOfEnemys = random(2, 20)

  for (var i = 0; i < randomAmountOfEnemys; i++) { // create an array of Enemy1s
    let randomHeight = random(-200, 100)
    let randomWidth = random(0, 300)
    enemyWave[i] = new Enemy1(randomWidth, randomHeight, enemyShipImg) // create enemyWave with random height
    // enemyWave[i] = new Enemy1(i * 80 + 90, randomHeight,enemyShipImg) // create enemyWave with random height
    // set  width location for enemyWave
    // the i*80+80 allows the enemyWave to be evenly spaced out
  }

}

function draw() {
  background(51)
  ship.show(playerOneImg)
  ship.move()

  for (var i = 0; i < playerLasers.length; i++) { // loop through all the playerLasers
    playerLasers[i].show()
    playerLasers[i].move()
    for (var j = 0; j < enemyWave.length; j++) { // while looping through all the playerLasers do a loop through all the enemyWave
      if (playerLasers[i].hits(enemyWave[j])) { // collision detection is true
        enemyWave[j].grow() // make Enemy1 grow on collision
        playerLasers[i].evaporate() // remove playerLaser on collision
        enemyWave.splice(0, 1) // remove Enemy1 from array (destroyed)
        console.log('length of enemyWave ' + enemyWave.length)
      }
    }
  }

  var edge = false // check to see if enemyWave have hit an edge

  for (var i = 0; i < enemyWave.length; i++) {
    enemyWave[i].show()
    enemyWave[i].move()
    if (enemyWave[i].x > width || enemyWave[i].x < 0) { // Determine if line of enemyWave has hit the edge of screen.
      edge = true
    }
  }

  if (edge) { // if any enemyWave hit the edge then all the enemyWave should shift down
    for (var i = 0; i < enemyWave.length; i++) {
      enemyWave[i].shiftDown()
    }
  }

  for (var i = playerLasers.length - 1; i >= 0; i--) { // walk down the array from the end. This is to make sure we dont miss any elements in the array as they get removed.
    if (playerLasers[i].toDelete) { // if playerLaser is to be deleted then remove from array
      playerLasers.splice(i, 1) // splice object out of array
    }
  }

}

function keyReleased() {

  if (key != ' ') { // as long as key is not space bar then
    ship.setDir(0) // when a key is released stop moving ship
  }

}

function keyPressed() {
  if (key === ' ') { // if space bar is pressed the fire water playerLaser
    var playerLaser = new PlayerLaser(ship.x, height - 100, playerLaserImg) // start playerLaser at ships x location
    playerLasers.push(playerLaser)
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
