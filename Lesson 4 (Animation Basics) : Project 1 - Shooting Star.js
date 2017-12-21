//declaring variables
var xPos = 0;
var yPos = 200;
var moonRadius = 30;
var starRadius = 6;
var armX = 73;

draw = function() {
    //sky
    background(4, 7, 26);
    
    //girl
    fill(196, 158, 71);
    ellipse(100, 223, 10, 10);
    fill(255, 0, 0);
    triangle(101, 229, 108, 256, 91, 256);
    stroke(196, 158, 71);
    strokeWeight(2);
    line(79, 252, 94, 242);
    line(armX, 233, 105, 241);
    
    //moving arm
    armX+=0.4;
    
    if (armX>=120)
    {
        exit();
    }
    
    noStroke();
    
    //hill
    fill(17, 89, 14);
    ellipse(207, 399, 733, 293);

    //moon
    fill(232, 227, 227);
    ellipse(345, 100, moonRadius, moonRadius);

    //stars
    ellipse(100, 111, starRadius, starRadius);
    ellipse(131, 148, starRadius, starRadius);
    ellipse(257, 89, starRadius, starRadius);
    ellipse(39, 97, starRadius, starRadius);
    ellipse(372, 145, starRadius, starRadius);
    ellipse(159, 162, starRadius, starRadius);
    ellipse(279, 141, starRadius, starRadius);
    ellipse(128, 168, starRadius, starRadius);
    ellipse(81, 33, starRadius, starRadius);

    //shooting star
    fill(255, 242, 0);
    image(getImage("space/star"), xPos, yPos, 20, 20);
    
    //moving the star
    xPos+=4;
    yPos-=2;
};



