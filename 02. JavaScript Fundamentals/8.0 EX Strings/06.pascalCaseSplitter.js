function splitPascalCase(input) {
  const words = input.split(/(?=[A-Z])/).join(", ");
  return words.charAt(0).toUpperCase() + words.slice(1); // Capitalize the first word
}

splitPascalCase("SplitMeIfYouCanHaHaYouCantOrYouCan");
