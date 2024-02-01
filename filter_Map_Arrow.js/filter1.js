const arr =["mangesh","sumit","om","rahul"];

function findName(n){
    if(n.startsWith("m")){  //startsWith method
        return true;
    }
    else {
        return false;
    }
}

const ans = arr.filter(findName);
console.log(ans);