function solve(nums) {
  let sumOfEven = 0;
  let sumOfOdd = 0;
  for (num of nums) {
    if (num % 2 === 0) {
      sumOfEven += num;
    } else if (num % 2 !== 0) {
      sumOfOdd += num;
    }
  }
  let diff = sumOfEven - sumOfOdd;

  console.log(diff);
}

solve([1, 2, 3, 4, 5, 6]);
solve([3, 5, 7, 9]);
solve([2, 4, 6, 8, 10]);
