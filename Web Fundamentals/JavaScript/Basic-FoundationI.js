// 1. Get 1 to 255

function printNum(){
    for(i = 1; i <= 255; i++){
        console.log(i);
    }
}


// 2. Get even 1000

function evenSum(){
    sum = 0;
    for(i = 1; i <= 1000; i++){
        if(i % 2 == 0){
            sum += i
        }
    }
    return sum;
}


// 3. Sum odd 5000

function oddSum(){
    sum = 0;
    for(i = 1; i <= 5000; i++){
        if(i % 2 == 1){
            sum += i
        }
    }
    return sum;
}


// 4. Iterate an Array

function iterateArr(a){
    arr = a;
    sum = 0;
    for(i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}


// 5. Find Max

function maxVal(a){
    arr = a;
    max = 0;
    for(i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}


// 6. Find Average

function arrAvg(a){
    arr = a;
    avg = 0;
    for(i = 0; i < arr.length; i++){
        avg += arr[i];
    }
    avg /= arr.length;
    return avg;
}


// 7. Array Odd

function oddArr(){
    arr = [];
    for(i = 1; i <= 50; i++){
        if(i % 2 == 1){
            arr.push(i);
        }
    }
    return arr;
}


// 8. Greater than Y

function greaterY(a, b){
    arr = a;
    y = b;
    num = 0;
    for(i = 0; i < arr.length; i++){
        if(arr[i] > y){
            num++;
        }
    }
    return num;
}


// 9. Squares

function squared(a){
    arr = a;
    for(i = 0; i < arr.length; i++){
        arr[i] *= arr[i];
    }
    return arr;
}


// 10. Negatives

function negatives(a){
    arr = a;
    for(i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}


// 11. Max/Min/Avg

function arrNums(a){
    arr = a;  
    max = 0;
    min = arr[0];
    avg = 0;
    newArr = [];
    for(i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        else if(arr[i] < min){
            min = arr[i];
        }
        avg += arr[i];
    }
    avg /= arr.length;
    newArr.push(max, min, avg);
    return newArr
}


// 12. Swap Values

function valSwap(a){
    arr = a;
    temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr;
}


// 13. Number to String

function numStr(a){
    arr = a;
    for(i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 'Dojo';
        }
    }
    return arr;
}