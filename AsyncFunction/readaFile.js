
const fs = require("fs");

fs.readFile("AsyncFunction/mavric.txt","utf-8",function(err,data){
    console.log(data);
})

class animal{                       // the static method is connected to the animal class 
    constructor(brid,color,city,price){
        this.brid = brid;
        this.color = color;
        this.city = city;
        this.price = price;
    }
}


const dog = new animal("German","brown","London",12000);
console.log(dog);


