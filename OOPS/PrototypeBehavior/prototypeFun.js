
function multiply5(num){
   return num * 5;
}

multiply5.power = 2;  //this proves the function is behave like object


const ans = multiply5(5);
console.log(ans);
console.log(multiply5.power);
console.log(multiply5.prototype);