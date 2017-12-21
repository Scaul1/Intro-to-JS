draw = function() {
    //colour and outline of ball
    noStroke();
    fill(94, 0, 255);
    
    //if mouse is pressed, display ball at the position of the mouse
    if(mouseIsPressed){
    ellipse(mouseX, mouseY, 20, 20);

}
    };
