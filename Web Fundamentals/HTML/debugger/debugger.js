

function multiply(a,b){
    return a * b;
}
function square(n){
    return multiply(n, n);
}
function cube(x){
    return multiply(square(x), x);
}

console.log(cube(3));