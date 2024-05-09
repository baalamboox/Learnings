/**
 * There are 5 ways to show result in JavaScrip:
 * 1- document.getElementById().innerHTML property.
 * 2- console.log() statement.
 * 3- document.write() statement.
 * 4- window.alert() statement.
 * 5- window.print() statement.
*/

// Works with HTML DOM directly.
document.getElementById("paragraph").innerHTML = "This is the first way to show something!";

// Only to use for debug.
console.log("This is the second way to show something!");

// No use this way beacause could remove all content.
document.write("This is the third way to show something!");

// Shows a simplete window dialog at the browser.
window.alert("This is fourth way to show something!");

// This way is used for print all page.
window.print("This is the fiveth way to show something!");