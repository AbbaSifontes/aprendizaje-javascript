function sumarArray(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}

let resultado = sumarArray([10, 20, 30, 40, 50]);

console.log(resultado);
