let myArray = [1,2,3,4,5];

myArray.push(6);
console.log(myArray);

myArray.pop();
console.log(myArray);


myArray.unshift(11);
console.log(myArray);

myArray.shift();
console.log(myArray);


let newArray = myArray.join();   ///this method adds the element onn new Array but convert this string format
console.log(newArray); 


console.log(myArray.includes(4));  //its return true or false


console.log(myArray.indexOf(5));   //gives the index of an element in array  
