// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22
    },
    fri: {
      open: 11,
      close: 23
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24
    }
  },
};

const rest1 = {
  name: 'Capri',
  guestsNum: 20
}

const rest2 = {
  name: 'Royal',
  owner: 'Giovanni Giorgio'
}

//if restaurant has guestsNum than nothing or 10
//rest2.guestsNum = rest1.guestsNum || 10;
//rest2.guestsNum = rest2.guestsNum || 10;

//better way but with (OR) - assign 10 if falsy value (0, '', null, undefined)
//rest1.guestsNum ||= 10;
//rest2.guestsNum ||= 10;

//better way with ?? (check only nullish value (null, undefined))
rest1.guestsNum ??= 10;
rest2.guestsNum ??= 10;

console.log(rest1);
console.log(rest2);

rest1.owner &&= 'anonymous';
rest2.owner &&= 'anonymous';

console.log(rest1);
console.log(rest2);
