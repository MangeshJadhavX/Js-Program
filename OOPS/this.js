//todo : object literal
//! when you use this key word this keyword use on currentContext ;

let user = {
    username : "Manmohan Singh",
    id : '121',
    signIn : "manoj@123.in",
    anotherUser : function (){
        // console.log(` Username : ${this.username} `);
        console.log(this);  //this give us current context
    }  

}

console.log(user.username);
console.log(user.anotherUser());
console.log(this); //global context