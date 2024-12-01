function bossRush(arr) {
  let n = Number(arr.shift());

  let pattern = /\|(?<boss>[A-Z]+)\|:#(?<title>[A-Za-z]+\s[A-Za-z]+)#/;

  for (let i = 0; i < n; i++) {
    let line = arr.shift();

    let match = line.match(pattern);

    if (match !== null) {
      let { boss, title } = match.groups;

      let strength = boss.length;
      let armor = title.length;

      console.log(`${boss}, The ${title}`);
      console.log(`>> Strength: ${strength}`);
      console.log(`>> Armor: ${armor}`);
    } else {
      console.log("Access denied!");
    }
  }
}
