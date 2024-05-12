/**
 * JavaScript has 8 data types:
 * 1- Numbers
 * 2- Strings
 * 3- Boleans
 * 4- Nulls
 * 5- Undefined
 * 6- Objects
 * 7- Symbols
 * 8- BigInt
 * 
 * JavaScript has 3 diffent ways for make a object:
 * 1- An array
 * 2- An object
 * 3- A date
 */

// Type Number
/**
 * In JavaScript uses a 64 bits for represente the numbers with float.
 */
console.log(typeof 2); // number
console.log(typeof 2.5); // number
console.log(typeof 2e3); // number
console.log(typeof Infinity); // number
console.log(typeof -Infinity); // number
console.log(typeof -7.7834); // number
console.log(typeof 0x4b); // number

// Type String
console.log(typeof "This is a simple string!"); // string
console.log(typeof 'This is a another simple string!'); // string
console.log(typeof `This is a temple string.`); // string

// Type Boolean
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof (6 > 3)) // boolean

// Type Null
console.log(typeof null); // object
console.log(typeof document.getElementById("memo"));

// Type Undefined
let age;
console.log(typeof age); // undefined

// Type object
console.log(typeof [1, 2, 3, 4, 5]); // object
console.log(typeof {names: "Guillermo", surname: "Jiménez"}); // object
console.log(typeof new Date()); // object

const clickmeButton = document.querySelector("#clickMe");

const clickMe = Symbol('click');

clickmeButton.addEventListener(clickMe.toString(), function() {
    console.log("Great, It's works!");
});

// Type BigInt
const x = 1234567890123456789054673583787657457648946797687978596789786567976778657457665785867562654765875697835673456767876n + 34545673567345645267645835678326724n;
console.log(x);