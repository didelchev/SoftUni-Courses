function countWords(arr) {
  const wordCount = new Map();

  for (let i = 0; i < arr.length; i++) {
    const text = arr[i];
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];

    for (let j = 0; j < words.length; j++) {
      const word = words[j];
      if (wordCount.has(word)) {
        wordCount.set(word, wordCount.get(word) + 1);
      } else {
        wordCount.set(word, 1);
      }
    }
  }

  const sortedWords = Array.from(wordCount.entries()).sort(
    (a, b) => b[1] - a[1]
  );

  sortedWords.forEach((entry) => {
    console.log(`${entry[0]} -> ${entry[1]} times`);
  });
}
countWords([
  "Here",
  "is",
  "the",
  "first",
  "sentence",

  "Here",
  "is",
  "another",
  "sentence",
  "And",

  "finally",
  "the",
  "third",
  "sentence",
]);
