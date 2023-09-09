// Румен иска да пребоядиса хола и за целта е наел майстори. Напишете програма, която изчислява разходите за ремонта, предвид следните цени:
// ⦁	Предпазен найлон - 1.50 лв. за кв. метър
// ⦁	Боя - 14.50 лв. за литър
// ⦁	Разредител за боя - 5.00 лв. за литър
// За всеки случай, към необходимите материали,
//  Румен иска да добави още 10% от количеството боя и 2 кв.м. найлон, разбира се и 0.40 лв. за торбички. Сумата, която се заплаща на майсторите за 1 час работа, е равна на 30% от сбора на всички разходи за материали.
// Вход
// Входът се чете от конзолата и съдържа точно 4 реда:
// ⦁	Необходимо количество найлон (в кв.м.) - цяло число в интервала [1... 100]
// ⦁	Необходимо количество боя (в литри) - цяло число в интервала [1…100]
// ⦁	Количество разредител (в литри) - цяло число в интервала [1…30]
// ⦁	Часовете, за които майсторите ще свършат работата - цяло число в интервала [1…9]


function repainting(input) {
    let nylonPrice = 1.50
    let paintPrice = 14.50
    let thinnerPrice = 5.00
    let nylonBags = 0.40

    let additionalNylon = 2
    let additionalPaint = 0.1 * Number(input[1]);
    
    let totalNylonPrice = (Number(input[0]) + additionalNylon) * nylonPrice
    let totalPaintPrice = (Number(input[1]) + additionalPaint ) * paintPrice
    let totalThinnerPrice = Number(input[2]) * thinnerPrice
    let totalMaterialsPrice = totalNylonPrice + totalPaintPrice + totalThinnerPrice + nylonBags
    let workersPrice = (totalMaterialsPrice * 30/100) * Number(input[3])

    let totalPrice = totalMaterialsPrice + workersPrice

    console.log(totalPrice);


}


repainting(['10', '11', '4', '8'])