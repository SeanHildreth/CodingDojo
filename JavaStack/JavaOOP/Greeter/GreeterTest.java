public class GreeterTest {
    public static void main(String[] args){
        Greeter g = new Greeter();
        String greeting = g.greet();
        String greetingWithName = g.greet("Sean", "Hildreth");
        System.out.println(greetingWithName);
        // if (greeting.equals("Hello World") || greetingWithName.equals("Hello Eduardo")){
        //     System.out.println("Test successful");
        // } else{
        //     System.out.println("Test Fail");
        // }
    }
}