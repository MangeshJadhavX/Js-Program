
/*
     *  *  *  *  *  *
     *              * 
     *              *
     *              *  
     *  *  *  *  *  *     

*/





function hologram(row,col){
let string = "";
for(let i = 1;i <= row;i++){
    for(let j = 1; j <= col; j++){
       if(i == 1 || i == row){
        string += "* "
       }
       else{
        if(j == 1 || j == col){
           string += "* " 
        }
        else{
            string += "  "
        }
       }
     
    }
    string += "\n";  
}
 return string;
}


let pattern = hologram(5,6)
console.log(pattern);




// let string = "";

// for( var row = 0; row < 5; row++) {
//     for(var col = 0 ; col < 5 ; col++) {
//         if(row == 0 || row == 4) {
//             string += "* ";
//         }
//         else {
//             if(col == 0 || col == 4)
//             {
//                 string += "* ";
//             }
//             else 
//             {
//                 string += "  ";
//             } 
//         }
//     }
//  string += "\n";

// }




// console.log(string);