let animales = [
  { nombre: "Firulais", especie: "Perro", edad: 3 },
  { nombre: "Michi", especie: "Gato", edad: 2 },
  { nombre: "Rocky", especie: "Perro", edad: 5 },
];

let perro = animales.find(function (p) {
  return p.especie === "Perro";
});

console.log(`${perro.nombre} tiene ${perro.edad} años`);
