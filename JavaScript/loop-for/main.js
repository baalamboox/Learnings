document.querySelector("title").innerHTML = "JS | Loop For";

let myName = "guillermo";

for(let i = 0; i < myName.length; i++) {
    console.log(myName[i]);
}

const nameArray = Array.from(myName);

console.log(nameArray);

for(let i = 0; i < nameArray.length; i++) {
    console.log(nameArray[i]);
}

let myList = "<ul>";

const animals = ["Donky", "Cat", "Dog", "Duck", "Bird", "Cow", "Ox", "Dolphin"];

for(let i = 0; i < animals.length; i++) {
    myList += `<li>${ animals[i] }</li>`
}

myList += "</ul>"

document.querySelector("body").innerHTML = myList;