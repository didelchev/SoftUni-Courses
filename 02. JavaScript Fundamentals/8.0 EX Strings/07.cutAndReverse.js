function cutAndReverse(input) {
  const midpoint = Math.ceil(input.length / 2);
  const firstHalf = input.slice(0, midpoint).split("").reverse().join("");
  const secondHalf = input.slice(midpoint).split("").reverse().join("");

  console.log(firstHalf);
  console.log(secondHalf);
}
cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
