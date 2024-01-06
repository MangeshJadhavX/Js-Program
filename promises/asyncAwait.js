function MangeshAsyncFun() {
    let output = new Promise(function (resolve) {
        //do some async logic here

        setTimeout(function () {
            
            resolve("hii this my async function");

        }, 2000);


    })

    return output;
}


async  function main() {      // this await this is clean way 
      let value = await MangeshAsyncFun();
      console.log(value);
      console.log("inside main function");
       
}

main();
console.log("hello bhaiLog");