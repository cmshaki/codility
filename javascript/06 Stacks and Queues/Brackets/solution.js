function solution(S) {
  const stack = [];

  for (let i = 0; i < S.length; i++) {
    const currentChar = S[i];

    if (currentChar === "(" || currentChar === "{" || currentChar === "[") {
      // Opening bracket, push onto the stack
      stack.push(currentChar);
    } else {
      // Closing bracket
      if (stack.length === 0) {
        // Stack is empty, not properly nested
        return 0;
      }

      const lastBracket = stack.pop();

      // Check if the current closing bracket matches the last opening bracket
      if (
        (currentChar === ")" && lastBracket !== "(") ||
        (currentChar === "}" && lastBracket !== "{") ||
        (currentChar === "]" && lastBracket !== "[")
      ) {
        return 0; // Not properly nested
      }
    }
  }

  // After iterating through the string, check if the stack is empty
  return stack.length === 0 ? 1 : 0;
}
