const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444
};

let accounts = [account1, account2, account3, account4];

let arr = ['a', 'b', 'c', 'd', 'e'];

//slice (return new array but old array remain the same)

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(1, -1));
console.log(arr.slice()); // create new array like [...arr]

//splice (return new array and remove these elements from old array)
console.log(arr.splice(2), arr);
console.log(arr.splice(-1), arr);

//reverse (also mutate array)
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse(), arr2);

//concat
const letters = arr.concat(arr2);
console.log(letters);

//join
console.log(letters.join('-'));

// at

const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0)); // the same

//get last element
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr.at(-1)); //better way
console.log('jonas'.at(-1));

//forEach loop (not work break or continue)

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach(movement => movement > 0
  ? console.log(`You deposited ${movement}`)
  : console.log(`You withdraw ${Math.abs(movement)}`)
);

movements.forEach((movement, i, arr) => {
    movement > 0
      ? console.log(`You deposited ${movement}`)
      : console.log(`You withdraw ${Math.abs(movement)}`);
    console.log('in index', i);
    console.log('full array', arr);
  }
);

// forEach withs Sets and Maps

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling']
]);

currencies.forEach(function(value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(currencies.keys());

//key value unwanted because Sets don`t have indexes
currenciesUnique.forEach(function(value, _, map) {
  console.log(`${_}: ${value}`);
});

//map

const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurMovements = movements1.map(movement => (movement * 1.1).toFixed(2));
console.log(eurMovements);

const usdMovements = movements1.map((movement, i, arr) => {
  return (movement * 1.1).toFixed(2) + ' in index-' + i;
});
console.log(usdMovements);

// filter

const deposits = movements1.filter(movement => movement > 0);
console.log(deposits);

// reduce

const balance = movements1.reduce((acc, movement, i, arr) => {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + movement;
}, 0); // 0 - initial value of accumulator
console.log(balance);

// max value with reduce

const maxValue = movements1.reduce((acc, movement, i) =>
  movement > acc ? movement : acc, movements1[0]);

console.log(maxValue);

const depositsInUSD = movements1
  .filter(mov => mov > 0)
  .map(mov => mov * 0.9)
  .reduce((acc, mov) => acc + mov, 0);

console.log(depositsInUSD);

// find (return first satisfied element of the array)

console.log(movements1.find(mov => mov < 0));

const accountJonas = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  username: 'js'
};

accountss = [accountJonas];

const accountd = accountss.find(acc => acc.username === 'js');
console.log(accountd);

// some (is any of elements satisfy the condition)

console.log(movements1);
console.log(movements1.includes(-130));

console.log(movements1.some(mov => mov > 0));

// every (is all the elements satisfy the condition)

console.log(movements1.every(mov => mov > 0));


// flat (transform nested array (only 1 level deep) to simple array)

const arr4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  10
];

const arr4Deep = [
  [1, 2, [3, 4]],
  [5, 6, [7, 8, 9]],
  10
];
console.log(arr4.flat());
console.log(arr4Deep.flat());

// 2 level deep
console.log(arr4Deep.flat(2));

// sorting arrays

const owners = ['Jonas', 'Zack', 'Adam', 'Marta'];
//also mutate array, sort initially works only for strings
console.log(owners.sort());

// console.log(movements1.sort()); not work as expected

// to use with numbers need comparator
// if return <0 -> A,B (keep order)
// if >0 than B,A (switch order)


//Ascending
movements1.sort((a, b) => {
  if (a > b) return 1; else return -1;
});

console.log(movements1);

//Descending
movements1.sort((a, b) => {
  if (a > b) return -1; else return 1;
});

console.log(movements1);

// simple way

movements1.sort((a, b) => a - b);

console.log(movements1);

movements1.sort((a, b) => b - a);

console.log(movements1);

// programmatically create and fill arrays

// create empty array
const x = new Array(7);
console.log(x);

// for this array we can call only one method - fill
//x.fill(5);
x.fill(1, 3); //from 3 element we will fill
console.log(x);

movements1.fill(32, 1, 6); // can refill elements
console.log(movements1);

// Array.from (same as new Array(7); fill(1)) but simply
const newArr = Array.from({ length: 7 }, () => 1);
console.log(newArr);

// callback function same as map
const z = Array.from({ length: 7 }, (cur, i) => i + 1);
console.log(z);


//practice

// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(bankDepositSum);

// 2.

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => mov > 1000 ? ++acc : acc, 0);
console.log(numDeposits1000);

// 3.
const { depos, witrls } = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => {
    /*mov > 0
      ? acc.depos += mov
      : acc.witrls += mov;*/
    acc[mov > 0 ? 'depos' : 'witrls'] += mov; // cleaner solution
    return acc;
  }, { depos: 0, witrls: 0 });
console.log(depos, witrls);

// 4.
// function for titlelize strings

const toTitle = function(title) {
  const exceptions = ['a', 'an', 'the', 'but'];
  return title
    .toLowerCase()
    .split(' ')
    .map(word =>
      !exceptions.includes(word)
        ? word[0].toUpperCase() + word.slice(1)
        : word)
    .join(' ');
};

console.log(toTitle('this is a nice title LONG but Cockls'));
