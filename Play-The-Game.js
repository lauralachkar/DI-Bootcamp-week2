function playTheGame(){
    _checkTwoPossibilities()
    _ifYesResponse()
}


function _checkTwoPossibilities() {
    let yesOrNo = prompt("Yes or No ?")
    if(yesOrNo === "yes"){
        alert("Let's play!")
    }else if(yesOrNo === "no"){
        alert("No problem, Goodbye")
    }
}

function _ifYesResponse(){
    let enterNumber = parseInt(prompt("Please enter a number :"))
    if (enterNumber){
        _checkUserNumber()
    }else if(enterNumber.toString()){
        alert("Sorry Not a number, Goodbye")
    }
}

function _checkUserNumber() {
    let checkNumberRange = parseInt(prompt("Please enter a number between 0 and 10"))
    if (checkNumberRange >=0 && checkNumberRange <=10){
        let computerNumber = Math.floor(Math.random() * 10) + 1
        alert(computerNumber)
    }else if (checkNumberRange > 10){
        alert("Sorry it’s not a good number, Goodbye”.")
    }

}





