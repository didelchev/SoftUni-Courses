function sameNumbers(num) {
  let isSame = true;
  let sum = 0;
  let numAsString = num.toString();
  sum += Number(numAsString[0]);

  for (let i = 1; i < numAsString.length; i++) {
    if (numAsString[i] !== numAsString[i - 1]) {
      isSame = false;
    }
    sum += Number(numAsString[i]);
  }
  console.log(isSame);
  console.log(sum);
}
sameNumbers(2222222);
sameNumbers(1234);
