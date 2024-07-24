let number = new Number(100);
console.log(number);  
console.log(number.toFixed(2)); //float value 


let number1 = 100000000;
console.log(number1.toLocaleString('en-IN'));  //convert to indian rupees string

const anotherNumber = 129.999;  //is 
console.log(anotherNumber.toPrecision(3));


console.log(Math);

// console.log(Math.abs(-4));   //make only negative value to positive

// console.log(Math.round(4.6)); // 4.5 chya pudhe ashin tar 5 deil yachya oppsite asel tar 4 deil

// console.log(Math.ceil(4.2));  //jar kadhi 4 chya varti asla tar 5 ch deil.

// console.log(Math.floor(4.9)); // 4 ch deil

// console.log(Math.max(4,3,5,6,7,9)); 

// console.log(Math.min(1,2,3,4,4,9));


console.log(Math.random());

console.log((Math.random() * 10) + 1);  

console.log(Math.floor(Math.random() * 10) + 1);  //value is +1 -> ...2....3...'

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //gives you  random value between 10 to 20; 
