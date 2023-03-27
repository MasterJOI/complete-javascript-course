const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// [] as variable name which we can make computations
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22
  },
  [`${weekdays[3 + 1]}`]: {
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

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Cockls');
rest.set(2, 'Dodo Pizza');
rest.set('open', 11);
rest.set('closed', 22);
rest.set(true, 'We are open');
rest.set(false, 'We are closed');
console.log(rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('location', 'Via Angelo Tavanti 23, Firenze, Italy'));

console.log(rest.get('name'));
console.log(rest.get(1));

const time = new Date().getHours();
console.log(rest.get(time >= rest.get('open') && time <= rest.get('closed')));

console.log(rest.has('location'));
console.log(rest.size);

rest.clear();
console.log(rest);

// array in map as key
rest.set([1, 2], 'Test');
console.log(rest.get([1, 2])); // return undefined because its 2 different arrays in different memory spaces.

// now it works
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

// html elements in map

rest.set(document.querySelector('h1'), 'Header');
console.log(rest);


const question = new Map([
    ['question', 'Whats up?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'You are right!'],
    [false, 'You are coclks!']
  ]
);

console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Map iteration

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer #${key}: ${value}`);
  }
}

const answer = +prompt('Coclk?');
console.log(question.get(question.get('correct') === answer));

// convert Map to array
//console.log([...question]);
console.log([...question.keys()]);


/*
* Sources of data:
* 1. From the program itself (state)
* 2. From UI (written by user in DOM)
* 3. From WEB API
*
* If data is simple list: Use Arrays or Sets
* If data have keys and value pairs: use Objects and Maps
*
* Arrays:
* 1. If need ordered list with duplicates
* 2. Need to manipulate data
*
* Sets:
* 1. Work with unique values
* 2. WWhen need high performance
* 3. To remove duplicates from array
*
* Objects:
* 1. Traditional way to store key/value data
* 2. Easier to access values with . or []
*
* Objects use:
* When need to include functions in objects to use 'this' keyword
* When working with JSON
*
* Maps:
* 1. Better performance
* 2. Keys can have any data type
* 3. Easy to iterate
* 4. Easy to compute size
*
* Maps use:
* When simply need to map key to values
* When you need keys that are not strings
* */
