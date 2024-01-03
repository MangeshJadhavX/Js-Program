

let string = "";

for( var row = 0; row < 5; row++) {
    for(var col = 0 ; col < row + 1 ; col++) {
      string += "* "
    }
 string += "\n";

}




console.log(string);




//input output program

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   readline.question('Who are you?\n', name => {
//     console.log(`Hey there ${name}!`);
//     readline.close();
//   });