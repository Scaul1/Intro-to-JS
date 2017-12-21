var wordFunction = function() {
    //randomizing x and y position
    var textX = random(0, 400);
    var textY = random(10, 400);
    //storing my name as a variable
    var yourName = "Sydney";
    //displaying the text
    fill(255, 0, 0);
    textSize(30);
    text("Hiiii, " + yourName, textX, textY);
};

//calling word function to display name
wordFunction();
wordFunction();
wordFunction();
wordFunction();
wordFunction();


