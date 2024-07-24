//!this is a Lexical Scoping

function outer(){
    let person = 'samay';
    function innerOne(){
        console.log(person);
    }
    function innerTwo(){
        console.log(person);
    
    }
    innerOne();
    innerTwo();
}

outer();