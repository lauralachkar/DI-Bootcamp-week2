function beerSong() {
    let bottles;
    let bottlesLeft;
    for (i = 99; i >= 1; i--) {
        if (i == 1) {
            bottles = "bottle";
            bottlesLeft = "No bottles of beer on the wall!";
        } else {
            bottles = "bottles";
            bottlesLeft = i - 1 + " bottles of beer on the wall!";
        } console.log(i+ " " + bottles + " of beer on the wall,");
        console.log(i+ " " + bottles + " of beer,");
        console.log("Take one down, pass it around,");
        console.log(bottlesLeft);
    }

}
 console.log(beerSong());


// I create 2 variables: 1 for bottles and 1 for bottles left, since they will be different each time. Next I use a
// for loop: I set i to 99 because that’s where we will begin, my stopping condition is when i reaches 1, and for each
// iteration I want to count down i-1. I next use an if statement for when i=1, since that will be the last verse, and
// for every other number of the iteration. Lastly, I use console.log to display the verses of the song.

