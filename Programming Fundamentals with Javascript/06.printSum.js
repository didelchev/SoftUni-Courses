function printAndSum(start, end) {
  let sum = 0;
  let nums = "";
  for (let num = start; num <= end; num++) {
    sum += num;
    nums += num + " ";
  }
  console.log(nums);
  console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
