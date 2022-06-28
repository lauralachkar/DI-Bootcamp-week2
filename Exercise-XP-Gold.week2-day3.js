let numbers = [123, 8409, 100053, 333333333, 7]

for (let i = 0 ; i<numbers.length; i++){
    if(numbers[i] % 3 === 0){
        console.log("TRUE")
    }else{
        console.log("FALSE")
    }
}


//Exercise 3

let age = [20,5,12,43,98,55];
let sum = 0

for(const value of age){
    sum += value;
}
console.log(sum)

console.log(Math.max(...age));