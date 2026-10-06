let tareas = ["corres", "dormir", "trabajar"];

tareas.push("comer");
tareas.unshift("bailar");
console.log(tareas);

tareas.pop();

console.log(tareas);
console.log(tareas.length);

let carrito = [];
carrito.push("Laptop");
carrito.push("Mouse");
carrito.push("Teclado");

console.log(`Carrito: ${carrito}`);
console.log(`Total de productos: ${carrito.length}`);

carrito.pop();
console.log(`Carrito: ${carrito}`);
console.log(`Total de productos: ${carrito.length}`);

carrito.unshift("cpu");
console.log(`Carrito: ${carrito}`);
console.log(`Total de productos: ${carrito.length}`);
