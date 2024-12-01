class Cat {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  meow() {
    console.log(`${this.name}, age ${this.age} says Meow`);
  }
}
let cat = new Cat("Tom", 7);
console.log(cat);
