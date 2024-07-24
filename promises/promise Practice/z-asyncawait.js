
const newPromise = new Promise(function(resolve,reject){

    setTimeout(function(){
      let data = false;
  if (!data) {
    resolve({username : 'rani',surname : 'wani',id :401 })
  } else {
    reject("402 ERROR");
  }

    },1000)
})


async function getUserData(){
   try {
       const response =  await newPromise;
       console.log(response);
   } catch (error) {
    console.log(error);
   }
}

getUserData();