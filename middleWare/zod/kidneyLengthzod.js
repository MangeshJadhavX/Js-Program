const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

app.use(express.json());

//{ email : string end @.com
//  password : at list 8 digit
//  country : In or Us
//}
//todo
// const schema = zod.object({
//     email :zod.string(),
//     password : zod.string(),
//     country : zod.literal("IN").or(zod.literal("US"))
// })

app.post("/health-checkup", function (req, res) {
  //[1,2]
  const kidney = req.body.kidney;
  const response = schema.safeParse(kidney);
  if (!response.success) {
    res.status(411).json({
      msg: "invalid Input",
    });
  } else {
    res.send({
      response,
    });
  }
});

app.listen(3000);
