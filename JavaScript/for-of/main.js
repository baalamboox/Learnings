document.querySelector("title").innerHTML = "JS | Loop For Of";

/**
 * What's a loop for of?
 * The JavaScript for of statement loops through the values of an iterable object.
 * It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
 */

let favouriteAnimal = "Duck";

for(let character of favouriteAnimal) {
    console.log(character);
}

const cars = ["Audi", "BWM", "Mercedez", "Ferrari", "Lamborgini"];

for(let car of cars) {
    console.log(car);
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

for(let property of data) {
    console.log(property); // This is not allowed!
}