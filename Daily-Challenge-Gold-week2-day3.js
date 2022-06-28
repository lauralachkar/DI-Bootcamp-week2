const numbers = [5,0,9,1,7,4,2,6,3,8];
let stringArray = numbers.toString();
console.log(stringArray)
let joinArray = numbers.join();
console.log(joinArray)
let joinArrayWithString = numbers.join('+' + "///"+""+" ");
console.log(joinArrayWithString)

let highestToLowest = numbers.sort((a, b) => b-a).join();
console.log(highestToLowest)