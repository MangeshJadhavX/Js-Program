
//remove negative numbers from array using for loop

var arr = [1,2,-4,5,6,-45,-64,3,2,4,-44,-5,5,-6,-6]

var count = 0;

for(var i = 0; i < arr.length; i++){
  if(arr[i] < 0){
    count++;

  }
}

for(var j = 1; j <= count;j++) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < 0){
      arr.splice(i,1);
      break;
    }
  }  
} 

console.log(arr);