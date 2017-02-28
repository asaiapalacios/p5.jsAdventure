// Initialize screen size
var screenWidth = 1024;
var screenHeight = 660;

// Initialize flake array
var flakeNumber = 100;
var flakes = [];

function setup() {
    // Create a canvas
    createCanvas(screenWidth, screenHeight);
    // Disable outline
    noStroke();

    for (var i = 0; i < flakeNumber; i++)
    {
      // Create a new snowflake
      flakes[i] = new SnowEffect();
      // Spawn snowflake randomly on the screen
      flakes[i].spawnRandom();
    }
}

function draw() {
    // Draw a background of color 45
    background(45);

    // Update and display the position of each snowflake
    for (var i = 0; i < flakeNumber; i++)
    {
      flakes[i].update();
      flakes[i].show();
    }
}