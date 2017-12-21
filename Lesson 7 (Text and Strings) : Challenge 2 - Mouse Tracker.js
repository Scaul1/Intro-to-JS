//colour of point and text
fill(255, 0, 255);

draw = function() {
    //background
    background(255, 255, 255);
    //position of ellipse
    ellipse(mouseX, mouseY, 12, 12); 
    //writing the position of the ellipse
    var label = mouseX + ", " + mouseY;
    text(label, mouseX, mouseY);
};
