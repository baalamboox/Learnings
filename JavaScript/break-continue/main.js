document.querySelector("title").innerHTML = "JS | Break and Continue";

/**
 * What's a break and continue statements?
 * The break statement "jumps out" of a loop.
 * The continue statement "jumps over" one iteration in the loop.
 */

while(true) {
    console.log("Something!");
    break;
}

for(;true;) {
    console.log("Something grate!");
    break;
}

let counter = 0;
while(counter < 10) {
    if(counter === 5) {
        break;
    }
    console.log(counter);
    counter++;
}

const animals = ["hamster", "rabit", "dog", "cat"];

for(let animal of animals) {
    if(animal === "dog") {
        continue;
    }
    console.log(animal);
}