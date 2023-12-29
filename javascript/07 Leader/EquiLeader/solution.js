const solution = (A) => {
  const n = A.length;

  // Step 1: Find the leader of the whole array
  let stack = [];
  let candidate = null;

  for (let i = 0; i < n; i++) {
    if (stack.length === 0) {
      stack.push(A[i]);
    } else {
      if (stack[stack.length - 1] === A[i]) {
        stack.push(A[i]);
      } else {
        stack.pop();
      }
    }
  }

  if (stack.length > 0) {
    candidate = stack[stack.length - 1];
  } else {
    return 0; // No leader found
  }

  // Step 2: Count occurrences of the leader up to each index
  let leaderCount = 0;
  const leaderOccurrences = [];

  for (let i = 0; i < n; i++) {
    if (A[i] === candidate) {
      leaderCount++;
    }
    leaderOccurrences.push(leaderCount);
  }

  // Step 3: Check for equi leaders
  let equiLeaderCount = 0;
  const totalLeaders = leaderOccurrences[n - 1];

  for (let i = 0; i < n - 1; i++) {
    const leadersLeft = leaderOccurrences[i];
    const leadersRight = totalLeaders - leadersLeft;

    if (leadersLeft > (i + 1) / 2 && leadersRight > (n - i - 1) / 2) {
      equiLeaderCount++;
    }
  }

  return equiLeaderCount;
};
