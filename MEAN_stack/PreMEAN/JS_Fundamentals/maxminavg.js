var array = [21, -5, -6, 18, 42, 55, 97, 88, -60, 11, 20, 9, 5, 89, -69, 45]

function maxMinAvg(arr) {
    let max = arr[0], min = arr[0], avg = 0;
    for(let idx = 0; idx < arr.length; idx++) {
        if(arr[idx] > max) {
            max = arr[idx]; } 
        if(arr[idx] < min) {
            min = arr[idx]; }
        avg += arr[idx]; 
    }
    avg /= arr.length;
    console.log(max);
    console.log(min);
    console.log(avg);
}

maxMinAvg(array);