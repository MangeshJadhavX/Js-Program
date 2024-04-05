let myArray = [1,2,3,4,5];

let newArray = myArray.slice(0 , 3);  //last element include nahi kart  

console.log(newArray);
console.log(myArray);

 let secondArray = myArray.splice(0,3);
 console.log(myArray);
 console.log(secondArray);