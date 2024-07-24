
class User {
    constructor(username,password,email){   //! new keyword lihila tasa consructor call houn jato
       this.username = username;   
       this.password = password;
       this.email = email;
    }

    encrypted () {
      return  console.log(`Password is encrypted${this.password}abc`)
    }
    
    changeUsername(){
     return  console.log(`the username is ${this.username.toUpperCase()}`);
    } 

}

const userOne = new User('salmaan khan','bhaijaan@123','saluuu123@gmail.com');


userOne.encrypted();
userOne.changeUsername();


//todo  :behind scene


  function anotherUser (username,password,email){
    this.username =  username;
    this.password = password;
    this.email = email;
}

anotherUser.prototype.encrypted = function(){
    return `${this.password}ABCD`
}

anotherUser.prototype.changePassword = function(){
    return `${this.username.toUpperCase()}`
}

const userTwo = new anotherUser('malaikaa arrora' , 12344,'malaika123@gmail.com');


console.log(userTwo.encrypted());
console.log(userTwo.changePassword());







