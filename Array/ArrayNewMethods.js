//concat alternative


const Array1 = [1,2,3,4,5];
const Array2 = ['raman','alok','sneha','riaan'];
const Array3 = ['hema','soma','goma','roma'];

let combineArray  = Array1.concat(Array2).concat(Array3);  //
console.log(combineArray); 

//!we can do also spread operator 

let spredArrys = [...Array1,...Array2,...Array3];
console.log(`the new Array is${spredArrys}\n`);

/////////////////////////////////////

const another_array = [1,2,3,[4,5,6],[6,7,8,['sema','miya','riya','noya']]];

const realFlatArray =another_array.flat(Infinity); //todo :: use infinity  must here 
console.log(realFlatArray);
