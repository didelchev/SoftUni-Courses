function searchForNum(arr1, arr2){
    let elementsToTake = arr2[0];
    let elementsToDelete = arr2[1]
    let searchedNum = arr2[2];
    let count = 0;


    let newArray =arr1.slice(0, elementsToTake);
    newArray.splice(0, elementsToDelete);
    for(let num of newArray){
        if(num === searchedNum){
            count++
            
        }
    }
    console.log(`Number ${searchedNum} occurs ${count} times.`);
}

searchForNum([5, 2, 3, 4, 1, 6],
    [5, 2, 3])