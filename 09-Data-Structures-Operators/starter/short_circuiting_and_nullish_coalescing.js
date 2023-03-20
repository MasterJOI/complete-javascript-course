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

// || (OR) use any data type and return ANY data type - short-circuiting
console.log(3 || 'Coclks');
console.log(0 || undefined || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests || 10;
console.log(guests1);

// Протилежно ||, якщо 1 операнд = false, то автоматично все твердження буде false,
// і повернеться перше значення
console.log(0 && 'Jonas');

//nullish coalescing operator
// Return true if not nullish values: null, undefined (NOT 0 or '').
console.log(restaurant.numGuests ?? 10);