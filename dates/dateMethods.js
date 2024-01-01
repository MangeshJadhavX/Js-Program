let myDate = new Date() 
console.log(myDate.toDateString());// this is a date to string method

console.log(myDate.toTimeString());

console.log(myDate.toLocaleString());


let newDate = Date ( 2024,1,1);
console.log(myDate.toDateString());

console.log(Date.now()); //milliseconds since 1970
console.log(Math.floor(Date.now()/1000)); //millisecond since 1970 convert to  second;


myDate.setFullYear(2025);
console.log("After setFullYear:", myDate.toDateString());

myDate.setMonth(5); // Setting month to June (zero-indexed)
console.log("After setMonth:", myDate.toDateString());