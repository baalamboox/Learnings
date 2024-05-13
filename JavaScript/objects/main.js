document.querySelector("title").innerHTML = "JS | Objects";

/**
 * What's an object?
 * It's a real life object: Car, Pen, Bike, etc.
 * 
 * It's recomended to use the const keyword with objects.
 * 
 */

let id = "id";

const motorcycle = {
    [id]: 1,
    brand: "Italica",
    model: "2024it1",
    color: "orange",
    weigth: 250,
    length: 2,
    turnOff: function() {
        return "Motorcycle is turn off now!";
    },
    turnOn: function() {
        return "Motorcycle is turn on now!";
    },
    break: function() {
        return "Motorcycle is break now!";
    },
    showAllData: function() {
        return this.id + " " + this.brand + " " + this.model;
    }
};

// Show all the object
console.log(motorcycle);

console.log(motorcycle.brand);
console.log(motorcycle["color"]);
console.log(Object.keys(motorcycle));

console.log(motorcycle.turnOn());

console.log(motorcycle.showAllData());

motorcycle.brand = "BMW";

console.log(motorcycle);

console.log(Object.values(motorcycle));