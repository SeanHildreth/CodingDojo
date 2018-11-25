var array = [21, -5, -6, 18, 42, 55, 97, 88, -60, 11, 20, 9, 5, 89, -69, 45]

function fizzbuzz(num) {
    if (num % 15 == 0) {
        console.log("FizzBuzz");
    } else if (num % 3 == 0) {
        console.log("Fizz");
    } else if (num % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
}

for(let idx = 0; idx < array.length; idx++) {
    fizzbuzz(array[idx]);
}