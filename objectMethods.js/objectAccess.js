//adds a function on object 

const user = {
    name: 'mangesh',
    function :"kamiloo"
}

user.greeting = function(){
    console.log(`there is function we will add ${this.function}`);
}

user.greeting();

console.log(user);

