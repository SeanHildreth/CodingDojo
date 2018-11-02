import java.util.ArrayList;
public class BasicJavaTest {
    public static void main(String[] args) {
        BasicJava methods = new BasicJava();
        methods.printFromTo(1, 255);
        methods.printOdds(1, 255);
        methods.printSum(0, 255);
        int[] array = {1,3,5,7,9,13};
        methods.iterateArray(array);
        int[] max = {10,12,-15,16,-5,2,4};
        methods.findMax(max);
        int[] avg = {1,2,3,4,5,6,7,8,9};
        methods.getAverage(avg);
        methods.arrayOdd(1, 255);
        methods.greaterThanY(max, 5);
        methods.squareValue(avg);
        methods.eliminateNegNums(max);
        methods.maxMinAvg(max);
        methods.shiftValues(avg);
        ArrayList<Object> list = new ArrayList<Object>();
        list.add(1); list.add(-1); list.add(2); list.add(-2); list.add(3); list.add(-3); list.add(4); list.add(5); list.add(6); list.add(-9);
        methods.swapString(list);
    }
}