package com.codingdojo.calculator;
import java.io.Serializable;

public class Calculator implements Serializable {
    private double operandOne;
    private Character operation;
    private double operandTwo;
    public Calculator() {}
	public double getOperandOne() {
		return operandOne;
	}
	public void setOperandOne(double operandOne) {
		this.operandOne = operandOne;
	}
	public Character getOperation() {
		return operation;
	}
	public void setOperation(Character operation) {
        if (operation == '+' || operation == '-') {
            this.operation = operation;
        } else {
            this.operation = '+';
        }
	}
	public double getOperandTwo() {
		return operandTwo;
	}
	public void setOperandTwo(double operandTwo) {
		this.operandTwo = operandTwo;
    }
    public double peformOperation() {
        if (this.operation == '+') {
            double result = operandOne + operandTwo;
            return result;
        } else {
            double result = operandOne - operandTwo;
            return result;
        }
    }
    public double getResults(double one, Character op, double two) {
        this.setOperandOne(one);
        this.setOperation(op);
        this.setOperandTwo(two);
        double result = this.peformOperation();
        return result;
    }

}