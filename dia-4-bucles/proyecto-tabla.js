// PROYECTO DEL DÍA 4
// Contexto: Una escuela necesita una herramienta que genere la tabla de multiplicar de cualquier número.

const numero = 7;

if (numero < 0) {
  console.log("El numero debe ser positivo");
} else {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} * ${i} = ${resultado}`);
  }
}
