class Vehicle {
  constructor(type, model, parts, fuel) {
    this.type = type;
    this.model = model;
    this.parts = parts;
    this.parts.quality = this.parts.engine * this.parts.power;
    this.fuel = fuel;
  }
  drive(fuelLoos) {
    this.fuel -= fuelLoos;
  }
}

let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle("a", "b", parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);

function ench() {
  let abysscrystal = 10 * 58;
  let infinitedust = 12 * 4.7;
  let greatercosmicessense = 60;
  let dream = 4 * 12;
  let sum = abysscrystal + infinitedust + greatercosmicessense + dream;
  console.log(sum);
}
