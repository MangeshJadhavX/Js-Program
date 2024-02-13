//we return a promise to a function using .then function

function sleep(milliseconds) {
return new Promise(function(resolve){
    setTimeout(function(){
     resolve();
    },milliseconds);
})

}

 
const  a = sleep(3000)
console.log(a);
a.then(function(){
    console.log("resolve after milliseconds");
})


//
