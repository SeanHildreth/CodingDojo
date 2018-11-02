package com.codingdojo.pets.models;

public class Cat extends Animal implements Pet {
	public Cat (String name, String breed, Integer weight) {
		super(name, breed, weight);
	}
	public String showAffection() {
		return "Your " + this.getBreed() + ", " + this.getName() + ", looks at you with feigned indifference, you think he likes you... Maybe.";  
	}
}
