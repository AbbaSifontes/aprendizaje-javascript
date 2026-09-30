// Contexto: Una tienda necesita un sistema para gestionar su inventario.

let inventario = [
  { nombre: "Cocina", precio: 250, stock: 8 },
  { nombre: "Nevera", precio: 599, stock: 40 },
  { nombre: "Cama", precio: 150, stock: 25 },
  { nombre: "Televisor", precio: 400, stock: 2 },
];
let total = 0;
let contadorBajo = 0;
for (let i = 0; i < inventario.length; i++) {
  console.log(
    `${inventario[i].nombre}: $${inventario[i].precio} - Stock: ${inventario[i].stock}`,
  );

  total += inventario[i].precio * inventario[i].stock;

  if (inventario[i].stock < 10) {
    contadorBajo++;
  }
}

console.log(`=== RESUMEN DEL INVENTARIO ===
Total de productos: ${inventario.length}
Valor total del inventario: $${total}
Productos con stock bajo: ${contadorBajo}`);
