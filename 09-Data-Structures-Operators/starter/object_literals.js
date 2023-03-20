
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// [] as variable name which we can make computations
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22
  },
  [`${weekdays[3+1]}`]: {
    open: 11,
    close: 23
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24
  }
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours, // if obj name the same then write only once
  /*order: function() {
    console.log('Coclks!');
  }*/
  //new syntax
  order() {
    console.log('Coclks!');
  }
};

console.log(restaurant);


