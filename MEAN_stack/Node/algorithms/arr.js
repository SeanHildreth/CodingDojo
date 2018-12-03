var arr = [];

for(var i = 0; i < Number.MAX_SAFE_INTEGER/2; i++) {
    arr.push(Math.random(-999999, 1000000));
}
console.log(arr);