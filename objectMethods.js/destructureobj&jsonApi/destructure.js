//!this is a syntactical sugar
//destructure obj  
const users = {
    id : "mangesh",
    promptPrototype : "01232",
    access : "denied"    
}
//console.log(users.promptPrototype);  //! destructure  const {key} = object name   
const  {promptPrototype : P_Prototype} = users    

const {access} = users;
const{id} = users;

console.log(access);
console.log(P_Prototype);
console.log(id);