//Exercise 1

function checkStringIsEmpty(string){
    if(string.length === 0){
        console.log("STING IS EMPTY")
    }else{
        console.log("STRING IS NOT EMPTY")
    }
}

checkStringIsEmpty("It's a good day")
checkStringIsEmpty("")

//Exercise 2

abbrev_name = function(string){
    let split_names = string.trim().split("");
    if (split_names.length > 1){
        console.log(split_names[0] + " " + split_names[1].charAt(0) + ".")
    }
    console.log(split_names[0])
}

console.log(abbrev_name("Robin Singh"));


//Exercise 3

let string = "The Quick Brown Fox";
let UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let result = []

for (let i = 0 ; i < string.length; i++){
    if (lower.indexOf(string[i]!==-1)){
        result.push(string[i].toUpperCase())
    }else if(UPPER.indexOf(string[i] !== -1)){
        result.push(string[i].toLowerCase())
    }else {
        result.push(string[i])
    }
}

console.log(result.join(""))


//Exercise 4


let arr = [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]];



function isOmnipresent(arr, val) {

    for (let i = 0; i < arr.length; i++) {

        if (!arr[i].includes(val)) {
            console.log("FALSE")
        }
    }
    console.log("TRUE");
}

isOmnipresent(arr)