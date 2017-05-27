let ship
let enemyWave = []
let playerLasers = []


let playerOneImg
let playerLeftImg
let playerRightImg

let enemyShipImg
let playerLaserImg

let stars = []


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

  let randomAmountOfEnemys = random(0, 1)

  for (let i = 0; i < randomAmountOfEnemys; i++) { // create an array of Enemy1s
    let randomHeight = random(10, 100)
    let randomWidth = random(0, 300)
    enemyWave[i] = new Enemy1(i * 90 + 90, randomHeight,enemyShipImg) // create enemyWave with random height
  }

}

function draw() {
  background(51)
  ship.show(playerOneImg)
  ship.move()



  for (let i = 0; i < playerLasers.length; i++) { // loop through all the playerLasers
  // for (let laser of playerLasers) { // loop through all the playerLasers
    playerLasers[i].show()
    playerLasers[i].move()
    for (let j = 0; j < enemyWave.length; j++) { // while looping through all the playerLasers do a loop through all the enemyWave
      if (playerLasers[i].hits(enemyWave[j])) { // collision detection is true
        enemyWave[j].grow() // make Enemy1 grow on collision
        playerLasers[i].evaporate() // remove playerLaser on collision
        enemyWave.splice(0, 1) // remove Enemy1 from array (destroyed)
        console.log('length of enemyWave ' + enemyWave.length)
      }
    }
  }

  let edge = false // check to see if enemyWave have hit an edge

  for (let i = 0; i < enemyWave.length; i++) {
    enemyWave[i].show()
    enemyWave[i].move()
    if (enemyWave[i].x > width || enemyWave[i].x < 0) { // Determine if line of enemyWave has hit the edge of screen.
      edge = true
    }
  }

  if (edge) { // if any enemyWave hit the edge then all the enemyWave should shift down
    for (let i = 0; i < enemyWave.length; i++) {
      enemyWave[i].shiftDown()
    }
  }

  for (let i = playerLasers.length - 1; i >= 0; i--) { // walk down the array from the end. This is to make sure we dont miss any elements in the array as they get removed.
    if (playerLasers[i].toDelete) { // if playerLaser is to be deleted then remove from array
      playerLasers.splice(i, 1) // splice object out of array
    }
  }

 // code for stars
  // speed = map(mouseX, 0, width, 0, 50);
  // translate(width / 2, height / 2);
  for (let i = 0; i < 100; i++) {
    stars[i] = new Star
    // stars[i].move();
    stars[i].show();
  }

}

function keyReleased() {

  if (key != ' ') { // as long as key is not space bar then
    ship.setDir(0) // when a key is released stop moving ship
  }

}

function keyPressed() {
  if (key === ' ') { // if space bar is pressed the fire water playerLaser
    let playerLaser = new PlayerLaser(ship.x, height - 100, playerLaserImg) // start playerLaser at ships x location
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
