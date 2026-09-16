let intentos = 0;

do {
  intentos++;

  console.log(`Intento ${intentos}: Ingresa tu contraseña`);
} while (intentos < 3);

console.log("Se agotaron los intentos");
