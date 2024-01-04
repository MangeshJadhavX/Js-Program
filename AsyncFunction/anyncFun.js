function sum(n){
   
   let ans = 0; 
    for(let i = 0; i < n;i++){
       
       ans += i; 
    }
  return ans;
}


function findsumTill100(){
    console.log(sum(100));
}

//busySleep

// function bussySleep( ) {  //!  this  is a synchronous function
                                                                       
//    let a  = 0;
//    for(var i = 0;i < 1000000;i++) {
//       a += i;
//    }
//    console.log(a);
// }

// bussySleep();




setTimeout(findsumTill100,1000);  // this is a asyncfunction  because when the js thread come here 
                                     
 //todo setTimeout js thread la manto kahi taan ni mi he karto tu bakiche kaam kar pudhche 
 
console.log(" hey i am Mangesh");
