function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n
}


function sumOfNumbers(a, b, fn) {

    console.log(fn);
    const Value1 = fn(a);
    const value2 = fn(b);

    return Value1 + value2;
}


let answer = sumOfNumbers(2, 2, cube);
console.log(answer);