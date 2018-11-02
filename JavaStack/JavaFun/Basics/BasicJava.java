import java.util.ArrayList;
import java.util.Arrays;
public class BasicJava {
    public void printFromTo(int num1, int num2) {
        System.out.println("printFromTo");
        for (int i = num1; i <= num2; i++) {
            System.out.println(i);
        }
    }
    public void printOdds(int num1, int num2) {
        System.out.println("printOdds");
        for (int i = num1; i <= num2; i++) {
            if (i % 2 != 0){
                System.out.println(i);
            }
        }
    }
    public void printSum(int num1, int num2) {
        System.out.println("printSum");
        int sum = 0;
        for (int i = num1; i <= num2; i++) {
            System.out.println("New Number: " + i);
            sum += i;
            System.out.println("Sum: " + sum);
        }
    }
    public void iterateArray(int[] array) {
        System.out.println("iterateArray");
        for (int i = 0; i < array.length; i++) {
            System.out.println(array[i]);
        }
    }
    public void findMax(int[] array) {
        System.out.println("findMax");
        int max = array[0];
        for (int i = 0; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        System.out.println(max);
    }
    public void getAverage(int[] array) {
        System.out.println("getAverage");
        int avg = 0;
        for (int i = 0; i < array.length; i++) {
            avg += array[i];
            }
        avg /= array.length;
        System.out.println(avg);
    }
    public void arrayOdd(int num1, int num2) {
        System.out.println("arrayOdd");
        ArrayList<Integer> y = new ArrayList<Integer>();
        for (int i = num1; i < num2 + 1; i++) {
            if (i % 2 != 0){
                y.add(i);
            }
        }
        System.out.println(y);
    }
    public void greaterThanY(int[] array, int y) {
        System.out.println("greaterThanY");
        int count = 0;
        for (int i = 0; i < array.length; i++) {
            if (array[i] > y) {
                count++;
            }
        }
        System.out.println(count);
    }
    public void squareValue(int[] x) {
        System.out.println("squareValue");
        for (int i = 0; i < x.length; i++) {
            x[i] = x[i] * x[i];
        }
        System.out.println(Arrays.toString(x));
    }
    public void eliminateNegNums(int[] x) {
        System.out.println("eliminateNegNums");
        for (int i = 0; i < x.length; i++) {
            if (x[i] < 0){
                x[i] = 0;
            }
        }
        System.out.println(Arrays.toString(x));
    }
    public void maxMinAvg(int[] x) {
        System.out.println("maxMinAvg");
        int max = x[0];
        int min = x[0];
        int avg = 0;
        for (int i = 0; i < x.length; i++) {
            avg += x[i];
            if (x[i] > max) {
                max = x[i];
            }
            if (x[i] < min) {
                min = x[i];
            }
        }
        avg /= x.length;
        System.out.println(max);
        System.out.println(min);
        System.out.println(avg);
    }
    public void shiftValues(int[] x) {
        System.out.println("shiftValues");
        for (int i = 0; i < x.length - 1; i++) {
            x[i] = x[i + 1];
        }
        x[x.length - 1] = 0;
        System.out.println(Arrays.toString(x));
    }
    public void swapString(ArrayList<Object> array) {
        System.out.println("swapString");
        for (int i = 0; i < array.size(); i++) {
            if ((int) array.get(i) < 0) {
                array.set(i, "Dojo");
            }
        }
        System.out.println(array);
    }
}