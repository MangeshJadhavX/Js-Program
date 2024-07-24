const { set } = require("zod");

let user ={
    _username : 'suraj matre',
    _email : 'suraj@123.com',

    get email(){
     return this._email.toUpperCase();
    },
    set(value){
     this._email =value;
    }
}

const userOne = Object.create(user);
console.log(userOne.email);