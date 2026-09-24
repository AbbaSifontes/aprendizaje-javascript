// Contexto: Un profesor necesita un sistema que calcule estadísticas de un array de notas.

let notas = [40, 50, 70, 79, 99, 76];

function calcularPromedio(notas) {
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }
  return suma / notas.length;
}
function encontrarMayor(notas) {
  let mayor = 0;
  for (let i = 0; i < notas.length; i++) {
    if (mayor < notas[i]) {
      mayor = notas[i];
    }
  }
  return mayor;
}

function encontrarMenor(notas) {
  let menor = 999;
  for (let i = 0; i < notas.length; i++) {
    if (menor > notas[i]) {
      menor = notas[i];
    }
  }
  return menor;
}

function contarAprobados(notas) {
  let aprobados = 0;
  for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 70) {
      aprobados++;
    }
  }
  return aprobados;
}
let promedio = calcularPromedio(notas);
let mayor = encontrarMayor(notas);
let menor = encontrarMenor(notas);
let aprobados = contarAprobados(notas);

console.log(`=== ESTADÍSTICAS ===\n
Promedio: ${promedio}\n
Nota más alta: ${mayor}\n
Nota más baja: ${menor}\n
Aprobados: ${aprobados}\n`);
