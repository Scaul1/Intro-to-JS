//array containing fruits
var fruits = ["apples", "strawberries", "peaches"];
//displaying the words in the array
fill(255, 0, 0);
text(fruits[0], 10, 30);
text(fruits[1], 10, 60);
text(fruits[2], 10, 90);

//using the length of the array to say how many there are
text("These are my top " + fruits.length + " favourite fruits", 10, 116);
