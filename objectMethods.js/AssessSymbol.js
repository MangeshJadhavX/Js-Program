
//use a symbol in object in  key;

let mySymbol = Symbol('key1');

const user = {
    [mySymbol] : 'newvalue',    //when you put [ ] this then you now refer the symbol
     name : 'mangesh',   
    surname : 'jadhav',
    id : 121212
}


console.log(typeof(user[mySymbol])); ///this says mySymbol is string but our job is to implement the object.
                                     //!make the key in []  square bracket  

console.log(user);  //see the output