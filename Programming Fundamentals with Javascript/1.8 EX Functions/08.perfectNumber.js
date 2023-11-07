function isPerfectNumber(num) {
    let finalCheck = checkIsPerfect(num)
        if(finalCheck === num){
            console.log("We have a perfect number!");
        }else {
            console.log("It's not so perfect.");
        }

    function checkIsPerfect(num) {
        let sum = 0;
        for (let i = 0; i <num; i++) {
            
            if (num % i === 0) {
                sum += i
            }
        }
        return sum;
    }
}

isPerfectNumber(6);