package com.codingdojo.objectmaster;

public class Samurai extends Human {
    public static int numberOfSamurais = 0;
    public Samurai() {
        this.health = 200;
        numberOfSamurais++;
    }
    public Human deathBlow(Human human) {
        human.health -= human.health;
        this.health -= (this.health/2);
        return human;
    }
    public void meditate() {
        this.health += (this.health/2);
    }
    public int howMany() {
        return numberOfSamurais;
    }
}