var process = require('process');







// function bubbleSort(array) {
//     for(var i = 0; i < array.length; i++) {
//         console.log(i)
//         for(var j = 0; j < array.length - i; j++) {
//             if(array[j] > array[j + 1]) {
//                 var temp = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = temp;
//             }
//         }
//     }
//     return array;
// }


/**
 * Sorts an array using radix sort.
 * @param {Array} array The array to sort.
 * @param {number} [radix=10] The base/radix to use.
 * @returns The sorted array.
 */
function sort(array, radix) {
    if (array.length === 0) {
      return array;
    }
  
    radix = radix || 10;
  
    // Determine minimum and maximum values
    var minValue = array[0];
    var maxValue = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i];
        } else if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }
  
    // Perform counting sort on each exponent/digit, starting at the least
    // significant digit
    var exponent = 1;
    while ((maxValue - minValue) / exponent >= 1) {
        array = countingSortByDigit(array, radix, exponent, minValue);
    
        exponent *= radix;
    }
  
    return array;
}
  
  /**
   * Stable sorts an array by a particular digit using counting sort.
   * @param {Array} array The array to sort.
   * @param {number} radix The base/radix to use to sort.
   * @param {number} exponent The exponent of the significant digit to sort.
   * @param {number} minValue The minimum value within the array.
   * @returns The sorted array.
   */
function countingSortByDigit(array, radix, exponent, minValue) {
    var i;
    var bucketIndex;
    var buckets = new Array(radix);
    var output = new Array(array.length);

    // Initialize bucket
    for (i = 0; i < radix; i++) {
        buckets[i] = 0;
    }

    // Count frequencies
    for (i = 0; i < array.length; i++) {
        bucketIndex = Math.floor(((array[i] - minValue) / exponent) % radix);
        buckets[bucketIndex]++;
    }

    // Compute cumulates
    for (i = 1; i < radix; i++) {
        buckets[i] += buckets[i - 1];
    }

    // Move records
    for (i = array.length - 1; i >= 0; i--) {
        bucketIndex = Math.floor(((array[i] - minValue) / exponent) % radix);
        output[--buckets[bucketIndex]] = array[i];
    }

    // Copy back
    for (i = 0; i < array.length; i++) {
        array[i] = output[i];
    }

    return array;
}



function timeStamps() {
    var start = process.hrtime();
    console.log("start");
    console.log(start);
    var time = process.hrtime();


    var arr = [];
    for(var i = 0; i < 1000000000; i++) {
        console.log(i);
        arr.push(Math.floor(Math.random() * 1000000 + 1000));
    };


    var diff = process.hrtime(time);
    console.log('benchmark took %d milliseconds', (diff[0] * 1e9 + diff[1]) / 1000000); 

    sort(arr);

    var end = process.hrtime(time);
    console.log("end");
    console.log('benchmark took %d milliseconds', (end[0] * 1e9 + end[1]) / 1000000);
}

timeStamps();