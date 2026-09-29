let coche = {
  marca: "honda",
  modelo: "Civic",
  ano: 2020,
  color: "Rojo",
};

for (let propiedad in coche) {
  console.log(`${propiedad}: ${coche[propiedad]}`);
}
