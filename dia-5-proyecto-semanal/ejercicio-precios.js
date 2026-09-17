// Contexto: Una tienda necesita calcular el total de una compra y el promedio de precios de los productos.

let precios = [15, 25, 10, 30, 20];
let total = 0;
let cantidad = 0;

for (let i = 0; i < precios.length; i++) {
  total += precios[i];
  cantidad++;
}

let promedio = total / cantidad;

console.log(`Total: ${total}, Cantidad: ${cantidad}, Promedio: ${promedio}`);

if (promedio > 20) {
  console.log("Promedio alto");
} else {
  console.log("Promedio normal");
}
