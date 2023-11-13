function solution(A, B, K) {
  // Implement your solution here
  if (A == B) {
    if (A % K == 0) {
      return 1;
    }
    return 0;
  }
  let max;
  if (B % K == 0) {
    max = Math.ceil(B / K);
  } else {
    max = Math.floor(B / K);
  }
  const min = Math.floor(A / K);
  if (A == 0) {
    return max + 1;
  }
  if (A % K == 0) {
    return max - min + 1;
  }
  return max - min;
}
