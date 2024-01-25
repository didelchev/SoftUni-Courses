function townsToJSON(arr) {
  let result = [];

  for (let i = 1; i < arr.length; i++) {
    let [town, latitude, longitude] = arr[i]
      .trim()
      .split("|")
      .map((x) => x.trim())
      .filter((x) => !!x);

    let parsedLatitude = parseFloat(latitude).toFixed(2);
    let parsedLongitude = parseFloat(longitude).toFixed(2);

    result.push({
      Town: town,
      Latitude: Number(parsedLatitude),
      Longitude: Number(parsedLongitude),
    });
  }
  let resultToJSON = JSON.stringify(result);
  console.log(resultToJSON);
}

// townsToJSON([
//   "| Town | Latitude | Longitude |",
//   "| Sofia | 42.696552 | 23.32601 |",
//   "| Beijing | 39.913818 | 116.363625 |",
// ]);

townsToJSON([
  "| Town | Latitude | Longitude |",
  "| Veliko Turnovo | 43.0757 | 25.6172 |",
  "| Monatevideo | 34.50 | 56.11 |",
]);
