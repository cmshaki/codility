const solution = (A) => {
  const n = A.length;
  let sum = 0;
  let leftSum = 0;
  let minDiff;
  let diff;
  for (i = 0; i < n; i++) {
    sum += A[i];
  }
  leftSum += A[0];
  minDiff = Math.abs(leftSum - (sum - leftSum));
  for (i = 2; i < n; i++) {
    leftSum += A[i - 1];
    diff = Math.abs(leftSum - (sum - leftSum));
    if (minDiff > diff) {
      minDiff = diff;
    }
  }
  return minDiff;
};
