/**
 * There are 5 way to declare variables in JS.
 * 1- Use an identifier like variable.
 * 2- Use var keyword with an identifier.
 * 3- Use let keyword with an identifier.
 * 4. Use const keyword with an identifier.
 */

myName = "Guillermo";


console.log(typeof(myName));

myName = 25;
document.querySelector("body").innerHTML = myName;

function myVariable() {
    myName = true;
    document.querySelector("body").innerHTML = myName;
}

myVariable();

var age = 5;

console.log(typeof(age));

function myAge() {
    age = 10;
    var age = 50;
    return age;
}

console.log(myAge());

let tall = 1.60;

function myTall () {
    console.log(tall);
}

myTall();

function myCustom() {
    let mySize = 10; // The variables with let have only block scope.
    mySize = 100;
    console.log(mySize);
}

myCustom();

function hi() {
    let mySize = 178;
    console.log(mySize);
}

hi();

const myPet = "Chancho";
// myPet = "Pepito";
// const myPet = "Lorin";
console.log(myPet);

const myFruitList =  ["Apple", "Pear", "Watermelon"];
// myFruitList = [1, 2, 3, 4];

myFruitList[0] = 1;

const myAges = myAge();

console.log(myAges);

console.log(myFruitList);