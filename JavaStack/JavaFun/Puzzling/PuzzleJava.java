import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Random;
public class PuzzleJava {
    public ArrayList runMethod1(ArrayList<Integer> array) {
        int sum = 0;
        ArrayList<Integer> newArray = new ArrayList<Integer>();
        for (int i = 0; i < array.size(); i++) {
            sum += array.get(i);
            if (array.get(i) > 10){
                newArray.add(array.get(i));
            }
        }
        System.out.println(sum);
        return newArray;
    }
    public ArrayList runMethod2(ArrayList<String> array) {
        Collections.shuffle(array);
        ArrayList<String> newNameArray = new ArrayList<String>();
        for (int i = 0; i < array.size(); i++) {
            System.out.println(array.get(i));
            if (array.get(i).length() > 5) {
                newNameArray.add(array.get(i));
            }
        }
        return newNameArray;
    }
    public void shuffleAlphabet(Character[] array) {
        Character[] vowels = {'a','e','i','o','u'};
        ArrayList<Character> alphabet = new ArrayList<Character>();
        for (int i = 0; i < array.length; i++) {
            alphabet.add(array[i]);
        }
        Collections.shuffle(alphabet);
        System.out.println(alphabet.get(alphabet.size() - 1));
        System.out.println(alphabet.get(0));
        if (Arrays.asList(vowels).contains(alphabet.get(0))) {
            System.out.println("This is a vowel!");
        }
    }
    public int[] randomArray() {
        int[] randomArray;
        randomArray = new int[10];
        Random r = new Random();
        for (int i = 0; i < 10; i++) {
            randomArray[i] = r.nextInt(100 - 55 + 1) + 55;
        }
        System.out.println(Arrays.toString(randomArray));
        return randomArray;
    }
    public ArrayList randomArray2() {
        ArrayList<Integer> randomArray = new ArrayList<Integer>();
        Random r = new Random();
        for (int i = 0; i < 10; i++) {
            randomArray.add(r.nextInt(100 - 55 + 1) + 55);
        }
        Collections.sort(randomArray);
        System.out.println(randomArray);
        System.out.println(randomArray.get(0));
        System.out.println(randomArray.get(randomArray.size() - 1));
        return randomArray;
    }
    public void randomString() {
        char[] CHARSET = "AaBcCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".toCharArray();
        Random r = new Random();
        char[] randomString = new char[5];
        for (int i = 0; i < randomString.length; i++) {
            int randCharIdx = r.nextInt(CHARSET.length);
            randomString[i] = CHARSET[randCharIdx];
        }
        System.out.println(randomString);
    }
    public void randomStringArray() {
        char[] CHARSET = "AaBcCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".toCharArray();
        Random r = new Random();
        char[] randomString = new char[5];
        ArrayList<Object> randomStringArray = new ArrayList<Object>();
        System.out.print(randomStringArray);
        for (int j = 0; j < 10; j++) {
            for (int i = 0; i < randomString.length; i++) {
                int randCharIdx = r.nextInt(CHARSET.length);
                randomString[i] = CHARSET[randCharIdx];
            }
            randomStringArray.add(j, randomString);
            System.out.print(randomString);
        }
        System.out.print(randomStringArray);
    }
}