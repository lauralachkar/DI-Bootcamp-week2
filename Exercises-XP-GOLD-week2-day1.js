//Exercise 1

let sentence = ["my","favorite","color","is","blue"];
console.log(sentence.join());

//Exercise 2

let str1 = "mix";
let str2 = "pod";

let finalString = str2 + ' ' + str1
console.log(finalString)

//calculator exercise
const num1 = "number";
const num2 = "number";


function calculate(number1,number2,operator){
    if (!number1 || !number2){
        return "Invalid number"
    }
    if (!['*','-','/','+'].includes(operator)){
        return "Invalid operator"
    }
    switch(operator){
        case "+":
            return number1 + number2;
        case "/":
            return number1 * number2;
        case "*":
            return number1 * number2;
        case "-":
            return number1 - number2;

    }
}

console.log(calculate(5,6,"-"))
