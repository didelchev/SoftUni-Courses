function readtime(pages, pph, days) {
  let totalTime = pages / pph;
  let hoursPerDay = totalTime / days;
  console.log(hoursPerDay);
}

readtime(212, 20, 2);
