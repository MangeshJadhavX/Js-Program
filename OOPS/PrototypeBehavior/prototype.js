//!we can crete object prototype this available in all the non-primitive data type


let myHero = ['iron man' , 'thor' , 'wanda'];

let mystr = "string";


let superPower = {
    ironMan : 'Iron suit',
    thor : "lightning",
    wanda : 'mind control',
    bestSuperpower : function (){
        console.log(`the best superPower is ${this.ironMan}`);
    }

}

//!this method is avalable in all objects eg (myhero) = array, mystr = string;because all things are behave like a object  in js(array, string ,functions)
Object.prototype.spaceFuryX = function(code){
    if(code === 1){
        console.log(`The spaceFuryX is available of all superPower eg :${this.ironMan}(this is available in all the objects)`);
    }else {
        console.log(`The spaceFuryX is available of all MyHero eg (this is available in all the objects)`);

    }  
}

Array.prototype.onlyForArray = function(){
    console.log("this power is only for array");
}


String.prototype.onlyForString = function(){
    console.log(`this power is only for ${mystr}`);
}

superPower.spaceFuryX(1);
myHero.spaceFuryX(2);  //? array
mystr.spaceFuryX(2); //?String



//superPower.onlyForArray(); //!this is give us error because this is a object;
myHero.onlyForArray();

mystr.onlyForString();

