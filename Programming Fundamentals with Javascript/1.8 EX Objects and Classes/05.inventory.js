function inventory(arr) {
  let heroData = [];

  for (let hero of arr) {
    let [heroName, heroLevel, items] = hero.split(" /");
    heroLevel = Number(heroLevel);

    let heroObj = {
      Hero: heroName,
      level: heroLevel,
      items: items,
    };

    heroData.push(heroObj);
  }

  heroData.sort((a, b) => a.level - b.level);

  for (let hero of heroData) {
    console.log(`Hero: ${hero.Hero}`);
    console.log(`level => ${hero.level}`);
    console.log(`items =>${hero.items}`);
  }
}

inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
