
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

const ordersSet = new Set(['Pasta', 'Cockls', 'Cockls']);
console.log(ordersSet);
console.log(ordersSet.size);
console.log(ordersSet.has('Pasta'));

for (const order of ordersSet) {
  console.log(order);
}

ordersSet.add('Gargr');
console.log(ordersSet);
ordersSet.delete('Gargr');
console.log(ordersSet);
ordersSet.clear();
console.log(ordersSet);

// Example use case remove doubles from array
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
// get number of unique values
console.log(new Set(staff).size);


