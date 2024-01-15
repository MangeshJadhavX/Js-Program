const { promises } = require("dns");

const Promise1 = Promise.resolve("hello Borther");
const Promise2 = 2;
const Promise3 = new Promise(function(resolve){
    setTimeout(resolve,100,"euuuuuuu");
})

Promise.all([Promise1,Promise2,Promise3]).then(function(value){
    console.log(value);
})

