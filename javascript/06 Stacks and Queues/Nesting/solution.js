function solution(S) {
  const stack = [];

  for (let i = 0; i < S.length; i++) {
    const currentChar = S[i];

    if (currentChar === "(") {
      // Opening parenthesis, push onto the stack
      stack.push(currentChar);
    } else {
      // Closing parenthesis
      if (stack.length === 0) {
        // Stack is empty, not properly nested
        return 0;
      }

      // Check if the top of the stack is the corresponding opening parenthesis
      const lastOpening = stack.pop();
      if (currentChar === ")" && lastOpening !== "(") {
        return 0; // Not properly nested
      }
    }
  }

  // After iterating through the string, check if the stack is empty
  return stack.length === 0 ? 1 : 0;
}
