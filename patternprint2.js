let string = "";

//outer loop for rows 
for(var i = 0; i < 3 ; i++) {
   //inner loop for column
    for(var j = 0; j < 5; j++)
    {
        string = string + "* ";
    }
    string = string + "\n";
}

console.log(string);