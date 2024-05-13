document.querySelector("title").innerHTML = "JS | Functions";

/**
 * The functions in JavaScript is a block code designed to perform a particular task.
 * A function in JavaScript is executed when something invokes it.
 * 
 * The functions have 5 parts:
 * 1- function keyword.
 * 2- Function name.
 * 3- Parenthesis ().
 * 4- Parameters between the symbols ().
 * 5- A curly braces {}. 
 */

function myFunction() {
    let a = 1, b = 2, c = a + b;
    return "This is a simple function!";
    console.log("Something!"); // This statement is became unsearchable.
}

document.querySelector("body").innerHTML = myFunction();

function myFunctionWithParameters(message) {
    console.error(message);
}

myFunctionWithParameters();