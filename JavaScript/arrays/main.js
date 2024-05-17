document.querySelector("title").innerHTML = "JS | Arrays";

// An array is a special data type that allows us storing more than one value.
// It's recomendate use const with arrays.

const fruits = ["apple", "lemon", "lime", "pineapple", "watermelon", "banana", "grapes", "blueberry"];

document.querySelector("body").innerHTML = fruits.toString();
console.log(typeof fruits);


// Show complete array
console.log(fruits);

// Show one element
let fruit1 = fruits[0]; // Get first element
console.log(fruit1);

let fruit2 = fruits[5]
console.log(fruit2);
/**
 * Properties
 * 1- length
 */
let lastFruit = fruits[fruits.length - 1]; // With the property length get the length of array.
console.log(lastFruit);

// Update an element
fruits[2] = "strawberry";
console.log(fruits);

fruits[8] = "granade";
console.log(fruits);

fruits[25] = "pomelo"; // This generetes a holes.
console.log(fruits);

/**
 * Methods:
 * 1- at()
 * 2- join()
 * 3- pop()
 * 4- push()
 * 5- shift()
 * 6- unshift()
 * 7- delete() don't exist.
 * 8- concat()
 * 9- copyWithin()
 * 10- flat()
 * 11- splice()
 * 12- slice()
 * 13. toString()
 */

const things = ["phone", "window", "door", "computer", "wire", "wifi", "internet"];

// The at() method return the element althrough a given parameter.
console.log(things.at(-1)); // At allows us working with negative indexes.

// The join() method returns a string with all elements of an array.
console.log(things.join("-"));

// The pop() method removes the last element of an array and returns the element has removed.
console.log(things.pop());
console.log(things);

// The push() method adds a new element into an array only end.
console.log(things.push("iphone")); // Returns the length of the array with the new element.
console.log(things);

// The shift() method removes the first element into an array.
console.log(things.shift()); // Returns the element that has removed.
console.log(things);

// The unshift() method adds a new element at the first position.
console.log(things.unshift("diskman"));
console.log(things);

// The concat() method allows us join arrays.

const numbersA = [1, 2, 3, 4, 5];
const numbersB = [6, 7, 8, 9, 10];
const numbersC = [11, 12, 13, 14, 15];

const numbers = numbersA.concat(numbersB, numbersC);
console.log(numbers);

// The copyWithin() method copies the element specified within other element position.

const cars = ["toyota", "nissan", "mazda", "bmw"];
// console.log(cars.copyWithin(1, 0)); 
console.log(cars.copyWithin(3, 0, 1));

// The flat() method Flattening an array is the process of reducing the dimensionality of an array.

const points = [[0.1, 0.2, 0.21, 0.22, 0.3, 0.4], [0.5, 0.6, 0.7, 0.8, 0.9]];
console.log(points);
console.log(points.flat());

// The splice() method 
console.log(cars.splice(0, 0, "x", "y")); // If the second parameter is 0, the splice method will insert new elements to array. Return an array avoid.
console.log(cars);

console.log(cars.splice(0, 2)); // With this form eliminates elements into array.
console.log(cars);

console.log(cars.toSpliced(0, 2)); // This new form no alterate the exist array.

// The slice() method
const romanNumbers = ["I", "II", "III", "VI", "V", "VI", "VII", "VIII"];
console.log(romanNumbers.slice(3, 7));

// Array search

/**
 * There are 7 methods that allow us to search elements into an array:
 * 1- indexOf()
 * 2- lastIndexOf()
 * 3- includes()
 * 4- find()
 * 5- findIndex()
 * 6- findLast()
 * 7- findLastIndex()
 */

const myExes = ["America", "Yalinka", "Karol", "Sandra", "Karol"];

// The indexOf() method searches an array for an element value and returns its position.
console.log(myExes.indexOf("Karol", 2));

// The lastIndexOf() is the same that indexOf, the only diference is that returns the last occurrence of the specified element.
console.log(myExes.lastIndexOf("Karol"));

// The includes() method allows us to check if an element exist into an array.
console.log(myExes.includes("Carolina"));

const myNumbers = [8, 4, 6, 10, 16]

// The find() method returns the value of the first array element that passes a test function.
console.log(myNumbers.find(function(value, index, array) {
    return value >= 0;
}));

// The findIndex() method returns the index of the first array element that passes a test function.
console.log(myNumbers.findIndex(function(value, index, array) {
    return value == 10;
}));

console.log(myNumbers.findLast(function(value, index, array) {
    return value > 5;
}));

console.log(myNumbers.findLastIndex(function(value, index, array) {
    return value > 11;
}));