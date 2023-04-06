'use strict';

// challenge 1
const Car = function(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function() {
  this.speed += 10;
  console.log(`New speed: ${this.speed}`);
}
Car.prototype.brake = function() {
  this.speed -= 5;
  console.log(`New speed: ${this.speed}`);
}


const bmv = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
bmv.accelerate();
bmv.brake();

mercedes.accelerate();
mercedes.brake();

// challenge 2

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`New speed: ${this.speed}`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`New speed: ${this.speed}`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
ford.accelerate();
ford.brake();

console.log(ford.speedUS);
ford.speedUS = ford.speed;
console.log(ford.speed);

// challenge 3

const EV = function(make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo) {
  this.charge = chargeTo;
}

EV.prototype.accelerate = function() {
  this.speed += 20;
  this.charge -= 1;
  console.log(`Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`);
}

const tesla = new EV('Tesla', 120, 23);

// js will use first appearing method in prototype chain
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(30);
console.log(tesla.charge);
console.log(tesla);

// challenge 4

class EVCl extends CarCl {

  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(`Tesla going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
rivian
  .chargeBattery(100)
  .accelerate()
  .accelerate()
  .accelerate()
  .brake();

console.log(rivian.speedUS);
