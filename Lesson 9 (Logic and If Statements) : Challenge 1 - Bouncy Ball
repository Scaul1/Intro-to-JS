// position of the ball
var y = 0;
// how far the ball moves every time
var speed = 2;

draw = function() {
    background(127, 204, 255);
    //drawing ball
    fill(66, 66, 66);
    ellipse(200, y, 50, 50);
    
    //if the ball hits the bottom
    if (y>375) {
        
        speed = -2;
    }
    //if the ball hits the top
    if (y<25) {
        
        speed = 2;
    }

    // move the ball
    y = y + speed;
};
