public class Pythagorean {
    public double calculateHypotenuse(int legA, int legB) {
        double AB = Math.pow(legA, 2) + Math.pow(legB, 2);
        double legC = Math.sqrt(AB);
        return legC;
    }
}