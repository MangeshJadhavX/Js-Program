function MangeshAsyncFun(){
  let output = new Promise(function(resolve){
    //do some async logic here
    
    resolve("hii this my async function");
  })

  return output;
}


function main (){
    MangeshAsyncFun().then(function(value){
        console.log(value);
    })
}

main();






