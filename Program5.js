
//remove negative numbers  array using forEach Loop

var arr = [1,3,-4,5,-6,7,7,-8,9,-6,54,-65];

arr.forEach(function(val,index){

  if(val < 0){
    arr.splice(index,1);
  }
})

console.log(arr);