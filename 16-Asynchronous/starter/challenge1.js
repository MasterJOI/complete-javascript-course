'use strict';
const API_KEY = '285945386260582770503x94736';
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
const fetchJSON = function(url, errorMessage) {
  return fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(errorMessage);
      return res.json();
    });
}
const whereAmI = function(lat, long) {
  fetchJSON(`https://geocode.xyz/${lat},${long}?geoit=json&auth=${API_KEY}`,
    'Cant fetch data! Try again later.')
    .then(data => {
      if(!data.country || !data.city) throw new Error('Invalid coordinates!')
      console.log(`You are in ${data.country}, ${data.city}`);
      return fetchJSON(`https://restcountries.com/v3.1/name/${data.country}`,
        'Country not found!')
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
}

btn.addEventListener('click', function () {
  whereAmI(52.508, 13.381);
  setTimeout(() => whereAmI(19.037, 72.873), 1000);
  setTimeout(() => whereAmI( -33.933, 18.474), 2000);
});
