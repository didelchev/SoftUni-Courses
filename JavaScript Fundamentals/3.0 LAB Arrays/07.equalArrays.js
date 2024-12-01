function equality(arr1, arr2) {
  // convert arrays into numbers
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = Number(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    arr2[i] = Number(arr2[i]);
  }
  // check if they are equal

  let num = 0;
  let sumOfFirst = 0;
  let foundDifference = false;
  for (let i = 0; i < arr1.length; i++) {
    //NO - find the first index that is different and print it
    if (arr1[i] !== arr2[i]) {
      foundDifference = true;
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      break;
      //YES -find the sum of the first array
    } else {
      sumOfFirst += arr1[i];
    }
  }
  if (foundDifference === false) {
    console.log(`Arrays are identical. Sum: ${sumOfFirst} `);
  }
}
equality(["10", "20", "30"], ["10", "20", "30"]);
equality(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
equality(["1"], ["10"]);
