function addNSubtract (a,b,c){
    let result1 = sum(a,b)
    let result2 = subtract(result1, c)
    console.log(result2);
    function sum(a,b){
        return a + b
    }
        function subtract(a,b){
        return a - b
        }
}

addNSubtract(23,6,10)