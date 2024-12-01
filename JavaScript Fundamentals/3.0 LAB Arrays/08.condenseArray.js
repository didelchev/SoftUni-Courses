function condenseArr(arr) {
  while (arr.length > 1) {
    const condensed = [];
    for (let i = 0; i < arr.length - 1; i++) {
      condensed.push(arr[i] + arr[i + 1]);
    }
    arr = condensed;
  }
  console.log(arr[0]);
}

condenseArr([2, 10, 3]);
condenseArr([5, 0, 4, 1, 2]);
condenseArr([1]);
