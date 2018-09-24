// 1. Sigma

function sigma(num){
    sum = 0;
    for(i = 0; i <= num; i++){
        sum += i;
    }
    return sum;
}


// 2. Factorial

function factorial(num){
    sum = 1;
    for(i = 1; i <= num; i++){
        sum *= i;
    }
    return sum;
}


// 3. Fibonacci

function fibonacci(num){
    num1 = 1;
    num2 = 0;
    fnum = 0;
    if(num == 0 || num == 1){
        return num;
    }
    else if(num > 1){
        while(num >= 1){
            fnum = num1;
            num1 += num2;
            num2 = fnum;
            num--;
        }
    }
    return fnum;
}


// 4. Array: Second-to-Last:

function nextLast(arr){
    if(arr.length > 1){
        return arr[arr.length - 2];
    }
    else if(arr.length == 1){
        return null;
    }
}


// 5. Array: Nth-to-Last:

function nthLast(arr, n){
    if(arr.length > 1){
        return arr[arr.length - n];
    }
    else if(arr.length == 1){
        return null;
    }
}


// 6. Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.

function nextLargest(arr){
    num = arr[0];
    num2 = arr[0];
    if(arr.length > 1){
        for(i = 0; i < arr.length; i++){
            if(arr[i] > num){
                num = arr[i];
            }
            else if(arr[i] > num2){
                num2 = arr[i];
            }
        }
        return num2;
    }
    else if(arr.length == 1){
        return null;
    }
}


// 7. Double Trouble:

function dblTrbl(arr){
    for(i = arr.length - 1; i >= 0; i--){
        arr[i + i + 1] = arr[i];
        arr[i + i] = arr[i];
    }
    return arr;
}

// 8. Fibonacci Recursion

function fibonacciRecursion(num) {
    if (num == 0 || num == 1) return num;
    return fibonacciRecursion(num - 1) + fibonacciRecursion(num - 2);
  }

