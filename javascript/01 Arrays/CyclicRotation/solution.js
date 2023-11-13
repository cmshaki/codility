function solution(A, K) {
  // Implement your solution here
  const rotate = K % A.length;
  if (rotate == 0) {
    return A;
  }

  const newA = new Array(A.length);
  let newIndex;
  for (i = 0; i < A.length; i++) {
    newIndex = (i + rotate) % A.length;
    newA[newIndex] = A[i];
  }
  return newA;
}
