document.querySelector("title").innerHTML = "JS | Strings";

/**
 * What's a String?
 * A string is for storing text.
 * Strings are written with quotes ("", '', ``).  
 */

let myAge = 25;

let myStringWithDoubleQuotes = "This a \"quotes\" simple\\text!";
let myStringWithSingleQuotes = 'This a simple text!';
let myStringWithTemplate = `\tThis \nis ${ myAge } a simple text!`;

console.log(myStringWithDoubleQuotes);
console.log(myStringWithSingleQuotes);
console.log(myStringWithTemplate);

let vowels = "aeiou";

// The length property allows return the length of a string in number.
console.log(vowels.length);

/**
 * There are 4 ways to extract string characters.
 * 1- at(position).
 * 2- chartAt(position).
 * 3- chartCodeAt(position.)
 * 4. Use [position] likes an array.
 */

// Method at()
console.log(vowels.at(-1));
console.log(vowels.at(vowels.length - 1));
console.log(vowels.at(4));

// Method chartAt()
console.log(vowels.charAt(2));
console.log(vowels.charAt(-1)); // ChartAt doesn't allow negative positions.
console.log(vowels.charAt(vowels.length - 1));

// Method chartCodeAt()
console.log(vowels.charCodeAt(4));
console.log(vowels.charCodeAt(-1)); // CharCodeAt doesn't allow negative positions.
console.log(vowels.charCodeAt(vowels.length - 3));

// Using square braces []
console.log(vowels[3]);
console.log(vowels[-1]); // It's not allowed.
console.log(vowels[vowels.length -1]);

vowels[0] = "A"; // It's allowed, but doesn't work. Exist other ways to change.

console.log(vowels);

// Extracting String parts

/**
 * There are 3 methods for extracting a part of a string.
 * 1- slice(start, end).
 * 2- substring(start, end).
 * 3- substr(start, length)
 */

let newStringSlice = vowels.slice(0, 3); // The end position it's not included.
console.log(newStringSlice); // The result is aei.

let newStringSubstring = vowels.substring(2, 1);
console.log(newStringSubstring);

let newStringStr = vowels.substr(1, 3);
console.log(newStringStr);

// Convert a string to uppercase
console.log(vowels.toUpperCase());

// Convert a string to lowercase
console.log(vowels.toLowerCase());

// Concat many strings
let string1 = "Perrito,";
let string2 = "esta haciendo cosas!";
let string3 = "muchas cosas."
console.log(string1.concat(" ", string2, " ", string3));

// Removes white spaces around a string
let myName = "    Guillermo   ";
console.log(myName.trim());
console.log(myName.trimStart()); // Removes white spaces only start.
console.log(myName.trimEnd()); // Removes white spaces only end.

// Add padding to start a string

let paddingString = 5;
console.log(paddingString.toString().padStart(2, "0"));

// Add padding to end a string
console.log(paddingString.toString().padEnd(10, "0"));

// Repeat strings
let fourRepeatVowels = vowels.repeat(4);
console.log(fourRepeatVowels);

// Replace strings

let message = "Rabit is a great!";
console.log(message.replace(/^a+$/g, "Ernesto"));
console.log(message.replace("a", "x")); // Only replaces the first match.

// Replace all strings

console.log(message.replaceAll("a", "x"));

// For transform a string to array use split method

console.log(message.split(" "));

// Methods for find a string

let myMessage = "This is a simple string with some small things!";
console.log(myMessage.indexOf("small", 34)); // If not find nothing, return -1

console.log(myMessage.lastIndexOf("simple")); // Both indexOf and lastIndexOf could recive a second parameter de posision start.

console.log(myMessage.search("a"));

console.log(myMessage.match(/ing/g));

console.log(myMessage.matchAll("is")); // Return a iterable.

console.log(myMessage.includes("is", 2)); // The second parameter indicates the start position

console.log(myMessage.startsWith("This")); // Return true

console.log(myMessage.endsWith("things")); // Returns false