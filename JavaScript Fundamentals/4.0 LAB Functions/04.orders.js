function orders(product, quantity) {
    let price = 0;
    let total = 0;
    switch (product) {
        case "coffee":
            price = 1.50
            total = price * quantity
            break;
        case "water":
            price = 1.00
            total = price * quantity
            break;
        case "coke":
            price = 1.40
            total = price * quantity
            break;
        case "snacks":
            price = 2.00
            total = price * quantity
            break;
    }
    console.log(total.toFixed(2 ));
}
orders("water", 5)