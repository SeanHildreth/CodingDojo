import java.util.ArrayList;
import java.util.Arrays;
public class PuzzleJavaTest {
    public static void main(String[] args) {
        PuzzleJava tasks = new PuzzleJava();
        ArrayList<Integer> array = new ArrayList<Integer>();
        array.add(3); array.add(5); array.add(1); array.add(2); array.add(7); array.add(9); array.add(8); array.add(13); array.add(25); array.add(32);
        System.out.println(tasks.runMethod1(array));
        ArrayList<String> nameArray = new ArrayList<String>();
        nameArray.add("Nancy"); nameArray.add("Jinichi"); nameArray.add("Fujibayashi"); nameArray.add("Momochi"); nameArray.add("Ishikawa");
        System.out.println(tasks.runMethod2(nameArray));
        Character[] alphabet = {'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};
        tasks.shuffleAlphabet(alphabet);
        tasks.randomArray();
        tasks.randomArray2();
        tasks.randomString();
        tasks.randomStringArray();
    }
}