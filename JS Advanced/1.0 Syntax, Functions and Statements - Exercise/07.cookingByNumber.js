function cookingByNumbers(numAsStr, ...actions) {
  let num = Number(numAsStr);
  for (let action of actions) {
    switch (action) {
      case "chop":
        num /= 2;
        break;
      case "dice":
        num = Math.sqrt(num);
        break;
      case "spice":
        num += 1;
        break;
      case "bake":
        num *= 3;
        break;
      case "fillet":
        num = (num * 0.8).toFixed(1);
        break;
    }
    console.log(num);
  }
}
cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");
cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
