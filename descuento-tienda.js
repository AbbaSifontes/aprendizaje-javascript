let precioOriginal = 120;
let ahorro = 0;
let precioFinal = 0;
const descuentoEstandar = 0.15;
const descuestoEspecial = 0.2;

if (precioOriginal > 100) {
  ahorro = precioOriginal * descuestoEspecial;
} else {
  ahorro = precioOriginal * descuentoEstandar;
}
let porcentajeAplicado = (ahorro / precioOriginal) * 100;

precioFinal = precioOriginal - ahorro;

console.log(
  `Precio original: ${precioOriginal}\nDescuento aplicado: ${porcentajeAplicado}%\n Ahorro: ${ahorro}\n Precio final: ${precioFinal}`,
);

if (precioFinal < 50) {
  console.log("¡Precio final por debajo de $50!");
}
