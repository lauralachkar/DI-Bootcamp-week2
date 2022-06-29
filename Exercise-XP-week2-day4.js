//Exercise 1

function infoAboutMe(){
    console.log("My name is Laura,23,I love sports...")
}

infoAboutMe();

//Part2

function infoAboutPerson(name, age, FavoriteColor){
    console.log("You name is" + ' ' + name +"," + "you are" + ' '+
        age+ ' '+ "years old"+"," + "your favorite color is"+FavoriteColor)
}

infoAboutPerson("David",23,"Purple")
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")


//Exercise 2

function checkBillAndTip(){
    let billAmount = Number(prompt("Amount of the bill : "));
    let tip;
    if (billAmount <50){
        tip = billAmount * 0.2;
        prompt(billAmount + tip)
    }
    else if(billAmount>=50<200){
        tip = billAmount * 0.15;
        prompt(billAmount + tip)
    }
    else if(billAmount>200){
        tip = billAmount * 0.10;
        prompt(billAmount + tip)
    }
}

checkBillAndTip(20)



//Exercise 3

 function isDivisible(){
     for(let i = 0; i <= 500; i++) {
        alert(i);
     }
 }

isDivisible()

function isDivisible(){
    for(let i = 0; i <=500; i++) {
        if(i % 23 === 0){
            alert("This number is divisible by 23 ")
        }else {
            alert("FALSE")
        }
    }
}


isDivisible()



//Exercise 4


let stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}

let prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}

let shoppingList = {
    "banana": 20,
    "orange": 50,
    "apple": 40,
}


let total = 0;

for (let value in shoppingList) {
    console.log(total += shoppingList[value]);
}

