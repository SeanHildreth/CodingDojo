package com.codingdojo.bankaccount;

public class BankAccountTester {
    public static void main(String[] args) {
        BankAccount first = new BankAccount();
        BankAccount second = new BankAccount();

        System.out.println(first.getAccountNumber());
        first.depositCheckings(967.52);
        System.out.println(first.getCheckingBalance());
        first.withdrawalSavings(25.00);
        second.depositSavings(123.45);
        second.depositCheckings(654.32);
        System.out.println(second.totalAmount());
        System.out.println(BankAccount.getNumberOfAccounts());
        System.out.println(BankAccount.getAccountsTotalBalance());
    }
}