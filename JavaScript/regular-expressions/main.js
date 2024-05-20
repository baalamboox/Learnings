document.querySelector("title").innerHTML = "JS | Regular Expressions";

/**
 * What are the regular expressions?
 * A regular expression is a sequence of characters that forms a search pattern.
 * When you search for data in a text, you can use this search pattern to describe what you are searching for.
 * A regular expression can be a single character, or a more complicated pattern.
 * Regular expressions can be used to perform all types of text search and text replace operations.
 */

let paragraph = "En cómputo teórico y teoría de lenguajes formales, una expresión regular o expresión racional es una secuencia de caracteres que conforma un patrón de búsqueda. Se utilizan principalmente para la búsqueda de patrones de cadenas de caracteres u operaciones de sustituciones.";

console.log(paragraph.search(/Cómputo/i)); // i  is a modifier (modifies the search to be case-insensitive).

console.log(paragraph.search(/una/g));

let patter = /^[0-9]+/;

console.log(patter.test("12312dgr"));