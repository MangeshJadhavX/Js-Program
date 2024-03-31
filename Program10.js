//covert the boolean

const { nan } = require("zod");

let val = 1;

let valueInBoolean = Boolean(val);
console.log(valueInBoolean);

//////////////////////////////////////////////////////////////
let val1 = "";  //? ans :false because this falsy value its empty string
let valueInBoolean1 = Boolean(val1);
console.log(valueInBoolean1);


//////////////////////////////////////////////

let val2 = "ramuu";  //? ans : true  this is gave us true because this truthy value 
let valueInBoolean2 = Boolean(val2);
console.log(valueInBoolean2);


//convert to string 

let string = NaN;  //true :> string || null :null(string) ||Nan:Nan(string);  

let valueInString = String(string);
console.log((typeof(valueInString)));
console.log(valueInString);