// EJERCICIO 3 – VALIDADOR DE ACCESO CON LÓGICA
// Contexto: Un sistema de seguridad requiere que el usuario tenga edad, licencia y no esté sancionado.

let edad = 20;
let tieneLicencia = true;
let estaSancionado = false;

let puedeConducir = edad >= 18 && tieneLicencia && !estaSancionado;

console.log("puede conducir:", puedeConducir);
