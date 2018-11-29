function Ninja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.sayName = function() {
        console.log("My ninja name is " + this.name);
        return this;
    }
    this.showStats = function() {
        console.log(this);
        return this;
    }
    this.drinkSake = function() {
        this.health += 10;
        return this;
    }
    this.punch = function(ninja) {
        if(!ninja instanceof Ninja) {
            return false;
        }
        ninja.health -= 5;
        console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health!");
        return this;
    }
    this.kick = function(ninja) {
        if(!ninja instanceof Ninja) {
            return false;
        }
        ninja.health -= (strength * 15);
        console.log(ninja.name + " was kicked by " + this.name + " and lost " + (strength * 15) + " Health!");
        return this;
    }

}

console.log(satoshi);
console.log(takumi);
satoshi.kick(takumi);