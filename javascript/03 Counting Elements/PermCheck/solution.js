const solution = (A) => {
  // Implement your solution here
  const n = A.length;
  let acc = 0;
  const nRange = new Set();
  for (i = 0; i < A.length; i++) {
    acc += A[i];
    nRange.add(A[i]);
  }
  if (nRange.size != n) return 0;
  const diff = (n * (n + 1)) / 2 - acc;
  if (diff == 0) return 1;
  return 0;
};
