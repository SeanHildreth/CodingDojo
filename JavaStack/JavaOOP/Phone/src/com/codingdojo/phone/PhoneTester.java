package com.codingdojo.phone;

public class PhoneTester {
    public static void main(String[] args) {
        Galaxy note8 = new Galaxy("note8", 63, "Verizon", "Ring Ring Ring. Ring Ring Ring, Phone Call, Phone Call!");
        IPhone x = new IPhone("X", 100, "Sprint", "Ring Ring iphone Sucks!!!!");

        note8.displayInfo();
        System.out.println(note8.ring());
        System.out.println(note8.unlock());

        x.displayInfo();
        System.out.println(x.ring());
        System.out.println(x.unlock());
    }
}