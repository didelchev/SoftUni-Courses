// function dayOfWeek(day) {
//   let dayName = "";
//   if (day === 1 || day <= 7) {
//     switch (day) {
//       case 1:
//         dayName = "Monday";
//         break;
//       case 2:
//         dayName = "Tuesday";
//         break;
//       case 3:
//         dayName = "Wednesday";
//         break;
//       case 4:
//         dayName = "Thursday";
//         break;
//       case 5:
//         dayName = "Friday";
//         break;
//       case 6:
//         dayName = "Saturday";
//         break;
//       case 7:
//         dayName = "Sunday";
//         break;
//     }
//   } else if (day > 7) {
//     console.log("Invalid day!");
//   }
//   console.log(dayName);
// }

// dayOfWeek(12);

function dayOfWeek(day) {
  let names = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (day === 1 || day <= 7) {
    console.log(names[day - 1]);
  } else {
    console.log("Invalid day!");
  }
}

dayOfWeek(11);
