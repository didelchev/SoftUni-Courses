// function bombNumbers(arr1, arr2){
//     // find the bomb
//     let bombNum = arr2[0];
//     let bombPower = arr2[1];
//     let bombIndex = arr1.indexOf(bombNum)
//     let sum = 0;

//     for(let num of arr1){
//         if(num === bombNum){
//             let bombIndex = arr1.indexOf(bombNum)
//             arr1.splice(Math.max(0, bombIndex - bombPower), bombPower*2 +1)
//                 for(let num2 of arr1){
//                 sum += num2
//             }
//                 }
                
//         }
//         console.log(sum);
//     }





// bombNumbers([1, 2, 2, 4, 2, 2,
//     2, 9],
//     [4, 2])




function bombNumbers(nums, bombInfo){
    let[bombNum, power] = bombInfo

    while(nums.includes(bombNum)){
        let index = nums.indexOf(bombNum);
        nums.splice(Math.max(0, index - power), power*2 +1)
    }
    let sum = 0;
    for(let num of nums){
        sum +=num
    }
    console.log(sum);
}