function returnSum(num) {
    let array = Array.from(String(num), Number)
    let result1 = oddSum(array)
    let result2 = evenSum(array)

    function oddSum(array) {
        let sum1 = 0
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 !== 0) {
                sum1 += array[i]
            }
        }
        return sum1

    }
    function evenSum(array) {
        let sum2 = 0
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
                sum2 += array[i]
            }
        }
        return sum2
    }
    console.log(`Odd sum = ${result1}, Even sum = ${result2}`)



}

returnSum(1000435)