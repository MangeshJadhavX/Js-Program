let arr1 = [1,2,3,4,5,6];

const initialValue = 0;
const sumAllValue = arr1.reduce((acc,curr)=>{
   return acc + curr
},initialValue);  //!place initialvalue here

console.log(sumAllValue);