//Exercise 1

let min = 0;
let max = 100;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber)

//Exercise 3

let str = "Hello word";

function checkPalindrome(str){
    debugger;
    let len = str.length;
        for( let i = 0; i < len/2; i++){
            if(str[i] !== str[len - 1 - i]) {
                console.log("it's not a palindrome string ")
            }
            else{
                console.log("its's a palindrome string ")
            }
        }
    }

checkPalindrome(str)


//Exercise 4

function checkBiggestNumber(array){
    let findBiggestNumber = Math.max(...array)
    console.log("Biggest number :" + findBiggestNumber)
}

checkBiggestNumber([-1,0,3,100, 99, 2, 99])


function getUniqueValues(array){
    let unique = array.filter((item, i, ar) => ar.indexOf(item) === i);
    console.log("Unique value:" + unique)
}

getUniqueValues([-1,0,3,100, 99, 2, 99])