draw = function() {
    //drawing the background and the card
    background(165, 219, 162);
    fill(255, 254, 222);
    rect(20, 100, 364, 200);

    fill(0, 0, 0);
    textSize(20);
    //if the mouse is pressed, output the answer
    if (mouseIsPressed){
        text("JavaScript!", 39, 200);
    }
    //if the mouse is not pressed then show the question
    else{
        text("What programming language is this?", 39, 200);
    }
};
