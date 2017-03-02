var snowColor = 255;

function SnowMan() {
  var centerX = screenWidth/2;
  var centerY = screenHeight/2 + 200;
  var offsetHand = 30;

  stroke(210);
	fill(snowColor);

  // Bottom circle (x,y,width,height) 
  ellipse(centerX,640,100,100);
  ellipse(centerX,centerY,80,80);
  ellipse(centerX,550,60,60);
  
  line(centerX-100,centerY-offsetHand,centerX-40,centerY - 15);
  line(centerX+100,centerY-offsetHand,centerX+40,centerY - 15);
}