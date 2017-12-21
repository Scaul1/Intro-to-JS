//declaring variables for the center of frog's face
var x = 200;
var y = 250;

noStroke();
fill(30, 204, 91); // a nice froggy green!

ellipse(x, y, 200, 100); // face
ellipse(x - 50, y - 50, 40, 40); // left eye socket
ellipse(x + 50, y - 50, 40, 40); // right eye socket

fill(255, 255, 255); // for the whites of the eyes!
ellipse(x - 50, y - 50, 30, 30); // left eyeball
ellipse(x + 50, y - 50, 30, 30); // right eyeball


fill(8, 1, 1); //pupil color
rect(x-51, y-51, 10, 10); //left pupil
rect(x+51, y-51, 10, 10); //right pupil

ellipse(x, y, 138, 44); //mouth



