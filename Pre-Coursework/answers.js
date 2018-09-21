//1. Setting and Swapping
function setSwap(){
    var myNumber = 42;
    var myName = 'Sean';
    var temp = myNumber;
    myNumber = myName;
    myName = temp
}

//2. Print -52 to 1066
function printIntegers(){
    var num = -52;
    for(num = -52; num <= 1066; num++){
        console.log(num);
}
}

//3. Don't Worry, Be Happy
function beCheerful(){

    var beHappy = 'good morning!';
    for(var happyNum = 1; happyNum < 99; happyNum++){
        console.log(beHappy);
    }
}

//4. Multiples of Three - but Not All
function threes(){
    var num3 = 3;
    for(num3 = 3; num3 >= -300; num3 -= 3){
        if(num3 == -3){
            continue;
        }
        if(num3 == -6){
            continue;
        }
        console.log(num3);
    }
}

//5. Printing Integers with While
function printIntegers2({
    var int = 2000;
    while(int <= 5280){
        console.log(int);
        int++;
    }
}

//6. You Say It's Your Birthday
function birthday(){
    var birthMonth();
    var birthDay();

    if(birthMonth = 9 && birthDay = 5){
        console.log("How did you know?");
    }
    else(){
        console.log("Just another day....");
    }
}

//7. Leap Year
function leapYear(){
    var year();

}

//8. Print and Count
function printCount(){
    var count[];
    var fives = 512;

    for(fives = 512; <=4096; fives++){
        if(fives % 5 === 0){
            console.log(fives);
            count.push(fives);
        }
    }
    console.log(count.length);
}

//9. Multiple of Six
function sixes(){
    var num6 = 6;
    while(num6 <= 60000){
        console.log(num6);
        num6 += 6;
    }
}

//10. Counting, the Dojo Way
function dojoCount(){
    var dojoNum = 1;

    for(dojoNum = 1; dojoNum <= 100, dojoNum++){
        if(dojoNum % 5 === 0){
            console.log("Coding");
        }
        else if(dojoNum % 5 === 0 && dojoNum % 10 === 0){
            console.log("Coding Dojo");
        }
        else(){
            console.log(dojoNum);
        }
    }
}

//11. What Do You Know?
function inputLog(){
 var input();
 console.log(input);   
}

//12. Whoa, That Sucker's Huge...
function odds(){
    var oddNums();
    for (oddNums = -300000; oddNums <= 300000; oddNums++){
        
    }
}