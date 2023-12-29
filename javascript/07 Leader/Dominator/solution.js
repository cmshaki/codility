function solution(A) {
  const stack = [];
  const indices = [];
  const n = A.length;

  for (let i = 0; i < n; i++) {
    if (stack.length > 0) {
      if (stack[stack.length - 1] === A[i]) {
        stack.push(A[i]);
      } else {
        stack.pop();
      }
    } else {
      stack.push(A[i]);
    }
  }

  if (stack.length === 0) {
    return -1;
  }

  for (let i = 0; i < n; i++) {
    if (A[i] === stack[0]) {
      indices.push(i);
    }
  }

  if (indices.length > n / 2) {
    return indices[0];
  }

  return -1;
}
