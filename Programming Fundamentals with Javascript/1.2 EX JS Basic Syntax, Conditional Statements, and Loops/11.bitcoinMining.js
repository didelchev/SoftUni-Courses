function bitcoinMining(input) {
  let money = 0;
  let bitcoinsCount = 0;
  let daysCount = 0;
  let firstCoinDay = 0;
  const goldPrice = 67.51;
  const bitcoinPrice = 11949.16;

  for (let i = 0; i < input.length; i++) {
    daysCount++;
    let minedGold = Number(input[i]);
    if (daysCount % 3 === 0) {
      minedGold *= 0.7;
    }
    money += minedGold * goldPrice;
    if (money >= bitcoinPrice && firstCoinDay == 0) {
      firstCoinDay = daysCount;
    }
    if (money >= bitcoinPrice) {
      let newPurchase = Math.trunc(money / bitcoinPrice);
      bitcoinsCount += newPurchase;
      money -= newPurchase * bitcoinPrice;
    }
  }
  console.log(`Bought bitcoins: ${bitcoinsCount}`);
  if (firstCoinDay > 0) {
    console.log(`Day of the first purchased bitcoin: ${firstCoinDay}`);
  }
  console.log(`Left money: ${money.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);
