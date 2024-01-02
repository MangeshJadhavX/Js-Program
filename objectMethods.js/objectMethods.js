
function ObjectMethod(obj){

    console.log(" original object :", obj);

    let keys = Object.keys(obj); //this is a global variable(we thinks this object is a class .keys is a static method);
    console.log("the object keys are :",keys);

    let values = Object.values(obj);
    console.log("the values of object are :",values);

    let entries = Object.entries(obj);  // convert the object values and keys into a another array 
    console.log("the entries of object are :",entries);
    
    let hasprop = Object.hasOwnProperty("property");
    console.log("The hasprop is :",hasprop);
    
    // assign menace marge two object together
    
    let newObj = Object.assign({},obj,{FavoriteActivity : "swimming"});
    console.log("THe new object is :",newObj);

}


const obj = {  
   firstName : "Mangesh",
   height : "6.5",
   Profession : "Full Stack Web"
}


ObjectMethod(obj);

