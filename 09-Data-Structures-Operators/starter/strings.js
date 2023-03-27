const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// lesson 1

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.lastIndexOf('Portugal'));

console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function(seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  return s === 'B' || s === 'E';
}

console.log(checkMiddleSeat('11B'));
console.log(checkMiddleSeat('23C'));
console.log(checkMiddleSeat('1E'));

// lesson 2

console.log(airline.toUpperCase());
console.log(airline.toLocaleLowerCase());

const passenger = 'jONas';
const passengerLower = passenger.toLowerCase();
console.log(passengerLower[0].toUpperCase() + passengerLower.slice(1));

// comparing email
const email = 'hello@gmail.com';
const loginEmail = ' Hello@gmAil.com \n';

console.log(loginEmail.toLowerCase().trim());

// replacing
const priceUA = '288,97₴';
const priceGB = priceUA.replace('₴', '₤');
console.log(priceGB);

const cock = 'Coclks! Coclks!'
console.log(cock.replaceAll('Coclks!', 'Cockls!'));
console.log(cock.replace(/Coclks!/g, 'Cockls!'));

const planeNeo = 'A320neo';
console.log(planeNeo.includes('A32'));
console.log(planeNeo.startsWith('cockls'));
console.log(planeNeo.endsWith('eo'));

// lesson 3

console.log('Fuck you Jonas!'.split(' '));
const cockls = ['Mr.', 'Cockls', 'Bedlington'].join(' ');
console.log(cockls);

const capitalizeName = (givenNames) => {
  const names = givenNames.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
}

capitalizeName('jessi pinkman walter white');

// Padding

const message = 'Go to page 223';
// 25 - кінцева довжина рядка
console.log(message.padStart(25, '+').padEnd(35, '+'));

const maskCreditCard = function(number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard('1234434554346456'));

const mes2 = 'Cockls... \n';
console.log(mes2.repeat(2));

const planesInLine = function(n) {
  console.log(`There are ${n} planes in line...` + '✈️'.repeat(n));
}

planesInLine(4);

