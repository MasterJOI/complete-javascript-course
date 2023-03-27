'use strict';

//Immediately invoked function expression
(function () {
  console.log('Cockls!');
})();

(() => console.log('Cockls!'))();


const secureBooking = function() {
  let passengerCount = 0;

  return function() {
    passengerCount++;
    console.log(passengerCount, 'passengers');
  }
}

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

let f;

const g = function() {
  let a = 23;
  f = function() {
    a *= 2;
    console.log(a);
  }
}

const h = function() {
  let b = 777;
  f = function() {
    b *= 2;
    console.log(b);
  }
}

g();
f();
h();
f();
console.dir(f);


// Example 2

const boardPassengers = function(n, wait) {
  const perGroup = n / 3;
  setTimeout(function(){
    console.log(`We are boarded with ${n} passengers`);
    console.log(`${perGroup}`);
  }, wait * 1000);
  console.log(`Will start in ${perGroup} seconds`);
}

boardPassengers(180, 3);


// challenge 2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.body.addEventListener('click', () => {
    header.style.color = 'blue';
  })
})();

