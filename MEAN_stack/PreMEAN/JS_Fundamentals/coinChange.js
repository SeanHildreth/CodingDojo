function coinChange(num) {
    let coins = [100, 25, 10, 5, 1];
    let coinsName = ["dollars", "quarters", "dimes", "nickles", "pennies"];
    let change = {};
    for(let coin = 0; coin < 5; coin++) {
        change[coinsName[coin]] = Math.floor(num/coins[coin]);
        num = num % coins[coin];
    }
    return change;
}

console.log(coinChange(177));