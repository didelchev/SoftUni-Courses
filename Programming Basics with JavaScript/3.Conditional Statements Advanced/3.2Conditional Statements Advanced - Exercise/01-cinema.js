
function cinema(input) {

    let filmType = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);

    let ticketsCount = rows *cols;
    let profit = 0;

    if (filmType === 'Premiere') {
        profit = ticketsCount * 12
    }else if (filmType === "Normal") {
        profit = ticketsCount * 7.50
    }else if (filmType === "Discount") {
        profit = ticketsCount * 5.00
    }

    console.log(`${profit} leva`);

}

cinema(['Premiere', '10', '12'])