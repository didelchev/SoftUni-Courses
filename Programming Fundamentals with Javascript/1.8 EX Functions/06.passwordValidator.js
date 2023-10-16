function passwordValidator(pass) {
    function checkLength() {
      return pass.length >= 6 && pass.length <= 10;
    }
  
    function checkLetters() {
      const pattern = /^[a-zA-Z0-9]+$/;
      return pattern.test(pass);
    }
  
    function checkDigits() {
      let digitCount = 0;
      for (let char of pass) {
        if (/\d/.test(char)) {
          digitCount++;
          if (digitCount >= 2) {
            return true;
          }
        }
      }
      return false;
    }
  
    let passLength = checkLength();
    let lettersAndDigits = checkLetters();
    let passDigits = checkDigits();
  
    if (passLength && lettersAndDigits && passDigits) {
      console.log("Password is valid");
    } else {
      if (!passLength) {
        console.log("Password must be between 6 and 10 characters");
      }
      if (!lettersAndDigits) {
        console.log("Password must consist only of letters and digits");
      }
      if (!passDigits) {
        console.log("Password must have at least 2 digits");
      }
    }
  }
  




















// function passwordValidator(pass) {
//     let passLength = checkLength(pass)
//     let lettersAndDigits = checkLetters(pass)
//     let passDigits = checkDigits(pass)
//     if (passLength && lettersAndDigits && passDigits) {
//         console.log("Password is valid");
//     } else if (passLength == false) {
//         console.log("Password must be between 6 and 10 characters");
//     } else if (lettersAndDigits == false) {
//         console.log("Password must consist only of letters and digits");
//     } else if (passDigits == false) {
//         console.log("Password must have at least 2 digits");
//     }

// }

// function checkLength(pass) {
//     if (pass.length >= 6 && pass.length <= 10) {
//         return true
//     }else{
//         return false
//     }
// }
// function checkLetters(pass) {
//     const pattern = /^[a-zA-Z0-9]+$/;
//     return pattern.test(pass)

// }
// function checkDigits(pass) {
//     let digitCount = 0;
//     for (let char of pass) {
//       if (/\d/.test(char)) {
//         digitCount++;
//         if (digitCount >= 2) {
//           return true;
//         }
//       }
//     }
//     return false;
//   }


// passwordValidator('logIn');
// passwordValidator('MyPass123');
// passwordValidator('Pa$s$s');