
function sum (n){

    let ans = 0;

   for(let i = 0 ; i < n; i++){
       ans = ans + i;
   } 
   return ans;
}


function CountTill100 () {
    console.log(sum(50));
}


setTimeout(CountTill100,2000);

console.log('hello summit');
