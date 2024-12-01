function vacationPrice(ppl, grptype, wkday) {
  let price;
  let totalPrice = price * ppl;

  if (wkday === "Friday") {
    switch (grptype) {
      case "Students":
        if (ppl >= 30) {
          price = 8.45;
          totalPrice = ppl * price * 0.85;
        } else {
          price = 8.45;
          totalPrice = price * ppl;
        }
        break;
      case "Business":
        if (ppl >= 100) {
          price = 10.9;
          let paidPeople = ppl - 10;
          totalPrice = paidPeople * price;
        } else {
          price = 10.9;
          totalPrice = price * ppl;
        }
        break;
      case "Regular":
        if (ppl >= 10 && ppl <= 20) {
          price = 15;
          totalPrice = ppl * price * 0.95;
        } else {
          price = 15;
          totalPrice = price * ppl;
        }
        break;
    }
  } else if (wkday === "Saturday") {
    switch (grptype) {
      case "Students":
        if (ppl >= 30) {
          price = 9.8;
          totalPrice = ppl * price * 0.85;
        } else {
          price = 9.8;
          totalPrice = price * ppl;
        }
        break;
      case "Business":
        if (ppl >= 100) {
          price = 15.6;
          let paidPeople = ppl - 10;
          totalPrice = paidPeople * price;
        } else {
          price = 15.6;
          totalPrice = price * ppl;
        }
        break;
      case "Regular":
        if (ppl >= 10 && ppl <= 20) {
          price = 20;
          totalPrice = ppl * price * 0.95;
        } else {
          price = 20;
          totalPrice = price * ppl;
        }
        break;
    }
  } else if (wkday === "Sunday") {
    switch (grptype) {
      case "Students":
        if (ppl >= 30) {
          price = 10.46;
          totalPrice = ppl * price * 0.85;
        } else {
          price = 10.46;
          totalPrice = price * ppl;
        }
        break;
      case "Business":
        if (ppl >= 100) {
          price = 16;
          let paidPeople = ppl - 10;
          totalPrice = paidPeople * price;
        } else {
          price = 16;
          totalPrice = price * ppl;
        }
        break;
      case "Regular":
        if (ppl >= 10 && ppl <= 20) {
          price = 22.5;
          totalPrice = ppl * price * 0.95;
        } else {
          price = 22.5;
          totalPrice = price * ppl;
        }
        break;
    }
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

// vacationPrice(30, "Students", "Sunday");
vacationPrice(40, "Business", "Saturday");
