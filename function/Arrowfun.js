
//?when you access the this keyword         //In JavaScript, the this keyword refers to an object.


// function learn(){
//   console.log(this);  //!this is gives us lost of key and values;
// }

// learn(); 


//arrow fun

const chai = () =>{
    let username = "manoj"
    return username;
}

console.log(chai());


//!implicit return 

const addNum = (num1 ,num2)=> (num1 + num2);  //we cant write return keyword here; because of braces  
console.log(addNum(2,3)); 



const objreturn = () => ({username : "sahil"});  //!must write parenthesis() here
console.log(objreturn());

//!explicit return

const expliReturn = (message)=>{
 return message;
}

console.log(expliReturn("he whats up"));



