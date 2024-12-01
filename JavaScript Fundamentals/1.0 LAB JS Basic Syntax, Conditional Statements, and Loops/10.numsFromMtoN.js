// Write a function that receives a number M and a number N (M will always be bigger than N). Print all numbers from
// M to N.

function solve(m, n) {
  while (m >= n) {
    console.log(m);
    m--;
  }
}

solve(6, 2);
