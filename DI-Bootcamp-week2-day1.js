// Exercise 1
let firstSentence = "I eat pasta ";
let secondSentence = "at every dinner";
console.log(firstSentence + secondSentence)


// second Exercise

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesSentence = myWatchedSeries;
console.log("I watched 3 series :" + myWatchedSeriesSentence);

//Part2

const index =  myWatchedSeries.indexOf('the big bang theory');
if (index !== -1) {
    myWatchedSeries[index] = 'friends';
}
console.log(myWatchedSeries);


// replace the last value by another one
let lastElement = myWatchedSeries;
lastElement[myWatchedSeries.length] ="Harro";
console.log(lastElement);
// add two other values at the beginning of the existing array
let firstElement = myWatchedSeries;
firstElement.unshift("Heroes","Sex and The City");
console.log(firstElement)


// delete specific value in a array
const deleteObject = myWatchedSeries;
const target = "black mirror";
let i = 0;
while (i < deleteObject.length) {
    if (deleteObject[i] === target) {
        deleteObject.splice(i, 1);
    } else {
        ++i;
    }
}
console.log(deleteObject);

//Exercise 3


//For an exact conversion (Fahrenheit to Celsius / Celsius to Fahrenheit) the following formulas can be applied :
//Fahrenheit to Celsius : (°F − 32) ÷ 1.8 = °C
//Celsius to Fahrenheit : (°C × 1.8) + 32 = °F

//An approximate conversion between degrees Celsius and degrees Fahrenheit is as follows :
//Fahrenheit to Celsius : Subtract 30 and halve the resulting number.
//Celsius to Fahrenheit : Double the number and add 30.


//convert celsius to fahrenheit
function cToF(celsius)
{
    const cTemp = celsius;
    const cToFahr = cTemp * 9 / 5 + 32;
    const message = `${cTemp}\xB0C is ${cToFahr} \xB0F.`;
    console.log(message);
}

cToF(60);

//convert fahrenheit to celsius
//function fToC(fahrenheit)
//{
    //const fTemp = fahrenheit;
    //const fToCel = (fTemp - 32) * 5 / 9;
    //const message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    //console.log(message);
//}
//fToC(45);


// Exercise Four

let c;
let a = 34;
let b = 21;

a = 2;


//1
// The first result will be 55

//2
// The second result will be 23 because the value of the variable is now 2
// and 21 + 2 will give 23

//3
// The value of C is undefined because C doesn't contain any value


//Exercise 5

//Typeof(15)
// The output will be number

//typeof(5.5)
// The output will be floating

//typeof(NaN)
// The output will be undefined when NaN values are generated when arithmetic operations
// result in undefined or unrepresentable values .

//typeof("hello")
// the output will be string


//typeof(true)
//The output will be boolean


//typeof(1 != 2)
// The output will be boolean


//"hamburger" + "s"
//the output will be hamburgers


//"hamburgers" - "s"
//the output will be NaN


//"1" + "3"
//the output will be 13 as a string


//"1" - "3"
// the output will be -2 as a string


//"johnny" - 5
//the output will be NaN


//99 * "hello"
//the output will be NaN


//1 != 1
//the output will be false


//1 == "1"
//the output will be true


//(1 === "1")
//the output will be false


// Exercise six

//5 + "34"
//the output will be 534



//!true
//the output will be false


//5 - "4"
//the output will be 1


//10 % 5
//the output will be 0


//5 % 10
//the output will be 5


//"Java" + "Script"
//the output will be JavaScript


//" " + " "
//the output will be nothing


//" " + 0
//the output will be 0

//true + true
//the output will be 2

//true + false
//the output will be 1

//false + true
//the output will be 1

//false - true
//the output will be -1


//3 - 4
//the output will be -1


//"Bob" - "bill"
//the result will be NaN