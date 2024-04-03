function mathMethods(value) {
    console.log("Original Value:", value);
  
    let rounded = Math.round(value);       //its make not pointable value
    console.log("After round():", rounded);
  
    let ceiling = Math.ceil(value);  
    console.log("After ceil():", ceiling);
  
    let flooring = Math.floor(value);   // make lowest integer value
    console.log("After floor():", flooring);
  
    let randomValue = Math.random();   // its give you random value from 0 to 1;
    console.log("After random():", randomValue);
  
    let maxValue = Math.max(5, 10, 15);  // returning the maximum value
    console.log("After max():", maxValue);
  
    let minValue = Math.min(5, 10, 15);  // return the minimum value
    console.log("After min():", minValue);
   
    let powerOfTwo = Math.pow(value, 2);  // increase power by 2
    console.log("After pow():", powerOfTwo);
  
    let squareRoot = Math.sqrt(value);  // give a square root 
    console.log("After sqrt():", squareRoot);
  }
  
  // Example Usage for Math Methods
  mathMethods(25.11);
  mathMethods(9);
  mathMethods(25);
  

