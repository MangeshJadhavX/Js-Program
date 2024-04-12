//!this is ugly way to do this 
// const arr = [1,2,3,4,5,6,7,8,9,12];

//give me the even number of array

// const newArray = [];

// for(let i = 0; i < arr.length;i++){

//     if(arr[i] % 2 == 0){
//         newArray.push(arr[i]);
//     }

// }

// console.log(newArray);

//! write way to do filtering

const input = [1,2,3,4,5,6,7,8,9,12,15,16,18];
                        //anonymous function
const Ans = input.filter(function (n)
{ 
  if(n % 2 == 0){
    return true;
  }
  else{
    return false;
  }
}) 

console.log(Ans);




//todo :- using filter

const value = [1,2,3,4,5,6,7,8,12];

function filterValue(n){
    if(n % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

const ans = value.filter(filterValue);
console.log(ans);

