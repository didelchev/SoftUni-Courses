function distinctArray(array){
  let uniqueArray = [];
  for(let num of array){
    
    if(!uniqueArray.includes(num)){
        uniqueArray.push(num)
    }
  }
console.log(uniqueArray.join(" "));
}
distinctArray([1,2,3,4])
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])