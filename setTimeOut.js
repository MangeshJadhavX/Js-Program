

   //if you passing function as a argument thats calls callback function

function greet() {
    console.log("Hello World");
}

function greetAlien() {
    console.log("Hello Alien");
}



setTimeout(greetAlien,3 * 1000);