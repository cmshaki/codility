const solution = (A) => {
  const n = A.length + 1; // since the numbers are of the range 1..(n+1)
  if (n == 1) return 1;
  // (n * (n + 1)) / 2 get the sum between 0 to n + 1
  return (n * (n + 1)) / 2 - A.reduce((a, b) => a + b);
};
