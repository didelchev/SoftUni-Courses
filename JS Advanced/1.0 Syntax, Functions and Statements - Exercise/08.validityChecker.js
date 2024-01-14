function checkAndPrintValidity(x1, y1, x2, y2) {
  function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }

  function isDistanceValid(x1, y1, x2, y2) {
    const distance = calculateDistance(x1, y1, x2, y2);
    return Number.isInteger(distance);
  }

  const distance1 = isDistanceValid(x1, y1, 0, 0);
  const distance2 = isDistanceValid(x2, y2, 0, 0);
  const distance3 = isDistanceValid(x1, y1, x2, y2);

  console.log(`{${x1}, ${y1}} to {0, 0} is ${distance1 ? "valid" : "invalid"}`);
  console.log(`{${x2}, ${y2}} to {0, 0} is ${distance2 ? "valid" : "invalid"}`);
  console.log(
    `{${x1}, ${y1}} to {${x2}, ${y2}} is ${distance3 ? "valid" : "invalid"}`
  );
}

// Example input
checkAndPrintValidity(3, 0, 0, 4);
