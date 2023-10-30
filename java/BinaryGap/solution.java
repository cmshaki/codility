import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public static int solution1(int N) {
        // Implement your solution here
        List<Integer> matchedList = new ArrayList<Integer>();
        String binaryRep = Integer.toBinaryString(N);
        System.out.println(binaryRep);
        Matcher matchedPatterns = Pattern.compile("[^0\\s](0)+(?=\\B)(?=[^0])").matcher(binaryRep);
        while (matchedPatterns.find()) {
            matchedList.add(matchedPatterns.group().length());
        }
        return matchedList.size() > 0 ? Collections.max(matchedList) - 1 : 0;
    }

    public static int solution2(int N) {
        String binaryRep = Integer.toBinaryString(N);
        List<Integer> binaryGap = new ArrayList<Integer>();
        for (int i = 0; i < binaryRep.length(); i++) {
            if (binaryRep.charAt(i) == '0') {
                continue;
            }
            int count = 0;
            int c = i + 1;
            if (binaryRep.charAt(i) == '1') {
                while (c < binaryRep.length()) {
                    if (binaryRep.charAt(c) == '0') {
                        count = count + 1;
                        c = c + 1;
                    } else {
                        binaryGap.add(count);
                        break;
                    }
                }
            }
        }
        return binaryGap.size() > 0 ? Collections.max(binaryGap) : 0;
    }

    public static void main(String[] args) {
        final long startTime1 = System.currentTimeMillis();
        System.out.println(solution1(100));
        final long solution1Time = System.currentTimeMillis() - startTime1;
        System.out.println("Total time for solution 1 in milliseconds: " + solution1Time + "ms");
        final long startTime2 = System.currentTimeMillis();
        System.out.println(solution2(100));
        final long solution2Time = System.currentTimeMillis() - startTime2;
        System.out.println("Total time for solution 2 in milliseconds: " + solution2Time + "ms");
    }
}
