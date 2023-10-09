function reverseArray(n, array) {
  let newArr = [];
  for (let i = 0; i < n; i++) {
    newArr.push(array[i]);
  }
  let reversedArr = newArr.reverse();
  console.log(reversedArr.join(" "));
}

reverseArray(3, [10, 20, 30, 40, 50]);
