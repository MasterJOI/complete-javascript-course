'use strict';

// destructuring - unpack values from object to value


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

  createOrder: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

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
  }
};

const arr = [1, 2, 3];
const a = arr[0];

//destructuring, це не масив а набір окремих змінних
const [x, y, z] = arr;

console.log(x, y, z);

const [first, , third] = restaurant.categories;
console.log(first, third);

let [main, , secondary] = restaurant.categories;

/*
const temp = main;
main = secondary;
secondary = temp;*/

// how to switch two values with destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

let a1 = 20;
let b1 = 25;

console.log(a1, b1);
[a1, b1] = [b1, a1];
console.log(a1, b1);

// destructuring array as a return value to variables
const [starterDish, mainDish] = restaurant.createOrder(0, 2);
console.log(starterDish, mainDish);

//nested destructuring
const nested = [
  [5, 10],
  [15, 20]
];

const [[one, two], j] = nested;
console.log(one, two, j);

// Default values

const [f = 1, g = 1, h = 1] = [9, 10];
console.log(f, g, h);