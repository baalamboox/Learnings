/**
 * JavaScript operators are used to perform diferent types of
 * matematical and logical computations.
 * 
 * There are many operators:
 * 1- Arithmetical operators (+, -, *, /, %, **, --, ++).
 * 2- Assignment operators (=, +=, -=, *=, /=, **=, ??=).
 * 3- Comparison operators (==, ===, !=, !==, <, >, <=, >=).
 * 4- String operators (+).
 * 5- Logical operators (&&, ||, !). Here We can use the assign operator too =.
 * 6- Bitwise operators (&, |, ~, ^, <<, >>, >>>). Here We can use the assing operator =
 * 7- Ternary operators (?).
 * 8- Type operators (typeof, instanceof).
 * 
 */

// Arithmetical operators

// Adition operator
let a = 10, b = 50.5, c = a + b;
console.log(c);

// Substraction operator
let x = 5.6, y = 0.05;
console.log(x - y);

// Multiplication operator
console.log(a * b);

// Division operator
console.log(-6 / 5);

// Modulus operator
const base = 10, side = 20;
console.log(base % side);

// Exponention operator
console.log(base ** side);

// Decrement operator
let z = 9;
z++;
console.log(--z);

// Increment operator
z--;
console.log(++z);

// Assigments operators

// Assigment operator
let gravity = 9.8;
console.log(gravity);

// Adition assigment operator
gravity += 1;
console.log(gravity);

// Substraction assigment operator
gravity -= 1;
console.log(gravity);

// Multiplication assigment operator
gravity *= 2;
console.log(gravity);

// Division assigment operator
gravity /= 2;
console.log(gravity);

// Modulos assigment operator
gravity %= 2;
console.log(gravity);

// Exponential assigment operator
gravity **= 2;
console.log(gravity);

// Nullish coalescing assignment operator
let myNull = undefined;
// myNull = 7.809
console.log(myNull ??= 5000);


//Comparison operators

// Equal to operator (Only value)
console.log(4 == "4");

// Equal to operator (Evaluates value & type)
console.log(5 === "5");

// Diferent operator (Only value)
console.log(0 != "g");

// Diferent operator (Evaluates value & type)
console.log(0 !== "0");

// Greater than operator
console.log(5 > 6);

// Less than operator
console.log(6 < 7);

// Greater than or iqual to operator
console.log(6 >= 6);

// Less tha or iqual to operator
console.log(5 <= 0);

// Logical operators

// AND operator
console.log(true && true); // Result: true
console.log(true && false); // Result: false
console.log(false && true); // Result: false
console.log(false && false); // Result: false

// OR operator
console.log(true || true); // Result: true
console.log(true || false); // Result: true
console.log(false || true); // Result: true
console.log(false || false); // Result: false

// Not operator
console.log(!true);

// Type operators

// Typeof operator
console.log(typeof 8); // Number type
console.log(typeof true); // Boolean type
console.log(typeof "Guillermo"); // String type
console.log(typeof 9.9); // Number type
console.log(typeof 5n); // BigInt type

// Instanceof operator
let flag = new Boolean(true);
console.log(flag instanceof Boolean);

// String operators

// Concatenation operator
let names = "Guillermo", surname = "Jiménez";
console.log(names + " " + surname);
console.log(names != surname);

// Bitwise operators
// The length of bits is 32.

// AND operator
console.log(13 & 5);

// OR operator
console.log(2 | 1);

// XOR operator
console.log(1 ^ 0);

// Not operator
console.log(~1);

// Left shift
console.log(2 << 4);

// Right shift
console.log(512 >> 4);

// Ternary operators
let isTrue = (5 > 2) ? "Great!" : "Ups!"; 
console.log(isTrue);