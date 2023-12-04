
//Starry Pattern Code

function starLine(n) {
    var answer = "";
    for (var i = 0; i < n; i++) {
      answer = answer + "*";
    }
    console.log(answer);
  }
  
  
  
  function starryPattern(n) {
   for (var i = 0; i <= n; i++) {
     starLine(i);
   } 
  }
  
  
  var answer = starryPattern(3);
  console.log(answer);
  
  // console.log("**");
  // console.log("***");
  // console.log("****");
  // console.log("*****");