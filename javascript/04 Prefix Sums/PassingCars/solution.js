const solution = (A) => {
  const n = A.length;
  if (n <= 1) {
    return 0;
  }
  const zeroInd = [];
  let pairs;
  for (i = 0; i < n; i++) {
    if (A[i] == 0) {
      zeroInd.push(i);
    }
  }
  const z = zeroInd.length;
  let sum = 0;
  for (i = 0; i < z; i++) {
    pairs = n - (zeroInd[i] + 1);
    pairs = pairs - (z - (i + 1));
    sum += pairs;
  }
  if (sum > 1000000000) {
    return -1;
  }
  return sum;
};
