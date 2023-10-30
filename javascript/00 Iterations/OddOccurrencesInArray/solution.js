const solution = (A) => {
  const sortA = A.sort((a, b) => a - b);
  for (i = 0; i < sortA.length - 1; i = i + 2) {
    if (sortA[i] != sortA[i + 1]) {
      return sortA[i];
    }
  }
  return sortA[sortA.length - 1];
};
