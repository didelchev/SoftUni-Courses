function race(input) {
  const racers = input.shift().split(", ");
  const results = {};

  for (let line of input) {
    if (line === "end of race") {
      break;
    }

    const name = line.match(/[A-Za-z]+/g).join("");
    const distance = line
      .match(/\d/g)
      .map(Number)
      .reduce((acc, curr) => acc + curr, 0);

    if (racers.includes(name)) {
      if (!results.hasOwnProperty(name)) {
        results[name] = 0;
      }
      results[name] += distance;
    }
  }

  const sortedResults = Object.entries(results)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  console.log(`1st place: ${sortedResults[0][0]}`);
  console.log(`2nd place: ${sortedResults[1][0]}`);
  console.log(`3rd place: ${sortedResults[2][0]}`);
}

race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
