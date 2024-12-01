function firstAndLast(array){
let k = Number(array[0])
let elements = array.slice(1)
let firstSlicedArray = elements.slice(0,k).join(" ")
let secondSlicedArray = elements.slice(-k).join(" ")

console.log(firstSlicedArray);
console.log(secondSlicedArray);
}

firstAndLast([2, 7, 8, 9])
firstAndLast ([3, 6, 7, 8, 9])
