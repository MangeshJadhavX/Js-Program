//call by function

function sum(num1,num2,fnToCall){
  let result = num1 + num2;
  fnToCall(result);
}

function displayResult(data){
console.log("result of the sum is :" + data);
}

function displayResultPassive(data){
console.log(" sum's results is : " + data);
}

const ans = sum(2,3,displayResult);
