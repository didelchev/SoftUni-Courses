function print(arr, delimiter) {
  let result = "";
  for (let num of arr) {
    result += num + delimiter;
  }
  result = result.slice(0, -delimiter.length);
  console.log(result);
}

print(["One", "Two", "Three", "Four", "Five"], "-");
