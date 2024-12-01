function guestTracker(array) {
    let guestList = [];
    for (let command of array) {
        let tokens = command.split(' ')
        let name = tokens[0];

        if (tokens.includes("not")) {
            if (guestList.includes(name)) {
                let index = guestList.indexOf(name)
                guestList.splice(index, 1)
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else {
            if (guestList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestList.push(name)
            }
        }


    }
    console.log(guestList.join('\n'));

}

guestTracker(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'])

guestTracker(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'])