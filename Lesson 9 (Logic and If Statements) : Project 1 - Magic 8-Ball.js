//background
background(24, 34, 125);

//instructions
fill(255, 255, 255);
text("Click your mouse to get an answer from the magic 8 ball", 10, 30, 400, 40);

//stars
image(getImage("space/star"), 15, 41, 42, 42);
image(getImage("space/star"), 276, -8, 42, 42);
image(getImage("space/star"), 10, 187, 42, 42);
image(getImage("space/star"), 0, 231, 48, 53);
image(getImage("space/star"), 113, 0, 31, 24);
image(getImage("space/star"), 335, 262, 42, 42);

//table 
fill(69, 52, 12);
rect(0, 360, 400, 40);

//outputting answer
mouseClicked = function(){
    
//creating 8-ball image
fill(0, 0, 0);
ellipse(200, 200, 310, 310);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);

//outputting randomized answers
fill(255, 255, 255);
var answer = floor(random(1, 6));
if (answer === 1) {
    text("NOT YET", 176, 200);
    text("IMPLEMENTED", 159, 229); 
}
else if (answer === 2) {
    text("Don't count", 173, 200);
    text("on it", 191, 229);
}
else if (answer === 3) {
    text("Better not", 176, 200);
    text(" tell you yet", 169, 229);
}
else if (answer === 4) {
    text("Without a", 176, 200);
    text("doubt", 186, 229);
}
else if (answer === 5) {
    text("Outlook is", 176, 200);
    text("good", 186, 229);
}
};
