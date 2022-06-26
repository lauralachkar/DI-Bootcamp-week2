let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

// first Exercise

//remove the first value of an array
fruits.shift();
console.log(fruits)

// sorting by alphabetical order
fruits.sort(function (a, b) {
    return a.localeCompare(b); //using String.prototype.localCompare()
});
console.log("alphabetical order :" + fruits)

//add values at the end of the array
fruits.push("Kiwi");
console.log(fruits)


//delete the first value using the filter() method
fruits = fruits.filter((n) => {return n != "Apples"});
console.log(fruits);


//Reverse the array
//The reverse() method reverses the order of the elements in an array.
// The reverse() method overwrites the original array.
fruits.reverse();
console.log(fruits);


//Exercise 2

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
let getCell = moreFruits[1][1]
console.log(getCell)