// Contexto: Un gimnasio necesita analizar los pesos de 8 clientes.

let pesos = [70, 85, 60, 95, 75, 55, 80, 90];
let pesoTotal = 0;
let pesoMaximo = 0;
let pesoMinimo = 999;
let contador = 0;

for (let i = 0; i < pesos.length; i++) {
  pesoTotal += pesos[i];
  if (pesoMaximo < pesos[i]) {
    pesoMaximo = pesos[i];
  }
  if (pesoMinimo > pesos[i]) {
    pesoMinimo = pesos[i];
  }
  if (pesos[i] > 75) {
    contador++;
  }
}

let promedio = pesoTotal / pesos.length;

Math.round(promedio * 100) / 100;

console.log(`=== ANÁLISIS DE PESOS ===
\n Total: ${pesoTotal}\nPromedio: ${promedio}\nPeso máximo: ${pesoMaximo}\nPeso mínimo: ${pesoMinimo}\nClientes con más de 75 kg: ${contador}`);
if (promedio < 65) {
  console.log("Clasificacion: Promedio bajo");
} else if (promedio > 65 && promedio <= 80) {
  console.log("Clasificacion: Promedio normal");
} else {
  console.log("Clasificacion: Promedio alto");
}

switch (true) {
  case promedio > 80:
    console.log("¡Alto!");
    break;
  case promedio > 65 && promedio <= 80:
    console.log("¡Normal!");
    break;
  default:
    console.log("¡Bajo!");
}
