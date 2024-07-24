
console.log(Math.PI); // Output: 3.141592653589793


Object.defineProperty(Math, 'PI', {
    value: 12121,
    writable: true,
    configurable: true,
    enumerable: true
});

console.log(Math.PI); // Output: 12121













// console.log (Math.PI);
// Math.PI = 12121;


// Object.getOwnPropertyDescriptor(Math,'PI');

// Object.defineProperty(Math,'PI',{
//     writable: true
// })

// console.log(Object.getOwnPropertyDescriptor(Math,'PI'));
