/*
  Snowing effect using the p5.js library
  Starting point/source of inspiration:
  https://alexdudescu.wordpress.com/2017/01/17/1-snowing-effect/
*/

// Declare and initialize screen size
var screenWidth = 1024;
var screenHeight = 660;

// Declare and initialize flake array
var flakeNumber = 100;
var flakes = [];

function setup() {
    createCanvas(screenWidth, screenHeight);
    noStroke(); // Disable outline

    for (var i = 0; i < flakeNumber; i++) {
      flakes[i] = new Flake(); // Make 100 new flakes in this array
      // Spawn snowflake randomly on the screen
      flakes[i].spawnRandom();
    }
}

function draw() {
    background(50, 122, 193);

    // Display and update the position of each snowflake
    for (var i = 0; i < flakeNumber; i++) {
      flakes[i].show();
      flakes[i].update();
    }
}
