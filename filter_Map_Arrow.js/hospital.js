//create a memory hospital
// you need to create 4 routs
// get :user can check how many kidney they have and this kidney is healthy or not
// post : user can add a kidney
// put :user can replace a kidney,and make it healthy
// delete : user can remove unhealthy  a kidney
const express = require("express");

const app = express();

const user = [
  {
    name: "mangesh",
    age: "14",
    kidney: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json());

app.get("/", function (req, res) {
  const userKidney = user[0].kidney;

  const kidneyCount = userKidney.length;

  function filterKidney(kidneys) {
    if (kidneys.healthy == true) {
      return true;
    } else {
      return false;
    }
  }

  const healthyKidney = user[0].kidney.filter(filterKidney);

  const healthyKidneyCount = healthyKidney.length;

  const unhealthyKidney = kidneyCount - healthyKidneyCount;

  res.json({
    healthyKidneyCount,
    unhealthyKidney,
    kidneyCount,
  });
});

app.post("/", function (req, res) {
  const addHealthy = req.body.addHealthy;

  user[0].kidney.push({
    healthy: addHealthy,
  });

  res.json({
    msg: "add to healthy",
  });
});

app.put("/", function (req, res) {
  const healthResult = user[0].kidney.filter((kidneys) => 
  {
    if (kidneys.healthy === false) {
      kidneys.healthy = true;
    }
    
  });

  const replaceToHealthy = healthResult.length;

  res.json({
    msg: "convert unhealthy to healthy",
  });
});

// app.delete("/",function(req,res){
   
//  const removeKidney = user[0].kidney.filter((deleteKidney)=>{
   
//     if(deleteKidney.healthy === false){

//     }

//  })  //************** */
        /************** */
// })

app.listen(3000);
