let celsius = -25;
let fahrenheit = (celsius * 9) / 5 + 32;
let kelvin = celsius + 273.15;

let f = Math.round(fahrenheit * 100) / 100;
let k = Math.round(kelvin * 100) / 100;
console.log(
  `temperatura en Celsius: ${celsius}°C\nEquivale a: ${f} F\n Equivale a: ${k}K`,
);

if (celsius < 0) {
  console.log("¡Temperatura bajo cero!");
}
