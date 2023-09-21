function multiply(num) {
  for (let count = 1; count <= 10; count++) {
    let sum = count * num;
    console.log(`${num} X ${count} = ${sum}`);
  }
}

multiply(5);
