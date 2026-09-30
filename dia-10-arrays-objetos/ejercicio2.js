// Contexto: Una tienda necesita calcular el valor total de su inventario.
let lista = [
  { nombre: "Laptop", precio: 1200, stock: 10 },
  { nombre: "mouse", precio: 25, stock: 25 },
  { nombre: "Teclado", precio: 80, stock: 10 },
];
function calcularTotal(lista) {
  let total = 0;

  for (let i = 0; i < lista.length; i++) {
    total += lista[i].precio * lista[i].stock;
  }
  return total;
}

let resultado = calcularTotal(lista);
console.log(`Valor total de mi inventario: ${resultado}`);
