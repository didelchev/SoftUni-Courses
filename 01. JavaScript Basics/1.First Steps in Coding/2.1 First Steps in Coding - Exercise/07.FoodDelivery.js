// Ресторант отваря врати и предлага няколко менюта на преференциални цени: 
// ⦁	Пилешко меню –  10.35 лв. 
// ⦁	Меню с риба – 12.40 лв. 
// ⦁	Вегетарианско меню  – 8.15 лв. 
// Напишете програма, която изчислява колко ще струва на група хора да си поръчат храна за вкъщи.
// Групата ще си поръча и десерт, чиято цена е равна на 20% от общата сметка (без доставката). 
// Цената на доставка е 2.50 лв и се начислява най-накрая.  
// Вход
// От конзолата се четат 3 реда:
// ⦁	Брой пилешки менюта – цяло число в интервала [0 … 99]
// ⦁	Брой менюта с риба – цяло число в интервала [0 … 99]
// ⦁	Брой вегетариански менюта – цяло число в интервала [0 … 99]



function foodDelivery(input) {

    let chickenMenusQuantity = Number(input[0]);
    let fishMenusQunatity = Number(input[1]);
    let veganMenusQuantity = Number(input[2]);

    let chickenMenuPrice = 10.35 * chickenMenusQuantity
    let fishMenuPrice = 12.40 * fishMenusQunatity
    let veganMenuPrice = 8.15 * veganMenusQuantity

    let totalMenusPrice = chickenMenuPrice + fishMenuPrice + veganMenuPrice
    let desertPrice = 20 / 100 * totalMenusPrice

    let totalSum = totalMenusPrice + desertPrice + 2.50

    console.log(totalSum);
}


foodDelivery(['2', '4', '3']);