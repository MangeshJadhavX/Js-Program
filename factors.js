function displayFactors(Num) {

    let iCnt = 0;
console.log("Factors are : \n");

for(iCnt = 1;iCnt <= Num/2; iCnt++) { //time complexity 
    if((Num % iCnt) == 0){
        console.log(iCnt);
    } 
}
console.log(Num);

}


displayFactors(10);




// 10 = 1 2 5 10