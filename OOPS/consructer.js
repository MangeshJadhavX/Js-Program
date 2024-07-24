
//todo : constructor function
//! this khy he { } empty obj  apn khy karto he (this.username) this obj{} madhe value takat ahot. 



function user(username,loginCount,subscribe,subscribePrice){
    this.username = username;   //   this.username(variable) = username(parameter);
    this.loginCount = loginCount;
    this.subscribe = subscribe;
    this.subscribePrice = subscribePrice;


    //  return this;  this optional when we write constructor fun (new);
}

let userOne = new user('Mahendra','4',true,299);  //?if we cant use new key word value is overWright thats why userOne will be change
let userTwo = new user('raman',3,false,399);
console.log(userOne); 
console.log(userTwo); 
