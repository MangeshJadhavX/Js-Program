
const fs = require("fs");

function MangeshAsync(){
    
    return new Promise(function(resolve){
        fs.readFile("AsyncFunction/mj.txt","utf-8",function(err,data){
            resolve(data);
        })
    })  
}

function isDone(data){
    console.log(data);
}


 var a = MangeshAsync()
 console.log(a);
 a.then(isDone);



