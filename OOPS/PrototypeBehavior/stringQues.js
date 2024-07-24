

let createString = "city new york        ";

String.prototype.getLength = function(){
    console.log(this);
    console.log(`the original length is ${this.trim().length}`);
}


createString.getLength();
'raman'.getLength();
'rahul'.getLength();
'sahil  mahajan'.getLength();