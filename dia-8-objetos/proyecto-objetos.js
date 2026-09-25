// Contexto: Una tienda necesita un sistema para gestionar sus productos.

let laptop = {
  nombre: "Laptop",
  precio: 1200,
  stock: 5,
};

let mouse = {
  nombre: "Mouse",
  precio: 25,
  stock: 20,
};

let teclado = {
  nombre: "Teclado",
  precio: 80,
  stock: 8,
};

console.log(`Producto: ${laptop.nombre}\n
  Precio: ${laptop.precio}\n
  Stock: ${laptop.stock}\n`);
console.log(`Producto: ${mouse.nombre}\n
  Precio: ${mouse.precio}\n
  Stock: ${mouse.stock}\n`);
console.log(`Producto: ${teclado.nombre}\n
  Precio: ${teclado.precio}\n
  Stock: ${teclado.stock}`);

let total =
  laptop.precio * laptop.stock +
  mouse.precio * mouse.stock +
  teclado.precio * teclado.stock;

console.log(`Valor total del inventario: ${total}`);
