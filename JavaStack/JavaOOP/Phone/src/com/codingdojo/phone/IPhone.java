package com.codingdojo.phone;

public class IPhone extends Phone implements Ringable {
    public IPhone(String versionNumber, int batteryPercentage, String carrier, String ringTone) {
        super(versionNumber, batteryPercentage, carrier, ringTone);
    }
    @Override
    public String ring() {
        return this.getClass().getSimpleName() + " " + this.getVersionNumber() + " Says " + this.getRingTone();
    }
    @Override
    public String unlock() {
        return "Unlocking via passcode!";
    }
    @Override
    public void displayInfo() {
        System.out.println(this.getClass().getSimpleName() + " " + this.getVersionNumber() + " from " + this.getCarrier());
    }
}