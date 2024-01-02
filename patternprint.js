

function patternPrint(row ,col){
 
 let string = "";
 
 for(let i = 0; i < row; i++){
 for(let j = 0 ;j < col;j++){
    string += "* "
 }
    string += '\n'; 
 }

return string;
} 



let str = patternPrint(3,5);
console.log(str);



// let string = "";

// for(var i = 0; i < 4 ; i++) {
//     for(var j = 0 ; j < 4; j++)
//     {
//         string += "* ";
//     }
//      string += "\n";
// }

// console.log(string);