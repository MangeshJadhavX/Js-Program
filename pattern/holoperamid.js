
function Peramid(n){

    let string = "";

    for(let row = 0; row < n;row++){
        for(let col = 0; col < n - row -1; col++){   
            string += " ";
        }

        for(let col = 0; col < row + 1; col++){
            if(col == 0 || col == row + 1 -1){
                string += "* ";
            }
            else {
                string += "  ";
            }
        }
    
       string +="\n";
    }

    return string;

} 


let value = Peramid(5)
console.log(value);