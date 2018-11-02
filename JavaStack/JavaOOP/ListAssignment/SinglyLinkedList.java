public class SinglyLinkedList {
    public Node head;
    public SinglyLinkedList() {
        this.head = null;
    }
    public SinglyLinkedList(int value) {
        Node newNode = new Node(value);
        this.head =  newNode;
    }
    public void add(int value) {
        Node newNode = new Node(value);
        if(head == null) {
            head = newNode;
        } else {
            Node runner = head;
            while(runner.next != null) {
                runner = runner.next;
            }
            runner.next = newNode;
        }
    }
    public Integer remove() {
        if (head == null) {
            return null;
        } else {
            Node runner = head;
            while(runner.next.next != null) {
                runner = runner.next;
            }
            int temp = runner.next.value;
            runner.next = null;
            return temp;
        }
    }
    public void printValues() {
        if (head == null) {
            System.out.println("List empty!");
        } else {
            Node runner = head;
            while(runner != null) {
                System.out.println(runner.value);
                runner = runner.next;
            }
        }
    }
}