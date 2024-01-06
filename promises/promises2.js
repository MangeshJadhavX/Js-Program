var promises = new Promise (function(resolve){
    setTimeout(function(){
        resolve("the data");
    },1000);
})


function onDone(){
    console.log(promises);
}

// console.log(promises);
promises.then(onDone); //its takes a function