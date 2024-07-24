//Immediately invoked function expression (immediately executable);
(function IIFE(){  //!named IIFE 
    console.log(`DB Connection`);
})();


(() =>{
    console.log(`DB Connected`);
})();

//?
((name) =>{  //passing the parameter also;
    console.log(`The name of the person is ${name}`)
})('Rajmolli');