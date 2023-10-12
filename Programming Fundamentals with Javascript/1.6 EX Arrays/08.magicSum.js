function solve(array, num) {
  for (let i = 0; i < array.length; i++) {
    for (let x = i + 1; x < array.length; x++) {
      if (array[i] + array[x] === num) {
        console.log(`${array[i]} ${array[x]}`);
      }
    }
  }
}
// solve([1, 7, 6, 2, 19, 23], 8);
// solve([14, 20, 60, 13, 7, 19, 8], 27);
solve([1, 2, 3, 4, 5, 6], 6);
