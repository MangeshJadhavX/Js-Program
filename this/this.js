const user = {
    jobs : "computer science",
    packages : "above 2 lakhs",
    filedInTechnology : function(){
        console.log(`The softer developer package this year ${this.packages}`);
        console.log(this);   //!this access the current context( keys value);  
    }
}


user.filedInTechnology();
user.packages = "above 10 lakhs"
user.filedInTechnology();