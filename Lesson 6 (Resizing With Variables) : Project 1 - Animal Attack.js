//declaring variable sizes and positions of bird and worms
var bodyX = 200;
var bodyY = 220;
var bodyW = 85;
var bodyH = 103;
var wormW = 10;
var wormH = 40;
var wormX = 349;
var wormY = 169;
var count = 0;
var num = random(8);

draw = function() {
    //grass
    background(28, 150, 53);
    fill(255, 255, 255);
    //instructions
text("How many worms does the bird eat before he is too full?", 10, 20, 400, 20);
    //bird colour and body
    fill(66, 72, 237);
    ellipse(bodyX, bodyY, bodyW, bodyH);
    //face
    ellipse(bodyX, bodyY-60, bodyW/2, bodyH/2);
    fill(255, 255, 255);
    //right eye
    ellipse(bodyX+8, bodyY-65, bodyW/10, 10);
    //left eye
    ellipse(bodyX-8, bodyY-65, bodyW/10, 10);
    fill(15, 2, 2);
    //right pupil
    ellipse(bodyX+8, bodyY-63, bodyW/39, 4);
    //left pupil
    ellipse(bodyX-8, bodyY-63, bodyW/39, 4);
    //beak
    triangle(bodyX, bodyY-55, bodyX, bodyY-45, bodyX+22, bodyY-48);
    //right wing
    triangle(bodyX+40, bodyY-11, bodyX+24, bodyY+4, bodyX+45, bodyY+23);
    //left wing
    triangle(bodyX-40, bodyY-11, bodyX-24, bodyY+4, bodyX-45, bodyY+23);
    
    //worm
    fill(128, 84, 46);
    ellipse(wormX, wormY, wormW, wormH);
    //moving worm
    wormX = wormX - 1;
    
    //if the worm reaches the bird
    if (wormX < 222){
        //resetting the position of worm
        wormX = 350;
        count++;
        //bird gets fatter
        bodyW += 10;
        bodyH += 10;
    
        println(num);
        //if the bird eats the number of birds, it stops growing
        if (count > num){
            noLoop();
        }
    }
};

