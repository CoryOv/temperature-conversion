//this constant variable kelvin is assigned a number.
const kelvin = 42069;
console.log('The temperature is ' + kelvin + ' degrees Kelvin.');

//the constant variable celsius is assigned the value of kelvin minus 273.
const celsius = kelvin - 273;
console.log(`The temperature is ${celsius} degrees Celsius.`);

//the variable fahrenheit is assigned the number from celsius and multiplied by 9/5 and 32 added.
let fahrenheit = celsius * (9 / 5) + 32;

//Math.floor is used to round down decimals which usually occur with this calculation. 
fahrenheit = Math.floor(fahrenheit);
console.log('The temperature is ' + fahrenheit + ' degree Fahrenheit.');

//using celsius to find the Newton scale instead.
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`)