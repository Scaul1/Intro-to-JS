//array containing animal types
var animals = ["dogs", "horses", "monkeys", "dolphin", "cat"];

//counter
var animalsNum = 0;

//while the counter is less than the lenght of the array
while(animalsNum< animals.length){
    //display animal name
    fill(255, 0, 0);
    text(animals[animalsNum], 10, 20 + animalsNum*83);
    //increasing counter
    animalsNum++;
}
