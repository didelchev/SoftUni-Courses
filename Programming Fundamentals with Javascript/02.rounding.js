function rounding(num, precision) {
  if (precision > 15) {
    precision = 15;
  }
  console.log(parseFloat(num.toFixed(precision)));
}

rounding(Math.PI, 2);
// rounding(10.5, 3);
