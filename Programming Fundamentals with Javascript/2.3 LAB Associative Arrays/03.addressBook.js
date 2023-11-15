function addressBook(arr) {
  let addressBook = {};
  for (let line of arr) {
    let [name, address] = line.split(":");
    addressBook[name] = address;
  }
  let sorted = Object.entries(addressBook);
  sorted.sort((a, b) => a[0].localeCompare(b[0]));
  let sortedObj = Object.fromEntries(sorted);

  // for (let [name, address] of sorted) {
  //   sortedObj[name] = address;
  // }

  for (let [name, address] of Object.entries(sortedObj)) {
    console.log(`${name} -> ${address}`);
  }
}

addressBook([
  "Tim:Doe Crossing",

  "Bill:Nelson Place",

  "Peter:Carlyle Ave",

  "Bill:Ornery Rd",
]);
