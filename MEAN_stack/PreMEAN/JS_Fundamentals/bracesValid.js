function bracesValid(str){
    var pairs = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    };
    var check = [];
    for (var idx = 0; idx < str.length; idx++) {
        if (str[idx] === '(' || str[idx] === '[' || str[idx] === '{')
            check.push(str[idx]);
        else if (check[check.length-1] === pairs[str[idx]])
            check.pop();
        else
            return false;
    }
    return check.length === 0;

}
let braceStr = "([{}()}])"
console.log(bracesValid(braceStr));