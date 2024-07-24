let user = {
    x : '10',
    y : ()=>{
        console.log(this);  //treated enclosing lexical context  //it's treated global spacing(window obj);
    }
}


let userTwo = {
    x :'12',
    y : function (){
        let innerFun = ()=>{
            console.log(this);
            console.log(this.x);
        }
        innerFun();
    }
}

userTwo.y();
user.y();