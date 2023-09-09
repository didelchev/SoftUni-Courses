// Цената зависи от сезона:
// ⦁	Цената за наем на кораба през пролетта е  3000 лв.
// ⦁	Цената за наем на кораба през лятото и есента е  4200 лв.
// ⦁	Цената за наем на кораба през зимата е  2600 лв.
// В зависимост от броя си групата ползва отстъпка:
// ⦁	Ако групата е до 6 човека включително  –  отстъпка от 10%.
// ⦁	Ако групата е от 7 до 11 човека включително  –  отстъпка от 15%.
// ⦁	Ако групата е от 12 нагоре  –  отстъпка от 25%.

function fishingBoat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let fisherman = input[2];
  let price = 0;

  switch (season) {
    case "Spring":
      price = 3000;
      break;
    case "Summer":
    case "Autumn":
      price = 4200;
      break;
    case "Winter":
      price = 2600;
      break;
  }
  if (fisherman <= 6) {
    price *= 0.9;
  } else if (fisherman >= 7 && fisherman <= 11) {
    price *= 0.85;
  } else if (fisherman > 12) {
    price *= 0.75;
  }
  if (fisherman % 2 === 0 && season !== "Autumn") {
    price *= 0.95;
  }
  if (budget >= price) {
    let moneyLeft = budget - price;
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
  } else if (budget < price) {
    let moneyNeeded = price - budget;
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
  }
}

fishingBoat(["3000", "Summer", "11"]);
