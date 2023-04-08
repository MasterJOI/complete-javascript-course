'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const API_KEY = '285945386260582770503x94736';
/*
* We can create Promises from constructor that accept
* as argument function called 'executor', as soon as constructor runs it will
* automatically executed this function
* this function get two arguments (functions resolve  - if function fulfilled
* and reject - if broke)
*  and need to produce some value in future
* */

const lotteryPromise = new Promise(function(resolve, reject) {
  console.log('Lottery draw is happening!');
  // we use Promises to encapsulate asynchronous behavior, so we use setTimeout
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You win!'); // value that passed in resolve() will be output of fulfilled promise
    } else {
      reject(new Error('You loser!')); // pass an error message witch use in catch handler
    }
  }, 2000);
});

// We usually consume promises than build own (may only for wrap old callback functions)

lotteryPromise
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promisify = wrap async callbacks into function that return a promise

// promisify for setTimeout()

const wait = function(seconds) {
  // no need reject because it`s impossible to fail timer
  return new Promise(function(resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(3)
  .then(() => {
    console.log('timer is end!');
    return wait(1);
  })
  .then(() => console.log('one more time!'));

//create immediately fulfilled/rejected promises
Promise.resolve('resolved!').then((res) => console.log(res));
Promise.reject('rejected!').catch((res) => console.log(res));


/*Promisify geolocation api*/

/*const getPosition = function() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(position => {
      resolve(position);
    }, err => {
      reject(err);
    });
  });
};*/

const renderCountry = function(data, className = '') {
  const html = `<article class='country ${className}'>
          <img class='country__img' src='${data.flags.png}' />
          <div class='country__data'>
            <h3 class='country__name'>${data.name.common}</h3>
            <h4 class='country__region'>${data.region}</h4>
            <p class='country__row'><span>👫</span>${(+data.population / 1000000).toFixed(1)} milions</p>
            <p class='country__row'><span>🗣️</span>${Object.values(data.languages)[0]}</p>
            <p class='country__row'><span>💰</span>${Object.values(data.currencies)[0].name}</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const fetchJSON = function(url, errorMessage) {
  return fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(errorMessage);
      return res.json();
    });
}

const getPosition = function() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

/*getPosition()
  .then((res) => {
    console.log(res);
  })
  .catch(err => {
    console.error(err);
  });*/

const whereAmI = function() {
  getPosition()
    .then(pos => {
        const { latitude: lat, longitude: lng } = pos.coords;
        return fetchJSON(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=${API_KEY}`,
          'Cant fetch data! Try again later.');
      })
    .then(data => {
      if (!data.country || !data.city) throw new Error('Invalid coordinates!');
      console.log(`You are in ${data.country}, ${data.city}`);
      return fetchJSON(`https://restcountries.com/v3.1/name/${data.country}`,
        'Country not found!');
    })
    .then(country => {
      renderCountry(country[0]);
    })
    .catch(err => {
      console.error(err);
    })
    .finally(() => {
      countriesContainer.style.opacity = '1';
    });
};

btn.addEventListener('click', whereAmI);
