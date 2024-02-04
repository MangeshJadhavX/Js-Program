
const express = require("express");

const app = express();


theRequestCount = 0;

function calculateRequest (res,res,next){
    theRequestCount++;
    console.log(theRequestCount);
    next();
}

app.get("/",calculateRequest,function(req,res){

})

app.post("/",calculateRequest,function(req,res){

})

app.listen(3001)



