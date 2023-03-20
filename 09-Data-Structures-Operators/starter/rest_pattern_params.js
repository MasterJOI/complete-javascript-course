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
  orderPasta: function(ing1, ing2, ing3) {
    console.log('Coclks:', ing1, ing2, ing3);
  },
  orderPizza: function(mainIng, ...otherIngs) {
    console.log('Coclks:', mainIng, otherIngs);
  }
};

// SPREAD - get values from array
// REST - pack values into array

//SPREAD because on the right side of "=" sign
const arr = [1, 2, ...[3, 4]];

//REST because on the left side of "=" sign
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [ , , ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(otherFood);

//with objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//functions
const add = function(...values) {
  let sum = 0;
  values.forEach(value => sum += value);
  return sum;
}
const values = [1,2,3,4,5];
console.log(add(...values));

restaurant.orderPizza('Coclks', [1,2,3,4,5]);