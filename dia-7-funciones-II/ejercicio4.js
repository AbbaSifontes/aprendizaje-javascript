// Concepto: Función que recibe un array y devuelve un resultado.

// Contexto: Un sistema de ventas necesita calcular el total de una compra.

function calcularTotal(precios) {
  let suma = 0;
  for (let i = 0; i < precios.length; i++) {
    suma += precios[i];
  }
  if (suma > 200) {
    suma = suma - suma * 0.1;
  }

  return suma;
}

let resultado = calcularTotal([100, 50, 25, 75]);

console.log(resultado);
