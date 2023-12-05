
//Fibonacci sequence
 


function hello(n) {
  var next = "";
  var prev = 0;
  var cur = 1;
  console.log(prev);
  console.log(cur);
  for(var i = 0 ; i < n; i++) {
   next = prev + cur;
   console.log(next);
   prev = cur;
   cur = next; 
  }
}

var answer = hello(8);
console.log(answer);