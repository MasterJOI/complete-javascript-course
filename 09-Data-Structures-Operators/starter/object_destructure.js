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
  orderDelivery: function(
    {
      time = '00:00',
      address = 'unknown',
      idx = 1,
      orderId = 0
    }) {
    console.log(time, address, idx, orderId);
  }
};

// get variables

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

const { menu = ['Default'], starterMenu: strarters = [] } = restaurant;
console.log(menu, strarters);

// mutating values

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// assign destructuring vars to object works only in parentheses - ()
({ a, b } = obj);
console.log(a, b);

//nested objects

const { sat: { o, c } } = openingHours;
console.log(o, c);

// destructing in function parameters
restaurant.orderDelivery({ time: '22:03', address: 'Cocksmit 22', idx: 22 });