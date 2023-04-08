'use strict';

const countriesContainer = document.querySelector('.countries');
const API_KEY = '285945386260582770503x94736';

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

const getPosition = function() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const renderError = function(message) {
  countriesContainer.insertAdjacentText('beforeend', message);
};


/*
* async function keep running in background during code execution
* after completed return promise.
* */
const whereAmI = async function(country) {
  /*
  * use await keyword for waiting of the result of promise
  * so execution will be stopped until the promise will fulfil
  * but stopping execution in the background won`t stop main thread
  * because function already executed in background
  *
  * main purpose - make code look like sync, but actually it is async
  * so async/await is a syntactic sugar over the consuming promises (then, catch)
  *
  * to catch errors in async/await functions we use try/catch blocks but this feature
  * were in JS very long time
  * */

  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  console.log(res);

  //same in promises
  /*fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(res => console.log(res));
  */
}

//whereAmI('ukraine');
console.log('FIRST'); // will execute first


const whereAmIOnAsyncAwait = async function() {
  //Get geolocation
  const position = await getPosition()
  const { latitude: lat, longitude: lng } = position.coords;

  //Reverse geocoding
  const geoRes = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=${API_KEY}`);
  const geoData = await geoRes.json();

  const country = geoData.country;

  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  const data = await res.json();
  console.log(data);
  renderCountry(data[0]);
}

//whereAmIOnAsyncAwait();

// Try catch

/*try {
  let y = 1;
  const x = 2;
  /!*In catch block we get access to errors that happening in try block and can handle them*!/
} catch (err) {
  alert(err.message);
}*/


const whereAmIOnAsyncAwaitWithTryCatch = async function() {
  try {
    //Get geolocation
    const position = await getPosition()
    const { latitude: lat, longitude: lng } = position.coords;

    //Reverse geocoding
    const geoRes = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=${API_KEY}`);

    if (!geoRes.ok) throw new Error(`To many requests!`);
    const geoData = await geoRes.json();

    const country = geoData.country;

    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);

    if (!res.ok) throw new Error(`No country found!`);
    const data = await res.json();
    renderCountry(data[0]);

    // return value become result of fulfilled promise that returns by async function
    // in async function return will always be fulfilled even if the error occurred
    return `You are in ${geoData.city}, ${geoData.country}.`;
  } catch (err) {
    console.error(err);
    renderError(err.message);

    // To reject promise we need rethrow the error
    throw err;
  } finally {
    countriesContainer.style.opacity = '1';
  }
}

console.log('1: Will get location');

/*Here we mixed async/await with then/catch approaches - bad practice*/

/*whereAmIOnAsyncAwaitWithTryCatch()
  .then(msg => {
  console.log(msg);
})
  /!*cant be executed without rethrowing the error because promise will be fulfilled in each way*!/
  .catch(err => console.error(`Promise was rejected!`))
  .finally(() => {
    console.log('2: Finished getting location');
  })
;*/

/*Better to use IIFY functions*/

(async function() {
  try {
    const msg = await whereAmIOnAsyncAwaitWithTryCatch();
    console.log(msg);
  } catch (err) {
    console.error(`Promise was rejected!`)
  } finally {
    console.log('2: Finished getting location');
  }
})();


/*Parallel promises*/

const getJSON = function(url, errorMessage = `Something went wrong!`) {
  return fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error(`${errorMessage} (${res.status})`);
      return res.json();
    });
};

const get3Countries = async function(...countries) {
  try {
    // next promise will wait previous
    /*const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);*/

    /*now all countries will loads in parallel
    but if even one of them rejects, all promise will reject
    * */
    /*const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);*/

    const promises = countries.map(country =>
    getJSON(`https://restcountries.com/v3.1/name/${country}`),
      'Couldn\'t get neighboring countries.');

    const data = await Promise.all(promises);
    const capitals = data.map(country => country[0].capital).flat();
    console.log(capitals);
  } catch (err) {
    console.log(err);
  }
}

get3Countries('poland', 'ukraine', 'germany');


/*Promise.race
- get an array of promises and return promise that settled as soon as
one of the promises are settled (completed).
* */

(async function() {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/ukraine`),
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/germany`)
  ]);
  console.log(res[0].name.common);
})();

const timeout = function(s) {
  return new Promise(function(_, reject) {
    setTimeout(function() {
      reject(new Error('request took too long!'))
    }, s * 1000);
  });
}

/*If timeout happens first, all promise will be rejected*/
Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/germany`),
  timeout(1)
]).then(res => {
  console.log(res[0]);
}).catch(err => {
    console.error(err);
  });

/*
* Promise.allSettled
* - from ES2020 return an array of all promises results, no matter is fulfilled
* or rejected
* */

Promise.allSettled([
  Promise.resolve('Sucess'),
  Promise.reject('Error'),
  Promise.resolve('Sucess')
]).then(res => {
  console.log(res);
})

/*
* Promise.any
* - from ES2021 return first fulfilled promise and ignore rejected promises
* if all promises rejected - throw error
* */

Promise.any([
  Promise.reject('Error'),
  Promise.resolve('Sucess'),
]).then(res => {
  console.log(res);
})


















