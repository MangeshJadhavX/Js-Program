

const fs = require("fs");    //its a node js library its provide to some functionality read from files and write in files  

fs.readFile("AsyncFunction/mj.txt","utf-8",function(err,data){ //its delegate the task to this fun
     console.log(data); //this fun is waited for  completed the  below tasks.
})

console.log("read the below"); // this runs first   