// function fruitOrVeggie(input) {

//     let productName = input[0];
//     if (productName === 'banana' || productName === 'apple' || productName === 'kiwi' || productName === 'cherry' || productName === 'lemon' || productName === 'grapes') {
//         console.log('fruit');
//     } else if (productName === 'tomato' || productName === 'pepper' || productName === 'carrot' || productName === 'cucumber') {
//         console.log('vegetable');
//     } else {
//         console.log('unknown');
//     }
// }

// fruitOrVeggie(['water'])



function fruitOrVeggie(input) {

    let productName = input[0];
    let type = 'toBeDefined'

    switch (productName) {
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes':
            type = 'fruit'
            break;
        case 'tomato':
        case 'pepper':
        case 'carrot':
        case 'cucumber':
            type = 'vegetable'
            break;
        default:
            type = 'unknown'

    }
console.log(type);
}

fruitOrVeggie(['carrot'])