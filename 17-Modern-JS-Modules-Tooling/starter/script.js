'use strict';

/*Module - reusable piece of coed that encapsulates implementation details
* (in most cases standalone file, but can contain imports and exports)
* Advantages:
* 1. Compose software - compose modules together to build complex apps
* 2. Isolate components - can develop features in isolation without thinking
* about the entire codebase
* 3. Abstract code - implement low-level code in modules and use this logic
* through public API in another modules
* 4. Organized code - more organized codebase
* 5. Reuse code across multiple projects.
*
* In JS modules appears in ES6 - each file is one module
* Difference of module and script file
* Module:
* 1. Top-level variables scope inside module to get variables
* outside - use exports.
* 2. Always executed in strict mode
* 3. Top-level this point to `undefined`
* 4. Work exports and imports (only in the top-level), because
* script which imports module need to know that code before execution
* imports are always hoisted to top of the file
* 5. HTML links point: <script type="module"></script>
* 6. Modules always downloading in asynchronous way
* (to work bundling and tree shaking)
* JS script:
* 1. Top-level variables are in global scope
* 2. Executed in `sloppy` mode
* 3. Top-level this point to window object
* 4. No exports and imports
* 5. HTML links point: <script></script>
* 6. Downloading in synchronous way by default
*
* Import set live connection with export value (just a pointer to this
* value, so it not create a copy of export value)
* if export value changes than import also will change
*
* Module execution algorithm:
* 1. Parsing script that imports module
* 2. Async downloading all modules one after another
* 3. After each module downloads, linking export and import
* 4. Execution of module (also in parallel)
* 5. Execution of main script.
* */

// importing module

import './shoppingCart.js';
// import { addToCard, prise, tq } from './shoppingCart.js';
import * as ShoppingCart from './shoppingCart.js';
import add, { card } from './shoppingCart.js';
import cloneDeep from 'lodash-es/cloneDeep.js';
console.log('Imported!');

ShoppingCart.addToCard('apple', 10);
console.log(ShoppingCart.prise);
console.log(ShoppingCart.tq);

// we can import default values with any name that we want
add('bread', 2);
add('pizza', 3);
add('cocks', 555);

// prove that if we change export variable, it changes in all imports
console.log(ShoppingCart.card);

// in ES2022 release new feature - module await outside async function
// but this `await` will block execution of module during loading data
/*const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
const data = await res.json();
console.log(data);*/

// with async function main thread won`t be blocked
console.log('Start fetching');
const getLastPost = async function() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  return {title: data.at(-1).title, text: data.at(-1).body};
}

const lastPost = getLastPost();
console.log('Code after fetching');

// not very clean
/*lastPost.then(data => {
  console.log(data);
});*/

//instead we can use module await that wait until code finishes
/*const post = await getLastPost();
console.log(post);*/

/*
* A module pattern (was exists before ES6 modules)-
* create IIFE that create new scope
* and return object with values that we want to be
* accessed outside the function (like exports in module)
* It works because closures - all function values stored in closure
* of object, that return function, and we can access to all of that
* variables
* */

const ShoppingCard2 = (function() {
  const cart = [];
  const shippingCost = 10;
  const totalPrise = 234;
  const totalQuantity = 23;

  const addToCard = function(product, quantity) {
    card.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function(product, quantity) {
    card.push({product, quantity});
    console.log(`${quantity} ${product} orderedfrom cocksl`);
  };

  return {
    addToCard,
    cart,
    totalPrise,
    totalQuantity
  }
})();

ShoppingCard2.addToCard('appless', 2);
ShoppingCard2.addToCard('pizzas', 4);

const state = {
  cart: [
    { product: 'bread', quantity: 5},
    { product: 'pizza', quantity: 1},
  ],
  user: {loggedIn: true}
}

const stateClone = Object.assign({}, state);
const stateLodashClone = cloneDeep(state);
console.log(stateClone);
state.user.loggedIn = false;
// not a deep copy because stateClone also changed
console.log(stateClone);
// deep copy (loggedIn still true)
console.log(stateLodashClone);

// hot module replacement - not drop current state of program,
// but replace only changed part and execute it
/*if (module.hot) {
  module.hot.accept();
}*/

class Person {
  #greeting = 'hey'
  constructor(name) {
    this.name = name;
    console.log(this.#greeting + ' Jonas');
  }
}

const person = new Person();
console.log(person);

console.log(card.find(el => el.quantity >= 2));

import 'core-js/stable';
//import 'core-js/stable/array/find';
//polyfiling async functions
import 'regenerator-runtime/runtime.js';
