function depositCalc(input) {
    let depositSum = Number(input[0]);
    let depositTerm = Number(input[1]);
    let yearDividentPercent = Number(input[2]);
    let yearDividentDecimal = Number(input[2]) / 100 

    let finalSum = depositSum + depositTerm * ((depositSum * yearDividentDecimal) / 12);

    console.log(finalSum);
}

depositCalc (['200', '3', '5.7']);



// Напишете програма, която изчислява каква сума ще получите в края на депозитния период при определен лихвен процент. Използвайте следната формула: 
// сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
// ⦁	Депозирана сума – реално число в интервала [100.00 … 10000.00]
// ⦁	Срок на депозита (в месеци) – цяло число в интервала [1…12]
// ⦁	Годишен лихвен процент – реално число в интервала [0.00 …100.00]

