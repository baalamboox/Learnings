document.querySelector("title").innerHTML = "JS | Maps";

/**
 * What's a map?
 * A Map holds key-value pairs where the keys can be any datatype.
 * A Map remembers the original insertion order of the keys. 
 */

const myMap = new Map([[true, "guillermo"], [2, "luis"], [3, "alberto"], [5.6, "guillermo"]]);

console.log(myMap);

const data = {
    true: "Hola",
    false: "adios",
    1.9: "GEnial"
};

console.log(data);

// The set() method: You can add elements to a Map.

myMap.set(false, "fernando");

console.log(myMap);

// The get() method allows to get a value of a map.

console.log(myMap.get(true));

for(mm of myMap) {
    mm.forEach(element => {
      console.log(element)  
    });
}

console.log(myMap.size);

