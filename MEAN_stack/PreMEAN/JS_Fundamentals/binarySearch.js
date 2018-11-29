var arr = [-69, -60, -6, -5, 5, 9, 11, 18, 20, 21, 42, 45, 55, 88, 89, 97]

function binarySearch (arr, val) {
    let beg = 0, end = arr.length - 1, mid = Math.floor((beg + end) / 2);
    while (arr[mid] !== val && beg < end) {
      if (val < arr[mid]) {
        end = mid - 1;
      } else {
        beg = mid + 1;
      }
      mid = Math.floor((beg + end) / 2);
    }
    return (arr[mid] !== val) ? false : mid;
  }
  console.log("Index position: " + binarySearch(arr, 97));

  
//O(log n) time complexity


function binarySearch (arr, val, beg, end) {
    let mid = Math.floor((beg + end)/2);
    if (val == arr[mid]) {
        return mid;
    } else if (end - 1 === beg) {
        return Math.abs(arr[beg] - val) > Math.abs(arr[end] - val) ? arr[end] : arr[beg]; 
    } else if (val > arr[mid]) {
        return binarySearch(arr, val, mid, end);
    } else if (val < arr[mid]) {
        return binarySearch(arr, val, beg, mid);
    }
  }
  console.log("Index position: " + binarySearch(arr, 21, 0, arr.length-1));