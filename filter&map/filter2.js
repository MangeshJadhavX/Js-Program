let  arr = [1,2,4,4,3,4,5,6,7,8];

// const ans = arr.filter((num)=>(num > 5));  //? this is a implicate return
// console.log(ans);

const ans = arr.filter((num)=>{  //!  explicate return 
    return num > 5;
})
console.log(ans);


//!we can use also use foreach
const newArr =[]

arr.forEach((val) =>{
    if(val > 2){
        newArr.push(val);
    }
})

console.log(newArr);

