
//in early days the promises is not in nodejs is use in web servers or browser


// the two parts in promises 1st is create the promises or 2nd is consume the promises


const promisesOne = new Promise(function(resolve,reject)  {   //you gave any function arrow fun/another fun
     //do asyn task
     //da calls ,cryptography,networks
    setTimeout(function(){
     console.log("the async function complete");
     resolve();
    },1000);  
})

promisesOne.then(function(){ // this is  consumed a promise
   console.log("Promise consumed");
})


////////////////////////////////////////////////

 new Promise (function(resolve,reject){  // its not necessary to create a variable f
    setTimeout(function(){
        console.log("this is second async fun");
        resolve();
    },1500);
}).then(function(){
    console.log("complete the second promise");
})


///////////////////////////////////////////////////////////
const thirdPromise = new Promise(function(resolve,reject){
 
    setTimeout(function(){
        console.log("we have a object");
        resolve({firstName : "Mangesh",LastName : "Jadhav"}); // we pass a object or we pass a fun and a data also 
    },2000);
})

thirdPromise.then(function(user){
   console.log(user);
})
///////////////////////////////////////////////////////////////////

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 2500)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 3000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.