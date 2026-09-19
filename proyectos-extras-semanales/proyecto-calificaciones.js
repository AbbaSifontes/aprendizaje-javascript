// Contexto: Un profesor tiene las notas de 10 estudiantes. Necesita un sistema que genere un reporte completo con clasificación individual y general.

let notas = [40, 60, 85, 76, 65, 25, 54, 45, 42, 45];
let sumaNotas = 0;
let notaMaxima = 0;
let notaMinima = 999;
let excelentes = 0;
let buenos = 0;
let regulares = 0;
let deficientes = 0;

for (let i = 0; i < notas.length; i++) {
  sumaNotas += notas[i];
  if (notaMaxima < notas[i]) {
    notaMaxima = notas[i];
  }
  if (notaMinima > notas[i]) {
    notaMinima = notas[i];
  }

  if (notas[i] >= 90) {
    excelentes++;
    console.log(`nota ${notas[i]} es: Excelente`);
  } else if (notas[i] >= 70 && notas[i] <= 89) {
    buenos++;
    console.log(`nota ${notas[i]} es: Buena`);
  } else if (notas[i] > 50 && notas[i] <= 69) {
    regulares++;
    console.log(`nota ${notas[i]} es: Regulares`);
  } else {
    deficientes++;
    console.log(`nota ${notas[i]} es: Deficiente`);
  }
}

let promedio = sumaNotas / notas.length;
promedio = Math.round(promedio * 100) / 100;

console.log(
  `=== REPORTE DE CALIFICACIONES ===\nPromedio: ${promedio}\nNota máxima: ${notaMaxima}\nNota mínima: ${notaMinima}\nExcelentes: ${excelentes}\nBuenos: ${buenos}\nRegulares: ${regulares}\nDeficientes: ${deficientes}`,
);
switch (true) {
  case promedio > 90:
    console.log("El grupo es excelente");
    break;
  case promedio >= 70:
    console.log("El grupo es bueno");
    break;
  case promedio >= 50:
    console.log("El grupo es regular");
    break;
  default:
    console.log("El grupo es deficiente");
}
