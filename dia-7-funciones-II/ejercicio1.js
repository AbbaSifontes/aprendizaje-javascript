function contarPares(numeros) {
  let contador = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      contador++;
    }
  }
  return contador;
}

let resultado = contarPares([1, 2, 3, 4, 5, 6, 7, 8]);

console.log(resultado);
