// Write a program, which prints the language, that a given country speaks. You can receive only the following
// combinations:
// English is spoken in England and USA;
// Spanish is spoken in Spain, Argentina, and Mexico;
// or the others, we should print "unknown";

function foreignLang(countryName) {
  if (countryName === "USA" || countryName === "England") {
    console.log("English");
  } else if (
    countryName === "Spain" ||
    countryName === "Argentina" ||
    countryName === "Mexico"
  ) {
    console.log("Spanish");
  } else {
    console.log("unknown");
  }
}

foreignLang("Germany");
