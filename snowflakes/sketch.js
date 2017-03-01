/*
  Snowing effect using the p5.js library
  Starting point/source of inspiration:
  https://alexdudescu.wordpress.com/2017/01/17/1-snowing-effect/
*/

// Initialize screen size
var screenWidth = 1024;
var screenHeight = 660;

// Initialize flake array
var flakeNumber = 100;
var flakes = [];

function setup() {
    createCanvas(screenWidth, screenHeight);
    noStroke(); // Disable outline

    for (var i = 0; i < flakeNumber; i++) {
      flakes[i] = new Flake(); // Create instance of a snowflake (flakeNumber = 100)
      // Spawn snowflake randomly on the screen
      //flakes[i].spawnRandom();
    }
}

function draw() {
    background(45);

    // Update and display the position of each snowflake
    for (var i = 0; i < flakeNumber; i++) {
      flakes[i].update();
      flakes[i].show();
    }
}
