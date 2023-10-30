import java.util.*;

class Solution {
  public static int solution(int[] A) {
    // Implement your solution here
    if (A.length == 1)
      return A[0];
    if (A.length > 1) {
      Arrays.sort(A);
      for (int i = 0; i <= A.length; i++) {
        int n = i + A[0];
        boolean isFound = false;
        if (A[i] == n)
          isFound = true;
        if (!isFound)
          return n;
      }
    }
    return 0;
  }

  public static void main(String[] args) {
    System.out.println(solution(new int[] { 3 }));
  }
}
