const convertToCelsius = function(f) {
  let celisus = (f - 32) * 5/9
  return +`${celisus.toFixed(1)}`
};

const convertToFahrenheit = function(c) {
  let Fahrenheit = (c * (9/5)) + 32 
    return +`${Fahrenheit.toFixed(1)}`
};
console.log(


  convertToFahrenheit(32),
  convertToCelsius(100)
);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
