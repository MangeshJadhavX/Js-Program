const { object } = require("zod");

const users = {
    name : 'mangesh',
    surname : 'jadhav',
    id : 144242
}


users.id = 5555;
Object.freeze(users);
console.log(users);
users.surname = 'yadav'  // this value is not change  because of object.freeze
console.log(users);      