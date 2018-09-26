// 1. Biggie Size

function bigSize(a){
    arr = a;
    for(i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = 'big';
        }
    }
    return arr;
}


// 2. Print Low, Return High

function minMax(a){
    arr = a;  
    max = 0;
    min = arr[0];
    for(i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        else if(arr[i] < min){
            min = arr[i];
        }
    }
    console.log(min);
    return max;
}


// 3. Print One, Return Another

function printReturn(a){
    odd = 0;
    arr = a;
    console.log(arr[arr.length - 2])
    for(i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 1)
            return arr[i];
    }
}


// 4. Double Vision

function double(a){
    arr = a;
    newArr = [];
    for(i = 0; i < arr.length; i++){
        newArr[i] = arr[i] * 2;
    }
    return newArr;
}


// 5. Count Positives

function countPos(arr){
    count = 0;
    for(i = 0; i < arr.length; i++){
        if(arr > 0){
            count++;
        }
    }
    arr[arr.length - 1] = count;
    return arr;
}


// 6. Evens and Odds

function evensOdds(arr){
    odds = 0;
    evens = 0;
    for(i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 1){
            evens = 0;
            odds++;
            if(odds % 3 == 0){
                console.log("That's odd!");
                odds = 0;
            }
        } 
        else if(arr[i] % 2 == 0){
            odds = 0;
            evens++;
            if(evens % 3 == 0){
                console.log ("Even more so!");
                evens = 0;
            }
        }
    } 
}


// 7. Increment the Seconds

function incr2nd(arr){
    for(i = 0; i < arr.length; i++){
        if(i % 2 == 1){
            arr[i] += 1
        }
        console.log(arr[i]);
    }
    return arr;
}


// 8. Previous Lengths

function prevLength(arr){
    for(i = arr.length-1; i > 0; i--){
        arr[i] = arr[i - 1].length;
    }
    return arr;
}


// 9. Add Seven to Most

function add7(arr){
    newArr = [];
    for(i = 1; i < arr.length; i++){
        newArr[i - 1] = arr[i] + 7;
    }
    return newArr;
}


// 10. Reverse Array

function revArr(arr){
    for(i = 0; i < arr.length / 2; i++){
        temp = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = arr[i];
        arr[i] = temp;
    }
    return arr;
}


// 11. Outlook: Negative

function outlook(arr){
    newArr = arr;
    for(i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            newArr[i] *= -1;
        }
    }
    return newArr;
}


// 12. Always Hungry

function hungry(arr){
    count = 0;
    for(i = 0; i < arr.length; i++){
        if(arr[i] === "food"){
            console.log("Yummy");
            count++
        }
    }
    if(count == 0){
        console.log("I'm hungry");
    }
}


// 13. Swap Toward the Center

function swapArr(arr){
    if(arr.length % 2 == 0){
        for(i = 0; i <= arr.length / 2 - 1; i += 2){
            temp = arr[i];
            arr[i] = arr[arr.length - i - 1];
            arr[arr.length - i - 1] = temp;
        }
    }
    else if(arr.length % 2 == 1){
        for(i = 0; i <= arr.length / 2 - 1/2; i += 2){
            temp = arr[i];
            arr[i] = arr[arr.length - i - 1];
            arr[arr.length - i - 1] = temp;
        }
    }
    return arr;
}


// 14. Scale the Array

function scale(arr, num){
    for(i = 0; i < arr.length; i++){
        arr[i] *= num;
    }
    return arr;
}