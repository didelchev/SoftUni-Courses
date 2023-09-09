function neededFlowers(input) {
  let flowerType = input[0];
  let flowerQuantity = Number(input[1]);
  let budget = Number(input[2]);
  let totalPrice = 0;

  switch (flowerType) {
    case "Roses":
      totalPrice = flowerQuantity * 5;
      break;
    case "Dahlias":
      totalPrice = flowerQuantity * 3.8;
      break;
    case "Tulips":
      totalPrice = flowerQuantity * 2.8;
      break;
    case "Narcissus":
      totalPrice = flowerQuantity * 3.0;
      break;
    case "Gladiolus":
      totalPrice = flowerQuantity * 2.5;
      break;
  }
  if (flowerType === 'Roses' && flowerQuantity >80){
    totalPrice *= 0.90;
  } else if (flowerType ==='Dahlias' && flowerQuantity > 90){
    totalPrice *=0.85;
  } else if (flowerType ==='Tulips' && flowerQuantity > 80){
    totalPrice *= 0.85;
  }else if (flowerType ==='Narcissus' && flowerQuantity < 120){
    totalPrice*=1.15;
  }else if (flowerType === 'Gladiolus' && flowerQuantity <80){
    totalPrice*=1.20;
  }
  if (budget >= totalPrice){
    let moneyLeft = budget - totalPrice;
    console.log(`Hey, you have a great garden with ${flowerQuantity} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`);
  }else if(budget < totalPrice) {
    let moneyNeeded = totalPrice - budget
    console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
  }
}
neededFlowers(["Roses", "55", "250"]);
