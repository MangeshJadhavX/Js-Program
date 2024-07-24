//! 1st way
const newPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('this is promise');  //aadhi he complete hoil.
        resolve();
    },3000) //3 sec
})

 newPromise.then(function(){
    console.log('promise is consumed');
 })


 //?------------------------------------------------------------------------------

 //! 2nd  way

 new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async Data");
        resolve();
    },2000)  // 2 sec
 }).then(function(){
    console.log('promise is consumed');
 })





