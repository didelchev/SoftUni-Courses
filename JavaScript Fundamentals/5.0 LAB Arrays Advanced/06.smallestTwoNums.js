function findSmallestNums(array){
    let newArray = array.sort((a,b) => a-b)
    console.log(newArray.slice(0,2).join(" "));
    

}

findSmallestNums([30, 15, 50, 5])
findSmallestNums ([3, 0, 10, 4, 7, 3]   )