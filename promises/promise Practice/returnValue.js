const newPromise = new Promise(function(resolve,reject){

    setTimeout(function(){
        let error = false;  //todo : give true its give us error
        if (!error){
            resolve({name : "Ramesh",surname : "sonawane",id : "4023"});
        } else {
            reject("ERROR : 402"); 
        }
      
    },1000);

})

newPromise
.then(function(user){
    console.log(user);
    return user.surname;
})
.then(function(surname){
    console.log(surname);
})
.catch(function(error){
   console.log(error);
})
.finally(()=>{   //!  this is execute compulsory;
    console.log("the promise is consumed or rejected"); 
})
