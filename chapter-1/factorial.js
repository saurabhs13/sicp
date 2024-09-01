function factorialV1(n){
    return n===1?1:n*factorialV1(n-1);
}

function factorialV2(n){
    return factorialIterative(1,1,n);
}

function factorialIterative(count,result,maxCount){
    return count>maxCount?result:factorialIterative(count+1,count*result,maxCount);
}
console.log(factorialV1(5));
console.log(factorialV2(5));