// PROYECTO DEL DÍA 1 Contexto: Tienda de electrónicos.
// Instrucciones (escribe el código ENTERO desde cero en VS Code):
// Declara las siguientes variables:
// nombreProducto (texto)
// precio (número)
// cantidad (número)
// disponible (booleano)
// IVA (constante con valor 0.16)
// codigoProducto (usa Symbol para crearlo)

// Muestra en consola el mensaje:
// "Producto: [nombre], Precio: $[precio], Stock: [cantidad], Disponible: [true/false], IVA: [IVA], Código: [Symbol]"
// Desafío: Usa typeof para mostrar el tipo de cada variable en consola.

let nombre = "Laptop";
let precio = 1200;
let cantidad = 90;
let disponible = true;
const IVA = 0.16;
let codigoProducto = Symbol("0000109000");

console.log(
  `Producto: ${nombre}, Precio: ${precio}, Stock: ${cantidad}, Disponible: ${disponible}, IVA: ${IVA}, Codigo: ${String(codigoProducto)}`,
);

console.log(typeof nombre);
console.log(typeof precio);
console.log(typeof cantidad);
console.log(typeof disponible);
console.log(typeof IVA);
console.log(typeof codigoProducto);
