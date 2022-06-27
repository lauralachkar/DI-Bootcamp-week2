//Exercise 1

let x = 5;
let y = 2;

if(x > y){
    console.log("X is the biggest number")
}else{
    console.log("ERROR !!!!")
}


//Exercise2

let newDog ="Chihuahua";
let value = "Chihuahua";

function char_count(str, letter)
{
    let letter_Count = 0;
    for (let position = 0; position < str.length; position++)
    {
        if (str.charAt(position) === letter)
        {
            letter_Count += 1;
        }
    }
    return letter_Count;
}

console.log(char_count( newDog));


let toUpperCase = newDog.toUpperCase()
console.log(toUpperCase)
let lowerCase = newDog.toLowerCase()
console.log(lowerCase)



if([value].includes(newDog)){
    console.log("variable is equal to at least one of his value")
}else{
    console.log("variable is not equal to any of his values")
}

//Exercise 3

function oddOrEven(x) {
    // First, check if number is integer. If not,
    // keyword return stops function processing
    // and a console error is created
    if(!Number.isInteger(x)){
        return console.error("Not an integer ")
    }
    // Checks the remainder of the number passed
    // into the function if divided by 2. If it
    // is 0, the if statement is executed, if it
    // is not, the else statement runs.
    if(x % 2 === 0){
        console.log("the number is even")
    } else {
        console.log("The number is odd");
    }
}

oddOrEven(2)
oddOrEven(3)
oddOrEven(0)
oddOrEven(15)
oddOrEven(0.5)



