"use strict";

console.log(this);

function hello (){
    console.log(this);
}

hello();

//this is also depend on how the fun is called

function x (){
    console.log(this);
}


x();
window.x();

//this in side obj

let user = {
    name : 'mj',
    x : function(){
        console.log(this)
    }
}

user.x();

let userOne = {
    name : 'samy',
    printName : function(surname,live){
        console.log(`${this.name} ${surname} ${live}`);
    }
}

let userTwo= {
    name : 'ranjan'
}

userOne.printName.call(userTwo);

const getData = userOne.printName.bind(userTwo,'joshi','mumbai');
getData();

//inside arrow  fun

let y  = ()=>{
    console.log(this);
}

y();

//function inside  arrow fun //behave strict and non strict mode

function arrowFun(){
    let a  = 10;
   let x = ()=>{
    console.log(this);
   }
   x();
}


arrowFun();


let obj = {
    a : 10,
    x : function(){
        let x = ()=>{
            console.log(this);
        }

        x();
    }
}

obj.x();


document.querySelector('.btn').addEventListener('click',function(){
    alert(this.tagName);
})












