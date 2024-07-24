

//!getter and setter in class

class User {
    constructor(username , password,email){
        this.username = username;
        this.password = password;
        this.email = email;
    }

   get email(){
    return this._email.split();  //todo : when we use get method the return keyWord is must write
   }

   set email(value){
     this._email = value;
   }

    get password () {
        return `${this._password}_updated`;
    }

    set password(value){     //todo : the setter is contain the one parameter the value we get form the obj;
        this._password = value;
    }
}


const userOne  = new User('manish',"mama",'rama@123');

console.log(userOne.password);

console.log(userOne.email);