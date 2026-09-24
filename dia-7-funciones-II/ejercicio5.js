// Contexto: Un profesor necesita un sistema que calcule el promedio de un array de notas y determine si el estudiante aprueba o reprueba.

function evaluarEstudiante(notas) {
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }
  let promedio = suma / notas.length;
  if (promedio >= 70) {
    return "aprobado";
  } else {
    return "reprobado";
  }
}

let resultado = evaluarEstudiante([60, 50, 40, 30]);

console.log(resultado);
