// 1.
function printAverage(x){
    sum = 0;
    for(i = 0; i < x.length; i++){
      sum += x[i];
    }
   sum /= x.length;
   return sum;
 }
 y = printAverage([1,2,3]);
 console.log(y); // should log 2
   
 y = printAverage([2,5,8]);
 console.log(y); // should log 5


// 2.
function returnOddArray(){
    arr = [];
    for(i = 1; i <= 255; i++){
      arr.push(i);
    }
   return arr;
 }
 y = returnOddArray();
 console.log(y); // should log [1,3,5,...,253,255]


 // 3.
 function squareValue(x){
    for(i = 0; i < x.length; i++){
      x[i] *= x[i];  
    }
    return x;
  }
  y = squareValue([1,2,3]);
  console.log(y); // should log [1,4,9]
    
  y = squareValue([2,5,8]);
  console.log(y); // should log [4,25,64]