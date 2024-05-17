
/**
 * Alpabetic sort
 * There are 4 method to sorts an alpabetic array:
 * 1- sort() affects the original array
 * 2- reserve() affects the original array
 * 3- toSorted() creates a new array with its changes
 * 4- toReversed() creates a new array with its changes
 */

const people = ["guillermo", "fernando", "luis", "uriel", "yamilet"];

// console.log(people.sort());

const peopleSorted = people.toSorted();

// The reverse() method allows to change the order of the elements.
console.log(peopleSorted.reverse());

const peopleReversed = people.reverse();
console.log(peopleReversed);

console.log(people);


const digits = ["4", "7", "2", "100", "3", "5", "9", "0", "40"];
// console.log(digits.sort(function(a, b) {
//     return a - b;
// }));

// console.log(digits.sort(function(a, b) {
//     return b - a;
// }));

console.time("time");

let maxNumber = Math.max.apply(null, digits);
console.log(maxNumber);

let minNumber = Math.min.apply(null, digits);
// The nex form is ineffient
// const digitsSorted = digits.toSorted(function(a, b) {
//     return a - b;
// });

// console.log(digitsSorted[0]);
// console.log(digitsSorted[digitsSorted.length - 1]);

console.log(maxNumber);
console.log(minNumber);

console.timeEnd("time");

const data = [{names: "guillermo", age: 25}, {names: "luis", age: 18}, {names: "karol", age: 24}, {names: "jorge", age: 14}];

console.log(data.sort(function(a, b) {
    return a.age - b.age;
}));

console.log(data.sort(function(a, b) {
    let x = a.names.toLowerCase();
    let y = b.names.toLowerCase();
    if(x < y) { return -1; }
    if(x > y) { return 1; }
    return 0;
}));