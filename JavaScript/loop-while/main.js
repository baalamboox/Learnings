document.querySelector("title").innerHTML = "JS | Loop While";

/**
 * What's a loop while?
 * The while loop loops through a block of code as long as a specified condition is true.
 */
let counter = 0;

while(counter < 10)  {
    console.log("Hi!");
    counter++;
}

const fruits = ["apple", "melon", "pineapple", "cherry", "blueberry", "blackberry", "berry"];

let i = 0;
while(i < fruits.length) {
    console.log(fruits[i]);
    i++;
}

const data = {
    names: "Guillermo", 
    firstSurname: "Jiménez",
    secondSurname: "Montes", 
    age: 25,
    sex: "Male",
    phone: "5532982057",
    email: "jmg201098@gmail.com"
};

let d = 0;
const propertiesData = Object.keys(data);

while(d < propertiesData.length) {
    console.log(data[propertiesData[d]]);
    d++;
}

/**
 * What's a loop do-while?
 * The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
 */

let x = 0;
do {
    console.log("Primera vez!");
    x++;
} while(x < 10);