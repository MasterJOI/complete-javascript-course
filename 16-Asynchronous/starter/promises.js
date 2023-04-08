'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
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

// Second way of AJAX call

// Promise - object that used as a placeholder of the future result of  an async operation

/*
* Promises advantages over event callbacks
* 1. Not rely on events because events can be unpredictable
* 2. Instead of nested callbacks we can chain promises or a sequences escaping callback hell
*
* Promise algorithm
* 1. Set to 'pending' while task is processed in background
* 2. Set to 'settled' after async task has finished with state of
* 'fulfilled' - data returns as expected or 'rejected' - an error happened
* 3. After setting state it cant be changed anymore
*
* Firstly promise are built by us or another api (like fetch()) than we can consume promise
* to get result value
* */

/*const getCountryData = function(country) {
  //Immediately return pending promise
  // in then() method we pass the callback which executed if promise return fulfilled
  const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function(res) {
      console.log(res);
      // to read data from response body we need to call json() method
      return res.json();
      // but json() also return promise, so we need to write another then()
    }).then(function(data) {
      console.log(data);
      renderCountry(data[0]);
    });
};
const getCountryData = function(country) {
 fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(
      (res) => {
        console.log(res);
        if (!res.ok)
          // create our own error to reject promise with suitable error message
          throw new Error(`Country not found (${res.status})!`);
        return res.json();
      },
      //err => alert(err)
      // then accept second argument - callback which called is an error happened
      // but it`s very annoying to place error handlers in all methods so don`t do thaT
      )
    .then(data => renderCountry(data[0]))
   // we can handle all errors that can occurred in chain in catch method
.catch(err => {
  renderError(`Can't fetch the country! ${err.message}`);
})
  // finally will always be called either if promise return fulfilled or rejected
  .finally(() => {
    countriesContainer.style.opacity = '1';
  });
};

const getCountryDataAndNeighbour = function(country) {
  //Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(
      (res) => {
        if (!res.ok)
          // create our own error to reject promise with suitable error message
          throw new Error(`Country not found (${res.status})!`);
        return res.json();
      })
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
//Country 1 neighbour
// then method always return a new promise to chain them
// !ALWAYS RETURN NEW PROMISE INSTEAD OF CREATE A NEW CHAIN INSIDE - RETURN TO CALLBACK HELL
return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
})
.then((res) => {
  if (!res.ok)
    // create our own error to reject promise with suitable error message
    throw new Error(`Country not found (${res.status})!`);
  return res.json();
})
  .then(data => {
    renderCountry(data[0], 'neighbour');
  })
  .catch(err => {
    console.error(err);
    renderError(`Can't fetch the country! ${err.message}`);
  })
  // finally will always be called either if promise return fulfilled or rejected
  .finally(() => {
    countriesContainer.style.opacity = '1';
  });
};
*/

//with refactoring

const getJSON = function(url, errorMessage = `Something went wrong!`) {
  return fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error(`${errorMessage} (${res.status})`);
      return res.json();
    });
};

const getCountryData = function(country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, `Country not found`)
    .then(data => renderCountry(data[0]))
    .catch(err => {
      renderError(`Can't fetch the country! ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = '1';
    });
};

const getCountryDataAndNeighbour = function(country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, `Country not found`)
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error('No neighbour found!')
      return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Neighbour country not found');
    })
    .then(data => {
      renderCountry(data[0], 'neighbour');
    })
    .catch(err => {
      console.error(err);
      renderError(`Can't fetch the country! ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = '1';
    });
};

const renderError = function(message) {
  countriesContainer.insertAdjacentText('beforeend', message);
};

btn.addEventListener('click', () => {
  //getCountryData('ukrainer');
  getCountryDataAndNeighbour('ukraine');
});


