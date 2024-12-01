function skiTrip(input) {
  let days = Number(input[0]);
  let roomType = input[1];
  let feedback = input[2];

  let nights = days - 1;
  let totalPrice = 0;

  switch (roomType) {
    case "room for one person":
      totalPrice = 18 * nights;
      break;
    case "apartment":
      totalPrice = 25 * nights;
      if (nights < 10) {
        totalPrice *= 0.7;
      } else if (nights <= 15) {
        totalPrice *= 0.65;
      } else if (nights > 15) {
        totalPrice *= 0.5;
      }
      break;
    case "president apartment":
      totalPrice = 35 * nights;
      if (nights < 10) {
        totalPrice *= 0.9;
      } else if (nights <= 15) {
        totalPrice *= 0.85;
      } else if (nights > 15) {
        totalPrice *= 0.8;
      }
      break;
  }
  if (feedback === "positive") {
    totalPrice *= 1.25;
  } else if (feedback ==='negative'){
    totalPrice *= 0.9;
  }
  console.log(totalPrice.toFixed(2));
}

skiTrip(["30", "president apartment", "negative"]);
