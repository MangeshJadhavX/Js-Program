//!getter and setter in functions

function User (username,email){
    this._username = username;
    this._email = email;


Object.defineProperty(this,'email',{
    get : function() {
        return this._email.toUpperCase();
    },
    set : function(value){
        this._email = value;
    }

})
}

let userone = new User("raman" , "adadadadaa1212@gmail.com");

console.log(userone.email);




