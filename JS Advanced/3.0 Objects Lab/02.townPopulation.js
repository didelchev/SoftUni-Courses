function townPop(arr) {
  let towns = {};

  for (let townAsStr of arr) {
    let [name, population] = townAsStr.split(" <-> ");
    population = Number(population);

    if (towns[name] != undefined) {
      population += towns[name];
    }
    towns[name] = population;
  }
  for (let town in towns) {
    console.log(`${town} : ${towns[town]}`);
  }
}
