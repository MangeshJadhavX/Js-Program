function square(n){
    return n * n;
}

function cube(n){
    return n * n * n;   
}


function sumOfSomething(a,b,fn){
    value1 = fn(a);
    value2 = fn(b);

    return value1 + value2;
}


let ans = sumOfSomething(1,2,square);
console.log(ans);
