//Part 1

let people = ["Greg", "Mary", "Devon", "James"];
people.shift();
console.log(people)
let peopleLength = people.length-1;
people.splice(peopleLength, 3, 'Jason');
console.log(people)
people.push("Laura");
console.log(people)

let specificElementIndex = people.indexOf("Mary");
console.log(specificElementIndex)

console.log(people.slice(1,3));
console.log(people.slice())

let lastElementIndex = people.indexOf("Foo");
console.log(lastElementIndex)
// it will be -1 because there is no such element in the array


people[people.length] = "Myriam"
console.log(people)


// Part 2

for (let i = 0 ; i<people.length; i++){
    console.log(people[i])
}

function breakForLoop (people) {
    for (let i = 0; i < people.length; i++) {
        console.log(people[i]);
        if (people[i] === 'Jason') {return false;}
    }
}

breakForLoop(people);


//Exercise 3


// let question = prompt("Please enter a number");
// console.log(typeof(question))
//
// while (question < 10) {
//     question++;
//     console.log(question)
// }

//Exercise 4

let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}


console.log("Numbers of floors in the building : " + building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);



console.log("Name of the second Tenant :"+building.nameOfTenants[1]);
console.log("Numbers of Dan's rooms:"+building.numberOfRoomsAndRent.dan[0]);


let sarahAndDavidRent = building.numberOfRoomsAndRent.sarah[0] + building.numberOfRoomsAndRent.david[0]
let danRent = building.numberOfRoomsAndRent.dan[0]


if (sarahAndDavidRent >danRent){
    console.log(danRent +1200)
}else {
    console.log("FALSE")
}

//Exercise 6


let family = {
    dad : "Patrick",
    mother : "Valerie",
    sister : "Charlotte",
    me : "Laura",
    grandpa : "Roger",
    grandma : "Marlene",
}

for (const key in family) {

    console.log(`${key}`);
}

for (const key in family) {

    console.log(`${family[key]}`);
}


// exercise 6

let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer',
}


for (const key in details) {

    console.log(`${key} ${details[key]}`);
}



