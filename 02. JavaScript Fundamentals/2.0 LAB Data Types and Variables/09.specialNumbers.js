function printSpecialNumbersInRange(n) {
  for (let i = 1; i <= n; i++) {
    let num = i;
    let sumOfDigits = 0;

    while (num > 0) {
      sumOfDigits += num % 10;
      num = Math.floor(num / 10);
    }

    const isSpecial =
      sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11;
    const specialText = isSpecial ? "True" : "False";

    console.log(`${i} -> ${specialText}`);
  }
}
printSpecialNumbersInRange(15);
