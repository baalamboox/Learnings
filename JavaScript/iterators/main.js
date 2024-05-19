document.querySelector("title").innerHTML = "JS | Iterators";


const myIterator = {};

myIterator[Symbol.iterator] = function() {
    let counter = 0;
    let done = false;
    return {
        next() {
            counter++;
            if(counter === 100) done = true;
            return { value: counter, done: done }
        }
    }
}

for(let c of myIterator) {
    console.log(c);
}