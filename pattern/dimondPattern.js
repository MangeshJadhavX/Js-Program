function diamond(num){

    let n = num /2;
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

    for(let row = 0; row < n;row++){
        for(let col = 0; col < row; col++){
            string += " "
        }

        for(let col = 0; col < n-row; col++){
            string += "* "
        }
    
       string +="\n";
    }
  return string;
} 



let pattern = diamond(10);
console.log(pattern);