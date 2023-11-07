function deckOfCards(array) {
  let listOfCards = array[0].split(", ").map((card) => card.trim());

  for (let i = 2; i < array.length; i++) {
    let command = array[i];
    let tokens = command.split(", ");
    let action = tokens[0];

    if (action === "Add") {
      let cardName = tokens[1];
      if (!listOfCards.includes(cardName)) {
        listOfCards.push(cardName);
        console.log("Card successfully added");
      } else {
        console.log("Card is already in the deck");
      }
    } else if (action === "Remove") {
      let cardName = tokens[1];
      if (listOfCards.includes(cardName)) {
        listOfCards = listOfCards.filter((card) => card !== cardName);
        console.log("Card successfully removed");
      } else {
        console.log("Card not found");
      }
    } else if (action === "Remove At") {
      let index = Number(tokens[1]);
      if (index >= 0 && index < listOfCards.length) {
        listOfCards.splice(index, 1);
        console.log("Card successfully removed");
      } else {
        console.log("Index out of range");
      }
    } else if (action === "Insert") {
      let index = Number(tokens[1]);
      let cardName = tokens[2];
      if (
        index >= 0 &&
        index < listOfCards.length &&
        !listOfCards.includes(cardName)
      ) {
        listOfCards.splice(index, 0, cardName);
        console.log("Card successfully added");
      } else if (listOfCards.includes(cardName)) {
        console.log("Card is already in the deck");
      } else {
        console.log("Index out of range");
      }
    }
  }

  console.log(listOfCards.join(", "));
}

deckOfCards([
  "Ace of Diamonds, Queen of Hearts, King of Clubs",
  "3",
  "Add King of Diamonds",
  "Insert, 2, Jack of Spades",
  "Remove, Ace of Diamonds",
]);
