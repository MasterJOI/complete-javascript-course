
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

// property names
const props = Object.keys(openingHours);
console.log(props);
let openStr = '';
for (const day of Object.keys(restaurant.openingHours)) {

  openStr += `${day},`;
}
console.log(openStr);

// property values

const values = Object.values(openingHours);
console.log(values);

// property entries

const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open ${open} and close ${close}`);
}
