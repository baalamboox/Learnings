/**
 * How can I identify a statement?
 * All statement end with semicolon.
 */

// This is a statement.
console.log("Hello world!");

// This is another statement.
var x1 = 10, x2 = 20, x3 = 30;

// This is a block statement
function addNumbers(x1, x2, x3) {
    return x1 + x2 + x3; // We have another statement.
}

console.log(addNumbers(x1, x2, x3)); // We another statement.
