function SetUsername(username){
   this.username = username;
   console.log('function educated');
}

function createUser(username,email,password){
    // this.username = username;           //todo : call (this , fun) : this parameter is optional for call method;
    SetUsername.call(this,username);      //! we hold the reference of setUsername (Call).this is not a solution 
     this.email = email;             //! aapan recreance t kheto ahe refrence chya value store karya sathi aplyakade current context create karava lagel using (this) mag natar te remove sudha zale tari chaltil call stak madhun    
    this.password = password;
}

const userOne = new createUser('Ramanand' , "rama@123.in",'12344321');
console.log(userOne);