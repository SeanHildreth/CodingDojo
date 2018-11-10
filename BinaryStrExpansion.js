var word = "1?0?1?0?"

function BinaryStrExpansion(str) {
    let q = 0;
    for (let a = 0; a < str.length; a++) {
        if (str[a] == "?") {
            q++;
        }
    }
    console.log("q: " + q);
    var count = Math.pow(2, q);
    console.log("count: " + count);
    var arr = [];
    for (let b = 0; b < count; b++) {
        arr.push("");
    }
    console.log(arr);
    let x = 1;
    function binaryStrRecurse(count, arr, x, str) {
        console.log("RECURSION");
        console.log("arr[0].length: " + arr[0].length);
        console.log("str.length: " + str.length);
        if (arr[0].length == str.length) {
            return arr;
        }
        x *= 1 / 2;
        console.log("x: " + x);
        let z = 1;
        for (let c = arr[0].length; c < str.length; c++) {
            console.log("c: " + c);
            console.log("str[c]: " + str[c]);
            if (str[c] == "?") {
                for (let d = 0; d < arr.length; d++) {
                    if (z <= (x * count)) {
                        arr[d] += "0";
                        z++;
                    } else {
                        arr[d] += "1";
                    }
                }
                console.log("This One!");
                console.log("This One!");
                console.log("arr: " + arr);
                binaryStrRecurse(count, arr, x, str);
            } else {
                for (let e = 0; e < arr.length; e++) {
                    arr[e] += str[c];
                }
                console.log("That One!");
                console.log("That One!");
                console.log("arr: " + arr);
                binaryStrRecurse(count, arr, x, str);
            }
        }
        return arr;
    }
    binaryStrRecurse(count, arr, x, str);
    return arr;
}

var result = BinaryStrExpansion(word);
console.log(result);