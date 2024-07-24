class User {
    constructor(username){
        this.username = username;
    }


     logMe(){
       console.log(`The username is ${this.username}`);
     }
}


class Teacher extends User {
    constructor(username,password,email){
        super(username);                     //!super keyword is behind the work like this 
        this.password = password;
        this.email = email;
    }

    course(){
        console.log(`the new course added username  is ${this.username}`);
    }
}

const userOne = new Teacher('mangesh',12345,'mj@gmial.com');
// console.log(userOne);
const userTwo = new User('suraj');
userOne.course();
userTwo.logMe();

// console.log(userOne === userTwo);
// console.log(userOne.username === userTwo.username);

console.log(userOne instanceof User);
console.log(userOne instanceof Teacher);
console.log(userTwo instanceof User);
console.log(Teacher instanceof User);
