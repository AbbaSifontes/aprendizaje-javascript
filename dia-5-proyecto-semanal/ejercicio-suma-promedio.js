// Contexto: Suma los números [5, 10, 15, 20] y calcula el promedio.
let numeros = [5, 10, 15, 20];

let contador = 0;
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
  contador += 1;
}

let promedio = suma / contador;

console.log(`suma: ${suma} contador: ${contador} promedio: ${promedio}`);
