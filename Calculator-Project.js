//The clearScreen() function access the DOM using the id of the result and clear its value by assigning it an
// empty string

function clearScreen(){
    document.getElementById("result").value = "";
}


//The display() function accesses the DOM using the id of the result and appends the value of the clicked button
// to the result.
function display(value){
    document.getElementById("result").value += value;
}



//The calculate() function accesses the DOM using the id of the result and evaluates the expression using the eval()
// function. The evaluated value of the expression is again assigned to the result.
// The eval() method evaluates or executes an argument.
//If the argument is an expression, eval() evaluates the expression. If the argument is one or more JavaScript
//statements, eval() executes the statements.

    function calculate() {
    let p = document.getElementById("result").value;
    let q = eval(p);
    document.getElementById("result").value = q;
}