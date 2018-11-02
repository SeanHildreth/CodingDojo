package com.codingdojo.phone;

public class Galaxy extends Phone implements Ringable {
    public Galaxy(String versionNumber, int batteryPercentage, String carrier, String ringTone) {
        super(versionNumber, batteryPercentage, carrier, ringTone);
    }
    @Override
    public String ring() {
        return this.getClass().getSimpleName() + " " + this.getVersionNumber() + " Says " + this.getRingTone();
    }
    @Override
    public String unlock() {
        return "Unlocking via biometrics!";
    }
    @Override
    public void displayInfo() {
        System.out.println(this.getClass().getSimpleName() + " " + this.getVersionNumber() + " from " + this.getCarrier());
    }
}


