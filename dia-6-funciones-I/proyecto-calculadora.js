function sumar(a, b) {
  return a + b;
}
function restar(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  return a / b;
}

let suma = sumar(10, 5);
console.log(`Suma: ${suma}`);
let resta = restar(10, 5);
console.log(`Restar: ${resta}`);
let multiplicacion = multiplicar(10, 5);
console.log(`Multiplicacion: ${multiplicacion}`);
let division = dividir(10, 5);
console.log(`Division: ${division}`);

function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
let par = esPar(suma);
console.log(`el numero es par: ${par}`);
