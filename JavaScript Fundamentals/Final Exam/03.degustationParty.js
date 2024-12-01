function degustationDinner(input) {
  let likedMeals = {};
  let unlikedMealsCount = 0;

  for (let line of input) {
    if (line === "Stop") {
      break;
    }

    let [command, guest, meal] = line.split("-");

    if (command === "Like") {
      if (!likedMeals.hasOwnProperty(guest)) {
        likedMeals[guest] = [];
      }

      if (!likedMeals[guest].includes(meal)) {
        likedMeals[guest].push(meal);
      }
    } else if (command === "Dislike") {
      if (!likedMeals.hasOwnProperty(guest)) {
        console.log(`${guest} is not at the party.`);
      } else if (!likedMeals[guest].includes(meal)) {
        console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
      } else {
        likedMeals[guest] = likedMeals[guest].filter(
          (likedMeal) => likedMeal !== meal
        );
        console.log(`${guest} doesn't like the ${meal}.`);
        unlikedMealsCount++;
      }
    }
  }

  for (let guest in likedMeals) {
    console.log(`${guest}: ${likedMeals[guest].join(", ")}`);
  }

  console.log(`Unliked meals: ${unlikedMealsCount}`);
}
