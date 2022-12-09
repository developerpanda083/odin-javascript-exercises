// converts farenheit to celsius, rounded to 1 decimal place
const convertToCelsius = function(tempF) {
  let Faren = (5/9) * (tempF - 32);
  let roundFaren = Math.round(Faren * 10) / 10;
  return roundFaren
};

// converts celsius to farenheit, rounded to 1 decimal place
const convertToFahrenheit = function(tempC) {
  let Celc = ((9/5) * tempC) + 32;
  let roundCelc = Math.round(Celc * 10) / 10;
  return roundCelc
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
