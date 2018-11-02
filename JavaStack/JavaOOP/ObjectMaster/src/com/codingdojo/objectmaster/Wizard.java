package com.codingdojo.objectmaster;

public class Wizard extends Human {
    public Wizard() {
        this.health = 50;
        this.intelligence = 8;
    }
    public Human heal(Human human) {
        human.health += this.intelligence;
        return human;
    }
    public Human fireball(Human human) {
        human.health -= (this.intelligence * 3);
        return human;
    }
}