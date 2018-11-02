package com.codingdojo.pets.models;

public class Dog extends Animal implements Pet {
	public Dog (String name, String breed, Integer weight) {
		super(name, breed, weight);
	}
	public String showAffection() {
		if (this.getWeight() < 30) {
			return this.getName() + " hopped into your lap and cuddled you!";
		}
		if (this.getWeight() >= 30) {
			return this.getName() + " curled up next to you to cuddle.";
		} else {
			return this.getName() + " barks at you, he needs attention.";
		}
	}
}
