function sortByTwo(array) {
  array.sort((a, b) => {
    let sortByLength = a.length - b.length;

    if (sortByLength !== 0) {
      return sortByLength;
    } else {
      return a.localeCompare(b);
    }
  });
  array.forEach((element) => {
    console.log(element);
  });
}
sortByTwo(["alpha", "beta", "gamma"]);
