background(219, 255, 255);

//roof
fill(171, 29, 0);
triangle(200, 28, 350, 150, 50, 150);

//house
fill(255, 255, 255);
rect(60, 150, 280, 207);

//bricks
fill(135, 81, 54);
for(var i=60; i<325; i+=20){
    for (var j=150; j<352; j+=10){
        rect(i, j, 20, 10);
    }
}

//door
fill(171, 29, 0);
rect(180, 283, 40, 77);

//windows
var pos=100;
while(pos<273){
    image(getImage("cute/WindowTall"), pos, 176, 60, 80);
    pos+=135;
}

//fence
strokeWeight(12);
stroke(94, 74, 28);

var fence = 320;
//horizontal lines of fence
for (var i=0; i< 2; i++){
    line(0, fence, 55, fence);
    line (347, fence, 400, fence);
    fence= fence + 20;
}

strokeWeight(8);
//vertical lines before house
for (var fence1=0; fence1<55; fence1+=20){
    line(fence1, 320, fence1, 355);
}
//vertical lines after house
for (var fence2=347; fence2<400; fence2+=20){
    line(fence2, 320, fence2, 355);
}

//grass
var grass=0;
while(grass<380){
    image(getImage("cute/GrassBlock"), grass, 341, 40, 60);
    grass+=40;
}

//trees
for (var tree=86; tree<300; tree+=151){
 
    image(getImage("cute/TreeShort"), tree, 304, 82, 100);
}
