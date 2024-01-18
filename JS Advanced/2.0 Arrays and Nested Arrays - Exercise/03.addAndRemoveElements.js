function addNremove(commands) {
    let result = [];
    let n = 1;
    for (let i = 0; i <= commands.length; i++) {
        switch (commands[i]) {
            case "add":
                result.push(n);
                n++
                break;
            case "remove":
                result.pop(n);
                n++
                break;
        }

    }
    return result.length? result.join("\n") : "Empty"
}
console.log(addNremove(['add',
'add',
'add',
'add']
));

console.log(
    addNremove(['add', 
    'add', 
    'remove', 
    'add', 
    'add']));