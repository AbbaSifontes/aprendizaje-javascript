// EJERCICIO  – CLASIFICADOR DE TEMPERATURA

const temperatura = -1;

if (temperatura >= 0 && temperatura <= 10) {
  console.log("hace frio");
} else if (temperatura > 10 && temperatura <= 25) {
  console.log("temperatura agradable");
} else if (temperatura > 25) {
  console.log("Hace Calor");
} else {
  console.log("Temperatura bajo cero");
}
