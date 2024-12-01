function towns(arr) {
  for (let town of arr) {
    let [townName, latitude, longitute] = town.split(" | ");
    latitude = Number(latitude).toFixed(2);
    longitute = Number(longitute).toFixed(2);

    let townObject = {
      town: townName,
      latitude: latitude,
      longitude: longitute,
    };
    console.log(townObject);
  }
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
