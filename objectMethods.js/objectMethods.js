
function ObjectMethod(obj){

    console.log(" original object :", obj);

    let keys = Object.keys(obj); //this is a global variable(we thinks this object is a class .keys is a static method);
    console.log("the object keys are :",keys);

    let values = Object.values(obj);
    console.log("the values of object are :",values);

    let entries = Object.entries(obj);  // convert the object's //![keys : value]  into a another array 
   let newArr = entries.flat(Infinity);
   console.log(newArr[4]);

    
    let hasprop = obj.hasOwnProperty("Profession");
    console.log("The hasprop is :",hasprop);
    

    let hasown = Object.hasOwn(obj,'firstName');  //todo : this return true or false if key is exists this return true;
    console.log(hasown);



    //assign menace marge two object together
    
    let newObj = Object.assign({},obj,{FavoriteActivity : "swimming"});  //combine two or more objects
    console.log("THe new object is :",newObj);

}


const obj = {  
   firstName : "Mangesh",
   height : "6.5",
   Profession : "Full Stack Web"
}


ObjectMethod(obj);  

