function findSpecialWords(input) {
  const words = input.split(" ");
  const specialWords = [];

  words.forEach((word) => {
    if (word.startsWith("#")) {
      const trimmedWord = word.slice(1); // Remove the #
      const onlyLetters = /^[a-zA-Z]+$/.test(trimmedWord); // Check if it contains only letters

      if (onlyLetters) {
        specialWords.push(trimmedWord);
      }
    }
  });

  return specialWords.join("\n");
}

findSpecialWords(
  "Nowadays everyone uses # to tag a #special word in #socialMedia"
);
