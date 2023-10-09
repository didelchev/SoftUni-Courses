function merge(arr1, arr2) {
  let merged = [];

  for (let i = 0; i < arr1.length; i++) {
    let element1 = arr1[i];
    let element2 = arr2[i];

    if (i % 2 === 0) {
      merged.push(Number(element1) + Number(element2));
    } else if (i % 2 !== 0) {
      merged.push(element1 + element2);
    }
  }
  console.log(merged.join(" - "));
}

merge(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
