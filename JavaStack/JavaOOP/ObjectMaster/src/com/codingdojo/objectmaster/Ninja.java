package com.codingdojo.objectmaster;

public class Ninja extends Human {
    public Ninja () {
        this.stealth = 10;
    }
    public Human steal(Human human) {
        human.health -= this.stealth;
        this.health += this.stealth;
        return human;
    }
    public void runAway() {
        this.health -= 10;
    }
}