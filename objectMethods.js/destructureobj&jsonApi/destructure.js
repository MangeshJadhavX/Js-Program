//!this is a syntactical sugar
//todo : this topic is help us on react  

//destructure obj  
const users = {
    id : "mangesh",
    promptPrototype : "01232",
    access : "denied"    
}
//console.log(users.promptPrototype);  //! destructure  const {key} = object name   
const  {promptPrototype : P_Prototype} = users      //we can change the name also

const {access} = users;
const{id} = users;

console.log(access);
console.log(P_Prototype);
console.log(id);