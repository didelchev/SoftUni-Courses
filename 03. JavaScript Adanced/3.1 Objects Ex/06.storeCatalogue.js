function storeCatalogue(arr) {
  let products = {};
  for (let token of arr) {
    let [name, price] = token.split(" : ");
    price = Number(price);
    let groupInitial = name[0];
    if (!products[groupInitial]) {
      products[groupInitial] = [];
    }
    products[groupInitial].push({ name: name, price: price });
  }

  for (let group in products) {
    products[group].sort((a, b) => a.name.localeCompare(b.name));
  }

  let sortedGroups = Object.keys(products).sort((a, b) => a.localeCompare(b));

  for (let group of sortedGroups) {
    console.log(group);

    for (let product of products[group]) {
      console.log(`  ${product.name}: ${product.price}`);
    }
  }
}
storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
