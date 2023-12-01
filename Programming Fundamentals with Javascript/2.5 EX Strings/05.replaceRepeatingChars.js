function replaceSequence(input) {
  let result = input[0]; // Initialize the result with the first character

  for (let i = 1; i < input.length; i++) {
    if (input[i] !== input[i - 1]) {
      result += input[i]; // Append the character if it's different from the previous one
    }
  }

  return result;
}

replaceSequence("aaaaabbbbbcdddeeeedssaa");
