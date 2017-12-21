//background and line colour
background(255, 255, 247);
stroke(173, 222, 237);

//horizontal lines
for (var i=0; i < 20; i++) {
    var lineY = 20 + (i * 20);
    line(0, lineY, 400, lineY);
}
//vertical lines
for (var y=0; y<20; y++){
    
    var lineX = 20 + (y*20);
    
    line(lineX, 0, lineX, 400);
}



