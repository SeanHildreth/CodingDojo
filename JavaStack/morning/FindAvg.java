public class FindAvg {
    public void getAverage(int[] array) {
        int avg = 0;
        for (int i = 0; i < array.length; i++) {
            avg += array[i];
        }
        avg /= array.length;
        System.out.println(avg);
    }
}