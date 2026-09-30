let lista = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 50 },
  { nombre: "Teclado", precio: 40 },
  { nombre: "Cpu", precio: 800 },
];
console.log("Productos caros:");

for (let i = 0; i < lista.length; i++) {
  if (lista[i].precio > 100) {
    console.log(`${lista[i].nombre}: $${lista[i].precio}`);
  }
}
