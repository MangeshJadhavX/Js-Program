const express = require("express");

const app = express();

app.get("/health-checkup", function (req, res) {
  const kidneyID = req.query.kidneyID;
  const username = req.headers.username;
  const password = req.headers.password;

  if (username != "mangesh" && password != "12345") {
    //if(!(username === "mangesh") && (password === "1234")) //its also same
    res.status(400).json({
    msg : "something is wrong with input"
   })
   return;
  }  
  if((kidneyID != 1) && (kidneyID != 2)){
    res.status(411).json({
        msg : "something is wrong with input"
    })
    return;
  }
  
res.json({
    msg : "your kidney is Fine"
})

});

app.listen("3000");
