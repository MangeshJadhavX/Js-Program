
//this is a slice method of string

// the slice and the substr methods are kind of same slice (substr is (0,5) its start from 0  to length 5)
// and the (slice is (2,5) star from 0  ad end to 5th position) 

function cutIt(str,startIndex,endIndex){
let newStr = "";
for(let i = 0;i <= str.length;i++)
if(startIndex <= i && endIndex > i){
  newStr = newStr + str[i];
}
return newStr;
}

 let result = cutIt('ramnarayan',0,7);
console.log(result);
///////////////////////////////////////////////////////
let value = "mangeshjadhav"
let ans = value.slice(2,5); // 0 to 6 
console.log(ans); 







