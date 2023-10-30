const solution = (X, A) => {
  // Implement your solution here
  const steps = new Set();
  for (i = 0; i < A.length; i++) {
    steps.add(A[i]);
    if (steps.size == X) {
      return i;
    }
  }
  return -1;
};
