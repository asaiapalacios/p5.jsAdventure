var snowColor = 255;

// Place snowman in the canvas
function SnowMan() {
  var centerX = screenWidth/2;
  var centerY = screenHeight/2 + 240;
  var offsetHand = 30;

  stroke(210); // Outline the snowman, hands, & subsequently some snowflakes
  fill(snowColor);

  // Three ellipses for the snowman (x,y,width,[height]) 
  ellipse(centerX,625,100,100); // Bottom
  ellipse(centerX,centerY,80,80); // Middle
  ellipse(centerX,500,60,60); // Head
  
  // Place snowman hands
  line(centerX-100,centerY-offsetHand,centerX-40,centerY - 15);
  line(centerX+100,centerY-offsetHand,centerX+40,centerY - 15);
}