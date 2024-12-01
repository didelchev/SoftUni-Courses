function fruitShop(input) {

    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let finalSum = 0

    if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') {
        switch (fruit) {

            case 'banana': finalSum = 2.50 * quantity;
                console.log(finalSum.toFixed(2)); break;
            case 'apple': finalSum = 1.20 * quantity;
                console.log(finalSum.toFixed(2)); break;
            case 'orange': finalSum = 0.85 * quantity;
                console.log(finalSum.toFixed(2)); break;
            case 'grapefruit': finalSum = 1.45 * quantity;
                console.log(finalSum.toFixed(2)); break;
            case 'kiwi': finalSum = 2.70 * quantity;
                console.log(finalSum.toFixed(2)); break;
            case 'pineapple': finalSum = 5.50 * quantity;
                console.log(finalSum.toFixed(2)); break;
            case 'grapes': finalSum = 3.85 * quantity;
                console.log(finalSum.toFixed(2)); break;
            default:
                console.log('error');
        }

    } else if (day === 'Saturday' || day === 'Sunday') {
        switch (fruit) {

            case 'banana': finalSum = 2.70 * quantity;
                console.log(finalSum.toFixed(2)); break;
            case 'apple': finalSum = 1.25 * quantity;
                console.log(finalSum.toFixed(2)); break;
            case 'orange': finalSum = 0.90 * quantity;
                console.log(finalSum.toFixed(2)); break;
            case 'grapefruit': finalSum = 1.60 * quantity;
                console.log(finalSum.toFixed(2)); break;
            case 'kiwi': finalSum = 3.00 * quantity;
                console.log(finalSum.toFixed(2)); break;
            case 'pineapple': finalSum = 5.60 * quantity;
                console.log(finalSum.toFixed(2)); break;
            case 'grapes': finalSum = 4.20 * quantity;
                console.log(finalSum.toFixed(2)); break;
            default:
                console.log('error');
        }
    } else if (day !== "Monday" || day !== "Tuesday" || day !== "Wednesday" || day !== "Thursday" || day !== "Friday" || day !== "Saturday" || day !== "Sunday") {
        console.log("error");
    }

}
fruitShop(["tomato", "Monday", "0.5"])