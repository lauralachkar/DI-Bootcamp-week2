// Exercise 1

let response = prompt("Which language do you speak")
let  firstResponse = response.toLowerCase();
let  secondResponse = "French";
let  thirdResponse = "English";
let  lastResponse = "Hebrew";


if(response === firstResponse) {
    console.log(response)
} else if(response !== firstResponse){
    console.log("FALSE")
}

if (response === secondResponse){
    console.log("Bonjour")
}else{
    console.log("FALSE")
}

if (response === thirdResponse){
    console.log("Hello")
}else{
    console.log("FALSE")
}


if (response === lastResponse){
    console.log("Shalom")
}else{
    console.log("FALSE")
}

if(response === secondResponse || response === thirdResponse || response === lastResponse ){
    console.log("01110011 01101111 01110010 01110010 01111001")
}else{
    console.log("FALSE")
}


//Exercise 2

let question = prompt(`What is your grade ?`);
let lowestGrade = 80;
let highestGrade = 90;


if(question > 90){
    console.log("A")
}else {
    console.log("FALSE")
}

if(question <= lowestGrade && question <= highestGrade){
    console.log("B");
}else {
    console.log("FALSE")
}

if(question <= 70 && question <= 90){
    console.log("C");
}else {
    console.log("FALSE")
}



// exercise 3

let string = prompt("Please enter a sentence : " + "It has to be a verb");
let stringLength = string .length;
let checkLetter = string.endsWith("ing")
let addLetter = string.concat("ing")

if(stringLength >=3 && !checkLetter ){
    console.log(addLetter);
}else{
    console.log("FALSE")
}

if(stringLength >=3 && string.endsWith("ing") ){
    console.log(string.concat("ly"));
}else{
    console.log("FALSE")
}

if(stringLength <3){
    console.log(string)
}else {
    console.log("FALSE")
}

