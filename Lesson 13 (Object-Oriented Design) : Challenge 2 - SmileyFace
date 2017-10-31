var SmileyFace = function(centerX, centerY) {
    this.centerX = centerX;
    this.centerY = centerY;
};

SmileyFace.prototype.draw = function() {
    fill(255, 234, 0);
    ellipse(this.centerX, this.centerY, 150, 150);
    fill(0, 0, 0);
    ellipse(this.centerX-30, this.centerY-30, 20, 20); 
    ellipse(this.centerX+30, this.centerY-30, 20, 20); 
    noFill(); 
    strokeWeight(3);
    arc(this.centerX, this.centerY+10, 64, 40, 0, 180); 
};

var smilyFry = new SmileyFace(150, 150);

SmileyFace.prototype.speak = function(talk){
    text(talk, this.centerX, this.centerY+100);
};

var face = new SmileyFace (200, 300);
face.draw();
face.speak("I'M SO HAPPY");

smilyFry.draw();
smilyFry.speak("ME TOOO");
