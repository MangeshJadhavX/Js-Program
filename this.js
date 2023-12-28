const person = {
    FirstName : "manoj",
    LastName : "Thate",
    FullName : function(){
        return this.FirstName + " " + this.LastName;
    }
};

console.log(person.FullName()); 