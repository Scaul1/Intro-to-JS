background(130, 243, 245);
//instructions for user
text("Press your mouse or any key on your keyboard!", 5, 20);

//sand
noStroke();
fill(227, 190, 148);
rect(0, 343, 400, 106);

//drawing fish function
mouseClicked = function() {
    //declaring variables
    var centerX = mouseX;
    var centerY = mouseY;
    var bodyLength = 118;
    var bodyHeight = 74;
    var bodyColor = random(100, 200);
    var position = random(100, 200);
    
    noStroke();
    fill(200, bodyColor, bodyColor);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    var tailWidth = bodyLength/4;
    var tailHeight = bodyHeight/2;
    triangle(centerX-bodyLength/2, centerY,
             centerX-bodyLength/2-tailWidth, centerY           -tailHeight,
             centerX-bodyLength/2-tailWidth, centerY           +tailHeight);
    // eye
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5,       bodyHeight/5);
    
};  

//bubbles function
keyPressed = function(){
    fill(130, 243, 245);
    strokeWeight(2);
    stroke(10, 1, 1);
    ellipse(mouseX, mouseY, 12, 12); 
};

//seaweed function
var posX;
var posY;
var seaweed = function(posX, posY){
    fill(8, 77, 10);
    triangle(posX, posX+378, posY, posY+362, posX+10, 247);
};

//drawing seaweed
seaweed(20, 40);
seaweed(160, 180);
seaweed(100, 120);
seaweed(240, 160);
seaweed(70, 90);
seaweed(280, 300);
seaweed(200, 220);
seaweed(380, 400);
         
