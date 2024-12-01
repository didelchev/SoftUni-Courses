function storage(arr) {
  let newMap = new Map();
  for (let line of arr) {
    let [product, qty] = line.split(" ");
    let parsedQty = parseInt(qty);
    if (newMap.has(product)) {
      let existingQty = newMap.get(product);
      newMap.set(product, existingQty + parsedQty);
    } else {
      newMap.set(product, parsedQty);
    }
  }
  for (let [product, qty] of newMap) {
    console.log(`${product} -> ${qty}`);
  }
}

storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
