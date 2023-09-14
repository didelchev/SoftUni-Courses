// Write a program that prints the next n odd numbers (starting from 1) and on the last row prints the sum of them.

function solve(n) {
  let sum = 0;
  let count = 0;
  let num = 1;

  while (count < n) {
    if (num % 2 !== 0) {
      console.log(num);
      sum += num;
      count++;
    }
    num++;
  }

  console.log(`Sum: ${sum}`);
}

solve(5);
