const express = require("express");

const app = express();

let countRequest = 0; 

app.use(function(req,res,next){
  countRequest = countRequest + 1; 
  console.log(countRequest);
  next();
})

app.get("/",function(req,res){
  res.send("you are in get rout");
})

app.post("/",function(req,res){
  res.send("you are in post rout");
})

app.put("/",function(req,res){
  res.send("you are in put rout");
})

app.get("/requestCount",function(req,res){
    res.status(200).json({countRequest});
})

app.listen(3000);