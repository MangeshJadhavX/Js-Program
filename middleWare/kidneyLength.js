const express = require("express");

const app = express();

app.use(express.json());

app.post("/health-checkup",function(req,res){
 
 const kidney = req.body.kidney;
 
 const kidneyLength = kidney.length;

 res.send("you have number of" + kidneyLength);

})

//?global catch
//this is a global catches for handling exceptions if some provide a random input the we show the end user 
//the mes or err the benefit of this  we hidden the exception 
app.use(function(err,req,res,next){ //todo this contain 4 inputs
   res.json({
    msg :"Something is wrong with server"
   })
})


app.listen(3002);

























