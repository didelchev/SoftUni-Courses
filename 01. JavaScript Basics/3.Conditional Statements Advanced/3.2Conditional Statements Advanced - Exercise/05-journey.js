function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let costs = budget;
  let destination = "";
  let placeToStay = "";

  if (budget <= 100) {
    destination = "Bulgaria";
    switch (season) {
      case "summer":
        placeToStay = "Camp";
        costs *= 0.3;
        break;
      case "winter":
        placeToStay = "Hotel";
        costs *= 0.7;
        break;
    }
  } else if (budget <= 1000) {
    destination = "Balkans";
    switch (season) {
      case "summer":
        placeToStay = "Camp";
        costs *= 0.4;
        break;
      case "winter":
        placeToStay = "Hotel";
        costs *= 0.8;
        break;
    }
  } else if (budget > 1000) {
    destination = "Europe";
    placeToStay = "Hotel";
    costs *= 0.9;
  }
  console.log(`Somewhere in ${destination}`);
  console.log(`${placeToStay} - ${costs.toFixed(2)}`);
}

journey(["50", "summer"]);
