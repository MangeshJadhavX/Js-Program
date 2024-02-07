
//using zod 


const zod = require("zod");

function inputValidation(obj){
 
    const schema = zod.object({
        email :zod.string().email(),
        password : zod.string().min(8)
    })

    const response = schema.safeParse(obj);
    console.log(response);
}

inputValidation({
    email : "mangeshrj3838@gmail.com",
    password : "122321212123"
})


