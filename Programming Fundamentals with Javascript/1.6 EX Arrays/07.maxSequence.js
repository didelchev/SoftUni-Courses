function sequence(array) {
  let currentSequence = [array[0]];
  let longestSequence = [array[0]];

  for (let i = 1; i < array.length; i++) {
    if (array[i] === array[i - 1]) {
      currentSequence.push(array[i]);
    } else {
      currentSequence = [array[i]];
    }
    if (currentSequence.length > longestSequence.length) {
      longestSequence = currentSequence.slice();
    }
  }
  console.log(longestSequence.join(" "));
}
sequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
