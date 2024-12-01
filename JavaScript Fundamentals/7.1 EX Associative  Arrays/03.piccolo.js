// function piccolo(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let command = arr[i];
//     let symbols = command.split(",");
//     if (symbols[0] === "IN") {
//       newArr.push(symbols[1]);
//     } else if (symbols[0] === "OUT" && newArr.includes(symbols[1])) {
//       let indexToRemove = newArr.indexOf(symbols[1]);
//       newArr.splice(indexToRemove, 1);
//     }
//   }
//   if (newArr.length > 0) {
//     console.log(newArr.sort((a, b) => a.localeCompare(b)).join(" \n"));
//   } else {
//     console.log("Parking Lot is Empty");
//   }
// }
function piccolo(input) {
  const parking = new Set();

  for (const car of input) {
    const [direction, carNumber] = car.split(", ");

    if (direction === "IN") {
      parking.add(carNumber);
    } else if (direction === "OUT" && parking.has(carNumber)) {
      parking.delete(carNumber);
    }
  }

  const sortedCars = [...parking].sort();

  if (sortedCars.length > 0) {
    console.log(sortedCars.join(" \n"));
  } else {
    console.log("Parking Lot is Empty");
  }
}

piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);

// piccolo([
//   "IN, CA2844AA",
//   "IN, CA1234TA",
//   "OUT, CA2844AA",
//   "IN, CA9999TT",
//   "IN, CA2866HI",
//   "OUT, CA1234TA",
//   "IN, CA2844AA",
//   "OUT, CA2866HI",
//   "IN, CA9876HH",
//   "IN, CA2822UU",
// ]);
// else if (symbols[0] === "Remove") {
// let value = Number(symbols[1]);
// let removeIndex = mapedArray.indexOf(value);
