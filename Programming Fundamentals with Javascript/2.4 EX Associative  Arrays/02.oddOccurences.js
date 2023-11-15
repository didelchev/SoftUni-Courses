function oddOccurrences(sentence) {
  let words = sentence.split(" ");
  let wordCount = {};
  let result = [];

  words.forEach((word) => {
    let lowercaseWord = word.toLowerCase();
    if (wordCount.hasOwnProperty(lowercaseWord)) {
      wordCount[lowercaseWord]++;
    } else {
      wordCount[lowercaseWord] = 1;
    }
  });

  words.forEach((word) => {
    let lowercaseWord = word.toLowerCase();
    if (wordCount[lowercaseWord] % 2 === 1) {
      result.push(lowercaseWord);
      delete wordCount[lowercaseWord];
    }
  });

  console.log(result.join(" "));
}

oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
