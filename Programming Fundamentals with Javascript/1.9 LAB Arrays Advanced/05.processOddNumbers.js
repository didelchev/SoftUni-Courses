function processOddNums(array){
    let newArray = [];
  let oddNums = array.filter((x,i) => i % 2 !== 0)
  let multiplied = oddNums.map(x=>x*2)
  console.log(multiplied.reverse().join(" "));
}

processOddNums([10, 15, 20, 25]);
processOddNums([3, 0, 10, 4, 7, 3] )