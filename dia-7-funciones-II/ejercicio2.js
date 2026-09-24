function encontrarMayor(numeros) {
  let mayor = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  return mayor;
}

let resultado = encontrarMayor([10, 45, 22, 8]);

console.log(resultado);
