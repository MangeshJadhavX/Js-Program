
function createUser (username,id,password){
    this.username = username;
    this.id = id;
    this.password = password;

}

createUser.prototype.increment = function(){
    let ans =  this.id++;
    return ans + 1;
}

createUser.prototype.showPassword = function(){
    console.log(`the password is ${this.password}`);
}

createUser.prototype.changeUsername = function(){
    this.username = "galaxy";
}


let userOne =  new  createUser('manoj',33,828281);
let userTWo = new createUser('satish',11,12345678);

userOne.showPassword();
userTWo.showPassword();

let getID1 =userOne.increment();
console.log(getID1);

let getID2 =userTWo.increment();
console.log(getID2);


