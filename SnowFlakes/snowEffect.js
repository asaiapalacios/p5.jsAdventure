// Create a constructor function/class for a SnowEffect object
function SnowEffect() { // Note: JavaScript uses functions as classes
   /* 
   'this' refers to the new instance of the SnowEffect object that is being created.
   When the function includes 'this', it is saying all new instances will be
   automatically assigned the given properties and values upon instantiation.
   */
   this.x = 0;
   this.y = 0;
   this.z = 0;

   this.flakeOpacity = 0;
   this.flakeDiameter = 0;
   this.flakeBaseDiameter = 5;
   this.flakeSpeed = 0;
   this.flakeBaseSpeed = 1;

   /*
   Assign function definition to spawnRandom method.
   Note: We use 'this' to say that the method belongs to the obj being created.
   */
   
   // Set random properties for the flakes
   this.spawnRandom = function()

   {
     this.x = floor(random(0, screenWidth));
     this.y = 0;
     this.z = random(0, 1); // Assign a random value to give a sense of depth

     this.flakeOpacity = random(0, 1);
     this.flakeDiameter = this.flakeBaseDiameter + 10 * this.z;
     this.flakeSpeed = this.flakeBaseSpeed + 3 * this.z;
   }

   // Draw flakes  
   this.show = function()
   {
      fill('rgba(255, 255, 255, '+ this.flakeOpacity.toString() +')');
      ellipse(this.x, this.y, this.flakeDiameter, this.flakeDiameter);
   }

   // Update the current state of the flakes
   this.update = function()
   {
     if (this.y > screenHeight)
        this.spawnRandom();

     this.y += this.flakeSpeed;
   }
}