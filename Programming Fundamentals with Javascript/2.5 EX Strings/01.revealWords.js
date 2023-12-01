function replaceWords(words, template) {
  const wordList = words.split(", ");
  const templates = template.split(" ");

  for (let i = 0; i < templates.length; i++) {
    if (templates[i].includes("*")) {
      const length = templates[i].length;
      const matchedWord = wordList.find((word) => word.length === length);

      if (matchedWord) {
        templates[i] = matchedWord;
      }
    }
  }

  return templates.join(" ");
}

replaceWords(
  "great",
  "softuni is ***** place for learningnew programming languages"
);
