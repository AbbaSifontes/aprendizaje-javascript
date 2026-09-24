function encontrarMenor(numeros) {
  let menor = 999;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }
  return menor;
}

let resultado = encontrarMenor([10, 45, 22, 8]);

console.log(resultado);
