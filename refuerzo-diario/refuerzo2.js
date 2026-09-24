function contarNegativos(numeros) {
  let contador = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < 0) {
      contador++;
    }
  }
  return contador;
}

let negativos = contarNegativos([5, -3, 8, -1, 0, -7]);

console.log(negativos);
