// Contexto: Una tienda tiene una lista de productos.
let lista = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "mouse", precio: 25 },
  { nombre: "Teclado", precio: 80 },
];

for (let i = 0; i < lista.length; i++) {
  console.log(`${lista[i].nombre}: $${lista[i].precio}`);
}
