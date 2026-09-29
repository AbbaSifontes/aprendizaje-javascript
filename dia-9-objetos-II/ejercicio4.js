// Contexto: Una calculadora completa.

let calculadora = {
  marca: "Casio",
  sumar: function (a, b) {
    return a + b;
  },
  restar: function (a, b) {
    return a - b;
  },
  multiplicar: function (a, b) {
    return a * b;
  },
};

let suma = calculadora.sumar(10, 5);
let resta = calculadora.restar(10, 5);
let multiplicar = calculadora.multiplicar(10, 5);

console.log(`Suma: ${suma}\n Resta: ${resta}\n Multiplicacion: ${multiplicar}`);
