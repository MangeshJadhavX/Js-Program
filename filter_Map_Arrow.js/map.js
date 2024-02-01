//todo //this is without using map

// const number = [1,2,3,4,5];
//output
//[2,4,6,8,10]

// const newArray = [];

// for(let i = 0; i < number.length;i++){
    
//     newArray.push(number[i] * 2);
    
// }

// console.log(newArray);


const value = [1,2,3,4,5];

function transform(a){
    
   return a * 2; 
}

const ans = value.map(transform); //this is 1 st syntax
console.log(ans);


/////////////////////////////////////


const input = [1,2,3,4,5];

const Ans = input.map((a) => {  //arrow function
    return a * 3;
})

console.log(Ans);


