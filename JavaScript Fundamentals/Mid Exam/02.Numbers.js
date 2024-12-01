function commandNums(array) {
  let mapedArray = array[0].split(" ").map(Number);

  for (let i = 1; i < array.length; i++) {
    let command = array[i];
    let symbols = command.split(" ");

    if (symbols[0] === "Add") {
      let value = Number(symbols[1]);
      mapedArray.push(value);
    } else if (symbols[0] === "Remove") {
      let value = Number(symbols[1]);
      let removeIndex = mapedArray.indexOf(value);

      for (let i = 0; i < mapedArray.length; i++) {
        if (mapedArray[i] === value) {
          mapedArray.splice(removeIndex, 1);
          break;
        }
      }
    } else if (symbols[0] === "Replace") {
      let value = Number(symbols[1]);
      let replacement = Number(symbols[2]);
      for (let i = 0; i < mapedArray.length; i++) {
        if (mapedArray[i] === value) {
          mapedArray.splice(i, 1, replacement);
          break;
        }
      }
    } else if (symbols[0] === "Collapse") {
      let value = Number(symbols[1]);
      for (let i = 0; i < mapedArray.length; i++) {
        if (mapedArray[i] < value) {
          mapedArray.splice(i, 1);
        }
      }
    } else if (symbols[0] === "Finish") {
      let value = Number(symbols[1]);
      console.log(mapedArray.join(" "));
      return;
    }
  }
}

commandNums(["1 4 5 19", "Add 1", "Remove 4", "Finish"]);
commandNums(["1 20 -1 10", "Collapse 8", "Finish"]);
commandNums(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"]);
