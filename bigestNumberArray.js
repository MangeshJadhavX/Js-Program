//uncomplete


const biggestNumberArray = [11,2,3,4,3,4,55,66,7,7,88,77,443,554,656,6655];

let bigNum = biggestNumberArray[0];

for(let i = 0;i < biggestNumberArray.length;i++){
 
if(biggestNumberArray[i] > bigNum){

    bigNum = biggestNumberArray[i];

}

}

console.log(bigNum);

