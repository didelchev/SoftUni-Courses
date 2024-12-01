function login(input) {
  let username = input[0];
  let correctPassword = username.split("").reverse().join("");
  let attempts = 1;

  while (attempts <= 4) {
    let password = input[attempts + 1];
    if (password === correctPassword) {
      console.log(`User ${username} logged in.`);
      break;
    } else if (attempts === 4) {
      console.log(`User ${username} blocked!`);
      break;
    } else {
      console.log("Incorrect password. Try again.");
      attempts++;
    }
  }
}

// login(["Acer", "login", "go", "let me in", "recA"]);
// login(["momo", "omom"]);
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
