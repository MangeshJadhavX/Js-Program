
//combine the objects

const obj1 = {1 : 'a' , 2 : 'b' , 3 : 'c'};
const obj2 = {4 : 'd' , 5 : 'e' , 6 : 'f'};
const obj3 = {7 : 'g' , 8 : 'h' , 9 : 'i'};


const newObj = Object.assign({},obj1,obj2,obj3);

//!spread method;
const anotherNewObject = {...obj1,...obj2};
console.log(anotherNewObject);


console.log(newObj);