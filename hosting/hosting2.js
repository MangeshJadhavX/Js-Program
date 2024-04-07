console.log(addOne(5));  //we call the function before initialization and declaration

function addOne(num){
    return num + 1;
}


addTwo(5);    //! this give us error cant use before initialization //we hold the function in variable; 
const addTwo = function(num){
    return num + 1;
}



