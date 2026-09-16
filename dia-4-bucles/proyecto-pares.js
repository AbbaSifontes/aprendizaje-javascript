// Contexto: Un profesor necesita contar cuántos números pares hay entre el 1 y el 20.

let contadorPares = 0;

for (let numero = 1; numero <= 20; numero++) {
  if (numero % 2 === 0) {
    contadorPares++;
  }
}
console.log(`Cantidad de números pares entre 1 y 20: ${contadorPares}`);
