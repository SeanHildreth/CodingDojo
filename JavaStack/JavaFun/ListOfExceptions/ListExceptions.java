import java.util.*;
public class ListExceptions {
    public static void main(String[] args) {
        ArrayList<Object> myList = new ArrayList<Object>();
        myList.add("13");
        myList.add("hello world");
        myList.add(48);
        myList.add("Goodbye World");
        for(int i = 0; i < myList.size(); i++) {
            try {
                Integer castedValue = (Integer) myList.get(i);
            } catch (ClassCastException exception) {
                System.out.println("String cannot be cast to Integer");
                System.out.println(i);
                System.out.println(myList.get(i));
            }
        }
    }
}