function convertToJSON(name, lastName, hairColor) {
  let obj = { name: name, lastName, hairColor };
  let converted = JSON.stringify(obj);
  console.log(converted);
}

convertToJSON("George", "Jones", "Brown");
