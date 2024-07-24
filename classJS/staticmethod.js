
class User {
    constructor(username){
        this.username = username;
    }

    showUser (){
      console.log(this.username);
    }

    static  changeUser(){    //! no one can accessible(static)
        console.log(`${this.username.toUpperCase()}`)
    }
}


class manger extends User {
 constructor(username,password){
    super(username);
    this.password = password;
 } 

 accessPassword(){
    console.log(this.password)
 }

}

const userOne = new User('Dhoni');
const userTwo = new manger('sanam puri' , 'sanam@1234');
console.log(userTwo);

 userTwo.changeUser();   //!cant access the changeUSerFun because the fun is static
 userOne.changeUser();