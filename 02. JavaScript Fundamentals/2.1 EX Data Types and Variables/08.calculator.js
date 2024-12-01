function calc(num1, operator, num2) {
  let sum = 0;
  if (operator === "+") {
    sum = num1 + num2;
    console.log(sum.toFixed(2));
  } else if (operator === "-") {
    sum = num1 - num2;
    console.log(sum.toFixed(2));
  } else if (operator === "/") {
    sum = num1 / num2;
    console.log(sum.toFixed(2));
  } else if (operator === "*") {
    sum = num1 * num2;
    console.log(sum.toFixed(2));
  }
}

calc(5, "+", 10);
calc(25.5, "-", 3);
