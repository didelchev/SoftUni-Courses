function isNegativeOrPositive(array){
    let result = [];
    for (let num of array){
        if(num < 0){
            result.unshift(num)
        }else{
            result.push(num);
        }
    }
    console.log(result.join('\n'));
}

isNegativeOrPositive(['7', '-2', '8', '9'])
isNegativeOrPositive(['3', '-2', '0', '-1'])