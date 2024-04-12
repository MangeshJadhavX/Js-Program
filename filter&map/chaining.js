//chaining menace one or more method use are combine

let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

let newNumbers = myNumbers
  .map((num) => num * 10) //changes the values 
  .map((num) => num + 1)  //changes the values
  .filter((num) => num > 50);  //return true values

console.log(newNumbers);
