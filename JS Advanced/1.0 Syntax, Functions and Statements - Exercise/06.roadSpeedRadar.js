function calcSpeed(speed, area) {
  let speedLimit = 0;
  switch (area) {
    case "motorway":
      speedLimit = 130;
      if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
      } else if (speed > speedLimit) {
        let difference = speed - speedLimit;
        let status = "";
        if (difference <= 20) {
          status = "speeding";
        } else if (difference <= 40) {
          status = "excessive speeding";
        } else {
          status = "reckless driving";
        }
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - 0${status}`
        );
      }
      break;
    case "interstate":
      speedLimit = 90;
      if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
      } else if (speed > speedLimit) {
        let difference = speed - speedLimit;
        let status = "";
        if (difference <= 20) {
          status = "speeding";
        } else if (difference <= 40) {
          status = "excessive speeding";
        } else {
          status = "reckless driving";
        }
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - 0${status}`
        );
      }
      break;
    case "city":
      speedLimit = 50;
      if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
      } else if (speed > speedLimit) {
        let difference = speed - speedLimit;
        let status = "";
        if (difference <= 20) {
          status = "speeding";
        } else if (difference <= 40) {
          status = "excessive speeding";
        } else {
          status = "reckless driving";
        }
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - 0${status}`
        );
      }
      break;
    case "residential":
      speedLimit = 20;
      if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
      } else if (speed > speedLimit) {
        let difference = speed - speedLimit;
        let status = "";
        if (difference <= 20) {
          status = "speeding";
        } else if (difference <= 40) {
          status = "excessive speeding";
        } else {
          status = "reckless driving";
        }
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - 0${status}`
        );
      }
      break;
    default:
      break;
  }
}

calcSpeed(40, "city");
console.log("-----------");
calcSpeed(21, "residential");
console.log("-----------");
calcSpeed(120, "interstate");
console.log("-----------");
calcSpeed(200, "motorway");
