const { toASCII } = require("punycode");

function wait1(t) {
    return new Promise(function(resolve){
        setTimeout(function(){
        resolve("hello");
        },t * 1000); 
    })
    
    }
    
    function wait2(t) {
      return new Promise(function(resolve){
         setTimeout(() => {
          resolve();  
         },t * 1000);
      })
    }
    
    function wait3(t) {
       return new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        },t * 1000);
       })
    }
    
    function calculateTime(t1, t2, t3) {
     
        const startTime = Date.now();  

      const Promise1 = wait1(t1);
      const Promise2 = wait2(t2);
      const Promise3 = wait3(t3);
      
      return Promise.all([Promise1,Promise2,Promise3]).then(function(){
        const endtime = Date.now();
        
        const TotalTime = endtime - startTime;
        return TotalTime;
      })
    }


    calculateTime(1,2,3).then(function(value){
        console.log(value);
    })
 
   
