// Implement your solution here
const solution = () => {
  const nCounters = new Array(N).fill(0);
  let j;
  let max = 0;
  for (i = 0; i < A.length; i++) {
    if (A[i] > N) {
      max = Math.max(...nCounters);
      nCounters.fill(max);
      continue;
    }
    j = A[i] - 1;
    nCounters[j] += 1;
  }
  return nCounters;
};

const chatSolution = () => {
  const nCounters = new Array(N).fill(0);
  let maxCounter = 0;
  let lastMaxCounter = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] <= N) {
      const j = A[i] - 1;
      nCounters[j] = Math.max(nCounters[j], lastMaxCounter) + 1;
      maxCounter = Math.max(maxCounter, nCounters[j]);
    } else {
      lastMaxCounter = maxCounter;
    }
  }

  for (let i = 0; i < nCounters.length; i++) {
    nCounters[i] = Math.max(nCounters[i], lastMaxCounter);
  }

  return nCounters;
};
