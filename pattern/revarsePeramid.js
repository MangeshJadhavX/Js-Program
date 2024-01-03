function reversePeramid(n){

    let string = "";

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


let value = reversePeramid(5)
console.log(value);