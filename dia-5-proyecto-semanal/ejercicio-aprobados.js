// Contexto: Un profesor tiene las notas de 8 estudiantes y necesita saber cuántos aprobaron, cuántos reprobaron y el promedio del curso.

let notas = [85, 45, 70, 90, 60, 55, 75, 100];

let aprobados = 0;
let reprobados = 0;
let suma = 0;

for (let i = 0; i < notas.length; i++) {
  suma += notas[i];
  if (notas[i] >= 70) {
    aprobados++;
  }
  if (notas[i] < 70) {
    reprobados++;
  }
}

let promedio = suma / notas.length;
promedio = Math.round(promedio * 100) / 100;

console.log(`=== REPORTE DEL CURSO ===
\n Total de estudiantes: ${notas.length}\n aprobados: ${aprobados}\n Reprobados: ${reprobados}\n Promedio del curso: ${promedio}`);
