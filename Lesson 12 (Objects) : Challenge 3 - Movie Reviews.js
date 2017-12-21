//array containing objects
var movies = [
    //first object containing info on Magic Dragon
    {
        title: "Puff the Magic Dragon",
        review: "Best movie ever!!"
    },
    //second object containing info on Zootopia
    {
        title: "Zootopia",
        review: "Actual best movie ever"
    }
];

//loop display information 
for (var i = [0]; i<movies.length; i++)
{
fill(84, 140, 209);
textAlign(CENTER, CENTER);

textSize(20);
text(movies[i].title, 200, 100*i+20);

textSize(12);
text(movies[i].review, 200, 100*i+40);
}
