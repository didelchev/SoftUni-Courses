function maxNumber(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    let isTop = true;
    for (let x = i + 1; x < array.length; x++) {
      let rightNum = array[x];
      if (rightNum >= num) {
        isTop = false;
        break;
      }
    }
    if (isTop) {
      newArray.push(num);
    }
  }
  console.log(newArray.join(" "));
}

maxNumber([1, 4, 3, 2]);
