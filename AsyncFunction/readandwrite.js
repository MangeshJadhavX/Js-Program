
const fs = require("fs");

fs.readFile("AsyncFunction/Leo.txt","utf-8",function(err,data){
    console.log(data);

 let content = "i am Leo...."   
    
fs.writeFile("AsyncFunction/Leo.txt",content,function(err){
 
console.log("successful");    
     
})    
    
})
