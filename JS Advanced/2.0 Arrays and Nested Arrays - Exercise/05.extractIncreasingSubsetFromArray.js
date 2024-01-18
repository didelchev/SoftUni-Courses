function extract(arr) {
  let result = [];
  let biggestNum = arr[0];
  result.push(biggestNum);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= biggestNum) {
      biggestNum = arr[i];
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(extract([1, 3, 8, 4, 10, 12, 3, 2, 24]));
