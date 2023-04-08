'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// https://restcountries.com/v3.1/

// Alone eventListeners and callbacks not make code asynchronous


//still synchronous code
const arr = [1, 2, 3];
arr.map(a => a + 1);
// eventListener simply wait for click but not doing anything in the background
//btn.addEventListener('click', () => {});

/*AJAX - Asynchronous JS and XML - allows us to communicate with
remote web servers in an asynchronous way. We can request data from web servers
dynamically.

API - Application Programming Interface - piece of software that can be used by
another software that allow applications to talk with each other.

Online(Web) API - Apps running on server that receives requests for data and sends
back response.

CORS - Cross Origin Resource Sharing - without CORS we cant access public API from
our code
 */

/*
*
* */

// AJAX call ways

// 1.XMLHttpRequest (oldest way)

/*const getCountryData = function(country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function(e) {
    console.log(this);
    //console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `<article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} milions</p>
            <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
            <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
          </div>
        </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = '1';
  })
}

getCountryData('ukraine');
getCountryData('portugal');*/

// Sequence of AJAX calls

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
  countriesContainer.style.opacity = '1';
};
const getCountryDataAndNeighbour = function(country) {

  //AJAX call 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function() {
    const [data] = JSON.parse(this.responseText);
    // Render initial country
    renderCountry(data);

    //Get neighbour country
    const neighbours = data.borders;

    if (!neighbours) return;

    //AJAX call 2 - start of callback hell (sequences of nested callbacks)
    neighbours.forEach(neighbour => {
      const request2 = new XMLHttpRequest();
      request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
      request2.send();

      request2.addEventListener('load', function() {
        const [data] = JSON.parse(this.responseText);
        renderCountry(data, 'neighbour');
      });
    })
  });
};

getCountryDataAndNeighbour('ukraine');

