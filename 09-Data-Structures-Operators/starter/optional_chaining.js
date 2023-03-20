
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
  openingHours,
  order(num) {
    return 'coclks!' + num;
  }
};

console.log(restaurant);

console.log(restaurant.openingHours?.mon?.open);


const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`In ${day} we open from ${open}`);
}


//on methods
console.log(restaurant.order?.(1));
console.log(restaurant.orderCockls?.(1));

//in arrays

const user = [
  {
    name: 'user exist'
  }
];

console.log(user[0]?.name ?? 'no user!');
