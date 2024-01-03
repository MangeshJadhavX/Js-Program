function pattern(n) {

    let string = "";

    for (let row = 0; row < n; row++) {
    
     for(let col = 0; col < n - row; col++ ){
        if(row == 0 ){
            string += col + 1;
        }
        else{
            if(col == 0 || col == n - row -1){
                string += row  + col + 1;
            }

            else {
                string += " ";
            }
        }
     }   
     string += "\n";
    }
 return string;

}


let result = pattern(5);
console.log(result);