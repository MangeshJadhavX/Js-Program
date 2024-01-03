function pattern(n) {

    let string = "";

    for (let row = 0; row < n; row++) {

        for (let col = 0; col < 2 * row + 1; col++) {

            if (col % 2 == 1) {
                string += " * "
            }
            else {
                string += row + 1
            }

        }
          string += "\n";    
    }
 return string;

}


let result = pattern(4);
console.log(result);