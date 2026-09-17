let dolares = 100;
let tasa = 45;
const tasaFavorable = 40;
let bolivares;

bolivares = tasa * dolares;

console.log(
  `=== CONVERSOR DE MONEDAS===\nDolares: ${dolares}\nTasa: ${tasa}\nBolivares:${bolivares}`,
);
if (tasa < tasaFavorable) {
  console.log("¡Tasa favorable para comprar!\n");
}
let suma = 0;
let contador = 0;

for (let i = 30; i <= 50; i += 5) {
  let bolivares = i * dolares;
  console.log(`${dolares} * ${i} = ${bolivares}bolivares`);
  suma += bolivares;
  contador++;
}

let promedio = suma / contador;
console.log(
  `promedio de conversiones ${promedio} numero de iteraciones ${contador}`,
);
