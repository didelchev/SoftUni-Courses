function rotate(array, num) {
  for (let i = 0; i < num; i++) {
    let firsElement = array.shift();
    array.push(firsElement);
  }
  console.log(array.join(" "));
}

rotate([51, 47, 32, 61, 21], 2);
