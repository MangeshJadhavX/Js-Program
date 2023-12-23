function sumFactors(Num) {
    let sumFact = 0;
    let iCnt = 0;
console.log("Factors are : \n");

for(iCnt = 1;iCnt <= Num/2; iCnt++) { //time complexity 
    if((Num % iCnt) == 0){
        sumFact = sumFact + iCnt;
    } 
}
console.log(sumFact);
}

 
Boolean cheackPerfect(data) {

}



cheackPerfect(10);





// 10 = 1 2 5 10