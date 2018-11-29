var array = [21, -5, -6, 18, 42, 55, 97, 88, -60, 11, 20, 9, 5, 89, -69, 45]

function bubbleSort(arr) {
    let sorted = true;
    for(let idx = arr.length - 1; idx > 0; idx--) {
        for(let j = 0; j < idx; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                sorted = false;
            }
        }
        if(sorted === true) {
            return arr;
        }
    }
    return arr;
}
console.log(bubbleSort(array));


// O(n)
// function printArray(arr){
//     for(var i=0; i<arr.length; i++){
//         console.log(arr[i]);
//     }
// }

// O(1)
// function findNth(arr, n){
//     console.log(arr[n]);
// }

// O(n)
// function halving(n){
//     var count = 0;
//     while(n > 1){
//         n = n/2;
//         count++;
//     }
//     return count;
// }

// O(n^2)
// function identityMatrix(n){
//     var matrix = [];
//     for(var i=0; i < n; i++){
//         var row = [];
//         for(var j=0; j < n; j++){
//             if(j == i){
//                 row.push(1);
//             }
//             else{
//                 row.push(0);
//             }
//         }
//         matrix.push(row);
//     }
//     return matrix;
// }