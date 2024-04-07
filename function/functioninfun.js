function returnHalloWorld(){
    function f(){
        return "hello World"
    }
    
    return f;
    
}

const ans = returnHalloWorld();
console.log(ans());