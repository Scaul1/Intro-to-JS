//function to add numbers
var add = function(num1, num2) {
    return num1 + num2;
};
//function to subtract numbers
var subtract = function(num1, num2) {
    return num1-num2;
};
//function to multiply numbers
var multiply = function(num1, num2) {
    return num1*num2;
};
//function to divide numbers
var divide = function(num1, num2) {
    return num1/num2;
};

//outputting text and passing two numbers to the math operation functions
fill(255, 0, 0);
text("15 + 3 is " + add(15, 3), 10, 20);
text("15 - 3 is " + subtract(15, 3), 10, 50);
text("15 * 3 is " + multiply(15, 3), 10, 80);
text("15 / 3 is " + divide(15, 3), 10, 110);

text("8 + 4 is " + add(8, 4), 10, 170);
text("8 - 4 is " + subtract(8, 4), 10, 200);
text("8 * 4 is " + multiply(8, 4), 10, 230);
text("8 / 4 is " + divide(8, 4), 10, 260);