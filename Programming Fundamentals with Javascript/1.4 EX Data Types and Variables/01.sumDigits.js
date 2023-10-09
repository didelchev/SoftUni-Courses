function sum(num) {
  let numToString = num.toString();
  let digitSum = 0;
  for (let index = 0; index < numToString.length; index++) {
    digitSum += parseInt(numToString[index]);
  }
  console.log(digitSum);
}

sum(245678);
