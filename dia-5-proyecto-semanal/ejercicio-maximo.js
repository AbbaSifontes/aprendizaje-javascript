// Contexto: Encontrar el número más grande de un array.

let numeros = [10, 45, 22, 8];
let maximo = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > maximo) {
    maximo = numeros[i];
  }
}
console.log(`El número más grande es: ${maximo}`);
