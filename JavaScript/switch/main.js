document.querySelector("title").innerHTML = "JS | Switch";

/**
 * What's switch statement?
 * The switch statement is used to perform different actions based on different conditions.
 * 
 */

const date = new Date().getMonth();

switch(date) {
    case 0:
        console.log("Jenaury");
        break;
    case 1:
        console.log("Febraury");
        break;
    case 2:
        console.log("March");
        break;
    case 3:
        console.log("April");
        break;
    case 4:
        console.log("May");
        break;
    case 5:
        console.log("June");
        break;
    case 6:
        console.log("July");
        break;
    case 7:
        console.log("Agoust");
        break;
    case 8:
        console.log("Semptember");
        break;
    case 9:
        console.log("October");
        break;
    case  10:
        console.log("November");
        break;
    case 11:
        console.log("December");
    default:
        console.log("Adios!");
}

console.log(date);