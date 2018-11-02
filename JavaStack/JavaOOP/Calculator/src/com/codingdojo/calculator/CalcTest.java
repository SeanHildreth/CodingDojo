package com.codingdojo.calculator;

public class CalcTest {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.getResults(10.5, '+', 5.2));
    }
}