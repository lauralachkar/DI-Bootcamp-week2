//Exercise 1

//5 >= 1
//true
//0 === 1
//false
//4 <= 1
//false
//1 != 1//
//FALSE
//"A" > "B"
//false
//"B" < "C"
//true
//"a" > "A"
//true
//"b" < "A"
//false
//true === false
//false
//true != true
//false


//Exercise 3

let sentence = "I love the movie named Nemo";
let findWordIndex = sentence.indexOf("Nemo")
console.log(findWordIndex)
let lastString = "I found Nemo at [index 23]"
console.log(lastString)


//Exercise 4

function checkBiggerOrLowest(a,b){
    if(a < 2 || b < 2){
        console.log("BOOM")
    }else if(a > 2 || b > 2){
        console.log(a || b )
    }

}

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
        console.log("This number is divisible by 2 !!!")
    } else if (x % 5 === 0){
        console.log("THIS NUMBER IS DIVISIBLE BY 2");
    }else if (x % 2 === 0 && x % 5 === 0){
        console.log("THIS NUMBER IS DIVISIBLE BY 2 AND 5 !!!" )
    }
}

oddOrEven(0.5);
oddOrEven(0.1);
oddOrEven(100);
oddOrEven(20);


checkBiggerOrLowest(10,1)
checkBiggerOrLowest(20,30)
checkBiggerOrLowest(9,6)