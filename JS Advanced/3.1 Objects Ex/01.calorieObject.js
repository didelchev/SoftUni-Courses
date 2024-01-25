function compose(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i += 2) {
    let foodName = arr[i];
    let cals = Number(arr[i + 1]);

    obj[foodName] = cals;
  }

  console.log(obj);
}

compose(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
