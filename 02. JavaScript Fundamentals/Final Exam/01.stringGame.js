function stringOperations(input) {
  let string = input.shift();

  for (let line of input) {
    if (line === "Done") {
      break;
    }

    let [command, ...args] = line.split(" ");

    if (command === "Change") {
      let [char, replacement] = args;
      string = string.split(char).join(replacement);
      console.log(string);
    } else if (command === "Includes") {
      let substring = args.join(" ");
      let result = string.includes(substring).toString();
      console.log(result.charAt(0).toUpperCase() + result.slice(1));
    } else if (command === "End") {
      let substring = args.join(" ");
      let result = string.endsWith(substring).toString();
      console.log(result.charAt(0).toUpperCase() + result.slice(1));
    } else if (command === "Uppercase") {
      string = string.toUpperCase();
      console.log(string);
    } else if (command === "FindIndex") {
      let char = args[0];
      console.log(string.indexOf(char));
    } else if (command === "Cut") {
      let startIndex = parseInt(args[0]);
      let count = parseInt(args[1]);
      let cut = string.substring(startIndex, startIndex + count);
      console.log(cut);
    }
  }
}
