package com.codingdojo.zookeeperi;

public class Gorilla extends Mammal {
    public void throwSomething() {
        System.out.println("Gorilla threw something at you!");
        energyLevel -= 5;
    }
    public void eatBananas() {
        System.out.println("The gorilla is happily eating a banana!");
        energyLevel += 10;
    }
    public void climb() {
        System.out.println("The gorilla has climbed up a tree!");
        energyLevel -= 10;
    }
}