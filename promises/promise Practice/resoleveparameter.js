//! passing the object
const createPromise = new Promise(function(resolve,reject){
    
    setTimeout(function(){
        resolve({name : 'Mangesh' , surname : 'Jadhav',age : '23'});  //! we can pass anything here
        
    },1000);
})

createPromise.then(function(user){
  console.log(user);
})

//?---------------------------------------------------------------------------------------------------


//! passing the array
const anotherPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve([1,2,3,4,5,6]);  //todo : we can pass also the string or numbers 
    },1000)
})

anotherPromise.then(function(user){
    console.log(user);
})

//?