
// The forEach() method calls a function (a callback function) once for each array element.

const names = ["guillermo", "fernando", "marisol", "karla", "paola"];

names.forEach(function(value, index, array) {
    console.log(value);
});

/**
 * The map() method creates a new array by performing a function on each array element.
 * The map() method does not execute the function for array elements without values.
 * The map() method does not change the original array.
 */
console.log(
    names.map(function(value, index, array) {
        return value.padEnd(10, "x");
    })
);

// The filter() method creates a new array with array elements that pass a test.

const data1 = [{names: "guillermo", age: 25}, {names: "luis", age: 18}, {names: "karol", age: 24}, {names: "jorge", age: 14}];

console.log(data1.filter(function(value, index, array) {
    return value.age >= 18;
}));

// The reduce() method runs a function on each array element to produce (reduce it to) a single value.

const sizes = [4.65, 6.7, 8.9];

console.log(
    sizes.reduce(function(previousValue, currentValue, currentIndex, array) {
        return previousValue + currentValue;
    })
);

// It's the same that above, but start the last position into the array.
console.log(
    sizes.reduceRight(function(previousValue, currentValue, currentIndex, array) {
        return previousValue + currentValue;
    })
);

// The every() method checks if all array values pass a test.
const myBestNumbers = [5, 7, 2, 8, 9, 8, 8, 7, 7, 1, 0, 50, 60, 1];

console.log(
    myBestNumbers.every(function(value, index, array) {
        return value >= 9;
    })
);

console.log(
    myBestNumbers.some(function(value, index, array) {
        return value < 0;
    })
);

// The Array.from() method returns an Array object from any object with a length property or any iterable object.
console.log(Array.from("ABCD"));

// The Array.keys() method returns an Array Iterator object with the keys of an array.
console.log(myBestNumbers.keys());

// ES2023 added the Array with() method as a safe way to update elements in an array without altering the original array.

const myBestNumbersUpdated = myBestNumbers.with(0, 1000);
console.log(myBestNumbersUpdated);

const a1 = Array.from("abcd");
const a2 = Array.from("efgh");

const fa = [...a1, ...a2];

console.log(fa);