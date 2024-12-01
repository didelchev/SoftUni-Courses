function solve(fruit, weight, pricePerKilo) {
  let roundedWeight = weight / 1000;

  let sum = pricePerKilo * roundedWeight;
  console.log(
    `I need $${sum.toFixed(2)} to buy ${roundedWeight.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}

solve("orange", 2500, 1.8);
solve("apple", 1563, 2.35);

// console.log(`I need ${money} to buy {weight} kilograms {fruit}.`);
