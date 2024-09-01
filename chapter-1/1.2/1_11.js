//functionn f(n) = f(n-1) + 2*f(n-2) + 3*f(n-3)

function recursiveProcessImpl(n){
   return n<3?n:(recursiveProcessImpl(n-1) + 2*recursiveProcessImpl(n-2) + 3*recursiveProcessImpl(n-3));
}

function iterativeProcessImpl(n,result){
    return n<3?result:iterativeProcessImpl(n-1,n+iterativeProcessImpl(n-1))
}

console.log(recursiveProcessImpl(4));
console.log(iterativeProcessImpl(4,1));
