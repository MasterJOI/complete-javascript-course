'use strict';

// default parameter
const createObj = function(num = 5, price = num * 100) {
  const book = {
    num,
    price
  }
  console.log(book);
}

createObj();


const flight = 'LM334';
const jonas = {
  name: 'Jonas',
  passport: '1234'
}

const checkIn = function(flightNum, passenger) {
  flightNum = 'LH000';
  passenger.name = 'Mr. Cockls' + passenger.name;
  if (passenger.passport === '1234') {
    alert('Welcome on board')
  } else {
    alert('Fuck you');
  }
}

const newPassport = function(person) {
  person.passport = Math.trunc(Math.random() * 1000);
}

newPassport(jonas);
//checkIn(flight, jonas);

console.log(flight);
console.log(jonas);

// First-class functions - functions are simply values (type of obj)
// Higher order functions - receives another function as parameter (addEventListener) or return a new function


const oneWord = function(str) {
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}

//Higher order function
const transformer = function(str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
}

transformer('Cockls is the worst!', upperFirstWord);
transformer('Cockls is the worst!', oneWord);

const high5 = function() {
  console.log('✅');
}

document.body.addEventListener('click', high5);

const greet = function(greeting) {
  return function(name) {
    console.log(greeting, name);
  }
}

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Kyryll');


const bye = byeMsg => name => console.log(byeMsg, name);

bye('Bye')('Kyryll');

const luftAirlines = {
  airlineName: 'Cockls',
  code: 'Lf',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} seat at ${flightNum} seat in flight ${this.airlineName}`);
    this.bookings.push({flightNum: `${this.code}-${flightNum}`, name});
  }
}

luftAirlines.book(234, 'Kyryll');
luftAirlines.book(34, 'Smith');
console.log(luftAirlines.bookings);

const euroWings = {
  airlineName: 'EuroCockls',
  code: 'EC',
  bookings: [],

}

// call method, accept point from which parent use this keyword
const book = luftAirlines.book;

// book(23, 'cxvxcv') - not work
book.call(euroWings, 23, 'Cockls');
book.call(luftAirlines, 2323, 'Merry');
console.log(euroWings.bookings, luftAirlines.bookings);

// apply method, same as call but papck all parameters in array (UNUSED IN MODERN JS)
const flightData = [456, 'George Cooper'];
book.apply(euroWings, flightData);
console.log(euroWings.bookings);

// in modern way we use spread operator
book.call(euroWings, ...flightData);
console.log(euroWings.bookings);

// bind method, also allowed set this keyword manually, but not call this function

const bookEW = book.bind(euroWings); // not call but return new function with this keyword
bookEW(2345, 'Marooni');
console.log(euroWings.bookings);

// we can set multiple binding parameters
// partial application pattern (already apply some arguments)
const bookLU23 = book.bind(luftAirlines, 23);
bookLU23('Jonas');
console.log(luftAirlines.bookings);

//With event listeners
luftAirlines.planes = 300;
luftAirlines.buyPlane = function() {
  this.planes++;
  console.log(this);
  console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', luftAirlines.buyPlane.bind(luftAirlines));

// Partial application example

const addTax = (rate, value) => value + value * rate;

console.log(addTax(10, 200));

// add define new function with default param, preset params need to be in the beginning
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

// in arrow functions

const addTaxRate = function(rate) {
  return function(value) {
    return value + value * rate;
  }
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

