function heroicInventory(arr) {
  let result = [];

  for (let heroes of arr) {
    let [name, level, items] = heroes.split(" / ");
    level = Number(level);
    items = items ? items.split(", ") : [];
    result.push({ name, level, items });
    console.log(level);
  }
  console.log(JSON.stringify(result));
}

heroicInventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
