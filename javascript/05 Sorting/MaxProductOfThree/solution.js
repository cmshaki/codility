const solution = (A) => {
  A.sort((a, b) => b - a);

  return Math.max(A[0] * A[1] * A[2], A[0] * A[A.length - 1] * A[A.length - 2]);
};
