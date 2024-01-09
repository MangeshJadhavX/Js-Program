

// hwo we access a symbol datatype in object


const mysymbol = Symbol("my symbol"); // this way to define the symbol data type 

const users = {
    myFullName : "Mangesh Jadhav",
    age : 17,
    location :"Jamner",
    education : "BE",
    [mysymbol] : "key 1"   // if don't give braces in my symbol its gave you //! undefine
}


console.log(users["myFullName"]  + " " + users["age"]);
console.log(users[mysymbol]);



