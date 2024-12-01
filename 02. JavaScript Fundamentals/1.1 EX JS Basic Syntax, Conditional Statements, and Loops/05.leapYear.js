function check(num) {
  if ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
check(1984);
// check(2003);
// check(4);
