public class StringManipulator {
    public String trimAndConcat(String first, String second) {
        String str = first.trim() + second.trim();
        return str;
    }
    public Integer getIndexOrNull(String word, char a) {
        Integer idx = word.indexOf(a);
        if (idx == -1){
            return null;
        }
        return idx;
    }
    public Integer getIndexOrNull(String word, String word2) {
        Integer idx = word.indexOf(word2);
        if (idx == -1){
            return null;
        }
        return idx;
    }
    public String concatSubstring(String word, int num, int num2, String word2) {
        String str = word.substring(num, num2);
        String str2 = str + word2;
        return str2;
    }
}