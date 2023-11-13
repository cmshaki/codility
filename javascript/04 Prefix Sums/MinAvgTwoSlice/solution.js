const solution = (A) => {
  // Implement your solution here
  const n = A.length - 1;
  let min = [(A[0] + A[1]) / 2, 0];
  let x;
  for (i = 1; i < n; i++) {
    x = (A[i] + A[i + 1]) / 2;
    if (min[0] > x) {
      min = [x, i];
    }
  }
  if (A.length > 2) {
    for (i = 0; i < n - 1; i++) {
      x = (A[i] + A[i + 1] + A[i + 2]) / 3;
      if (min[0] > x) {
        min = [x, i];
      }
    }
  }
  return min[1];
};
