
document.querySelector("title").innerHTML = "JS | Errors";

/**
 * The try statement defines a code block to run (to try).
 * The catch statement defines a code block to handle any error.
 * The finally statement defines a code block to run regardless of the result.
 * The throw statement defines a custom error.
 */

try {
   console.log("Hi!"); 
} catch(error) {
    console.log("No existe la función correspondinte!");
} finally {
    console.log("Todo bien!");
}

console.log("Hi!");

// throw "Hola";

// let age = 25;
// if(age <= 25) throw "Tienes menos de 25 años!"; // When an error occurs, JavaScript will normally stop and generate an error message.

console.log("hola");

hola = 18;