// 1.

function a(){
    return 35;
}
console.log(a())

// my prediction: 35;
// actual output: 35;


// 2.

function a(){
    return 4;
}
console.log(a()+a());

// my prediction: 8;
// actual output: 8;


// 3.

function a(b){
    return b;
}
console.log(a(2)+a(4));

// my prediction: 6;
// actual output: 6;


// 4.

function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));

// my prediction: 3, 9;
// actual output: 3, 9;


// 5.

function a(b){
   return b*4;
   console.log(b);
}
console.log(a(10));

// my prediction: 40;
// actual output: 40;


// 6.

function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

// my prediction: 4;
// actual output: 4;


// 7.

function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );

// my prediction: 10, 3, 30;
// actual output: 10, 3, 30;


// 8.

function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

// my prediction: 3, 4;
// actual output: 3, 4;


// 9.

function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();

// my prediction: 2, 5. 8, 11;
// actual output: 2, 5, 8, 11;


// 10.

function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));

// my prediction: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0;
// actual output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0;


// 11.

function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}

// my prediction: nothing;
// actual output: nothing;


// 12.

function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}

// my prediction: nothing;
// actual output: nothing;


// 13.

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);

// my prediction: 10;
// actual output: 10;


// 14.

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);

// my prediction: 15, 10;
// actual output: 15, 10;


// 15.

var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);

// my prediction: 15, 15;
// actual output: 15, 15;