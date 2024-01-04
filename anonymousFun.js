function sum(a, b) {
    return a + b;
}
function minus(a, b) {
    return a - b;
}


function caculate(a, b, fn) {
    const value1 = fn(a, b);

    return value1;
}



let ans = caculate(5, 2,
    function (a, b) {
        return a * b;  // this call a anonymous function has no name and we passing the body of fn in argument 
    });
console.log(ans);