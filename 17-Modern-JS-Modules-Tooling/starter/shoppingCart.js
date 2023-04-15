// exporting module

//Blocking code

// importing module will wait until exporting module complete code in await
console.log('Start fetching users');
/*const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
const data = await res.json();*/
console.log('Finish fetching users');

console.log('Exported!');
const shippingCost = 10;
export const card = [];

export const addToCard = function(product, quantity) {
  card.push({product, quantity});
  console.log(`${quantity} ${product} added to cart`);
}

const totalPrise = 237;
const totalQuantity = 23;

export { totalPrise as prise, totalQuantity as tq };


// we can use only one default export per module
export default function(product, quantity) {
  card.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}

