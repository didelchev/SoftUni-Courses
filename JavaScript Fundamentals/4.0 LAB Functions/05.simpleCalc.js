function calculate(a,b, operator){
    let add = (a,b) => a+b;
    let subtract = (a,b) => a-b;
    let multiply = (a,b) => a*b;
    let divide = (a,b) => a/b;
    let result;
    switch (operator) {
        case "add":
            result = add(a,b);
            break;
        case "subtract":
            result = subtract(a,b);
            break;
        case "multiply":
            result = multiply(a,b);
            break;
        case "divide":
            result = divide(a,b);
            break;
    }
    console.log(result)
}
calculate(5,5,"multiply")
