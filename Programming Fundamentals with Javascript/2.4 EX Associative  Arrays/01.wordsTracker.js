function wordsTracker(arr) {
  //   create the object
  let occurrences = {};
  let searchedSentence = arr.shift().split(" ");

  for (let word of searchedSentence) {
    occurrences[word] = 0;
  }
  // check the key
  for (let word of arr) {
    if (occurrences.hasOwnProperty(word)) {
      occurrences[word]++;
    }
  }
  // print
  let entries = Object.entries(occurrences).sort((a, b) => b[1] - a[1]);
  for (let [word1, repeats] of entries) {
    console.log(`${word1} - ${repeats}`);
  }
}

wordsTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
