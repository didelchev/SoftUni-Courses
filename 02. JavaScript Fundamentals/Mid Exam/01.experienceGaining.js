function expGain(array) {
  let expNeeded = Number(array[0]);
  let battleCount = Number(array[1]);
  let expCollected = 0;
  let count = 0;

  for (let i = 2; i < array.length; i++) {
    let expPerBattle = array[i];
    count++;
    // Exp calculations
    if (count % 3 === 0) {
      expPerBattle *= 1.15;
    } else if (count % 5 === 0) {
      expPerBattle *= 0.9;
    } else if (count % 15 === 0) {
      expPerBattle *= 1.05;
    }
    expCollected += expPerBattle;
    if (expCollected >= expNeeded) {
      break;
    }
  }
  //   Check the collected exp and print
  if (expCollected >= expNeeded) {
    console.log(
      `Player successfully collected his needed experience for ${count} battles.`
    );
  } else {
    let expRemaining = expNeeded - expCollected;
    console.log(
      `Player was not able to collect the needed experience, ${expRemaining.toFixed(
        2
      )} more needed.`
    );
  }
}

expGain([500, 5, 50, 100, 200, 100, 30]);
expGain([500, 5, 50, 100, 200, 100, 20]);
expGain([400, 5, 50, 100, 200, 100, 20]);
