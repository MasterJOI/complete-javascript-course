'use strict';

console.log('Test start!');

setTimeout(() => console.log('0 sec timer'), 0);

Promise.resolve('Resolved promise 1').then(res =>
  console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  // during promise execution another code from callback queue cant be executed
  // so setTimeout() guarantee that code will be executed not earlier than timer, but
  // it can be executed in any time later
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
})

console.log('Test end!');

/*
Test start!
Test end!
Resolved promise 1
0 sec timer

Firstly will execute synchronous code
Next callback from microtask queue
And than callback from callback queue
* */
