// Contexto: Una tienda de electrónicos necesita un sistema completo para gestionar su inventario.

let inventario = [
  { nombre: "Laptop", precio: 1200, stock: 2 },
  { nombre: "Mouse", precio: 12, stock: 250 },
  { nombre: "Teclado", precio: 120, stock: 50 },
  { nombre: "Cpu", precio: 600, stock: 4 },
  { nombre: "Pantalla", precio: 100, stock: 60 },
];

let sistema = {
  mostrarInventario: function () {
    for (let i = 0; i < inventario.length; i++) {
      console.log(
        `${inventario[i].nombre}: $${inventario[i].precio} - Stock: ${inventario[i].stock}`,
      );
    }
  },
  calcularTotal: function () {
    let total = 0;
    for (let i = 0; i < inventario.length; i++) {
      total += inventario[i].precio * inventario[i].stock;
    }
    return total;
  },
  contarStockBajo: function () {
    let contador = 0;
    for (let i = 0; i < inventario.length; i++) {
      if (inventario[i].stock < 10) {
        contador++;
      }
    }
    return contador;
  },
  buscarProducto: function (nombre) {
    for (let i = 0; i < inventario.length; i++) {
      if (inventario[i].nombre === nombre) {
        return `${inventario[i].nombre} - ${inventario[i].precio}`;
      }
    }
    return null;
  },
};

sistema.mostrarInventario();
let resultadoTotal = sistema.calcularTotal();
console.log(`Total del inventario: ${resultadoTotal}`);
let contarStockBajo = sistema.contarStockBajo();
console.log(`Productos con stock bajo: ${contarStockBajo}`);

let resultado = sistema.buscarProducto("Teclado");

console.log(`producto encontrado: ${resultado}`);
