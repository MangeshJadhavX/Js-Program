//gets value using rest operator

function calculateCartPrice(...Prices){
    return Prices;
}

console.log(calculateCartPrice(200,400,500));



function calculateMethods(num1,num2,...allNumber){

 return allNumber;
}

console.log(calculateMethods(100,200,3300,303,313,323)); //value 100 and 200 are are gos in parameter (num1 & num2);