const solution = (A) => {
  // Implement your solution here
  const unqA = new Set();
  for (i = 0; i < A.length; i++) {
    unqA.add(A[i]);
  }
  return unqA.size;
};
