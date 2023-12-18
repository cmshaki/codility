function solution(S) {
  // Implement your solution here
  if (S.length == 0 || !/\[|\{|\(|\)|\}|\]/.test(S)) {
    return 0;
  }
  let queue = [];
  const charDict = {
    "{": 1,
    "(": 2,
    "[": 3,
    "}": 1,
    ")": 2,
    "]": 3,
  };
  for (i = 0; i < S.length; i++) {
    if ("{[(".includes(S[i])) {
      queue.push(charDict[S[i]]);
    } else if ("]})".includes(S[i])) {
      if (queue[queue.length - 1] == charDict[S[i]]) {
        queue.pop();
      } else {
        return 0;
      }
    }
  }
  if (queue.length > 0) return 0;
  return 1;
}
