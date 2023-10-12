function solve(array) {
  let oldArraySum = 0;
  let newArraySum = 0;
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      newArray.push(array[i] + i);
    } else if (array[i] !== 0) {
      newArray.push(array[i] - i);
    }
    newArraySum += newArray[i];
    oldArraySum += array[i];
  }
  console.log(newArray);
  console.log(oldArraySum);
  console.log(newArraySum);
}

solve([5, 15, 23, 56, 35]);
