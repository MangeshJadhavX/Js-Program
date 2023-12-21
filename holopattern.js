let string = "";

for( var row = 0; row < 5; row++) {
    for(var col = 0 ; col < 5 ; col++) {
        if(row == 0 || row == 4) {
            string += "* ";
        }
        else {
            if(col == 0 || col == 4)
            {
                string += "* ";
            }
            else 
            {
                string += "  ";
            } 
        }
    }
 string += "\n";

}




console.log(string);