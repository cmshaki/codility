const solution = () => {
  const refIdx = ["A", "C", "G", "T"];
  const ans = [];
  let slice;

  for (i = 0; i < P.length; i++) {
    slice = S.slice(P[i], Q[i] + 1);
    console.log(slice);
    if (slice.indexOf("A") != -1) {
      ans.push(1);
    } else if (slice.indexOf("C") != -1) {
      ans.push(2);
    } else if (slice.indexOf("G") != -1) {
      ans.push(3);
    } else {
      ans.push(4);
    }
  }
  return ans;
};
