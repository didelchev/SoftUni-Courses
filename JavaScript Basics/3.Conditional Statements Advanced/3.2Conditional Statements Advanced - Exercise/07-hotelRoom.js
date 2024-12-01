function hotelRoom(input) {
  let month = input[0];
  let overnightStay = Number(input[1]);
  let studioPrice = 0;
  let apartmentPrice = 0;

  switch (month) {
    case "May":
    case "October":
      studioPrice = 50 * overnightStay;
      apartmentPrice = 65 * overnightStay;

      if (overnightStay > 7 && overnightStay <= 14) {
        studioPrice *= 0.95;
      } else if (overnightStay > 14) {
        studioPrice *= 0.7;
        apartmentPrice *= 0.9;
      }
      break;
    case "June":
    case "September":
      studioPrice = 75.2 * overnightStay;
      apartmentPrice = 68.7 * overnightStay;
      if (overnightStay > 14) {
        studioPrice *= 0.8;
        apartmentPrice *= 0.9;
      }
      break;
    case "July":
    case "August":
      studioPrice = 76 * overnightStay;
      apartmentPrice = 77 * overnightStay;
      if (overnightStay > 14) {
        apartmentPrice *= 0.9;
      }
      break;
  }

  console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
  console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

hotelRoom(["August", "20"]);
