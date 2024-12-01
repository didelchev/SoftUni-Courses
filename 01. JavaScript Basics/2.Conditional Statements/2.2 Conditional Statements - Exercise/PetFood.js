function petFood(input) {

    let dogFood = Number('2.50');
    let catFood = Number('4');
    let totalDogFood = dogFood * (input[0]);
    let totalCatFood = catFood * (input[1]);
    let finalSum = totalCatFood + totalDogFood;

    console.log(finalSum);
}

petFood(['5', '4'])