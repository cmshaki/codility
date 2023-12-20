const solution = (H) => {
  // Initialize the stack to keep track of heights
  const stack = [];
  // Initialize the block count
  let blocks = 0;

  // Iterate through the heights
  for (let i = 0; i < H.length; i++) {
    // Pop heights from the stack until it's empty or the top height is smaller than the current height
    while (stack.length > 0 && stack[stack.length - 1] > H[i]) {
      stack.pop();
      blocks++;
    }

    // If the stack is empty or the top height is different from the current height, add the current height to the stack
    if (stack.length === 0 || stack[stack.length - 1] !== H[i]) {
      stack.push(H[i]);
    }
  }

  // The remaining heights in the stack represent additional blocks
  blocks += stack.length;

  return blocks;
};
