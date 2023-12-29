

// this  a callback function  the arithmeticFinalFunction calls the sum function 
function calculateArithmetic(a,b,arithmeticFinalFunction){
    const ans = arithmeticFinalFunction(a,b);  // this call the sum function.
    return ans;

 }
 
 function sum(a,b){
     return a + b;
 }

 function sub(a,b){
    return a - b;
 }
  
 let value = calculateArithmetic(3 ,4,sub); // provide a function to the arguments (sum)
 console.log(value);