




const mysymbol = Symbol("my symbol");

const users = {
    myFullName : "Mangesh Jadhav",
    age : 17,
    location :"Jamner",
    education : "BE",
    [mysymbol] : "key 1"
}


console.log(users["myFullName"]  + " " + users["age"]);
console.log(users[mysymbol]);



