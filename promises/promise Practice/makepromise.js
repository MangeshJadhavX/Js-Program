// //! 

// const { promise } = require("zod");

// const newPromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('async function');
//         reject('error occupied');
//         resolve({user : 'raman malodhra' , occupation: "Teacher"});
       
//     },3000);
// })

// newPromise.then(function(user){
//     console.log("promise are get");
//      return user.occupation;
// }).then(function(username){
//     console.log(username);
// }).catch(function(error){
//   console.log(error);
// })


// //

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//        console.log("create a Promise");
//        resolve();
//     },2000);
// }).then(()=>{
//     console.log("promise are consumed");
// })

//async await


const createPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Promise are created");
        resolve({user : "manii" , id : "1212"});
    },2000)
})


//! we user
async function getPromise(){
   console.log("promise are consumed"); 
   let get = await createPromise;
   console.log(get);
}

getPromise();


