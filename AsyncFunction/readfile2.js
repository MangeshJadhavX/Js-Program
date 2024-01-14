// let stringWithExtraSpaces = "This   is   a    string    with   extra   spaces.";

// // Use a regular expression to replace multiple spaces with a single space
// let stringWithoutExtraSpaces = stringWithExtraSpaces.replace(/\s+/g, ' ');

// console.log(stringWithoutExtraSpaces);


const fs = require("fs");

fs.readFile("AsyncFunction/readClean.txt","utf-8",function(err,data){

   console.log(data.replace(/\s+/g,' '));  // this is first method.


})





















// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman.


// function replaceString(str, target, replacement) {
//     console.log("Original String:", str);
//     console.log("After replace:", str.replace(target, replacement));
//   }
//   replaceString("   Hello      World    ", " ", "");