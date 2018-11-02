package com.codingdojo.zookeeperii;

public class Bat extends Mammal {
    public Bat() {
        energyLevel = 300;
    }
    public void fly() {
        System.out.println("Whoosh, Whoosh");
        energyLevel -= 50;
    }
    public void eatHumans() {
        System.out.println("Gnash, Gnash");
        energyLevel += 25;
    }
    public void attackTown() {
        System.out.println("Crackle, Pop, AAAHHHHHHHHH!, Whoosh, Crackle, Whoosh, Gnash, Whoosh!!!! AAAAAHHHHHH!");
        energyLevel -= 100;
    }
}