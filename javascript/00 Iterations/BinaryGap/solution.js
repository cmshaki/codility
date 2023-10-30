const solution = (N) => {
  const gapRegex = /10+(?=1)/g;
  const gaps = (N >>> 0).toString(2).match(gapRegex);
  let maxGap = 0;
  if (gaps != null) {
    for (i = 0; i < gaps.length; i++) {
      if (maxGap < gaps[i].length - 1) {
        maxGap = gaps[i].length - 1;
      }
    }
  }
  return maxGap;
};
