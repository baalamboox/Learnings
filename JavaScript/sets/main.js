document.querySelector("title").innerHTML = "JS | Sets";

/**
 * What's a set?
 * A JavaScript Set is a collection of unique values.
 * Each value can only occur once in a Set.
 * The values can be of any type, primitive values or objects.
 */

const mySet = new Set([1, 2, 3, 4, 5, 5, 6, 6]);

for(let ms of mySet) {
    console.log(ms);
}

// The add() method: Allows to save a new value.

mySet.add("hola");
mySet.add("hola"); // It's works, but don't save the value because already exists.

console.log(mySet);

// The has() method: Returns true if a specific value exist in a set.
console.log(mySet.has(6));
console.log(mySet.has("adios"));

// The forEach() method: Invokes a function for each set element.
mySet.forEach(function(value) {
    console.log(value);
});

// The values() method: Returns an iterable with the values in a set.
const numbers = mySet.values();

for (const number of numbers) {
    console.log(number);
}

