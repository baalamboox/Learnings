document.querySelector("title").innerHTML = "JS | Loop For in";

/**
 * What's loop for in?
 * The JavaScript for in statement loops through the properties of an Object:
 */

const data = {
    names: "guillermo",
    firstSurname: "jimenez",
    secondSurname: "montes",
    age: 25,
    sex: "male",
    phone: "5532982057",
    email: "jmg201098@gmail.com"
};

for(let property in data) {
    console.log(data[property]);
}

console.log(data["names"]);
