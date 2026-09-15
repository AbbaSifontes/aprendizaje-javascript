// PROYECTO DEL DÍA 3 –
// Contexto: Un sistema necesita clasificar a las personas en diferentes categorías de edad.

const edad = 101;

if (edad >= 0 && edad <= 12) {
  console.log("Niño");
} else if (edad > 12 && edad <= 17) {
  console.log("Adolescente");
} else if (edad > 17 && edad <= 59) {
  console.log("Adulto");
} else if (edad > 59 && edad <= 100) {
  console.log("Anciano");
} else if (edad > 100) {
  console.log("Edad Fuera de rango");
} else {
  console.log("Edad no valida");
}
