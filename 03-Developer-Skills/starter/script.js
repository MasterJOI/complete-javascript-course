// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temps1 = [3, -2, -34, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temps2 = [3, -11, -34, -1, 'error', 9, 13, 22, 15, 1, 9, 5];
const calcTmpAmpl = function(temps1, temps2) {
  const allTemps = temps1.concat(temps2);
  const validTemps = allTemps.filter(temp => typeof(temp) === 'number');
  const maxTemp = Math.max(...validTemps);
  const minTemp = Math.min(...validTemps);
  return Math.abs(maxTemp) - Math.abs(minTemp);
}

console.log(calcTmpAmpl(temps1, temps2));


// challenge 1

const temps = [17, 21, 23];

const printForecast = (temps) => {
  let forecast = '';
  for (let i = 1; i <= temps.length; i++) {
    forecast += `${temps[i-1]}ºC in ${i} days \n`;
  }

  let reversedForecast = '';
  for (let i = forecast.length - 1; i >= 0; i--) {
    reversedForecast += forecast.charAt(i);
  }

  return reversedForecast;
}

console.log(printForecast(temps));
