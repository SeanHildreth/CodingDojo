package com.codingdojo.zookeeperi;

public class Mammal {
    protected int energyLevel;
    public Mammal() {
        energyLevel = 100;
    }
    public Integer displayEnergy() {
        System.out.println(energyLevel);
        return energyLevel;
    }
}