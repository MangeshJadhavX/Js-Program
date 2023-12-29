
//this is a slice method of string


function cutIt(str,startIndex,endIndex){
let newStr = "";
for(let i = 0;i <= str.length;i++)
if(startIndex <= i && endIndex > i){
  newStr = newStr + str[i];
}
return newStr;
}


const value = "mangesh jadhav"
let ans = value.slice(0,7); // 0 to 6 
console.log(ans); 

const result = cutIt(value,0,7);
console.log(result);
