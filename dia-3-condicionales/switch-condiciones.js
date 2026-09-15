// EJERCICIO 3
// Contexto: Crea un switch (true) que use condiciones para clasificar una nota.

const nota = 100;

switch (true) {
  case nota >= 90 && nota >= 100:
    console.log("Sobresaliente");
    if (nota === 100) {
      console.log("Perfecto");
    }
    break;
  case nota >= 70 && nota < 90:
    console.log("Notable");
    break;
  case nota >= 50 && nota < 70:
    console.log("Aprobado");
    break;
  case nota < 50:
    console.log("Suspenso");
    break;

  default:
    console.log("Nota no válida");
}
