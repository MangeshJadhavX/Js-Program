let user =  {
  name : 'rahul',
  surname : 'shekhavat',
  fullname : function(){
    console.log(`The Full name is ${this.name} ${this.surname}`);
  }
}


let user2 = {
    name : 'sumit',
    surname : 'jadhav'
}

let user3= {
    name : 'snjot',
    surname : 'rane'
}



//todo : we can access Another OBJ method ;

//!this is a function browning

user.fullname.call(user2); //in this line the this is modified and this refer to user2

let getmethod = user.fullname.bind(user3);  //in this line the this is modified and this refer to user3
console.log(getmethod);
getmethod();

