let firstQuestion = prompt("What's your age?")

if(firstQuestion < 18){
    console.log(" \"Sorry, you are too young to drive this car. Powering off")
}else if(firstQuestion === 18){
    console.log("Congratulations on your first year of driving. Enjoy the ride!")
}else if(firstQuestion > 18){
    console.log( "Powering On. Enjoy the ride!")

}

// Second Exercise

let a = 2 + 2;

// case 4

//Third Exercise

let a = 2 + 2;

switch (a) {
    case 4:
        alert('Right!');
        break;

    case 3: // (*) grouped two cases
    case 5:
        alert('Wrong!');
        alert("Why don't you take a math class?");
        break;

    default:
        alert('The result is strange. Really.');
}

//case4