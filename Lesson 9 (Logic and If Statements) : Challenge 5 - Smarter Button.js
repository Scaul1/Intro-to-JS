draw = function() {
    fill(0, 255, 68); // start color
    //if the mouse is pressed on the button
    if (mouseIsPressed && (mouseX>50) && (mouseX<300) && (mouseY>150) && (mouseY<250)) { 
        fill(33, 112, 52); // click color
    }
    rect(50, 150, 250, 100);  // the button

    // The button text
    fill(0, 0, 0);
    textSize(30);
    text("PRESS ME!", 93, 193);
};
