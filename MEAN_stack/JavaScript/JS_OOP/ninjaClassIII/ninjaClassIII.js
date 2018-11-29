class Ninja {
    constructor(name) {
        this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
    }
    sayName() {
        console.log(`My ninja name is ${this.name}`);
        return this;
    }
    showStats() {
        console.log(this);
        return this;
    }
    drinkSake() {
        this.health += 10;
        return this;
    }
}