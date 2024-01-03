
function Peramid(n){

    let string = "";

    for(let row = 0; row < n;row++){
        for(let col = 0; col < n - row -1; col++){   
            string += " "
        }

        for(let col = 0; col < row + 1; col++){
            string += "* "
        }
    
       string +="\n";
    }

    return string;

} 


let value = Peramid(5)
console.log(value);