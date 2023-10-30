function solution(A) {
  // Implement your solution hereif(A.length == 1) {
  if (A.length == 1) {
    if (A[0] < 0) return 1;
    if (A[0] > 1) return A[0] - 1;
    return A[0] + 1;
  }
  const counter = new Set();
  for (i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      counter.add(A[i]);
    }
  }
  if (counter.size < 1) {
    return 1;
  }
  const newCounter = Array.from(counter).sort((a, b) => a - b);
  for (i = 0; i < newCounter.length; i++) {
    if (i + 1 != newCounter[i]) {
      return i + 1;
    }
  }
  return newCounter.length + 1;
}
