//object containint properties of the paint brush
var paintBrush = {
    x: 220,
    y: 260,
    img: getImage("avatars/mr-pink-green")
};

//function to  display the face
var paintCanvas = function() {
    imageMode(CENTER);
    image(paintBrush.img, paintBrush.x, paintBrush.y);
};

//function for if the mouse is being moved
mouseMoved = function() {
    //change the x and y position to the positions of the mouse
    paintBrush.x = mouseX;
    paintBrush.y = mouseY;
    paintCanvas();
};
