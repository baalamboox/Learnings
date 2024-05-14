document.querySelector("title").innerHTML = "JS | Events";

/**
 * What is an event?
 * An HTML event ca be something the browser does, or something a user does.
 * The HTML events are "things" tha happen to HTML elements.
 * JS lets you execute code when events are detected.
 * 
 */
const myButton = document.getElementById("myButton");
const myParagraph = document.getElementById("paragraph");
const myTextInput = document.getElementById("myTextInput");

function showName() {
    myParagraph.innerHTML = "Guillermo";
}

// myButton.onclick = showName;

// myButton.addEventListener('click', showName);

myParagraph.addEventListener('mouseover', function() {
    this.style.color = "red";
});

myParagraph.addEventListener('mouseout', function() {
    this.style.color = "black";
});

// window.onload = function () {
//     window.alert("The page is loaded!");
// }

myTextInput.onchange = function () {
    console.log("Text was changed!");
}

this.addEventListener('keydown', function() {
    console.log("It's down!");
});