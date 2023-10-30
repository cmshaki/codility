import java.util.*;
// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public static int[] solution(int[] A, int K) {
        if (K == 0 || A.length <= 1)
            return A;
        int[] clone = new int[A.length];
        while (K > A.length) {
            K = K - A.length;
        }
        for (int i = 0; i < clone.length; i++) {
            int newIndex = i + K;
            if (newIndex >= clone.length)
                newIndex = newIndex - clone.length;
            clone[newIndex] = A[i];
        }
        return clone;
    }

    public static void main(String[] args) {
        final long startTime1 = System.currentTimeMillis();
        System.out.println(Arrays.toString(solution(new int[] { 1, 2, 60, 5, 23 }, 100)));
        final long solution1Time = System.currentTimeMillis() - startTime1;
        System.out.println("Total time for solution 1 in milliseconds: " + solution1Time + "ms");
    }
}
