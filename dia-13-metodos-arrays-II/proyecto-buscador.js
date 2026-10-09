// Contexto: Una tienda necesita un buscador de productos.

let productos = [
  { nombre: "laptop", precio: 1200 },
  { nombre: "teclado", precio: 900 },
  { nombre: "mouse", precio: 600 },
  { nombre: "cpu", precio: 500 },
];

let laptop = productos.find(function (a) {
  return a.nombre === "laptop";
});

console.log(`producto encontrado: ${laptop.nombre}- ${laptop.precio}`);

let tablet = productos.find(function (z) {
  return z.nombre === "tablet";
});
if (tablet === undefined) {
  console.log("producto no encontrado");
} else {
  console.log(tablet.nombre);
}

let mouse = productos.find(function (f) {
  return f.nombre === "mouse";
});

console.log(`producto encontrado: ${mouse.nombre}-${mouse.precio}`);
