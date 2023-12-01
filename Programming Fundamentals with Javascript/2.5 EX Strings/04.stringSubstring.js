function checkForWord(word, text) {
  const words = text.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === word.toLowerCase()) {
      console.log(word);
      return;
    }
  }

  console.log(`${word} not found!`);
}

checkForWord("javascript", "JavaScript is the best programming language");
