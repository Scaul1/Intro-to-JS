//click anywhere on the canvas to make it rain colourful raindrops and jewels!!!!!!

//declaring arrays
var xPositions = []; //xposition of drops
var yPositions = []; //yposition of drops
var colour1 = []; 
var colour2 = [];
var colour3 = [];

draw = function() {
    background(204, 247, 255);
    
    //adds the coordinates of the mouse to the array and random colours to the colour arrays 
    mouseClicked = function()
        {
            xPositions.push(mouseX);
            yPositions.push(mouseY);
            colour1.push(random(0, 300));
            colour2.push(random(0, 300));
            colour3.push(random(0, 300));
        };
    
    //creating raindrops
    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(colour1[i], colour2[i], colour3[i]);
       
        if (i<0)
        {
        ellipse(xPositions[i], yPositions[i], 10, 10);
        }
        else 
        {
            //gem raindrops
            if (i%2===0)
            {
                image(getImage("cute/GemBlue"), xPositions[i], yPositions[i], 18, 25);
            }
            //regular raindrops
            else if (i%2!==0)
            {
                ellipse(xPositions[i], yPositions[i], 10, 10);
            }
        }
        //increasing y positions so that rain falls
        yPositions[i] += 2;
        
        //if drops reach bottom of the screen, they restart at position 0
        if (yPositions[i] > 400)
        {
            yPositions[i]=0;
        }
    }
};
