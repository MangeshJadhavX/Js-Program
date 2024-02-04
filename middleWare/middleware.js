
const express = require("express");

const app = express();


theRequestCount = 0;

function calculateRequest (res,res,next){
    theRequestCount++;
    console.log(theRequestCount);
    next();
}

app.get("/",calculateRequest,function(req,res){
const opeartor = req.body.operator;
    if(operator == *)
       {
           let a = Number.ParseInt(req.body.num1);
           let b = Number.ParseInt(req.body.num2);

           console.log(a * b);
       }
})

app.post("/",calculateRequest,function(req,res){

})

app.listen(3001)



